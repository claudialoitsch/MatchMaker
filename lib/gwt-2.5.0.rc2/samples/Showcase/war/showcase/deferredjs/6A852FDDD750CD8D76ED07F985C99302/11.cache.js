function Iyc(){}
function Myc(){}
function Byc(a,b){a.c=b}
function Cyc(a){if(a==ryc){return true}zG();return a==uyc}
function Dyc(a){if(a==qyc){return true}zG();return a==pyc}
function Kyc(a){this.c=(vAc(),qAc).b;this.e=(CAc(),BAc).b;this.b=a}
function Eyc(){vyc();Bsc.call(this);this.c=(vAc(),qAc);this.d=(CAc(),BAc);this.f[H9c]=0;this.f[I9c]=0}
function zyc(a,b){var c;c=Dlb(a.bb,97);c.c=b.b;!!c.d&&(c.d[F9c]=b.b,undefined)}
function Ayc(a,b){var c;c=Dlb(a.bb,97);c.e=b.b;!!c.d&&mpc(c.d,G9c,b.b)}
function vyc(){vyc=m2c;oyc=new Iyc;ryc=new Iyc;qyc=new Iyc;pyc=new Iyc;syc=new Iyc;tyc=new Iyc;uyc=new Iyc}
function wyc(a,b,c){var d;if(c==oyc){if(b==a.b){return}else if(a.b){throw new NTc('Only one CENTER widget may be added')}}Cj(b);mMc(a.k,b);c==oyc&&(a.b=b);d=new Kyc(c);b.bb=d;zyc(b,a.c);Ayc(b,a.d);yyc(a);Ej(b,a)}
function xyc(a,b){var c,d,e,f,g,i,j;MLc(a.db,P4c,b);i=new R_c;j=new xMc(a.k);while(j.b<j.c.d-1){c=vMc(j);g=Dlb(c.bb,97).b;e=Dlb(i.me(g),143);d=!e?1:e.b;f=g==syc?'north'+d:g==tyc?'south'+d:g==uyc?'west'+d:g==pyc?'east'+d:g==ryc?'linestart'+d:g==qyc?'lineend'+d:t9c;MLc(Hr(c.db),b,f);i.oe(g,aUc(d+1))}}
function yyc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.e;while(yqc(b)>0){mr(b,xqc(b,0))}q=1;e=1;for(i=new xMc(a.k);i.b<i.c.d-1;){d=vMc(i);f=Dlb(d.bb,97).b;f==syc||f==tyc?++q:(f==pyc||f==uyc||f==ryc||f==qyc)&&++e}r=slb(KHb,t2c,98,q,0);for(g=0;g<q;++g){r[g]=new Myc;r[g].c=$doc.createElement(D9c);dpc(b,r[g].c)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new xMc(a.k);i.b<i.c.d-1;){d=vMc(i);j=Dlb(d.bb,97);t=$doc.createElement(E9c);j.d=t;j.d[F9c]=j.c;mpc(j.d,G9c,j.e);j.d[p5c]=P4c;j.d[n5c]=P4c;if(j.b==syc){fpc(r[o].c,t,r[o].b);dpc(t,d.db);t[zbd]=n-k+1;++o}else if(j.b==tyc){fpc(r[s].c,t,r[s].b);dpc(t,d.db);t[zbd]=n-k+1;--s}else if(j.b==oyc){c=t}else if(Cyc(j.b)){p=r[o];fpc(p.c,t,p.b++);dpc(t,d.db);t[scd]=s-o+1;++k}else if(Dyc(j.b)){p=r[o];fpc(p.c,t,p.b);dpc(t,d.db);t[scd]=s-o+1;--n}}if(a.b){p=r[o];fpc(p.c,c,p.b);dpc(c,a.b.db)}}
XIb(806,1,h3c);_.qc=function D4b(){var a,b,c;ALb(this.b,(a=new Eyc,a.db[o5c]='cw-DockPanel',a.f[H9c]=4,Byc(a,(vAc(),pAc)),wyc(a,new Pwc('This is the first north component'),(vyc(),syc)),wyc(a,new Pwc('This is the first south component'),tyc),wyc(a,new Pwc('This is the east component'),pyc),wyc(a,new Pwc('This is the west component'),uyc),wyc(a,new Pwc('This is the second north component'),syc),wyc(a,new Pwc('This is the second south component'),tyc),b=new Pwc("This is a <code>ScrollPanel<\/code> contained at the center of a <code>DockPanel<\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!"),c=new Itc(b),c.db.style[p5c]=qcd,c.db.style[n5c]=rcd,wyc(a,c,oyc),xyc(a,'cwDockPanel'),a))};XIb(1109,1065,x2c,Eyc);_.Ib=function Fyc(a){xyc(this,a)};_._b=function Gyc(a){var b;b=qrc(this,a);if(b){a==this.b&&(this.b=null);yyc(this)}return b};_.b=null;var oyc,pyc,qyc,ryc,syc,tyc,uyc;XIb(1110,1,{},Iyc);XIb(1111,1,{97:1},Kyc);_.b=null;_.d=null;XIb(1112,1,{98:1},Myc);_.b=0;_.c=null;var dCb=wTc(vad,'DockPanel',1109),cCb=wTc(vad,'DockPanel$TmpRow',1112),KHb=vTc(Cad,'DockPanel$TmpRow;',1440,cCb),aCb=wTc(vad,'DockPanel$DockLayoutConstant',1110),bCb=wTc(vad,'DockPanel$LayoutData',1111);W3c(In)(11);