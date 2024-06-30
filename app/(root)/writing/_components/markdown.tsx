const HtmlContent = ({ content }: any) => {
	return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default HtmlContent;
