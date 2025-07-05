// 多语言文本配置
const translations = {
    zh: {
        // 语言选择界面动态标题
        languageTitles: [
            '언어를 선택해 주세요 / Please Select Language',
            '请选择语言 / Please Select Language', 
            'Vui lòng chọn ngôn ngữ / Please Select Language',
            'Пожалуйста, выберите язык / Please Select Language'
        ],
        
        // 隐私同意界面
        privacyTitle: '个人信息收集同意书',
        privacyText: `
            <p>为了完成入职手续，我们需要收集您的个人信息，包括：</p>
            <ul>
                <li>基本信息（姓名、生日、电话、住址、血型）</li>
                <li>证件信息（护照、签证、居民登录证等）</li>
                <li>证件照片</li>
                <li>电子签名</li>
            </ul>
            <p>您的个人信息将仅用于入职登记，我们承诺严格保护您的隐私安全。</p>
        `,
        agreeBtn: '同意并继续',
        declineBtn: '不同意',
        backToLanguageText: '返回语言选择',
        
        // 基本界面
        backText: '返回',
        formTitle: '新人资料收集',
        
        // 表单字段
        nameLabel: '姓名',
        koreanNameLabel: '韩文名',
        birthdayLabel: '生日',
        phoneLabel: '电话',
        passportLabel: '护照号',
        residentLabel: '주민등록번호',
        visaTypeLabel: '签证类型',
        foreignerNumberLabel: '外国人登录号',
        addressLabel: '住址',
        jobTypeLabel: '工种',
        workExperienceLabel: '工作经历(年)',
        bloodTypeLabel: '血型',
        rhFactorLabel: 'Rh因子',
        
        // 照片区域
        photoSectionLabel: '证件照片',
        requiredPhotosTitle: '必需照片',
        optionalPhotosTitle: '可选照片',
        clickToUpload: '点击上传',
        bankbookPhotoLabel: '存折照片',
        bankbookUploadText: '点击上传存折照片',
        bankbookPhotoItemLabel: '存折照片',
        
        // 工资支付方式
        paymentMethodLabel: '工资支付方式',
        paymentMethodSelect: '请选择支付方式',
        paymentMethodTeamLeader: '组长收款',
        paymentMethodIndividual: '个人收款',
        teamLeaderNameLabel: '组长姓名',
        individualPaymentLabel: '账户信息录入方式',
        individualMethodPhotoLabel: '上传存折照片',
        individualMethodManualLabel: '手动输入',
        recommendedBadge: '推荐',
        photoMethodDescription: '上传存折照片，系统自动识别账户信息，准确快捷',
        manualMethodDescription: '手动输入银行和账户信息，仅在无法拍照时使用',
        bankNameLabel: '银行名称',
        bankNamePlaceholder: '请输入银行名称',
        accountNumberLabel: '账户号码',
        accountNumberPlaceholder: '请输入账户号码',
        accountHolderLabel: '账户持有人',
        accountHolderPlaceholder: '请输入账户持有人姓名',
        foreignerNumberPlaceholder: '例: 123456-1234567',
        
        // 签名和按钮
        signatureLabel: '电子签名',
        clearSignBtn: '清除签名',
        submitBtn: '生成表格',
        successTitle: '表格生成成功！',
        successText: '请点击下方按钮生成打印版本。',
        downloadBtn: '生成打印版本',
        
        // 文档标题
        documentTitle: '新人资料登记表',
        documentSubtitle: 'New Employee Information Form',
        
        // 照片类型（移除存折照片）
        photoTypes: {
            passport: '护照照片',
            visa: '签证照片',
            education: '基础建筑教育证'
        },
        
        // 签证类型选项
        visaTypes: {
            none: '无',
            'A-1': 'A-1 (外交)',
            'A-2': 'A-2 (公务)',
            'A-3': 'A-3 (协定)',
            'B-1': 'B-1 (免签)',
            'B-2': 'B-2 (观光过境)',
            'C-1': 'C-1 (临时采访)',
            'C-2': 'C-2 (短期商务)',
            'C-3': 'C-3 (短期访问)',
            'C-4': 'C-4 (短期就业)',
            'D-1': 'D-1 (文化艺术)',
            'D-2': 'D-2 (留学)',
            'D-3': 'D-3 (技术研修)',
            'D-4': 'D-4 (一般研修)',
            'D-5': 'D-5 (采访)',
            'D-6': 'D-6 (宗教)',
            'D-7': 'D-7 (驻在)',
            'D-8': 'D-8 (企业投资)',
            'D-9': 'D-9 (贸易经营)',
            'D-10': 'D-10 (求职)',
            'E-1': 'E-1 (教授)',
            'E-2': 'E-2 (会话指导)',
            'E-3': 'E-3 (研究)',
            'E-4': 'E-4 (技术指导)',
            'E-5': 'E-5 (专门职业)',
            'E-6': 'E-6 (艺术演出)',
            'E-7': 'E-7 (特定活动)',
            'E-8': 'E-8 (非专业就业)',
            'E-9': 'E-9 (非专业就业)',
            'E-10': 'E-10 (船员就业)',
            'F-1': 'F-1 (访问同居)',
            'F-2': 'F-2 (居住)',
            'F-3': 'F-3 (同伴)',
            'F-4': 'F-4 (在外同胞)',
            'F-5': 'F-5 (永久居住)',
            'F-6': 'F-6 (结婚移民)',
            'G-1': 'G-1 (其他)',
            'H-1': 'H-1 (观光就业)',
            'H-2': 'H-2 (访问就业)'
        },
        
        // 提示信息
        alerts: {
            signatureRequired: '请先签名',
            bloodTypeRequired: '请选择血型',
            photoRequired: '请上传必需的照片',
            missingRequiredPhotos: '请上传以下必需照片：',
            paymentMethodRequired: '请选择工资支付方式',
            teamLeaderNameRequired: '请输入组长姓名',
            individualMethodRequired: '请选择账户信息录入方式',
            bankInfoRequired: '请填写完整的银行信息',
            bankbookPhotoRequired: '请上传存折照片',
            declineMessage: '感谢您的访问，请联系管理员了解更多信息。'
        }
    },
    ko: {
        languageTitles: [
            '언어를 선택해 주세요 / Please Select Language',
            '请选择语言 / Please Select Language',
            'Vui lòng chọn ngôn ngữ / Please Select Language',
            'Пожалуйста, выберите язык / Please Select Language'
        ],
        
        privacyTitle: '개인정보 수집 동의서',
        privacyText: `
            <p>입사 절차를 완료하기 위해 다음과 같은 개인정보를 수집합니다:</p>
            <ul>
                <li>기본 정보 (이름, 생년월일, 전화번호, 주소, 혈액형)</li>
                <li>신분증 정보 (여권, 비자, 주민등록증 등)</li>
                <li>증명사진</li>
                <li>전자서명</li>
            </ul>
            <p>귀하의 개인정보는 입사 등록 목적으로만 사용되며, 개인정보 보호를 위해 최선을 다하겠습니다.</p>
        `,
        agreeBtn: '동의하고 계속',
        declineBtn: '동의하지 않음',
        backToLanguageText: '언어 선택으로 돌아가기',
        
        backText: '뒤로',
        formTitle: '신입사원 정보 수집',
        nameLabel: '이름',
        koreanNameLabel: '한국어 이름',
        birthdayLabel: '생년월일',
        phoneLabel: '전화번호',
        residentLabel: '주민등록번호',
        addressLabel: '주소',
        jobTypeLabel: '직종',
        workExperienceLabel: '경력(년)',
        bloodTypeLabel: '혈액형',
        rhFactorLabel: 'Rh인자',
        photoSectionLabel: '증명사진',
        requiredPhotosTitle: '필수 사진',
        optionalPhotosTitle: '선택 사진',
        clickToUpload: '클릭하여 업로드',
        bankbookPhotoLabel: '통장 사진',
        bankbookUploadText: '통장 사진을 클릭하여 업로드',
        bankbookPhotoItemLabel: '통장 사진',
        
        paymentMethodLabel: '급여 지급 방식',
        paymentMethodSelect: '지급 방식을 선택하세요',
        paymentMethodTeamLeader: '조장 수령',
        paymentMethodIndividual: '개인 수령',
        teamLeaderNameLabel: '조장 이름',
        individualPaymentLabel: '계좌 정보 입력 방식',
        individualMethodPhotoLabel: '통장 사진 업로드',
        individualMethodManualLabel: '직접 입력',
        recommendedBadge: '추천',
        photoMethodDescription: '통장 사진을 업로드하여 계좌 정보를 자동으로 인식',
        manualMethodDescription: '은행과 계좌 정보를 직접 입력, 사진을 찍을 수 없을 때만 사용',
        bankNameLabel: '은행명',
        bankNamePlaceholder: '은행명을 입력하세요',
        accountNumberLabel: '계좌번호',
        accountNumberPlaceholder: '계좌번호를 입력하세요',
        accountHolderLabel: '예금주',
        accountHolderPlaceholder: '예금주명을 입력하세요',
        
        signatureLabel: '전자서명',
        clearSignBtn: '서명 지우기',
        submitBtn: '표 생성',
        successTitle: '표 생성 완료!',
        successText: '다운로드 버튼을 클릭하여 인쇄용을 받으세요.',
        downloadBtn: '인쇄용 생성',
        documentTitle: '신입사원 정보 등록표',
        documentSubtitle: 'New Employee Information Form',
        
        photoTypes: {
            resident: '주민등록증',
            education: '기초건설교육증'
        },
        
        alerts: {
            signatureRequired: '서명을 해주세요',
            bloodTypeRequired: '혈액형을 선택해주세요',
            photoRequired: '필수 사진을 업로드해주세요',
            missingRequiredPhotos: '다음 필수 사진을 업로드해주세요：',
            paymentMethodRequired: '급여 지급 방식을 선택해주세요',
            teamLeaderNameRequired: '조장 이름을 입력해주세요',
            individualMethodRequired: '계좌 정보 입력 방식을 선택해주세요',
            bankInfoRequired: '은행 정보를 모두 입력해주세요',
            bankbookPhotoRequired: '통장 사진을 업로드해주세요',
            declineMessage: '방문해 주셔서 감사합니다. 더 많은 정보를 원하시면 관리자에게 문의하세요.'
        }
    },
    vi: {
        languageTitles: [
            'Vui lòng chọn ngôn ngữ / Please Select Language',
            '请选择语言 / Please Select Language',
            '언어를 선택해 주세요 / Please Select Language',
            'Пожалуйста, выберите язык / Please Select Language'
        ],
        
        privacyTitle: 'Đồng ý thu thập thông tin cá nhân',
        privacyText: `
            <p>Để hoàn tất thủ tục nhập học, chúng tôi cần thu thập thông tin cá nhân của bạn, bao gồm:</p>
            <ul>
                <li>Thông tin cơ bản (họ tên, ngày sinh, số điện thoại, địa chỉ, nhóm máu)</li>
                <li>Thông tin giấy tờ (hộ chiếu, visa, thẻ cư trú, v.v.)</li>
                <li>Ảnh chứng minh</li>
                <li>Chữ ký điện tử</li>
            </ul>
            <p>Thông tin cá nhân của bạn chỉ được sử dụng cho mục đích đăng ký nhập học, chúng tôi cam kết bảo vệ nghiêm ngặt quyền riêng tư của bạn.</p>
        `,
        agreeBtn: 'Đồng ý và tiếp tục',
        declineBtn: 'Không đồng ý',
        backToLanguageText: 'Quay lại chọn ngôn ngữ',
        
        backText: 'Quay lại',
        formTitle: 'Thu thập thông tin nhân viên mới',
        nameLabel: 'Họ và tên',
        koreanNameLabel: 'Tên tiếng Hàn',
        birthdayLabel: 'Ngày sinh',
        phoneLabel: 'Số điện thoại',
        passportLabel: 'Số hộ chiếu',
        visaTypeLabel: 'Loại visa',
        foreignerNumberLabel: 'Số đăng ký người nước ngoài',
        foreignerNumberPlaceholder: 'Ví dụ: 123456-1234567',
        addressLabel: 'Địa chỉ',
        jobTypeLabel: 'Nghề nghiệp',
        workExperienceLabel: 'Kinh nghiệm(năm)',
        bloodTypeLabel: 'Nhóm máu',
        rhFactorLabel: 'Yếu tố Rh',
        photoSectionLabel: 'Ảnh giấy tờ',
        requiredPhotosTitle: 'Ảnh bắt buộc',
        optionalPhotosTitle: 'Ảnh tùy chọn',
        clickToUpload: 'Nhấp để tải lên',
        bankbookPhotoLabel: 'Ảnh sổ tiết kiệm',
        bankbookUploadText: 'Nhấp để tải ảnh sổ tiết kiệm',
        bankbookPhotoItemLabel: 'Ảnh sổ tiết kiệm',
        
        paymentMethodLabel: 'Phương thức trả lương',
        paymentMethodSelect: 'Vui lòng chọn phương thức thanh toán',
        paymentMethodTeamLeader: 'Trưởng nhóm nhận',
        paymentMethodIndividual: 'Cá nhân nhận',
        teamLeaderNameLabel: 'Tên trưởng nhóm',
        individualPaymentLabel: 'Cách nhập thông tin tài khoản',
        individualMethodPhotoLabel: 'Tải ảnh sổ tiết kiệm',
        individualMethodManualLabel: 'Nhập thủ công',
        recommendedBadge: 'Khuyến nghị',
        photoMethodDescription: 'Tải ảnh sổ tiết kiệm, hệ thống tự động nhận diện thông tin tài khoản',
        manualMethodDescription: 'Nhập thủ công thông tin ngân hàng và tài khoản, chỉ sử dụng khi không thể chụp ảnh',
        bankNameLabel: 'Tên ngân hàng',
        bankNamePlaceholder: 'Nhập tên ngân hàng',
        accountNumberLabel: 'Số tài khoản',
        accountNumberPlaceholder: 'Nhập số tài khoản',
        accountHolderLabel: 'Chủ tài khoản',
        accountHolderPlaceholder: 'Nhập tên chủ tài khoản',
        
        signatureLabel: 'Chữ ký điện tử',
        clearSignBtn: 'Xóa chữ ký',
        submitBtn: 'Tạo bảng',
        successTitle: 'Tạo bảng thành công!',
        successText: 'Vui lòng nhấp vào nút bên dưới để tạo phiên bản in.',
        downloadBtn: 'Tạo bản in',
        documentTitle: 'Mẫu Đăng Ký Thông Tin Nhân Viên Mới',
        documentSubtitle: 'New Employee Information Form',
        
        photoTypes: {
            passport: 'Ảnh hộ chiếu',
            visa: 'Ảnh visa',
            education: 'Chứng chỉ giáo dục xây dựng cơ bản'
        },
        
        visaTypes: {
            none: 'Không có',
            'F-5': 'F-5 (Thường trú vĩnh viễn)',
            'E-9': 'E-9 (Lao động phi chuyên)'
        },
        
        alerts: {
            signatureRequired: 'Vui lòng ký tên',
            bloodTypeRequired: 'Vui lòng chọn nhóm máu',
            photoRequired: 'Vui lòng tải ảnh bắt buộc lên',
            missingRequiredPhotos: 'Vui lòng tải lên các ảnh bắt buộc sau：',
            paymentMethodRequired: 'Vui lòng chọn phương thức trả lương',
            teamLeaderNameRequired: 'Vui lòng nhập tên trưởng nhóm',
            individualMethodRequired: 'Vui lòng chọn cách nhập thông tin tài khoản',
            bankInfoRequired: 'Vui lòng điền đầy đủ thông tin ngân hàng',
            bankbookPhotoRequired: 'Vui lòng tải ảnh sổ tiết kiệm',
            declineMessage: 'Cảm ơn bạn đã ghé thăm, vui lòng liên hệ quản trị viên để biết thêm thông tin.'
        }
    },
    ru: {
        languageTitles: [
            'Пожалуйста, выберите язык / Please Select Language',
            '请选择语言 / Please Select Language',
            '언어를 선택해 주세요 / Please Select Language',
            'Vui lòng chọn ngôn ngữ / Please Select Language'
        ],
        
        privacyTitle: 'Согласие на сбор персональных данных',
        privacyText: `
            <p>Для завершения процедуры трудоустройства нам необходимо собрать вашу личную информацию, включая:</p>
            <ul>
                <li>Базовая информация (имя, дата рождения, телефон, адрес, группа крови)</li>
                <li>Документы (паспорт, виза, регистрационная карта и т.д.)</li>
                <li>Фотографии документов</li>
                <li>Электронная подпись</li>
            </ul>
            <p>Ваша личная информация будет использоваться только для регистрации трудоустройства, мы обязуемся строго защищать вашу конфиденциальность.</p>
        `,
        agreeBtn: 'Согласиться и продолжить',
        declineBtn: 'Не согласен',
        backToLanguageText: 'Вернуться к выбору языка',
        
        backText: 'Назад',
        formTitle: 'Сбор информации о новых сотрудниках',
        nameLabel: 'Имя',
        koreanNameLabel: 'Корейское имя',
        birthdayLabel: 'Дата рождения',
        phoneLabel: 'Телефон',
        passportLabel: 'Номер паспорта',
        visaTypeLabel: 'Тип визы',
        foreignerNumberLabel: 'Номер регистрации иностранца',
        foreignerNumberPlaceholder: 'Например: 123456-1234567',
        addressLabel: 'Адрес',
        jobTypeLabel: 'Профессия',
        workExperienceLabel: 'Опыт работы(лет)',
        bloodTypeLabel: 'Группа крови',
        rhFactorLabel: 'Rh-фактор',
        photoSectionLabel: 'Фотографии документов',
        requiredPhotosTitle: 'Обязательные фото',
        optionalPhotosTitle: 'Дополнительные фото',
        clickToUpload: 'Нажмите для загрузки',
        bankbookPhotoLabel: 'Фото банковской книжки',
        bankbookUploadText: 'Нажмите для загрузки фото банковской книжки',
        bankbookPhotoItemLabel: 'Фото банковской книжки',
        
        paymentMethodLabel: 'Способ выплаты зарплаты',
        paymentMethodSelect: 'Пожалуйста, выберите способ оплаты',
        paymentMethodTeamLeader: 'Получение через руководителя группы',
        paymentMethodIndividual: 'Индивидуальное получение',
        teamLeaderNameLabel: 'Имя руководителя группы',
        individualPaymentLabel: 'Способ ввода информации о счете',
        individualMethodPhotoLabel: 'Загрузить фото банковской книжки',
        individualMethodManualLabel: 'Ручной ввод',
        recommendedBadge: 'Рекомендуется',
        photoMethodDescription: 'Загрузите фото банковской книжки, система автоматически распознает информацию о счете',
        manualMethodDescription: 'Ручной ввод банковской информации, используйте только если невозможно сфотографировать',
        bankNameLabel: 'Название банка',
        bankNamePlaceholder: 'Введите название банка',
        accountNumberLabel: 'Номер счета',
        accountNumberPlaceholder: 'Введите номер счета',
        accountHolderLabel: 'Владелец счета',
        accountHolderPlaceholder: 'Введите имя владельца счета',
        
        signatureLabel: 'Электронная подпись',
        clearSignBtn: 'Очистить подпись',
        submitBtn: 'Создать таблицу',
        successTitle: 'Таблица создана успешно!',
        successText: 'Пожалуйста, нажмите кнопку ниже, чтобы создать версию для печати.',
        downloadBtn: 'Создать для печати',
        documentTitle: 'Форма Регистрации Нового Сотрудника',
        documentSubtitle: 'New Employee Information Form',
        
        photoTypes: {
            passport: 'Фото паспорта',
            visa: 'Фото визы',
            education: 'Сертификат базового строительного образования'
        },
        
        alerts: {
            signatureRequired: 'Пожалуйста, поставьте подпись',
            bloodTypeRequired: 'Пожалуйста, выберите группу крови',
            photoRequired: 'Пожалуйста, загрузите обязательные фото',
            missingRequiredPhotos: 'Пожалуйста, загрузите следующие обязательные фото：',
            paymentMethodRequired: 'Пожалуйста, выберите способ выплаты зарплаты',
            teamLeaderNameRequired: 'Пожалуйста, введите имя руководителя группы',
            individualMethodRequired: 'Пожалуйста, выберите способ ввода информации о счете',
            bankInfoRequired: 'Пожалуйста, заполните всю банковскую информацию',
            bankbookPhotoRequired: 'Пожалуйста, загрузите фото банковской книжки',
            declineMessage: 'Спасибо за ваш визит, пожалуйста, свяжитесь с администратором для получения дополнительной информации.'
        }
    }
};

