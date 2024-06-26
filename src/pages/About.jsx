import React from 'react';
import './About.css'; // 会社概要ページ用のCSSファイルを読み込みます

const About = () => {
  return (
    <div>
      <main>
        <section>
          <h2>私たちについて</h2>
          <p>
            弊社は1994年に設立され、30年以上にわたり高品質なインテリアデザインサービスを提供して参りました。
            クリエイティブなデザインと実用性を兼ね備えた空間作りで、多くのクライアントから高い評価を受けています。
            豊富な経験と専門知識を持つスタッフが、お客様一人ひとりのニーズに合わせた最適な提案を行います。
          </p>
        </section>
        <section>
          <h2>ビジョンとミッション</h2>
          <p>
            私たちのビジョンは、インテリアデザインによって人々の生活を豊かにすることです。
            どんな空間も、私たちの手にかかれば、安らぎと活力を提供する場所へと変貌します。
            このビジョンを実現するために、持続可能な材料を使用し、環境に配慮したデザインを心がけています。
            お客様の満足だけでなく、地球環境への貢献も私たちのミッションの一部です。
          </p>
        </section>
        <section>
          <h2>私たちのサービス</h2>
          <p>
            弊社では、以下のような多様なインテリアデザインサービスを提供しています。
            <ul>
              <li>住宅インテリアデザイン</li>
              <li>オフィス空間デザイン</li>
              <li>商業施設デザイン</li>
              <li>リノベーションプロジェクト</li>
            </ul>
            各プロジェクトは、初期のコンセプトから完成に至るまで、お客様と密接に連携し、細部にわたるまでこだわり抜いたデザインを実現します。
          </p>
        </section>
        <section>
          <h2>お問い合わせ</h2>
          <p>
            お問い合わせやサービスのご相談については、ウェブサイトのコンタクトフォームからお気軽にご連絡ください。<br />
            また、直接お電話でのお問い合わせも歓迎しております。<br />
            私たちは、お客様からのご連絡を心よりお待ちしております。
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
