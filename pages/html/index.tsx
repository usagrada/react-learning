import styles from "~/styles/Home.module.css";

export default function Home() {
  return (
    <main role="main" className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>My Learning Site</h1>
        <div>
          <p>
            The{" "}
            <strong>
              HTML <code>&lt;blockquote&gt;</code> Element
            </strong>{" "}
            (or <em>HTML Block Quotation Element</em>) indicates that the
            enclosed text is an extended quotation.
          </p>
          <p>
            The quote element — <code>&lt;q&gt;</code> — is{" "}
            <q cite="https://developer.mozilla.org/ja/docs/Web/HTML/Element/q">
              intended for short quotations that dont require paragraph breaks.
            </q>
          </p>
          <p>
            According to the{" "}
            <a href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/blockquote">
              <cite>MDN blockquote page</cite>
            </a>
            :
          </p>

          <blockquote cite="https://developer.mozilla.org/ja/docs/Web/HTML/Element/blockquote">
            <p>
              The{" "}
              <strong>
                HTML <code>&lt;blockquote&gt;</code> Element
              </strong>{" "}
              (or <em>HTML Block Quotation Element</em>) indicates that the
              enclosed text is an extended quotation.
            </p>
          </blockquote>
          <blockquote cite="https://developer.mozilla.org/ja/docs/Web/HTML/Element/blockquote">
            <p>
              The{" "}
              <strong>
                HTML <code>&lt;blockquote&gt;</code> Element
              </strong>{" "}
              (or <em>HTML Block Quotation Element</em>) indicates that the
              enclosed text is an extended quotation.
            </p>
          </blockquote>
        </div>
        <div>
          <label htmlFor="fuel">Fuel level:</label>

          <meter
            id="fuel"
            min="0"
            max="100"
            low={33}
            high={66}
            optimum={80}
            value={10}
          >
            at 50/100
          </meter>
          <dl>
            <dt>独白( soliloquy )</dt>
            <dd>
              ドラマでは、登場人物が自分自身にしゃべりかけ、内なる考えや感情や、そうなった過程を(他の登場人物ではなく)観客に対して表現します。
            </dd>
            <dt>独白( monologue)</dt>
            <dd>
              ドラマで、登場人物が自分の考えを観客や他の登場人物に伝わるように喋ります。
            </dd>
            <dt>ひそひそ話</dt>
            <dd>
              ドラマで、登場人物が観客のみに対し、ユーモアやドラマチックな効果を狙ってコメントをします。これは通常は感情や、考えや、追加の背景情報です。
            </dd>
          </dl>
        </div>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </div>
      <aside>aaaaaaaa this is aside contents</aside>
    </main>
  );
}
