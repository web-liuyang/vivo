/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.56-log : Database - b_c1egdchcwrsjob
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`b_c1egdchcwrsjob` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `b_c1egdchcwrsjob`;

/*Table structure for table `shop` */

DROP TABLE IF EXISTS `shop`;

CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `classname_1` varchar(45) NOT NULL COMMENT '商品的总类别',
  `classname_2` varchar(45) DEFAULT NULL COMMENT '商品属于什么专区或系列',
  `classname_3` varchar(45) DEFAULT NULL COMMENT '商品是否热卖或是否是精品',
  `title` varchar(45) NOT NULL COMMENT '商品标题',
  `describe` varchar(300) NOT NULL COMMENT '描述',
  `price` varchar(10) NOT NULL COMMENT '价格',
  `color_1` varchar(45) NOT NULL COMMENT '商品第一个颜色样式',
  `color_1_name` varchar(45) NOT NULL COMMENT '商品第一个颜色名字',
  `color_1_url_1` varchar(300) NOT NULL,
  `color_1_url_2` varchar(300) DEFAULT NULL,
  `color_1_url_3` varchar(300) DEFAULT NULL,
  `color_1_url_4` varchar(300) DEFAULT NULL,
  `color_2` varchar(300) DEFAULT NULL COMMENT '商品第二个颜色样式',
  `color_2_name` varchar(45) DEFAULT NULL COMMENT '商品第二个颜色名字',
  `color_2_url_1` varchar(300) DEFAULT NULL,
  `color_2_url_2` varchar(300) DEFAULT NULL,
  `color_2_url_3` varchar(300) DEFAULT NULL,
  `color_2_url_4` varchar(300) DEFAULT NULL,
  `color_3` varchar(300) DEFAULT NULL COMMENT '商品第三个颜色样式',
  `color_3_name` varchar(45) DEFAULT NULL COMMENT '商品第三个颜色名字',
  `color_3_url_1` varchar(300) DEFAULT NULL,
  `color_3_url_2` varchar(300) DEFAULT NULL,
  `color_3_url_3` varchar(300) DEFAULT NULL,
  `color_3_url_4` varchar(300) DEFAULT NULL,
  `color_4` varchar(300) DEFAULT NULL COMMENT '商品第四个颜色样式',
  `color_4_name` varchar(45) DEFAULT NULL COMMENT '商品第四个颜色名字',
  `color_4_url_1` varchar(300) DEFAULT NULL,
  `color_4_url_2` varchar(300) DEFAULT NULL,
  `color_4_url_3` varchar(300) DEFAULT NULL,
  `color_4_url_4` varchar(300) DEFAULT NULL,
  `color_5` varchar(300) DEFAULT NULL COMMENT '商品第五个颜色样式',
  `color_5_name` varchar(45) DEFAULT NULL COMMENT '商品第五个颜色名字',
  `color_5_url_1` varchar(300) DEFAULT NULL,
  `color_5_url_2` varchar(300) DEFAULT NULL,
  `color_5_url_3` varchar(300) DEFAULT NULL,
  `color_5_url_4` varchar(300) DEFAULT NULL,
  `color_6` varchar(300) DEFAULT NULL COMMENT '商品第六个颜色样式',
  `color_6_name` varchar(45) DEFAULT NULL COMMENT '商品第六个颜色名字',
  `color_6_url_1` varchar(300) DEFAULT NULL,
  `color_6_url_2` varchar(300) DEFAULT NULL,
  `color_6_url_3` varchar(300) DEFAULT NULL,
  `color_6_url_4` varchar(300) DEFAULT NULL,
  `vsn_1` varchar(45) DEFAULT NULL COMMENT '商品第一个版本',
  `vsn_2` varchar(45) DEFAULT NULL COMMENT '商品第二个版本',
  `vsn_3` varchar(45) DEFAULT NULL COMMENT '商品第三个版本',
  `vsn_4` varchar(45) DEFAULT NULL COMMENT '商品第四个版本',
  `vsn_5` varchar(45) DEFAULT NULL COMMENT '商品第五个版本',
  `vsn_6` varchar(45) DEFAULT NULL COMMENT '商品第六个版本',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

