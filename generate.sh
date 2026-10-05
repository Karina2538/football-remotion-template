#!/bin/bash

# ၁။ GitHub Username နှင့် Repo Name သတ်မှတ်ခြင်း
REPO_OWNER="Karina2538"
REPO_NAME="football-remotion-template"

echo "🚀 GitHub Actions ပေါ်တွင် Remotion Video Render စတင်နေပါပြီ..."

# ၂။ Match Data များကို Cloud Action သို့ Dispatch ပို့ခြင်း
gh api repos/$REPO_OWNER/$REPO_NAME/dispatches \
  -f event_type='render-video' \
  -F client_payload='{
    "language": "my",
    "title": "ပွဲကြိုသုံးသပ်ချက်",
    "homeTeam": "မန်ချက်စတာ ယူနိုက်တက်",
    "awayTeam": "အာဆင်နယ်",
    "matchTime": "ဒီနေ့ည ၁၀:၀၀ နာရီ",
    "stadium": "အိုးထရက်ဖို့ဒ် ကွင်း",
    "homeLogo": "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    "awayLogo": "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    "fanClip": "",
    "homeLineup": [
      { "number": 24, "name": "အိုနာနာ", "position": "GK" },
      { "number": 20, "name": "ဒါးလော့တ်", "position": "DF" },
      { "number": 6, "name": "မာတီနက်ဇ်", "position": "DF" },
      { "number": 4, "name": "ဒီလစ်ခ်ျ", "position": "DF" },
      { "number": 3, "name": "မာဇရာဝီ", "position": "DF" },
      { "number": 18, "name": "ကာစီမီရို", "position": "MF" },
      { "number": 37, "name": "မေနူး", "position": "MF" },
      { "number": 8, "name": "ဖာနန်ဒက်စ်", "position": "MF" },
      { "number": 17, "name": "ဂါနာချို", "position": "FW" },
      { "number": 10, "name": "ရက်ရှ်ဖို့ဒ်", "position": "FW" },
      { "number": 11, "name": "ဟော့ဂျလန်း", "position": "FW" }
    ]
  }'

echo "⏳ Cloud တွင် Render ဆွဲနေပါသည်... စက္ကန့် ၉၀ ခန့် ခေတ္တစောင့်ဆိုင်းပါ..."
sleep 90

echo "📥 ထွက်လာသော Video ကို ဖုန်းထဲသို့ Download ဆွဲယူနေပါသည်။..."
mkdir -p output
gh run download --name football-video --dir ./output

echo "✅ ပြီးပါပြီ! ဗီဒီယိုဖိုင်ကို ./output/output.mp4 တွင် ရယူနိုင်ပါပြီ။"
