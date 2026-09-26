import { Grade1LessonItem } from "./grade1Curriculum";

// ============================================================================
// MÔN TOÁN LỚP 1 (35 tuần x 3 tiết/tuần = 105 tiết)
// Tích hợp: AI, STEM (thay thế bài học), Năng lực số (NLS), QPAN, Đạo đức lối sống
// ============================================================================

export const GRADE_1_TOAN: Record<number, Grade1LessonItem[]> = {
  1: [
    { title: "Tiết học đầu tiên", period: 1, integ: "Tích hợp AI: 1.A2.1 - Nhận biết và kể tên được một số thiết bị có sử dụng AI (như robot). Nhận biết nhân vật Rô-bốt trong sách là một đại diện tiêu biểu của AI hỗ trợ con người học tập. Gợi ý: Xem tranh và thảo luận vì sao bạn Rô-bốt có thể học Toán cùng chúng ta." },
    { title: "Bài 1: Các số 0, 1, 2, 3, 4, 5 - Tiết 1", period: 2 },
    { title: "Bài 1: Các số 0, 1, 2, 3, 4, 5 - Tiết 2", period: 3 }
  ],
  2: [
    { title: "Bài 1: Các số 0, 1, 2, 3, 4, 5 - Tiết 3", period: 4 },
    { title: "Bài 2: Các số 6, 7, 8, 9, 10 - Tiết 1", period: 5 },
    { title: "Bài 2: Các số 6, 7, 8, 9, 10 - Tiết 2 (Bài học STEM: Trải nghiệm cùng khay 10 học Toán)", period: 6, integ: "Thay bằng Bài học STEM: Trải nghiệm cùng khay 10 học Toán (2 tiết). Học sinh sử dụng khay 10 ô và hột hạt/khối lập phương để đếm, tách, gộp các số từ 6 đến 10." }
  ],
  3: [
    { title: "Bài 2: Các số 6, 7, 8, 9, 10 - Tiết 3", period: 7 },
    { title: "Bài 3: Nhiều hơn, ít hơn, bằng nhau - Tiết 1", period: 8, integ: "Tích hợp AI: 1.D2.1 - Nhận biết máy thông minh có thể làm một việc (so sánh hình ảnh, đếm số lượng nhanh chóng). Gợi ý: Xem video ứng dụng AI tự động đếm và so sánh số quả táo trên cây. | Năng lực số 4.3CB1a: Phân biệt các cách thức đơn giản để tránh rủi ro cho mắt và sức khỏe khi dùng thiết bị số." },
    { title: "Bài 3: Nhiều hơn, ít hơn, bằng nhau - Tiết 2", period: 9 }
  ],
  4: [
    { title: "Bài 4: So sánh số - Tiết 1", period: 10 },
    { title: "Bài 4: So sánh số - Tiết 2 (Bài học STEM: Dụng cụ so sánh số trong phạm vi 10)", period: 11, integ: "Thay bằng Bài học STEM: Dụng cụ so sánh số trong phạm vi 10 (2 tiết). Thiết kế đòn bẩy hoặc thước so sánh trực quan." },
    { title: "Bài 4: So sánh số - Tiết 3", period: 12 }
  ],
  5: [
    { title: "Bài 4: So sánh số - Tiết 4", period: 13 },
    { title: "Bài 5: Mấy và mấy - Tiết 1", period: 14 },
    { title: "Bài 5: Mấy và mấy - Tiết 2", period: 15 }
  ],
  6: [
    { title: "Bài 5: Mấy và mấy - Tiết 3", period: 16 },
    { title: "Bài 6: Luyện tập chung - Tiết 1", period: 17 },
    { title: "Bài 6: Luyện tập chung - Tiết 2", period: 18 }
  ],
  7: [
    { title: "Bài 6: Luyện tập chung - Tiết 3 (Bài học STEM: Thực hành cùng thẻ học Toán)", period: 19, integ: "Thay bằng Bài học STEM: Thực hành cùng thẻ học Toán (2 tiết)." },
    { title: "Bài 6: Luyện tập chung - Tiết 4", period: 20 },
    { title: "Bài 7: Hình vuông, hình tròn, hình tam giác, hình chữ nhật - Tiết 1", period: 21, integ: "Chuyển đổi số (CDS): Tìm kiếm dữ liệu hướng dẫn làm sản phẩm trang trí hình học trên internet. | Tích hợp AI: 1.C1.3 - AI có khả năng xử lý hình ảnh qua camera ('mắt của máy') để nhận diện hình dạng hình học. Hoạt động 'Mắt thần' nhận diện hình vuông, tròn trong lớp." }
  ],
  8: [
    { title: "Bài 7: Hình vuông, hình tròn, hình tam giác, hình chữ nhật - Tiết 2", period: 22 },
    { title: "Bài 8: Thực hành lắp ghép, xếp hình - Tiết 1 (Bài học STEM: Thực hành trang trí lớp học bằng các hình hình học)", period: 23, integ: "Thay bằng Bài học STEM: Thực hành trang trí lớp học bằng các hình hình học (2 tiết). | Tích hợp AI: 1.C1.2 - Robot có bộ phận camera làm 'mắt' để nhận biết các mảnh ghép và xếp hình đúng." },
    { title: "Bài 8: Thực hành lắp ghép, xếp hình - Tiết 2", period: 24 }
  ],
  9: [
    { title: "Bài 9: Luyện tập chung", period: 25 },
    { title: "Bài 10: Phép cộng trong phạm vi 10 - Tiết 1", period: 26 },
    { title: "Bài 10: Phép cộng trong phạm vi 10 - Tiết 2", period: 27 }
  ],
  10: [
    { title: "Bài 10: Phép cộng trong phạm vi 10 - Tiết 3", period: 28 },
    { title: "Bài 10: Phép cộng trong phạm vi 10 - Tiết 4", period: 29 },
    { title: "Bài 10: Phép cộng trong phạm vi 10 - Tiết 5", period: 30 }
  ],
  11: [
    { title: "Bài 10: Phép cộng trong phạm vi 10 - Tiết 6", period: 31, integ: "Chuyển đổi số (CDS): Sử dụng tính năng chụp ảnh của điện thoại thông minh để chụp ảnh bài làm và gửi vào Zalo cho cô giáo kiểm tra." },
    { title: "Bài 11: Phép trừ trong phạm vi 10 - Tiết 1", period: 32 },
    { title: "Bài 11: Phép trừ trong phạm vi 10 - Tiết 2", period: 33 }
  ],
  12: [
    { title: "Bài 11: Phép trừ trong phạm vi 10 - Tiết 3", period: 34, integ: "Năng lực số 2.1.CB1a: Lựa chọn phương tiện giao tiếp số đơn giản thích hợp cho một bối cảnh cụ thể." },
    { title: "Bài 11: Phép trừ trong phạm vi 10 - Tiết 4", period: 35 },
    { title: "Bài 11: Phép trừ trong phạm vi 10 - Tiết 5", period: 36 }
  ],
  13: [
    { title: "Bài 11: Phép trừ trong phạm vi 10 - Tiết 6", period: 37 },
    { title: "Bài 12: Bảng cộng, bảng trừ trong phạm vi 10 - Tiết 1", period: 38 },
    { title: "Bài 12: Bảng cộng, bảng trừ trong phạm vi 10 - Tiết 2", period: 39 }
  ],
  14: [
    { title: "Bài 12: Bảng cộng, bảng trừ trong phạm vi 10 - Tiết 3", period: 40 },
    { title: "Bài 13: Luyện tập chung - Tiết 1 (Bài học STEM: Dụng cụ tính cộng, tính trừ)", period: 41, integ: "Thay bằng Bài học STEM: Dụng cụ tính cộng, tính trừ (2 tiết)." },
    { title: "Bài 13: Luyện tập chung - Tiết 2", period: 42 }
  ],
  15: [
    { title: "Bài 13: Luyện tập chung - Tiết 3 (Bài học STEM: Thực hành tính nhẩm)", period: 43, integ: "Thay bằng Bài học STEM: Thực hành tính nhẩm (2 tiết)." },
    { title: "Bài 14: Khối lập phương, khối hộp chữ nhật - Tiết 1", period: 44 },
    { title: "Bài 14: Khối lập phương, khối hộp chữ nhật - Tiết 2", period: 45 }
  ],
  16: [
    { title: "Bài 15: Vị trí, định hướng trong không gian - Tiết 1", period: 46, integ: "Tích hợp AI: 1.C1.2 - Hiểu AI có khả năng hiểu mệnh lệnh đơn giản. Robot cần các lệnh vị trí chính xác (trái, phải, trước, sau) để di chuyển đúng mục tiêu. Trò chơi 'Lập trình viên nhí'. | NLS 5.1.CB1a: Xác định vấn đề kỹ thuật đơn giản khi vận hành thiết bị số. | GD công dân số: Tư duy lập trình." },
    { title: "Bài 15: Vị trí, định hướng trong không gian - Tiết 2", period: 47, integ: "Tích hợp GD công dân số: Hiểu đặc điểm ngôn ngữ lập trình (lệnh rõ ràng, rẽ nhánh) qua nhận biết vị trí trên - dưới, trái - phải, trước - sau." },
    { title: "Bài 16: Luyện tập chung", period: 48 }
  ],
  17: [
    { title: "Bài 17: Ôn tập các số trong phạm vi 10 - Tiết 1", period: 49 },
    { title: "Bài 17: Ôn tập các số trong phạm vi 10 - Tiết 2", period: 50 },
    { title: "Bài 18: Ôn tập phép cộng, phép trừ trong phạm vi 10 - Tiết 1", period: 51 }
  ],
  18: [
    { title: "Bài 18: Ôn tập phép cộng, phép trừ trong phạm vi 10 - Tiết 2", period: 52 },
    { title: "Bài 19: Ôn tập hình học", period: 53 },
    { title: "Bài 20: Ôn tập chung", period: 54 }
  ],
  // HỌC KÌ 2 (Tuần 19 - 35)
  19: [
    { title: "Bài 21: Số có hai chữ số - Tiết 1", period: 55 },
    { title: "Bài 21: Số có hai chữ số - Tiết 2", period: 56 },
    { title: "Bài 21: Số có hai chữ số - Tiết 3", period: 57 }
  ],
  20: [
    { title: "Bài 21: Số có hai chữ số - Tiết 4", period: 58 },
    { title: "Bài 21: Số có hai chữ số - Tiết 5", period: 59 },
    { title: "Bài 21: Số có hai chữ số - Tiết 6", period: 60 }
  ],
  21: [
    { title: "Bài 22: So sánh số có hai chữ số - Tiết 1", period: 61 },
    { title: "Bài 22: So sánh số có hai chữ số - Tiết 2", period: 62 },
    { title: "Bài 22: So sánh số có hai chữ số - Tiết 3", period: 63 }
  ],
  22: [
    { title: "Bài 23: Bảng các số từ 1 đến 100 (Bài học STEM: Bảng các số từ 1 đến 100)", period: 64, integ: "Thay bằng Bài học STEM: Bảng các số từ 1 đến 100 (2 tiết). | CDS & NLS 1.1.CB1a: Tìm kiếm dữ liệu trên Google để tìm hiểu cách trang trí bảng số sáng tạo. | Tích hợp AI: 1.A1.2 - Biết phản ứng hiển thị của máy/AI là do con người lập trình trước." },
    { title: "Bài 24: Luyện tập chung - Tiết 1", period: 65 },
    { title: "Bài 24: Luyện tập chung - Tiết 2", period: 66, integ: "Tích hợp đạo đức, lối sống: Nhận lỗi - xin lỗi - khắc phục hậu quả khi làm hỏng đồ; giữ gìn đồ dùng chung." }
  ],
  23: [
    { title: "Bài 25: Dài hơn, ngắn hơn - Tiết 1", period: 67 },
    { title: "Bài 25: Dài hơn, ngắn hơn - Tiết 2", period: 68 },
    { title: "Bài 26: Đơn vị đo độ dài - Tiết 1", period: 69, integ: "Tích hợp NLS 5.2.CB1a: Nhận ra công cụ số đơn giản giải quyết nhu cầu (thước online, app đo ảo). | Tích hợp AI: 1.A2.2 - Công cụ AI hỗ trợ đo đạc nhanh chóng." }
  ],
  24: [
    { title: "Bài 26: Đơn vị đo độ dài - Tiết 2", period: 70, integ: "Tích hợp NLS 5.2.CB1a: Sử dụng công cụ số (thước online/ứng dụng đo ảo) để đo và so sánh kết quả." },
    { title: "Bài 27: Thực hành ước lượng và đo độ dài - Tiết 1", period: 71 },
    { title: "Bài 27: Thực hành ước lượng và đo độ dài - Tiết 2", period: 72 }
  ],
  25: [
    { title: "Bài 28: Luyện tập chung - Tiết 1", period: 73 },
    { title: "Bài 28: Luyện tập chung - Tiết 2", period: 74 },
    { title: "Bài 29: Phép cộng số có hai chữ số với số có một chữ số - Tiết 1", period: 75 }
  ],
  26: [
    { title: "Bài 29: Phép cộng số có hai chữ số với số có một chữ số - Tiết 2", period: 76, integ: "Tích hợp NLS 5.2.CB1a: Xác định nhu cầu cá nhân. Sử dụng công cụ số để trình bày Quizizz." },
    { title: "Bài 30: Phép cộng số có hai chữ số với số có hai chữ số - Tiết 1", period: 77 },
    { title: "Bài 30: Phép cộng số có hai chữ số với số có hai chữ số - Tiết 2", period: 78, integ: "Tích hợp NLS 5.2.CB1a: Sử dụng công cụ số để làm bài tập tương tác trên Quizizz." }
  ],
  27: [
    { title: "Bài 31: Phép trừ số có hai chữ số cho số có một chữ số - Tiết 1", period: 79, integ: "Tích hợp ATGT: Nhận biết hành vi an toàn khi đi xe buýt, xếp hàng văn minh lên xuống xe." },
    { title: "Bài 31: Phép trừ số có hai chữ số cho số có một chữ số - Tiết 2", period: 80 },
    { title: "Bài 31: Phép trừ số có hai chữ số cho số có một chữ số - Tiết 3", period: 81 }
  ],
  28: [
    { title: "Bài 32: Phép trừ số có hai chữ số cho số có hai chữ số - Tiết 1", period: 82 },
    { title: "Bài 32: Phép trừ số có hai chữ số cho số có hai chữ số - Tiết 2", period: 83 },
    { title: "Bài 32: Phép trừ số có hai chữ số cho số có hai chữ số - Tiết 3", period: 84 }
  ],
  29: [
    { title: "Bài 33: Luyện tập chung - Tiết 1 (Bài học STEM: Mô hình tính hàng dọc)", period: 85, integ: "Thay bằng Bài học STEM: Mô hình tính hàng dọc (2 tiết). | Tích hợp Tiếng Việt: Kể chuyện Cây tre trăm đốt, bồi dưỡng đức tính chăm chỉ, kiên trì." },
    { title: "Bài 33: Luyện tập chung - Tiết 2", period: 86, integ: "Tích hợp Tiếng Việt: Giới thiệu Dế Mèn phiêu lưu kí, kết hợp toán học và tiếng Việt, gây hứng thú đọc sách." },
    { title: "Bài 33: Luyện tập chung - Tiết 3", period: 87 }
  ],
  30: [
    { title: "Bài 33: Luyện tập chung - Tiết 4", period: 88 },
    { title: "Bài 34: Xem giờ đúng trên đồng hồ - Tiết 1 (Bài học STEM: Đồng hồ tiện ích)", period: 89, integ: "Thay bằng Bài học STEM: Đồng hồ tiện ích (2 tiết). | Tích hợp AI: 1.A2.1 - Kể tên thiết bị AI (loa thông minh, trợ lý ảo). Dùng trợ lý ảo Google/Siri để hỏi giờ và quản lý thời gian." },
    { title: "Bài 34: Xem giờ đúng trên đồng hồ - Tiết 2", period: 90 }
  ],
  31: [
    { title: "Bài 35: Các ngày trong tuần - Tiết 1", period: 91, integ: "Tích hợp NLS 6.1.CB1a: Nhớ lại ứng dụng của AI và trợ lý ảo trong nhắc lịch học, theo dõi hành trình Rô-bốt trên bản đồ." },
    { title: "Bài 35: Các ngày trong tuần - Tiết 2", period: 92, integ: "Tích hợp QPAN: Nhận biết địa danh đất nước qua hành trình Rô-bốt; tự hào Tổ quốc Việt Nam; giới thiệu sau sắp xếp ĐVHC cấp tỉnh 2025 Việt Nam có 34 ĐVHC cấp tỉnh (28 tỉnh, 6 TP trực thuộc TW)." },
    { title: "Bài 36: Thực hành xem lịch và giờ - Tiết 1", period: 93, integ: "Tích hợp AI: 1.A2.2 - AI nhắc nhở lịch học và giờ giấc bằng giọng nói thân thiện giúp rèn nếp sống." }
  ],
  32: [
    { title: "Bài 36: Thực hành xem lịch và giờ - Tiết 2", period: 94, integ: "Tích hợp Tiếng Việt: Kể chuyện “Thỏ và Rùa”." },
    { title: "Bài 37: Luyện tập chung - Tiết 1", period: 95, integ: "Tích hợp môn Đạo đức: Học sinh biết quý trọng thời gian." },
    { title: "Bài 37: Luyện tập chung - Tiết 2", period: 96 }
  ],
  33: [
    { title: "Bài 38: Ôn tập các số và phép tính trong phạm vi 10 - Tiết 1", period: 97 },
    { title: "Bài 38: Ôn tập các số và phép tính trong phạm vi 10 - Tiết 2", period: 98 },
    { title: "Bài 38: Ôn tập các số và phép tính trong phạm vi 10 - Tiết 3", period: 99 }
  ],
  34: [
    { title: "Bài 39: Ôn tập các số và phép tính trong phạm vi 100 - Tiết 1", period: 100, integ: "Tích hợp AI: 1.B3.1 - Con người sử dụng AI đúng cách vì mục đích tốt đẹp; dùng ứng dụng kiểm tra kết quả học tập trung thực." },
    { title: "Bài 39: Ôn tập các số và phép tính trong phạm vi 100 - Tiết 2", period: 101 },
    { title: "Bài 39: Ôn tập các số và phép tính trong phạm vi 100 - Tiết 3", period: 102, integ: "CDS: Chụp ảnh bài làm bằng điện thoại thông minh gửi vào Zalo cho giáo viên kiểm tra." }
  ],
  35: [
    { title: "Bài 40: Ôn tập hình học và đo lường - Tiết 1", period: 103 },
    { title: "Bài 40: Ôn tập hình học và đo lường - Tiết 2", period: 104, integ: "Tích hợp NLS 5.2.CB1a: Nhu cầu học tập, nghỉ ngơi, vui chơi rèn luyện sức khỏe phù hợp." },
    { title: "Bài 41: Ôn tập chung", period: 105, integ: "Tích hợp NLS 5.2.CB1a: Trả lời câu hỏi học tập trên nền tảng Quizizz; sử dụng thiết bị số tự đánh giá kết quả học tập." }
  ]
};
