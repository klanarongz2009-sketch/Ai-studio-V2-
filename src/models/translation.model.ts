export type Language = 'th' | 'en' | 'ja';

export const translations = {
  th: {
    "header": {
        "title": "AI STUDIO (V2)",
        "credits": "เครดิต",
        "settings": "การตั้งค่า",
        "menu": "เมนู"
    },
    "sidebar": {
        "imageGenerator": "สร้างภาพ",
        "videoGenerator": "สร้างวิดีโอ",
        "musicGenerator": "สร้างเพลง",
        "gallery": "แกลเลอรี",
        "aiZone": "AI โซน",
        "aiChat": "AI Chat",
        "originalApp": "แอปต้นฉบับ"
    },
    "imageGenerator": {
        "title": "เครื่องมือสร้างภาพ AI",
        "promptLabel": "คำสั่ง (Prompt)",
        "promptPlaceholder": "เช่น อัศวินขี่ไดโนเสาร์ในอวกาศ",
        "generate": "สร้าง",
        "generating": "กำลังสร้าง...",
        "clear": "ล้าง",
        "getIdeas": "ขอไอเดีย",
        "ideasModalTitle": "ไอเดียสำหรับ Prompt",
        "loadingIdeas": "กำลังหาไอเดีย..."
    },
    "videoGenerator": {
        "title": "เครื่องมือสร้างวิดีโอ AI",
        "promptLabel": "คำสั่ง (Prompt)",
        "promptPlaceholder": "เช่น แมวโฮโลแกรมนีออนขับรถด้วยความเร็วสูงสุด",
        "generate": "สร้าง",
        "generating": "กำลังสร้าง...",
        "clear": "ล้าง",
        "loadingMessages": [
            "กำลังเรียกจิตวิญญาณแห่งวิดีโอ...",
            "กำลังเรนเดอร์ภาพฝันดิจิทัล...",
            "อาจใช้เวลาสักครู่ โปรดรอ...",
            "กำลังประกอบพิกเซลให้เป็นภาพเคลื่อนไหว...",
            "AI กำลังทำงานอย่างหนัก!"
        ]
    },
    "musicGenerator": {
        "title": "เครื่องมือสร้างเพลง AI",
        "promptLabel": "คำอธิบายเพลง",
        "promptPlaceholder": "เช่น เพลงอิเล็กทรอนิกส์สำหรับขับรถตอนกลางคืน",
        "generate": "สร้าง",
        "generating": "กำลังสร้าง...",
        "generatingDescription": "กำลังสร้างไอเดียเพลง...",
        "generatingAudio": "กำลังสังเคราะห์แทร็กเสียง...",
        "clear": "ล้าง",
        "outputTitle": "ผลลัพธ์",
        "songTitle": "ชื่อเพลง",
        "musicStyle": "สไตล์ดนตรี",
        "lyrics": "เนื้อเพลง",
        "generatedTrack": "เพลงที่สร้าง",
        "singLyrics": "ร้องเพลง",
        "stopSinging": "หยุด"
    },
    "outputDisplay": {
        "welcomeTitle": "ยินดีต้อนรับ!",
        "welcomeMessage": "ป้อนคำสั่งเพื่อเริ่มต้น!",
        "errorTitle": "เกิดข้อผิดพลาด",
        "altGeneratedFrom": "ที่สร้างจากคำสั่ง:"
    },
    "settings": {
        "title": "การตั้งค่า",
        "theme": "ธีม",
        "themeLight": "สว่าง",
        "themeDark": "มืด",
        "language": "Language / ภาษา",
        "langTh": "ไทย",
        "langEn": "English",
        "langJa": "日本語",
        "close": "ปิด",
        "betaProgram": "โปรแกรมเบต้า"
    },
    "aiChat": {
        "title": "AI Chat",
        "promptPlaceholder": "พิมพ์ข้อความถึง Hychat V0...",
        "send": "ส่ง",
        "sending": "...",
        "initialMessage": "สวัสดี! ฉันคือ Hychat V0 ผู้ช่วย AI สร้างสรรค์ของคุณ มีอะไรให้ช่วยในวันนี้?",
        "roleUser": "คุณ",
        "roleModel": "Hychat V0",
        "clearChat": "ล้างแชท",
        "disclaimer": "Hychat V0 เก่งภาษาญี่ปุ่น/อังกฤษที่สุด แต่ก็เข้าใจภาษาไทยนะ ลองคุยได้เลย!",
        "learnMore": "เรียนรู้เพิ่มเติม"
    },
    "beta": {
      "badge": "เบต้า",
      "learnMore": "เรียนรู้เพิ่มเติม",
      "title": "โปรแกรมเบต้า AI STUDIO (V2)",
      "description": "ขอขอบคุณที่เข้าร่วมโปรแกรมเบต้าของ AI STUDIO (V2) ในฐานะผู้เข้าร่วม คุณจะได้รับโอกาสพิเศษในการทดลองใช้ฟีเจอร์และการปรับปรุงล่าสุดของเราก่อนที่จะเปิดให้ใช้งานอย่างเป็นทางการ การมีส่วนร่วมของคุณมีความสำคัญอย่างยิ่งต่อการกำหนดทิศทางในอนาคตของแอปพลิเคชันของเรา",
      "sectionTitle1": "เกี่ยวกับเวอร์ชันเบต้า",
      "sectionContent1": "เวอร์ชัน 'เบต้า' คือซอฟต์แวร์รุ่นก่อนเผยแพร่จริง ซึ่งเปิดให้ผู้ใช้กลุ่มหนึ่งได้ทดสอบและให้ข้อคิดเห็น แม้ว่าเวอร์ชันนี้จะรวมฟีเจอร์ใหม่ๆ และฟีเจอร์ทดลองไว้ แต่ยังอยู่ระหว่างการพัฒนาอย่างต่อเนื่อง โดยมีวัตถุประสงค์หลักเพื่อระบุและแก้ไขปัญหาก่อนการเปิดตัวสู่สาธารณะอย่างเป็นทางการ",
      "sectionTitle2": "สิ่งที่ควรทราบระหว่างการใช้งาน",
      "sectionContent2_1_title": "ความเสถียรของระบบ:",
      "sectionContent2_1_text": "คุณอาจพบกับพฤติกรรมที่ไม่คาดคิด ข้อบกพร่องด้านการแสดงผล หรือฟังก์ชันการทำงานที่ยังไม่สมบูรณ์ เราขอความกรุณาให้คุณรายงานปัญหาเหล่านี้เพื่อช่วยเราปรับปรุงความเสถียรและประสิทธิภาพของซอฟต์แวร์",
      "sectionContent2_2_title": "ประสิทธิภาพที่อาจผันผวน:",
      "sectionContent2_2_text": "เวอร์ชันนี้ใช้โมเดล AI และฟีเจอร์ขั้นสูงที่ยังอยู่ระหว่างการทดลอง ดังนั้นประสิทธิภาพการทำงานอาจมีความผันผวน ระยะเวลาในการสร้างผลงานและการใช้ทรัพยากรอาจแตกต่างกันไปในแต่ละงาน เนื่องจากเรากำลังปรับปรุงโครงสร้างพื้นฐานอย่างต่อเนื่อง",
      "sectionContent2_3_title": "ข้อมูลและผลงานที่กำลังดำเนินการ:",
      "sectionContent2_3_text": "แม้ว่าเราได้ใช้มาตรการป้องกันความสมบูรณ์ของข้อมูลอย่างเข้มงวด แต่ธรรมชาติของสภาพแวดล้อมแบบเบต้าย่อมมีความเสี่ยงเล็กน้อยที่ข้อมูลอาจสูญหาย เราขอแนะนำเป็นอย่างยิ่งให้คุณบันทึกหรือส่งออกผลงานที่สำคัญเป็นระยะเพื่อลดผลกระทบจากปัญหาที่อาจเกิดขึ้น",
      "sectionTitle3": "ความสำคัญของความคิดเห็นของคุณ",
      "sectionContent3": "ความคิดเห็นของคุณคือทรัพยากรที่มีค่าที่สุดของโปรแกรมเบต้านี้ รายงานข้อบกพร่องโดยละเอียด คำขอฟีเจอร์ และข้อเสนอแนะด้านการใช้งาน มีความสำคัญอย่างยิ่งต่อกระบวนการพัฒนาของเรา ข้อมูลจากคุณจะส่งผลโดยตรงต่อการปรับปรุงผลิตภัณฑ์และการจัดลำดับความสำคัญของแผนการพัฒนาของเรา",
      "sectionTitle4": "แผนการพัฒนาในอนาคต",
      "sectionContent4": "แผนงานของเราประกอบด้วยการพัฒนาระบบแกลเลอรีที่มีประสิทธิภาพมากขึ้น การผสานรวมโมเดล AI ใหม่ๆ เพื่อสไตล์การสร้างสรรค์ที่หลากหลาย และฟีเจอร์สำหรับชุมชนเพื่อการทำงานร่วมกันและแบ่งปันผลงาน การเข้าร่วมของคุณจะช่วยให้เราปรับปรุงและจัดลำดับความสำคัญของการอัปเดตเหล่านี้สำหรับการเปิดตัวอย่างเป็นทางการ",
      "thanks": "ขอขอบคุณสำหรับการมีส่วนร่วมในโครงการ AI STUDIO (V2) เราขอขอบคุณสำหรับเวลาและความพยายามของคุณในการช่วยเราสร้างเครื่องมือสร้างสรรค์ที่ดีและทรงพลังยิ่งขึ้น"
    },
    "chatInfo": {
      "title": "ข้อควรรู้เกี่ยวกับการใช้ภาษา",
      "description": "Hychat V0 ถูกสร้างมาให้เก่งภาษาญี่ปุ่นและอังกฤษที่สุด แต่เราก็อยากให้คนไทยได้ลองใช้ด้วยภาษาของตัวเอง นี่คือสิ่งที่คุณควรรู้ครับ:",
      "sectionTitle1": "ภาษาไทยอาจไม่สมบูรณ์",
      "sectionContent1": "คำตอบภาษาไทยอาจมีข้อผิดพลาดหรือไม่เป็นธรรมชาติบ้างในบางครั้ง เพื่อผลลัพธ์ที่ดีที่สุด เราจึงแนะนำให้ใช้ภาษาญี่ปุ่นหรือภาษาอังกฤษก่อนครับ",
      "sectionTitle2": "ถ้าไม่อยากใช้ภาษาอื่นล่ะ?",
      "sectionContent2": "เราเข้าใจดี! หากคุณไม่สะดวกพิมพ์ภาษาอื่น หรือขี้เกียจใช้ตัวแปลภาษา ก็สามารถพิมพ์ไทยมาได้เลยครับ แค่โปรดเข้าใจว่า AI อาจจะตอบได้ไม่สมบูรณ์ 100% ในบางครั้ง",
      "faqTitle": "คำถามที่พบบ่อย (FAQ)",
      "faq1_q": "Q: ถ้าใช้ภาษาไทยแล้ว AI ตอบผิดพลาดล่ะ?",
      "faq1_a": "A: เป็นไปได้ครับ เนื่องจาก AI ถูกฝึกฝนมากับข้อมูลภาษาญี่ปุ่นและอังกฤษเป็นหลัก หากเจอข้อผิดพลาด คุณสามารถลองปรับแก้คำถามให้ง่ายขึ้น หรือเปลี่ยนไปใช้ภาษาอังกฤษ/ญี่ปุ่นเพื่อความแม่นยำสูงสุดครับ",
      "faq2_q": "Q: ทำไม AI ไม่ฉลาดกับภาษาไทยและภาษาอื่นๆ?",
      "faq2_a": "A: AI ตัวนี้ (Hychat V0) เป็นเวอร์ชันที่ถูกปรับแต่งมาเป็นพิเศษให้มีความเชี่ยวชาญในภาษาญี่ปุ่นและอังกฤษ เพื่อตอบสนองความต้องการของผู้ใช้กลุ่มหลัก การทำให้ AI เก่งทุกภาษาต้องใช้ทรัพยากรในการพัฒนามหาศาล ซึ่งเราอาจเพิ่มเติมในเวอร์ชันถัดๆ ไปครับ",
      "faq3_q": "Q: ทำไมภาษาที่ให้ผลลัพธ์ดีที่สุดคือภาษาญี่ปุ่น?",
      "faq3_a": "A: เพราะ Hychat V0 ถูกออกแบบและฝึกฝนด้วยชุดข้อมูลภาษาญี่ปุ่นที่ใหญ่และมีคุณภาพสูงที่สุด ทำให้มีความเข้าใจในบริบท วัฒนธรรม และความแตกต่างเล็กๆ น้อยๆ ของภาษาญี่ปุ่นได้ดีกว่าภาษาอื่นครับ",
      "thanks": "ขอบคุณที่เข้าใจและลองใช้งาน Hychat V0 ครับ!"
    }
  },
  en: {
    "header": {
        "title": "AI STUDIO (V2)",
        "credits": "Credits",
        "settings": "Settings",
        "menu": "Menu"
    },
    "sidebar": {
        "imageGenerator": "Image Gen",
        "videoGenerator": "Video Gen",
        "musicGenerator": "Music Gen",
        "gallery": "Gallery",
        "aiZone": "AI Zone",
        "aiChat": "AI Chat",
        "originalApp": "Original App"
    },
    "imageGenerator": {
        "title": "AI Image Generator",
        "promptLabel": "Prompt",
        "promptPlaceholder": "e.g., A knight riding a dinosaur in space",
        "generate": "Generate",
        "generating": "Generating...",
        "clear": "Clear",
        "getIdeas": "Get Ideas",
        "ideasModalTitle": "Prompt Ideas",
        "loadingIdeas": "Getting ideas..."
    },
    "videoGenerator": {
        "title": "AI Video Generator",
        "promptLabel": "Prompt",
        "promptPlaceholder": "e.g., A neon hologram of a cat driving at top speed",
        "generate": "Generate",
        "generating": "Generating...",
        "clear": "Clear",
        "loadingMessages": [
            "Summoning video spirits...",
            "Rendering digital dreamscapes...",
            "This can take a few minutes. Please wait...",
            "Assembling pixels into motion...",
            "The AI is hard at work!"
        ]
    },
    "musicGenerator": {
        "title": "AI Music Generator",
        "promptLabel": "Music Description",
        "promptPlaceholder": "e.g., An electronic track for a nighttime drive",
        "generate": "Generate",
        "generating": "Generating...",
        "generatingDescription": "Generating music ideas...",
        "generatingAudio": "Synthesizing audio track...",
        "clear": "Clear",
        "outputTitle": "Result",
        "songTitle": "Title",
        "musicStyle": "Music Style",
        "lyrics": "Lyrics",
        "generatedTrack": "Generated Track",
        "singLyrics": "Sing Lyrics",
        "stopSinging": "Stop"
    },
    "outputDisplay": {
        "welcomeTitle": "Welcome!",
        "welcomeMessage": "Enter a prompt to get started!",
        "errorTitle": "An Error Occurred",
        "altGeneratedFrom": "generated from the prompt:"
    },
    "settings": {
        "title": "Settings",
        "theme": "Theme",
        "themeLight": "Light",
        "themeDark": "Dark",
        "language": "Language / ภาษา",
        "langTh": "ไทย",
        "langEn": "English",
        "langJa": "日本語",
        "close": "Close",
        "betaProgram": "Beta Program"
    },
    "aiChat": {
        "title": "AI Chat",
        "promptPlaceholder": "Type a message to Hychat V0...",
        "send": "Send",
        "sending": "...",
        "initialMessage": "Hello! I am Hychat V0, your creative AI assistant. How can I help you today?",
        "roleUser": "You",
        "roleModel": "Hychat V0",
        "clearChat": "Clear Chat",
        "disclaimer": "Note: Hychat V0 is optimized for Japanese/English. Conversations in other languages may be inaccurate.",
        "learnMore": "Learn More"
    },
    "beta": {
      "badge": "BETA",
      "learnMore": "Learn More",
      "title": "AI STUDIO (V2) Beta Program",
      "description": "Thank you for participating in the AI STUDIO (V2) Beta Program. As a beta participant, you have the unique opportunity to experience our latest features and improvements before they are made available to the general public. Your involvement is instrumental in shaping the future of our application.",
      "sectionTitle1": "Understanding the Beta Version",
      "sectionContent1": "A 'beta' version is a pre-release of software that is made available to a select group of users for testing and feedback. While this version includes new and experimental features, it is still under active development. Its primary purpose is to identify and resolve issues before the official public release.",
      "sectionTitle2": "What to Expect",
      "sectionContent2_1_title": "Potential for Instability:",
      "sectionContent2_1_text": "You may encounter unexpected behavior, visual imperfections, or features that do not function as intended. We kindly ask that you report these occurrences to help us improve the software's stability and performance.",
      "sectionContent2_2_title": "Performance Variations:",
      "sectionContent2_2_text": "This version utilizes advanced, experimental AI models and features. Consequently, performance may vary. Generation times and resource utilization can differ between tasks as we continue to optimize our backend infrastructure.",
      "sectionContent2_3_title": "Data and Work-in-Progress:",
      "sectionContent2_3_text": "While we have implemented robust data integrity measures, the nature of a beta environment means there is a small but non-zero risk of data loss. We strongly advise you to save or export any critical work periodically to mitigate potential issues.",
      "sectionTitle3": "The Importance of Your Feedback",
      "sectionContent3": "Your feedback is the most valuable asset of this beta program. Detailed bug reports, feature requests, and usability suggestions are critical for our development process. Your input directly influences product enhancements and the prioritization of our development roadmap.",
      "sectionTitle4": "Future Development",
      "sectionContent4": "Our roadmap includes a more robust gallery system, integration of new AI models for diverse creative styles, and community features for collaboration and sharing. Your participation will help us refine and prioritize these updates for the official release.",
      "thanks": "Thank you for your contribution to the AI STUDIO (V2) project. We appreciate your time and effort in helping us build a better, more powerful creative tool."
    },
    "chatInfo": {
      "title": "About Language Support",
      "description": "Hychat V0 is an AI assistant optimized for conversations primarily in Japanese, followed by English. Here's what you need to know:",
      "sectionTitle1": "Language Proficiency",
      "sectionContent1": "Hychat V0's most effective and accurate language is Japanese (日本語). English is its second language. For other languages, the system may attempt to respond, but you might encounter incorrect or unnatural replies.",
      "sectionTitle2": "Recommended Languages",
      "sectionContent2": "For the most reliable and coherent experience, please use Japanese or English. Using other languages is experimental and may not function as expected.",
      "faqTitle": "Frequently Asked Questions (FAQ)",
      "faq1_q": "Q: What if I use my language and get errors?",
      "faq1_a": "A: That's possible. Since the AI is primarily trained on Japanese and English data, errors can occur in other languages. You can try rephrasing your question more simply or switch to English/Japanese for the highest accuracy.",
      "faq2_q": "Q: Why isn't the AI as smart in other languages?",
      "faq2_a": "A: This version (Hychat V0) is specifically tuned for expertise in Japanese and English to serve its primary user base. Achieving fluency in all languages requires immense development resources, which may be considered for future versions.",
      "faq3_q": "Q: Why does Japanese produce the best results?",
      "faq3_a": "A: Hychat V0 was designed and trained with the largest, highest-quality Japanese dataset. This gives it a deeper understanding of the context, culture, and nuances of the Japanese language compared to others.",
      "thanks": "Thank you for your understanding."
    }
  },
  ja: { 
    "header": {
        "title": "AI STUDIO (V2)",
        "credits": "クレジット",
        "settings": "設定",
        "menu": "メニュー"
    },
    "sidebar": {
        "imageGenerator": "画像生成",
        "videoGenerator": "ビデオ生成",
        "musicGenerator": "音楽生成",
        "gallery": "ギャラリー",
        "aiZone": "AIゾーン",
        "aiChat": "AIチャット",
        "originalApp": "元のアプリ"
    },
    "imageGenerator": {
        "title": "AI画像ジェネレーター",
        "promptLabel": "プロンプト",
        "promptPlaceholder": "例：宇宙で恐竜に乗る騎士",
        "generate": "生成",
        "generating": "生成中...",
        "clear": "クリア",
        "getIdeas": "アイデアを得る",
        "ideasModalTitle": "プロンプトのアイデア",
        "loadingIdeas": "アイデアを取得中..."
    },
    "videoGenerator": {
        "title": "AIビデオジェネレーター",
        "promptLabel": "プロンプト",
        "promptPlaceholder": "例：最高速度で運転する猫のネオンホログラム",
        "generate": "生成",
        "generating": "生成中...",
        "clear": "クリア",
        "loadingMessages": [
            "ビデオの精霊を召喚中...",
            "デジタルの夢の風景をレンダリング中...",
            "これには数分かかることがあります。お待ちください...",
            "ピクセルを動きに組み立て中...",
            "AIが頑張っています！"
        ]
    },
    "musicGenerator": {
        "title": "AI音楽ジェネレーター",
        "promptLabel": "音楽の説明",
        "promptPlaceholder": "例：夜のドライブのための電子音楽トラック",
        "generate": "生成",
        "generating": "生成中...",
        "generatingDescription": "音楽のアイデアを生成中...",
        "generatingAudio": "オーディオトラックを合成中...",
        "clear": "クリア",
        "outputTitle": "結果",
        "songTitle": "曲名",
        "musicStyle": "音楽スタイル",
        "lyrics": "歌詞",
        "generatedTrack": "生成されたトラック",
        "singLyrics": "歌詞を歌う",
        "stopSinging": "停止"
    },
    "outputDisplay": {
        "welcomeTitle": "ようこそ！",
        "welcomeMessage": "プロンプトを入力して始めましょう！",
        "errorTitle": "エラーが発生しました",
        "altGeneratedFrom": "プロンプトから生成:"
    },
    "settings": {
        "title": "設定",
        "theme": "テーマ",
        "themeLight": "ライト",
        "themeDark": "ダーク",
        "language": "Language / 言語",
        "langTh": "タイ語",
        "langEn": "英語",
        "langJa": "日本語",
        "close": "閉じる",
        "betaProgram": "ベータプログラム"
    },
    "aiChat": {
        "title": "AIチャット",
        "promptPlaceholder": "Hychat V0にメッセージを入力...",
        "send": "送信",
        "sending": "...",
        "initialMessage": "こんにちは！私はクリエイティブAIアシスタントのHychat V0です。今日は何をお手伝いしましょうか？",
        "roleUser": "あなた",
        "roleModel": "Hychat V0",
        "clearChat": "チャットをクリア",
        "disclaimer": "注意：Hychat V0は日本語/英語に最適化されています。他の言語での会話は不正確な場合があります。",
        "learnMore": "詳細を見る"
    },
    "beta": {
      "badge": "ベータ",
      "learnMore": "詳細を見る",
      "title": "AI STUDIO (V2) ベータプログラム",
      "description": "AI STUDIO (V2) ベータプログラムにご参加いただき、誠にありがとうございます。ベータ参加者として、あなたは一般公開前に最新の機能や改善を体験するユニークな機会を得られます。あなたの参加は、私たちのアプリケーションの未来を形作る上で不可欠です。",
      "sectionTitle1": "ベータ版について",
      "sectionContent1": "「ベータ」版とは、テストとフィードバックのために一部のユーザーに提供される、ソフトウェアのプレリリース版です。このバージョンには新機能や実験的な機能が含まれていますが、まだ活発な開発段階にあります。その主な目的は、公式の一般公開前に問題を特定し、解決することです。",
      "sectionTitle2": "ご利用にあたっての注意事項",
      "sectionContent2_1_title": "不安定性の可能性：",
      "sectionContent2_1_text": "予期しない動作、表示の不具合、または意図したとおりに機能しない機能に遭遇する可能性があります。ソフトウェアの安定性とパフォーマンスを向上させるため、これらの事象をご報告いただけますようお願い申し上げます。",
      "sectionContent2_2_title": "パフォーマンスの変動：",
      "sectionContent2_2_text": "このバージョンでは、先進的で実験的なAIモデルと機能を利用しています。そのため、パフォーマンスが変動する可能性があります。バックエンドインフラの最適化を継続しているため、生成時間やリソース使用率はタスクによって異なる場合があります。",
      "sectionContent2_3_title": "データと作業中の作品：",
      "sectionContent2_3_text": "堅牢なデータ整合性対策を講じていますが、ベータ環境の性質上、データ損失のリスクがゼロではありません。潜在的な問題を軽減するため、重要な作業は定期的に保存またはエクスポートすることを強くお勧めします。",
      "sectionTitle3": "フィードバックの重要性",
      "sectionContent3": "あなたのフィードバックは、このベータプログラムの最も価値のある資産です。詳細なバグレポート、機能リクエスト、ユーザビリティに関する提案は、私たちの開発プロセスにとって非常に重要です。あなたの意見は、製品の強化と開発ロードマップの優先順位付けに直接影響します。",
      "sectionTitle4": "今後の開発について",
      "sectionContent4": "私たちのロードマップには、より堅牢なギャラリーシステム、多様なクリエイティブスタイルに対応する新しいAIモデルの統合、および共同作業と共有のためのコミュニティ機能が含まれています。あなたの参加は、公式リリースに向けてこれらのアップデートを洗練させ、優先順位を付けるのに役立ちます。",
      "thanks": "AI STUDIO (V2) プロジェクトへのご貢献に感謝いたします。より良く、より強力なクリエイティブツールを構築するためのご協力に、心より感謝申し上げます。"
    },
    "chatInfo": {
      "title": "言語サポートについて",
      "description": "Hychat V0は、主に日本語、次に英語での会話に最適化されたAIアシスタントです。以下に知っておくべきことをまとめました。",
      "sectionTitle1": "言語能力",
      "sectionContent1": "Hychat V0が最も効果的で正確な言語は日本語です。英語は第二言語です。他の言語については、システムが応答を試みることがありますが、不正確または不自然な応答が発生する可能性があります。",
      "sectionTitle2": "推奨言語",
      "sectionContent2": "最も信頼性が高く、一貫性のある体験のために、日本語または英語を使用してください。他の言語の使用は実験的なものであり、期待どおりに機能しない可能性があります。",
      "faqTitle": "よくある質問（FAQ）",
      "faq1_q": "Q: 他の言語を使用してエラーが発生した場合はどうなりますか？",
      "faq1_a": "A: はい、その可能性があります。AIは主に日本語と英語のデータでトレーニングされているため、他の言語ではエラーが発生することがあります。質問をより簡単な言葉で言い換えるか、最高の精度を得るために英語/日本語に切り替えることをお勧めします。",
      "faq2_q": "Q: なぜAIは他の言語ではあまり賢くないのですか？",
      "faq2_a": "A: このバージョン（Hychat V0）は、主要なユーザー層に対応するため、日本語と英語の専門知識に特化して調整されています。すべての言語で流暢さを実現するには、膨大な開発リソースが必要であり、将来のバージョンで検討される可能性があります。",
      "faq3_q": "Q: なぜ日本語が最も良い結果をもたらすのですか？",
      "faq3_a": "A: Hychat V0は、最大かつ最高品質の日本語データセットで設計・トレーニングされました。これにより、他の言語と比較して、日本語の文脈、文化、ニュアンスをより深く理解することができます。",
      "thanks": "ご理解のほど、よろしくお願いいたします。"
    }
  }
};