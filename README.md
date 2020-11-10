# Browser-pwn

Include CVE vulnerability analyze， ctf pwn and documents for Browser-pwn



## 漏洞分析

AST Injection, Prototype Pollution to RCE

https://blog.p6.is/AST-Injection/

P0 浏览器漏洞分析：

https://googleprojectzero.blogspot.com/p/rca-cve-2019-13720.html

chrome的堆利用：

https://blog.infosectcbr.com.au/2020/03/heap-exploitation-in-chromes.html

Jscript之殇：谈谈两年来的4个Jscript 0day

https://mp.weixin.qq.com/s/r2eBmMRAg_c1ytxPMFUAgQ

18年天府杯RCE：

https://bugs.chromium.org/p/chromium/issues/detail?id=906043

CVE-2019-5782: Inappropriate implementation in V8 漏洞利用

https://xz.aliyun.com/t/5712

https://www.sunxiaokong.xyz/2020-02-25/lzx-cve-2019-5782/

https://gtoad.github.io/2019/09/01/V8-CVE-2019-5782/

firefox pwn 入门 - CVE-2019-11707 复现笔记

https://www.anquanke.com/post/id/206558

Chrome 浏览器 textbook UAF 漏洞的利用方法分析

https://securitylab.github.com/research/CVE-2020-6449-exploit-chrome-uaf

INVERTING YOUR ASSUMPTIONS: A GUIDE TO JIT COMPARISONS

https://www.thezdi.com/blog/2018/4/12/inverting-your-assumptions-a-guide-to-jit-comparisons

Actions Speak Browser Than Words (Exploiting n-days for fun and profit) - Max Van Amerongen

https://www.youtube.com/watch?v=L7aiFKDg0Jk



## CTF chrome pwn

0CTF 2020 Chromium SBX

PlaidCTF 2020 mojo ：

https://www.anquanke.com/post/id/209800

https://pwnfirstsear.ch/2020/04/20/plaidctf2020-mojo.html

https://trungnguyen1909.github.io/blog/post/PlaidCTF2020/pwn.js

ductf2020 pwn-or-web v8 challenge writeup 

https://seb-sec.github.io/2020/09/28/ductf2020-pwn-or-web.html





## v8相关资料

https://github.com/ray-cp/browser_pwn  相关环境下载

http://phrack.org/papers/attacking_javascript_engines.html

https://www.youtube.com/watch?v=5tEdSoZ3mmE&list=PLhixgUqwRTjwufDsT1ntgOY9yjZgg5H_t

https://www.youtube.com/watch?v=lZnaaUoHPhs

https://wasdk.github.io/WasmFiddle/  在线将c语言转成wasm码

https://denolib.github.io/v8-docs/ **v8 api文档，网站：*

https://es6.ruanyifeng.com/#docs/iterator  JavaScript说明文档

https://bugs.chromium.org/p/chromium/issues/list  查找chrome v8漏洞

https://chromium.googlesource.com/chromium/src/out/ 官方版本下载，利用git checkout 切换

攻击JavaScript引擎：

http://phrack.org/papers/attacking_javascript_engines.html  

https://googleprojectzero.blogspot.com/2019/05/trashing-flow-of-data.html?m=1

https://www.synacktiv.com/en/publications/binder-analysis-and-exploitation-of-cve-2020-0041.html

https://github.com/inexorabletash/polyfill  polyfill

http://www.jayconrod.com/posts/55/a-tour-of-v8-garbage-collection v8的垃圾回收机制

turbofan 介绍：

https://doar-e.github.io/blog/2019/01/28/introduction-to-turbofan/

Elements kinds in V8：

https://v8.dev/blog/elements-kinds

Elements kinds in V8

https://v8.dev/blog/elements-kinds

v8 中文分析文章（知乎专栏）

https://zhuanlan.zhihu.com/v8core

V8 脚本引擎 Slack Tracking 机制的介绍

https://v8.dev/blog/slack-tracking

Chromium 浏览器的本地数据加密机制分析

https://textslashplain.com/2020/09/28/local-data-encryption-in-chromium/

Chrome V8让你更懂JavaScript

