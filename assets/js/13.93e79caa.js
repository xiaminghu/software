(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{189:function(s,t,a){"use strict";a.r(t);var e=a(6),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zsh"}},[s._v("#")]),s._v(" zsh")]),s._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[a("strong",[s._v("Recommended Readings")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhihu.com/question/19836903",target:"_blank",rel:"noopener noreferrer"}},[s._v("vim or emacs?"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/holbrook/archive/2012/04/12/2444992.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("org-mode"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[s._v("#")]),s._v(" Install")]),s._v(" "),a("blockquote",[a("p",[s._v("windows 请安装 "),a("a",{attrs:{href:"./msys2"}},[s._v("MSYS2")])])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pacman -S "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# windows")]),s._v("\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mac")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# centos")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换 shell 为 zsh，记得重启 shell")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exec zsh'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bashrc\n")])])]),a("h2",{attrs:{id:"config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[s._v("#")]),s._v(" Config")]),s._v(" "),a("blockquote",[a("p",[s._v("出现 zsh 卡顿的问题\n因为 zsh 会自动获取 git 信息")])]),s._v(" "),a("p",[a("code",[s._v("git config --global oh-my-zsh.hide-status 1")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zsh 初始化配置")]),s._v("\nautoload -Uz zsh-newuser-install\nzsh-newuser-install -f\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 autocompletion")]),s._v("\nautoload -Uz compinstall\ncompinstall\n")])])]),a("h2",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[s._v("#")]),s._v(" Plugins")]),s._v(" "),a("h3",{attrs:{id:"oh-my-zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh"}},[s._v("#")]),s._v(" oh-my-zsh")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://ohmyz.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh/wiki",target:"_blank",rel:"noopener noreferrer"}},[s._v("wiki"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh/wiki/Cheatsheet",target:"_blank",rel:"noopener noreferrer"}},[s._v("CheatSheet"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网速快的用这句更简单")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载安装脚本，这里用的 gitee 镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载之后打开 install.sh 修改")]),s._v("\n- "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REMOTE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${REMOTE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("${REPO}")]),s._v(".git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n+ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REMOTE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${REMOTE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("gitee.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("oh-my-zsh.git}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后执行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -x install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./install.sh\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);