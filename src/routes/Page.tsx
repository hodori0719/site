import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';
import BlogEntry from '../components/BlogEntry';
import { BlogTitle } from '../pages/BlogIndex';

const Page = ({ pagetitles, markdown } : { pagetitles?: BlogTitle[], markdown: string }) => {
    const [markdownText, setMarkdownText] = React.useState('');
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setLoading(true);
        fetch(markdown)
            .then((response) => response.text())
            .then((text) => setMarkdownText(text))
            .then(() => setLoading(false));
    }, [markdown]);

    const titles = []
    if (pagetitles) {
        for (var title of pagetitles) {
            titles.push(<BlogEntry props={title}/>)
        }
    }

    return (
        <>
            {titles}
            {loading 
                ? 
                <div className="loading">
                </div>
                :
                <Markdown
                    children={markdownText}
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                        code(props) {
                            const {children, className, node, ...rest} = props
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                                <SyntaxHighlighter
                                    PreTag="div"
                                    children={String(children).replace(/\n$/, '')}
                                    language={match[1]}
                                    style={oneDark}
                                    className="codeBox"
                                />
                            ) : (
                                <code {...rest} className={className}>
                                    {children}
                                </code>
                            )
                        },
                        a(props) {
                            const {children, className, node, ...rest} = props
                            const match = /#user-content-/.exec(props.href || '')
                            return !match ? (
                                <Link to={props.href || ''}>
                                    {props.children}
                                </Link>
                            ) : (
                                <a {...rest} className={className} href={props.href}>
                                    {props.children}
                                </a>
                            )
                        }
                    }}
                />
            }
        </>
    )
}

export default Page;