# パッケージを導入
npm install

# Style と規約部分を結合して generated フォルダに保存
Get-Content -Encoding utf8 ./Styling.md, ./TNP_Terms_Of_Membership.md | Set-Content -Encoding utf8 ./generated/styled.md

# styled.md を PDF に変換
npx md-to-pdf .\generated\styled.md