https://mp.weixin.qq.com/s/E-c9gsk-kxIwnwY4R5z_3Q



## 沙箱逃逸

沙箱逃逸资料搜集：

https://github.com/De4dCr0w/chrome-sbx-db

如何绕过JSC最新缓解措施并逃逸Safari沙箱

https://zhuanlan.zhihu.com/p/96069221

https://bugs.chromium.org/p/project-zero/issues/detail?id=1649

https://www.cc.gatech.edu/~hzhao336/

chrome 沙箱逃逸

https://labs.bluefrostsecurity.de/blog/2019/08/08/escaping-the-chrome-sandbox-via-an-indexeddb-race-condition/

利用ridl 进行沙箱逃逸：

https://googleprojectzero.blogspot.com/2020/02/escaping-chrome-sandbox-with-ridl.html

https://www.youtube.com/watch?v=ugZzQvXUTIk

Escape Analysis in V8 with Tobias Tebbi

https://www.youtube.com/watch?v=KiWEWLwQ3oI



## 博客搜集

https://github.com/lcatro/my-blog/tree/master/2017/diff_note

https://zhuanlan.zhihu.com/potat0Cat

http://couplee.wang/wnagzihxa1n.html

[https://eternalsakura13.com/categories/%E6%B5%8F%E8%A7%88%E5%99%A8/](https://eternalsakura13.com/categories/浏览器/)

https://thomasking2014.com/



## 工具

Chromium IPC Sniffer - 有研究员开发了一个监控 Chromium 浏览器命名管道通信消息的工具

https://github.com/tomer8007/chromium-ipc-sniffer

在线浮点数转换：

http://www.binaryconvert.com/convert_double.html#



## Fuzzing

https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/README.md

Reproducing libFuzzer and AFL crashes：

https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md





## JSC 相关资料

基础知识及环境搭建：https://www.anquanke.com/post/id/183804

https://mp.weixin.qq.com/s/pGvnLJouphJqxQ2zPDAcUw

[http://turingh.github.io/2016/12/03/CVE-2016-4622%E8%B0%83%E8%AF%95%E7%AC%94%E8%AE%B0/](http://turingh.github.io/2016/12/03/CVE-2016-4622调试笔记/)

https://eternalsakura13.com/2018/04/19/js_crash_debug/

https://webkit.org/blog/10308/speculation-in-javascriptcore/

http://phrack.org/papers/attacking_javascript_engines.html

Thinking outside the JIT Compiler: Understanding and bypassing StructureID Randomization with generic and old-school methods：

https://i.blackhat.com/eu-19/Thursday/eu-19-Wang-Thinking-Outside-The-JIT-Compiler-Understanding-And-Bypassing-StructureID-Randomization-With-Generic-And-Old-School-Methods.pdf

All About JavaScriptCore’s Many Compilers

http://www.filpizlo.com/slides/pizlo-splash2018-jsc-compiler-slides.pdf

WEBKIT JAVASCRIPTCORE的特殊调试技巧：

https://dwfault.github.io/2019/12/20/WebKit%20JavaScriptCore%E7%9A%84%E7%89%B9%E6%AE%8A%E8%B0%83%E8%AF%95%E6%8A%80%E5%B7%A7/

JavaScript engine fundamentals: Shapes and Inline Caches

https://mathiasbynens.be/notes/shapes-ics

WebKit Exploitation

https://cyberweek.ae/materials/2019/D4%20TRACK%203%20-%20Introduction%20to%20WebKit%20Exploitation%20-%20Prateek%20Gianchandani.pdf

Attacking Client-Side JIT Compilers (v2) Samuel Groß (@5aelo)

https://saelo.github.io/presentations/blackhat_us_18_attacking_client_side_jit_compilers.pdf

Just-in-time Compiler in JavaScriptCore - browser 0x03

https://liveoverflow.com/just-in-time-compiler-in-javascriptcore-browser-0x03/



## 火狐浏览器漏洞研究

Firefox Vulnerability Research：https://blog.exodusintel.com/2020/10/20/firefox-vulnerability-research/



## Edge 漏洞研究

https://microsoftedge.github.io/edgevr/posts/Introducing-Edge-Vulnerability-Research/