// 全局变量
let currentLanguage = 'zh';
let isDrawing = false;
let canvas, ctx;
let selectedBloodType = '';
let formData = {};
let photoDataUrls = {};
let signatureDataUrl = '';
let languageTitleIndex = 0;
let languageTitleInterval;

// 照片配置（移除存折照片）
const photoConfigs = {
    zh: [
        { key: 'passport', required: true },
        { key: 'education', required: true },
        { key: 'visa', required: false }
    ],
    vi: [
        { key: 'passport', required: true },
        { key: 'education', required: true },
        { key: 'visa', required: false }
    ],
    ru: [
        { key: 'passport', required: true },
        { key: 'education', required: true },
        { key: 'visa', required: false }
    ],
    ko: [
        { key: 'resident', required: true },
        { key: 'education', required: true }
    ]
};

// 动态语言标题（修改动画效果）
function startLanguageTitleAnimation() {
    const titleElement = document.getElementById('selectLanguageTitle');
    const titles = translations.zh.languageTitles;
    
    languageTitleInterval = setInterval(() => {
        // 淡出动画
        titleElement.classList.add('language-title-fade-out');
        
        setTimeout(() => {
            // 更换文本
            languageTitleIndex = (languageTitleIndex + 1) % titles.length;
            titleElement.textContent = titles[languageTitleIndex];
            
            // 移除淡出，添加淡入
            titleElement.classList.remove('language-title-fade-out');
            titleElement.classList.add('language-title-fade-in');
            
            setTimeout(() => {
                titleElement.classList.remove('language-title-fade-in');
            }, 1000);
        }, 500);
    }, 2000);
}

