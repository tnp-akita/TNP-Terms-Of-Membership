# プログラミングサークルTNP 会員規約リポジトリ

このリポジトリは、プログラミングサークルTNP の会員規約をすべての人に公開し、またその履歴を管理するために作成したものです。
リポジトリの編集は会長のみに制限されていますが、Issue や Pull Request や Discussion による積極的な議論を歓迎します。

## 管理上の注意

会員規約を更新する場合は Release を用いて PDF でも公開することが推奨されます。

## PDF 版を生成する

以下の手順に従ってください。

1. ``node`` ``npm`` ``git`` をインストールする
   - [Node.js](https://nodejs.org/)
   - npm は Node.js と一緒についてきます
   - [Git](https://git-scm.com) ([Git for Windows](https://gitforwindows.org)も可)
   ※すべてインストールしたら、ターミナルを閉じてもう一度開き直してください
2. このリポジトリを clone する
3. カレントディレクトリを、今 clone したディレクトリに移動する
4. ``npm install`` を実行する
5. ``npx generate-pdf`` を実行する

ファイルは ``generated/styled.pdf`` に出力されます。

> [!TIP]
> Windows では以下を PowerShell で実行すると簡単です。
>
> ```ps1
> winget install Git.Git OpenJS.NodeJS -e --source winget
> powershell
> git clone https://github.com/tnp-akita/TNP-Terms-Of-Membership.git
> cd ./TNP-Terms-Of-Membership
> powershell ./scripts/build.ps1
> exit
> ```

## 作成・更新

- @NitCelcius, 2024-04-27
