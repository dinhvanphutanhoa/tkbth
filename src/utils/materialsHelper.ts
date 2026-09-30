// ============================================================================
// HỆ THỐNG QUẢN LÝ ĐỒ DÙNG DẠY HỌC & HỌC LIỆU (CV 2345/BGDĐT)
// QUY TẮC BẮT BUỘC:
// 1. KHÔNG GHI các tài liệu hiển nhiên: Sách giáo khoa (SGK), vở bài tập (VBT),
//    bút dạ, bảng con, phấn, giấy nháp, vở ghi bài...
// 2. CHỈ GHI NHỮNG VẬT LIỆU, THIẾT BỊ, HỌC LIỆU VÀ NỘI DUNG CỤ THỂ CẦN THIẾT
//    CHO TỪNG TIẾT HỌC CỤ THỂ CỦA MỖI MÔN.
// ============================================================================

export interface MaterialCleanResult {
  teacher: string[];
  student: string[];
}

/**
 * Lọc bỏ hoàn toàn các chuỗi rập khuôn hiển nhiên theo chỉ đạo của giáo viên:
 * "không ghi tài liệu sgk, vở bt, bút dạ... (Sách giáo khoa, vở bài tập, bộ đồ dùng học sinh, bảng con, phấn/bút dạ, nháp không ghi chỉ ghi cái cần thiết)"
 */
export function filterGenericMaterials(items: string[]): string[] {
  const genericPatterns = [
    /sách\s+giáo\s+khoa/i,
    /\bsgk\b/i,
    /vở\s+bài\s+tập/i,
    /\bvbt\b/i,
    /vở\s+bt/i,
    /vở\s+ghi/i,
    /vở\s+tập\s+viết/i,
    /vở\s+thực\s+hành/i,
    /bảng\s+con/i,
    /phấn\s+(trắng|màu|\/bút)/i,
    /\bphấn\b/i,
    /bút\s+dạ/i,
    /giấy\s+nháp/i,
    /\bnháp\b/i,
    /khăn\s+lau\s+bảng/i,
    /bút\s+chì\s*2b/i,
    /tẩy\s+gôm/i,
    /đồ\s+dùng\s+học\s+tập\s+cá\s+nhân/i,
    /đồ\s+dùng\s+học\s+tập\s+môn/i,
    /bộ\s+đồ\s+dùng\s+học\s+toán\s+học\s+sinh/i,
  ];

  return items
    .map(str => {
      let cleaned = str;
      // Tách các phân đoạn bởi dấu phẩy hoặc chấm phẩy
      const parts = cleaned.split(/[,;]/);
      const filteredParts = parts.filter(p => {
        const trimmed = p.trim();
        if (!trimmed) return false;
        return !genericPatterns.some(pat => pat.test(trimmed));
      });
      return filteredParts.join(", ").trim();
    })
    .filter(str => str.length > 0 && !genericPatterns.some(pat => pat.test(str)));
}

/**
 * Tạo danh mục đồ dùng dạy học và học liệu THỰC SỰ CẦN THIẾT cho từng môn học và bài học cụ thể
 */
