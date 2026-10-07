import { Grade, LessonActivity } from "../types";

export interface GNRRTHLesson {
  lessonNumber: number;
  part: 1 | 2;
  weekStart: number;
  title: string;
  subTitle: string;
  specificCompetency: string;
  teacherMaterials: string[];
  studentMaterials: string[];
  teacherActivity: string;
  studentActivity: string;
  activities: LessonActivity[];
}

const GNRRTH_TOPICS: Array<{
  lessonNumber: number;
  part: 1 | 2;
  title: string;
  subTitle: string;
  specificCompetency: string;
  teacherMaterials: string[];
  studentMaterials: string[];
  act1T: string;
  act1S: string;
  act2T: string;
  act2S: string;
  act3T: string;
  act3S: string;
  act4T: string;
  act4S: string;
}> = [
  {
    lessonNumber: 1,
    part: 1,
    title: "Nhận biết một số loại thiên tai thường gặp tại địa phương",
    subTitle: "Bão, áp thấp nhiệt đới, mưa lớn và ngập lụt",
    specificCompetency:
      "Nhận biết được dấu hiệu, đặc điểm của một số loại thiên tai thường gặp tại địa phương (mưa bão, áp thấp nhiệt đới, lũ lụt, ngập úng) và nêu được ảnh hưởng ban đầu đối với đời sống, học tập.",
    teacherMaterials: [
      "Tài liệu Giáo dục Giảm nhẹ rủi ro thiên tai (GNRRTH) cấp Tiểu học, tranh ảnh và video tư liệu về mưa bão, ngập lụt tại địa phương.",
      "Thẻ từ phân loại dấu hiệu thiên tai, phiếu quan sát nhóm."
    ],
    studentMaterials: [
      "Phiếu học tập GNRRTH, thẻ màu bày tỏ ý kiến, tranh ảnh sưu tầm về thời tiết cực đoan."
    ],
    act1T: `- GV cho HS quan sát hình ảnh/đoạn video ngắn về hiện tượng mưa to, gió lớn, nước dâng cao và đặt câu hỏi: "Những hình ảnh này gợi cho em nhớ đến hiện tượng tự nhiên nào?"\n- GV nhận xét, dẫn dắt vào bài học Tài liệu GNRRTH trước tiết Sinh hoạt lớp.`,
    act1S: `- HS quan sát hình ảnh, suy nghĩ và nêu: hiện tượng mưa bão, ngập lụt, giông lốc.\n- HS lắng nghe và xác định nhiệm vụ bài học GNRRTH.`,
    act2T: `- GV hướng dẫn HS quan sát tranh minh họa trong tài liệu GNRRTH và thảo luận nhóm đôi: Nêu dấu hiệu nhận biết khi sắp có bão, mưa lớn kéo dài và ngập lụt.\n- GV hỏi: "Khi bầu trời chuyển mây đen đặc, gió thổi mạnh, đài truyền hình phát bản tin cảnh báo bão thì chúng ta cần chú ý điều gì?"\n- GV chốt kiến thức: Bão, áp thấp nhiệt đới, mưa lớn và lũ lụt là những thiên tai có thể gây nguy hiểm nếu không chủ động phòng tránh.`,
    act2S: `- HS quan sát tranh, trao đổi nhóm đôi và nêu dấu hiệu: mây đen kéo đến, gió giật mạnh, mưa lớn kéo dài làm nước ngập đường đi.\n- HS trả lời câu hỏi và lắng nghe GV chuẩn hóa kiến thức trọng tâm.`,
    act3T: `- GV tổ chức trò chơi "Phân loại nhanh": phát phiếu học tập yêu cầu các nhóm nối tên loại thiên tai với dấu hiệu và tác hại tương ứng.\n- GV mời đại diện các nhóm trình bày kết quả và nhận xét, tuyên dương.`,
    act3S: `- HS làm việc nhóm 4 hoàn thành phiếu phân loại dấu hiệu thiên tai.\n- Đại diện nhóm trình bày trước lớp; các nhóm khác nhận xét, bổ sung.`,
    act4T: `- GV yêu cầu HS liên hệ thực tế tại địa phương (Tân Thạnh / vùng Đồng Tháp Mười): "Vào mùa mưa lũ, đường đi học của em thường có hiện tượng gì? Em cần làm gì để đi học an toàn?"\n- GV nhận xét, dặn dò HS theo dõi bản tin dự báo thời tiết cùng gia đình mỗi ngày.`,
    act4S: `- HS liên hệ thực tế: mùa mưa nước dâng cao, đường trơn trượt; cần đi cùng người lớn, mặc áo mưa gọn gàng và tránh chỗ nước sâu.\n- HS ghi nhớ lời dặn của GV.`
  },
  {
    lessonNumber: 1,
    part: 2,
    title: "Nhận biết một số loại thiên tai thường gặp tại địa phương",
    subTitle: "Nguyên nhân và hậu quả của thiên tai đối với con người và môi trường",
    specificCompetency:
      "Nêu được một số nguyên nhân và hậu quả do thiên tai gây ra đối với sức khỏe con người, nhà cửa, trường lớp và môi trường tự nhiên; có ý thức bảo vệ cây xanh để giảm nhẹ thiên tai.",
    teacherMaterials: [
      "Tài liệu Giáo dục GNRRTH, sơ đồ tư duy nguyên nhân - hậu quả thiên tai, màn hình trình chiếu.",
      "Bảng nhóm, phiếu thảo luận tình huống."
    ],
    studentMaterials: [
      "Phiếu học tập nhóm, bút màu vẽ thông điệp bảo vệ môi trường giảm nhẹ thiên tai."
    ],
    act1T: `- GV đặt câu hỏi ôn bài trước: "Hãy kể tên các loại thiên tai thường gặp vào mùa mưa bão ở địa phương em?"\n- GV nhận xét và dẫn vào tiết 2: Tìm hiểu nguyên nhân và hậu quả của thiên tai.`,
    act1S: `- HS xung phong trả lời: mưa bão, lốc xoáy, lũ lụt, sạt lở bờ kênh.\n- HS lắng nghe giới thiệu bài.`,
    act2T: `- GV chia lớp thành các nhóm 4, yêu cầu quan sát các bức tranh trong tài liệu GNRRTH thể hiện hậu quả của bão lũ (cây đổ, tốc mái nhà, ngập trường học, ô nhiễm nguồn nước).\n- GV đặt câu hỏi: "Vì sao chặt phá rừng và xả rác làm tắc nghẽn dòng chảy lại khiến lũ lụt, ngập úng nặng nề hơn?"\n- GV kết luận: Thiên tai vừa do tự nhiên vừa chịu tác động từ hoạt động của con người; bảo vệ môi trường chính là góp phần giảm nhẹ rủi ro thiên tai.`,
    act2S: `- HS thảo luận nhóm, chỉ ra những thiệt hại về nhà cửa, cây cối, đường giao thông và việc học tập của học sinh.\n- HS trả lời: Chặt phá cây làm mất rừng chắn gió, xả rác làm tắc cống thoát nước.\n- HS lắng nghe và ghi nhớ kết luận.`,
    act3T: `- GV hướng dẫn HS hoàn thành bảng "Việc nên làm / Việc không nên làm" để góp phần giảm nhẹ rủi ro thiên tai tại trường học và gia đình.\n- GV mời 2 - 3 nhóm trình bày và chốt đáp án đúng.`,
    act3S: `- HS trao đổi cặp đôi, đánh dấu vào các việc nên làm (trồng cây, bỏ rác đúng nơi, khơi thông rãnh nước) và việc không nên làm.\n- HS trình bày và nhận xét bài bạn.`,
    act4T: `- GV yêu cầu mỗi HS nêu 1 việc làm cụ thể ngay tại trường để giữ gìn hàng cây xanh và khuôn viên lớp học an toàn.\n- GV tổng kết và chuyển sang nội dung tiết Sinh hoạt lớp.`,
    act4S: `- HS chia sẻ: chăm sóc bồn hoa, không bẻ cành cây, đóng chặt cửa sổ lớp học khi trời chuyển mưa giông.\n- HS lắng nghe và chuẩn bị vào tiết Sinh hoạt lớp.`
  },
  {
    lessonNumber: 2,
    part: 1,
    title: "Kỹ năng phòng tránh và ứng phó khi có mưa giông, lốc xoáy, sấm sét",
    subTitle: "Nhận diện nguy cơ và nơi trú ẩn an toàn khi có giông sét",
    specificCompetency:
      "Nhận biết được sự nguy hiểm của giông lốc, sấm sét; phân biệt được nơi trú ẩn an toàn và nơi nguy hiểm cần tránh xa khi trời có mưa giông, sấm sét.",
    teacherMaterials: [
      "Tài liệu GNRRTH, tranh tình huống phòng tránh sấm sét và giông lốc, máy chiếu.",
      "Bộ thẻ Đúng/Sai xử lý tình huống giông sét."
    ],
    studentMaterials: [
      "Thẻ Đúng/Sai cá nhân, phiếu bài tập tình huống GNRRTH."
    ],
    act1T: `- GV nêu câu đố/tình huống: "Đang trên đường đi học về, bỗng nhiên mây đen kéo kín bầu trời, gió thổi mạnh và có tiếng sấm chớp. Em sẽ làm gì?"\n- GV dẫn dắt vào bài học GNRRTH: Kỹ năng phòng tránh mưa giông, lốc xoáy, sấm sét.`,
    act1S: `- HS nêu suy nghĩ ban đầu: tìm nơi trú mưa trong nhà dân hoặc cửa hàng kiên cố.\n- HS lắng nghe và theo dõi bài học.`,
    act2T: `- GV cho HS quan sát tranh các vị trí khi trời có sấm sét: (1) Trong ngôi nhà xây kiên cố; (2) Dưới gốc cây to đơn độc ngoài đồng; (3) Đứng gần cột điện cao thế; (4) Đứng giữa cánh đồng trống cầm vật bằng sắt.\n- GV hỏi: "Vị trí nào an toàn? Vị trí nào rất nguy hiểm dễ bị sét đánh hoặc cây gãy đổ?"\n- GV chốt quy tắc an toàn: Tuyệt đối không trú mưa dưới gốc cây to, cột điện, biển quảng cáo lớn; nhanh chóng tìm nhà kiên cố để trú ẩn.`,
    act2S: `- HS quan sát kĩ từng tranh và chỉ rõ: Trong nhà kiên cố là an toàn; đứng dưới gốc cây to, cột điện, giữa đồng trống là cực kỳ nguy hiểm.\n- HS nhắc lại quy tắc an toàn khi có giông sét.`,
    act3T: `- GV tổ chức trò chơi giơ thẻ "An toàn - Nguy hiểm" với 5 tình huống thực tế khi đang ở trường và khi ở nhà có mưa giông, sấm sét (rút phích cắm tivi, đóng cửa sổ, không chạy ra sân trường).\n- GV nhận xét và giải thích rõ từng tình huống.`,
    act3S: `- HS hào hứng giơ thẻ và giải thích: Khi ở nhà có sấm sét cần tắt tivi, rút ăng-ten, đóng kín cửa sổ và tránh xa dây điện.\n- HS lắng nghe và tự điều chỉnh nhận thức.`,
    act4T: `- GV yêu cầu HS thực hành truyền thông điệp ngắn: "Trời giông sấm chớp đùng đùng - Cây cao, cột điện xin đừng đứng bên!".\n- GV nhận xét, khen ngợi HS.`,
    act4S: `- HS đọc đồng thanh câu thông điệp dễ nhớ để về nhà chia sẻ cùng người thân.\n- HS ghi nhớ kỹ năng ứng phó giông sét.`
  },
  {
    lessonNumber: 2,
    part: 2,
    title: "Kỹ năng phòng tránh và ứng phó khi có mưa giông, lốc xoáy, sấm sét",
    subTitle: "Thực hành xử lý tình huống an toàn trước, trong và sau cơn giông lốc",
    specificCompetency:
      "Thực hành được các bước tự bảo vệ bản thân trước, trong và sau khi xảy ra mưa giông, lốc xoáy tại trường học và gia đình.",
    teacherMaterials: [
      "Tài liệu GNRRTH, bảng quy trình 3 bước (Trước - Trong - Sau giông lốc), phiếu đóng vai.",
      "Màn hình trình chiếu tình huống."
    ],
    studentMaterials: [
      "Phiếu thảo luận nhóm quy trình ứng phó giông lốc."
    ],
    act1T: `- GV hỏi nhanh: "Vì sao khi có mưa giông, lốc xoáy chúng ta không được đứng dưới gốc cây to hay bảng hiệu lớn?"\n- GV nhận xét, giới thiệu tiết thực hành kỹ năng ứng phó Trước - Trong - Sau giông lốc.`,
    act1S: `- HS trả lời: Vì cây to và bảng hiệu dễ bị gió lốc quật ngã hoặc bị sét đánh.\n- HS lắng nghe nội dung tiết học.`,
    act2T: `- GV hướng dẫn HS tìm hiểu 3 giai đoạn ứng phó:\n  + Trước giông lốc: Nghe dự báo thời tiết, cất gọn đồ vật ngoài sân, đóng chốt cửa sổ cẩn thận.\n  + Trong giông lốc: Ở yên trong phòng kiên cố, tránh xa cửa kính, ngắt thiết bị điện.\n  + Sau giông lốc: Quan sát dây điện đứt, cây gãy đổ để tránh xa và báo ngay cho người lớn.\n- GV chốt quy trình 3 bước rõ ràng.`,
    act2S: `- HS lắng nghe, thảo luận nhóm để nắm vững việc cần làm ở từng thời điểm Trước - Trong - Sau giông lốc.\n- HS nhắc lại cảnh báo quan trọng: Sau cơn bão/giông tuyệt đối không chạm vào dây điện bị đứt rơi xuống đường.`,
    act3T: `- GV tổ chức cho các nhóm sắm vai xử lý 2 tình huống giả định:\n  + Tình huống 1: Đang học trong lớp thì trời nổi gió lốc mạnh.\n  + Tình huống 2: Sau cơn mưa giông, phát hiện cành cây gãy vướng vào dây điện trước cổng trường.\n- GV nhận xét cách xử lý của các nhóm.`,
    act3S: `- Các nhóm phân vai và thực hành xử lý tình huống bình tĩnh, đúng quy trình an toàn: đóng cửa lớp, ngồi ổn định trong phòng; đứng từ xa cảnh báo bạn và gọi thầy cô/bảo vệ.\n- Cả lớp nhận xét, rút kinh nghiệm.`,
    act4T: `- GV dặn dò HS về nhà cùng bố mẹ kiểm tra các chậu cây, mái hiên, cửa sổ để luôn đảm bảo an toàn mùa mưa bão.`,
    act4S: `- HS lắng nghe, ghi nhớ nhiệm vụ thực hành cùng gia đình.`
  },
  {
    lessonNumber: 3,
    part: 1,
    title: "Phòng tránh tai nạn đuối nước và đảm bảo an toàn mùa mưa lũ",
    subTitle: "Nhận biết các khu vực nguy hiểm có nguy cơ ngập nước, đuối nước",
    specificCompetency:
      "Xác định được các khu vực nguy hiểm trong mùa mưa lũ (ao hồ, sông rạch, hố công trình ngập nước, ngầm tràn nước chảy xiết) và tuân thủ nguyên tắc không tự ý bơi lội, chơi đùa gần nơi nước sâu.",
    teacherMaterials: [
      "Tài liệu GNRRTH cấp Tiểu học, tranh biển cảnh báo nguy hiểm nước sâu, máy chiếu.",
      "Phiếu học tập nhận diện khu vực an toàn và nguy hiểm."
    ],
    studentMaterials: [
      "Phiếu bài tập cá nhân/nhóm, thẻ cam kết an toàn mùa nước nổi."
    ],
    act1T: `- GV cho HS xem hình ảnh mùa nước nổi/mưa lũ tại vùng sông nước và hỏi: "Vào mùa nước lên, những khu vực nào quanh nhà và trường học trở nên nguy hiểm?"\n- GV dẫn dắt vào bài GNRRTH: Phòng tránh tai nạn đuối nước mùa mưa lũ.`,
    act1S: `- HS nêu: bờ kênh, ao hồ, ruộng ngập nước sâu, cống thoát nước không nắp.\n- HS chú ý lắng nghe bài học.`,
    act2T: `- GV giới thiệu các biển báo "Khu vực nước sâu nguy hiểm - Cấm bơi lội" và phân tích các nguyên nhân dẫn đến đuối nước ở trẻ em mùa mưa lũ (tự ý đi tắm sông, vớt đồ chơi rơi xuống nước, đi qua đường ngập sâu chảy xiết).\n- GV chốt 4 nguyên tắc "Không": Không tự ý xuống nước; Không chơi đùa sát bờ sông/kênh rạch; Không lội qua chỗ ngập sâu; Không nhảy xuống cứu bạn mà phải hô hoán gọi người lớn.`,
    act2S: `- HS quan sát biển cảnh báo, lắng nghe phân tích nguyên nhân.\n- HS đọc to và ghi nhớ 4 nguyên tắc "Không" để bảo vệ an toàn tính mạng.`,
    act3T: `- GV yêu cầu HS thảo luận nhóm xử lý tình huống: "Nếu thấy quả bóng hoặc chiếc dép của bạn bị rơi xuống bờ kênh đang ngập nước, em và bạn nên làm gì?"\n- GV mời các nhóm trình bày và chốt cách ứng xử đúng.`,
    act3S: `- HS thảo luận và trả lời: Tuyệt đối không tự thò tay hay bước xuống bờ kênh trơn trượt để vớt; nhờ người lớn có sào dài hỗ trợ.\n- HS nhận xét câu trả lời của nhóm bạn.`,
    act4T: `- GV nhắc nhở HS luôn mặc áo phao đúng quy cách khi đi đò, phà qua sông và đi học theo nhóm có người lớn đưa đón khi trời mưa ngập.`,
    act4S: `- HS cam kết thực hiện nghiêm túc việc mặc áo phao và phòng tránh đuối nước.`
  },
  {
    lessonNumber: 3,
    part: 2,
    title: "Phòng tránh tai nạn đuối nước và đảm bảo an toàn mùa mưa lũ",
    subTitle: "Kỹ năng gọi cứu hộ khẩn cấp và cứu đuối gián tiếp an toàn",
    specificCompetency:
      "Biết cách xử lý đúng khi phát hiện người gặp nạn dưới nước (hô hoán gọi người lớn, gọi số khẩn cấp, tìm vật nổi/sào dài cứu gián tiếp, tuyệt đối không tự nhảy xuống nước).",
    teacherMaterials: [
      "Tài liệu GNRRTH, hình ảnh áo phao, phao cứu sinh, sào tre, bảng số điện thoại khẩn cấp (114, 115).",
      "Phiếu thực hành tình huống cứu hộ gián tiếp."
    ],
    studentMaterials: [
      "Phiếu ghi nhớ số điện thoại khẩn cấp và quy trình gọi trợ giúp."
    ],
    act1T: `- GV kiểm tra bài cũ: "Nêu 4 nguyên tắc Không để phòng tránh đuối nước mùa mưa lũ?"\n- GV nhận xét và dẫn vào tiết 2: Kỹ năng gọi cứu hộ và hỗ trợ an toàn.`,
    act1S: `- HS nhắc lại 4 nguyên tắc Không.\n- HS lắng nghe nhiệm vụ tiết học.`,
    act2T: `- GV hướng dẫn quy trình xử lý khi thấy bạn bị ngã xuống nước:\n  + Bước 1: Hô to "Cứu với! Có người ngã xuống nước!" để gọi người lớn xung quanh đến ứng cứu ngay lập tức.\n  + Bước 2: Quan sát tìm vật nổi (phao, can nhựa rỗng, khúc gỗ) ném xuống cho bạn bám hoặc đứng trên bờ vững chắc đưa sào dài/dây cho bạn nắm.\n  + Bước 3: Báo người lớn gọi số khẩn cấp 114 (Cứu nạn cứu hộ) hoặc 115 (Cấp cứu y tế).\n- GV nhấn mạnh: Học sinh tuyệt đối không tự nhảy xuống nước cứu bạn vì sẽ dẫn đến đuối nước cả hai.`,
    act2S: `- HS quan sát tranh quy trình 3 bước, lắng nghe kỹ lời dặn của GV.\n- HS ghi nhớ rõ: Phải hô hoán gọi người lớn và dùng vật nổi/sào dài từ trên bờ, không tự nhảy xuống nước.`,
    act3T: `- GV hướng dẫn HS thực hành thao tác cài khóa áo phao đúng cách và tập hô lời cầu cứu rõ ràng, bình tĩnh cung cấp đúng vị trí xảy ra sự việc.\n- GV quan sát, sửa thao tác cho HS.`,
    act3S: `- HS thực hành thao tác mặc áo phao, cài chặt dây đai và tập nói to, rõ vị trí cần người lớn trợ giúp.`,
    act4T: `- GV củng cố bài học và dặn dò HS giữ an toàn tuyệt đối trong những ngày nghỉ cuối tuần.`,
    act4S: `- HS lắng nghe, ghi nhớ các số điện thoại khẩn cấp và quy tắc an toàn.`
  },
  {
    lessonNumber: 4,
    part: 1,
    title: "Thích ứng với biến đổi khí hậu, nắng nóng, hạn hán và xâm nhập mặn",
    subTitle: "Nhận biết hiện tượng nắng nóng cực đoan, hạn hán và cách bảo vệ sức khỏe",
    specificCompetency:
      "Nhận biết được biểu hiện của biến đổi khí hậu (nắng nóng gay gắt, hạn hán, thiếu nước ngọt) và thực hiện được các biện pháp bảo vệ sức khỏe khi thời tiết nắng nóng.",
    teacherMaterials: [
      "Tài liệu GNRRTH, tranh ảnh ruộng đất nứt nẻ do hạn hán và cách chống nắng an toàn.",
      "Phiếu học tập nhóm."
    ],
    studentMaterials: [
      "Phiếu học tập, mũ nón rộng vành, bình nước cá nhân."
    ],
    act1T: `- GV đặt câu hỏi: "Vào mùa khô, khi trời nắng nóng kéo dài nhiều tuần không mưa, em cảm thấy cơ thể thế nào và cây cối xung quanh ra sao?"\n- GV dẫn vào bài GNRRTH: Nhận biết nắng nóng, hạn hán và bảo vệ sức khỏe.`,
    act1S: `- HS trả lời: Trời oi bức, dễ khát nước, mệt mỏi; cây cối héo úa, kênh rạch cạn nước.\n- HS lắng nghe giới thiệu bài.`,
    act2T: `- GV cho HS quan sát hình ảnh hạn hán, xâm nhập mặn ở vùng Đồng bằng sông Cửu Long và thảo luận:\n  + Hạn hán gây khó khăn gì cho sinh hoạt và trồng trọt của người dân?\n  + Để phòng tránh say nắng, cảm nhiệt khi đi học mùa nắng nóng, HS cần làm gì?\n- GV chốt kiến thức: Đội mũ nón khi ra nắng, mặc áo thoáng mát, uống đủ nước đun sôi để nguội và hạn chế chạy nhảy ngoài sân nắng gắt buổi trưa.`,
    act2S: `- HS quan sát hình ảnh và nêu tác hại của hạn hán: thiếu nước sinh hoạt, lúa và cây trồng kém phát triển.\n- HS nêu biện pháp bảo vệ sức khỏe: đội mũ, uống đủ nước, không chơi ngoài nắng gắt.`,
    act3T: `- GV tổ chức cho HS làm bài tập tình huống trong phiếu: Chọn cách xử lý đúng khi thấy bạn có biểu hiện chóng mặt, đỏ mặt do say nắng (đưa bạn vào bóng râm thoáng mát, nới lỏng cổ áo, quạt mát và báo ngay cho cô y tế/giáo viên).`,
    act3S: `- HS thảo luận cặp đôi, chọn phương án đúng và trình bày trước lớp.\n- HS ghi nhớ các bước sơ cứu ban đầu và báo ngay cho thầy cô.`,
    act4T: `- GV nhắc nhở HS duy trì thói quen mang bình nước cá nhân sạch sẽ đến lớp và uống nước đều đặn mỗi ngày.`,
    act4S: `- HS lắng nghe và thực hiện thói quen uống nước hợp vệ sinh.`
  },
  {
    lessonNumber: 4,
    part: 2,
    title: "Thích ứng với biến đổi khí hậu, nắng nóng, hạn hán và xâm nhập mặn",
    subTitle: "Thực hành tiết kiệm nước sạch và năng lượng trong trường học, gia đình",
    specificCompetency:
      "Thực hiện được những việc làm thiết thực để tiết kiệm nước sạch, tiết kiệm điện và bảo vệ nguồn nước trước nguy cơ hạn hán, biến đổi khí hậu.",
    teacherMaterials: [
      "Tài liệu GNRRTH, tranh ảnh hướng dẫn sử dụng nước tiết kiệm, bảng cam kết Hành động xanh.",
      "Máy chiếu."
    ],
    studentMaterials: [
      "Giấy màu viết cam kết tiết kiệm nước và bảo vệ nguồn nước."
    ],
    act1T: `- GV nêu câu hỏi: "Nước sạch có phải là nguồn tài nguyên vô tận không? Điều gì sẽ xảy ra nếu chúng ta mở vòi nước chảy tràn lan?"\n- GV dẫn vào bài GNRRTH: Thực hành tiết kiệm nước sạch và năng lượng.`,
    act1S: `- HS trả lời: Nước sạch không vô tận; lãng phí nước sẽ dẫn đến thiếu nước sinh hoạt, nhất là vào mùa khô.\n- HS lắng nghe vào bài.`,
    act2T: `- GV hướng dẫn HS quan sát tranh và phân tích các hành vi sử dụng nước, điện hàng ngày:\n  + Mở vòi nước vừa đủ khi rửa tay và khóa chặt vòi ngay sau khi dùng.\n  + Tận dụng nước vo gạo, nước rửa rau sạch để tưới cây.\n  + Tắt đèn, tắt quạt lớp học khi ra chơi hoặc khi ra về.\n- GV chốt thông điệp: Mỗi giọt nước sạch tiết kiệm hôm nay là bảo vệ cuộc sống ngày mai.`,
    act2S: `- HS quan sát tranh, nhận xét các hành động đúng và chưa đúng.\n- HS nêu thêm các cách tiết kiệm nước và điện tại gia đình mình.`,
    act3T: `- GV tổ chức hoạt động "Cây thông điệp xanh": mỗi HS viết 1 việc làm cụ thể tiết kiệm nước/điện lên thẻ lá xanh và đính lên bảng lớp.\n- GV mời một số HS đọc to thông điệp của mình.`,
    act3S: `- HS viết thông điệp ngắn gọn: "Khóa chặt vòi nước sau khi rửa tay", "Tắt quạt, tắt đèn khi rời khỏi phòng" và chia sẻ trước lớp.`,
    act4T: `- GV nhận xét, tuyên dương ý thức bảo vệ tài nguyên thiên nhiên của lớp và dặn dò thực hành hàng ngày.`,
    act4S: `- HS lắng nghe và tự giác thực hiện tại trường cũng như ở nhà.`
  },
  {
    lessonNumber: 5,
    part: 1,
    title: "Xây dựng Trường học an toàn và Cộng đồng chủ động phòng chống thiên tai",
    subTitle: "Nhận diện nguy cơ mất an toàn trong trường học và sơ đồ thoát hiểm",
    specificCompetency:
      "Biết quan sát, nhận diện các vị trí an toàn, lối thoát hiểm trong khuôn viên trường học và biết giữ bình tĩnh di chuyển theo hàng ngũ khi có tình huống khẩn cấp.",
    teacherMaterials: [
      "Tài liệu GNRRTH, sơ đồ lối thoát hiểm của nhà trường, biển chỉ dẫn Exit.",
      "Phiếu khảo sát an toàn lớp học."
    ],
    studentMaterials: [
      "Phiếu khảo sát góc lớp học an toàn, bút chì."
    ],
    act1T: `- GV cho HS quan sát biển chỉ dẫn lối thoát hiểm (EXIT màu xanh lá) và hỏi: "Biển báo này có ý nghĩa gì? Thường được đặt ở đâu?"\n- GV dẫn dắt vào bài GNRRTH: Xây dựng Trường học an toàn và sơ đồ thoát hiểm.`,
    act1S: `- HS trả lời: Biển chỉ lối ra an toàn khi có sự cố khẩn cấp.\n- HS lắng nghe giới thiệu bài.`,
    act2T: `- GV giới thiệu sơ đồ khuôn viên trường học, chỉ rõ vị trí phòng học của lớp, cầu thang/hành lang di chuyển và sân tập trung an toàn.\n- GV hướng dẫn quy tắc thoát hiểm an toàn: Bình tĩnh lắng nghe hiệu lệnh của thầy cô -> Xếp hàng nhanh nhẹn -> Di chuyển bước nhanh theo lối quy định, tuyệt đối không chen lấn, xô đẩy bạn.`,
    act2S: `- HS quan sát sơ đồ trường học, xác định hướng di chuyển từ lớp mình ra khu vực sân an toàn.\n- HS ghi nhớ quy tắc: Không chen lấn, không xô đẩy, đi theo sự chỉ dẫn của giáo viên.`,
    act3T: `- GV cho các tổ thực hành kiểm tra "Lớp học an toàn": kiểm tra lối đi giữa các dãy bàn đã thông thoáng chưa, cặp sách đã để gọn trong ngăn bàn chưa, cửa lớp đóng mở có dễ dàng không.\n- GV nhận xét tinh thần tự quản của các tổ.`,
    act3S: `- Các tổ kiểm tra dãy bàn của tổ mình, xếp gọn cặp sách và ghế ngồi để lối đi luôn thông thoáng, an toàn.`,
    act4T: `- GV tổng kết bài học, nhắc nhở HS luôn giữ gìn nền nếp để lớp học luôn là môi trường an toàn, thân thiện.`,
    act4S: `- HS lắng nghe và thực hiện tốt nội quy trường lớp an toàn.`
  },
  {
    lessonNumber: 5,
    part: 2,
    title: "Xây dựng Trường học an toàn và Cộng đồng chủ động phòng chống thiên tai",
    subTitle: "Em làm tuyên truyền viên nhí Giảm nhẹ rủi ro thiên tai tại gia đình và cộng đồng",
    specificCompetency:
      "Tổng hợp được các kiến thức, kỹ năng GNRRTH đã học để chuẩn bị túi đồ dùng khẩn cấp cùng gia đình và tự tin chia sẻ thông điệp phòng tránh thiên tai.",
    teacherMaterials: [
      "Tài liệu GNRRTH, hình ảnh 'Túi đồ dùng khẩn cấp gia đình' (đèn pin, nước uống, lương khô, thuốc y tế, áo mưa, còi báo hiệu).",
      "Phiếu trò chơi Rung chuông vàng GNRRTH."
    ],
    studentMaterials: [
      "Bảng con/thẻ chọn đáp án A-B-C, phiếu tổng kết GNRRTH."
    ],
    act1T: `- GV giới thiệu hình ảnh chiếc "Túi an toàn khẩn cấp" và đố HS: "Khi có cảnh báo bão lũ lớn cần sơ tán, gia đình chúng ta nên chuẩn bị những vật dụng thiết yếu nào trong chiếc túi này?"\n- GV dẫn vào bài tổng kết và tuyên truyền GNRRTH.`,
    act1S: `- HS hào hứng đoán các vật dụng cần thiết: nước sạch, đồ ăn khô, đèn pin, áo mưa, áo phao, hộp thuốc y tế.\n- HS lắng nghe vào bài.`,
    act2T: `- GV hướng dẫn HS phân loại các vật dụng cần ưu tiên mang theo khi ứng phó thiên tai và giải thích công dụng của chiếc còi báo hiệu, đèn pin, nước uống.\n- GV hướng dẫn HS cách chia sẻ những kỹ năng GNRRTH đã học ở trường với ông bà, cha mẹ và anh chị em trong nhà.`,
    act2S: `- HS lắng nghe, ghi nhớ danh mục đồ dùng thiết yếu và cách sử dụng còi báo hiệu khi cần sự trợ giúp.`,
    act3T: `- GV tổ chức trò chơi "Tuyên truyền viên nhí thông thái": nêu 5 câu hỏi trắc nghiệm nhanh tổng hợp kiến thức GNRRTH (ứng phó bão lũ, phòng chống giông sét, phòng tránh đuối nước, tiết kiệm nước sạch).\n- GV tuyên dương các cá nhân và tổ trả lời xuất sắc.`,
    act3S: `- HS tham gia trả lời nhanh các câu hỏi trắc nghiệm và giải thích ngắn gọn lý do chọn đáp án.\n- Cả lớp vỗ tay khen ngợi các bạn trả lời đúng.`,
    act4T: `- GV tổng kết chương trình GNRRTH trong tuần, khen ngợi ý thức học tập của HS và dặn dò các em luôn chủ động, bình tĩnh bảo vệ bản thân trước mọi tình huống thời tiết.`,
    act4S: `- HS lắng nghe, ghi nhớ và cam kết thực hiện tốt kỹ năng Giảm nhẹ rủi ro thiên tai.`
  }
];

