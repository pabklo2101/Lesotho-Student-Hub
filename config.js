// ============================================================
// CENTRALIZED APP CONFIGURATION
// ============================================================

// Supabase Configuration - No Auth Required (Public Keys)
export const SUPABASE_CONFIG = {
  URL: 'https://uiypxstgermlmvf.supabase.co',
  ANON_KEY: 'sb_publishable_m9V4NOJ_jgOUaECQkOl7nw_VZyqyUvi',
  // Using public API keys - no authentication needed for read/write to public tables
};

// App Configuration
export const APP_CONFIG = {
  APP_NAME: 'Lesotho Student Hub',
  VERSION: '2.0.0',
  MAX_USERS: 10000,
  FEATURES: {
    REALTIME_CHAT: true,
    PROGRESS_TRACKING: true,
    AI_TUTORING: true,
    OFFLINE_MODE: true,
    DARK_MODE: true,
    NOTIFICATIONS: true,
  },
};

// Database Table Names (for easy reference)
export const TABLES = {
  PROFILES: 'profiles',
  STUDY_PROGRESS: 'study_progress',
  QUIZ_RESULTS: 'quiz_results',
  DISCUSSION_POSTS: 'discussion_posts',
  CHAT_MESSAGES: 'chat_messages',
  ACHIEVEMENTS: 'achievements',
  LEADERBOARD: 'leaderboard',
  RESOURCES: 'resources',
  DAILY_CHALLENGES: 'daily_challenges_submissions',
  STUDY_GROUPS: 'study_groups',
  NOTIFICATIONS: 'notifications',
};

// Real-Time Events
export const REALTIME_EVENTS = {
  NEW_MESSAGE: 'new_message',
  USER_ONLINE: 'user_online',
  QUIZ_COMPLETED: 'quiz_completed',
  ACHIEVEMENT_UNLOCKED: 'achievement_unlocked',
  LEADERBOARD_UPDATE: 'leaderboard_update',
  DISCUSSION_REPLY: 'discussion_reply',
};

// API Endpoints for External Services
export const API_ENDPOINTS = {
  WEATHER: 'https://api.open-meteo.com/v1/forecast',
  QUOTES: 'https://api.quotable.io/random',
  NEWS: 'https://newsapi.org/v2',
  UNIVERSITIES: 'https://universities.hipolabs.com/search',
};

// Feature Flags
export const FEATURE_FLAGS = {
  ENABLE_AI_TUTOR: true,
  ENABLE_LEADERBOARD: true,
  ENABLE_STUDY_GROUPS: true,
  ENABLE_LIVE_CLASSES: false, // Coming soon
  ENABLE_PEER_TUTORING: false, // Coming soon
};

// Performance Settings
export const PERFORMANCE = {
  CACHE_DURATION_MS: 5 * 60 * 1000, // 5 minutes
  DEBOUNCE_MS: 300,
  THROTTLE_MS: 500,
  MAX_CONCURRENT_REQUESTS: 5,
};

// Export initialized Supabase client factory
export function initSupabase() {
  const { createClient } = window.supabase;
  return createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);
}
