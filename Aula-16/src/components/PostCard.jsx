export default function PostCard({
    nome,
    usuario,
    iniciais,
    tema,
    texto,
    curtidasIniciais
}) {
    return (
        <>
            <article className="post">
                <div className={`avatar avatar--${tema}`} aria-hidden="true">{iniciais}</div>
                <div className="post-body">
                    <div className="post-author">
                        <strong>{nome}</strong>
                        <span>{usuario}</span>
                    </div>
                    <p className="post-text">{texto}</p>
                    <div className="post-footer">
                        <button className="like-button" type="button">♡ Curtir · {curtidasIniciais}</button>
                    </div>
                </div>
            </article>
        </>
    )
}