/**
 * Lấy bài học Giáo dục Giảm nhẹ rủi ro thiên tai (GNRRTH) theo khối lớp và tuần học.
 * Theo kế hoạch: Bổ sung tài liệu GNRRTH vào Thứ Sáu hàng tuần trước tiết HĐTN (SHL) bắt đầu từ Tuần 6.
 * Nếu week < 6 trả về null.
 */
export function getGNRRTHLesson(grade: Grade, week: number): GNRRTHLesson | null {
  if (!week || week < 6) {
    return null;
  }

  const index = (week - 6) % GNRRTH_TOPICS.length;
  const topic = GNRRTH_TOPICS[index];

  return {
    lessonNumber: topic.lessonNumber,
    part: topic.part,
    weekStart: week,
    title: topic.title,
    subTitle: topic.subTitle,
    specificCompetency: topic.specificCompetency,
    teacherMaterials: topic.teacherMaterials,
    studentMaterials: topic.studentMaterials,
    teacherActivity: `${topic.act2T}\n${topic.act3T}`,
    studentActivity: `${topic.act2S}\n${topic.act3S}`,
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: topic.act1T,
        studentActivity: topic.act1S
      },
      {
        name: "2. Hoạt động hình thành kiến thức (12 phút)",
        teacherActivity: topic.act2T,
        studentActivity: topic.act2S
      },
      {
        name: "3. Hoạt động luyện tập thực hành (13 phút)",
        teacherActivity: topic.act3T,
        studentActivity: topic.act3S
      },
      {
        name: "4. Hoạt động vận dụng trải nghiệm (5 phút)",
        teacherActivity: topic.act4T,
        studentActivity: topic.act4S
      }
    ]
  };
}
