-- ============================================================
-- LESOTHO STUDENT HUB - SUPABASE DATABASE SCHEMA
-- ============================================================
-- This SQL creates all tables needed for the v2.0 platform
-- Works with public API keys (no auth required for app setup)

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE,
  avatar_url TEXT,
  bio TEXT,
  level INT DEFAULT 1,
  xp INT DEFAULT 0,
  streak_days INT DEFAULT 0,
  last_active TIMESTAMP DEFAULT now(),
  total_quizzes INT DEFAULT 0,
  total_study_hours FLOAT DEFAULT 0,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- 2. STUDY PROGRESS TABLE
CREATE TABLE IF NOT EXISTS study_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  topic TEXT NOT NULL,
  progress_percent FLOAT DEFAULT 0,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- 3. QUIZ RESULTS TABLE
CREATE TABLE IF NOT EXISTS quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  difficulty TEXT,
  score INT NOT NULL,
  total_questions INT NOT NULL,
  time_taken_seconds INT,
  passed BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);

-- 4. ACHIEVEMENTS TABLE
CREATE TABLE IF NOT EXISTS achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  achievement_name TEXT NOT NULL,
  description TEXT,
  badge_icon TEXT,
  points INT DEFAULT 10,
  unlocked_at TIMESTAMP DEFAULT now()
);

-- 5. LEADERBOARD TABLE (Auto-updated from profiles)
CREATE TABLE IF NOT EXISTS leaderboard (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  rank INT,
  total_xp INT DEFAULT 0,
  quizzes_completed INT DEFAULT 0,
  updated_at TIMESTAMP DEFAULT now()
);

-- 6. CHAT MESSAGES TABLE
CREATE TABLE IF NOT EXISTS chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  message_text TEXT NOT NULL,
  channel TEXT DEFAULT 'general',
  is_edited BOOLEAN DEFAULT false,
  edited_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT now()
);

-- 7. DISCUSSION POSTS TABLE
CREATE TABLE IF NOT EXISTS discussion_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  subject TEXT,
  views INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- 8. DISCUSSION REPLIES TABLE
CREATE TABLE IF NOT EXISTS discussion_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES discussion_posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  reply_text TEXT NOT NULL,
  likes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT now()
);

-- 9. RESOURCES TABLE
CREATE TABLE IF NOT EXISTS resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  subject TEXT NOT NULL,
  description TEXT,
  url TEXT NOT NULL,
  resource_type TEXT,
  uploaded_by UUID REFERENCES profiles(id),
  verified BOOLEAN DEFAULT false,
  rating FLOAT DEFAULT 0,
  downloads INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT now()
);

-- 10. DAILY CHALLENGES TABLE
CREATE TABLE IF NOT EXISTS daily_challenges_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  challenge_date DATE NOT NULL,
  completed BOOLEAN DEFAULT false,
  answer_chosen INT,
  correct BOOLEAN,
  xp_earned INT DEFAULT 0,
  submitted_at TIMESTAMP DEFAULT now()
);

-- 11. STUDY GROUPS TABLE
CREATE TABLE IF NOT EXISTS study_groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_name TEXT NOT NULL,
  description TEXT,
  subject TEXT,
  creator_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  member_count INT DEFAULT 1,
  created_at TIMESTAMP DEFAULT now()
);

-- 12. STUDY GROUP MEMBERS TABLE
CREATE TABLE IF NOT EXISTS study_group_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID NOT NULL REFERENCES study_groups(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  joined_at TIMESTAMP DEFAULT now(),
  UNIQUE(group_id, user_id)
);

-- 13. NOTIFICATIONS TABLE
CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  notification_type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT,
  related_id UUID,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);

-- 14. BROKEN LINKS REPORTS TABLE
CREATE TABLE IF NOT EXISTS broken_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  resource_id UUID REFERENCES resources(id),
  reported_by UUID REFERENCES profiles(id),
  resource_title TEXT,
  resource_url TEXT,
  reason TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT now()
);

-- 15. USER PREFERENCES TABLE
CREATE TABLE IF NOT EXISTS user_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES profiles(id) ON DELETE CASCADE,
  theme TEXT DEFAULT 'light',
  notifications_enabled BOOLEAN DEFAULT true,
  email_notifications BOOLEAN DEFAULT true,
  language TEXT DEFAULT 'en',
  preferred_subjects TEXT[], -- Array of subjects
  updated_at TIMESTAMP DEFAULT now()
);

-- Enable RLS (Row Level Security) - OPTIONAL (for security)
-- Users can only access their own data
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_challenges_submissions ENABLE ROW LEVEL SECURITY;

-- Create indexes for performance
CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_study_progress_user ON study_progress(user_id);
CREATE INDEX idx_quiz_results_user ON quiz_results(user_id);
CREATE INDEX idx_chat_messages_channel ON chat_messages(channel);
CREATE INDEX idx_discussion_posts_subject ON discussion_posts(subject);
CREATE INDEX idx_resources_subject ON resources(subject);
CREATE INDEX idx_notifications_user ON notifications(user_id);
CREATE INDEX idx_notifications_read ON notifications(read);

-- Create views for easy querying
CREATE VIEW user_stats AS
SELECT 
  p.id,
  p.username,
  p.level,
  p.xp,
  COUNT(DISTINCT qr.id) as total_quizzes,
  AVG(qr.score::float / qr.total_questions) as avg_score,
  COUNT(DISTINCT a.id) as total_achievements
FROM profiles p
LEFT JOIN quiz_results qr ON p.id = qr.user_id
LEFT JOIN achievements a ON p.id = a.user_id
GROUP BY p.id, p.username, p.level, p.xp;

-- Run this to view the schema:
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
