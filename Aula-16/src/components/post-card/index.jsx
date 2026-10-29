import S from "./styles.module.scss";

export default function PostCard({
    nome,
    usuario,
    iniciais,
    tema,
    texto,
    curtidasIniciais
}) {
    return (
        <article className={S.post}>
            <div
                className={`${S.avatar} ${S[`avatar--${tema}`]}`}
                aria-hidden="true"
            >
                {iniciais}
            </div>

            <div className={S["post-body"]}>
                <div className={S["post-author"]}>
                    <strong>{nome}</strong>
                    <span>{usuario}</span>
                </div>

                <p className={S["post-text"]}>{texto}</p>

                <div className={S["post-footer"]}>
                    <button
                        className={S["like-button"]}
                        type="button"
                        aria-pressed="false"
                    >
                        ♡ Curtir · {curtidasIniciais}
                    </button>
                </div>
            </div>
        </article>
    );
}