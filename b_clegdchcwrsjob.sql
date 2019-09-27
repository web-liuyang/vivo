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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `shop` */

insert  into `shop`(`id`,`classname_1`,`classname_2`,`classname_3`,`title`,`describe`,`price`,`color_1`,`color_1_name`,`color_1_url_1`,`color_1_url_2`,`color_1_url_3`,`color_1_url_4`,`color_2`,`color_2_name`,`color_2_url_1`,`color_2_url_2`,`color_2_url_3`,`color_2_url_4`,`color_3`,`color_3_name`,`color_3_url_1`,`color_3_url_2`,`color_3_url_3`,`color_3_url_4`,`color_4`,`color_4_name`,`color_4_url_1`,`color_4_url_2`,`color_4_url_3`,`color_4_url_4`,`color_5`,`color_5_name`,`color_5_url_1`,`color_5_url_2`,`color_5_url_3`,`color_5_url_4`,`color_6`,`color_6_name`,`color_6_url_1`,`color_6_url_2`,`color_6_url_3`,`color_6_url_4`,`vsn_1`,`vsn_2`,`vsn_3`,`vsn_4`,`vsn_5`,`vsn_6`) values (1,'iphone','IQOO','hot','iQOO Pro','骁龙855 Plus，4500mAh超大电池，44W超快闪充，4800万超广角AI三摄（不支持5G网络）','3198','jingsublack','竞速黑','iQOO Pro_jingsublack_1','iQOO Pro_jingsublack_2','iQOO Pro_jingsublack_3','iQOO Pro_jingsublack_4','lemangblue','勒芒蓝','iQOO Pro_lemangblue_1','iQOO Pro_lemangblue_2','iQOO Pro_lemangblue_3','iQOO Pro_lemangblue_4','huangyingbule','幻影蓝','iQOO Pro_huanyingblue_1','iQOO Pro_huanyingblue_2','iQOO Pro_huanyingblue_3','iQOO Pro_huanyingblue_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 8G+128G','全网通版 12G+128G','5G全网通版 12G+128G','5G全网通版 8G+256G','5G全网通版 12G+256G','5G全网通版 8G+128G'),(3,'iphone','IQOO','hot','iQOO','高通骁龙855旗舰处理器，44W闪充，超级液冷散热','2298','dianguangblue','电光蓝','IQOO_dianguangblue_1','IQOO_dianguangblue_2','IQOO_dianguangblue_3','IQOO_dianguangblue_4','rongyanorange','熔岩橙','IQOO_rongyanorange_1','IQOO_rongyanorange_2','IQOO_rongyanorange_3','IQOO_rongyanorange_4','wushiblack','武士黑','IQOO_wushiblack_1','IQOO_wushiblack_2','IQOO_wushiblack_3','IQOO_wushiblack_4','qishiblack','骑士黑','IQOO_qishiblack_1','IQOO_qishiblack_2','IQOO_qishiblack_3','IQOO_qishiblack_4','yuguangwhite','羽光白','IQOO_yuguangwhite_1','IQOO_yuguangwhite_2','IQOO_yuguangwhite_3','IQOO_yuguangwhite_4',NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 8G+256G','全网通版 12G+256G','全网通版 6G+128G','全网通版 8G+128G','全网通版 12G+128G',NULL),(2,'iphone','IQOO',NULL,'iQOO Neo','KPL官方比赛用机，骁龙845，4500mAh超长续航，22.5W闪充','1798','tanxianblack','碳纤黑','IQOO Neo_tanxianblack_1','IQOO Neo_tanxianblack_2','IQOO Neo_tanxianblack_3','IQOO Neo_tanxianblack_4','dianguangpurple','电光紫','IQOO Neo_dianguangpurple_1','IQOO Neo_dianguangpurple_2','IQOO Neo_dianguangpurple_1','IQOO Neo_dianguangpurple_4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'全网通版 6G+64G','全网通版 6G+128G','全网通版 8G+128G','全网通版 8G+64G',NULL,NULL);

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