function stopLanguageTitleAnimation() {
    if (languageTitleInterval) {
        clearInterval(languageTitleInterval);
        languageTitleInterval = null;
    }
}

// 语言选择和界面切换
function selectLanguage(lang) {
    stopLanguageTitleAnimation();
    currentLanguage = lang;
    updateLanguage();
    setupFormForLanguage(lang);
    fadeOutElement('languageSelector', () => {
        fadeInElement('privacyConsent');
    });
}

function showLanguageSelector() {
    fadeOutElement('privacyConsent', () => {
        fadeInElement('languageSelector');
        // 重新开始语言标题动画
        startLanguageTitleAnimation();
    });
}

function agreeToPrivacy() {
    fadeOutElement('privacyConsent', () => {
        fadeInElement('formContainer');
        document.getElementById('formContainer').classList.add('active');
    });
}

function declinePrivacy() {
    const alerts = translations[currentLanguage]?.alerts;
    alert(alerts?.declineMessage || '感谢您的访问，请联系管理员了解更多信息。');
}

function showPrivacyConsent() {
    fadeOutElement('formContainer', () => {
        document.getElementById('formContainer').classList.remove('active');
        fadeInElement('privacyConsent');
    });
}

// 界面切换动画函数
function fadeOutElement(elementId, callback) {
    const element = document.getElementById(elementId);
    element.classList.add('fade-out');
    setTimeout(() => {
        element.classList.add('hidden');
        element.classList.remove('fade-out');
        if (callback) callback();
    }, 500);
}

function fadeInElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
    element.classList.add('fade-in');
    setTimeout(() => {
        element.classList.remove('fade-in');
        if (elementId === 'formContainer') {
            setTimeout(() => {
                initSignatureCanvas();
            }, 100);
        }
    }, 500);
}

function updateLanguage() {
    const texts = translations[currentLanguage];
    
    // 更新基本文本
    for (const key in texts) {
        if (key !== 'photoTypes' && key !== 'alerts' && key !== 'visaTypes' && key !== 'privacyText' && key !== 'languageTitles') {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = texts[key];
            }
        }
    }
    
    // 更新带有必需/可选标记的标签
    updateLabelsWithMarkers();
    
    // 更新隐私文本（HTML内容）
    if (texts.privacyText) {
        const privacyTextElement = document.getElementById('privacyText');
        if (privacyTextElement) {
            privacyTextElement.innerHTML = texts.privacyText;
        }
    }
    
    // 更新签证类型选项
    updateVisaOptions();
    
    // 更新占位符文本
    updatePlaceholders();
}

// 更新带有必需/可选标记的标签
function updateLabelsWithMarkers() {
    const texts = translations[currentLanguage];
    const requiredText = ' *';
    const optionalText = currentLanguage === 'zh' ? ' (可选)' : 
                        currentLanguage === 'ko' ? ' (선택)' :
                        currentLanguage === 'vi' ? ' (tùy chọn)' :
                        ' (необязательно)';
    
    // 必需字段
    const requiredFields = [
        'nameLabel', 'birthdayLabel', 'phoneLabel', 'passportLabel', 
        'residentLabel', 'addressLabel', 'jobTypeLabel', 'workExperienceLabel',
        'bloodTypeLabel', 'paymentMethodLabel', 'teamLeaderNameLabel', 
        'individualPaymentLabel', 'bankbookPhotoLabel', 'bankNameLabel', 
        'accountNumberLabel', 'accountHolderLabel', 'signatureLabel'
    ];
    
    // 可选字段
    const optionalFields = ['koreanNameLabel', 'visaTypeLabel', 'foreignerNumberLabel'];
    
    requiredFields.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        const textKey = fieldId;
        if (element && texts[textKey]) {
            element.innerHTML = texts[textKey] + '<span class="required">' + requiredText + '</span>';
        }
    });
    
    optionalFields.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        const textKey = fieldId;
        if (element && texts[textKey]) {
            element.innerHTML = texts[textKey] + '<span class="optional">' + optionalText + '</span>';
        }
    });
    
    // 特殊处理Rh因子标签（可选）
    const rhFactorElement = document.getElementById('rhFactorLabel');
    if (rhFactorElement && texts.rhFactorLabel) {
        rhFactorElement.innerHTML = texts.rhFactorLabel + '<span class="optional">' + optionalText + '</span>';
    }
}

// 更新占位符文本
function updatePlaceholders() {
    const texts = translations[currentLanguage];
    
    // 更新各种占位符
    const placeholderMappings = {
        'foreignerNumberPlaceholder': 'foreignerNumber',
        'bankNamePlaceholder': 'bankName',
        'accountNumberPlaceholder': 'accountNumber',
        'accountHolderPlaceholder': 'accountHolder'
    };
    
    for (const [placeholderKey, elementId] of Object.entries(placeholderMappings)) {
        const element = document.getElementById(elementId);
        if (element && texts[placeholderKey]) {
            element.placeholder = texts[placeholderKey];
        }
    }
}

// 更新签证类型选项
function updateVisaOptions() {
    const visaTypes = translations[currentLanguage].visaTypes;
    if (!visaTypes) return;
    
    for (const key in visaTypes) {
        const elementId = key === 'none' ? 'visaTypeNone' : `visa${key.replace('-', '')}`;
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = visaTypes[key];
        }
    }
}

// 根据语言设置表单显示
function setupFormForLanguage(lang) {
    const koreanNameGroup = document.getElementById('koreanNameGroup');
    const passportGroup = document.getElementById('passportGroup');
    const residentGroup = document.getElementById('residentGroup');
    const visaTypeGroup = document.getElementById('visaTypeGroup');
    const foreignerNumberGroup = document.getElementById('foreignerNumberGroup');

    if (lang === 'ko') {
        // 韩文版本
        koreanNameGroup.style.display = 'none';
        passportGroup.style.display = 'none';
        residentGroup.classList.remove('hidden');
        visaTypeGroup.style.display = 'none';
        foreignerNumberGroup.style.display = 'none';
        
        document.getElementById('residentNumber').required = true;
        document.getElementById('passport').required = false;
        document.getElementById('visaType').required = false;
        document.getElementById('foreignerNumber').required = false;
    } else {
        // 非韩文版本
        koreanNameGroup.style.display = 'block';
        passportGroup.style.display = 'block';
        residentGroup.classList.add('hidden');
        visaTypeGroup.style.display = 'block';
        foreignerNumberGroup.style.display = 'block';
        
        document.getElementById('residentNumber').required = false;
        document.getElementById('passport').required = true;
        document.getElementById('visaType').required = false;
        document.getElementById('foreignerNumber').required = false;
        
        // 添加签证类型变化监听
        setupVisaTypeListener();
    }
    
    updatePhotoGrid();
}

