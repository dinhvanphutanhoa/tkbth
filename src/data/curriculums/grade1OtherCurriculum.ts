import { Grade1LessonItem } from "./grade1Curriculum";

// ============================================================================
// MÔN ĐẠO ĐỨC LỚP 1 (35 tuần x 1 tiết = 35 tiết)
// ============================================================================
export const GRADE_1_DAO_DUC: Record<number, Grade1LessonItem> = {
  1: { title: "Bài 1: Em giữ sạch đôi tay", period: 1, integ: "Quyền được chăm sóc sức khỏe: Sống trong môi trường sạch sẽ. | Bổn phận trẻ em đối với bản thân: Tự giác rửa tay sạch sẽ, bảo vệ sức khỏe." },
  2: { title: "Bài 2: Em giữ sạch răng miệng", period: 2, integ: "Giáo dục quyền con người: Quyền được chăm sóc sức khỏe. | Giáo dục đạo đức, lối sống: Ý thức giữ gìn vệ sinh, sống lành mạnh, tự tin." },
  3: { title: "Bài 3: Em tắm, gội sạch sẽ", period: 3, integ: "QCN: Quyền được sống trong môi trường trong lành và sạch sẽ. | Kĩ năng sống: Kỹ năng tự phục vụ, tắm rửa gội đầu sạch sẽ." },
  4: { title: "Bài 4: Em giữ trang phục gọn gàng, sạch sẽ", period: 4, integ: "Quyền trẻ em: Mặc trang phục sạch sẽ, an toàn. | Bổn phận trẻ em: Tự chăm sóc và giữ trang phục gọn gàng tạo nếp sống văn minh." },
  5: { title: "Bài 5: Gia đình của em - Tiết 1", period: 5, integ: "QCN & Quyền trẻ em: Được chăm sóc nuôi dưỡng, sống chung cha mẹ. | Bổn phận trẻ em: Kính trọng vâng lời ông bà cha mẹ, phụ giúp việc nhà." },
  6: { title: "Bài 5: Gia đình của em - Tiết 2", period: 6, integ: "Giáo dục đạo đức, lối sống: Hình thành tình yêu thương, tôn trọng, biết ơn và sẻ chia trong gia đình." },
  7: { title: "Bài 6: Lễ phép, vâng lời ông bà, cha mẹ, anh chị", period: 7, integ: "Tích hợp đạo đức - lối sống: Kính trọng, biết ơn ông bà cha mẹ thầy cô; xây dựng tình cảm gia đình ấm êm." },
  8: { title: "Bài 7: Quan tâm, chăm sóc ông bà", period: 8, integ: "Giáo dục học sinh lòng biết ơn, hiếu thảo đối với ông bà - những người đã sinh thành dưỡng dục." },
  9: { title: "Thực hành kĩ năng giữa Học kì 1", period: 9, integ: "Rèn luyện và củng cố các kỹ năng tự phục vụ và ứng xử lễ phép trong gia đình." },
  10: { title: "Bài 8: Quan tâm, chăm sóc cha mẹ", period: 10, integ: "Đạo đức, lối sống: Yêu thương hiếu thảo, chăm sóc cha mẹ bằng những việc làm phù hợp lứa tuổi." },
  11: { title: "Bài 9: Chăm sóc, giúp đỡ em nhỏ", period: 11, integ: "QCN: Quyền được chăm sóc, nuôi dưỡng và bảo vệ của trẻ nhỏ. Tình cảm anh chị em trong nhà." },
  12: { title: "Bài 10: Đi học đúng giờ", period: 12, integ: "QCN: Quyền được đi học và đi học đúng giờ. | Tích hợp AI: 1.A2.2 - Đồng hồ thông minh hoặc trợ lý ảo nhắc giờ đến lớp, hình thành thói quen đúng giờ." },
  13: { title: "Bài 11: Học bài và làm bài đầy đủ", period: 13, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Lựa chọn việc nên làm, tránh việc không nên làm; chăm chỉ, trung thực." },
  14: { title: "Bài 12: Giữ trật tự trong trường, lớp", period: 14, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Tinh thần kỉ luật, trách nhiệm tập thể; tôn sư trọng đạo; hợp tác và đoàn kết." },
  15: { title: "Bài 13: Giữ gìn tài sản của trường, lớp", period: 15, integ: "QCN: Quyền học tập trong môi trường an toàn sạch đẹp; trách nhiệm giữ gìn tài sản chung của trường lớp." },
  16: { title: "Bài 14: Giữ vệ sinh trường, lớp", period: 16, integ: "Bảo vệ môi trường: Giữ gìn vệ sinh trường lớp và bảo vệ môi trường học tập chung." },
  17: { title: "Bài 15: Gọn gàng, ngăn nắp", period: 17, integ: "Đạo đức, lối sống: Thói quen sống gọn gàng ngăn nắp, có trách nhiệm với bản thân và tập thể." },
  18: { title: "Ôn tập - Đánh giá cuối HK 1", period: 18, integ: "Đánh giá sự tiến bộ trong hành vi và nền nếp sinh hoạt học kì 1." },
  19: { title: "Bài 16: Học tập, sinh hoạt đúng giờ", period: 19, integ: "QCN: Quyền học tập, chăm sóc sức khỏe. | NLS 5.2.CB1a: Trình bày thời gian biểu học tập bằng công cụ số đơn giản." },
  20: { title: "Bài 17: Tự giác học tập", period: 20, integ: "QCN: Quyền được học tập. | NLS 1.1.CB1a: Xác định thông tin, tìm kiếm nội dung đơn giản trong môi trường số." },
  21: { title: "Bài 18: Tự giác tham gia các hoạt động ở trường", period: 21, integ: "Lý tưởng cách mạng: Tinh thần tự giác, trách nhiệm, kỉ luật, tích cực vì tập thể." },
  22: { title: "Bài 19: Tự giác làm việc nhà", period: 22, integ: "Đạo đức, lối sống: Nếp sống tự lập, kỉ luật, 'việc nhỏ làm tốt', yêu quý kính trọng ông bà cha mẹ." },
  23: { title: "Bài 20: Không nói dối", period: 23, integ: "QCN: Quyền được tôn trọng, tin tưởng. | NLS 2.3.CB1a: Nói thật, không gửi thông tin sai sự thật trong nhóm học tập." },
  24: { title: "Bài 21: Không tự ý lấy và sử dụng đồ của người khác", period: 24, integ: "NLS 2.2.CB1a: Ứng xử có trách nhiệm, tôn trọng dữ liệu và tài sản của người khác." },
  25: { title: "Bài 22: Nhặt được của rơi trả lại người đánh mất", period: 25, integ: "Đạo đức, lối sống: Đức tính trung thực, không tham của rơi; sống có trách nhiệm giúp người khác." },
  26: { title: "Bài 23: Biết nhận lỗi", period: 26, integ: "Đạo đức, lối sống: Dũng cảm nhận lỗi, không đổ lỗi; biết xin lỗi chân thành và sửa sai." },
  27: { title: "Thực hành kĩ năng giữa Học kì 2", period: 27, integ: "Thực hành ứng xử trung thực, biết nhận lỗi và tự giác." },
  28: { title: "Bài 24: Phòng, tránh tai nạn giao thông", period: 28, integ: "Quyền chăm sóc sức khỏe; Bổn phận giữ gìn thân thể; Giáo dục an toàn giao thông đường bộ." },
  29: { title: "Bài 25: Phòng, tránh đuối nước", period: 29, integ: "Kĩ năng sống: Không chơi đùa gần sông suối ao hồ khi không có người lớn; mặc áo phao an toàn." },
  30: { title: "Bài 26: Phòng, tránh bỏng", period: 30, integ: "QCN: Quyền được sống an toàn. Tránh xa các nguồn nhiệt, phích nước sôi, nồi cơm điện đang sôi." },
  31: { title: "Bài 27: Phòng, tránh thương tích do ngã", period: 31, integ: "QCN: Phòng tránh tai nạn thương tích. Không chạy nhảy xô đẩy cầu thang, bàn ghế." },
  32: { title: "Bài 28: Phòng, tránh điện giật", period: 32, integ: "QCN & NLS 4.1 CB1b: Rủi ro khi dùng thiết bị điện, thiết bị số (ổ cắm hở, dây sạc hỏng, tay ướt cắm điện); báo người lớn hỗ trợ." },
  33: { title: "Bài 29: Phòng, tránh ngộ độc thực phẩm", period: 33, integ: "QCN & NLS 4.1 CB1b: Ăn chín uống sôi; không làm theo các clip quảng cáo thức ăn không rõ nguồn gốc trên mạng." },
  34: { title: "Bài 30: Phòng, tránh xâm hại", period: 34, integ: "Quyền trẻ em: Bảo vệ thân thể, vùng riêng tư; tìm kiếm sự giúp đỡ từ người lớn đáng tin cậy. | NLS 4.1.CB1b: Không gửi ảnh thông tin riêng tư cho người lạ trên mạng." },
  35: { title: "Ôn tập - Đánh giá cuối HK 2", period: 35, integ: "Tổng kết đánh giá rèn luyện phẩm chất và hành vi chuẩn mực lớp 1." }
};

// ============================================================================
// MÔN TỰ NHIÊN VÀ XÃ HỘI LỚP 1 (35 tuần x 2 tiết = 70 tiết)
// ============================================================================
export const GRADE_1_TNXH: Record<number, Grade1LessonItem[]> = {
  1: [
    { title: "Bài 1: Kể về gia đình – Tiết 1", period: 1, integ: "Quyền con người: Quyền được sum họp với gia đình; Quyền được lắng nghe ý kiến." },
    { title: "Bài 1: Kể về gia đình – Tiết 2", period: 2, integ: "QCN: Quyền sum họp gia đình. | Bổn phận của trẻ em: Biết chia sẻ, phụ giúp việc nhà, tôn trọng và yêu thương các thành viên." }
  ],
  2: [
    { title: "Bài 2: Ngôi nhà của em – Tiết 1", period: 3, integ: "QCN: Học sinh được thực hiện quyền có nơi ở an toàn; bổn phận giữ gìn ngôi nhà." },
    { title: "Bài 2: Ngôi nhà của em – Tiết 2", period: 4, integ: "QPAN: Tranh ảnh về tình yêu gia đình, tình đồng chí đồng đội. | Đạo đức: Trân trọng tổ ấm gia đình." }
  ],
  3: [
    { title: "Bài 3: Đồ dùng trong nhà – Tiết 1", period: 5 },
    { title: "Bài 3: Đồ dùng trong nhà – Tiết 2", period: 6, integ: "QCN: Trẻ em có quyền được sống trong ngôi nhà an toàn, sạch sẽ, gọn gàng." }
  ],
  4: [
    { title: "Bài 4: An toàn khi sử dụng đồ dùng trong nhà – Tiết 1", period: 7, integ: "NLS 4.1.CB1b: Phân biệt rủi ro môi trường số và thiết bị điện tử. | Tích hợp AI: 1.B3.1 - Thiết bị thông minh AI trong nhà báo cháy, báo rò rỉ điện để bảo vệ con người." },
    { title: "Bài 4: An toàn khi sử dụng đồ dùng trong nhà – Tiết 2", period: 8, integ: "Quyền chăm sóc sức khỏe. | Kĩ năng công dân số: Ứng xử trong phòng máy tính. NLS 4.1.CB1b: Không chạm tay ướt vào ổ điện, dây sạc." }
  ],
  5: [
    { title: "Bài 5: Ôn tập chủ đề Gia đình – Tiết 1", period: 9 },
    { title: "Bài 5: Ôn tập chủ đề Gia đình – Tiết 2", period: 10 }
  ],
  6: [
    { title: "Bài 5: Ôn tập chủ đề Gia đình – Tiết 3", period: 11 },
    { title: "Bài 6: Lớp học của em – Tiết 1", period: 12, integ: "Quyền trẻ em: Được học tập trong môi trường an toàn, thân thiện; được thể hiện ý kiến." }
  ],
  7: [
    { title: "Bài 6: Lớp học của em – Tiết 2", period: 13, integ: "Đạo đức, lối sống: Yêu thích học tập, tôn trọng cô giáo và hợp tác với bạn bè." },
    { title: "Bài 6: Lớp học của em – Tiết 3", period: 14 }
  ],
  8: [
    { title: "Bài 7: Cùng khám phá trường học – Tiết 1", period: 15, integ: "Tích hợp AI: 1.C1.2 - Thiết bị AI có bộ phận như người (camera là mắt, micro là tai). AI dùng camera làm 'mắt' trông nom an ninh trường." },
    { title: "Bài 7: Cùng khám phá trường học – Tiết 2", period: 16, integ: "Tích hợp GD công dân số & NLS 4.1.CB1b: Nhận biết đồ dùng an toàn, bảo vệ thiết bị số ở trường." }
  ],
  9: [
    { title: "Bài 7: Cùng khám phá trường học – Tiết 3", period: 17, integ: "Quyền học tập; Kĩ năng sống: Lắng nghe, hợp tác; GD công dân số: Thiết bị điện tử an toàn." },
    { title: "Bài 8: Cùng vui ở trường – Tiết 1", period: 18, integ: "Quyền được vui chơi giải trí lành mạnh tại trường." }
  ],
  10: [
    { title: "Bài 8: Cùng vui ở trường – Tiết 2", period: 19 },
    { title: "Bài 9: Ôn tập chủ đề Trường học – Tiết 1", period: 20, integ: "NLS 4.2.CB1a: Bảo vệ dữ liệu cá nhân; không chia sẻ thông tin cho người lạ trên thiết bị số." }
  ],
  11: [
    { title: "Bài 9: Ôn tập chủ đề Trường học – Tiết 2", period: 21 },
    { title: "Bài 9: Ôn tập chủ đề Trường học – Tiết 3", period: 22, integ: "NLS 4.2.CB1a: Hành động an toàn khi có người lạ hỏi địa chỉ, số điện thoại, hình ảnh." }
  ],
  12: [
    { title: "Bài 10: Cùng khám phá quang cảnh xung quanh – Tiết 1", period: 23 },
    { title: "Bài 10: Cùng khám phá quang cảnh xung quanh – Tiết 2", period: 24, integ: "Quyền tham gia hoạt động xã hội; bổn phận với cộng đồng." }
  ],
  13: [
    { title: "Bài 11: Con người nơi em sống – Tiết 1", period: 25, integ: "NLS 6.1.CB1a & AI 1.A2.2: Robot hỗ trợ vận chuyển, robot bồi bàn là sản phẩm sáng tạo phục vụ con người. | QCN: Tôn trọng người lao động." },
    { title: "Bài 11: Con người nơi em sống – Tiết 2", period: 26 }
  ],
  14: [
    { title: "Bài 12: Vui đón Tết – Tiết 1", period: 27, integ: "Quyền được tham gia các hoạt động văn hóa truyền thống." },
    { title: "Bài 12: Vui đón Tết – Tiết 2", period: 28, integ: "QCN: Tôn trọng sự khác biệt về phong tục, tập quán của các vùng miền." }
  ],
  15: [
    { title: "Bài 13: An toàn trên đường – Tiết 1", period: 29, integ: "NLS 6.1.CB1a & AI 1.A2.2: Nhận diện 'mắt thần' AI (camera giao thông) và xe tự lái tránh chướng ngại vật bảo vệ con người." },
    { title: "Bài 13: An toàn trên đường – Tiết 2", period: 30, integ: "Quyền chăm sóc sức khỏe; Phòng tránh tai nạn bom mìn." }
  ],
  16: [
    { title: "Bài 14: Ôn tập về CĐ Cộng đồng địa phương – Tiết 1", period: 31, integ: "Công dân số: Bài 9: Bảo vệ thông tin cá nhân trên môi trường số." },
    { title: "Bài 14: Ôn tập về CĐ Cộng đồng địa phương – Tiết 2", period: 32, integ: "GD công dân số: Tình huống nguy hiểm khi để lộ thông tin; hành động bảo vệ an toàn." }
  ],
  17: [
    { title: "Ôn tập cuối kì 1", period: 33 },
    { title: "Bài 15: Cây xung quanh em – Tiết 1", period: 34 }
  ],
  18: [
    { title: "Bài 15: Cây xung quanh em – Tiết 2 (Bài học STEM: Cây xung quanh em)", period: 35, integ: "Bài học STEM: Cây xung quanh em. Sưu tầm lá cây, làm bộ sưu tập cây xanh." },
    { title: "Bài 15: Cây xung quanh em – Tiết 3", period: 36 }
  ],
  19: [
    { title: "Bài 16: Chăm sóc và bảo vệ cây trồng - Tiết 1", period: 37, integ: "Quyền và nghĩa vụ bảo vệ môi trường, bảo đảm an toàn thân thể." },
    { title: "Bài 16: Chăm sóc và bảo vệ cây trồng - Tiết 2", period: 38, integ: "NLS 1.1.CB1a: Tìm kiếm thông tin đơn giản về cây có gai, có độc để lưu ý an toàn." }
  ],
  20: [
    { title: "Bài 17: Con vật quanh em - Tiết 1", period: 39, integ: "Tích hợp AI: 1.D1.1 - AI học từ hình ảnh (Google Lens nhận diện loài vật trong sách)." },
    { title: "Bài 17: Con vật quanh em - Tiết 2", period: 40 }
  ],
  21: [
    { title: "Bài 17: Con vật quanh em - Tiết 3", period: 41 },
    { title: "Bài 18: Chăm sóc và bảo vệ vật nuôi - Tiết 1", period: 42, integ: "Nghĩa vụ bảo vệ động vật; quyền được an toàn sức khỏe." }
  ],
  22: [
    { title: "Bài 18: Chăm sóc và bảo vệ vật nuôi - Tiết 2 (Bài học STEM: Chăm sóc và bảo vệ vật nuôi)", period: 43, integ: "Bài học STEM: Chăm sóc và bảo vệ vật nuôi. Làm mô hình chuồng nuôi hoặc thẻ nhắc việc cho vật nuôi." },
    { title: "Bài 19: Ôn tập chủ đề Thực vật và động vật - Tiết 1", period: 44 }
  ],
  23: [
    { title: "Bài 19: Ôn tập chủ đề Thực vật và động vật - Tiết 2", period: 45 },
    { title: "Bài 19: Ôn tập chủ đề Thực vật và động vật - Tiết 3", period: 46, integ: "Bảo vệ môi trường: Giữ vệ sinh môi trường sống của cây và vật nuôi; hạn chế nhựa dùng một lần." }
  ],
  24: [
    { title: "Bài 20: Cơ thể em - Tiết 1", period: 47, integ: "NLS 4.3.CB1a & AI 1.C1.2: AI hỗ trợ người yếu thế (tay giả robot). So sánh cánh tay người và tay robot. | QCN: Chăm sóc cơ thể." },
    { title: "Bài 20: Cơ thể em - Tiết 2", period: 48, integ: "QCN: Quyền được chăm sóc, nuôi dưỡng phát triển thể chất và tinh thần." }
  ],
  25: [
    { title: "Bài 20: Cơ thể em - Tiết 3", period: 49, integ: "QCN: Vệ sinh cá nhân phù hợp, tôn trọng sự khác biệt của người khác." },
    { title: "Bài 21: Các giác quan của cơ thể - Tiết 1", period: 50, integ: "NLS 6.1.CB1a & AI 1.C1.2: So sánh giác quan người với camera ('mắt') và micro ('tai') của AI (Quick, Draw! & Google Assistant)." }
  ],
  26: [
    { title: "Bài 21: Các giác quan của cơ thể - Tiết 2", period: 51, integ: "NLS 4.1.CB1b: Phân biệt rủi ro và mối đe dọa đơn giản trong môi trường số." },
    { title: "Bài 21: Các giác quan của cơ thể - Tiết 3", period: 52, integ: "QCN: Hướng dẫn giữ gìn vệ sinh và bảo vệ các giác quan." }
  ],
  27: [
    { title: "Bài 22: Ăn, uống hằng ngày - Tiết 1", period: 53 },
    { title: "Bài 22: Ăn, uống hằng ngày - Tiết 2", period: 54 }
  ],
  28: [
    { title: "Bài 23: Vận động và nghỉ ngơi - Tiết 1", period: 55, integ: "QCN: Quyền được chăm sóc sức khỏe, vui chơi và nghỉ ngơi." },
    { title: "Bài 23: Vận động và nghỉ ngơi - Tiết 2", period: 56, integ: "QCN: Chăm sóc nuôi dưỡng; NLS 4.1.CB1b: Bảo vệ thiết bị số ứng phó rủi ro." }
  ],
  29: [
    { title: "Bài 24: Tự bảo vệ mình - Tiết 1", period: 57, integ: "NLS 4.1.CB1b & AI 1.B1.1: Cảnh giác với việc kẻ xấu dùng AI giả mạo hình ảnh, giọng nói người thân để lừa gạt; phải hỏi ý kiến cha mẹ." },
    { title: "Bài 24: Tự bảo vệ mình - Tiết 2", period: 58, integ: "Quyền trẻ em: Được bảo vệ khỏi bạo lực, bỏ rơi, bắt cóc, xâm hại." }
  ],
  30: [
    { title: "Bài 25: Ôn tập chủ đề Con người và sức khỏe - Tiết 1", period: 59, integ: "Kĩ năng sống: Vệ sinh cơ thể, ăn uống hợp lí, vận động bảo vệ sức khỏe." },
    { title: "Bài 25: Ôn tập chủ đề Con người và sức khỏe - Tiết 2", period: 60, integ: "Quyền trẻ em: Sống an toàn, không bị bắt nạt hay xâm hại." }
  ],
  31: [
    { title: "Bài 25: Ôn tập chủ đề Con người và sức khỏe - Tiết 3", period: 61, integ: "Tích hợp Mĩ thuật và sức khỏe: Làm sản phẩm học tập chăm sóc cơ thể." },
    { title: "Bài 26: Cùng khám phá bầu trời - Tiết 1", period: 62, integ: "Kĩ năng sống: Không nhìn trực tiếp vào Mặt Trời; đội mũ nón che nắng." }
  ],
  32: [
    { title: "Bài 26: Cùng khám phá bầu trời - Tiết 2 (Bài học STEM: Bầu trời ngày và đêm)", period: 63, integ: "Bài học STEM: Bầu trời ngày và đêm. Làm mô hình bầu trời ngày và đêm từ giấy bìa, màu vẽ." },
    { title: "Bài 26: Cùng khám phá bầu trời - Tiết 3", period: 64, integ: "NLS 2.1.CB1a: Lựa chọn hình ảnh bầu trời hoặc phiếu quan sát để chia sẻ an toàn." }
  ],
  33: [
    { title: "Bài 27: Thời tiết luôn thay đổi - Tiết 1", period: 65, integ: "Kĩ năng sống: Lựa chọn trang phục phù hợp thời tiết. | Tích hợp AI: 1.A2.2 - AI hỗ trợ các nhà khoa học xử lý dữ liệu để dự báo thời tiết nhanh và chính xác." },
    { title: "Bài 27: Thời tiết luôn thay đổi - Tiết 2", period: 66, integ: "NLS 4.1.CB1b: Bảo vệ thiết bị số khi trời mưa, sấm sét." }
  ],
  34: [
    { title: "Bài 27: Thời tiết luôn thay đổi - Tiết 3", period: 67, integ: "Quyền được chăm sóc và bảo vệ trước tác động bất lợi của thời tiết." },
    { title: "Bài 28: Ôn tập chủ đề Trái đất và bầu trời - Tiết 1", period: 68, integ: "Kĩ năng sống: Quan sát thời tiết để giữ gìn sức khỏe." }
  ],
  35: [
    { title: "Bài 28: Ôn tập chủ đề Trái đất và bầu trời - Tiết 2", period: 69, integ: "NLS 2.1.CB1a: Lựa chọn phương tiện giao tiếp số đơn giản thích hợp." },
    { title: "Ôn tập cuối kì 2", period: 70 }
  ]
};

// ============================================================================
// MÔN HOẠT ĐỘNG TRẢI NGHIỆM LỚP 1 (35 tuần x 3 tiết = 105 tiết)
// Tiết 1: Sinh hoạt dưới cờ (SHDC)
// Tiết 2: Hoạt động giáo dục theo chủ đề (HĐGD)
// Tiết 3: Sinh hoạt lớp (SHL) / Sinh hoạt sao
// ============================================================================
export const GRADE_1_HDTN: Record<number, Grade1LessonItem[]> = {
  1: [
    { title: "Sinh hoạt dưới cờ: Lễ Khai giảng", sub: "SHDC", period: 1 },
    { title: "Bài 1: Làm quen với bạn mới", sub: "HĐGD", period: 2, integ: "Quyền con người: Quyền tự do biểu đạt, tôn trọng bạn bè. | NLS 2.3.CB1a: Chào hỏi, giới thiệu bản thân lịch sự trong môi trường số." },
    { title: "Sinh hoạt lớp: Sơ kết tuần 1, lập kế hoạch tuần 2", sub: "SHL", period: 3 }
  ],
  2: [
    { title: "Sinh hoạt dưới cờ: Tìm hiểu nội quy nhà trường", sub: "SHDC", period: 4 },
    { title: "Bài 2: Những việc nên làm trong giờ học, giờ chơi (Tiết 1)", sub: "HĐGD", period: 5, integ: "QCN: Quyền học tập vui chơi lành mạnh. | Đạo đức: Ứng xử văn minh, đoàn kết." },
    { title: "Sinh hoạt sao: Sơ kết tuần 2, lập kế hoạch tuần 3", sub: "SHL", period: 6 }
  ],
  3: [
    { title: "Sinh hoạt dưới cờ: Nói lời hay - làm việc tốt", sub: "SHDC", period: 7 },
    { title: "Bài 2: Những việc nên làm trong giờ học, giờ chơi (Tiết 2)", sub: "HĐGD", period: 8 },
    { title: "Sinh hoạt lớp: Làm quen với sinh hoạt Sao Nhi đồng", sub: "SHL", period: 9, integ: "Đạo đức lối sống: Đi học đúng giờ, lễ phép, giúp đỡ bạn bè. | QCN: Môi trường an toàn lành mạnh." }
  ],
  4: [
    { title: "Sinh hoạt dưới cờ: Vui trung thu", sub: "SHDC", period: 10 },
    { title: "Bài 2: Những việc nên làm trong giờ học, giờ chơi (Tiết 3)", sub: "HĐGD", period: 11, integ: "Quyền trẻ em: Quyền được học tập, vui chơi trong môi trường an toàn, giữ gìn trật tự." },
    { title: "Sinh hoạt lớp: Vui trung thu", sub: "SHL", period: 12 }
  ],
  5: [
    { title: "Sinh hoạt dưới cờ: Sao Nhi đồng chăm ngoan", sub: "SHDC", period: 13 },
    { title: "Bài 3: Cảm xúc của em", sub: "HĐGD", period: 14, integ: "Quyền tự do bày tỏ ý kiến; tôn trọng bản thân và người khác; bảo vệ quyền riêng tư." },
    { title: "Sinh hoạt lớp: Sơ kết tuần 5, lập kế hoạch tuần 6", sub: "SHL", period: 15 }
  ],
  6: [
    { title: "Sinh hoạt dưới cờ: Hoạt động nhân đạo", sub: "SHDC", period: 16 },
    { title: "Bài 4: Yêu thương con người (Tiết 1)", sub: "HĐGD", period: 17 },
    { title: "Sinh hoạt sao: Sơ kết tuần 6, lập kế hoạch tuần 7", sub: "SHL", period: 18, integ: "Đạo đức lối sống: Quan tâm chia sẻ và giúp đỡ người khác là biểu hiện của lòng nhân ái." }
  ],
  7: [
    { title: "Sinh hoạt dưới cờ: Thử làm ca sĩ chào mừng ngày Phụ nữ Việt Nam 20-10", sub: "SHDC", period: 19 },
    { title: "Bài 4: Yêu thương con người (Tiết 2)", sub: "HĐGD", period: 20 },
    { title: "Sinh hoạt lớp: Sơ kết tuần 7, lập kế hoạch tuần 8", sub: "SHL", period: 21, integ: "Đạo đức lối sống: Thể hiện tình yêu thương người thân và bạn bè." }
  ],
  8: [
    { title: "Sinh hoạt dưới cờ: Tuyên dương tấm gương Nhi đồng chăm ngoan", sub: "SHDC", period: 22 },
    { title: "Bài 4: Yêu thương con người (Tiết 3)", sub: "HĐGD", period: 23, integ: "Lý tưởng cách mạng, đạo đức lối sống: Biết quan tâm, chia sẻ, giúp đỡ người xung quanh." },
    { title: "Sinh hoạt sao: Sơ kết tuần 8, lập kế hoạch tuần 9", sub: "SHL", period: 24 }
  ],
  9: [
    { title: "Sinh hoạt dưới cờ: Tìm hiểu truyền thống nhà trường", sub: "SHDC", period: 25 },
    { title: "Bài 5: Thân thiện với bạn bè", sub: "HĐGD", period: 26, integ: "Hình thành phẩm chất nhân ái, tôn trọng; ứng xử thân thiện, hợp tác." },
    { title: "Sinh hoạt lớp: Sơ kết tuần 9, lập kế hoạch tuần 10", sub: "SHL", period: 27 }
  ],
  10: [
    { title: "Sinh hoạt dưới cờ: Lễ Phát động thi đua thực hiện Năm điều Bác Hồ dạy", sub: "SHDC", period: 28 },
    { title: "Bài 6: Thực hiện Năm điều Bác Hồ dạy", sub: "HĐGD", period: 29, integ: "Tư tưởng đạo đức Hồ Chí Minh: Ghi nhớ và làm theo Năm điều Bác Hồ dạy." },
    { title: "Sinh hoạt sao: Sơ kết tuần 10, lập kế hoạch tuần 11", sub: "SHL", period: 30, integ: "Đạo đức lối sống: Yêu nước, nhân ái, chăm chỉ, trung thực, trách nhiệm." }
  ],
  11: [
    { title: "Sinh hoạt dưới cờ: Chào mừng ngày Nhà giáo Việt Nam 20-11", sub: "SHDC", period: 31 },
    { title: "Bài 7: Kính yêu thầy cô (Tiết 1)", sub: "HĐGD", period: 32 },
    { title: "Sinh hoạt lớp: Sơ kết tuần 11, lập kế hoạch tuần 12", sub: "SHL", period: 33, integ: "QCN: Quyền được học tập, phát triển năng lực bản thân." }
  ],
  12: [
    { title: "Sinh hoạt dưới cờ: Trưng bày và giới thiệu sản phẩm ở 'Góc tri ân' thầy cô", sub: "SHDC", period: 34 },
    { title: "Bài 7: Kính yêu thầy cô (Tiết 2)", sub: "HĐGD", period: 35 },
    { title: "Sinh hoạt sao: Sơ kết tuần 12, lập kế hoạch tuần 13", sub: "SHL", period: 36 }
  ],
  13: [
    { title: "Sinh hoạt dưới cờ: Tìm hiểu về quyền và bổn phận của trẻ em", sub: "SHDC", period: 37 },
    { title: "Bài 8: An toàn khi vui chơi (Tiết 1)", sub: "HĐGD", period: 38 },
    { title: "Sinh hoạt lớp: Sơ kết tuần 13, lập kế hoạch tuần 14", sub: "SHL", period: 39 }
  ],
  14: [
    { title: "Sinh hoạt dưới cờ: Chào mừng ngày thành lập QĐND Việt Nam 22-12", sub: "SHDC", period: 40 },
    { title: "Bài 8: An toàn khi vui chơi (Tiết 2)", sub: "HĐGD", period: 41, integ: "Phòng chống tai nạn thương tích: Nhận diện trò chơi nguy hiểm và biết từ chối, khuyên can bạn." },
    { title: "Sinh hoạt sao: Sơ kết tuần 14, lập kế hoạch tuần 15", sub: "SHL", period: 42 }
  ],
  15: [
    { title: "Sinh hoạt dưới cờ: Diễn đàn phòng chống bạo lực học đường", sub: "SHDC", period: 43 },
    { title: "Bài 9: Phòng tránh bị bắt nạt", sub: "HĐGD", period: 44, integ: "QCN: Quyền an toàn, được lên tiếng và trợ giúp. | NLS 4.1.CB1b: Nhận biết nguy cơ bị trêu chọc trên mạng, báo người lớn." },
    { title: "Sinh hoạt lớp: Sơ kết tuần 15, lập kế hoạch tuần 16", sub: "SHL", period: 45 }
  ],
  16: [
    { title: "Sinh hoạt dưới cờ: An toàn cho nụ cười trẻ thơ", sub: "SHDC", period: 46 },
    { title: "Bài 10: Sử dụng đồ dùng an toàn trong gia đình", sub: "HĐGD", period: 47, integ: "NLS 2.1.CB1a: Lựa chọn hình ảnh, lời nói và công cụ số đơn giản để trao đổi về hành vi an toàn." },
    { title: "Sinh hoạt sao: Sơ kết tuần 16, lập kế hoạch tuần 17", sub: "SHL", period: 48 }
  ],
  17: [
    { title: "Sinh hoạt dưới cờ: Giao lưu 'Nét đẹp tuổi thơ'", sub: "SHDC", period: 49 },
    { title: "Bài 11: Chân dung của em", sub: "HĐGD", period: 50, integ: "QCN: Tôn trọng sự khác biệt, tự hào về bản thân. | NLS 4.2.CB1a: Bảo vệ dữ liệu cá nhân, không chia sẻ ảnh, tên, SĐT cho người lạ." },
    { title: "Sinh hoạt lớp: Sơ kết tuần 17, lập kế hoạch tuần 18", sub: "SHL", period: 51 }
  ],
  18: [
    { title: "Sinh hoạt dưới cờ: Ngày hội vì sức khỏe học đường", sub: "SHDC", period: 52 },
    { title: "Bài 12: Giữ vệ sinh cá nhân", sub: "HĐGD", period: 53, integ: "NLS 2.1.CB1a: Dùng công cụ số xem video, quét mã QR hướng dẫn các bước giữ vệ sinh cá nhân." },
    { title: "Sinh hoạt sao: Sơ kết tuần 18, lập kế hoạch tuần 19", sub: "SHL", period: 54 }
  ],
  // HỌC KÌ 2 (Tuần 19 - 35)
  19: [
    { title: "Sinh hoạt dưới cờ: Vệ sinh an toàn thực phẩm", sub: "SHDC", period: 55 },
    { title: "Bài 13: Ăn uống hợp lí", sub: "HĐGD", period: 56, integ: "NLS 2.2.CB1a: Lựa chọn công nghệ số đơn giản để chia sẻ thông tin, ứng xử có trách nhiệm." },
    { title: "Sinh hoạt lớp: Sơ kết tuần 19, lập kế hoạch tuần 20", sub: "SHL", period: 57 }
  ],
  20: [
    { title: "Sinh hoạt dưới cờ: Ngày hội trình diễn thời trang", sub: "SHDC", period: 58 },
    { title: "Bài 14: Sử dụng trang phục hằng ngày", sub: "HĐGD", period: 59 },
    { title: "Sinh hoạt sao: Sơ kết tuần 20, lập kế hoạch tuần 21", sub: "SHL", period: 60 }
  ],
  21: [
    { title: "Sinh hoạt dưới cờ: Ủng hộ 'Tết yêu thương'", sub: "SHDC", period: 61 },
    { title: "Bài 15: Sắp xếp nhà cửa gọn gàng đón Tết (Tiết 1)", sub: "HĐGD", period: 62 },
    { title: "Sinh hoạt lớp: Sơ kết tuần 21, lập kế hoạch tuần 22", sub: "SHL", period: 63 }
  ],
  22: [
    { title: "Sinh hoạt dưới cờ: Hội chợ xuân", sub: "SHDC", period: 64 },
    { title: "Bài 15: Sắp xếp nhà cửa gọn gàng đón Tết (Tiết 2)", sub: "HĐGD", period: 65 },
    { title: "Sinh hoạt sao: Sơ kết tuần 22, lập kế hoạch tuần 23", sub: "SHL", period: 66 }
  ],
  23: [
    { title: "Sinh hoạt dưới cờ: Giao lưu 'Đón Tết cổ truyền dân tộc'", sub: "SHDC", period: 67 },
    { title: "Bài 16: Ứng xử khi được nhận quà ngày Tết (Tiết 1)", sub: "HĐGD", period: 68, integ: "Lý tưởng cách mạng, đạo đức lối sống: Khiêm nhường, biết ơn, tiết kiệm, chia sẻ niềm vui ngày Tết." },
    { title: "Sinh hoạt lớp: Sơ kết tuần 23, lập kế hoạch tuần 24", sub: "SHL", period: 69 }
  ],
  24: [
    { title: "Sinh hoạt dưới cờ: Vui chơi ngày Tết", sub: "SHDC", period: 70 },
    { title: "Bài 16: Ứng xử khi được nhận quà ngày Tết (Tiết 2)", sub: "HĐGD", period: 71, integ: "QCN: Quyền được tham gia các hoạt động văn hóa truyền thống, bày tỏ cảm xúc." },
    { title: "Sinh hoạt sao: Sơ kết tuần 24, lập kế hoạch tuần 25", sub: "SHL", period: 72 }
  ],
  25: [
    { title: "Sinh hoạt dưới cờ: Trò chơi sinh hoạt cộng đồng", sub: "SHDC", period: 73 },
    { title: "Bài 17: Hàng xóm nhà em (Tiết 1)", sub: "HĐGD", period: 74, integ: "Lý tưởng cách mạng: Tình làng nghĩa xóm, sống thân thiện, lễ phép với mọi người xung quanh." },
    { title: "Sinh hoạt lớp: Sơ kết tuần 25, lập kế hoạch tuần 26", sub: "SHL", period: 75 }
  ],
  26: [
    { title: "Sinh hoạt dưới cờ: Chào mừng ngày Quốc tế Phụ nữ 8-3", sub: "SHDC", period: 76 },
    { title: "Bài 17: Hàng xóm nhà em (Tiết 2)", sub: "HĐGD", period: 77, integ: "Đạo đức lối sống: Đoàn kết, tôn trọng và giúp đỡ láng giềng nơi cư trú." },
    { title: "Sinh hoạt lớp: Sơ kết tuần 26, lập kế hoạch tuần 27", sub: "SHL", period: 78 }
  ],
  27: [
    { title: "Sinh hoạt dưới cờ: Em làm kế hoạch nhỏ", sub: "SHDC", period: 79 },
    { title: "Bài 18: Em tham gia các hoạt động xã hội (Tiết 1)", sub: "HĐGD", period: 80, integ: "Lý tưởng cách mạng, đạo đức, lối sống: Tinh thần đoàn kết, sống nhân ái, làm việc tốt vì cộng đồng." },
    { title: "Sinh hoạt lớp: Sơ kết tuần 27, lập kế hoạch tuần 28", sub: "SHL", period: 81 }
  ],
  28: [
    { title: "Sinh hoạt dưới cờ: Lễ phát động phong trào Tuổi nhỏ làm việc nhỏ 'Nuôi heo đất - Giúp bạn đến trường'", sub: "SHDC", period: 82 },
    { title: "Bài 18: Em tham gia các hoạt động xã hội (Tiết 2)", sub: "HĐGD", period: 83, integ: "Đạo đức lối sống: Tương thân tương ái, giúp đỡ bạn bè có hoàn cảnh khó khăn." },
    { title: "Sinh hoạt sao: Sơ kết tuần 28, lập kế hoạch tuần 29", sub: "SHL", period: 84 }
  ],
  29: [
    { title: "Sinh hoạt dưới cờ: Chăm sóc vườn cây nhà trường", sub: "SHDC", period: 85, integ: "Bảo vệ môi trường: Yêu thiên nhiên, chăm sóc cây xanh." },
    { title: "Bài 19: Thiên nhiên tươi đẹp quê em (Tiết 1)", sub: "HĐGD", period: 86, integ: "Bảo vệ môi trường: Yêu quý cảnh đẹp quê hương." },
    { title: "Sinh hoạt lớp: Sơ kết tuần 29, lập kế hoạch tuần 30", sub: "SHL", period: 87, integ: "Bảo vệ môi trường: Bảo vệ cảnh quan trường học sạch đẹp." }
  ],
  30: [
    { title: "Sinh hoạt dưới cờ: Em tập làm hướng dẫn viên du lịch", sub: "SHDC", period: 88 },
    { title: "Bài 19: Thiên nhiên tươi đẹp quê em (Tiết 2)", sub: "HĐGD", period: 89, integ: "NLS 1.1.CB1a: Tìm thông tin đơn giản về cảnh đẹp quê hương qua hình ảnh/video GV hướng dẫn." },
    { title: "Sinh hoạt sao: Sơ kết tuần 30, lập kế hoạch tuần 31", sub: "SHL", period: 90 }
  ],
  31: [
    { title: "Sinh hoạt dưới cờ: Hát ca ngợi cảnh đẹp quê hương", sub: "SHDC", period: 91, integ: "Bảo vệ môi trường: Giữ gìn môi trường xanh sạch đẹp." },
    { title: "Bài 20: Em bảo vệ cảnh quan thiên nhiên (Tiết 1)", sub: "HĐGD", period: 92, integ: "Bảo vệ môi trường & NLS 3.1.CB1a: Lựa chọn ảnh hoặc biểu tượng số tạo thông điệp ngắn bảo vệ cảnh quan." },
    { title: "Sinh hoạt lớp: Sơ kết tuần 31, lập kế hoạch tuần 32", sub: "SHL", period: 93, integ: "Bảo vệ môi trường: Thực hiện việc làm cụ thể bảo vệ thiên nhiên ở trường và nhà." }
  ],
  32: [
    { title: "Sinh hoạt dưới cờ: Ngày hội sách trường em", sub: "SHDC", period: 94 },
    { title: "Bài 20: Em bảo vệ cảnh quan thiên nhiên (Tiết 2)", sub: "HĐGD", period: 95, integ: "Bảo vệ môi trường: Nhận ra hành vi đúng sai với cây xanh, không khắc vẽ lên cây." },
    { title: "Sinh hoạt sao: Sơ kết tuần 32, lập kế hoạch tuần 33", sub: "SHL", period: 96, integ: "Bảo vệ môi trường: Bỏ rác đúng nơi quy định, chăm sóc bồn hoa lớp học." }
  ],
  33: [
    { title: "Sinh hoạt dưới cờ: Thân thiện với môi trường", sub: "SHDC", period: 97, integ: "Bảo vệ môi trường: Giữ gìn vệ sinh, sử dụng và bảo quản sách cẩn thận." },
    { title: "Bài 21: Giữ gìn môi trường sạch, đẹp (Tiết 1)", sub: "HĐGD", period: 98, integ: "Bảo vệ môi trường: Giữ vệ sinh đường làng ngõ xóm, trường lớp học." },
    { title: "Sinh hoạt lớp: Sơ kết tuần 33, lập kế hoạch tuần 34", sub: "SHL", period: 99, integ: "Bảo vệ môi trường: Thái độ không đồng tình với việc xả rác bừa bãi." }
  ],
  34: [
    { title: "Sinh hoạt dưới cờ: Mừng Sinh nhật Bác Hồ, mừng Đội ta trưởng thành", sub: "SHDC", period: 100, integ: "Bảo vệ môi trường: Giữ gìn vệ sinh trường lớp, làm theo lời Bác Hồ dạy." },
    { title: "Bài 21: Giữ gìn môi trường sạch, đẹp (Tiết 2)", sub: "HĐGD", period: 101, integ: "Bảo vệ môi trường & Tích hợp AI: 1.D2.1 - Máy thông minh nhận diện hình ảnh để phân loại rác giấy, chai nhựa, lá cây." },
    { title: "Sinh hoạt sao: Sơ kết tuần 34, lập kế hoạch tuần 35", sub: "SHL", period: 102, integ: "Bảo vệ môi trường: Tham gia trực nhật và vệ sinh lớp học sạch sẽ." }
  ],
  35: [
    { title: "Sinh hoạt dưới cờ: Lễ Tổng kết năm học", sub: "SHDC", period: 103 },
    { title: "Bài 21: Giữ gìn môi trường sạch, đẹp (Tiết 3)", sub: "HĐGD", period: 104, integ: "Bảo vệ môi trường: Hạn chế túi nilon, tiết kiệm nước, bảo vệ môi trường trong dịp hè." },
    { title: "Sinh hoạt lớp: Tổng kết năm học 2026 - 2027", sub: "SHL", period: 105, integ: "Tổng kết nề nếp thi đua; sinh hoạt hè an toàn, thân thiện với môi trường." }
  ]
};

// ============================================================================
// MÔN TĂNG CƯỜNG TIẾNG VIỆT (TCTV - 2 tiết/tuần) & TĂNG CƯỜNG TOÁN (TCT - 3 tiết/tuần)
// ============================================================================
export function getGrade1TCTV(week: number, periodInWeek: number): Grade1LessonItem {
  return {
    title: `Luyện tập Tiếng Việt tuần ${week}: Củng cố đọc, viết và mở rộng vốn từ (Tiết ${periodInWeek})`,
    sub: "Tăng cường Tiếng Việt",
    period: (week - 1) * 2 + periodInWeek,
    integ: "Rèn luyện kĩ năng đọc trơn, giữ khoảng cách các chữ, uốn nắn nét chữ đúng chuẩn và rèn phát âm rõ ràng."
  };
}

export function getGrade1TCT(week: number, periodInWeek: number): Grade1LessonItem {
  return {
    title: `Luyện tập Toán tuần ${week}: Thực hành rèn kĩ năng đếm, tính toán và giải toán (Tiết ${periodInWeek})`,
    sub: "Tăng cường Toán",
    period: (week - 1) * 3 + periodInWeek,
    integ: "Củng cố kĩ năng sử dụng đồ dùng học toán, nhận biết số lượng và rèn thao tác tư duy toán học thực tế."
  };
}
