import "./Sec-news.css"
import { newsData} from "../utils/data_sec-news";

export default function SecNews() {

  return (
    <div className="sec-news">
      <header className="sec-news__header">
        <h1 className="sec-news__title">Noticias</h1>
        <h4 className="sec-news__subtitle"> Últimas Noticias</h4>
      </header>

      <section className="news-grid">
        {newsData.map((news) => (
          <article key={news.id} className="news-card">
            <img src={news.image } alt={news.title} className="news-card__image" />

            <div className="news-card__content">
              <h3 className="news-card__title">{news.title}</h3>

              <p className="news-card__excerpt">{news.excerpt}</p>

              <footer className="news-card__footer">
                <div className="news-card__author">
                  <div className="news-card__avatar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="4" fill="currentColor" />
                      <path
                        d="M4 20c0-4 3.5-6 8-6s8 2 8 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="news-card__author-info">
                    <span className="news-card__author-name">{news.author}</span>
                    <time className="news-card__date">{news.date}</time>
                  </div>
                </div>
              </footer>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
