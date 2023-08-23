/*このroute.tsはapp配下のapiディレクトリ内にあるため、"/api"が呼び出された時の処理を書くことができる。
  例えば、"/api"が呼ばれた時にAPIGatewayで設定したエンドポイントを設定すれば、Lambdaの処理が実行される。

  Laravelのapi Controller処理を同じなのではないか？
  例えば送信ボタンのURlを'feeling/api/create'、通信方式を'POST'にした場合、
  送信ボタンを押すと、その情報が'feeling/api/create' POSTの処理を行える。
  この処理のredirect先をバックエンドの該当パス(app/Http/Api/feelingController/create()的な)にしておけば、
  簡単にAPI通信ができるのでは？
 */
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  redirect('https://nkkn-blog.com/')
}