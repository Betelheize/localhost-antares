
const styles = `

    @import url('https://fonts.googleapis.com/css2?family=Google+Sans+Text:wght@400;500;600;700&display=swap');

    * {
        padding: 0;
        margin: 0;
    }

    body {
        background-color: black;
        font-family: 'roboto', sans-serif;
        font-feature-settings: normal;
        font-variant-caps: normal;
        color: rgb(128 140 156 / 1);
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
    }

    a {
        color: #81c786;
        text-decoration: none;
        font-size: 1.2em;
    }

    h1 {
        display: none;
    }

    ul {
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 10px;
    }

    li {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: black;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
        border: 1px solid #2E3C51;
        white-space: nowrap;
        padding-left: 100px;
        padding-right: 100px;
    }

    .mainDiv {
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .container {
        display: flex;
        flex-direction: row;
        width: 100%;
        max-width: 1000px;
        height: 230px;
        border-radius: 10px;
        border: 1px solid #2E3C51;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: break-spaces;
        position: relative;
        background: #0c1016;
    }

    .container::-webkit-scrollbar {
        display: none;
    }

    .mainDiv::before {
        content: "";
        background: linear-gradient(267deg,#171222 17.33%,#25a6e9 100.47%);
        opacity: .5;
        pointer-events: none;
        position: absolute;
        left: 5rem;
        right: 5rem;
        top: 0.5rem;
        bottom: 0;
        z-index: -10;
        transform: translate3d(var(--tw-translate-x),var(--tw-translate-y),0) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        filter: blur(64px);
        transition: opacity .5s ease;
    }

`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


