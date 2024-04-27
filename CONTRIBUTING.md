# TNP 部内規約へのコントリビューション

## 部内規約の更新、リリース

Release は部内規約を参照しやすいように PDF 版を置く場所です。部内規約の更新が承認されたら main ブランチを更新してください。

## ブランチの運用方針

main ブランチは現行規約を保存する場であり、直接編集されることを意図していません。Pull Request なしに編集しないでください。

## ブランチの命名規則

必要に応じて変更してもかまいません。

- ``yyyy-mm-dd`` の部分は同日に複数回にわたる変更がある場合には連番を用いてください。

### 規約の変更 (確定)

```plaintext
term-update/yyyy-mm-dd
```

### 規約の提案

```plaintext
term-suggestion/[提案の説明]/yyyy-mm-dd
```

### 機能の追加

```plaintext
feature/[機能の名前を入れる]/yyyy-mm-dd
```

### 機能の修正

```plaintext
enhancement/[修正の内容を入れる]/yyyy-mm-dd
```
