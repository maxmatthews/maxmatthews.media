import React from 'react';
import PropTypes from 'prop-types';
import maxVector from '../images/maxVector.svg';
// import resume from '../assets/MatthewsMaxResume.pdf'
import card from '../assets/MatthewsMaxCard.pdf';

const Header = (props) => (
	<header id="header" style={props.timeout ? { display: 'none' } : {}}>
		<div className="logo">
			{/*<span className="icon fa-diamond"></span>*/}
			<span>
				<img
					style={{ height: '5.2rem', marginTop: 5 }}
					src={maxVector}
					alt="vectorized portrait of max matthews"
				/>
			</span>
		</div>
		<div className="content">
			<div className="inner">
				<h1>Max Matthews Media</h1>
				<p>YouTube, Blog, & Podcast</p>
			</div>
		</div>
		<nav>
			<ul>
				<li>
					<a
						className="headerLink"
						href="https://www.youtube.com/c/MaxMatthews"
						target="_blank"
						rel="noopener noreferrer"
					>
						YouTube
					</a>
				</li>
				<li>
					<a className="headerLink" href="https://medium.maxmatthe.ws">
						Blog
					</a>
				</li>
				<li>
					<a
						className="headerLink"
						href="https://podcast.maxmatthews.media"
						target="_blank"
						rel="noopener noreferrer"
					>
						PodCast
					</a>
				</li>
				<li>
					<a
						className="headerLink"
						href="https://maxmatthe.ws"
						target="_blank"
						rel="noopener noreferrer"
					>
						Personal Site
					</a>
				</li>
			</ul>
		</nav>
		<div id="headerSocialIcons">
			<ul className="icons">
				<li>
					<a
						href="https://medium.maxmatthe.ws/launching-max-matthews-media-d0d970bc0770"
						target="_blank"
						rel="noopener noreferrer"
						className="icon2 fas fa-rocket"
					>
						<span className="label">Launch Post</span>
					</a>
				</li>
				{/*		<li>*/}
				{/*			<a*/}
				{/*				href="https://twitter.com/teckno101"*/}
				{/*				target="_blank"*/}
				{/*				rel="noopener noreferrer"*/}
				{/*				className="icon2 fab fa-twitter"*/}
				{/*			>*/}
				{/*				<span className="label">Twitter</span>*/}
				{/*			</a>*/}
				{/*		</li>*/}
				{/*		<li>*/}
				{/*			<a*/}
				{/*				href="https://github.com/maxmatthews/personal-site"*/}
				{/*				target="_blank"*/}
				{/*				rel="noopener noreferrer"*/}
				{/*				className="icon2 fab fa-github"*/}
				{/*			>*/}
				{/*				<span className="label">GitHub</span>*/}
				{/*			</a>*/}
				{/*		</li>*/}
				{/*		<li>*/}
				{/*			<a*/}
				{/*				href={card}*/}
				{/*				target="_blank"*/}
				{/*				rel="noopener noreferrer"*/}
				{/*				className="icon2 far fa-address-card"*/}
				{/*			>*/}
				{/*				<span className="label">Business Card</span>*/}
				{/*			</a>*/}
				{/*		</li>*/}
				{/*		<li>*/}
				{/*			<a*/}
				{/*				className="icon2 fad fa-dumbbell"*/}
				{/*				onClick={() => {*/}
				{/*					props.onOpenArticle('strengths');*/}
				{/*				}}*/}
				{/*				style={{ cursor: 'pointer' }}*/}
				{/*			>*/}
				{/*				<span className="label">Strengths</span>*/}
				{/*			</a>*/}
				{/*		</li>*/}
			</ul>
		</div>
	</header>
);

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool,
};

export default Header;
