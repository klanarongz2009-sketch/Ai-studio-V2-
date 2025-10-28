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
        "appStatus": "สถานะแอป"
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
    "maintenance": {
      "badge": "โหมดบำรุงรักษา",
      "learnMore": "เรียนรู้เพิ่มเติม",
      "title": "สถานะและการอัปเดตแอปพลิเคชัน",
      "description": "หลังจากผ่านช่วงเวลาของการพัฒนาอย่างต่อเนื่อง ตอนนี้ AI Studio V2 ถือว่ามีฟีเจอร์ครบถ้วนสมบูรณ์แล้วและได้เปลี่ยนเข้าสู่โหมดบำรุงรักษาอย่างเป็นทางการ ซึ่งหมายความว่าแม้แอปพลิเคชันจะมีความเสถียรและทำงานได้อย่างสมบูรณ์ แต่จะไม่มีการอัปเดตฟีเจอร์หลักใหม่ๆ หรือเพิ่มเนื้อหาใหม่เข้ามาอีกต่อไป เป้าหมายหลักของเราได้เปลี่ยนไปเป็นการรับประกันเสถียรภาพในระยะยาวและแก้ไขปัญหาที่สำคัญเมื่อเกิดขึ้น เพื่อให้คุณมีเครื่องมือสร้างสรรค์ที่เชื่อถือได้",
      "sectionTitle1": "สถานะการอัปเดตปัจจุบัน",
      "sectionContent1": "ในขณะนี้ แอปพลิเคชันอยู่ในสถานะที่เสถียรอย่างยิ่ง โดยฟีเจอร์ที่มีอยู่ทั้งหมดทำงานได้ตามที่คาดหวัง เรามุ่งมั่นที่จะรักษาความน่าเชื่อถือนี้ไว้ การอัปเดตในอนาคตจะจำกัดอยู่เพียง 'hotfix' ที่จำเป็นเท่านั้น ซึ่งเป็นแพตช์ที่ออกแบบมาโดยเฉพาะเพื่อแก้ไขข้อบกพร่องที่ร้ายแรงซึ่งส่งผลกระทบต่อการทำงานหลัก หรือเพื่อจัดการกับช่องโหว่ด้านความปลอดภัยที่สำคัญที่อาจถูกค้นพบ ความปลอดภัยและประสบการณ์การใช้งานที่ราบรื่นของคุณยังคงเป็นสิ่งสำคัญสูงสุดของเรา",
      "faqTitle": "คำถามที่พบบ่อย (FAQ)",
      "faq1_q": "Q: จะมีการเพิ่มโมเดล AI ใหม่ๆ ในอนาคตหรือไม่?",
      "faq1_a": "A: ไม่ครับ การรวมโมเดล AI ใหม่ๆ เข้ามาเป็นงานขนาดใหญ่ซึ่งจัดอยู่ในการพัฒนาฟีเจอร์ใหม่ เนื่องจากแอปอยู่ในโหมดบำรุงรักษาแล้ว เราจึงจะไม่เพิ่มโมเดลใหม่เข้ามาอีก แต่โมเดลที่มีอยู่จะยังคงได้รับการสนับสนุนต่อไปครับ",
      "faq2_q": "Q: หากฉันเจอบั๊กควรทำอย่างไร?",
      "faq2_a": "A: กรุณาแจ้งให้เราทราบครับ แม้ว่าเราจะไม่ได้พัฒนาฟีเจอร์ใหม่อย่างต่อเนื่อง แต่รายงานของคุณมีความสำคัญอย่างยิ่งต่อการรักษาสภาพของแอป เราจะตรวจสอบรายงานทั้งหมดและจัดลำดับความสำคัญในการแก้ไขบั๊กที่ร้ายแรงซึ่งส่งผลกระทบอย่างรุนแรงต่อการทำงานหลักของแอปพลิเคชัน",
      "faq3_q": "Q: ทำไมแอปจึงเข้าสู่โหมดบำรุงรักษา?",
      "faq3_a": "A: การเปลี่ยนเข้าสู่โหมดบำรุงรักษาช่วยให้ทีมพัฒนาของเราสามารถจัดสรรทรัพยากรและมุ่งเน้นไปที่โปรเจกต์ใหม่ๆ ที่มีนวัตกรรมและเครื่องมือ AI รุ่นต่อไปได้ ในขณะเดียวกันก็ยังคงรับประกันว่าแอปพลิเคชันนี้จะยังคงเป็นเครื่องมือที่มีประโยชน์และเชื่อถือได้สำหรับผู้ใช้ที่ทุ่มเทของเรา",
      "faq4_q": "Q: ฉันต้องการฟีเจอร์ใหม่ แต่ถ้าจะไม่มีการอัปเดตฟีเจอร์ใหม่แล้วจะเป็นอย่างไร?",
      "faq4_a": "A: เราขอขอบคุณสำหรับทุกข้อเสนอแนะจากผู้ใช้ครับ! แม้ว่าเราจะไม่ได้เพิ่มฟีเจอร์ใหม่ๆ ในแอปพลิเคชันเวอร์ชันนี้แล้ว แต่ทุกความคิดเห็นมีค่าสำหรับเราอย่างยิ่ง เราจะรวบรวมและพิจารณาไอเดียเหล่านี้เพื่อเป็นแนวทางในการพัฒนาโปรเจกต์ในอนาคตและแอปพลิเคชันใหม่ๆ ที่อาจเกิดขึ้น ความคิดเห็นของคุณช่วยให้เราเข้าใจว่าผู้ใช้ของเรากำลังมองหาอะไรอยู่ครับ",
      "faq5_q": "Q: ในเมื่อไม่มีฟีเจอร์ใหม่แล้ว ฉันจะสามารถให้ข้อเสนอแนะได้อย่างไร?",
      "faq5_a": "A: แม้จะอยู่ในโหมดบำรุงรักษา แต่ความคิดเห็นของคุณก็ยังคงมีความสำคัญอย่างยิ่งในการช่วยเราตรวจหาปัญหาที่ร้ายแรง หากคุณเจอบั๊กที่ส่งผลกระทบต่อการใช้งานอย่างมีนัยสำคัญ กรุณาแจ้งให้เราทราบ สำหรับข้อเสนอแนะเกี่ยวกับฟีเจอร์ใหม่ แม้ว่าจะไม่ได้ถูกนำมาใช้ในแอปนี้ เราก็ยังคงสนับสนุนให้คุณแบ่งปันความคิดเห็นเหล่านั้นครับ ข้อมูลเหล่านี้มีความสำคัญอย่างยิ่งต่อการวิจัยและพัฒนาเครื่องมือสร้างสรรค์รุ่นต่อไปของเรา",
      "thanks": "ขอขอบคุณสำหรับความเข้าใจและการสนับสนุนอย่างต่อเนื่องของคุณ"
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
        "appStatus": "App Status"
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
    "maintenance": {
      "badge": "Maintenance",
      "learnMore": "Learn More",
      "title": "Application Status & Updates",
      "description": "After a period of active development, AI Studio V2 is now considered feature-complete and has transitioned into maintenance mode. This means that while the application is stable and fully functional, it will no longer receive major feature updates or new content. Our primary focus has shifted to ensuring its long-term stability and addressing critical issues as they arise, providing you with a reliable creative tool.",
      "sectionTitle1": "Current Update Status",
      "sectionContent1": "The application is currently in a highly stable state, with all existing features operating as intended. Our commitment is to maintain this reliability. Future updates will be limited to essential 'hotfixes'—patches specifically designed to correct critical, functionality-breaking bugs or to address significant security vulnerabilities that may be discovered. Your security and a smooth user experience remain our top priorities.",
      "faqTitle": "Frequently Asked Questions (FAQ)",
      "faq1_q": "Q: Will new AI models be added in the future?",
      "faq1_a": "A: No. Integrating new AI models is a significant task that falls under new feature development. As the app is now in maintenance mode, we will not be adding new models. The existing models will continue to be supported.",
      "faq2_q": "Q: What should I do if I find a bug?",
      "faq2_a": "A: Please report it. While we are not actively developing new features, your reports are crucial for maintaining the app's health. We will investigate all reports and prioritize fixing critical bugs that severely impact the application's core functionality.",
      "faq3_q": "Q: Why has the app entered maintenance mode?",
      "faq3_a": "A: Transitioning to maintenance mode allows our development team to allocate resources and focus on innovative new projects and the next generation of AI tools, while ensuring this application remains a dependable and useful tool for our dedicated users.",
      "faq4_q": "Q: I would like a new feature. What happens if no new features are being developed?",
      "faq4_a": "A: We appreciate all user suggestions! While we are no longer adding new features to this version of the application, all feedback is valuable to us. We collect and review these ideas as they help inform the direction of our future projects and potential new applications. Your input helps us understand what our users are looking for.",
      "faq5_q": "Q: Since there are no new features, how can I provide feedback or suggestions?",
      "faq5_a": "A: Even in maintenance mode, your feedback is incredibly important for identifying critical issues. If you encounter a significant bug, please report it. For feature suggestions, while they won't be implemented in this app, we still encourage you to share them. This feedback is crucial for our research and development of the next generation of creative tools.",
      "thanks": "Thank you for your understanding and continued support."
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
        "appStatus": "アプリのステータス"
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
    "maintenance": {
      "badge": "メンテナンス",
      "learnMore": "詳細を見る",
      "title": "アプリケーションのステータスと更新",
      "description": "積極的な開発期間を経て、AI Studio V2は現在、機能が完成したと見なされ、メンテナンスモードに移行しました。これは、アプリケーションが安定して完全に機能する一方で、主要な機能の更新や新しいコンテンツの追加は行われないことを意味します。私たちの主な焦点は、長期的な安定性を確保し、発生した重大な問題に対処することで、信頼性の高いクリエイティブツールを提供することに移っています。",
      "sectionTitle1": "現在の更新状況",
      "sectionContent1": "アプリケーションは現在、非常に安定した状態にあり、既存のすべての機能は意図したとおりに動作しています。私たちはこの信頼性を維持することをお約束します。将来の更新は、不可欠な「ホットフィックス」に限定されます。これは、機能に重大な影響を与えるバグを修正したり、発見される可能性のある重大なセキュリティ脆弱性に対処するために特別に設計されたパッチです。お客様のセキュリティとスムーズなユーザーエクスペリエンスは、引き続き私たちの最優先事項です。",
      "faqTitle": "よくある質問（FAQ）",
      "faq1_q": "Q: 将来、新しいAIモデルは追加されますか？",
      "faq1_a": "A: いいえ。新しいAIモデルの統合は、新機能開発に分類される重要なタスクです。アプリは現在メンテナンスモードにあるため、新しいモデルの追加は行いません。既存のモデルは引き続きサポートされます。",
      "faq2_q": "Q: バグを見つけた場合はどうすればよいですか？",
      "faq2_a": "A: ご報告ください。新機能の開発は積極的に行っていませんが、皆様からのご報告はアプリの健全性を維持するために不可欠です。すべての報告を調査し、アプリケーションのコア機能に深刻な影響を与える重大なバグの修正を優先します。",
      "faq3_q": "Q: なぜアプリはメンテナンスモードに移行したのですか？",
      "faq3_a": "A: メンテナンスモードに移行することで、開発チームはリソースを革新的な新しいプロジェクトや次世代のAIツールに集中させることができ、同時にこのアプリケーションが熱心なユーザーにとって信頼できる便利なツールであり続けることを保証できます。",
      "faq4_q": "Q: 新しい機能が欲しいのですが、新機能が開発されない場合はどうなりますか？",
      "faq4_a": "A: ユーザーの皆様からのご提案に心より感謝いたします！このバージョンのアプリケーションに新機能を追加する予定はございませんが、すべてのフィードバックは私たちにとって貴重です。これらのアイデアは、将来のプロジェクトや新しいアプリケーションの方向性を検討する上で参考にさせていただきます。皆様のご意見は、ユーザーが何を求めているかを理解するのに役立ちます。",
      "faq5_q": "Q: 新機能がない中で、どのようにフィードバックや提案をすればよいですか？",
      "faq5_a": "A: メンテナンスモードであっても、重大な問題を特定するために皆様からのフィードバックは非常に重要です。重大なバグに遭遇した場合は、ご報告ください。機能に関するご提案については、このアプリでは実装されませんが、ぜひお聞かせください。これらのフィードバックは、次世代のクリエイティブツールの研究開発にとって極めて重要です。",
      "thanks": "ご理解と継続的なご支援に感謝いたします。"
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