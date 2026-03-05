<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>APEX ULTRA v4 · Quantum AI Trading Terminal</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=JetBrains+Mono:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');
:root{
  --void:#00040c;--bg1:#010915;--bg2:#020d1c;--panel:#040f1e;--card:#071424;
  --b0:#0a1828;--b1:#102238;--b2:#183550;
  --bull:#00ffaa;--bull2:#00cc88;--bull3:rgba(0,255,170,.1);--bull4:rgba(0,255,170,.03);
  --bear:#ff3366;--bear2:#cc2244;--bear3:rgba(255,51,102,.1);--bear4:rgba(255,51,102,.03);
  --gold:#ffcc44;--gold2:#cc9e30;--goldt:rgba(255,204,68,.1);
  --blue:#00ccff;--blue2:#0099cc;--bluet:rgba(0,204,255,.09);
  --purp:#bb44ff;--purpt:rgba(187,68,255,.09);
  --orange:#ff9900;--txt:#88b8d4;--txt2:#5590ae;--txt3:#2e6080;
  --gB:0 0 16px rgba(0,255,170,.5),0 0 40px rgba(0,255,170,.18);
  --gR:0 0 16px rgba(255,51,102,.5),0 0 40px rgba(255,51,102,.18);
  --gG:0 0 16px rgba(255,204,68,.4),0 0 40px rgba(255,204,68,.14);
  --hdr-h:52px;--left-w:252px;--right-w:288px;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html,body{width:100%;height:100%;overflow:hidden;background:var(--void);color:var(--txt);font-family:'JetBrains Mono',monospace;font-size:11px;-webkit-font-smoothing:antialiased}
body::before{content:'';position:fixed;inset:0;background-image:linear-gradient(rgba(0,204,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,204,255,.02) 1px,transparent 1px);background-size:60px 60px;animation:gridscroll 30s linear infinite;pointer-events:none;z-index:1}
@keyframes gridscroll{to{background-position:60px 60px}}
body::after{content:'';position:fixed;inset:0;background:radial-gradient(ellipse 80% 40% at 50% 0%,rgba(0,204,255,.05),transparent 60%),radial-gradient(ellipse 100% 100% at 50% 50%,transparent 60%,rgba(0,4,12,.7));pointer-events:none;z-index:1}
#SCAN{position:fixed;inset:0;background:repeating-linear-gradient(transparent,transparent 3px,rgba(0,0,0,.04) 3px,rgba(0,0,0,.04) 4px);pointer-events:none;z-index:2}
#STAR_CV{position:fixed;inset:0;z-index:0;pointer-events:none}
#ALERT_FLASH{position:fixed;inset:0;z-index:900;pointer-events:none;opacity:0}
#ALERT_FLASH.buy{animation:flashbuy .7s ease-out forwards}
#ALERT_FLASH.sell{animation:flashsell .7s ease-out forwards}
@keyframes flashbuy{0%{opacity:1;background:rgba(0,255,170,.08)}100%{opacity:0}}
@keyframes flashsell{0%{opacity:1;background:rgba(255,51,102,.08)}100%{opacity:0}}
#TOAST{position:fixed;top:58px;right:12px;z-index:1100;padding:8px 14px;border-radius:2px;font-size:9px;font-weight:700;letter-spacing:1.5px;border:1px solid;transition:transform .25s cubic-bezier(.34,1.56,.64,1),opacity .25s;transform:translateX(160%);opacity:0;max-width:300px;backdrop-filter:blur(12px)}
#TOAST.show{transform:translateX(0);opacity:1}
#TOAST.buy{background:rgba(0,255,170,.12);border-color:var(--bull);color:var(--bull);box-shadow:var(--gB)}
#TOAST.sell{background:rgba(255,51,102,.12);border-color:var(--bear);color:var(--bear);box-shadow:var(--gR)}
#TOAST.ok{background:rgba(0,255,170,.1);border-color:var(--bull);color:var(--bull)}
#TOAST.err{background:rgba(255,51,102,.1);border-color:var(--bear);color:var(--bear)}
#TOAST.info{background:rgba(255,204,68,.1);border-color:var(--gold);color:var(--gold)}
#TOAST.sniper{background:rgba(255,153,0,.12);border-color:var(--orange);color:var(--orange)}
#LOAD_BAR{position:fixed;top:var(--hdr-h);left:var(--left-w);z-index:80;height:2px;background:linear-gradient(90deg,var(--blue),var(--bull));transition:width .3s;box-shadow:0 0 8px var(--blue);width:0}

/* LIVE BADGE */
#LIVE_BADGE{position:fixed;top:58px;left:50%;transform:translateX(-50%);z-index:100;font-size:7.5px;letter-spacing:2px;padding:3px 10px;border-radius:10px;border:1px solid;backdrop-filter:blur(8px);pointer-events:none;transition:all .3s}
#LIVE_BADGE.live{border-color:rgba(0,255,170,.4);background:rgba(0,255,170,.08);color:var(--bull)}
#LIVE_BADGE.stale{border-color:rgba(255,204,68,.4);background:rgba(255,204,68,.08);color:var(--gold)}
#LIVE_BADGE.error{border-color:rgba(255,51,102,.4);background:rgba(255,51,102,.08);color:var(--bear)}

/* MODALS */
.mwrap{display:none;position:fixed;inset:0;z-index:1000;background:rgba(0,4,12,.94);backdrop-filter:blur(10px);align-items:center;justify-content:center}
.mwrap.open{display:flex}
.modal{background:var(--bg2);border:1px solid var(--b2);border-radius:3px;width:460px;max-width:94vw;box-shadow:0 0 100px rgba(0,204,255,.08),0 40px 80px rgba(0,0,0,.95);animation:mpop .22s cubic-bezier(.34,1.56,.64,1)}
@keyframes mpop{from{opacity:0;transform:scale(.88) translateY(16px)}to{opacity:1;transform:scale(1) translateY(0)}}
.mhdr{padding:14px 16px;border-bottom:1px solid var(--b1);display:flex;align-items:center;justify-content:space-between}
.mtit{font-family:'Orbitron',sans-serif;font-size:11px;font-weight:700;letter-spacing:3px;color:var(--gold)}
.mclo{background:none;border:none;color:var(--txt3);font-size:16px;cursor:pointer;transition:color .13s;padding:0 3px}
.mclo:hover{color:var(--txt)}
.mbody{padding:16px}
.mnotice{background:rgba(255,204,68,.08);border:1px solid rgba(255,204,68,.25);border-radius:2px;padding:9px 12px;margin-bottom:12px;font-size:9px;line-height:1.75;color:var(--gold)}
.mlbl{font-size:8px;letter-spacing:1.5px;color:var(--txt3);margin-bottom:4px;text-transform:uppercase}
.mi{width:100%;background:var(--card);border:1px solid var(--b1);color:var(--txt);padding:7px 10px;border-radius:2px;font-family:'JetBrains Mono',monospace;font-size:11px;outline:none;transition:border-color .18s;margin-bottom:9px}
.mi:focus{border-color:var(--gold)}.mi::placeholder{color:var(--txt3)}
.moderow{display:flex;gap:5px;margin-bottom:11px}
.modebtn{flex:1;padding:7px;border:1px solid var(--b1);background:var(--card);color:var(--txt3);font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;border-radius:2px;cursor:pointer;transition:all .13s}
.modebtn.on{border-color:var(--gold);color:var(--gold);background:var(--goldt)}
.mbtn{width:100%;padding:9px;border:none;border-radius:2px;font-family:'Orbitron',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;cursor:pointer;background:var(--gold);color:#000;transition:all .14s;margin-top:3px}
.mbtn:hover{background:#ffe060;box-shadow:var(--gG)}.mbtn:disabled{background:#3a2e10;color:#665520;cursor:not-allowed}
#MST{font-size:9px;text-align:center;margin-top:9px;min-height:13px}
#LWRN{display:none;background:rgba(255,51,102,.08);border:1px solid rgba(255,51,102,.25);border-radius:2px;padding:8px 11px;margin-bottom:11px;font-size:9px;color:var(--bear);line-height:1.6}

/* HEADER */
#HDR{position:fixed;top:0;left:0;right:0;height:var(--hdr-h);background:rgba(1,9,21,.98);border-bottom:1px solid var(--b1);display:flex;align-items:center;gap:7px;padding:0 10px;z-index:200;backdrop-filter:blur(16px);box-shadow:0 1px 30px rgba(0,0,0,.5)}
#HDR::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--blue),var(--bull),var(--gold),transparent);opacity:.25;animation:headerline 4s ease-in-out infinite alternate}
@keyframes headerline{0%{opacity:.12}100%{opacity:.4}}
.logo{font-family:'Orbitron',sans-serif;font-size:20px;font-weight:900;letter-spacing:5px;flex-shrink:0;background:linear-gradient(135deg,var(--blue) 0%,var(--bull) 50%,var(--gold) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;filter:drop-shadow(0 0 12px rgba(0,204,255,.5));text-decoration:none;animation:logopulse 3s ease-in-out infinite}
@keyframes logopulse{0%,100%{filter:drop-shadow(0 0 10px rgba(0,204,255,.4))}50%{filter:drop-shadow(0 0 22px rgba(0,255,170,.6))}}
.logo-sub{font-size:6.5px;letter-spacing:3px;color:var(--txt3);margin-top:-2px;display:block}
.vsep{width:1px;height:26px;background:var(--b1);flex-shrink:0;opacity:.7}
.pairs,.tfs{display:flex;gap:2px;flex-wrap:nowrap}
.pb{padding:4px 10px;border:1px solid var(--b1);background:var(--card);color:var(--txt3);font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;border-radius:2px;cursor:pointer;transition:all .12s;letter-spacing:.5px;white-space:nowrap}
.pb:hover,.pb.on{border-color:var(--blue);color:var(--blue);background:rgba(0,204,255,.06)}
.tb{padding:3px 8px;border:1px solid transparent;background:transparent;color:var(--txt3);font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:600;border-radius:2px;cursor:pointer;transition:all .11s;letter-spacing:.5px}
.tb:hover{color:var(--txt);border-color:var(--b1)}.tb.on{color:var(--gold);border-color:rgba(255,204,68,.45);background:rgba(255,204,68,.07)}
.hprice{font-family:'Orbitron',sans-serif;font-size:18px;font-weight:700;letter-spacing:1px;white-space:nowrap;transition:all .3s}
.cup{color:var(--bull);text-shadow:var(--gB)}.cdn{color:var(--bear);text-shadow:var(--gR)}
.pct{font-size:9px;padding:2px 7px;border-radius:2px;font-family:'JetBrains Mono',monospace;margin-left:4px}
.pup{background:var(--bull3);color:var(--bull)}.pdn{background:var(--bear3);color:var(--bear)}
.livdot{width:7px;height:7px;border-radius:50%;flex-shrink:0;animation:blink 1.4s infinite}
.livdot.live{background:var(--bull);box-shadow:var(--gB)}.livdot.dead{background:var(--txt3);animation:none}.livdot.loading{background:var(--gold);box-shadow:var(--gG);animation:blink .5s infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}
.ml{margin-left:auto}
.hdrbtn{padding:5px 12px;border:1px solid var(--b1);background:transparent;color:var(--txt3);font-family:'JetBrains Mono',monospace;font-size:8.5px;font-weight:700;border-radius:2px;cursor:pointer;transition:all .13s;letter-spacing:1px;white-space:nowrap}
.hdrbtn:hover{background:var(--b0);color:var(--txt);border-color:var(--b2)}.hdrbtn.on{color:var(--blue);border-color:rgba(0,204,255,.45)}
.alpbtn{border-color:rgba(255,204,68,.35);color:var(--gold)}.alpbtn:hover{background:var(--goldt);border-color:var(--gold);box-shadow:var(--gG)}.alpbtn.conn{border-color:var(--bull);color:var(--bull);background:var(--bull3)}
.sniperbtn{border-color:rgba(255,153,0,.4);color:var(--orange)}.sniperbtn:hover{background:rgba(255,153,0,.08);border-color:var(--orange)}
.sniperbtn.armed{border-color:var(--orange);color:#000;background:var(--orange);box-shadow:0 0 18px rgba(255,153,0,.5),0 0 40px rgba(255,153,0,.2);animation:sniperpulse 1.6s ease-in-out infinite}
@keyframes sniperpulse{0%,100%{box-shadow:0 0 18px rgba(255,153,0,.5)}50%{box-shadow:0 0 32px rgba(255,153,0,.9),0 0 60px rgba(255,153,0,.35)}}

/* PANELS */
#LEFT{position:fixed;top:var(--hdr-h);left:0;bottom:0;width:var(--left-w);background:var(--bg1);border-right:1px solid var(--b0);display:flex;flex-direction:column;overflow:hidden;z-index:50}
#RIGHT{position:fixed;top:var(--hdr-h);right:0;bottom:0;width:var(--right-w);background:var(--bg1);border-left:1px solid var(--b0);display:flex;flex-direction:column;overflow:hidden;z-index:50}
.sh{padding:5px 10px;font-size:7px;font-weight:700;letter-spacing:3px;color:var(--txt3);text-transform:uppercase;border-bottom:1px solid var(--b0);background:rgba(4,12,26,.7);flex-shrink:0;display:flex;align-items:center;justify-content:space-between}
.sh em{color:var(--gold);font-style:normal}
.sh-toggle{background:none;border:none;color:var(--txt3);cursor:pointer;font-size:9px;padding:0;transition:color .15s;line-height:1}.sh-toggle:hover{color:var(--txt)}
.sidebar-scroll{flex:1;overflow-y:auto;min-height:0;scrollbar-width:thin;scrollbar-color:var(--b1) transparent}
.sidebar-scroll::-webkit-scrollbar{width:3px}.sidebar-scroll::-webkit-scrollbar-thumb{background:var(--b1);border-radius:2px}

/* CANVASES */
#MAIN_CV,#VOL_CV,#RSI_CV,#MACD_CV{position:fixed;display:block;cursor:crosshair;z-index:10}
#DRAW_CV{position:fixed;z-index:15;pointer-events:none;cursor:crosshair}
#DRAW_CV.drawing{pointer-events:auto}
#OHLC_BAR{position:fixed;z-index:60;display:flex;gap:8px;align-items:center;background:rgba(0,4,12,.92);border:1px solid var(--b1);border-radius:2px;padding:5px 12px;font-size:10px;pointer-events:none;letter-spacing:.5px;backdrop-filter:blur(8px)}
#REGIME_BAR{position:fixed;z-index:61;height:3px;display:flex;overflow:hidden;transition:background .8s}
.cv-lbl{position:fixed;z-index:65;font-size:7.5px;letter-spacing:2px;color:var(--txt3);font-weight:700;pointer-events:none;padding:3px 8px;background:rgba(0,4,12,.8);border-right:1px solid var(--b0);border-bottom:1px solid var(--b0)}

/* DRAW TOOLBAR */
#DRAW_TOOLBAR{position:fixed;z-index:66;display:flex;flex-direction:column;gap:2px;background:rgba(1,9,21,.95);border:1px solid var(--b1);border-radius:3px;padding:4px;box-shadow:0 4px 20px rgba(0,0,0,.5)}
.dtool{width:28px;height:28px;background:none;border:1px solid transparent;color:var(--txt3);font-size:13px;cursor:pointer;border-radius:2px;transition:all .13s;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace}
.dtool:hover{border-color:var(--b2);color:var(--txt);background:var(--b0)}.dtool.on{border-color:var(--gold);color:var(--gold);background:rgba(255,204,68,.07)}
.dtool-sep{height:1px;background:var(--b1);margin:2px 0}

/* AI AGENTS */
.agent{margin:4px 5px 0;padding:8px 9px;border:1px solid var(--b0);background:var(--card);border-radius:2px;flex-shrink:0;position:relative;overflow:hidden;transition:border-color .4s,box-shadow .4s}
.agent::before{content:'';position:absolute;top:0;left:0;right:0;height:1.5px}
.ag1::before{background:linear-gradient(90deg,var(--blue),transparent)}.ag2::before{background:linear-gradient(90deg,var(--purp),transparent)}.ag3::before{background:linear-gradient(90deg,var(--gold),transparent)}
.agent.buy-glow{border-color:rgba(0,255,170,.35);box-shadow:inset 0 0 20px rgba(0,255,170,.03)}.agent.sell-glow{border-color:rgba(255,51,102,.35);box-shadow:inset 0 0 20px rgba(255,51,102,.03)}
.agpulse{animation:agp .8s ease-in-out infinite}
@keyframes agp{0%,100%{border-color:var(--b0)}50%{border-color:var(--b2)}}
.agname{font-size:7px;letter-spacing:2px;font-weight:700;margin-bottom:3px;text-transform:uppercase;display:flex;align-items:center;gap:4px}
.agvote{font-family:'Orbitron',sans-serif;font-size:15px;font-weight:900;letter-spacing:2px}
.vbuy{color:var(--bull);text-shadow:var(--gB)}.vsell{color:var(--bear);text-shadow:var(--gR)}.vneu{color:var(--txt3)}
.agbar{height:3px;background:var(--b0);border-radius:2px;margin:4px 0;overflow:hidden}
.agfill{height:100%;border-radius:2px;transition:width 1s cubic-bezier(.34,1.56,.64,1)}
.fb{background:linear-gradient(90deg,var(--bull2),var(--bull))}.fs{background:linear-gradient(90deg,var(--bear2),var(--bear))}.fn{background:var(--txt3)}
.agconf{font-size:8px;color:var(--txt3);margin-left:auto}
.agreason{font-size:7.5px;line-height:1.6;color:var(--txt3)}.agreason.ok{color:var(--txt)}

/* CONSENSUS */
.conbox{margin:5px;padding:10px 11px;border:1px solid var(--b1);background:var(--card);border-radius:2px;flex-shrink:0;transition:all .4s}
.conbox.buy{border-color:var(--bull);background:var(--bull4);box-shadow:0 0 25px rgba(0,255,170,.06)}.conbox.sell{border-color:var(--bear);background:var(--bear4);box-shadow:0 0 25px rgba(255,51,102,.06)}
.conlbl{font-size:7px;letter-spacing:3px;color:var(--txt3);text-transform:uppercase}
.consig{font-family:'Orbitron',sans-serif;font-size:22px;font-weight:900;letter-spacing:3px;margin:2px 0}
.csb{color:var(--bull);text-shadow:var(--gB)}.csr{color:var(--bear);text-shadow:var(--gR)}.csn{color:var(--txt3)}
.conrow{display:flex;justify-content:space-between;align-items:center;font-size:8px;margin-top:4px}
.convotes{display:flex;gap:8px}
.qual-badge{font-size:6.5px;font-weight:700;letter-spacing:1px;padding:1px 5px;border-radius:6px;border:1px solid;margin-left:4px}
.q-elite{color:#fff;border-color:var(--gold);background:var(--goldt);animation:goldglow 2s ease-in-out infinite}
@keyframes goldglow{0%,100%{box-shadow:none}50%{box-shadow:0 0 8px rgba(255,204,68,.4)}}
.q-strong{color:var(--bull);border-color:rgba(0,255,170,.35);background:var(--bull3)}.q-weak{color:var(--txt3);border-color:var(--b1)}

/* INDICATORS */
#IS{overflow:visible}
.ir{display:flex;justify-content:space-between;align-items:center;padding:3px 10px;border-bottom:1px solid rgba(10,24,40,.8);transition:background .1s}
.ir:hover{background:rgba(0,204,255,.015)}
.iname{font-size:8px;letter-spacing:.5px;color:var(--txt3)}.ival{font-size:9px;font-weight:700}
.ib{color:var(--bull)}.ibr{color:var(--bear)}.inu{color:var(--txt)}
.imini{width:34px;height:2px;background:var(--b0);border-radius:1px;overflow:hidden;margin-left:3px}
.iminif{height:100%;border-radius:1px;transition:width .6s cubic-bezier(.34,1.56,.64,1)}.irr{display:flex;align-items:center}

/* STAT BAR */
.sc{flex:1;padding:4px 8px;border-right:1px solid var(--b0);display:flex;flex-direction:column;gap:1px}.sc:last-child{border-right:none}
.sv{font-family:'Orbitron',sans-serif;font-size:12px;font-weight:700}.sl{font-size:7px;letter-spacing:1.5px;color:var(--txt3);text-transform:uppercase}
.badge{font-size:7px;font-weight:700;letter-spacing:.6px;padding:1px 5px;border-radius:6px;border:1px solid;white-space:nowrap}
.bull-b{color:var(--bull);border-color:rgba(0,255,170,.3);background:var(--bull3)}.bear-b{color:var(--bear);border-color:rgba(255,51,102,.3);background:var(--bear3)}.neu-b{color:var(--txt3);border-color:var(--b1)}

/* SNIPER */
#SNIPER_PANEL{flex-shrink:0;border-bottom:1px solid var(--b0)}
.sniper-inner{padding:7px 9px;display:flex;flex-direction:column;gap:5px}
.sniper-status{display:flex;justify-content:space-between;align-items:center}
.sniper-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;transition:all .3s}
.sniper-dot.armed{background:var(--orange);box-shadow:0 0 8px var(--orange);animation:blink .9s infinite}.sniper-dot.disarmed{background:var(--txt3)}.sniper-dot.fired{background:var(--bull);box-shadow:var(--gB)}
.sniper-title{font-family:'Orbitron',sans-serif;font-size:9px;letter-spacing:2px;font-weight:700}
.sniper-title.armed{color:var(--orange)}.sniper-title.disarmed{color:var(--txt3)}
.sniper-mode-row{display:flex;gap:3px}
.smb{flex:1;padding:4px;border:1px solid var(--b1);background:var(--card);color:var(--txt3);font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:700;border-radius:2px;cursor:pointer;transition:all .12s;text-align:center}
.smb.on.buy{border-color:var(--bull);color:var(--bull);background:var(--bull3)}.smb.on.sell{border-color:var(--bear);color:var(--bear);background:var(--bear3)}.smb.on.both{border-color:var(--gold);color:var(--gold);background:var(--goldt)}
.sniper-grid{display:grid;grid-template-columns:1fr 1fr;gap:3px}
.sg-cell{background:var(--card);border:1px solid var(--b0);border-radius:2px;padding:4px 6px}
.sg-lbl{font-size:7px;letter-spacing:1px;color:var(--txt3);text-transform:uppercase}
.sg-inp{width:100%;background:transparent;border:none;border-bottom:1px solid var(--b1);padding:2px 0;font-size:10px;font-family:'JetBrains Mono',monospace;color:var(--txt);outline:none}
.sg-inp:focus{border-bottom-color:var(--orange)}
.sniper-arm-btn{width:100%;padding:7px;border:1px solid var(--orange);background:transparent;color:var(--orange);font-family:'Orbitron',sans-serif;font-size:8.5px;font-weight:700;letter-spacing:2px;border-radius:2px;cursor:pointer;transition:all .15s}
.sniper-arm-btn:hover{background:rgba(255,153,0,.1);box-shadow:0 0 12px rgba(255,153,0,.25)}.sniper-arm-btn.armed{background:var(--orange);color:#000;box-shadow:0 0 18px rgba(255,153,0,.4)}
.sniper-log{max-height:60px;overflow-y:auto;scrollbar-width:none}.sniper-log::-webkit-scrollbar{display:none}
.sniper-entry{font-size:7.5px;color:var(--txt3);padding:1.5px 0;border-bottom:1px solid rgba(10,26,42,.5);display:flex;gap:5px}
.sniper-entry.fired{color:var(--bull)}.sniper-entry.warn{color:var(--gold)}.sniper-entry.err{color:var(--bear)}

/* ALPACA */
.cprompt{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:18px;gap:7px;border-bottom:1px solid var(--b0);flex-shrink:0}
.cpgo{padding:6px 18px;border:1px solid var(--gold);background:var(--goldt);color:var(--gold);font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;border-radius:2px;cursor:pointer;letter-spacing:1px;transition:all .14s}
.cpgo:hover{background:rgba(255,204,68,.18);box-shadow:var(--gG)}
#APANEL{display:none;flex-shrink:0}
.eqbox{padding:10px 12px;border-bottom:1px solid var(--b0);background:rgba(4,12,24,.9)}
.eqv{font-family:'Orbitron',sans-serif;font-size:18px;font-weight:700;color:var(--bull)}.eql{font-size:7px;letter-spacing:2px;color:var(--txt3);margin-top:1px}
.obox{padding:8px 10px;border-bottom:1px solid var(--b0);background:rgba(4,12,24,.9);flex-shrink:0}
.orow{display:flex;gap:4px;margin-bottom:4px;align-items:center}
.olbl{font-size:8px;color:var(--txt3);width:42px;flex-shrink:0;letter-spacing:.5px}
.oi{flex:1;background:var(--card);border:1px solid var(--b1);color:var(--txt);padding:4px 8px;border-radius:2px;font-family:'JetBrains Mono',monospace;font-size:10px;outline:none;transition:border-color .13s;width:100%}.oi:focus{border-color:var(--gold)}
.obtns{display:flex;gap:5px;margin-top:4px}
.obuy{flex:1;padding:8px;border:none;border-radius:2px;background:var(--bull);color:#000;font-family:'Orbitron',sans-serif;font-size:8.5px;font-weight:900;letter-spacing:1px;cursor:pointer;transition:all .14s;box-shadow:0 0 12px rgba(0,255,170,.25)}
.obuy:hover{background:#00ffcc;box-shadow:var(--gB)}.obuy:disabled{background:#0d2e1e;color:#1a4530;cursor:not-allowed;box-shadow:none}
.osell{flex:1;padding:8px;border:none;border-radius:2px;background:var(--bear);color:#fff;font-family:'Orbitron',sans-serif;font-size:8.5px;font-weight:900;letter-spacing:1px;cursor:pointer;transition:all .14s;box-shadow:0 0 12px rgba(255,51,102,.25)}
.osell:hover{background:#ff5577;box-shadow:var(--gR)}.osell:disabled{background:#2e0d1a;color:#662033;cursor:not-allowed;box-shadow:none}
#OST{font-size:9px;text-align:center;margin-top:4px;min-height:13px}
.risk-panel{padding:7px 10px;border-bottom:1px solid var(--b0);background:rgba(4,12,24,.9);flex-shrink:0}
.risk-row{display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:3px}
.risk-cell{background:var(--card);border:1px solid var(--b0);border-radius:2px;padding:4px 6px}
.rc-lbl{font-size:7px;letter-spacing:1px;color:var(--txt3);text-transform:uppercase}.rc-val{font-family:'Orbitron',sans-serif;font-size:11px;font-weight:700;margin-top:1px}
.positem{display:grid;grid-template-columns:1fr auto;padding:5px 10px;border-bottom:1px solid rgba(10,24,40,.7);cursor:pointer;transition:background .1s}
.positem:hover{background:rgba(0,204,255,.03)}
.psym{font-size:10px;font-weight:700}.pqty{font-size:7px;color:var(--txt3);margin-top:1px}
.pval{font-size:10px;font-weight:700;text-align:right}.ppnl{font-size:7px;text-align:right;margin-top:1px}

/* HISTORY */
#HIS{overflow:visible}
.hi{display:grid;grid-template-columns:34px 1fr 44px;gap:5px;align-items:center;padding:5px 9px;border-bottom:1px solid rgba(10,24,40,.7);cursor:pointer;transition:background .1s;position:relative}
.hi::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px}
.hi.buy::before{background:var(--bull)}.hi.sell::before{background:var(--bear)}.hi:hover{background:rgba(0,204,255,.02)}
.hbdg{font-family:'Orbitron',sans-serif;font-size:5.5px;font-weight:900;padding:2px 3px;border-radius:2px;text-align:center}
.hbuy{background:var(--bull3);color:var(--bull);border:1px solid rgba(0,255,170,.3)}.hsell{background:var(--bear3);color:var(--bear);border:1px solid rgba(255,51,102,.3)}
.hpat{font-size:9px;font-weight:700}.hmeta{font-size:7px;color:var(--txt3);margin-top:1px}
.hout{text-align:right;font-family:'Orbitron',sans-serif;font-size:8px;font-weight:700}
.hw{color:var(--bull)}.hl{color:var(--bear)}.ho{color:var(--txt3)}

/* ALERTS */
.alert-item{display:flex;align-items:center;gap:8px;padding:6px 10px;border-bottom:1px solid var(--b0);font-size:9px}
.alert-del{background:none;border:none;color:var(--bear);cursor:pointer;font-size:12px;margin-left:auto;opacity:.5}.alert-del:hover{opacity:1}
.alert-add-row{display:flex;gap:4px;padding:8px;border-top:1px solid var(--b0)}
.alert-add-row input,.alert-add-row select{background:var(--card);border:1px solid var(--b1);color:var(--txt);padding:4px 7px;border-radius:2px;font-family:'JetBrains Mono',monospace;font-size:9px;outline:none}
.alert-add-btn{padding:4px 10px;border:1px solid var(--gold);background:var(--goldt);color:var(--gold);font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;border-radius:2px;cursor:pointer;white-space:nowrap}
.alert-badge{position:absolute;top:-4px;right:-4px;background:var(--bear);color:#fff;font-size:6px;font-weight:700;width:13px;height:13px;border-radius:50%;display:flex;align-items:center;justify-content:center}
#ALERT_BTN{position:relative}

/* WATCHLIST */
.watch-row{display:flex;align-items:center;gap:6px;padding:4px 9px;border-bottom:1px solid rgba(10,24,40,.6);cursor:pointer;transition:background .1s}
.watch-row:hover{background:rgba(0,204,255,.03)}
.watch-sym{font-size:9px;font-weight:700;width:38px;flex-shrink:0}
.watch-price{font-size:9px;font-weight:700;margin-left:auto;white-space:nowrap;font-family:'Orbitron',sans-serif}
.watch-pct{font-size:7.5px;width:46px;text-align:right}

/* COUNTDOWN */
#REFRESH_COUNTDOWN{font-size:7px;color:var(--txt3);letter-spacing:1px;display:flex;align-items:center;gap:4px}
.countdown-ring{width:14px;height:14px;position:relative;flex-shrink:0}
.countdown-ring svg{transform:rotate(-90deg)}
.countdown-ring circle{transition:stroke-dashoffset .5s linear;fill:none;stroke-width:2}
.cring-bg{stroke:var(--b1)}.cring-fg{stroke:var(--blue)}

/* KB HINT */
#KBHINT{position:fixed;bottom:10px;right:296px;z-index:65;font-size:7px;color:var(--txt3);letter-spacing:1px;pointer-events:none}
kbd{background:var(--b0);border:1px solid var(--b1);border-radius:2px;padding:1px 4px;font-family:'JetBrains Mono',monospace;font-size:7px;color:var(--txt3)}

/* PRICE FLASH */
@keyframes priceFlashUp{0%{color:var(--bull);text-shadow:var(--gB)}100%{}}
@keyframes priceFlashDn{0%{color:var(--bear);text-shadow:var(--gR)}100%{}}
.flash-up{animation:priceFlashUp .6s}
.flash-dn{animation:priceFlashDn .6s}

/* SCORING PANEL */
#SYSVOTES{display:flex;flex-direction:column;gap:2px}
</style>
</head>
<body>
<canvas id="STAR_CV"></canvas>
<div id="SCAN"></div>
<div id="ALERT_FLASH"></div>
<div id="TOAST"></div>
<div id="LOAD_BAR"></div>
<div id="REGIME_BAR"></div>
<div id="OHLC_BAR" style="display:none"></div>
<div id="LIVE_BADGE" class="stale">● CONNECTING...</div>

<!-- MODAL: ALPACA -->
<div class="mwrap" id="MOD">
  <div class="modal">
    <div class="mhdr"><span class="mtit">⚡ ALPACA CONNECT</span><button class="mclo" onclick="closeMod()">✕</button></div>
    <div class="mbody">
      <div class="mnotice">Paper mode = simulated money, real prices. Free API keys at <strong style="color:#fff">alpaca.markets</strong></div>
      <div class="moderow">
        <button class="modebtn on" id="mPaper" onclick="setMode('paper')">📋 PAPER</button>
        <button class="modebtn" id="mLive" onclick="setMode('live')">💰 LIVE</button>
      </div>
      <div id="LWRN">⚠ LIVE mode places REAL orders with REAL money. Paper test first.</div>
      <div class="mlbl">API Key ID</div><input class="mi" id="AK" type="text" placeholder="PK... or AK...">
      <div class="mlbl">Secret Key</div><input class="mi" id="AS" type="password" placeholder="Your secret key">
      <button class="mbtn" id="MBTN" onclick="connectAlpaca()">CONNECT ACCOUNT</button>
      <div id="MST"></div>
      <div style="margin-top:12px;border-top:1px solid var(--b1);padding-top:10px">
        <div class="mlbl" style="color:var(--gold)">Claude AI Key <span style="color:var(--txt3);font-weight:400">(optional)</span></div>
        <input class="mi" id="AIKEY" type="password" placeholder="sk-ant-... (leave blank for LOCAL mode)" oninput="saveAIKey(this.value)">
        <div style="font-size:8px;color:var(--txt3);line-height:1.5">Without key: agents run instantly in LOCAL mode.<br>With key: agents use Claude AI (~2s per analysis).</div>
      </div>
    </div>
  </div>
</div>

<!-- MODAL: ALERTS -->
<div class="mwrap" id="ALERT_MOD">
  <div class="modal" style="width:380px">
    <div class="mhdr"><span class="mtit">🔔 PRICE ALERTS</span><button class="mclo" onclick="closeAlertMod()">✕</button></div>
    <div id="ALERT_LIST" style="max-height:240px;overflow-y:auto"></div>
    <div class="alert-add-row">
      <input id="ALERT_SYM" value="BTC/USD" style="width:80px">
      <select id="ALERT_COND"><option value="above">Above</option><option value="below">Below</option></select>
      <input id="ALERT_PRICE" type="number" placeholder="Price" style="flex:1;min-width:0">
      <button class="alert-add-btn" onclick="addAlert()">+ ADD</button>
    </div>
  </div>
</div>

<!-- MODAL: KEYBOARD SHORTCUTS -->
<div class="mwrap" id="KB_MOD">
  <div class="modal" style="width:340px">
    <div class="mhdr"><span class="mtit">⌨ SHORTCUTS</span><button class="mclo" onclick="document.getElementById('KB_MOD').classList.remove('open')">✕</button></div>
    <div class="mbody" style="display:grid;grid-template-columns:1fr 1fr;gap:6px 12px;font-size:9px;color:var(--txt)">
      <span><kbd>E</kbd> Export PNG</span><span><kbd>R</kbd> Refresh data</span>
      <span><kbd>B</kbd> Toggle BB</span><span><kbd>V</kbd> Toggle VWAP</span>
      <span><kbd>H</kbd> Heikin Ashi</span><span><kbd>S</kbd> Toggle Sniper</span>
      <span><kbd>A</kbd> Add Alert</span><span><kbd>?</kbd> This screen</span>
      <span><kbd>←</kbd><kbd>→</kbd> Pan chart</span><span><kbd>+</kbd><kbd>-</kbd> Zoom</span>
      <span><kbd>Esc</kbd> Close modals</span><span><kbd>T</kbd> Theme toggle</span>
      <span><kbd>D</kbd> Drawing mode</span><span><kbd>X</kbd> Clear drawings</span>
    </div>
  </div>
</div>

<!-- HEADER -->
<div id="HDR">
  <div style="display:flex;flex-direction:column;flex-shrink:0">
    <div class="logo">APEX</div>
    <span class="logo-sub">ULTRA v4 · QUANTUM AI</span>
  </div>
  <div class="vsep"></div>
  <div class="pairs">
    <button class="pb on" onclick="switchPair('BTC/USD')">BTC</button>
    <button class="pb" onclick="switchPair('ETH/USD')">ETH</button>
    <button class="pb" onclick="switchPair('SOL/USD')">SOL</button>
    <button class="pb" onclick="switchPair('DOGE/USD')">DOGE</button>
    <button class="pb" onclick="switchPair('AAPL')">AAPL</button>
    <button class="pb" onclick="switchPair('NVDA')">NVDA</button>
    <button class="pb" onclick="switchPair('SPY')">SPY</button>
    <button class="pb" onclick="switchPair('QQQ')">QQQ</button>
  </div>
  <div class="vsep"></div>
  <div class="tfs">
    <button class="tb" onclick="switchTF('1Min')">1m</button>
    <button class="tb" onclick="switchTF('5Min')">5m</button>
    <button class="tb" onclick="switchTF('15Min')">15m</button>
    <button class="tb on" onclick="switchTF('1Hour')">1h</button>
    <button class="tb" onclick="switchTF('4Hour')">4h</button>
    <button class="tb" onclick="switchTF('1Day')">1D</button>
  </div>
  <div class="vsep"></div>
  <div style="display:flex;align-items:center;gap:5px">
    <div class="livdot live" id="LDOT"></div>
    <span style="font-size:7px;color:var(--txt3);letter-spacing:.5px" id="DATASRC">—</span>
    <span class="hprice cup" id="HP">—</span>
    <span class="pct pup" id="HPCT">—</span>
    <span style="font-size:8px;color:var(--txt3);margin-left:2px" id="HVOL">—</span>
  </div>
  <div class="vsep"></div>
  <div style="display:flex;align-items:center;gap:8px;font-size:9px;color:var(--txt3)">
    <span>H:<span id="HHIGH" style="color:var(--bull);margin-left:2px">—</span></span>
    <span>L:<span id="HLOW" style="color:var(--bear);margin-left:2px">—</span></span>
    <span id="SESSION_BADGE" style="font-size:7px;padding:1px 6px;border-radius:8px;border:1px solid var(--b1);display:none"></span>
  </div>
  <div style="display:flex;align-items:center;gap:5px;margin-left:4px">
    <div id="REFRESH_COUNTDOWN">
      <div class="countdown-ring">
        <svg viewBox="0 0 14 14" width="14" height="14">
          <circle class="cring-bg" cx="7" cy="7" r="5" stroke-dasharray="31.4" stroke-dashoffset="0"/>
          <circle class="cring-fg" id="CRING" cx="7" cy="7" r="5" stroke-dasharray="31.4" stroke-dashoffset="0"/>
        </svg>
      </div>
      <span id="CTXT">—</span>
    </div>
  </div>
  <div class="ml"></div>
  <div style="display:flex;gap:2px">
    <button class="hdrbtn" id="tHA" onclick="toggleHA()" title="Heikin Ashi">HA</button>
    <button class="hdrbtn" id="tBB" onclick="toggleBB()">BB</button>
    <button class="hdrbtn on" id="tEMA" onclick="toggleEMA()">EMA</button>
    <button class="hdrbtn" id="tVWAP" onclick="toggleVWAP()">VWAP</button>
    <button class="hdrbtn" id="tSESS" onclick="toggleSessions()">SESS</button>
  </div>
  <div class="vsep"></div>
  <button class="hdrbtn sniperbtn" id="SNIPERHDRBTN" onclick="armSniper()">🎯 SNIPER</button>
  <button class="hdrbtn" id="ALERT_BTN" onclick="openAlertMod()" title="Price Alerts" style="position:relative">🔔<span class="alert-badge" id="ALERT_COUNT" style="display:none">0</span></button>
  <button class="hdrbtn" onclick="exportChart()" title="Export PNG">⬇</button>
  <button class="hdrbtn" onclick="document.getElementById('KB_MOD').classList.add('open')" title="Shortcuts">?</button>
  <button class="hdrbtn alpbtn" id="ABTN" onclick="openMod()">🦙 ALPACA</button>
</div>

<!-- LEFT PANEL -->
<div id="LEFT">
  <div class="cprompt" id="CPROMPT">
    <div style="font-size:8px;letter-spacing:2px;color:var(--txt3);text-align:center">CONNECT ALPACA<br><span style="font-size:7px">for live trading &amp; portfolio</span></div>
    <button class="cpgo" onclick="openMod()">🦙 CONNECT</button>
  </div>
  <div id="APANEL">
    <div class="eqbox">
      <div class="eqv" id="EQV">$0.00</div>
      <div style="display:flex;gap:8px;margin-top:3px">
        <div><div class="eql">BUYING POWER</div><div style="font-size:10px;color:var(--gold);font-family:'Orbitron',sans-serif" id="BPV">$0</div></div>
        <div><div class="eql">DAY P&amp;L</div><div style="font-size:10px;font-family:'Orbitron',sans-serif" id="PNLV">$0</div></div>
      </div>
    </div>
    <div class="obox">
      <div class="orow"><span class="olbl">Symbol</span><input class="oi" id="OsYM" placeholder="BTC/USD"></div>
      <div class="orow"><span class="olbl">Qty</span><input class="oi" id="OQty" type="number" placeholder="0.001"></div>
      <div class="orow"><span class="olbl">Type</span>
        <select class="oi" id="OTYP"><option value="market">Market</option><option value="limit">Limit</option></select>
      </div>
      <div class="orow" id="LIMP_ROW" style="display:none"><span class="olbl">Price</span><input class="oi" id="OLIM" type="number" placeholder="0.00"></div>
      <div class="obtns">
        <button class="obuy" id="OBB" onclick="placeOrder('buy')">▲ BUY</button>
        <button class="osell" id="OSS" onclick="placeOrder('sell')">▼ SELL</button>
      </div>
      <div id="OST"></div>
    </div>
    <div class="risk-panel">
      <div class="sh" style="border:none;padding:0;margin-bottom:4px"><span>RISK CALCULATOR</span></div>
      <div class="risk-row">
        <div class="risk-cell"><div class="rc-lbl">Size</div><div class="rc-val ib" id="RC_SIZE">—</div></div>
        <div class="risk-cell"><div class="rc-lbl">Risk $</div><div class="rc-val ibr" id="RC_RISK">—</div></div>
        <div class="risk-cell"><div class="rc-lbl">TP</div><div class="rc-val ib" id="RC_TP">—</div></div>
        <div class="risk-cell"><div class="rc-lbl">SL</div><div class="rc-val ibr" id="RC_SL">—</div></div>
      </div>
    </div>
    <div class="sh"><span>POSITIONS</span></div>
    <div id="POSLIST" style="max-height:90px;overflow-y:auto;scrollbar-width:thin"></div>
  </div>

  <!-- Sniper Panel -->
  <div id="SNIPER_PANEL">
    <div class="sh"><span>🎯 SNIPER BOT</span><button class="sh-toggle" id="SNP_TOGGLE" onclick="toggleSniperPanel()">▲</button></div>
    <div class="sniper-inner" id="SNP_INNER">
      <div class="sniper-status">
        <div class="sniper-dot disarmed" id="SDOT"></div>
        <span class="sniper-title disarmed" id="STITLE">DISARMED</span>
        <span style="font-size:7px;color:var(--txt3)" id="STRADES">0 trades</span>
      </div>
      <div class="sniper-mode-row">
        <button class="smb on both" id="sm_both" onclick="setSniperMode('both')">BOTH</button>
        <button class="smb buy" id="sm_buy" onclick="setSniperMode('buy')">LONG</button>
        <button class="smb sell" id="sm_sell" onclick="setSniperMode('sell')">SHORT</button>
      </div>
      <div class="sniper-grid">
        <div class="sg-cell"><div class="sg-lbl">Confidence %</div><input class="sg-inp" id="SCONF" type="number" value="72" min="50" max="99"></div>
        <div class="sg-cell"><div class="sg-lbl">Risk % / trade</div><input class="sg-inp" id="SRISK" type="number" value="1" min="0.1" max="5" step="0.1"></div>
        <div class="sg-cell"><div class="sg-lbl">TP mult (ATR)</div><input class="sg-inp" id="STP" type="number" value="2.5" min="1" max="5" step="0.1"></div>
        <div class="sg-cell"><div class="sg-lbl">SL mult (ATR)</div><input class="sg-inp" id="SSL" type="number" value="1.5" min="0.5" max="4" step="0.1"></div>
      </div>
      <button class="sniper-arm-btn" id="SARMBTN" onclick="armSniper()">⚡ ARM SNIPER</button>
      <div class="sniper-log" id="SLOG"></div>
    </div>
  </div>

  <!-- AI Agents -->
  <div class="sh"><span>AI <em>AGENTS</em></span><span id="AIBADGE" style="font-size:7px;letter-spacing:1px;padding:1px 5px;border-radius:6px;border:1px solid;color:var(--txt3);border-color:var(--b1)">LOCAL</span></div>
  <div class="agent ag1 agpulse" id="AG1">
    <div class="agname ag1c"><span style="color:var(--blue)">▸</span> TECHNICAL ANALYST <span class="agconf" id="AG1C">—</span></div>
    <div class="agvote vneu" id="AG1V">—</div>
    <div class="agbar"><div class="agfill fn" id="AG1B" style="width:50%"></div></div>
    <div class="agreason" id="AG1R">Awaiting analysis...</div>
  </div>
  <div class="agent ag2 agpulse" id="AG2">
    <div class="agname"><span style="color:var(--purp)">▸</span> PATTERN ORACLE <span class="agconf" id="AG2C">—</span></div>
    <div class="agvote vneu" id="AG2V">—</div>
    <div class="agbar"><div class="agfill fn" id="AG2B" style="width:50%"></div></div>
    <div class="agreason" id="AG2R">Awaiting analysis...</div>
  </div>
  <div class="agent ag3 agpulse" id="AG3">
    <div class="agname"><span style="color:var(--gold)">▸</span> MARKET REGIME <span class="agconf" id="AG3C">—</span></div>
    <div class="agvote vneu" id="AG3V">—</div>
    <div class="agbar"><div class="agfill fn" id="AG3B" style="width:50%"></div></div>
    <div class="agreason" id="AG3R">Awaiting analysis...</div>
  </div>

  <!-- Consensus -->
  <div class="conbox" id="CONBOX">
    <div class="conlbl">CONSENSUS</div>
    <div style="display:flex;align-items:center;gap:8px">
      <div class="consig csn" id="CONSIG">NEUTRAL</div>
      <span class="qual-badge q-weak" id="QBADGE">WEAK</span>
    </div>
    <div class="conrow">
      <div class="convotes">
        <span style="color:var(--bull)">▲<span id="VBULL">0</span></span>
        <span style="color:var(--bear)">▼<span id="VBEAR">0</span></span>
        <span style="color:var(--txt3)">●<span id="VNEU">0</span></span>
      </div>
      <span style="color:var(--txt3);font-size:9px">CONF: <span style="font-family:'Orbitron',sans-serif;font-size:10px;font-weight:700" id="CONCONF">—</span></span>
    </div>
  </div>

  <!-- Watchlist -->
  <div class="sh"><span>WATCHLIST</span></div>
  <div id="WATCHLIST" style="flex-shrink:0"></div>
</div>

<!-- RIGHT PANEL -->
<div id="RIGHT">
  <div class="sidebar-scroll">
    <div id="STAT_PANEL" style="padding:7px 9px;border-bottom:1px solid var(--b0)">
      <div class="sh" style="border:none;padding:0;margin-bottom:5px"><span>SCORING BREAKDOWN</span></div>
      <div id="SYSVOTES"></div>
    </div>
    <div class="sh"><span>INDICATORS</span></div>
    <div id="IS"></div>
    <div class="sh"><span>SUPPORT / RESISTANCE</span></div>
    <div id="SR_PANEL" style="padding:5px 9px;border-bottom:1px solid var(--b0)"></div>
    <div class="sh"><span>ACTIVE PATTERNS</span></div>
    <div id="PAT_PANEL" style="padding:5px 9px;font-size:8px;line-height:2;border-bottom:1px solid var(--b0)"></div>
    <div class="sh"><span>SIGNAL HISTORY</span></div>
    <div id="HIS"></div>
  </div>
</div>

<!-- DRAW TOOLBAR -->
<div id="DRAW_TOOLBAR">
  <button class="dtool on" id="dt_none" onclick="setDrawTool('none')" title="Select/Pan">✋</button>
  <div class="dtool-sep"></div>
  <button class="dtool" id="dt_hline" onclick="setDrawTool('hline')" title="Horizontal Line">—</button>
  <button class="dtool" id="dt_tline" onclick="setDrawTool('tline')" title="Trend Line">╱</button>
  <button class="dtool" id="dt_rect" onclick="setDrawTool('rect')" title="Rectangle">▭</button>
  <div class="dtool-sep"></div>
  <button class="dtool" id="dt_clear" onclick="clearDrawings()" title="Clear All" style="color:var(--bear);font-size:11px">🗑</button>
</div>

<div id="KBHINT"><kbd>?</kbd> shortcuts &nbsp;|&nbsp; <kbd>H</kbd> heikin ashi &nbsp;|&nbsp; <kbd>D</kbd> drawing &nbsp;|&nbsp; <kbd>E</kbd> export</div>

<script>
'use strict';

// ─── STATE ───
const S={
  pair:'BTC/USD',tf:'1Hour',bars:[],haMode:false,
  showBB:false,showEMA:true,showVWAP:false,showSessions:false,
  alpKey:'',alpSec:'',alpMode:'paper',alpConn:false,
  aiKey:'',
  sniperArmed:false,sniperMode:'both',sniperTrades:0,
  drawTool:'none',drawings:[],drawStart:null,drawPreview:null,
  alerts:[],panOffset:0,
  dragStart:null,lastDragOffset:0,
  selBar:null,
  watchPrices:{},
  lastPrice:0
};

// Layout
let W=0,H=0;
const LEFT_W=252,RIGHT_W=288,HDR_H=52;
let mainTop,mainH,volTop,volH,rsiTop,rsiH,macdTop,macdH;
let mainCV,volCV,rsiCV,macdCV,drawCV;
let mctx,vctx,rctx,dctxMacd,dctxDraw;
let starCV,sctx;

let barW=8;
const MIN_BARW=2,MAX_BARW=40;
let visibleBars=120;
let rafId=null,lastRenderTime=0;
const TARGET_FPS=60;
let loadingData=false;
let agentDebounce=null,agentRunning=false;
const particles=[];
const STARS=[];

// ─── LIVE UPDATE STATE ───
let liveTimer=null;
let liveWS=null;
let livePriceOnly=false; // price-only WebSocket (Binance tick)
let refreshInterval=15; // seconds between full refreshes
let countdownVal=refreshInterval;
let countdownTimer=null;
let lastSuccessSource='';

// ─── INIT ───
window.addEventListener('DOMContentLoaded',()=>{
  buildCanvases();
  initStarfield();
  restoreKeys();
  bindEvents();
  switchPair('BTC/USD');
  updateSessionBadge();
  setInterval(updateSessionBadge,30000);
  loadWatchlist();
  requestAnimationFrame(renderLoop);
});

function buildCanvases(){
  const mk=(id)=>{const c=document.createElement('canvas');c.id=id;document.body.appendChild(c);return c;};
  mainCV=mk('MAIN_CV');volCV=mk('VOL_CV');rsiCV=mk('RSI_CV');macdCV=mk('MACD_CV');drawCV=mk('DRAW_CV');
  mctx=mainCV.getContext('2d');vctx=volCV.getContext('2d');
  rctx=rsiCV.getContext('2d');dctxMacd=macdCV.getContext('2d');dctxDraw=drawCV.getContext('2d');
  starCV=document.getElementById('STAR_CV');sctx=starCV.getContext('2d');
  // Fixed styles
  [mainCV,volCV,rsiCV,macdCV].forEach(c=>{c.style.position='fixed';c.style.display='block';c.style.cursor='crosshair';c.style.zIndex='10';});
  drawCV.style.position='fixed';drawCV.style.zIndex='15';drawCV.style.cursor='crosshair';
  starCV.style.position='fixed';starCV.style.inset='0';starCV.style.zIndex='0';starCV.style.pointerEvents='none';
  resize();
  window.addEventListener('resize',resize);
}

function resize(){
  const vw=window.innerWidth,vh=window.innerHeight;
  W=vw-LEFT_W-RIGHT_W; H=vh-HDR_H;
  mainH=Math.floor(H*0.57); volH=Math.floor(H*0.13); rsiH=Math.floor(H*0.15); macdH=H-mainH-volH-rsiH;
  mainTop=HDR_H; volTop=mainTop+mainH; rsiTop=volTop+volH; macdTop=rsiTop+rsiH;

  const setCV=(cv,top,h)=>{
    cv.style.left=LEFT_W+'px';cv.style.top=top+'px';cv.style.width=W+'px';cv.style.height=h+'px';
    cv.width=Math.floor(W*devicePixelRatio);cv.height=Math.floor(h*devicePixelRatio);
    cv.getContext('2d').scale(devicePixelRatio,devicePixelRatio);
  };
  setCV(mainCV,mainTop,mainH);setCV(volCV,volTop,volH);setCV(rsiCV,rsiTop,rsiH);setCV(macdCV,macdTop,macdH);

  // Draw canvas covers full chart area
  drawCV.style.left=LEFT_W+'px';drawCV.style.top=mainTop+'px';
  drawCV.style.width=W+'px';drawCV.style.height=H+'px';
  drawCV.width=Math.floor(W*devicePixelRatio);drawCV.height=Math.floor(H*devicePixelRatio);
  dctxDraw.scale(devicePixelRatio,devicePixelRatio);

  starCV.width=vw;starCV.height=vh;

  // Load bar
  const lb=document.getElementById('LOAD_BAR');
  if(lb){lb.style.left=LEFT_W+'px';lb.style.right=RIGHT_W+'px';}

  // Regime bar
  const rb=document.getElementById('REGIME_BAR');
  if(rb){rb.style.left=LEFT_W+'px';rb.style.top=mainTop+'px';rb.style.width=W+'px';}

  // CV labels
  posLabel('LBL_MAIN',LEFT_W+4,mainTop+4,'PRICE');
  posLabel('LBL_VOL',LEFT_W+4,volTop+3,'VOLUME');
  posLabel('LBL_RSI',LEFT_W+4,rsiTop+3,'RSI·14');
  posLabel('LBL_MACD',LEFT_W+4,macdTop+3,'MACD');

  // OHLC bar position
  const ob=document.getElementById('OHLC_BAR');
  if(ob){ob.style.left=(LEFT_W+8)+'px';ob.style.top=(mainTop+8)+'px';}

  // Draw toolbar position
  const dt=document.getElementById('DRAW_TOOLBAR');
  if(dt){dt.style.left=(LEFT_W+8)+'px';dt.style.top=(mainTop+8)+'px';}

  updateVisibleBars();
  renderDrawings();
}
function posLabel(id,x,y,txt){
  let el=document.getElementById(id);
  if(!el){el=document.createElement('div');el.id=id;el.className='cv-lbl';document.body.appendChild(el);}
  el.textContent=txt;el.style.left=x+'px';el.style.top=y+'px';
}

// ─── STARFIELD ───
function initStarfield(){
  for(let i=0;i<180;i++){
    STARS.push({x:Math.random()*2000,y:Math.random()*1200,r:Math.random()*1.4+0.2,spd:Math.random()*0.08+0.01,phase:Math.random()*Math.PI*2,tw:Math.random()*0.005+0.001});
  }
}
function drawStars(){
  if(!sctx)return;
  sctx.clearRect(0,0,starCV.width,starCV.height);
  const t=performance.now()/1000;
  STARS.forEach(s=>{
    s.x-=s.spd;if(s.x<0)s.x=starCV.width;
    const b=0.3+0.7*Math.abs(Math.sin(t*s.tw*60+s.phase));
    sctx.beginPath();sctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    sctx.fillStyle=`rgba(140,200,255,${b*0.6})`;sctx.fill();
  });
}

// ─── RENDER LOOP ───
function renderLoop(ts){
  rafId=requestAnimationFrame(renderLoop);
  if(ts-lastRenderTime<1000/TARGET_FPS)return;
  lastRenderTime=ts;
  drawStars();
  updateParticles();
  if(S.bars.length>0)drawAll();
}

// ─── EVENTS ───
function bindEvents(){
  mainCV.addEventListener('wheel',onWheel,{passive:false});
  volCV.addEventListener('wheel',onWheel,{passive:false});
  rsiCV.addEventListener('wheel',onWheel,{passive:false});
  macdCV.addEventListener('wheel',onWheel,{passive:false});

  mainCV.addEventListener('mousedown',onMD);
  mainCV.addEventListener('mousemove',onMM);
  mainCV.addEventListener('mouseup',onMU);
  mainCV.addEventListener('mouseleave',hideCrosshair);

  // Draw canvas events (when drawing mode active)
  drawCV.addEventListener('mousedown',onDrawMD);
  drawCV.addEventListener('mousemove',onDrawMM);
  drawCV.addEventListener('mouseup',onDrawMU);

  document.addEventListener('keydown',onKey);
  const otEl=document.getElementById('OTYP');
  if(otEl)otEl.addEventListener('change',e=>{
    const lr=document.getElementById('LIMP_ROW');
    if(lr)lr.style.display=e.target.value==='limit'?'flex':'none';
  });
}

function onWheel(e){
  e.preventDefault();
  const factor=e.deltaY>0?0.85:1.18;
  barW=Math.max(MIN_BARW,Math.min(MAX_BARW,barW*factor));
  updateVisibleBars();
}
function updateVisibleBars(){
  visibleBars=Math.max(10,Math.floor(W/barW));
  S.panOffset=Math.max(0,Math.min(S.panOffset,Math.max(0,S.bars.length-visibleBars)));
}
function onMD(e){
  if(S.drawTool!=='none')return;
  S.dragStart={x:e.clientX,offset:S.panOffset};
}
function onMM(e){
  if(S.drawTool!=='none')return;
  if(S.dragStart){
    const dx=e.clientX-S.dragStart.x;
    const shift=Math.round(dx/barW);
    S.panOffset=Math.max(0,Math.min(Math.max(0,S.bars.length-visibleBars),S.dragStart.offset-shift));
  }
  const rect=mainCV.getBoundingClientRect();
  showCrosshair(e.clientX-rect.left,e.clientY-rect.top);
}
function onMU(){S.dragStart=null;}
function hideCrosshair(){
  const ob=document.getElementById('OHLC_BAR');if(ob)ob.style.display='none';
}
function showCrosshair(x,y){
  if(!S.bars.length)return;
  const n=S.bars.length;
  const start=Math.max(0,n-visibleBars-S.panOffset);
  const vis=S.bars.slice(start,Math.min(n,n-S.panOffset));
  const idx=Math.min(Math.floor(x/barW),vis.length-1);
  if(idx<0||idx>=vis.length)return;
  const b=vis[idx];
  const ob=document.getElementById('OHLC_BAR');if(!ob)return;
  const bull=b.c>=b.o;const chg=((b.c-b.o)/b.o*100).toFixed(2);
  ob.style.display='flex';
  ob.innerHTML=`<span style="color:var(--txt3)">${new Date(b.t).toLocaleString()}</span><span>O:<span style="color:var(--txt)">${fp(b.o)}</span></span><span>H:<span style="color:var(--bull)">${fp(b.h)}</span></span><span>L:<span style="color:var(--bear)">${fp(b.l)}</span></span><span>C:<span style="color:${bull?'var(--bull)':'var(--bear)'}">${fp(b.c)}</span></span><span style="color:${bull?'var(--bull)':'var(--bear)'}">${bull?'+':''}${chg}%</span>`;
}

// ─── DRAW EVENTS ───
function onDrawMD(e){
  if(S.drawTool==='none')return;
  const rect=drawCV.getBoundingClientRect();
  const x=e.clientX-rect.left,y=e.clientY-rect.top;
  if(!S.drawStart){
    S.drawStart={x,y};
    S.drawPreview={x,y};
  }
}
function onDrawMM(e){
  if(S.drawTool==='none'||!S.drawStart)return;
  const rect=drawCV.getBoundingClientRect();
  S.drawPreview={x:e.clientX-rect.left,y:e.clientY-rect.top};
  renderDrawings(S.drawPreview.x,S.drawPreview.y);
}
function onDrawMU(e){
  if(S.drawTool==='none'||!S.drawStart)return;
  const rect=drawCV.getBoundingClientRect();
  const x=e.clientX-rect.left,y=e.clientY-rect.top;
  const start=S.drawStart;
  S.drawStart=null;S.drawPreview=null;
  const dx=Math.abs(x-start.x),dy=Math.abs(y-start.y);
  if(dx<3&&dy<3)return; // too small
  if(S.drawTool==='hline'){
    S.drawings.push({type:'hline',y:start.y,color:'rgba(255,204,68,.7)'});
  }else if(S.drawTool==='tline'){
    S.drawings.push({type:'tline',x1:start.x,y1:start.y,x2:x,y2:y,color:'rgba(0,204,255,.7)'});
  }else if(S.drawTool==='rect'){
    S.drawings.push({type:'rect',x1:Math.min(start.x,x),y1:Math.min(start.y,y),x2:Math.max(start.x,x),y2:Math.max(start.y,y),color:'rgba(187,68,255,.25)'});
  }
  renderDrawings();
}

function renderDrawings(curX,curY){
  dctxDraw.clearRect(0,0,drawCV.width,drawCV.height);
  S.drawings.forEach(d=>{
    dctxDraw.save();
    dctxDraw.strokeStyle=d.color||'rgba(255,204,68,.7)';
    dctxDraw.lineWidth=1.5;dctxDraw.setLineDash([5,4]);
    if(d.type==='hline'){
      dctxDraw.beginPath();dctxDraw.moveTo(0,d.y);dctxDraw.lineTo(W,d.y);dctxDraw.stroke();
      dctxDraw.fillStyle=d.color||'rgba(255,204,68,.7)';
      dctxDraw.font='7px JetBrains Mono';dctxDraw.setLineDash([]);
      // price label
      const price=yToPrice(d.y);
      if(price)dctxDraw.fillText(fp(price),W-65,d.y-2);
    }else if(d.type==='tline'){
      dctxDraw.beginPath();dctxDraw.moveTo(d.x1,d.y1);dctxDraw.lineTo(d.x2,d.y2);dctxDraw.stroke();
    }else if(d.type==='rect'){
      dctxDraw.fillStyle=d.color;dctxDraw.setLineDash([]);
      dctxDraw.fillRect(d.x1,d.y1,d.x2-d.x1,d.y2-d.y1);
      dctxDraw.strokeRect(d.x1,d.y1,d.x2-d.x1,d.y2-d.y1);
    }
    dctxDraw.restore();
  });
  // Preview
  if(S.drawStart&&curX!==undefined){
    dctxDraw.save();dctxDraw.strokeStyle='rgba(255,255,255,.35)';dctxDraw.lineWidth=1;dctxDraw.setLineDash([4,4]);
    if(S.drawTool==='hline'){
      dctxDraw.beginPath();dctxDraw.moveTo(0,S.drawStart.y);dctxDraw.lineTo(W,S.drawStart.y);dctxDraw.stroke();
    }else if(S.drawTool==='tline'){
      dctxDraw.beginPath();dctxDraw.moveTo(S.drawStart.x,S.drawStart.y);dctxDraw.lineTo(curX,curY);dctxDraw.stroke();
    }else if(S.drawTool==='rect'){
      const w=curX-S.drawStart.x,h=curY-S.drawStart.y;
      dctxDraw.fillStyle='rgba(255,255,255,.03)';dctxDraw.setLineDash([]);dctxDraw.fillRect(S.drawStart.x,S.drawStart.y,w,h);
      dctxDraw.setLineDash([4,4]);dctxDraw.strokeRect(S.drawStart.x,S.drawStart.y,w,h);
    }
    dctxDraw.restore();
  }
}
function yToPrice(y){
  if(!S.bars.length)return null;
  const n=S.bars.length;
  const start=Math.max(0,n-visibleBars-S.panOffset);
  const vis=S.bars.slice(start,Math.min(n,n-S.panOffset));
  const {lo,hi}=getRange(vis);
  return hi-(y/mainH)*(hi-lo);
}

function setDrawTool(tool){
  S.drawTool=tool;
  document.querySelectorAll('.dtool').forEach(b=>b.classList.remove('on'));
  const el=document.getElementById('dt_'+tool);if(el)el.classList.add('on');
  drawCV.className=tool==='none'?'':'drawing';
  // Pointer events - let draw canvas intercept when drawing
  drawCV.style.pointerEvents=tool==='none'?'none':'auto';
}
function clearDrawings(){S.drawings=[];renderDrawings();toast('Drawings cleared','info');}

// ─── KEYBOARD ───
function onKey(e){
  if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))return;
  switch(e.key.toUpperCase()){
    case'E':exportChart();break;case'R':fetchData();break;
    case'B':toggleBB();break;case'V':toggleVWAP();break;case'H':toggleHA();break;
    case'S':armSniper();break;case'A':openAlertMod();break;case'T':toggleTheme();break;
    case'D':setDrawTool(S.drawTool==='none'?'hline':'none');break;
    case'X':clearDrawings();break;
    case'?':document.getElementById('KB_MOD').classList.add('open');break;
    case'ARROWLEFT':S.panOffset=Math.max(0,S.panOffset-Math.max(1,Math.floor(visibleBars*.1)));break;
    case'ARROWRIGHT':S.panOffset=Math.min(Math.max(0,S.bars.length-visibleBars),S.panOffset+Math.max(1,Math.floor(visibleBars*.1)));break;
    case'+':barW=Math.min(MAX_BARW,barW*1.2);updateVisibleBars();break;
    case'-':barW=Math.max(MIN_BARW,barW*.8);updateVisibleBars();break;
    case'ESCAPE':
      ['MOD','ALERT_MOD','KB_MOD'].forEach(id=>document.getElementById(id)?.classList.remove('open'));
      if(S.drawTool!=='none')setDrawTool('none');
      break;
  }
}

// ─── PAIR / TF ───
function switchPair(p){
  S.pair=p;S.panOffset=0;
  document.querySelectorAll('.pb').forEach(b=>b.classList.toggle('on',b.textContent===p.split('/')[0]||b.textContent===p));
  const osym=document.getElementById('OsYM');if(osym)osym.value=p;
  stopLive();fetchData();
}
function switchTF(tf){
  S.tf=tf;S.panOffset=0;
  document.querySelectorAll('.tb').forEach(b=>b.classList.toggle('on',b.textContent===tfLabel(tf)));
  stopLive();fetchData();
}
function tfLabel(tf){return{'1Min':'1m','5Min':'5m','15Min':'15m','1Hour':'1h','4Hour':'4h','1Day':'1D'}[tf]||tf;}

// ─── LIVE UPDATE ENGINE ───
function startLive(){
  stopLive();
  // Try WebSocket for crypto pairs first
  if(S.pair.includes('/')){startBinanceWS();}
  // Always start polling as backup
  startPolling();
  startCountdown();
}
function stopLive(){
  if(liveWS){try{liveWS.close();}catch{}liveWS=null;}
  if(liveTimer){clearInterval(liveTimer);liveTimer=null;}
  if(countdownTimer){clearInterval(countdownTimer);countdownTimer=null;}
}

function startBinanceWS(){
  const sym=toBinanceSym(S.pair);
  if(!sym)return;
  try{
    const tf=toBinanceInterval(S.tf);
    const wsUrl=`wss://stream.binance.us:9443/ws/${sym.toLowerCase()}@kline_${tf}`;
    liveWS=new WebSocket(wsUrl);
    liveWS.onopen=()=>{setLiveBadge('live','WS LIVE');};
    liveWS.onmessage=(evt)=>{
      try{
        const d=JSON.parse(evt.data);
        if(!d.k)return;
        const k=d.k;
        const newBar={t:k.t,o:+k.o,h:+k.h,l:+k.l,c:+k.c,v:+k.v};
        // Update last bar or append
        if(S.bars.length>0){
          const last=S.bars[S.bars.length-1];
          if(last.t===newBar.t){S.bars[S.bars.length-1]=newBar;}
          else if(newBar.t>last.t){S.bars.push(newBar);}
        }
        updateLivePrice(newBar.c,k.x);// k.x = candle closed
      }catch{}
    };
    liveWS.onerror=()=>{liveWS=null;setLiveBadge('stale','WS ERR');};
    liveWS.onclose=()=>{liveWS=null;};
  }catch{liveWS=null;}
}

function startPolling(){
  // Refresh interval based on timeframe
  const tfMs={'1Min':15,'5Min':30,'15Min':60,'1Hour':90,'4Hour':300,'1Day':600};
  refreshInterval=tfMs[S.tf]||60;
  liveTimer=setInterval(()=>{
    silentRefresh();
  },refreshInterval*1000);
}

function startCountdown(){
  countdownVal=refreshInterval;
  if(countdownTimer)clearInterval(countdownTimer);
  countdownTimer=setInterval(()=>{
    countdownVal--;
    if(countdownVal<0)countdownVal=refreshInterval;
    updateCountdownUI(countdownVal,refreshInterval);
  },1000);
}

function updateCountdownUI(val,max){
  const txt=document.getElementById('CTXT');
  const ring=document.getElementById('CRING');
  if(txt)txt.textContent=val+'s';
  if(ring){
    const pct=val/max;
    const circ=31.4;
    ring.style.strokeDashoffset=circ*(1-pct);
    ring.style.stroke=pct>.5?'var(--blue)':pct>.25?'var(--gold)':'var(--bear)';
  }
}

async function silentRefresh(){
  if(loadingData)return;
  const newBars=await fetchBarsQuiet();
  if(!newBars||!newBars.length)return;
  // Merge: keep drawings, update bars
  const lastT=S.bars.length?S.bars[S.bars.length-1].t:0;
  const newOnes=newBars.filter(b=>b.t>lastT);
  if(newOnes.length){
    S.bars.push(...newOnes);
  }
  // Update last bar (live candle)
  if(newBars.length&&S.bars.length){
    S.bars[S.bars.length-1]=newBars[newBars.length-1];
  }
  updateLivePrice(S.bars[S.bars.length-1].c,false);
  updateHeader();
  runAnalysis();
  // Reset countdown
  countdownVal=refreshInterval;
}

function updateLivePrice(price,candleClosed){
  const prev=S.lastPrice;
  const el=document.getElementById('HP');
  if(el&&prev&&price!==prev){
    el.classList.remove('flash-up','flash-dn');
    void el.offsetWidth;
    el.classList.add(price>prev?'flash-up':'flash-dn');
  }
  S.lastPrice=price;
  updateHeader();
  if(candleClosed)runAnalysis();
  checkAlerts(price);
}

function setLiveBadge(state,msg){
  const el=document.getElementById('LIVE_BADGE');
  if(!el)return;
  el.className=state;
  el.textContent='● '+msg;
}

// ─── DATA FETCH ───
async function fetchData(){
  if(loadingData)return;
  loadingData=true;setLoading(true);
  toast('Fetching '+S.pair+' '+S.tf+'...','info');
  S.bars=[];

  let data=null;
  const sources=[fetchAlpaca,fetchBinanceUS,fetchCoinbase,fetchKraken,fetchBinanceProxy,fetchYahoo,fetchCoinGecko];
  for(const src of sources){
    try{data=await src();if(data&&data.length>=10)break;}catch{}
  }
  if(!data||!data.length)data=syntheticData();

  S.bars=data;
  S.panOffset=0;
  updateVisibleBars();
  updateHeader();
  runAnalysis();
  loadingData=false;setLoading(false);
  document.getElementById('LDOT').className='livdot live';
  setLiveBadge('live','LIVE · '+lastSuccessSource);
  startLive();
}

async function fetchBarsQuiet(){
  const sources=[fetchBinanceUS,fetchCoinbase,fetchKraken,fetchBinanceProxy,fetchYahoo];
  for(const src of sources){
    try{const d=await src();if(d&&d.length>=10)return d;}catch{}
  }
  return null;
}

function setLoading(on){
  const lb=document.getElementById('LOAD_BAR'),ldot=document.getElementById('LDOT');
  if(ldot)ldot.className='livdot '+(on?'loading':'live');
  if(!lb)return;
  if(on){lb.style.width='0';setTimeout(()=>lb.style.width='60%',50);setTimeout(()=>lb.style.width='90%',600);}
  else{lb.style.width='100%';setTimeout(()=>lb.style.width='0',300);}
}

const TF_MINS={'1Min':1,'5Min':5,'15Min':15,'1Hour':60,'4Hour':240,'1Day':1440};

async function fetchAlpaca(){
  if(!S.alpConn)return null;
  try{
    const base='https://data.alpaca.markets/v2';
    const sym=S.pair.replace('/','');const isCrypto=S.pair.includes('/');
    const url=isCrypto
      ?`${base}/crypto/us/bars?symbols=${S.pair}&timeframe=${alpTF(S.tf)}&limit=500&sort=asc`
      :`${base}/stocks/${sym}/bars?timeframe=${alpTF(S.tf)}&limit=500&adjustment=raw&feed=iex&sort=asc`;
    const r=await fetch(url,{headers:{'APCA-API-KEY-ID':S.alpKey,'APCA-API-SECRET-KEY':S.alpSec},signal:AbortSignal.timeout(5000)});
    if(!r.ok)return null;
    const j=await r.json();
    const arr=isCrypto?(j.bars&&j.bars[S.pair]):j.bars;
    if(!arr||!arr.length)return null;
    document.getElementById('DATASRC').textContent='Alpaca';lastSuccessSource='Alpaca';
    return arr.map(b=>({t:new Date(b.t).getTime(),o:+b.o,h:+b.h,l:+b.l,c:+b.c,v:+b.v}));
  }catch{return null;}
}
function alpTF(tf){return{'1Min':'1Min','5Min':'5Min','15Min':'15Min','1Hour':'1Hour','4Hour':'4Hour','1Day':'1Day'}[tf]||'1Hour';}

async function fetchBinanceUS(){
  try{
    const sym=toBinanceSym(S.pair);if(!sym)return null;
    const r=await fetch(`https://api.binance.us/api/v3/klines?symbol=${sym}&interval=${toBinanceInterval(S.tf)}&limit=500`,{signal:AbortSignal.timeout(5000)});
    if(!r.ok)return null;
    const j=await r.json();if(!j.length)return null;
    document.getElementById('DATASRC').textContent='Binance.US';lastSuccessSource='Binance.US';
    return j.map(b=>({t:b[0],o:+b[1],h:+b[2],l:+b[3],c:+b[4],v:+b[5]}));
  }catch{return null;}
}
async function fetchCoinbase(){
  try{
    const sym=toCoinbaseSym(S.pair);if(!sym)return null;
    const gran=toCoinbaseGran(S.tf);
    const start=new Date(Date.now()-gran*300*1000).toISOString();
    const end=new Date().toISOString();
    const r=await fetch(`https://api.exchange.coinbase.com/products/${sym}/candles?granularity=${gran}&start=${start}&end=${end}`,{signal:AbortSignal.timeout(5000)});
    if(!r.ok)return null;
    const j=await r.json();if(!j.length)return null;
    document.getElementById('DATASRC').textContent='Coinbase';lastSuccessSource='Coinbase';
    return j.reverse().map(b=>({t:b[0]*1000,o:+b[3],h:+b[2],l:+b[1],c:+b[4],v:+b[5]}));
  }catch{return null;}
}
async function fetchKraken(){
  try{
    const sym=toKrakenSym(S.pair);if(!sym)return null;
    const r=await fetch(`https://api.kraken.com/0/public/OHLC?pair=${sym}&interval=${toKrakenInterval(S.tf)}`,{signal:AbortSignal.timeout(5000)});
    if(!r.ok)return null;
    const j=await r.json();if(j.error&&j.error.length)return null;
    const key=Object.keys(j.result).find(k=>k!=='last');
    const arr=j.result[key];if(!arr||!arr.length)return null;
    document.getElementById('DATASRC').textContent='Kraken';lastSuccessSource='Kraken';
    return arr.map(b=>({t:b[0]*1000,o:+b[1],h:+b[2],l:+b[3],c:+b[4],v:+b[6]}));
  }catch{return null;}
}
async function fetchBinanceProxy(){
  const proxies=['https://api.allorigins.win/raw?url=','https://corsproxy.io/?'];
  const sym=toBinanceSym(S.pair);if(!sym)return null;
  for(const px of proxies){
    try{
      const url=encodeURIComponent(`https://api.binance.com/api/v3/klines?symbol=${sym}&interval=${toBinanceInterval(S.tf)}&limit=500`);
      const r=await fetch(px+url,{signal:AbortSignal.timeout(7000)});
      if(!r.ok)continue;
      const j=await r.json();if(!j.length)continue;
      document.getElementById('DATASRC').textContent='Binance';lastSuccessSource='Binance';
      return j.map(b=>({t:b[0],o:+b[1],h:+b[2],l:+b[3],c:+b[4],v:+b[5]}));
    }catch{}
  }
  return null;
}
async function fetchYahoo(){
  const sym=toYahooSym(S.pair);if(!sym)return null;
  const intv=toYahooInterval(S.tf);const range=toYahooRange(S.tf);
  const proxies=['https://api.allorigins.win/raw?url=','https://corsproxy.io/?'];
  for(const px of proxies){
    try{
      const url=`https://query1.finance.yahoo.com/v8/finance/chart/${sym}?interval=${intv}&range=${range}`;
      const r=await fetch(px+encodeURIComponent(url),{signal:AbortSignal.timeout(9000)});
      if(!r.ok)continue;
      const j=await r.json();
      const res=j.chart?.result?.[0];if(!res)continue;
      const ts=res.timestamp,q=res.indicators.quote[0];if(!ts?.length)continue;
      let bars=ts.map((t,i)=>({t:t*1000,o:q.open[i],h:q.high[i],l:q.low[i],c:q.close[i],v:q.volume[i]||0})).filter(b=>b.o&&b.c);
      if(S.tf==='4Hour')bars=resampleBars(bars,4*60*60*1000);
      document.getElementById('DATASRC').textContent='Yahoo';lastSuccessSource='Yahoo';
      return bars;
    }catch{}
  }
  return null;
}
async function fetchCoinGecko(){
  try{
    const cgId=toCoinGeckoId(S.pair);if(!cgId)return null;
    const days=S.tf==='1Day'?365:S.tf==='4Hour'?90:14;
    const r=await fetch(`https://api.coingecko.com/api/v3/coins/${cgId}/ohlc?vs_currency=usd&days=${days}`,{signal:AbortSignal.timeout(10000)});
    if(!r.ok)return null;
    const j=await r.json();if(!j.length)return null;
    let bars=j.map(b=>({t:b[0],o:+b[1],h:+b[2],l:+b[3],c:+b[4],v:0}));
    if(S.tf==='4Hour')bars=resampleBars(bars,4*60*60*1000);
    document.getElementById('DATASRC').textContent='CoinGecko';lastSuccessSource='CoinGecko';
    return bars;
  }catch{return null;}
}
function syntheticData(){
  document.getElementById('DATASRC').textContent='Demo';lastSuccessSource='Demo';
  const basePrice={'BTC/USD':65000,'ETH/USD':3200,'SOL/USD':140,'DOGE/USD':0.12,'AAPL':185,'NVDA':875,'SPY':510,'QQQ':440}[S.pair]||100;
  const bars=[];const tfMs=TF_MINS[S.tf]*60000;let p=basePrice,now=Date.now();
  for(let i=299;i>=0;i--){
    const t=now-i*tfMs;const rng=(Math.random()-0.5)*0.028;
    const o=p,c=p*(1+rng);
    const h=Math.max(o,c)*(1+Math.random()*0.008),l=Math.min(o,c)*(1-Math.random()*0.008);
    bars.push({t,o,h,l,c,v:Math.random()*2e6+5e4});p=c;
  }
  return bars;
}
function resampleBars(bars,ms){
  const b={};
  bars.forEach(bar=>{const k=Math.floor(bar.t/ms)*ms;if(!b[k])b[k]={t:k,o:bar.o,h:bar.h,l:bar.l,c:bar.c,v:bar.v||0};
  else{b[k].h=Math.max(b[k].h,bar.h);b[k].l=Math.min(b[k].l,bar.l);b[k].c=bar.c;b[k].v+=bar.v||0;}});
  return Object.values(b).sort((a,b)=>a.t-b.t);
}

// Symbol mappers
function toBinanceSym(p){return{'BTC/USD':'BTCUSDT','ETH/USD':'ETHUSDT','SOL/USD':'SOLUSDT','DOGE/USD':'DOGEUSDT'}[p]||null;}
function toBinanceInterval(tf){return{'1Min':'1m','5Min':'5m','15Min':'15m','1Hour':'1h','4Hour':'4h','1Day':'1d'}[tf]||'1h';}
function toCoinbaseSym(p){return{'BTC/USD':'BTC-USD','ETH/USD':'ETH-USD','SOL/USD':'SOL-USD','DOGE/USD':'DOGE-USD'}[p]||null;}
function toCoinbaseGran(tf){return{'1Min':60,'5Min':300,'15Min':900,'1Hour':3600,'4Hour':21600,'1Day':86400}[tf]||3600;}
function toKrakenSym(p){return{'BTC/USD':'XBTUSD','ETH/USD':'ETHUSD','SOL/USD':'SOLUSD','DOGE/USD':'XDGUSD'}[p]||null;}
function toKrakenInterval(tf){return{'1Min':1,'5Min':5,'15Min':15,'1Hour':60,'4Hour':240,'1Day':1440}[tf]||60;}
function toYahooSym(p){return{'BTC/USD':'BTC-USD','ETH/USD':'ETH-USD','SOL/USD':'SOL-USD','DOGE/USD':'DOGE-USD','AAPL':'AAPL','NVDA':'NVDA','SPY':'SPY','QQQ':'QQQ'}[p]||null;}
function toYahooInterval(tf){return{'1Min':'1m','5Min':'5m','15Min':'15m','1Hour':'1h','4Hour':'1h','1Day':'1d'}[tf]||'1h';}
function toYahooRange(tf){return{'1Min':'1d','5Min':'5d','15Min':'60d','1Hour':'60d','4Hour':'60d','1Day':'2y'}[tf]||'60d';}
function toCoinGeckoId(p){return{'BTC/USD':'bitcoin','ETH/USD':'ethereum','SOL/USD':'solana','DOGE/USD':'dogecoin'}[p]||null;}

// ─── HEIKIN ASHI ───
function toHA(bars){
  const ha=[];
  bars.forEach((b,i)=>{
    const c=(b.o+b.h+b.l+b.c)/4,o=i===0?(b.o+b.c)/2:(ha[i-1].o+ha[i-1].c)/2;
    ha.push({t:b.t,o,h:Math.max(b.h,o,c),l:Math.min(b.l,o,c),c,v:b.v});
  });
  return ha;
}

// ─── INDICATORS ───
function calcEMA(data,p){const k=2/(p+1);let e=data[0];return data.map((v,i)=>i===0?e:(e=v*k+e*(1-k)));}
function calcRSI(closes,p=14){
  const r=new Array(closes.length).fill(null);if(closes.length<p+1)return r;
  let ag=0,al=0;
  for(let i=1;i<=p;i++){const d=closes[i]-closes[i-1];d>0?ag+=d:al-=d;}
  ag/=p;al/=p;
  for(let i=p+1;i<closes.length;i++){const d=closes[i]-closes[i-1];const g=d>0?d:0,l=d<0?-d:0;ag=(ag*(p-1)+g)/p;al=(al*(p-1)+l)/p;r[i]=al===0?100:100-100/(1+ag/al);}
  return r;
}
function calcMACD(closes){
  const e12=calcEMA(closes,12),e26=calcEMA(closes,26);
  const line=closes.map((_,i)=>e12[i]-e26[i]);
  const sig=calcEMA(line.slice(26),9);
  return{line,sig:sig.map((v,i)=>({v,i:i+26})),hist:sig.map((v,i)=>({v:line[i+26]-v,i:i+26}))};
}
function calcBB(closes,p=20,m=2){
  return closes.map((_,i)=>{
    if(i<p)return null;
    const sl=closes.slice(i-p+1,i+1),mu=sl.reduce((a,b)=>a+b,0)/p;
    const sd=Math.sqrt(sl.reduce((a,b)=>a+(b-mu)**2,0)/p);
    return{m:mu,u:mu+m*sd,l:mu-m*sd};
  });
}
function calcATR(bars,p=14){
  const tr=bars.map((b,i)=>i===0?b.h-b.l:Math.max(b.h-b.l,Math.abs(b.h-bars[i-1].c),Math.abs(b.l-bars[i-1].c)));
  return tr.map((_,i)=>{if(i<p)return null;return tr.slice(i-p+1,i+1).reduce((a,b)=>a+b,0)/p;});
}
function calcVWAP(bars){let cv=0,v=0;return bars.map(b=>{const tp=(b.h+b.l+b.c)/3;cv+=tp*(b.v||1);v+=(b.v||1);return cv/v;});}
function calcStoch(bars,k=14,d=3){
  const sk=bars.map((_,i)=>{if(i<k-1)return null;const sl=bars.slice(i-k+1,i+1);const hi=Math.max(...sl.map(b=>b.h)),lo=Math.min(...sl.map(b=>b.l));return hi===lo?50:(bars[i].c-lo)/(hi-lo)*100;});
  const sd=sk.map((_,i)=>{if(i<k+d-2)return null;const sl=sk.slice(i-d+1,i+1).filter(v=>v!==null);return sl.length===d?sl.reduce((a,b)=>a+b,0)/d:null;});
  return{k:sk,d:sd};
}
function calcADX(bars,p=14){
  if(bars.length<p+1)return{adx:[],pdi:[],mdi:[]};
  const tr=[],pdm=[],mdm=[];
  bars.forEach((b,i)=>{if(i===0){tr.push(b.h-b.l);pdm.push(0);mdm.push(0);return;}
    const prev=bars[i-1];tr.push(Math.max(b.h-b.l,Math.abs(b.h-prev.c),Math.abs(b.l-prev.c)));
    pdm.push(b.h-prev.h>prev.l-b.l&&b.h-prev.h>0?b.h-prev.h:0);
    mdm.push(prev.l-b.l>b.h-prev.h&&prev.l-b.l>0?prev.l-b.l:0);});
  const sm=arr=>{let s=arr.slice(0,p).reduce((a,b)=>a+b,0);return arr.map((_,i)=>{if(i<p)return null;if(i===p)return s;s=s-s/p+arr[i];return s;});};
  const sTR=sm(tr),sPDM=sm(pdm),sMDM=sm(mdm);
  const pdi=sTR.map((t,i)=>t?100*sPDM[i]/t:0);const mdi=sTR.map((t,i)=>t?100*sMDM[i]/t:0);
  const dx=pdi.map((p2,i)=>{const s=p2+mdi[i];return s?Math.abs(p2-mdi[i])/s*100:0;});
  const adx=dx.map((_,i)=>{if(i<p*2)return null;const sl=dx.slice(i-p+1,i+1).filter(v=>v!==null);return sl.reduce((a,b)=>a+b,0)/sl.length;});
  return{adx,pdi,mdi};
}
function calcMFI(bars,p=14){
  return bars.map((_,i)=>{if(i<p)return null;let pf=0,nf=0;
    for(let j=i-p+1;j<=i;j++){const tp=(bars[j].h+bars[j].l+bars[j].c)/3,mf=tp*(bars[j].v||1);
      if(j>0&&tp>(bars[j-1].h+bars[j-1].l+bars[j-1].c)/3)pf+=mf;else nf+=mf;}return nf===0?100:100-100/(1+pf/nf);});
}
function calcOBV(bars){let obv=0;return bars.map((b,i)=>{if(i>0){const d=b.c-bars[i-1].c;obv+=d>0?b.v:d<0?-b.v:0;}return obv;});}
function calcPivots(bars){if(bars.length<2)return{pp:0,r1:0,s1:0};const p=bars[bars.length-2];const pp=(p.h+p.l+p.c)/3;return{pp,r1:2*pp-p.l,r2:pp+(p.h-p.l),s1:2*pp-p.h,s2:pp-(p.h-p.l)};}
function calcFib(bars){const n=bars.length,sl=bars.slice(Math.max(0,n-100));const hi=Math.max(...sl.map(b=>b.h)),lo=Math.min(...sl.map(b=>b.l));const r=hi-lo;return{hi,lo,f236:hi-r*.236,f382:hi-r*.382,f500:hi-r*.5,f618:hi-r*.618};}
function calcCCI(bars,p=20){return bars.map((_,i)=>{if(i<p-1)return null;const sl=bars.slice(i-p+1,i+1),tp=sl.map(b=>(b.h+b.l+b.c)/3),m=tp.reduce((a,b)=>a+b,0)/p,md=tp.reduce((a,b)=>a+Math.abs(b-m),0)/p;return md===0?0:(tp[p-1]-m)/(0.015*md);});}
function calcWR(bars,p=14){return bars.map((_,i)=>{if(i<p-1)return null;const sl=bars.slice(i-p+1,i+1);const hi=Math.max(...sl.map(b=>b.h)),lo=Math.min(...sl.map(b=>b.l));return hi===lo?-50:-((hi-bars[i].c)/(hi-lo))*100;});}
function calcPOC(bars){const sl=bars.slice(Math.max(0,bars.length-100));const lo=Math.min(...sl.map(b=>b.l)),hi=Math.max(...sl.map(b=>b.h));const bk=new Array(50).fill(0),bs=(hi-lo)/50;sl.forEach(b=>{const idx=Math.min(49,Math.floor((b.c-lo)/bs));bk[idx]+=b.v||1;});return lo+bk.indexOf(Math.max(...bk))*bs+bs/2;}
function findSRLevels(bars,lb=80){
  const sl=bars.slice(Math.max(0,bars.length-lb));const lv=[],tol=sl.reduce((s,b)=>s+(b.h-b.l),0)/sl.length*0.5;
  sl.forEach((b,i)=>{if(i<2||i>sl.length-3)return;
    const isH=b.h>sl[i-1].h&&b.h>sl[i-2].h&&b.h>sl[i+1].h&&b.h>sl[i+2].h;
    const isL=b.l<sl[i-1].l&&b.l<sl[i-2].l&&b.l<sl[i+1].l&&b.l<sl[i+2].l;
    if(isH)lv.push({price:b.h,type:'R',strength:0});if(isL)lv.push({price:b.l,type:'S',strength:0});});
  const mg=[];lv.forEach(l=>{const ex=mg.find(m=>Math.abs(m.price-l.price)<tol);if(ex){ex.strength++;ex.price=(ex.price+l.price)/2;}else mg.push({...l,strength:1});});
  return mg.sort((a,b)=>b.strength-a.strength).slice(0,10);
}

// ─── PATTERNS ───
function detectPatterns(bars){
  const n=bars.length,pats=[];if(n<5)return pats;
  const b=bars[n-1],b1=bars[n-2],b2=bars[n-3];
  const atr=bars.slice(-14).reduce((s,x,i,a)=>s+(i>0?Math.max(x.h-x.l,Math.abs(x.h-a[i-1].c),Math.abs(x.l-a[i-1].c)):x.h-x.l),0)/14;
  const body=x=>Math.abs(x.c-x.o),isBull=x=>x.c>x.o;
  const uSh=x=>isBull(x)?x.h-x.c:x.h-x.o,lSh=x=>isBull(x)?x.o-x.l:x.c-x.l;
  const add=(name,dir,str)=>pats.push({name,dir,strength:str});
  if(body(b)>.01*b.c&&uSh(b)>body(b)*2&&lSh(b)<body(b)*.4)add(isBull(b)?'Bullish Pin Bar':'Bearish Pin Bar',isBull(b)?'bull':'bear',3);
  if(body(b)<atr*.1&&uSh(b)>atr*.3&&lSh(b)>atr*.3)add('Doji','neutral',2);
  if(lSh(b)>body(b)*2&&uSh(b)<body(b)*.4&&isBull(b))add('Hammer','bull',3);
  if(uSh(b)>body(b)*2&&lSh(b)<body(b)*.4&&!isBull(b))add('Shooting Star','bear',3);
  if(body(b)>atr*1.2&&lSh(b)<atr*.05&&uSh(b)<atr*.05)add(isBull(b)?'Bull Marubozu':'Bear Marubozu',isBull(b)?'bull':'bear',2);
  if(isBull(b)&&!isBull(b1)&&b.c>b1.o&&b.o<b1.c&&body(b)>body(b1)*.8)add('Bullish Engulfing','bull',4);
  if(!isBull(b)&&isBull(b1)&&b.c<b1.o&&b.o>b1.c&&body(b)>body(b1)*.8)add('Bearish Engulfing','bear',4);
  if(isBull(b)&&!isBull(b1)&&body(b)<body(b1)*.5)add('Bullish Harami','bull',2);
  if(!isBull(b)&&isBull(b1)&&body(b)<body(b1)*.5)add('Bearish Harami','bear',2);
  if(!isBull(b2)&&body(b2)>atr*.8&&body(b1)<atr*.3&&isBull(b)&&b.c>b2.o)add('Morning Star','bull',4);
  if(isBull(b2)&&body(b2)>atr*.8&&body(b1)<atr*.3&&!isBull(b)&&b.c<b2.o)add('Evening Star','bear',4);
  if(isBull(b)&&isBull(b1)&&isBull(b2)&&b.c>b1.c&&b1.c>b2.c)add('Three White Soldiers','bull',4);
  if(!isBull(b)&&!isBull(b1)&&!isBull(b2)&&b.c<b1.c&&b1.c<b2.c)add('Three Black Crows','bear',4);
  const rHi=bars.slice(-20).map(b=>b.h);const maxH=Math.max(...rHi);if(rHi.filter(h=>Math.abs(h-maxH)<atr).length>=2&&b.c<bars[n-3].l)add('Double Top','bear',5);
  const rLo=bars.slice(-20).map(b=>b.l);const minL=Math.min(...rLo);if(rLo.filter(l=>Math.abs(l-minL)<atr).length>=2&&b.c>bars[n-3].h)add('Double Bottom','bull',5);
  if(b.h<b1.h&&b.l>b1.l)add('Inside Bar','neutral',2);
  return pats.sort((a,b2)=>b2.strength-a.strength);
}

// ─── SCORING ENGINE ───
function runAnalysis(){
  if(!S.bars||S.bars.length<30)return;
  const bars=S.bars,closes=bars.map(b=>b.c),n=closes.length,last=closes[n-1];
  const atrArr=calcATR(bars);const atr=atrArr[n-1]||last*.02;
  const rsi=calcRSI(closes)[n-1]||50;
  const macdD=calcMACD(closes);const macdHist=macdD.hist.length?macdD.hist[macdD.hist.length-1].v:0;const macdLine=macdD.line[n-1]||0;
  const stoch=calcStoch(bars);const stK=stoch.k[n-1]||50,stD=stoch.d[n-1]||50;
  const adxD=calcADX(bars);const adx=adxD.adx[n-1]||20,pdi=adxD.pdi[n-1]||20,mdi=adxD.mdi[n-1]||20;
  const mfi=calcMFI(bars)[n-1]||50;const cci=calcCCI(bars)[n-1]||0;const wr=calcWR(bars)[n-1]||-50;
  const obv=calcOBV(bars);const obvSlope=obv.length>5?(obv[n-1]-obv[n-6])/5:0;
  const vwap=calcVWAP(bars)[n-1];const bb=calcBB(closes);const bbLast=bb[n-1];
  const ema8=calcEMA(closes,8),ema21=calcEMA(closes,21),ema55=calcEMA(closes,55),ema200=calcEMA(closes,200);
  const poc=calcPOC(bars);const pats=detectPatterns(bars);const sr=findSRLevels(bars);
  const recentBars=bars.slice(-20);
  const bp=recentBars.filter(b=>b.c>b.o).reduce((s,b)=>s+(b.c-b.o)/(b.h-b.l||1)*.5+.5,0);
  const sp=recentBars.filter(b=>b.c<=b.o).reduce((s,b)=>s+(b.o-b.c)/(b.h-b.l||1)*.5+.5,0);
  const pressureRatio=bp/(bp+sp+.001);
  const mtfBull=last>ema21[n-1]&&last>ema55[n-1];const mtfBear=last<ema21[n-1]&&last<ema55[n-1];
  const fib=calcFib(bars);

  const votes=[];const addV=(sys,dir,wt=1)=>votes.push({sys,dir,wt});
  let osc=0;
  if(rsi<35)osc+=2;else if(rsi<45)osc++;else if(rsi>65)osc-=2;else if(rsi>55)osc--;
  if(stK<25&&stK>stD)osc++;else if(stK>75&&stK<stD)osc--;
  if(cci<-80)osc++;else if(cci>80)osc--;
  if(wr<-80)osc++;else if(wr>-20)osc--;
  if(osc>1)addV(1,'BUY');else if(osc<-1)addV(1,'SELL');else addV(1,'NEUTRAL');

  let trn=0;
  if(ema8[n-1]>ema21[n-1]&&ema21[n-1]>ema55[n-1])trn+=3;else if(ema8[n-1]<ema21[n-1]&&ema21[n-1]<ema55[n-1])trn-=3;
  if(macdLine>0&&macdHist>0)trn+=2;else if(macdLine<0&&macdHist<0)trn-=2;
  if(mtfBull)trn++;else if(mtfBear)trn--;
  if(trn>2)addV(2,'BUY',1.5);else if(trn<-2)addV(2,'SELL',1.5);else addV(2,'NEUTRAL',1.5);

  let vol=0;
  if(mfi<30)vol+=2;else if(mfi>70)vol-=2;
  if(obvSlope>0&&last>ema21[n-1])vol++;else if(obvSlope<0&&last<ema21[n-1])vol--;
  if(pressureRatio>.6)vol++;else if(pressureRatio<.4)vol--;
  if(vol>0)addV(3,'BUY');else if(vol<0)addV(3,'SELL');else addV(3,'NEUTRAL');

  let str=0;
  if(bbLast){if(last<bbLast.l)str+=2;else if(last>bbLast.u)str-=2;}
  if(vwap&&last>vwap)str++;else if(vwap&&last<vwap)str--;
  if(last>poc)str++;else str--;
  const nearS=sr.find(l=>l.type==='S'&&Math.abs(l.price-last)<atr*1.5);
  const nearR=sr.find(l=>l.type==='R'&&Math.abs(l.price-last)<atr*1.5);
  if(nearS)str++;if(nearR)str--;
  if(str>1)addV(4,'BUY');else if(str<-1)addV(4,'SELL');else addV(4,'NEUTRAL');

  const bullPats=pats.filter(p=>p.dir==='bull'),bearPats=pats.filter(p=>p.dir==='bear');
  const patScore=bullPats.reduce((s,p)=>s+p.strength,0)-bearPats.reduce((s,p)=>s+p.strength,0);
  if(patScore>3)addV(5,'BUY');else if(patScore<-3)addV(5,'SELL');else addV(5,'NEUTRAL');

  const swHigh=bars.slice(-20).reduce((m,b)=>Math.max(m,b.h),0);
  const swLow=bars.slice(-20).reduce((m,b)=>Math.min(m,b.l),Infinity);
  if(last>swHigh*.998&&bars[n-2].c<=bars[n-2].h)addV(6,'BUY');
  else if(last<swLow*1.002&&bars[n-2].c>=bars[n-2].l)addV(6,'SELL');
  else addV(6,'NEUTRAL');

  if(pressureRatio>.62)addV(7,'BUY');else if(pressureRatio<.38)addV(7,'SELL');else addV(7,'NEUTRAL');

  let regime='ranging';
  if(adx>25&&pdi>mdi)regime='bull_trend';else if(adx>25&&mdi>pdi)regime='bear_trend';else if(adx>20)regime='mixed';
  if(regime==='bull_trend')addV(8,'BUY',1.5);else if(regime==='bear_trend')addV(8,'SELL',1.5);else addV(8,'NEUTRAL',1.5);

  if(adx>25&&pdi>mdi+5)addV(9,'BUY');else if(adx>25&&mdi>pdi+5)addV(9,'SELL');else addV(9,'NEUTRAL');

  const obvSlp5=obv.length>5?(obv[n-1]-obv[n-6])/(Math.abs(obv[n-6])||1):0;
  if(obvSlp5>0.02&&last>ema21[n-1])addV(10,'BUY');else if(obvSlp5<-0.02&&last<ema21[n-1])addV(10,'SELL');else addV(10,'NEUTRAL');

  let wBull=0,wBear=0,wNeu=0;
  votes.forEach(v=>{if(v.dir==='BUY')wBull+=v.wt;else if(v.dir==='SELL')wBear+=v.wt;else wNeu+=v.wt;});
  const totalW=wBull+wBear+wNeu;
  const conf=Math.round(Math.max(wBull,wBear)/totalW*100);
  let signal='NEUTRAL',quality='WEAK';
  if(wBull>wBear+2){signal='BUY';quality=conf>=80?'ELITE':conf>=65?'STRONG':'MODERATE';}
  else if(wBear>wBull+2){signal='SELL';quality=conf>=80?'ELITE':conf>=65?'STRONG':'MODERATE';}

  updateConsensus(signal,quality,Math.round(wBull),Math.round(wBear),Math.round(wNeu),conf);
  updateIndicatorPanel({rsi,macdHist,macdLine,stK,stD,adx,pdi,mdi,mfi,cci,wr,obvSlope,vwap,ema8:ema8[n-1],ema21:ema21[n-1],ema55:ema55[n-1],ema200:ema200[n-1],atr,poc,pressureRatio});
  updateSRPanel(sr,last);updatePatternPanel(pats);updateScoringPanel(votes);
  addHistory(signal,quality,last,pats,conf);updateRegimeBar(regime);updateRiskCalc(last,atr);
  checkAlerts(last);
  clearTimeout(agentDebounce);
  agentDebounce=setTimeout(()=>runAgents({rsi,macdHist,adx,pdi,mdi,mfi,stK,stD,ema8:ema8[n-1],ema21:ema21[n-1],ema55:ema55[n-1],signal,quality,conf,pats,regime,pressureRatio,atr,vwap,bbLast,last}),400);
  if(S.sniperArmed)checkSniper(signal,quality,conf,last,atr,regime,mtfBull,mtfBear,votes);
}

// ─── UI UPDATES ───
function updateConsensus(sig,qual,bull,bear,neu,conf){
  const c=document.getElementById('CONSIG'),b=document.getElementById('CONBOX');if(!c||!b)return;
  c.textContent=sig;c.className='consig '+(sig==='BUY'?'csb':sig==='SELL'?'csr':'csn');
  b.className='conbox '+(sig==='BUY'?'buy':sig==='SELL'?'sell':'');
  ['VBULL','VBEAR','VNEU','CONCONF'].forEach((id,i)=>{const e=document.getElementById(id);if(e)e.textContent=[bull,bear,neu,conf+'%'][i];});
  const qb=document.getElementById('QBADGE');if(qb){qb.textContent=qual;qb.className='qual-badge '+(qual==='ELITE'?'q-elite':qual==='STRONG'||qual==='MODERATE'?'q-strong':'q-weak');}
  if(sig!=='NEUTRAL'){const fl=document.getElementById('ALERT_FLASH');if(fl){fl.className=sig==='BUY'?'buy':'sell';setTimeout(()=>fl.className='',700);}spawnParticles(sig);}
}
function updateIndicatorPanel(ind){
  const rows=[
    {n:'RSI 14',v:ind.rsi,fmt:v=>v.toFixed(1),dir:v=>v<35?'b':v>65?'r':'n',bar:true,bv:ind.rsi/100},
    {n:'MACD Hist',v:ind.macdHist,fmt:v=>v.toFixed(4),dir:v=>v>0?'b':'r'},
    {n:'Stoch %K',v:ind.stK,fmt:v=>v.toFixed(1),dir:v=>v<30?'b':v>70?'r':'n',bar:true,bv:ind.stK/100},
    {n:'ADX',v:ind.adx,fmt:v=>v.toFixed(1),dir:_=>'n'},
    {n:'+DI / -DI',v:null,fmt:_=>`${ind.pdi.toFixed(1)} / ${ind.mdi.toFixed(1)}`,dir:_=>ind.pdi>ind.mdi?'b':'r'},
    {n:'MFI 14',v:ind.mfi,fmt:v=>v.toFixed(1),dir:v=>v<30?'b':v>70?'r':'n',bar:true,bv:ind.mfi/100},
    {n:'CCI 20',v:ind.cci,fmt:v=>v.toFixed(0),dir:v=>v<-80?'b':v>80?'r':'n'},
    {n:'Williams %R',v:ind.wr,fmt:v=>v.toFixed(1),dir:v=>v<-80?'b':v>-20?'r':'n'},
    {n:'OBV Slope',v:ind.obvSlope,fmt:v=>v>0?'▲ Rising':'▼ Falling',dir:v=>v>0?'b':'r'},
    {n:'ATR',v:ind.atr,fmt:v=>v.toFixed(4),dir:_=>'n'},
    {n:'VWAP',v:ind.vwap,fmt:v=>v?fp(v):'—',dir:_=>'n'},
    {n:'EMA 8/21',v:null,fmt:_=>ind.ema8?`${fp(ind.ema8)} / ${fp(ind.ema21)}`:'—',dir:_=>ind.ema8>ind.ema21?'b':'r'},
    {n:'EMA 55/200',v:null,fmt:_=>ind.ema55?`${fp(ind.ema55)} / ${fp(ind.ema200)}`:'—',dir:_=>ind.ema55>ind.ema200?'b':'r'},
    {n:'POC',v:ind.poc,fmt:v=>fp(v),dir:_=>'n'},
    {n:'Buy Pressure',v:ind.pressureRatio,fmt:v=>(v*100).toFixed(0)+'%',dir:v=>v>.55?'b':v<.45?'r':'n',bar:true,bv:ind.pressureRatio},
  ];
  const IS=document.getElementById('IS');if(!IS)return;IS.innerHTML='';
  rows.forEach(r=>{
    const d=r.dir(r.v);
    IS.innerHTML+=`<div class="ir"><span class="iname">${r.n}</span><div class="irr"><span class="ival ${d==='b'?'ib':d==='r'?'ibr':''}">${r.fmt(r.v)}</span>${r.bar?`<div class="imini"><div class="iminif" style="width:${Math.min(100,(r.bv||0)*100)}%;background:${d==='b'?'var(--bull)':d==='r'?'var(--bear)':'var(--txt3)'}"></div></div>`:''}</div></div>`;
  });
}
function updateSRPanel(sr,price){
  const el=document.getElementById('SR_PANEL');if(!el||!sr.length){if(el)el.textContent='No levels detected';return;}
  el.innerHTML=sr.slice(0,8).map(l=>{
    const dist=((price-l.price)/price*100).toFixed(2);const col=l.type==='S'?'var(--bull)':'var(--bear)';
    const bars='█'.repeat(Math.min(l.strength,5))+'░'.repeat(Math.max(0,5-l.strength));
    return `<div style="display:flex;justify-content:space-between;padding:2px 0;border-bottom:1px solid rgba(10,24,40,.6)"><span style="font-size:8px;color:${col}">${l.type}</span><span style="font-size:9px;font-weight:700;font-family:'Orbitron',sans-serif">${fp(l.price)}</span><span style="font-size:7px;color:var(--txt3)">${dist>0?'+':''}${dist}%</span><span style="font-size:7px;color:${col};letter-spacing:-1px">${bars}</span></div>`;
  }).join('');
}
function updatePatternPanel(pats){
  const el=document.getElementById('PAT_PANEL');if(!el)return;
  el.innerHTML=pats.slice(0,6).map(p=>`<span class="badge ${p.dir==='bull'?'bull-b':p.dir==='bear'?'bear-b':'neu-b'}" style="margin:2px;display:inline-block">${p.name}</span>`).join('')||'<span style="color:var(--txt3);font-size:8px">No patterns detected</span>';
}
function updateScoringPanel(votes){
  const el=document.getElementById('SYSVOTES');if(!el)return;
  const names=['','Oscillators','Trend','Volume','Structure','Patterns','Breakout','Pressure','Regime','ADX Dir','OBV Mom'];
  el.innerHTML=votes.map(v=>{
    const c=v.dir==='BUY'?'var(--bull)':v.dir==='SELL'?'var(--bear)':'var(--txt3)';
    return `<div style="display:flex;justify-content:space-between;align-items:center;padding:1px 0"><span style="font-size:7.5px;color:var(--txt3)">${names[v.sys]||'Sys '+v.sys}</span><span style="font-size:8px;font-weight:700;color:${c}">${v.dir}</span><span style="font-size:7px;color:var(--txt3)">${v.wt>1?'×'+v.wt:''}</span></div>`;
  }).join('');
}
function addHistory(sig,qual,price,pats,conf){
  if(sig==='NEUTRAL')return;
  const el=document.getElementById('HIS');if(!el)return;
  const patName=pats.length?pats[0].name:'Signal';
  const d=new Date();const ts=d.getHours()+':'+String(d.getMinutes()).padStart(2,'0');
  el.insertAdjacentHTML('afterbegin',`<div class="hi ${sig.toLowerCase()}"><span class="${sig==='BUY'?'hbdg hbuy':'hbdg hsell'}">${sig}</span><div><div class="hpat">${patName}</div><div class="hmeta">${S.pair} · ${S.tf} · ${ts}</div></div><div class="hout">${fp(price)}<br><span style="font-size:7px;color:var(--txt3)">${conf}%</span></div></div>`);
  while(el.children.length>40)el.removeChild(el.lastChild);
}
function updateRegimeBar(regime){
  const rb=document.getElementById('REGIME_BAR');if(!rb)return;
  rb.style.background=regime==='bull_trend'?'linear-gradient(90deg,var(--bull),transparent)':regime==='bear_trend'?'linear-gradient(90deg,var(--bear),transparent)':'linear-gradient(90deg,var(--gold),transparent)';
}
function updateRiskCalc(price,atr){
  const equity=parseFloat(document.getElementById('EQV')?.textContent?.replace(/[$,]/g,'')||10000);
  const riskPct=parseFloat(document.getElementById('SRISK')?.value||1)/100;
  const slMult=parseFloat(document.getElementById('SSL')?.value||1.5);
  const tpMult=parseFloat(document.getElementById('STP')?.value||2.5);
  const sl=atr*slMult,tp=atr*tpMult;
  const size=Math.floor(equity*riskPct/sl*100)/100;
  const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  set('RC_SIZE',size.toFixed(4));set('RC_RISK','$'+(size*sl).toFixed(2));
  set('RC_TP',fp(price+tp));set('RC_SL',fp(price-sl));
}
function updateHeader(){
  if(!S.bars?.length)return;
  const last=S.bars[S.bars.length-1],prev=S.bars.length>1?S.bars[S.bars.length-2]:last;
  const pct=((last.c-prev.c)/prev.c*100).toFixed(2);const up=last.c>=prev.c;
  const hp=document.getElementById('HP'),hpct=document.getElementById('HPCT'),hvol=document.getElementById('HVOL');
  if(hp){hp.textContent=fp(last.c);hp.className='hprice '+(up?'cup':'cdn');}
  if(hpct){hpct.textContent=(up?'+':'')+pct+'%';hpct.className='pct '+(up?'pup':'pdn');}
  if(hvol)hvol.textContent=fmtVol(last.v);
  const hi=Math.max(...S.bars.slice(-24).map(b=>b.h)),lo=Math.min(...S.bars.slice(-24).map(b=>b.l));
  const hhigh=document.getElementById('HHIGH'),hlow=document.getElementById('HLOW');
  if(hhigh)hhigh.textContent=fp(hi);if(hlow)hlow.textContent=fp(lo);
}
function fp(p){return p>=1000?p.toFixed(2):p>=1?p.toFixed(4):p.toFixed(6);}
function fmtVol(v){return v>=1e9?(v/1e9).toFixed(1)+'B':v>=1e6?(v/1e6).toFixed(1)+'M':v>=1e3?(v/1e3).toFixed(0)+'K':v?v.toFixed(0):'—';}

function getCurrentSession(){
  const h=new Date().getUTCHours();
  if(h<8)return{name:'Tokyo 🌏',color:'rgba(0,204,255,.12)'};
  if(h<16)return{name:'London 🌍',color:'rgba(255,204,68,.1)'};
  return{name:'New York 🌎',color:'rgba(0,255,170,.1)'};
}
function updateSessionBadge(){
  const s=getCurrentSession();const el=document.getElementById('SESSION_BADGE');if(!el)return;
  el.textContent=s.name;el.style.display='inline-block';el.style.background=s.color;
}

// ─── ALERTS ───
function checkAlerts(price){
  S.alerts.forEach(a=>{
    if(a.triggered)return;
    if((a.cond==='above'&&price>=a.price)||(a.cond==='below'&&price<=a.price)){
      a.triggered=true;toast(`🔔 ALERT: ${a.sym} ${a.cond} ${fp(a.price)}`,a.cond==='above'?'buy':'sell');updateAlertCount();
    }
  });
}
function addAlert(){
  const sym=document.getElementById('ALERT_SYM').value||S.pair;
  const cond=document.getElementById('ALERT_COND').value;
  const price=parseFloat(document.getElementById('ALERT_PRICE').value);
  if(!price)return;
  S.alerts.push({sym,cond,price,triggered:false});
  renderAlerts();updateAlertCount();document.getElementById('ALERT_PRICE').value='';
  toast('Alert set: '+sym+' '+cond+' '+fp(price),'ok');
}
function renderAlerts(){
  const el=document.getElementById('ALERT_LIST');if(!el)return;
  el.innerHTML=S.alerts.length?S.alerts.map((a,i)=>`<div class="alert-item"><span style="color:${a.triggered?'var(--txt3)':'var(--gold)'}">🔔</span><span>${a.sym}</span><span style="color:${a.cond==='above'?'var(--bull)':'var(--bear)'}">${a.cond}</span><span style="font-weight:700">${fp(a.price)}</span>${a.triggered?'<span style="font-size:7px;color:var(--bull)">✓</span>':''}<button class="alert-del" onclick="S.alerts.splice(${i},1);renderAlerts();updateAlertCount()">✕</button></div>`).join(''):'<div style="padding:12px;text-align:center;font-size:9px;color:var(--txt3)">No alerts set</div>';
}
function updateAlertCount(){const active=S.alerts.filter(a=>!a.triggered).length;const el=document.getElementById('ALERT_COUNT');if(el){el.textContent=active;el.style.display=active>0?'flex':'none';}}
function openAlertMod(){renderAlerts();document.getElementById('ALERT_MOD').classList.add('open');}
function closeAlertMod(){document.getElementById('ALERT_MOD').classList.remove('open');}

// ─── CHART RENDERING ───
function getRange(vis,pad=0.08){
  const hi=Math.max(...vis.map(b=>b.h)),lo=Math.min(...vis.map(b=>b.l));
  const r=hi-lo||hi*.01,p=r*pad;
  return{hi:hi+p,lo:lo-p,hi_raw:hi,lo_raw:lo};
}
function scaleY(price,lo,hi,h){return h-(price-lo)/(hi-lo)*h;}

function drawAll(){
  if(!S.bars?.length||W<=0)return;
  const bars=S.haMode?toHA(S.bars):S.bars;
  const n=bars.length;
  updateVisibleBars();
  const start=Math.max(0,n-visibleBars-S.panOffset);
  const end=Math.min(n,n-S.panOffset);
  const vis=bars.slice(start,end);
  if(!vis.length)return;
  const allBars=S.haMode?toHA(S.bars):S.bars;
  drawMain(vis,allBars);drawVol(vis);drawRSI(vis,allBars);drawMACD(vis,allBars);
}

function drawMain(vis,allBars){
  const ctx=mctx;ctx.clearRect(0,0,W,mainH);
  const closes=allBars.map(b=>b.c);
  const {hi,lo}=getRange(vis);
  const bw=Math.max(1,barW-1);
  const xOf=i=>i*barW+barW/2;
  const yOf=p=>scaleY(p,lo,hi,mainH);

  // Session overlay
  if(S.showSessions){
    const sess=[{s:0,e:8,c:'rgba(0,204,255,.04)'},{s:8,e:16,c:'rgba(255,204,68,.04)'},{s:16,e:24,c:'rgba(0,255,170,.04)'}];
    vis.forEach((b,i)=>{const h=new Date(b.t).getUTCHours();const s2=sess.find(s=>h>=s.s&&h<s.e);if(s2){ctx.fillStyle=s2.c;ctx.fillRect(xOf(i)-barW/2,0,barW,mainH);}});
  }

  // EMA lines
  if(S.showEMA){
    [[8,'rgba(0,204,255,.75)'],[21,'rgba(255,204,68,.7)'],[55,'rgba(187,68,255,.6)'],[200,'rgba(255,102,0,.5)']].forEach(([p,c])=>{
      const ema=calcEMA(closes,p);
      ctx.beginPath();ctx.strokeStyle=c;ctx.lineWidth=1.2;let started=false;
      vis.forEach((b,i)=>{const idx=allBars.indexOf(b);const v=ema[idx];if(!v||isNaN(v))return;const cx=xOf(i),cy=yOf(v);started?(ctx.lineTo(cx,cy)):(ctx.moveTo(cx,cy),started=true);});
      ctx.stroke();
    });
  }

  // Bollinger Bands
  if(S.showBB){
    const bb=calcBB(closes);
    ['u','m','l'].forEach((k,ki)=>{
      ctx.beginPath();ctx.strokeStyle=ki===1?'rgba(255,204,68,.4)':'rgba(0,204,255,.35)';ctx.lineWidth=1;ctx.setLineDash(ki===1?[4,4]:[]);
      let started=false;
      vis.forEach((b,i)=>{const idx=allBars.indexOf(b);const val=bb[idx];if(!val)return;const cy=yOf(val[k]);started?ctx.lineTo(xOf(i),cy):(ctx.moveTo(xOf(i),cy),started=true);});
      ctx.stroke();ctx.setLineDash([]);
    });
    // Band fill
    ctx.beginPath();
    let fs=true;vis.forEach((b,i)=>{const idx=allBars.indexOf(b);const val=bb[idx];if(!val)return;fs?(ctx.moveTo(xOf(i),yOf(val.u)),fs=false):ctx.lineTo(xOf(i),yOf(val.u));});
    [...vis].reverse().forEach((b,i)=>{const idx=allBars.indexOf(b);const val=bb[idx];if(!val)return;ctx.lineTo(xOf(vis.length-1-i),yOf(val.l));});
    ctx.closePath();ctx.fillStyle='rgba(0,204,255,.02)';ctx.fill();
  }

  // VWAP
  if(S.showVWAP){
    const vwap=calcVWAP(allBars);ctx.beginPath();ctx.strokeStyle='rgba(255,102,255,.75)';ctx.lineWidth=1.5;ctx.setLineDash([6,3]);
    let started=false;vis.forEach((b,i)=>{const idx=allBars.indexOf(b);const v=vwap[idx];if(!v)return;started?ctx.lineTo(xOf(i),yOf(v)):(ctx.moveTo(xOf(i),yOf(v)),started=true);});
    ctx.stroke();ctx.setLineDash([]);
  }

  // S/R levels
  const sr=findSRLevels(allBars);
  sr.filter(l=>l.price>=lo&&l.price<=hi).forEach(l=>{
    ctx.beginPath();ctx.strokeStyle=l.type==='S'?'rgba(0,255,170,.3)':'rgba(255,51,102,.3)';ctx.lineWidth=1;ctx.setLineDash([3,6]);
    ctx.moveTo(0,yOf(l.price));ctx.lineTo(W,yOf(l.price));ctx.stroke();ctx.setLineDash([]);
  });

  // Fib levels
  const fib=calcFib(allBars);
  [{v:fib.f236,l:'0.236'},{v:fib.f382,l:'0.382'},{v:fib.f500,l:'0.5'},{v:fib.f618,l:'0.618'}].forEach(fl=>{
    if(fl.v<lo||fl.v>hi)return;
    ctx.beginPath();ctx.strokeStyle='rgba(255,204,68,.18)';ctx.lineWidth=.7;ctx.setLineDash([2,8]);
    ctx.moveTo(0,yOf(fl.v));ctx.lineTo(W,yOf(fl.v));ctx.stroke();ctx.setLineDash([]);
    ctx.fillStyle='rgba(255,204,68,.35)';ctx.font='7px JetBrains Mono';ctx.fillText('F'+fl.l,4,yOf(fl.v)-2);
  });

  // Candles
  vis.forEach((b,i)=>{
    const cx=xOf(i),ox=yOf(b.o),cx2=yOf(b.c),hh=yOf(b.h),ll=yOf(b.l);
    const bull=b.c>=b.o;const bodyTop=Math.min(ox,cx2),bodyH=Math.max(1,Math.abs(ox-cx2));
    ctx.strokeStyle=bull?'rgba(0,255,170,.45)':'rgba(255,51,102,.45)';ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(cx,hh);ctx.lineTo(cx,bodyTop);ctx.stroke();
    ctx.beginPath();ctx.moveTo(cx,bodyTop+bodyH);ctx.lineTo(cx,ll);ctx.stroke();
    const grad=ctx.createLinearGradient(0,bodyTop,0,bodyTop+bodyH);
    if(bull){grad.addColorStop(0,'rgba(0,255,170,.95)');grad.addColorStop(1,'rgba(0,170,85,.5)');}
    else{grad.addColorStop(0,'rgba(255,80,120,.5)');grad.addColorStop(1,'rgba(255,51,102,.95)');}
    ctx.fillStyle=grad;ctx.fillRect(cx-bw/2,bodyTop,bw,bodyH);
  });

  // Last price line
  const lastBar=vis[vis.length-1];if(!lastBar)return;
  const lastY=yOf(lastBar.c);const up=lastBar.c>=(vis[vis.length-2]?.c||lastBar.c);
  ctx.beginPath();ctx.strokeStyle=up?'rgba(0,255,170,.5)':'rgba(255,51,102,.5)';ctx.lineWidth=1;ctx.setLineDash([4,4]);
  ctx.moveTo(0,lastY);ctx.lineTo(W,lastY);ctx.stroke();ctx.setLineDash([]);
  // Price label box
  const priceLabel=fp(lastBar.c);const lw2=ctx.measureText(priceLabel).width+14;
  ctx.fillStyle=up?'rgba(0,255,170,.15)':'rgba(255,51,102,.15)';ctx.fillRect(W-lw2,lastY-8,lw2,16);
  ctx.strokeStyle=up?'rgba(0,255,170,.6)':'rgba(255,51,102,.6)';ctx.lineWidth=1;ctx.setLineDash([]);ctx.strokeRect(W-lw2,lastY-8,lw2,16);
  ctx.fillStyle=up?'var(--bull)':'var(--bear)';ctx.font='bold 9px JetBrains Mono';
  ctx.fillText(priceLabel,W-lw2+7,lastY+3);

  // Price axis
  const steps=6;ctx.fillStyle='rgba(120,180,210,.4)';ctx.font='7.5px JetBrains Mono';
  for(let i=0;i<=steps;i++){const p=lo+(hi-lo)*i/steps;const y=yOf(p);ctx.fillText(fp(p),W-68,y+3);}

  // Time axis
  ctx.fillStyle='rgba(120,180,210,.3)';ctx.font='7px JetBrains Mono';
  const step=Math.max(1,Math.floor(vis.length/8));
  vis.forEach((b,i)=>{
    if(i%step!==0)return;
    const d=new Date(b.t);
    const lbl=S.tf==='1Day'?`${d.getMonth()+1}/${d.getDate()}`:`${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`;
    ctx.fillText(lbl,xOf(i)-12,mainH-3);
  });

  // Particles
  renderParticlesOnCanvas(ctx);
}

function drawVol(vis){
  const ctx=vctx;ctx.clearRect(0,0,W,volH);
  const maxV=Math.max(...vis.map(b=>b.v||0))||1;const bw=Math.max(1,barW-1);
  const maVol=vis.map((_,i)=>{if(i<5)return null;return vis.slice(i-5,i+1).reduce((s,b)=>s+(b.v||0),0)/5;});
  vis.forEach((b,i)=>{
    const x=i*barW+barW/2,h=(b.v||0)/maxV*(volH-8),y=volH-h;const bull=b.c>=b.o;
    const g=ctx.createLinearGradient(0,y,0,volH);
    g.addColorStop(0,bull?'rgba(0,255,170,.55)':'rgba(255,51,102,.55)');g.addColorStop(1,bull?'rgba(0,255,170,.1)':'rgba(255,51,102,.1)');
    ctx.fillStyle=g;ctx.fillRect(x-bw/2,y,bw,h);
  });
  ctx.beginPath();ctx.strokeStyle='rgba(255,204,68,.5)';ctx.lineWidth=1.2;
  vis.forEach((b,i)=>{const v=maVol[i];if(!v)return;const x=i*barW+barW/2,y=volH-v/maxV*(volH-8);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});ctx.stroke();
}

function drawRSI(vis,allBars){
  const ctx=rctx;ctx.clearRect(0,0,W,rsiH);
  const closes=allBars.map(b=>b.c);const rsiAll=calcRSI(closes);
  const rsiVis=vis.map(b=>rsiAll[allBars.indexOf(b)]);
  ctx.fillStyle='rgba(255,51,102,.06)';ctx.fillRect(0,0,W,(1-70/100)*rsiH);
  ctx.fillStyle='rgba(0,255,170,.06)';ctx.fillRect(0,(1-30/100)*rsiH,W,rsiH*0.3);
  [[70,'rgba(255,51,102,.35)'],[50,'rgba(120,180,210,.2)'],[30,'rgba(0,255,170,.35)']].forEach(([v,c])=>{
    ctx.beginPath();ctx.strokeStyle=c;ctx.lineWidth=.7;ctx.setLineDash([3,5]);
    const y=(1-v/100)*rsiH;ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();ctx.setLineDash([]);
    ctx.fillStyle=c;ctx.font='7px JetBrains Mono';ctx.fillText(v,2,y-1);
  });
  ctx.lineWidth=1.5;let started=false,prevRSI=null;
  rsiVis.forEach((v,i)=>{
    if(v===null)return;const x=i*barW+barW/2,y=(1-v/100)*rsiH;
    ctx.strokeStyle=v>70?'var(--bear)':v<30?'var(--bull)':'rgba(0,204,255,.8)';
    if(!started||prevRSI===null){ctx.beginPath();ctx.moveTo(x,y);started=true;}else{ctx.lineTo(x,y);}
    prevRSI=v;
    if(i===rsiVis.length-1||rsiVis[i+1]!==null)ctx.stroke();
  });
  const lastRSI=rsiVis.filter(v=>v!==null).pop();
  if(lastRSI){ctx.fillStyle='rgba(0,204,255,.8)';ctx.font='bold 8px JetBrains Mono';ctx.fillText(lastRSI.toFixed(1),W-28,(1-lastRSI/100)*rsiH-2);}
}

function drawMACD(vis,allBars){
  const ctx=dctxMacd;ctx.clearRect(0,0,W,macdH);
  const closes=allBars.map(b=>b.c);const macdD=calcMACD(closes);
  const histVis=vis.map(b=>{const idx=allBars.indexOf(b);const f=macdD.hist.find(h=>h.i===idx);return f?f.v:null;});
  const lineVis=vis.map(b=>macdD.line[allBars.indexOf(b)]||null);
  const sigVis=vis.map(b=>{const idx=allBars.indexOf(b);const f=macdD.sig.find(s=>s.i===idx);return f?f.v:null;});
  const allVals=[...histVis,...lineVis,...sigVis].filter(v=>v!==null&&!isNaN(v));
  if(!allVals.length)return;
  const maxV=Math.max(...allVals.map(Math.abs))||1;
  const yS=v=>macdH/2-(v/maxV)*(macdH/2-4);const zero=macdH/2;
  ctx.strokeStyle='rgba(120,180,210,.25)';ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(0,zero);ctx.lineTo(W,zero);ctx.stroke();
  histVis.forEach((v,i)=>{
    if(v===null||isNaN(v))return;const x=i*barW+barW/2,y=yS(v),h=Math.abs(zero-y);const bull=v>=0;
    const g=ctx.createLinearGradient(0,bull?y:zero,0,bull?zero:y+h);
    g.addColorStop(0,bull?'rgba(0,255,170,.75)':'rgba(255,51,102,.75)');g.addColorStop(1,bull?'rgba(0,255,170,.2)':'rgba(255,51,102,.2)');
    ctx.fillStyle=g;ctx.fillRect(x-Math.max(1,barW*.35),Math.min(y,zero),Math.max(1,barW*.7),h||1);
  });
  ctx.beginPath();ctx.strokeStyle='rgba(0,204,255,.8)';ctx.lineWidth=1.2;let started=false;
  lineVis.forEach((v,i)=>{if(v===null||isNaN(v))return;started?ctx.lineTo(i*barW+barW/2,yS(v)):(ctx.moveTo(i*barW+barW/2,yS(v)),started=true);});ctx.stroke();
  ctx.beginPath();ctx.strokeStyle='rgba(255,102,255,.7)';ctx.lineWidth=1;started=false;
  sigVis.forEach((v,i)=>{if(v===null||isNaN(v))return;started?ctx.lineTo(i*barW+barW/2,yS(v)):(ctx.moveTo(i*barW+barW/2,yS(v)),started=true);});ctx.stroke();
}

// ─── PARTICLES ───
function spawnParticles(sig){
  const count=20,cx=W/2,cy=mainH/2;
  const col=sig==='BUY'?[[0,255,170],[0,200,100]]:[[255,51,102],[200,30,70]];
  for(let i=0;i<count;i++){
    const angle=Math.random()*Math.PI*2,spd=Math.random()*4+1.5;
    const c=col[Math.floor(Math.random()*col.length)];
    particles.push({x:cx,y:cy,vx:Math.cos(angle)*spd,vy:Math.sin(angle)*spd,life:1,decay:Math.random()*.025+.012,r:Math.random()*3+1,col:`rgba(${c[0]},${c[1]},${c[2]},`});
  }
}
function updateParticles(){for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.x+=p.vx;p.y+=p.vy;p.vy+=.06;p.life-=p.decay;if(p.life<=0)particles.splice(i,1);}}
function renderParticlesOnCanvas(ctx){particles.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.col+p.life+')';ctx.fill();});}

// ─── EXPORT ───
function exportChart(){
  const tmpCV=document.createElement('canvas');tmpCV.width=W;tmpCV.height=H;
  const ctx=tmpCV.getContext('2d');
  ctx.drawImage(mainCV,0,0,W*devicePixelRatio,mainH*devicePixelRatio,0,0,W,mainH);
  ctx.drawImage(volCV,0,0,W*devicePixelRatio,volH*devicePixelRatio,0,mainH,W,volH);
  ctx.drawImage(rsiCV,0,0,W*devicePixelRatio,rsiH*devicePixelRatio,0,mainH+volH,W,rsiH);
  ctx.drawImage(macdCV,0,0,W*devicePixelRatio,macdH*devicePixelRatio,0,mainH+volH+rsiH,W,macdH);
  const a=document.createElement('a');a.download=`apex_${S.pair.replace('/','')}_${S.tf}_${Date.now()}.png`;
  a.href=tmpCV.toDataURL('image/png');a.click();toast('Chart exported!','ok');
}

// ─── TOGGLES ───
function toggleHA(){S.haMode=!S.haMode;document.getElementById('tHA').className='hdrbtn'+(S.haMode?' on':'');toast(S.haMode?'Heikin Ashi ON':'Standard Candles','info');}
function toggleBB(){S.showBB=!S.showBB;document.getElementById('tBB').className='hdrbtn'+(S.showBB?' on':'');}
function toggleEMA(){S.showEMA=!S.showEMA;document.getElementById('tEMA').className='hdrbtn'+(S.showEMA?' on':'');}
function toggleVWAP(){S.showVWAP=!S.showVWAP;document.getElementById('tVWAP').className='hdrbtn'+(S.showVWAP?' on':'');}
function toggleSessions(){S.showSessions=!S.showSessions;document.getElementById('tSESS').className='hdrbtn'+(S.showSessions?' on':'');}
function toggleSniperPanel(){const i=document.getElementById('SNP_INNER'),t=document.getElementById('SNP_TOGGLE');if(!i||!t)return;const h=i.style.display==='none';i.style.display=h?'flex':'none';t.textContent=h?'▲':'▼';}
function toggleTheme(){document.body.style.filter=document.body.style.filter?'':'invert(1) hue-rotate(180deg)';toast('Theme toggled','info');}

// ─── WATCHLIST ───
const WATCH_SYMS=['BTC/USD','ETH/USD','SOL/USD','AAPL','SPY'];
async function loadWatchlist(){
  const el=document.getElementById('WATCHLIST');if(!el)return;
  el.innerHTML=WATCH_SYMS.map(s=>`<div class="watch-row" onclick="switchPair('${s}')"><span class="watch-sym">${s.split('/')[0]}</span><canvas id="wc_${s.replace('/','')}" width="60" height="22"></canvas><span class="watch-price" id="wp_${s.replace('/','')}" style="font-size:8.5px;color:var(--txt3)">...</span><span class="watch-pct" id="wpct_${s.replace('/','')}" style="color:var(--txt3)">—</span></div>`).join('');
  await refreshWatchlist();
  setInterval(refreshWatchlist,60000);
}
async function refreshWatchlist(){
  for(const sym of WATCH_SYMS){
    try{
      const id=sym.replace('/','');let data=null;
      const binSym=toBinanceSym(sym);
      if(binSym){try{const r=await fetch(`https://api.binance.us/api/v3/klines?symbol=${binSym}&interval=1h&limit=24`,{signal:AbortSignal.timeout(4000)});if(r.ok){const j=await r.json();if(j.length)data=j.map(b=>+b[4]);}}catch{}}
      if(!data){const ysSym=toYahooSym(sym);if(ysSym){try{const r=await fetch(`https://corsproxy.io/?${encodeURIComponent(`https://query1.finance.yahoo.com/v8/finance/chart/${ysSym}?interval=1h&range=1d`)}`,{signal:AbortSignal.timeout(5000)});if(r.ok){const j=await r.json();const res=j.chart?.result?.[0];if(res)data=res.indicators.quote[0].close.filter(Boolean);}}catch{}}}
      if(!data?.length)continue;
      const last=data[data.length-1],first=data[0];const pct=((last-first)/first*100).toFixed(2);const up=last>=first;
      const wp=document.getElementById('wp_'+id);const wpct=document.getElementById('wpct_'+id);
      if(wp)wp.textContent=fp(last);if(wpct){wpct.textContent=(up?'+':'')+pct+'%';wpct.style.color=up?'var(--bull)':'var(--bear)';}
      const wc=document.getElementById('wc_'+id);if(wc)drawSparkline(wc,data,up);
    }catch{}
  }
}
function drawSparkline(cv,data,up){
  const ctx=cv.getContext('2d');ctx.clearRect(0,0,cv.width,cv.height);
  const min=Math.min(...data),max=Math.max(...data),range=max-min||1;
  const pts=data.map((v,i)=>({x:i/(data.length-1)*cv.width,y:cv.height-(v-min)/range*(cv.height-2)-1}));
  const g=ctx.createLinearGradient(0,0,cv.width,0);
  g.addColorStop(0,up?'rgba(0,255,170,.3)':'rgba(255,51,102,.3)');g.addColorStop(1,up?'rgba(0,255,170,.85)':'rgba(255,51,102,.85)');
  ctx.strokeStyle=g;ctx.lineWidth=1.2;ctx.beginPath();pts.forEach((p,i)=>i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));ctx.stroke();
}

// ─── AI AGENTS ───
async function runAgents(data){
  if(agentRunning)return;agentRunning=true;
  const badge=document.getElementById('AIBADGE');if(badge)badge.textContent=S.aiKey?'AI':'LOCAL';
  try{
    const [r1,r2,r3]=await Promise.all([callAgent(1,buildPrompt1(data)),callAgent(2,buildPrompt2(data)),callAgent(3,buildPrompt3(data))]);
    updateAgent(1,r1);updateAgent(2,r2);updateAgent(3,r3);
  }catch{}
  agentRunning=false;
}
function buildPrompt1(d){return `Technical analysis AI. ${S.pair}/${S.tf}. RSI:${d.rsi?.toFixed(1)} MACD:${d.macdHist?.toFixed(4)} ADX:${d.adx?.toFixed(1)} +DI:${d.pdi?.toFixed(1)} -DI:${d.mdi?.toFixed(1)} MFI:${d.mfi?.toFixed(1)} Stoch:${d.stK?.toFixed(1)} EMA8:${d.ema8?.toFixed(2)} EMA21:${d.ema21?.toFixed(2)} EMA55:${d.ema55?.toFixed(2)} Pressure:${d.pressureRatio?.toFixed(2)}\nJSON only: {"vote":"BUY"|"SELL"|"NEUTRAL","confidence":0-100,"reason":"<20 words"}`;}
function buildPrompt2(d){return `Pattern oracle. Patterns:${d.pats?.slice(0,3).map(p=>p.name).join(',')||'none'} Signal:${d.signal} Conf:${d.conf}% VWAP:${d.vwap?.toFixed(2)||'N/A'}\nJSON only: {"vote":"BUY"|"SELL"|"NEUTRAL","confidence":0-100,"reason":"<20 words"}`;}
function buildPrompt3(d){return `Market regime expert. Regime:${d.regime} ADX:${d.adx?.toFixed(1)} ATR:${d.atr?.toFixed(4)} MFI:${d.mfi?.toFixed(1)}\nJSON only: {"vote":"BUY"|"SELL"|"NEUTRAL","confidence":0-100,"reason":"<20 words"}`;}
async function callAgent(id,prompt){
  if(!S.aiKey)return localAgent(prompt);
  try{
    const r=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',headers:{'Content-Type':'application/json','x-api-key':S.aiKey,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:120,messages:[{role:'user',content:prompt}]}),
      signal:AbortSignal.timeout(8000)
    });
    if(!r.ok)throw new Error('API '+r.status);
    const j=await r.json();const txt=j.content?.[0]?.text||'{}';
    return JSON.parse(txt.replace(/```json?|```/g,'').trim());
  }catch{return localAgent(prompt);}
}
function localAgent(prompt){
  const get=(key)=>{const m=prompt.match(new RegExp(key+'[:\\s]+([\\-\\d.]+)'));return m?+m[1]:null;};
  const rsi=get('RSI'),macd=get('MACD'),adx=get('ADX'),pdi=get('\\+DI'),mdi=get('-DI'),mfi=get('MFI'),pr=get('Pressure');
  let score=0,factors=[];
  if(rsi!==null){if(rsi<35){score+=2;factors.push('RSI oversold');}else if(rsi>65){score-=2;factors.push('RSI overbought');}}
  if(macd!==null){macd>0?(score++,factors.push('MACD bullish')):(score--,factors.push('MACD bearish'));}
  if(adx!==null&&pdi!==null&&mdi!==null){if(adx>25&&pdi>mdi){score+=2;factors.push('ADX trend up');}else if(adx>25&&mdi>pdi){score-=2;factors.push('ADX trend dn');}}
  if(mfi!==null){if(mfi<30){score++;factors.push('MFI oversold');}else if(mfi>70){score--;factors.push('MFI overbought');}}
  if(pr!==null){pr>.6?(score++,factors.push('buy pressure')):pr<.4?(score--,factors.push('sell pressure')):''}
  if(prompt.includes('Morning Star')||prompt.includes('Bullish Engulf')||prompt.includes('Three White'))score+=2;
  if(prompt.includes('Evening Star')||prompt.includes('Bearish Engulf')||prompt.includes('Three Black'))score-=2;
  if(prompt.includes('bull_trend'))score+=2;else if(prompt.includes('bear_trend'))score-=2;
  return{vote:score>1?'BUY':score<-1?'SELL':'NEUTRAL',confidence:Math.min(95,Math.max(40,50+Math.abs(score)*8)),reason:factors.slice(0,2).join(', ')||'Mixed signals'};
}
function updateAgent(id,data){
  const v=document.getElementById('AG'+id+'V'),b=document.getElementById('AG'+id+'B'),r=document.getElementById('AG'+id+'R'),c=document.getElementById('AG'+id+'C'),el=document.getElementById('AG'+id);
  if(!v||!b||!r)return;
  const vote=data?.vote||'NEUTRAL',conf=data?.confidence||50,reason=data?.reason||'—';
  v.textContent=vote;v.className='agvote '+(vote==='BUY'?'vbuy':vote==='SELL'?'vsell':'vneu');
  const pct=vote==='BUY'?conf:vote==='SELL'?100-conf:50;
  b.style.width=pct+'%';b.className='agfill '+(vote==='BUY'?'fb':vote==='SELL'?'fs':'fn');
  r.textContent=reason;r.className='agreason ok';
  if(c)c.textContent=conf+'%';
  if(el){el.classList.remove('agpulse','buy-glow','sell-glow');if(vote==='BUY')el.classList.add('buy-glow');else if(vote==='SELL')el.classList.add('sell-glow');}
}

// ─── SNIPER BOT ───
function setSniperMode(m){
  S.sniperMode=m;
  ['both','buy','sell'].forEach(k=>{const b=document.getElementById('sm_'+k);if(b)b.className='smb '+(k===m?'on '+k:k);});
}
function armSniper(){
  if(!S.alpConn){toast('Connect Alpaca first!','err');return;}
  S.sniperArmed=!S.sniperArmed;
  const btn=document.getElementById('SARMBTN'),hdrbtn=document.getElementById('SNIPERHDRBTN');
  const sdot=document.getElementById('SDOT'),stitle=document.getElementById('STITLE');
  if(S.sniperArmed){
    btn.className='sniper-arm-btn armed';btn.textContent='🔴 DISARM SNIPER';
    if(hdrbtn)hdrbtn.className='hdrbtn sniperbtn armed';
    if(sdot)sdot.className='sniper-dot armed';if(stitle){stitle.textContent='ARMED';stitle.className='sniper-title armed';}
    slog('Sniper ARMED · Conf:'+document.getElementById('SCONF')?.value+'%','fired');
    toast('🎯 SNIPER ARMED','sniper');
  }else{
    btn.className='sniper-arm-btn';btn.textContent='⚡ ARM SNIPER';
    if(hdrbtn)hdrbtn.className='hdrbtn sniperbtn';
    if(sdot)sdot.className='sniper-dot disarmed';if(stitle){stitle.textContent='DISARMED';stitle.className='sniper-title disarmed';}
    slog('Sniper disarmed','warn');toast('Sniper disarmed','info');
  }
}
function slog(msg,type=''){
  const el=document.getElementById('SLOG');if(!el)return;
  const d=new Date();const ts=`${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`;
  el.insertAdjacentHTML('afterbegin',`<div class="sniper-entry ${type}"><span style="color:var(--txt3)">${ts}</span><span>${msg}</span></div>`);
  while(el.children.length>20)el.removeChild(el.lastChild);
}
let lastSniperSignal={sym:'',price:0};
async function checkSniper(sig,qual,conf,price,atr,regime,mtfBull,mtfBear,votes){
  if(sig==='NEUTRAL')return;
  const minConf=parseFloat(document.getElementById('SCONF').value)||72;
  if(conf<minConf)return;
  if(S.sniperMode==='buy'&&sig!=='BUY')return;
  if(S.sniperMode==='sell'&&sig!=='SELL')return;
  if(qual==='WEAK')return;
  if(Math.max(votes.filter(v=>v.dir==='BUY').length,votes.filter(v=>v.dir==='SELL').length)<3)return;
  const regimeConflict=(sig==='BUY'&&regime==='bear_trend')||(sig==='SELL'&&regime==='bull_trend');
  if(regimeConflict&&conf<82){slog(`Regime conflict: ${regime} vs ${sig}`,'warn');return;}
  if(lastSniperSignal.sym===S.pair&&Math.abs(lastSniperSignal.price-price)/price<0.005){slog('Duplicate filtered','warn');return;}
  lastSniperSignal={sym:S.pair,price};
  slog(`Signal: ${sig} ${S.pair} @ ${fp(price)} (${conf}% ${qual})`,'fired');
  await fireSniperOrder(sig,price,atr,conf,qual,regime);
}
async function fireSniperOrder(sig,price,atr,conf,qual,regime){
  const equity=parseFloat(document.getElementById('EQV')?.textContent?.replace(/[$,]/g,'')||10000);
  const bp=parseFloat(document.getElementById('BPV')?.textContent?.replace(/[$,]/g,'')||10000);
  const riskPct=parseFloat(document.getElementById('SRISK').value||1)/100;
  let slMult=parseFloat(document.getElementById('SSL').value||1.5);
  let tpMult=parseFloat(document.getElementById('STP').value||2.5);
  if(['bull_trend','bear_trend'].includes(regime))slMult*=0.88;
  if(qual==='ELITE')tpMult*=1.3;
  let sizeMult=conf>=88?1.3:conf>=80?1.15:1;
  const slAmt=atr*slMult;
  let qty=Math.floor(equity*riskPct/slAmt*sizeMult*1000)/1000;
  qty=Math.min(qty,Math.floor(bp*.92/price*1000)/1000,Math.floor(equity*.12/price*1000)/1000);
  if(qty<=0){slog('Qty too small','warn');return;}
  try{
    const base=S.alpMode==='paper'?'https://paper-api.alpaca.markets':'https://api.alpaca.markets';
    const isCrypto=S.pair.includes('/');
    const body={symbol:isCrypto?S.pair:S.pair.replace('/',''),qty:qty.toString(),side:sig.toLowerCase(),type:'market',time_in_force:isCrypto?'gtc':'day'};
    const r=await fetch(`${base}/v2/orders`,{method:'POST',headers:{'APCA-API-KEY-ID':S.alpKey,'APCA-API-SECRET-KEY':S.alpSec,'Content-Type':'application/json'},body:JSON.stringify(body)});
    if(!r.ok){const e=await r.json();slog('Order fail: '+(e.message||r.status),'err');return;}
    slog(`FIRED: ${sig} ${qty} ${S.pair} @ ${fp(price)}`,'fired');
    toast(`🎯 ${sig} ${qty} ${S.pair.split('/')[0]} @ ${fp(price)}`,'sniper');
    const st=document.getElementById('STRADES');if(st)st.textContent=(++S.sniperTrades)+' trades';
    setTimeout(fetchAlpacaAccount,2000);
  }catch(e){slog('Order error: '+(e.message||e),'err');}
}

// ─── ALPACA ───
function openMod(){
  const ak=document.getElementById('AK'),ai=document.getElementById('AIKEY');
  if(ak)ak.value=S.alpKey||localStorage.getItem('apex_ak')||'';
  if(ai)ai.value=S.aiKey||localStorage.getItem('apex_ai')||'';
  document.getElementById('MOD').classList.add('open');
}
function closeMod(){document.getElementById('MOD').classList.remove('open');}
function setMode(m){
  S.alpMode=m;
  document.getElementById('mPaper').className='modebtn'+(m==='paper'?' on':'');
  document.getElementById('mLive').className='modebtn'+(m==='live'?' on':'');
  document.getElementById('LWRN').style.display=m==='live'?'block':'none';
}
function saveAIKey(v){S.aiKey=v;localStorage.setItem('apex_ai',v);const b=document.getElementById('AIBADGE');if(b)b.textContent=v?'AI':'LOCAL';}
function restoreKeys(){
  S.alpKey=localStorage.getItem('apex_ak')||'';S.alpSec=localStorage.getItem('apex_as')||'';
  S.alpMode=localStorage.getItem('apex_am')||'paper';S.aiKey=localStorage.getItem('apex_ai')||'';
  if(S.aiKey){const b=document.getElementById('AIBADGE');if(b)b.textContent='AI';}
  if(S.alpKey&&S.alpSec)autoConnect();
}
async function autoConnect(){await connectAlpaca(true);}
async function connectAlpaca(auto=false){
  const ak=auto?S.alpKey:(document.getElementById('AK')?.value.trim()||'');
  const as_val=auto?S.alpSec:(document.getElementById('AS')?.value.trim()||'');
  const mst=document.getElementById('MST'),mbtn=document.getElementById('MBTN');
  if(!ak||!as_val){if(mst){mst.style.color='var(--bear)';mst.textContent='Enter both keys';}return;}
  S.alpKey=ak;if(!auto)S.alpSec=as_val;
  if(mst){mst.style.color='var(--gold)';mst.textContent='Connecting...';}
  if(mbtn)mbtn.disabled=true;
  try{
    const base=S.alpMode==='paper'?'https://paper-api.alpaca.markets':'https://api.alpaca.markets';
    const r=await fetch(`${base}/v2/account`,{headers:{'APCA-API-KEY-ID':ak,'APCA-API-SECRET-KEY':as_val}});
    if(!r.ok)throw new Error('Auth failed ('+r.status+')');
    const acc=await r.json();
    S.alpConn=true;
    localStorage.setItem('apex_ak',ak);localStorage.setItem('apex_am',S.alpMode);
    if(!auto)localStorage.setItem('apex_as',as_val);
    if(mst){mst.style.color='var(--bull)';mst.textContent='✓ Connected · '+acc.account_number;}
    const abtn=document.getElementById('ABTN');if(abtn){abtn.className='hdrbtn alpbtn conn';abtn.textContent='🦙 CONNECTED';}
    document.getElementById('CPROMPT').style.display='none';document.getElementById('APANEL').style.display='block';
    const eqv=document.getElementById('EQV'),bpv=document.getElementById('BPV'),pnlv=document.getElementById('PNLV');
    if(eqv)eqv.textContent='$'+parseFloat(acc.equity).toLocaleString('en-US',{minimumFractionDigits:2});
    if(bpv)bpv.textContent='$'+parseFloat(acc.buying_power).toLocaleString();
    const pnl=parseFloat(acc.unrealized_pl||0);
    if(pnlv){pnlv.textContent=(pnl>=0?'+':'')+pnl.toFixed(2);pnlv.style.color=pnl>=0?'var(--bull)':'var(--bear)';}
    toast('Alpaca connected! ✓','ok');setTimeout(()=>closeMod(),1500);
    fetchAlpacaPositions();setInterval(fetchAlpacaAccount,30000);
  }catch(e){if(mst){mst.style.color='var(--bear)';mst.textContent='✗ '+e.message;}if(mbtn)mbtn.disabled=false;}
}
async function fetchAlpacaAccount(){
  if(!S.alpConn)return;
  try{
    const base=S.alpMode==='paper'?'https://paper-api.alpaca.markets':'https://api.alpaca.markets';
    const r=await fetch(`${base}/v2/account`,{headers:{'APCA-API-KEY-ID':S.alpKey,'APCA-API-SECRET-KEY':S.alpSec}});
    if(!r.ok)return;const acc=await r.json();
    const eqv=document.getElementById('EQV'),bpv=document.getElementById('BPV'),pnlv=document.getElementById('PNLV');
    if(eqv)eqv.textContent='$'+parseFloat(acc.equity).toLocaleString('en-US',{minimumFractionDigits:2});
    if(bpv)bpv.textContent='$'+parseFloat(acc.buying_power).toLocaleString();
    const pnl=parseFloat(acc.unrealized_pl||0);
    if(pnlv){pnlv.textContent=(pnl>=0?'+':'')+pnl.toFixed(2);pnlv.style.color=pnl>=0?'var(--bull)':'var(--bear)';}
    fetchAlpacaPositions();
  }catch{}
}
async function fetchAlpacaPositions(){
  if(!S.alpConn)return;
  try{
    const base=S.alpMode==='paper'?'https://paper-api.alpaca.markets':'https://api.alpaca.markets';
    const r=await fetch(`${base}/v2/positions`,{headers:{'APCA-API-KEY-ID':S.alpKey,'APCA-API-SECRET-KEY':S.alpSec}});
    if(!r.ok)return;const pos=await r.json();
    const pl=document.getElementById('POSLIST');if(!pl)return;
    pl.innerHTML=pos.length?pos.map(p=>{const pnl=parseFloat(p.unrealized_pl),up=pnl>=0;
      return `<div class="positem" onclick="document.getElementById('OsYM').value='${p.symbol}'"><div><div class="psym">${p.symbol}</div><div class="pqty">${p.qty} shares</div></div><div><div class="pval">${parseFloat(p.market_value).toFixed(2)}</div><div class="ppnl ${up?'pup':'pdn'}">${up?'+':''}${pnl.toFixed(2)}</div></div></div>`;
    }).join(''):'<div style="padding:8px 10px;font-size:8px;color:var(--txt3)">No open positions</div>';
  }catch{}
}
async function placeOrder(side){
  if(!S.alpConn){toast('Not connected','err');return;}
  const sym=document.getElementById('OsYM')?.value.trim()||'';
  const qty=document.getElementById('OQty')?.value.trim()||'';
  const type=document.getElementById('OTYP')?.value||'market';
  const lim=document.getElementById('OLIM')?.value||'';
  const ost=document.getElementById('OST');const obb=document.getElementById('OBB'),oss=document.getElementById('OSS');
  if(!sym||!qty){if(ost){ost.style.color='var(--bear)';ost.textContent='Enter symbol and qty';}return;}
  if(ost){ost.style.color='var(--gold)';ost.textContent='Placing order...';}
  if(obb)obb.disabled=true;if(oss)oss.disabled=true;
  try{
    const base=S.alpMode==='paper'?'https://paper-api.alpaca.markets':'https://api.alpaca.markets';
    const isCrypto=sym.includes('/');
    const body={symbol:sym,qty,side,type,time_in_force:isCrypto?'gtc':'day'};
    if(type==='limit'&&lim)body.limit_price=lim;
    const r=await fetch(`${base}/v2/orders`,{method:'POST',headers:{'APCA-API-KEY-ID':S.alpKey,'APCA-API-SECRET-KEY':S.alpSec,'Content-Type':'application/json'},body:JSON.stringify(body)});
    const res=await r.json();if(!r.ok)throw new Error(res.message||'Order failed');
    if(ost){ost.style.color='var(--bull)';ost.textContent='✓ Order placed · '+res.id?.slice(0,8)+'...';}
    toast((side==='buy'?'▲ BUY':'▼ SELL')+' '+qty+' '+sym,'ok');
    setTimeout(fetchAlpacaAccount,1500);
  }catch(e){if(ost){ost.style.color='var(--bear)';ost.textContent='✗ '+e.message;}
  }finally{if(obb)obb.disabled=false;if(oss)oss.disabled=false;}
}

// ─── TOAST ───
let toastTimer=null;
function toast(msg,type='ok'){
  const el=document.getElementById('TOAST');el.textContent=msg;el.className='show '+type;
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3200);
}
</script>
</body>
</html>