// 设置签证类型监听器
function setupVisaTypeListener() {
    const visaTypeSelect = document.getElementById('visaType');
    const foreignerNumberInput = document.getElementById('foreignerNumber');
    
    visaTypeSelect.addEventListener('change', function() {
        if (this.value === '' || this.value === 'none') {
            foreignerNumberInput.disabled = true;
            foreignerNumberInput.value = '';
            foreignerNumberInput.style.backgroundColor = '#f5f5f5';
            foreignerNumberInput.style.color = '#999';
            foreignerNumberInput.placeholder = '无签证时不需要填写';
        } else {
            foreignerNumberInput.disabled = false;
            foreignerNumberInput.style.backgroundColor = '';
            foreignerNumberInput.style.color = '';
            const texts = translations[currentLanguage];
            foreignerNumberInput.placeholder = texts.foreignerNumberPlaceholder || '例: 123456-1234567';
        }
    });
    
    // 初始化状态
    if (visaTypeSelect.value === '' || visaTypeSelect.value === 'none') {
        foreignerNumberInput.disabled = true;
        foreignerNumberInput.style.backgroundColor = '#f5f5f5';
        foreignerNumberInput.style.color = '#999';
    }
}

// 工资支付方式处理
function handlePaymentMethodChange() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const teamLeaderNameGroup = document.getElementById('teamLeaderNameGroup');
    const individualPaymentGroup = document.getElementById('individualPaymentGroup');
    const bankbookPhotoGroup = document.getElementById('bankbookPhotoGroup');
    const manualAccountGroup = document.getElementById('manualAccountGroup');
    
    // 重置所有相关字段
    teamLeaderNameGroup.classList.add('hidden');
    individualPaymentGroup.classList.add('hidden');
    bankbookPhotoGroup.classList.add('hidden');
    manualAccountGroup.classList.add('hidden');
    
    // 清空输入值
    document.getElementById('teamLeaderName').value = '';
    document.getElementById('teamLeaderName').required = false;
    document.querySelectorAll('input[name="individualMethod"]').forEach(radio => {
        radio.checked = false;
    });
    
    // 清空存折照片
    if (photoDataUrls['bankbook']) {
        delete photoDataUrls['bankbook'];
        const preview = document.getElementById('preview_bankbook');
        const placeholder = document.getElementById('placeholder_bankbook');
        const photoItem = document.querySelector('.bankbook-photo-item');
        
        if (preview) preview.style.display = 'none';
        if (placeholder) placeholder.style.display = 'block';
        if (photoItem) photoItem.classList.remove('has-photo');
    }
    
    if (paymentMethod === 'team_leader') {
        teamLeaderNameGroup.classList.remove('hidden');
        document.getElementById('teamLeaderName').required = true;
    } else if (paymentMethod === 'individual') {
        individualPaymentGroup.classList.remove('hidden');
    }
}

// 个人收款方式选择
function selectIndividualMethod(method) {
    const photoRadio = document.getElementById('individualMethodPhoto');
    const manualRadio = document.getElementById('individualMethodManual');
    const bankbookPhotoGroup = document.getElementById('bankbookPhotoGroup');
    const manualAccountGroup = document.getElementById('manualAccountGroup');
    
    // 更新选中状态
    if (method === 'photo') {
        photoRadio.checked = true;
        manualRadio.checked = false;
        bankbookPhotoGroup.classList.remove('hidden');
        manualAccountGroup.classList.add('hidden');
        
        // 清空手动输入字段的必填要求
        document.getElementById('bankName').required = false;
        document.getElementById('accountNumber').required = false;
        document.getElementById('accountHolder').required = false;
    } else if (method === 'manual') {
        photoRadio.checked = false;
        manualRadio.checked = true;
        bankbookPhotoGroup.classList.add('hidden');
        manualAccountGroup.classList.remove('hidden');
        
        // 设置手动输入字段为必填
        document.getElementById('bankName').required = true;
        document.getElementById('accountNumber').required = true;
        document.getElementById('accountHolder').required = true;
    }
    
    // 更新选项卡样式
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
}

// 签名画布初始化
function initSignatureCanvas() {
    canvas = document.getElementById('signatureCanvas');
    if (!canvas) return;
    
    ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    canvas.addEventListener('touchstart', handleTouch);
    canvas.addEventListener('touchmove', handleTouch);
    canvas.addEventListener('touchend', stopDrawing);
}

function startDrawing(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

function handleTouch(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent(
        e.type === 'touchstart' ? 'mousedown' : 
        e.type === 'touchmove' ? 'mousemove' : 'mouseup', 
        {
            clientX: touch.clientX,
            clientY: touch.clientY
        }
    );
    canvas.dispatchEvent(mouseEvent);
}

function clearSignature() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 动态生成照片上传区域（移除存折照片）
function updatePhotoGrid() {
    const requiredPhotoGrid = document.getElementById('requiredPhotoGrid');
    const optionalPhotoGrid = document.getElementById('optionalPhotoGrid');
    const config = photoConfigs[currentLanguage];
    const photoTypes = translations[currentLanguage].photoTypes;
    
    requiredPhotoGrid.innerHTML = '';
    optionalPhotoGrid.innerHTML = '';
    
    config.forEach(item => {
        const photoItem = document.createElement('div');
        photoItem.className = `photo-item ${item.required ? 'required' : ''}`;
        photoItem.onclick = () => selectPhoto(item.key);
        
        photoItem.innerHTML = `
            <input type="file" id="photo_${item.key}" accept="image/*" style="display: none;" onchange="handlePhotoUpload('${item.key}', this)">
            <div class="photo-label">
                ${photoTypes[item.key]}
            </div>
            <div class="photo-placeholder" id="placeholder_${item.key}">
                <div style="font-size: 24px; color: #ccc; margin-bottom: 5px;">📷</div>
                <div class="photo-status">${translations[currentLanguage].clickToUpload || '点击上传'}</div>
            </div>
            <img id="preview_${item.key}" class="photo-preview" style="display: none;">
        `;
        
        // 根据是否必需添加到对应的网格
        if (item.required) {
            requiredPhotoGrid.appendChild(photoItem);
        } else {
            optionalPhotoGrid.appendChild(photoItem);
        }
    });
}

// 照片上传相关函数
function selectPhoto(photoType) {
    document.getElementById(`photo_${photoType}`).click();
}

function handlePhotoUpload(photoType, input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            photoDataUrls[photoType] = e.target.result;
            const preview = document.getElementById(`preview_${photoType}`);
            const placeholder = document.getElementById(`placeholder_${photoType}`);
            const photoItem = preview.closest('.photo-item') || preview.closest('.bankbook-photo-item');
            
            preview.src = e.target.result;
            preview.style.display = 'block';
            placeholder.style.display = 'none';
            photoItem.classList.add('has-photo');
        };
        reader.readAsDataURL(file);
    }
}

