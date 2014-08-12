---
layout: post
title: "我的个人博客第一天，向GitHub致敬"
description: ""
tags: [github,jekyll]
---
{% include JB/setup %}

曾几何时，想建立自己的个人博客，因为种种原因没有付诸行动，现在我终于迈出了我的第一步，加入了Github blog这个大家庭，这个激动人心的时刻，必须用文字记录下来。
在整个建立博客的过程中遇到各种问题，现记录如下：
<!--break-->
参考资料：<br>
1. 使用 GitHub, Jekyll 打造自己的免费独立博客<br>
[http://blog.csdn.net/on_1y/article/details/19259435](http://blog.csdn.net/on_1y/article/details/19259435)<br>
2. jekyllbootstrap框架<br>
[http://jekyllbootstrap.com/usage/jekyll-quick-start.html](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)<br>
3. 安装Jekyll<br>
[http://jekyllrb.com/docs/installation/#install-with-rubygems](http://jekyllrb.com/docs/installation/#install-with-rubygems)
Jekylly On Windows<br>
[http://jekyllrb.com/docs/windows/#installation](http://jekyllrb.com/docs/windows/#installation)<br>
4.Windows下安装Ruby和DevelopmentKit<br>
在下面的页面中下载这两个文件<br>
[http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/)<br>
Ruby安装路径中不能带空格，否则会报错。<br>
Ruby默认安装没有把bin目录加入path环境变量，需要加入path变量后才能执行Ruby命令。
5.DevelopmentKit使用说明<br>
[https://github.com/oneclick/rubyinstaller/wiki/development-kit](https://github.com/oneclick/rubyinstaller/wiki/development-kit)<br>
里面说了很多，其实就下面一句话有用。

> Download it, run it to extract it somewhere (permanent). Then cd to it, run “ruby dk.rb init” and “ruby dk.rb install” to bind it to ruby installations in your path.<br>

6.完成了以上步骤就可以安装Jekyll了<br>
命令:gem install jekyll<br>
注:Jekyll安装过程中出现了扩展出错的问题，执行了一下更新命令就OK了。<br>
gem update --system<br>
其他问题请参考如下文档<br>
[http://jekyllrb.com/docs/troubleshooting/](http://jekyllrb.com/docs/troubleshooting/)<br>
7.安装成功之后，可以参照步骤2中文档中的quickstart建立自己的博客了，文档很详细。
可以进行本地调试。<br>


## git在windows上配置ssh公钥 ##
 
一 .设置git的user name和email：
 
$ git config --global user.name "lxyz"
 
$ git config --global user.email "1129103472@qq.com"
 
二 生成密钥
 
ssh-keygen -t rsa -C “1129103472@qq.com”
 
 按3个回车，密码为空。(不要输密码)
 
然后到.ssh下面将id_rsa.pub里的内容复制出来粘贴到github个人中心的账户设置的ssh key里面

## 其他资料
markdown语法参考中文版：[http://wowubuntu.com/markdown/](http://wowubuntu.com/markdown/)<br>
markdownPad编辑器：[http://www.markdownpad.com/](http://www.markdownpad.com/)<br>
node-v0.10.30-x64：[http://pan.baidu.com/s/1hq89ytu](http://pan.baidu.com/s/1hq89ytu)<br>
Git-1.9.4-preview20140611：[http://pan.baidu.com/s/1zYeUq](http://pan.baidu.com/s/1zYeUq)<br>
rubyinstaller-1.9.3-p545：[http://pan.baidu.com/s/17zE9o](http://pan.baidu.com/s/17zE9o)<br>
DevKit-tdm-32-4.5.2-20111229-1559-sfx：[http://pan.baidu.com/s/1ntmK3GX](http://pan.baidu.com/s/1ntmK3GX)<br>
