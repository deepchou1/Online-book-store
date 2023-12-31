export default function Header () {
    return(
        <header className='p-10 text-center'>
          <a
            className="inline-block w-auto text-right text-purple"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-3xl block">My Online Library</span>
            <span className="text-xs px-2 py-1">Enrich your life</span>
          </a>
        </header>
    );
}