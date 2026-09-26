// ============================================================================
// KẾ HOẠCH GIÁO DỤC KHỐI 1 - NĂM HỌC 2026 - 2027 (KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
// Chuẩn Công văn 2345/BGDĐT, CV 3456/BGDĐT (Khung năng lực số) & Tích hợp AI, QCN, QPAN, STEM
// ============================================================================

export interface Grade1LessonItem {
  title: string;
  sub?: string;
  period: number;
  integ?: string;
}

// 1. MÔN TIẾNG VIỆT (420 tiết / 35 tuần, 12 tiết/tuần)
export const GRADE_1_TIENG_VIET: Record<number, Grade1LessonItem[]> = {
  1: [
    { title: "Làm quen với trường lớp, bạn bè, đồ dùng học tập - Tiết 1", sub: "Làm quen", period: 1, integ: "Quyền con người: Nhận biết quyền được học tập, vui chơi, kết bạn trong môi trường an toàn; biết tôn trọng thầy cô và bạn bè. | Kĩ năng sống: Rèn kĩ năng chào hỏi, giới thiệu bản thân, giữ gìn đồ dùng học tập và thực hiện nền nếp lớp học." },
    { title: "Làm quen với trường lớp, bạn bè, đồ dùng học tập - Tiết 2", sub: "Làm quen", period: 2 },
    { title: "Làm quen với tư thế đọc viết nói nghe - Tiết 1", sub: "Làm quen", period: 3, integ: "Kĩ năng sống: Rèn kĩ năng tự điều chỉnh tư thế đọc, viết, nói, nghe; giữ khoảng cách mắt - vở phù hợp và biết nhắc bạn cùng thực hiện. | Quyền con người: Giáo dục quyền được chăm sóc sức khỏe và học tập trong điều kiện an toàn." },
    { title: "Làm quen với tư thế đọc viết nói nghe - Tiết 2", sub: "Làm quen", period: 4 },
    { title: "Làm quen với các nét cơ bản, các chữ số, bảng chữ cái, dấu thanh - Tiết 1", sub: "Làm quen", period: 5 },
    { title: "Làm quen với các nét cơ bản, các chữ số, bảng chữ cái, dấu thanh - Tiết 2", sub: "Làm quen", period: 6 },
    { title: "Làm quen với các nét cơ bản, các chữ số, bảng chữ cái, dấu thanh - Tiết 3", sub: "Làm quen", period: 7 },
    { title: "Làm quen với các nét cơ bản, các chữ số, bảng chữ cái, dấu thanh - Tiết 4", sub: "Làm quen", period: 8 },
    { title: "Làm quen với các nét cơ bản, các chữ số, bảng chữ cái, dấu thanh - Tiết 5", sub: "Làm quen", period: 9 },
    { title: "Làm quen với các nét cơ bản, các chữ số, bảng chữ cái, dấu thanh - Tiết 6", sub: "Làm quen", period: 10 },
    { title: "Ôn luyện viết các nét cơ bản, đọc âm - Tiết 1", sub: "Ôn luyện", period: 11 },
    { title: "Ôn luyện viết các nét cơ bản, đọc âm - Tiết 2", sub: "Ôn luyện", period: 12 }
  ],
  2: [
    { title: "Bài 1: A a - Tiết 1", sub: "Âm vần", period: 13 },
    { title: "Bài 1: A a - Tiết 2", sub: "Âm vần", period: 14 },
    { title: "Bài 2: B b - Tiết 1", sub: "Âm vần", period: 15 },
    { title: "Bài 2: B b - Tiết 2", sub: "Âm vần", period: 16 },
    { title: "Bài 3: C c / - Tiết 1", sub: "Âm vần", period: 17 },
    { title: "Bài 3: C c / - Tiết 2", sub: "Âm vần", period: 18 },
    { title: "Bài 4: E e Ê ê - Tiết 1", sub: "Âm vần", period: 19 },
    { title: "Bài 4: E e Ê ê - Tiết 2", sub: "Âm vần", period: 20 },
    { title: "Bài 5: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 21 },
    { title: "Bài 5: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 22, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua truyện “Búp bê và dế mèn”, giáo dục HS biết tự giác giúp đỡ việc nhà phù hợp với khả năng; biết yêu thương và chia sẻ công việc với người thân." },
    { title: "Ôn luyện tuần 1 - Tiết 1", sub: "Ôn luyện", period: 23 },
    { title: "Ôn luyện tuần 1 - Tiết 2", sub: "Ôn luyện", period: 24 }
  ],
  3: [
    { title: "Bài 6: O o ? - Tiết 1", sub: "Âm vần", period: 25 },
    { title: "Bài 6: O o ? - Tiết 2", sub: "Âm vần", period: 26 },
    { title: "Bài 7: Ô ô ~ - Tiết 1", sub: "Âm vần", period: 27, integ: "Kĩ năng sống/ATGT: Biết đi bộ trên vỉa hè, đi sát lề đường khi không có vỉa hè và quan sát an toàn khi tham gia giao thông." },
    { title: "Bài 7: Ô ô ~ - Tiết 2", sub: "Âm vần", period: 28 },
    { title: "Bài 8: D d Đ đ - Tiết 1", sub: "Âm vần", period: 29 },
    { title: "Bài 8: D d Đ đ - Tiết 2", sub: "Âm vần", period: 30 },
    { title: "Bài 9: Ơ ơ . - Tiết 1", sub: "Âm vần", period: 31, integ: "Bảo vệ môi trường: Qua tranh và vốn từ về biển, giáo dục HS yêu cảnh đẹp biển, không xả rác và biết giữ môi trường biển sạch đẹp." },
    { title: "Bài 9: Ơ ơ . - Tiết 2", sub: "Âm vần", period: 32 },
    { title: "Bài 10: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 33 },
    { title: "Bài 10: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 34, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua truyện “Đàn kiến con ngoan ngoãn”, giáo dục HS biết quan tâm, lễ phép, sẵn sàng giúp đỡ người khác và đoàn kết với bạn bè." },
    { title: "Ôn luyện tuần 2 - Tiết 1", sub: "Ôn luyện", period: 35 },
    { title: "Ôn luyện tuần 2 - Tiết 2", sub: "Ôn luyện", period: 36 }
  ],
  4: [
    { title: "Bài 11: I i K k - Tiết 1", sub: "Âm vần", period: 37 },
    { title: "Bài 11: I i K k - Tiết 2", sub: "Âm vần", period: 38 },
    { title: "Bài 12: H h L l - Tiết 1", sub: "Âm vần", period: 39 },
    { title: "Bài 12: H h L l - Tiết 2", sub: "Âm vần", period: 40 },
    { title: "Bài 13: U u Ư ư - Tiết 1", sub: "Âm vần", period: 41 },
    { title: "Bài 13: U u Ư ư - Tiết 2", sub: "Âm vần", period: 42 },
    { title: "Bài 14: Ch ch Kh kh - Tiết 1", sub: "Âm vần", period: 43 },
    { title: "Bài 14: Ch ch Kh kh - Tiết 2", sub: "Âm vần", period: 44 },
    { title: "Bài 15: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 45 },
    { title: "Bài 15: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 46, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua truyện “Con quạ thông minh”, bồi dưỡng đức tính bình tĩnh, kiên trì, biết suy nghĩ để giải quyết khó khăn và dùng trí thông minh vào việc có ích." },
    { title: "Ôn luyện tuần 3 - Tiết 1", sub: "Ôn luyện", period: 47 },
    { title: "Ôn luyện tuần 3 - Tiết 2", sub: "Ôn luyện", period: 48 }
  ],
  5: [
    { title: "Bài 16: M m N n - Tiết 1", sub: "Âm vần", period: 49 },
    { title: "Bài 16: M m N n - Tiết 2", sub: "Âm vần", period: 50 },
    { title: "Bài 17: G g Gi gi - Tiết 1", sub: "Âm vần", period: 51, integ: "Tích hợp AI: 1.D1.1 - HS nêu được ví dụ AI học từ hình ảnh do con người cung cấp để nhận biết vật nuôi như gà, cá. Gợi ý: GV cho xem hình hoặc video ngắn minh họa ứng dụng phân loại con vật." },
    { title: "Bài 17: G g Gi gi - Tiết 2", sub: "Âm vần", period: 52 },
    { title: "Bài 18: Gh gh Nh nh - Tiết 1", sub: "Âm vần", period: 53 },
    { title: "Bài 18: Gh gh Nh nh - Tiết 2", sub: "Âm vần", period: 54 },
    { title: "Bài 19: Ng ng Ngh ngh - Tiết 1", sub: "Âm vần", period: 55 },
    { title: "Bài 19: Ng ng Ngh ngh - Tiết 2", sub: "Âm vần", period: 56, integ: "Bảo vệ môi trường: HS biết yêu quý động vật, không trêu chọc hoặc làm hại con vật; có ý thức bảo vệ môi trường sống của chúng." },
    { title: "Bài 20: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 57 },
    { title: "Bài 20: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 58, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua truyện “Cô chủ không biết quý tình bạn”, giáo dục HS biết trân trọng tình bạn, đối xử chân thành, không ích kỉ hoặc làm bạn buồn." },
    { title: "Ôn luyện tuần 4 - Tiết 1", sub: "Ôn luyện", period: 59 },
    { title: "Ôn luyện tuần 4 - Tiết 2", sub: "Ôn luyện", period: 60 }
  ],
  6: [
    { title: "Bài 21: R r S s - Tiết 1", sub: "Âm vần", period: 61 },
    { title: "Bài 21: R r S s - Tiết 2", sub: "Âm vần", period: 62 },
    { title: "Bài 22: T t Tr tr - Tiết 1", sub: "Âm vần", period: 63 },
    { title: "Bài 22: T t Tr tr - Tiết 2", sub: "Âm vần", period: 64, integ: "Bảo vệ môi trường: HS nhận biết vẻ đẹp của biển, biết giữ gìn cảnh quan sạch đẹp. | Quốc phòng và an ninh: Bồi dưỡng tình yêu quê hương, biết biển đảo là một phần thiêng liêng của Tổ quốc." },
    { title: "Bài 23: Th th ia - Tiết 1", sub: "Âm vần", period: 65 },
    { title: "Bài 23: Th th ia - Tiết 2", sub: "Âm vần", period: 66, integ: "Quốc phòng và an ninh: Qua hình ảnh Cột cờ Hà Nội hoặc Cột cờ Lũng Cú, giáo dục HS trân trọng biểu tượng của đất nước, bước đầu hình thành niềm tự hào dân tộc." },
    { title: "Bài 24: ua ưa - Tiết 1", sub: "Âm vần", period: 67 },
    { title: "Bài 24: ua ưa - Tiết 2", sub: "Âm vần", period: 68 },
    { title: "Bài 25: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 69 },
    { title: "Bài 25: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 70, integ: "Quyền con người: Qua truyện “Chó sói và cừu non”, giúp HS nhận biết trẻ em có quyền được bảo vệ an toàn, không bị bắt nạt hoặc đe dọa. | Kĩ năng sống: Biết tránh xa nguy hiểm và tìm sự giúp đỡ của người lớn đáng tin cậy khi gặp tình huống không an toàn." },
    { title: "Ôn luyện tuần 5 - Tiết 1", sub: "Ôn luyện", period: 71 },
    { title: "Ôn luyện tuần 5 - Tiết 2", sub: "Ôn luyện", period: 72 }
  ],
  7: [
    { title: "Bài 26: Ph ph Qu qu - Tiết 1", sub: "Âm vần", period: 73 },
    { title: "Bài 26: Ph ph Qu qu - Tiết 2", sub: "Âm vần", period: 74 },
    { title: "Bài 27: V v X x - Tiết 1", sub: "Âm vần", period: 75 },
    { title: "Bài 27: V v X x - Tiết 2", sub: "Âm vần", period: 76 },
    { title: "Bài 28: Y y - Tiết 1", sub: "Âm vần", period: 77 },
    { title: "Bài 28: Y y - Tiết 2", sub: "Âm vần", period: 78 },
    { title: "Bài 29: Luyện tập chính tả - Tiết 1", sub: "Chính tả", period: 79 },
    { title: "Bài 29: Luyện tập chính tả - Tiết 2", sub: "Chính tả", period: 80 },
    { title: "Bài 30: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 81 },
    { title: "Bài 30: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 82, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua truyện “Kiến và dế mèn”, giáo dục HS biết chăm chỉ học tập, làm việc vừa sức, không lười biếng và biết chuẩn bị cho những việc cần thiết." },
    { title: "Ôn luyện tuần 6 - Tiết 1", sub: "Ôn luyện", period: 83 },
    { title: "Ôn luyện tuần 6 - Tiết 2", sub: "Ôn luyện", period: 84 }
  ],
  8: [
    { title: "Bài 31: an ăn ân - Tiết 1", sub: "Âm vần", period: 85 },
    { title: "Bài 31: an ăn ân - Tiết 2", sub: "Âm vần", period: 86 },
    { title: "Bài 32: on ôn ơn - Tiết 1", sub: "Âm vần", period: 87 },
    { title: "Bài 32: on ôn ơn - Tiết 2", sub: "Âm vần", period: 88 },
    { title: "Bài 33: en ên in un - Tiết 1", sub: "Âm vần", period: 89 },
    { title: "Bài 33: en ên in un - Tiết 2", sub: "Âm vần", period: 90 },
    { title: "Bài 34: am ăm âm - Tiết 1", sub: "Âm vần", period: 91 },
    { title: "Bài 34: am ăm âm - Tiết 2", sub: "Âm vần", period: 92, integ: "Bảo vệ môi trường: HS biết giữ gìn nơi sống của các con vật; không vứt rác bừa bãi, biết chăm sóc cây và vật nuôi phù hợp." },
    { title: "Bài 35: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 93 },
    { title: "Bài 35: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 94, integ: "Quyền con người: Qua truyện “Dê con nghe lời mẹ”, giúp HS nhận biết quyền được chăm sóc, bảo vệ để sống an toàn. | Kĩ năng sống: Biết nghe lời dặn của cha mẹ, không tự ý mở cửa hoặc đi theo người lạ." },
    { title: "Ôn luyện tuần 7 - Tiết 1", sub: "Ôn luyện", period: 95 },
    { title: "Ôn luyện tuần 7 - Tiết 2", sub: "Ôn luyện", period: 96 }
  ],
  9: [
    { title: "Bài 36: om ôm ơm - Tiết 1", sub: "Âm vần", period: 97 },
    { title: "Bài 36: om ôm ơm - Tiết 2", sub: "Âm vần", period: 98 },
    { title: "Bài 37: em êm im um - Tiết 1", sub: "Âm vần", period: 99 },
    { title: "Bài 37: em êm im um - Tiết 2", sub: "Âm vần", period: 100 },
    { title: "Bài 38: ai ay ây - Tiết 1", sub: "Âm vần", period: 101 },
    { title: "Bài 38: ai ay ây - Tiết 2", sub: "Âm vần", period: 102 },
    { title: "Bài 39: oi ôi ơi - Tiết 1", sub: "Âm vần", period: 103 },
    { title: "Bài 39: oi ôi ơi - Tiết 2", sub: "Âm vần", period: 104 },
    { title: "Bài 40: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 105 },
    { title: "Bài 40: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 106, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua truyện “Hai người bạn và con gấu”, giáo dục HS sống đoàn kết, chân thành, không bỏ mặc bạn khi gặp khó khăn; biết giúp đỡ nhau trong khả năng." },
    { title: "Ôn luyện tuần 8 - Tiết 1", sub: "Ôn luyện", period: 107 },
    { title: "Ôn luyện tuần 8 - Tiết 2", sub: "Ôn luyện", period: 108 }
  ],
  10: [
    { title: "Bài 41: ui ưi - Tiết 1", sub: "Âm vần", period: 109 },
    { title: "Bài 41: ui ưi - Tiết 2", sub: "Âm vần", period: 110 },
    { title: "Bài 42: ao eo - Tiết 1", sub: "Âm vần", period: 111 },
    { title: "Bài 42: ao eo - Tiết 2", sub: "Âm vần", period: 112, integ: "Bảo vệ môi trường: Giáo dục HS yêu quý chim có ích, không bắt chim, không phá tổ; biết giữ môi trường xanh để chim sinh sống." },
    { title: "Bài 43: au âu êu - Tiết 1", sub: "Âm vần", period: 113 },
    { title: "Bài 43: au âu êu - Tiết 2", sub: "Âm vần", period: 114 },
    { title: "Bài 44: iu ưu - Tiết 1", sub: "Âm vần", period: 115 },
    { title: "Bài 44: iu ưu - Tiết 2", sub: "Âm vần", period: 116 },
    { title: "Bài 45: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 117 },
    { title: "Bài 45: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 118, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua truyện “Sự tích hoa cúc trắng”, giáo dục HS lòng hiếu thảo, biết yêu thương và quan tâm chăm sóc người thân. | Quyền con người: Giúp HS cảm nhận trẻ em có quyền được sống, lớn lên trong tình yêu thương và sự chăm sóc của gia đình." },
    { title: "Ôn luyện tuần 9 - Tiết 1", sub: "Ôn luyện", period: 119 },
    { title: "Ôn luyện tuần 9 - Tiết 2", sub: "Ôn luyện", period: 120 }
  ],
  11: [
    { title: "Bài 46: ac ăc âc - Tiết 1", sub: "Âm vần", period: 121, integ: "Quốc phòng và an ninh: Qua hình ảnh cảnh đẹp quê hương, giáo dục HS biết yêu quê hương, trân trọng và có ý thức giữ gìn cảnh quan đất nước." },
    { title: "Bài 46: ac ăc âc - Tiết 2", sub: "Âm vần", period: 122 },
    { title: "Bài 47: oc ôc uc ưc - Tiết 1", sub: "Âm vần", period: 123 },
    { title: "Bài 47: oc ôc uc ưc - Tiết 2", sub: "Âm vần", period: 124 },
    { title: "Bài 48: at ăt ât - Tiết 1", sub: "Âm vần", period: 125 },
    { title: "Bài 48: at ăt ât - Tiết 2", sub: "Âm vần", period: 126 },
    { title: "Bài 49: ot ôt ơt - Tiết 1", sub: "Âm vần", period: 127 },
    { title: "Bài 49: ot ôt ơt - Tiết 2", sub: "Âm vần", period: 128 },
    { title: "Bài 50: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 129 },
    { title: "Bài 50: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 130, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua truyện “Bài học đầu tiên của thỏ con”, giáo dục HS biết nói lời xin lỗi khi làm sai, cảm ơn khi được giúp đỡ. | Kĩ năng sống: Rèn cách ứng xử lễ phép. | Tích hợp AI: 1.A1.1 - HS nhận biết con người có cảm xúc thật; AI hoặc robot chỉ thể hiện lời nói, biểu cảm theo dữ liệu hay thiết kế của con người." },
    { title: "Ôn luyện tuần 10 - Tiết 1", sub: "Ôn luyện", period: 131 },
    { title: "Ôn luyện tuần 10 - Tiết 2", sub: "Ôn luyện", period: 132 }
  ],
  12: [
    { title: "Bài 51: et êt it - Tiết 1", sub: "Âm vần", period: 133 },
    { title: "Bài 51: et êt it - Tiết 2", sub: "Âm vần", period: 134 },
    { title: "Bài 52: ut ưt - Tiết 1", sub: "Âm vần", period: 135 },
    { title: "Bài 52: ut ưt - Tiết 2", sub: "Âm vần", period: 136 },
    { title: "Bài 53: ap ăp âp - Tiết 1", sub: "Âm vần", period: 137 },
    { title: "Bài 53: ap ăp âp - Tiết 2", sub: "Âm vần", period: 138 },
    { title: "Bài 54: op ôp ơp - Tiết 1", sub: "Âm vần", period: 139 },
    { title: "Bài 54: op ôp ơp - Tiết 2", sub: "Âm vần", period: 140 },
    { title: "Bài 55: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 141 },
    { title: "Bài 55: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 142, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua truyện “Mật ong của gấu con”, giáo dục HS biết quan tâm, chia sẻ với người khác; không ích kỉ, biết vui khi cùng bạn làm việc tốt." },
    { title: "Ôn luyện tuần 11 - Tiết 1", sub: "Ôn luyện", period: 143 },
    { title: "Ôn luyện tuần 11 - Tiết 2", sub: "Ôn luyện", period: 144 }
  ],
  13: [
    { title: "Bài 56: ep êp ip up - Tiết 1", sub: "Âm vần", period: 145 },
    { title: "Bài 56: ep êp ip up - Tiết 2", sub: "Âm vần", period: 146 },
    { title: "Bài 57: anh ênh inh - Tiết 1", sub: "Âm vần", period: 147 },
    { title: "Bài 57: anh ênh inh - Tiết 2", sub: "Âm vần", period: 148 },
    { title: "Bài 58: ach êch ich - Tiết 1", sub: "Âm vần", period: 149 },
    { title: "Bài 58: ach êch ich - Tiết 2", sub: "Âm vần", period: 150 },
    { title: "Bài 59: ang ăng âng - Tiết 1", sub: "Âm vần", period: 151 },
    { title: "Bài 59: ang ăng âng - Tiết 2", sub: "Âm vần", period: 152 },
    { title: "Bài 60: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 153 },
    { title: "Bài 60: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 154, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua truyện “Quạ và đàn bồ câu”, giáo dục HS sống trung thực, không giả dối để được lợi; biết trân trọng bản thân và cư xử chân thành với bạn bè." },
    { title: "Ôn luyện tuần 12 - Tiết 1", sub: "Ôn luyện", period: 155 },
    { title: "Ôn luyện tuần 12 - Tiết 2", sub: "Ôn luyện", period: 156 }
  ],
  14: [
    { title: "Bài 61: ong ông ung ưng - Tiết 1", sub: "Âm vần", period: 157 },
    { title: "Bài 61: ong ông ung ưng - Tiết 2", sub: "Âm vần", period: 158, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Giáo dục HS trân trọng ngày Tết cổ truyền, biết chúc Tết lễ phép, yêu gia đình và giữ gìn nét đẹp văn hóa dân tộc. | Quốc phòng và an ninh: Bồi dưỡng lòng tự hào về truyền thống, bản sắc Việt Nam." },
    { title: "Bài 62: iêc iên iêp - Tiết 1", sub: "Âm vần", period: 159 },
    { title: "Bài 62: iêc iên iêp - Tiết 2", sub: "Âm vần", period: 160, integ: "Quốc phòng và an ninh: Giáo dục HS yêu quý danh lam, cảnh đẹp quê hương; biết giữ gìn hình ảnh đất nước Việt Nam." },
    { title: "Bài 63: iêng iêm iêp - Tiết 1", sub: "Âm vần", period: 161, integ: "Bảo vệ môi trường: HS biết yêu vẻ đẹp biển đảo, không xả rác và có ý thức giữ gìn tài nguyên biển. | Quốc phòng và an ninh: Bồi dưỡng tình yêu biển đảo, ý thức trân trọng chủ quyền Tổ quốc." },
    { title: "Bài 63: iêng iêm iêp - Tiết 2", sub: "Âm vần", period: 162 },
    { title: "Bài 64: iêt iêu yêu - Tiết 1", sub: "Âm vần", period: 163 },
    { title: "Bài 64: iêt iêu yêu - Tiết 2", sub: "Âm vần", period: 164 },
    { title: "Bài 65: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 165 },
    { title: "Bài 65: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 166, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua truyện “Lửa, mưa và con hổ hung hăng”, giáo dục HS biết khiêm tốn, không bắt nạt hoặc khoe khoang; biết giao tiếp hòa nhã với mọi người." },
    { title: "Ôn luyện tuần 13 - Tiết 1", sub: "Ôn luyện", period: 167 },
    { title: "Ôn luyện tuần 13 - Tiết 2", sub: "Ôn luyện", period: 168 }
  ],
  15: [
    { title: "Bài 66: uôt uôm - Tiết 1", sub: "Âm vần", period: 169, integ: "Bảo vệ môi trường: Giáo dục HS giữ gìn môi trường biển và không xả rác khi đi lại, vui chơi ven biển. | Kĩ năng sống/ATGT: Nhận biết một số phương tiện giao thông đường thủy; biết nghe người lớn hướng dẫn và mặc áo phao khi đi tàu, thuyền." },
    { title: "Bài 66: uôt uôm - Tiết 2", sub: "Âm vần", period: 170 },
    { title: "Bài 67: uôc uôt - Tiết 1", sub: "Âm vần", period: 171 },
    { title: "Bài 67: uôc uôt - Tiết 2", sub: "Âm vần", period: 172 },
    { title: "Bài 68: uôn uông - Tiết 1", sub: "Âm vần", period: 173 },
    { title: "Bài 68: uôn uông - Tiết 2", sub: "Âm vần", period: 174 },
    { title: "Bài 69: ươi ươu - Tiết 1", sub: "Âm vần", period: 175 },
    { title: "Bài 69: ươi ươu - Tiết 2", sub: "Âm vần", period: 176 },
    { title: "Bài 70: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 177 },
    { title: "Bài 70: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 178, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua truyện “Chuột nhà và chuột đồng”, giáo dục HS biết quý trọng cuộc sống bình yên, tự lập và những điều có được từ lao động chân chính." },
    { title: "Ôn luyện tuần 14 - Tiết 1", sub: "Ôn luyện", period: 179 },
    { title: "Ôn luyện tuần 14 - Tiết 2", sub: "Ôn luyện", period: 180 }
  ],
  16: [
    { title: "Bài 71: ươc ươt - Tiết 1", sub: "Âm vần", period: 181 },
    { title: "Bài 71: ươc ươt - Tiết 2", sub: "Âm vần", period: 182 },
    { title: "Bài 72: ươm ươp - Tiết 1", sub: "Âm vần", period: 183 },
    { title: "Bài 72: ươm ươp - Tiết 2", sub: "Âm vần", period: 184 },
    { title: "Bài 73: ươn ương - Tiết 1", sub: "Âm vần", period: 185 },
    { title: "Bài 73: ươn ương - Tiết 2", sub: "Âm vần", period: 186 },
    { title: "Bài 74: oa oe - Tiết 1", sub: "Âm vần", period: 187 },
    { title: "Bài 74: oa oe - Tiết 2", sub: "Âm vần", period: 188 },
    { title: "Bài 75: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 189 },
    { title: "Bài 75: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 190, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua truyện “Chuyện của mây”, bồi dưỡng ý thức làm việc có ích cho cuộc sống, biết yêu thiên nhiên. | Bảo vệ môi trường: Giúp HS trân trọng nước trong tự nhiên, biết tiết kiệm nước và giữ nguồn nước sạch." },
    { title: "Ôn luyện tuần 15 - Tiết 1", sub: "Ôn luyện", period: 191 },
    { title: "Ôn luyện tuần 15 - Tiết 2", sub: "Ôn luyện", period: 192 }
  ],
  17: [
    { title: "Bài 76: oan oăn oat oăt - Tiết 1", sub: "Âm vần", period: 193 },
    { title: "Bài 76: oan oăn oat oăt - Tiết 2", sub: "Âm vần", period: 194 },
    { title: "Bài 77: oai uê uy - Tiết 1", sub: "Âm vần", period: 195 },
    { title: "Bài 77: oai uê uy - Tiết 2", sub: "Âm vần", period: 196 },
    { title: "Bài 78: uân uât - Tiết 1", sub: "Âm vần", period: 197, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Giáo dục lòng biết ơn các chú bộ đội, biết học tập và rèn luyện chăm ngoan để xứng đáng với sự bảo vệ của các thế hệ đi trước. | Quốc phòng và an ninh: Giới thiệu hình ảnh Bộ đội Cụ Hồ, bồi dưỡng tình yêu Tổ quốc." },
    { title: "Bài 78: uân uât - Tiết 2", sub: "Âm vần", period: 198 },
    { title: "Bài 79: uyên uyêt - Tiết 1", sub: "Âm vần", period: 199 },
    { title: "Bài 79: uyên uyêt - Tiết 2", sub: "Âm vần", period: 200, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua hình ảnh Thánh Gióng, giáo dục lòng yêu nước, tinh thần dũng cảm và đoàn kết. | Quốc phòng và an ninh: Bước đầu hiểu truyền thống chống ngoại xâm, bảo vệ quê hương của dân tộc." },
    { title: "Bài 80: Ôn tập và kể chuyện - Tiết 1", sub: "Ôn tập", period: 201 },
    { title: "Bài 80: Ôn tập và kể chuyện - Tiết 2", sub: "Ôn tập", period: 202, integ: "Quyền con người: Qua truyện “Cặp sừng và đôi chân”, giúp HS nhận biết mỗi người có quyền được tôn trọng về đặc điểm cơ thể, không bị chê bai ngoại hình. | Lý tưởng cách mạng: Giáo dục HS biết yêu quý bản thân, trân trọng bạn bè." },
    { title: "Ôn luyện tuần 16 - Tiết 1", sub: "Ôn luyện", period: 203 },
    { title: "Ôn luyện tuần 16 - Tiết 2", sub: "Ôn luyện", period: 204 }
  ],
  18: [
    { title: "Bài 81: Ôn tập - Tiết 1", sub: "Ôn tập", period: 205 },
    { title: "Bài 81: Ôn tập - Tiết 2", sub: "Ôn tập", period: 206 },
    { title: "Bài 82: Ôn tập - Tiết 1", sub: "Ôn tập", period: 207 },
    { title: "Bài 82: Ôn tập - Tiết 2", sub: "Ôn tập", period: 208 },
    { title: "Bài 83: Ôn tập - Tiết 1", sub: "Ôn tập", period: 209 },
    { title: "Bài 83: Ôn tập - Tiết 2", sub: "Ôn tập", period: 210 },
    { title: "Đánh giá cuối kì - Tiết 1", sub: "Kiểm tra", period: 211 },
    { title: "Đánh giá cuối kì - Tiết 2", sub: "Kiểm tra", period: 212 },
    { title: "Vận dụng, thực hành kiến thức - Tiết 1", sub: "Vận dụng", period: 213, integ: "Năng lực số 5.2.CB1a: Với sự hỗ trợ của GV hoặc người thân, HS lựa chọn công cụ số đơn giản để nghe lại bài đọc hoặc chụp sản phẩm viết nhằm trình bày kết quả học tập." },
    { title: "Vận dụng, thực hành kiến thức - Tiết 2", sub: "Vận dụng", period: 214 },
    { title: "Tổng kết (Ôn tập hoặc dự trữ) - Tiết 1", sub: "Tổng kết", period: 215 },
    { title: "Tổng kết (Ôn tập hoặc dự trữ) - Tiết 2", sub: "Tổng kết", period: 216 }
  ],
  // HỌC KÌ 2 (Tuần 19 - 35)
  19: [
    { title: "Bài 1: Tôi là học sinh lớp 1 - Tiết 1", sub: "Tôi và các bạn", period: 1, integ: "Quyền con người: Giúp HS nhận biết quyền được học tập, được tôn trọng đặc điểm riêng và được bày tỏ cảm xúc phù hợp. | Tích hợp AI: 1.A1.1 - HS mô tả được một số cảm xúc của bản thân và biết máy tính hoặc AI không có cảm xúc thật như con người." },
    { title: "Bài 1: Tôi là học sinh lớp 1 - Tiết 2", sub: "Tôi và các bạn", period: 2 },
    { title: "Bài 1: Tôi là học sinh lớp 1 - Tiết 3", sub: "Tôi và các bạn", period: 3 },
    { title: "Bài 1: Tôi là học sinh lớp 1 - Tiết 4", sub: "Tôi và các bạn", period: 4 },
    { title: "Bài 2: Đôi tai xấu xí - Tiết 1", sub: "Tôi và các bạn", period: 5, integ: "Quyền con người: Giáo dục quyền được tôn trọng sự khác biệt về ngoại hình, đặc điểm riêng; không chê bai, trêu chọc bạn. | Lý tưởng cách mạng: Biết yêu thương, cư xử nhân ái, động viên bạn tự tin." },
    { title: "Bài 2: Đôi tai xấu xí - Tiết 2", sub: "Tôi và các bạn", period: 6 },
    { title: "Bài 2: Đôi tai xấu xí - Tiết 3", sub: "Tôi và các bạn", period: 7 },
    { title: "Bài 2: Đôi tai xấu xí - Tiết 4", sub: "Tôi và các bạn", period: 8 },
    { title: "Bài 3: Bạn của gió - Tiết 1", sub: "Tôi và các bạn", period: 9 },
    { title: "Bài 3: Bạn của gió - Tiết 2", sub: "Tôi và các bạn", period: 10 },
    { title: "Ôn luyện tuần 19 - Tiết 1", sub: "Ôn luyện", period: 11 },
    { title: "Ôn luyện tuần 19 - Tiết 2", sub: "Ôn luyện", period: 12 }
  ],
  20: [
    { title: "Bài 4: Giải thưởng tình bạn - Tiết 1", sub: "Tôi và các bạn", period: 13, integ: "Quyền con người: HS hiểu bạn khuyết tật có quyền được tôn trọng, học tập, vui chơi và tham gia hoạt động cùng bạn bè; biết quan tâm, hỗ trợ bạn hòa nhập." },
    { title: "Bài 4: Giải thưởng tình bạn - Tiết 2", sub: "Tôi và các bạn", period: 14, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Biết yêu thương, quan tâm, giúp đỡ bạn bè khi gặp khó khăn; rèn thái độ trung thực, lịch sự và trách nhiệm. | Kĩ năng sống: Biết hợp tác, động viên bạn và giữ an toàn trong hoạt động chung." },
    { title: "Bài 4: Giải thưởng tình bạn - Tiết 3", sub: "Tôi và các bạn", period: 15 },
    { title: "Bài 4: Giải thưởng tình bạn - Tiết 4", sub: "Tôi và các bạn", period: 16 },
    { title: "Bài 5: Sinh nhật của voi con - Tiết 1", sub: "Tôi và các bạn", period: 17, integ: "Tích hợp AI: 1.A1.2 - HS biết lời chúc hoặc biểu tượng cảm xúc do máy tính tạo ra là kết quả con người thiết kế, không phải tình cảm thật như tình bạn." },
    { title: "Bài 5: Sinh nhật của voi con - Tiết 2", sub: "Tôi và các bạn", period: 18, integ: "Quyền con người: HS hiểu quyền được vui chơi, được quan tâm, tôn trọng và bày tỏ ý kiến khi tham gia hoạt động cùng bạn bè. | Kĩ năng sống: Biết chúc mừng, chia sẻ niềm vui, không tranh giành hoặc làm bạn buồn." },
    { title: "Bài 5: Sinh nhật của voi con - Tiết 3", sub: "Tôi và các bạn", period: 19 },
    { title: "Bài 5: Sinh nhật của voi con - Tiết 4", sub: "Tôi và các bạn", period: 20 },
    { title: "Ôn tập - Tiết 1", sub: "Ôn tập", period: 21 },
    { title: "Ôn tập - Tiết 2", sub: "Ôn tập", period: 22 },
    { title: "Ôn luyện tuần 20 - Tiết 1", sub: "Ôn luyện", period: 23 },
    { title: "Ôn luyện tuần 20 - Tiết 2", sub: "Ôn luyện", period: 24 }
  ],
  21: [
    { title: "Bài 1: Nụ hôn trên bàn tay - Tiết 1", sub: "Mái ấm gia đình", period: 25, integ: "Quyền con người: HS nhận biết quyền được yêu thương, chăm sóc trong gia đình; biết thể hiện tình cảm với ông bà, cha mẹ. | Lý tưởng cách mạng: Biết nói lời yêu thương, lễ phép và quan tâm người thân." },
    { title: "Bài 1: Nụ hôn trên bàn tay - Tiết 2", sub: "Mái ấm gia đình", period: 26 },
    { title: "Bài 1: Nụ hôn trên bàn tay - Tiết 3", sub: "Mái ấm gia đình", period: 27 },
    { title: "Bài 1: Nụ hôn trên bàn tay - Tiết 4", sub: "Mái ấm gia đình", period: 28 },
    { title: "Bài 2: Làm Anh - Tiết 1", sub: "Mái ấm gia đình", period: 29 },
    { title: "Bài 2: Làm Anh - Tiết 2", sub: "Mái ấm gia đình", period: 30, integ: "Quyền con người: HS hiểu trẻ em có quyền được yêu thương, chăm sóc, bảo vệ và tôn trọng trong gia đình. | Kĩ năng sống: Biết nhường nhịn, giúp đỡ em nhỏ và thực hiện những việc phù hợp trong gia đình." },
    { title: "Bài 3: Cả nhà đi chơi núi - Tiết 1", sub: "Mái ấm gia đình", period: 31, integ: "Tích hợp AI: 1.C1.2 - Nhận biết camera là 'mắt' giúp thiết bị AI nhận diện và lưu giữ khoảnh khắc gia đình." },
    { title: "Bài 3: Cả nhà đi chơi núi - Tiết 2", sub: "Mái ấm gia đình", period: 32, integ: "Kĩ năng sống: Biết chuẩn bị đồ dùng cá nhân, đi cùng người lớn và giữ an toàn khi tham quan thiên nhiên. | Bảo vệ môi trường: Không xả rác, không bẻ cành hoặc hái hoa khi đi chơi núi." },
    { title: "Bài 3: Cả nhà đi chơi núi - Tiết 3", sub: "Mái ấm gia đình", period: 33 },
    { title: "Bài 3: Cả nhà đi chơi núi - Tiết 4", sub: "Mái ấm gia đình", period: 34 },
    { title: "Ôn luyện tuần 21 - Tiết 1", sub: "Ôn luyện", period: 35 },
    { title: "Ôn luyện tuần 21 - Tiết 2", sub: "Ôn luyện", period: 36 }
  ],
  22: [
    { title: "Bài 4: Quạt cho bà ngủ - Tiết 1", sub: "Mái ấm gia đình", period: 37, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Biết kính yêu, quan tâm, chăm sóc ông bà bằng những việc làm vừa sức; hình thành lòng hiếu thảo." },
    { title: "Bài 4: Quạt cho bà ngủ - Tiết 2", sub: "Mái ấm gia đình", period: 38 },
    { title: "Bài 5: Bữa cơm gia đình - Tiết 1", sub: "Mái ấm gia đình", period: 39, integ: "Lý tưởng cách mạng: Trân trọng bữa cơm gia đình, phụ giúp người thân, không lãng phí thức ăn. | Tích hợp AI: 1.A2.2 - Kể tên một số thiết bị AI như robot hút bụi, nồi thông minh giúp gia đình tiết kiệm thời gian; chỉ sử dụng khi có người lớn hướng dẫn." },
    { title: "Bài 5: Bữa cơm gia đình - Tiết 2", sub: "Mái ấm gia đình", period: 40 },
    { title: "Bài 5: Bữa cơm gia đình - Tiết 3", sub: "Mái ấm gia đình", period: 41 },
    { title: "Bài 5: Bữa cơm gia đình - Tiết 4", sub: "Mái ấm gia đình", period: 42 },
    { title: "Bài 6: Ngôi nhà - Tiết 1", sub: "Mái ấm gia đình", period: 43, integ: "Quyền con người: Trẻ em có quyền được sống trong mái ấm an toàn, được yêu thương và bảo vệ. | Kĩ năng sống: Giữ nhà cửa gọn gàng và thực hiện quy tắc an toàn đơn giản trong gia đình." },
    { title: "Bài 6: Ngôi nhà - Tiết 2", sub: "Mái ấm gia đình", period: 44 },
    { title: "Ôn tập - Tiết 1", sub: "Ôn tập", period: 45 },
    { title: "Ôn tập - Tiết 2", sub: "Ôn tập", period: 46 },
    { title: "Ôn luyện tuần 22 - Tiết 1", sub: "Ôn luyện", period: 47 },
    { title: "Ôn luyện tuần 22 - Tiết 2", sub: "Ôn luyện", period: 48 }
  ],
  23: [
    { title: "Bài 1: Tôi đi học - Tiết 1", sub: "Mái trường mến yêu", period: 49, integ: "Quyền con người: Giáo dục quyền được học tập trong môi trường an toàn, thân thiện; biết yêu trường, kính thầy, mến bạn." },
    { title: "Bài 1: Tôi đi học - Tiết 2", sub: "Mái trường mến yêu", period: 50, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua không khí ngày tựu trường, bồi dưỡng truyền thống hiếu học. | Quốc phòng và an ninh: Giáo dục niềm tự hào về truyền thống học tập của quê hương, đất nước." },
    { title: "Bài 1: Tôi đi học - Tiết 3", sub: "Mái trường mến yêu", period: 51 },
    { title: "Bài 1: Tôi đi học - Tiết 4", sub: "Mái trường mến yêu", period: 52 },
    { title: "Bài 2: Đi học - Tiết 1", sub: "Mái trường mến yêu", period: 53 },
    { title: "Bài 2: Đi học - Tiết 2", sub: "Mái trường mến yêu", period: 54 },
    { title: "Bài 3: Hoa yêu thương - Tiết 1", sub: "Mái trường mến yêu", period: 55 },
    { title: "Bài 3: Hoa yêu thương - Tiết 2", sub: "Mái trường mến yêu", period: 56, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Qua hình ảnh 'Hoa yêu thương', giáo dục HS biết yêu kính, biết ơn thầy cô; mạnh dạn thể hiện tình cảm bằng việc làm đẹp và sáng tạo." },
    { title: "Bài 3: Hoa yêu thương - Tiết 3", sub: "Mái trường mến yêu", period: 57 },
    { title: "Bài 3: Hoa yêu thương - Tiết 4", sub: "Mái trường mến yêu", period: 58 },
    { title: "Ôn luyện tuần 23 - Tiết 1", sub: "Ôn luyện", period: 59 },
    { title: "Ôn luyện tuần 23 - Tiết 2", sub: "Ôn luyện", period: 60 }
  ],
  24: [
    { title: "Bài 4: Cây bàng và lớp học - Tiết 1", sub: "Mái trường mến yêu", period: 61, integ: "Bảo vệ môi trường: Biết yêu quý cây bàng và cây xanh trong sân trường; không bẻ cành, hái lá, góp phần giữ trường lớp xanh - sạch - đẹp." },
    { title: "Bài 4: Cây bàng và lớp học - Tiết 2", sub: "Mái trường mến yêu", period: 62 },
    { title: "Bài 5: Bác trống trường - Tiết 1", sub: "Mái trường mến yêu", period: 63, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Biết quý trọng đồ dùng chung của nhà trường, thực hiện nền nếp học tập và có trách nhiệm với tập thể." },
    { title: "Bài 5: Bác trống trường - Tiết 2", sub: "Mái trường mến yêu", period: 64 },
    { title: "Bài 5: Bác trống trường - Tiết 3", sub: "Mái trường mến yêu", period: 65 },
    { title: "Bài 5: Bác trống trường - Tiết 4", sub: "Mái trường mến yêu", period: 66 },
    { title: "Bài 6: Giờ ra chơi - Tiết 1", sub: "Mái trường mến yêu", period: 67, integ: "Quyền con người: HS biết quyền được vui chơi an toàn và được tôn trọng khi tham gia hoạt động với bạn bè. | Kĩ năng sống: Chơi đoàn kết, không xô đẩy; biết xử lí mâu thuẫn bằng lời nói thân thiện." },
    { title: "Bài 6: Giờ ra chơi - Tiết 2", sub: "Mái trường mến yêu", period: 68 },
    { title: "Ôn tập - Tiết 1", sub: "Ôn tập", period: 69 },
    { title: "Ôn tập - Tiết 2", sub: "Ôn tập", period: 70 },
    { title: "Luyện tập tuần 24 - Tiết 1", sub: "Luyện tập", period: 71 },
    { title: "Luyện tập tuần 24 - Tiết 2", sub: "Luyện tập", period: 72 }
  ],
  25: [
    { title: "Bài 1: Rửa tay trước khi ăn - Tiết 1", sub: "Điều em cần biết", period: 73, integ: "Quyền con người: Giáo dục quyền được chăm sóc sức khỏe và được học những thói quen bảo vệ cơ thể. | Kĩ năng sống: Thực hành rửa tay đúng cách trước khi ăn và sau khi đi vệ sinh." },
    { title: "Bài 1: Rửa tay trước khi ăn - Tiết 2", sub: "Điều em cần biết", period: 74, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Hình thành nếp sống sạch sẽ, tự giác và có trách nhiệm với sức khỏe của bản thân, gia đình." },
    { title: "Bài 1: Rửa tay trước khi ăn - Tiết 3", sub: "Điều em cần biết", period: 75 },
    { title: "Bài 1: Rửa tay trước khi ăn - Tiết 4", sub: "Điều em cần biết", period: 76 },
    { title: "Bài 2: Lời chào - Tiết 1", sub: "Điều em cần biết", period: 77, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Rèn thói quen chào hỏi lễ phép, tôn trọng người lớn và thân thiện với bạn bè. | Kĩ năng sống: Biết lựa chọn lời chào phù hợp trong từng tình huống giao tiếp." },
    { title: "Bài 2: Lời chào - Tiết 2", sub: "Điều em cần biết", period: 78 },
    { title: "Bài 3: Khi mẹ vắng nhà - Tiết 1", sub: "Điều em cần biết", period: 79, integ: "Quyền con người: Quyền được bảo vệ an toàn. | Năng lực số 4.1.CB1b: Nhận biết tin nhắn/cuộc gọi người lạ xin thông tin cá nhân là nguy cơ đơn giản trong môi trường số; biết không trả lời và báo người lớn. | Tích hợp AI: 1.C1.2 - Camera hoặc chuông cửa thông minh hỗ trợ nhận diện người quen, người lạ." },
    { title: "Bài 3: Khi mẹ vắng nhà - Tiết 2", sub: "Điều em cần biết", period: 80 },
    { title: "Bài 3: Khi mẹ vắng nhà - Tiết 3", sub: "Điều em cần biết", period: 81 },
    { title: "Bài 3: Khi mẹ vắng nhà - Tiết 4", sub: "Điều em cần biết", period: 82 },
    { title: "Luyện tập tuần 25 - Tiết 1", sub: "Luyện tập", period: 83 },
    { title: "Luyện tập tuần 25 - Tiết 2", sub: "Luyện tập", period: 84 }
  ],
  26: [
    { title: "Bài 4: Nếu không may bị lạc - Tiết 1", sub: "Điều em cần biết", period: 85, integ: "Quyền con người: Quyền được bảo vệ an toàn khi ở nơi công cộng. | Kĩ năng sống: Đứng ở nơi an toàn, nhờ công an, bảo vệ giúp đỡ; nhớ số điện thoại gia đình." },
    { title: "Bài 4: Nếu không may bị lạc - Tiết 2", sub: "Điều em cần biết", period: 86, integ: "Năng lực số 2.3.CB1a: Gọi cha mẹ bằng điện thoại là dịch vụ số đơn giản để xin trợ giúp khi bị lạc; chỉ liên hệ người tin cậy." },
    { title: "Bài 4: Nếu không may bị lạc - Tiết 3", sub: "Điều em cần biết", period: 87, integ: "Quốc phòng và an ninh: Giáo dục ý thức tự bảo vệ, biết tìm đến công an, bảo vệ hoặc lực lượng hỗ trợ khi gặp tình huống nguy hiểm." },
    { title: "Bài 4: Nếu không may bị lạc - Tiết 4", sub: "Điều em cần biết", period: 88 },
    { title: "Bài 5: Đèn giao thông - Tiết 1", sub: "Điều em cần biết", period: 89, integ: "Kĩ năng sống/ATGT: Tuân thủ tín hiệu đèn giao thông, quan sát an toàn. | Tích hợp AI: 1.A2.2 - Nhận biết xe thông minh có thể dùng AI để nhận diện tín hiệu đèn giao thông." },
    { title: "Bài 5: Đèn giao thông - Tiết 2", sub: "Điều em cần biết", period: 90 },
    { title: "Bài 5: Đèn giao thông - Tiết 3", sub: "Điều em cần biết", period: 91 },
    { title: "Bài 5: Đèn giao thông - Tiết 4", sub: "Điều em cần biết", period: 92 },
    { title: "Ôn tập - Tiết 1", sub: "Ôn tập", period: 93 },
    { title: "Ôn tập - Tiết 2", sub: "Ôn tập", period: 94 },
    { title: "Luyện tập tuần 26 - Tiết 1", sub: "Luyện tập", period: 95 },
    { title: "Luyện tập tuần 26 - Tiết 2", sub: "Luyện tập", period: 96 }
  ],
  27: [
    { title: "Bài 1: Kiến và chim bồ câu - Tiết 1", sub: "Bài học từ cuộc sống", period: 97, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Lòng nhân ái, giúp đỡ người khó khăn. | Tích hợp AI: 1.B3.1 - Nêu ví dụ robot cứu hộ được con người sử dụng vào mục đích tốt đẹp để hỗ trợ tìm kiếm, cứu nạn." },
    { title: "Bài 1: Kiến và chim bồ câu - Tiết 2", sub: "Bài học từ cuộc sống", period: 98 },
    { title: "Bài 1: Kiến và chim bồ câu - Tiết 3", sub: "Bài học từ cuộc sống", period: 99 },
    { title: "Bài 1: Kiến và chim bồ câu - Tiết 4", sub: "Bài học từ cuộc sống", period: 100 },
    { title: "Bài 2: Câu chuyện của rễ - Tiết 1", sub: "Bài học từ cuộc sống", period: 101, integ: "Bảo vệ môi trường: Cây cần rễ, đất và nước để sống; biết chăm sóc cây, không giẫm lên cây non." },
    { title: "Bài 2: Câu chuyện của rễ - Tiết 2", sub: "Bài học từ cuộc sống", period: 102 },
    { title: "Bài 3: Câu hỏi của sói - Tiết 1", sub: "Bài học từ cuộc sống", period: 103, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Đặt câu hỏi lịch sự, không làm tổn thương người khác. | Kĩ năng sống: Giao tiếp bình tĩnh, lắng nghe." },
    { title: "Bài 3: Câu hỏi của sói - Tiết 2", sub: "Bài học từ cuộc sống", period: 104 },
    { title: "Bài 3: Câu hỏi của sói - Tiết 3", sub: "Bài học từ cuộc sống", period: 105 },
    { title: "Bài 3: Câu hỏi của sói - Tiết 4", sub: "Bài học từ cuộc sống", period: 106 },
    { title: "Luyện tập tuần 27 - Tiết 1", sub: "Luyện tập", period: 107 },
    { title: "Luyện tập tuần 27 - Tiết 2", sub: "Luyện tập", period: 108 }
  ],
  28: [
    { title: "Bài 4: Chú bé chăn cừu - Tiết 1", sub: "Bài học từ cuộc sống", period: 109, integ: "Lý tưởng cách mạng: Trung thực, không nói dối. | Năng lực số 1.2.CB1a: Nhận biết không phải thông tin trên màn hình đều đúng sự thật; biết hỏi người lớn. | Tích hợp AI: 1.B1.1 - Nhận biết việc dùng AI tạo giọng nói hoặc hình ảnh giả để lừa dối người khác là hành vi xấu." },
    { title: "Bài 4: Chú bé chăn cừu - Tiết 2", sub: "Bài học từ cuộc sống", period: 110 },
    { title: "Bài 4: Chú bé chăn cừu - Tiết 3", sub: "Bài học từ cuộc sống", period: 111 },
    { title: "Bài 4: Chú bé chăn cừu - Tiết 4", sub: "Bài học từ cuộc sống", period: 112 },
    { title: "Bài 5: Tiếng vọng của núi - Tiết 1", sub: "Bài học từ cuộc sống", period: 113, integ: "Kĩ năng sống: Biết nói lời hay, động viên người khác bằng thái độ chân thành." },
    { title: "Bài 5: Tiếng vọng của núi - Tiết 2", sub: "Bài học từ cuộc sống", period: 114 },
    { title: "Bài 5: Tiếng vọng của núi - Tiết 3", sub: "Bài học từ cuộc sống", period: 115 },
    { title: "Bài 5: Tiếng vọng của núi - Tiết 4", sub: "Bài học từ cuộc sống", period: 116 },
    { title: "Ôn tập - Tiết 1", sub: "Ôn tập", period: 117 },
    { title: "Ôn tập - Tiết 2", sub: "Ôn tập", period: 118 },
    { title: "Luyện tập tuần 28 - Tiết 1", sub: "Luyện tập", period: 119 },
    { title: "Luyện tập tuần 28 - Tiết 2", sub: "Luyện tập", period: 120 }
  ],
  29: [
    { title: "Bài 1: Loài chim của biển cả - Tiết 1", sub: "Thiên nhiên kì thú", period: 121, integ: "Bảo vệ môi trường: Yêu quý các loài chim biển, có ý thức giữ gìn môi trường biển." },
    { title: "Bài 1: Loài chim của biển cả - Tiết 2", sub: "Thiên nhiên kì thú", period: 122 },
    { title: "Bài 1: Loài chim của biển cả - Tiết 3", sub: "Thiên nhiên kì thú", period: 123 },
    { title: "Bài 1: Loài chim của biển cả - Tiết 4", sub: "Thiên nhiên kì thú", period: 124, integ: "Bảo vệ môi trường: Bảo vệ nơi sống của chim biển. | Năng lực số 1.1.CB1a: Tìm hình ảnh chim biển từ đường dẫn hoặc từ khóa GV cung cấp." },
    { title: "Bài 2: Bảy sắc cầu vồng - Tiết 1", sub: "Thiên nhiên kì thú", period: 125 },
    { title: "Bài 2: Bảy sắc cầu vồng - Tiết 2", sub: "Thiên nhiên kì thú", period: 126, integ: "Bảo vệ môi trường: Biết yêu vẻ đẹp thiên nhiên; giữ môi trường xanh sạch đẹp." },
    { title: "Bài 3: Chúa tể rừng xanh - Tiết 1", sub: "Thiên nhiên kì thú", period: 127, integ: "Tích hợp AI: 1.D2.1 - Nhận biết hệ thống AI chuyên biệt có thể nhận diện âm thanh của một số loài động vật." },
    { title: "Bài 3: Chúa tể rừng xanh - Tiết 2", sub: "Thiên nhiên kì thú", period: 128, integ: "Bảo vệ môi trường: Yêu quý động vật hoang dã, không săn bắt thú rừng; bảo vệ rừng." },
    { title: "Bài 3: Chúa tể rừng xanh - Tiết 3", sub: "Thiên nhiên kì thú", period: 129 },
    { title: "Bài 3: Chúa tể rừng xanh - Tiết 4", sub: "Thiên nhiên kì thú", period: 130 },
    { title: "Luyện tập tuần 29 - Tiết 1", sub: "Luyện tập", period: 131, integ: "Bảo vệ môi trường: Giữ gìn môi trường sống của muông thú." },
    { title: "Luyện tập tuần 29 - Tiết 2", sub: "Luyện tập", period: 132 }
  ],
  30: [
    { title: "Bài 4: Cuộc thi tài năng rừng xanh - Tiết 1", sub: "Thiên nhiên kì thú", period: 133, integ: "Quyền con người: Mỗi bạn đều có khả năng riêng, có quyền tham gia và được ghi nhận. | Kĩ năng sống: Mạnh dạn thể hiện khả năng, tôn trọng bạn." },
    { title: "Bài 4: Cuộc thi tài năng rừng xanh - Tiết 2", sub: "Thiên nhiên kì thú", period: 134, integ: "Bảo vệ môi trường: Yêu quý các loài vật trong rừng, bảo vệ nơi sống của muông thú." },
    { title: "Bài 4: Cuộc thi tài năng rừng xanh - Tiết 3", sub: "Thiên nhiên kì thú", period: 135, integ: "Kĩ năng sống: Tôn trọng tài năng của người khác, hợp tác thân thiện." },
    { title: "Bài 4: Cuộc thi tài năng rừng xanh - Tiết 4", sub: "Thiên nhiên kì thú", period: 136, integ: "Năng lực số 5.2.CB1a: Chọn công cụ vẽ số đơn giản để trình bày một con vật có tài năng bằng tranh và lời giới thiệu ngắn." },
    { title: "Bài 5: Cây liễu dẻo dai - Tiết 1", sub: "Thiên nhiên kì thú", period: 137 },
    { title: "Bài 5: Cây liễu dẻo dai - Tiết 2", sub: "Thiên nhiên kì thú", period: 138, integ: "Bảo vệ môi trường: Yêu quý cây xanh, không bẻ cành ngắt lá; chăm sóc cây quanh em." },
    { title: "Bài 5: Cây liễu dẻo dai - Tiết 3", sub: "Thiên nhiên kì thú", period: 139 },
    { title: "Bài 5: Cây liễu dẻo dai - Tiết 4", sub: "Thiên nhiên kì thú", period: 140 },
    { title: "Ôn tập - Tiết 1", sub: "Ôn tập", period: 141 },
    { title: "Ôn tập - Tiết 2", sub: "Ôn tập", period: 142 },
    { title: "Luyện tập tuần 30 - Tiết 1", sub: "Luyện tập", period: 143 },
    { title: "Luyện tập tuần 30 - Tiết 2", sub: "Luyện tập", period: 144 }
  ],
  31: [
    { title: "Bài 1: Tia nắng đi đâu? - Tiết 1", sub: "Thế giới trong mắt em", period: 145 },
    { title: "Bài 1: Tia nắng đi đâu? - Tiết 2", sub: "Thế giới trong mắt em", period: 146, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Yêu buổi sáng, yêu ánh nắng; dậy đúng giờ, sinh hoạt tích cực." },
    { title: "Bài 2: Trong giấc mơ buổi sáng - Tiết 1", sub: "Thế giới trong mắt em", period: 147 },
    { title: "Bài 2: Trong giấc mơ buổi sáng - Tiết 2", sub: "Thế giới trong mắt em", period: 148, integ: "Lý tưởng cách mạng: Nuôi dưỡng ước mơ trong sáng, yêu cảnh vật thiên nhiên." },
    { title: "Bài 3: Ngày mới bắt đầu - Tiết 1", sub: "Thế giới trong mắt em", period: 149 },
    { title: "Bài 3: Ngày mới bắt đầu - Tiết 2", sub: "Thế giới trong mắt em", period: 150, integ: "Kĩ năng sống: Hình thành thói quen dậy sớm, chuẩn bị đi học đúng giờ." },
    { title: "Bài 3: Ngày mới bắt đầu - Tiết 3", sub: "Thế giới trong mắt em", period: 151 },
    { title: "Bài 3: Ngày mới bắt đầu - Tiết 4", sub: "Thế giới trong mắt em", period: 152 },
    { title: "Bài 4: Hỏi mẹ - Tiết 1", sub: "Thế giới trong mắt em", period: 153 },
    { title: "Bài 4: Hỏi mẹ - Tiết 2", sub: "Thế giới trong mắt em", period: 154, integ: "Lý tưởng cách mạng: Gần gũi yêu thương mẹ, mạnh dạn hỏi điều chưa biết, khám phá thiên nhiên." },
    { title: "Luyện tập tuần 31 - Tiết 1", sub: "Luyện tập", period: 155 },
    { title: "Luyện tập tuần 31 - Tiết 2", sub: "Luyện tập", period: 156 }
  ],
  32: [
    { title: "Bài 5: Những cánh cò - Tiết 1", sub: "Thế giới trong mắt em", period: 157 },
    { title: "Bài 5: Những cánh cò - Tiết 2", sub: "Thế giới trong mắt em", period: 158, integ: "Bảo vệ môi trường: Nhận ra ao hồ đầm là nơi sống của chim cò; giữ yên tĩnh, không xả rác." },
    { title: "Bài 5: Những cánh cò - Tiết 3", sub: "Thế giới trong mắt em", period: 159 },
    { title: "Bài 5: Những cánh cò - Tiết 4", sub: "Thế giới trong mắt em", period: 160 },
    { title: "Bài 6: Buổi trưa hè - Tiết 1", sub: "Thế giới trong mắt em", period: 161 },
    { title: "Bài 6: Buổi trưa hè - Tiết 2", sub: "Thế giới trong mắt em", period: 162, integ: "Bảo vệ môi trường: Cảm nhận vẻ đẹp yên bình trưa hè; yêu quý cây cối, con vật." },
    { title: "Bài 7: Hoa phượng - Tiết 1", sub: "Thế giới trong mắt em", period: 163 },
    { title: "Bài 7: Hoa phượng - Tiết 2", sub: "Thế giới trong mắt em", period: 164, integ: "Bảo vệ môi trường: Yêu quý cây phượng, giữ gìn cảnh quan trường lớp sạch đẹp." },
    { title: "Ôn tập - Tiết 1", sub: "Ôn tập", period: 165 },
    { title: "Ôn tập - Tiết 2", sub: "Ôn tập", period: 166, integ: "Năng lực số 1.1.CB1a: Tìm bài thơ ngắn hoặc tranh minh họa về thiên nhiên từ nguồn học liệu số được giới thiệu để chia sẻ với bạn." },
    { title: "Luyện tập tuần 32 - Tiết 1", sub: "Luyện tập", period: 167 },
    { title: "Luyện tập tuần 32 - Tiết 2", sub: "Luyện tập", period: 168 }
  ],
  33: [
    { title: "Bài 1: Cậu bé thông minh - Tiết 1", sub: "Đất nước và con người", period: 169, integ: "Lý tưởng cách mạng: Tinh thần ham học hỏi, tự tin, dùng trí tuệ vào việc tốt." },
    { title: "Bài 1: Cậu bé thông minh - Tiết 2", sub: "Đất nước và con người", period: 170, integ: "Quyền con người: Mỗi bạn nhỏ có quyền được tôn trọng, lắng nghe và phát huy khả năng; không chê bai bạn." },
    { title: "Bài 1: Cậu bé thông minh - Tiết 3", sub: "Đất nước và con người", period: 171 },
    { title: "Bài 1: Cậu bé thông minh - Tiết 4", sub: "Đất nước và con người", period: 172, integ: "Tích hợp quyền con người: Tôn trọng bạn bè, khuyến khích sự thông minh sáng tạo của mỗi người." },
    { title: "Bài 2: Lính cứu hỏa - Tiết 1", sub: "Đất nước và con người", period: 173, integ: "Tích hợp AI: 1.B3.1 - Nêu ví dụ robot chữa cháy được con người sử dụng vì mục đích tốt đẹp để hỗ trợ lính cứu hỏa tiếp cận nơi nguy hiểm." },
    { title: "Bài 2: Lính cứu hỏa - Tiết 2", sub: "Đất nước và con người", period: 174, integ: "Quốc phòng và an ninh: Vai trò lực lượng PCCC. | Kĩ năng sống: Bình tĩnh, báo người lớn, thoát hiểm an toàn, không nghịch lửa." },
    { title: "Bài 2: Lính cứu hỏa - Tiết 3", sub: "Đất nước và con người", period: 175 },
    { title: "Bài 2: Lính cứu hỏa - Tiết 4", sub: "Đất nước và con người", period: 176 },
    { title: "Bài 3: Lớn lên bạn làm gì? - Tiết 1", sub: "Đất nước và con người", period: 177, integ: "Quyền con người: Mỗi người có quyền ước mơ và lựa chọn nghề nghiệp phù hợp; quý trọng mọi nghề có ích." },
    { title: "Bài 3: Lớn lên bạn làm gì? - Tiết 2", sub: "Đất nước và con người", period: 178 },
    { title: "Luyện tập tuần 33 - Tiết 1", sub: "Luyện tập", period: 179 },
    { title: "Luyện tập tuần 33 - Tiết 2", sub: "Luyện tập", period: 180 }
  ],
  34: [
    { title: "Bài 4: Ruộng bậc thang ở Sa Pa - Tiết 1", sub: "Đất nước và con người", period: 181, integ: "Quốc phòng và an ninh: Trân trọng cảnh đẹp đất nước Việt Nam. | Bảo vệ môi trường: Giữ gìn cảnh quan du lịch, không xả rác." },
    { title: "Bài 4: Ruộng bậc thang ở Sa Pa - Tiết 2", sub: "Đất nước và con người", period: 182 },
    { title: "Bài 5: Nhớ ơn - Tiết 1", sub: "Đất nước và con người", period: 183 },
    { title: "Bài 5: Nhớ ơn - Tiết 2", sub: "Đất nước và con người", period: 184, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Sống biết ơn, kính trọng người lao động, thầy cô và cha mẹ." },
    { title: "Bài 6: Du lịch biển Việt Nam - Tiết 1", sub: "Đất nước và con người", period: 185, integ: "Tích hợp AI: 1.A2.2 - Ứng dụng dịch ngôn ngữ AI hỗ trợ khách du lịch giao tiếp khi tham quan biển Việt Nam." },
    { title: "Bài 6: Du lịch biển Việt Nam - Tiết 2", sub: "Đất nước và con người", period: 186, integ: "Quốc phòng và an ninh: Biển đảo Việt Nam là phần lãnh thổ thiêng liêng của Tổ quốc. | Bảo vệ môi trường biển sạch đẹp." },
    { title: "Bài 6: Du lịch biển Việt Nam - Tiết 3", sub: "Đất nước và con người", period: 187 },
    { title: "Bài 6: Du lịch biển Việt Nam - Tiết 4", sub: "Đất nước và con người", period: 188 },
    { title: "Ôn tập - Tiết 1", sub: "Ôn tập", period: 189 },
    { title: "Ôn tập - Tiết 2", sub: "Ôn tập", period: 190 },
    { title: "Luyện tập tuần 34 - Tiết 1", sub: "Luyện tập", period: 191 },
    { title: "Luyện tập tuần 34 - Tiết 2", sub: "Luyện tập", period: 192 }
  ],
  35: [
    { title: "Bài 1 - Tiết 1", sub: "Ôn tập & Đánh giá", period: 193 },
    { title: "Bài 1 - Tiết 2", sub: "Ôn tập & Đánh giá", period: 194 },
    { title: "Bài 2 - Tiết 1", sub: "Ôn tập & Đánh giá", period: 195 },
    { title: "Bài 2 - Tiết 2", sub: "Ôn tập & Đánh giá", period: 196 },
    { title: "Bài 3 - Tiết 1", sub: "Ôn tập & Đánh giá", period: 197 },
    { title: "Bài 3 - Tiết 2", sub: "Ôn tập & Đánh giá", period: 198 },
    { title: "Luyện tập tuần 35 - Tiết 1", sub: "Luyện tập", period: 199 },
    { title: "Luyện tập tuần 35 - Tiết 2", sub: "Luyện tập", period: 200 },
    { title: "Kiểm tra định kì cuối năm - Tiết 1", sub: "Kiểm tra", period: 201 },
    { title: "Kiểm tra định kì cuối năm - Tiết 2", sub: "Kiểm tra", period: 202 },
    { title: "Kiểm tra định kì cuối năm - Tiết 3", sub: "Kiểm tra", period: 203 },
    { title: "Đánh giá cuối năm", sub: "Tổng kết", period: 204 }
  ]
};

// Re-export Toán, Đạo đức, TNXH, HĐTN, TCTV, TCT
export { GRADE_1_TOAN } from "./grade1MathCurriculum";
export { GRADE_1_DAO_DUC, GRADE_1_TNXH, GRADE_1_HDTN, getGrade1TCTV, getGrade1TCT } from "./grade1OtherCurriculum";

import { GRADE_1_TOAN } from "./grade1MathCurriculum";
import { GRADE_1_DAO_DUC, GRADE_1_TNXH, GRADE_1_HDTN, getGrade1TCTV, getGrade1TCT } from "./grade1OtherCurriculum";
import { LessonInfo } from "../gradeCurriculums";

export const GRADE_1_CURRICULUM_DATA: Record<string, (week: number, p: number) => LessonInfo> = {
  "tiếng việt": (week: number, p: number) => {
    const list = GRADE_1_TIENG_VIET[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        subSubject: item.sub || "Tiếng Việt 1",
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Tiếng Việt 1 Kết nối tri thức."
      };
    }
    return {
      lessonTitle: `Tiếng Việt 1 - Tuần ${week} (Tiết ${p})`,
      subSubject: "Tiếng Việt 1",
      curriculumPeriod: (week - 1) * 12 + p,
      integrationNotes: "Tiếng Việt 1 GDPT 2018."
    };
  },

  "toán": (week: number, p: number) => {
    const list = GRADE_1_TOAN[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Toán 1 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Toán 1 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Toán 1 GDPT 2018."
    };
  },

  "tự nhiên và xã hội": (week: number, p: number) => {
    const list = GRADE_1_TNXH[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Tự nhiên và Xã hội 1 Kết nối tri thức."
      };
    }
    return {
      lessonTitle: `Tự nhiên và Xã hội 1 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "TNXH 1 GDPT 2018."
    };
  },

  "đạo đức": (week: number) => {
    const item = GRADE_1_DAO_DUC[week];
    if (item) {
      return {
        lessonTitle: item.title,
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Đạo đức 1 GDPT 2018."
      };
    }
    return {
      lessonTitle: `Đạo đức 1 - Tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Đạo đức 1 GDPT 2018."
    };
  },

  "hoạt động trải nghiệm": (week: number, p: number) => {
    const list = GRADE_1_HDTN[week];
    if (list && list[p - 1]) {
      const item = list[p - 1];
      return {
        lessonTitle: item.title,
        subSubject: item.sub || (p === 1 ? "Sinh hoạt dưới cờ" : p === 2 ? "Hoạt động theo chủ đề" : "Sinh hoạt lớp"),
        curriculumPeriod: item.period,
        integrationNotes: item.integ || "Hoạt động trải nghiệm 1 GDPT 2018."
      };
    }
    return {
      lessonTitle: p === 1 ? `Sinh hoạt dưới cờ Tuần ${week}` : p === 2 ? `Hoạt động theo chủ đề Tuần ${week}` : `Sinh hoạt lớp Tuần ${week}`,
      subSubject: p === 1 ? "Sinh hoạt dưới cờ" : p === 2 ? "Hoạt động theo chủ đề" : "Sinh hoạt lớp",
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Hoạt động trải nghiệm 1 GDPT 2018."
    };
  },

  "tăng cường tiếng việt": (week: number, p: number) => {
    const item = getGrade1TCTV(week, p);
    return {
      lessonTitle: item.title,
      subSubject: item.sub,
      curriculumPeriod: item.period,
      integrationNotes: item.integ
    };
  },

  "tăng cường toán": (week: number, p: number) => {
    const item = getGrade1TCT(week, p);
    return {
      lessonTitle: item.title,
      subSubject: item.sub,
      curriculumPeriod: item.period,
      integrationNotes: item.integ
    };
  },

  "giáo dục thể chất": (week: number, p: number) => {
    return {
      lessonTitle: `Giáo dục thể chất 1: Đội hình đội ngũ & Tư thế cơ bản (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Rèn luyện tư thế vận động cơ bản."
    };
  }
};

