export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['عمل عظيم!', 'مدهش', 'أحسنت!']
export const GAME_COPIED_MESSAGE = 'تم نسخ اللعبة إلى الحافظة'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'لا توجد أحرف كافية'
export const WORD_NOT_FOUND_MESSAGE = 'الكلمة ليسة موجودة'
export const HARD_MODE_ALERT_MESSAGE =
  'لا يمكن تمكين الوضع الصعب إلا في البداية!'
export const HARD_MODE_DESCRIPTION =
  'يجب استخدام أي تلميحات تم الكشف عنها في التخمينات اللاحقة '
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'لتحسين رؤية الألوان'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `الاجابة كانت: ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `يجب استخدامها ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `يجب أن يحتوي التخمين ${letter}`
export const ENTER_TEXT = '↩'
export const DELETE_TEXT = 'مسح'
export const STATISTICS_TITLE = 'إحصائيات'
export const GUESS_DISTRIBUTION_TEXT = 'توزيع التخمين '
export const NEW_WORD_TEXT = 'الكلمة جديدة القادمة'
export const SHARE_TEXT = 'شارك النتيجة'
export const TOTAL_TRIES_TEXT = ' المحاولات'
export const SUCCESS_RATE_TEXT = 'معدل النجاح'
export const CURRENT_STREAK_TEXT = 'العلامة الحالية '
export const BEST_STREAK_TEXT = 'أفضل نتيجة'