// 血型选择 - 分为主要血型和Rh因子，支持点击取消
let selectedMainBloodType = '';
let selectedRhFactor = '';

function selectMainBloodType(type) {
    // 如果点击的是已选中的血型，则取消选择
    if (selectedMainBloodType === type) {
        selectedMainBloodType = '';
        document.querySelectorAll('.blood-type-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
    } else {
        selectedMainBloodType = type;
        document.querySelectorAll('.blood-type-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        event.target.classList.add('selected');
    }
    updateBloodTypeDisplay();
}

function selectRhFactor(factor) {
    // 如果点击的是已选中的Rh因子，则取消选择
    if (selectedRhFactor === factor) {
        selectedRhFactor = '';
        document.querySelectorAll('.rh-factor-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
    } else {
        selectedRhFactor = factor;
        document.querySelectorAll('.rh-factor-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        event.target.classList.add('selected');
    }
    updateBloodTypeDisplay();
}

function updateBloodTypeDisplay() {
    const finalBloodType = selectedMainBloodType + (selectedRhFactor || '');
    document.getElementById('bloodType').value = finalBloodType;
    selectedBloodType = finalBloodType;
}

// 表单验证
function validateForm() {
    const alerts = translations[currentLanguage].alerts;
    
    // 验证签名
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const hasSignature = imageData.data.some(channel => channel !== 0);
    if (!hasSignature) {
        alert(alerts.signatureRequired);
        return false;
    }

    // 验证血型
    if (!selectedMainBloodType) {
        alert(alerts.bloodTypeRequired);
        return false;
    }

    // 验证必需照片
    const config = photoConfigs[currentLanguage];
    const photoTypes = translations[currentLanguage].photoTypes;
    const missingPhotos = [];
    
    config.forEach(item => {
        if (item.required && !photoDataUrls[item.key]) {
            missingPhotos.push(photoTypes[item.key]);
        }
    });
    
    if (missingPhotos.length > 0) {
        alert(alerts.missingRequiredPhotos + '\n' + missingPhotos.join(', '));
        return false;
    }

    // 验证工资支付方式
    const paymentMethod = document.getElementById('paymentMethod').value;
    if (!paymentMethod) {
        alert(alerts.paymentMethodRequired);
        return false;
    }

    // 验证组长姓名（如果选择了组长收款）
    if (paymentMethod === 'team_leader') {
        const teamLeaderName = document.getElementById('teamLeaderName').value.trim();
        if (!teamLeaderName) {
            alert(alerts.teamLeaderNameRequired);
            return false;
        }
    }

    // 验证个人收款方式（如果选择了个人收款）
    if (paymentMethod === 'individual') {
        const individualMethod = document.querySelector('input[name="individualMethod"]:checked');
        if (!individualMethod) {
            alert(alerts.individualMethodRequired);
            return false;
        }

        // 如果选择手动输入，验证银行信息
        if (individualMethod.value === 'manual') {
            const bankName = document.getElementById('bankName').value.trim();
            const accountNumber = document.getElementById('accountNumber').value.trim();
            const accountHolder = document.getElementById('accountHolder').value.trim();
            
            if (!bankName || !accountNumber || !accountHolder) {
                alert(alerts.bankInfoRequired);
                return false;
            }
        } else if (individualMethod.value === 'photo') {
            // 如果选择照片上传，验证是否有存折照片
            if (!photoDataUrls['bankbook']) {
                alert(alerts.bankbookPhotoRequired);
                return false;
            }
        }
    }

    return true;
}

// 生成打印版HTML
function generatePrintableHTML() {
    const printWindow = window.open('', '_blank');
    const today = new Date().toLocaleDateString();
    
    // 生成照片HTML
    let photosHTML = '';
    const config = photoConfigs[currentLanguage];
    const photoTypes = translations[currentLanguage].photoTypes;
    
    config.forEach(item => {
        const photoData = photoDataUrls[item.key];
        photosHTML += `
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;width:25%;">
                    ${photoTypes[item.key]}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${photoData ? `<img src="${photoData}" style="max-width:120px;max-height:90px;object-fit:cover;">` : '未上传'}
                </td>
            </tr>
        `;
    });

    // 如果有存折照片，也添加到打印版
    if (photoDataUrls['bankbook']) {
        photosHTML += `
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;width:25%;">
                    ${translations[currentLanguage].bankbookPhotoLabel}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    <img src="${photoDataUrls['bankbook']}" style="max-width:120px;max-height:90px;object-fit:cover;">
                </td>
            </tr>
        `;
    }

    // 生成工资支付方式HTML
    let paymentInfoHTML = '';
    const paymentMethod = formData.paymentMethod;
    if (paymentMethod === 'team_leader') {
        paymentInfoHTML = `
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${translations[currentLanguage].paymentMethodLabel}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${translations[currentLanguage].paymentMethodTeamLeader}
                </td>
            </tr>
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${translations[currentLanguage].teamLeaderNameLabel}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${formData.teamLeaderName || ''}
                </td>
            </tr>
        `;
    } else if (paymentMethod === 'individual') {
        let methodText = '';
        let additionalInfo = '';
        
        if (formData.individualMethod === 'photo') {
            methodText = translations[currentLanguage].individualMethodPhotoLabel;
        } else if (formData.individualMethod === 'manual') {
            methodText = translations[currentLanguage].individualMethodManualLabel;
            additionalInfo = `
                <tr>
                    <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                        ${translations[currentLanguage].bankNameLabel}:
                    </td>
                    <td style="padding:8px;border:1px solid #ddd;">
                        ${formData.bankName || ''}
                    </td>
                </tr>
                <tr>
                    <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                        ${translations[currentLanguage].accountNumberLabel}:
                    </td>
                    <td style="padding:8px;border:1px solid #ddd;">
                        ${formData.accountNumber || ''}
                    </td>
                </tr>
                <tr>
                    <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                        ${translations[currentLanguage].accountHolderLabel}:
                    </td>
                    <td style="padding:8px;border:1px solid #ddd;">
                        ${formData.accountHolder || ''}
                    </td>
                </tr>
            `;
        }
        
        paymentInfoHTML = `
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${translations[currentLanguage].paymentMethodLabel}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${translations[currentLanguage].paymentMethodIndividual} (${methodText})
                </td>
            </tr>
            ${additionalInfo}
        `;
    }

    // 生成基本表单数据HTML
    let formDataHTML = `
        <tr>
            <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;width:25%;">
                ${translations[currentLanguage].nameLabel}:
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
                ${formData.name || ''}
            </td>
        </tr>
    `;

    // 韩文名（非韩文语言显示）
    if (currentLanguage !== 'ko') {
        formDataHTML += `
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${translations[currentLanguage].koreanNameLabel}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${formData.koreanName || ''}
                </td>
            </tr>
        `;
    }

    formDataHTML += `
        <tr>
            <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                ${translations[currentLanguage].birthdayLabel}:
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
                ${formData.birthday || ''}
            </td>
        </tr>
        <tr>
            <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                ${translations[currentLanguage].phoneLabel}:
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
                ${formData.phone || ''}
            </td>
        </tr>
    `;

    // 证件信息
    if (currentLanguage === 'ko') {
        formDataHTML += `
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${translations[currentLanguage].residentLabel}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${formData.residentNumber || ''}
                </td>
            </tr>
        `;
    } else {
        formDataHTML += `
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${translations[currentLanguage].passportLabel}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${formData.passport || ''}
                </td>
            </tr>
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${translations[currentLanguage].visaTypeLabel}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${formData.visaType || ''}
                </td>
            </tr>
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${translations[currentLanguage].foreignerNumberLabel}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${formData.foreignerNumber || ''}
                </td>
            </tr>
        `;
    }

    formDataHTML += `
        <tr>
            <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                ${translations[currentLanguage].addressLabel}:
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
                ${formData.address || ''}
            </td>
        </tr>
        <tr>
            <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                ${translations[currentLanguage].bloodTypeLabel}:
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
                ${formData.bloodType || ''}
            </td>
        </tr>
        ${paymentInfoHTML}
    `;

    // 完整的HTML文档
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>新人资料表</title>
            <style>
                @page { size: A4; margin: 20mm; }
                body { font-family: Arial, sans-serif; font-size: 12px; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 15px; }
                .title { font-size: 20px; font-weight: bold; margin-bottom: 5px; }
                .subtitle { font-size: 14px; color: #666; }
                .info-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                .info-table td { padding: 8px; border: 1px solid #ddd; vertical-align: top; }
                .signature-section { margin-top: 30px; text-align: center; }
                .signature-box { width: 200px; height: 80px; border: 1px solid #333; margin: 10px auto; display: flex; align-items: center; justify-content: center; overflow: hidden; }
                .signature-box img { max-width: 100%; max-height: 100%; }
                .footer { margin-top: 40px; text-align: right; border-top: 1px solid #eee; padding-top: 15px; }
                .print-btn { position: fixed; top: 20px; right: 20px; background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 14px; z-index: 1000; }
                .print-btn:hover { background: #0056b3; }
                @media print { body { margin: 0; } .no-print { display: none; } }
            </style>
        </head>
        <body>
            <button class="print-btn no-print" onclick="window.print()">🖨️ 打印</button>
            
            <div class="header">
                <div class="title">${translations[currentLanguage].documentTitle}</div>
                <div class="subtitle">${translations[currentLanguage].documentSubtitle || 'New Employee Information Form'}</div>
            </div>
            
            <table class="info-table">
                ${formDataHTML}
                ${photosHTML}
            </table>
            
            <div class="signature-section">
                <div style="font-weight: bold; margin-bottom: 10px;">${translations[currentLanguage].signatureLabel}</div>
                <div class="signature-box">
                    ${signatureDataUrl ? `<img src="${signatureDataUrl}" alt="签名">` : '<div style="color: #999;">签名位置</div>'}
                </div>
            </div>
            
            <div class="footer">
                <div>填写日期: ${today}</div>
            </div>
        </body>
        </html>
    `;
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
}

// 下载/打印功能 - 强制韩文标签
function downloadPDF() {
    // 直接在这里生成韩文版本
    const printWindow = window.open('', '_blank');
    const today = new Date().toLocaleDateString();
    
    // 硬编码韩文标签 - 绝对不使用任何翻译
    const koreanLabels = {
        이름: '이름',
        한국어이름: '한국어 이름', 
        생년월일: '생년월일',
        전화번호: '전화번호',
        여권번호: '여권번호',
        주민등록번호: '주민등록번호',
        비자종류: '비자종류',
        외국인등록번호: '외국인등록번호',
        주소: '주소',
        직종: '직종',
        경력: '경력',
        혈액형: '혈액형',
        급여지급방식: '급여 지급 방식',
        조장수령: '조장 수령',
        개인수령: '개인 수령',
        조장이름: '조장 이름',
        통장사진업로드: '통장 사진 업로드',
        직접입력: '직접 입력',
        은행명: '은행명',
        계좌번호: '계좌번호',
        예금주: '예금주',
        전자서명: '전자서명',
        작성날짜: '작성 날짜',
        인쇄: '인쇄',
        업로드안됨: '업로드되지 않음',
        여권사진: '여권 사진',
        비자사진: '비자 사진',
        기초건설교육증: '기초건설교육증',
        주민등록증: '주민등록증',
        통장사진: '통장 사진'
    };
    
    // 생성 기본 정보 테이블
    let tableHTML = `
        <tr>
            <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;width:25%;">
                ${koreanLabels.이름}:
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
                ${formData.name || ''}
            </td>
        </tr>
    `;

    // 한국어 이름 (한국어가 아닌 경우에만)
    if (currentLanguage !== 'ko' && formData.koreanName) {
        tableHTML += `
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${koreanLabels.한국어이름}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${formData.koreanName}
                </td>
            </tr>
        `;
    }

    tableHTML += `
        <tr>
            <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                ${koreanLabels.생년월일}:
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
                ${formData.birthday || ''}
            </td>
        </tr>
        <tr>
            <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                ${koreanLabels.전화번호}:
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
                ${formData.phone || ''}
            </td>
        </tr>
    `;

    // 신분증 정보
    if (currentLanguage === 'ko') {
        tableHTML += `
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${koreanLabels.주민등록번호}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${formData.residentNumber || ''}
                </td>
            </tr>
        `;
    } else {
        tableHTML += `
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${koreanLabels.여권번호}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${formData.passport || ''}
                </td>
            </tr>
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${koreanLabels.비자종류}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${formData.visaType || ''}
                </td>
            </tr>
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${koreanLabels.외국인등록번호}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${formData.foreignerNumber || ''}
                </td>
            </tr>
        `;
    }

    tableHTML += `
        <tr>
            <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                ${koreanLabels.주소}:
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
                ${formData.address || ''}
            </td>
        </tr>
        <tr>
            <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                ${koreanLabels.직종}:
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
                ${formData.jobType || ''}
            </td>
        </tr>
        <tr>
            <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                ${koreanLabels.경력}:
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
                ${formData.workExperience ? formData.workExperience + '년' : ''}
            </td>
        </tr>
        <tr>
            <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                ${koreanLabels.혈액형}:
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
                ${formData.bloodType || ''}
            </td>
        </tr>
    `;

    // 급여 지급 방식
    if (formData.paymentMethod === 'team_leader') {
        tableHTML += `
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${koreanLabels.급여지급방식}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${koreanLabels.조장수령}
                </td>
            </tr>
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${koreanLabels.조장이름}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${formData.teamLeaderName || ''}
                </td>
            </tr>
        `;
    } else if (formData.paymentMethod === 'individual') {
        let methodText = formData.individualMethod === 'photo' ? koreanLabels.통장사진업로드 : koreanLabels.직접입력;
        tableHTML += `
            <tr>
                <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                    ${koreanLabels.급여지급방식}:
                </td>
                <td style="padding:8px;border:1px solid #ddd;">
                    ${koreanLabels.개인수령} (${methodText})
                </td>
            </tr>
        `;
        
        if (formData.individualMethod === 'manual') {
            tableHTML += `
                <tr>
                    <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                        ${koreanLabels.은행명}:
                    </td>
                    <td style="padding:8px;border:1px solid #ddd;">
                        ${formData.bankName || ''}
                    </td>
                </tr>
                <tr>
                    <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                        ${koreanLabels.계좌번호}:
                    </td>
                    <td style="padding:8px;border:1px solid #ddd;">
                        ${formData.accountNumber || ''}
                    </td>
                </tr>
                <tr>
                    <td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">
                        ${koreanLabels.예금주}:
                    </td>
                    <td style="padding:8px;border:1px solid #ddd;">
                        ${formData.accountHolder || ''}
                    </td>
                </tr>
            `;
        }
    }

    // 사진들
    const config = photoConfigs[currentLanguage];
    config.forEach(item => {
        const photoData = photoDataUrls[item.key];
        let photoLabel = '';
        if (item.key === 'passport') photoLabel = koreanLabels.여권사진;
        else if (item.key === 'visa') photoLabel = koreanLabels.비자사진;
        else if (item.key === 'education') photoLabel = koreanLabels.기초건설교육증;
        else if (item.key === 'resident') photoLabel = koreanLabels.주민등록증;
        else photoLabel = koreanLabels.여권사진;
        
        tableHTML += `
            <tr>
                <td style="padding:4px 6px;border:0.5px solid #ccc;background:#f8f8f8;font-weight:bold;font-size:9px;">
                    ${photoLabel}:
                </td>
                <td style="padding:4px 6px;border:0.5px solid #ccc;font-size:9px;" class="photo-cell">
                    ${photoData ? `<img src="${photoData}" style="max-width:60px;max-height:50px;object-fit:cover;">` : koreanLabels.업로드안됨}
                </td>
            </tr>
        `;
    });

    // 통장 사진
    if (photoDataUrls['bankbook']) {
        tableHTML += `
            <tr>
                <td style="padding:4px 6px;border:0.5px solid #ccc;background:#f8f8f8;font-weight:bold;font-size:9px;">
                    ${koreanLabels.통장사진}:
                </td>
                <td style="padding:4px 6px;border:0.5px solid #ccc;font-size:9px;" class="photo-cell">
                    <img src="${photoDataUrls['bankbook']}" style="max-width:60px;max-height:50px;object-fit:cover;">
                </td>
            </tr>
        `;
    }

    // HTML 문서 - A4 최적화
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>신입사원 정보 등록표</title>
            <style>
                @page { 
                    size: A4; 
                    margin: 15mm 10mm 15mm 10mm; 
                }
                body { 
                    font-family: Arial, sans-serif; 
                    font-size: 10px; 
                    line-height: 1.3; 
                    color: #333; 
                    margin: 0; 
                    padding: 0; 
                    max-width: 100%;
                    overflow: hidden;
                }
                .header { 
                    text-align: center; 
                    margin-bottom: 15px; 
                    border-bottom: 1px solid #333; 
                    padding-bottom: 8px; 
                }
                .title { 
                    font-size: 16px; 
                    font-weight: bold; 
                    margin-bottom: 3px; 
                }
                .subtitle { 
                    font-size: 11px; 
                    color: #666; 
                }
                .info-table { 
                    width: 100%; 
                    border-collapse: collapse; 
                    margin-bottom: 10px;
                    table-layout: fixed;
                }
                .info-table td { 
                    padding: 4px 6px; 
                    border: 0.5px solid #ccc; 
                    vertical-align: top;
                    word-wrap: break-word;
                    overflow: hidden;
                }
                .info-table td:first-child {
                    width: 25%;
                    background: #f8f8f8;
                    font-weight: bold;
                    font-size: 9px;
                }
                .info-table td:last-child {
                    font-size: 9px;
                }
                .signature-section { 
                    margin-top: 15px; 
                    text-align: center; 
                }
                .signature-box { 
                    width: 120px; 
                    height: 50px; 
                    border: 1px solid #333; 
                    margin: 5px auto; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    overflow: hidden; 
                }
                .signature-box img { 
                    max-width: 100%; 
                    max-height: 100%; 
                }
                .signature-title {
                    font-weight: bold; 
                    margin-bottom: 5px;
                    font-size: 10px;
                }
                .footer { 
                    margin-top: 10px; 
                    text-align: right; 
                    border-top: 0.5px solid #eee; 
                    padding-top: 5px;
                    font-size: 8px;
                }
                .print-btn { 
                    position: fixed; 
                    top: 10px; 
                    right: 10px; 
                    background: #007bff; 
                    color: white; 
                    border: none; 
                    padding: 6px 12px; 
                    border-radius: 3px; 
                    cursor: pointer; 
                    font-size: 11px; 
                    z-index: 1000; 
                }
                .print-btn:hover { 
                    background: #0056b3; 
                }
                .photo-cell img {
                    max-width: 60px;
                    max-height: 50px;
                    object-fit: cover;
                }
                @media print { 
                    body { 
                        margin: 0;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    } 
                    .no-print { 
                        display: none; 
                    }
                    .info-table {
                        page-break-inside: avoid;
                    }
                }
            </style>
        </head>
        <body>
            <button class="print-btn no-print" onclick="window.print()">🖨️ ${koreanLabels.인쇄}</button>
            
            <div class="header">
                <div class="title">신입사원 정보 등록표</div>
                <div class="subtitle">New Employee Information Form</div>
            </div>
            
            <table class="info-table">
                ${tableHTML}
            </table>
            
            <div class="signature-section">
                <div class="signature-title">${koreanLabels.전자서명}</div>
                <div class="signature-box">
                    ${signatureDataUrl ? `<img src="${signatureDataUrl}" alt="서명">` : '<div style="color: #999; font-size: 8px;">서명 위치</div>'}
                </div>
            </div>
            
            <div class="footer">
                <div>${koreanLabels.작성날짜}: ${today}</div>
            </div>
        </body>
        </html>
    `;
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
}

// 表单提交处理
document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 验证表单
    if (!validateForm()) {
        return;
    }

    // 收集表单数据
    formData = {
        name: document.getElementById('name').value,
        koreanName: document.getElementById('koreanName').value,
        birthday: document.getElementById('birthday').value,
        phone: document.getElementById('phone').value,
        passport: document.getElementById('passport').value,
        residentNumber: document.getElementById('residentNumber').value,
        visaType: document.getElementById('visaType').value,
        foreignerNumber: document.getElementById('foreignerNumber').value,
        address: document.getElementById('address').value,
        jobType: document.getElementById('jobType').value,
        workExperience: document.getElementById('workExperience').value,
        bloodType: selectedBloodType || selectedMainBloodType,
        rhFactor: selectedRhFactor,
        paymentMethod: document.getElementById('paymentMethod').value,
        teamLeaderName: document.getElementById('teamLeaderName').value,
        individualMethod: document.querySelector('input[name="individualMethod"]:checked')?.value,
        bankName: document.getElementById('bankName').value,
        accountNumber: document.getElementById('accountNumber').value,
        accountHolder: document.getElementById('accountHolder').value,
        language: currentLanguage
    };
    
    // 获取签名数据
    signatureDataUrl = canvas.toDataURL();
    
    // 显示成功消息
    document.getElementById('employeeForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
});

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 默认显示语言选择器并开始动画
    document.getElementById('languageSelector').classList.remove('hidden');
    document.getElementById('privacyConsent').classList.add('hidden');
    document.getElementById('formContainer').classList.add('hidden');
    
    // 开始语言标题动画
    startLanguageTitleAnimation();
});