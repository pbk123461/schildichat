(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{272:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var o=a(122),n=a.n(o),i=a(224),s=a(152),r=a(150),l=a(130),c=a(203),m=a(125),u=a(123),d=a(121),h=a(160);const p="mx_profile_displayname",b="mx_profile_avatar_url";class v extends c.a{constructor(){super(m.a,{displayName:window.localStorage.getItem(p)||void 0,avatarUrl:window.localStorage.getItem(b)||void 0}),n()(this,"monitoredUser",void 0),n()(this,"onProfileUpdate",Object(r.throttle)((async()=>{const e=await this.matrixClient.getProfileInfo(this.matrixClient.getUserId());e.displayname?window.localStorage.setItem(p,e.displayname):window.localStorage.removeItem(p),e.avatar_url?window.localStorage.setItem(b,e.avatar_url):window.localStorage.removeItem(b),await this.updateState({displayName:e.displayname,avatarUrl:e.avatar_url,fetchedAt:Date.now()})}),200,{trailing:!0,leading:!0})),n()(this,"onStateEvents",(async e=>{const t=u.a.get().getUserId();e.getType()===l.b.RoomMember&&e.getSender()===t&&e.getStateKey()===t&&await this.onProfileUpdate()}))}static get instance(){return v.internalInstance}get displayName(){return this.matrixClient?this.matrixClient.isGuest()?Object(d.a)("Guest"):this.state.displayName?this.state.displayName:this.matrixClient.getUserId():this.state.displayName||null}get isProfileInfoFetched(){return!!this.state.fetchedAt}get avatarMxc(){return this.state.avatarUrl||null}getHttpAvatarUrl(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!this.avatarMxc)return null;const t=Object(h.b)(this.avatarMxc);return!e||e<=0?t.srcHttp:t.getSquareThumbnailHttp(e)}async onNotReady(){var e;this.monitoredUser&&(this.monitoredUser.removeListener(i.b.DisplayName,this.onProfileUpdate),this.monitoredUser.removeListener(i.b.AvatarUrl,this.onProfileUpdate)),null===(e=this.matrixClient)||void 0===e||e.removeListener(s.b.Events,this.onStateEvents),await this.reset({})}async onReady(){const e=this.matrixClient.getUserId();this.monitoredUser=this.matrixClient.getUser(e),this.monitoredUser&&(this.monitoredUser.on(i.b.DisplayName,this.onProfileUpdate),this.monitoredUser.on(i.b.AvatarUrl,this.onProfileUpdate)),this.matrixClient.on(s.b.Events,this.onStateEvents),await this.onProfileUpdate()}async onAction(e){}}n()(v,"internalInstance",(()=>{const e=new v;return e.start(),e})())},674:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var o=a(131),n=a.n(o),i=a(134),s=a.n(i),r=a(120),l=a.n(r),c=a(127),m=a.n(c),u=a(148),d=a(684),h=a(178);const p=["title","children","className","iconClassName"],b=e=>{let{title:t,children:a,className:o,iconClassName:i}=e,c=s()(e,p);return!!Object(r.useContext)(d.a)?l.a.createElement(h.b,n()({},c,{iconClassName:i,label:t})):l.a.createElement(u.a,n()({},c,{title:t,className:m()(o,i)}),a)}},684:function(e,t,a){"use strict";a.d(t,"a",(function(){return xe}));var o=a(122),n=a.n(o),i=a(131),s=a.n(i),r=a(127),l=a.n(r),c=a(189),m=a(120),u=a.n(m),d=a(171),h=a(121),p=a(148),b=a(674),v=a(125),g=a(145),_=a(151),C=a(133),y=a(559),k=a.n(y),E=a(1),x=a(149),f=a(128),O=a(245),j=a(273),M=a(233),w=a(124),S=a(648),N=a(166),L=a(311);const P={fifteenMins:9e5,oneHour:36e5,eightHours:288e5},T=P.fifteenMins,B=e=>Object(h.a)("Share for %(duration)s",{duration:Object(N.b)(e)});var U=e=>{let{timeout:t,onChange:a}=e;const o=Object.values(P).map((e=>({key:e.toString(),duration:e,label:B(e)})));Object.values(P).includes(t)||o.push({key:t.toString(),duration:t,label:B(t)});return u.a.createElement(L.a,{id:"live-duration","data-testid":"live-duration-dropdown",label:B(t),value:t.toString(),onOptionChange:e=>{a(+e)},className:"mx_LiveDurationDropdown"},o.map((e=>{let{key:t,label:a}=e;return u.a.createElement("div",{"data-test-id":`live-duration-option-${t}`,key:t},a)})))},I=a(274),R=a(30),D=a(157),F=a(132),A=a(346),G=a(275);let H;!function(e){e.Own="Own",e.Pin="Pin",e.Live="Live"}(H||(H={}));const W=(e,t,a)=>{const{modalParams:o,errorMessage:n}="M_FORBIDDEN"===e.errcode?(e=>{const t=e===H.Live?"Insufficient permissions to start sharing your live location":"Insufficient permissions to send your location";return{modalParams:{title:Object(h.a)("You don't have permission to share locations"),description:Object(h.a)("You need to have the right permissions in order to share locations in this room."),button:Object(h.a)("OK"),hasCancelButton:!1,onFinished:()=>{}},errorMessage:t}})(a):((e,t)=>{const a=e===H.Live?"We couldn't start sharing your live location":"We couldn't send your location";return{modalParams:{title:Object(h.a)("We couldn't send your location"),description:Object(h.a)("%(brand)s could not send your location. Please try again later.",{brand:F.b.get().brand}),button:Object(h.a)("Try again"),cancelButton:Object(h.a)("Cancel"),onFinished:e=>{e&&t()}},errorMessage:a}})(a,t);E.a.error(n,e),f.b.createDialog(D.a,o)};var V=a(898);const q=e=>e===H.Own||e===H.Live;class z extends u.a.Component{constructor(e){super(e),n()(this,"context",void 0),n()(this,"map",void 0),n()(this,"geolocate",void 0),n()(this,"marker",void 0),n()(this,"getMarkerId",(()=>"mx_MLocationPicker_marker")),n()(this,"addMarkerToMap",(()=>{var e;this.marker=new k.a.Marker({element:null!==(e=document.getElementById(this.getMarkerId()))&&void 0!==e?e:void 0,anchor:"bottom",offset:[0,-1]}).setLngLat(new k.a.LngLat(0,0)).addTo(this.map)})),n()(this,"updateStyleUrl",(e=>{var t;const a=null===(t=Object(O.h)(e))||void 0===t?void 0:t.map_style_url;var o;a&&(null===(o=this.map)||void 0===o||o.setStyle(a))})),n()(this,"onGeolocate",(e=>{var t;this.marker||this.addMarkerToMap(),this.setState({position:Object(j.b)(e)}),null===(t=this.marker)||void 0===t||t.setLngLat(new k.a.LngLat(e.coords.longitude,e.coords.latitude))})),n()(this,"onClick",(e=>{var t;this.marker||this.addMarkerToMap(),null===(t=this.marker)||void 0===t||t.setLngLat(e.lngLat),this.setState({position:{timestamp:Date.now(),latitude:e.lngLat.lat,longitude:e.lngLat.lng}})})),n()(this,"onGeolocateError",(e=>{var t;(E.a.error("Could not fetch location",e),q(this.props.shareType)&&(this.props.onFinished(),f.b.createDialog(g.a,{title:Object(h.a)("Could not fetch location"),description:Object(M.j)(e.code)})),this.geolocate)&&(null===(t=this.map)||void 0===t||t.removeControl(this.geolocate))})),n()(this,"onTimeoutChange",(e=>{this.setState({timeout:e})})),n()(this,"onOk",(()=>{const{timeout:e,position:t}=this.state;this.props.onChoose(t?{uri:Object(j.f)(t),timestamp:t.timestamp,timeout:e}:{timeout:e}),this.props.onFinished()})),this.state={position:void 0,timeout:T,error:void 0}}componentDidMount(){this.context.on(x.b.ClientWellKnown,this.updateStyleUrl);try{if(this.map=new k.a.Map({container:"mx_LocationPicker_map",style:Object(M.d)(),center:[0,0],zoom:1}),this.geolocate=new k.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!1}),this.map.addControl(this.geolocate),this.map.on("error",(e=>{E.a.error("Failed to load map: check map_style_url in config.json has a valid URL and API key",e.error),this.setState({error:M.a.MapStyleUrlNotReachable})})),this.map.on("load",(()=>{var e;null===(e=this.geolocate)||void 0===e||e.trigger()})),this.geolocate.on("error",this.onGeolocateError),q(this.props.shareType)&&this.geolocate.on("geolocate",this.onGeolocate),this.props.shareType===H.Pin){const e=new k.a.NavigationControl({showCompass:!1,showZoom:!0});this.map.addControl(e,"bottom-right"),this.map.on("click",this.onClick)}}catch(e){E.a.error("Failed to render map",e);const t=(null==e?void 0:e.message)===M.a.MapStyleUrlNotConfigured?M.a.MapStyleUrlNotConfigured:M.a.Default;this.setState({error:t})}}componentWillUnmount(){var e,t,a;null===(e=this.geolocate)||void 0===e||e.off("error",this.onGeolocateError),null===(t=this.geolocate)||void 0===t||t.off("geolocate",this.onGeolocate),null===(a=this.map)||void 0===a||a.off("click",this.onClick),this.context.off(x.b.ClientWellKnown,this.updateStyleUrl)}render(){return this.state.error?u.a.createElement("div",{className:"mx_LocationPicker mx_LocationPicker_hasError"},u.a.createElement(S.a,{error:this.state.error,onFinished:this.props.onFinished})):u.a.createElement("div",{className:"mx_LocationPicker"},u.a.createElement("div",{id:"mx_LocationPicker_map"}),this.props.shareType===H.Pin&&u.a.createElement("div",{className:"mx_LocationPicker_pinText"},u.a.createElement("span",null,this.state.position?Object(h.a)("Click to move the pin"):Object(h.a)("Click to drop a pin"))),u.a.createElement("div",{className:"mx_LocationPicker_footer"},u.a.createElement("form",{onSubmit:this.onOk},this.props.shareType===H.Live&&u.a.createElement(U,{onChange:this.onTimeoutChange,timeout:this.state.timeout}),u.a.createElement(w.a,{"data-testid":"location-picker-submit-button",type:"submit",element:"button",kind:"primary",className:"mx_LocationPicker_submitButton",disabled:!this.state.position,onClick:this.onOk},Object(h.a)("Share location")))),u.a.createElement("div",{id:this.getMarkerId()},!!this.marker&&u.a.createElement(V.a,{roomMember:q(this.props.shareType)?this.props.sender:void 0,useMemberColor:this.props.shareType===H.Live})))}}n()(z,"contextType",C.a);var K=z,$=a(126),Y=a(960),J=a(479);var Q=e=>{let{onBack:t,onCancel:a,displayBack:o}=e;return u.a.createElement("div",{className:"mx_ShareDialogButtons"},o&&u.a.createElement(w.a,{className:"mx_ShareDialogButtons_button left","data-testid":"share-dialog-buttons-back","aria-label":Object(h.a)("Back"),onClick:t,element:"button"},u.a.createElement(Y.a,{className:"mx_ShareDialogButtons_button-icon"})),u.a.createElement(w.a,{className:"mx_ShareDialogButtons_button right","data-testid":"share-dialog-buttons-cancel","aria-label":Object(h.a)("Close"),onClick:a,element:"button"},u.a.createElement(J.a,{className:"mx_ShareDialogButtons_button-icon"})))},Z=a(134),X=a.n(Z),ee=a(272),te=a(193),ae=a(176),oe=a(644),ne=a(347);const ie=["onClick","label","shareType"],se=()=>{var e,t;const a=Object(m.useContext)(C.a).getSafeUserId(),o=null!==(e=ee.a.instance.displayName)&&void 0!==e?e:void 0,n=null!==(t=ee.a.instance.getHttpAvatarUrl(36))&&void 0!==t?t:void 0;return u.a.createElement("div",{className:`mx_ShareType_option-icon ${H.Own}`},u.a.createElement(te.a,{idName:a,name:o,url:n,width:36,height:36,resizeMethod:"crop",className:"mx_UserMenu_userAvatar_BaseAvatar"}))},re=e=>{let{onClick:t,label:a,shareType:o}=e,n=X()(e,ie);return u.a.createElement(w.a,s()({element:"button",className:"mx_ShareType_option",onClick:null!=t?t:null},n),o===H.Own&&u.a.createElement(se,null),o===H.Pin&&u.a.createElement(oe.a,{className:`mx_ShareType_option-icon ${H.Pin}`}),o===H.Live&&u.a.createElement(ne.a,{className:`mx_ShareType_option-icon ${H.Live}`}),a)};var le=e=>{let{setShareType:t,enabledShareTypes:a}=e;const o={[H.Own]:Object(h.a)("My current location"),[H.Live]:Object(h.a)("My live location"),[H.Pin]:Object(h.a)("Drop a Pin")};return u.a.createElement("div",{className:"mx_ShareType"},u.a.createElement(oe.a,{className:"mx_ShareType_badge"}),u.a.createElement(ae.a,{className:"mx_ShareType_heading",size:"h3"},Object(h.a)("What location type do you want to share?")),u.a.createElement("div",{className:"mx_ShareType_wrapper_options"},a.map((e=>u.a.createElement(re,{key:e,onClick:()=>t(e),label:o[e],shareType:e,"data-test-id":`share-location-option-${e}`})))))},ce=a(240);const me=e=>{let{onSubmit:t}=e;const[a,o]=Object(m.useState)(!1);return u.a.createElement("div",{"data-testid":"location-picker-enable-live-share",className:"mx_EnableLiveShare"},u.a.createElement(ne.a,{className:"mx_EnableLiveShare_icon"}),u.a.createElement(ae.a,{className:"mx_EnableLiveShare_heading",size:"h3"},Object(h.a)("Live location sharing")),u.a.createElement("p",{className:"mx_EnableLiveShare_description"},Object(h.a)("Please note: this is a labs feature using a temporary implementation. This means you will not be able to delete your location history, and advanced users will be able to see your location history even after you stop sharing your live location with this room.")),u.a.createElement(ce.a,{"data-testid":"enable-live-share-toggle",value:a,onChange:o,label:Object(h.a)("Enable live location sharing")}),u.a.createElement(w.a,{"data-testid":"enable-live-share-submit",className:"mx_EnableLiveShare_button",element:"button",kind:"primary",onClick:t,disabled:!a},Object(h.a)("OK")))};var ue=a(167),de=a(138);var he=e=>{let{menuPosition:t,onFinished:a,sender:o,roomId:n,openMenu:i,relation:r}=e;const l=Object(m.useContext)(C.a),c=(e=>{const t=[H.Own];return e||t.push(H.Live),t.push(H.Pin),t})(r),p=Object(ue.a)("feature_location_share_live"),b=c.length>1,[v,g]=Object(m.useState)(b?void 0:H.Own),y=ee.a.instance.displayName,k=l.getSafeUserId(),E=v===H.Live?((e,t,a,o)=>async e=>{let{timeout:n}=e;const i=Object(h.a)("%(displayName)s's live location",{displayName:a});try{await A.a.instance.createLiveBeacon(t,Object(I.makeBeaconInfoContent)(null!=n?n:3e5,!0,i,R.a.Self))}catch(e){W(e,o,H.Live)}})(0,n,y||k,i):((e,t,a,o,n)=>async i=>{let{uri:s,timestamp:r}=i;if(s)try{const n=(null==o?void 0:o.rel_type)===d.d.name&&(null==o?void 0:o.event_id)||null,i=a===H.Pin?R.a.Pin:R.a.Self,l=Object(I.makeLocationContent)(void 0,s,r,void 0,i);await Object(G.a)(t,(t=>e.sendMessage(t,n,l)),e)}catch(e){W(e,n,a)}})(l,n,null!=v?v:H.Own,r,i),x=v===H.Live&&!p;return u.a.createElement(_.n,s()({},t,{onFinished:a,managed:!1}),u.a.createElement("div",{className:"mx_LocationShareMenu"},x&&u.a.createElement(me,{onSubmit:()=>{$.b.setValue("feature_location_share_live",null,de.a.DEVICE,!0)}}),!x&&!!v&&u.a.createElement(K,{sender:o,shareType:v,onChoose:E,onFinished:a}),!v&&u.a.createElement(le,{setShareType:g,enabledShareTypes:c}),u.a.createElement(Q,{displayBack:!!v&&b,onBack:()=>g(void 0),onCancel:a})))};var pe=e=>{let{roomId:t,sender:a,menuPosition:o,relation:n}=e;const i=Object(m.useContext)(xe),[s,r,c,d]=Object(_.q)(),p=e=>{d(e),null==i||i()};let v=null;if(s){var g;const e=null!==(g=null!=o?o:r.current&&Object(_.i)(r.current.getBoundingClientRect()))&&void 0!==g?g:{};v=u.a.createElement(he,{menuPosition:e,onFinished:p,sender:a,roomId:t,openMenu:c,relation:n})}const C=l()("mx_MessageComposer_button",{mx_MessageComposer_button_highlight:s});return u.a.createElement(u.a.Fragment,null,u.a.createElement(b.a,{className:C,iconClassName:"mx_MessageComposer_location",onClick:c,title:Object(h.a)("Location"),inputRef:r}),v)},be=a(795),ve=a(123),ge=a(287),_e=a(139),Ce=a(241),ye=a(294),ke=a(178),Ee=a(961);const xe=Object(m.createContext)(null);function fe(e,t){return u.a.createElement(Ee.a,{key:"emoji_button",addEmoji:e.addEmoji,menuPosition:e.menuPosition,room:t,className:"mx_MessageComposer_button"})}function Oe(){return u.a.createElement(we,{key:"controls_upload"})}const je=Object(m.createContext)(null),Me=e=>{let{roomId:t,relation:a,children:o}=e;const n=Object(m.useContext)(C.a),i=Object(m.useContext)(_e.b),s=Object(m.useRef)(),r=()=>{var e;n.isGuest()?v.a.dispatch({action:"require_registration"}):null===(e=s.current)||void 0===e||e.click()};Object(Ce.a)(v.a,(e=>{i.timelineRenderingType===e.context&&"upload_file"===e.action&&r()}));return u.a.createElement(je.Provider,{value:r},o,u.a.createElement("input",{ref:s,type:"file",style:{display:"none"},multiple:!0,onClick:ye.a,onChange:e=>{0!==e.target.files.length&&(ge.a.sharedInstance().sendContentListToRoom(Array.from(e.target.files),t,a,n,i.timelineRenderingType),e.target.value="")}}))},we=()=>{const e=Object(m.useContext)(xe),t=Object(m.useContext)(je);return u.a.createElement(b.a,{className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_upload",onClick:()=>{null==t||t(),null==e||e()},title:Object(h.a)("Attachment")})};function Se(e){return e.showStickersButton?u.a.createElement(b.a,{id:"stickersButton",key:"controls_stickers",className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_stickers",onClick:()=>e.setStickerPickerOpen(!e.isStickerPickerOpen),title:e.isStickerPickerOpen?Object(h.a)("Hide stickers"):Object(h.a)("Sticker")}):null}const Ne=e=>e.showVoiceBroadcastButton?u.a.createElement(b.a,{key:"start_voice_broadcast",className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_voiceBroadcast",onClick:e.onStartVoiceBroadcastClick,title:Object(h.a)("Voice broadcast")}):null;function Le(e,t){return t?null:u.a.createElement(b.a,{key:"voice_message_send",className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_voiceMessage",onClick:e.onRecordStartEndClick,title:Object(h.a)("Voice Message")})}function Pe(e,t){return u.a.createElement(Te,{key:"polls",room:e,relation:t})}class Te extends u.a.PureComponent{constructor(){super(...arguments),n()(this,"context",void 0),n()(this,"onCreateClick",(()=>{var e;null===(e=this.context)||void 0===e||e.call(this);if(this.props.room.currentState.maySendEvent(c.e.name,ve.a.get().getUserId())){var t;const e=(null===(t=this.props.relation)||void 0===t?void 0:t.rel_type)===d.d.name?this.props.relation.event_id:null;f.b.createDialog(be.a,{room:this.props.room,threadId:e},"mx_CompoundDialog",!1,!0)}else f.b.createDialog(g.a,{title:Object(h.a)("Permission Required"),description:Object(h.a)("You do not have permission to start polls in this room.")})}))}render(){var e;return(null===(e=this.props.relation)||void 0===e?void 0:e.rel_type)===d.d.name?null:u.a.createElement(b.a,{className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_poll",onClick:this.onCreateClick,title:Object(h.a)("Poll")})}}function Be(e,t,a,o){const n=t.getMember(o.getUserId());return e.showLocationButton&&n?u.a.createElement(pe,{key:"location",roomId:a,relation:e.relation,sender:n,menuPosition:e.menuPosition}):null}function Ue(e){let{isRichTextEnabled:t,onClick:a}=e;const o=t?Object(h.a)("Hide formatting"):Object(h.a)("Show formatting");return u.a.createElement(b.a,{className:"mx_MessageComposer_button",iconClassName:l()({mx_MessageComposer_plain_text:!t,mx_MessageComposer_rich_text:t}),onClick:a,title:o})}n()(Te,"contextType",xe);t.b=e=>{const t=Object(m.useContext)(C.a),{room:a,roomId:o,narrow:n}=Object(m.useContext)(_e.b),i=Object(ue.b)("feature_wysiwyg_composer");if(e.haveRecording)return null;let r,c;n?(r=[i?u.a.createElement(Ue,{key:"composerModeButton",isRichTextEnabled:e.isRichTextEnabled,onClick:e.onComposerModeClick}):fe(e,a)],c=[Oe(),Se(e),Le(e,n),Ne(e),e.showPollsButton?Pe(a,e.relation):null,Be(e,a,o,t)]):e.collapseButtons?(r=[i?u.a.createElement(Ue,{key:"composerModeButton",isRichTextEnabled:e.isRichTextEnabled,onClick:e.onComposerModeClick}):fe(e,a),Oe()],c=[Se(e),Le(e,n),Ne(e),e.showPollsButton&&Pe(a,e.relation),Be(e,a,o,t)]):(r=[i?u.a.createElement(Ue,{key:"composerModeButton",isRichTextEnabled:e.isRichTextEnabled,onClick:e.onComposerModeClick}):fe(e,a),Oe(),Se(e),Le(e,n),Ne(e),e.showPollsButton?Pe(a,e.relation):null,Be(e,a,o,t)],c=[]),r=r.filter((e=>e)),c=c.filter((e=>e));const d=l()({mx_MessageComposer_button:!0,mx_MessageComposer_buttonMenu:!0,mx_MessageComposer_closeButtonMenu:e.isMenuOpen});return u.a.createElement(Me,{roomId:o,relation:e.relation},r,c.length>0&&u.a.createElement(p.a,{className:d,onClick:e.toggleButtonMenu,title:Object(h.a)("More options")}),e.isMenuOpen&&u.a.createElement(ke.e,s()({onFinished:e.toggleButtonMenu},e.menuPosition,{wrapperClassName:"mx_MessageComposer_Menu",compact:!0}),u.a.createElement(xe.Provider,{value:e.toggleButtonMenu},u.a.createElement(ke.c,null,c))))}},960:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var o,n=a(120);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},i.apply(this,arguments)}function s(e){return n.createElement("svg",i({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 14",role:"presentation","aria-hidden":!0},e),o||(o=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.637.707c.39.39.391 1.025.002 1.417L2.705 7.089l4.95 4.95c.39.39.392 1.025.002 1.417a.996.996 0 01-1.412.002L.59 7.8a1.004 1.004 0 01-.003-1.416L6.225.709A.996.996 0 017.637.707z",fill:"currentColor"})))}},961:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var o=a(131),n=a.n(o),i=a(127),s=a.n(i),r=a(120),l=a.n(r),c=a(121),m=a(151),u=a(983),d=a(674),h=a(684);function p(e){let{addEmoji:t,menuPosition:a,room:o,className:i}=e;const p=Object(r.useContext)(h.a),[b,v,g,_]=Object(m.q)();let C=null;if(b&&v.current){const e=null!=a?a:Object(m.i)(v.current.getBoundingClientRect());C=l.a.createElement(m.n,n()({},e,{onFinished:()=>{_(),null==p||p()},managed:!1}),l.a.createElement(u.d,{onChoose:t,showQuickReactions:!0,room:o}))}const y=s()("mx_EmojiButton",i,{mx_EmojiButton_highlight:b});return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:y,iconClassName:"mx_EmojiButton_icon",onClick:g,title:Object(c.a)("Emoji"),inputRef:v}),C)}}}]);
//# sourceMappingURL=11.js.map