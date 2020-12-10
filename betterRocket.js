/**
 * To use:
 * Go to View > Open devtools
 * Go to Window > Toggle devtools
 * Go to Console on both
 * Copy and paste this code in the bottom input box on both devtools
 * Appreciate a better flow for a better developer 😉
 */

const darkMode = true;

const rocketChat_outer = () => {
	console.log(document.body)
	if(!document.body.classList.contains('app-page'))
		throw new Error("This is not the Rocket Chat client wrapper");

	const sideBar = () => {
		const sidebar = document.getElementsByClassName('sidebar')[0];

		removeElement(sidebar);

		const newCSS = `
			.webview{
				left: 0 !important;
			}

		`;

		const style = document.createElement('style');
		style.type = 'text/css';

		(style.styleSheet) ? style.styleSheet.cssText = newCSS : style.appendChild(document.createTextNode(newCSS));

		document.getElementsByTagName('head')[0].appendChild(style);
	}

	sideBar();
}

const rocketChat_inner = () => {
	if(document.body.classList.contains('app-page'))
		throw new Error("This is not the Rocket Chat, chat window");

	const sideBar = () => {
		const footer = document.getElementsByClassName('sidebar__footer')[0];

		removeElement(footer);

		var newCSS = `
			.sidebar-item{
				padding: 5px 10px !important;
				height: auto !important;
			}


			.sidebar--extended .sidebar-item{
				height: auto !important;
			}

			.sidebar-item__link{
				overflow: auto !important;
				width: 100% !important;
				align-items: auto !important;
			}

			.sidebar--extended .sidebar-item__message{
				height: auto !important;
			}

			.sidebar-item__last-message{
				white-space: normal !important;
				max-height: 60px !important;
			}

			.rc-message-box__typing{
				top: 55px;
			}

			/*
			.message .body{
				display: flex;
				flex-wrap: wrap;
				flex-direction: column-reverse;
			}
			*/

			.emojione.big {
				width: 34px;
				height: 34px;
			}

			.emoji.big{
				width: 150px;
				height: 150px;
			}
		`;

		if(darkMode){
			newCSS += `

			

			.attachments__name{
				color: inherit;
			}

			.content-background-color{
				background: #30475e !important;
			}

			.rc-header__wrap{
				background: #30475e !important;
				color: white !important;
			}

			.rc-header__name{
				color:white !important;
			}

			.messages-container-main{
				background: #222831 !important;
			}

			.color-primary-font-color{
				color: white !important;
			}

			.messages-container .footer{
				background: transparent !important;
			}

			.rc-user-info-container{
				background: #30475e !important;
				opacity: 0.95 !important;

			}

			.contextual-bar{
				background: #30475e !important;
				opacity: 0.95 !important;
			}

			textarea, input{
				color: white !important;
			}

			.rc-icon{
				fill: white !important;
			}

			.message-actions{
				color: white !important;
			}

			.rc-old .code-colors{
				background-color: rgba(255,255,255, 0.9);
				color: #333 !important;
			}

			.message.editing{
				background-color: #30475e !important;
				box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); 
			}

			.rc-message-box__container.editing{
				background-color: #30475e !important;
			}

			.rc-message-box__typing__user{
				color: white !important;
			}

			.rc-message-box__typing{
				color: white !important;
			}

			.message.new-day::before {
			    background-color: #fff;
			    color: gray;
			    border-radius: 8px;
			    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
			}

			.message .info .is-bot, .message .info .role-tag {
			    padding: 2px 5px;
			    border-radius: 8px;
			    text-transform: capitalize;
			    background: #30475e;
			    color: #ddd;
			    box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
			}

			.rc-popover__content{
				background: #30475e !important;
				opacity: 0.95 !important;
			}
			.emoji-picker .filter-item .category-icon{
				color: white;
			}
			.rc-button--outline {
			   	border-width: 0;
			    background: #222831;
			    color: white;
			    border-radius: 8px;
			    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
			    transition: all 0.1s cubic-bezier(.17,.67,.96,.59);
			}
			.rc-button:not([disabled]):hover {
			    opacity: 1;
			    box-shadow: 0 6px 10px rgba(0,0,0,0.16), 0 6px 10px rgba(0,0,0,0.23);
			}

			.rc-user-info-details__info{
				color:inherit;
			}

			.rc-user-info-details {
			    border-width: 0;
			    background: #222831;

			    border-radius: 8px;
			    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
			    transition: all 0.1s cubic-bezier(.17,.67,.96,.59);
			    padding: 5px 8px;
			}
			.message .reactions > li.selected {
				background-color: #394271;

			}

			.message .reactions > li {
				background-color: #373737;

			}
			`;
		}

		const style = document.createElement('style');
		style.type = 'text/css';

		(style.styleSheet) ? style.styleSheet.cssText = newCSS : style.appendChild(document.createTextNode(newCSS));

		document.getElementsByTagName('head')[0].appendChild(style);
	}

	const personBar = () => {
		const newCSS = `
			.rc-header__wrap{
				padding 8px !important;
			}
		`

		const style = document.createElement('style');
		style.type = 'text/css';

		(style.styleSheet) ? style.styleSheet.cssText = newCSS : style.appendChild(document.createTextNode(newCSS));

		document.getElementsByTagName('head')[0].appendChild(style);
	}

	const chat = () => {
		const newCSS = `
			.rc-message-box__toolbar-markdown{
				width: auto !important;
				left: inherit !important;
				right: 10px !important;
			}

			.rc-message-box{
				padding: 10px 5px 24px 5px !important;
			}

			.rc-message-box__container{
				border-radius: 28px !important;
				border-width: 1px !important;
				padding: .5rem 0 !important;
			}

			.rc-message-box__textarea{
				padding: auto !important;
			}
		`;

		const style = document.createElement('style');
		style.type = 'text/css';

		(style.styleSheet) ? style.styleSheet.cssText = newCSS : style.appendChild(document.createTextNode(newCSS));

		document.getElementsByTagName('head')[0].appendChild(style);
	}

	sideBar();
	personBar();
	chat();
}

function removeElement(element) {
	element.parentNode.removeChild(element);
}

const betterRocket = () => {	
	try{
		rocketChat_inner();	
	}catch(e){
		console.log("Great, now run the same script on the secondary devtools");
		console.error(e);
	}

	try{
		rocketChat_outer();	
	}catch(e){
		console.log("Great, now run the same script on the secondary devtools");
		console.error(e);
	}
	
	
}




betterRocket()
