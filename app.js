const days = {
zhongshan: {title:'中山',sub:'路地とカフェ、旅のはじまり。',icon:'☕',bg:'#eee8df',meta:'午後から半日 · 歩く量：少〜中',route:'ホテル → 赤峰街 → 心中山 → 南西エリア',stops:[['15:00','まずはホテルでひと休み','荷物を預けて、無理せず出発。遅い到着なら夕食だけでも大丈夫。',''],['16:00','赤峰街で、かわいいもの探し','小さなお店をのぞいて、気になるカフェへ。歩き続けず、途中で座って休憩。','赤峰街 台北'],['18:00','心中山を歩いて、台湾ごはん','夕食は小籠包や台湾家庭料理を候補に。南西エリアで入りやすいお店を選んで。','捷運中山站 心中山'] ],food:'小籠包・台湾家庭料理・豆花。甘いものはみんなでシェア。',rain:'中山地下街や南西エリアの商業施設へ。無理に路地を歩かなくてOK。',move:'MRT中山駅を起点に徒歩。お店ごとに営業時間が違うため、気になるお店は事前確認。'},
jiufen:{title:'九份',sub:'お茶と、山の上の小さな街。',icon:'♧',bg:'#e7ebdf',meta:'昼〜夜 · 歩く量：多／階段あり',route:'台北 → 九份老街 → 阿妹茶樓 → 台北',stops:[['11:00','早めのランチのあと、九份へ','台北から片道約1〜2時間を目安に余裕を持って。渋滞や待ち時間で長くなることがあります。','九份老街'],['14:00','老街を歩いて、芋圓をひとつ','混雑する路地はゆっくり。小吃を少し楽しんだら、茶樓へ向かいましょう。','九份老街 基山街'],['15:30','阿妹茶樓で、お茶の時間','景色と台湾茶を楽しむ休憩を。料金・席・予約方法は公式案内で確認。満席なら別の茶館や早めの帰路へ。','阿妹茶樓'],['17:00','帰る前に、街の風景を','明るさは季節によって変わります。夜景を待つ場合も、帰りの交通と体力を優先して。','九份老街 公車站'] ],food:'芋圓・草仔粿・台湾茶。苦手な食材は買う前に確認。',rain:'雨が強ければ市内の日と交換。階段が難しい場合は九份を外し、中山や信義をゆっくり。',move:'台北発の直行バス、または鉄道で瑞芳へ＋バス・タクシー。楽さを優先するなら往復送迎も候補。茶樓までは徒歩と階段あり。',official:'https://www.a-meiteahouse.com/ja/traffic-information'},
xinyi:{title:'信義',sub:'台北101と、旅のしめくくり。',icon:'▥',bg:'#f1e2df',meta:'午前〜午後 · 歩く量：少〜中',route:'四四南村 → 台北101 → おみやげ → 空港',stops:[['10:00','四四南村から、101を見上げて','古い建物と高いタワーを一緒に楽しむ短い散歩。暑さや雨が気になる日は省略しても。','四四南村'],['11:00','台北101周辺でランチとお買いもの','観景台は天気・時間に余裕があるときだけ。百貨店を全部まわらず、気になる場所をひとつ。','台北101'],['13:00','おみやげを選んで、帰り支度','お茶やパイナップルケーキを候補に。ホテルで荷物を受け取る時間も確保しましょう。','台北101 購物中心'] ],food:'小籠包や麺料理など、座って食べられるランチを。長い行列なら別のお店へ。',rain:'屋内の商業施設と食事を中心に。観景台は視界を確認してから判断。',move:'MRT台北101／世貿駅を起点に。帰国日は航空会社の集合目安から逆算し、空港への移動・荷物回収の時間を別に確保。早い便なら観光は省略。'},
dadaocheng:{title:'大稻埕',sub:'台湾茶と、レトロなおみやげ。',icon:'❀',bg:'#eee6d7',meta:'昼〜夕方 · 歩く量：中',route:'迪化街 → お茶休憩 → おみやげ → 河岸（任意）',stops:[['11:00','迪化街の古い街並みへ','お茶、布、雑貨を見ながら、自分たちのペースで。気になるものをゆっくり選ぶ日。','迪化街 台北'],['12:30','お昼ごはんと、お茶休憩','台湾料理でランチ。午後は茶館やカフェでひと休みして、歩く時間を分けましょう。','大稻埕 台北'],['15:00','おみやげ探しのつづき','持ち帰りやすいお茶やお菓子を候補に。食品の原材料と持ち込み条件は購入前に確認。','永樂市場 台北'],['16:30','元気があれば、河岸まで','暑い日・雨の日・疲れた日は省略。夕景の時間は季節次第なので、待たずに戻っても。','大稻埕碼頭'] ],food:'台湾茶・伝統菓子・台湾料理。お茶の香りを楽しむ休憩を。',rain:'街歩きを短くして茶館中心に。屋内に入れる場所と営業時間を先に確認。',move:'MRT北門駅または大橋頭駅から徒歩。歩く距離を減らしたいときはタクシーで目的地近くへ。'},
beitou:{title:'北投',sub:'緑の中で、ゆったりひと息。',icon:'♨',bg:'#e5e9e3',meta:'午前〜午後 · 歩く量：中／一部坂道',route:'新北投 → 北投公園 → 温泉博物館 → カフェ',stops:[['10:30','新北投から、緑の公園へ','北投公園をゆっくり散歩。図書館周辺の風景も楽しんで。','北投公園'],['11:30','北投温泉博物館へ','温泉の街の歴史にふれる時間。休館日・臨時休館を公式サイトで確認してから訪問を。','北投溫泉博物館'],['13:00','ランチと、のんびり休憩','カフェや食事処でゆっくり。入浴は希望するときだけ、施設の条件・料金を確認して予約。','新北投站'],['15:00','早めに市内へ戻る','ホテルで休憩したり、気になったお店へ再訪したり。余白も旅の楽しみ。','新北投站'] ],food:'温かいランチとお茶。入浴をする場合は予定を詰めず、休憩時間も確保。',rain:'強い雨なら市内のカフェ・買いものへ変更。博物館の休館日なら他の日と入れ替え。',move:'MRT北投駅で新北投支線に乗り換え。入浴代・予約はこのプランに含まれません。',official:'https://culture.gov.taipei/cp.aspx?n=680DE22A4F00B25F'}
};
const plans={3:['zhongshan','jiufen','xinyi'],4:['zhongshan','jiufen','dadaocheng','xinyi'],5:['zhongshan','jiufen','dadaocheng','beitou','xinyi']};
const summaries={3:'3日間｜中山・九份・信義。定番を楽しむ、コンパクトな旅。',4:'4日間｜定番の3エリアに、大稻埕のお茶と街歩きをプラス。',5:'5日間｜大稻埕と北投も。休憩とよりみちを楽しむ、ゆったり旅。'};
const zhDays={"zhongshan": {"sub": "從巷弄與咖啡館，開始這趟旅行。", "stops": [["先到飯店休息", "寄放行李再出發；如果較晚抵達，只安排晚餐也沒關係。"], ["赤峰街，尋找喜歡的小東西", "逛逛小店、挑間咖啡館，途中記得坐下休息。"], ["散步心中山，再吃台灣料理", "晚餐可選小籠包或台灣家常菜，在南西商圈找間合適的店。"]]}, "jiufen": {"sub": "喝杯茶，走進山上的小城。", "stops": [["早點吃午餐，再出發九份", "台北出發單程約抓 1～2 小時，塞車與候車可能更久。"], ["逛老街，吃一碗芋圓", "人多的巷弄慢慢走，吃點小吃後再前往茶樓。"], ["阿妹茶樓的喝茶時光", "賞景品茶；費用、座位與預約請看官方資訊，客滿可換茶館或提早返回。"], ["回程前，再看看山城", "天色依季節不同，等夜景也要顧好回程交通與體力。"]]}, "xinyi": {"sub": "台北 101，為旅程留下美好的結尾。", "stops": [["從四四南村，仰望 101", "短程散步欣賞老屋與高樓，太熱或下雨可以省略。"], ["在 101 周邊吃午餐、逛街", "天氣與時間允許再上觀景台，百貨挑喜歡的一間就好。"], ["挑好伴手禮，準備回程", "茶葉與鳳梨酥都是候選，也要預留回飯店拿行李的時間。"]]}, "dadaocheng": {"sub": "台灣茶與復古小物，慢慢挑、慢慢逛。", "stops": [["走進迪化街的老街風景", "看看茶葉、布料與雜貨，按照自己的步調挑選。"], ["吃午餐，喝杯茶休息", "午餐吃台灣料理，下午在茶館或咖啡館休息，分段散步。"], ["繼續尋找伴手禮", "挑好攜帶的茶與點心，先確認食品成分與入境攜帶規定。"], ["還有精神，就到河岸走走", "太熱、下雨或累了就省略；夕陽時間依季節變化，不必特別等候。"]]}, "beitou": {"sub": "在綠意裡，留一點放鬆的時間。", "stops": [["從新北投走進公園", "慢慢散步，也欣賞圖書館周邊的風景。"], ["拜訪北投溫泉博物館", "認識溫泉鄉的歷史，出發前確認官方休館與臨時公告。"], ["吃午餐，悠閒休息", "想泡湯再安排，先確認設施條件、費用並預約。"], ["早點回市區，自由安排", "回飯店休息，或重訪喜歡的小店，留白也是旅行的樂趣。"]]}};
const zhSummaries={3:"3 天｜中山、九份、信義，輕鬆收藏經典景點。",4:"4 天｜經典路線再加大稻埕，喝茶與老街散步。",5:"5 天｜再訪北投，留更多時間休息、隨興走走。"};
const zhNote=text=>`<span class="zh-note" lang="zh-TW">${text}</span>`;
const map=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
function render(n){document.querySelector('#plan-summary').textContent=summaries[n];document.querySelector('#plan-summary-zh').textContent=zhSummaries[n];document.querySelectorAll('[data-days]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.days)===n)));document.querySelector('#days').innerHTML=plans[n].map((key,i)=>{const d=days[key], z=zhDays[key];return `<article class="day" style="--day-bg:${d.bg}"><div class="day-intro"><span class="day-number">DAY ${String(i+1).padStart(2,'0')}</span><div class="day-icon" aria-hidden="true">${d.icon}</div><h3>${d.title}</h3><p class="day-sub">${d.sub}${zhNote(z.sub)}</p><div class="day-meta">${d.meta}<br>時刻は目安・途中で休憩を</div></div><div class="day-body"><p class="route">${d.route}</p><div class="stops">${d.stops.map((s,j)=>`<div class="stop"><span class="time">${s[0]}</span><div><h4>${s[1]}${zhNote(z.stops[j][0])}</h4><p>${s[2]}${zhNote(z.stops[j][1])}</p>${s[3]?`<a class="map-link" target="_blank" rel="noopener noreferrer" href="${map(s[3])}" aria-label="${s[3]}をGoogle Mapsで開く">地図をひらく ↗</a>`:''}</div></div>`).join('')}</div><div class="day-details"><p><b>♧ 食べたいもの</b><br>${d.food}</p><p><b>☂ 雨の日・お疲れの日</b><br>${d.rain}</p></div><p class="transport">↳ ${d.move}${d.official?` <a target="_blank" rel="noopener noreferrer" href="${d.official}">公式案内 ↗</a>`:''}</p></div></article>`}).join('');document.title=`${n}日間の旅｜さくらちゃんの台北さんぽ`;}
document.querySelectorAll('[data-days]').forEach(b=>b.addEventListener('click',()=>render(Number(b.dataset.days))));document.querySelector('#print').addEventListener('click',()=>window.print());render(3);

// Native dialog keeps keyboard focus inside the brief welcome.
(() => {
  const welcome = document.querySelector('#sakura-welcome');
  const replay = document.querySelector('#welcome-replay');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let autoClose, finishClose, previousFocus;
  for (let i = 0; i < 18; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.cssText = `--left:${(i * 37) % 100}%;--size:${9 + (i % 5) * 3}px;--duration:${5 + (i % 4)}s;--delay:${-(i % 7) * .85}s`;
    welcome.querySelector('.petals').append(petal);
  }
  function finish() {
    clearTimeout(autoClose); clearTimeout(finishClose);
    welcome.close();
    document.body.classList.remove('welcome-open');
    if (previousFocus instanceof HTMLElement && previousFocus !== document.body) previousFocus.focus({preventScroll:true});
  }
  function dismiss() {
    if (!welcome.open || welcome.classList.contains('is-leaving')) return;
    clearTimeout(autoClose);
    if (reduceMotion.matches) { finish(); return; }
    welcome.classList.add('is-leaving');
    finishClose = setTimeout(finish, 650);
  }
  function show() {
    if (welcome.open || typeof welcome.showModal !== 'function') return;
    previousFocus = document.activeElement;
    welcome.classList.remove('is-leaving');
    welcome.showModal();
    document.body.classList.add('welcome-open');
    autoClose = setTimeout(dismiss, reduceMotion.matches ? 1600 : 3200);
  }
  welcome.querySelector('.welcome-skip').addEventListener('click', dismiss);
  welcome.addEventListener('cancel', event => { event.preventDefault(); dismiss(); });
  welcome.addEventListener('close', () => { clearTimeout(autoClose); clearTimeout(finishClose); document.body.classList.remove('welcome-open'); });
  reduceMotion.addEventListener('change', () => { if (reduceMotion.matches && welcome.open) finish(); });
  replay.addEventListener('click', show);
  if (!reduceMotion.matches) show();
})();
