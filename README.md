# tuatsboard-linebot

TUAT S科掲示板更新通知LINEBOT on GAS

![img](https://user-images.githubusercontent.com/42219754/77658161-a10f7880-6fb9-11ea-94d1-91b65d4cd2db.png)


情報工学科の掲示板をスクレイピングして，該当学年だけ更新通知をするLINEのBOTです．



## セットアップ

1. LINEBOTのトークンを取得し控える


1. googleドキュメントを新規作成し，IDを控える
1. googleスプレッドシートを新規作成し，IDを控える
1. gsファイルの各トークンを埋める(☆で検索するといいです)
1. webアプリケーションとして公開
1. PostLine.gs内，main関数を時間をトリガーにして定期実行


## その他


学年やカテゴリーはGetTUATBoard.gs内でカスタマイズできます
