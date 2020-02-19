import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { LevelSetupService } from "../_services/level-setup.service";

@Component({
  selector: 'ns-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
  moduleId: module.id
})

export class PracticeComponent implements OnInit {

public shuffledChars = [];
public shuffledPinyin = [];

  public characterList = [
    // Check if each section is EXACTLY 25 or make accommodations
    // Add Lookalikes
    // Add Radicals
    [
      [ // HSK 1
        // 1 - 25
        ["爱","ài","love"],
        ["八","bā","eight"],
        ["爸爸","bàba", "Dad"],
        ["杯子","bēizi", "cup; glass"],                             // "X子-Zi" LOOKALIKE
        ["北京","Běijīng","Beijing"],
        ["本","běn","measure word for books"],                     // LOOKALIKE
        ["不","bù","no;not"],
        ["不客气","bú kèqi","you're welcome; don't be polite" ],
        ["菜","cài", "dish (type of food); vegetables"],           // LOOKALIKE
        ["茶","chá","tea"],                                        // LOOKALIKE
        ["吃","chī", "eat"],
        ["出租车", "chūzūchē", "taxi; cab"],
        ["打电话","dǎ diànhuà","make a phone call"],
        ["大","dà","big; large"],
        ["的","de","indicates posession (like adding 's)"],
        ["点","diǎn", "a dot; a little; o'clock"],
        ["电脑","diànnǎo", "computer"],                           // LOOKALIKE
        ["电视","diànshì", "television; TV" ],                    // LOOKALIKE
        ["电影", "diànyǐng", "movie; film"],                      // LOOKALIKE
        ["东西", "dōngxi", "things; stuff"],
        ["都", "dōu", "all; both"],
        ["读","dú", "to read; to study"],                        // LOOKALIKE
        ["对不起","duìbuqǐ","sorry"],
        ["多","duō","many"],
        ["多少","duōshao","how much"],
        ], [
        // 26 - 50
        ["儿子","érzi","son"],
        ["二","èr","two"],
        ["饭店","fàndiàn","hotel"],                              // LOOKALIKE
        ["飞机","fēijī","airplane"],
        ["分钟","fēnzhōng","minute"],
        ["高兴","gāoxìng","happy; glad"],
        ["个","ge","general measure word"],
        ["工作","gōngzuò","work; a job"],
        ["狗","gǒu","dog"],                                     // LOOKALIKE
        ["汉语","Hànyǔ","Chinese language"],
        ["好","hǎo","good"],
        ["号","hào","number; day of a month"],
        ["喝","hē","to drink"],
        ["和","hé","and; with"],
        ["很","hěn","very; quite"],
        ["后面","hòumian","back; behind"],
        ["回","huí","to return; to reply; to go back"],
        ["会","huì","know how to"],
        ["几","jǐ","how many; several; a few"],
        ["家","jiā","family; home"],
        ["叫","jiào","to be called"],                          // LOOKALIKE
        ["今天","jīntiān","today"],
        ["九","jiǔ","nine"],
        ["开","kāi","open"],
        ["看","kàn","see; look at; watch;"],
        ], [
        // 51 - 75
        ["看见","kànjiàn","see; catch sight of"],
        ["块","kuài","lump; piece; sum of money"],
        ["来","lái",""],                                       // LOOKALIKE
        ["老师","lǎoshī",""],
        ["了","le",""],
        ["冷","lěng",""],
        ["里","lǐ",""],
        ["六","liù",""],
        ["妈妈","māma",""],
        ["吗","ma",""],
        ["买","mǎi",""],                                      // LOOKALIKE
        ["猫","māo",""],                                      // LOOKALIKE
        ["没关系","méi guānxi",""],
        ["没有","méiyǒu",""],
        ["米饭","mǐfàn",""],
        ["名字","míngtiān",""],
        ["明天","míngzi",""],
        ["哪","nǎa",""],
        ["哪儿","nǎr",""],
        ["那","nà",""],
        ["呢","ne",""],
        ["能","néng",""],
        ["你","nǐ",""],
        ["年","nián",""],                                      // LOOKALIKE
        ["女儿","nǚ'ér",""],
        ], [
        // 76 - 100
        ["朋友","péngyou",""],
        ["漂亮","piàoliang",""],
        ["苹果","píngguǒ",""],
        ["七","qī",""],
        ["前面","qiánmiàn",""],
        ["钱","qián",""],
        ["请","qǐng",""],
        ["去","qù",""],
        ["热","rè",""],
        ["人","rén",""],
        ["认识","rènshi",""],
        ["三","sān",""],
        ["商店","shāngdiàn",""],
        ["上","shàng",""],
        ["上午","shàngwǔ",""],
        ["少","shǎo",""],
        ["谁","shéi",""],
        ["什么","shénme",""],
        ["十","shí",""],
        ["时候","shíhou",""],
        ["是","shì","be; is; are; am"],
        ["书","shū",""],                   // LOOKALIKE
        ["水果","","shuǐguǒ"],
        ["水","shuǐ",""],
        ["睡觉","shuì jiào",""],
        ], [
        // 101 - 125
        ["说","shuō",""],
        ["四","sì",""],
        ["岁","suì",""],
        ["他","tā",""],
        ["她","tā",""],
        ["太","tài",""],
        ["天气","tiānqì",""],
        ["听","tīng",""],                    // LOOKALIKE
        ["同学","tóngxué",""],
        ["喂","wèi",""],
        ["我","wǒ",""],
        ["我们","wǒmen",""],
        ["五","wǔ",""],
        ["喜欢","xǐhuan",""],
        ["下","xià",""],
        ["下午","xiàwǔ",""],
        ["下雨","xiàyǔ",""],
        ["先生","xiānsheng",""],
        ["现在","xiànzài",""],
        ["想","xiǎng",""],
        ["小","xiǎo",""],
        ["小姐","xiǎojie",""],
        ["些","xiē",""],
        ["写","xiě",""],                     // LOOKALIKE
        ["谢谢","xièxie",""],
        ], [
        // 126 - 150
        ["星期","xīngqī",""],
        ["学生","xuésheng",""],                 // LOOKALIKE
        ["学习","xuéxí",""],                    // LOOKALIKE
        ["学校","xuéxiào",""],                  // LOOKALIKE
        ["一","yī",""],
        ["一点儿","yìdiǎnr","a bit; a few"],
        ["衣服","yīfu",""],
        ["医生","yīshēng",""],
        ["医院","yīyuàn",""],
        ["椅子","yǐzi",""],                     // "X子-Zi" LOOKALIKE
        ["有","yǒu",""],
        ["月","yuè",""],
        ["再见","zàijiàn","goodbye"],
        ["在","zài",""],
        ["怎么","zěnme",""],
        ["怎么样","zěnmeyàng",""],
        ["这","zhè",""],
        ["中国","Zhōngguó",""],
        ["中午","zhōngwǔ",""],
        ["住","zhù",""],
        ["桌子","zhuōzi",""],                   // "X子-Zi" LOOKALIKE
        ["字","zì",""],
        ["昨天","zuótiān",""],
        ["坐","zuò","sit"],
        ["做","zuò","do; make"],
        ]
      ],
      [ // HSK 2
        [ // 151 - 175
  ["吧","ba",""],
  ["白","bái",""],
  ["百","bǎi",""],
  ["帮助","bāngzhù",""],
  ["报纸","bàozhǐ",""],
  ["比","bǐ",""],
  ["别","bié",""],
  ["宾馆","bīnguǎn",""],
  ["长","zhǎng",""],
  ["唱歌","chànggē",""],
  ["出","chū",""],
  ["穿","chuān",""],
  ["次","cì",""],
  ["从","cóng",""],
  ["错","cuò",""],
  ["打篮球","dǎ lánqiú",""],
  ["大家","dàjiā",""],
  ["到","dào",""],
  ["得","de",""],
  ["等","děng",""],
  ["弟弟","dìdi",""],
  ["第一","dìyī",""],
  ["懂","dǒng",""],
  ["对","duì","correct"]
],
[
      // 176 - 200
  ["房间","fángjiān",""],
  ["非常","fēicháng",""],
  ["服务员","fúwùyuán",""],
  ["高","gāo",""],
  ["告诉","gàosu",""],
  ["哥哥","gēge",""],
  ["给","gěi",""],
  ["公共汽车","gōnggòng qìchē","Bus"],
  ["公司","gōngsī",""],
  ["贵","guì",""],
  ["过","guò",""],
  ["还","hái",""],
  ["孩子","háizi",""],                  // "X子-Zi" LOOKALIKE
  ["好吃","hǎochī",""],
  ["黑","hēi",""],
  ["红","hóng",""],
  ["火车站","huǒchēzhàn",""],
  ["机场","jīchǎng",""],
  ["鸡蛋","jīdàn",""],
  ["件","jiàn",""],
  ["教室","jiàoshì",""],
  ["姐姐","jiějie",""],
  ["介绍","jièshào",""],
  ["进","jìn","enter; come in;"],
  ["近","jìn","near; close"]
],
[
  // 201 - 225
  ["就","jiù",""],
  ["觉得","juéde",""],
  ["咖啡","kāfēi",""],
  ["开始","kāishǐ",""],
  ["考试","kǎoshì",""],
  ["可能","kěnéng",""],
  ["可以","kěyǐ",""],
  ["课","kè",""],
  ["快","kuài",""],
  ["快乐","kuàilè",""],
  ["累","lèi",""],
  ["离","lí",""],
  ["两","liǎng",""],
  ["零","líng",""],
  ["路","lù",""],
  ["旅游","lǚyóu",""],
  ["卖","mài",""],
  ["慢","màn",""],
  ["忙","máng",""],
  ["每","měi",""],
  ["妹妹","mèimei",""],
  ["门","mén",""],
  ["面条","miàntiáo",""],
  ["男","nán",""],
  ["您","nín",""]
],[
  // 226 - 250
  ["牛奶","niúnǎi",""],
  ["女","nǚ",""],
  ["旁边","pángbiān",""],
  ["跑步","pǎobù",""],
  ["便宜","piányi",""],
  ["票","piào",""],
  ["妻子","qīzi",""],                   // "X子-Zi" LOOKALIKE
  ["起床","qǐ chuáng",""],
  ["千","qiān",""],
  ["铅笔","qiānbǐ",""],
  ["晴","qíng",""],
  ["去年","qùnián",""],
  ["让","ràng",""],
  ["日","rì",""],
  ["上班","shàngbān",""],
  ["身体","shēntǐ",""],
  ["生病","shēngbìng",""],
  ["生日","shēngrì",""],
  ["时间","shíjiān",""],
  ["事情","shìqing",""],
  ["手表","shǒubiǎo",""],
  ["手机","shǒujī",""],
  ["说话","shuōhuà",""],
  ["送","sòng",""],
  ["虽然","suīrán",""]
],
[
  // 251 - 275
  ["但是","dànshì",""],
  ["它","tā",""],
  ["踢足球","tīzúqiú",""],
  ["题","tí",""],
  ["跳舞","tiàowǔ",""],
  ["外","wài",""],
  ["完","wán",""],               // LOOKALIKE
  ["玩","wán",""],               // LOOKALIKE
  ["晚上","wǎnshang",""],
  ["往","wǎng","towards"],
  ["为什么","wèishénme",""],
  ["问","wèn",""],
  ["问题","wèntí",""],
  ["西瓜","xīguā",""],
  ["希望","xīwàng",""],
  ["洗","xǐ",""],
  ["小时","xiǎoshí",""],
  ["笑","xiào",""],
  ["新","xīn",""],
  ["姓","xìng",""],
  ["休息","xiūxi",""],
  ["雪","xuě",""],
  ["颜色","yánsè",""],
  ["眼睛","yǎnjing",""],
  ["羊肉","yángròu",""]
],
[
  // 276 - 300
  ["药","yào",""],
  ["要","yào",""],
  ["也","yě",""],
  ["一起","yìqǐ",""],
  ["一下","yíxià",""],
  ["已经","yǐjing",""],
  ["意思","yìsi",""],
  ["因为","yīnwèi",""],
  ["所以","suǒyǐ",""],
  ["阴","yīn",""],
  ["游泳","yóuyǒng",""],
  ["右边","yòubian",""],
  ["鱼","yú",""],
  ["远","yuǎn",""],
  ["运动","yùndòng",""],
  ["再","zài",""],
  ["早上","zǎoshang",""],
  ["丈夫","zhàngfu",""],
  ["找","zhǎo",""],
  ["着","zhe",""],
  ["真","zhēn",""],
  ["正在","zhèngzài",""],
  ["知道","zhīdao",""],
  ["准备","zhǔnbèi",""],
  ["走","zǒu",""],
  ["最","zuì",""],
  ["左边","zuǒbian",""]
        ]
      ],
      [ // HSK 3
        [ // 301 - 325
["阿姨","āyí",""],
["啊","a",""],
["矮","ǎi",""],
["爱好","àihào",""],
["安静","ānjìng",""],
["把","bǎ",""],
["班","bān",""],
["搬","bān",""],
['办法',"bànfǎ",""],
["办公室","bàngōngshì",""],
["半","bàn",""],
["帮忙","bāngmáng",""],
["包","bāo",""],
["饱","bǎo",""],
["北方","běifāng",""],
["被","bèi",""],
["鼻子","bízi",""],                   // "X子-Zi" LOOKALIKE
["比较","bǐjiào",""],
["比赛","bǐsài",""],
["笔记本","bǐjìběn",""],
["必须","bìxū",""],
["变化","biànhuà",""],
["别人","biéren",""],
["冰箱","bīngxiāng",""],
["不但","búdàn",""]
],
[ // 326 - 350
["而且","érqiě",""],
["菜单","càidān",""],
["参加","cānjiā",""],
["草","cǎo",""],
["层","céng",""],
["差","chà",""],
["超市","chāoshì",""],
["衬衫","chènshān",""],
["成绩","chéngjì",""],
["城市","chéngshì",""],
["迟到","chídào",""],
["除了","chúle",""],
["船","chuán",""],
["春","chūn",""],
["词典","cídiǎn",""],
["聪明","cōngming",""],
["打扫","dǎsǎo",""],
["打算","dǎsuàn",""],
["带","dài",""],
["担心","dānxīn",""],
["蛋糕","dàngāo",""],
["当然","dāngrán",""],
["地","dì",""],
["灯","dēng",""],
["地方","dìfang",""]
],
[ // 351 - 375
["地铁","dìtiě",""],
["地图","dìtú",""],
["电梯","diàntī",""],
["电子邮件","diànzǐ yóujiàn",""],
["东","dōng",""],
["冬","dōng",""],
["动物","dòngwù",""],
["短","duǎn",""],
["段","duàn",""],
["锻炼","duànliàn",""],
["多么","duōme",""],
["饿","è",""],
["耳朵","ěrduo",""],
["发","fā",""],
["发烧","fāshāo",""],
["发现","fāxiàn",""],
["方便","fāngbiàn",""],
["放","fàng",""],
["放心","fàngxīn",""],
["分","fēn",""],
["附近","fùjìn",""],
["复习","fùxí",""],
["干净","gānjìng",""],
["感冒","gǎnmào",""],
["感兴趣","gǎn xìngqù",""]
],
[ // 376 - 400
["刚才","gāngcái",""],
["个子","gèzi",""],
["根据","gēnjù",""],
["跟","gēn",""],
["更","gèng",""],
["公斤","gōngjīn",""],
["公园","gōngyuán",""],
["故事","gùshi",""],
["刮风","guāfēng",""],
["关","guān",""],
["关系","","guānxi"],         // LOOKALIKE
["关心","","guānxīn"],        // LOOKALIKE
["关于","","guānyú"],         // LOOKALIKE
["国家","guójiā",""],
["过","guò",""],
["过去","guòqù",""],
["还是","háishi",""],
["害怕","hàipà",""],
["黑板","hēibǎn",""],
["后来","hòulái",""],
["护照","hùzhào",""],
["花","huā",""],
["画","huà",""],
["坏","huài",""]
],
[ // 401 - 425
["欢迎","huānyíng",""],
["还","hái",""],
["环境","huánjìng",""],
["换","huàn",""],
["黄河","huánghé",""],
["回答","huídá",""],
["会议","huìyì",""],
["或者","huòzhě",""],
["几乎","jīhū",""],
["机会","jīhuì",""],
["极","jí",""],
["记得","jìde",""],
["季节","jìjié",""],
["检查","jiǎnchá",""],
["简单","jiǎndān",""],
["见面","jiànmiàn",""],
["健康","jiànkāng",""],
["讲","jiǎng",""],
["教","jiāo",""],
["角","jiǎo",""],
["脚","jiǎo",""],
["接","jiē",""],
["街道","jiēdào",""],
["节目","jiémù",""],
["节日","jiérì",""]
],[ // 426 - 450
["结婚","jiéhūn",""],
["结束","jiéshù",""],
["解决","jiějué",""],
["借","jiè",""],
["经常","jīngcháng",""],
["经过","jīngguò",""],
["经理","jīnglǐ",""],
["久","jiǔ",""],
["旧","jiù",""],
["句子","jùzi",""],
["决定","juédìng",""],
["可爱","kě'ài",""],
["渴","kě",""],
["刻","kè",""],
["客人","kèrén",""],
["空调","kōngtiáo",""],
["口","kǒu",""],
["哭","kū",""],
["裤子","kùzi",""],               // "X子-Zi" LOOKALIKE
["筷子","kuàizi",""],               // "X子-Zi" LOOKALIKE
["蓝","lán",""],
["老","lǎo",""],
["离开","líkāi",""],
["礼物","lǐwù",""],
["历史","lìshǐ",""]
],[ // 451 - 475
["脸","liǎn",""],
["练习","liànxí",""],
["辆","liàng",""],
["聊天","liáotiān",""],
["了解","liǎojiě",""],
["邻居","línjū",""],
["留学","liúxué",""],
["楼","lóu",""],
["绿","lǜ",""],
["马","mǎ",""],
["马上","mǎshàng",""],
["满意","mǎnyì",""],
["帽子","màozi",""],             // "X子-Zi" LOOKALIKE
["米","mǐ",""],
["面包","miànbāo",""],
["明白","míngbai",""],
["拿","ná",""],
["奶奶","nǎinai",""],
["南","nán",""],
["难","nán",""],
["难过","nánguò",""],
["年级","niánjí",""],
["年轻","niánqīng",""],
["鸟","niǎo",""],
["努力","nǔlì",""]
], [ // 476 - 500
["爬山","páshān",""],
["盘子","pánzi",""],           // "X子-Zi" LOOKALIKE
["胖","pàng",""],
["皮鞋","píxié",""],
["啤酒","píjiǔ",""],
["瓶子","píngzi",""],            // "X子-Zi" LOOKALIKE
["其实","qíshí",""],
["其他","qítā",""],
["奇怪","qíguài",""],
["骑","qí",""],
["起飞","qǐfēi",""],
["起来","qǐlai",""],
["清楚","qīngchu",""],
["请假","qǐngjià",""],
["秋","qiū",""],
["裙子","qúnzi",""],           // "X子-Zi" LOOKALIKE
["然后","ránhòu",""],
["热情","rèqíng",""],
["认为","rènwéi",""],
["认真","rènzhēn",""],
["容易","róngyì",""],
["如果","rúguǒ",""],
["伞","sǎn",""],
["上网","shàngwǎng",""],
["生气","shēngqì",""]
], [ // 501 - 525
["声音","shēngyīn",""],
["世界","shìjiè",""],
["试","shì",""],
["瘦","shòu",""],
["叔叔","shūshu",""],
["舒服","shūfu",""],
["树","shù",""],
["数学","shùxué",""],
["刷牙","shuāyá",""],
["双","shuāng",""],
["水平","shuǐpíng",""],
["司机","sījī",""],
["太阳","tàiyáng",""],
["特别","tèbié",""],
["疼","téng",""],
["提高","tígāo",""],
["体育","tǐyù",""],
["甜","tián",""],
["条","tiáo",""],
["同事","tóngshì",""],
["同意","tóngyì",""],
["头发","tóufa",""],
["突然","tūrán",""],
["图书馆","túshūguǎn",""],
["腿","tuǐ",""]
], [  // 526 - 550
["完成","wánchéng",""],
["碗","wǎn",""],
["万","wàn",""],
["忘记","wàngjì",""],
["为","wèi",""],
["为了","wèile",""],
["位","wèi",""],
["文化","wénhuà",""],
["西","xī",""],
["习惯","xíguàn",""],
["洗手间","xǐshǒujiān",""],
["洗澡","xǐzǎo",""],
["夏","xià",""],
["先","xiān",""],
["相信","xiāngxìn",""],
["香蕉","xiāngjiāo",""],
["向","xiàng",""],
["像","xiàng",""],
["小心","xiǎoxīn",""],
["校长","xiàozhǎng",""],
["新闻","xīnwén",""],
["新鲜","xīnxiān",""],
["信用卡","xìnyòngkǎ",""],
["行李箱","xínglǐxiāng",""],
["熊猫","xióngmāo",""]
], [ // 551 - 575
["需要","xūyào",""],
["选择","xuǎnzé",""],
["要求","yāoqiú",""],
["爷爷","yéye",""],
["一般","yìbān",""],
["一边","yìbiān",""],
["一定","yídìng",""],
["一共","yígòng",""],
["一会儿","yíhuìr",""],
["一样","yíyàng",""],
["一直","yìzhí",""],
["以前","yǐqián",""],
["音乐","yīnyuè",""],
["银行","yínháng",""],
["饮料","yǐnliào",""],
["应该","yīnggāi",""],
["影响","yǐngxiǎng",""],
["用","yòng",""],              // RADICAL
["游戏","yóuxì",""],
["有名","yǒumíng",""],
["又","yòu",""],
["遇到","yùdào",""],
["元","yuán",""],
["愿意","yuànyì",""],
["月亮","yuèliang",""]
], [ // 576 - 600
["越","yuè",""],
["站","zhàn",""],
["张","zhāng",""],
["长","zhǎng",""],
["着急","zháojí",""],
["照顾","zhàogu",""],
["照片","zhàopiàn",""],
["照相机","zhàoxiàngjī",""],
["只","zhī",""],
["只有","zhǐyǒu",""],
["才","cái",""],
["中间","zhōngjiān",""],
["中文","Zhōngwén",""],
["终于","zhōngyú",""],
["种","zhǒng",""],
["重要","zhòngyào",""],
["周末","zhōumò",""],
["主要","zhǔyào",""],
["注意","zhùyì",""],
["自己","zìjǐ",""],
["自行车","zìxíngchē",""],
["总是","zǒngshì",""],
["嘴","zuǐ",""],
["最后","zuìhòu",""],
["最近","zuìjìn",""],
["作业","zuòyè",""]
  ]
],
  [         // HSK 4
      [  // 601 - 625
        ["爱情","àiqíng",""],
        ["安排","ānpái",""],
        ["安全","ānquán",""],
        ["按时","ànshí",""],
        ["按照","ànzhào",""],
        ["百分之","bǎifēnzhī",""],
        ["棒","bàng",""],
        ["包子","bāozi",""],       // "X子-Zi" LOOKALIKE
        ["保护","bǎohù",""],
        ["保证","bǎohù",""],
        ["报名","bào míng",""],
        ["抱","bào",""],
        ["抱歉","bàoqiàn",""],
        ["倍","bèi",""],
        ["本来","běnlái",""],
        ["笨","bèn",""],
        ["比如","bǐrú",""],
        ["毕业","bì yè",""],
        ["遍","biàn",""],
        ["标准","biāozhǔn",""],
        ["表格","biǎogé",""],
        ["表示","biǎoshì",""],
        ["表演","biǎoyǎn",""],
        ["表扬","biǎoyáng",""],
        ["饼干","bǐnggān",""],
      ],
        [ // 626 - 650
        ["并且","bìngqiě",""],
        ["博士","bóshì",""],
        ["不得不","bù dé bù",""],
        ["不管","bùguǎn",""],
        ["不过","búguò",""],
        ["不仅","bùjǐn",""],
        ["部分","bùfen",""],
        ["擦","cā",""],
        ["猜","cāi",""],
        ["材料","cáiliào",""],
        ["参观","cānguān",""],
        ["餐厅","cāntīng",""],
        ["厕所","cèsuǒ",""],
        ["差不多","chàbuduō",""],
        ["长城","chángchéng",""],
        ["长江","Chángjiāng",""],
        ["尝","cháng",""],
        ["场","chǎng",""],
        ["超过","chāoguò",""],
        ["成功","chénggōng",""],
        ["成为","chéngwéi",""],
        ["诚实","chéngshí",""],
        ["乘坐","chéngzuò",""],
        ["吃惊","chī jīng",""],
        ["重新","chóngxīn",""],
      ],
      [ // 651 - 675
        ["抽烟","chōuyān",""],
        ["出差","chū chāi",""],
        ["出发","chūfā",""],
        ["出生","chūshēng",""],
        ["出现","chūxiàn",""],
        ["厨房","chúfáng",""],
        ["传真","chuánzhēn",""],
        ["窗户","chuānghu",""],
        ["词语","cíyǔ",""],
        ["从来","cónglái",""],
        ["粗心","cūxīn",""],
        ["存","cún",""],
        ["错误","cuòwù",""],
        ["答案","dá'àn",""],
        ["打扮","dǎban",""],
        ["打扰","dǎrǎo",""],
        ["打印","dǎyìn",""],
        ["打招呼","dǎzhāohu",""],
        ["打折","dǎzhé",""],
        ["打针","dǎzhēn",""],
        ["大概","dàgài",""],
        ["大使馆","dàshǐguǎn",""],
        ["大约","dàyuē",""],
        ["大夫","dàifu",""],
        ["戴","dài",""]
      ],
      [ // 676 - 700
        ["当","dāng",""],
        ["当时","dāngshí",""],
        ["刀","dāo",""],
        ["导游","dǎoyóu",""],
        ["到处","dàochù",""],
        ["到底","dào dǐ",""],
        ["倒","dǎo",""],
        ["道歉","dàoqiàn",""],
        ["得意","déyì",""],
        ["得","de",""],
        ["登机牌","dēngjīpái",""],
        ["等","děng",""],
        ["低","dī",""],
        ["底","dǐ",""],
        ["地点","dìdiǎn",""],
        ["地球","dìqiú",""],
        ["地址","dìzhǐ",""],
        ["调查","diàochá",""],
        ["掉","diào",""],
        ["丢","diū",""],
        ["动作","dòngzuò",""],
        ["堵车","dǔchē",""],
        ["肚子","dùzi",""],         // "X子-Zi" LOOKALIKE
        ["短信","duǎnxìn",""],
        ["对话","duìhuà",""]
      ],
      [ // 701 - 725
        ["对面","duìmiàn",""],
        ["对于","duìyú",""],
        ["儿童","értóng",""],
        ["而","ér",""],
        ["发生","fāshēng",""],
        ["发展","fāzhǎn",""],
        ["法律","fǎlǜ",""],
        ["翻译","fānyì",""],
        ["烦恼","fánnǎo",""],
        ["反对","fǎnduì",""],
        ["方法","fāngfǎ",""],
        ["方面","fāngmiàn",""],
        ["方向","fāngxiàng",""],
        ["房东","fángdōng",""],
        ["放弃","fàngqì",""],
        ["放暑假","fàng shǔjià",""],
        ["放松","fàngsōng",""],
        ["份","fèn",""],
        ["丰富","fēngfù",""],
        ["否则","fǒuzé",""],
        ["符合","fúhé",""],
        ["父亲","fùqin",""],
        ["付款","fù kuǎn",""],
        ["负责","fùzé",""],
        ["复印","fùyìn",""],
      ],
      [ // 726 - 750
        ["复杂","fùzá",""],
        ["富","fù",""],
        ["改变","gǎibiàn",""],
        ["干杯","gān bēi",""],
        ["赶","gǎn",""],
        ["敢","gǎn",""],
        ["感动","gǎndòng",""],
        ["感觉","gǎnjué",""],
        ["感情","gǎnqíng",""],
        ["感谢","gǎnxiè",""],
        ["干","gān",""],
        ["刚","gāng",""],
        ["高速公路","gāosù gōnglù",""],    // LONGO!
        ["胳膊","gēbo",""],
        ["各","gè",""],
        ["工资","gōngzī",""],
        ["公里","gōnglǐ",""],
        ["功夫","gōngfu",""],
        ["共同","gòngtóng",""],
        ["购物","gòuwù",""],
        ["够","gòu",""],
        ["估计","gūjì",""],
        ["鼓励","gǔlì",""],
        ["故意","gùyì",""],
        ["顾客","gùkè",""],
      ],
      [  // 751 - 775
        ["挂","guà",""],
        ["关键","guānjiàn",""],
        ["观众","guānzhòng",""],
        ["管理","guǎnlǐ",""],
        ["光","guāng",""],
        ["广播","guǎngbō",""],
        ["广告","guǎnggào",""],
        ["逛","guàng",""],
        ["规定","guīdìng",""],
        ["国籍","guójí",""],
        ["国际","guójì",""],
        ["果汁","guǒzhī",""],
        ["过程","guòchéng",""],
        ["海洋","hǎiyáng",""],
        ["害羞","hàixiū",""],
        ["寒假","hánjià",""],
        ["汗","hàn",""],
        ["航班","hángbān",""],
        ["好处","hǎochu",""],
        ["好像","hǎoxiàng",""],
        ["号码","hàomǎ",""],
        ["合格","hégé",""],
        ["合适","héshì",""],
        ["盒子","hézi",""],
        ["后悔","hòuhuǐ",""],
      ],
      [ // 776 - 800
        ["厚","hòu",""],
        ["互联网","Hùliánwǎng",""],
        ["互相","hùxiāng",""],
        ["护士","hùshi",""],
        ["怀疑","huáiyí",""],
        ["回忆","huíyì",""],
        ["活动","huódòng",""],
        ["活泼","huópo",""],
        ["火","huǒ",""],
        ["获得","huòdé",""],
        ["积极","jījí",""],             // LOOKALIKE
        ["积累","jīlěi",""],            // LOOKALIKE
        ["基础","jīchǔ",""],
        ["激动","jīdòng",""],
        ["及时","jíshí",""],
        ["即使","jíshǐ",""],
        ["计划","jìhuà",""],
        ["记者","jìzhě",""],
        ["技术","jìshù",""],
        ["既然","jìrán",""],
        ["继续","jìxù",""],
        ["寄","jì",""],
        ["加班","jiā bān",""],
        ["加油站","jiāyóuzhàn",""],
        ["家具", "jiājù", ""],
      ],
      [  // 801 - 825
        ["假","jiǎ",""],
        ["价格","jiàgé",""],
        ["坚持","jiānchí",""],
        ["减肥","jiǎnféi",""],
        ["减少","jiǎnshǎo",""],
        ["建议","jiànyì",""],
        ["将来","jiānglái",""],
        ["奖金","jiǎngjīn",""],
        ["降低","jiàngdī",""],
        ["降落","jiàngluò",""],
        ["交","jiāo",""],
        ["交流","jiāoliú",""],
        ["交通","jiāotōng",""],
        ["郊区","jiāoqū",""],
        ["骄傲","jiāo'ào",""],
        ["饺子","jiǎozi",""],
        ["教授","jiàoshòu",""],
        ["教育","jiàoyù",""],
        ["接受","jiēshòu",""],
        ["接着","jiēzhe",""],
        ["节","jié",""],
        ["节约","jiéyuē",""],
        ["结果","jiéguǒ",""],
        ["解释","jiěshì",""],
        ["尽管","jǐnguǎn",""],
      ],
      [ // 825 - 850
        ["紧张","jǐnzhāng",""],
        ["进行","jìnxíng",""],
        ["禁止","jìnzhǐ",""],
        ["京剧","jīngjù",""],
        ["经济","jīngjì",""],
        ["经历","jīnglì",""],
        ["经验","jīngyàn",""],
        ["精彩","jīngcǎi",""],
        ["景色","jǐngsè",""],
        ["警察","jǐngchá",""],
        ["竞争","jìngzhēng",""],
        ["竟然","jìngrán",""],
        ["镜子","jìngzi",""],
        ["究竟","jiūjìng",""],
        ["举","jǔ",""],
        ["举办","jǔbàn",""],
        ["举行","jǔxíng",""],
        ["拒绝","jùjué",""],
        ["距离","jùlí",""],
        ["聚会","jùhuì",""],
        ["开玩笑","kāi wánxiào",""],
        ["开心","kāixīn",""],
        ["看法","kànfǎ",""],
        ["考虑","kǎolǜ",""],
        ["烤鸭","kǎoyā",""]
      ],
      [  // 851 - 875
        ["科学","kēxué",""],
        ["棵","kē",""],
        ["咳嗽","késou",""],
        ["可怜","kělián",""],
        ["可是","kěshì",""],
        ["可惜","kěxī",""],
        ["客厅","kètīng",""],
        ["肯定","kěndìng",""],
        ["空","kōng",""],
        ["空气","kōngqì",""],
        ["恐怕","kǒngpà",""],
        ["苦","kǔ",""],
        ["矿泉水","kuàngquánshuǐ",""],
        ["困","kùn",""],
        ["困难","kùnnan",""],
        ["垃圾桶","lājītǒng",""],
        ["拉","lā",""],
        ["辣","là",""],
        ["来不及","lái bu jí",""],
        ["来得及","lái de jí",""],
        ["来自","láizì",""],
        ["懒","lǎn",""],
        ["浪费","làngfèi",""],
        ["浪漫","làngmàn",""],
        ["老虎","lǎohǔ",""],
      ],
      [  // 876 - 900
        ["冷静","lěngjìng",""],
        ["礼拜天","lǐbàitiān",""],
        ["礼貌","lǐmào",""],
        ["理发","lǐfà",""],
        ["理解","lǐjiě",""],
        ["理想","lǐxiǎng",""],
        ["力气","lìqi",""],
        ["厉害","lìhai",""],
        ["例如","lìrú",""],
        ["俩","liǎng",""],
        ["连","lián",""],
        ["联系","liánxì",""],
        ["凉快","liángkuai",""],
        ["零钱","língqián",""],
        ["另外","lìngwài",""],
        ["留","liú",""],
        ["流利","liúlì",""],
        ["流行","liúxíng",""],
        ["旅行","lǚxíng",""],
        ["律师","lǜshī",""],
        ["乱","luàn",""],
        ["麻烦","máfan",""],
        ["马虎","mǎhu",""],
        ["满","mǎn",""],
        ["毛","máo",""],
      ],
      [ // 901 - 925
        ["毛巾","máojīn",""],
        ["美丽","měilì",""],
        ["梦","mèng",""],
        ["迷路","mílù",""],
        ["密码","mìmǎ",""],
        ["免费","miǎn fèi",""],
        ["秒","miǎo",""],
        ["民族","mínzú",""],
        ["母亲","mǔqin",""],
        ["目的","mùdì",""],
        ["耐心","nàixīn",""],
        ["难道","nándào",""],
        ["难受","nánshòu",""],
        ["内","nèi",""],
        ["内容","nèiróng",""],
        ["能力","nénglì",""],
        ["年龄","niánlíng",""],
        ["弄","nòng",""],
        ["暖和","nuǎnhuo",""],
        ["偶尔","ǒu'ěr",""],
        ["排队","pái duì",""],
        ["排列","páiliè",""],
        ["判断","pànduàn",""],
        ["陪","péi",""],
        ["批评","pīpíng",""],
      ],
      [  // 926 - 950
        ["皮肤","pífū",""],
        ["脾气","píqi",""],
        ["篇","piān",""],
        ["骗","piàn",""],
        ["乒乓球","pīngpāngqiú",""],
        ["平时","píngshí",""],
        ["破","pò",""],
        ["葡萄","pútao",""],
        ["普遍","pǔbiàn",""],
        ["普通话","pǔtōnghuà",""],
        ["其次","qícì",""],
        ["其中","qízhōng",""],
        ["气候","qìhòu",""],
        ["千万","qiānwàn",""],
        ["签证","qiānzhèng",""],
        ["敲","qiāo",""],
        ["桥","qiáo",""],
        ["巧克力","qiǎokèlì",""],
        ["亲戚","qīnqi",""],
        ["轻","qīng",""],
        ["轻松","qīngsōng",""],
        ["情况","qíngkuàng",""],
        ["穷","qióng",""],
        ["区别","qūbié",""],
        ["取","qǔ",""],
      ],
      [ // 951 - 975
        ["全部","quánbù",""],
        ["缺点","quēdiǎn",""],
        ["缺少","quēshǎo",""],
        ["却","què",""],
        ["确实","quèshí",""],
        ["然而","rán'ér",""],
        ["热闹","rènao",""],
        ["任何","rènhé",""],
        ["任务","rènwu",""],
        ["扔","rēng",""],
        ["仍然","réngrán",""],
        ["日记","rìjì",""],
        ["入口","rùkǒu",""],
        ["散步","sàn bù",""],
        ["森林","sēnlín",""],
        ["沙发","shāfā",""],
        ["伤心","shāngxīn",""],
        ["商量","shāngliang",""],
        ["稍微","shāowēi",""],
        ["勺子","sháozi",""],
        ["社会","shèhuì",""],
        ["申请","shēnqǐng",""],
        ["深","shēn",""],
        ["甚至","shènzhì",""],
        ["生活","shēnghuó",""],
      ],
      [ // 976 - 1000
        ["生命","shēngmìng",""],
        ["生意","shēngyi",""],
        ["省","shěng",""],
        ["剩","shèng",""],
        ["失败","shībài",""],
        ["失望","shīwàng",""],
        ["师傅","shīfu",""],
        ["十分","shífēn",""],
        ["实际","shíjì",""],
        ["实在","shízài",""],
        ["使","shǐ",""],
        ["使用","shǐyòng",""],
        ["世纪","shìjì",""],
        ["是否","shìfǒu",""],
        ["适合","shìhé",""],
        ["适应","shìyìng",""],
        ["收","shōu",""],
        ["收入","shōurù",""],
        ["收拾","shōushi",""],
        ["首都","shǒudū",""],
        ["首先","shǒuxiān",""],
        ["受不了","shòu bu liǎo",""],
        ["受到","shòudào",""],
        ["售货员","shòuhuòyuán",""],
        ["输","shū",""],
        ["熟悉","shúxī",""],
      ],
        [ // 1001 - 1025
        ["数量","shùliàng",""],
        ["数字","shùzì",""],
        ["帅","shuài",""],
        ["顺便","shùnbiàn",""],
        ["顺利","shùnlì",""],
        ["顺序","shùnxù",""],
        ["说明","shuōmíng",""],
        ["硕士","shuòshì",""],
        ["死","sǐ",""],
        ["速度","sùdù",""],
        ["塑料袋","sùliàodài",""],
        ["酸","suān",""],
        ["随便","suíbiàn",""],
        ["随着","suízhe",""],
        ["孙子","sūnzi",""],
        ["所有","suǒyǒu",""],
        ["台","tái",""],
        ["抬","tái",""],
        ["态度","tàidu",""],
        ["谈","tán",""],
        ["弹钢琴","tán gāngqín",""],
        ["汤","tāng",""],
        ["糖","táng",""],
        ["躺","tǎng",""],
        ["趟","tàng",""],
      ],
        [ // 1026 - 1050
        ["讨论","tǎolùn",""],
        ["讨厌","tǎoyàn",""],
        ["特点","tèdiǎn",""],
        ["提","tí",""],
        ["提供","tígōng",""],
        ["提前","tíqián",""],
        ["提醒","tíxǐng",""],
        ["填空","tiánkòng",""],
        ["条件","tiáojiàn",""],
        ["停","tíng",""],
        ["挺","tǐng",""],
        ["通过","tōngguò",""],
        ["通知","tōngzhī",""],
        ["同情","tóngqíng",""],
        ["同时","tóngshí",""],
        ["推","tuī",""],
        ["推迟","tuīchí",""],
        ["脱","tuō",""],
        ["袜子","wàzi",""],
        ["完全","wánquán",""],
        ["网球","wǎngqiú",""],
        ["网站","wǎngzhàn",""],
        ["往往","wǎngwǎng",""],
        ["危险","wēixiǎn",""],
        ["卫生间","wèishēngjiān",""],
      ],
      [   // 1051 - 1075
        ["味道","wèidao",""],
        ["温度","wēndù",""],
        ["文章","wénzhāng",""],
        ["污染","wūrǎn",""],
        ["无","wú",""],
        ["无聊","wúliáo",""],
        ["无论","wúlùn",""],
        ["误会","wùhuì",""],
        ["西红柿","xīhóngshì",""],
        ["吸引","xīyǐn",""],
        ["咸","xián",""],
        ["现金","xiànjīn",""],
        ["羡慕","xiànmù",""],
        ["相反","xiāngfǎn",""],
        ["相同","xiāngtóng",""],
        ["香","xiāng",""],
        ["详细","xiángxì",""],
        ["响","xiǎng",""],
        ["橡皮","xiàngpí",""],
        ["消息","xiāoxi",""],
        ["小吃","xiǎochī",""],
        ["小伙子","xiǎohuǒzi",""],
        ["小说","xiǎoshuō",""],
        ["笑话","xiàohua",""],
        ["效果","xiàoguǒ",""],
      ],
      [ // 1076 - 1100
        ["心情","xīnqíng",""],
        ["辛苦","xīnkǔ",""],
        ["信封","xìnfēng",""],
        ["信息","xìnxī",""],
        ["信心","xìnxīn",""],
        ["兴奋","xīngfèn",""],
        ["行","xíng",""],
        ["醒","xǐng",""],
        ["幸福","xìngfú",""],
        ["性别","xìngbié",""],
        ["性格","xìnggé",""],
        ["修理","xiūlǐ",""],
        ["许多","xǔduō",""],
        ["学期","xuéqī",""],
        ["压力","yālì",""],
        ["呀","ya",""],
        ["牙膏","yágāo",""],
        ["亚洲","Yàzhōu",""],
        ["严格","yángé",""],
        ["严重","yánzhòng",""],
        ["研究","yánjiū",""],
        ["盐","yán",""],
        ["眼镜","yǎnjìng",""],
        ["演出","yǎnchū",""],
        ["演员","yǎnyuán",""],
      ],
      [ // 1101 - 1125
        ["阳光","yángguāng",""],
        ["养成","yǎngchéng",""],
        ["样子","yàngzi",""],
        ["邀请","yāoqǐng",""],
        ["要是","yàoshi",""],
        ["钥匙","yàoshi",""],
        ["也许","yěxǔ",""],
        ["叶子","yèzi",""],
        ["页","yè",""],
        ["一切","yíqiè",""],
        ["以","yǐ",""],
        ["以为","yǐwéi",""],
        ["艺术","yìshù",""],
        ["意见","yìjiàn",""],
        ["因此","yīncǐ",""],
        ["引起","yǐnqǐ",""],
        ["印象","yǐnqǐ",""],
        ["赢","yíng",""],
        ["应聘","yìngpìn",""],
        ["永远","yǒngyuǎn",""],
        ["勇敢","yǒnggǎn",""],
        ["优点","yōudiǎn",""],
        ["优秀","yōuxiù",""],
        ["幽默","yōumò",""],
        ["尤其","yóuqí",""],
      ],
      [ // 1126 - 1150
        ["由","yóu",""],
        ["由于","yóuyú",""],
        ["邮局","yóujú",""],
        ["友好","yǒuhǎo",""],
        ["友谊","yǒuyì",""],
        ["有趣","yǒuqù",""],
        ["于是","yúshì",""],
        ["愉快","yúkuài",""],
        ["与","yǔ",""],
        ["羽毛球","yǔmáoqiú",""],
        ["语法","yǔfǎ",""],
        ["语言","yǔyán",""],
        ["预习","yùxí",""],
        ["原来","yuánlái",""],
        ["原谅","yuánliàng",""],
        ["原因","yuányīn",""],
        ["约会","yuēhuì",""],
        ["阅读","yuèdú",""],
        ["云","yún",""],
        ["允许","yǔnxǔ",""],
        ["杂志","zázhì",""],
        ["咱们","zánmen",""],
        ["暂时","zànshí",""],
        ["脏","zāng",""],
        ["责任","zérèn",""],
      ],
      [ // 1151 - 1175
        ["增加","zēngjiā",""],
        ["占线","zhànxiàn",""],
        ["招聘","zhāopìn",""],
        ["照","zhào",""],
        ["真正","zhēnzhèng",""],
        ["整理","zhěnglǐ",""],
        ["正常","zhèngcháng",""],
        ["正好","zhènghǎo",""],
        ["正确","zhèngquè",""],
        ["正式","zhèngshì",""],
        ["证明","zhèngmíng",""],
        ["之","zhī",""],
        ["支持","zhīchí",""],
        ["知识","zhīshi",""],
        ["直接","zhíjiē",""],
        ["值得","zhíde",""],
        ["职业","zhíyè",""],
        ["植物","zhíwù",""],
        ["只好","zhǐhǎo",""],
        ["只要","zhǐyào",""],
        ["指","zhǐ",""],
        ["至少","zhìshǎo",""],
        ["质量","zhìliàng",""],
        ["重","zhòng",""],
        ["重点","zhòngdiǎn",""]
      ],
      [ // 1176 - 1200
        ["重视","zhòngshì",""],
        ["周围","zhōuwéi",""],
        ["主意","zhǔyi",""],
        ["祝贺","zhùhè",""],
        ["著名","zhùmíng",""],
        ["专门","zhuānmén",""],
        ["专业","zhuānyè",""],
        ["转","zhuǎn",""],
        ["赚","earn",""],
        ["准确","zhǔnquè",""],
        ["准时","zhǔnshí",""],
        ["仔细","zǐxì",""],
        ["自然","zìrán",""],
        ["自信","zìxìn",""],
        ["总结","zǒngjié",""],
        ["租","zū",""],
        ["最好","zuìhǎo",""],
        ["尊重","zūnzhòng",""],
        ["左右","zuǒyòu",""],
        ["作家","zuòjiā",""],
        ["作用","zuòyòng",""],
        ["作者","zuòzhě",""],
        ["座","zuò",""],
        ["座位","zuòwèi",""],
        ]
      ],
      [ // HSK 5
// 哎	哎	ai1	āi	hey!; (interjection of surprise or dissatisfaction)
// 唉	唉	ai4	ài	(an exclamation indicating resignation); oh well; oh; mm
// 爱护	愛護	ai4hu4	àihù	cherish; reassure; take good care of
// 爱惜	愛惜	ai4xi1	àixī	cherish; treasure; use sparingly
// 爱心	愛心	ai4xin1	àixīn	compassion
// 安慰	安慰	an1wei4	ānwèi	to comfort; to console
// 安装	安裝	an1zhuang1	ānzhuāng	install; erect; to fix; to mount
// 岸	岸	an4	àn	bank; shore; beach; coast
// 暗	暗	an4	àn	dark; gloomy; hidden; secret
// 熬夜	熬夜	ao2ye4	áoyè	stay up very late or all night
// 把握	把握	ba3wo4	bǎwò	grasp; hold; certainty; assurance
// 摆	擺	bai3	bǎi	to put (on); arrange; to sway; pendulum
// 办理	辦理	ban4li3	bànlǐ	to handle; to transact; to conduct
// 傍晚	傍晚	bang4wan3	bàngwǎn	in the evening; when night falls
// 包裹	包裹	bao1guo3	bāoguǒ	wrap up; bind up; package
// 包含	包含	bao1han2	bāohán	contain; embody; include
// 包括	包括	bao1kuo4	bāokuò	comprise; include; consist of
// 薄	薄	bao2	báo	thin; flimsy; w*84eak (first two pronunciations)
// 宝贝	寶貝	bao3bei4	bǎobèi	treasure; precious things; darling; baby
// 宝贵	寶貴	bao3gui4	bǎoguì	valuable; precious; value
// 保持	保持	bao3chi2	bǎochí	to keep; maintain; to hold
// 保存	保存	bao3cun2	bǎocún	conserve; preserve; to keep, to save a file in a computer
// 保留	保留	bao3liu2	bǎoliú	to reserve; hold back; retain
// 保险	保險	bao3xian3	bǎoxiǎn	insurance; insure; safe
// 报到	報到	bao4dao4	bàodào	report for duty; to check in; register
// 报道	報道	bao4dao4	bàodào	to report; news report
// 报告	報告	bao4gao4	bàogào	to report; make known; inform; speech; lecture
// 报社	報社	bao4she4	bàoshè	newspaper office
// 抱怨	抱怨	bao4yuan4	bàoyuàn	complain; grumble
// 背	背	bei1	bēi	carry on one's back; to bear
// 悲观	悲觀	bei1guan1	bēiguān	pessimistic
// 背景	背景	bei4jing3	bèijǐng	background
// 被子	被子	bei4zi	bèizi	quilt; blanket
// 本科	本科	ben3ke1	běnkē	undergraduate
// 本领	本領	ben3ling3	běnlǐng	skill; ability; capability
// 本质	本質	ben3zhi4	běnzhì	essence; nature; innate character
// 比例	比例	bi3li4	bǐlì	proportion; scale
// 彼此	彼此	bi3ci3	bǐcǐ	each other; one another
// 必然	必然	bi4ran2	bìrán	inevitable; certain; necessary
// 必要	必要	bi4yao4	bìyào	necessary; essential; indispensable
// 毕竟	畢竟	bi4jing4	bìjìng	after all; overall; when all is said and done
// 避免	避免	bi4mian3	bìmiǎn	avoid; avert; prevent
// 编辑	編輯	bian1ji2	biānjí	to edit; compile; editor
// 鞭炮	鞭炮	bian1pao4	biānpào	firecracker; a long string of small firecrackers
// 便	便	bian4, pian2	biàn, pián	plain; convenient; excretion; formal equivalent to 就 | cheap
// 辩论	辯論	bian4lun4	biànlùn	argue; debate; argue over
// 标点	標點	biao1dian3	biāodiǎn	punctuation; punctuation mark; punctuate
// 标志	標志	biao1zhi4	biāozhì	sign; mark; signal; symbol
// 表达	表達	biao3da2	biǎodá	to express; to voice; convey
// 表面	表面	biao3mian4	biǎomiàn	surface; outside; face
// 表明	表明	biao3ming2	biǎomíng	make clear; make known
// 表情	表情	biao3qing2	biǎoqíng	(facial) expression; express one's feelings
// 表现	表現	biao3xian4	biǎoxiàn	to show; to show off; display; performance
// 冰激凌	冰激淩	bing1ji1ling2	bīngjīlíng	ice cream
// 病毒	病毒	bing4du2	bìngdú	virus
// 玻璃	玻璃	bo1li	bōli	glass; nylon; plastic
// 播放	播放	bo1fang4	bōfàng	broadcast; transmit
// 脖子	脖子	bo2zi	bózi	neck
// 博物馆	博物館	bo2wu4guan3	bówùguǎn	museum
// 补充	補充	bu3chong1	bǔchōng	replenish; to supplement; to complement
// 不安	不安	bu4'an1	bù'ān	uneasy; unstable; disturbed
// 不得了	不得了	bu4de2liao3	bùdéliǎo	extremely; very; terribly; my god! (expression of surprise)
// 不断	不斷	bu2duan4	búduàn	unceasing; uninterrupted; continuously
// 不见得	不見得	bu2jian4de2	bújiàndé	not necessarily; not likely
// 不耐烦	不耐煩	bun2ai4fan2	búnàifán	impatience; impatient
// 不然	不然	bu4ran2	bùrán	otherwise; not so
// 不如	不如	bu4ru2	bùrú	not as good as; inferior to
// 不要紧	不要緊	bu2 yao4jin3	bú yàojǐn	unimportant; not serious; it doesn't matter
// 不足	不足	bu4zu2	bùzú	insufficient; not enough
// 布	布	bu4	bù	cloth; announce; to spread
// 步骤	步驟	bu4zhou4	bùzhòu	step; move; measure; procedure
// 部门	部門	bu4men2	bùmén	department; branch; section
// 财产	財産	cai2chan3	cáichǎn	property; fortune
// 采访	采訪	cai3fang3	cǎifǎng	interview; gather news; hunt for and collect
// 采取	采取	cai3qu3	cǎiqǔ	carry out or adopt; take(measures, policies, attitudes, etc.)
// 彩虹	彩虹	cai3hong2	cǎihóng	rainbow
// 踩	踩	cai3	cǎi	step upon; to tread; to stamp
// 参考	參考	can1kao3	cānkǎo	reference; consult
// 参与	參與	can1yu4	cānyù	participate (in sth.); attach oneself to
// 惭愧	慚愧	can2kui4	cánkuì	ashamed
// 操场	操場	cao1chang3	cāochǎng	playground; sports field
// 操心	操心	cao1 xin1	cāo xīn	worry about
// 册	冊	ce4	cè	book; (mw for books)
// 测验	測驗	ce4yan4	cèyàn	test; exam; to test
// 曾经	曾經	ceng2jing1	céngjīng	once; (refers to something that happened previously)
// 叉子	叉子	cha1zi	chāzi	fork; cross
// 差距	差距	cha1ju4	chājù	disparity; gap; the difference (in distance; amount; progress; etc.)
// 插	插	cha1	chā	to insert; stick in; pierce
// 拆	拆	chai1	chāi	unravel; to tear; demolish
// 产品	産品	chan3pin3	chǎnpǐn	product; goods; merchandise
// 产生	産生	chan3sheng1	chǎnshēng	to produce; emerge; to cause
// 长途	長途	chang2tu2	chángtú	long distance
// 常识	常識	chang2shi2	chángshí	common sense; general knowledge
// 抄	抄	chao1	chāo	to copy; plagiarize; search and confiscate
// 超级	超級	chao1ji2	chāojí	super; transcending; high grade
// 朝	朝	chao2	cháo	to face; towards; dynasty
// 潮湿	潮濕	chao2shi1	cháoshī	damp; moist; humid
// 吵	吵	chao3	chǎo	to quarrel; make noise
// 吵架	吵架	chao3 jia4	chǎo jià	to quarrel; to squabble; bicker
// 炒	炒	chao3	chǎo	to stir-fry; saute
// 车库	車庫	che1ku4	chēkù	garage
// 车厢	車廂	che1xiang1	chēxiāng	carriage; railroad car
// 彻底	徹底	che4di3	chèdǐ	thorough; complete; completely
// 沉默	沈默	chen2mo4	chénmò	silent; uncommunicative
// 趁	趁	chen4	chèn	avail oneself of; take advantage of (an opportunity or situation)
// 称	稱	cheng1	chēng	weigh; to call; be called
// 称呼	稱呼	cheng1hu	chēnghu	to call; address as; name
// 称赞	稱贊	cheng1zan4	chēngzàn	to praise; to acclaim
// 成分	成分	cheng2fen4	chéngfèn	ingredient; composition
// 成果	成果	cheng2guo3	chéngguǒ	result; achievement; gain
// 成就	成就	cheng2jiu4	chéngjiù	accomplishment; achievement; success
// 成立	成立	cheng2li4	chénglì	establish; to set up
// 成人	成人	cheng2ren2	chéngrén	adult; to grow up; become full-grown
// 成熟	成熟	cheng2shu2	chéngshú	mature; ripe
// 成语	成語	cheng2yu3	chéngyǔ	idiom; proverb
// 成长	成長	cheng2zhang3	chéngzhǎng	to mature; grow up
// 诚恳	誠懇	cheng2ken3	chéngkěn	honest; sincere
// 承担	承擔	cheng2dan1	chéngdān	undertake; assume (responsibility)
// 承认	承認	cheng2ren4	chéngrèn	to admit; concede; acknowledge
// 承受	承受	cheng2shou4	chéngshòu	to bear; support; endure; sustain
// 程度	程度	cheng2du4	chéngdù	degree; extent; level
// 程序	程序	cheng2xu4	chéngxù	procedure; sequence; program
// 吃亏	吃虧	chi1kui1	chīkuī	suffer losses; get the worst of
// 池塘	池塘	chi2tang2	chítáng	pool; pond
// 迟早	遲早	chi2zao3	chízǎo	sooner or later
// 持续	持續	chi2xu4	chíxù	continue; persist
// 尺子	尺子	chi3zi	chǐzi	ruler (measuring instrument)
// 翅膀	翅膀	chi4bang3	chìbǎng	wing
// 冲	沖	chong1	chōng	to rush; to clash; to rinse; thoroughfare
// 充电器	充電器	chong1dian4qi4	chōngdiànqì	battery charger
// 充分	充分	chong1fen4	chōngfèn	full; abundant; ample
// 充满	充滿	chong1man3	chōngmǎn	brimming with; very full
// 重复	重複	chong2fu4	chóngfù	to repeat; to duplicate
// 宠物	寵物	chong3wu4	chǒngwù	a pet
// 抽屉	抽屜	chou1ti	chōuti	drawer
// 抽象	抽象	chou1xiang4	chōuxiàng	abstract; abstraction
// 丑	醜	chou3	chǒu	ugly; disgraceful (2nd Earthly Branch)
// 臭	臭	chou4	chòu	stench; stink
// 出版	出版	chu1ban3	chūbǎn	publish
// 出口	出口	chu1kou3	chūkǒu	exit; speak; export
// 出色	出色	chu1se4	chūsè	remarkable; outstanding; excellent
// 出示	出示	chu1shi4	chūshì	to show
// 出席	出席	chu1xi2	chūxí	attend; be present; participate
// 初级	初級	chu1ji2	chūjí	junior; primary
// 除非	除非	chu2fei1	chúfēi	only if; unless
// 除夕	除夕	chu2xi1	chúxī	Lunar New Year's Eve
// 处理	處理	chu3li3	chǔlǐ	deal with; to process; sell at a discount; to treat (by a special process)
// 传播	傳播	chuan2bo1	chuánbō	propagate; to spread
// 传染	傳染	chuan2ran3	chuánrǎn	infect; be contagious
// 传说	傳說	chuan2shuo1	chuánshuō	it is said; legend; pass on (a story)
// 传统	傳統	chuan2tong3	chuántǒng	tradition; traditional
// 窗帘	窗簾	chuang1lian2	chuānglián	window curtain
// 闯	闖	chuang3	chuǎng	rush; break through; to temper oneself (by battling difficulties)
// 创造	創造	chuang4zao4	chuàngzào	create; bring about; creativity
// 吹	吹	chui1	chuī	to blow; to blast; to puff
// 词汇	詞彙	ci2hui4	cíhuì	vocabulary
// 辞职	辭職	ci2zhi2	cízhí	resign from a position
// 此外	此外	ci3wai4	cǐwài	besides; in addition; moreover
// 次要	次要	ci4yao4	cìyào	secondary; less important
// 刺激	刺激	ci4ji1	cìjī	exciting; provoke; irritate
// 匆忙	匆忙	cong1mang2	cōngmáng	hasty; hurried
// 从此	從此	cong2ci3	cóngcǐ	from now on; since then
// 从而	從而	cong2'er2	cóng'ér	thus; thereby; as a result
// 从前	從前	cong2qian2	cóngqián	previously; formerly; in the past
// 从事	從事	cong2shi4	cóngshì	go for; engage in; deal with
// 粗糙	粗糙	cu1cao1	cūcāo	coarse
// 促进	促進	cu4jin4	cùjìn	promote (an idea or cause); to advance
// 促使	促使	cu4shi3	cùshǐ	to urge; impel; to cause; to push
// 醋	醋	cu4	cù	vinegar
// 催	催	cui1	cuī	to press; to urge; to hurry
// 存在	存在	cun2zai4	cúnzài	to exist; to be
// 措施	措施	cuo4shi1	cuòshī	measure; step (to be taken)
// 答应	答應	da1ying	dāying	to respond; to promise; to answer; agree
// 达到	達到	da2 dao4	dá dào	achieve; attain; to reach
// 打工	打工	da3gong1	dǎgōng	work a part time job; (regional) do manual labor; do odd jobs
// 打交道	打交道	da3 jiao1dao	dǎ jiāodao	come into contact with; to deal with
// 打喷嚏	打噴嚏	da3pen1ti4	dǎpēntì	to sneeze
// 打听	打聽	da3ting	dǎting	ask about; inquire about
// 大方	大方	da4fang	dàfang	generous; poise; (-fang1: expert; scholar)
// 大厦	大廈	da4sha4	dàshà	large building; edifice; mansion
// 大象	大象	da4xiang4	dàxiàng	elephant
// 大型	大型	da4xing2	dàxíng	large-scale; wide-scale
// 呆	呆	dai1	dāi	stupid; foolish; blank; dumbstruck; to stay
// 代表	代表	dai4biao3	dàibiǎo	represent; to delegate
// 代替	代替	dai4ti4	dàitì	to replace
// 贷款	貸款	dai4 kuan3	dài kuǎn	(bank) loan; provide a loan
// 待遇	待遇	dai4yu4	dàiyù	treatment; pay; wage; salary
// 担任	擔任	dan1ren4	dānrèn	hold the post of; serve as
// 单纯	單純	dan1chun2	dānchún	simple; pure; merely
// 单调	單調	dan1diao4	dāndiào	monotonous; dull
// 单独	單獨	dan1du2	dāndú	alone
// 单位	單位	dan1wei4	dānwèi	unit; work unit
// 单元	單元	dan1yuan2	dānyuán	unit; entrance number; staircase (for residential buildings)
// 耽误	耽誤	dan1wu	dānwu	to delay; waste time
// 胆小鬼	膽小鬼	dan3xiao3gui3	dǎnxiǎoguǐ	coward
// 淡	淡	dan4	dàn	diluted; weak; thin
// 当地	當地	dang1di4	dāngdì	local
// 当心	當心	dang1xin1	dāngxīn	take care; watch out
// 挡	擋	dang3	dǎng	to block; hinder; gear; equipment
// 导演	導演	dao3yan3	dǎoyǎn	to direct; director
// 导致	導致	dao3zhi4	dǎozhì	lead to; bring about; to cause
// 岛屿	島嶼	dao3yu3	dǎoyǔ	islands
// 倒霉	倒黴	dao3mei2	dǎoméi	have bad luck; be out of luck
// 到达	到達	dao4da2	dàodá	to reach; arrive
// 道德	道德	dao4de2	dàodé	morals; morality; ethics
// 道理	道理	dao4li3	dàolǐ	reason; sense; argument
// 登记	登記	deng1ji4	dēngjì	register (one's name); check in; enroll
// 等待	等待	deng3dai4	děngdài	to wait (for); expect
// 等于	等于	deng3yu2	děngyú	(Mathematics) equal to
// 滴	滴	di1	dī	to drip; drop; (mw for drops of liquid)
// 的确	的確	di2que4	díquè	really; indeed
// 敌人	敵人	di2ren2	dírén	enemy
// 地道	地道	di4dao	dìdao	authentic; genuine; (-dào: tunnel)
// 地理	地理	di4li3	dìlǐ	geography
// 地区	地區	di4qu1	dìqū	an area; a region; a district
// 地毯	地毯	di4tan3	dìtǎn	carpet; rug
// 地位	地位	di4wei4	dìwèi	position; status
// 地震	地震	di4zhen4	dìzhèn	earthquake
// 递	遞	di4	dì	hand over; to pass; to give
// 点心	點心	dian3xin	diǎnxin	dim sum; light refreshments; snacks
// 电池	電池	dian4chi2	diànchí	battery
// 电台	電台	dian4tai2	diàntái	transceiver; broadcasting station
// 钓	釣	diao4	diào	to fish
// 顶	頂	ding3	dǐng	top; roof; carry on one's head; prop up; to butt; (mw for headwear, i.e. hats)
// 动画片	動畫片	dong4hua4pian4	dònghuàpiàn	animated film
// 冻	凍	dong4	dòng	to freeze
// 洞	洞	dong4	dòng	cave; hole
// 豆腐	豆腐	dou4fu	dòufu	tofu; bean curd
// 逗	逗	dou4	dòu	to tease; amuse; to stay; to stop; funny
// 独立	獨立	du2li4	dúlì	independent
// 独特	獨特	du2te4	dútè	unique; distinctive
// 度过	度過	du4guo4	dùguò	spend; to pass
// 断	斷	duan4	duàn	to break; decide; absolutely (usually negative)
// 堆	堆	dui1	duī	pile; heap; stack; crowd
// 对比	對比	dui4bi3	duìbǐ	compare; to contrast; comparison
// 对待	對待	dui4dai4	duìdài	to treat
// 对方	對方	dui4fang1	duìfāng	counterpart; the other party involved
// 对手	對手	dui4shou3	duìshǒu	opponent; adversary; match
// 对象	對象	dui4xiang4	duìxiàng	target; object; partner; boyfriend or girlfriend
// 兑换	兌換	dui4huan4	duìhuàn	to exchange; to convert (currencies)
// 吨	噸	dun1	dūn	ton
// 蹲	蹲	dun1	dūn	to crouch; to squat
// 顿	頓	dun4	dùn	pause; arrange; stamp feet; suddenly; (mw for meals)
// 多亏	多虧	duo1kui1	duōkuī	thanks to; luckily
// 多余	多余	duo1yu2	duōyú	unnecessary; superfluous
// 朵	朵	duo3	duǒ	(mw for flowers and clouds)
// 躲藏	躲藏	duo3cang2	duǒcáng	hide oneself; take cover
// 恶劣	惡劣	e4lie4	èliè	vile; horrible
// 耳环	耳環	er3huan2	ěrhuán	earring
// 发表	發表	fa1biao3	fābiǎo	publish; to issue (a statement); announce
// 发愁	發愁	fa1 chou2	fā chóu	worry about sth.
// 发达	發達	fa1da2	fādá	developed (country, etc.); flourishing; prosper
// 发抖	發抖	fa1dou3	fādǒu	to shiver; to shudder; tremble
// 发挥	發揮	fa1hui1	fāhuī	to bring (skill, talent, etc.) into play; to develop (an idea)
// 发明	發明	fa1ming2	fāmíng	invent
// 发票	發票	fa1piao4	fāpiào	receipt or bill for purchase; invoice
// 发言	發言	fa1yan2	fāyán	make a speech; statement
// 罚款	罰款	fa2kuan3	fákuǎn	fine; penalty (monetary)
// 法院	法院	fa3yuan4	fǎyuàn	court of law
// 翻	翻	fan1	fān	to turn over; capsize; translate
// 繁荣	繁榮	fan2rong2	fánróng	prosperous; prosperity; booming (economy)
// 反而	反而	fan3'er2	fǎn'ér	on the contrary; instead
// 反复	反複	fan3fu4	fǎnfù	repeatedly; over and over
// 反应	反應	fan3ying4	fǎnyìng	react; respond; reply
// 反映	反映	fan3ying4	fǎnyìng	reflect; reflection; report on
// 反正	反正	fan3zheng4	fǎnzhèng	anyway
// 范围	範圍	fan4wei2	fànwéi	scope; range; limits; extent
// 方	方	fang1	fāng	square; direction; side (Kangxi radical 70)
// 方案	方案	fang1'an4	fāng'àn	plan; program (for action, etc.); proposal
// 方式	方式	fang1shi4	fāngshì	way; style; fashion; manner
// 妨碍	妨礙	fang2'ai4	fáng'ài	hinder; to hamper; to obstruct
// 仿佛	仿佛	fang3fu2	fǎngfú	to seem as though; as if
// 非	非	fei1	fēi	non-; un-; not be; wrongdoing; simply must (Kangxi radical 175)
// 肥皂	肥皂	fei2zao4	féizào	soap
// 废话	廢話	fei4hua4	fèihuà	nonsense; rubbish
// 分别	分別	fen1bie2	fēnbié	distinguish; split up; difference; to part
// 分布	分布	fen1bu4	fēnbù	be distributed (over an area); be scattered
// 分配	分配	fen1pei4	fēnpèi	distribute; assign; allocate
// 分手	分手	fen1shou3	fēnshǒu	part company; break up
// 分析	分析	fen1xi1	fēnxī	analyze; analysis
// 纷纷	紛紛	fen1fen1	fēnfēn	one after another; in succession; in profusion; diverse; pell-mell
// 奋斗	奮鬥	fen4dou4	fèndòu	strive; to struggle
// 风格	風格	feng1ge2	fēnggé	style
// 风景	風景	feng1jing3	fēngjǐng	scenery; landscape
// 风俗	風俗	feng1su2	fēngsú	social custom
// 风险	風險	feng1xian3	fēngxiǎn	risk; venture; hazard
// 疯狂	瘋狂	feng1kuang2	fēngkuáng	crazy; madness; wild; extreme popularity; insane; frenzied; unbridled
// 讽刺	諷刺	feng3ci4	fěngcì	satirize; ridicule; mock; irony
// 否定	否定	fou3ding4	fǒudìng	negate; negative
// 否认	否認	fou3ren4	fǒurèn	deny; declare to be untrue
// 扶	扶	fu2	fú	to support with hand; to help somebody up
// 服装	服裝	fu2zhuang1	fúzhuāng	(formal) clothing; costume; dress
// 幅	幅	fu2	fú	width of cloth; size; (mw for pictures, paintings, textiles)
// 辅导	輔導	fu3dao3	fǔdǎo	to coach; to tutor; give advice (in study)
// 妇女	婦女	fun4ü3	fùnǚ	woman; women in general
// 复制	複制	fu4zhi4	fùzhì	duplicate; reproduce
// 改革	改革	gai3ge2	gǎigé	to reform
// 改进	改進	gai3jin4	gǎijìn	improve; make better
// 改善	改善	gai3shan4	gǎishàn	improve; make better
// 改正	改正	gai3zheng4	gǎizhèng	to correct; amend
// 盖	蓋	gai4	gài	lid; top; cover; to build
// 概括	概括	gai4kuo4	gàikuò	summarize; generalize
// 概念	概念	gai4nian4	gàiniàn	concept; idea
// 干脆	幹脆	gan1cui4	gāncuì	straightforward; clear-cut; blunt
// 干燥	幹燥	gan1zao4	gānzào	to dry (of paint, cement, etc.); dry; dryness
// 赶紧	趕緊	gan3jin3	gǎnjǐn	at once; hurriedly; lose no time
// 赶快	趕快	gan3kuai4	gǎnkuài	at once; immediately
// 感激	感激	gan3ji1	gǎnjī	appreciate; feel grateful
// 感受	感受	gan3shou4	gǎnshòu	feel; experience; emotion; impression
// 感想	感想	gan3xiang3	gǎnxiǎng	impressions; reflections; thoughts
// 干活儿	幹活兒	gan4 huo2r	gàn huór	do manual labor; to work
// 钢铁	鋼鐵	gang1tie3	gāngtiě	steel
// 高档	高檔	gao1dang4	gāodàng	top quality; first rate; high class
// 高级	高級	gao1ji2	gāojí	high-level; high-grade; advanced
// 搞	搞	gao3	gǎo	do; make; be engaged in
// 告别	告別	gao4bie2	gàobié	say goodbye to; to leave; to part
// 格外	格外	ge2wai4	géwài	especially; additionally
// 隔壁	隔壁	ge2bi4	gébì	next door
// 个别	個別	ge4bie2	gèbié	individual; specific; isolated; very few
// 个人	個人	ger4en2	gèrén	individual; personal; oneself
// 个性	個性	ge4xing4	gèxìng	individuality; personality
// 各自	各自	ge4zi4	gèzì	each; respective; apiece
// 根	根	gen1	gēn	root; base; (mw for long, slender objects)
// 根本	根本	gen1ben3	gēnběn	root; essence; fundamental; basic; (not) at all; simply
// 工厂	工廠	gong1chang3	gōngchǎng	factory
// 工程师	工程師	gong1cheng2shi1	gōngchéngshī	engineer
// 工具	工具	gong1ju4	gōngjù	tool; instrument; utensil
// 工人	工人	gong1ren2	gōngrén	worker
// 工业	工業	gong1ye4	gōngyè	industry
// 公布	公布	gong1bu4	gōngbù	make public; announce; publicize
// 公开	公開	gong1kai1	gōngkāi	public; make public
// 公平	公平	gong1ping2	gōngpíng	fair; impartial; just
// 公寓	公寓	gong1yu4	gōngyù	apartment building
// 公元	公元	gong1yuan2	gōngyuán	(year) AD or CE; Christian era; common era
// 公主	公主	gong1zhu3	gōngzhǔ	princess
// 功能	功能	gong1neng2	gōngnéng	function; feature
// 恭喜	恭喜	gong1xi3	gōngxǐ	congratulate
// 贡献	貢獻	gong4xian4	gòngxiàn	contribute; dedicate; contribution
// 沟通	溝通	gou1tong1	gōutōng	link; connect; communicate
// 构成	構成	gou4cheng2	gòuchéng	to constitute; to compose
// 姑姑	姑姑	gu1gu	gūgu	paternal aunt; father's sister
// 姑娘	姑娘	gun1iang	gūniang	young woman; girl
// 古代	古代	gu3dai4	gǔdài	ancient times
// 古典	古典	gu3dian3	gǔdiǎn	classical
// 股票	股票	gu3piao4	gǔpiào	shares; stock (market)
// 骨头	骨頭	gu3tou	gǔtou	bone; moral character
// 鼓舞	鼓舞	gu3wu3	gǔwǔ	inspire; heartening
// 鼓掌	鼓掌	gu3 zhang3	gǔ zhǎng	applaud
// 固定	固定	gu4ding4	gùdìng	fixed; regular; stable
// 挂号	挂號	gua4 hao4	guà hào	register; check into hospital; send by registered mail
// 乖	乖	guai1	guāi	(of a child) obedient; well-behaved; clever; perverse; contrary to reason
// 拐弯	拐彎	guai3 wan1	guǎi wān	turn a corner; make a turn
// 怪不得	怪不得	guai4 bu de	guài bu de	no wonder; so that's why
// 关闭	關閉	guan1bi4	guānbì	close; shut
// 观察	觀察	guan1cha2	guānchá	observe; to watch; to survey
// 观点	觀點	guan1dian3	guāndiǎn	point of view; standpoint
// 观念	觀念	guan1nian4	guānniàn	notion; thought; concept
// 官	官	guan1	guān	an official; organ; governmental
// 管子	管子	guan3zi	guǎnzi	tube; pipe; drinking straw
// 冠军	冠軍	guan4jun1	guànjūn	champion
// 光滑	光滑	guang1hua2	guānghuá	glossy; sleek; smooth
// 光临	光臨	guang1lin2	guānglín	(polite) welcome!; honor somebody with one's presence
// 光明	光明	guang1ming2	guāngmíng	bright (future); promising; illuminate
// 光盘	光盤	guang1pan2	guāngpán	CD (compact disc)
// 广场	廣場	guang3chang3	guǎngchǎng	public square; plaza
// 广大	廣大	guang3da4	guǎngdà	vast; extensive
// 广泛	廣泛	guang3fan4	guǎngfàn	extensive; wide ranging
// 归纳	歸納	guin1a4	guīnà	conclude from the facts; induce; sum up from the facts
// 规矩	規矩	gui1ju	guīju	rule; custom
// 规律	規律	gui1lü4	guīlǜ	law (e.g. of science); regular pattern; discipline
// 规模	規模	gui1mo2	guīmó	scale; scope; extent
// 规则	規則	gui1ze2	guīzé	rule; law; regulation
// 柜台	櫃台	gui4tai2	guìtái	counter; bar; front desk
// 滚	滾	gun3	gǔn	to roll; get lost; to boil
// 锅	鍋	guo1	guō	pot; pan; boiler
// 国庆节	國慶節	Guo2qing4 Jie2	Guóqìng Jié	National Day
// 国王	國王	guo2wang2	guówáng	king
// 果然	果然	guo3ran2	guǒrán	really; sure enough; as expected
// 果实	果實	guo3shi2	guǒshí	fruit; gains; results
// 过分	過分	guo4fen4	guòfèn	excessive; overly
// 过敏	過敏	guo4min3	guòmǐn	be allergic; allergy
// 过期	過期	guo4qi1	guòqī	overdue; expire
// 哈	哈	ha1	hā	exhale; sip; (sound of laughter)
// 海关	海關	hai3guan1	hǎiguān	customs (i.e. border inspection)
// 海鲜	海鮮	hai3xian1	hǎixiān	seafood
// 喊	喊	han3	hǎn	call; cry; shout
// 行业	行業	hang2ye4	hángyè	industry; business
// 豪华	豪華	hao2hua2	háohuá	luxurious
// 好客	好客	hao4ke4	hàokè	hospitable; to enjoy having guests
// 好奇	好奇	hao4qi2	hàoqí	curious
// 合法	合法	he2fa3	héfǎ	lawful; legitimate; legal
// 合理	合理	he2li3	hélǐ	rational; reasonable
// 合同	合同	he2tong	hétong	contract
// 合影	合影	he2ying3	héyǐng	joint photo; group photo
// 合作	合作	he2zuo4	hézuò	cooperate; collaborate; work together
// 何必	何必	he2bi4	hébì	why should; there is no need to
// 何况	何況	he2kuang4	hékuàng	let alone; much less
// 和平	和平	he2ping2	hépíng	peace
// 核心	核心	he2xin1	héxīn	core; nucleus
// 恨	恨	hen4	hèn	to hate
// 猴子	猴子	hou2zi	hóuzi	monkey
// 后背	後背	hou4bei4	hòubèi	back (of the body)
// 后果	後果	hou4guo3	hòuguǒ	consequences; aftermath
// 呼吸	呼吸	hu1xi1	hūxī	breathe
// 忽然	忽然	hu1ran2	hūrán	suddenly; all of a sudden
// 忽视	忽視	hu1shi4	hūshì	neglect; ignore; to overlook
// 胡说	胡說	hu2shuo1	húshuō	talk nonsense; drivel
// 胡同	胡同	hu2tong4	hútòng	lane; alley
// 壶	壺	hu2	hú	pot; kettle; jug; (mw for bottled liquids)
// 蝴蝶	蝴蝶	hu2die2	húdié	butterfly
// 糊涂	糊塗	hu2tu	hútu	confused; bewildered; muddled
// 花生	花生	hua1sheng1	huāshēng	peanut
// 划	劃	hua4, hua2	huà, huá	delimit; to transfer; assign | to row; to paddle; to scratch
// 华裔	華裔	Hua2yi4	Huáyì	person of Chinese descent
// 滑	滑	hua2	huá	slippery; cunning; crafty
// 化学	化學	hua4xue2	huàxué	chemistry
// 话题	話題	hua4ti2	huàtí	subject (of a talk or conversation)
// 怀念	懷念	huai2nian4	huáiniàn	cherish the memory of; think fondly of
// 怀孕	懷孕	huai2yun4	huáiyùn	become pregnant; have conceived
// 缓解	緩解	huan3jie3	huǎnjiě	to alleviate
// 幻想	幻想	huan4xiang3	huànxiǎng	delusion; fantasy; illusion
// 慌张	慌張	huang1zhang1	huāngzhāng	flustered; flurried
// 黄金	黃金	huang2jin1	huángjīn	gold
// 灰	灰	hui1	huī	ash; gray (grey); dust; lime
// 灰尘	灰塵	hui1chen2	huīchén	dust; dirt
// 灰心	灰心	hui1 xin1	huī xīn	lose heart; be discouraged
// 挥	揮	hui1	huī	to wave; brandish; wield; wipe away
// 恢复	恢複	hui1fu4	huīfù	reinstate; resume; recover
// 汇率	彙率	hui4lü4	huìlǜ	exchange rate
// 婚礼	婚禮	hun1li3	hūnlǐ	wedding ceremony
// 婚姻	婚姻	hun1yin1	hūnyīn	marriage; matrimony; wedding
// 活跃	活躍	huo2yue4	huóyuè	active; vigorous
// 火柴	火柴	huo3chai2	huǒchái	match (for lighting fire)
// 伙伴	夥伴	huo3ban4	huǒbàn	partner (for an activity); friend; pal
// 或许	或許	huo4xu3	huòxǔ	perhaps; maybe
// 机器	機器	ji1qi4	jīqì	machine
// 肌肉	肌肉	ji1rou4	jīròu	muscle; flesh
// 基本	基本	ji1ben3	jīběn	basic; fundamental
// 激烈	激烈	ji1lie4	jīliè	intense; acute; sharp; fierce
// 及格	及格	ji2 ge2	jí gé	pass an exam
// 极其	極其	ji2qi2	jíqí	extremely; exceedingly
// 急忙	急忙	ji2mang2	jímáng	hastily
// 急诊	急診	ji2zhen3	jízhěn	emergency call; emergency treatment
// 集合	集合	ji2he2	jíhé	gather; assemble; to muster
// 集体	集體	ji2ti3	jítǐ	collective; group
// 集中	集中	ji2zhong1	jízhōng	concentrate; to focus; amass
// 计算	計算	ji4suan4	jìsuàn	to count; calculate; compute
// 记录	記錄	ji4lu4	jìlù	to record; take notes
// 记忆	記憶	ji4yi4	jìyì	memory; to remember
// 纪录	紀錄	ji4lu4	jìlù	a record; to take notes
// 纪律	紀律	ji4lü4	jìlǜ	discipline; morale; laws and regulations
// 纪念	紀念	jin4ian4	jìniàn	commemorate; remember
// 系领带	系領帶	ji4ling3dai4	jìlǐngdài	tie a neck tie
// 寂寞	寂寞	ji4mo4	jìmò	lonely; lonesome
// 夹子	夾子	jia1zi	jiāzi	clip; tongs; folder
// 家庭	家庭	jia1ting2	jiātíng	family; household
// 家务	家務	jia1wu4	jiāwù	household duties; chores; housework
// 家乡	家鄉	jia1xiang1	jiāxiāng	hometown
// 嘉宾	嘉賓	jia1bin1	jiābīn	honored guest
// 甲	甲	jia3	jiǎ	one; armor (1st Heavenly Stem)
// 假如	假如	jia3ru2	jiǎrú	if; supposing; in case
// 假设	假設	jia3she4	jiǎshè	suppose that; hypothesis; conjecture
// 假装	假裝	jia3zhuang1	jiǎzhuāng	pretend to be; feign
// 价值	價值	jia4zhi2	jiàzhí	value; worth
// 驾驶	駕駛	jia4shi3	jiàshǐ	to drive; to pilot (a ship, an airplane, etc.)
// 嫁	嫁	jia4	jià	marry (a husband); take a husband
// 坚决	堅決	jian1jue2	jiānjué	resolute; determined; uncompromising
// 坚强	堅強	jian1qiang2	jiānqiáng	strong; staunch
// 肩膀	肩膀	jian1bang3	jiānbǎng	shoulder
// 艰巨	艱巨	jian1ju4	jiānjù	very difficult; arduous; hard
// 艰苦	艱苦	jian1ku3	jiānkǔ	difficult; hard; arduous
// 兼职	兼職	jian1zhi2	jiānzhí	part time
// 捡	撿	jian3	jiǎn	to pick up; collect; gather
// 剪刀	剪刀	jian3dao1	jiǎndāo	scissors
// 简历	簡曆	jian3li4	jiǎnlì	resume; curriculum vitae
// 简直	簡直	jian3zhi2	jiǎnzhí	simply; at all
// 建立	建立	jian4li4	jiànlì	establish; to construct; to set up
// 建设	建設	jian4she4	jiànshè	to build; to construct; construction
// 建筑	建築	jian4zhu4	jiànzhù	a building; to construct; architecture
// 健身	健身	jian4shen1	jiànshēn	work out; body-building
// 键盘	鍵盤	jian4pan2	jiànpán	keyboard
// 讲究	講究	jiang3jiu	jiǎngjiu	Be particular about; fastidious; stress; exquisite ; careful study
// 讲座	講座	jiang3zuo4	jiǎngzuò	a lecture or course of lectures; lecture hall
// 酱油	醬油	jiang4you2	jiàngyóu	soy sauce
// 交换	交換	jiao1huan4	jiāohuàn	to exchange; to swap; to switch
// 交际	交際	jiao1ji4	jiāojì	socialize; social intercourse; communication
// 交往	交往	jiao1wang3	jiāowǎng	to associate; to contact
// 浇	澆	jiao1	jiāo	to water; irrigate; to pour; to sprinkle
// 胶水	膠水	jiao1shui3	jiāoshuǐ	(watery) glue; gum
// 角度	角度	jiao3du4	jiǎodù	angle; point of view
// 狡猾	狡猾	jiao3hua2	jiǎohuá	crafty; cunning; sly
// 教材	教材	jiao4cai2	jiàocái	teaching materials
// 教练	教練	jiao4lian4	jiàoliàn	(athlete's) coach; sports coach; instructor
// 教训	教訓	jiao4xun	jiàoxun	lesson; teach someone or learn a lesson; a moral
// 阶段	階段	jie1duan4	jiēduàn	stage; phase
// 结实	結實	jie1shi	jiēshi	sturdy; (also -shí: bear fruit)
// 接触	接觸	jie1chu4	jiēchù	come into contact with
// 接待	接待	jie1dai4	jiēdài	receive (a visitor); admit (entry to)
// 接近	接近	jie1jin4	jiējìn	near; be close to
// 节省	節省	jie2sheng3	jiéshěng	save; use sparingly; frugal
// 结构	結構	jie2gou4	jiégòu	structure; composition
// 结合	結合	jie2he2	jiéhé	combine; to link; to bind
// 结论	結論	jie2lun4	jiélùn	conclusion; verdict
// 结账	結賬	jie2zhang4	jiézhàng	pay the bill; settle accounts
// 戒	戒	jie4	jiè	warn against; swear off
// 戒指	戒指	jie4zhi	jièzhi	(finger) ring
// 届	屆	jie4	jiè	arrive at; period; session; (mw for events; meetings; etc.)
// 借口	借口	jie4kou3	jièkǒu	excuse
// 金属	金屬	jin1shu3	jīnshǔ	metal
// 尽快	盡快	jin3kuai4	jǐnkuài	as quickly as possible
// 尽量	盡量	jin3liang4	jǐnliàng	as much as possible; to the best of one's ability (jìn-: eat or drink to one's fill)
// 紧急	緊急	jin3ji2	jǐnjí	urgent; pressing
// 谨慎	謹慎	jin3shen4	jǐnshèn	cautious; prudent
// 尽力	盡力	jin4 li4	jìn lì	do one's best; to strive as much as possible
// 进步	進步	jin4bu4	jìnbù	make progress; to advance
// 进口	進口	jin4 kou3	jìn kǒu	import; entrance; enter
// 近代	近代	jin4dai4	jìndài	modern times; latest generation
// 经典	經典	jing1dian3	jīngdiǎn	classics; scriptures
// 经商	經商	jing1 shang1	jīng shāng	trade; be in business; do commerce
// 经营	經營	jing1ying2	jīngyíng	engage in (a business activity, etc.); run/operate (a business)
// 精力	精力	jing1li4	jīnglì	energy; vigor
// 精神	精神	jing1shen	jīngshen	vigor; spirit; mind
// 酒吧	酒吧	jiu3ba1	jiǔbā	bar
// 救	救	jiu4	jiù	to save (life); to assist; to rescue
// 救护车	救護車	jiu4hu4che1	jiùhùchē	ambulance
// 舅舅	舅舅	jiu4jiu	jiùjiu	mother's brother; maternal uncle
// 居然	居然	ju1ran2	jūrán	unexpectedly; to one's surprise; go so far as to
// 桔子	桔子	ju2zi	júzi	tangerine
// 巨大	巨大	ju4da4	jùdà	immense; enormous; very large
// 具备	具備	ju4bei4	jùbèi	possess; be equipped with
// 具体	具體	ju4ti3	jùtǐ	concrete; definite; specific
// 俱乐部	俱樂部	ju4le4bu4	jùlèbù	club (group or organization)
// 据说	據說	ju4shuo1	jùshuō	it is said that; reportedly
// 捐	捐	juan1	juān	to contribute; to donate; to subsribe to; to abandon; to relinquish; contribution; tax
// 决赛	決賽	jue2sai4	juésài	finals (of a competition); final match
// 决心	決心	jue2xin1	juéxīn	determination; resolution
// 角色	角色	jue2se4	juésè	role; part
// 绝对	絕對	jue2dui4	juéduì	absolute; definite
// 军事	軍事	jun1shi4	jūnshì	military affairs; military matters
// 均匀	均勻	jun1yun2	jūnyún	even; well-distributed
// 卡车	卡車	ka3che1	kǎchē	truck
// 开发	開發	kai1fa1	kāifā	develop; to exploit (a resource)
// 开放	開放	kai1fang4	kāifàng	(of flowers) to bloom; open up; to be open-minded; lift a ban, restriction, etc.; release; liberalization; China's 1979 open policy
// 开幕式	開幕式	kai1mu4shi4	kāimùshì	opening ceremony
// 开水	開水	kai1shui3	kāishuǐ	boiled water; boil water
// 砍	砍	kan3	kǎn	to chop; cut down
// 看不起	看不起	kan4 bu qi3	kàn bu qǐ	look down upon; despise
// 看望	看望	kan4wang4	kànwàng	visit; call on; see
// 靠	靠	kao4	kào	depend on; lean on; near; to trust
// 颗	顆	ke1	kē	(mw for hearts and small, round things like seeds, grains, beans, etc.)
// 可见	可見	ke3jian4	kějiàn	it can clearly be seen that; clear
// 可靠	可靠	ke3kao4	kěkào	reliable
// 可怕	可怕	ke3pa4	kěpà	terrible; awful; frightful; scary
// 克	克	ke4	kè	gram; overcome; restrain
// 克服	克服	ke4fu2	kèfú	overcome (hardships, etc.); conquer
// 刻苦	刻苦	ke4ku3	kèkǔ	hardworking; assiduous
// 客观	客觀	ke4guan1	kèguān	objective; impartial; unbiased
// 课程	課程	ke4cheng2	kèchéng	course; curriculum; class
// 空间	空間	kong1jian1	kōngjiān	space
// 空闲	空閑	kong4xian2	kòngxián	leisure; free time; idle; unused
// 控制	控制	kong4zhi4	kòngzhì	to control
// 口味	口味	kou3wei4	kǒuwèi	a person's tastes or preferences
// 夸	誇	kua1	kuā	to boast; to praise; exaggerate
// 夸张	誇張	kua1zhang1	kuāzhāng	exaggerate; overstate; exaggerated; overstated; vaunted; hyperbole
// 会计	會計	kuai4ji4	kuàijì	accountant; accounting
// 宽	寬	kuan1	kuān	wide; broad; relaxed; lenient
// 昆虫	昆蟲	kun1chong2	kūnchóng	insect
// 扩大	擴大	kuo4da4	kuòdà	enlarge; expand
// 辣椒	辣椒	la4jiao1	làjiāo	hot pepper; chili
// 拦	攔	lan2	lán	to block; to cut off; hinder
// 烂	爛	lan4	làn	overcooked; rotten; soft; mushy
// 朗读	朗讀	lang3du2	lǎngdú	read aloud
// 劳动	勞動	lao2dong4	láodòng	work; toil; (physical) labor
// 劳驾	勞駕	lao2 jia4	láo jià	excuse me
// 老百姓	老百姓	lao3bai3xing4	lǎobǎixìng	ordinary people; the person on the street; civilians
// 老板	老板	lao3ban3	lǎobǎn	boss; proprietor; shopkeeper
// 老婆	老婆	lao3po2	lǎopó	(informal) wife
// 老实	老實	lao3shi	lǎoshi	honest; sincere; naive; simpleminded
// 老鼠	老鼠	lao3shu3	lǎoshǔ	rat; mouse
// 姥姥	姥姥	lao3lao	lǎolao	maternal grandmother
// 乐观	樂觀	le4guan1	lèguān	optimism; hopeful
// 雷	雷	lei2	léi	thunder
// 类型	類型	lei4xing2	lèixíng	type
// 冷淡	冷淡	leng3dan4	lěngdàn	cold; chill; indifferent; unconcerned
// 厘米	厘米	li2mi3	límǐ	centimeter
// 离婚	離婚	li2 hun1	lí hūn	to divorce; divorced from (one's spouse)
// 梨	梨	li2	lí	pear
// 理论	理論	li3lun4	lǐlùn	theory
// 理由	理由	li3you2	lǐyóu	a reason; grounds; argument
// 力量	力量	li4liang	lìliang	power; force; strength
// 立即	立即	li4ji2	lìjí	immediately
// 立刻	立刻	li4ke4	lìkè	immediately; at once; right away
// 利润	利潤	li4run4	lìrùn	profit
// 利息	利息	li4xi1	lìxī	interest (on a loan)
// 利益	利益	li4yi4	lìyì	benefit; (in sb.'s) interest
// 利用	利用	li4yong4	lìyòng	to use; to make use of; to exploit
// 连忙	連忙	lian2mang2	liánmáng	promptly; at once
// 连续	連續	lian2xu4	liánxù	continually; in a row; successively
// 联合	聯合	lian2he2	liánhé	alliance; combine; unite
// 恋爱	戀愛	lian4'ai4	liàn'ài	romantic love; be in love; love affair
// 良好	良好	liang2hao3	liánghǎo	good; favorable; well
// 粮食	糧食	liang2shi	liángshi	grain; food; cereals
// 亮	亮	liang4	liàng	bright; light; shiny
// 了不起	了不起	liao3buqi3	liǎobuqǐ	incredible; extraordinary; great; amazing
// 列车	列車	lie4che1	lièchē	train (railway term)
// 临时	臨時	lin2shi2	línshí	temporary; at the time; when the time comes
// 灵活	靈活	ling2huo2	línghuó	flexible; nimble; agile
// 铃	鈴	ling2	líng	bell
// 零件	零件	ling2jian4	língjiàn	spare parts; component
// 零食	零食	ling2shi2	língshí	snack
// 领导	領導	ling3dao3	lǐngdǎo	to lead; leader; leadership
// 领域	領域	ling3yu4	lǐngyù	domain; sphere; field; area
// 浏览	浏覽	liu2lan3	liúlǎn	browse; glance over; skim through
// 流传	流傳	liu2chuan2	liúchuán	to spread; circulate; hand down
// 流泪	流淚	liu2lei4	liúlèi	shed tears
// 龙	龍	long2	lóng	dragon (Kangxi radical 212)
// 漏	漏	lou4	lòu	to leak; to funnel; to let out
// 陆地	陸地	lu4di4	lùdì	land; dry land (as opposed to the sea)
// 陆续	陸續	lu4xu4	lùxù	in turn; successively; one after another
// 录取	錄取	lu4qu3	lùqǔ	recruit; enroll; matriculate
// 录音	錄音	lu4yin1	lùyīn	sound recording; to record
// 轮流	輪流	lun2liu2	lúnliú	to alternate; take turns; rotate
// 论文	論文	lun4wen2	lùnwén	thesis; paper; treatise
// 逻辑	邏輯	luo2ji	luóji	logic
// 落后	落後	luo4hou4	luòhòu	backward; to lag (in technology); to fall behind
// 骂	罵	ma4	mà	scold; curse; condemn; verbally abuse
// 麦克风	麥克風	mai4ke4feng1	màikèfēng	microphone
// 馒头	饅頭	man2tou	mántou	steamed bun/roll
// 满足	滿足	man3zu2	mǎnzú	satisfy; meet (the needs of)
// 毛病	毛病	mao2bing4	máobìng	fault; bad habit; shortcoming
// 矛盾	矛盾	mao2dun4	máodùn	contradiction; conflict
// 冒险	冒險	mao4xian3	màoxiǎn	take a risk; take chances
// 贸易	貿易	mao4yi4	màoyì	(commercial) trade
// 眉毛	眉毛	mei2mao	méimao	eyebrow
// 媒体	媒體	mei2ti3	méitǐ	(news) media; medium
// 煤炭	煤炭	mei2tan4	méitàn	coal
// 美术	美術	mei3shu4	měishù	the fine arts; art
// 魅力	魅力	mei4li4	mèilì	charm; glamour; enchantment
// 梦想	夢想	meng4xiang3	mèngxiǎng	dream of; wishful thinking
// 秘密	秘密	mi4mi4	mìmì	a secret; confidential
// 秘书	秘書	mi4shu	mìshu	secretary
// 密切	密切	mi4qie4	mìqiè	close; familiar; intimate
// 蜜蜂	蜜蜂	mi4feng1	mìfēng	bee; honeybee
// 面对	面對	mian4dui4	miànduì	to face; confront
// 面积	面積	mian4ji1	miànjī	(surface) area
// 面临	面臨	mian4lin2	miànlín	be faced with; be up against
// 苗条	苗條	miao2tiao	miáotiao	slim; slender
// 描写	描寫	miao2xie3	miáoxiě	to describe; to depict; to portray
// 敏感	敏感	ming3an3	mǐngǎn	sensitive; susceptible
// 名牌	名牌	ming2pai2	míngpái	famous brand; name brand
// 名片	名片	ming2pian4	míngpiàn	business card
// 名胜古迹	名勝古迹	ming2sheng4gu3ji4	míngshènggǔjì	famous scenic spots and ancient historic sites
// 明确	明確	ming2que4	míngquè	clear-cut; clearly; clarify
// 明显	明顯	ming2xian3	míngxiǎn	clear; obvious
// 明星	明星	ming2xing1	míngxīng	(movie, etc.) star; celebrity
// 命令	命令	ming4ling4	mìnglìng	an order; a command
// 命运	命運	ming4yun4	mìngyùn	fate; destiny
// 摸	摸	mo1	mō	to touch; to stroke; fish out; feel out
// 模仿	模仿	mo2fang3	mófǎng	imitate; to copy
// 模糊	模糊	mo2hu	móhu	vague; indistinct; fuzzy; foggy
// 模特	模特	mo2te4	mótè	(fashion) model
// 摩托车	摩托車	mo2tuo1che1	mótuōchē	motorcycle; motorbike
// 陌生	陌生	mo4sheng1	mòshēng	strange; unfamiliar
// 某	某	mou3	mǒu	a certain; some
// 木头	木頭	mu4tou	mùtou	wood; log; timber
// 目标	目標	mu4biao1	mùbiāo	target; goal; objective
// 目录	目錄	mu4lu4	mùlù	catalog; table of contents; directory (on computer hard drive)
// 目前	目前	mu4qian2	mùqián	at present; now; for the moment
// 哪怕	哪怕	na3pa4	nǎpà	even (if/though); no matter how
// 难怪	難怪	nang2uai4	nánguài	no wonder
// 难免	難免	nan2mian3	nánmiǎn	hard to avoid; difficult to escape from
// 脑袋	腦袋	nao3dai	nǎodai	head; mental capability; brains
// 内部	內部	nei4bu4	nèibù	internal; interior; inside (part, section)
// 内科	內科	nei4ke1	nèikē	internal medicine
// 嫩	嫩	nen4	nèn	tender; inexperienced
// 能干	能幹	neng2gan4	nénggàn	capable; competent
// 能源	能源	neng2yuan2	néngyuán	energy resources; power source
// 嗯	嗯	en1	ēn	(interjection expressing what?, huh? hmm? why? ok, etc.)
// 年代	年代	nian2dai4	niándài	decade; era
// 年纪	年紀	nian2ji4	niánjì	age
// 念	念	nian4	niàn	read aloud; to study; to miss or think of somebody
// 宁可	甯可	ning4ke3	nìngkě	would rather; it is the lesser of two evils to
// 牛仔裤	牛仔褲	niu2zai3ku4	niúzǎikù	jeans; cowboy pants
// 农村	農村	nong2cun1	nóngcūn	rural area; countryside
// 农民	農民	nong2min2	nóngmín	peasant
// 农业	農業	nong2ye4	nóngyè	agriculture; farming
// 浓	濃	nong2	nóng	concentrated; dense
// 女士	女士	nü3shi4	nǚshì	lady; madam
// 欧洲	歐洲	Ōuzhou1	Ōuzhōu	Europe
// 偶然	偶然	ou3ran2	ǒurán	accidentally; occasional; fortuitous
// 拍	拍	pai1	pāi	to clap; to pat; to shoot (pictures, a film); send (a telegram)
// 派	派	pai4	pài	dispatch; (mw for political groups; schools of thought; etc.)
// 盼望	盼望	pan4wang4	pànwàng	to hope for; look forward to
// 培训	培訓	pei2xun4	péixùn	cultivate; train
// 培养	培養	pei2yang3	péiyǎng	to train; cultivate; bring up
// 赔偿	賠償	pei2chang2	péicháng	compensate; pay for somebody else's loss
// 佩服	佩服	pei4fu	pèifu	admire; to respect
// 配合	配合	pei4he2	pèihé	be harmoniously combined or arranged; matching; fitting in with; compatible with; to correspond; to fit; to conform to; rapport; to coordinate with; to act in concern with; to cooperate; to become man and wife; to combine parts of a machine
// 盆	盆	pen2	pén	basin; (flower) pot
// 碰	碰	peng4	pèng	to touch; to bump; to encounter
// 批	批	pi1	pī	criticize; to comment; wholesale; (mw for batches, lots, etc.)
// 批准	批准	pi1zhun3	pīzhǔn	approve; ratify
// 披	披	pi1	pī	drape over one's shoulders; split open; open
// 疲劳	疲勞	pi2lao2	píláo	fatigue; wearily; weariness; tired
// 匹	匹	pi3	pǐ	ordinary person; (mw for horses, bolt of cloth)
// 片	片	pian4, pian1	piàn, piān	(mw for pieces of things); a slice; a flake (Kangxi radical 91) | film; photo
// 片面	片面	pian4mian4	piànmiàn	one-sided; unilateral
// 飘	飄	piao1	piāo	to float; flutter
// 拼音	拼音	pin1yin1	pīnyīn	pinyin; phonetic writing
// 频道	頻道	pin2dao4	píndào	frequency; (television) channel
// 平	平	ping2	píng	flat; level; equal; ordinary
// 平安	平安	ping2'an1	píng'ān	safe and sound
// 平常	平常	ping2chang2	píngcháng	ordinary; usually; common
// 平等	平等	ping2deng3	píngděng	equal; equality
// 平方	平方	ping2fang1	píngfāng	square (as in square foot, square mile, etc.)
// 平衡	平衡	ping2heng2	pínghéng	balance; balanced; equilibrium
// 平静	平靜	ping2jing4	píngjìng	calm; peaceful; tranquil; serene
// 平均	平均	ping2jun1	píngjūn	average; to share equally
// 评价	評價	ping2jia4	píngjià	to evaluate
// 凭	憑	ping2	píng	lean against; evidence; proof; no matter (what/how/etc.)
// 迫切	迫切	po4qie4	pòqiè	urgent; pressing
// 破产	破産	po4 chan3	pò chǎn	go bankrupt; go broke; bankruptcy
// 破坏	破壞	po4huai4	pòhuài	destroy; destruction; to wreck; to break
// 期待	期待	qi1dai4	qīdài	look forward to; await; expectation
// 期间	期間	qi1jian1	qījiān	period of time; time
// 其余	其余	qi2yu2	qíyú	the others; the rest; remaining
// 奇迹	奇迹	qi2ji4	qíjì	miracle; miraculous; marvel
// 企业	企業	qi3ye4	qǐyè	company; business; firm
// 启发	啓發	qi3fa1	qǐfā	enlighten; inspire
// 气氛	氣氛	qi4fen1	qìfēn	atmosphere; mood; ambience
// 汽油	汽油	qi4you2	qìyóu	gasoline; gas; petrol
// 谦虚	謙虛	qian1xu1	qiānxū	modest
// 签	簽	qian1	qiān	bamboo used for drawing lots; toothpick; to sign (one's name)
// 前途	前途	qian2tu2	qiántú	future; prospects; outlook (for the future)
// 浅	淺	qian3	qiǎn	shallow; simple; superficial; light (of colors)
// 欠	欠	qian4	qiàn	yawn; to lack; owe (Kangxi radical 76)
// 枪	槍	qiang1	qiāng	gun; spear
// 强调	強調	qiang2diao4	qiángdiào	emphasize; to stress
// 强烈	強烈	qiang2lie4	qiángliè	intense; strong; violent
// 墙	牆	qiang2	qiáng	wall
// 抢	搶	qiang3, qiang1	qiǎng, qiāng	fight over; vie for; grab; rush | bump against
// 悄悄	悄悄	qiao1qiao1	qiāoqiāo	quietly
// 瞧	瞧	qiao2	qiáo	look at; see (colloquial)
// 巧妙	巧妙	qiao3miao4	qiǎomiào	ingenious; clever
// 切	切	qie1, qie4	qiē, qiè	to cut; to chop | correspond to; absolutely; ardently
// 亲爱	親愛	qin1'ai4	qīn'ài	beloved; Dear ... (a way of starting a letter lovers, intimate friends or close relatives)
// 亲切	親切	qin1qie4	qīnqiè	kind; amiable; cordial
// 亲自	親自	qin1zi4	qīnzì	personally
// 勤奋	勤奮	qin2fen4	qínfèn	hardworking; diligent; industrious
// 青	青	qing1	qīng	blue; green; young (Kangxi radical 174); Qinghai province (abbr.)
// 青春	青春	qing1chun1	qīngchūn	youth; youthfulness; fresh spring
// 青少年	青少年	qing1shao4nian2	qīngshàonián	teenager
// 轻视	輕視	qing1shi4	qīngshì	contempt; to scorn; scornful
// 轻易	輕易	qing1yi4	qīngyì	easily; lightly; rashly
// 清淡	清淡	qing1dan4	qīngdàn	light (of food, not greasy or strongly flavored) ; insipid;  slack (sales)
// 情景	情景	qing2jing3	qíngjǐng	scene; sight; circumstances
// 情绪	情緒	qing2xu4	qíngxù	emotion; sentiment; mood; morale
// 请求	請求	qing3qiu2	qǐngqiú	to request; ask
// 庆祝	慶祝	qing4zhu4	qìngzhù	celebrate
// 球迷	球迷	qiu2mi2	qiúmí	fan (of ball games: basketball, football, etc.)
// 趋势	趨勢	qu1shi4	qūshì	trend; tendency
// 取消	取消	qu3xiao1	qǔxiāo	cancel; cancellation; abolish
// 娶	娶	qu3	qǔ	marry (a wife); take a wife
// 去世	去世	qu4shi4	qùshì	pass away; die
// 圈	圈	quan1	quān	circle; ring; (mw for loops, orbits, etc.)
// 权力	權力	quan2li4	quánlì	power; authority
// 权利	權利	quan2li4	quánlì	right; privilege
// 全面	全面	quan2mian4	quánmiàn	all-around; comprehensive; fully
// 劝	勸	quan4	quàn	advise; to urge; persuade
// 缺乏	缺乏	que1fa2	quēfá	shortage; to lack; be short of
// 确定	確定	que4ding4	quèdìng	definite; certain; fixed; determine
// 确认	確認	quer4en4	quèrèn	confirm; confirmation; verify
// 群	群	qun2	qún	crowd; group; (mw for groups, flocks, or swarms)
// 燃烧	燃燒	ran2shao1	ránshāo	combustion; burn; kindle
// 绕	繞	rao4	rào	to wind; to coil; move round
// 热爱	熱愛	re4'ai4	rè'ài	love ardently; adore; passion
// 热烈	熱烈	re4lie4	rèliè	warm; enthusiastic
// 热心	熱心	re4xin1	rèxīn	enthusiastic; zealous; warmhearted
// 人才	人才	ren2cai2	réncái	talent; talented person
// 人口	人口	ren2kou3	rénkǒu	population; the populace
// 人类	人類	ren2lei4	rénlèi	humanity; human race; mankind
// 人民币	人民幣	ren2min2bi4	rénmínbì	(currency) renminbi (RMB)
// 人生	人生	ren2sheng1	rénshēng	human life
// 人事	人事	ren2shi4	rénshì	personnel
// 人物	人物	ren2wu4	rénwù	figure; personage; character (in a play, story, etc.)
// 人员	人員	ren2yuan2	rényuán	staff; crew; personnel
// 忍不住	忍不住	ren3 bu zhu4	rěn bu zhù	cannot help but; unable to bear
// 日常	日常	ri4chang2	rìcháng	daily; everyday
// 日程	日程	ri4cheng2	rìchéng	schedule; itinerary
// 日历	日曆	ri4li4	rìlì	calendar
// 日期	日期	ri4qi1	rìqī	date
// 日用品	日用品	ri4yong4pin3	rìyòngpǐn	daily necessities
// 日子	日子	ri4zi	rìzi	days; date; time; life
// 如何	如何	ru2he2	rúhé	how; what; what way
// 如今	如今	ru2jin1	rújīn	nowadays
// 软	軟	ruan3	ruǎn	soft
// 软件	軟件	ruan3jian4	ruǎnjiàn	(computer) software
// 弱	弱	ruo4	ruò	weak; feeble; young
// 洒	灑	sa3	sǎ	to sprinkle; to spray; to spill
// 嗓子	嗓子	sang3zi	sǎngzi	throat; voice
// 色彩	色彩	se4cai3	sècǎi	tint; color; hue
// 杀	殺	sha1	shā	to kill; to murder
// 沙漠	沙漠	sha1mo4	shāmò	desert
// 沙滩	沙灘	sha1tan1	shātān	sand bar; sand beach
// 傻	傻	sha3	shǎ	foolish; fool
// 晒	曬	shai4	shài	to dry in the sun; shine upon; to sun; bask
// 删除	刪除	shan1chu2	shānchú	to delete
// 闪电	閃電	shan3dian4	shǎndiàn	lightning
// 扇子	扇子	shan4zi	shànzi	fan (for waving)
// 善良	善良	shan4liang2	shànliáng	good and honest; kind-hearted
// 善于	善于	shan4yu2	shànyú	be good at; excel at
// 伤害	傷害	shang1hai4	shānghài	injure; to harm; wound
// 商品	商品	shang1pin3	shāngpǐn	goods; commodity; merchandise
// 商务	商務	shang1wu4	shāngwù	business; commercial affairs
// 商业	商業	shang1ye4	shāngyè	business; commerce; trade
// 上当	上當	shang4 dang4	shàng dàng	be fooled; be duped; be taken in
// 蛇	蛇	she2	shé	snake; serpent
// 舍不得	舍不得	she3bude	shěbude	hate to part with; begrudge doing something
// 设备	設備	she4bei4	shèbèi	equipment; facilities; installations
// 设计	設計	she4ji4	shèjì	plan; design
// 设施	設施	she4shi1	shèshī	facilities; installation
// 射击	射擊	she4ji1	shèjī	to shoot; to fire (a gun)
// 摄影	攝影	she4 ying3	shè yǐng	take a photograph; shoot a film
// 伸	伸	shen1	shēn	to stretch; extend
// 身材	身材	shen1cai2	shēncái	stature; figure; build
// 身份	身份	shen1fen4	shēnfèn	identity; status; dignity
// 深刻	深刻	shen1ke4	shēnkè	profound; deep
// 神话	神話	shen2hua4	shénhuà	mythology; fairy tale
// 神秘	神秘	shen2mi4	shénmì	mysterious; mystical
// 升	升	sheng1	shēng	rise; hoist; promote; liter
// 生产	生産	sheng1chan3	shēngchǎn	to produce; manufacture; give birth to a child
// 生动	生動	sheng1dong4	shēngdòng	vivid; lively
// 生长	生長	sheng1zhang3	shēngzhǎng	grow; grow up
// 声调	聲調	sheng1diao4	shēngdiào	tone; note
// 绳子	繩子	sheng2zi	shéngzi	cord; string; rope
// 省略	省略	sheng3lüe4	shěnglüè	to omit; to leave out; abbreviate
// 胜利	勝利	sheng4li4	shènglì	victory; triumph
// 失眠	失眠	shi1mian2	shīmián	lose sleep; insomnia
// 失去	失去	shi1qu4	shīqù	to lose (time, an opportunity, work, etc.)
// 失业	失業	shi1 ye4	shī yè	lose one's job; unemployment
// 诗	詩	shi1	shī	poem; poetry; verse
// 狮子	獅子	shi1zi	shīzi	lion
// 湿润	濕潤	shi1run4	shīrùn	moist; humid
// 石头	石頭	shi2tou	shítou	stone; rock
// 时差	時差	shi2cha1	shíchā	jetlag; time difference
// 时代	時代	shi2dai4	shídài	age; era; period
// 时刻	時刻	shi2ke4	shíkè	moment; constantly
// 时髦	時髦	shi2mao2	shímáo	fashionable
// 时期	時期	shi2qi1	shíqī	period in time or history; period; time
// 时尚	時尚	shi2shang4	shíshàng	fashion; fad
// 实话	實話	shi2hua4	shíhuà	truth
// 实践	實踐	shi2jian4	shíjiàn	practice; put into practice; carry out
// 实习	實習	shi2xi2	shíxí	to practice; field work; work as an intern
// 实现	實現	shi2xian4	shíxiàn	achieve; to implement
// 实验	實驗	shi2yan4	shíyàn	experiment; test
// 实用	實用	shi2yong4	shíyòng	practical; pragmatic; functional
// 食物	食物	shi2wu4	shíwù	food
// 使劲儿	使勁兒	shi3jin4r	shǐjìnr	exert all one's strength
// 始终	始終	shi3zhong1	shǐzhōng	from beginning to end; all along
// 士兵	士兵	shi4bing1	shìbīng	soldier
// 市场	市場	shi4chang3	shìchǎng	market
// 似的	似的	shi4de	shìde	seems as if; rather like
// 事实	事實	shi4shi2	shìshí	fact; in fact
// 事物	事物	shi4wu4	shìwù	thing; object
// 事先	事先	shi4xian1	shìxiān	in advance; beforehand; prior
// 试卷	試卷	shi4juan4	shìjuàn	exam paper; test paper
// 收获	收獲	shou1huo4	shōuhuò	harvest; acquisition; gain
// 收据	收據	shou1ju4	shōujù	receipt
// 手工	手工	shou3gong1	shǒugōng	hand-made; handicraft; manual
// 手术	手術	shou3shu4	shǒushù	surgery; operation
// 手套	手套	shou3tao4	shǒutào	glove; mitten
// 手续	手續	shou3xu4	shǒuxù	formalities; procedure
// 手指	手指	shou3zhi3	shǒuzhǐ	finger
// 首	首	shou3	shǒu	head; chief; first; (mw for poems and songs) (Kangxi radical 185)
// 寿命	壽命	shou4ming4	shòumìng	life span; life expectancy
// 受伤	受傷	shou4 shang1	shòu shāng	sustain injuries (in an accident, etc.); be injured
// 书架	書架	shu1jia4	shūjià	bookshelf
// 梳子	梳子	shu1zi	shūzi	comb; hairbrush
// 舒适	舒適	shu1shi4	shūshì	cozy; comfortable; snug
// 输入	輸入	shu1ru4	shūrù	input; enter; import
// 蔬菜	蔬菜	shu1cai4	shūcài	vegetables; produce
// 熟练	熟練	shu2lian4	shúliàn	practiced; proficient; skilled
// 属于	屬于	shu3yu2	shǔyú	belong to; be part of
// 鼠标	鼠標	shu3 biao1	shǔ biāo	mouse (computer)
// 数	數	shu4, shu3	shù, shǔ	number | to count; to rank
// 数据	數據	shu4ju4	shùjù	data; numbers; digital
// 数码	數碼	shu4ma3	shùmǎ	numeral; number; amount; digital
// 摔倒	摔倒	shuai1dao3	shuāidǎo	fall down; slip and fall; tumble; trip
// 甩	甩	shuai3	shuǎi	to throw; to fling; to swing; cast off
// 双方	雙方	shuang1fang1	shuāngfāng	bilateral; both sides; both parties involved
// 税	稅	shui4	shuì	tax
// 说不定	說不定	shuo1buding4	shuōbudìng	can't say for sure; perhaps; maybe
// 说服	說服	shuo1 fu2	shuō fú	persuade; convince
// 丝绸	絲綢	si1chou2	sīchóu	silk
// 丝毫	絲毫	si1hao2	sīháo	the slightest amount or degree; a very little bit
// 私人	私人	si1ren2	sīrén	private (citizen); personal; individual
// 思考	思考	si1kao3	sīkǎo	reflect on; ponder; consider
// 思想	思想	si1xiang3	sīxiǎng	thought; thinking; idea; ideology
// 撕	撕	si1	sī	to tear (something)
// 似乎	似乎	si4hu1	sìhū	it seems; as if; seemingly
// 搜索	搜索	sou1suo3	sōusuǒ	search; look for something; scour
// 宿舍	宿舍	su4she4	sùshè	dormitory; living quarters; hostel
// 随身	隨身	sui2shen1	suíshēn	carry on one's person; bring with one
// 随时	隨時	sui2shi2	suíshí	at any time; whenever necessary
// 随手	隨手	sui2shou3	suíshǒu	convenient; without extra trouble
// 碎	碎	sui4	suì	broken; break into pieces
// 损失	損失	sun3shi1	sǔnshī	loss (financial); lose
// 缩短	縮短	suo1duan3	suōduǎn	shorten; cut down; curtail
// 所	所	suo3	suǒ	place; that which; (mw for houses, buildings)
// 锁	鎖	suo3	suǒ	lock
// 台阶	台階	tai2jie1	táijiē	flight of steps; sidestep; fig. way out of an embarrassing situation
// 太极拳	太極拳	tai4ji2quan2	tàijíquán	Tai chi, a Chinese martial art
// 太太	太太	tai4tai	tàitai	wife; married woman; Madame; Mrs.
// 谈判	談判	tan2pan4	tánpàn	negotiate; negotiation; conference
// 坦率	坦率	tan3shuai4	tǎnshuài	frank
// 烫	燙	tang4	tàng	to scald; to burn; scalding hot; to iron
// 逃	逃	tao2	táo	to escape; run away; flee
// 逃避	逃避	tao2bi4	táobì	to escape; evade; shirk
// 桃	桃	tao2	táo	peach
// 淘气	淘氣	tao2qi4	táoqì	naughty; bad
// 讨价还价	討價還價	tao3 jia4 huan2 jia4	tǎo jià huán jià	bargaining; haggling over price
// 套	套	tao4	tào	cover; (mw for sets of things); tie together
// 特色	特色	te4se4	tèsè	characteristic; distinguishing feature
// 特殊	特殊	te4shu1	tèshū	special; particular; extraordinary; unusual
// 特征	特征	te4zheng1	tèzhēng	characteristics; distinctive features; trait
// 疼爱	疼愛	teng2 ai4	téng ài	love dearly; be very fond of
// 提倡	提倡	ti2chang4	tíchàng	promote; to advocate; proposal
// 提纲	提綱	ti2gang1	tígāng	outline; the key point
// 提问	提問	ti2wen4	tíwèn	put questions to; to quiz
// 题目	題目	ti2mu4	tímù	subject; title; topic
// 体会	體會	ti3hui4	tǐhuì	know from experience; learn through experience; realize; understanding; experience
// 体贴	體貼	ti3tie1	tǐtiē	show consideration for; thoughtful
// 体现	體現	ti3xian4	tǐxiàn	embody; incarnate; reflect; to manifest
// 体验	體驗	ti3yan4	tǐyàn	experience for oneself; to personally experience (usually a kind of life)
// 天空	天空	tian1kong1	tiānkōng	sky; space; heavens
// 天真	天真	tian1zhen1	tiānzhēn	naïve; innocent; artless
// 调皮	調皮	tiao2pi2	tiáopí	naughty; mischievous; unruly
// 调整	調整	tiao2zheng3	tiáozhěng	adjustment; revision
// 挑战	挑戰	tiao3zhan4	tiǎozhàn	challenge
// 通常	通常	tong1chang2	tōngcháng	regular; usual; normal; ordinary
// 统一	統一	tong3yi1	tǒngyī	unify; unite; integrate; universal
// 痛苦	痛苦	tong4ku3	tòngkǔ	pain; suffering; agony
// 痛快	痛快	tong4kuai	tòngkuai	joyful; delighted; very happy; jolly
// 偷	偷	tou1	tōu	steal; pilfer
// 投入	投入	tou2ru4	tóurù	put into operation; throw into; to invest
// 投资	投資	tou2 zi1	tóu zī	investment
// 透明	透明	tou4ming2	tòumíng	transparent; open (non-secretive)
// 突出	突出	tu1chu1	tūchū	prominent; stand out; give prominence to
// 土地	土地	tu3di4	tǔdì	land; territory; soil
// 土豆	土豆	tu3dou4	tǔdòu	potato
// 吐	吐	tu3, tu4	tǔ, tù	to spit | to vomit; throw up
// 兔子	兔子	tu4zi	tùzi	rabbit; hare
// 团	團	tuan2	tuán	round; ball; group; unite; dumpling; (mw for ball-like things)
// 推辞	推辭	tui1ci2	tuīcí	to decline; turn down
// 推广	推廣	tui1guang3	tuīguǎng	popularize; to spread
// 推荐	推薦	tui1jian4	tuījiàn	recommend; recommendation
// 退	退	tui4	tuì	to retreat; decline; withdraw
// 退步	退步	tui4bu4	tuìbù	to degenerate; to regress
// 退休	退休	tui4xiu1	tuìxiū	retirement (from work); retire
// 歪	歪	wai1	wāi	askew; crooked; devious; recline to take a rest (colloquial)
// 外公	外公	wai4gong1	wàigōng	maternal grandfather
// 外交	外交	wai4jiao1	wàijiāo	diplomacy; foreign affairs
// 完美	完美	wan2mei3	wánměi	perfect
// 完善	完善	wan2shan4	wánshàn	perfect; make perfect; improve
// 完整	完整	wan2zheng3	wánzhěng	complete; intact
// 玩具	玩具	wan2ju4	wánjù	plaything; toy
// 万一	萬一	wan4yi1	wànyī	just in case; if by any chance
// 王子	王子	wang2zi3	wángzǐ	prince; son of a king
// 网络	網絡	wang3luo4	wǎngluò	network
// 往返	往返	wang3fan3	wǎngfǎn	go back and forth; go to and fro
// 危害	危害	wei1hai4	wēihài	endanger; jeopardize; to harm
// 威胁	威脅	wei1xie2	wēixié	threaten; to menace
// 微笑	微笑	wei1xiao4	wēixiào	smile
// 违反	違反	wei2fan3	wéifǎn	violate (a law)
// 围巾	圍巾	wei2jin1	wéijīn	scarf; shawl
// 围绕	圍繞	wei2rao4	wéirào	revolve around; center on (an issue)
// 唯一	唯一	wei2yi1	wéiyī	only; sole
// 维修	維修	wei2xiu1	wéixiū	maintain (of equipment); to mend; repair
// 伟大	偉大	wei3da4	wěidà	great; mighty; large
// 尾巴	尾巴	wei3ba	wěiba	tail
// 委屈	委屈	wei3qu	wěiqu	feel wronged; nurse a grievance
// 未必	未必	wei4bi4	wèibì	not necessarily; need not
// 未来	未來	wei4lai2	wèilái	future
// 位于	位于	wei4yu2	wèiyú	be located at
// 位置	位置	wei4zhi	wèizhi	position; place; seat
// 胃	胃	wei4	wèi	stomach
// 胃口	胃口	wei4kou3	wèikǒu	appetite
// 温暖	溫暖	wen1nuan3	wēnnuǎn	warm
// 温柔	溫柔	wen1rou2	wēnróu	gentle and soft; tender; gentle
// 文件	文件	wen2jian4	wénjiàn	document; file
// 文具	文具	wen2ju4	wénjù	stationery; writing supplies
// 文明	文明	wen2ming2	wénmíng	civilization; civilized; culture
// 文学	文學	wen2xue2	wénxué	literature
// 文字	文字	wen2zi4	wénzì	characters; script; writing
// 闻	聞	wen2	wén	hear; to smell; news; reputation
// 吻	吻	wen3	wěn	kiss; lips
// 稳定	穩定	wen3ding4	wěndìng	stable; steady
// 问候	問候	wen4hou4	wènhòu	send a greeting; send one's regards to
// 卧室	臥室	wo4shi4	wòshì	bedroom
// 握手	握手	wo4 shou3	wò shǒu	to shake hands
// 屋子	屋子	wu1zi	wūzi	room; house
// 无奈	無奈	wun2ai4	wúnài	can't help but; have no choice
// 无数	無數	wu2shu4	wúshù	countless; innumerable
// 无所谓	無所謂	wu2suo3wei4	wúsuǒwèi	doesn't matter; be indifferent
// 武术	武術	wu3shu4	wǔshù	martial arts
// 勿	勿	wu4	wù	not; do not
// 物理	物理	wu4li3	wùlǐ	physics; physical
// 物质	物質	wu4zhi4	wùzhì	matter; substance; material
// 雾	霧	wu4	wù	fog; mist
// 吸取	吸取	xi1qu3	xīqǔ	absorb; assimilate
// 吸收	吸收	xi1shou1	xīshōu	absorb; ingest
// 戏剧	戲劇	xi4ju4	xìjù	drama; play; theater
// 系	系	xi4, ji4	xì, jì	be; relate to; system; fasten; department; faculty; connect | to tie
// 系统	系統	xi4tong3	xìtǒng	system
// 细节	細節	xi4jie2	xìjié	details; particulars
// 瞎	瞎	xia1	xiā	blind
// 下载	下載	xia4zai3	xiàzǎi	to download
// 吓	嚇	xia4	xià	frighten; to scare; intimidate
// 夏令营	夏令營	xia4ling4ying2	xiàlìngyíng	summer camp
// 鲜艳	鮮豔	xian1yan4	xiānyàn	bright-colored
// 显得	顯得	xian3de	xiǎnde	appear; seem; to look
// 显然	顯然	xian3ran2	xiǎnrán	clear; evidently; obviously
// 显示	顯示	xian3shi4	xiǎnshì	display, illustrate, to show
// 县	縣	xian4	xiàn	county; district
// 现代	現代	xian4dai4	xiàndài	modern times; modern age
// 现实	現實	xian4shi2	xiànshí	reality; actuality; practical
// 现象	現象	xian4xiang4	xiànxiàng	appearance; phenomenon
// 限制	限制	xian4zhi4	xiànzhì	restrictions; to limit; to bound
// 相处	相處	xiang1chu3	xiāngchǔ	get along; interact
// 相当	相當	xiang1dang1	xiāngdāng	equivalent to; appropriate; considerably; quite
// 相对	相對	xiang1dui4	xiāngduì	opposite; relatively; to resist
// 相关	相關	xiang1guan1	xiāngguān	correlation; interrelated; dependence
// 相似	相似	xiang1si4	xiāngsì	similar; resemble; like
// 香肠	香腸	xiang1chang2	xiāngcháng	sausage
// 享受	享受	xiang3shou4	xiǎngshòu	enjoy
// 想念	想念	xiang3nian4	xiǎngniàn	to miss; remember with longing; long to see again
// 想象	想象	xiang3xiang4	xiǎngxiàng	imagine; visualize
// 项	項	xiang4	xiàng	nape (of the neck); sum (of money); mw item
// 项链	項鏈	xiang4lian4	xiàngliàn	necklace
// 项目	項目	xiang4mu4	xiàngmù	program; item; project
// 象棋	象棋	xiang4qi2	xiàngqí	chess; Chinese chess
// 象征	象征	xiang4zheng1	xiàngzhēng	symbol; symbolize; signify
// 消费	消費	xiao1fei4	xiāofèi	consumption; spending
// 消化	消化	xiao1hua4	xiāohuà	to digest
// 消极	消極	xiao1ji2	xiāojí	passive; negative; demoralized
// 消失	消失	xiao1shi1	xiāoshī	disappear; fade away; dissolve
// 销售	銷售	xiao1shou4	xiāoshòu	to sell; to market; sales
// 小麦	小麥	xiao3mai4	xiǎomài	wheat
// 小气	小氣	xiao3qi4	xiǎoqì	stingy; petty
// 孝顺	孝順	xiao4shun4	xiàoshùn	filial piety
// 效率	效率	xiao4lü4	xiàolǜ	efficiency
// 歇	歇	xie1	xiē	to rest; to go to bed; to take a break
// 斜	斜	xie2	xié	slanting; tilted
// 写作	寫作	xie3zuo4	xiězuò	writing; composition; written works
// 血	血	xue4	xuè	blood (Kangxi radical 143)
// 心理	心理	xin1li3	xīnlǐ	psychology; psychological; mental
// 心脏	心髒	xin1zang4	xīnzàng	heart
// 欣赏	欣賞	xin1shang3	xīnshǎng	appreciate; enjoy; admire
// 信号	信號	xin4hao4	xìnhào	signal
// 信任	信任	xin4ren4	xìnrèn	to trust; have confidence in
// 行动	行動	xing2dong4	xíngdòng	to move; get around; action
// 行人	行人	xing2ren2	xíngrén	pedestrian
// 行为	行爲	xing2wei2	xíngwéi	action; behavior; conduct
// 形成	形成	xing2cheng2	xíngchéng	take shape; form
// 形容	形容	xing2rong2	xíngróng	describe; appearance; look
// 形式	形式	xing2shi4	xíngshì	form; shape; situation
// 形势	形勢	xing2shi4	xíngshì	circumstances; situation; terrain
// 形象	形象	xing2xiang4	xíngxiàng	image; form; figure
// 形状	形狀	xing2zhuang4	xíngzhuàng	form; figure; shape
// 幸亏	幸虧	xing4kui1	xìngkuī	fortunately; luckily
// 幸运	幸運	xing4yun4	xìngyùn	luck; fortune
// 性质	性質	xing4zhi4	xìngzhì	nature; characteristic; quality
// 兄弟	兄弟	xiong1di4	xiōngdì	brothers; younger brother; brethren
// 胸	胸	xiong1	xiōng	chest; bosom; heart
// 休闲	休閑	xiu1xian2	xiūxián	recreation; leisure
// 修改	修改	xiu1gai3	xiūgǎi	amend; modify; revise; alter
// 虚心	虛心	xu1xin1	xūxīn	modest; open-minded
// 叙述	敘述	xu4shu4	xùshù	retell; narrate
// 宣布	宣布	xuan1bu4	xuānbù	announce; declare; proclaim
// 宣传	宣傳	xuan1chuan2	xuānchuán	propaganda; to propagate; to give publicity to
// 学历	學曆	xue2li4	xuélì	educational background; school record
// 学术	學術	xue2shu4	xuéshù	learning; science; academic
// 学问	學問	xue2wen	xuéwen	learning; knowledge
// 寻找	尋找	xun2zhao3	xúnzhǎo	seek; look for; quest
// 询问	詢問	xun2wen4	xúnwèn	inquire about
// 训练	訓練	xun4lian4	xùnliàn	to train; to drill; to exercise; training
// 迅速	迅速	xun4su4	xùnsù	fast; quick; rapid
// 押金	押金	ya1jin1	yājīn	security deposit; down payment
// 牙齿	牙齒	ya2chi3	yáchǐ	tooth
// 延长	延長	yan2chang2	yáncháng	extend; prolong; lengthen
// 严肃	嚴肅	yan2su4	yánsù	solemn; serious; earnest
// 演讲	演講	yan3jiang3	yǎnjiǎng	give a lecture; make a speech
// 宴会	宴會	yan4hui4	yànhuì	banquet; feast; dinner party
// 阳台	陽台	yang2tai2	yángtái	balcony
// 痒	癢	yang3	yǎng	to itch; itchy
// 样式	樣式	yang4shi4	yàngshì	type; style; form
// 腰	腰	yao1	yāo	waist; lower back; pocket
// 摇	搖	yao2	yáo	to shake; to rock
// 咬	咬	yao3	yǎo	to bite; to nip
// 要不	要不	yao4bu4	yàobù	otherwise; or else; how about
// 业务	業務	ye4wu4	yèwù	business; profession
// 业余	業余	ye4yu2	yèyú	spare time; amateur
// 夜	夜	ye4	yè	night; darkness
// 一辈子	一輩子	yi2bei4zi	yíbèizi	(for) a lifetime; all one's life
// 一旦	一旦	yi2dan4	yídàn	in case (something happens); once (sth. has happened ... then); in one day
// 一律	一律	yi2lü4	yílǜ	same; uniformly; all; without exception
// 一再	一再	yi2zai4	yízài	repeatedly; again and again
// 一致	一致	yi2zhi4	yízhì	unanimous; identical (views or opinions); consistent
// 依然	依然	yi1ran2	yīrán	still; as before
// 移动	移動	yi2dong4	yídòng	to move
// 移民	移民	yi2min2	yímín	immigrate; emigrate; migrate
// 遗憾	遺憾	yi2han4	yíhàn	regret; pity; sorry
// 疑问	疑問	yi2wen4	yíwèn	doubt; question; to query
// 乙	乙	yi3	yǐ	two; twist (2nd Heavenly Stem) (Kangxi radical 5)
// 以及	以及	yi3ji2	yǐjí	as well as; too; (formal) and
// 以来	以來	yi3lai2	yǐlái	since (a previous event)
// 亿	億	yi4	yì	one hundred million (100,000,000)
// 义务	義務	yi4wu4	yìwù	duty; obligation; volunteer duty
// 议论	議論	yi4lun4	yìlùn	discuss; to comment; talk about
// 意外	意外	yi4wai4	yìwài	unexpected; accident; mishap
// 意义	意義	yi4yi4	yìyì	meaning; significance
// 因而	因而	yin1'er2	yīn'ér	therefore; as a result; thus
// 因素	因素	yin1su4	yīnsù	element; factor
// 银	銀	yin2	yín	silver (the element)
// 印刷	印刷	yin4shua1	yìnshuā	print
// 英俊	英俊	ying1jun4	yīngjùn	handsome
// 英雄	英雄	ying1xiong2	yīngxióng	hero
// 迎接	迎接	ying2jie1	yíngjiē	meet; greet; to welcome
// 营养	營養	ying2yang3	yíngyǎng	nutrition; nourishment; sustenance
// 营业	營業	ying2ye4	yíngyè	do business; to trade
// 影子	影子	ying3zi	yǐngzi	shadow; reflection
// 应付	應付	ying4fu	yìngfu	to cope with; deal with; handle; do sth. perfunctorily; do sth. after a fashion; make do
// 应用	應用	ying4yong4	yìngyòng	to apply; to use; application
// 硬	硬	ying4	yìng	hard; stiff; obstinately
// 硬件	硬件	ying4jian4	yìngjiàn	hardware
// 拥抱	擁抱	yong1bao4	yōngbào	embrace; to hug
// 拥挤	擁擠	yong1ji3	yōngjǐ	to crowd; to push; to squeeze
// 勇气	勇氣	yong3qi4	yǒngqì	courage; valor
// 用功	用功	yong4 gong1	yòng gōng	diligent; industrious; hardworking
// 用途	用途	yong4tu2	yòngtú	use; application; purpose
// 优惠	優惠	you1hui4	yōuhuì	preferential; favorable
// 优美	優美	you1mei3	yōuměi	graceful; fine; elegant
// 优势	優勢	you1shi4	yōushì	advantage; superiority; dominant position
// 悠久	悠久	you1jiu3	yōujiǔ	established; long; longstanding
// 犹豫	猶豫	you2yu4	yóuyù	hesitate; hesitant; undecided
// 油炸	油炸	you2zha2	yóuzhá	deep fry
// 游览	遊覽	you2lan3	yóulǎn	go sight-seeing; tour
// 有利	有利	you3li4	yǒulì	advantageous; beneficial
// 幼儿园	幼兒園	you4'er2yuan2	yòu'éryuán	kindergarten; nursery school
// 娱乐	娛樂	yu2le4	yúlè	entertain; amuse; entertainment
// 与其	與其	yu3qi2	yǔqí	rather than; better than
// 语气	語氣	yu3qi4	yǔqì	tone; manner of speaking; mood
// 玉米	玉米	yu4mi3	yùmǐ	corn; maize
// 预报	預報	yu4bao4	yùbào	to predict; forecast
// 预订	預訂	yu4ding4	yùdìng	place an order; book ahead; subscribe for
// 预防	預防	yu4fang2	yùfáng	prevent; take precautions against
// 元旦	元旦	yuan2dan4	yuándàn	New Year's Day
// 员工	員工	yuang2ong1	yuángōng	employee; staff; personnel
// 原料	原料	yuan2liao4	yuánliào	raw material; ingredients
// 原则	原則	yuan2ze2	yuánzé	principle; doctrine
// 圆	圓	yuan2	yuán	round; circular; formal unit of Chinese currency
// 愿望	願望	yuan4wang4	yuànwàng	desire; wish; aspiration
// 乐器	樂器	yue4qi4	yuèqì	musical instrument
// 晕	暈	yun1	yūn	dizzy; to fain
// 运气	運氣	yun4qi	yùnqi	luck
// 运输	運輸	yun4shu1	yùnshū	transport; transportation
// 运用	運用	yun4yong4	yùnyòng	to use; apply
// 灾害	災害	zai1hai4	zāihài	disaster; calamity
// 再三	再三	zai4san1	zàisān	over and over again; repeatedly
// 在乎	在乎	zai4hu	zàihu	care about; be determined by; to mind
// 在于	在于	zai4yu2	zàiyú	lie in; be in; rest with; depend on
// 赞成	贊成	zan4cheng2	zànchéng	approve; endorse
// 赞美	贊美	zan4mei3	zànměi	admire; applause; to praise
// 糟糕	糟糕	zao1gao1	zāogāo	terrible; too bad; how terrible; what bad luck; what a mess
// 造成	造成	zao4cheng2	zàochéng	to cause; make; bring out
// 则	則	ze2	zé	standard; regulation; however; in that case
// 责备	責備	ze2bei4	zébèi	to blame; criticize (sb.); accuse
// 摘	摘	zhai1	zhāi	to pick (flowers, fruit, etc.); to pluck; to take; to borrow
// 窄	窄	zhai3	zhǎi	narrow; petty; hard-up
// 粘贴	粘貼	zhan1tie1	zhāntiē	to paste
// 展开	展開	zhan3 kai1	zhǎn kāi	spread out; unfold; carry out; in full swing
// 展览	展覽	zhan3lan3	zhǎnlǎn	put on display; to exhibit; exhibition
// 占	占	zhan4	zhàn	occupy; seize; to constitute
// 战争	戰爭	zhan4zheng1	zhànzhēng	war; conflict
// 长辈	長輩	zhang3bei4	zhǎngbèi	an elder; an elder generation
// 涨	漲	zhang3, zhang4	zhǎng, zhàng	to rise (of prices, rivers); to go up | to swell; to bloat
// 掌握	掌握	zhang3wo4	zhǎngwò	to grasp; to master; to control
// 账户	賬戶	zhang4hu4	zhànghù	bank account
// 招待	招待	zhao1dai4	zhāodài	receive (guests); entertain; reception
// 着火	著火	zhao2huo3	zháohuǒ	catch fire; ignite
// 着凉	著涼	zhao2 liang2	zháo liáng	catch a cold
// 召开	召開	zhao4kai1	zhàokāi	convene (a conference or meeting); call together
// 照常	照常	zhao4chang2	zhàocháng	as usual; normal
// 哲学	哲學	zhe2xue2	zhéxué	philosophy
// 针对	針對	zhen1dui4	zhēnduì	in connection with; directed towards
// 珍惜	珍惜	zhen1xi1	zhēnxī	to treasure; cherish; to value
// 真实	真實	zhen1shi2	zhēnshí	true; real; authentic
// 诊断	診斷	zhen3duan4	zhěnduàn	diagnosis; diagnose
// 阵	陣	zhen4	zhèn	short period; disposition of troops; wave
// 振动	振動	zhen4dong4	zhèndòng	vibrate; vibration
// 争论	爭論	zheng1lun4	zhēnglùn	argue; to dispute; contend; argument
// 争取	爭取	zheng1qu3	zhēngqǔ	fight for; compete for; strive
// 征求	征求	zheng1qiu2	zhēngqiú	solicit; seek; ask for; to request
// 睁	睜	zheng1	zhēng	to open (eyes)
// 整个	整個	zheng3ge4	zhěnggè	whole; entire; total
// 整齐	整齊	zheng3qi2	zhěngqí	tidy; neat; in good order
// 整体	整體	zheng3ti3	zhěngtǐ	whole; entirety
// 正	正	zheng4	zhèng	straight; currently; correct; just (right); pure; precisely
// 证件	證件	zheng4jian4	zhèngjiàn	paperwork; credentials; papers; certificates
// 证据	證據	zheng4ju4	zhèngjù	evidence; proof; testimony
// 政府	政府	zheng4fu3	zhèngfǔ	government
// 政治	政治	zheng4zhi4	zhèngzhì	politics
// 挣	掙	zheng4, zheng1	zhèng, zhēng	to earn | to struggle
// 支	支	zhi1	zhī	branch; support; put up; (mw for long; narrow objects) (Kangxi radical 65)
// 支票	支票	zhi1piao4	zhīpiào	(bank) check
// 执照	執照	zhi2zhao4	zhízhào	a license; a permit
// 直	直	zhi2	zhí	straight; vertical; frank; directly; continuously
// 指导	指導	zhi3dao3	zhǐdǎo	to guide; give directions
// 指挥	指揮	zhi3hui1	zhǐhuī	to command; to conduct; commander
// 至今	至今	zhi4 jin1	zhì jīn	up to now; so far
// 至于	至于	zhi4yu2	zhìyú	as for; go so far as to
// 志愿者	志願者	zhi4yuan4zhe3	zhìyuànzhě	volunteer
// 制定	制定	zhi4ding4	zhìdìng	formulate; lay down (a plan or policy); to draft
// 制度	制度	zhi4du4	zhìdù	system; institution
// 制造	制造	zhi4zao4	zhìzào	manufacture; make
// 制作	制作	zhi4zuo4	zhìzuò	make; manufacture
// 治疗	治療	zhi4liao2	zhìliáo	to treat; to cure; medical treatment
// 秩序	秩序	zhi4xu4	zhìxù	order; sequence
// 智慧	智慧	zhi4hui4	zhìhuì	wisdom; knowledge
// 中介	中介	zhong1jie4	zhōngjiè	agent; act as an intermediary
// 中心	中心	zhong1xin1	zhōngxīn	center; heart; core
// 中旬	中旬	zhong1xun2	zhōngxún	middle third of a month
// 种类	種類	zhong3lei4	zhǒnglèi	kind; category; class
// 重大	重大	zhong4da4	zhòngdà	great; important; major
// 重量	重量	zhong4liang4	zhòngliàng	weight
// 周到	周到	zhou1dao4	zhōudào	thoughtful; considerate; thorough
// 猪	豬	zhu1	zhū	pig
// 竹子	竹子	zhu2zi	zhúzi	bamboo
// 逐步	逐步	zhu2bu4	zhúbù	step by step; gradually
// 逐渐	逐漸	zhu2jian4	zhújiàn	gradually; by degrees
// 主持	主持	zhu3chi2	zhǔchí	preside over; manage; to direct
// 主动	主動	zhu3dong4	zhǔdòng	to take initiative; voluntary
// 主观	主觀	zhu3guan1	zhǔguān	subjective
// 主人	主人	zhu3ren2	zhǔrén	master; host; owner
// 主任	主任	zhu3ren4	zhǔrèn	director; head; chief
// 主题	主題	zhu3ti2	zhǔtí	theme; subject; topic
// 主席	主席	zhu3xi2	zhǔxí	chairperson; president
// 主张	主張	zhu3zhang1	zhǔzhāng	to advocate; viewpoint; position
// 煮	煮	zhu3	zhǔ	to boil; to cook
// 注册	注冊	zhu4ce4	zhùcè	register; registration; enroll
// 祝福	祝福	zhu4fu2	zhùfú	blessings; wish well
// 抓	抓	zhua1	zhuā	to carry in your hand holding strongly; catch; arrest
// 抓紧	抓緊	zhua1 jin3	zhuā jǐn	to grasp firmly; to pay close or special attention to; to rush in; to make the most of
// 专家	專家	zhuan1jia1	zhuānjiā	expert; specialist
// 专心	專心	zhuan1xin1	zhuānxīn	be absorbed; concentrate; attentive
// 转变	轉變	zhuan3bian4	zhuǎnbiàn	to change; to transform
// 转告	轉告	zhuang3ao4	zhuǎngào	pass on; to communicate; to transmit
// 装	裝	zhuang1	zhuāng	to load; dress up; pretend; clothing; to install
// 装饰	裝飾	zhuang1shi4	zhuāngshì	decorate
// 装修	裝修	zhuang1xiu1	zhuāngxiū	renovate; to fit up
// 状况	狀況	zhuang4kuang4	zhuàngkuàng	condition; state; situation
// 状态	狀態	zhuang4tai4	zhuàngtài	state of affairs; condition; state
// 撞	撞	zhuang4	zhuàng	to hit; collide; run into
// 追	追	zhui1	zhuī	pursue; chase
// 追求	追求	zhui1qiu2	zhuīqiú	pursue; seek
// 咨询	咨詢	zi1xun2	zīxún	request information; consultant; advisory
// 姿势	姿勢	zi1shi4	zīshì	posture; position; pose
// 资格	資格	zi1ge2	zīgé	qualifications; seniority
// 资金	資金	zi1jin1	zījīn	funds; funding
// 资料	資料	zi1liao4	zīliào	data; material; resources; information
// 资源	資源	zi1yuan2	zīyuán	natural resource; resource
// 紫	紫	zi3	zǐ	purple
// 自从	自從	zi4cong2	zìcóng	since; ever since
// 自动	自動	zi4dong4	zìdòng	automatic
// 自豪	自豪	zi4hao2	zìháo	(feel a sense of) pride
// 自觉	自覺	zi4jue2	zìjué	conscious; be aware of; self-motivated
// 自私	自私	zi4si1	zìsī	selfish
// 自由	自由	zi4you2	zìyóu	freedom; free; liberty
// 自愿	自願	zi4yuan4	zìyuàn	voluntary
// 字母	字母	zi4mu3	zìmǔ	letter (of the alphabet)
// 字幕	字幕	zi4mu4	zìmù	subtitles; captions
// 综合	綜合	zong1he2	zōnghé	synthesized; composite; summarize
// 总裁	總裁	zong3cai2	zǒngcái	director-general; president
// 总共	總共	zong3gong4	zǒnggòng	altogether; in sum; in all; in total
// 总理	總理	zong3li3	zǒnglǐ	premier; prime minister
// 总算	總算	zong3suan4	zǒngsuàn	at long last; finally; on the whole
// 总统	總統	zong3tong3	zǒngtǒng	president (of a country)
// 总之	總之	zong3zhi1	zǒngzhī	in a word; in short; in brief / anyway; anyhow
// 阻止	阻止	zu3zhi3	zǔzhǐ	prevent; to block
// 组	組	zu3	zǔ	compose; team up; group
// 组成	組成	zu3cheng2	zǔchéng	to form; part; element; constitute
// 组合	組合	zu3he2	zǔhé	assemble; combination
// 组织	組織	zu3zhi1	zǔzhī	organize; organization
// 最初	最初	zui4chu1	zuìchū	first; primary; initial
// 醉	醉	zui4	zuì	intoxicated; become drunk
// 尊敬	尊敬	zun1jing4	zūnjìng	respect; revere
// 遵守	遵守	zun1shou3	zūnshǒu	observe; abide by; comply with; keep (commandments); to respect (an agreement)
// 作品	作品	zuo4pin3	zuòpǐn	works (of literature and art)
// 作为	作爲	zuo4wei2	zuòwéi	regard as; act as; action; deed
// 作文	作文	zuo4 wen2	zuò wén	write an essay; essay
],











[  // HSK 6
//   挨	挨	ai1	āi	get close to; in sequence
// 癌症	癌症	ai2zheng4	áizhèng	cancer
// 爱不释手	愛不釋手	ai4bu2shi4shou3	àibúshìshǒu	love something too much to part with it
// 爱戴	愛戴	ai4dai4	àidài	love and respect
// 暧昧	暧昧	ai4mei4	àimèi	ambiguous; shady
// 安宁	安甯	an1ning2	ānníng	peaceful; calm; tranquil; composed
// 安详	安詳	an1xiang2	ānxiáng	serene; composed
// 安置	安置	an1zhi4	ānzhì	find a place for; help settle down; arrange for
// 按摩	按摩	an4mo2	ànmó	massage
// 案件	案件	an4jian4	ànjiàn	legal case; judicial case
// 案例	案例	an4li4	ànlì	(Law) case
// 暗示	暗示	an4shi4	ànshì	drop a hint; suggest
// 昂贵	昂貴	ang2gui4	ángguì	expensive; costly
// 凹凸	凹凸	ao1tu1	āotū	(of a surface) uneven; bumpy
// 熬	熬	ao2	áo	endure; to boil
// 奥秘	奧秘	ao4mi4	àomì	mystery; enigma; profound; deep
// 巴不得	巴不得	ba1bu4de2	bābùdé	eagerly look forward to; earnestly wish; be only too anxious to
// 巴结	巴結	ba1jie	bājie	to fawn on; curry favor with
// 扒	扒	ba1	bā	dig up; pull down; take off
// 疤	疤	ba1	bā	scar
// 拔苗助长	拔苗助長	ba2miao2zhu4zhang3	bámiáozhùzhǎng	(literally) help shoots grow by pulling them out; spoil things by excessive enthusiasm
// 把关	把關	ba3 guan1	bǎ guān	guard a pass; check on
// 把手	把手	ba3shou	bǎshou	knob; handle; grip
// 罢工	罷工	ba4 gong1	bà gōng	to strike; go on strike
// 霸道	霸道	ba4dao4	bàdào	overbearing; despotic hegemony; rule by force; (of liquor, medicine, etc.) strong
// 掰	掰	bai1	bāi	break with both hands
// 摆脱	擺脫	bai3tuo1	bǎituō	break away; free oneself from; cast off
// 败坏	敗壞	bai4huai4	bàihuài	ruin; corrupt; undermine
// 拜访	拜訪	bai4fang3	bàifǎng	pay a visit; call on
// 拜年	拜年	bai4 nian2	bài nián	congratulate the New Year; wish sb. a Happy New Year
// 拜托	拜托	bai4tuo1	bàituō	ask a favor; request; please!
// 颁布	頒布	ban1bu4	bānbù	promulgate; to issue; publish (e.g a decree)
// 颁发	頒發	ban1fa1	bānfā	issue; promulgate; award
// 斑	斑	ban1	bān	variety; speckled; spot; colored patch; stripe
// 版本	版本	ban3ben3	bǎnběn	edition
// 半途而废	半途而廢	ban4 tu2 er2 fei4	bàn tú ér fèi	give up halfway; leave sth. unfinished
// 扮演	扮演	ban4yan3	bànyǎn	play the part of; act
// 伴侣	伴侶	ban4lü3	bànlǚ	companion; partner; mate
// 伴随	伴隨	ban4sui2	bànsuí	accompany; go with; follow
// 绑架	綁架	bang3jia4	bǎngjià	kidnap; staking
// 榜样	榜樣	bang3yang4	bǎngyàng	example; model
// 磅	磅	bang4	bàng	pound; weigh; scale
// 包庇	包庇	bao1bi4	bāobì	to shield; to harbor; cover up
// 包袱	包袱	bao1fu	bāofu	bundle wrapped in cloth; cloth-wrapper
// 包围	包圍	bao1wei2	bāowéi	surround; encircle; hem in
// 包装	包裝	bao1zhuang1	bāozhuāng	to pack; package; make up
// 饱和	飽和	bao3he2	bǎohé	saturation
// 饱经沧桑	飽經滄桑	bao3jing1cang1sang1	bǎojīngcāngsāng	experienced many changes
// 保管	保管	bao3guan3	bǎoguǎn	assure; take care of; surely
// 保密	保密	bao3 mi4	bǎo mì	keep secret/confidential
// 保姆	保姆	bao3mu3	bǎomǔ	nanny; housekeeper
// 保守	保守	bao3shou3	bǎoshǒu	conservative (ideas, estimates, politically, etc.); to guard; to keep
// 保卫	保衛	bao3wei4	bǎowèi	defend; to safeguard
// 保养	保養	bao3yang3	bǎoyǎng	take good care of (or conserve) one's health; keep in good repair
// 保障	保障	bao3zhang4	bǎozhàng	ensure; to guarantee; protect
// 保重	保重	bao3zhong4	bǎozhòng	take care (of oneself)
// 报仇	報仇	bao4chou2	bàochóu	retaliate; to revenge; avenge
// 报酬	報酬	bao4chou	bàochou	reward; remuneration
// 报答	報答	bao4da2	bàodá	repay; requite
// 报复	報複	bao4fu	bàofu	retaliate; revenge
// 报警	報警	bao4jing3	bàojǐng	report (an incident) to the police
// 报销	報銷	bao4xiao1	bàoxiāo	submit an expense account; apply for reimbursement; write off
// 抱负	抱負	bao4fu4	bàofù	aspiration; ambition
// 暴力	暴力	bao4li4	bàolì	violence; (use) force
// 暴露	暴露	bao4lu4	bàolù	expose; reveal; lay bare
// 曝光	曝光	bao4guang1	bàoguāng	to expose; to make public
// 爆发	爆發	bao4fa1	bàofā	break out; erupt; explode
// 爆炸	爆炸	bao4zha4	bàozhà	explode; explosion; blow up
// 卑鄙	卑鄙	bei1bi3	bēibǐ	base; mean; despicable; contemptible; unprincipled
// 悲哀	悲哀	bei1'ai1	bēi'āi	grieved; sorrowful; sad
// 悲惨	悲慘	bei1can3	bēicǎn	miserable; tragic
// 北极	北極	bei3ji2	běijí	the North Pole
// 贝壳	貝殼	bei4ke2	bèiké	shell; conch; cowry
// 备份	備份	bei4fen4	bèifèn	to back up; a backup
// 备忘录	備忘錄	bei4wang4lu4	bèiwànglù	memorandum; aide-memoire; diplomacy memorandum; memorandum book
// 背叛	背叛	bei4pan4	bèipàn	betray; forsake
// 背诵	背誦	bei4song4	bèisòng	recite
// 被动	被動	bei4dong4	bèidòng	passive
// 被告	被告	bei4gao4	bèigào	defendant
// 奔波	奔波	ben1bo1	bēnbō	rush about; be busy running about
// 奔驰	奔馳	ben1chi2	bēnchí	run quickly; speed; Mercedes-Benz (German vehicle manufacturer)
// 本能	本能	ben3neng2	běnnéng	instinct
// 本钱	本錢	ben3qian2	běnqián	capital (financial)
// 本人	本人	ben3ren2	běnrén	I; me; myself; oneself; in person
// 本身	本身	ben3shen1	běnshēn	itself; in itself; per se
// 本事	本事	ben3shi	běnshi	ability; skill; capability; (-shì: this matter; literary source)
// 笨拙	笨拙	ben4zhuo1	bènzhuō	clumsy; awkward; stupid
// 崩溃	崩潰	beng1kui4	bēngkuì	collapse; crumble; fall apart
// 甭	甭	beng2	béng	need not; (contraction of 不 and 用)
// 迸发	迸發	beng4fa1	bèngfā	burst forth; burst out
// 蹦	蹦	beng4	bèng	jump; bounce; hop
// 逼迫	逼迫	bi1po4	bīpò	to force; compel; coerce
// 鼻涕	鼻涕	bi2ti4	bítì	nasal mucus; snivel
// 比方	比方	bi3fang	bǐfang	instance; analogy; example
// 比喻	比喻	bi3yu4	bǐyù	metaphor; analogy; figure of speech
// 比重	比重	bi3zhong4	bǐzhòng	proportion; specific gravity
// 鄙视	鄙視	bi3shi4	bǐshì	despise; disdain; look down upon
// 闭塞	閉塞	bi4se4	bìsè	stop up; shelter from; hard to get to; unenlightened
// 弊病	弊病	bi4bing4	bìbìng	malady; evil; malpractice; drawback
// 弊端	弊端	bi4duan1	bìduān	malpractice; abuse; corrupt practice
// 臂	臂	bi4	bì	arm
// 边疆	邊疆	bian1jiang1	biānjiāng	border area; borderland; frontier; frontier region
// 边界	邊界	bian1jie4	biānjiè	boundary; border
// 边境	邊境	bian1jing4	biānjìng	frontier
// 边缘	邊緣	bian1yuan2	biānyuán	edge; fringe; verge; brink
// 编织	編織	bian1zhi1	biānzhī	to weave; to knit; to plait; to braid; to crochet
// 鞭策	鞭策	bian1ce4	biāncè	spur on; urge on
// 贬低	貶低	bian3di1	biǎndī	to belittle; depreciate; disparage
// 贬义	貶義	bian3yi4	biǎnyì	negative connotation; derogatory sense
// 扁	扁	bian3	biǎn	flat
// 变故	變故	biang4u4	biàngù	unforeseen event; accident
// 变迁	變遷	bian4qian1	biànqiān	changes; vicissitude
// 变质	變質	bian4 zhi4	biàn zhì	go bad; deteriorate; metamorphism
// 便利	便利	bian4li4	biànlì	convenient; easy; facilitate
// 便条	便條	bian4tiao2	biàntiáo	informal note
// 便于	便于	bian4yu2	biànyú	be easy; be convenient for
// 遍布	遍布	bian4bu4	biànbù	to cover the whole (area); found everywhere; spread all over
// 辨认	辨認	bian4ren4	biànrèn	distinguish; identify; recognize
// 辩护	辯護	bian4hu4	biànhù	speak in defense of; argue in favor of; defend
// 辩解	辯解	bian4jie3	biànjiě	explain; justify; defend (a point of view, etc.)
// 辩证	辯證	bian4zheng4	biànzhèng	investigate; dialectical
// 辫子	辮子	bian4zi	biànzi	plait; braid; pigtail
// 标本	標本	biao1ben3	biāoběn	specimen; sample; the root cause and symptoms of a disease
// 标记	標記	biao1ji4	biāojì	sign; mark; symbol
// 标题	標題	biao1ti2	biāotí	title; header; headline; caption
// 表决	表決	biao3jue2	biǎojué	decide by vote; vote
// 表态	表態	biao3tai4	biǎotài	make known one's position; declare where one stands
// 表彰	表彰	biao3zhang1	biǎozhāng	cite (in dispatches); commend
// 憋	憋	bie1	biē	hold in (urine); hold (breath); choke
// 别墅	別墅	bie2shu4	biéshù	villa
// 别致	別致	bie2zhi4	biézhì	unique; unconventional; fancy
// 别扭	別扭	bien4iu	bièniu	awkward; unnatural
// 濒临	瀕臨	bin1lin2	bīnlín	on the verge of
// 冰雹	冰雹	bing1bao2	bīngbáo	hail
// 丙	丙	bing3	bǐng	bright; fire (3rd Heavenly Stem)
// 并非	並非	bing4fei1	bìngfēi	really isn't
// 并列	並列	bing4lie4	bìngliè	stand side by side; be juxtaposed
// 拨	撥	bo1	bō	to dial; move with a hand/foot; stir; poke; allocate (money)
// 波浪	波浪	bo1lang4	bōlàng	wave
// 波涛	波濤	bo1tao1	bōtāo	great waves; billows
// 剥削	剝削	bo1xue1	bōxuē	to exploit
// 播种	播種	bo1zhong3	bōzhǒng	sow seeds; sowing; seed
// 伯母	伯母	bo2mu3	bómǔ	aunt; wife of father's older brother
// 博大精深	博大精深	bo2da4jing1shen1	bódàjīngshēn	broad and profound
// 博览会	博覽會	bo2lan3hui4	bólǎnhuì	(international) exhibition
// 搏斗	搏鬥	bo2dou4	bódòu	fight; struggle; wrestle
// 薄弱	薄弱	bo2ruo4	bóruò	weak; frail
// 补偿	補償	bu3chang2	bǔcháng	compensation; make up
// 补救	補救	bu3jiu4	bǔjiù	remedy; repair
// 补贴	補貼	bu3tie1	bǔtiē	subsidy; allowance
// 捕捉	捕捉	bu3zhuo1	bǔzhuō	catch; to seize
// 哺乳	哺乳	bu3ru3	bǔrǔ	breast-feeding; to suckle
// 不得已	不得已	bu4de2yi3	bùdéyǐ	act against one's will; have no alternative
// 不妨	不妨	bu4fang2	bùfáng	there is no harm in; might as well
// 不敢当	不敢當	bu4 gan3dang1	bù gǎndāng	(literally) I dare not accept the honor; you flatter me
// 不顾	不顧	bu2gu4	búgù	in spite of; regardless of; to disregard
// 不禁	不禁	bu4jin1	bùjīn	cannot help; can't refrain from
// 不堪	不堪	bu4kan1	bùkān	cannot bear/stand; utterly
// 不可思议	不可思議	bu4ke3si1yi4	bùkěsīyì	unimaginable; inconceivable
// 不愧	不愧	bu2kui4	búkuì	be worthy of; deserve to be called; prove oneself to be
// 不料	不料	bu2liao4	búliào	unexpectedly; to one's surprise
// 不免	不免	bu4mian3	bùmiǎn	unavoidable
// 不时	不時	bu4shi2	bùshí	frequently; often; at any time
// 不惜	不惜	bu4xi1	bùxī	to not hesitate; not spare
// 不相上下	不相上下	bu4 xiang1 shang4 xia4	bù xiāng shàng xià	equally matched; about the same
// 不像话	不像話	bu2xiang4hua4	búxiànghuà	unreasonable; absurd; outrageous
// 不屑一顾	不屑一顧	bu2xie4yi2gu4	búxièyígù	not worth seeing; disdain as beneath contempt
// 不言而喻	不言而喻	bu4yan2'er2yu4	bùyán'éryù	it goes without saying; it is self-evident
// 不由得	不由得	bu4you2de	bùyóude	can't help; cannot but
// 不择手段	不擇手段	bu4ze2shou3duan4	bùzéshǒuduàn	by fair means or foul
// 不止	不止	bu4zhi3	bùzhǐ	incessantly; more than
// 布告	布告	bu4gao4	bùgào	notice; bulletin
// 布局	布局	bu4ju2	bùjú	arrangement; composition; layout
// 布置	布置	bu4zhi4	bùzhì	arrange; decorate; decoration
// 步伐	步伐	bu4fa2	bùfá	pace; (measured) step; march
// 部署	部署	bu4shu3	bùshǔ	dispose; deploy
// 部位	部位	bu4wei4	bùwèi	position; place
// 才干	才幹	cai2gan4	cáigàn	ability; competence
// 财富	財富	cai2fu4	cáifù	wealth; riches; fortune
// 财务	財務	cai2wu4	cáiwù	financial affairs
// 财政	財政	cai2zheng4	cáizhèng	public finances; financial
// 裁缝	裁縫	cai2feng	cáifeng	tailor; dressmaker
// 裁判	裁判	cai2pan4	cáipàn	judge; to referee; judgment
// 裁员	裁員	cai2yuan2	cáiyuán	cut staff; lay off employees
// 采购	采購	cai3gou4	cǎigòu	make purchases for an organization; go shopping
// 采集	采集	cai3ji2	cǎijí	gather; collect
// 采纳	采納	cai3na4	cǎinà	accept; adopt
// 彩票	彩票	cai3piao4	cǎipiào	lottery; lottery ticket
// 参谋	參謀	can1mou2	cānmóu	advisor; give advice
// 参照	參照	can1zhao4	cānzhào	consult a reference; refer to (another document)
// 残疾	殘疾	can2ji	cánji	deformity; handicapped; crippled
// 残酷	殘酷	can2ku4	cánkù	cruel
// 残留	殘留	can2liu2	cánliú	to remain; be left over; surplus; remnant
// 残忍	殘忍	can2ren3	cánrěn	brutal; bloody; merciless
// 灿烂	燦爛	can4lan4	cànlàn	to glitter; brilliant; splendid
// 仓促	倉促	cang1cu4	cāngcù	hurried
// 仓库	倉庫	cang1ku4	cāngkù	depot; storehouse; warehouse
// 苍白	蒼白	cang1bai2	cāngbái	pale; wan; pallid
// 舱	艙	cang1	cāng	cabin; hold (of a ship or airplane)
// 操劳	操勞	cao1lao2	cāoláo	work hard; look after
// 操练	操練	cao1lian4	cāoliàn	to drill; to practice
// 操纵	操縱	cao1zong4	cāozòng	operate; control; manipulation
// 操作	操作	cao1zuo4	cāozuò	operate; manipulate
// 嘈杂	嘈雜	cao2za2	cáozá	noisy; raucous
// 草案	草案	cao3'an4	cǎo'àn	draft (legislation, proposal, etc.)
// 草率	草率	cao3shuai4	cǎoshuài	cursory; careless; negligent; sloppy; not serious
// 侧面	側面	ce4mian4	cèmiàn	side; profile; flank; face in profile
// 测量	測量	ce4liang2	cèliáng	to survey; to measure
// 策划	策劃	ce4hua4	cèhuà	plot; scheme; bring about
// 策略	策略	ce4lüe4	cèlüè	tactics; plot
// 层出不穷	層出不窮	ceng2 chu1 bu4 qiong2	céng chū bù qióng	(idiom) emerge more and more; innumerable succession; breeding like flies
// 层次	層次	ceng2ci4	céngcì	level; rank order; standing; layer
// 差别	差別	cha1bie2	chābié	difference; disparity
// 插座	插座	cha1zuo4	chāzuò	power socket
// 查获	查獲	cha2huo4	cháhuò	investigate and capture a criminal; discover
// 岔	岔	cha4	chà	fork in the road; turn off; diverge
// 刹那	刹那	chan4a4	chànà	an instant (Sanskrit: ksana); split second
// 诧异	詫異	cha4yi4	chàyì	flabbergasted; astonished
// 柴油	柴油	chai2you2	cháiyóu	diesel fuel; kerosene
// 搀	攙	chan1	chān	assist by the arm; mix; support; sustain
// 馋	饞	chan2	chán	gluttonous; greedy
// 缠绕	纏繞	chan2rao4	chánrào	bind; wind; twirl; twist; intertwine
// 产业	産業	chan3ye4	chǎnyè	industry; estate; property
// 阐述	闡述	chan3shu4	chǎnshù	expound (a position); elaborate (on a topic)
// 颤抖	顫抖	chan4dou3	chàndǒu	tremble; to shiver; to shake
// 昌盛	昌盛	chang1sheng4	chāngshèng	prosperous
// 尝试	嘗試	chang2shi4	chángshì	to try; attempt
// 偿还	償還	chang2huan2	chánghuán	repay; reimburse
// 场合	場合	chang3he2	chǎnghé	occasion; situation
// 场面	場面	chang3mian4	chǎngmiàn	scene; occasion
// 场所	場所	chang3suo3	chǎngsuǒ	location; place
// 敞开	敞開	chang3kai1	chǎngkāi	open wide
// 畅通	暢通	chang4tong1	chàngtōng	unimpeded; unclogged; free-flowing; straight path; to expedite
// 畅销	暢銷	chang4xiao1	chàngxiāo	best seller; chart-topping; very marketable
// 倡导	倡導	chang4dao3	chàngdǎo	to advocate; propose
// 倡议	倡議	chang4yi4	chàngyì	suggest; propose
// 钞票	鈔票	chao1piao4	chāopiào	paper money; bill
// 超越	超越	chao1yue4	chāoyuè	surpass; exceed; transcend
// 巢穴	巢穴	chao2xue2	cháoxué	lair; nest; den; hideout
// 朝代	朝代	chao2dai4	cháodài	dynasty; reign (of a king)
// 嘲笑	嘲笑	chao2xiao4	cháoxiào	jeer; mock; scoff
// 潮流	潮流	chao2liu2	cháoliú	tide; current; trend
// 撤退	撤退	che4tui4	chètuì	retreat
// 撤销	撤銷	che4xiao1	chèxiāo	repeal
// 沉淀	沈澱	chen2dian4	chéndiàn	to precipitate (solid sediment out of a solution); to settle
// 沉闷	沈悶	chen2men4	chénmèn	oppressive (of weather); heavy; depressed; not happy
// 沉思	沈思	chen2si1	chénsī	ponder; contemplate; meditation
// 沉重	沈重	chen2zhong4	chénzhòng	heavy; hard; serious
// 沉着	沈著	chen2zhuo2	chénzhuó	calm and collected; not nervous
// 陈旧	陳舊	chen2jiu4	chénjiù	old fashioned; outmoded; obsolete
// 陈列	陳列	chen2lie4	chénliè	to display; to exhibit
// 陈述	陳述	chen2shu4	chénshù	allegation; assertation; to declare; to state
// 衬托	襯托	chen4tuo1	chèntuō	to set off; serve as a foil to
// 称心如意	稱心如意	chen4xin1ru2yi4	chènxīnrúyì	find sth. satisfactory
// 称号	稱號	cheng1hao4	chēnghào	title; term of address
// 成本	成本	cheng2ben3	chéngběn	cost (manufacturing, production, etc.)
// 成交	成交	cheng2jiao1	chéngjiāo	complete a contract; clinch a deal; to seal
// 成天	成天	cheng2tian1	chéngtiān	all day long; all the time
// 成效	成效	cheng2xiao4	chéngxiào	effect; result
// 成心	成心	cheng2xin1	chéngxīn	intentional; deliberate; with prior intent
// 成员	成員	cheng2yuan2	chéngyuán	member
// 呈现	呈現	cheng2xian4	chéngxiàn	appear; emerge; present (a certain appearance)
// 诚挚	誠摯	cheng2zhi4	chéngzhì	sincere; cordial; earnest
// 承办	承辦	cheng2ban4	chéngbàn	undertake; accept an assignment
// 承包	承包	cheng2bao1	chéngbāo	to contract (to undertake a job)
// 承诺	承諾	cheng2nuo4	chéngnuò	to promise
// 城堡	城堡	cheng2bao3	chéngbǎo	castle
// 乘	乘	cheng2	chéng	to ride; to mount; make use of; multiply
// 盛	盛	cheng2, sheng4	chéng, shèng	contain; to ladle; to fill | flourishing; grand; abundant
// 惩罚	懲罰	cheng2fa2	chéngfá	penalty; punishment; to punish; to penalize
// 澄清	澄清	cheng2qing1	chéngqīng	(of liquid) settle; become clear; (Chem.) precipitate
// 橙	橙	cheng2	chéng	orange (color); orange (fruit, tree)
// 秤	秤	cheng4	chèng	balance; scale; steelyard
// 吃苦	吃苦	chi1 ku3	chī kǔ	bear hardships; suffer
// 吃力	吃力	chi1li4	chīlì	strenuous; exhausted
// 迟钝	遲鈍	chi2dun4	chídùn	slow (witted); stupid; dull
// 迟缓	遲緩	chi2huan3	chíhuǎn	slow; sluggish
// 迟疑	遲疑	chi2yi2	chíyí	hesitate
// 持久	持久	chi2jiu3	chíjiǔ	duration; enduring; lasting; persistent
// 赤道	赤道	chi4dao4	chìdào	the equator
// 赤字	赤字	chi4zi4	chìzì	(financial) deficit; red ink
// 冲动	沖動	chong1dong4	chōngdòng	impulsive; act on impulse
// 冲击	沖擊	chong1ji1	chōngjī	attack; impact; a shock
// 冲突	沖突	chong1tu1	chōngtū	conflict; clash
// 充当	充當	chong1dang1	chōngdāng	serve as; play the part of
// 充沛	充沛	chong1pei4	chōngpèi	abundant; plentiful; vigorous
// 充实	充實	chong1shi2	chōngshí	substantial; rich; enrich; substantiate
// 充足	充足	chong1zu2	chōngzú	adequate; sufficient; abundant
// 重叠	重疊	chong2die2	chóngdié	to overlap
// 崇拜	崇拜	chong2bai4	chóngbài	worship; adore
// 崇高	崇高	chong2gao1	chónggāo	lofty; sublime
// 崇敬	崇敬	chong2jing4	chóngjìng	revere; admire; veneration
// 稠密	稠密	chou2mi4	chóumì	dense; thick
// 筹备	籌備	chou2bei4	chóubèi	make preparations; get ready for something
// 丑恶	醜惡	chou3'e4	chǒu'è	ugly; repulsive; odiousness
// 出路	出路	chu1lu4	chūlù	a way out; outlet
// 出卖	出賣	chu1mai4	chūmài	sell; betray; sell out
// 出身	出身	chu1shen1	chūshēn	family background; class origin
// 出神	出神	chu1 shen2	chū shén	be lost in thought; entranced; preoccupation; Trance (music genre)
// 出息	出息	chu1xi	chūxi	future prospects; aspiration; promise
// 初步	初步	chu1bu4	chūbù	initial; preliminary; tentative
// 除	除	chu2	chú	besides; except; remove; to divide (mathematics)
// 处分	處分	chu3fen4	chǔfèn	punish; punishment; discipline; disposal
// 处境	處境	chu3jing4	chǔjìng	plight; unfavorable situation
// 处置	處置	chu3zhi4	chǔzhì	to handle; take care of; punish
// 储备	儲備	chu3bei4	chǔbèi	reserves; store up
// 储存	儲存	chu3cun2	chǔcún	stockpile; to store
// 储蓄	儲蓄	chu3xu4	chǔxù	to save; to deposit
// 触犯	觸犯	chu4fan4	chùfàn	offend; violate
// 川流不息	川流不息	chuan1 liu2 bu4 xi1	chuān liú bù xī	(saying) flowing of an endless stream
// 穿越	穿越	chuan1yue4	chuānyuè	pass through; cut across
// 传达	傳達	chuan2da2	chuándá	convey; transmit; communicate
// 传单	傳單	chuan2dan1	chuándān	leaflet; flier; pamphlet
// 传授	傳授	chuan2shou4	chuánshòu	impart; pass on; teach
// 船舶	船舶	chuan2bo2	chuánbó	ships; boats; watercraft
// 喘气	喘氣	chuan3qi4	chuǎnqì	to pant; gasp for breath
// 串	串	chuan4	chuàn	string together; conspire; gang up; mix up; bunch
// 床单	床單	chuang2dan1	chuángdān	bed sheet
// 创立	創立	chuang4li4	chuànglì	to found; establish
// 创新	創新	chuang4xin1	chuàngxīn	innovate; innovation
// 创业	創業	chuang4ye4	chuàngyè	begin an undertaking; start a major task; start a company
// 创作	創作	chuang4zuo4	chuàngzuò	create; to produce; creative work
// 吹牛	吹牛	chui1 niu2	chuī niú	to brag; (regional) to chat
// 吹捧	吹捧	chui1peng3	chuīpěng	flatter sb.; extol sb.'s accomplishments
// 炊烟	炊煙	chui1yan1	chuīyān	smoke from kitchen chimneys
// 垂直	垂直	chui2zhi2	chuízhí	perpendicular; vertical
// 锤	錘	chui2	chuí	hammer; weight
// 纯粹	純粹	chun2cui4	chúncuì	purely; pure
// 纯洁	純潔	chun2jie2	chúnjié	pure; unadulterated; cleanse
// 慈善	慈善	ci2shan4	císhàn	philanthropic; benevolent; charitable
// 慈祥	慈祥	ci2xiang2	cíxiáng	a kindly person; benevolent (often of older people)
// 磁带	磁帶	ci2dai4	cídài	cassette tape
// 雌雄	雌雄	ci2xiong2	cíxióng	male and female; winners and losers
// 次品	次品	ci4pin3	cìpǐn	defective or substandard products
// 次序	次序	ci4xu4	cìxù	sequence; order
// 伺候	伺候	ci4hou	cìhou	serve; wait upon; act as a valet
// 刺	刺	ci4	cì	thorn; to sting; to prick; pierce; stab
// 从容	從容	cong2rong2	cóngróng	leisurely; calm
// 丛	叢	cong2	cóng	crowd together; thicket; collection
// 凑合	湊合	cou4he	còuhe	bring together; make do in a bad situation; improvise
// 粗鲁	粗魯	cu1lu3	cūlǔ	crude; coarse; rough; language
// 窜	竄	cuan4	cuàn	to flee; to escape; run away
// 摧残	摧殘	cui1can2	cuīcán	to ruin; devastate; vandalize
// 脆弱	脆弱	cui4ruo4	cuìruò	weak; fragile; flimsy; frail
// 搓	搓	cuo1	cuō	rub or roll between the hands or fingers; to twist
// 磋商	磋商	cuo1shang1	cuōshāng	discuss seriously; consult; negotiate
// 挫折	挫折	cuo4zhe2	cuòzhé	setback; defeat; frustration
// 搭	搭	da1	dā	to erect; to build; travel by (car, plane, etc.); to hang; to join
// 搭档	搭檔	da1dang4	dādàng	team up; cooperate; work together
// 搭配	搭配	da1pei4	dāpèi	pair up; arrange in pairs; to add sth. into a group; to suit
// 达成	達成	da2 cheng2	dá chéng	to reach (an agreement); achieve
// 答辩	答辯	da2bian4	dábiàn	reply (to an accusation)
// 答复	答複	da2fu4	dáfù	to answer; to reply
// 打包	打包	da3bao1	dǎbāo	get a doggy bag (at a restaurant); pack up
// 打官司	打官司	da3 guan1si	dǎ guānsi	go to court
// 打击	打擊	da3ji1	dǎjī	to strike; to hit; to attack
// 打架	打架	da3 jia4	dǎ jià	to fight; scuffle; to come to blows
// 打量	打量	da3liang	dǎliang	take measure of; size up
// 打猎	打獵	da3 lie4	dǎ liè	hunt; to go hunting
// 打仗	打仗	da3zhang4	dǎzhàng	fight; go to war; fight a battle
// 大不了	大不了	da4buliao3	dàbuliǎo	at the worst; if worst comes to worst; serious, alarming
// 大臣	大臣	da4chen2	dàchén	chancellor
// 大伙儿	大夥兒	da4huo3r	dàhuǒr	everyone
// 大肆	大肆	da4si4	dàsì	wantonly; without any constraint
// 大体	大體	da4ti3	dàtǐ	in general; more or less; on the whole
// 大意	大意	da4yi4	dàyì	main idea; general idea; gist
// 大致	大致	da4zhi4	dàzhì	more or less; roughly; approximately
// 歹徒	歹徒	dai3tu2	dǎitú	evil person who commits crimes; villain; gangster
// 代价	代價	dai4jia4	dàijià	price; cost; expense
// 代理	代理	dai4li3	dàilǐ	acting (temporarily filling a position); agent
// 带领	帶領	dai4ling3	dàilǐng	to guide; to lead
// 怠慢	怠慢	dai4man4	dàimàn	to slight; give somebody a cold shoulder; treat somebody in a cold manner
// 逮捕	逮捕	dai4bu3	dàibǔ	to arrest; to capture
// 担保	擔保	dan1bao3	dānbǎo	guarantee; vouch for
// 胆怯	膽怯	dan3qie4	dǎnqiè	timid; coward
// 诞辰	誕辰	dan4chen2	dànchén	birthday
// 诞生	誕生	dan4sheng1	dànshēng	be born; come into being
// 淡季	淡季	dan4ji4	dànjì	off season; slow business season
// 淡水	淡水	dan4shui3	dànshuǐ	fresh water; potable water (water with low salt content)
// 蛋白质	蛋白質	dan4bai2zhi4	dànbáizhì	protein
// 当场	當場	dang1chang3	dāngchǎng	at the scene; on the spot
// 当初	當初	dang1chu1	dāngchū	at that time; at the outset; originally
// 当代	當代	dang1dai4	dāngdài	present day; contemporary
// 当面	當面	dang1 mian4	dāng miàn	to sb.'s face; in sb.'s presence
// 当前	當前	dang1qian2	dāngqián	current; modern; present
// 当事人	當事人	dang1shi4ren2	dāngshìrén	persons involved or implicated; party (to an affair)
// 当务之急	當務之急	dang1wu4zhi1ji2	dāngwùzhījí	the most pressing matter of the moment; a top priority task; urgent matter
// 当选	當選	dang1xuan3	dāngxuǎn	be elected
// 党	黨	dang3	dǎng	party; club; association
// 档案	檔案	dang4'an4	dàng'àn	file; record; archive
// 档次	檔次	dang4ci4	dàngcì	grade; quality; class; level
// 导弹	導彈	dao3dan4	dǎodàn	guided missile; cruise missile
// 导航	導航	dao3hang2	dǎoháng	navigation
// 导向	導向	dao3xiang4	dǎoxiàng	guidance; lead to; direct something towards
// 捣乱	搗亂	dao3 luan4	dǎo luàn	cause a disturbance; look for trouble
// 倒闭	倒閉	dao3bi4	dǎobì	go bankrupt; close down
// 盗窃	盜竊	dao4qie4	dàoqiè	steal; pilfer
// 稻谷	稻谷	dao4gu3	dàogǔ	rice crops/paddy
// 得不偿失	得不償失	de2 bu4 chang2 shi1	dé bù cháng shī	the gains do not outweigh the losses
// 得力	得力	de2li4	délì	able; competent
// 得天独厚	得天獨厚	de2tian1du2hou4	détiāndúhòu	enjoy exceptional advantages; richly endowed by nature
// 得罪	得罪	de2zui4	dézuì	offend; a faux pas
// 灯笼	燈籠	deng1long	dēnglong	lantern
// 登陆	登陸	deng1lu4	dēnglù	to land; come ashore; sign/log in
// 登录	登錄	deng1lu4	dēnglù	sign-in
// 蹬	蹬	deng1	dēng	press down with the foot; step back or into something
// 等候	等候	deng3hou4	děnghòu	wait; queue
// 等级	等級	deng3ji2	děngjí	degree; rate
// 瞪	瞪	deng4	dèng	stare at; to glower
// 堤坝	堤壩	di1ba4	dībà	dam; dyke
// 敌视	敵視	di2shi4	díshì	be hostile; adopt a negative attitude towards
// 抵达	抵達	di3da2	dǐdá	arrive; to reach (a destination); touch down
// 抵抗	抵抗	di3kang4	dǐkàng	resist; resistance
// 抵制	抵制	di3zhi4	dǐzhì	resistance; refusal (to cooperate); boycott
// 地步	地步	di4bu4	dìbù	condition; plight; extent
// 地势	地勢	di4shi4	dìshì	terrain; topography of a place
// 地质	地質	di4zhi4	dìzhì	geology
// 递增	遞增	di4zeng1	dìzēng	increase step by step; steadily increase
// 颠簸	顛簸	dian1bo3	diānbǒ	shake; to jolt; bump
// 颠倒	顛倒	dian1dao3	diāndǎo	turn upside down; upend
// 典礼	典禮	dian3li3	diǎnlǐ	celebration; ceremony
// 典型	典型	dian3xing2	diǎnxíng	typical case; model
// 点缀	點綴	dian3zhui4	diǎnzhuì	decorate; an ornament; beautify; embellish; be the finishing touch
// 电源	電源	dian4yuan2	diànyuán	electric power supply
// 垫	墊	dian4	diàn	cushion; to pad; pay for somebody and expect to be repaid
// 惦记	惦記	dian4ji4	diànjì	to remember with concern; to be concerned about; to think about; to keep thinking about; to worry about
// 奠定	奠定	dian4ding4	diàndìng	establish; to found; to settle
// 叼	叼	diao1	diāo	hold sth. in the mouth
// 雕刻	雕刻	diao1ke4	diāokè	carve; engrave; sculpt
// 雕塑	雕塑	diao1su4	diāosù	sculpture; a statue; a Buddhist image
// 吊	吊	diao4	diào	hang; suspend
// 调动	調動	diao4dong4	diàodòng	to transfer; to maneuver (troops, etc.)
// 跌	跌	die1	diē	to fall down; to drop
// 丁	丁	ding1	dīng	male adult; robust; cubes (of food); T-shaped (4th Heavenly Stem)
// 叮嘱	叮囑	ding1zhu3	dīngzhǔ	urge again and again; exhort; repeatedly warn
// 盯	盯	ding1	dīng	to stare; to gaze
// 定期	定期	ding4qi1	dìngqī	regularly; at regular intervals
// 定义	定義	ding4yi4	dìngyì	definition
// 丢人	丟人	diu1 ren2	diū rén	lose face; be disgraced
// 丢三落四	丟三落四	diu1san1 la4si4	diūsān làsì	forgetful; scatterbrained
// 东道主	東道主	dong1dao4zhu3	dōngdàozhǔ	host for a party or conference
// 东张西望	東張西望	dong1zhang1xi1wang4	dōngzhāngxīwàng	look in all directions; glance around
// 董事长	董事長	dong3shi4zhang3	dǒngshìzhǎng	chairman of the board
// 动荡	動蕩	dong4dang4	dòngdàng	(social or political) turmoil; unrest; upheaval
// 动机	動機	dong4ji1	dòngjī	motive; motivation; intention
// 动静	動靜	dong4jing4	dòngjìng	sound of activity; activity
// 动力	動力	dong4li4	dònglì	power; motion; impetus; driving force
// 动脉	動脈	dong4mai4	dòngmài	artery
// 动身	動身	dong4 shen1	dòng shēn	go on a journey; leave
// 动手	動手	dong4shou3	dòngshǒu	get to work; to touch; strike a blow
// 动态	動態	dong4tai4	dòngtài	development; trend; dynamic state
// 动员	動員	dong4yuan2	dòngyuán	mobilize
// 冻结	凍結	dong4jie2	dòngjié	(loan, wage, price) freeze
// 栋	棟	dong4	dòng	roof beam; (mw for buildings)
// 兜	兜	dou1	dōu	pocket; bag; wrap up (in a piece of cloth); move around (in a circle); canvass (solicit); take responsibility
// 陡峭	陡峭	dou3qiao4	dǒuqiào	steep; precipitous
// 斗争	鬥爭	dou4zheng1	dòuzhēng	to struggle; to fight for; to battle
// 督促	督促	du1cu4	dūcù	supervise and urge sb. to complete a task
// 毒品	毒品	du2pin3	dúpǐn	drugs; narcotics; poison
// 独裁	獨裁	du2cai2	dúcái	dictatorship
// 堵塞	堵塞	du3se4	dǔsè	block; stop
// 赌博	賭博	du3bo2	dǔbó	to gamble
// 杜绝	杜絕	du4jue2	dùjué	put an end to
// 端	端	duan1	duān	end; beginning; extremity; carry holding something from the sides
// 端午节	端午節	Duan1wu3 Jie2	Duānwǔ Jié	Dragon Boat Festival
// 端正	端正	duan1zheng4	duānzhèng	upright; regular; proper; correct
// 短促	短促	duan3cu4	duǎncù	short in time duration; fleeting; brief
// 断定	斷定	duan4ding4	duàndìng	conclude; determine; figure out
// 断绝	斷絕	duan4jue2	duànjué	sever; break off
// 堆积	堆積	dui1ji1	duījī	pile up; accumulate
// 队伍	隊伍	dui4wu	duìwu	ranks; troops
// 对策	對策	dui4ce4	duìcè	countermeasure for dealing with a situation
// 对称	對稱	dui4chen4	duìchèn	symmetry
// 对付	對付	dui4fu	duìfu	to handle; deal with
// 对抗	對抗	dui4kang4	duìkàng	withstand; resist; antagonize
// 对立	對立	dui4li4	duìlì	oppose; to counter
// 对联	對聯	dui4lian2	duìlián	rhyming couplet; vertical written couplet usually placed along either side of a doorway
// 对应	對應	dui4ying4	duìyìng	corresponding; counterpart
// 对照	對照	dui4zhao4	duìzhào	contrast; compare
// 兑现	兌現	dui4xian4	duìxiàn	cash a check; honor a commitment
// 顿时	頓時	dun4shi2	dùnshí	immediately; suddenly
// 多元化	多元化	duo1yuan2hua4	duōyuánhuà	diversify; diversification
// 哆嗦	哆嗦	duo1suo	duōsuo	tremble; to shiver; to quiver
// 堕落	墮落	duo4luo4	duòluò	morally degenerate; become depraved
// 额外	額外	e2wai4	éwài	extra; added; additional
// 恶心	惡心	e3xin	ěxin	disgusting; nauseous; make somebody embarrassed (èxīn: bad/vicious habit; vice)
// 恶化	惡化	e4hua4	èhuà	worsen; deteriorate
// 遏制	遏制	e4zhi4	èzhì	keep within limits; contain; restrain; hold back
// 恩怨	恩怨	en1yuan4	ēnyuàn	grievance; old rivalry; mixture of gratitude and resentment
// 而已	而已	er2yi3	éryǐ	that's all; nothing more
// 二氧化碳	二氧化碳	er4yang3hua4tan4	èryǎnghuàtàn	carbon dioxide; CO2
// 发布	發布	fa1bu4	fābù	issue; announce; release
// 发财	發財	fa1 cai2	fā cái	get rich
// 发呆	發呆	fa1dai1	fādāi	stare blankly; daze off
// 发动	發動	fa1dong4	fādòng	to start; to launch; mobilize
// 发觉	發覺	fa1jue2	fājué	discover; detect
// 发射	發射	fa1she4	fāshè	to launch; to shoot (a projectile); to fire (a rocket)
// 发誓	發誓	fa1shi4	fāshì	to vow; to pledge; swear
// 发行	發行	fa1xing2	fāxíng	publish; to issue; distribute
// 发炎	發炎	fa1yan2	fāyán	become inflamed from infection or injury
// 发扬	發揚	fa1yang2	fāyáng	develop; make full use of; to carry on
// 发育	發育	fa1yu4	fāyù	develop; growth
// 法人	法人	fa3ren2	fǎrén	legal entity (i.e., a corporation)
// 番	番	fan1	fān	(mw for acts or deeds); foreign
// 凡是	凡是	fan2shi4	fánshì	every; any; all; without exception
// 繁华	繁華	fan2hua2	fánhuá	flourishing; bustling; prosperous
// 繁忙	繁忙	fan2mang2	fánmáng	busy; bustling
// 繁体字	繁體字	fan2ti3zi4	fántǐzì	traditional Chinese character
// 繁殖	繁殖	fan2zhi2	fánzhí	propagate; to breed; reproduce
// 反驳	反駁	fan3bo2	fǎnbó	retort; refute
// 反常	反常	fan3chang2	fǎncháng	abnormal; unusual
// 反感	反感	fang3an3	fǎngǎn	(strongly) dislike
// 反抗	反抗	fan3kang4	fǎnkàng	resist; to revolt
// 反馈	反饋	fan3kui4	fǎnkuì	feedback; send information back
// 反面	反面	fan3mian4	fǎnmiàn	the reverse side of sth.; opposite side of a topic
// 反射	反射	fan3she4	fǎnshè	reflex; reflection (from a mirror, etc.)
// 反思	反思	fan3si1	fǎnsī	think back over something that happened; to reflect; introspection
// 反问	反問	fan3wen4	fǎnwèn	ask a rhetorical question; answer a question with a question
// 反之	反之	fan3zhi1	fǎnzhī	whereas...; on the other hand ...; conversely ...
// 泛滥	泛濫	fan4lan4	fànlàn	to be in flood; to overflow (the banks); to inundate; to spread unchecked
// 范畴	範疇	fan4chou2	fànchóu	category
// 贩卖	販賣	fan4mai4	fànmài	sell; peddle; (often derogatory) to traffic in
// 方位	方位	fang1wei4	fāngwèi	position; direction; points of the compass; bearing
// 方言	方言	fang1yan2	fāngyán	dialect
// 方圆	方圓	fang1yuan2	fāngyuán	circumference; neighborhood; vicinity
// 方针	方針	fang1zhen1	fāngzhēn	policy; guidelines
// 防守	防守	fang2shou3	fángshǒu	to defend; protect; to guard
// 防御	防禦	fang2yu4	fángyù	defense; resist; to guard
// 防止	防止	fang2zhi3	fángzhǐ	prevent; protect; guard against; avoid
// 防治	防治	fang2zhi4	fángzhì	prevent and cure
// 访问	訪問	fang3wen4	fǎngwèn	to visit; call on; to interview
// 纺织	紡織	fang3zhi1	fǎngzhī	spinning and weaving; textile
// 放大	放大	fang4da4	fàngdà	enlarge; amplify
// 放射	放射	fang4she4	fàngshè	radiate; radioactive
// 飞禽走兽	飛禽走獸	fei1qin2zou3shou4	fēiqínzǒushòu	birds and animals; the beasts of the field and the birds of the air
// 飞翔	飛翔	fei1xiang2	fēixiáng	fly; hover
// 飞跃	飛躍	fei1yue4	fēiyuè	to leap
// 非法	非法	fei1fa3	fēifǎ	illegal
// 肥沃	肥沃	fei2wo4	féiwò	fertile
// 诽谤	誹謗	fei3bang4	fěibàng	slander; libel
// 肺	肺	fei4	fèi	lung
// 废除	廢除	fei4chu2	fèichú	abolish; annul; abrogate
// 废寝忘食	廢寢忘食	fei4qin3wang4shi2	fèiqǐnwàngshí	to forget even sleeping and eating
// 废墟	廢墟	fei4xu1	fèixū	ruins
// 沸腾	沸騰	fei4teng2	fèiténg	to boil; boiling
// 分辨	分辨	fen1bian4	fēnbiàn	distinguish; differentiate; resolve
// 分寸	分寸	fen1cun	fēncun	propriety; the limits of proper speech or action
// 分红	分紅	fen1 hong2	fēn hóng	a bonus; to award a bonus; to draw or recieve dividends; to share profits
// 分解	分解	fen1jie3	fēnjiě	to decompose; to resolve; to break down
// 分裂	分裂	fen1lie4	fēnliè	split up; to divide; separate
// 分泌	分泌	fen1mi4	fēnmì	secrete
// 分明	分明	fen1ming2	fēnmíng	clear; distinct; evidently; clearly
// 分歧	分歧	fen1qi2	fēnqí	difference (of opinion/position）
// 分散	分散	fen1san4	fēnsàn	to scatter; disperse; distribute
// 吩咐	吩咐	fen1fu4	fēnfù	instruct; instructions; to tell; to order (to do something)
// 坟墓	墳墓	fen2mu4	fénmù	tomb; sepulcher
// 粉末	粉末	fen3mo4	fěnmò	fine powder; dust
// 粉色	粉色	fen3se4	fěnsè	pink
// 粉碎	粉碎	fen3sui4	fěnsuì	to crash; break up
// 分量	分量	fen4liang4	fènliàng	weight; heft; amount
// 愤怒	憤怒	fen4nu4	fènnù	angry; indignant; furious; anger; indignation; wrath; ire
// 丰满	豐滿	feng1man3	fēngmǎn	plump; well developed; plentiful; Fengman district of Jilin City, Jilin Province
// 丰盛	豐盛	feng1sheng4	fēngshèng	sumptuous; lavish
// 丰收	豐收	feng1shou1	fēngshōu	bumper crop; have a good harvest
// 风暴	風暴	feng1bao4	fēngbào	storm; violent commotion
// 风度	風度	feng1du4	fēngdù	elegant demeanor; grace; poise; style
// 风光	風光	feng1guang1	fēngguāng	a natural scenic view; sight
// 风气	風氣	feng1qi4	fēngqì	general mood; atmosphere; common practice
// 风趣	風趣	feng1qu4	fēngqù	humor; wit; humorous
// 风土人情	風土人情	feng1tu3ren2qing2	fēngtǔrénqíng	local conditions (human and environmental)
// 风味	風味	feng1wei4	fēngwèi	local flavor; local style
// 封闭	封閉	feng1bi4	fēngbì	to seal; to close; confine
// 封建	封建	feng1jian4	fēngjiàn	feudal; feudalism
// 封锁	封鎖	feng1suo3	fēngsuǒ	to blockade; to seal off
// 锋利	鋒利	feng1li4	fēnglì	sharp (i.e. a knife blade); incisive; to the point
// 逢	逢	feng2	féng	to meet; come upon
// 奉献	奉獻	feng4xian4	fèngxiàn	consecrate; dedicate; devote
// 否决	否決	fou3jue2	fǒujué	veto; reject; overrule
// 夫妇	夫婦	fu1fu4	fūfù	married couple; husband and wife
// 夫人	夫人	fu1ren2	fūrén	lady; madam; Mrs.; wife
// 敷衍	敷衍	fu1yan3	fūyǎn	to elaborate (on a theme); to expound (the classics); to do sth. half-heartedly or just for show; barely enough to get by; perfunctory; apathetic; to skimp; to botch
// 服从	服從	fu2cong2	fúcóng	to obey; to comply
// 服气	服氣	fu2qi4	fúqì	be convinced
// 俘虏	俘虜	fu2lu3	fúlǔ	captive; prisoner
// 符号	符號	fu2hao4	fúhào	symbol; mark; sign
// 幅度	幅度	fu2du4	fúdù	width; margin; extent
// 辐射	輻射	fu2she4	fúshè	radiation
// 福利	福利	fu2li4	fúlì	material benefits; welfare; well-being
// 福气	福氣	fu2qi4	fúqì	good fortune
// 抚摸	撫摸	fu3mo1	fǔmō	gently caress and stroke; to pet; to fondle
// 抚养	撫養	fu3yang3	fǔyǎng	foster; bring up; raise
// 俯视	俯視	fu3shi4	fǔshì	look down at; overlook
// 辅助	輔助	fu3zhu4	fǔzhù	assist; aide
// 腐败	腐敗	fu3bai4	fǔbài	corruption; corrupt; rotten
// 腐烂	腐爛	fu3lan4	fǔlàn	rot; become gangrenous
// 腐蚀	腐蝕	fu3shi2	fǔshí	erode; corrode; corrupt; rusty
// 腐朽	腐朽	fu3xiu3	fǔxiǔ	rotten; decayed; decadent; degenerate
// 负担	負擔	fu4dan1	fùdān	to (bear a) burden; carry; a load
// 附和	附和	fu4he4	fùhè	repeat an agreement; copy sb.'s action or words
// 附件	附件	fu4jian4	fùjiàn	attachment; enclosure
// 附属	附屬	fu4shu3	fùshǔ	subsidiary; auxiliary; affiliate; attached
// 复活	複活	fu4huo2	fùhuó	resurrection
// 复兴	複興	fu4xing1	fùxīng	revive; restore
// 副	副	fu4	fù	vice-; secondary; auxiliary; deputy; assistant; classifier for pairs (i.e. glasses)
// 赋予	賦予	fu4yu3	fùyǔ	confer upon; bestow; endow; entrust (a task)
// 富裕	富裕	fu4yu4	fùyù	rich; to prosper; wealthy
// 腹泻	腹瀉	fu4xie4	fùxiè	diarrhea
// 覆盖	覆蓋	fu4gai4	fùgài	to cover
// 改良	改良	gai3liang2	gǎiliáng	improve; to reform
// 钙	鈣	gai4	gài	calcium
// 盖章	蓋章	gai4zhang1	gàizhāng	affix one's seal; seal; stamp
// 干旱	幹旱	gan1han4	gānhàn	drought; dry
// 干扰	幹擾	gan1rao3	gānrǎo	interfere; obstruction
// 干涉	幹涉	gan1she4	gānshè	interfere; intervene; meddle
// 干预	幹預	gan1yu4	gānyù	meddle; intervene; intervention
// 尴尬	尴尬	gang1a4	gāngà	awkward; embarrassed
// 感慨	感慨	gan3kai3	gǎnkǎi	lament; with a tinge of emotion or regret
// 感染	感染	gan3ran3	gǎnrǎn	infection; infect; influence
// 干劲	幹勁	gan4jin4	gànjìn	enthusiasm; energy; drive
// 纲领	綱領	gang1ling3	gānglǐng	program; guiding principle
// 岗位	崗位	gang3wei4	gǎngwèi	a post; a job
// 港口	港口	gang3kou3	gǎngkǒu	port; harbor
// 港湾	港灣	gang3wan1	gǎngwān	harbor; estuary
// 杠杆	杠杆	gang4gan3	gànggǎn	lever; pry bar; crowbar; financial leverage
// 高超	高超	gao1chao1	gāochāo	excellent; superb
// 高潮	高潮	gao1chao2	gāocháo	high tide; upsurge; climax; chorus (of a song)
// 高峰	高峰	gao1feng1	gāofēng	peak; summit; apex
// 高明	高明	gao1ming2	gāomíng	brilliant; wise
// 高尚	高尚	gao1shang4	gāoshàng	nobly; lofty
// 高涨	高漲	gao1zhang3	gāozhǎng	upsurge; (tensions, etc.) run high
// 稿件	稿件	gao3jian4	gǎojiàn	rough draft of a document
// 告辞	告辭	gao4ci2	gàocí	take leave; bid farewell
// 告诫	告誡	gao4jie4	gàojiè	warn; admonish
// 疙瘩	疙瘩	ge1da	gēda	swelling or lump on skin
// 鸽子	鴿子	ge1zi	gēzi	dove; pigeon
// 搁	擱	ge1	gē	to place; put aside
// 割	割	ge1	gē	to cut (apart/off)
// 歌颂	歌頌	ge1song4	gēsòng	sing the praise of; extol; eulogize
// 革命	革命	ge2ming4	gémìng	revolution; revolutionary (politics); cause great social change; rise in revolt; take part in revolution
// 格局	格局	ge2ju2	géjú	structure; pattern
// 格式	格式	ge2shi4	géshì	form; specification; format
// 隔阂	隔閡	ge2he2	géhé	estrangement; misunderstanding
// 隔离	隔離	ge2li2	gélí	insulate; separate; isolate
// 个体	個體	ge4ti3	gètǐ	individual
// 各抒己见	各抒己見	ge4shu1ji3jian4	gèshūjǐjiàn	everyone gives their own view
// 根深蒂固	根深蒂固	gen1 shen1 di4 gu4	gēn shēn dì gù	deep-rooted; ingrained; inveterate (problem, etc.)
// 根源	根源	gen1yuan2	gēnyuán	origin; root; source
// 跟前	跟前	gen1qian2	gēnqián	in front of
// 跟随	跟隨	gen1sui2	gēnsuí	follow; followed
// 跟踪	跟蹤	gen1zong1	gēnzōng	follow somebody's tracks; tail; shadow
// 更新	更新	geng1xin1	gēngxīn	to replace the old with new; to renew; to renovate; to upgrade; to update; to regenerate; to rejuvenate
// 更正	更正	geng1zheng4	gēngzhèng	correct; correction
// 耕地	耕地	geng1di4	gēngdì	arable land; to plow land
// 工艺品	工藝品	gong1yi4pin3	gōngyìpǐn	handicraft; handiwork
// 公安局	公安局	gong1an1ju2	gōngānjú	public security bureau
// 公道	公道	gong1dao	gōngdao	fair; equitable
// 公告	公告	gong1gao4	gōnggào	post; announcement
// 公关	公關	gong1guan1	gōngguān	public relations
// 公民	公民	gong1min2	gōngmín	citizen
// 公然	公然	gong1ran2	gōngrán	(do something) openly; undisguised
// 公认	公認	gong1ren4	gōngrèn	publicly know (to be); recognize; generally acknowledged
// 公式	公式	gong1shi4	gōngshì	formula
// 公务	公務	gong1wu4	gōngwù	public affairs; official business
// 公正	公正	gong1zheng4	gōngzhèng	just; fair
// 公证	公證	gong1zheng4	gōngzhèng	notarization
// 功劳	功勞	gong1lao2	gōngláo	contribution; meritorious; credit
// 功效	功效	gong1xiao4	gōngxiào	efficiency; effectiveness
// 攻击	攻擊	gong1ji1	gōngjī	to attack; accuse; to charge
// 攻克	攻克	gong1ke4	gōngkè	to capture; to take
// 供不应求	供不應求	gong1 bu2 ying4 qiu2	gōng bú yìng qiú	(saying) demand outstrips supply
// 供给	供給	gong1ji3	gōngjǐ	to furnish; provide; to supply
// 宫殿	宮殿	gong1dian4	gōngdiàn	palace
// 恭敬	恭敬	gong1jing4	gōngjìng	dutiful; deferential
// 巩固	鞏固	gong3gu4	gǒnggù	consolidate; solidify
// 共和国	共和國	gong4he2guo2	gònghéguó	republic
// 共计	共計	gong4ji4	gòngjì	sum up; total
// 共鸣	共鳴	gong4ming2	gòngmíng	physical resonance; sympathetic response to something
// 勾结	勾結	gou1jie2	gōujié	collude with; collaborate; gang up
// 钩子	鈎子	gou1zi	gōuzi	hook
// 构思	構思	gou4si1	gòusī	outline a story; make preliminary sketch
// 孤独	孤獨	gu1du2	gūdú	lonely; solitary
// 孤立	孤立	gu1li4	gūlì	isolate; isolated
// 姑且	姑且	gu1qie3	gūqiě	temporarily; the time being
// 辜负	辜負	gu1fu4	gūfù	let down; disappoint; fail to live up to
// 古董	古董	gu3dong3	gǔdǒng	antique
// 古怪	古怪	gu3guai4	gǔguài	eccentric; grotesque; oddly
// 股东	股東	gu3dong1	gǔdōng	stockholder; shareholder
// 股份	股份	gu3fen4	gǔfèn	a share (in a company) stock
// 骨干	骨幹	gu3gan4	gǔgàn	backbone; mainstay
// 鼓动	鼓動	gu3dong4	gǔdòng	agitate; instigate
// 固然	固然	gu4ran2	gùrán	admittedly; it is true that; indeed
// 固体	固體	gu4ti3	gùtǐ	solid
// 固有	固有	gu4you3	gùyǒu	intrinsic/inherent to something; native
// 固执	固執	gu4zhi2	gùzhí	persistent; stubborn
// 故乡	故鄉	gu4xiang1	gùxiāng	hometown; homeland; birthplace
// 故障	故障	gu4zhang4	gùzhàng	malfunction; breakdown
// 顾虑	顧慮	gu4lü4	gùlǜ	misgivings; apprehensions
// 顾问	顧問	gu4wen4	gùwèn	adviser; consultant
// 雇佣	雇傭	gu4yong1	gùyōng	employ; hire
// 拐杖	拐杖	guai3zhang4	guǎizhàng	crutch; walking stick
// 关怀	關懷	guan1huai2	guānhuái	care; solicitude; show care for; concerned about; attentive to
// 关照	關照	guan1zhao4	guānzhào	concern; look after; keep an eye on
// 观光	觀光	guang1uang1	guānguāng	sight see; tour
// 官方	官方	guan1fang1	guānfāng	official; (by the) government
// 管辖	管轄	guan3xia2	guǎnxiá	administer; have jurisdiction (over)
// 贯彻	貫徹	guan4che4	guànchè	to implement; put into practice; carry out
// 惯例	慣例	guan4li4	guànlì	conventional
// 灌溉	灌溉	guang4ai4	guàngài	irrigate
// 罐	罐	guan4	guàn	can; jar; pot; pitcher; jug
// 光彩	光彩	guang1cai3	guāngcǎi	splendor; radiance; brilliance; honor
// 光辉	光輝	guang1hui1	guānghuī	radiance; brilliant; glory
// 光芒	光芒	guang1mang2	guāngmáng	rays of light; brilliant rays; radiance
// 光荣	光榮	guang1rong2	guāngróng	glory; honor
// 广阔	廣闊	guang3kuo4	guǎngkuò	wide; vast
// 归根到底	歸根到底	gui1 gen1 dao4 di3	guī gēn dào dǐ	(saying) to sum it up ...
// 归还	歸還	gui1huan2	guīhuán	return something; revert
// 规范	規範	gui1fan4	guīfàn	standard (design or model); norm; without variation; to specify
// 规格	規格	gui1ge2	guīgé	standard; norm; specification
// 规划	規劃	gui1hua4	guīhuà	plan; program; project
// 规章	規章	gui1zhang1	guīzhāng	regulations; rule
// 轨道	軌道	gui3dao4	guǐdào	orbit; railway; trajectory
// 贵族	貴族	gui4zu2	guìzú	lord; nobility; nobleman; noblewoman
// 跪	跪	gui4	guì	kneel
// 棍棒	棍棒	gun4bang4	gùnbàng	club
// 国防	國防	guo2fang2	guófáng	national defense
// 国务院	國務院	guo2wu4yuan4	guówùyuàn	State Council (PRC); State Department (USA)
// 果断	果斷	guo3duan4	guǒduàn	firm; decisive
// 过度	過度	guo4du4	guòdù	excessive; exceeding; lavishly
// 过渡	過渡	guo4du4	guòdù	to cross a river by ferry; transition; interim
// 过奖	過獎	guo4jiang3	guòjiǎng	praise excessively; flatter
// 过滤	過濾	guo4lü4	guòlǜ	to filter; filter
// 过失	過失	guo4shi1	guòshī	defect; fault
// 过问	過問	guo4wen4	guòwèn	take an interest in; get involved with
// 过瘾	過瘾	guo4yin3	guòyǐn	satisfy a craving; get a kick out of sth; do to one's heart's content
// 过于	過于	guo4yu2	guòyú	too much; excessively
// 嗨	嗨	hai1	hāi	hey/hi (loanword); oh; alas;
// 海拔	海拔	hai3ba2	hǎibá	height above sea level; elevation
// 海滨	海濱	hai3bin1	hǎibīn	shore; seaside
// 含糊	含糊	han2hu	hánhu	unclear; vague; unsure
// 含义	含義	han2yi4	hányì	implied meaning; connotation
// 寒暄	寒暄	han2xuan1	hánxuān	exchanging conventional greetings; winter and summer
// 罕见	罕見	han3jian4	hǎnjiàn	rare; rarely seen; peculiar
// 捍卫	捍衛	han4wei4	hànwèi	defend; uphold; safeguard
// 行列	行列	hang2lie4	hángliè	procession; ranks; queue
// 航空	航空	hang2kong1	hángkōng	aviation
// 航天	航天	hang2tian1	hángtiān	space flight
// 航行	航行	hang2xing2	hángxíng	to sail; to fly
// 毫米	毫米	hao2mi3	háomǐ	millimeter
// 毫无	毫無	hao2 wu2	háo wú	not at all; completely without; not in the least
// 豪迈	豪邁	hao2mai4	háomài	bold and generous; heroic
// 号召	號召	hao4zhao4	hàozhào	call upon; summon; to appeal
// 耗费	耗費	hao4fei4	hàofèi	waste; spend; consume
// 呵	呵	he1	hē	breathe out; scold
// 合并	合並	he2bing4	hébìng	merge; annex
// 合成	合成	he2cheng2	héchéng	compound; synthesis; mixture
// 合伙	合夥	he2huo3	héhuǒ	to make a partnership
// 合算	合算	he2suan4	hésuàn	worthwhile; reckon up
// 和蔼	和藹	he2'ai3	hé'ǎi	kindly; good-tempered; amiable
// 和解	和解	he2jie3	héjiě	settlement; to become reconciled
// 和睦	和睦	he2mu4	hémù	peaceful relations; harmonious
// 和气	和氣	he2qi	héqi	friendly; polite; amiable
// 和谐	和諧	he2xie2	héxié	harmonious; concordant
// 嘿	嘿	hei1	hēi	hey; interjection for calling attention
// 痕迹	痕迹	hen2ji4	hénjì	vestige; trace
// 狠心	狠心	hen3 xin1	hěn xīn	callous; cruel; cold-blooded
// 恨不得	恨不得	hen4 bu de	hèn bu de	cannot bear not; be dying to
// 横	橫	heng2	héng	horizontal; across; (horizontal character stroke)
// 哼	哼	heng1	hēng	groan; snort; to hum; croon
// 轰动	轟動	hong1dong4	hōngdòng	a sensation; a stir
// 烘	烘	hong1	hōng	to dry or warm by the fire; to bake; to heat by fire; to set off by contrast
// 宏观	宏觀	hong2guan1	hóngguān	macro-; macroscopic
// 宏伟	宏偉	hong2wei3	hóngwěi	grand; imposing; magnificent; grand
// 洪水	洪水	hong2shui3	hóngshuǐ	flood
// 哄	哄	hong3	hǒng	fool; coax; to amuse (a child)
// 喉咙	喉嚨	hou2long2	hóulóng	throat; larynx
// 吼	吼	hou3	hǒu	roar; howl
// 后代	後代	hou4dai4	hòudài	posterity; later generations; descendants
// 后顾之忧	後顧之憂	hou4gu4zhi1you1	hòugùzhīyōu	fears of trouble in the rear (idiom); family worries (obstructing freedom to act); trouble back at home; worries about the future consequences; often in negative expressions, meaning no worries about anything
// 后勤	後勤	hou4qin2	hòuqín	logistics
// 候选	候選	hou4xuan3	hòuxuǎn	candidate
// 呼唤	呼喚	hu1huan4	hūhuàn	call out (a name etc.); shout
// 呼啸	呼嘯	hu1xiao4	hūxiào	whistle; scream; howl
// 呼吁	呼籲	hu1yu4	hūyù	call on (someone to do something); appeal
// 忽略	忽略	hu1lüe4	hūlüè	ignore; forget about; neglect
// 胡乱	胡亂	hu2luan4	húluàn	carelessly; recklessly
// 胡须	胡須	hu2xu1	húxū	beard; moustache; whiskers
// 湖泊	湖泊	hu2po1	húpō	lake
// 花瓣	花瓣	hua1ban4	huābàn	petal
// 花蕾	花蕾	hua1lei3	huālěi	(flower) bud
// 华丽	華麗	hua2li4	huálì	gorgeous; magnificent
// 华侨	華僑	hua2qiao2	huáqiáo	overseas Chinese
// 化肥	化肥	hua4fei2	huàféi	chemical fertilizer
// 化石	化石	hua4shi2	huàshí	fossil
// 化验	化驗	hua4yan4	huàyàn	laboratory test; chemically examine
// 化妆	化妝	hua4 zhuang1	huà zhuāng	put on make-up
// 划分	劃分	hua4fen1	huàfēn	divide up; differentiate
// 画蛇添足	畫蛇添足	hua4she2tian1zu2	huàshétiānzú	draw legs on a snake (idiom); to ruin something by adding something superfluous
// 话筒	話筒	hua4tong3	huàtǒng	microphone; transmitter; megaphone
// 欢乐	歡樂	huan1le4	huānlè	gaiety; glee; delighted
// 还原	還原	huan2yuan2	huányuán	restore to the original state; (Chemistry) reduce
// 环节	環節	huan2jie2	huánjié	link; sector; segment (of annelid worms)
// 缓和	緩和	huan3he2	huǎnhé	alleviate; to moderate; to ease (tension)
// 患者	患者	huan4zhe3	huànzhě	sufferer; patient; the sick
// 荒凉	荒涼	huang1liang2	huāngliáng	desolate
// 荒谬	荒謬	huang1miu4	huāngmiù	ridiculous; nonsensical
// 荒唐	荒唐	huang1tang	huāngtang	beyond belief; preposterous; absurd; intemperate
// 皇帝	皇帝	huang2di4	huángdì	emperor
// 皇后	皇後	huang2hou4	huánghòu	an empress
// 黄昏	黃昏	huang2hun1	huánghūn	dusk; evening; nightfall
// 恍然大悟	恍然大悟	huang3ran2da4wu4	huǎngrándàwù	suddenly see the light; suddenly realize what has happened; twig
// 晃	晃	huang4	huàng	to sway; to shake
// 挥霍	揮霍	hui1huo4	huīhuò	squander money without restraint; squander
// 辉煌	輝煌	hui1huang2	huīhuáng	splendid; glorious
// 回报	回報	hui2bao4	huíbào	repayment; payback
// 回避	回避	hui2bi4	huíbì	avoid; shun; evade
// 回顾	回顧	hui2gu4	huígù	look back; to review
// 回收	回收	hui2shou1	huíshōu	recycle; recover and put back to use
// 悔恨	悔恨	hui3hen4	huǐhèn	remorse; repentance
// 毁灭	毀滅	hui3mie4	huǐmiè	perish; ruin; destroy
// 汇报	彙報	hui4bao4	huìbào	report; give an account of; to collect information and report back
// 会晤	會晤	hui4wu4	huìwù	meet; meeting; conference
// 贿赂	賄賂	hui4lu4	huìlù	to bribe
// 昏迷	昏迷	hun1mi2	hūnmí	lose consciousness; be in a coma
// 荤	葷	hun1	hūn	meat or fish dish; pungent vegetables forbidden to Buddhist vegetarians
// 浑身	渾身	hun2shen1	húnshēn	entire body; from head to foot
// 混合	混合	hun4he2	hùnhé	to mix; to blend
// 混乱	混亂	hun4luan4	hùnluàn	confusion; chaotic
// 混淆	混淆	hun4xiao2	hùnxiáo	obscure; confuse; mix up; blur; mislead; confusing
// 混浊	混濁	hun4zhuo2	hùnzhuó	muddy; dirty; turbid
// 活该	活該	huo2gai1	huógāi	serve sb. right; deservedly; ought
// 活力	活力	huo2li4	huólì	energy; vitality; vigor
// 火箭	火箭	huo3jian4	huǒjiàn	rocket
// 火焰	火焰	huo3yan4	huǒyàn	blaze; flame
// 火药	火藥	huo3yao4	huǒyào	gunpowder
// 货币	貨幣	huo4bi4	huòbì	currency; money
// 讥笑	譏笑	ji1xiao4	jīxiào	sneer at; deride
// 饥饿	饑餓	ji1'e4	jī'è	hunger; hungry; starve
// 机动	機動	ji1dong4	jīdòng	motorized; mobile; flexible
// 机构	機構	ji1gou4	jīgòu	structure; organization; institution
// 机灵	機靈	ji1ling	jīling	clever; quick-witted; smartness
// 机密	機密	ji1mi4	jīmì	secret; classified (information)
// 机械	機械	ji1xie4	jīxiè	machine; mechanical
// 机遇	機遇	ji1yu4	jīyù	opportunity; stroke of good luck; favorable circumstance
// 机智	機智	ji1zhi4	jīzhì	tact; quick-witted; resourceful
// 基地	基地	ji1di4	jīdì	base (of operations)
// 基金	基金	ji1jin1	jījīn	fund; endowment
// 基因	基因	ji1yin1	jīyīn	gene
// 激发	激發	ji1fa1	jīfā	to arouse; excite
// 激励	激勵	ji1li4	jīlì	urge; encourage; motivation
// 激情	激情	ji1qing2	jīqíng	passion; strong emotion; fervor; enthusiasm
// 及早	及早	ji2zao3	jízǎo	as soon as possible; at the earliest possible time
// 吉祥	吉祥	ji2xiang2	jíxiáng	lucky
// 级别	級別	ji2bie2	jíbié	rank; level; grade
// 极端	極端	ji2duan1	jíduān	extreme
// 极限	極限	ji2xian4	jíxiàn	limit; extreme boundary
// 即便	即便	ji2bian4	jíbiàn	even if; even though
// 即将	即將	ji2jiang1	jíjiāng	will shortly; soon; be on the verge of
// 急功近利	急功近利	ji2gong1jin4li4	jígōngjìnlì	eager for success and profit
// 急剧	急劇	ji2ju4	jíjù	rapid; sudden
// 急切	急切	ji2qie4	jíqiè	eager; impatient; imperative
// 急于求成	急于求成	ji2yu2qiu2cheng2	jíyúqiúchéng	impatient for success
// 急躁	急躁	ji2zao4	jízào	irritable; impetuous; impatient
// 疾病	疾病	ji2bing4	jíbìng	disease; illness; sickness; ailment
// 集团	集團	ji2tuan2	jítuán	group; bloc; circle; clique
// 嫉妒	嫉妒	ji2du4	jídù	to be jealous; to envy, covet; to hate; to begrudge
// 籍贯	籍貫	ji2guan4	jíguàn	place of one's ancestry
// 给予	給予	ji3yu3	jǐyǔ	to give
// 计较	計較	ji4jiao4	jìjiào	focus excessively on; haggle; bicker; argue
// 记性	記性	ji4xing	jìxing	memory
// 记载	記載	ji4zai3	jìzǎi	write down; to record
// 纪要	紀要	ji4yao4	jìyào	written summary of a meeting; minutes
// 技巧	技巧	ji4qiao3	jìqiǎo	skill; technique
// 忌讳	忌諱	ji4hui4	jìhuì	avoid as a taboo; abstain from; taboo
// 季度	季度	ji4du4	jìdù	(financial) quarter; period of three months
// 季军	季軍	ji4jun1	jìjūn	third in a race; bronze medalist
// 迹象	迹象	ji4xiang4	jìxiàng	mark; indication; sign
// 继承	繼承	ji4cheng2	jìchéng	inherit; carry on; succeed
// 寄托	寄托	ji4tuo1	jìtuō	entrust somebody someone's care; consign; commit
// 寂静	寂靜	ji4jing4	jìjìng	quiet
// 加工	加工	jia1 gong1	jiā gōng	to process; processing; machining
// 加剧	加劇	jia1ju4	jiājù	aggravate; intensify; sharpen; accelerate
// 夹杂	夾雜	jia1za2	jiāzá	mix together; have two dissimilar substances mixed together
// 佳肴	佳肴	jia1yao2	jiāyáo	delicacy
// 家常	家常	jia1chang2	jiācháng	the daily life of a family; home-style (food)
// 家伙	家夥	jia1huo	jiāhuo	guy; chap; tool; weapon
// 家属	家屬	jia1shu3	jiāshǔ	family member; a dependent
// 家喻户晓	家喻戶曉	jia1 yu4 hu4 xiao3	jiā yù hù xiǎo	become a household name; well-known
// 尖端	尖端	jian1duan1	jiānduān	highest peak; the tip; sharp pointed end; most advanced and sophisticated
// 尖锐	尖銳	jian1rui4	jiānruì	sharp; intense; penetrating
// 坚定	堅定	jian1ding4	jiāndìng	firm; staunch; resolute
// 坚固	堅固	jiang1u4	jiāngù	firm; strong; sturdy
// 坚韧	堅韌	jian1ren4	jiānrèn	tough and durable; hard-bitten; firm and tenacious
// 坚实	堅實	jian1shi2	jiānshí	firm and substantial; solid
// 坚硬	堅硬	jian1ying4	jiānyìng	hard; solid
// 艰难	艱難	jian1nan2	jiānnán	difficult; arduous
// 监督	監督	jian1du1	jiāndū	control; monitor; supervise; inspect
// 监视	監視	jian1shi4	jiānshì	oversee; to monitor
// 监狱	監獄	jian1yu4	jiānyù	prison; jail
// 煎	煎	jian1	jiān	pan-fry; fry in shallow oil
// 拣	揀	jian3	jiǎn	choose; select; sort out
// 检讨	檢討	jian3tao3	jiǎntǎo	self-criticism; analyze
// 检验	檢驗	jian3yan4	jiǎnyàn	inspect; examine; to test
// 剪彩	剪彩	jian3 cai3	jiǎn cǎi	cut the ribbon at an opening ceremony
// 简化	簡化	jian3hua4	jiǎnhuà	simplify; simplification
// 简陋	簡陋	jian3lou4	jiǎnlòu	simple and crude (i.e. room or building)
// 简体字	簡體字	jian3ti3zi4	jiǎntǐzì	simplified Chinese characters
// 简要	簡要	jian3yao4	jiǎnyào	concise; brief
// 见多识广	見多識廣	jian4duo1shi2guang3	jiànduōshíguǎng	experienced and knowledgeable
// 见解	見解	jian4jie3	jiànjiě	view; opinion; understanding
// 见闻	見聞	jian4wen2	jiànwén	information
// 见义勇为	見義勇爲	jian4yi4yong3wei2	jiànyìyǒngwéi	to see what is right and act courageously (idiom, from Analects); to stand up bravely for the truth; acting heroically in a just cause
// 间谍	間諜	jian4die2	jiàndié	a spy; intelligence agent
// 间隔	間隔	jiang4e2	jiàngé	interval; intermission; gap; be separated
// 间接	間接	jian4jie1	jiànjiē	indirect
// 剑	劍	jian4	jiàn	sword
// 健全	健全	jian4quan2	jiànquán	Perfect; sound; to perfect/strengthen/amplify
// 舰艇	艦艇	jian4ting3	jiàntǐng	warship; naval vessel
// 践踏	踐踏	jian4ta4	jiàntà	trample
// 溅	濺	jian4	jiàn	to splash
// 鉴别	鑒別	jian4bie2	jiànbié	differentiate; distinguish
// 鉴定	鑒定	jian4ding4	jiàndìng	appraise; identify; evaluate
// 鉴于	鑒于	jian4yu2	jiànyú	in light of; in view of; seeing that
// 将近	將近	jiang1jin4	jiāngjìn	almost; nearly; close to
// 将就	將就	jiang1jiu	jiāngjiu	put up with; accept somewhat reluctantly
// 将军	將軍	jiang1jun1	jiāngjūn	a general (military officer)
// 僵硬	僵硬	jiang1ying4	jiāngyìng	stiff
// 奖励	獎勵	jiang3li4	jiǎnglì	to reward (as encouragement)
// 奖赏	獎賞	jiang3shang3	jiǎngshǎng	to reward
// 桨	槳	jiang3	jiǎng	oar; paddle
// 降临	降臨	jiang4lin2	jiànglín	befall; descend
// 交叉	交叉	jiao1cha1	jiāochā	cross; intersect
// 交代	交代	jiao1dai4	jiāodài	explain; account for; hand over
// 交涉	交涉	jiao1she4	jiāoshè	negotiate; discuss a matter with the opposing side
// 交易	交易	jiao1yi4	jiāoyì	business transaction; deal; trade
// 娇气	嬌氣	jiao1qi4	jiāoqì	delicate; effeminate; squeamish
// 焦点	焦點	jiao1dian3	jiāodiǎn	focus; focal point
// 焦急	焦急	jiao1ji2	jiāojí	anxiety; worried
// 角落	角落	jiao3luo4	jiǎoluò	corner; nook
// 侥幸	僥幸	jiao3xing4	jiǎoxìng	by luck; by a fluke
// 搅拌	攪拌	jiao3ban4	jiǎobàn	stir; mix up
// 缴纳	繳納	jiao3na4	jiǎonà	to pay (taxes)
// 较量	較量	jiao4liang4	jiàoliàng	competition; to have a contest with sb.
// 教养	教養	jiao4yang3	jiàoyǎng	upbringing; education; bring up; nurture and train
// 阶层	階層	jie1ceng2	jiēcéng	hierarchy
// 皆	皆	jie1	jiē	all; each and every; in all cases
// 接连	接連	jie1lian2	jiēlián	one after another; in a row; in succession
// 揭露	揭露	jie1lu4	jiēlù	expose; unmask
// 节制	節制	jie2zhi4	jiézhì	to be restrained or moderate
// 节奏	節奏	jie2zou4	jiézòu	rhythm; cadence; tempo
// 杰出	傑出	jie2chu1	jiéchū	outstanding; preeminent
// 结晶	結晶	jie2jing1	jiéjīng	a crystal; to crystallize
// 结局	結局	jie2ju2	jiéjú	conclusion; ending
// 结算	結算	jie2suan4	jiésuàn	settle up the bill; close an account
// 截止	截止	jie2zhi3	jiézhǐ	end; close; stop; expiration
// 截至	截至	jie2zhi4	jiézhì	up until; by (a specified time
// 竭尽全力	竭盡全力	jie2jin4 quan2li4	jiéjìn quánlì	to spare no efforts; do one's utmost
// 解除	解除	jie3chu2	jiěchú	remove; relieve (someone of their duties); sack; get rid of
// 解放	解放	jie3fang4	jiěfàng	liberate
// 解雇	解雇	jie3gu4	jiěgù	fire; lay off; dismiss from
// 解剖	解剖	jie3pou1	jiěpōu	dissect; analyze; anatomy
// 解散	解散	jie3san4	jiěsàn	dismiss; dissolve; disband
// 解体	解體	jie3ti3	jiětǐ	disintegrate
// 戒备	戒備	jie4bei4	jièbèi	take precautions; be on the alert
// 界限	界限	jie4xian4	jièxiàn	boundary; marginal; limit
// 借鉴	借鑒	jie4jian4	jièjiàn	take example by; use other people's experience
// 借助	借助	jie4zhu4	jièzhù	get help from
// 金融	金融	jin1rong2	jīnróng	banking finance; financial
// 津津有味	津津有味	jin1jin1 you3 wei4	jīnjīn yǒu wèi	(saying) with gusto; eagerly; with great interest
// 紧迫	緊迫	jin3po4	jǐnpò	urgent; urgency
// 锦上添花	錦上添花	jin3shang4tian1hua1	jǐnshàngtiānhuā	lit. on brocade, add flowers (idiom); to decorate sth already perfect / gilding the lily
// 进而	進而	jin4'er2	jìn'ér	and then (what follows next)
// 进攻	進攻	jing4ong1	jìngōng	attack (military); assault
// 进化	進化	jin4hua4	jìnhuà	evolution
// 进展	進展	jin4zhan3	jìnzhǎn	make progress; development; make headway
// 近来	近來	jin4lai2	jìnlái	recently; lately
// 晋升	晉升	jin4sheng1	jìnshēng	promote to a higher position
// 浸泡	浸泡	jin4pao4	jìnpào	to soak
// 茎	莖	jing1	jīng	stalk; stem
// 经费	經費	jing1fei4	jīngfèi	funds; expenses
// 经纬	經緯	jing1wei3	jīngwěi	warp and woof; longitude and latitude; main points
// 惊动	驚動	jing1dong4	jīngdòng	alarm; alert; startle; disturb
// 惊奇	驚奇	jing1qi2	jīngqí	amaze; astonished
// 惊讶	驚訝	jing1ya4	jīngyà	surprised; astonished; astound
// 兢兢业业	兢兢業業	jing1jing1 ye4ye4	jīngjīng yèyè	cautious and conscientious
// 精打细算	精打細算	jing1 da3 xi4 suan4	jīng dǎ xì suàn	(saying) meticulous planning and careful accounting
// 精华	精華	jing1hua2	jīnghuá	elite; best feature; most important part of an object; essence; quintessence
// 精简	精簡	jing1jian3	jīngjiǎn	simplify; reduce
// 精密	精密	jing1mi4	jīngmì	accuracy; exact; precise; refined
// 精确	精確	jing1que4	jīngquè	accurate; precise
// 精通	精通	jing1tong1	jīngtōng	proficient; have a good command of
// 精心	精心	jing1xin1	jīngxīn	with utmost care; meticulous; detailed
// 精益求精	精益求精	jing1 yi4 qiu2 jing1	jīng yì qiú jīng	(saying) improving and wanting to improve even more
// 精致	精致	jing1zhi4	jīngzhì	exquisite; delicate; refined
// 井	井	jing3	jǐng	a well
// 颈椎	頸椎	jing3zhui1	jǐngzhuī	cervical vertebra; the seven cervical vertebrae in the neck of humans and most mammals
// 警告	警告	jing3gao4	jǐnggào	to warn; admonish
// 警惕	警惕	jing3ti4	jǐngtì	vigilant; alert; be on guard
// 竞赛	競賽	jing4sai4	jìngsài	race; contest; competition
// 竞选	競選	jing4xuan3	jìngxuǎn	run for (electoral) office; take part in an election
// 敬礼	敬禮	jing4li3	jìnglǐ	to salute; best regards
// 敬业	敬業	jing4ye4	jìngyè	work ethic
// 境界	境界	jing4jie4	jìngjiè	boundary; state; realm; level
// 镜头	鏡頭	jing4tou2	jìngtóu	camera shot (in a movie, etc.); scene; camera lens
// 纠纷	糾紛	jiu1fen1	jiūfēn	dispute; quarrel
// 纠正	糾正	jiu1zheng4	jiūzhèng	to correct; to make right
// 酒精	酒精	jiu3jing1	jiǔjīng	alcohol; ethanol
// 救济	救濟	jiu4ji4	jiùjì	emergency relief; aid; help out in a disaster
// 就近	就近	jiu4jin4	jiùjìn	nearby; in a close neighborhood
// 就业	就業	jiu4ye4	jiùyè	employment; getting a job
// 就职	就職	jiu4 zhi2	jiù zhí	take office; assume a post
// 拘留	拘留	ju1liu2	jūliú	detain (a prison); keep (someone) in custody
// 拘束	拘束	ju1shu4	jūshù	restrict; constrained; ill at ease; reticent
// 居民	居民	ju1min2	jūmín	resident; inhabitant
// 居住	居住	ju1zhu4	jūzhù	reside; dwell; to live (in a place)
// 鞠躬	鞠躬	ju1gong1	jūgōng	to bow
// 局部	局部	ju2bu4	júbù	part; local
// 局面	局面	ju2mian4	júmiàn	aspect; situation
// 局势	局勢	ju2shi4	júshì	situation; state (of affairs)
// 局限	局限	ju2xian4	júxiàn	to limit; confine; restrict or confine sth.
// 咀嚼	咀嚼	ju3jue2	jǔjué	to chew
// 沮丧	沮喪	ju3sang4	jǔsàng	dejected; depressed; dispirited
// 举动	舉動	ju3dong4	jǔdòng	action; act; (make) a move; movement
// 举世瞩目	舉世矚目	ju3shi4 zhu3mu4	jǔshì zhǔmù	attract worldwide attention
// 举足轻重	舉足輕重	ju3zu2qing1zhong4	jǔzúqīngzhòng	a foot's move sways the balance; hold the balance of power; play a key role
// 剧本	劇本	ju4ben3	jùběn	script for a play; opera; movie; etc
// 剧烈	劇烈	ju4lie4	jùliè	acute; violent; severe
// 据悉	據悉	ju4xi1	jùxī	according to reports; it is reported (that)
// 聚精会神	聚精會神	ju4 jing1 hui4 shen2	jù jīng huì shén	concentrate one's attention
// 卷	卷	juan3	juǎn	to roll (up); to coil; (mw for tapes)
// 决策	決策	jue2ce4	juécè	Make policy; make strategic decision
// 觉悟	覺悟	jue2wu4	juéwù	consciousness; awareness; (Buddhist) enlightenment
// 觉醒	覺醒	jue2xing3	juéxǐng	awaken; arousal; realize
// 绝望	絕望	jue2 wang4	jué wàng	desperation; forlorn; hopeless
// 倔强	倔強	jue2jiang4	juéjiàng	stubborn; unbending
// 军队	軍隊	jun1dui4	jūnduì	army troops
// 君子	君子	jun1zi3	jūnzǐ	gentleman; man of noble character
// 卡通	卡通	ka3tong1	kǎtōng	cartoon
// 开采	開采	kai1cai3	kāicǎi	extract ore or some other natural resource from a mine
// 开除	開除	kai1chu2	kāichú	expel; to discharge; to kick out
// 开阔	開闊	kai1kuo4	kāikuò	wide; open (spaces)
// 开朗	開朗	kai1lang3	kāilǎng	outgoing and cheerful; optimistic; carefree; spacious and well-lit
// 开明	開明	kai1ming2	kāimíng	enlightened; open-minded
// 开辟	開辟	kai1pi4	kāipì	open up; to start; to build
// 开拓	開拓	kai1tuo4	kāituò	break new ground (for agriculture); development
// 开展	開展	kai1zhan3	kāizhǎn	begin to develop; to launch
// 开支	開支	kai1zhi1	kāizhī	expenditures; pay; expenses
// 刊登	刊登	kan1deng1	kāndēng	publish in a newspaper; carry a story
// 刊物	刊物	kan1wu4	kānwù	publication; periodical; journal
// 勘探	勘探	kan1tan4	kāntàn	exploration
// 侃侃而谈	侃侃而談	kan3kan3'er2tan2	kǎnkǎn'értán	speak frankly and in measured tones; argue about leisurely and boldly
// 砍伐	砍伐	kan3fa2	kǎnfá	cut down; lop; hew (as a tree)
// 看待	看待	kan4dai4	kàndài	look upon; regard
// 慷慨	慷慨	kang1kai3	kāngkǎi	vehement; fervent; generous
// 扛	扛	kang2	káng	to carry on one's shoulder
// 抗议	抗議	kang4yi4	kàngyì	to protest; protest
// 考察	考察	kao3cha2	kǎochá	inspect; investigate; analyze
// 考古	考古	kao3gu3	kǎogǔ	archaeology
// 考核	考核	kao3he2	kǎohé	examine; check up on
// 考验	考驗	kao3yan4	kǎoyàn	put to the test; trial
// 靠拢	靠攏	kao4long3	kàolǒng	draw close; close up; move up
// 科目	科目	ke1mu4	kēmù	(school) subject
// 磕	磕	ke1	kē	knock; tap
// 可观	可觀	ke3guan1	kěguān	considerable; impressive
// 可口	可口	ke3kou3	kěkǒu	tasty; taste good
// 可恶	可惡	ke3wu4	kěwù	hateful; abominable; repulsive
// 可行	可行	ke3xing2	kěxíng	feasible
// 渴望	渴望	ke3wang4	kěwàng	wishful; to yearn for; desire
// 克制	克制	ke4zhi4	kèzhì	restrain; take a firm hold on
// 刻不容缓	刻不容緩	ke4bu4rong2huan3	kèbùrónghuǎn	demand immediate action; brook no delay
// 客户	客戶	ke4hu4	kèhù	customer; account; client
// 课题	課題	ke4ti2	kètí	task; problem; issue; question for discussion
// 恳切	懇切	ken3qie4	kěnqiè	earnest; genuine; fair-spoken
// 啃	啃	ken3	kěn	gnaw; nibble; bite
// 坑	坑	keng1	kēng	pit; hole; defraud
// 空洞	空洞	kong1dong4	kōngdòng	empty; hollow; vacuous; devoid of content
// 空前绝后	空前絕後	kong1qian2jue2hou4	kōngqiánjuéhòu	unprecedented and unrepeatable; never to be reduplicated; the first and the last; unmatched; unique
// 空想	空想	kong1xiang3	kōngxiǎng	daydream; fantasy
// 空虚	空虛	kong1xu1	kōngxū	hollow; emptiness; meaningless
// 孔	孔	kong3	kǒng	hole
// 恐怖	恐怖	kong3bu4	kǒngbù	afraid; terror
// 恐吓	恐嚇	kong3he4	kǒnghè	to threaten
// 恐惧	恐懼	kong3ju4	kǒngjù	fear; dread; phobia
// 空白	空白	kong4bai2	kòngbái	blank space; blank
// 空隙	空隙	kong4xi4	kòngxì	crack; gap between two objects
// 口气	口氣	kou3qi4	kǒuqì	tone of voice; manner of speaking
// 口腔	口腔	kou3qiang1	kǒuqiāng	space inside mouth (oral cavity)
// 口头	口頭	kou3tou2	kǒutóu	oral; verbal
// 口音	口音	kou3yin1	kǒuyīn	accent
// 扣	扣	kou4	kòu	to fasten; to button; button; buckle; knot; to arrest; to confiscate; to deduct (money); discount; to knock; put upside down; to smash or spike (a ball); to cover (with a bowl etc); fig. to tag a label on sb
// 枯萎	枯萎	ku1wei3	kūwěi	wither; withered
// 枯燥	枯燥	ku1zao4	kūzào	dry and dull; uninteresting
// 哭泣	哭泣	ku1qi4	kūqì	weep; cry; sob
// 苦尽甘来	苦盡甘來	ku3jing4an1lai2	kǔjìngānlái	sweetness comes after bitterness; the hard times are over and the good times are just beginning
// 苦涩	苦澀	ku3se4	kǔsè	bitter and astringent; pained; agonized; anguished
// 挎	挎	kua4	kuà	carry over one's shoulder or slung on one's side
// 跨	跨	kua4	kuà	step across; stride; straddle; to cross
// 快活	快活	kuai4huo	kuàihuo	happy; cheerful
// 宽敞	寬敞	kuan1chang	kuānchang	spacious; commodious
// 宽容	寬容	kuan1rong2	kuānróng	tolerant; lenient
// 款待	款待	kuan3dai4	kuǎndài	to entertain (guests)
// 款式	款式	kuan3shi4	kuǎnshì	pattern; design; style
// 筐	筐	kuang1	kuāng	basket
// 旷课	曠課	kuang4 ke4	kuàng kè	cut school; be truant from school
// 况且	況且	kuang4qie3	kuàngqiě	moreover; besides; in addition
// 矿产	礦産	kuang4chan3	kuàngchǎn	minerals
// 框架	框架	kuang4jia4	kuàngjià	frame; framework; skeleton
// 亏待	虧待	kui1dai4	kuīdài	treat sb. unfairly
// 亏损	虧損	kui1sun3	kuīsǔn	deficit; (financial) loss
// 捆绑	捆綁	kun3bang3	kǔnbǎng	tie up; bundled
// 扩充	擴充	kuo4chong1	kuòchōng	expand; extend
// 扩散	擴散	kuo4san4	kuòsàn	spread; proliferation
// 扩张	擴張	kuo4zhang1	kuòzhāng	expansion; extension
// 喇叭	喇叭	la3ba	lǎba	horn; trumpet; loudspeaker
// 蜡烛	蠟燭	la4zhu2	làzhú	candle
// 啦	啦	la	la	sentence-final particle: a contraction of 了 (le) and 啊 (a)
// 来历	來曆	lai2li4	láilì	history; antecedents; origin
// 来源	來源	lai2yuan2	láiyuán	source; originate
// 栏目	欄目	lan2mu4	lánmù	column (in a newspaper,TV,etc)
// 懒惰	懶惰	lan3duo4	lǎnduò	lazy; idle
// 狼狈	狼狽	lang2bei4	lángbèi	in a difficult position or situation; in a tight corner; scoundrel! (derogatory)
// 狼吞虎咽	狼吞虎咽	lang2tun1hu3yan4	lángtūnhǔyàn	wolf down one's food (idiom); gorge oneself
// 捞	撈	lao1	lāo	dredge up; fish up
// 牢固	牢固	lao2gu4	láogù	firm; secure; solid
// 牢骚	牢騷	lao2sao1	láosāo	grumble; complaint
// 唠叨	唠叨	lao2dao	láodao	be talkative (especially about trivial matters); be garrulous; prattle
// 乐趣	樂趣	le4qu4	lèqù	delight; pleasure; joy; fun
// 乐意	樂意	le4yi4	lèyì	be happy/willing do something; content; satisfied
// 雷达	雷達	lei2da2	léidá	radar
// 类似	類似	lei4si4	lèisì	similar; analogous
// 冷酷	冷酷	leng3ku4	lěngkù	grim; unfeeling; callous
// 冷落	冷落	leng3luo4	lěngluò	to treat somebody coldy; to snub; desolate; to give the cold shoulder
// 冷却	冷卻	leng3que4	lěngquè	cooling; cool off
// 愣	愣	leng4	lèng	dumbfounded; stupefied; distracted; (spoken) blunt; rash
// 黎明	黎明	li2ming2	límíng	dawn; daybreak
// 礼节	禮節	li3jie2	lǐjié	etiquette; proprieties; festival
// 礼尚往来	禮尚往來	li3shang4wang3lai2	lǐshàngwǎnglái	courtesy requires reciprocity
// 里程碑	裏程碑	li3cheng2bei1	lǐchéngbēi	milestone
// 理睬	理睬	li3cai3	lǐcǎi	heed; pay attention to (usually used in the negative)
// 理所当然	理所當然	li3 suo3 dang1 ran2	lǐ suǒ dāng rán	(idiom) it goes without saying; certainly; of course; be natural and right
// 理直气壮	理直氣壯	li3zhi2qi4zhuang4	lǐzhíqìzhuàng	with justice on one's side, one is bold and assured; to have the courage of ones convictions; just and forceful
// 理智	理智	li3zhi4	lǐzhì	reason; intellect; rational
// 力求	力求	li4qiu2	lìqiú	make every effort; do one's best
// 力所能及	力所能及	li4suo3neng2ji2	lìsuǒnéngjí	within one's power; to the best of one's ability
// 力争	力爭	li4zheng1	lìzhēng	work hard; do all one can to; strive for/argue strongly
// 历代	曆代	li4dai4	lìdài	successive dynasties; past dynasties
// 历来	曆來	li4lai2	lìlái	always; throughout (a period of time)
// 立场	立場	li4chang3	lìchǎng	position; standpoint
// 立方	立方	li4fang1	lìfāng	cube; (mw cubic units of measure)
// 立交桥	立交橋	li4jiao1qiao2	lìjiāoqiáo	overpass; one road goes on top of another; cloverleaf intersection
// 立体	立體	li4ti3	lìtǐ	solid; three dimensional
// 立足	立足	li4zu2	lìzú	base oneself on; be established; have a footing
// 利害	利害	li4hai	lìhai	serious; formidable; devastating; (-hài: advantages and disadvantages)
// 例外	例外	li4wai4	lìwài	(make an) exception
// 粒	粒	li4	lì	a grain; granule; (mw for grain-like things)
// 连年	連年	lian2nian2	liánnián	successive years; over many years; once again this year
// 连锁	連鎖	lian2suo3	liánsuǒ	chain (store etc); to interlock
// 连同	連同	lian2tong2	liántóng	together with; along with
// 联欢	聯歡	lian2huan1	liánhuān	have a get-together
// 联络	聯絡	lian2luo4	liánluò	communication; to contact
// 联盟	聯盟	lian2meng2	liánméng	alliance; union; coalition
// 联想	聯想	lian2xiang3	liánxiǎng	to associate (cognitively); to make an associative connection; mental association; word prediction and auto-complete functions of input method editing programs; abbr. for 联想集团 Lenovo Group (PRC computer firm)
// 廉洁	廉潔	lian2jie2	liánjié	honest; incorruptible
// 良心	良心	liang2xin1	liángxīn	conscience
// 谅解	諒解	liang4jie3	liàngjiě	understanding; make an allowance for; forgive
// 晾	晾	liang4	liàng	dry in the air/sun; (colloquial) snub or ignore
// 辽阔	遼闊	liao2kuo4	liáokuò	vast; extensive
// 列举	列舉	lie4ju3	lièjǔ	make a list; enumerate
// 临床	臨床	lin2chuang2	línchuáng	clinical
// 淋	淋	lin2	lín	to drain; to drip; drench
// 吝啬	吝啬	lin4se4	lìnsè	stingy; mean; miserly
// 伶俐	伶俐	ling2li4	línglì	clever; witty; intelligent
// 灵感	靈感	ling2gan3	línggǎn	inspiration; insight; a burst of creativity in scientific or artistic endeavor
// 灵魂	靈魂	ling2hun2	línghún	soul; spirit; conscience
// 灵敏	靈敏	ling2min3	língmǐn	sensitive
// 凌晨	淩晨	ling2chen2	língchén	early in the morning
// 零星	零星	ling2xing1	língxīng	partial; scattered; fragmentary
// 领会	領會	ling3hui4	lǐnghuì	understand; comprehend; grasp
// 领事馆	領事館	ling3shi4guan3	lǐngshìguǎn	consulate
// 领土	領土	ling3tu3	lǐngtǔ	territory
// 领悟	領悟	ling3wu4	lǐngwù	comprehend; grasp; fathom
// 领先	領先	ling3xian1	lǐngxiān	leadership; to lead; be in front
// 领袖	領袖	ling3xiu4	lǐngxiù	leader
// 溜	溜	liu1	liū	slip away; to skate; to glide
// 留恋	留戀	liu2lian4	liúliàn	be reluctant to leave
// 留念	留念	liun2ian4	liúniàn	to keep as a souvenir
// 留神	留神	liu2 shen2	liú shén	(idiom) take care to ...; be careful of ...
// 流浪	流浪	liu2lang4	liúlàng	drift about; wander
// 流露	流露	liu2lu4	liúlù	express; reveal (one's thoughts or feelings)
// 流氓	流氓	liu2mang2	liúmáng	rogue; hooligan; gangster
// 流通	流通	liu2tong1	liútōng	circulate; currency
// 聋哑	聾啞	long2ya3	lóngyǎ	deaf and dumb; deaf-mute
// 隆重	隆重	long2zhong4	lóngzhòng	grand; prosperous; ceremonious
// 垄断	壟斷	long3duan4	lǒngduàn	monopoly
// 笼罩	籠罩	long3zhao4	lǒngzhào	envelop; to shroud; be masked by
// 搂	摟	lou3	lǒu	to hug; to embrace
// 炉灶	爐竈	lu2zao4	lúzào	kitchen range; cooking range; stovetop range
// 屡次	屢次	lü3ci4	lǚcì	repeatedly; time and again; frequently
// 履行	履行	lü3xing2	lǚxíng	fulfill (one's obligations); carry out
// 掠夺	掠奪	lüe4duo2	lüèduó	to plunder; rob; pillage
// 轮船	輪船	lun2chuan2	lúnchuán	steamship
// 轮廓	輪廓	lun2kuo4	lúnkuò	outline; silhouette
// 轮胎	輪胎	lun2tai1	lúntāi	tire (of a wheel)
// 论坛	論壇	lun4tan2	lùntán	forum
// 论证	論證	lun4zheng4	lùnzhèng	prove a point; expound on; argumentation
// 啰唆	啰唆	luo1suo	luōsuo	long-winded; wordy; troublesome; pesky
// 络绎不绝	絡繹不絕	luo4yi4bu4jue2	luòyìbùjué	endless stream
// 落成	落成	luo4cheng2	luòchéng	complete a construction project
// 落实	落實	luo4shi2	luòshí	workable; implement
// 麻痹	麻痹	ma2bi4	mábì	paralysis; palsy; numbness
// 麻木	麻木	ma2mu4	mámù	numb
// 麻醉	麻醉	ma2zui4	mázuì	anesthesia
// 码头	碼頭	ma3tou	mǎtou	dock; wharf
// 蚂蚁	螞蟻	ma3yi3	mǎyǐ	ant
// 嘛	嘛	ma, ma2	ma, má	(used to persuade somebody to do something); (particle indicating obviousness) | (colloqial) what?
// 埋伏	埋伏	mai2fu	máifu	ambush; lie in ambush
// 埋没	埋沒	mai2mo4	máimò	oblivion; bury; neglect
// 埋葬	埋葬	mai2zang4	máizàng	bury
// 迈	邁	mai4	mài	to step; stride
// 脉搏	脈搏	mai4bo2	màibó	pulse; throbbing
// 埋怨	埋怨	man2yuan4	mányuàn	complain; blame; connotes sb or sth is to blame
// 蔓延	蔓延	man4yan2	mànyán	extend; spread; to creep
// 漫长	漫長	man4chang2	màncháng	very long; endless
// 漫画	漫畫	man4hua4	mànhuà	comics; manga
// 慢性	慢性	man4xing4	mànxìng	slow and patient; chronic (disease)
// 忙碌	忙碌	mang2lu4	mánglù	be busy; bustling
// 盲目	盲目	mang2mu4	mángmù	blindness; aimless
// 茫茫	茫茫	mang2mang2	mángmáng	boundless; vast and obscure
// 茫然	茫然	mang2ran2	mángrán	unseeing; ignorant; have no knowledge of sth.
// 茂盛	茂盛	mao4sheng4	màoshèng	exuberance; luxuriant
// 冒充	冒充	mao4chong1	màochōng	pretend to be (somebody or something else); pass (somebody or something) off as; impersonate
// 冒犯	冒犯	mao4fan4	màofàn	to offend
// 枚	枚	mei2	méi	(mw for coins, rings, medals)
// 媒介	媒介	mei2jie4	méijiè	media; medium
// 美观	美觀	mei3guan1	měiguān	pleasing to the eye; beautiful; artistic
// 美满	美滿	mei3man3	měimǎn	happy; blissful
// 美妙	美妙	mei3miao4	měimiào	beautiful (when describing a work of art); wonderful; splendid
// 萌芽	萌芽	meng2ya2	méngyá	sprout; bud; germ of a plant
// 猛烈	猛烈	meng3lie4	měngliè	fierce; violent
// 眯	眯	mi1	mī	to squint; to take a nap
// 弥补	彌補	mi2bu3	míbǔ	make up for a deficiency; remedy; offset
// 弥漫	彌漫	mi2man4	mímàn	fill the air; permeate; to suffuse
// 迷惑	迷惑	mi2huo4	míhuò	to puzzle; confuse; mystify
// 迷人	迷人	mi2ren2	mírén	charming; enchanting; cute
// 迷信	迷信	mi2xin4	míxìn	superstition; be superstitious
// 谜语	謎語	mi2yu3	míyǔ	riddle; conundrum
// 密度	密度	mi4du4	mìdù	density; thickness; consistency
// 密封	密封	mi4feng1	mìfēng	seal up; pressurize
// 棉花	棉花	mian2hua	miánhua	cotton
// 免得	免得	mian3de	miǎnde	so as not to; so as to avoid
// 免疫	免疫	mian3yi4	miǎnyì	immune
// 勉励	勉勵	mian3li4	miǎnlì	encourage
// 勉强	勉強	mian3qiang3	miǎnqiǎng	reluctantly; grudgingly; force sb. to do sth.
// 面貌	面貌	mian4mao4	miànmào	appearance; looks; features
// 面子	面子	mian4zi	miànzi	honor; reputation; prestige; face
// 描绘	描繪	miao2hui4	miáohuì	describe; portray
// 瞄准	瞄准	miao2zhun3	miáozhǔn	take aim (a weapon at a target)
// 渺小	渺小	miao3xiao3	miǎoxiǎo	tiny; minute; negligible
// 藐视	藐視	miao3shi4	miǎoshì	treat with contempt
// 灭亡	滅亡	mie4wang2	mièwáng	be destroyed; perish; exterminate; become extinct
// 蔑视	蔑視	mie4shi4	mièshì	despise; loathe; disparage; scorn
// 民间	民間	min2jian1	mínjiān	among the people; popular; folk
// 民主	民主	min2zhu3	mínzhǔ	democracy
// 敏捷	敏捷	min3jie2	mǐnjié	nimble; agile; shrewd
// 敏锐	敏銳	min3rui4	mǐnruì	keen; sharp; acute; brisk
// 名次	名次	ming2ci4	míngcì	position in a ranking of names
// 名额	名額	ming2'e2	míng'é	particular number of people; quota
// 名副其实	名副其實	ming2 fu4 qi2 shi2	míng fù qí shí	not just in name only; but also in reality
// 名誉	名譽	ming2yu4	míngyù	fame; reputation; honor; honorary
// 明明	明明	ming2ming2	míngmíng	obviously; plainly; undoubtedly
// 明智	明智	ming2zhi4	míngzhì	wise
// 命名	命名	ming4ming2	mìngmíng	give a name; to dub; christen; naming
// 摸索	摸索	mo1suo3	mōsuǒ	feel about; grope around; fumble
// 模范	模範	mo2fan4	mófàn	model; exemplar
// 模式	模式	mo2shi4	móshì	model; pattern; method
// 模型	模型	mo2xing2	móxíng	model; mould; matrix; pattern
// 膜	膜	mo2	mó	membrane; film
// 摩擦	摩擦	mo2ca1	mócā	friction; clash (between two parties); conflict
// 磨合	磨合	mo2he2	móhé	adapt gradually to each other; to consult; break in; wear in
// 魔鬼	魔鬼	mo2gui3	móguǐ	devil; demon; monster
// 魔术	魔術	mo2shu4	móshù	magic
// 抹杀	抹殺	mo3sha1	mǒshā	write off; erase; remove from evidence
// 莫名其妙	莫名其妙	mo4ming2qi2miao4	mòmíngqímiào	odd; baffling; unaccountable
// 墨水儿	墨水兒	mo4shui3er	mòshuǐer	ink
// 默默	默默	mo4mo4	mòmò	in silence; not speaking
// 谋求	謀求	mou2qiu2	móuqiú	seek; strive for; try to get
// 模样	模樣	mu2yang4	múyàng	appearance; form; approximation
// 母语	母語	mu3yu3	mǔyǔ	native/mother tongue
// 目睹	目睹	mu4du3	mùdǔ	witness; see first hand
// 目光	目光	mu4guang1	mùguāng	sight; vision; view
// 沐浴	沐浴	mu4yu4	mùyù	take a bath; revel; immerse
// 拿手	拿手	na2shou3	náshǒu	good at; adept
// 纳闷儿	納悶兒	na4 men4r	nà mènr	feel puzzled; bewildered
// 耐用	耐用	nai4yong4	nàiyòng	durable
// 南辕北辙	南轅北轍	nan2yuan2bei3zhe2	nányuánběizhé	at odds with; act in a way that defeats one's purpose
// 难得	難得	nan2de2	nándé	hard to come by; difficult to get; rare
// 难堪	難堪	nan2kan1	nánkān	hard to take; endure; embarrassed
// 难能可贵	難能可貴	nan2neng2ke3gui4	nánnéngkěguì	estimable; extremely good
// 恼火	惱火	nao3huo3	nǎohuǒ	get angry; irritated; annoy
// 内涵	內涵	nei4han2	nèihán	connotation
// 内幕	內幕	nei4mu4	nèimù	inside story; non-public information; behind the scenes
// 内在	內在	nei4zai4	nèizài	intrinsic; innate
// 能量	能量	neng2liang4	néngliàng	energy; capabilities
// 拟定	擬定	ni3ding4	nǐdìng	make an initial draft; draw up
// 逆行	逆行	ni4xing2	nìxíng	go/drive against the traffic; go in the wrong direction; regress; retrograde
// 年度	年度	nian2du4	niándù	year (e.g. school year, fiscal year, etc.); annual
// 捏	捏	nie1	niē	to pinch (with one's fingers); knead
// 凝固	凝固	ning2gu4	nínggù	curdle; freeze; solidify; congeal
// 凝聚	凝聚	ning2ju4	níngjù	agglomeration; agglomerate; cohesion; coherence
// 凝视	凝視	ning2shi4	níngshì	gaze; stare
// 拧	擰	ning2	níng	wring; to pinch
// 宁肯	甯肯	ning4ken3	nìngkěn	would rather ...; it would be better
// 宁愿	甯願	ning4yuan4	nìngyuàn	would rather; better
// 扭转	扭轉	niu3zhuan3	niǔzhuǎn	to reverse; turn around (an undesirable situation)
// 纽扣儿	紐扣兒	niu3kou4r	niǔkòur	button
// 农历	農曆	nong2li4	nónglì	agricultural calendar; lunar calendar
// 浓厚	濃厚	nong2hou4	nónghòu	dense; thick (fog, clouds, etc.)
// 奴隶	奴隸	nu2li4	núlì	slave
// 虐待	虐待	nüe4dai4	nüèdài	to abuse; maltreat; tyrannize
// 挪	挪	nuo2	nuó	shift; move
// 哦	哦	o4	ò	oh (indicates understanding)
// 殴打	毆打	ou1da3	ōudǎ	beat up; hit
// 呕吐	嘔吐	ou3tu4	ǒutù	to vomit; retch; nausea
// 偶像	偶像	ou3xiang4	ǒuxiàng	Idol
// 趴	趴	pa1	pā	lie on one's stomach
// 排斥	排斥	pai2chi4	páichì	to reject; repulse; exclude
// 排除	排除	pai2chu2	páichú	eliminate; get rid of; remove
// 排放	排放	pai2fang4	páifàng	to discharge; emit
// 排练	排練	pai2lian4	páiliàn	to rehearse
// 徘徊	徘徊	pai2huai2	páihuái	pace back and forth; hesitate; waver
// 派别	派別	pai4bie2	pàibié	denomination; group; school; faction; school of thought; sect
// 派遣	派遣	pai4qian3	pàiqiǎn	send (on a mission); dispatch
// 攀登	攀登	pan1deng1	pāndēng	to climb; clamber; to pull oneself up
// 盘旋	盤旋	pan2xuan2	pánxuán	spiral; coil; circle; go around
// 判决	判決	pan4jue2	pànjué	judgment (by a court of law); adjudicate
// 畔	畔	pan4	pàn	riverbank; side; boundary
// 庞大	龐大	pang2da4	pángdà	enormous; huge; tremendous
// 抛弃	抛棄	pao1qi4	pāoqì	discard; abandon; dump (sb)
// 泡沫	泡沫	pao4mo4	pàomò	foam; (soap bubble); (economic) bubble
// 培育	培育	pei2yu4	péiyù	to train; nurture; to breed
// 配备	配備	pei4bei4	pèibèi	provide; outfit with
// 配偶	配偶	pei4'ou3	pèi'ǒu	mate; consort; spouse
// 配套	配套	pei4 tao4	pèi tào	form a complete set
// 盆地	盆地	pen2di4	péndì	basin
// 烹饪	烹饪	peng1ren4	pēngrèn	cooking; culinary arts
// 捧	捧	peng3	pěng	hold or carry with both hands facing up
// 批发	批發	pi1fa1	pīfā	wholesale
// 批判	批判	pi1pan4	pīpàn	criticize; critique
// 劈	劈	pi1	pī	split in two; to divide
// 皮革	皮革	pi2ge2	pígé	leather
// 疲惫	疲憊	pi2bei4	píbèi	beaten; exhausted; tired
// 疲倦	疲倦	pi2juan4	píjuàn	tired; weary
// 屁股	屁股	pi4gu	pìgu	butt; rear; rump
// 譬如	譬如	pi4ru2	pìrú	for example; for instance; such as
// 偏差	偏差	pian1cha1	piānchā	bias; deviation
// 偏见	偏見	pian1jian4	piānjiàn	prejudice
// 偏僻	偏僻	pian1pi4	piānpì	remote and isolated; far from the city
// 偏偏	偏偏	pian1pian1	piānpiān	unexpectedly; contrary to expectations
// 片断	片斷	pian4duan4	piànduàn	part; passage; extract; fragment; snatch
// 片刻	片刻	pian4ke4	piànkè	a short period of time
// 漂浮	漂浮	piao1fu2	piāofú	superficial; float; hover; drift
// 飘扬	飄揚	piao1yang2	piāoyáng	wave in the wind; flutter; fly
// 撇	撇	pie3	piě	left-curving stroke (丿); throw; fling
// 拼搏	拼搏	pin1bo2	pīnbó	struggle; wrestle
// 拼命	拼命	pin1 ming4	pīn mìng	risk one's life; desperately; with all one's might
// 贫乏	貧乏	pin2fa2	pínfá	lacking; incomplete
// 贫困	貧困	pin2kun4	pínkùn	poor; impoverished
// 频繁	頻繁	pin2fan2	pínfán	frequently; often
// 频率	頻率	pin2lü4	pínlǜ	frequency
// 品尝	品嘗	pin3chang2	pǐncháng	try; taste a small amount; to sample
// 品德	品德	pin3de2	pǐndé	moral character; morality; morals
// 品质	品質	pin3zhi4	pǐnzhì	quality; character
// 品种	品種	pin3zhong3	pǐnzhǒng	breed; variety
// 平凡	平凡	ping2fan2	píngfán	commonplace; ordinary
// 平面	平面	ping2mian4	píngmiàn	a plane (i.e. flat surface); type; category
// 平坦	平坦	ping2tan3	píngtǎn	flat
// 平行	平行	ping2xing2	píngxíng	parallel; concurrent
// 平庸	平庸	ping2yong1	píngyōng	mediocre
// 平原	平原	ping2yuan2	píngyuán	field; plain; flatlands
// 评估	評估	ping2gu1	pínggū	evaluate
// 评论	評論	ping2lun4	pínglùn	comment on; discuss; remark
// 屏幕	屏幕	ping2mu4	píngmù	screen (TV, etc.)
// 屏障	屏障	ping2zhang4	píngzhàng	wall; barrier; protective screen
// 坡	坡	po1	pō	slope
// 泼	潑	po1	pō	to splash; to spill; rude and unreasonable; brutish
// 颇	頗	po1	pō	rather; quite; inclined to one side
// 迫不及待	迫不及待	po4bu4ji2dai4	pòbùjídài	be too impatient to wait
// 迫害	迫害	po4hai4	pòhài	persecute; persecution
// 破例	破例	po4li4	pòlì	make an exception
// 魄力	魄力	po4li4	pòlì	daring resolution; boldness; courage
// 扑	撲	pu1	pū	to assault; rush at; throw oneself on
// 铺	鋪	pu4, pu1	pù, pū	bed; store | to spread; to lay
// 朴实	樸實	pu3shi2	pǔshí	plain; sober; down-to-earth
// 朴素	樸素	pu3su4	pǔsù	plain; simple; austerity
// 普及	普及	pu3ji2	pǔjí	widespread; popular; popularize
// 瀑布	瀑布	pu4bu4	pùbù	waterfall
// 凄凉	淒涼	qi1liang2	qīliáng	desolate; feel like no one likes you
// 期望	期望	qi1wang4	qīwàng	hope; expectation
// 期限	期限	qi1xian4	qīxiàn	time limit; deadline; allotted time
// 欺负	欺負	qi1fu	qīfu	to bully; intimidate
// 欺骗	欺騙	qi1pian4	qīpiàn	deceive; to cheat; to dupe
// 齐全	齊全	qi2quan2	qíquán	complete
// 齐心协力	齊心協力	qi2xin1xie2li4	qíxīnxiélì	make concerted efforts
// 奇妙	奇妙	qi2miao4	qímiào	wonderful; fantastic
// 歧视	歧視	qi2shi4	qíshì	discriminate (against someone)
// 旗袍	旗袍	qi2pao2	qípáo	cheongsam; Chinese-style dress
// 旗帜	旗幟	qi2zhi4	qízhì	flag; banner
// 乞丐	乞丐	qi3gai4	qǐgài	beggar
// 岂有此理	豈有此理	qi3 you3 ci3 li3	qǐ yǒu cǐ lǐ	outrageous; ridiculous; absurd
// 企图	企圖	qi3tu2	qǐtú	(to ) attempt; try; attempt
// 启程	啓程	qi3cheng2	qǐchéng	set out on a journey
// 启蒙	啓蒙	qi3meng2	qǐméng	enlighten; enlightenment； instruct the young; to initiate
// 启示	啓示	qi3shi4	qǐshì	enlightenment; revelation
// 启事	啓事	qi3shi4	qǐshì	announcement; public information (usually posted on a billboard)
// 起草	起草	qi3 cao3	qǐ cǎo	draft (a bill); draw up (plans)
// 起初	起初	qi3chu1	qǐchū	at first; originally; in the beginning
// 起伏	起伏	qi3fu2	qǐfú	ups and downs; with a wavy motion
// 起哄	起哄	qi3 hong4	qǐ hòng	gather together; cause a commotion
// 起码	起碼	qi3ma3	qǐmǎ	at the minimum; at the very least
// 起源	起源	qi3yuan2	qǐyuán	origin; originate; come from
// 气概	氣概	qi4gai4	qìgài	mettle; spirit; gumption
// 气功	氣功	qi4gong1	qìgōng	Qi Gong, a system of deep breathing exercises
// 气魄	氣魄	qi4po4	qìpò	spirit; daring; nerve; boldness; enterprising outlook
// 气色	氣色	qi4se4	qìsè	complexion
// 气势	氣勢	qi4shi4	qìshì	imposing manner; look of great force or imposing manner
// 气味	氣味	qi4wei4	qìwèi	odor; scent
// 气象	氣象	qi4xiang4	qìxiàng	meteorology; atmosphere; phenomenon
// 气压	氣壓	qi4ya1	qìyā	atmospheric pressure; barometric pressure
// 气质	氣質	qi4zhi4	qìzhì	temperament; disposition
// 迄今为止	迄今爲止	qi4jin1wei2zhi3	qìjīnwéizhǐ	until now; so far; to date
// 器材	器材	qi4cai2	qìcái	equipment; material
// 器官	器官	qi4guan1	qìguān	organ; apparatus
// 掐	掐	qia1	qiā	pick (flowers); pinch; clutch
// 洽谈	洽談	qia4tan2	qiàtán	discuss; talk over
// 恰当	恰當	qia4dang4	qiàdàng	appropriate; suitable; proper
// 恰到好处	恰到好處	qia4 dao4 hao3 chu4	qià dào hǎo chù	just right; it's just perfect
// 恰巧	恰巧	qia4qiao3	qiàqiǎo	happen by chance; coincidence
// 千方百计	千方百計	qian1 fang1 bai3 ji4	qiān fāng bǎi jì	by every possible means
// 迁就	遷就	qian1jiu4	qiānjiù	humor; yield; adapt to; accommodate (something)
// 迁徙	遷徙	qian1xi3	qiānxǐ	migrate; move; change one's residence
// 牵	牽	qian1	qiān	to lead along; to pull (an animal on a tether)
// 牵扯	牽扯	qian1che3	qiānchě	implicate; involve
// 牵制	牽制	qian1zhi4	qiānzhì	control; curb; restrict; impede
// 谦逊	謙遜	qian1xun4	qiānxùn	humble; modest; humility
// 签署	簽署	qian1shu3	qiānshǔ	sign (an agreement)
// 前景	前景	qian2jing3	qiánjǐng	outlook; future (prospects); foreground
// 前提	前提	qian2ti2	qiántí	premise; precondition
// 潜力	潛力	qian2li4	qiánlì	potential; capacity
// 潜水	潛水	qian2shui3	qiánshuǐ	go diving
// 潜移默化	潛移默化	qian2yi2mo4hua4	qiányímòhuà	exert a subtle influence on sb.'s character, thinking, etc.; impercebtibly influence; to influence secretly
// 谴责	譴責	qian3ze2	qiǎnzé	denounce; condemn; criticize
// 强制	強制	qiang2zhi4	qiángzhì	enforce; control; coerce
// 抢劫	搶劫	qiang3jie2	qiǎngjié	rob; looting
// 抢救	搶救	qiang3jiu4	qiǎngjiù	rescue; to save
// 强迫	強迫	qiang3po4	qiǎngpò	compel; to force
// 桥梁	橋梁	qiao2liang2	qiáoliáng	bridge
// 窍门	竅門	qiao4men2	qiàomén	special tricks
// 翘	翹	qiao4	qiào	stick up; bend upwards
// 切实	切實	qie4shi2	qièshí	realistic; feasible; conscientiously
// 锲而不舍	锲而不舍	qie4'er2bu4she3	qiè'érbùshě	keep on chipping away; work with perseverance
// 钦佩	欽佩	qin1pei4	qīnpèi	admire; have great respect for
// 侵犯	侵犯	qin1fan4	qīnfàn	encroach on; infringe on; violation
// 侵略	侵略	qin1lüe4	qīnlüè	invasion; encroachment; invade
// 亲密	親密	qin1mi4	qīnmì	intimate; close; familiarity
// 亲热	親熱	qin1re4	qīnrè	intimate; affectionate; warm
// 勤俭	勤儉	qin2jian3	qínjiǎn	hardworking and thrifty
// 勤劳	勤勞	qin2lao2	qínláo	hardworking; diligent; industrious
// 倾听	傾聽	qing1ting1	qīngtīng	listen attentively; heed (other people's opinions)
// 倾向	傾向	qing1xiang4	qīngxiàng	trend; tendency; inclination
// 倾斜	傾斜	qing1xie2	qīngxié	incline; lean; to slant; to slope; to tilt
// 清澈	清澈	qing1che4	qīngchè	clear; limpid
// 清晨	清晨	qing1chen2	qīngchén	early morning
// 清除	清除	qing1chu2	qīngchú	eliminate; get rid of
// 清洁	清潔	qing1jie2	qīngjié	clean; unpolluted; purity
// 清理	清理	qing1li3	qīnglǐ	cleanup; put in order; check up
// 清晰	清晰	qing1xi1	qīngxī	clear; distinct; clarity
// 清醒	清醒	qing1xing3	qīngxǐng	clear-headed; sober; regain consciousness
// 清真	清真	qing1zhen1	qīngzhēn	Muslim
// 情报	情報	qing2bao4	qíngbào	intelligence; information-gathering
// 情节	情節	qing2jie2	qíngjié	plot; circumstances
// 情理	情理	qing2li3	qínglǐ	reason; sense
// 情形	情形	qing2xing	qíngxing	circumstances; situation
// 晴朗	晴朗	qing2lang3	qínglǎng	sunny and cloudless
// 请柬	請柬	qing3jian3	qǐngjiǎn	invitation card; written invitation
// 请教	請教	qing3jiao4	qǐngjiào	consult; seek advice
// 请示	請示	qing3shi4	qǐngshì	ask for instructions
// 请帖	請帖	qing3tie3	qǐngtiě	invitation card; written invitation
// 丘陵	丘陵	qiu1ling2	qiūlíng	hills
// 区分	區分	qu1fen1	qūfēn	differentiate; find differing aspects; find the difference between
// 区域	區域	qu1yu4	qūyù	area; region; district
// 曲折	曲折	qu1zhe2	qūzhé	winding; zigzag; complicated
// 驱逐	驅逐	qu1zhu2	qūzhú	banishment; expel; deport
// 屈服	屈服	qu1fu2	qūfú	yield; give in; submit
// 渠道	渠道	qu2dao4	qúdào	irrigation ditch; medium or channel of communication
// 曲子	曲子	qu3zi	qǔzi	folk tune; music; melody
// 取缔	取締	qu3di4	qǔdì	to ban; suppress
// 趣味	趣味	qu4wei4	qùwèi	fun; interest; delight; taste
// 圈套	圈套	quan1tao4	quāntào	trap
// 权衡	權衡	quan2heng2	quánhéng	trade-off; weigh pros and cons
// 权威	權威	quan2wei1	quánwēi	authority; authoritative
// 全局	全局	quan2ju2	quánjú	overall situation
// 全力以赴	全力以赴	quan2 li4 yi3 fu4	quán lì yǐ fù	do at all costs; make an all-out effort
// 拳头	拳頭	quan2tou	quántou	fist
// 犬	犬	quan3	quǎn	dog (Kangxi radical 94)
// 缺口	缺口	que1kou3	quēkǒu	gap; breach; shortfall
// 缺席	缺席	que1 xi2	quē xí	absence; absent; default
// 缺陷	缺陷	que1xian4	quēxiàn	a defect; a flaw; disfigurement
// 瘸	瘸	que2	qué	lame
// 确保	確保	que4bao3	quèbǎo	ensure; guarantee
// 确立	確立	que4li4	quèlì	to establish; to institute
// 确切	確切	que4qie4	quèqiè	definite; exact; precise
// 确信	確信	que4xin4	quèxìn	confident; be certain of; to firmly believe
// 群众	群衆	qun2zhong4	qúnzhòng	the masses; multitude
// 染	染	ran3	rǎn	dye; to catch (a disease)
// 嚷	嚷	rang3	rǎng	blurt out; shout
// 让步	讓步	rang4 bu4	ràng bù	give in; concede; yield
// 饶恕	饒恕	rao2shu4	ráoshù	forgive; pardon; spare
// 扰乱	擾亂	rao3luan4	rǎoluàn	disturb; perturb; harass
// 惹祸	惹禍	re3huo4	rěhuò	stir up troubles
// 热泪盈眶	熱淚盈眶	re4 lei4 ying2 kuang4	rè lèi yíng kuàng	(saying) eyes brimming with tears; extremely moved
// 热门	熱門	re4men2	rèmén	in demand; popular; in vogue
// 人道	人道	ren2dao4	réndào	humanitarianism; humane
// 人格	人格	reng2e2	réngé	personality; moral integrity; character
// 人工	人工	reng2ong1	réngōng	man-made; manpower; manual work
// 人家	人家	ren2jia1	rénjiā	other people; others; they; I; family; household
// 人间	人間	ren2jian1	rénjiān	man's world; the world
// 人士	人士	ren2shi4	rénshì	person; public figure
// 人为	人爲	ren2wei2	rénwéi	artificial; man-made
// 人性	人性	ren2xing4	rénxìng	human nature; humanity
// 人质	人質	ren2zhi4	rénzhì	hostage
// 仁慈	仁慈	ren2ci2	réncí	benevolent; kindhearted; charitable
// 忍耐	忍耐	ren3nai4	rěnnài	show restraint; endure; exercise patience
// 忍受	忍受	ren3shou4	rěnshòu	to bear; endure; tolerate
// 认定	認定	ren4ding4	rèndìng	maintain (that sth. is true); firmly believe
// 认可	認可	ren4ke3	rènkě	approve; accept; ratify
// 任命	任命	ren4ming4	rènmìng	appoint and nominate
// 任性	任性	ren4xing4	rènxìng	willful; headstrong
// 任意	任意	ren4yi4	rènyì	arbitrarily; at will; at random
// 任重道远	任重道遠	ren4zhong4dao4yuan3	rènzhòngdàoyuǎn	lit. a heavy load and a long road; fig. to bear heavy responsibilities through a long struggle; shoulder heavy responsibilities
// 仍旧	仍舊	reng2jiu4	réngjiù	still (remaining); remain (the same); yet
// 日新月异	日新月異	ri4xin1yue4yi4	rìxīnyuèyì	change with each passing day
// 日益	日益	ri4yi4	rìyì	day by day; more and more; increasingly
// 荣幸	榮幸	rong2xing4	róngxìng	honored
// 荣誉	榮譽	rong2yu4	róngyù	honor; glory
// 容貌	容貌	rong2mao4	róngmào	facial features; looks; appearance
// 容纳	容納	rong2na4	róngnà	contain; accommodate; tolerate (different options)
// 容器	容器	rong2qi4	róngqì	container; receptacle; vessel
// 容忍	容忍	rong2ren3	róngrěn	put up with; tolerate; condone
// 溶解	溶解	rong2jie3	róngjiě	dissolve; solution
// 融化	融化	rong2hua4	rónghuà	melt; thaw; dissolve; blend into
// 融洽	融洽	rong2qia4	róngqià	harmonious; friendly relations
// 柔和	柔和	rou2he2	róuhé	gentle; soft; mild
// 揉	揉	rou2	róu	knead; to massage; to rub
// 儒家	儒家	ru2jia1	rújiā	Confucianism
// 若干	若幹	ruo4gan1	ruògān	a certain number or amount; how many; how much
// 弱点	弱點	ruo4dian3	ruòdiǎn	weak point; failing
// 撒谎	撒謊	sa1 huang3	sā huǎng	to tell lies
// 散文	散文	san3wen2	sǎnwén	prose; essay
// 散布	散布	san4bu4	sànbù	to scatter; disseminate; to spread
// 散发	散發	san4fa1	sànfā	distribute; emit
// 丧失	喪失	sang4shi1	sàngshī	to lose; to forfeit
// 骚扰	騷擾	sao1rao3	sāorǎo	harass; disturb; molest; cause a commotion
// 嫂子	嫂子	sao3zi	sǎozi	(informal) elder brother's wife; sister-in-law
// 刹车	刹車	sha1 che1	shā chē	brake (when driving); stop; switch off
// 啥	啥	sha2	shá	(spoken) what
// 筛选	篩選	shai1xuan3	shāixuǎn	to filter; to sift
// 山脉	山脈	shan1mai4	shānmài	mountain range
// 闪烁	閃爍	shan3shuo4	shǎnshuò	to twinkle; to flicker; glimmer
// 擅长	擅長	shan4chang2	shàncháng	be good at; be expert in
// 擅自	擅自	shan4zi4	shànzì	unauthorized
// 伤脑筋	傷腦筋	shang1 nao3jin1	shāng nǎojīn	troublesome; bothersome
// 商标	商標	shang1biao1	shāngbiāo	trademark; logo
// 上级	上級	shang4ji2	shàngjí	higher authorities; superiors
// 上进	上進	shang4jin4	shàngjìn	make forward progress; do better
// 上任	上任	shang4 ren4	shàng rèn	take office
// 上瘾	上瘾	shang4yin3	shàngyǐn	become addicted; get into a habit
// 上游	上遊	shang4you2	shàngyóu	upper reaches (of a river); advanced position
// 尚且	尚且	shang4qie3	shàngqiě	yet; still; even; also
// 捎	捎	shao1	shāo	bring or take (along); deliver (a message)
// 梢	梢	shao1	shāo	tip of a branch
// 哨	哨	shao4	shào	a whistle; sentry post
// 奢侈	奢侈	she1chi3	shēchǐ	luxury; sumptuous; extravagant
// 舌头	舌頭	she2tou	shétou	tongue
// 设立	設立	she4li4	shèlì	set up; establish
// 设想	設想	she4xiang3	shèxiǎng	imagine; consider; tentative plan
// 设置	設置	she4zhi4	shèzhì	set up; install; to fit
// 社区	社區	she4qu1	shèqū	community
// 涉及	涉及	she4ji2	shèjí	involve; relate to; to touch upon (a topic)
// 摄氏度	攝氏度	she4shi4du4	shèshìdù	degrees Celsius
// 申报	申報	shen1bao4	shēnbào	declare; report (to customs or other authority)
// 呻吟	呻吟	shen1yin2	shēnyín	to moan; to groan
// 绅士	紳士	shen1shi4	shēnshì	gentleman
// 深奥	深奧	shen1'ao4	shēn'ào	profound; deep
// 深沉	深沈	shen1chen2	shēnchén	deep; extreme; low pitched (sound); grave; of major importance
// 深情厚谊	深情厚誼	shen1qing2hou4yi4	shēnqínghòuyì	profound friendship
// 神经	神經	shen2jing1	shénjīng	nerve
// 神奇	神奇	shen2qi2	shénqí	miraculous; magical; mystical
// 神气	神氣	shen2qi4	shénqì	expression; manner; spirited
// 神圣	神聖	shen2sheng4	shénshèng	divine; holy; sacred
// 神态	神態	shen2tai4	shéntài	appearance; looks; manner; expression
// 神仙	神仙	shen2xian1	shénxiān	fig. lighthearted person; Daoist immortal; supernatural entity; (in modern fiction) fairy, elf, leprechaun, etc.; supernatural being, celestial being, immortal; a person who has the power of clairvoyance or who is free from worldly cares
// 审查	審查	shen3cha2	shěnchá	examine; investigate; censorship
// 审理	審理	shen3li3	shěnlǐ	hear (a case)
// 审美	審美	shen3mei3	shěnměi	aesthetic sense; appreciation of the arts
// 审判	審判	shen3pan4	shěnpàn	put (someone) to trial; to try somebody
// 渗透	滲透	shen4tou4	shèntòu	infiltrate; permeate
// 慎重	慎重	shen4zhong4	shènzhòng	cautious; careful; prudent
// 生存	生存	sheng1cun2	shēngcún	exist; survive
// 生机	生機	sheng1ji1	shēngjī	reprieve from death; life force; vitality
// 生理	生理	sheng1li3	shēnglǐ	physiology
// 生疏	生疏	sheng1shu1	shēngshū	unfamiliar; strange; out of practice
// 生态	生態	sheng1tai4	shēngtài	way of life; ecology
// 生物	生物	sheng1wu4	shēngwù	organism; living creature; life form
// 生肖	生肖	sheng1xiao4	shēngxiào	Chinese zodiac
// 生效	生效	sheng1 xiao4	shēng xiào	take effect; become effective
// 生锈	生鏽	sheng1xiu4	shēngxiù	to rust
// 生育	生育	sheng1yu4	shēngyù	give birth; to rear; bring up (children)
// 声明	聲明	sheng1ming2	shēngmíng	statement; declare; proclaim
// 声势	聲勢	sheng1shi4	shēngshì	momentum; fame and power; prestige
// 声誉	聲譽	sheng1yu4	shēngyù	reputation; fame
// 牲畜	牲畜	sheng1chu4	shēngchù	livestock; domesticated animals
// 省会	省會	sheng3hui4	shěnghuì	provincial capital
// 胜负	勝負	sheng4fu4	shèngfù	victory or defeat; the outcome of a battle
// 盛产	盛産	sheng4chan3	shèngchǎn	abound in; teem with; superabundant
// 盛开	盛開	sheng4kai1	shèngkāi	to bloom; be in full flower
// 盛情	盛情	sheng4qing2	shèngqíng	great kindness; boundless hospitality
// 盛行	盛行	sheng4xing2	shèngxíng	in fashion; prevalent; prevail
// 尸体	屍體	shi1ti3	shītǐ	dead body; corpse; carcass
// 失事	失事	shi1 shi4	shī shì	be involved in a crash; (have an) accident
// 失误	失誤	shi1wu4	shīwù	mistake; lapse; miss
// 失踪	失蹤	shi1 zong1	shī zōng	be missing; be unaccounted for
// 师范	師範	shi1fan4	shīfàn	teacher-training; pedagogical; normal (school)
// 施加	施加	shi1jia1	shījiā	exert (effort or pressure)
// 施展	施展	shi1zhan3	shīzhǎn	use fully; put to good use
// 十足	十足	shi2zu2	shízú	full of; complete; 100 percent
// 石油	石油	shi2you2	shíyóu	oil; petroleum
// 时常	時常	shi2chang2	shícháng	time and again; often; frequently
// 时而	時而	shi2'er2	shí'ér	occasionally; often, but not at any fixed time
// 时光	時光	shi2guang1	shíguāng	time; era; period of time
// 时机	時機	shi2ji1	shíjī	opportune time; opportunity
// 时事	時事	shi2shi4	shíshì	current events; the present situation
// 识别	識別	shi2bie2	shíbié	identify; distinguish; discern
// 实惠	實惠	shi2hui4	shíhuì	substantial material benefit; advantageous (deal)
// 实力	實力	shi2li4	shílì	strength
// 实施	實施	shi2shi1	shíshī	to implement; put into effect; carry out
// 实事求是	實事求是	shi2 shi4 qiu2 shi4	shí shì qiú shì	be practical and realistic; seek truth from facts
// 实行	實行	shi2xing2	shíxíng	to implement; put into practice; carry out
// 实质	實質	shi2zhi4	shízhì	substance; essence; gist
// 拾	拾	shi2	shí	pick up; ten (banker's anti-fraud numeral)
// 使命	使命	shi3ming4	shǐmìng	a (diplomatic or other) mission
// 示范	示範	shi4fan4	shìfàn	demonstrate; lead the way; show how something is done
// 示威	示威	shi4wei1	shìwēi	hold a protest demonstration
// 示意	示意	shi4yi4	shìyì	to signal; to hint; to gesture; to motion; to indicate (an idea to sb)
// 世代	世代	shi4dai4	shìdài	for generations; generation to generation
// 势必	勢必	shi4bi4	shìbì	is bound to (happen)
// 势力	勢力	shi4li	shìli	power; influence
// 事故	事故	shi4gu4	shìgù	accident
// 事迹	事迹	shi4ji4	shìjì	achievement; deed
// 事件	事件	shi4jian4	shìjiàn	event; happening; incident
// 事态	事態	shi4tai4	shìtài	situation; existing state of affairs
// 事务	事務	shi4wu4	shìwù	affairs; work
// 事项	事項	shi4xiang4	shìxiàng	matter; item
// 事业	事業	shi4ye4	shìyè	undertaking; project; cause; enterprise
// 试图	試圖	shi4tu2	shìtú	to try; to attempt
// 试验	試驗	shi4yan4	shìyàn	experiment; test
// 视力	視力	shi4li4	shìlì	vision; eyesight
// 视频	視頻	shi4pin2	shìpín	video
// 视线	視線	shi4xian4	shìxiàn	line of sight; view line
// 视野	視野	shi4ye3	shìyě	field of vision
// 是非	是非	shi4fei1	shìfēi	right and wrong; truth and fiction; quarrel
// 适宜	適宜	shi4yi2	shìyí	suitable for; appropriate for
// 逝世	逝世	shi4shi4	shìshì	pass away; to die
// 释放	釋放	shi4fang4	shìfàng	release; set free; liberate (a prisoner)
// 收藏	收藏	shou1cang2	shōucáng	collect; keep
// 收缩	收縮	shou1suo1	shōusuō	pull back; shrink
// 收益	收益	shou1yi4	shōuyì	earnings; profit
// 收音机	收音機	shou1yin1ji1	shōuyīnjī	radio
// 手法	手法	shou3fa3	shǒufǎ	technique; trick; skill; tact
// 手势	手勢	shou3shi4	shǒushì	gesture; sign; signal
// 手艺	手藝	shou3yi4	shǒuyì	craft; workmanship; one's cooking
// 守护	守護	shou3hu4	shǒuhù	guard; defend; protect
// 首饰	首飾	shou3shi4	shǒushì	jewelry
// 首要	首要	shou3yao4	shǒuyào	the most important; chief; principal
// 受罪	受罪	shou4zui4	shòuzuì	endure hardships; have a hard time
// 授予	授予	shou4yu3	shòuyǔ	to award; confer
// 书法	書法	shu1fa3	shūfǎ	calligraphy; penmanship
// 书籍	書籍	shu1ji2	shūjí	books; works
// 书记	書記	shu1ji	shūji	secretary; clerk
// 书面	書面	shu1mian4	shūmiàn	in writing; written (guarantee, etc.)
// 舒畅	舒暢	shu1chang4	shūchàng	happy; entirely free from worry
// 疏忽	疏忽	shu1hu	shūhu	neglect; overlook; negligence
// 疏远	疏遠	shu1yuan3	shūyuǎn	drift apart; keep at a distance; not in close touch; estranged
// 束	束	shu4	shù	to tie; to bind; restrain; (mw for bunches, bundles, bouquets, etc.)
// 束缚	束縛	shu4fu4	shùfù	to bind; restrict; to tie
// 树立	樹立	shu4li4	shùlì	set up; establish
// 竖	豎	shu4	shù	vertical; to erect; vertical stroke
// 数额	數額	shu4'e2	shù'é	amount; sum of money; fixed number
// 耍	耍	shua3	shuǎ	play/mess around with; juggle
// 衰老	衰老	shuai1lao3	shuāilǎo	grow old; age; deteriorate
// 衰退	衰退	shuai1tui4	shuāituì	decline; fall; drop; falter
// 率领	率領	shuai4ling3	shuàilǐng	lead; command; head
// 涮火锅	涮火鍋	shuan4huo3guo1	shuànhuǒguō	to instant-boil (mutton, beef, vegetables, etc.)
// 双胞胎	雙胞胎	shuang1bao1tai1	shuāngbāotāi	twins
// 爽快	爽快	shuang3kuai4	shuǎngkuài	refreshed; rejuvenated; frank
// 水利	水利	shui3li4	shuǐlì	water conservancy; irrigation works
// 水龙头	水龍頭	shui3long2tou2	shuǐlóngtóu	faucet; tap
// 水泥	水泥	shuin3i2	shuǐní	cement
// 瞬间	瞬間	shun4jian1	shùnjiān	in the twinkling of an eye; in an instant; momentary
// 司法	司法	si1fa3	sīfǎ	judicial; (administration of) justice
// 司令	司令	si1ling4	sīlìng	commanding officer
// 私自	私自	si1zi4	sīzì	private; secretly; without permission
// 思念	思念	sin1ian4	sīniàn	think of; long for; to miss
// 思索	思索	si1suo3	sīsuǒ	think deeply; ponder
// 思维	思維	si1wei2	sīwéi	(line) of thought; thinking
// 斯文	斯文	si1wen	sīwen	refined; educated; cultured; intellectual; men of letters; scholars; literati; polite; gentle
// 死亡	死亡	si3wang2	sǐwáng	to die; death; be dead
// 四肢	四肢	si4zhi1	sìzhī	arms and legs; the four limbs of the body
// 寺庙	寺廟	si4miao4	sìmiào	temple; monastery
// 饲养	飼養	si4yang3	sìyǎng	to raise; to rear (domestic animal)
// 肆无忌惮	肆無忌憚	si4wu2ji4dan4	sìwújìdàn	absolutely unrestrained; unbridled; without the slightest scruple
// 耸	聳	song3	sǒng	shrug; towering; shock (alarm)
// 艘	艘	sou1	sōu	(mw for boats and ships)
// 苏醒	蘇醒	su1xing3	sūxǐng	wake up; regain consciousness
// 俗话	俗話	su2hua4	súhuà	common saying; proverb
// 诉讼	訴訟	su4song4	sùsòng	lawsuit
// 素食	素食	su4shi2	sùshí	vegetables; vegetarian food
// 素质	素質	su4zhi4	sùzhì	inner quality; basic essence; character quality
// 塑造	塑造	su4zao4	sùzào	to shape; mould; figure
// 算数	算數	suan4shu4	suànshù	(do) arithmetic; count
// 随即	隨即	sui2ji2	suíjí	immediately (after); soon after; immediately
// 随意	隨意	sui2yi4	suíyì	as one wishes; according to one's wishes
// 岁月	歲月	sui4yue4	suìyuè	the years of a person's life
// 隧道	隧道	sui4dao4	suìdào	tunnel
// 损坏	損壞	sun3huai4	sǔnhuài	to damage; injure
// 索取	索取	suo3qu3	suǒqǔ	demand; ask for; to exact
// 索性	索性	suo3xing4	suǒxìng	you might as well (do it); simply; just; frankly; bluntly; directly
// 塌	塌	ta1	tā	collapse; fall down; crumple
// 踏实	踏實	ta1shi	tāshi	practical; down-to-earth; realistic; feel at ease; steadfast
// 塔	塔	ta3	tǎ	pagoda; tower
// 台风	台風	tai2feng1	táifēng	typhoon
// 太空	太空	tai4kong1	tàikōng	outer space
// 泰斗	泰鬥	tai4dou3	tàidǒu	leading scholar of his time; magnate
// 贪婪	貪婪	tan1lan2	tānlán	greedy; avaricious
// 贪污	貪汙	tan1wu1	tānwū	(political, moral) corruption; embezzle
// 摊	攤	tan1	tān	to spread out; vendor's stand; booth; fry; (mw for puddles)
// 瘫痪	癱瘓	tan1huan4	tānhuàn	paralysis
// 弹性	彈性	tan2xing4	tánxìng	flexibility; elasticity
// 坦白	坦白	tan3bai2	tǎnbái	honest; forthcoming; to confess
// 叹气	歎氣	tan4 qi4	tàn qì	to sigh
// 探测	探測	tan4ce4	tàncè	probe; take readings; detect; explore
// 探索	探索	tan4suo3	tànsuǒ	explore; quest
// 探讨	探討	tan4tao3	tàntǎo	inquire into; explore
// 探望	探望	tan4wang4	tànwàng	pay a visit; look around
// 倘若	倘若	tang3ruo4	tǎngruò	provided that; supposing that; if; in case
// 掏	掏	tao1	tāo	fish out (from pocket)
// 滔滔不绝	滔滔不絕	tao1tao1 bu4 jue2	tāotāo bù jué	(saying) talking non-stop; gushing; torrential
// 陶瓷	陶瓷	tao2ci2	táocí	ceramics; pottery and porcelain
// 陶醉	陶醉	tao2zui4	táozuì	be intoxicated (with power, success, etc.)
// 淘汰	淘汰	tao2tai4	táotài	eliminate (in a competition); natural selection; die/phase out
// 讨好	討好	tao3hao3	tǎohǎo	to flatter
// 特长	特長	te4chang2	tècháng	strong point; specialty
// 特定	特定	te4ding4	tèdìng	special; specific; designated
// 特意	特意	te4yi4	tèyì	specially for; with the special intention of
// 提拔	提拔	ti2ba2	tíbá	promote to a higher job; elevate
// 提炼	提煉	ti2lian4	tíliàn	extract (ore, minerals, etc.); refine; purify
// 提示	提示	ti2shi4	tíshì	to prompt; to present; to point out; to draw attention to sth; hint; brief; cue
// 提议	提議	ti2yi4	tíyì	propose; suggest
// 题材	題材	ti2cai2	tícái	subject matter
// 体裁	體裁	ti3cai2	tǐcái	types or forms of literature
// 体积	體積	ti3ji1	tǐjī	volume; bulk
// 体谅	體諒	ti3liang4	tǐliàng	empathize; express sympathy; allow (for something)
// 体面	體面	ti3mian4	tǐmiàn	dignity; honorable; face
// 体系	體系	ti3xi4	tǐxì	system; setup
// 天才	天才	tian1cai2	tiāncái	talent; gift; a genius; talented
// 天赋	天賦	tian1fu4	tiānfù	natural talent
// 天伦之乐	天倫之樂	tian1lun2zhi1le4	tiānlúnzhīlè	family happiness
// 天然气	天然氣	tian1ran2qi4	tiānránqì	natural gas
// 天生	天生	tian1sheng1	tiānshēng	innate; inherent; natural
// 天堂	天堂	tian1tang2	tiāntáng	paradise; heaven
// 天文	天文	tian1wen2	tiānwén	astronomy
// 田径	田徑	tian2jing4	tiánjìng	track and field
// 田野	田野	tian2ye3	tiányě	field; open country
// 舔	舔	tian3	tiǎn	to lick
// 挑剔	挑剔	tiao1ti	tiāoti	picky; fastidious
// 条款	條款	tiao2kuan3	tiáokuǎn	clause (of contract or law)
// 条理	條理	tiao2li3	tiáolǐ	consecutive; arrangement; orderliness
// 条约	條約	tiao2yue1	tiáoyuē	treaty; pact
// 调和	調和	tiao2he2	tiáohé	harmonious; harmony
// 调剂	調劑	tiao2ji4	tiáojì	make an adjustment
// 调节	調節	tiao2jie2	tiáojié	adjust; regulate; reconcile
// 调解	調解	tiao2jie3	tiáojiě	mediation; bring together to an agreement
// 调料	調料	tiao2liao4	tiáoliào	seasoning; flavoring
// 挑拨	挑撥	tiao3bo1	tiǎobō	incite disharmony; provoke; stir up tension in others
// 挑衅	挑釁	tiao3xin4	tiǎoxìn	provoke; defiance
// 跳跃	跳躍	tiao4yue4	tiàoyuè	jump; leap; bound; skip
// 亭子	亭子	ting2zi	tíngzi	pavilion; kiosk
// 停泊	停泊	ting2bo2	tíngbó	anchor; mooring (of a ship)
// 停顿	停頓	ting2dun4	tíngdùn	pause; halt
// 停滞	停滯	ting2zhi4	tíngzhì	stagnation; be at a standstill; bogged down
// 挺拔	挺拔	ting3ba2	tǐngbá	tall and straight
// 通货膨胀	通貨膨脹	tong1huo4 peng2zhang4	tōnghuò péngzhàng	inflation
// 通缉	通緝	tong1ji1	tōngjī	order the arrest of a criminal
// 通俗	通俗	tong1su2	tōngsú	popular; common; everyday; average; vulgar
// 通讯	通訊	tong1xun4	tōngxùn	communication; correspondence; news dispatch
// 通用	通用	tong1yong4	tōngyòng	in common use; interchangeable; General Motors
// 同胞	同胞	tong2bao1	tóngbāo	compatriot; fellow countryman
// 同志	同志	tong2zhi4	tóngzhì	comrade; gay (slang)
// 铜	銅	tong2	tóng	copper
// 童话	童話	tong2hua4	tónghuà	fairy tale
// 统筹兼顾	統籌兼顧	tong3chou2jiang1u4	tǒngchóujiāngù	take every aspects into consideration through plan and preparation
// 统计	統計	tong3ji4	tǒngjì	statistics; to tally; to add up
// 统统	統統	tong3tong3	tǒngtǒng	totally; completely
// 统治	統治	tong3zhi4	tǒngzhì	to rule (a country); govern; governance
// 投机	投機	tou2ji1	tóujī	speculate (on financial markets); congenial; opportunistic
// 投票	投票	tou2piao4	tóupiào	vote; poll
// 投诉	投訴	tou2su4	tóusù	make a complaint; appeal to a court
// 投降	投降	tou2xiang2	tóuxiáng	to surrender
// 投掷	投擲	tou2zhi4	tóuzhì	throw something a long distance; hurl
// 透露	透露	tou4lu4	tòulù	divulge; to reveal; leak out
// 秃	禿	tu1	tū	bald; blunt
// 突破	突破	tu1po4	tūpò	break through; breakthrough
// 图案	圖案	tu2'an4	tú'àn	design; pattern
// 徒弟	徒弟	tu2di4	túdì	disciple
// 途径	途徑	tu2jing4	tújìng	way; channel
// 涂抹	塗抹	tu2mo3	túmǒ	scribble; smear; doodle
// 土壤	土壤	tu3rang3	tǔrǎng	soil; earth
// 团结	團結	tuan2jie2	tuánjié	unite; hold a rally; join forces
// 团体	團體	tuan2ti3	tuántǐ	group; organization; team
// 团圆	團圓	tuan2yuan2	tuányuán	have a reunion; reunite as a family
// 推测	推測	tui1ce4	tuīcè	speculate; conjecture; surmise
// 推翻	推翻	tui1fan1	tuīfān	overthrow; topple
// 推理	推理	tui1li3	tuīlǐ	reasoning; speculative; inference
// 推论	推論	tui1lun4	tuīlùn	infer; a deduction; a corollary
// 推销	推銷	tui1xiao1	tuīxiāo	to market; sell
// 吞吞吐吐	吞吞吐吐	tun1tun1tu3tu3	tūntūntǔtǔ	hum and haw (idiom); mumble as if hiding something; speak and break off, then start again; to hold something back
// 托运	托運	tuo1yun4	tuōyùn	check in (baggage); consign for shipment
// 拖延	拖延	tuo1yan2	tuōyán	prolong; protraction; delay; stall; procrastinate
// 脱离	脫離	tuo1li2	tuōlí	to separate oneself from; to break away from; be divorced from; diastasis (medicine); abscission; abjunction (botany)
// 妥当	妥當	tuo3dang	tuǒdang	appropriate; proper; pertinence
// 妥善	妥善	tuo3shan4	tuǒshàn	appropriate; proper; well-arranged
// 妥协	妥協	tuo3xie2	tuǒxié	to compromise; reach terms
// 椭圆	橢圓	tuo3yuan2	tuǒyuán	ellipse; oval
// 唾弃	唾棄	tuo4qi4	tuòqì	cast aside; spurn
// 挖掘	挖掘	wa1jue2	wājué	excavate; dig; unearth
// 哇	哇	wa	wa	wow; (sound of crying or surprise)
// 娃娃	娃娃	wa2wa	wáwa	baby; child; doll
// 瓦解	瓦解	wa3jie3	wǎjiě	collapse; disintegrate; crumble
// 歪曲	歪曲	wai1qu1	wāiqū	to distort; to misrepresent; to twist; crooked; askew; aslant
// 外表	外表	wai4biao3	wàibiǎo	outward appearance; external; outside
// 外行	外行	wai4hang2	wàiháng	layman; amateur; nonprofessional
// 外界	外界	wai4jie4	wàijiè	the outside world; external
// 外向	外向	wai4xiang4	wàixiàng	extroverted; export-oriented (economy)
// 丸	丸	wan2	wán	pill; pellet
// 完备	完備	wan2bei4	wánbèi	complete; perfect
// 完毕	完畢	wan2bi4	wánbì	finish; end; complete
// 玩弄	玩弄	wan2nong4	wánnòng	resort to; play with; engage in
// 玩意儿	玩意兒	wan2yi4r	wányìr	thing; toy; gadget
// 顽固	頑固	wang2u4	wángù	stubborn; obstinate
// 顽强	頑強	wan2qiang2	wánqiáng	tenacious; hard to defeat
// 挽回	挽回	wan3hui2	wǎnhuí	reverse or salvage (a situation); redeem; retrieve
// 挽救	挽救	wan3jiu4	wǎnjiù	to rescue; retrieve; to remedy
// 惋惜	惋惜	wan3xi1	wǎnxī	feel sorry for a person; sympathize; to regret
// 万分	萬分	wan4fen1	wànfēn	very much; extremely
// 往常	往常	wang3chang2	wǎngcháng	habitually in the past; as one used to do; as it used to be
// 往事	往事	wang3shi4	wǎngshì	the past events; former happenings
// 妄想	妄想	wang4xiang3	wàngxiǎng	vainly hope; wishful thinking; delusion
// 危机	危機	wei1ji1	wēijī	crisis
// 威风	威風	wei1feng1	wēifēng	awe-inspiring authority; power and prestige; impressive force
// 威力	威力	wei1li4	wēilì	might; power that invokes fear
// 威望	威望	wei1wang4	wēiwàng	prestige
// 威信	威信	wei1xin4	wēixìn	prestige; reputation; veneration; authority; trust
// 微不足道	微不足道	wei1 bu4 zu2 dao4	wēi bù zú dào	negligible; insignificant; not worth mentioning
// 微观	微觀	wei1guan1	wēiguān	microscopic; sub atomic
// 为难	爲難	wei2nan2	wéinán	make things difficult for someone; embarrassed
// 为期	爲期	wei2qi1	wéiqī	be scheduled for; last for (a certain duration)
// 违背	違背	wei2bei4	wéibèi	violate; go against
// 唯独	唯獨	wei2du2	wéidú	only; just (i.e. it is only that ...); alone
// 维持	維持	wei2chi2	wéichí	maintain; preserve
// 维护	維護	wei2hu4	wéihù	defend; to safeguard; defense; maintain
// 维生素	維生素	wei2sheng1su4	wéishēngsù	vitamin
// 伪造	僞造	wei3zao4	wěizào	forge; to fake; to counterfeit
// 委托	委托	wei3tuo1	wěituō	to entrust; to trust; to ensign; to commission
// 委员	委員	wei3yuan2	wěiyuán	committee member; committee; council
// 卫星	衛星	wei4xing1	wèixīng	satellite
// 未免	未免	wei4mian3	wèimiǎn	(of something that one finds has gone too far); rather a bit too
// 畏惧	畏懼	wei4ju4	wèijù	to fear; foreboding
// 喂	喂	wei4, wei2	wèi, wéi	hey; to feed | hello (on the phone)
// 蔚蓝	蔚藍	wei4lan2	wèilán	azure; sky blue
// 慰问	慰問	wei4wen4	wèiwèn	to express sympathy; consolation; extend regards to; salute
// 温带	溫帶	wen1dai4	wēndài	temperate zone
// 温和	溫和	wen1he2	wēnhé	moderate; warm; (-huo: lukewarm)
// 文凭	文憑	wen2ping2	wénpíng	diploma
// 文物	文物	wen2wu4	wénwù	cultural relic; historical relic
// 文献	文獻	wen2xian4	wénxiàn	document; literature
// 文雅	文雅	wen2ya3	wényǎ	elegant; refined
// 文艺	文藝	wen2yi4	wényì	literature and art
// 问世	問世	wen4shi4	wènshì	be published; to come out
// 窝	窩	wo1	wō	nest; den
// 乌黑	烏黑	wu1hei1	wūhēi	jet-black; pitch-black
// 污蔑	汙蔑	wu1mie4	wūmiè	to slander
// 诬陷	誣陷	wu1xian4	wūxiàn	entrap; to frame; plant false evidence against sb.
// 无比	無比	wu2bi3	wúbǐ	matchless; incomparable
// 无偿	無償	wu2chang2	wúcháng	free; no charge; at no cost
// 无耻	無恥	wu2chi3	wúchǐ	without any sense of shame; shameless; audaciousness
// 无动于衷	無動于衷	wu2dong4yu2zhong1	wúdòngyúzhōng	aloof; indifferent; unconcerned; untouched
// 无非	無非	wu2fei1	wúfēi	nothing but; only
// 无辜	無辜	wu2gu1	wúgū	innocent
// 无精打采	無精打采	wu2jing1da3cai3	wújīngdǎcǎi	listless; be dispirited; in low spirits
// 无赖	無賴	wu2lai4	wúlài	hoodlum; rascal; rogue; rascally; scoundrelly
// 无理取闹	無理取鬧	wu2li3qun3ao4	wúlǐqǔnào	to make trouble without reason (idiom); wilfully make trouble; to be deliberately provocative; deliberately awkward; pointless provocation
// 无能为力	無能爲力	wu2 neng2 wei2 li4	wú néng wéi lì	incapable of action; powerless; impotent
// 无穷无尽	無窮無盡	wu2qiong2wu2jin4	wúqióngwújìn	vast and limitless; endless span of time; no vestige of a beginning, no prospect of an end
// 无微不至	無微不至	wu2 wei1 bu2 zhi4	wú wēi bú zhì	in every possible way; meticulously
// 无忧无虑	無憂無慮	wu2you1wu2lü4	wúyōuwúlǜ	carefree and without worries
// 无知	無知	wu2zhi1	wúzhī	ignorance
// 武器	武器	wu3qi4	wǔqì	weapon; arms
// 武侠	武俠	wu3xia2	wǔxiá	knight-errant; a genre of swordplay martial arts movies and books
// 武装	武裝	wu3zhuang1	wǔzhuāng	arms; equipment; to arm
// 侮辱	侮辱	wu3ru3	wǔrǔ	to insult; humiliate
// 舞蹈	舞蹈	wu3dao3	wǔdǎo	a dance
// 务必	務必	wu4bi4	wùbì	must; need to; be sure to
// 物美价廉	物美價廉	wu4mei3jia4lian2	wùměijiàlián	attractive goods at inexpensive prices
// 物业	物業	wu4ye4	wùyè	property management
// 物资	物資	wu4zi1	wùzī	goods and materials; commodity
// 误差	誤差	wu4cha1	wùchā	difference; error; inaccuracy
// 误解	誤解	wu4jie3	wùjiě	misunderstand; misread
// 夕阳	夕陽	xi1yang2	xīyáng	setting sun
// 昔日	昔日	xi1ri4	xīrì	formerly; in olden days
// 牺牲	犧牲	xi1sheng1	xīshēng	sacrifice (one's life, etc.)
// 溪	溪	xi1	xī	creek
// 熄灭	熄滅	xi1mie4	xīmiè	extinguish; go out (of fire); die out; extinction
// 膝盖	膝蓋	xi1gai4	xīgài	knee
// 习俗	習俗	xi2su2	xísú	custom; tradition; (local) convention
// 袭击	襲擊	xi2ji1	xíjī	surprise attack; to raid
// 媳妇	媳婦	xi2fu4	xífù	daughter-in-law; son's wife
// 喜闻乐见	喜聞樂見	xi3wen2le4jian4	xǐwénlèjiàn	a delight to see (idiom); an attractive spectacle
// 喜悦	喜悅	xi3yue4	xǐyuè	happy; joyous
// 系列	系列	xi4lie4	xìliè	series
// 细胞	細胞	xi4bao1	xìbāo	cell (biology)
// 细菌	細菌	xi4jun1	xìjūn	bacteria; virus; germ
// 细致	細致	xi4zhi4	xìzhì	delicate; meticulous
// 峡谷	峽谷	xia2gu3	xiágǔ	canyon; ravine; gorge
// 狭隘	狹隘	xia2'ai4	xiá'ài	narrow; tight; narrow (minded); lacking in experience
// 狭窄	狹窄	xia2zhai3	xiázhǎi	narrow
// 霞	霞	xia2	xiá	red clouds
// 下属	下屬	xia4shu3	xiàshǔ	subordinate; underling
// 先进	先進	xian1jin4	xiānjìn	advanced (technology); to advance
// 先前	先前	xian1qian2	xiānqián	before; previously
// 纤维	纖維	xian1wei2	xiānwéi	fiber
// 掀起	掀起	xian1qi3	xiānqǐ	lift; raise in height
// 鲜明	鮮明	xian1ming2	xiānmíng	bright; clear-cut; distinct
// 闲话	閑話	xian2hua4	xiánhuà	gossip; digression
// 贤惠	賢惠	xian2hui4	xiánhuì	virtuous and dutiful (of women)
// 弦	弦	xian2	xián	bow string; string of musical instruments
// 衔接	銜接	xian2jie1	xiánjiē	to join together; to combine
// 嫌	嫌	xian2	xián	to dislike; suspicion; grudge
// 嫌疑	嫌疑	xian2yi2	xiányí	suspicion; (be) suspected (of)
// 显著	顯著	xian3zhu4	xiǎnzhù	notable; marked; outstanding; remarkable
// 现场	現場	xian4chang3	xiànchǎng	scene (of event or incident); on the spot
// 现成	現成	xian4cheng2	xiànchéng	ready-made; off-the-shelf
// 现状	現狀	xian4zhuang4	xiànzhuàng	current situation; status quo
// 线索	線索	xian4suo3	xiànsuǒ	trail; clues; hints; thread (of a story)
// 宪法	憲法	xian4fa3	xiànfǎ	constitution; charter
// 陷害	陷害	xian4hai4	xiànhài	cast blame on; to frame
// 陷阱	陷阱	xian4jing3	xiànjǐng	trap; snare
// 陷入	陷入	xian4ru4	xiànrù	sink into; get caught up in; land in (a predicament)
// 馅儿	餡兒	xian4r	xiànr	stuffing; filling
// 乡镇	鄉鎮	xiang1zhen4	xiāngzhèn	village and town
// 相差	相差	xiang1cha4	xiāngchà	differ; difference
// 相等	相等	xiang1deng3	xiāngděng	be equal to; equally; equivalent
// 相辅相成	相輔相成	xiang1fu3xiang1cheng2	xiāngfǔxiāngchéng	supplement and complement each other
// 相应	相應	xiang1ying4	xiāngyìng	correspond; relevant
// 镶嵌	鑲嵌	xiang1qian4	xiāngqiàn	inlay
// 响亮	響亮	xiang3liang4	xiǎngliàng	loud and clear; resounding
// 响应	響應	xiang3ying4	xiǎngyìng	respond to; answer
// 想方设法	想方設法	xiang3 fang1 she4 fa3	xiǎng fāng shè fǎ	(saying) think of or try every possible method; by all means possible
// 向导	向導	xiang4dao3	xiàngdǎo	guide
// 向来	向來	xiang4lai2	xiànglái	always; all along
// 向往	向往	xiang4wang3	xiàngwǎng	yearn for; look forward to
// 巷	巷	xiang4	xiàng	lane; alley
// 相声	相聲	xiang4sheng	xiàngsheng	comic dialogue; crosstalk
// 削	削	xue1	xuē	to pare/peel with a knife; to cut; to chop
// 消除	消除	xiao1chu2	xiāochú	eliminate; remove; clear up (abstract things）
// 消毒	消毒	xiao1 du2	xiāo dú	disinfect; sterilize
// 消防	消防	xiao1fang2	xiāofáng	fire-fighting; fire prevention and control
// 消耗	消耗	xiao1hao4	xiāohào	use up; consume
// 消灭	消滅	xiao1mie4	xiāomiè	eliminate; perish; wipe out
// 销毁	銷毀	xiao1hui3	xiāohuǐ	destroy (by melting or burning)
// 潇洒	潇灑	xiao1sa3	xiāosǎ	free and easy
// 小心翼翼	小心翼翼	xiao3xin1 yi4yi4	xiǎoxīn yìyì	carefully; cautiously; with great care
// 肖像	肖像	xiao4xiang4	xiàoxiàng	portrait
// 效益	效益	xiao4yi4	xiàoyì	benefit；results
// 协会	協會	xie2hui4	xiéhuì	an association; a society
// 协商	協商	xie2shang1	xiéshāng	consult with; talk things over
// 协调	協調	xie2tiao2	xiétiáo	coordinate; harmonize
// 协议	協議	xie2yi4	xiéyì	agreement; pact; protocol
// 协助	協助	xie2zhu4	xiézhù	assist; to help
// 携带	攜帶	xie2dai4	xiédài	take with; portable
// 泄露	泄露	xie4lou4	xièlòu	leak (information); divulge
// 泄气	泄氣	xie4qi4	xièqì	despair; feel like giving up/disappointing; pathetic
// 屑	屑	xie4	xiè	crumbs; filings; worth while
// 谢绝	謝絕	xie4jue2	xièjué	politely refuse
// 心得	心得	xin1de2	xīndé	knowledge gained
// 心甘情愿	心甘情願	xing1an1qing2yuan4	xīngānqíngyuàn	totally willing; perfectly happy to
// 心灵	心靈	xin1ling2	xīnlíng	heart; soul; smart; quick-witted
// 心态	心態	xin1tai4	xīntài	pyschology; mentality; spirit
// 心疼	心疼	xin1teng2	xīnténg	love dearly; the pain of love
// 心血	心血	xin1xue4	xīnxuè	heart and blood; painstaking effort; meticulous care
// 心眼儿	心眼兒	xin1yan3r	xīnyǎnr	one's thoughts; mind; intention; willingness to accept new ideas
// 辛勤	辛勤	xin1qin2	xīnqín	hardworking; diligent; industrious
// 欣慰	欣慰	xin1wei4	xīnwèi	be gratified; satisfied
// 欣欣向荣	欣欣向榮	xin1xin1 xiang4 rong2	xīnxīn xiàng róng	flourishing; thriving; prosperous
// 新陈代谢	新陳代謝	xin1 chen2 dai4xie4	xīn chén dàixiè	metabolism (bio); (saying) the new replaces the old
// 新郎	新郎	xin1lang2	xīnláng	bridegroom; groom
// 新娘	新娘	xin1niang2	xīnniáng	bride
// 新颖	新穎	xin1ying3	xīnyǐng	new and original; novel
// 薪水	薪水	xin1shui3	xīnshuǐ	salary; wage; pay; stipend
// 信赖	信賴	xin4lai4	xìnlài	trust; have confidence in; confide
// 信念	信念	xin4nian4	xìnniàn	faith; belief; conviction
// 信仰	信仰	xin4yang3	xìnyǎng	firm belief; faith; believe in (a religion)
// 信誉	信譽	xin4yu4	xìnyù	reputation; prestige; trust
// 兴隆	興隆	xing1long2	xīnglóng	prosperous; flourishing
// 兴旺	興旺	xing1wang4	xīngwàng	prosperous; thriving; to prosper
// 腥	腥	xing1	xīng	fishy (smell)
// 刑事	刑事	xing2shi4	xíngshì	criminal; penal
// 行政	行政	xing2zheng4	xíngzhèng	administration; administrative
// 形态	形態	xing2tai4	xíngtài	shape; form; pattern
// 兴高采烈	興高采烈	xing4 gao1 cai3 lie4	xìng gāo cǎi liè	in high spirits
// 兴致勃勃	興致勃勃	xing4zhi4bo2bo2	xìngzhìbóbó	in high spirits
// 性感	性感	xing4gan3	xìnggǎn	sex appeal; sexy; sexuality
// 性命	性命	xing4ming4	xìngmìng	life
// 性能	性能	xing4neng2	xìngnéng	function; performance
// 凶恶	凶惡	xiong1'e4	xiōng'è	fierce; ferocious; menacing
// 凶手	凶手	xiong1shou3	xiōngshǒu	murderer; assassin; assailant
// 汹涌	洶湧	xiong1yong3	xiōngyǒng	(used in reference to an ocean, river, lake etc.) violently surge up; turbulent
// 胸怀	胸懷	xiong1huai2	xiōnghuái	think about; heart; one's bosom (the seat of emotions); breast; broad-minded and open
// 胸膛	胸膛	xiong1tang2	xiōngtáng	chest
// 雄厚	雄厚	xiong2hou4	xiónghòu	abundant; strong and solid; rich
// 雄伟	雄偉	xiong2wei3	xióngwěi	grand; majestic
// 修复	修複	xiu1fu4	xiūfù	restoration; repair
// 修建	修建	xiu1jian4	xiūjiàn	to build; to construct; renovate
// 修养	修養	xiu1yang3	xiūyǎng	accomplishment; self-cultivation
// 羞耻	羞恥	xiu1chi3	xiūchǐ	(a feeling of) shame
// 绣	繡	xiu4	xiù	embroider; embroidery
// 嗅觉	嗅覺	xiu4jue2	xiùjué	sense of smell; scent
// 须知	須知	xu1zhi1	xūzhī	prerequisites; knowledge requirement
// 虚假	虛假	xu1jia3	xūjiǎ	false; phony; pretense; deceit
// 虚荣	虛榮	xu1rong2	xūróng	vanity
// 虚伪	虛僞	xu1wei3	xūwěi	false; hypocritical; artificial; sham
// 需求	需求	xu1qiu2	xūqiú	requirement; demand (economics)
// 许可	許可	xu3ke3	xǔkě	allow; permit; permission
// 序言	序言	xu4yan2	xùyán	preface of a book, used to explain the book's objective
// 畜牧	畜牧	xu4mu4	xùmù	raise animals
// 酗酒	酗酒	xu4jiu3	xùjiǔ	heavy drinking; drink to excess; binge drink
// 宣誓	宣誓	xuan1 shi4	xuān shì	swear an oath (of office); make a vow
// 宣扬	宣揚	xuan1yang2	xuānyáng	publicize; make public or well known
// 喧哗	喧嘩	xuan1hua2	xuānhuá	cause a scene
// 悬挂	懸挂	xuang2ua4	xuánguà	suspend; hang; suspension (cable car)
// 悬念	懸念	xuan2nian4	xuánniàn	reader's involvement; suspense in a movie, place etc
// 悬殊	懸殊	xuan2shu1	xuánshū	a wide gap; big contrast; large disparity; a mismatch
// 悬崖峭壁	懸崖峭壁	xuan2ya2qiao4bi4	xuányáqiàobì	cliffside
// 旋律	旋律	xuan2lü4	xuánlǜ	melody; tune; rhythm
// 旋转	旋轉	xuan2zhuan3	xuánzhuǎn	to whirl; to spin; rotate
// 选拔	選拔	xuan3ba2	xuǎnbá	select the best; choose
// 选举	選舉	xuan3ju3	xuǎnjǔ	elect; election
// 选手	選手	xuan3shou3	xuǎnshǒu	athlete; contestant; player
// 炫耀	炫耀	xuan4yao4	xuànyào	to show off; flaunt
// 削弱	削弱	xue1ruo4	xuēruò	weaken; to cripple
// 学说	學說	xue2shuo1	xuéshuō	theory; doctrine
// 学位	學位	xue2wei4	xuéwèi	academic degree; educational level
// 雪上加霜	雪上加霜	xue3shang4jia1shuang1	xuěshàngjiāshuāng	(literally) add frost to snow; one disaster after another; insult added to injury
// 血压	血壓	xue4ya1	xuèyā	blood pressure
// 熏陶	熏陶	xun1tao2	xūntáo	to influence (positively)
// 寻觅	尋覓	xun2mi4	xúnmì	to seek; to look for
// 巡逻	巡邏	xun2luo2	xúnluó	to patrol (police, army or navy)
// 循环	循環	xun2huan2	xúnhuán	circular cycle; loop; circulate
// 循序渐进	循序漸進	xun2 xu4 jian4 jin4	xún xù jiàn jìn	make steady progress incrementally; step by step program
// 压迫	壓迫	ya1po4	yāpò	oppress
// 压岁钱	壓歲錢	ya1sui4qian2	yāsuìqián	gifts of money given to children during the Spring Festival
// 压缩	壓縮	ya1suo1	yāsuō	to compress
// 压抑	壓抑	ya1yi4	yāyì	constrain or repress one's emotions; inhibition; repressive
// 压榨	壓榨	ya1zha4	yāzhà	to press; to squeeze; to extract juice, oil, etc. by squeezing
// 压制	壓制	ya1zhi4	yāzhì	suppress; inhibit; stifle
// 鸦雀无声	鴉雀無聲	ya1que4wu2sheng1	yāquèwúshēng	not even a crow or sparrow can be heard (idiom); silence reigns
// 亚军	亞軍	ya4jun1	yàjūn	second place; runner-up
// 烟花爆竹	煙花爆竹	yan1hua1bao4zhu2	yānhuābàozhú	fireworks and crackers
// 淹没	淹沒	yan1mo4	yānmò	submerge; drown; to flood
// 延期	延期	yan2 qi1	yán qī	delay; extend; postpone
// 延伸	延伸	yan2shen1	yánshēn	extend; spread; stretch
// 延续	延續	yan2xu4	yánxù	continue; last longer
// 严寒	嚴寒	yan2han2	yánhán	bitter cold; severe winter
// 严禁	嚴禁	yan2jin4	yánjìn	strictly prohibit; forbid
// 严峻	嚴峻	yan2jun4	yánjùn	grim; severe; rigorous; harsh
// 严厉	嚴厲	yan2li4	yánlì	strict; severe
// 严密	嚴密	yan2mi4	yánmì	strict; closely-knit; tight
// 言论	言論	yan2lun4	yánlùn	expression of (political) opinion; speech
// 岩石	岩石	yan2shi2	yánshí	rock; stone
// 炎热	炎熱	yan2re4	yánrè	blistering hot; sizzling hot (weather)
// 沿海	沿海	yan2hai3	yánhǎi	coastal
// 掩盖	掩蓋	yang3ai4	yǎngài	conceal; cover up; hide behind
// 掩护	掩護	yan3hu4	yǎnhù	cover; shield; screen
// 掩饰	掩飾	yan3shi4	yǎnshì	conceal a fault; gloss over
// 眼光	眼光	yang3uang1	yǎnguāng	vision
// 眼色	眼色	yan3se4	yǎnsè	a wink; signal with one's eyes
// 眼神	眼神	yan3shen2	yǎnshén	expression or emotion showing in one's eyes
// 演变	演變	yan3bian4	yǎnbiàn	develop; evolve
// 演习	演習	yan3xi2	yǎnxí	rehearse; practice; put on a play
// 演绎	演繹	yan3yi4	yǎnyì	deduction; to deduce; to infer
// 演奏	演奏	yan3zou4	yǎnzòu	give an instrumental performance
// 厌恶	厭惡	yan4wu4	yànwù	loathe; to hate; detest
// 验收	驗收	yan4shou1	yànshōu	inspect and then accept (i.e. received goods
// 验证	驗證	yan4zheng4	yànzhèng	inspect and verify
// 氧气	氧氣	yang3qi4	yǎngqì	oxygen
// 样品	樣品	yang4pin3	yàngpǐn	sample; specimen
// 谣言	謠言	yao2yan2	yáoyán	rumor
// 摇摆	搖擺	yao2bai3	yáobǎi	to waver; to wag; to sway
// 摇滚	搖滾	yao2gun3	yáogǔn	rock and roll
// 遥控	遙控	yao2kong4	yáokòng	remote control
// 遥远	遙遠	yao2yuan3	yáoyuǎn	distant; remote
// 要点	要點	yao4dian3	yàodiǎn	main point; essential
// 要命	要命	yao4ming4	yàomìng	cause somebody's death; very; extremely; frighteningly; annoyance
// 要素	要素	yao4su4	yàosù	essential factor; key constituent
// 耀眼	耀眼	yao4yan3	yàoyǎn	dazzle; to shine
// 野蛮	野蠻	ye3man2	yěmán	barbarous; uncivilized; cruel; wild
// 野心	野心	ye3xin1	yěxīn	ambition; wild schemes or ambitions; careerism
// 液体	液體	ye4ti3	yètǐ	liquid
// 一度	一度	yi2du4	yídù	for a time; at one time; one time; once
// 一帆风顺	一帆風順	yi4fan1feng1shun4	yìfānfēngshùn	(saying) smooth sailing
// 一贯	一貫	yi2guan4	yíguàn	consistent; constant; from start to finish; then as now
// 一举两得	一舉兩得	yi4ju3liang3de2	yìjǔliǎngdé	kill two birds with one stone; (literally) attain two objectives with a single move
// 一流	一流	yi1liu2	yīliú	top-grade
// 一目了然	一目了然	yi2mu4liao3ran2	yímùliǎorán	obvious at a glance
// 一如既往	一如既往	yi4ru2ji4wang3	yìrújìwǎng	just as in the past (idiom); as before; continuing as always
// 一丝不苟	一絲不苟	yi4si1bu4gou3	yìsībùgǒu	(literally) not one thread loose; strictly according to the rules; meticulous
// 一向	一向	yi2xiang4	yíxiàng	all along; the whole time; constantly; always
// 衣裳	衣裳	yi1shang	yīshang	clothes
// 依旧	依舊	yi1jiu4	yījiù	as before; still
// 依据	依據	yi1ju4	yījù	according to; basis; foundation
// 依靠	依靠	yi1kao4	yīkào	rely on; depend on
// 依赖	依賴	yi1lai4	yīlài	depend on; be dependent on
// 依托	依托	yi1tuo1	yītuō	rely on; depend on
// 仪器	儀器	yi2qi4	yíqì	apparatus; (scientific) instrument
// 仪式	儀式	yi2shi4	yíshì	ceremony
// 遗产	遺産	yi2chan3	yíchǎn	heritage; legacy
// 遗传	遺傳	yi2chuan2	yíchuán	inherit; hereditary
// 遗留	遺留	yi2liu2	yíliú	legacy; left over; hand down
// 遗失	遺失	yi2shi1	yíshī	lose; lose due to carelessness
// 疑惑	疑惑	yi2huo4	yíhuò	(a sense of) uncertainty; to feel unsure about something; uncertainty
// 以便	以便	yi3bian4	yǐbiàn	so that; in order to
// 以免	以免	yi3mian3	yǐmiǎn	so as not to; in order to avoid; lest
// 以往	以往	yi3wang3	yǐwǎng	in the past; formerly
// 以至	以至	yi3zhi4	yǐzhì	down to; up to; to such an extent as to...
// 以致	以致	yi3zhi4	yǐzhì	so that; as a result
// 亦	亦	yi4	yì	also
// 异常	異常	yi4chang2	yìcháng	exceptional; abnormal
// 意料	意料	yi4liao4	yìliào	expectation; to anticipate; to think ahead
// 意识	意識	yi4shi	yìshi	realize; consciousness; awareness; sense
// 意图	意圖	yi4tu2	yìtú	intent; intention; intend
// 意味着	意味著	yi4wei4zhe	yìwèizhe	signify; to mean; imply
// 意向	意向	yi4xiang4	yìxiàng	will; intent; disposition
// 意志	意志	yi4zhi4	yìzhì	will; willpower; determination
// 毅力	毅力	yi4li4	yìlì	willpower; perseverance; will; stamina; tenacity
// 毅然	毅然	yi4ran2	yìrán	without hesitation; resolutely; firmly
// 翼	翼	yi4	yì	wings; fins on fish; shelter
// 阴谋	陰謀	yin1mou2	yīnmóu	a plot; a conspiracy
// 音响	音響	yin1xiang3	yīnxiǎng	(Electronic) speakers; acoustics; sound field (i.e., in a room or theater)
// 引导	引導	yin3dao3	yǐndǎo	to guide; to conduct; introduction
// 引擎	引擎	yin3qing2	yǐnqíng	engine
// 引用	引用	yin3yong4	yǐnyòng	quote; cite
// 饮食	飲食	yin3shi2	yǐnshí	food and drink; diet
// 隐蔽	隱蔽	yin3bi4	yǐnbì	conceal; hide; covert; under cover; Take cover!
// 隐患	隱患	yin3huan4	yǐnhuàn	hidden danger
// 隐瞒	隱瞞	yin3man2	yǐnmán	conceal; hide; (a taboo subject); cover up the truth
// 隐私	隱私	yin3si1	yǐnsī	privacy; personal secret
// 隐约	隱約	yin3yue1	yǐnyuē	vague; faint; indistinct
// 英明	英明	ying1ming2	yīngmíng	wise; brilliant
// 英勇	英勇	ying1yong3	yīngyǒng	bravery; heroic; valiant; gallant
// 婴儿	嬰兒	ying1'er2	yīng'ér	baby infant
// 迎面	迎面	ying2 mian4	yíng miàn	face to face; headlong; in one's face
// 盈利	盈利	ying2li4	yínglì	profit; gain
// 应酬	應酬	ying4chou	yìngchou	socialize with; a social engagement
// 应邀	應邀	ying4yao1	yìngyāo	at sb.'s invitation
// 拥护	擁護	yong1hu4	yōnghù	to support; endorse
// 拥有	擁有	yong1you3	yōngyǒu	have; possess
// 庸俗	庸俗	yong1su2	yōngsú	filthy; vulgar; debased
// 永恒	永恒	yong3heng2	yǒnghéng	eternal; everlasting
// 勇于	勇于	yong3yu2	yǒngyú	have the courage to; be brave enough
// 涌现	湧現	yong3xian4	yǒngxiàn	spring up; emerge prominently
// 踊跃	踴躍	yong3yue4	yǒngyuè	eager; enthusiastically
// 用户	用戶	yong4hu4	yònghù	user; consumer; subscriber; customer
// 优胜劣汰	優勝劣汰	you1sheng4lie4tai4	yōushèngliètài	survival of the fittest
// 优先	優先	you1xian1	yōuxiān	priority; preferential
// 优异	優異	you1yi4	yōuyì	exceptional; excellent; outstandingly good
// 优越	優越	you1yue4	yōuyuè	superior; superiority
// 忧郁	憂郁	you1yu4	yōuyù	melancholy; dejected
// 犹如	猶如	you2ru2	yóurú	just as; similar to; appearing to be
// 油腻	油膩	you2ni4	yóunì	greasy or oily (food)
// 油漆	油漆	you2qi1	yóuqī	oil paint; varnish
// 有条不紊	有條不紊	you3tiao2bu4wen3	yǒutiáobùwěn	in an orderly way; methodically; systematically; methodical
// 幼稚	幼稚	you4zhi4	yòuzhì	childish; naïve; immature
// 诱惑	誘惑	you4huo4	yòuhuò	tempt; temptation; entice; lure; attract
// 渔民	漁民	yu2min2	yúmín	fisherman; fisher folk
// 愚蠢	愚蠢	yu2chun3	yúchǔn	silly; stupid
// 愚昧	愚昧	yu2mei4	yúmèi	ignorant; benighted
// 舆论	輿論	yu2lun4	yúlùn	public opinion
// 与日俱增	與日俱增	yu3ri4ju4zeng1	yǔrìjùzēng	grow with each passing day
// 宇宙	宇宙	yu3zhou4	yǔzhòu	universe; cosmos
// 羽绒服	羽絨服	yu3rong2fu2	yǔróngfú	down jacket
// 玉	玉	yu4	yù	jade (Kangxi radical 96)
// 预料	預料	yu4liao4	yùliào	anticipate; to forecast; expectation
// 预期	預期	yu4qi1	yùqī	expect; expected; anticipate
// 预算	預算	yu4suan4	yùsuàn	budget
// 预先	預先	yu4xian1	yùxiān	beforehand; prior
// 预言	預言	yu4yan2	yùyán	predict; prophecy
// 预兆	預兆	yu4zhao4	yùzhào	omen, sign
// 欲望	欲望	yu4wang4	yùwàng	desire; lust
// 寓言	寓言	yu4yan2	yùyán	fable
// 愈	愈	yu4	yù	recover; heal; the more ... the more
// 冤枉	冤枉	yuan1wang	yuānwang	to wrong; injustice; not worthwhile
// 元首	元首	yuan2shou3	yuánshǒu	head of state
// 元素	元素	yuan2su4	yuánsù	element; element of a set; chemical element
// 元宵节	元宵節	Yuan2xiao1 Jie2	Yuánxiāo Jié	the Lantern Festival
// 园林	園林	yuan2lin2	yuánlín	gardens; park; landscape
// 原告	原告	yuang2ao4	yuángào	plaintiff; complainant; accuser
// 原理	原理	yuan2li3	yuánlǐ	principle; theory
// 原始	原始	yuan2shi3	yuánshǐ	first; original; primitive
// 原先	原先	yuan2xian1	yuánxiān	former; original
// 圆满	圓滿	yuan2man3	yuánmǎn	satisfactory
// 缘故	緣故	yuang2u4	yuángù	reason; cause
// 源泉	源泉	yuan2quan2	yuánquán	headspring; fountainhead; water source
// 约束	約束	yue1shu4	yuēshù	restrict; limit to; constrain; restriction
// 乐谱	樂譜	yue4pu3	yuèpǔ	sheet music
// 岳母	嶽母	yue4mu3	yuèmǔ	wife's mother; mother-in-law
// 孕育	孕育	yun4yu4	yùnyù	be pregnant; to produce offspring; nurture (a development, school of thought, artwork, etc.)
// 运算	運算	yun4suan4	yùnsuàn	(mathematical) operation
// 运行	運行	yun4xing2	yùnxíng	movement; be in motion; run
// 酝酿	醞釀	yun4niang4	yùnniàng	mull over (an issue); hold a preliminary round of exploratory discussions
// 蕴藏	蘊藏	yun4cang2	yùncáng	hold in store; contain untapped quantities
// 熨	熨	yun4	yùn	iron; press
// 杂技	雜技	za2ji4	zájì	acrobatics
// 杂交	雜交	za2jiao1	zájiāo	create a hybrid; cross-fertilize
// 砸	砸	za2	zá	to smash; to pound; to break; fail
// 咋	咋	za3	zǎ	how/why (contraction of 怎么)
// 灾难	災難	zai1nan4	zāinàn	disaster; catastrophe
// 栽培	栽培	zai1pei2	zāipéi	grow; educate; cultivate
// 宰	宰	zai3	zǎi	slaughter; butcher; govern; rule; imperial official in dynastic China
// 再接再厉	再接再厲	zai4jie1zai4li4	zàijiēzàilì	continue the struggle; persist; unremitting efforts
// 在意	在意	zai4 yi4	zài yì	care about; mind; care
// 攒	攢	zan3	zǎn	save; hoard
// 暂且	暫且	zan4qie3	zànqiě	for the moment; for the time being; temporarily
// 赞叹	贊歎	zan4tan4	zàntàn	sigh or grasp in admiration; highly praise
// 赞助	贊助	zan4zhu4	zànzhù	support; sponsor
// 遭受	遭受	zao1shou4	zāoshòu	suffer; suffering; be subjected to (something unfortunate)
// 遭殃	遭殃	zao1 yang1	zāo yāng	to suffer a calamity; go through a disaster
// 遭遇	遭遇	zao1yu4	zāoyù	befall; suffer; encounter
// 糟蹋	糟蹋	zao1ta4	zāotà	waste; ruin; wreck; spoil; slander
// 造型	造型	zao4xing2	zàoxíng	make a model; to mold
// 噪音	噪音	zao4yin1	zàoyīn	uproar; rumble; noise; static
// 责怪	責怪	ze2guai4	zéguài	blame; rebuke
// 贼	賊	zei2	zéi	thief
// 增添	增添	zeng1tian1	zēngtiān	add to; increase
// 赠送	贈送	zeng4song4	zèngsòng	give as a present
// 扎	紮	zha1	zhā	to prick; push a needle into; penetrating
// 扎实	紮實	zha1shi	zhāshi	strong; sturdy; practical
// 渣	渣	zha1	zhā	dregs; slag
// 眨	眨	zha3	zhǎ	wink; blink
// 诈骗	詐騙	zha4pian4	zhàpiàn	defraud; swindle; blackmail
// 摘要	摘要	zhai1yao4	zhāiyào	summary; abstract
// 债券	債券	zhai4quan4	zhàiquàn	bond
// 沾光	沾光	zhan1 guang1	zhān guāng	bask in the light; benefit from association with sth.; reflected glory
// 瞻仰	瞻仰	zhan1yang3	zhānyǎng	look at with reverence; admire
// 斩钉截铁	斬釘截鐵	zhan3 ding1 jie2 tie3	zhǎn dīng jié tiě	to chop the nail and slice the iron (idiom); resolute and decisive; definitely
// 展示	展示	zhan3shi4	zhǎnshì	open up; reveal; to display
// 展望	展望	zhan3wang4	zhǎnwàng	outlook; prospect; to look ahead; look forward to
// 展现	展現	zhan3xian4	zhǎnxiàn	come out; emerge; express; show
// 崭新	嶄新	zhan3xin1	zhǎnxīn	brand new
// 占据	占據	zhan4ju4	zhànjù	occupy; hold; inhabit
// 占领	占領	zhan4ling3	zhànlǐng	occupy (a territory); capture; seize
// 战斗	戰鬥	zhan4dou4	zhàndòu	to fight; to battle; to struggle
// 战略	戰略	zhan4lüe4	zhànlüè	strategy
// 战术	戰術	zhan4shu4	zhànshù	(military) tactics
// 战役	戰役	zhan4yi4	zhànyì	military campaign; battle
// 章程	章程	zhang1cheng2	zhāngchéng	written rules; statute; regulations; charter of a corporation
// 帐篷	帳篷	zhang4peng	zhàngpeng	tent
// 障碍	障礙	zhang4'ai4	zhàng'ài	barrier; obstacle
// 招标	招標	zhao1biao1	zhāobiāo	to beckon; to invite bids
// 招收	招收	zhao1shou1	zhāoshōu	recruit; take in; to hire
// 朝气蓬勃	朝氣蓬勃	zhao1 qi4 peng2 bo2	zhāo qì péng bó	full of youthful energy (idiom); full of vigour and vitality; energetic; spirited; a bright spark
// 着迷	著迷	zhao2mi2	zháomí	to be fascinated
// 沼泽	沼澤	zhao3ze2	zhǎozé	marsh; swamp; glade; wetlands
// 照样	照樣	zhao4yang4	zhàoyàng	as before; (same) as usual
// 照耀	照耀	zhao4yao4	zhàoyào	to shine; illuminate
// 折腾	折騰	zhe1teng	zhēteng	toss from side to side (e.g. sleeplessly); do something over and over again; cause suffering; play crazy; screw around
// 遮挡	遮擋	zhe1dang3	zhēdǎng	shelter from; keep out
// 折	折	zhe2	zhé	to break; to fracture; convert into; to fold
// 折磨	折磨	zhe2mo	zhémo	persecute; to torture
// 侦探	偵探	zhen1tan4	zhēntàn	detective
// 珍贵	珍貴	zheng1ui4	zhēnguì	precious
// 珍稀	珍稀	zhen1xi1	zhēnxī	rare; precious and uncommon
// 珍珠	珍珠	zhen1zhu1	zhēnzhū	pearl
// 真理	真理	zhen1li3	zhēnlǐ	truth
// 真相	真相	zhen1xiang4	zhēnxiàng	the actual facts; reality
// 真挚	真摯	zhen1zhi4	zhēnzhì	sincere; sincerity; genuine
// 斟酌	斟酌	zhen1zhuo2	zhēnzhuó	Consider; deliberate
// 枕头	枕頭	zhen3tou	zhěntou	pillow
// 阵地	陣地	zhen4di4	zhèndì	position; battlefront
// 阵容	陣容	zhen4rong2	zhènróng	line-up; troop arrangement
// 振奋	振奮	zhen4fen4	zhènfèn	stir oneself up; raise one's spirits; inspire
// 振兴	振興	zhen4xing1	zhènxīng	develop vigorously; promote; revive; revitalize; invigorate; re-energize
// 震撼	震撼	zhen4han4	zhènhàn	to shake
// 震惊	震驚	zhen4jing1	zhènjīng	shock; astonish; amaze
// 镇定	鎮定	zhen4ding4	zhèndìng	cool; calm; unperturbed
// 镇静	鎮靜	zhen4jing4	zhènjìng	calm; cool; tranquil
// 正月	正月	zheng1yue4	zhēngyuè	the first month of the lunar calendar
// 争端	爭端	zheng1duan1	zhēngduān	dispute; controversy; conflict
// 争夺	爭奪	zheng1duo2	zhēngduó	fight over
// 争气	爭氣	zheng1 qi4	zhēng qì	work hard for sth.; determined not to fall short
// 争先恐后	爭先恐後	zheng1 xian1 kong3 hou4	zhēng xiān kǒng hòu	striving to be first; compete with each other
// 争议	爭議	zheng1yi4	zhēngyì	controversy; dispute; contention
// 征服	征服	zheng1fu2	zhēngfú	conquer; subdue
// 征收	征收	zheng1shou1	zhēngshōu	levy (fine); impose (tariff)
// 挣扎	掙紮	zheng1zha2	zhēngzhá	to struggle
// 蒸发	蒸發	zheng1fa1	zhēngfā	evaporate; evaporation
// 整顿	整頓	zheng3dun4	zhěngdùn	organize; consolidate
// 正当	正當	zheng4 dang1	zhèng dāng	timely; just when, (dàng) proper
// 正负	正負	zheng4fu4	zhèngfù	positive and negative; plus-minus
// 正规	正規	zheng4gui1	zhèngguī	formal; regular; according to standards
// 正经	正經	zheng4jing	zhèngjing	decent; serious; standard; really
// 正气	正氣	zheng4qi4	zhèngqì	healthy environment; healthy atmosphere
// 正义	正義	zheng4yi4	zhèngyì	justice; righteous
// 正宗	正宗	zheng4zong1	zhèngzōng	authentic, orthodox; old school
// 证实	證實	zheng4shi2	zhèngshí	confirm; verify
// 证书	證書	zheng4shu1	zhèngshū	certificate; credentials
// 郑重	鄭重	zheng4zhong4	zhèngzhòng	serious; solemn
// 政策	政策	zheng4ce4	zhèngcè	policy
// 政权	政權	zheng4quan2	zhèngquán	regime; political power; authority
// 症状	症狀	zheng4zhuang4	zhèngzhuàng	symptom (of an illness)
// 之际	之際	zhi1ji4	zhījì	during; at the time of; the time when something happens
// 支撑	支撐	zhi1cheng1	zhīchēng	support; prop up; crutch; brace
// 支出	支出	zhi1chu1	zhīchū	spend; pay out; expense
// 支流	支流	zhi1liu2	zhīliú	tributary; minor aspect; offshoot
// 支配	支配	zhi1pei4	zhīpèi	to control
// 支援	支援	zhi1yuan2	zhīyuán	to support; assist; aid
// 支柱	支柱	zhi1zhu4	zhīzhù	pillar; prop; mainstay; backbone
// 枝	枝	zhi1	zhī	branch; twig; (mw for sticks, rods, pencils)
// 知觉	知覺	zhi1jue2	zhījué	perception; consciousness; feeling
// 知足常乐	知足常樂	zhi1zu2chang2le4	zhīzúchánglè	content with what one has
// 脂肪	脂肪	zhi1fang2	zhīfáng	body fat
// 执行	執行	zhi2xing2	zhíxíng	implementation; carry out; execute
// 执着	執著	zhi2zhuo2	zhízhuó	to refuse to change one's viewpoint
// 直播	直播	zhi2bo1	zhíbō	live broadcast (not recorded)
// 直径	直徑	zhi2jing4	zhíjìng	diameter
// 侄子	侄子	zhi2zi	zhízi	nephew; brother's son or daughter
// 值班	值班	zhi2 ban1	zhí bān	be on duty; work a shift
// 职能	職能	zhin2eng2	zhínéng	function; role
// 职位	職位	zhi2wei4	zhíwèi	(professional) position
// 职务	職務	zhi2wu4	zhíwù	post; a position; job; duties
// 殖民地	殖民地	zhi2min2di4	zhímíndì	colony
// 指标	指標	zhi3biao1	zhǐbiāo	target; norm; index; indicator
// 指定	指定	zhi3ding4	zhǐdìng	appoint; designate
// 指甲	指甲	zhi3jia	zhǐjia	fingernail
// 指令	指令	zhi3ling4	zhǐlìng	order; command; instruction
// 指南针	指南針	zhin3an2zhen1	zhǐnánzhēn	compass
// 指示	指示	zhi3shi4	zhǐshì	indicate; instruct; instructions
// 指望	指望	zhi3wang4	zhǐwàng	hope for; count on; hope
// 指责	指責	zhi3ze2	zhǐzé	to censure; criticize; find fault with
// 志气	志氣	zhi4qi4	zhìqì	ambition; resolve; backbone; drive; spirit
// 制裁	制裁	zhi4cai2	zhìcái	punish; (economic) sanctions
// 制服	制服	zhi4fu2	zhìfú	uniform; to subdue; to bring under control
// 制约	制約	zhi4yue1	zhìyuē	restrict; condition
// 制止	制止	zhi4zhi3	zhìzhǐ	to curb; to put a stop to
// 治安	治安	zhi4'an1	zhì'ān	law and order; public security
// 治理	治理	zhi4li3	zhìlǐ	to bring under control; to govern; to manage
// 致辞	致辭	zhi4ci2	zhìcí	make/deliver a speech
// 致力	致力	zhi4li4	zhìlì	work for; devote one's efforts
// 致使	致使	zhi4shi3	zhìshǐ	cause; result in
// 智力	智力	zhi4li4	zhìlì	intelligence; intellect
// 智能	智能	zhin4eng2	zhìnéng	intelligent; capability; smart (phone, system, bomb, etc.)
// 智商	智商	zhi4shang1	zhìshāng	IQ (intelligence quotient)
// 滞留	滯留	zhi4liu2	zhìliú	detain; retention
// 中断	中斷	zhong1duan4	zhōngduàn	interrupt; break off
// 中立	中立	zhong1li4	zhōnglì	neutral; neutrality
// 中央	中央	zhong1yang1	zhōngyāng	central; middle; center
// 忠诚	忠誠	zhong1cheng2	zhōngchéng	honest; loyalty; devoted
// 忠实	忠實	zhong1shi2	zhōngshí	faithful; dependable
// 终点	終點	zhong1dian3	zhōngdiǎn	the end; end point; destination; finish line (in a race)
// 终究	終究	zhong1jiu1	zhōngjiū	in the end; after all is said and done; eventually
// 终身	終身	zhong1shen1	zhōngshēn	lifelong
// 终止	終止	zhong1zhi3	zhōngzhǐ	stop; cease; terminate (legal)
// 衷心	衷心	zhong1xin1	zhōngxīn	heartfelt; wholehearted; cordial
// 肿瘤	腫瘤	zhong3liu2	zhǒngliú	tumor; neoplasm
// 种子	種子	zhong3zi	zhǒngzi	seed
// 种族	種族	zhong3zu2	zhǒngzú	race; ethnicity
// 众所周知	衆所周知	zhong4 suo3 zhou1 zhi1	zhòng suǒ zhōu zhī	as everyone knows; (saying) as is known to everyone
// 种植	種植	zhong4zhi2	zhòngzhí	plant; grow; crop
// 重心	重心	zhong4xin1	zhòngxīn	center of gravity; central core; main part
// 舟	舟	zhou1	zhōu	boat (Kangxi radical 137)
// 州	州	zhou1	zhōu	province; sub-prefecture; (United States) state
// 周边	周邊	zhou1bian1	zhōubiān	surrounding
// 周密	周密	zhou1mi4	zhōumì	meticulous; careful; thorough
// 周年	周年	zhou1nian2	zhōunián	anniversary; annual
// 周期	周期	zhou1qi1	zhōuqī	period; cycle; rhythm
// 周折	周折	zhou1zhe2	zhōuzhé	setback; twists and turns; problem; complication
// 周转	周轉	zhou1zhuan3	zhōuzhuǎn	turnover (in cash or personnel); have enough resources to cover a need
// 粥	粥	zhou1	zhōu	porridge; congee; gruel
// 昼夜	晝夜	zhou4ye4	zhòuyè	day and night; continuously without stop
// 皱纹	皺紋	zhou4wen2	zhòuwén	wrinkle; furrow
// 株	株	zhu1	zhū	stem; root; trunk; (mw for plants)
// 诸位	諸位	zhu1wei4	zhūwèi	(pronoun) everyone; ladies and gentlemen
// 逐年	逐年	zhun2ian2	zhúnián	year after year; on an annual basis
// 主办	主辦	zhu3ban4	zhǔbàn	to host (a conference or sports event)
// 主导	主導	zhu3dao3	zhǔdǎo	leading; dominant; guiding
// 主管	主管	zhu3guan3	zhǔguǎn	person in charge of (a position, etc.); preside over; Chief Operating Officer (COO)
// 主流	主流	zhu3liu2	zhǔliú	main stream (of a river); the essential point
// 主权	主權	zhu3quan2	zhǔquán	sovereignty
// 主义	主義	zhu3yi4	zhǔyì	-ism; ideology
// 拄	拄	zhu3	zhǔ	post; lean on a stick; prop
// 嘱咐	囑咐	zhu3fu4	zhǔfù	enjoin; to tell; exhort
// 助理	助理	zhu4li3	zhùlǐ	assistant
// 助手	助手	zhu4shou3	zhùshǒu	assistant; helper
// 住宅	住宅	zhu4zhai2	zhùzhái	residence; tenement
// 注射	注射	zhu4she4	zhùshè	injection; inject (medicine)
// 注视	注視	zhu4shi4	zhùshì	watch attentively; gaze at; stare
// 注释	注釋	zhu4shi4	zhùshì	annotate; annotation; note; make notes in the margin
// 注重	注重	zhu4zhong4	zhùzhòng	pay attention; emphasize; put stress on
// 驻扎	駐紮	zhu4zha1	zhùzhā	to station; to garrison (troops)
// 著作	著作	zhu4zuo4	zhùzuò	work; book; writing
// 铸造	鑄造	zhu4zao4	zhùzào	cast (pour metal into a mold)
// 拽	拽	zhuai4	zhuài	drag; haul
// 专长	專長	zhuan1chang2	zhuāncháng	specialty; special knowledge or ability
// 专程	專程	zhuan1cheng2	zhuānchéng	special-purpose trip
// 专利	專利	zhuan1li4	zhuānlì	patent
// 专题	專題	zhuan1ti2	zhuāntí	special topic; questions; special matter or subject
// 砖	磚	zhuan1	zhuān	brick
// 转达	轉達	zhuan3da2	zhuǎndá	pass on; convey; communicate
// 转让	轉讓	zhuan3rang4	zhuǎnràng	transfer (technology, good, etc.); make over
// 转移	轉移	zhuan3yi2	zhuǎnyí	to shift; divert; migrate
// 转折	轉折	zhuan3zhe2	zhuǎnzhé	turning point; shift in the trend of events; plot twist in a book
// 传记	傳記	zhuan4ji4	zhuànjì	biography
// 庄稼	莊稼	zhuang1jia	zhuāngjia	farm crops
// 庄严	莊嚴	zhuang1yan2	zhuāngyán	stately; dignified
// 庄重	莊重	zhuang1zhong4	zhuāngzhòng	grave; solemn; dignified
// 装备	裝備	zhuang1bei4	zhuāngbèi	equipment; to equip; to outfit
// 装卸	裝卸	zhuang1xie4	zhuāngxiè	load and unload; to transfer
// 壮观	壯觀	zhuang4guan1	zhuàngguān	spectacular; grand (of buildings, monuments, scenery, etc.)
// 壮丽	壯麗	zhuang4li4	zhuànglì	magnificence; splendid; majestic
// 壮烈	壯烈	zhuang4lie4	zhuàngliè	brave and honorable
// 幢	幢	zhuang4	zhuàng	(mw for houses, buildings); tent
// 追悼	追悼	zhui1dao4	zhuīdào	mourning; memorial (service, etc.)
// 追究	追究	zhui1jiu1	zhuījiū	investigate; look into; find out
// 坠	墜	zhui4	zhuì	fall; drop
// 准则	准則	zhun3ze2	zhǔnzé	principle; standard or norm; criterion
// 卓越	卓越	zhuo2yue4	zhuóyuè	distinction; excellence; splendid
// 着手	著手	zhuo2shou3	zhuóshǒu	put one's hand to; commence
// 着想	著想	zhuo2xiang3	zhuóxiǎng	give consideration to; consider (other people's) needs
// 着重	著重	zhuo2zhong4	zhuózhòng	put emphasis on; to stress
// 琢磨	琢磨	zuo2mo	zuómo	ponder; (also zhuómó: to polish (gems or literary works))
// 姿态	姿態	zi1tai4	zītài	attitude; posture; stance
// 资本	資本	zi1ben3	zīběn	(Economics) capital; asset
// 资产	資産	zi1chan3	zīchǎn	property; assets
// 资深	資深	zi1shen1	zīshēn	experienced; senior
// 资助	資助	zi1zhu4	zīzhù	subsidy; provide financial aid
// 滋润	滋潤	zi1run4	zīrùn	quenched; moist
// 滋味	滋味	zi1wei4	zīwèi	taste; flavor; the way one feels
// 子弹	子彈	zi3dan4	zǐdàn	bullet; cartridge
// 自卑	自卑	zi4bei1	zìbēi	feel inferior; be self-abased
// 自发	自發	zi4fa1	zìfā	spontaneous; unprompted
// 自力更生	自力更生	zi4 li4 geng1 sheng1	zì lì gēng shēng	(idiom) self reliance
// 自满	自滿	zi4man3	zìmǎn	complacent; self-satisfied
// 自主	自主	zi4zhu3	zìzhǔ	independent; to act for oneself; autonomous
// 宗教	宗教	zong1jiao4	zōngjiào	religion
// 宗旨	宗旨	zong1zhi3	zōngzhǐ	purpose; objective; aim; goal
// 棕色	棕色	zong1se4	zōngsè	brown (the color)
// 踪迹	蹤迹	zong1ji4	zōngjì	tracks; trail; footprint; trace; vestige
// 总而言之	總而言之	zong3er2yan2zhi1	zǒngéryánzhī	in short; in a word
// 总和	總和	zong3he2	zǒnghé	sum
// 纵横	縱橫	zong4heng2	zònghéng	able to move unhindered; length and breadth
// 走廊	走廊	zou3lang2	zǒuláng	corridor; hallway
// 走漏	走漏	zou3lou4	zǒulòu	leak (information, liquid, etc); divulge; reveal
// 走私	走私	zou3 si1	zǒu sī	smuggle; have an illicit affair
// 揍	揍	zou4	zòu	(informal) beat; hit; (regional) smash; break
// 租赁	租賃	zu1lin4	zūlìn	rent; lease
// 足以	足以	zu2yi3	zúyǐ	sufficient to ...; so much so that; sufficiently
// 阻碍	阻礙	zu3'ai4	zǔ'ài	obstruct; hinder; impede
// 阻拦	阻攔	zu3lan2	zǔlán	to stop; obstruct; block off
// 阻挠	阻撓	zun3ao2	zǔnáo	thwart; to obstruct (something); stand in the way
// 祖父	祖父	zu3fu4	zǔfù	paternal grandfather
// 祖国	祖國	zu3guo2	zǔguó	homeland; motherland; fatherland
// 祖先	祖先	zu3xian1	zǔxiān	ancestor; forbearer
// 钻研	鑽研	zuan1yan2	zuānyán	study intensively; delve into
// 钻石	鑽石	zuan4shi2	zuànshí	diamond
// 嘴唇	嘴唇	zui3chun2	zuǐchún	lip
// 罪犯	罪犯	zui4fan4	zuìfàn	criminal
// 尊严	尊嚴	zun1yan2	zūnyán	dignity; sanctity; honor
// 遵循	遵循	zun1xun2	zūnxún	follow; abide by
// 作弊	作弊	zuo4bi4	zuòbì	practice fraud; cheat
// 作废	作廢	zuo4fei4	zuòfèi	cancellation; delete; to nullify; to expire and thus lose validity
// 作风	作風	zuo4feng1	zuòfēng	work style; way
// 作息	作息	zuo4xi1	zuòxī	work and rest
// 座右铭	座右銘	zuo4you4ming2	zuòyòumíng	motto
// 做主	做主	zuo4zhu3	zuòzhǔ	decide; take the responsibility for a decision
]
];

modelChar = '3 2 1';
randomCharNum: number;
timer: number = 60;
interval;

  constructor(page: Page, public levelSetupService: LevelSetupService, private router: Router) {
    page.actionBarHidden = true;
  }
  ngOnInit() {
    console.log('This is HSK Level : ' + this.levelSetupService.hskLevel);
    console.log('This is the Character Set : ' + this.levelSetupService.characterSet);
    let repeatChecker = [];
    for(let i = 0; i <= 8; i++) {
      let randomNum = Math.floor(Math.random() * Math.floor(25));
      let repeatBoolean = false;
       for(let j = 0; j <= repeatChecker.length; j++) {
         console.log(repeatChecker[j]);
         if (repeatChecker[j] == randomNum) {
           repeatBoolean = true;
           console.log('Repeat found!');
         }
       }

       if(repeatBoolean === false) {
         repeatChecker.push(randomNum);
         let shuffledChar = this.characterList[this.levelSetupService.hskLevel - 1][this.levelSetupService.characterSet][randomNum][0];
         let shuffledPinyin = this.characterList[this.levelSetupService.hskLevel - 1][this.levelSetupService.characterSet][randomNum][1];
         this.shuffledChars.push(shuffledChar);
         this.shuffledPinyin.push(shuffledPinyin);
       } else {
          i--;
         }
      console.log('This is the randomNum : ' + randomNum);
    }
    this.randomCharNum = Math.floor(Math.random() * Math.floor(8));
    this.modelChar = this.shuffledPinyin[this.randomCharNum];
    console.log('this is the random char' + this.modelChar);
    console.log(this.shuffledChars);
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
   if(this.timer > 0) {
     this.timer--;
   } else {
     this.router.navigate(['/mode-menu'])
     clearInterval(this.interval);
   }
 },1000)
  }

  checkAnswer(event: any, answer: string, index: number) {
    if(answer == this.shuffledChars[this.randomCharNum]) {
      this.nextChar();
      this.timer = this.timer + 5;
    } else {
      console.log('Incorrect');
      this.shuffledChars[index] = '';
      this.timer = this.timer - 5;
    }
  }

  nextChar() {
    let repeatChecker = [];
    this.shuffledChars = [];
    this.shuffledPinyin = [];
    for(let i = 0; i <= 8; i++) {
      let randomNum = Math.floor(Math.random() * Math.floor(25));
      let repeatBoolean = false;
       for(let j = 0; j <= repeatChecker.length; j++) {
         if (repeatChecker[j] == randomNum) {
           repeatBoolean = true;
         }
       }

       if(repeatBoolean === false) {
         repeatChecker.push(randomNum);
         let shuffledChar = this.characterList[this.levelSetupService.hskLevel - 1][this.levelSetupService.characterSet][randomNum][0];
         let shuffledPinyin = this.characterList[this.levelSetupService.hskLevel - 1][this.levelSetupService.characterSet][randomNum][1];
         this.shuffledChars.push(shuffledChar);
         this.shuffledPinyin.push(shuffledPinyin);
       } else {
          i--;
         }
    }
    this.randomCharNum = Math.floor(Math.random() * Math.floor(8));
    this.modelChar = this.shuffledPinyin[this.randomCharNum];
  }
}
