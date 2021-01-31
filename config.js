// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给.....",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "天真無邪可愛奇峰九八",  // 同上...
        "噴水雞肉飯月牙天沖",
        "擎天柱大盜韓不住",
        "雜哇魯豆熾炎舞月",
        "五十嵐五世廖唐岑",
        "聽說今天是妳的生日",
        "無聊就做了這個",
        "這是我花了很久的時間做的",
        "大約.....",
        "10分鐘",
        "因為很少見面",
        "所以還沒想到什麼話要說哈哈哈",
        "不過沒關系下次有機會",
        "可以再去打撞球吧",
        "總之祝妳生日快樂",
        "身體健康",
        "要天天開心",
        "就醬",
        "最後送一張我的帥氣正面照吧",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "天真無邪可愛奇峰九八": "./imgs/1.jpg",
        "噴水雞肉飯月牙天沖": "./imgs/2.jpg",
        "擎天柱大盜韓不住": "./imgs/3.jpg",
        "雜哇魯豆熾炎舞月": "./imgs/4.jpg",
        "五十嵐五世廖唐岑": "./imgs/xiaokeai.png",
        "聽說今天是妳的生日": "./imgs/5.jpg",
        "這是我花了很久的時間做的": "./imgs/6.jpg",
        "總之祝妳生日快樂": "./imgs/7.jpg",
        "最後送一張我的帥氣正面照吧": "./imgs/8.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "表演開始",
        play: "音樂",
        bannar_coming: "裝飾",
        balloons_flying: "好像少點東西",
        cake_fadein: "蛋糕",
        light_candle: "蠟燭",
        wish_message: "生日快樂",
        story: "給",
    }
};
