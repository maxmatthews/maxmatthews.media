import React from 'react';
import Layout from '../components/layout';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isArticleVisible: false,
			timeout: false,
			articleTimeout: false,
			article: '',
			loading: 'is-loading',
			style: '',
		};
		this.handleOpenArticle = this.handleOpenArticle.bind(this);
		this.handleCloseArticle = this.handleCloseArticle.bind(this);
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidMount() {
		this.timeoutId = setTimeout(() => {
			this.setState({ loading: '' });
		}, 100);
		document.addEventListener('mousedown', this.handleClickOutside);

		let vars = {};
		window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
			m,
			key,
			value
		) {
			vars[key] = value;
		});

		// if (vars.redirectFrom === '/resume') {
		// 	this.handleOpenArticle('resume');
		// }

		this.setState({
			style: (
				<style
					dangerouslySetInnerHTML={{
						__html: [
							'#bg:after {',
							`  background-image: url(${require(`../images/bgs/bg-0${this.randNum(
								1,
								50
							)}.jpg`)});`,
							'}',
						].join('\n'),
					}}
				/>
			),
		});
	}

	componentWillUnmount() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	handleOpenArticle(article) {
		this.setState({
			isArticleVisible: !this.state.isArticleVisible,
			article,
		});

		setTimeout(() => {
			this.setState({
				timeout: !this.state.timeout,
			});
		}, 325);

		setTimeout(() => {
			this.setState({
				articleTimeout: !this.state.articleTimeout,
			});
		}, 350);
	}

	handleCloseArticle() {
		this.setState({
			articleTimeout: !this.state.articleTimeout,
		});

		setTimeout(() => {
			this.setState({
				timeout: !this.state.timeout,
			});
		}, 325);

		setTimeout(() => {
			this.setState({
				isArticleVisible: !this.state.isArticleVisible,
				article: '',
			});
		}, 350);
	}

	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			if (this.state.isArticleVisible) {
				this.handleCloseArticle();
			}
		}
	}

	randNum(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	render() {
		return (
			<Layout location={this.props.location}>
				<div
					className={`body ${this.state.loading} ${
						this.state.isArticleVisible ? 'is-article-visible' : ''
					}`}
				>
					{this.state.style}
					<div id="wrapper">
						<Header
							onOpenArticle={this.handleOpenArticle}
							timeout={this.state.timeout}
						/>
						<Main
							isArticleVisible={this.state.isArticleVisible}
							timeout={this.state.timeout}
							articleTimeout={this.state.articleTimeout}
							article={this.state.article}
							onCloseArticle={this.handleCloseArticle}
							setWrapperRef={this.setWrapperRef}
						/>
						<Footer
							timeout={this.state.timeout}
							onOpenArticle={this.handleOpenArticle}
						/>
					</div>
					<div id="bg" />
				</div>
			</Layout>
		);
	}
}

export default IndexPage;
