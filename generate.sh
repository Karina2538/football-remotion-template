#!/bin/bash

echo "🚀 GitHub Actions တွင် Render စတင်ခိုင်းနေပါပြီ..."

# Direct Workflow Run ကို ခေါ်ယူခြင်း
gh workflow run "Render Football Video"

echo "⏳ Render ဆွဲနေပါသည်။ အခြေအနေကို စစ်ဆေးရန် ခေတ္တစောင့်ပါ..."
sleep 20

# Run Status စစ်ဆေးခြင်း
gh run list

echo ""
echo "💡 အကယ်၍ status က 'in_progress' ဖြစ်နေပါက စက္ကန့် ၆၀ ခန့် ထပ်စောင့်ပြီး အောက်ပါ command ဖြင့် Download ဆွဲပါ:"
echo "gh run download --name football-video --dir ./output"