let svg = `
    <svg id="bannerSVG" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-300 0 1680 638" style="background: black;">
    <text  x="5" y="5" fill="#7d9ddf" style=" transform: rotate(10deg);font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">        a     en tts /              ggt                                          eosnvanoi eolna/           /mgn o0/ecgabi sapgeommmemmmoegpacdibagca/s9 ngm/             /aettnep tavms                                                 ym                  nul</text>
    <text x="5" y="17.076923076923077" fill="#7d9ddf" style="transform: rotate(10deg); font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">   t     ,f tsrn              i v                                      nlra mapomg/       mno/ieaele u    et                                                 t op  s  ia agd6nm          giatcstr o                                            ra               </text>
    <text x="5" y="29.153846153846153" fill="#7d9ddf" style="transform: rotate(40deg); font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">     helutli             boc                            n      l aiiho m      a ightf    s          t            c                                    A        p   o           re  oef aa9g        iert ee                                           i          </text>
    <text x="5" y="41.230769230769226" fill="#7d9ddf" style="transform: rotate(70deg); font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">sl  arb             bfh                          n    e ocinmri/    ie  ply                  c          I                                                                      s  w         p M cat9a       anaileho                                       /    </text>
    <text x="5" y="53.30769230769231" fill="#7d9ddf" style="transform: rotate(20deg); font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">arb            ip                          a    oie aoda    ieleee  t      t     c                    ak   ob etofuewoglhhffuuaaaacccaaaauf  ssagietr nopk,c h  H                                    e d ,tig      /e p  e,                                    c</text>
    <text x="5" y="65.38461538461539" fill="#7d9ddf" style="transform: rotate(100deg); font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">           egc                       n    tteg   i   /elsil                             o ,tr,omohun tr hie  ,,                                         la  e yresicf o sge   sa                t    d       fscorsg      gakiih,                               </text>
    <text x="5" y="77.46153846153845" fill="#7d9ddf" style="transform: rotate(220deg); font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">       ian                            u sirg   /eehl  s      l                a r osnunmr s  c      l                                                        c   n     u e  d bicnd  e m e                         o dia i      ntwxae                          </text>
    <text x="5" y="89.53846153846153" fill="#7d9ddf" style="transform: rotate(310deg); font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">    re                      a   hicnsra   mm  y                        ,lis lnn t e           t       t           ,lawe  nytaseeiiiiiyeshal    d,Hcc                       n  o     dlnsyir iiec k                       e  c  /     gapx                       </text>
    <text x="5" y="101.61538461538461" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">apa                     y    rhpr /  imnyy              R       ,otooda n i   f          c      a rdsapflsolrphar   s                           s    i ecstsrsrl aadC       o     n  n       orsc iaue  a              s        re A      etvi                  </text>
    <text x="5" y="113.6923076923077" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">                    n    uep e   aos       h             H su ufoi f       h    h       taioll r       i               od                 tot           r    n       cesonId yee             h      r rrrp l, a             y      p ag g     i  sh             </text>
    <text x="5" y="125.76923076923077" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">       m            tinihii  mme        o h   H       tdhdnw n    k           aaincfc      n  a     o  ou,hatea fuu nv i     utinslnitu       in iprdkt m oic   m     r        iymipay               i     seltass s                     e,wg     naeag         </text>
    <text x="5" y="137.84615384615384" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">                 tt ofe   eibe      l h         toopsnw n  e           oeinrl g          o  ep  a enc a                     tislg,,glsnt            d        l  sirtreihr              tee dy e    n   n u     s slta n ti                 l eag/    io H       </text>
    <text x="5" y="149.9230769230769" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">           y  e n fn  /f i            D     isrhnli,             ad noih            l aet c            gki  ga yt eo   beijro         uoM  an       u y   er            n sbrtmtg           r  e d r        g i     tbar oamit                 nrnig     h ei   </text>
    <text x="5" y="162" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">              ehs/  eal     n            rh st               e ngcc        o  ctee    d      ih er  n am              ao bnm  aammmaa  mob ci                t o ul  el      f  h  mnupr           Eutl e               ybar ei s                 ouotg     rrHt</text>
    <text x="5" y="174.07692307692307" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">      a  e, pri  aoct                 lehf  f   t       e r      p    m cin           h g ri o        j sci          o                       n   a      l  b          n m y  bi       nstre o m       t  aIn r   g        rhdegtsrehc                eG,ai    at</text>
    <text x="5" y="186.15384615384616" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">    J  tdhc a  nta      l    H     kuaa  n             nioe  n      h /        t  M m K       za           o,           l                 a         se ,          lboa       a  u  h     p a ie  e        ta laer              eeleereni                 ile    </text>
    <text x="5" y="198.23076923076923" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">  o  et o a  eai                 sfs ne           nfw a    d   at     h    ,  atd      vs                   hd        t ti n  aoooo e e cl     d   eh  r l    i          lm     a o tby le       ie hl       r armh r            e eerow v                gnro  </text>
    <text x="5" y="210.3076923076923" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">    ienoi  iu O              u ipa  y s        Cln r        untl       c io t      aa     fe      t       ia r                i    i         o mi    ai      an        r       ty      e su ty     li ruc m       armn         u   Fl  ueednn       o       rcio</text>
    <text x="5" y="222.3846153846154" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">    esmi i dk     g        itcla  p e         guge         il      ii iw      Uc     r        e    a       ve    t    a a u a          a m    t      tu   te         a      k   a    jg    dnblni        rnl     l    leti           Loz eelash                b</text>
    <text x="5" y="234.46153846153845" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">  oeoe  iu d               nlsgif          ,nuag       mr/ a     p iwa      ,      s l  i   ag         ,sa    i         r               l   T  ia, f S   tn t  ea   r    e     u       ,      acblgn     o  eeo        nlreo   f       nibcue et                </text>
    <text x="5" y="246.53846153846155" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;"> ti n  nar              a ilr         l  m wie       mt/sf    g Mr      b     n n    b           l , t t     l          m      uit   c s    |   i    h  l i t g        ,vl   er   in      ucs   u  ycc  a  ofae b   k  x yak i       e    msnaoi t       s      </text>
    <text x="5" y="258.61538461538464" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">ddo / ntb               ar in     i      ry       s n n     ns r       m    s     s   rn    oJ halo    a       t e e ,               n   nt i t e n    r          i    C   ga    dm  uk            , b a  r   v  t o   a    a,       ,    Lricae me         e   </text>
    <text x="5" y="270.6923076923077" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">htmi arrf      a  ,   a  biv     i    raece        tnc     r ;ia    b     o        m    h s r    a t       ta  o B   a h    i i   v  e sea t o   Bo c  s p d   T     tr u    na   o,          t     o Abrt      ia a      i  aog            pr eerd          d  </text>
    <text x="5" y="282.7692307692308" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">sfn /Pnc              ttana            iy   /    orno a     j      s    s    me       h e  t  e      t         le o  c                     r   e   i     n   aS    a       e,       ea         h      p bpe   /  ld i        hcki           u,zcae  e          s</text>
    <text x="5" y="294.8461538461538" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">rna mfke      a  e    atosoe l       u ina     ,    t    e  ir     i   s     h  m    i                  na                                       c   r       c  Sln  l   tn cni      M     n    e      s c t   e   a s      o tmi            Ft Worw y          </text>
    <text x="5" y="306.9230769230769" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">cmm gr,O              aratsi li   l  nelo  r      ni /   hgr  ,  oy     ,          ,     c n     t   h                                                 s      s       i         e a H      s      s    i  lvs    rd  g t     ees  l           craplai          e</text>
    <text x="5" y="319" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">ona aorf              aratni l    l  ngor  t    m rn     w n                d  t  a i  l a a   i     n  er                                             r    ie  p i   o  i tJ ,    t  h          ll    n  , t      eg a    a s,cohd        a   t ouogac         </text>
    <text x="5" y="331.0769230769231" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">nai mnda              n o oe g       d e e     eeirel    s a      e         i   d         t      a                                                      ean          c et gi cn   i   nta   e     f    o A ug      aghi    a s,cohn   o        y ou iKa         </text>
    <text x="5" y="343.15384615384613" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">dq i/nrr    ii        bn np e        air e       b l   u n        U                 ,  i   g  lni          e   - p                                      ,ce             , rJ      i              u g   eiel S m  u,mk       rlle  l        i   aatvs gn         </text>
    <text x="5" y="355.2307692307692" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">s fn/iavi             re ana          aaaJ        eif     s              s    c      a   hl       ib        aa       t                        iisa         d      T  i  f s  g   h       m      uoe   j o er      er,b      e wma       C    nreeogr e          </text>
    <text x="5" y="367.3076923076923" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">  oti/mcac              hcena     l    eee i       ,wie y   pop      e     4       t   a   n     e        t i  x   i   ctf    t   l   e    i   x r  w        t i    d l s                      nol     alop      el        t ee i,            iytvsaah          </text>
    <text x="5" y="379.38461538461536" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;"> genai/mnbk             nitdsi c      r  neslu     t ai      i an     li   g  c       t       h          H      M d c  ,   et     e   , m  s M                l nb i     t   i   n     h      s    es   l  m  lit c       e  e i,        g   skror ol           </text>
    <text x="5" y="391.46153846153845" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">  rora iianc    it          wii r         eur    t   v nw       h p i    U     r h    b  n        y , t g  n      n lm a   n   de n      t           a   i i t o    n    o    ef           r      nrmlnl       i p      et,ewa              i roe ol       h    </text>
    <text x="5" y="403.53846153846155" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">    nilta/g i'              a hii i y       eur        h   i  i   n         b    g i      r   a d   i t sh l elT    e          rra               ot   ho c      a   d c H  p c  h d ,    o n   o    h        w   m   p n e olet          -lwiys  nh             </text>
    <text x="5" y="415.6153846153846" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">          mietoi              ao,ienr g         f  e      c li   d   g  pbr                    i    tdr   en      m    t                  n  a           n      v     s      es       a     i,te  g       emor       e   osi             s dsed v               </text>
    <text x="5" y="427.6923076923077" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">    a  eoesTmietod               atn e           sfeosg      s   iri  f  e aty       e   d   iu    i         i  ee i         ot  to            o vto    ac       ne       n       o    u    u ep        oku       ea  roll             me mnedn        h       a</text>
    <text x="5" y="439.7692307692308" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">      r  s buhaiitnu     i    i   de ,ne t          v       n     eniir/      p vn        oi         ast        g  r          aaaa        n     c   e              ;r        po g       m p     l l rrdr      a e oelJ               ns merii          i      tf</text>
    <text x="5" y="451.8461538461538" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">            nlarnimonc               ee ,nno    e    e  yeers   i    h eoo ed         lnc   s     bo t      c    za s ,                nt Mr em,         e oa          hu n      etaA  n    n   l5, d t      o oelae,o       ss   ,oypse  m c        i      t on</text>
    <text x="5" y="463.9230769230769" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">  o        t   pyeegigcic           s     h tpioe        r  t  th i       h ml o  ,       s  ts              j  on s                      ia noe              tect a          uh          ifrl k             aomt    f    n      s mpsgfg        e        c,on  </text>
    <text x="5" y="476" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">              n  eebeeiigt/cn     t         dbrn hiRr   p         i t so           cc o e          gd  om1t t           s             l          pe h eu d     i  u  f vg n e     e  wctl, i       c n,  s  eoa      n  s     s bi o a d               s p a    </text>
    <text x="5" y="488.0769230769231" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">                 p  b l,yemm 1nc                o dcern  p n e y   r   lerhPi           h  5d nS s                  gnadnah         hh ueR             i d   auA a  p            tarld        a gw prop  dt             Fltan psns                   r  a      n</text>
    <text x="5" y="500.15384615384613" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">ir                   s  gt etimaar,u      o o   i    dkac nh c   o   y       vneScsncm    a  i     s  t5    tpu    n     espin  tip,es    ee  ueih    m                w wtorfci  m        pa  oopJel                 iu hiv  gwe                 o  p/     iio </text>
    <text x="5" y="512.2307692307693" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">  aen                        s ernma tac         o          o wilh c e           ,    unli wl  i                         ioSfos ofSoi                 n     u iortwed na            one eoocua  s           r   nnonn iie  o g                 oalp/      stat  </text>
    <text x="5" y="524.3076923076923" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">     iuei         u          t  rpi eegmg 3ieR      e      i     rgwtnilhil em l  p  y           iy u e  hwl to  t dir                 oxw   cnw ii r slli n                eis yesoctt s i        n       isissM pno a le                 ii,cb       aiai     </text>
    <text x="5" y="536.3846153846154" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">          ebe                        tpl deimaesfgs          o    t     a b tb t nn o hv                   ,              irp   prd             o         o   e   gipe  er giett,                      ,cn M pnd hg                     rJlum      alu          </text>
    <text x="5" y="548.4615384615385" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">  e          eus           t           t  ttf l hiaaeso ,R                d         e ocantiomns s uls   gus     a                        p      ,dex, lg tctt fgiiyotig a              n y    F rvn Meaiaawy  d                    c lam       csca            </text><text x="5" y="560.5384615384615" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">e  ugfni         irro           a            a  y fh tr gag itn         t                     a  gmhhotia ntiinooh  l sti          ito e  eofnniygfbhe, san  t              e           de yniae ta  km tci                    , roa        coie                </text><text x="5" y="572.6153846153846" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">  ore n   se          mrrMe                        c   l eikn  egager1agr                           u                    tatssstati                   m         m      o       d rhfo aeeaitr s   nt                      , uhei       a hac                    </text><text x="5" y="584.6923076923076" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">       onv n e  n            ug,                           t     eo eelr igai eotaods            ,    e        a                           m        d   r          e griso tsene ixbl d  u mo                        c  f         iaogr                         </text><text x="5" y="596.7692307692307" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">            hte H  alei           ebiwe                             in   l   l redi  ngggiegecmotgotsa R                                         ne g,alianpolb ennej tcbr raa  lsrn                          eiJi b/        gytie                              </text><text x="5" y="608.8461538461538" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">                   r    t fri           /duiwl                                  tn   dt .p ehie,b lcn   eniigggiiinnee   sRRRRRRss   eennniiinnee  ynteh oa  khya   uyei                                i oara         maot                                     </text><text x="5" y="620.9230769230769" fill="#7d9ddf" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;">                         i     s ee             arunoi                                          iant    s,dat      n epysatttttaaspe n g    tan,s aretgr                                       sh e te           ebtgn                                          </text><text x="696.1276083984375" y="294.8461538461538" font-weight="bold" fill="white" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;" fill-opacity="1"> __  __ _    _  _                            </text><text x="696.1276083984375" y="306.9230769230769" font-weight="bold" fill="white" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;" fill-opacity="1">|  \/  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _ </text><text x="696.1276083984375" y="318.99999999999994" font-weight="bold" fill="white" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;" fill-opacity="1">| |\/| | / _| || / _ \ || | '_| ' \/ -_) || |</text><text x="696.1276083984375" y="331.07692307692304" font-weight="bold" fill="white" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;" fill-opacity="1">|_|  |_|_\__,_|/ \___/\_,_|_| |_||_\___|\_, |</text><text x="696.1276083984375" y="343.15384615384613" font-weight="bold" fill="white" style="font-size: 10.8692px; dominant-baseline: hanging; white-space: pre;" fill-opacity="1">             |__/                       |__/ </text></svg>
`

var parser = new DOMParser();
var doc = parser.parseFromString(svg, "image/svg+xml");

var text = doc.getElementsByTagName('text');
var textLength = text.length;
var x = 5;
var y = 5;
var yGap = 12;
var xGap = 5;

for (let i = 0; i < textLength; i++) {
    text[i].setAttribute('x', x);
    text[i].setAttribute('y', y);
    y += yGap;
    x += xGap;
}

svg = new XMLSerializer().serializeToString(doc);


var ul = document.getElementsByTagName('ul');

var mainDiv = document.createElement('div');
var container = document.createElement('div');
container.className = 'container';
mainDiv.className = 'mainDiv';

container.appendChild(ul[0]);
mainDiv.appendChild(container);
document.body.appendChild(mainDiv);
document.body.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundAttachment = 'fixed';

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("keydown", function (e) {
    if (e.which === 123) {
        e.preventDefault();
    }
});