/*Data for the table `shop` */

insert  into `shop`(`id`,`classname_1`,`classname_2`,`classname_3`,`title`,`describe`,`price`,`color_1`,`color_1_name`,`color_1_url_1`,`color_1_url_2`,`color_1_url_3`,`color_1_url_4`,`color_2`,`color_2_name`,`color_2_url_1`,`color_2_url_2`,`color_2_url_3`,`color_2_url_4`,`color_3`,`color_3_name`,`color_3_url_1`,`color_3_url_2`,`color_3_url_3`,`color_3_url_4`,`color_4`,`color_4_name`,`color_4_url_1`,`color_4_url_2`,`color_4_url_3`,`color_4_url_4`,`color_5`,`color_5_name`,`color_5_url_1`,`color_5_url_2`,`color_5_url_3`,`color_5_url_4`,`color_6`,`color_6_name`,`color_6_url_1`,`color_6_url_2`,`color_6_url_3`,`color_6_url_4`,`vsn_1`,`vsn_2`,`vsn_3`,`vsn_4`,`vsn_5`,`vsn_6`) values (1,'iphone','IQOO','hot','iQOO Pro','骁龙855 Plus，4500mAh超大电池，44W超快闪充，4800万超广角AI三摄（不支持5G网络）','3198','jingsublack','竞速黑','iQOO Pro_jingsublack_1','iQOO Pro_jingsublack_2','iQOO Pro_jingsublack_3','iQOO Pro_jingsublack_4','lemangblue','勒芒蓝','iQOO Pro_lemangblue_1','iQOO Pro_lemangblue_2','iQOO Pro_lemangblue_3','iQOO Pro_lemangblue_4','huangyingbule','幻影蓝','iQOO Pro_huanyingblue_1','iQOO Pro_huanyingblue_2','iQOO Pro_huanyingblue_3','iQOO Pro_huanyingblue_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 8G+128G','全网通版 12G+128G','5G全网通版 12G+128G','5G全网通版 8G+256G','5G全网通版 12G+256G','5G全网通版 8G+128G'),(3,'iphone','IQOO','hot','iQOO','高通骁龙855旗舰处理器，44W闪充，超级液冷散热','2298','dianguangblue','电光蓝','IQOO_dianguangblue_1','IQOO_dianguangblue_2','IQOO_dianguangblue_3','IQOO_dianguangblue_4','rongyanorange','熔岩橙','IQOO_rongyanorange_1','IQOO_rongyanorange_2','IQOO_rongyanorange_3','IQOO_rongyanorange_4','wushiblack','武士黑','IQOO_wushiblack_1','IQOO_wushiblack_2','IQOO_wushiblack_3','IQOO_wushiblack_4','qishiblack','骑士黑','IQOO_qishiblack_1','IQOO_qishiblack_2','IQOO_qishiblack_3','IQOO_qishiblack_4','yuguangwhite','羽光白','IQOO_yuguangwhite_1','IQOO_yuguangwhite_2','IQOO_yuguangwhite_3','IQOO_yuguangwhite_4',NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 8G+256G','全网通版 12G+256G','全网通版 6G+128G','全网通版 8G+128G','全网通版 12G+128G',NULL),(2,'iphone','IQOO','jingpiniphone','iQOO Neo','KPL官方比赛用机，骁龙845，4500mAh超长续航，22.5W闪充','1798','tanxianblack','碳纤黑','IQOO Neo_tanxianblack_1','IQOO Neo_tanxianblack_2','IQOO Neo_tanxianblack_3','IQOO Neo_tanxianblack_4','dianguangpurple','电光紫','IQOO Neo_dianguangpurple_1','IQOO Neo_dianguangpurple_2','IQOO Neo_dianguangpurple_3','IQOO Neo_dianguangpurple_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 6G+64G','全网通版 6G+128G','全网通版 8G+128G','全网通版 8G+64G',NULL,NULL),(4,'iphone','NEX','hot','NEX 3','5G高速网络，高通骁龙855 Plus，无界瀑布屏，44W超快闪充','4998','shenkongliuguang','深空流光','NEX 3_shenkongliuguang_1','NEX 3_shenkongliuguang_2','NEX 3_shenkongliuguang_3','NEX 3_shenkongliuguang_4','yetaitianhe','液态天河','NEX 3_yetaitianhe_1','NEX 3_yetaitianhe_2','NEX 3_yetaitianhe_3','NEX 3_yetaitianhe_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'5G全网通版 12G+256G','全网通版 8G+128G','5G全网通版 8G+256G',NULL,NULL,NULL),(5,'iphone','NEX','jingpiniphone','NEX双屏版','高通845AIE、星环溢彩屏，双屏多任务、夜视摄像头、10G大运存','4998','bingyuanblue','冰原蓝','NEX double_bingyuanblue_1','NEX double_bingyuanblue_2','NEX double_bingyuanblue_3','NEX double_bingyuanblue_4','xingyangpurple','星漾紫','NEX double_xingyangpurple_1','NEX double_xingyangpurple_2','NEX double_xingyangpurple_3','NEX double_xingyangpurple_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 8G+256G','全网通版 10G+128G',NULL,NULL,NULL,NULL),(6,'iphone','X',NULL,'X27','升降式摄像头，19.5:9零界全面屏，4800万后置三摄，vivo闪充','2698','queyublue','雀羽蓝','X27_queyublue_1','X27_queyublue_2','X27_queyublue_3','X27_queyublue_4','fendaigolden','粉黛金','X27_fendaigolden_1','X27_fendaigolden_2','X27_fendaigolden_3','X27_fendaigolden_4','jade','翡翠色','X27_jade_1','X27_jade_2','X27_jade_3','X27_jade_4','huancaixiari','幻彩夏日','X27_huancaixiari_1','X27_huancaixiari_2','X27_huancaixiari_3','X27_huancaixiari_4','yinxiangxiari','印象夏日','X27_yinxiangxiari_1','X27_yinxiangxiari_2','X27_yinxiangxiari_3','X27_yinxiangxiari_4',NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 8G+128G','全网通版 8G+256G',NULL,NULL,NULL,NULL),(7,'iphone','X','jingpiniphone','X27 Pro','20.5:9修长全面屏，屏占比高达92.12%，升降式前置摄像头，4800万后置高清三摄','3598','blackzhenzhu','黑珍珠','X27 Pro_blackzhenzhu_1','X27 Pro_blackzhenzhu_2','X27 Pro_blackzhenzhu_3','X27 Pro_blackzhenzhu_4','whitemubei','白母贝','X27 Pro_whitemubei_1','X27 Pro_whitemubei_2','X27 Pro_whitemubei_3','X27 Pro_whitemubei_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 8G+256G',NULL,NULL,NULL,NULL,NULL),(8,'iphone','X',NULL,'X23全面屏','水滴全面屏，125°超大广角，第四代屏幕指纹，Jovi智能助手','2998','huanyeblue','幻夜蓝','X23_huanyeblue_1','X23_huanyeblue_2','X23_huanyeblue_3','X23_huanyeblue_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 8G+128G','移动全网通版 8G+128G',NULL,NULL,NULL,NULL),(9,'iphone','S','jingpiniphone','S1','升降式摄像头，前置2480万AI高清自拍，超广角AI三摄，双引擎闪充','1198','binghublue','冰湖蓝','S1_binghublue_1','S1_binghublue_2','S1_binghublue_3','S1_binghublue_4','chongaipingk','宠爱粉','S1_chongaipink_1','S1_chongaipink_2','S1_chongaipink_3','S1_chongaipink_4','bingyuanblack','冰原黑','S1_bingyuanblack_1','S1_bingyuanblack_2','S1_bingyuanblack_3','S1_bingyuanblack_4','zhongxiamenglihe','仲夏梦礼盒','S1_zhongxiamenglihe_1','S1_zhongxiamenglihe_2','S1_zhongxiamenglihe_3','S1_zhongxiamenglihe_4','zhongxiameng','仲夏梦','S1_zhongxiameng_1','S1_zhongxiameng_2','S1_zhongxiameng_3','S1_zhongxiameng_4',NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 6G+128G','全网通版 6G+64G','全网通版 4G+128G','全网通版 6G+256G',NULL,NULL),(10,'iphone','S',NULL,'S1 Pro','升降式摄像头，3200万前置超清自拍，4800万后置三摄，双引擎闪充','1989','zhongqingblue','钟情蓝','S1 Pro_zhongqingblue_1','S1 Pro_zhongqingblue_2','S1 Pro_zhongqingblue_3','S1 Pro_zhongqingblue_4','shanhured','珊瑚红','S1 Pro_shanhured_1','S1 Pro_shanhured_2','S1 Pro_shanhured_3','S1 Pro_shanhured_4','zhongxiameng','仲夏梦','S1 Pro_zhongxiameng_1','S1 Pro_zhongxiameng_2','S1 Pro_zhongxiameng_3','S1 Pro_zhongxiameng_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 6G+128G','全网通版 8G+128G','全网通版 6G+256G',NULL,NULL,NULL),(11,'iphone','Z','jingpiniphone','Z5',' 骁龙712处理器，4800万超广角AI三摄，前置3200万超清自拍，4500mAh大电池','1598','jiguanghuanjing','极光幻境','Z5_jiguanghuanjing_1','Z5_jiguanghuanjing_2','Z5_jiguanghuanjing_3','Z5_jiguanghuanjing_4','quanxihuancai','全息幻彩','Z5_quanxihuancai_1','Z5_quanxihuancai_2','Z5_quanxihuancai_3','Z5_quanxihuancai_4','zhulinhuanye','竹林幻夜','Z5_zhulinhuanye_1','Z5_zhulinhuanye_2','Z5_zhulinhuanye_3','Z5_zhulinhuanye_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 6G+256G','全网通版 6G+64G','全网通版 8G+128G','全网通版 6G+128G','火影忍者礼盒版 6G+256G',NULL),(12,'iphone','Z','jingpiniphone','Z5x','5000mAh大电池，骁龙710处理器，6.53英寸极点全面屏，前置1600万AI美颜','1298','huancaipink','幻彩粉','Z5x_huancaipink_1','Z5x_huancaipink_2','Z5x_huancaipink_3','Z5x_huancaipink_4','jiguangse','极光色','Z5x_jiguangse_1','Z5x_jiguangse_2','Z5x_jiguangse_3','Z5x_jiguangse_4','huanyingblack','幻影黑','Z5x_huanyingblack_1','Z5x_huanyingblack_2','Z5x_huanyingblack_3','Z5x_huanyingblack_4','jiyeblack','极夜黑','Z5x_jiyeblack_1','Z5x_jiyeblack_2','Z5x_jiyeblack_3','Z5x_jiyeblack_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 6G+64G','全网通版 6G+128G','全网通版 8G+128G','全网通版 4G+64G',NULL,NULL),(13,'iphone','Z',NULL,'Z3x','19:9超清全面屏，骁龙660AIE处理器，前置1600万像素','998','jiguangse','极光色','Z3x_jiguangse_1','Z3x_jiguangse_2','Z3x_jiguangse_3','Z3x_jiguangse_4','ciyoublack','瓷釉黑','Z3x_ciyoublack_1','Z3x_ciyoublack_2','Z3x_ciyoublack_3','Z3x_ciyoublack_4','xuanmured','炫幕红','Z3x_xuanmured_1','Z3x_xuanmured_2','Z3x_xuanmured_3','Z3x_xuanmured_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 6G+64G','全网通版 4G+64G',NULL,NULL,NULL,NULL),(14,'iphone','Z',NULL,'Z3','骁龙710AIE处理器，6.3英寸水滴屏，双涡轮加速引擎，4D游戏震感','948','xingyeblack','星夜黑','Z3_xingyeblack_1','Z3_xingyeblack_2','Z3_xingyeblack_3','Z3_xingyeblack_4','jiguangblue','极光蓝','Z3_jiguangblue_1','Z3_jiguangblue_2','Z3_jiguangblue_3','Z3_jiguangblue_4','menghuanpink','梦幻粉','Z3_menghuanpink_1','Z3_menghuanpink_2','Z3_menghuanpink_3','Z3_menghuanpink_4','jade','翡翠色','Z3_jade_1','Z3_jade_2','Z3_jade_3','Z3_jade_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 4G+64G','全网通版 6G+128G','全网通版 4G+128G','全网通版 6G+64G',NULL,NULL),(15,'iphone','Z',NULL,'Z3i','6.3英寸全新水滴屏，前置2400万AI美颜，6GB+128GB大内存，Jovi智能语音助手','1598','xingyeblack','星夜黑','Z3i_xingyeblack_1','Z3i_xingyeblack_2','Z3i_xingyeblack_3','Z3i_xingyeblack_4','jiguangblue','极光蓝','Z3i_jiguangblue_1','Z3i_jiguangblue_2','Z3i_jiguangblue_3','Z3i_jiguangblue_4','menghuanpink','梦幻粉','Z3i_menghuanpink_1','Z3i_menghuanpink_2','Z3i_menghuanpink_3','Z3i_menghuanpink_4','modaiblue','墨黛蓝','Z3i_modaiblue_1','Z3i_modaiblue_2','Z3i_modaiblue_3','Z3i_modaiblue_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 6G+128G',NULL,NULL,NULL,NULL,NULL),(16,'iphone','Y','jingpiniphone','Y7s','光电屏幕指纹，超广角AI三摄，前置1600万高清像素，闪充4500mAh大电池','1798','boyangblue','波漾蓝','Y7s_boyangblue_1','Y7s_boyangblue_2','Y7s_boyangblue_3','Y7s_boyangblue_4','haifengcyan','海风青','Y7s_haifengcyan_1','Y7s_haifengcyan_2','Y7s_haifengcyan_3','Y7s_haifengcyan_4','liuliblack','琉璃黑','Y7s_liuliblack_1','Y7s_liuliblack_2','Y7s_liuliblack_3','Y7s_liuliblack_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 6G+128G',NULL,NULL,NULL,NULL,NULL),(17,'iphone','Y',NULL,'Y3','5000mAh大电池，双引擎闪充，支持反向充电，前置1600万像素','1298','kongqueblue','孔雀蓝','Y3_kongqueblue_1','Y3_kongqueblue_2','Y3_kongqueblue_3','Y3_kongqueblue_4','chutaopink','初桃粉','Y3_chutaopink_1','Y3_chutaopink_2','Y3_chutaopink_3','Y3_chutaopink_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 4G+128G',NULL,NULL,NULL,NULL,NULL),(18,'iphone','Y',NULL,'Y91','6.2英寸水滴屏，八核处理器，4030mAh大电池，1300万智慧拍照','899','dianyablack','典雅黑','Y91_dainyablack_1','Y91_dainyablack_2','Y91_dainyablack_3','Y91_dainyablack_4','zixiared','紫霞红','Y91_zixiared_1','Y91_zixiared_2','Y91_zixiared_3','Y91_zixiared_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 3G+32G',NULL,NULL,NULL,NULL,NULL),(19,'iphone','Y',NULL,'Y93s','19：9灵动水滴屏，4030mAH大电池，八核处理器，Face Wake人脸识别，AI智慧双摄','1098','zixiared','紫霞红','Y93s_zixiared_1','Y93s_zixiared_2','Y93s_zixiared_3',NULL,'jiguangred','极光红','Y93s_jiguangred_1','Y93s_jiguangred_2','Y93s_jiguangred_3',NULL,'jiguangblue','极光蓝','Y93s_jiguangblue_1','Y93s_jiguangblue_2','Y93s_jiguangblue_3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 4G+128G',NULL,NULL,NULL,NULL,NULL),(20,'iphone','U','jingpiniphone','U3x','5000mAh大电池，18W双引擎闪充，6.35英寸大屏，骁龙665八核处理器','799','shenhublue','深湖蓝','U3x_shenhublue_1','U3x_shenhublue_2','U3x_shenhublue_3','U3x_shenhublue_4','ziyeblack','子夜黑','U3x_ziyeblack_1','U3x_ziyeblack_2','U3x_ziyeblack_3','U3x_ziyeblack_4','chichared','赤茶红','U3x_chichared_1','U3x_chichared_2','U3x_chichared_3','U3x_chichared_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 3G+64G','全网通版 3G+32G','全网通版 4G+64G',NULL,NULL,NULL),(21,'iphone','U',NULL,'U1','6.2英寸水滴屏，4030mAh大电池，高通骁龙八核处理器，1300万AI智慧双摄','749','xingyeblack','星夜黑','U1_xingyeblack_1','U1_xingyeblack_2','U1_xingyeblack_3','U1_xingyeblack_4','jiguangred','极光红','U1_jiguangred_1','U1_jiguangred_2','U1_jiguangred_3','U1_jiguangred_4','jiguangse','极光色','U1_jiguangse_1','U1_jiguangse_2','U1_jiguangse_3','U1_jiguangse_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 3G+32G','全网通版 4G+64G','全网通版 3G+64G',NULL,NULL,NULL),(22,'parts','charge',NULL,'vivo Micro USB闪充数据线-2A','官方原装正品，支持18W双引擎闪充，Micro USB接口，兼容多种设备。（注：闪充功能需搭配9V/2A充电器使用，本商品不含充电器，充电器需另行购买）','19','huiwhite','灰白色','vivo Micro_huiwhitese_1','vivo Micro_huiwhitese_2','vivo Micro_huiwhitese_3','vivo Micro_huiwhitese_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,'parts','charge','jingpinparts','vivo 44W（11V/4A）超快闪充充电器','44W超快闪充，六重保护系统（NEX 3、iQOO Pro、iQOO 8G/12G运存版本标配充电器，iQOO 6G运存版使用兼容）','119','white','白色','vivo 44W_white_1','vivo 44W_white_2','vivo 44W_white_3','vivo 44W_white_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(24,'parts','parts',NULL,'iQOO Pro 原装高透保护膜','两片装｜高清通透｜丝滑流畅｜防油耐污｜耐磨抗刮','29','lucency','透明','iQOO Pro_lucency_1','iQOO Pro_lucency_2','iQOO Pro_lucency_3','iQOO Pro_lucency_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,'parts','parts','jingpinparts','Wee 2T游戏手柄','第五代连接技术，智连模式，内置映射免激活，六轴陀螺仪，体感精准，人气主播青睐首选，一链轻松实现大神操作，ZC按键，满足更多操控需求，拉伸自如，兼容各类手机','229','chaolanorange','潮蓝橘','wee_chaolanorange_1','wee_chaolanorange_2','wee_chaolanorange_3','wee_chaolanorange_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,'parts','music',NULL,'vivo TWS Earphone 真无线蓝牙耳机','疾速体验 | 智慧连接 | 高清音质 | 语音声控 | 无感佩戴（温馨提示：拆封包装后不支持无理由退货）','999','haoyuewhite','皓月白','vivo TWS_haoyuewhite_1','vivo TWS_haoyuewhite_2','vivo TWS_haoyuewhite_3','vivo TWS_haoyuewhite_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(27,'parts','music','jingpinparts','西柚 蓝牙降噪耳机 X-PRO ANC','数字降噪，全包耳设计，柔软舒适；封闭式腔体耳机，减少噪音影响；高保真音质，高度还原音乐本身；有线、无线两种模式，支持高清通话','399','black','黑色','X-PRO_black_1','X-PRO_black_2','X-PRO_black_3','X-PRO_black_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(28,'',NULL,NULL,'','','','','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `tel` varchar(11) DEFAULT NULL,
  `icon` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`username`),
  KEY `id` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`username`,`password`,`email`,`tel`,`icon`) values (0,'liuyang','123','984584014@qq.com','18284335838','http://127.0.0.1/images/icon/liuyang.jpg');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
