# tuatsboard-linebot
TUAT S科掲示板更新通知LINEBOT on GAS

情報工学科の掲示板をスクレイピングして，該当学年だけ更新通知をするLINEのBOTです．


## セットアップ
1. LINEBOTのトークンを取得し控える


1. googleドキュメントを新規作成し，IDを控える
1. googleスプレッドシートを新規作成し，IDを控える
1. gsファイルの各トークンを埋める(☆で検索するといいです)
1. webアプリケーションとして公開
1. PostLine.gs内，main関数を時間をトリガーにして定期実行

学年やカテゴリーはGetTUATBoard.gs内でカスタマイズできます