export function getTailoredLessonMaterials(params: {
  subject: string;
  subSubject?: string;
  lessonTitle: string;
  grade: number;
  integrationNotes?: string;
}): MaterialCleanResult {
  const { subject, subSubject = "", lessonTitle, grade, integrationNotes = "" } = params;
  const subLower = subject.toLowerCase().trim();
  const subSubLower = subSubject.toLowerCase().trim();
  const titleLower = lessonTitle.toLowerCase().trim();
  const integLower = integrationNotes.toLowerCase();

  const isStem = titleLower.includes("stem") || integLower.includes("stem");

  // 1. MÔN TOÁN
  if (subLower.includes("toán") || subLower === "t" || subSubLower.includes("toán")) {
    if (isStem) {
      return {
        teacher: [
          `Bài giảng điện tử tương tác các bước quy trình thiết kế kĩ thuật bài: "${lessonTitle}".`,
          "Mẫu sản phẩm STEM hoàn chỉnh để học sinh quan sát đối chiếu.",
          "Phiếu đánh giá tiêu chí sản phẩm STEM (tính thẩm mĩ, tính ứng dụng học toán, độ chắc chắn)."
        ],
        student: [
          "Bìa carton cứng, giấy thủ công màu, kéo học sinh đầu bo tròn, hồ dán/băng dính 2 mặt.",
          "Vật liệu mở rộng theo nhóm: que kem gỗ, nắp chai nhựa, dây chun, khay đựng 10 ô."
        ]
      };
    }

    // Hình học / đo lường
    if (titleLower.includes("hình") || titleLower.includes("đo") || titleLower.includes("mét") || titleLower.includes("lít") || titleLower.includes("ki-lô-gam") || titleLower.includes("diện tích") || titleLower.includes("thể tích") || titleLower.includes("góc")) {
      return {
        teacher: [
          `Hình ảnh và mô hình trực quan phóng to minh họa bài học: "${lessonTitle}".`,
          "Bộ thước mẫu của giáo viên (thước mét chia vạch, ê ke to, compa bảng).",
          "Phiếu bài tập thực hành đo đạc và bảng phụ ghi số liệu nhóm."
        ],
        student: [
          "Thước kẻ có chia vạch xăng-ti-mét (cm), ê ke hoặc compa theo yêu cầu bài học.",
          "Phiếu thực hành đo đạc và ghi chép số liệu nhóm."
        ]
      };
    }

    // Thời gian / Lịch / Đồng hồ
    if (titleLower.includes("thời gian") || titleLower.includes("giờ") || titleLower.includes("lịch") || titleLower.includes("ngày")) {
      return {
        teacher: [
          "Mô hình đồng hồ có kim quay được để thao tác trước lớp.",
          "Tờ lịch tháng/năm phóng to và hình ảnh các mốc thời gian hoạt động trong ngày.",
          "Phiếu học tập thực hành xem giờ và sắp xếp thời gian biểu."
        ],
        student: [
          "Mô hình đồng hồ học sinh có kim quay được để thực hành xoay kim theo lệnh.",
          "Phiếu học tập ghi lại thời gian biểu sinh hoạt trong ngày."
        ]
      };
    }

    // Số học / Phép tính (Grade 1 vs Grade 2-5)
    if (grade === 1) {
      return {
        teacher: [
          `Bài giảng điện tử trình chiếu hình ảnh trực quan số lượng các vật thể bài: "${lessonTitle}".`,
          "Bộ thẻ số to từ 0 đến 10, bảng gài số của lớp, que tính cỡ lớn.",
          "Phiếu bài tập mở rộng đếm và so sánh số lượng."
        ],
        student: [
          "Hộp thẻ số và que tính trong hộp đồ dùng học tập để đếm, lập phép tính trên bảng gài.",
          "Phiếu học tập rèn luyện kĩ năng tính toán theo nhóm."
        ]
      };
    }

    // Grade 2-5 Toán
    return {
      teacher: [
        `Bài giảng điện tử tương tác (PPTX), sơ đồ tư duy minh họa quy tắc và thuật toán tính bài: "${lessonTitle}".`,
        "Bảng phụ ghi đề toán tình huống thực tế, phiếu bài tập phân hóa theo năng lực học sinh.",
        "Bộ thẻ phân số/thập phân hoặc sơ đồ đoạn thẳng trực quan."
      ],
      student: [
        "Phiếu bài tập cá nhân và phiếu thảo luận nhóm.",
        "Băng giấy màu thực hành gấp/chia đoạn thẳng (khi học phân số/tỉ số)."
      ]
    };
  }

  // 2. MÔN TIẾNG VIỆT
  if (subLower.includes("tiếng việt") || subLower === "tv" || subSubLower.includes("tiếng việt")) {
    if (grade === 1) {
      // Âm vần / làm quen / tập đọc lớp 1
      return {
        teacher: [
          `Bài giảng điện tử phóng to tranh khởi động, tranh từ ngữ ứng dụng bài: "${lessonTitle}".`,
          "Thẻ chữ biểu diễn (chữ in hoa, in thường, chữ viết mẫu phóng to trên bảng phụ).",
          "Video clip ngắn hoặc file phát âm chuẩn của chữ/vần mới."
        ],
        student: [
          "Hộp thẻ chữ cái, vần và dấu thanh để ghép tiếng, ghép từ trên bảng gài cá nhân.",
          "Tranh ảnh hoặc đồ vật thật mang theo để luyện nói theo chủ điểm bài học."
        ]
      };
    }

    // Grade 2-5 Tiếng Việt (Tập đọc, Luyện từ và câu, Viết)
    if (titleLower.includes("viết") || titleLower.includes("làm văn") || titleLower.includes("chính tả")) {
      return {
        teacher: [
          `Bài giảng điện tử trình chiếu đoạn văn/thơ mẫu, bảng phụ ghi dàn ý chi tiết bài: "${lessonTitle}".`,
          "Phiếu hướng dẫn các tiêu chí bài viết (từ ngữ, cấu trúc, liên kết câu, cảm xúc).",
          "Tranh ảnh hoặc video thực tế làm ngữ liệu gợi ý mở rộng ý tưởng cho học sinh."
        ],
        student: [
          "Phiếu lập dàn ý bài viết và phiếu chỉnh sửa bài văn/đoạn văn của bạn.",
          "Tư liệu, tranh ảnh cá nhân đã sưu tầm để phục vụ bài viết."
        ]
      };
    }

    // Đọc hiểu / Luyện từ và câu
    return {
      teacher: [
        `Bài giảng điện tử trình chiếu bài đọc, tranh minh họa sắc nét và video bổ trợ bài: "${lessonTitle}".`,
        "Bảng phụ chép đoạn văn luyện đọc diễn cảm (có đánh dấu ngắt giọng, nhấn giọng).",
        "Hệ thống câu hỏi gợi mở tìm hiểu bài và phiếu bài tập nhóm."
      ],
      student: [
        "Phiếu học tập tìm hiểu nội dung bài đọc và từ khóa trọng tâm.",
        "Tranh ảnh hoặc câu chuyện sưu tầm liên quan đến chủ điểm tuần học."
      ]
    };
  }

  // 3. MÔN TỰ NHIÊN VÀ XÃ HỘI (Lớp 1-3) & KHOA HỌC (Lớp 4-5)
  if (subLower.includes("tự nhiên") || subLower.includes("tnxh") || subLower.includes("khoa học") || subLower === "kh") {
    if (isStem) {
      return {
        teacher: [
          `Bài giảng điện tử hướng dẫn quy trình STEM bài: "${lessonTitle}".`,
          "Mô hình mẫu (mô hình cây xanh, chuồng nuôi, mô hình bầu trời ngày và đêm hoặc dụng cụ vệ sinh).",
          "Phiếu đánh giá tiêu chí sản phẩm STEM nhóm."
        ],
        student: [
          "Bìa carton, lá cây khô, bông gòn, màu vẽ, kéo học sinh, hồ dán/keo 2 mặt theo nhóm.",
          "Vật liệu tái chế: que kem, que tre, nắp chai nhựa, dây buộc."
        ]
      };
    }

    return {
      teacher: [
        `Video tư liệu thực tế và bộ ảnh phóng to theo chủ đề bài: "${lessonTitle}".`,
        "Phiếu giao nhiệm vụ quan sát, bảng phân loại nhóm.",
        "Mẫu vật thật hoặc mô hình thí nghiệm trực quan phục vụ bài học."
      ],
      student: [
        "Mẫu vật thật mang theo (lá cây, hoa, hạt, củ, mẫu đất/nước) theo hướng dẫn bài học.",
        "Phiếu ghi chép kết quả quan sát và thảo luận của nhóm."
      ]
    };
  }

  // 4. MÔN LỊCH SỬ VÀ ĐỊA LÍ (Lớp 4-5)
  if (subLower.includes("lịch sử") || subLower.includes("địa lí") || subLower.includes("ls-đl") || subLower.includes("ls&đl")) {
    return {
      teacher: [
        `Bản đồ tự nhiên/hành chính, lược đồ trận đánh hoặc video tư liệu lịch sử bài: "${lessonTitle}".`,
        "Bộ ảnh màu các danh lam thắng cảnh, di tích lịch sử và hiện vật tiêu biểu.",
        "Phiếu học tập nhóm về nguyên nhân, diễn biến hoặc đặc điểm tự nhiên - dân cư."
      ],
      student: [
        "Lược đồ trống để thực hành điền tên địa danh, dòng sông, dãy núi hoặc mũi tiến công.",
        "Tư liệu, tranh ảnh sưu tầm về danh nhân, di tích lịch sử theo phân công tổ."
      ]
    };
  }

  // 5. MÔN ĐẠO ĐỨC
  if (subLower.includes("đạo đức") || subLower === "đđ") {
    return {
      teacher: [
        `Video clip tình huống đạo đức hoặc câu chuyện hoạt hình mang tính giáo dục bài: "${lessonTitle}".`,
        "Bộ tranh phóng to các tình huống ứng xử trong gia đình, trường học và cộng đồng.",
        "Thẻ tình huống thảo luận nhóm và bảng tiêu chí tự đánh giá hành vi."
      ],
      student: [
        "Thẻ bày tỏ ý kiến (mặt cười - tán thành / mặt mếu - không tán thành hoặc thẻ Đúng/Sai).",
        "Phiếu tự liên hệ và đánh giá việc làm cụ thể của bản thân ở nhà và ở trường."
      ]
    };
  }

  // 6. MÔN HOẠT ĐỘNG TRẢI NGHIỆM
  if (subLower.includes("hoạt động trải nghiệm") || subLower.includes("hđtn")) {
    return {
      teacher: [
        `Kịch bản chi tiết chương trình sinh hoạt theo chủ đề tuần: "${lessonTitle}".`,
        "Bài giảng điện tử chiếu bài hát khởi động, video phóng sự ngắn về gương tốt việc tốt.",
        "Bảng biểu theo dõi thi đua nền nếp tuần và phiếu tự đánh giá rèn luyện cá nhân."
      ],
      student: [
        "Sổ nhật ký rèn luyện hoặc sản phẩm tự làm theo chủ đề tuần (thiệp, hoa giấy, thư tri ân).",
        "Trang phục gọn gàng, phù hợp theo yêu cầu hoạt động trải nghiệm."
      ]
    };
  }

  // 7. MÔN TIN HỌC
  if (subLower.includes("tin học") || subLower === "th") {
    return {
      teacher: [
        "Máy tính giáo viên kết nối máy chiếu/tivi, hệ thống mạng LAN phòng máy hoạt động tốt.",
        `Tệp dữ liệu thực hành mẫu và phần mềm học tập phục vụ bài: "${lessonTitle}".`,
        "Phiếu giao nhiệm vụ thực hành từng bước trên máy."
      ],
      student: [
        "Máy tính thực hành tại phòng máy (chuột, bàn phím, tai nghe).",
        "Phiếu nhiệm vụ thực hành và tệp bài tập được giáo viên chia sẻ."
      ]
    };
  }

  // 8. MÔN CÔNG NGHỆ
  if (subLower.includes("công nghệ") || subLower === "cn") {
    return {
      teacher: [
        `Mẫu sản phẩm kĩ thuật hoàn chỉnh và bảng quy trình thao tác bài: "${lessonTitle}".`,
        "Bộ dụng cụ thực hành mẫu của giáo viên, video hướng dẫn từng thao tác kĩ thuật.",
        "Phiếu đánh giá sản phẩm thực hành theo các tiêu chí (đúng kích thước, chắc chắn, đẹp mắt)."
      ],
      student: [
        "Hộp chi tiết lắp ghép mô hình kĩ thuật hoặc vật liệu thủ công theo bài học.",
        "Phiếu tự kiểm tra và đánh giá sản phẩm của nhóm."
      ]
    };
  }

  // 9. MÔN MĨ THUẬT
  if (subLower.includes("mĩ thuật") || subLower === "mt") {
    return {
      teacher: [
        `Tranh ảnh tác phẩm mĩ thuật mẫu và hình ảnh minh họa các bước tạo hình bài: "${lessonTitle}".`,
        "Sản phẩm mẫu đa dạng chất liệu (tranh vẽ, đất nặn, sản phẩm xé dán, tạo hình 3D).",
        "Giá trưng bày sản phẩm của các nhóm học sinh."
      ],
      student: [
        "Giấy vẽ A4/bìa màu, màu vẽ (sáp màu, dạ màu hoặc màu nước) theo bài học.",
        "Vật liệu mở rộng: đất nặn, kéo thủ công, keo dán hoặc vật liệu tái chế (lá khô, que gỗ, len sợi)."
      ]
    };
  }

  // 10. MÔN ÂM NHẠC
  if (subLower.includes("âm nhạc") || subLower === "an" || subLower.includes("bdan")) {
    return {
      teacher: [
        "Đàn phím điện tử (organ/piano), file âm thanh nhạc đệm (beat) chuẩn giai điệu bài học.",
        `Bảng phụ chép lời ca và ký hiệu nốt nhạc/tiết tấu bài: "${lessonTitle}".`,
        "Bộ nhạc cụ gõ mẫu của giáo viên: song loan, thanh phách, trống nhỏ, chuông leng keng."
      ],
      student: [
        "Nhạc cụ gõ tự làm (thanh tre, vỏ sò, xúc xắc) hoặc thanh phách học sinh để gõ đệm theo bài hát.",
        "Động tác vận động phụ họa cơ thể (vỗ tay, giậm chân, lắc lư theo nhịp)."
      ]
    };
  }

  // 11. MÔN TIẾNG ANH
  if (subLower.includes("tiếng anh") || subLower.includes("anh văn") || subLower === "ta") {
    return {
      teacher: [
        `Flashcards từ vựng cỡ lớn, tranh tình huống hội thoại bài: "${lessonTitle}".`,
        "File âm thanh chuẩn phát âm người bản xứ (audio track), video bài hát/trò chơi ngôn ngữ.",
        "Bộ rối tay hoặc bảng phụ tổ chức hoạt động cặp đôi, nhóm."
      ],
      student: [
        "Thẻ từ vựng mini (mini flashcards) để tham gia các trò chơi phản xạ ngôn ngữ.",
        "Tranh vẽ hoặc đồ vật liên quan chủ đề bài học để thực hành giao tiếp tự tin."
      ]
    };
  }

  // 12. GIÁO DỤC THỂ CHẤT
  if (subLower.includes("thể chất") || subLower.includes("gdtc")) {
    return {
      teacher: [
        "Còi thể thao, đồng hồ bấm giờ, sân bãi sạch sẽ và an toàn.",
        "Dụng cụ thể thao phục vụ bài học (bóng, dây nhảy, nấm chiến thuật, cờ đích).",
        "Tranh mô tả động tác thể dục mẫu."
      ],
      student: [
        "Trang phục thể thao thoáng mát, giày vải đi êm chân.",
        "Dây nhảy cá nhân hoặc bóng theo yêu cầu tiết học."
      ]
    };
  }

  // DEFAULT FALLBACK CẦN THIẾT
  return {
    teacher: [
      `Bài giảng điện tử tương tác, hình ảnh và tư liệu số minh họa bài học: "${lessonTitle}".`,
      "Phiếu bài tập thực hành theo nhóm và bảng phụ kiểm tra kết quả."
    ],
    student: [
      "Phiếu học tập và dụng cụ học tập thực hành cụ thể theo yêu cầu bài học."
    ]
  };
}
