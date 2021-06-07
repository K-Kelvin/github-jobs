import { pageContent } from "pages/Home";

interface PaginatorProps {
    readonly page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    numOfPages: number;
    pageContents: pageContent;
}

const Paginator = ({
    page,
    setPage,
    numOfPages,
    pageContents,
}: PaginatorProps) => {
    const pages: number[] = [];
    for (let i = 0; i < numOfPages; i++) {
        pages.push(i + 1);
    }

    return (
        <div className="my-5 text-grayish flex items-center gap-3">
            <Button
                text={"◀"}
                onClick={() =>
                    setPage(p => {
                        if (p > 1) return p - 1;
                        return p;
                    })
                }
            />
            {pages.map(pg => (
                <Button
                    key={pg}
                    text={pg}
                    activePage={pg === page}
                    onClick={() => setPage(pg)}
                />
            ))}
            <Button
                text={"▶"}
                onClick={() =>
                    setPage(p => {
                        if (p < pages[pages.length - 1]) return p + 1;
                        return p;
                    })
                }
            />
        </div>
    );
};
interface ButtonProps {
    text: string | number | Element;
    activePage?: boolean;
    onClick?: () => void;
}
const Button = ({ activePage, text, onClick }: ButtonProps) => {
    const activeClassname =
        "text-white bg-blue border border-blue px-4.5 py-2.5 rounded focus:outline-none flex items-center justify-center";
    const defaultClassname =
        "border border-grayish px-4.5 py-2.5 text-grayish hover:border-blue hover:text-blue rounded focus:outline-none flex items-center justify-center";
    return (
        <button
            className={activePage ? activeClassname : defaultClassname}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Paginator;
