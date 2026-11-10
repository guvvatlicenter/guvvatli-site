var Hf=0,eh=1,Vf=2;var Ed=1,Gf=2,$n=3,Fn=0,ze=1,Fe=2,Ti=0,Ur=1,bn=2,nh=3,ih=4,qf=5,Ji=100,Wf=101,Xf=102,Yf=103,Kf=104,Jf=200,Zf=201,jf=202,$f=203,Sl=204,Al=205,Qf=206,tp=207,ep=208,np=209,ip=210,rp=211,sp=212,ap=213,op=214,El=0,Tl=1,wl=2,Br=3,Rl=4,Cl=5,Pl=6,Il=7,Td=0,lp=1,cp=2,wi=0,up=1,hp=2,dp=3,fp=4,pp=5,mp=6,gp=7,rh="attached",_p="detached",wd=300,Hr=301,Vr=302,kl=303,Ll=304,xo=306,Nn=1e3,ti=1001,Ls=1002,Ye=1003,qc=1004;var Lr=1005;var en=1006,Ts=1007;var yn=1008;var ii=1009,Rd=1010,Cd=1011,Ns=1012,Wc=1013,ji=1014,Ln=1015,Ws=1016,Xc=1017,Yc=1018,Gr=1020,Pd=35902,Id=1021,kd=1022,xn=1023,Ld=1024,Nd=1025,Or=1026,qr=1027,Kc=1028,Jc=1029,Dd=1030,Zc=1031;var jc=1033,Ua=33776,Oa=33777,Fa=33778,za=33779,Nl=35840,Dl=35841,Ul=35842,Ol=35843,Fl=36196,zl=37492,Bl=37496,Hl=37808,Vl=37809,Gl=37810,ql=37811,Wl=37812,Xl=37813,Yl=37814,Kl=37815,Jl=37816,Zl=37817,jl=37818,$l=37819,Ql=37820,tc=37821,Ba=36492,ec=36494,nc=36495,Ud=36283,ic=36284,rc=36285,sc=36286;var Wr=2300,Xr=2301,Ho=2302,sh=2400,ah=2401,oh=2402,yp=2500;var Od=0,vo=1,Xs=2,xp=3200,vp=3201;var Fd=0,bp=1,Si="",pe="srgb",Je="srgb-linear",bo="linear",fe="srgb";var pr=7680;var lh=519,Mp=512,Sp=513,Ap=514,zd=515,Ep=516,Tp=517,wp=518,Rp=519,ac=35044;var ch="300 es",ei=2e3,Ha=2001,Ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uh=1234567,ws=Math.PI/180,Yr=180/Math.PI;function vn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[r&255]+We[r>>8&255]+We[r>>16&255]+We[r>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Le(r,t,e){return Math.max(t,Math.min(e,r))}function $c(r,t){return(r%t+t)%t}function Cp(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Pp(r,t,e){return r!==t?(e-r)/(t-r):0}function Rs(r,t,e){return(1-e)*r+e*t}function Ip(r,t,e,n){return Rs(r,t,1-Math.exp(-e*n))}function kp(r,t=1){return t-Math.abs($c(r,t*2)-t)}function Lp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Np(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Dp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Up(r,t){return r+Math.random()*(t-r)}function Op(r){return r*(.5-Math.random())}function Fp(r){r!==void 0&&(uh=r);let t=uh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zp(r){return r*ws}function Bp(r){return r*Yr}function Hp(r){return(r&r-1)===0&&r!==0}function Vp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Gp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qp(r,t,e,n,i){let s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),d=a((t-n)/2),f=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function de(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Mo={DEG2RAD:ws,RAD2DEG:Yr,generateUUID:vn,clamp:Le,euclideanModulo:$c,mapLinear:Cp,inverseLerp:Pp,lerp:Rs,damp:Ip,pingpong:kp,smoothstep:Lp,smootherstep:Np,randInt:Dp,randFloat:Up,randFloatSpread:Op,seededRandom:Fp,degToRad:zp,radToDeg:Bp,isPowerOfTwo:Hp,ceilPowerOfTwo:Vp,floorPowerOfTwo:Gp,setQuaternionFromProperEuler:qp,normalize:de,denormalize:kn},ft=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class r{constructor(t,e,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],S=i[4],y=i[7],L=i[2],C=i[5],w=i[8];return s[0]=a*_+o*M+l*L,s[3]=a*m+o*S+l*C,s[6]=a*p+o*y+l*w,s[1]=c*_+u*M+h*L,s[4]=c*m+u*S+h*C,s[7]=c*p+u*y+h*w,s[2]=d*_+f*M+g*L,s[5]=d*m+f*S+g*C,s[8]=d*p+f*y+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vo.makeScale(t,e)),this}rotate(t){return this.premultiply(Vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vo=new jt;function Bd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ds(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Wp(){let r=Ds("canvas");return r.style.display="block",r}var hh={};function As(r){r in hh||(hh[r]=!0,console.warn(r))}function Xp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Yp(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kp(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:Je,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(r.r=ni(r.r),r.g=ni(r.g),r.b=ni(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(r.r=Fr(r.r),r.g=Fr(r.g),r.b=Fr(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Si?bo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ni(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var dh=[.64,.33,.3,.6,.15,.06],fh=[.2126,.7152,.0722],ph=[.3127,.329],mh=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[Je]:{primaries:dh,whitePoint:ph,transfer:bo,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:fh,workingColorSpaceConfig:{unpackColorSpace:pe},outputColorSpaceConfig:{drawingBufferColorSpace:pe}},[pe]:{primaries:dh,whitePoint:ph,transfer:fe,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:fh,outputColorSpaceConfig:{drawingBufferColorSpace:pe}}});var mr,oc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mr===void 0&&(mr=Ds("canvas")),mr.width=t.width,mr.height=t.height;let n=mr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=mr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ds("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ni(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jp=0,Va=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Go(i[a].image)):s.push(Go(i[a]))}else s=Go(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Go(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?oc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zp=0,Be=class r extends Ri{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=ti,i=ti,s=en,a=yn,o=xn,l=ii,c=r.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=vn(),this.name="",this.source=new Va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nn:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Ls:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nn:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Ls:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=wd;Be.DEFAULT_ANISOTROPY=1;var ee=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(f+1)/2,L=(p+1)/2,C=(u+d)/4,w=(h+_)/4,N=(g+m)/4;return S>y&&S>L?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=C/n,s=w/n):y>L?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=C/i,s=N/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=w/s,i=N/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lc=class extends Ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Va(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends lc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ga=class extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var cc=class extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var He=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o,p=l*d+c*f+u*g+h*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let L=Math.sqrt(S),C=Math.atan2(L,p*M);m=Math.sin(m*C)/L,o=Math.sin(o*C)/L}let y=o*M;if(l=l*m+d*y,c=c*m+f*y,u=u*m+g*y,h=h*m+_*y,m===1-o){let L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-o*f,t[e+2]=c*g+u*f+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qo.copy(this).projectOnVector(t),this.sub(qo)}reflect(t){return this.sub(qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qo=new k,_h=new He,nn=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),ra.subVectors(this.max,fs),gr.subVectors(t.a,fs),_r.subVectors(t.b,fs),yr.subVectors(t.c,fs),_i.subVectors(_r,gr),yi.subVectors(yr,_r),Vi.subVectors(gr,yr);let e=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-Vi.z,Vi.y,_i.z,0,-_i.x,yi.z,0,-yi.x,Vi.z,0,-Vi.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-Vi.y,Vi.x,0];return!Wo(e,gr,_r,yr,ra)||(e=[1,0,0,0,1,0,0,0,1],!Wo(e,gr,_r,yr,ra))?!1:(sa.crossVectors(_i,yi),e=[sa.x,sa.y,sa.z],Wo(e,gr,_r,yr,ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Xn=[new k,new k,new k,new k,new k,new k,new k,new k],Cn=new k,ia=new nn,gr=new k,_r=new k,yr=new k,_i=new k,yi=new k,Vi=new k,fs=new k,ra=new k,sa=new k,Gi=new k;function Wo(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Gi.fromArray(r,s);let o=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),u=n.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var jp=new nn,ps=new k,Xo=new k,hn=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);let e=ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(Xo)),this.expandByPoint(ps.copy(t.center).sub(Xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new k,Yo=new k,aa=new k,xi=new k,Ko=new k,oa=new k,Jo=new k,Kr=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Yo.copy(t).add(e).multiplyScalar(.5),aa.copy(e).sub(t).normalize(),xi.copy(this.origin).sub(Yo);let s=t.distanceTo(e)*.5,a=-this.direction.dot(aa),o=xi.dot(this.direction),l=-xi.dot(aa),c=xi.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Yo).addScaledVector(aa,d),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,s){Ko.subVectors(e,t),oa.subVectors(n,t),Jo.crossVectors(Ko,oa);let a=this.direction.dot(Jo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,t);let l=o*this.direction.dot(oa.crossVectors(xi,oa));if(l<0)return null;let c=o*this.direction.dot(Ko.cross(xi));if(c<0||l+c>a)return null;let u=-o*xi.dot(Jo);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class r{constructor(t,e,n,i,s,a,o,l,c,u,h,d,f,g,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,d,f,g,_,m)}set(t,e,n,i,s,a,o,l,c,u,h,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/xr.setFromMatrixColumn(t,0).length(),s=1/xr.setFromMatrixColumn(t,1).length(),a=1/xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($p,t,Qp)}lookAt(t,e,n){let i=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),vi.crossVectors(n,cn),vi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),vi.crossVectors(n,cn)),vi.normalize(),la.crossVectors(cn,vi),i[0]=vi.x,i[4]=la.x,i[8]=cn.x,i[1]=vi.y,i[5]=la.y,i[9]=cn.y,i[2]=vi.z,i[6]=la.z,i[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],y=n[11],L=n[15],C=i[0],w=i[4],N=i[8],A=i[12],b=i[1],I=i[5],B=i[9],V=i[13],G=i[2],et=i[6],W=i[10],nt=i[14],X=i[3],gt=i[7],yt=i[11],At=i[15];return s[0]=a*C+o*b+l*G+c*X,s[4]=a*w+o*I+l*et+c*gt,s[8]=a*N+o*B+l*W+c*yt,s[12]=a*A+o*V+l*nt+c*At,s[1]=u*C+h*b+d*G+f*X,s[5]=u*w+h*I+d*et+f*gt,s[9]=u*N+h*B+d*W+f*yt,s[13]=u*A+h*V+d*nt+f*At,s[2]=g*C+_*b+m*G+p*X,s[6]=g*w+_*I+m*et+p*gt,s[10]=g*N+_*B+m*W+p*yt,s[14]=g*A+_*V+m*nt+p*At,s[3]=M*C+S*b+y*G+L*X,s[7]=M*w+S*I+y*et+L*gt,s[11]=M*N+S*B+y*W+L*yt,s[15]=M*A+S*V+y*nt+L*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+s*a*d-i*a*f+i*c*u-s*l*u)+m*(+e*c*h-e*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+p*(-i*o*u-e*l*h+e*o*d+i*a*h-n*a*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,S=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,y=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,L=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,C=e*M+n*S+i*y+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return t[0]=M*w,t[1]=(_*d*s-h*m*s-_*i*f+n*m*f+h*i*p-n*d*p)*w,t[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*w,t[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*w,t[4]=S*w,t[5]=(u*m*s-g*d*s+g*i*f-e*m*f-u*i*p+e*d*p)*w,t[6]=(g*l*s-a*m*s-g*i*c+e*m*c+a*i*p-e*l*p)*w,t[7]=(a*d*s-u*l*s+u*i*c-e*d*c-a*i*f+e*l*f)*w,t[8]=y*w,t[9]=(g*h*s-u*_*s-g*n*f+e*_*f+u*n*p-e*h*p)*w,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*p+e*o*p)*w,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*f-e*o*f)*w,t[12]=L*w,t[13]=(u*_*i-g*h*i+g*n*d-e*_*d-u*n*m+e*h*m)*w,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*w,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,m=a*h,p=o*h,M=l*c,S=l*u,y=l*h,L=n.x,C=n.y,w=n.z;return i[0]=(1-(_+p))*L,i[1]=(f+y)*L,i[2]=(g-S)*L,i[3]=0,i[4]=(f-y)*C,i[5]=(1-(d+p))*C,i[6]=(m+M)*C,i[7]=0,i[8]=(g+S)*w,i[9]=(m-M)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=xr.set(i[0],i[1],i[2]).length(),a=xr.set(i[4],i[5],i[6]).length(),o=xr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Pn.copy(this);let c=1/s,u=1/a,h=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,e.setFromRotationMatrix(Pn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=ei){let l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(o===ei)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ha)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=ei){let l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),d=(e+t)*c,f=(n+i)*u,g,_;if(o===ei)g=(a+s)*h,_=-2*h;else if(o===Ha)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xr=new k,Pn=new Ht,$p=new k(0,0,0),Qp=new k(1,1,1),vi=new k,la=new k,cn=new k,yh=new Ht,xh=new He,Mn=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xh.setFromEuler(this),this.setFromQuaternion(xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var qa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tm=0,vh=new k,vr=new He,Kn=new Ht,ca=new k,ms=new k,em=new k,nm=new He,bh=new k(1,0,0),Mh=new k(0,1,0),Sh=new k(0,0,1),Ah={type:"added"},im={type:"removed"},br={type:"childadded",child:null},Zo={type:"childremoved",child:null},ye=class r extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new k,e=new Mn,n=new He,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ht},normalMatrix:{value:new jt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(bh,t)}rotateY(t){return this.rotateOnAxis(Mh,t)}rotateZ(t){return this.rotateOnAxis(Sh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bh,t)}translateY(t){return this.translateOnAxis(Mh,t)}translateZ(t){return this.translateOnAxis(Sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ca.copy(t):ca.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(ms,ca,this.up):Kn.lookAt(ca,ms,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),vr.setFromRotationMatrix(Kn),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ah),br.child=t,this.dispatchEvent(br),br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(im),Zo.child=t,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ah),br.child=t,this.dispatchEvent(br),br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,em),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,nm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ye.DEFAULT_UP=new k(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new k,Jn=new k,jo=new k,Zn=new k,Mr=new k,Sr=new k,Eh=new k,$o=new k,Qo=new k,tl=new k,el=new ee,nl=new ee,il=new ee,Ai=class r{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),In.subVectors(t,e),i.cross(In);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){In.subVectors(i,e),Jn.subVectors(n,e),jo.subVectors(t,e);let a=In.dot(In),o=In.dot(Jn),l=In.dot(jo),c=Jn.dot(Jn),u=Jn.dot(jo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return el.setScalar(0),nl.setScalar(0),il.setScalar(0),el.fromBufferAttribute(t,e),nl.fromBufferAttribute(t,n),il.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(el,s.x),a.addScaledVector(nl,s.y),a.addScaledVector(il,s.z),a}static isFrontFacing(t,e,n,i){return In.subVectors(n,e),Jn.subVectors(t,e),In.cross(Jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),In.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Mr.subVectors(i,n),Sr.subVectors(s,n),$o.subVectors(t,n);let l=Mr.dot($o),c=Sr.dot($o);if(l<=0&&c<=0)return e.copy(n);Qo.subVectors(t,i);let u=Mr.dot(Qo),h=Sr.dot(Qo);if(u>=0&&h<=u)return e.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Mr,a);tl.subVectors(t,s);let f=Mr.dot(tl),g=Sr.dot(tl);if(g>=0&&f<=g)return e.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Sr,o);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Eh.subVectors(s,i),o=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(Eh,o);let p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Mr,a).addScaledVector(Sr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function rl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=$c(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=rl(a,s,t+1/3),this.g=rl(a,s,t),this.b=rl(a,s,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=pe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let n=Hd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return ie.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Le(Xe.r*255,0,255))*65536+Math.round(Le(Xe.g*255,0,255))*256+Math.round(Le(Xe.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Xe.copy(this),e);let n=Xe.r,i=Xe.g,s=Xe.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=pe){ie.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,i=Xe.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(ua);let n=Rs(bi.h,ua.h,e),i=Rs(bi.s,ua.s,e),s=Rs(bi.l,ua.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Nt;Nt.NAMES=Hd;var rm=0,rn=class extends Ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=vn(),this.name="",this.blending=Ur,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=Al,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==Al&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Sn=class extends rn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new k,ha=new ft,be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ac,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ac&&(t.usage=this.usage),t}};var Wa=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xa=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},sm=0,_n=new Ht,sl=new ye,Ar=new k,un=new nn,gs=new nn,Oe=new k,Me=class r extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bd(t)?Xa:Wa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(un.min,gs.min),un.expandByPoint(Oe),Oe.addVectors(un.max,gs.max),un.expandByPoint(Oe)):(un.expandByPoint(gs.min),un.expandByPoint(gs.max))}un.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Oe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Oe.fromBufferAttribute(o,c),l&&(Ar.fromBufferAttribute(t,c),Oe.add(Ar)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new k,l[N]=new k;let c=new k,u=new k,h=new k,d=new ft,f=new ft,g=new ft,_=new k,m=new k;function p(N,A,b){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,b),d.fromBufferAttribute(s,N),f.fromBufferAttribute(s,A),g.fromBufferAttribute(s,b),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),o[N].add(_),o[A].add(_),o[b].add(_),l[N].add(m),l[A].add(m),l[b].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let N=0,A=M.length;N<A;++N){let b=M[N],I=b.start,B=b.count;for(let V=I,G=I+B;V<G;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let S=new k,y=new k,L=new k,C=new k;function w(N){L.fromBufferAttribute(i,N),C.copy(L);let A=o[N];S.copy(A),S.sub(L.multiplyScalar(L.dot(A))).normalize(),y.crossVectors(C,A);let I=y.dot(l[N])<0?-1:1;a.setXYZW(N,S.x,S.y,S.z,I)}for(let N=0,A=M.length;N<A;++N){let b=M[N],I=b.start,B=b.count;for(let V=I,G=I+B;V<G;V+=3)w(t.getX(V+0)),w(t.getX(V+1)),w(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new k,s=new k,a=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new be(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Th=new Ht,qi=new Kr,da=new hn,wh=new k,fa=new k,pa=new k,ma=new k,al=new k,ga=new k,Rh=new k,_a=new k,Kt=class extends ye{constructor(t=new Me,e=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],h=s[l];u!==0&&(al.fromBufferAttribute(h,t),a?ga.addScaledVector(al,u):ga.addScaledVector(al.sub(e),u))}e.add(ga)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),qi.copy(t.ray).recast(t.near),!(da.containsPoint(qi.origin)===!1&&(qi.intersectSphere(da,wh)===null||qi.origin.distanceToSquared(wh)>(t.far-t.near)**2))&&(Th.copy(s).invert(),qi.copy(t.ray).applyMatrix4(Th),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,L=S;y<L;y+=3){let C=o.getX(y),w=o.getX(y+1),N=o.getX(y+2);i=ya(this,p,t,n,c,u,h,C,w,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);i=ya(this,a,t,n,c,u,h,M,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,L=S;y<L;y+=3){let C=y,w=y+1,N=y+2;i=ya(this,p,t,n,c,u,h,C,w,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=m,S=m+1,y=m+2;i=ya(this,a,t,n,c,u,h,M,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function am(r,t,e,n,i,s,a,o){let l;if(t.side===ze?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Fn,o),l===null)return null;_a.copy(o),_a.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(_a);return c<e.near||c>e.far?null:{distance:c,point:_a.clone(),object:r}}function ya(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,fa),r.getVertexPosition(l,pa),r.getVertexPosition(c,ma);let u=am(r,t,e,n,fa,pa,ma,Rh);if(u){let h=new k;Ai.getBarycoord(Rh,fa,pa,ma,h),i&&(u.uv=Ai.getInterpolatedAttribute(i,o,l,c,h,new ft)),s&&(u.uv1=Ai.getInterpolatedAttribute(s,o,l,c,h,new ft)),a&&(u.normal=Ai.getInterpolatedAttribute(a,o,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};Ai.getNormal(fa,pa,ma,d.normal),u.face=d,u.barycoord=h}return u}var sn=class r extends Me{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(h,2));function g(_,m,p,M,S,y,L,C,w,N,A){let b=y/w,I=L/N,B=y/2,V=L/2,G=C/2,et=w+1,W=N+1,nt=0,X=0,gt=new k;for(let yt=0;yt<W;yt++){let At=yt*I-V;for(let Pt=0;Pt<et;Pt++){let Gt=Pt*b-B;gt[_]=Gt*M,gt[m]=At*S,gt[p]=G,c.push(gt.x,gt.y,gt.z),gt[_]=0,gt[m]=0,gt[p]=C>0?1:-1,u.push(gt.x,gt.y,gt.z),h.push(Pt/w),h.push(1-yt/N),nt+=1}}for(let yt=0;yt<N;yt++)for(let At=0;At<w;At++){let Pt=d+At+et*yt,Gt=d+At+et*(yt+1),Q=d+(At+1)+et*(yt+1),ct=d+(At+1)+et*yt;l.push(Pt,Gt,ct),l.push(Gt,Q,ct),X+=6}o.addGroup(f,X,A),f+=X,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Jr(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function je(r){let t={};for(let e=0;e<r.length;e++){let n=Jr(r[e]);for(let i in n)t[i]=n[i]}return t}function om(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Vd(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var lm={clone:Jr,merge:je},cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Re=class extends rn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jr(t.uniforms),this.uniformsGroups=om(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ya=class extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mi=new k,Ch=new ft,Ph=new ft,we=class extends Ya{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Ph),e.subVectors(Ph,Ch)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Er=-90,Tr=1,uc=class extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new we(Er,Tr,t,e);i.layers=this.layers,this.add(i);let s=new we(Er,Tr,t,e);s.layers=this.layers,this.add(s);let a=new we(Er,Tr,t,e);a.layers=this.layers,this.add(a);let o=new we(Er,Tr,t,e);o.layers=this.layers,this.add(o);let l=new we(Er,Tr,t,e);l.layers=this.layers,this.add(l);let c=new we(Er,Tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ka=class extends Be{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Hr,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hc=class extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ka(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new sn(5,5,5),s=new Re({name:"CubemapFromEquirect",uniforms:Jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Ti});s.uniforms.tEquirect.value=e;let a=new Kt(i,s),o=e.minFilter;return e.minFilter===yn&&(e.minFilter=en),new uc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},ol=new k,hm=new k,dm=new jt,Qn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ol.subVectors(n,e).cross(hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ol),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||dm.getNormalMatrix(t),i=this.coplanarPoint(ol).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new hn,xa=new k,Us=class{constructor(t=new Qn,e=new Qn,n=new Qn,i=new Qn,s=new Qn,a=new Qn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei){let n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],S=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,m-f,y-p).normalize(),n[1].setComponents(l+s,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+u,m+g,y+M).normalize(),n[3].setComponents(l-a,d-u,m-g,y-M).normalize(),n[4].setComponents(l-o,d-h,m-_,y-S).normalize(),e===ei)n[5].setComponents(l+o,d+h,m+_,y+S).normalize();else if(e===Ha)n[5].setComponents(o,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(xa.x=i.normal.x>0?t.max.x:t.min.x,xa.y=i.normal.y>0?t.max.y:t.min.y,xa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gd(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function fm(r){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var $i=class r extends Me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let M=p*d-a;for(let S=0;S<c;S++){let y=S*h-s;g.push(y,-M,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let S=M+c*p,y=M+c*(p+1),L=M+1+c*(p+1),C=M+1+c*p;f.push(S,y,C),f.push(y,L,C)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Om=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,k0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,G0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ng=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:ym,alphatest_pars_fragment:xm,aomap_fragment:vm,aomap_pars_fragment:bm,batching_pars_vertex:Mm,batching_vertex:Sm,begin_vertex:Am,beginnormal_vertex:Em,bsdfs:Tm,iridescence_fragment:wm,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Im,clipping_planes_vertex:km,color_fragment:Lm,color_pars_fragment:Nm,color_pars_vertex:Dm,color_vertex:Um,common:Om,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:zm,displacementmap_pars_vertex:Bm,displacementmap_vertex:Hm,emissivemap_fragment:Vm,emissivemap_pars_fragment:Gm,colorspace_fragment:qm,colorspace_pars_fragment:Wm,envmap_fragment:Xm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:Km,envmap_pars_vertex:Jm,envmap_physical_pars_fragment:a0,envmap_vertex:Zm,fog_vertex:jm,fog_pars_vertex:$m,fog_fragment:Qm,fog_pars_fragment:t0,gradientmap_pars_fragment:e0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:r0,lights_pars_begin:s0,lights_toon_fragment:o0,lights_toon_pars_fragment:l0,lights_phong_fragment:c0,lights_phong_pars_fragment:u0,lights_physical_fragment:h0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:p0,lights_fragment_end:m0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:x0,map_fragment:v0,map_pars_fragment:b0,map_particle_fragment:M0,map_particle_pars_fragment:S0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:E0,morphinstance_vertex:T0,morphcolor_vertex:w0,morphnormal_vertex:R0,morphtarget_pars_vertex:C0,morphtarget_vertex:P0,normal_fragment_begin:I0,normal_fragment_maps:k0,normal_pars_fragment:L0,normal_pars_vertex:N0,normal_vertex:D0,normalmap_pars_fragment:U0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:B0,opaque_fragment:H0,packing:V0,premultiplied_alpha_fragment:G0,project_vertex:q0,dithering_fragment:W0,dithering_pars_fragment:X0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Z0,shadowmap_vertex:j0,shadowmask_pars_fragment:$0,skinbase_vertex:Q0,skinning_pars_vertex:tg,skinning_vertex:eg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:rg,tonemapping_fragment:sg,tonemapping_pars_fragment:ag,transmission_fragment:og,transmission_pars_fragment:lg,uv_pars_fragment:cg,uv_pars_vertex:ug,uv_vertex:hg,worldpos_vertex:dg,background_vert:fg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:gg,cube_vert:_g,cube_frag:yg,depth_vert:xg,depth_frag:vg,distanceRGBA_vert:bg,distanceRGBA_frag:Mg,equirect_vert:Sg,equirect_frag:Ag,linedashed_vert:Eg,linedashed_frag:Tg,meshbasic_vert:wg,meshbasic_frag:Rg,meshlambert_vert:Cg,meshlambert_frag:Pg,meshmatcap_vert:Ig,meshmatcap_frag:kg,meshnormal_vert:Lg,meshnormal_frag:Ng,meshphong_vert:Dg,meshphong_frag:Ug,meshphysical_vert:Og,meshphysical_frag:Fg,meshtoon_vert:zg,meshtoon_frag:Bg,points_vert:Hg,points_frag:Vg,shadow_vert:Gg,shadow_frag:qg,sprite_vert:Wg,sprite_frag:Xg},Et={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},On={basic:{uniforms:je([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:je([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:je([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:je([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:je([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:je([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:je([Et.points,Et.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:je([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:je([Et.common,Et.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:je([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:je([Et.sprite,Et.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:je([Et.common,Et.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:je([Et.lights,Et.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};On.physical={uniforms:je([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var va={r:0,b:0,g:0},Xi=new Mn,Yg=new Ht;function Kg(r,t,e,n,i,s,a){let o=new Nt(0),l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function _(M){let S=!1,y=g(M);y===null?p(o,l):y&&y.isColor&&(p(y,1),S=!0);let L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,S){let y=g(S);y&&(y.isCubeTexture||y.mapping===xo)?(u===void 0&&(u=new Kt(new sn(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:Jr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Xi.copy(S.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(Xi)),u.material.toneMapped=ie.getTransfer(y.colorSpace)!==fe,(h!==y||d!==y.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Kt(new $i(2,2),new Re({name:"BackgroundMaterial",uniforms:Jr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ie.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(va,Vd(r)),n.buffers.color.setClear(va.r,va.g,va.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:m}}function Jg(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(b,I,B,V,G){let et=!1,W=h(V,B,I);s!==W&&(s=W,c(s.object)),et=f(b,V,B,G),et&&g(b,V,B,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(et||a)&&(a=!1,y(b,I,B,V),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function u(b){return r.deleteVertexArray(b)}function h(b,I,B){let V=B.wireframe===!0,G=n[b.id];G===void 0&&(G={},n[b.id]=G);let et=G[I.id];et===void 0&&(et={},G[I.id]=et);let W=et[V];return W===void 0&&(W=d(l()),et[V]=W),W}function d(b){let I=[],B=[],V=[];for(let G=0;G<e;G++)I[G]=0,B[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:V,object:b,attributes:{},index:null}}function f(b,I,B,V){let G=s.attributes,et=I.attributes,W=0,nt=B.getAttributes();for(let X in nt)if(nt[X].location>=0){let yt=G[X],At=et[X];if(At===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(At=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(At=b.instanceColor)),yt===void 0||yt.attribute!==At||At&&yt.data!==At.data)return!0;W++}return s.attributesNum!==W||s.index!==V}function g(b,I,B,V){let G={},et=I.attributes,W=0,nt=B.getAttributes();for(let X in nt)if(nt[X].location>=0){let yt=et[X];yt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(yt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(yt=b.instanceColor));let At={};At.attribute=yt,yt&&yt.data&&(At.data=yt.data),G[X]=At,W++}s.attributes=G,s.attributesNum=W,s.index=V}function _(){let b=s.newAttributes;for(let I=0,B=b.length;I<B;I++)b[I]=0}function m(b){p(b,0)}function p(b,I){let B=s.newAttributes,V=s.enabledAttributes,G=s.attributeDivisors;B[b]=1,V[b]===0&&(r.enableVertexAttribArray(b),V[b]=1),G[b]!==I&&(r.vertexAttribDivisor(b,I),G[b]=I)}function M(){let b=s.newAttributes,I=s.enabledAttributes;for(let B=0,V=I.length;B<V;B++)I[B]!==b[B]&&(r.disableVertexAttribArray(B),I[B]=0)}function S(b,I,B,V,G,et,W){W===!0?r.vertexAttribIPointer(b,I,B,G,et):r.vertexAttribPointer(b,I,B,V,G,et)}function y(b,I,B,V){_();let G=V.attributes,et=B.getAttributes(),W=I.defaultAttributeValues;for(let nt in et){let X=et[nt];if(X.location>=0){let gt=G[nt];if(gt===void 0&&(nt==="instanceMatrix"&&b.instanceMatrix&&(gt=b.instanceMatrix),nt==="instanceColor"&&b.instanceColor&&(gt=b.instanceColor)),gt!==void 0){let yt=gt.normalized,At=gt.itemSize,Pt=t.get(gt);if(Pt===void 0)continue;let Gt=Pt.buffer,Q=Pt.type,ct=Pt.bytesPerElement,vt=Q===r.INT||Q===r.UNSIGNED_INT||gt.gpuType===Wc;if(gt.isInterleavedBufferAttribute){let lt=gt.data,Ct=lt.stride,zt=gt.offset;if(lt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<X.locationSize;Dt++)p(X.location+Dt,lt.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Dt=0;Dt<X.locationSize;Dt++)m(X.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,Gt);for(let Dt=0;Dt<X.locationSize;Dt++)S(X.location+Dt,At/X.locationSize,Q,yt,Ct*ct,(zt+At/X.locationSize*Dt)*ct,vt)}else{if(gt.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)p(X.location+lt,gt.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let lt=0;lt<X.locationSize;lt++)m(X.location+lt);r.bindBuffer(r.ARRAY_BUFFER,Gt);for(let lt=0;lt<X.locationSize;lt++)S(X.location+lt,At/X.locationSize,Q,yt,At*ct,At/X.locationSize*lt*ct,vt)}}else if(W!==void 0){let yt=W[nt];if(yt!==void 0)switch(yt.length){case 2:r.vertexAttrib2fv(X.location,yt);break;case 3:r.vertexAttrib3fv(X.location,yt);break;case 4:r.vertexAttrib4fv(X.location,yt);break;default:r.vertexAttrib1fv(X.location,yt)}}}}M()}function L(){N();for(let b in n){let I=n[b];for(let B in I){let V=I[B];for(let G in V)u(V[G].object),delete V[G];delete I[B]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let B in I){let V=I[B];for(let G in V)u(V[G].object),delete V[G];delete I[B]}delete n[b.id]}function w(b){for(let I in n){let B=n[I];if(B[b.id]===void 0)continue;let V=B[b.id];for(let G in V)u(V[G].object),delete V[G];delete B[b.id]}}function N(){A(),a=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:A,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Zg(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==xn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let N=w===Ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ii&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ln&&!N)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:L,maxSamples:C}}function $g(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Qn,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{let M=s?0:n,S=M*4,y=p.clippingState||null;l.value=y,y=u(g,d,S,f);for(let L=0;L!==S;++L)y[L]=e[L];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=f;S!==_;++S,y+=4)a.copy(h[S]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Qg(r){let t=new WeakMap;function e(a,o){return o===kl?a.mapping=Hr:o===Ll&&(a.mapping=Vr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===kl||o===Ll)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new hc(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ci=class extends Ya{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Nr=4,Ih=[.125,.215,.35,.446,.526,.582],Zi=20,ll=new Ci,kh=new Nt,cl=null,ul=0,hl=0,dl=!1,Ki=(1+Math.sqrt(5))/2,wr=1/Ki,Lh=[new k(-Ki,wr,0),new k(Ki,wr,0),new k(-wr,0,Ki),new k(wr,0,Ki),new k(0,Ki,-wr),new k(0,Ki,wr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Ja=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){cl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cl,ul,hl),this._renderer.xr.enabled=dl,t.scissorTest=!1,ba(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hr||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ws,format:xn,colorSpace:Je,depthBuffer:!1},i=Nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t_(s)),this._blurMaterial=e_(s,t,e)}return i}_compileMaterial(t){let e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,ll)}_sceneToCubeUV(t,e,n,i){let o=new we(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(kh),u.toneMapping=wi,u.autoClear=!1;let f=new Sn({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new Kt(new sn,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(kh),_=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let S=this._cubeSize;ba(i,M*S,p>2?S:0,S,S),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Hr||t.mapping===Vr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;ba(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ll)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Lh[(i-s-1)%Lh.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Kt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Zi;m>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);let p=[],M=0;for(let w=0;w<Zi;++w){let N=w/_,A=Math.exp(-N*N/2);p.push(A),w===0?M+=A:w<m&&(M+=2*A)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let y=this._sizeLods[i],L=3*y*(i>S-Nr?i-S+Nr:0),C=4*(this._cubeSize-y);ba(e,L,C,3*y,2*y),l.setRenderTarget(e),l.render(h,ll)}};function t_(r){let t=[],e=[],n=[],i=r,s=r-Nr+1+Ih.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Nr?l=Ih[a-r+Nr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),S=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){let w=C%3*2/3-1,N=C>2?0:-1,A=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];M.set(A,_*g*C),S.set(d,m*g*C);let b=[C,C,C,C,C,C];y.set(b,p*g*C)}let L=new Me;L.setAttribute("position",new be(M,_)),L.setAttribute("uv",new be(S,m)),L.setAttribute("faceIndex",new be(y,p)),t.push(L),i>Nr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nh(r,t,e){let n=new ri(r,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function e_(r,t,e){let n=new Float32Array(Zi),i=new k(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Dh(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Uh(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n_(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===kl||l===Ll,u=l===Hr||l===Vr;if(c||u){let h=t.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ja(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Ja(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function i_(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function r_(r,t,e,n){let i={},s=new WeakMap;function a(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)t.update(d[g],r.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let S=0,y=M.length;S<y;S+=3){let L=M[S+0],C=M[S+1],w=M[S+2];d.push(L,C,C,w,w,L)}}else if(g!==void 0){let M=g.array;_=g.version;for(let S=0,y=M.length/3-1;S<y;S+=3){let L=S+0,C=S+1,w=S+2;d.push(L,C,C,w,w,L)}}else return;let m=new(Bd(d)?Xa:Wa)(d,1);m.version=_;let p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function s_(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function a_(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function o_(r,t,e){let n=new WeakMap,i=new ee;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let A=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let y=o.attributes.position.count*S,L=1;y>t.maxTextureSize&&(L=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let C=new Float32Array(y*L*4*h),w=new Ga(C,y,L,h);w.type=Ln,w.needsUpdate=!0;let N=S*4;for(let b=0;b<h;b++){let I=m[b],B=p[b],V=M[b],G=y*L*4*b;for(let et=0;et<I.count;et++){let W=et*N;f===!0&&(i.fromBufferAttribute(I,et),C[G+W+0]=i.x,C[G+W+1]=i.y,C[G+W+2]=i.z,C[G+W+3]=0),g===!0&&(i.fromBufferAttribute(B,et),C[G+W+4]=i.x,C[G+W+5]=i.y,C[G+W+6]=i.z,C[G+W+7]=0),_===!0&&(i.fromBufferAttribute(V,et),C[G+W+8]=i.x,C[G+W+9]=i.y,C[G+W+10]=i.z,C[G+W+11]=V.itemSize===4?i.w:1)}}d={count:h,texture:w,size:new ft(y,L)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function l_(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var Za=class extends Be{constructor(t,e,n,i,s,a,o,l,c,u=Or){if(u!==Or&&u!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Or&&(n=ji),n===void 0&&u===qr&&(n=Gr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qd=new Be,Oh=new Za(1,1),Wd=new Ga,Xd=new cc,Yd=new Ka,Fh=[],zh=[],Bh=new Float32Array(16),Hh=new Float32Array(9),Vh=new Float32Array(4);function is(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Fh[i];if(s===void 0&&(s=new Float32Array(i),Fh[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ne(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function De(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function So(r,t){let e=zh[t];e===void 0&&(e=new Int32Array(t),zh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function c_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function u_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2fv(this.addr,t),De(e,t)}}function h_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;r.uniform3fv(this.addr,t),De(e,t)}}function d_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4fv(this.addr,t),De(e,t)}}function f_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ne(e,n))return;Vh.set(n),r.uniformMatrix2fv(this.addr,!1,Vh),De(e,n)}}function p_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ne(e,n))return;Hh.set(n),r.uniformMatrix3fv(this.addr,!1,Hh),De(e,n)}}function m_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ne(e,n))return;Bh.set(n),r.uniformMatrix4fv(this.addr,!1,Bh),De(e,n)}}function g_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function __(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2iv(this.addr,t),De(e,t)}}function y_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3iv(this.addr,t),De(e,t)}}function x_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4iv(this.addr,t),De(e,t)}}function v_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function b_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2uiv(this.addr,t),De(e,t)}}function M_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3uiv(this.addr,t),De(e,t)}}function S_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4uiv(this.addr,t),De(e,t)}}function A_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Oh.compareFunction=zd,s=Oh):s=qd,e.setTexture2D(t||s,i)}function E_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xd,i)}function T_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Yd,i)}function w_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wd,i)}function R_(r){switch(r){case 5126:return c_;case 35664:return u_;case 35665:return h_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return y_;case 35669:case 35673:return x_;case 5125:return v_;case 36294:return b_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return w_}}function C_(r,t){r.uniform1fv(this.addr,t)}function P_(r,t){let e=is(t,this.size,2);r.uniform2fv(this.addr,e)}function I_(r,t){let e=is(t,this.size,3);r.uniform3fv(this.addr,e)}function k_(r,t){let e=is(t,this.size,4);r.uniform4fv(this.addr,e)}function L_(r,t){let e=is(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function N_(r,t){let e=is(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function D_(r,t){let e=is(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function U_(r,t){r.uniform1iv(this.addr,t)}function O_(r,t){r.uniform2iv(this.addr,t)}function F_(r,t){r.uniform3iv(this.addr,t)}function z_(r,t){r.uniform4iv(this.addr,t)}function B_(r,t){r.uniform1uiv(this.addr,t)}function H_(r,t){r.uniform2uiv(this.addr,t)}function V_(r,t){r.uniform3uiv(this.addr,t)}function G_(r,t){r.uniform4uiv(this.addr,t)}function q_(r,t,e){let n=this.cache,i=t.length,s=So(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||qd,s[a])}function W_(r,t,e){let n=this.cache,i=t.length,s=So(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Xd,s[a])}function X_(r,t,e){let n=this.cache,i=t.length,s=So(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Yd,s[a])}function Y_(r,t,e){let n=this.cache,i=t.length,s=So(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Wd,s[a])}function K_(r){switch(r){case 5126:return C_;case 35664:return P_;case 35665:return I_;case 35666:return k_;case 35674:return L_;case 35675:return N_;case 35676:return D_;case 5124:case 35670:return U_;case 35667:case 35671:return O_;case 35668:case 35672:return F_;case 35669:case 35673:return z_;case 5125:return B_;case 36294:return H_;case 36295:return V_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return Y_}}var dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=R_(e.type)}},fc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=K_(e.type)}},pc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},fl=/(\w+)(\])?(\[|\.)?/g;function Gh(r,t){r.seq.push(t),r.map[t.id]=t}function J_(r,t,e){let n=r.name,i=n.length;for(fl.lastIndex=0;;){let s=fl.exec(n),a=fl.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Gh(e,c===void 0?new dc(o,r,t):new fc(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new pc(o),Gh(e,h)),e=h}}}var zr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);J_(s,a,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function qh(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Z_=37297,j_=0;function $_(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Wh=new jt;function Q_(r){ie._getMatrix(Wh,ie.workingColorSpace,r);let t=`mat3( ${Wh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(r)){case bo:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Xh(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+$_(r.getShaderSource(t),a)}else return i}function ty(r,t){let e=Q_(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ey(r,t){let e;switch(t){case up:e="Linear";break;case hp:e="Reinhard";break;case dp:e="Cineon";break;case fp:e="ACESFilmic";break;case mp:e="AgX";break;case gp:e="Neutral";break;case pp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ma=new k;function ny(){ie.getLuminanceCoefficients(Ma);let r=Ma.x.toFixed(4),t=Ma.y.toFixed(4),e=Ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function ry(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sy(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Es(r){return r!==""}function Yh(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(r){return r.replace(ay,ly)}var oy=new Map;function ly(r,t){let e=Qt[t];if(e===void 0){let n=oy.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return mc(e)}var cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(r){return r.replace(cy,uy)}function uy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hy(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ed?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Gf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function dy(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hr:case Vr:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fy(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Vr&&(t="ENVMAP_MODE_REFRACTION"),t}function py(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Td:t="ENVMAP_BLENDING_MULTIPLY";break;case lp:t="ENVMAP_BLENDING_MIX";break;case cp:t="ENVMAP_BLENDING_ADD";break}return t}function my(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gy(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=hy(e),c=dy(e),u=fy(e),h=py(e),d=my(e),f=iy(e),g=ry(s),_=i.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(m=[Zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[Zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==wi?ey("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,ty("linearToOutputTexel",e.outputColorSpace),ny(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=mc(a),a=Yh(a,e),a=Kh(a,e),o=mc(o),o=Yh(o,e),o=Kh(o,e),a=Jh(a),o=Jh(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=M+m+a,y=M+p+o,L=qh(i,i.VERTEX_SHADER,S),C=qh(i,i.FRAGMENT_SHADER,y);i.attachShader(_,L),i.attachShader(_,C),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(I){if(r.debug.checkShaderErrors){let B=i.getProgramInfoLog(_).trim(),V=i.getShaderInfoLog(L).trim(),G=i.getShaderInfoLog(C).trim(),et=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(et=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,L,C);else{let nt=Xh(i,L,"vertex"),X=Xh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+nt+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(V===""||G==="")&&(W=!1);W&&(I.diagnostics={runnable:et,programLog:B,vertexShader:{log:V,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(L),i.deleteShader(C),N=new zr(i,_),A=sy(i,_)}let N;this.getUniforms=function(){return N===void 0&&w(this),N};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,Z_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}var _y=0,gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _c(t),e.set(t,n)),n}},_c=class{constructor(t){this.id=_y++,this.code=t,this.usedTimes=0}};function yy(r,t,e,n,i,s,a){let o=new qa,l=new gc,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,b,I,B,V){let G=B.fog,et=V.geometry,W=A.isMeshStandardMaterial?B.environment:null,nt=(A.isMeshStandardMaterial?e:t).get(A.envMap||W),X=nt&&nt.mapping===xo?nt.image.height:null,gt=g[A.type];A.precision!==null&&(f=i.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));let yt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,At=yt!==void 0?yt.length:0,Pt=0;et.morphAttributes.position!==void 0&&(Pt=1),et.morphAttributes.normal!==void 0&&(Pt=2),et.morphAttributes.color!==void 0&&(Pt=3);let Gt,Q,ct,vt;if(gt){let Yt=On[gt];Gt=Yt.vertexShader,Q=Yt.fragmentShader}else Gt=A.vertexShader,Q=A.fragmentShader,l.update(A),ct=l.getVertexShaderID(A),vt=l.getFragmentShaderID(A);let lt=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),zt=V.isInstancedMesh===!0,Dt=V.isBatchedMesh===!0,Wt=!!A.map,rt=!!A.matcap,ut=!!nt,x=!!A.aoMap,U=!!A.lightMap,D=!!A.bumpMap,j=!!A.normalMap,Z=!!A.displacementMap,_t=!!A.emissiveMap,pt=!!A.metalnessMap,T=!!A.roughnessMap,v=A.anisotropy>0,q=A.clearcoat>0,R=A.dispersion>0,P=A.iridescence>0,F=A.sheen>0,ht=A.transmission>0,ot=v&&!!A.anisotropyMap,tt=q&&!!A.clearcoatMap,St=q&&!!A.clearcoatNormalMap,it=q&&!!A.clearcoatRoughnessMap,bt=P&&!!A.iridescenceMap,Ut=P&&!!A.iridescenceThicknessMap,Bt=F&&!!A.sheenColorMap,Tt=F&&!!A.sheenRoughnessMap,Jt=!!A.specularMap,Ft=!!A.specularColorMap,le=!!A.specularIntensityMap,O=ht&&!!A.transmissionMap,Mt=ht&&!!A.thicknessMap,J=!!A.gradientMap,at=!!A.alphaMap,$=A.alphaTest>0,mt=!!A.alphaHash,Rt=!!A.extensions,te=wi;A.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(te=r.toneMapping);let Ae={shaderID:gt,shaderType:A.type,shaderName:A.name,vertexShader:Gt,fragmentShader:Q,defines:A.defines,customVertexShaderID:ct,customFragmentShaderID:vt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&V._colorsTexture!==null,instancing:zt,instancingColor:zt&&V.instanceColor!==null,instancingMorph:zt&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?r.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Je,alphaToCoverage:!!A.alphaToCoverage,map:Wt,matcap:rt,envMap:ut,envMapMode:ut&&nt.mapping,envMapCubeUVHeight:X,aoMap:x,lightMap:U,bumpMap:D,normalMap:j,displacementMap:d&&Z,emissiveMap:_t,normalMapObjectSpace:j&&A.normalMapType===bp,normalMapTangentSpace:j&&A.normalMapType===Fd,metalnessMap:pt,roughnessMap:T,anisotropy:v,anisotropyMap:ot,clearcoat:q,clearcoatMap:tt,clearcoatNormalMap:St,clearcoatRoughnessMap:it,dispersion:R,iridescence:P,iridescenceMap:bt,iridescenceThicknessMap:Ut,sheen:F,sheenColorMap:Bt,sheenRoughnessMap:Tt,specularMap:Jt,specularColorMap:Ft,specularIntensityMap:le,transmission:ht,transmissionMap:O,thicknessMap:Mt,gradientMap:J,opaque:A.transparent===!1&&A.blending===Ur&&A.alphaToCoverage===!1,alphaMap:at,alphaTest:$,alphaHash:mt,combine:A.combine,mapUv:Wt&&_(A.map.channel),aoMapUv:x&&_(A.aoMap.channel),lightMapUv:U&&_(A.lightMap.channel),bumpMapUv:D&&_(A.bumpMap.channel),normalMapUv:j&&_(A.normalMap.channel),displacementMapUv:Z&&_(A.displacementMap.channel),emissiveMapUv:_t&&_(A.emissiveMap.channel),metalnessMapUv:pt&&_(A.metalnessMap.channel),roughnessMapUv:T&&_(A.roughnessMap.channel),anisotropyMapUv:ot&&_(A.anisotropyMap.channel),clearcoatMapUv:tt&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:St&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&_(A.sheenRoughnessMap.channel),specularMapUv:Jt&&_(A.specularMap.channel),specularColorMapUv:Ft&&_(A.specularColorMap.channel),specularIntensityMapUv:le&&_(A.specularIntensityMap.channel),transmissionMapUv:O&&_(A.transmissionMap.channel),thicknessMapUv:Mt&&_(A.thicknessMap.channel),alphaMapUv:at&&_(A.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(j||v),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!et.attributes.uv&&(Wt||at),fog:!!G,useFog:A.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ct,skinning:V.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Pt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:te,decodeVideoTexture:Wt&&A.map.isVideoTexture===!0&&ie.getTransfer(A.map.colorSpace)===fe,decodeVideoTextureEmissive:_t&&A.emissiveMap.isVideoTexture===!0&&ie.getTransfer(A.emissiveMap.colorSpace)===fe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Fe,flipSided:A.side===ze,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Rt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&A.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function p(A){let b=[];if(A.shaderID?b.push(A.shaderID):(b.push(A.customVertexShaderID),b.push(A.customFragmentShaderID)),A.defines!==void 0)for(let I in A.defines)b.push(I),b.push(A.defines[I]);return A.isRawShaderMaterial===!1&&(M(b,A),S(b,A),b.push(r.outputColorSpace)),b.push(A.customProgramCacheKey),b.join()}function M(A,b){A.push(b.precision),A.push(b.outputColorSpace),A.push(b.envMapMode),A.push(b.envMapCubeUVHeight),A.push(b.mapUv),A.push(b.alphaMapUv),A.push(b.lightMapUv),A.push(b.aoMapUv),A.push(b.bumpMapUv),A.push(b.normalMapUv),A.push(b.displacementMapUv),A.push(b.emissiveMapUv),A.push(b.metalnessMapUv),A.push(b.roughnessMapUv),A.push(b.anisotropyMapUv),A.push(b.clearcoatMapUv),A.push(b.clearcoatNormalMapUv),A.push(b.clearcoatRoughnessMapUv),A.push(b.iridescenceMapUv),A.push(b.iridescenceThicknessMapUv),A.push(b.sheenColorMapUv),A.push(b.sheenRoughnessMapUv),A.push(b.specularMapUv),A.push(b.specularColorMapUv),A.push(b.specularIntensityMapUv),A.push(b.transmissionMapUv),A.push(b.thicknessMapUv),A.push(b.combine),A.push(b.fogExp2),A.push(b.sizeAttenuation),A.push(b.morphTargetsCount),A.push(b.morphAttributeCount),A.push(b.numDirLights),A.push(b.numPointLights),A.push(b.numSpotLights),A.push(b.numSpotLightMaps),A.push(b.numHemiLights),A.push(b.numRectAreaLights),A.push(b.numDirLightShadows),A.push(b.numPointLightShadows),A.push(b.numSpotLightShadows),A.push(b.numSpotLightShadowsWithMaps),A.push(b.numLightProbes),A.push(b.shadowMapType),A.push(b.toneMapping),A.push(b.numClippingPlanes),A.push(b.numClipIntersection),A.push(b.depthPacking)}function S(A,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),A.push(o.mask)}function y(A){let b=g[A.type],I;if(b){let B=On[b];I=lm.clone(B.uniforms)}else I=A.uniforms;return I}function L(A,b){let I;for(let B=0,V=u.length;B<V;B++){let G=u[B];if(G.cacheKey===b){I=G,++I.usedTimes;break}}return I===void 0&&(I=new gy(r,b,A,s),u.push(I)),I}function C(A){if(--A.usedTimes===0){let b=u.indexOf(A);u[b]=u[u.length-1],u.pop(),A.destroy()}}function w(A){l.remove(A)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:N}}function xy(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function vy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function jh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $h(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,d,f,g,_,m){let p=a(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,g,_,m){let p=a(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||vy),n.length>1&&n.sort(d||jh),i.length>1&&i.sort(d||jh)}function u(){for(let h=t,d=r.length;h<d;h++){let f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function by(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new $h,r.set(n,[a])):i>=s.length?(a=new $h,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function My(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Nt};break;case"SpotLight":e={position:new k,direction:new k,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=e,e}}}function Sy(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Ay=0;function Ey(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ty(r){let t=new My,e=Sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let i=new k,s=new Ht,a=new Ht;function o(c){let u=0,h=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,S=0,y=0,L=0,C=0,w=0;c.sort(Ey);for(let A=0,b=c.length;A<b;A++){let I=c[A],B=I.color,V=I.intensity,G=I.distance,et=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*V,h+=B.g*V,d+=B.b*V;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],V);w++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let nt=I.shadow,X=e.get(I);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=et,n.directionalShadowMatrix[f]=I.shadow.matrix,M++}n.directional[f]=W,f++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(B).multiplyScalar(V),W.distance=G,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[_]=W;let nt=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,nt.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[_]=nt.matrix,I.castShadow){let X=e.get(I);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=et,y++}_++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(B).multiplyScalar(V),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let nt=I.shadow,X=e.get(I);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,X.shadowCameraNear=nt.camera.near,X.shadowCameraFar=nt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(V),W.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==M||N.numPointShadows!==S||N.numSpotShadows!==y||N.numSpotMaps!==L||N.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=M,N.numPointShadows=S,N.numSpotShadows=y,N.numSpotMaps=L,N.numLightProbes=w,n.version=Ay++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0,m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let S=c[p];if(S.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(S.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Qh(r){let t=new Ty(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function wy(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new Qh(r),t.set(i,[o])):s>=a.length?(o=new Qh(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var yc=class extends rn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xc=class extends rn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Py(r,t,e){let n=new Us,i=new ft,s=new ft,a=new ee,o=new yc({depthPacking:vp}),l=new xc,c={},u=e.maxTextureSize,h={[Fn]:ze,[ze]:Fn,[Fe]:Fe},d=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Ry,fragmentShader:Cy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ed;let p=this.type;this.render=function(C,w,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let A=r.getRenderTarget(),b=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Ti),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=p!==$n&&this.type===$n,G=p===$n&&this.type!==$n;for(let et=0,W=C.length;et<W;et++){let nt=C[et],X=nt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let gt=X.getFrameExtents();if(i.multiply(gt),s.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/gt.x),i.x=s.x*gt.x,X.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/gt.y),i.y=s.y*gt.y,X.mapSize.y=s.y)),X.map===null||V===!0||G===!0){let At=this.type!==$n?{minFilter:Ye,magFilter:Ye}:{};X.map!==null&&X.map.dispose(),X.map=new ri(i.x,i.y,At),X.map.texture.name=nt.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();let yt=X.getViewportCount();for(let At=0;At<yt;At++){let Pt=X.getViewport(At);a.set(s.x*Pt.x,s.y*Pt.y,s.x*Pt.z,s.y*Pt.w),B.viewport(a),X.updateMatrices(nt,At),n=X.getFrustum(),y(w,N,X.camera,nt,this.type)}X.isPointLightShadow!==!0&&this.type===$n&&M(X,N),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(A,b,I)};function M(C,w){let N=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ri(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(w,null,N,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(w,null,N,f,_,null)}function S(C,w,N,A){let b=null,I=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)b=I;else if(b=N.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let B=b.uuid,V=w.uuid,G=c[B];G===void 0&&(G={},c[B]=G);let et=G[V];et===void 0&&(et=b.clone(),G[V]=et,w.addEventListener("dispose",L)),b=et}if(b.visible=w.visible,b.wireframe=w.wireframe,A===$n?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=r.properties.get(b);B.light=N}return b}function y(C,w,N,A,b){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===$n)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);let V=t.update(C),G=C.material;if(Array.isArray(G)){let et=V.groups;for(let W=0,nt=et.length;W<nt;W++){let X=et[W],gt=G[X.materialIndex];if(gt&&gt.visible){let yt=S(C,gt,A,b);C.onBeforeShadow(r,C,w,N,V,yt,X),r.renderBufferDirect(N,null,V,yt,C,X),C.onAfterShadow(r,C,w,N,V,yt,X)}}}else if(G.visible){let et=S(C,G,A,b);C.onBeforeShadow(r,C,w,N,V,et,null),r.renderBufferDirect(N,null,V,et,C,null),C.onAfterShadow(r,C,w,N,V,et,null)}}let B=C.children;for(let V=0,G=B.length;V<G;V++)y(B[V],w,N,A,b)}function L(C){C.target.removeEventListener("dispose",L);for(let N in c){let A=c[N],b=C.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}var Iy={[El]:Tl,[wl]:Pl,[Rl]:Il,[Br]:Cl,[Tl]:El,[Pl]:wl,[Il]:Rl,[Cl]:Br};function ky(r,t){function e(){let O=!1,Mt=new ee,J=null,at=new ee(0,0,0,0);return{setMask:function($){J!==$&&!O&&(r.colorMask($,$,$,$),J=$)},setLocked:function($){O=$},setClear:function($,mt,Rt,te,Ae){Ae===!0&&($*=te,mt*=te,Rt*=te),Mt.set($,mt,Rt,te),at.equals(Mt)===!1&&(r.clearColor($,mt,Rt,te),at.copy(Mt))},reset:function(){O=!1,J=null,at.set(-1,0,0,0)}}}function n(){let O=!1,Mt=!1,J=null,at=null,$=null;return{setReversed:function(mt){if(Mt!==mt){let Rt=t.get("EXT_clip_control");Mt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);let te=$;$=null,this.setClear(te)}Mt=mt},getReversed:function(){return Mt},setTest:function(mt){mt?lt(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(mt){J!==mt&&!O&&(r.depthMask(mt),J=mt)},setFunc:function(mt){if(Mt&&(mt=Iy[mt]),at!==mt){switch(mt){case El:r.depthFunc(r.NEVER);break;case Tl:r.depthFunc(r.ALWAYS);break;case wl:r.depthFunc(r.LESS);break;case Br:r.depthFunc(r.LEQUAL);break;case Rl:r.depthFunc(r.EQUAL);break;case Cl:r.depthFunc(r.GEQUAL);break;case Pl:r.depthFunc(r.GREATER);break;case Il:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}at=mt}},setLocked:function(mt){O=mt},setClear:function(mt){$!==mt&&(Mt&&(mt=1-mt),r.clearDepth(mt),$=mt)},reset:function(){O=!1,J=null,at=null,$=null,Mt=!1}}}function i(){let O=!1,Mt=null,J=null,at=null,$=null,mt=null,Rt=null,te=null,Ae=null;return{setTest:function(Yt){O||(Yt?lt(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(Yt){Mt!==Yt&&!O&&(r.stencilMask(Yt),Mt=Yt)},setFunc:function(Yt,Qe,wn){(J!==Yt||at!==Qe||$!==wn)&&(r.stencilFunc(Yt,Qe,wn),J=Yt,at=Qe,$=wn)},setOp:function(Yt,Qe,wn){(mt!==Yt||Rt!==Qe||te!==wn)&&(r.stencilOp(Yt,Qe,wn),mt=Yt,Rt=Qe,te=wn)},setLocked:function(Yt){O=Yt},setClear:function(Yt){Ae!==Yt&&(r.clearStencil(Yt),Ae=Yt)},reset:function(){O=!1,Mt=null,J=null,at=null,$=null,mt=null,Rt=null,te=null,Ae=null}}}let s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,y=null,L=null,C=null,w=new Nt(0,0,0),N=0,A=!1,b=null,I=null,B=null,V=null,G=null,et=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,nt=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=nt>=2);let gt=null,yt={},At=r.getParameter(r.SCISSOR_BOX),Pt=r.getParameter(r.VIEWPORT),Gt=new ee().fromArray(At),Q=new ee().fromArray(Pt);function ct(O,Mt,J,at){let $=new Uint8Array(4),mt=r.createTexture();r.bindTexture(O,mt),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Rt=0;Rt<J;Rt++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(Mt,0,r.RGBA,1,1,at,0,r.RGBA,r.UNSIGNED_BYTE,$):r.texImage2D(Mt+Rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,$);return mt}let vt={};vt[r.TEXTURE_2D]=ct(r.TEXTURE_2D,r.TEXTURE_2D,1),vt[r.TEXTURE_CUBE_MAP]=ct(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[r.TEXTURE_2D_ARRAY]=ct(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),vt[r.TEXTURE_3D]=ct(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(r.DEPTH_TEST),a.setFunc(Br),D(!1),j(eh),lt(r.CULL_FACE),x(Ti);function lt(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function Ct(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function zt(O,Mt){return h[O]!==Mt?(r.bindFramebuffer(O,Mt),h[O]=Mt,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Mt),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Dt(O,Mt){let J=f,at=!1;if(O){J=d.get(Mt),J===void 0&&(J=[],d.set(Mt,J));let $=O.textures;if(J.length!==$.length||J[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,Rt=$.length;mt<Rt;mt++)J[mt]=r.COLOR_ATTACHMENT0+mt;J.length=$.length,at=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,at=!0);at&&r.drawBuffers(J)}function Wt(O){return g!==O?(r.useProgram(O),g=O,!0):!1}let rt={[Ji]:r.FUNC_ADD,[Wf]:r.FUNC_SUBTRACT,[Xf]:r.FUNC_REVERSE_SUBTRACT};rt[Yf]=r.MIN,rt[Kf]=r.MAX;let ut={[Jf]:r.ZERO,[Zf]:r.ONE,[jf]:r.SRC_COLOR,[Sl]:r.SRC_ALPHA,[ip]:r.SRC_ALPHA_SATURATE,[ep]:r.DST_COLOR,[Qf]:r.DST_ALPHA,[$f]:r.ONE_MINUS_SRC_COLOR,[Al]:r.ONE_MINUS_SRC_ALPHA,[np]:r.ONE_MINUS_DST_COLOR,[tp]:r.ONE_MINUS_DST_ALPHA,[rp]:r.CONSTANT_COLOR,[sp]:r.ONE_MINUS_CONSTANT_COLOR,[ap]:r.CONSTANT_ALPHA,[op]:r.ONE_MINUS_CONSTANT_ALPHA};function x(O,Mt,J,at,$,mt,Rt,te,Ae,Yt){if(O===Ti){_===!0&&(Ct(r.BLEND),_=!1);return}if(_===!1&&(lt(r.BLEND),_=!0),O!==qf){if(O!==m||Yt!==A){if((p!==Ji||y!==Ji)&&(r.blendEquation(r.FUNC_ADD),p=Ji,y=Ji),Yt)switch(O){case Ur:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bn:r.blendFunc(r.ONE,r.ONE);break;case nh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ih:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ur:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case nh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ih:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,S=null,L=null,C=null,w.set(0,0,0),N=0,m=O,A=Yt}return}$=$||Mt,mt=mt||J,Rt=Rt||at,(Mt!==p||$!==y)&&(r.blendEquationSeparate(rt[Mt],rt[$]),p=Mt,y=$),(J!==M||at!==S||mt!==L||Rt!==C)&&(r.blendFuncSeparate(ut[J],ut[at],ut[mt],ut[Rt]),M=J,S=at,L=mt,C=Rt),(te.equals(w)===!1||Ae!==N)&&(r.blendColor(te.r,te.g,te.b,Ae),w.copy(te),N=Ae),m=O,A=!1}function U(O,Mt){O.side===Fe?Ct(r.CULL_FACE):lt(r.CULL_FACE);let J=O.side===ze;Mt&&(J=!J),D(J),O.blending===Ur&&O.transparent===!1?x(Ti):x(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);let at=O.stencilWrite;o.setTest(at),at&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),_t(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?lt(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function D(O){b!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),b=O)}function j(O){O!==Hf?(lt(r.CULL_FACE),O!==I&&(O===eh?r.cullFace(r.BACK):O===Vf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),I=O}function Z(O){O!==B&&(W&&r.lineWidth(O),B=O)}function _t(O,Mt,J){O?(lt(r.POLYGON_OFFSET_FILL),(V!==Mt||G!==J)&&(r.polygonOffset(Mt,J),V=Mt,G=J)):Ct(r.POLYGON_OFFSET_FILL)}function pt(O){O?lt(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function T(O){O===void 0&&(O=r.TEXTURE0+et-1),gt!==O&&(r.activeTexture(O),gt=O)}function v(O,Mt,J){J===void 0&&(gt===null?J=r.TEXTURE0+et-1:J=gt);let at=yt[J];at===void 0&&(at={type:void 0,texture:void 0},yt[J]=at),(at.type!==O||at.texture!==Mt)&&(gt!==J&&(r.activeTexture(J),gt=J),r.bindTexture(O,Mt||vt[O]),at.type=O,at.texture=Mt)}function q(){let O=yt[gt];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function R(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function P(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Bt(O){Gt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Gt.copy(O))}function Tt(O){Q.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Q.copy(O))}function Jt(O,Mt){let J=c.get(Mt);J===void 0&&(J=new WeakMap,c.set(Mt,J));let at=J.get(O);at===void 0&&(at=r.getUniformBlockIndex(Mt,O.name),J.set(O,at))}function Ft(O,Mt){let at=c.get(Mt).get(O);l.get(Mt)!==at&&(r.uniformBlockBinding(Mt,at,O.__bindingPointIndex),l.set(Mt,at))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},gt=null,yt={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,y=null,L=null,C=null,w=new Nt(0,0,0),N=0,A=!1,b=null,I=null,B=null,V=null,G=null,Gt.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:lt,disable:Ct,bindFramebuffer:zt,drawBuffers:Dt,useProgram:Wt,setBlending:x,setMaterial:U,setFlipSided:D,setCullFace:j,setLineWidth:Z,setPolygonOffset:_t,setScissorTest:pt,activeTexture:T,bindTexture:v,unbindTexture:q,compressedTexImage2D:R,compressedTexImage3D:P,texImage2D:bt,texImage3D:Ut,updateUBOMapping:Jt,uniformBlockBinding:Ft,texStorage2D:St,texStorage3D:it,texSubImage2D:F,texSubImage3D:ht,compressedTexSubImage2D:ot,compressedTexSubImage3D:tt,scissor:Bt,viewport:Tt,reset:le}}function td(r,t,e,n){let i=Ly(n);switch(e){case Id:return r*t;case Ld:return r*t;case Nd:return r*t*2;case Kc:return r*t/i.components*i.byteLength;case Jc:return r*t/i.components*i.byteLength;case Dd:return r*t*2/i.components*i.byteLength;case Zc:return r*t*2/i.components*i.byteLength;case kd:return r*t*3/i.components*i.byteLength;case xn:return r*t*4/i.components*i.byteLength;case jc:return r*t*4/i.components*i.byteLength;case Ua:case Oa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fa:case za:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dl:case Ol:return Math.max(r,16)*Math.max(t,8)/4;case Nl:case Ul:return Math.max(r,8)*Math.max(t,8)/2;case Fl:case zl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Bl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ql:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case $l:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case tc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ba:case ec:case nc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ud:case ic:return Math.ceil(r/4)*Math.ceil(t/4)*8;case rc:case sc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ly(r){switch(r){case ii:case Rd:return{byteLength:1,components:1};case Ns:case Cd:case Ws:return{byteLength:2,components:1};case Xc:case Yc:return{byteLength:2,components:4};case ji:case Wc:case Ln:return{byteLength:4,components:1};case Pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Ny(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):Ds("canvas")}function _(T,v,q){let R=1,P=pt(T);if((P.width>q||P.height>q)&&(R=q/Math.max(P.width,P.height)),R<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let F=Math.floor(R*P.width),ht=Math.floor(R*P.height);h===void 0&&(h=g(F,ht));let ot=v?g(F,ht):h;return ot.width=F,ot.height=ht,ot.getContext("2d").drawImage(T,0,0,F,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+F+"x"+ht+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){r.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(T,v,q,R,P=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let F=v;if(v===r.RED&&(q===r.FLOAT&&(F=r.R32F),q===r.HALF_FLOAT&&(F=r.R16F),q===r.UNSIGNED_BYTE&&(F=r.R8)),v===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(F=r.R8UI),q===r.UNSIGNED_SHORT&&(F=r.R16UI),q===r.UNSIGNED_INT&&(F=r.R32UI),q===r.BYTE&&(F=r.R8I),q===r.SHORT&&(F=r.R16I),q===r.INT&&(F=r.R32I)),v===r.RG&&(q===r.FLOAT&&(F=r.RG32F),q===r.HALF_FLOAT&&(F=r.RG16F),q===r.UNSIGNED_BYTE&&(F=r.RG8)),v===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(F=r.RG8UI),q===r.UNSIGNED_SHORT&&(F=r.RG16UI),q===r.UNSIGNED_INT&&(F=r.RG32UI),q===r.BYTE&&(F=r.RG8I),q===r.SHORT&&(F=r.RG16I),q===r.INT&&(F=r.RG32I)),v===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(F=r.RGB8UI),q===r.UNSIGNED_SHORT&&(F=r.RGB16UI),q===r.UNSIGNED_INT&&(F=r.RGB32UI),q===r.BYTE&&(F=r.RGB8I),q===r.SHORT&&(F=r.RGB16I),q===r.INT&&(F=r.RGB32I)),v===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(F=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(F=r.RGBA16UI),q===r.UNSIGNED_INT&&(F=r.RGBA32UI),q===r.BYTE&&(F=r.RGBA8I),q===r.SHORT&&(F=r.RGBA16I),q===r.INT&&(F=r.RGBA32I)),v===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(F=r.RGB9_E5),v===r.RGBA){let ht=P?bo:ie.getTransfer(R);q===r.FLOAT&&(F=r.RGBA32F),q===r.HALF_FLOAT&&(F=r.RGBA16F),q===r.UNSIGNED_BYTE&&(F=ht===fe?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(F=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(F=r.RGB5_A1)}return(F===r.R16F||F===r.R32F||F===r.RG16F||F===r.RG32F||F===r.RGBA16F||F===r.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function y(T,v){let q;return T?v===null||v===ji||v===Gr?q=r.DEPTH24_STENCIL8:v===Ln?q=r.DEPTH32F_STENCIL8:v===Ns&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ji||v===Gr?q=r.DEPTH_COMPONENT24:v===Ln?q=r.DEPTH_COMPONENT32F:v===Ns&&(q=r.DEPTH_COMPONENT16),q}function L(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ye&&T.minFilter!==en?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function C(T){let v=T.target;v.removeEventListener("dispose",C),N(v),v.isVideoTexture&&u.delete(v)}function w(T){let v=T.target;v.removeEventListener("dispose",w),b(v)}function N(T){let v=n.get(T);if(v.__webglInit===void 0)return;let q=T.source,R=d.get(q);if(R){let P=R[v.__cacheKey];P.usedTimes--,P.usedTimes===0&&A(T),Object.keys(R).length===0&&d.delete(q)}n.remove(T)}function A(T){let v=n.get(T);r.deleteTexture(v.__webglTexture);let q=T.source,R=d.get(q);delete R[v.__cacheKey],a.memory.textures--}function b(T){let v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(v.__webglFramebuffer[R]))for(let P=0;P<v.__webglFramebuffer[R].length;P++)r.deleteFramebuffer(v.__webglFramebuffer[R][P]);else r.deleteFramebuffer(v.__webglFramebuffer[R]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[R])}else{if(Array.isArray(v.__webglFramebuffer))for(let R=0;R<v.__webglFramebuffer.length;R++)r.deleteFramebuffer(v.__webglFramebuffer[R]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let R=0;R<v.__webglColorRenderbuffer.length;R++)v.__webglColorRenderbuffer[R]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[R]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let q=T.textures;for(let R=0,P=q.length;R<P;R++){let F=n.get(q[R]);F.__webglTexture&&(r.deleteTexture(F.__webglTexture),a.memory.textures--),n.remove(q[R])}n.remove(T)}let I=0;function B(){I=0}function V(){let T=I;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),I+=1,T}function G(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function et(T,v){let q=n.get(T);if(T.isVideoTexture&&Z(T),T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){let R=T.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(q,T,v);return}}e.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+v)}function W(T,v){let q=n.get(T);if(T.version>0&&q.__version!==T.version){Q(q,T,v);return}e.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+v)}function nt(T,v){let q=n.get(T);if(T.version>0&&q.__version!==T.version){Q(q,T,v);return}e.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+v)}function X(T,v){let q=n.get(T);if(T.version>0&&q.__version!==T.version){ct(q,T,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+v)}let gt={[Nn]:r.REPEAT,[ti]:r.CLAMP_TO_EDGE,[Ls]:r.MIRRORED_REPEAT},yt={[Ye]:r.NEAREST,[qc]:r.NEAREST_MIPMAP_NEAREST,[Lr]:r.NEAREST_MIPMAP_LINEAR,[en]:r.LINEAR,[Ts]:r.LINEAR_MIPMAP_NEAREST,[yn]:r.LINEAR_MIPMAP_LINEAR},At={[Mp]:r.NEVER,[Rp]:r.ALWAYS,[Sp]:r.LESS,[zd]:r.LEQUAL,[Ap]:r.EQUAL,[wp]:r.GEQUAL,[Ep]:r.GREATER,[Tp]:r.NOTEQUAL};function Pt(T,v){if(v.type===Ln&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===en||v.magFilter===Ts||v.magFilter===Lr||v.magFilter===yn||v.minFilter===en||v.minFilter===Ts||v.minFilter===Lr||v.minFilter===yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,gt[v.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,gt[v.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,gt[v.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,yt[v.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,yt[v.minFilter]),v.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,At[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ye||v.minFilter!==Lr&&v.minFilter!==yn||v.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(T,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Gt(T,v){let q=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",C));let R=v.source,P=d.get(R);P===void 0&&(P={},d.set(R,P));let F=G(v);if(F!==T.__cacheKey){P[F]===void 0&&(P[F]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,q=!0),P[F].usedTimes++;let ht=P[T.__cacheKey];ht!==void 0&&(P[T.__cacheKey].usedTimes--,ht.usedTimes===0&&A(v)),T.__cacheKey=F,T.__webglTexture=P[F].texture}return q}function Q(T,v,q){let R=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(R=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(R=r.TEXTURE_3D);let P=Gt(T,v),F=v.source;e.bindTexture(R,T.__webglTexture,r.TEXTURE0+q);let ht=n.get(F);if(F.version!==ht.__version||P===!0){e.activeTexture(r.TEXTURE0+q);let ot=ie.getPrimaries(ie.workingColorSpace),tt=v.colorSpace===Si?null:ie.getPrimaries(v.colorSpace),St=v.colorSpace===Si||ot===tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let it=_(v.image,!1,i.maxTextureSize);it=_t(v,it);let bt=s.convert(v.format,v.colorSpace),Ut=s.convert(v.type),Bt=S(v.internalFormat,bt,Ut,v.colorSpace,v.isVideoTexture);Pt(R,v);let Tt,Jt=v.mipmaps,Ft=v.isVideoTexture!==!0,le=ht.__version===void 0||P===!0,O=F.dataReady,Mt=L(v,it);if(v.isDepthTexture)Bt=y(v.format===qr,v.type),le&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,Bt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Bt,it.width,it.height,0,bt,Ut,null));else if(v.isDataTexture)if(Jt.length>0){Ft&&le&&e.texStorage2D(r.TEXTURE_2D,Mt,Bt,Jt[0].width,Jt[0].height);for(let J=0,at=Jt.length;J<at;J++)Tt=Jt[J],Ft?O&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,Tt.width,Tt.height,bt,Ut,Tt.data):e.texImage2D(r.TEXTURE_2D,J,Bt,Tt.width,Tt.height,0,bt,Ut,Tt.data);v.generateMipmaps=!1}else Ft?(le&&e.texStorage2D(r.TEXTURE_2D,Mt,Bt,it.width,it.height),O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,bt,Ut,it.data)):e.texImage2D(r.TEXTURE_2D,0,Bt,it.width,it.height,0,bt,Ut,it.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ft&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Mt,Bt,Jt[0].width,Jt[0].height,it.depth);for(let J=0,at=Jt.length;J<at;J++)if(Tt=Jt[J],v.format!==xn)if(bt!==null)if(Ft){if(O)if(v.layerUpdates.size>0){let $=td(Tt.width,Tt.height,v.format,v.type);for(let mt of v.layerUpdates){let Rt=Tt.data.subarray(mt*$/Tt.data.BYTES_PER_ELEMENT,(mt+1)*$/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,mt,Tt.width,Tt.height,1,bt,Rt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Tt.width,Tt.height,it.depth,bt,Tt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Bt,Tt.width,Tt.height,it.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?O&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Tt.width,Tt.height,it.depth,bt,Ut,Tt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,J,Bt,Tt.width,Tt.height,it.depth,0,bt,Ut,Tt.data)}else{Ft&&le&&e.texStorage2D(r.TEXTURE_2D,Mt,Bt,Jt[0].width,Jt[0].height);for(let J=0,at=Jt.length;J<at;J++)Tt=Jt[J],v.format!==xn?bt!==null?Ft?O&&e.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,Tt.width,Tt.height,bt,Tt.data):e.compressedTexImage2D(r.TEXTURE_2D,J,Bt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?O&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,Tt.width,Tt.height,bt,Ut,Tt.data):e.texImage2D(r.TEXTURE_2D,J,Bt,Tt.width,Tt.height,0,bt,Ut,Tt.data)}else if(v.isDataArrayTexture)if(Ft){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Mt,Bt,it.width,it.height,it.depth),O)if(v.layerUpdates.size>0){let J=td(it.width,it.height,v.format,v.type);for(let at of v.layerUpdates){let $=it.data.subarray(at*J/it.data.BYTES_PER_ELEMENT,(at+1)*J/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,at,it.width,it.height,1,bt,Ut,$)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,bt,Ut,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Bt,it.width,it.height,it.depth,0,bt,Ut,it.data);else if(v.isData3DTexture)Ft?(le&&e.texStorage3D(r.TEXTURE_3D,Mt,Bt,it.width,it.height,it.depth),O&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,bt,Ut,it.data)):e.texImage3D(r.TEXTURE_3D,0,Bt,it.width,it.height,it.depth,0,bt,Ut,it.data);else if(v.isFramebufferTexture){if(le)if(Ft)e.texStorage2D(r.TEXTURE_2D,Mt,Bt,it.width,it.height);else{let J=it.width,at=it.height;for(let $=0;$<Mt;$++)e.texImage2D(r.TEXTURE_2D,$,Bt,J,at,0,bt,Ut,null),J>>=1,at>>=1}}else if(Jt.length>0){if(Ft&&le){let J=pt(Jt[0]);e.texStorage2D(r.TEXTURE_2D,Mt,Bt,J.width,J.height)}for(let J=0,at=Jt.length;J<at;J++)Tt=Jt[J],Ft?O&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,bt,Ut,Tt):e.texImage2D(r.TEXTURE_2D,J,Bt,bt,Ut,Tt);v.generateMipmaps=!1}else if(Ft){if(le){let J=pt(it);e.texStorage2D(r.TEXTURE_2D,Mt,Bt,J.width,J.height)}O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Ut,it)}else e.texImage2D(r.TEXTURE_2D,0,Bt,bt,Ut,it);m(v)&&p(R),ht.__version=F.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ct(T,v,q){if(v.image.length!==6)return;let R=Gt(T,v),P=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+q);let F=n.get(P);if(P.version!==F.__version||R===!0){e.activeTexture(r.TEXTURE0+q);let ht=ie.getPrimaries(ie.workingColorSpace),ot=v.colorSpace===Si?null:ie.getPrimaries(v.colorSpace),tt=v.colorSpace===Si||ht===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let St=v.isCompressedTexture||v.image[0].isCompressedTexture,it=v.image[0]&&v.image[0].isDataTexture,bt=[];for(let at=0;at<6;at++)!St&&!it?bt[at]=_(v.image[at],!0,i.maxCubemapSize):bt[at]=it?v.image[at].image:v.image[at],bt[at]=_t(v,bt[at]);let Ut=bt[0],Bt=s.convert(v.format,v.colorSpace),Tt=s.convert(v.type),Jt=S(v.internalFormat,Bt,Tt,v.colorSpace),Ft=v.isVideoTexture!==!0,le=F.__version===void 0||R===!0,O=P.dataReady,Mt=L(v,Ut);Pt(r.TEXTURE_CUBE_MAP,v);let J;if(St){Ft&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,Jt,Ut.width,Ut.height);for(let at=0;at<6;at++){J=bt[at].mipmaps;for(let $=0;$<J.length;$++){let mt=J[$];v.format!==xn?Bt!==null?Ft?O&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,$,0,0,mt.width,mt.height,Bt,mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,$,Jt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,$,0,0,mt.width,mt.height,Bt,Tt,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,$,Jt,mt.width,mt.height,0,Bt,Tt,mt.data)}}}else{if(J=v.mipmaps,Ft&&le){J.length>0&&Mt++;let at=pt(bt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,Jt,at.width,at.height)}for(let at=0;at<6;at++)if(it){Ft?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,bt[at].width,bt[at].height,Bt,Tt,bt[at].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Jt,bt[at].width,bt[at].height,0,Bt,Tt,bt[at].data);for(let $=0;$<J.length;$++){let Rt=J[$].image[at].image;Ft?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,$+1,0,0,Rt.width,Rt.height,Bt,Tt,Rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,$+1,Jt,Rt.width,Rt.height,0,Bt,Tt,Rt.data)}}else{Ft?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Bt,Tt,bt[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Jt,Bt,Tt,bt[at]);for(let $=0;$<J.length;$++){let mt=J[$];Ft?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,$+1,0,0,Bt,Tt,mt.image[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,$+1,Jt,Bt,Tt,mt.image[at])}}}m(v)&&p(r.TEXTURE_CUBE_MAP),F.__version=P.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function vt(T,v,q,R,P,F){let ht=s.convert(q.format,q.colorSpace),ot=s.convert(q.type),tt=S(q.internalFormat,ht,ot,q.colorSpace),St=n.get(v),it=n.get(q);if(it.__renderTarget=v,!St.__hasExternalTextures){let bt=Math.max(1,v.width>>F),Ut=Math.max(1,v.height>>F);P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?e.texImage3D(P,F,tt,bt,Ut,v.depth,0,ht,ot,null):e.texImage2D(P,F,tt,bt,Ut,0,ht,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,T),j(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,R,P,it.__webglTexture,0,D(v)):(P===r.TEXTURE_2D||P>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,R,P,it.__webglTexture,F),e.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(T,v,q){if(r.bindRenderbuffer(r.RENDERBUFFER,T),v.depthBuffer){let R=v.depthTexture,P=R&&R.isDepthTexture?R.type:null,F=y(v.stencilBuffer,P),ht=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=D(v);j(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,F,v.width,v.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,F,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,F,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,T)}else{let R=v.textures;for(let P=0;P<R.length;P++){let F=R[P],ht=s.convert(F.format,F.colorSpace),ot=s.convert(F.type),tt=S(F.internalFormat,ht,ot,F.colorSpace),St=D(v);q&&j(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,tt,v.width,v.height):j(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,tt,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,tt,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let R=n.get(v.depthTexture);R.__renderTarget=v,(!R.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),et(v.depthTexture,0);let P=R.__webglTexture,F=D(v);if(v.depthTexture.format===Or)j(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,P,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,P,0);else if(v.depthTexture.format===qr)j(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,P,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,P,0);else throw new Error("Unknown depthTexture format")}function zt(T){let v=n.get(T),q=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let R=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),R){let P=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,R.removeEventListener("dispose",P)};R.addEventListener("dispose",P),v.__depthDisposeCallback=P}v.__boundDepthTexture=R}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ct(v.__webglFramebuffer,T)}else if(q){v.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[R]),v.__webglDepthbuffer[R]===void 0)v.__webglDepthbuffer[R]=r.createRenderbuffer(),lt(v.__webglDepthbuffer[R],T,!1);else{let P=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=v.__webglDepthbuffer[R];r.bindRenderbuffer(r.RENDERBUFFER,F),r.framebufferRenderbuffer(r.FRAMEBUFFER,P,r.RENDERBUFFER,F)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),lt(v.__webglDepthbuffer,T,!1);else{let R=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,P=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,P),r.framebufferRenderbuffer(r.FRAMEBUFFER,R,r.RENDERBUFFER,P)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(T,v,q){let R=n.get(T);v!==void 0&&vt(R.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&zt(T)}function Wt(T){let v=T.texture,q=n.get(T),R=n.get(v);T.addEventListener("dispose",w);let P=T.textures,F=T.isWebGLCubeRenderTarget===!0,ht=P.length>1;if(ht||(R.__webglTexture===void 0&&(R.__webglTexture=r.createTexture()),R.__version=v.version,a.memory.textures++),F){q.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer[ot]=[];for(let tt=0;tt<v.mipmaps.length;tt++)q.__webglFramebuffer[ot][tt]=r.createFramebuffer()}else q.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)q.__webglFramebuffer[ot]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(ht)for(let ot=0,tt=P.length;ot<tt;ot++){let St=n.get(P[ot]);St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture(),a.memory.textures++)}if(T.samples>0&&j(T)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ot=0;ot<P.length;ot++){let tt=P[ot];q.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[ot]);let St=s.convert(tt.format,tt.colorSpace),it=s.convert(tt.type),bt=S(tt.internalFormat,St,it,tt.colorSpace,T.isXRRenderTarget===!0),Ut=D(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,bt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,q.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),lt(q.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(F){e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture),Pt(r.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0)for(let tt=0;tt<v.mipmaps.length;tt++)vt(q.__webglFramebuffer[ot][tt],T,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,tt);else vt(q.__webglFramebuffer[ot],T,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(v)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let ot=0,tt=P.length;ot<tt;ot++){let St=P[ot],it=n.get(St);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),Pt(r.TEXTURE_2D,St),vt(q.__webglFramebuffer,T,St,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,0),m(St)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,R.__webglTexture),Pt(ot,v),v.mipmaps&&v.mipmaps.length>0)for(let tt=0;tt<v.mipmaps.length;tt++)vt(q.__webglFramebuffer[tt],T,v,r.COLOR_ATTACHMENT0,ot,tt);else vt(q.__webglFramebuffer,T,v,r.COLOR_ATTACHMENT0,ot,0);m(v)&&p(ot),e.unbindTexture()}T.depthBuffer&&zt(T)}function rt(T){let v=T.textures;for(let q=0,R=v.length;q<R;q++){let P=v[q];if(m(P)){let F=M(T),ht=n.get(P).__webglTexture;e.bindTexture(F,ht),p(F),e.unbindTexture()}}}let ut=[],x=[];function U(T){if(T.samples>0){if(j(T)===!1){let v=T.textures,q=T.width,R=T.height,P=r.COLOR_BUFFER_BIT,F=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(T),ot=v.length>1;if(ot)for(let tt=0;tt<v.length;tt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let tt=0;tt<v.length;tt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(P|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(P|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[tt]);let St=n.get(v[tt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,q,R,0,0,q,R,P,r.NEAREST),l===!0&&(ut.length=0,x.length=0,ut.push(r.COLOR_ATTACHMENT0+tt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ut.push(F),x.push(F),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,x)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let tt=0;tt<v.length;tt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[tt]);let St=n.get(v[tt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,St,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let v=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function D(T){return Math.min(i.maxSamples,T.samples)}function j(T){let v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Z(T){let v=a.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function _t(T,v){let q=T.colorSpace,R=T.format,P=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||q!==Je&&q!==Si&&(ie.getTransfer(q)===fe?(R!==xn||P!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),v}function pt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=et,this.setTexture2DArray=W,this.setTexture3D=nt,this.setTextureCube=X,this.rebindTextures=Dt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=j}function Dy(r,t){function e(n,i=Si){let s,a=ie.getTransfer(i);if(n===ii)return r.UNSIGNED_BYTE;if(n===Xc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Yc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Pd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Rd)return r.BYTE;if(n===Cd)return r.SHORT;if(n===Ns)return r.UNSIGNED_SHORT;if(n===Wc)return r.INT;if(n===ji)return r.UNSIGNED_INT;if(n===Ln)return r.FLOAT;if(n===Ws)return r.HALF_FLOAT;if(n===Id)return r.ALPHA;if(n===kd)return r.RGB;if(n===xn)return r.RGBA;if(n===Ld)return r.LUMINANCE;if(n===Nd)return r.LUMINANCE_ALPHA;if(n===Or)return r.DEPTH_COMPONENT;if(n===qr)return r.DEPTH_STENCIL;if(n===Kc)return r.RED;if(n===Jc)return r.RED_INTEGER;if(n===Dd)return r.RG;if(n===Zc)return r.RG_INTEGER;if(n===jc)return r.RGBA_INTEGER;if(n===Ua||n===Oa||n===Fa||n===za)if(a===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nl||n===Dl||n===Ul||n===Ol)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Nl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fl||n===zl||n===Bl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fl||n===zl)return a===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Bl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hl||n===Vl||n===Gl||n===ql||n===Wl||n===Xl||n===Yl||n===Kl||n===Jl||n===Zl||n===jl||n===$l||n===Ql||n===tc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Hl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ql)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$l)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ql)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===ec||n===nc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ba)return a===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ud||n===ic||n===rc||n===sc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var vc=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},re=class extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Uy={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Be,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Re({vertexShader:Oy,fragmentShader:Fy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new $i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends Ri{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,_=new bc,m=e.getContextAttributes(),p=null,M=null,S=[],y=[],L=new ft,C=null,w=new we;w.viewport=new ee;let N=new we;N.viewport=new ee;let A=[w,N],b=new vc,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ct=S[Q];return ct===void 0&&(ct=new Cs,S[Q]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Q){let ct=S[Q];return ct===void 0&&(ct=new Cs,S[Q]=ct),ct.getGripSpace()},this.getHand=function(Q){let ct=S[Q];return ct===void 0&&(ct=new Cs,S[Q]=ct),ct.getHandSpace()};function V(Q){let ct=y.indexOf(Q.inputSource);if(ct===-1)return;let vt=S[ct];vt!==void 0&&(vt.update(Q.inputSource,Q.frame,c||a),vt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",et);for(let Q=0;Q<S.length;Q++){let ct=y[Q];ct!==null&&(y[Q]=null,S[Q].disconnect(ct))}I=null,B=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,i=null,M=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",G),i.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){let ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,ct),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ri(f.framebufferWidth,f.framebufferHeight,{format:xn,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,vt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?qr:Or,vt=m.stencil?Gr:ji);let Ct={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(Ct),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ri(d.textureWidth,d.textureHeight,{format:xn,type:ii,depthTexture:new Za(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function et(Q){for(let ct=0;ct<Q.removed.length;ct++){let vt=Q.removed[ct],lt=y.indexOf(vt);lt>=0&&(y[lt]=null,S[lt].disconnect(vt))}for(let ct=0;ct<Q.added.length;ct++){let vt=Q.added[ct],lt=y.indexOf(vt);if(lt===-1){for(let zt=0;zt<S.length;zt++)if(zt>=y.length){y.push(vt),lt=zt;break}else if(y[zt]===null){y[zt]=vt,lt=zt;break}if(lt===-1)break}let Ct=S[lt];Ct&&Ct.connect(vt)}}let W=new k,nt=new k;function X(Q,ct,vt){W.setFromMatrixPosition(ct.matrixWorld),nt.setFromMatrixPosition(vt.matrixWorld);let lt=W.distanceTo(nt),Ct=ct.projectionMatrix.elements,zt=vt.projectionMatrix.elements,Dt=Ct[14]/(Ct[10]-1),Wt=Ct[14]/(Ct[10]+1),rt=(Ct[9]+1)/Ct[5],ut=(Ct[9]-1)/Ct[5],x=(Ct[8]-1)/Ct[0],U=(zt[8]+1)/zt[0],D=Dt*x,j=Dt*U,Z=lt/(-x+U),_t=Z*-x;if(ct.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_t),Q.translateZ(Z),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ct[10]===-1)Q.projectionMatrix.copy(ct.projectionMatrix),Q.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let pt=Dt+Z,T=Wt+Z,v=D-_t,q=j+(lt-_t),R=rt*Wt/T*pt,P=ut*Wt/T*pt;Q.projectionMatrix.makePerspective(v,q,R,P,pt,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function gt(Q,ct){ct===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ct.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let ct=Q.near,vt=Q.far;_.texture!==null&&(_.depthNear>0&&(ct=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),b.near=N.near=w.near=ct,b.far=N.far=w.far=vt,(I!==b.near||B!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,B=b.far),w.layers.mask=Q.layers.mask|2,N.layers.mask=Q.layers.mask|4,b.layers.mask=w.layers.mask|N.layers.mask;let lt=Q.parent,Ct=b.cameras;gt(b,lt);for(let zt=0;zt<Ct.length;zt++)gt(Ct[zt],lt);Ct.length===2?X(b,w,N):b.projectionMatrix.copy(w.projectionMatrix),yt(Q,b,lt)};function yt(Q,ct,vt){vt===null?Q.matrix.copy(ct.matrixWorld):(Q.matrix.copy(vt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ct.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ct.projectionMatrix),Q.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Yr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let At=null;function Pt(Q,ct){if(u=ct.getViewerPose(c||a),g=ct,u!==null){let vt=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let lt=!1;vt.length!==b.cameras.length&&(b.cameras.length=0,lt=!0);for(let zt=0;zt<vt.length;zt++){let Dt=vt[zt],Wt=null;if(f!==null)Wt=f.getViewport(Dt);else{let ut=h.getViewSubImage(d,Dt);Wt=ut.viewport,zt===0&&(t.setRenderTargetTextures(M,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(M))}let rt=A[zt];rt===void 0&&(rt=new we,rt.layers.enable(zt),rt.viewport=new ee,A[zt]=rt),rt.matrix.fromArray(Dt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Dt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),zt===0&&(b.matrix.copy(rt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),lt===!0&&b.cameras.push(rt)}let Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let zt=h.getDepthInformation(vt[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,i.renderState)}}for(let vt=0;vt<S.length;vt++){let lt=y[vt],Ct=S[vt];lt!==null&&Ct!==void 0&&Ct.update(lt,ct,c||a)}At&&At(Q,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}let Gt=new Gd;Gt.setAnimationLoop(Pt),this.setAnimationLoop=function(Q){At=Q},this.dispose=function(){}}},Yi=new Mn,zy=new Ht;function By(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vd(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),S=M.envMap,y=M.envMapRotation;S&&(m.envMap.value=S,Yi.copy(y),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(zy.makeRotationFromEuler(Yi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hy(r,t,e,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let y=S.program;n.uniformBlockBinding(M,y)}function c(M,S){let y=i[M.id];y===void 0&&(g(M),y=u(M),i[M.id]=y,M.addEventListener("dispose",m));let L=S.program;n.updateUBOMapping(M,L);let C=t.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function u(M){let S=h();M.__bindingPointIndex=S;let y=r.createBuffer(),L=M.__size,C=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,L,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,y),y}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let S=i[M.id],y=M.uniforms,L=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let C=0,w=y.length;C<w;C++){let N=Array.isArray(y[C])?y[C]:[y[C]];for(let A=0,b=N.length;A<b;A++){let I=N[A];if(f(I,C,A,L)===!0){let B=I.__offset,V=Array.isArray(I.value)?I.value:[I.value],G=0;for(let et=0;et<V.length;et++){let W=V[et],nt=_(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,B+G,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,G),G+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,S,y,L){let C=M.value,w=S+"_"+y;if(L[w]===void 0)return typeof C=="number"||typeof C=="boolean"?L[w]=C:L[w]=C.clone(),!0;{let N=L[w];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return L[w]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(M){let S=M.uniforms,y=0,L=16;for(let w=0,N=S.length;w<N;w++){let A=Array.isArray(S[w])?S[w]:[S[w]];for(let b=0,I=A.length;b<I;b++){let B=A[b],V=Array.isArray(B.value)?B.value:[B.value];for(let G=0,et=V.length;G<et;G++){let W=V[G],nt=_(W),X=y%L,gt=X%nt.boundary,yt=X+gt;y+=gt,yt!==0&&L-yt<nt.storage&&(y+=L-yt),B.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=nt.storage}}}let C=y%L;return C>0&&(y+=L-C),M.__size=y,M.__cache={},this}function _(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){let S=M.target;S.removeEventListener("dispose",m);let y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(let M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}var ja=class{constructor(t={}){let{canvas:e=Wp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this.toneMapping=wi,this.toneMappingExposure=1;let y=this,L=!1,C=0,w=0,N=null,A=-1,b=null,I=new ee,B=new ee,V=null,G=new Nt(0),et=0,W=e.width,nt=e.height,X=1,gt=null,yt=null,At=new ee(0,0,W,nt),Pt=new ee(0,0,W,nt),Gt=!1,Q=new Us,ct=!1,vt=!1,lt=new Ht,Ct=new Ht,zt=new k,Dt=new ee,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function ut(){return N===null?X:1}let x=n;function U(E,z){return e.getContext(E,z)}try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",mt,!1),x===null){let z="webgl2";if(x=U(z,E),x===null)throw U(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let D,j,Z,_t,pt,T,v,q,R,P,F,ht,ot,tt,St,it,bt,Ut,Bt,Tt,Jt,Ft,le,O;function Mt(){D=new i_(x),D.init(),Ft=new Dy(x,D),j=new jg(x,D,t,Ft),Z=new ky(x,D),j.reverseDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),_t=new a_(x),pt=new xy,T=new Ny(x,D,Z,pt,j,Ft,_t),v=new Qg(y),q=new n_(y),R=new fm(x),le=new Jg(x,R),P=new r_(x,R,_t,le),F=new l_(x,P,R,_t),Bt=new o_(x,j,T),it=new $g(pt),ht=new yy(y,v,q,D,j,le,it),ot=new By(y,pt),tt=new by,St=new wy(D),Ut=new Kg(y,v,q,Z,F,f,l),bt=new Py(y,F,j),O=new Hy(x,_t,j,Z),Tt=new Zg(x,D,_t),Jt=new s_(x,D,_t),_t.programs=ht.programs,y.capabilities=j,y.extensions=D,y.properties=pt,y.renderLists=tt,y.shadowMap=bt,y.state=Z,y.info=_t}Mt();let J=new Mc(y,x);this.xr=J,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){let E=D.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=D.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(W,nt,!1))},this.getSize=function(E){return E.set(W,nt)},this.setSize=function(E,z,Y=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,nt=z,e.width=Math.floor(E*X),e.height=Math.floor(z*X),Y===!0&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(W*X,nt*X).floor()},this.setDrawingBufferSize=function(E,z,Y){W=E,nt=z,X=Y,e.width=Math.floor(E*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(At)},this.setViewport=function(E,z,Y,K){E.isVector4?At.set(E.x,E.y,E.z,E.w):At.set(E,z,Y,K),Z.viewport(I.copy(At).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(Pt)},this.setScissor=function(E,z,Y,K){E.isVector4?Pt.set(E.x,E.y,E.z,E.w):Pt.set(E,z,Y,K),Z.scissor(B.copy(Pt).multiplyScalar(X).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(E){Z.setScissorTest(Gt=E)},this.setOpaqueSort=function(E){gt=E},this.setTransparentSort=function(E){yt=E},this.getClearColor=function(E){return E.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(E=!0,z=!0,Y=!0){let K=0;if(E){let H=!1;if(N!==null){let xt=N.texture.format;H=xt===jc||xt===Zc||xt===Jc}if(H){let xt=N.texture.type,wt=xt===ii||xt===ji||xt===Ns||xt===Gr||xt===Xc||xt===Yc,It=Ut.getClearColor(),kt=Ut.getClearAlpha(),Xt=It.r,Zt=It.g,Lt=It.b;wt?(g[0]=Xt,g[1]=Zt,g[2]=Lt,g[3]=kt,x.clearBufferuiv(x.COLOR,0,g)):(_[0]=Xt,_[1]=Zt,_[2]=Lt,_[3]=kt,x.clearBufferiv(x.COLOR,0,_))}else K|=x.COLOR_BUFFER_BIT}z&&(K|=x.DEPTH_BUFFER_BIT),Y&&(K|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),tt.dispose(),St.dispose(),pt.dispose(),v.dispose(),q.dispose(),F.dispose(),le.dispose(),O.dispose(),ht.dispose(),J.dispose(),J.removeEventListener("sessionstart",Yu),J.removeEventListener("sessionend",Ku),Hi.stop()};function at(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let E=_t.autoReset,z=bt.enabled,Y=bt.autoUpdate,K=bt.needsUpdate,H=bt.type;Mt(),_t.autoReset=E,bt.enabled=z,bt.autoUpdate=Y,bt.needsUpdate=K,bt.type=H}function mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Rt(E){let z=E.target;z.removeEventListener("dispose",Rt),te(z)}function te(E){Ae(E),pt.remove(E)}function Ae(E){let z=pt.get(E).programs;z!==void 0&&(z.forEach(function(Y){ht.releaseProgram(Y)}),E.isShaderMaterial&&ht.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Y,K,H,xt){z===null&&(z=Wt);let wt=H.isMesh&&H.matrixWorld.determinant()<0,It=Ff(E,z,Y,K,H);Z.setMaterial(K,wt);let kt=Y.index,Xt=1;if(K.wireframe===!0){if(kt=P.getWireframeAttribute(Y),kt===void 0)return;Xt=2}let Zt=Y.drawRange,Lt=Y.attributes.position,ae=Zt.start*Xt,ge=(Zt.start+Zt.count)*Xt;xt!==null&&(ae=Math.max(ae,xt.start*Xt),ge=Math.min(ge,(xt.start+xt.count)*Xt)),kt!==null?(ae=Math.max(ae,0),ge=Math.min(ge,kt.count)):Lt!=null&&(ae=Math.max(ae,0),ge=Math.min(ge,Lt.count));let xe=ge-ae;if(xe<0||xe===1/0)return;le.setup(H,K,It,Y,kt);let tn,ce=Tt;if(kt!==null&&(tn=R.get(kt),ce=Jt,ce.setIndex(tn)),H.isMesh)K.wireframe===!0?(Z.setLineWidth(K.wireframeLinewidth*ut()),ce.setMode(x.LINES)):ce.setMode(x.TRIANGLES);else if(H.isLine){let Ot=K.linewidth;Ot===void 0&&(Ot=1),Z.setLineWidth(Ot*ut()),H.isLineSegments?ce.setMode(x.LINES):H.isLineLoop?ce.setMode(x.LINE_LOOP):ce.setMode(x.LINE_STRIP)}else H.isPoints?ce.setMode(x.POINTS):H.isSprite&&ce.setMode(x.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ce.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(D.get("WEBGL_multi_draw"))ce.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ot=H._multiDrawStarts,Wn=H._multiDrawCounts,ue=H._multiDrawCount,Rn=kt?R.get(kt).bytesPerElement:1,fr=pt.get(K).currentProgram.getUniforms();for(let ln=0;ln<ue;ln++)fr.setValue(x,"_gl_DrawID",ln),ce.render(Ot[ln]/Rn,Wn[ln])}else if(H.isInstancedMesh)ce.renderInstances(ae,xe,H.count);else if(Y.isInstancedBufferGeometry){let Ot=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Wn=Math.min(Y.instanceCount,Ot);ce.renderInstances(ae,xe,Wn)}else ce.render(ae,xe)};function Yt(E,z,Y){E.transparent===!0&&E.side===Fe&&E.forceSinglePass===!1?(E.side=ze,E.needsUpdate=!0,na(E,z,Y),E.side=Fn,E.needsUpdate=!0,na(E,z,Y),E.side=Fe):na(E,z,Y)}this.compile=function(E,z,Y=null){Y===null&&(Y=E),p=St.get(Y),p.init(z),S.push(p),Y.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==Y&&E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let K=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let xt=H.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){let It=xt[wt];Yt(It,Y,H),K.add(It)}else Yt(xt,Y,H),K.add(xt)}),S.pop(),p=null,K},this.compileAsync=function(E,z,Y=null){let K=this.compile(E,z,Y);return new Promise(H=>{function xt(){if(K.forEach(function(wt){pt.get(wt).currentProgram.isReady()&&K.delete(wt)}),K.size===0){H(E);return}setTimeout(xt,10)}D.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Qe=null;function wn(E){Qe&&Qe(E)}function Yu(){Hi.stop()}function Ku(){Hi.start()}let Hi=new Gd;Hi.setAnimationLoop(wn),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(E){Qe=E,J.setAnimationLoop(E),E===null?Hi.stop():Hi.start()},J.addEventListener("sessionstart",Yu),J.addEventListener("sessionend",Ku),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(z),z=J.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,z,N),p=St.get(E,S.length),p.init(z),S.push(p),Ct.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(Ct),vt=this.localClippingEnabled,ct=it.init(this.clippingPlanes,vt),m=tt.get(E,M.length),m.init(),M.push(m),J.enabled===!0&&J.isPresenting===!0){let xt=y.xr.getDepthSensingMesh();xt!==null&&Bo(xt,z,-1/0,y.sortObjects)}Bo(E,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(gt,yt),rt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,rt&&Ut.addToRenderList(m,E),this.info.render.frame++,ct===!0&&it.beginShadows();let Y=p.state.shadowsArray;bt.render(Y,E,z),ct===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){let xt=z.cameras;if(H.length>0)for(let wt=0,It=xt.length;wt<It;wt++){let kt=xt[wt];Zu(K,H,E,kt)}rt&&Ut.render(E);for(let wt=0,It=xt.length;wt<It;wt++){let kt=xt[wt];Ju(m,E,kt,kt.viewport)}}else H.length>0&&Zu(K,H,E,z),rt&&Ut.render(E),Ju(m,E,z);N!==null&&(T.updateMultisampleRenderTarget(N),T.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(y,E,z),le.resetDefaultState(),A=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],ct===!0&&it.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Bo(E,z,Y,K){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){K&&Dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ct);let wt=F.update(E),It=E.material;It.visible&&m.push(E,wt,It,Y,Dt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Q.intersectsObject(E))){let wt=F.update(E),It=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Dt.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Dt.copy(wt.boundingSphere.center)),Dt.applyMatrix4(E.matrixWorld).applyMatrix4(Ct)),Array.isArray(It)){let kt=wt.groups;for(let Xt=0,Zt=kt.length;Xt<Zt;Xt++){let Lt=kt[Xt],ae=It[Lt.materialIndex];ae&&ae.visible&&m.push(E,wt,ae,Y,Dt.z,Lt)}}else It.visible&&m.push(E,wt,It,Y,Dt.z,null)}}let xt=E.children;for(let wt=0,It=xt.length;wt<It;wt++)Bo(xt[wt],z,Y,K)}function Ju(E,z,Y,K){let H=E.opaque,xt=E.transmissive,wt=E.transparent;p.setupLightsView(Y),ct===!0&&it.setGlobalState(y.clippingPlanes,Y),K&&Z.viewport(I.copy(K)),H.length>0&&ea(H,z,Y),xt.length>0&&ea(xt,z,Y),wt.length>0&&ea(wt,z,Y),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Zu(E,z,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new ri(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")||D.has("EXT_color_buffer_float")?Ws:ii,minFilter:yn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let xt=p.state.transmissionRenderTarget[K.id],wt=K.viewport||I;xt.setSize(wt.z,wt.w);let It=y.getRenderTarget();y.setRenderTarget(xt),y.getClearColor(G),et=y.getClearAlpha(),et<1&&y.setClearColor(16777215,.5),y.clear(),rt&&Ut.render(Y);let kt=y.toneMapping;y.toneMapping=wi;let Xt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),ct===!0&&it.setGlobalState(y.clippingPlanes,K),ea(E,Y,K),T.updateMultisampleRenderTarget(xt),T.updateRenderTargetMipmap(xt),D.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Lt=0,ae=z.length;Lt<ae;Lt++){let ge=z[Lt],xe=ge.object,tn=ge.geometry,ce=ge.material,Ot=ge.group;if(ce.side===Fe&&xe.layers.test(K.layers)){let Wn=ce.side;ce.side=ze,ce.needsUpdate=!0,ju(xe,Y,K,tn,ce,Ot),ce.side=Wn,ce.needsUpdate=!0,Zt=!0}}Zt===!0&&(T.updateMultisampleRenderTarget(xt),T.updateRenderTargetMipmap(xt))}y.setRenderTarget(It),y.setClearColor(G,et),Xt!==void 0&&(K.viewport=Xt),y.toneMapping=kt}function ea(E,z,Y){let K=z.isScene===!0?z.overrideMaterial:null;for(let H=0,xt=E.length;H<xt;H++){let wt=E[H],It=wt.object,kt=wt.geometry,Xt=K===null?wt.material:K,Zt=wt.group;It.layers.test(Y.layers)&&ju(It,z,Y,kt,Xt,Zt)}}function ju(E,z,Y,K,H,xt){E.onBeforeRender(y,z,Y,K,H,xt),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(y,z,Y,K,E,xt),H.transparent===!0&&H.side===Fe&&H.forceSinglePass===!1?(H.side=ze,H.needsUpdate=!0,y.renderBufferDirect(Y,z,K,H,E,xt),H.side=Fn,H.needsUpdate=!0,y.renderBufferDirect(Y,z,K,H,E,xt),H.side=Fe):y.renderBufferDirect(Y,z,K,H,E,xt),E.onAfterRender(y,z,Y,K,H,xt)}function na(E,z,Y){z.isScene!==!0&&(z=Wt);let K=pt.get(E),H=p.state.lights,xt=p.state.shadowsArray,wt=H.state.version,It=ht.getParameters(E,H.state,xt,z,Y),kt=ht.getProgramCacheKey(It),Xt=K.programs;K.environment=E.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(E.isMeshStandardMaterial?q:v).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Xt===void 0&&(E.addEventListener("dispose",Rt),Xt=new Map,K.programs=Xt);let Zt=Xt.get(kt);if(Zt!==void 0){if(K.currentProgram===Zt&&K.lightsStateVersion===wt)return Qu(E,It),Zt}else It.uniforms=ht.getUniforms(E),E.onBeforeCompile(It,y),Zt=ht.acquireProgram(It,kt),Xt.set(kt,Zt),K.uniforms=It.uniforms;let Lt=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Lt.clippingPlanes=it.uniform),Qu(E,It),K.needsLights=Bf(E),K.lightsStateVersion=wt,K.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.directionalShadowMap.value=H.state.directionalShadowMap,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotShadowMap.value=H.state.spotShadowMap,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMap.value=H.state.pointShadowMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=Zt,K.uniformsList=null,Zt}function $u(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=zr.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Qu(E,z){let Y=pt.get(E);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function Ff(E,z,Y,K,H){z.isScene!==!0&&(z=Wt),T.resetTextureUnits();let xt=z.fog,wt=K.isMeshStandardMaterial?z.environment:null,It=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Je,kt=(K.isMeshStandardMaterial?q:v).get(K.envMap||wt),Xt=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Zt=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Lt=!!Y.morphAttributes.position,ae=!!Y.morphAttributes.normal,ge=!!Y.morphAttributes.color,xe=wi;K.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(xe=y.toneMapping);let tn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ce=tn!==void 0?tn.length:0,Ot=pt.get(K),Wn=p.state.lights;if(ct===!0&&(vt===!0||E!==b)){let gn=E===b&&K.id===A;it.setState(K,E,gn)}let ue=!1;K.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Wn.state.version||Ot.outputColorSpace!==It||H.isBatchedMesh&&Ot.batching===!1||!H.isBatchedMesh&&Ot.batching===!0||H.isBatchedMesh&&Ot.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ot.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ot.instancing===!1||!H.isInstancedMesh&&Ot.instancing===!0||H.isSkinnedMesh&&Ot.skinning===!1||!H.isSkinnedMesh&&Ot.skinning===!0||H.isInstancedMesh&&Ot.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ot.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ot.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ot.instancingMorph===!1&&H.morphTexture!==null||Ot.envMap!==kt||K.fog===!0&&Ot.fog!==xt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==it.numPlanes||Ot.numIntersection!==it.numIntersection)||Ot.vertexAlphas!==Xt||Ot.vertexTangents!==Zt||Ot.morphTargets!==Lt||Ot.morphNormals!==ae||Ot.morphColors!==ge||Ot.toneMapping!==xe||Ot.morphTargetsCount!==ce)&&(ue=!0):(ue=!0,Ot.__version=K.version);let Rn=Ot.currentProgram;ue===!0&&(Rn=na(K,z,H));let fr=!1,ln=!1,hs=!1,ve=Rn.getUniforms(),Un=Ot.uniforms;if(Z.useProgram(Rn.program)&&(fr=!0,ln=!0,hs=!0),K.id!==A&&(A=K.id,ln=!0),fr||b!==E){Z.buffers.depth.getReversed()?(lt.copy(E.projectionMatrix),Yp(lt),Kp(lt),ve.setValue(x,"projectionMatrix",lt)):ve.setValue(x,"projectionMatrix",E.projectionMatrix),ve.setValue(x,"viewMatrix",E.matrixWorldInverse);let mi=ve.map.cameraPosition;mi!==void 0&&mi.setValue(x,zt.setFromMatrixPosition(E.matrixWorld)),j.logarithmicDepthBuffer&&ve.setValue(x,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ve.setValue(x,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,ln=!0,hs=!0)}if(H.isSkinnedMesh){ve.setOptional(x,H,"bindMatrix"),ve.setOptional(x,H,"bindMatrixInverse");let gn=H.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),ve.setValue(x,"boneTexture",gn.boneTexture,T))}H.isBatchedMesh&&(ve.setOptional(x,H,"batchingTexture"),ve.setValue(x,"batchingTexture",H._matricesTexture,T),ve.setOptional(x,H,"batchingIdTexture"),ve.setValue(x,"batchingIdTexture",H._indirectTexture,T),ve.setOptional(x,H,"batchingColorTexture"),H._colorsTexture!==null&&ve.setValue(x,"batchingColorTexture",H._colorsTexture,T));let ds=Y.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&Bt.update(H,Y,Rn),(ln||Ot.receiveShadow!==H.receiveShadow)&&(Ot.receiveShadow=H.receiveShadow,ve.setValue(x,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Un.envMap.value=kt,Un.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(Un.envMapIntensity.value=z.environmentIntensity),ln&&(ve.setValue(x,"toneMappingExposure",y.toneMappingExposure),Ot.needsLights&&zf(Un,hs),xt&&K.fog===!0&&ot.refreshFogUniforms(Un,xt),ot.refreshMaterialUniforms(Un,K,X,nt,p.state.transmissionRenderTarget[E.id]),zr.upload(x,$u(Ot),Un,T)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(zr.upload(x,$u(Ot),Un,T),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ve.setValue(x,"center",H.center),ve.setValue(x,"modelViewMatrix",H.modelViewMatrix),ve.setValue(x,"normalMatrix",H.normalMatrix),ve.setValue(x,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let gn=K.uniformsGroups;for(let mi=0,gi=gn.length;mi<gi;mi++){let th=gn[mi];O.update(th,Rn),O.bind(th,Rn)}}return Rn}function zf(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Bf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,z,Y){pt.get(E.texture).__webglTexture=z,pt.get(E.depthTexture).__webglTexture=Y;let K=pt.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){let Y=pt.get(E);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,Y=0){N=E,C=z,w=Y;let K=!0,H=null,xt=!1,wt=!1;if(E){let kt=pt.get(E);if(kt.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(x.FRAMEBUFFER,null),K=!1;else if(kt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(kt.__hasExternalTextures)T.rebindTextures(E,pt.get(E.texture).__webglTexture,pt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Lt=E.depthTexture;if(kt.__boundDepthTexture!==Lt){if(Lt!==null&&pt.has(Lt)&&(E.width!==Lt.image.width||E.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}let Xt=E.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(wt=!0);let Zt=pt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Zt[z])?H=Zt[z][Y]:H=Zt[z],xt=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?H=pt.get(E).__webglMultisampledFramebuffer:Array.isArray(Zt)?H=Zt[Y]:H=Zt,I.copy(E.viewport),B.copy(E.scissor),V=E.scissorTest}else I.copy(At).multiplyScalar(X).floor(),B.copy(Pt).multiplyScalar(X).floor(),V=Gt;if(Z.bindFramebuffer(x.FRAMEBUFFER,H)&&K&&Z.drawBuffers(E,H),Z.viewport(I),Z.scissor(B),Z.setScissorTest(V),xt){let kt=pt.get(E.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+z,kt.__webglTexture,Y)}else if(wt){let kt=pt.get(E.texture),Xt=z||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,kt.__webglTexture,Y||0,Xt)}A=-1},this.readRenderTargetPixels=function(E,z,Y,K,H,xt,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){Z.bindFramebuffer(x.FRAMEBUFFER,It);try{let kt=E.texture,Xt=kt.format,Zt=kt.type;if(!j.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-K&&Y>=0&&Y<=E.height-H&&x.readPixels(z,Y,K,H,Ft.convert(Xt),Ft.convert(Zt),xt)}finally{let kt=N!==null?pt.get(N).__webglFramebuffer:null;Z.bindFramebuffer(x.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(E,z,Y,K,H,xt,wt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){let kt=E.texture,Xt=kt.format,Zt=kt.type;if(!j.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-K&&Y>=0&&Y<=E.height-H){Z.bindFramebuffer(x.FRAMEBUFFER,It);let Lt=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Lt),x.bufferData(x.PIXEL_PACK_BUFFER,xt.byteLength,x.STREAM_READ),x.readPixels(z,Y,K,H,Ft.convert(Xt),Ft.convert(Zt),0);let ae=N!==null?pt.get(N).__webglFramebuffer:null;Z.bindFramebuffer(x.FRAMEBUFFER,ae);let ge=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Xp(x,ge,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Lt),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,xt),x.deleteBuffer(Lt),x.deleteSync(ge),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,Y=0){E.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);let K=Math.pow(2,-Y),H=Math.floor(E.image.width*K),xt=Math.floor(E.image.height*K),wt=z!==null?z.x:0,It=z!==null?z.y:0;T.setTexture2D(E,0),x.copyTexSubImage2D(x.TEXTURE_2D,Y,0,0,wt,It,H,xt),Z.unbindTexture()},this.copyTextureToTexture=function(E,z,Y=null,K=null,H=0){E.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],z=arguments[2],H=arguments[3]||0,Y=null);let xt,wt,It,kt,Xt,Zt,Lt,ae,ge,xe=E.isCompressedTexture?E.mipmaps[H]:E.image;Y!==null?(xt=Y.max.x-Y.min.x,wt=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,kt=Y.min.x,Xt=Y.min.y,Zt=Y.isBox3?Y.min.z:0):(xt=xe.width,wt=xe.height,It=xe.depth||1,kt=0,Xt=0,Zt=0),K!==null?(Lt=K.x,ae=K.y,ge=K.z):(Lt=0,ae=0,ge=0);let tn=Ft.convert(z.format),ce=Ft.convert(z.type),Ot;z.isData3DTexture?(T.setTexture3D(z,0),Ot=x.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(T.setTexture2DArray(z,0),Ot=x.TEXTURE_2D_ARRAY):(T.setTexture2D(z,0),Ot=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,z.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,z.unpackAlignment);let Wn=x.getParameter(x.UNPACK_ROW_LENGTH),ue=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Rn=x.getParameter(x.UNPACK_SKIP_PIXELS),fr=x.getParameter(x.UNPACK_SKIP_ROWS),ln=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,xe.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,xe.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,kt),x.pixelStorei(x.UNPACK_SKIP_ROWS,Xt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Zt);let hs=E.isDataArrayTexture||E.isData3DTexture,ve=z.isDataArrayTexture||z.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Un=pt.get(E),ds=pt.get(z),gn=pt.get(Un.__renderTarget),mi=pt.get(ds.__renderTarget);Z.bindFramebuffer(x.READ_FRAMEBUFFER,gn.__webglFramebuffer),Z.bindFramebuffer(x.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let gi=0;gi<It;gi++)hs&&x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,pt.get(E).__webglTexture,H,Zt+gi),E.isDepthTexture?(ve&&x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,pt.get(z).__webglTexture,H,ge+gi),x.blitFramebuffer(kt,Xt,xt,wt,Lt,ae,xt,wt,x.DEPTH_BUFFER_BIT,x.NEAREST)):ve?x.copyTexSubImage3D(Ot,H,Lt,ae,ge+gi,kt,Xt,xt,wt):x.copyTexSubImage2D(Ot,H,Lt,ae,ge+gi,kt,Xt,xt,wt);Z.bindFramebuffer(x.READ_FRAMEBUFFER,null),Z.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else ve?E.isDataTexture||E.isData3DTexture?x.texSubImage3D(Ot,H,Lt,ae,ge,xt,wt,It,tn,ce,xe.data):z.isCompressedArrayTexture?x.compressedTexSubImage3D(Ot,H,Lt,ae,ge,xt,wt,It,tn,xe.data):x.texSubImage3D(Ot,H,Lt,ae,ge,xt,wt,It,tn,ce,xe):E.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,H,Lt,ae,xt,wt,tn,ce,xe.data):E.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,H,Lt,ae,xe.width,xe.height,tn,xe.data):x.texSubImage2D(x.TEXTURE_2D,H,Lt,ae,xt,wt,tn,ce,xe);x.pixelStorei(x.UNPACK_ROW_LENGTH,Wn),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ue),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Rn),x.pixelStorei(x.UNPACK_SKIP_ROWS,fr),x.pixelStorei(x.UNPACK_SKIP_IMAGES,ln),H===0&&z.generateMipmaps&&x.generateMipmap(Ot),Z.unbindTexture()},this.copyTextureToTexture3D=function(E,z,Y=null,K=null,H=0){return E.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,E=arguments[2],z=arguments[3],H=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,Y,K,H)},this.initRenderTarget=function(E){pt.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Z.unbindTexture()},this.resetState=function(){C=0,w=0,N=null,Z.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Pi=class extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Zr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ac,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ze=new k,Qi=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ii=class extends rn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rr,_s=new k,Cr=new k,Pr=new k,Ir=new ft,ys=new ft,Kd=new Ht,Sa=new k,xs=new k,Aa=new k,ed=new ft,pl=new ft,nd=new ft,tr=class extends ye{constructor(t=new Ii){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new Me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zr(e,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new Qi(n,3,0,!1)),Rr.setAttribute("uv",new Qi(n,2,3,!1))}this.geometry=Rr,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),Kd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Pr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-Pr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Ea(Sa.set(-.5,-.5,0),Pr,a,Cr,i,s),Ea(xs.set(.5,-.5,0),Pr,a,Cr,i,s),Ea(Aa.set(.5,.5,0),Pr,a,Cr,i,s),ed.set(0,0),pl.set(1,0),nd.set(1,1);let o=t.ray.intersectTriangle(Sa,xs,Aa,!1,_s);if(o===null&&(Ea(xs.set(-.5,.5,0),Pr,a,Cr,i,s),pl.set(0,1),o=t.ray.intersectTriangle(Sa,Aa,xs,!1,_s),o===null))return;let l=t.ray.origin.distanceTo(_s);l<t.near||l>t.far||e.push({distance:l,point:_s.clone(),uv:Ai.getInterpolation(_s,Sa,xs,Aa,ed,pl,nd,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ea(r,t,e,n,i,s){Ir.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(ys.x=s*Ir.x-i*Ir.y,ys.y=i*Ir.x+s*Ir.y):ys.copy(Ir),r.copy(t),r.x+=ys.x,r.y+=ys.y,r.applyMatrix4(Kd)}var id=new k,rd=new ee,sd=new ee,Vy=new k,ad=new Ht,Ta=new k,ml=new hn,od=new Ht,gl=new Kr,$a=class extends Kt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rh,this.bindMatrix=new Ht,this.bindMatrixInverse=new Ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ta),this.boundingBox.expandByPoint(Ta)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ta),this.boundingSphere.expandByPoint(Ta)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ml.copy(this.boundingSphere),ml.applyMatrix4(i),t.ray.intersectsSphere(ml)!==!1&&(od.copy(i).invert(),gl.copy(t.ray).applyMatrix4(od),!(this.boundingBox!==null&&gl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,gl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ee,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===rh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_p?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;rd.fromBufferAttribute(i.attributes.skinIndex,t),sd.fromBufferAttribute(i.attributes.skinWeight,t),id.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let a=sd.getComponent(s);if(a!==0){let o=rd.getComponent(s);ad.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Vy.copy(id).applyMatrix4(ad),a)}}return e.applyMatrix4(this.bindMatrixInverse)}},Os=class extends ye{constructor(){super(),this.isBone=!0,this.type="Bone"}},Qa=class extends Be{constructor(t=null,e=1,n=1,i,s,a,o,l,c=Ye,u=Ye,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ld=new Ht,Gy=new Ht,to=class r{constructor(t=[],e=[]){this.uuid=vn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ht)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ht;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){let o=t[s]?t[s].matrixWorld:Gy;ld.multiplyMatrices(o,e[s]),ld.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Qa(e,t,t,xn,Ln);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let s=t.bones[n],a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Os),this.bones.push(a),this.boneInverses.push(new Ht().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let a=e[i];t.bones.push(a.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}},er=class extends be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},kr=new Ht,cd=new Ht,wa=[],ud=new nn,qy=new Ht,vs=new Kt,bs=new hn,eo=class extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,kr),ud.copy(t.boundingBox).applyMatrix4(kr),this.boundingBox.union(ud)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,kr),bs.copy(t.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),t.ray.intersectsSphere(bs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,kr),cd.multiplyMatrices(n,kr),vs.matrixWorld=cd,vs.raycast(t,wa);for(let a=0,o=wa.length;a<o;a++){let l=wa[a];l.instanceId=s,l.object=this,e.push(l)}wa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qa(new Float32Array(i*this.count),i,this.count,Kc,Ln));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var nr=class extends rn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},no=new k,io=new k,hd=new Ht,Ms=new Kr,Ra=new hn,_l=new k,dd=new k,jr=class extends ye{constructor(t=new Me,e=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)no.fromBufferAttribute(e,i-1),io.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=no.distanceTo(io);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(i),Ra.radius+=s,t.ray.intersectsSphere(Ra)===!1)return;hd.copy(i).invert(),Ms.copy(t.ray).applyMatrix4(hd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=u.getX(_),M=u.getX(_+1),S=Ca(this,t,Ms,l,p,M);S&&e.push(S)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(f),p=Ca(this,t,Ms,l,_,m);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=Ca(this,t,Ms,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=Ca(this,t,Ms,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ca(r,t,e,n,i,s){let a=r.geometry.attributes.position;if(no.fromBufferAttribute(a,i),io.fromBufferAttribute(a,s),e.distanceSqToSegment(no,io,_l,dd)>n)return;_l.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(_l);if(!(l<t.near||l>t.far))return{distance:l,point:dd.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var fd=new k,pd=new k,$r=class extends jr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)fd.fromBufferAttribute(e,i),pd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fd.distanceTo(pd);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ro=class extends jr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},ir=class extends rn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},md=new Ht,Sc=new Kr,Pa=new hn,Ia=new k,ki=class extends ye{constructor(t=new Me,e=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=s,t.ray.intersectsSphere(Pa)===!1)return;md.copy(i).invert(),Sc.copy(t.ray).applyMatrix4(md);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);Ia.fromBufferAttribute(h,m),gd(Ia,m,l,i,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Ia.fromBufferAttribute(h,g),gd(Ia,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function gd(r,t,e,n,i,s,a){let o=Sc.distanceSqToPoint(r);if(o<e){let l=new k;Sc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var an=class extends Be{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new ft:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new k,i=[],s=[],a=[],o=new k,l=new Ht;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new k)}s[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Le(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Le(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Fs=class extends An{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ft){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ac=class extends Fs{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function tu(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+n*o}}}var ka=new k,yl=new tu,xl=new tu,vl=new tu,Ec=class extends An{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new k){let n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(ka.subVectors(i[0],i[1]).add(i[0]),c=ka);let h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(ka.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ka),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),yl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),xl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),vl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(yl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),xl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),vl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(yl.calc(l),xl.calc(l),vl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new k().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _d(r,t,e,n,i){let s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function Wy(r,t){let e=1-r;return e*e*t}function Xy(r,t){return 2*(1-r)*r*t}function Yy(r,t){return r*r*t}function Ps(r,t,e,n){return Wy(r,t)+Xy(r,e)+Yy(r,n)}function Ky(r,t){let e=1-r;return e*e*e*t}function Jy(r,t){let e=1-r;return 3*e*e*r*t}function Zy(r,t){return 3*(1-r)*r*r*t}function jy(r,t){return r*r*r*t}function Is(r,t,e,n,i){return Ky(r,t)+Jy(r,e)+Zy(r,n)+jy(r,i)}var so=class extends An{constructor(t=new ft,e=new ft,n=new ft,i=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ft){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Is(t,i.x,s.x,a.x,o.x),Is(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tc=class extends An{constructor(t=new k,e=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new k){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Is(t,i.x,s.x,a.x,o.x),Is(t,i.y,s.y,a.y,o.y),Is(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ao=class extends An{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wc=class extends An{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends An{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Ps(t,i.x,s.x,a.x),Ps(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rc=class extends An{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Ps(t,i.x,s.x,a.x),Ps(t,i.y,s.y,a.y),Ps(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(_d(o,l.x,c.x,u.x,h.x),_d(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ft().fromArray(i))}return this}},Cc=Object.freeze({__proto__:null,ArcCurve:Ac,CatmullRomCurve3:Ec,CubicBezierCurve:so,CubicBezierCurve3:Tc,EllipseCurve:Fs,LineCurve:ao,LineCurve3:wc,QuadraticBezierCurve:oo,QuadraticBezierCurve3:Rc,SplineCurve:lo}),Pc=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Cc[i.type]().fromJSON(i))}return this}},co=class extends Pc{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ao(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new oo(this.currentPoint.clone(),new ft(t,e),new ft(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){let o=new so(this.currentPoint.clone(),new ft(t,e),new ft(n,i),new ft(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new lo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){let c=new Fs(t,e,n,i,s,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},uo=class r extends Me{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Le(i,0,Math.PI*2);let s=[],a=[],o=[],l=[],c=[],u=1/e,h=new k,d=new ft,f=new k,g=new k,_=new k,m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){let S=n+M*u*i,y=Math.sin(S),L=Math.cos(S);for(let C=0;C<=t.length-1;C++){h.x=t[C].x*y,h.y=t[C].y,h.z=t[C].x*L,a.push(h.x,h.y,h.z),d.x=M/e,d.y=C/(t.length-1),o.push(d.x,d.y);let w=l[3*C+0]*y,N=l[3*C+1],A=l[3*C+0]*L;c.push(w,N,A)}}for(let M=0;M<e;M++)for(let S=0;S<t.length-1;S++){let y=S+M*t.length,L=y,C=y+t.length,w=y+t.length+1,N=y+1;s.push(L,C,N),s.push(w,N,C)}this.setIndex(s),this.setAttribute("position",new oe(a,3)),this.setAttribute("uv",new oe(o,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var ho=class r extends Me{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],a=[],o=[],l=[],c=new k,u=new ft;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ke=class r extends Me{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],h=[],d=[],f=[],g=0,_=[],m=n/2,p=0;M(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new oe(h,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function M(){let y=new k,L=new k,C=0,w=(e-t)/n;for(let N=0;N<=s;N++){let A=[],b=N/s,I=b*(e-t)+t;for(let B=0;B<=i;B++){let V=B/i,G=V*l+o,et=Math.sin(G),W=Math.cos(G);L.x=I*et,L.y=-b*n+m,L.z=I*W,h.push(L.x,L.y,L.z),y.set(et,w,W).normalize(),d.push(y.x,y.y,y.z),f.push(V,1-b),A.push(g++)}_.push(A)}for(let N=0;N<i;N++)for(let A=0;A<s;A++){let b=_[A][N],I=_[A+1][N],B=_[A+1][N+1],V=_[A][N+1];(t>0||A!==0)&&(u.push(b,I,V),C+=3),(e>0||A!==s-1)&&(u.push(I,B,V),C+=3)}c.addGroup(p,C,0),p+=C}function S(y){let L=g,C=new ft,w=new k,N=0,A=y===!0?t:e,b=y===!0?1:-1;for(let B=1;B<=i;B++)h.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;let I=g;for(let B=0;B<=i;B++){let G=B/i*l+o,et=Math.cos(G),W=Math.sin(G);w.x=A*W,w.y=m*b,w.z=A*et,h.push(w.x,w.y,w.z),d.push(0,b,0),C.x=et*.5+.5,C.y=W*.5*b+.5,f.push(C.x,C.y),g++}for(let B=0;B<i;B++){let V=L+B,G=I+B;y===!0?u.push(G,G+1,V):u.push(G+1,G,V),N+=3}c.addGroup(p,N,y===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Qr=class extends co{constructor(t){super(t),this.uuid=vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new co().fromJSON(i))}return this}},$y={triangulate:function(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=Jd(r,0,i,e,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,f;if(n&&(s=ix(r,t,s,e)),r.length>80*e){o=c=r[0],l=u=r[1];for(let g=e;g<i;g+=e)h=r[g],d=r[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return zs(s,a,e,o,l,f,0),a}};function Jd(r,t,e,n,i){let s,a;if(i===px(r,t,e,n)>0)for(s=t;s<e;s+=n)a=yd(s,r[s],r[s+1],a);else for(s=e-n;s>=t;s-=n)a=yd(s,r[s],r[s+1],a);return a&&Ao(a,a.next)&&(Hs(a),a=a.next),a}function rr(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Ao(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Hs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zs(r,t,e,n,i,s,a){if(!r)return;!a&&s&&lx(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?tx(r,n,i,s):Qy(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Hs(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=ex(rr(r),t,e),zs(r,t,e,n,i,s,2)):a===2&&nx(r,t,e,n,i,s):zs(rr(r),t,e,n,i,s,1);break}}}function Qy(r){let t=r.prev,e=r,n=r.next;if(Ee(t,e,n)>=0)return!1;let i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=i<s?i<a?i:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Dr(i,o,s,l,a,c,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tx(r,t,e,n){let i=r.prev,s=r,a=r.next;if(Ee(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,u=i.y,h=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=Ic(f,g,t,e,n),M=Ic(_,m,t,e,n),S=r.prevZ,y=r.nextZ;for(;S&&S.z>=p&&y&&y.z<=M;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==a&&Dr(o,u,l,h,c,d,S.x,S.y)&&Ee(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&Dr(o,u,l,h,c,d,y.x,y.y)&&Ee(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==a&&Dr(o,u,l,h,c,d,S.x,S.y)&&Ee(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&Dr(o,u,l,h,c,d,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ex(r,t,e){let n=r;do{let i=n.prev,s=n.next.next;!Ao(i,s)&&Zd(i,n,n.next,s)&&Bs(i,s)&&Bs(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Hs(n),Hs(n.next),n=r=s),n=n.next}while(n!==r);return rr(n)}function nx(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hx(a,o)){let l=jd(a,o);a=rr(a,a.next),l=rr(l,l.next),zs(a,t,e,n,i,s,0),zs(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function ix(r,t,e,n){let i=[],s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=Jd(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(ux(c));for(i.sort(rx),s=0;s<i.length;s++)e=sx(i[s],e);return e}function rx(r,t){return r.x-t.x}function sx(r,t){let e=ax(r,t);if(!e)return t;let n=jd(e,r);return rr(n,n.next),rr(e,e.next)}function ax(r,t){let e=t,n=-1/0,i,s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,l=i.x,c=i.y,u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Dr(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),Bs(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&ox(i,e)))&&(i=e,u=h)),e=e.next;while(e!==o);return i}function ox(r,t){return Ee(r.prev,r,t.prev)<0&&Ee(t.next,r,r.next)<0}function lx(r,t,e,n){let i=r;do i.z===0&&(i.z=Ic(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,cx(i)}function cx(r){let t,e,n,i,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(a>1);return r}function Ic(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function ux(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Dr(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function hx(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!dx(r,t)&&(Bs(r,t)&&Bs(t,r)&&fx(r,t)&&(Ee(r.prev,r,t.prev)||Ee(r,t.prev,t))||Ao(r,t)&&Ee(r.prev,r,r.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Ao(r,t){return r.x===t.x&&r.y===t.y}function Zd(r,t,e,n){let i=Na(Ee(r,t,e)),s=Na(Ee(r,t,n)),a=Na(Ee(e,n,r)),o=Na(Ee(e,n,t));return!!(i!==s&&a!==o||i===0&&La(r,e,t)||s===0&&La(r,n,t)||a===0&&La(e,r,n)||o===0&&La(e,t,n))}function La(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Na(r){return r>0?1:r<0?-1:0}function dx(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Zd(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Bs(r,t){return Ee(r.prev,r,r.next)<0?Ee(r,t,r.next)>=0&&Ee(r,r.prev,t)>=0:Ee(r,t,r.prev)<0||Ee(r,r.next,t)<0}function fx(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function jd(r,t){let e=new kc(r.i,r.x,r.y),n=new kc(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function yd(r,t,e,n){let i=new kc(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Hs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function kc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function px(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}var ks=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];xd(t),vd(n,t);let a=t.length;e.forEach(xd);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,vd(n,e[l]);let o=$y.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function xd(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function vd(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Vs=class r extends Me{constructor(t=new Qr([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new oe(i,3)),this.setAttribute("uv",new oe(s,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:mx,S,y=!1,L,C,w,N;p&&(S=p.getSpacedPoints(u),y=!0,d=!1,L=p.computeFrenetFrames(u,!1),C=new k,w=new k,N=new k),d||(m=0,f=0,g=0,_=0);let A=o.extractPoints(c),b=A.shape,I=A.holes;if(!ks.isClockWise(b)){b=b.reverse();for(let rt=0,ut=I.length;rt<ut;rt++){let x=I[rt];ks.isClockWise(x)&&(I[rt]=x.reverse())}}let V=ks.triangulateShape(b,I),G=b;for(let rt=0,ut=I.length;rt<ut;rt++){let x=I[rt];b=b.concat(x)}function et(rt,ut,x){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ut,x)}let W=b.length,nt=V.length;function X(rt,ut,x){let U,D,j,Z=rt.x-ut.x,_t=rt.y-ut.y,pt=x.x-rt.x,T=x.y-rt.y,v=Z*Z+_t*_t,q=Z*T-_t*pt;if(Math.abs(q)>Number.EPSILON){let R=Math.sqrt(v),P=Math.sqrt(pt*pt+T*T),F=ut.x-_t/R,ht=ut.y+Z/R,ot=x.x-T/P,tt=x.y+pt/P,St=((ot-F)*T-(tt-ht)*pt)/(Z*T-_t*pt);U=F+Z*St-rt.x,D=ht+_t*St-rt.y;let it=U*U+D*D;if(it<=2)return new ft(U,D);j=Math.sqrt(it/2)}else{let R=!1;Z>Number.EPSILON?pt>Number.EPSILON&&(R=!0):Z<-Number.EPSILON?pt<-Number.EPSILON&&(R=!0):Math.sign(_t)===Math.sign(T)&&(R=!0),R?(U=-_t,D=Z,j=Math.sqrt(v)):(U=Z,D=_t,j=Math.sqrt(v/2))}return new ft(U/j,D/j)}let gt=[];for(let rt=0,ut=G.length,x=ut-1,U=rt+1;rt<ut;rt++,x++,U++)x===ut&&(x=0),U===ut&&(U=0),gt[rt]=X(G[rt],G[x],G[U]);let yt=[],At,Pt=gt.concat();for(let rt=0,ut=I.length;rt<ut;rt++){let x=I[rt];At=[];for(let U=0,D=x.length,j=D-1,Z=U+1;U<D;U++,j++,Z++)j===D&&(j=0),Z===D&&(Z=0),At[U]=X(x[U],x[j],x[Z]);yt.push(At),Pt=Pt.concat(At)}for(let rt=0;rt<m;rt++){let ut=rt/m,x=f*Math.cos(ut*Math.PI/2),U=g*Math.sin(ut*Math.PI/2)+_;for(let D=0,j=G.length;D<j;D++){let Z=et(G[D],gt[D],U);lt(Z.x,Z.y,-x)}for(let D=0,j=I.length;D<j;D++){let Z=I[D];At=yt[D];for(let _t=0,pt=Z.length;_t<pt;_t++){let T=et(Z[_t],At[_t],U);lt(T.x,T.y,-x)}}}let Gt=g+_;for(let rt=0;rt<W;rt++){let ut=d?et(b[rt],Pt[rt],Gt):b[rt];y?(w.copy(L.normals[0]).multiplyScalar(ut.x),C.copy(L.binormals[0]).multiplyScalar(ut.y),N.copy(S[0]).add(w).add(C),lt(N.x,N.y,N.z)):lt(ut.x,ut.y,0)}for(let rt=1;rt<=u;rt++)for(let ut=0;ut<W;ut++){let x=d?et(b[ut],Pt[ut],Gt):b[ut];y?(w.copy(L.normals[rt]).multiplyScalar(x.x),C.copy(L.binormals[rt]).multiplyScalar(x.y),N.copy(S[rt]).add(w).add(C),lt(N.x,N.y,N.z)):lt(x.x,x.y,h/u*rt)}for(let rt=m-1;rt>=0;rt--){let ut=rt/m,x=f*Math.cos(ut*Math.PI/2),U=g*Math.sin(ut*Math.PI/2)+_;for(let D=0,j=G.length;D<j;D++){let Z=et(G[D],gt[D],U);lt(Z.x,Z.y,h+x)}for(let D=0,j=I.length;D<j;D++){let Z=I[D];At=yt[D];for(let _t=0,pt=Z.length;_t<pt;_t++){let T=et(Z[_t],At[_t],U);y?lt(T.x,T.y+S[u-1].y,S[u-1].x+x):lt(T.x,T.y,h+x)}}}Q(),ct();function Q(){let rt=i.length/3;if(d){let ut=0,x=W*ut;for(let U=0;U<nt;U++){let D=V[U];Ct(D[2]+x,D[1]+x,D[0]+x)}ut=u+m*2,x=W*ut;for(let U=0;U<nt;U++){let D=V[U];Ct(D[0]+x,D[1]+x,D[2]+x)}}else{for(let ut=0;ut<nt;ut++){let x=V[ut];Ct(x[2],x[1],x[0])}for(let ut=0;ut<nt;ut++){let x=V[ut];Ct(x[0]+W*u,x[1]+W*u,x[2]+W*u)}}n.addGroup(rt,i.length/3-rt,0)}function ct(){let rt=i.length/3,ut=0;vt(G,ut),ut+=G.length;for(let x=0,U=I.length;x<U;x++){let D=I[x];vt(D,ut),ut+=D.length}n.addGroup(rt,i.length/3-rt,1)}function vt(rt,ut){let x=rt.length;for(;--x>=0;){let U=x,D=x-1;D<0&&(D=rt.length-1);for(let j=0,Z=u+m*2;j<Z;j++){let _t=W*j,pt=W*(j+1),T=ut+U+_t,v=ut+D+_t,q=ut+D+pt,R=ut+U+pt;zt(T,v,q,R)}}}function lt(rt,ut,x){l.push(rt),l.push(ut),l.push(x)}function Ct(rt,ut,x){Dt(rt),Dt(ut),Dt(x);let U=i.length/3,D=M.generateTopUV(n,i,U-3,U-2,U-1);Wt(D[0]),Wt(D[1]),Wt(D[2])}function zt(rt,ut,x,U){Dt(rt),Dt(ut),Dt(U),Dt(ut),Dt(x),Dt(U);let D=i.length/3,j=M.generateSideWallUV(n,i,D-6,D-3,D-2,D-1);Wt(j[0]),Wt(j[1]),Wt(j[3]),Wt(j[1]),Wt(j[2]),Wt(j[3])}function Dt(rt){i.push(l[rt*3+0]),i.push(l[rt*3+1]),i.push(l[rt*3+2])}function Wt(rt){s.push(rt.x),s.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gx(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,a=t.shapes.length;s<a;s++){let o=e[t.shapes[s]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Cc[i.type]().fromJSON(i)),new r(n,t.options)}},mx={generateTopUV:function(r,t,e,n,i){let s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new ft(s,a),new ft(o,l),new ft(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ft(a,1-l),new ft(c,1-h),new ft(d,1-g),new ft(_,1-p)]:[new ft(o,1-l),new ft(u,1-h),new ft(f,1-g),new ft(m,1-p)]}};function gx(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var fo=class r extends Me{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],u=[],h=t,d=(e-t)/i,f=new k,g=new ft;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let p=s+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let p=0;p<n;p++){let M=p+m,S=M,y=M+n+1,L=M+n+2,C=M+1;o.push(S,y,C),o.push(y,L,C)}}this.setIndex(o),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var zn=class r extends Me{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new k,d=new k,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let M=[],S=p/n,y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let L=0;L<=e;L++){let C=L/e;h.x=-t*Math.cos(i+C*s)*Math.sin(a+S*o),h.y=t*Math.cos(a+S*o),h.z=t*Math.sin(i+C*s)*Math.sin(a+S*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(C+y,1-S),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let S=u[p][M+1],y=u[p][M],L=u[p+1][M],C=u[p+1][M+1];(p!==0||a>0)&&f.push(S,y,C),(p!==n-1||l<Math.PI)&&f.push(y,L,C)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ue=class extends rn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},dn=class extends Ue{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Da(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function _x(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function yx(r){function t(i,s){return r[i]-r[s]}let e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function bd(r,t,e){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=e[s]*t;for(let l=0;l!==t;++l)i[a++]=r[o+l]}return i}function $d(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)}var Li=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lc=class extends Li{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ah:s=t,o=2*e-n;break;case oh:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ah:a=t,l=2*n-e;break;case oh:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let L=0;L!==o;++L)s[L]=p*a[u+L]+M*a[c+L]+S*a[l+L]+y*a[h+L];return s}},Nc=class extends Li{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}},Dc=class extends Li{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},En=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Da(e,this.TimeBufferType),this.values=Da(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Da(t.times,Array),values:Da(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case Xr:e=this.InterpolantFactoryMethodLinear;break;case Ho:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Xr;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&_x(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ho,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let _=e[h+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Xr;var Ni=class extends En{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Wr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var po=class extends En{};po.prototype.ValueTypeName="color";var si=class extends En{};si.prototype.ValueTypeName="number";var Uc=class extends Li{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let u=c+o;c!==u;c+=4)He.slerpFlat(s,0,a,c-o,a,c,l);return s}},ai=class extends En{InterpolantFactoryMethodLinear(t){return new Uc(this.times,this.values,this.getValueSize(),t)}};ai.prototype.ValueTypeName="quaternion";ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends En{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Wr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends En{};oi.prototype.ValueTypeName="vector";var mo=class{constructor(t="",e=-1,n=[],i=yp){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(vx(n[a]).scale(i));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=n.length;s!==a;++s)e.push(En.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let u=yx(l);l=bd(l,1,u),c=bd(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new si(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){let c=t[o],u=c.name.match(s);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,_){if(f.length!==0){let m=[],p=[];$d(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],s=t.name||"default",a=t.fps||30,o=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){let S=d[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}i.push(new si(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{let f=".bones["+e[h].name+"]";n(oi,f+".position",d,"pos",i),n(ai,f+".quaternion",d,"rot",i),n(oi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function xx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return si;case"vector":case"vector2":case"vector3":case"vector4":return oi;case"color":return po;case"quaternion":return ai;case"bool":case"boolean":return Ni;case"string":return Di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function vx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=xx(r.type);if(r.times===void 0){let e=[],n=[];$d(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}var Ei={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Oc=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},bx=new Oc,li=class{constructor(t){this.manager=t!==void 0?t:bx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};li.DEFAULT_MATERIAL_NAME="__DEFAULT";var jn={},Fc=class extends Error{constructor(t,e){super(t),this.response=e}},Gs=class extends li{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=Ei.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(jn[t]!==void 0){jn[t].push({onLoad:e,onProgress:n,onError:i});return}jn[t]=[],jn[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=jn[t],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){M();function M(){h.read().then(({done:S,value:y})=>{if(S)p.close();else{_+=y.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let C=0,w=u.length;C<w;C++){let N=u[C];N.onProgress&&N.onProgress(L)}p.enqueue(y),M()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Fc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ei.add(t,c);let u=jn[t];delete jn[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=jn[t];if(u===void 0)throw this.manager.itemError(t),c;delete jn[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var zc=class extends li{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=Ei.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let o=Ds("img");function l(){u(),Ei.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}};var ts=class extends li{constructor(t){super(t)}load(t,e,n,i){let s=new Be,a=new zc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},es=class extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},go=class extends es{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},bl=new Ht,Md=new k,Sd=new k,qs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Md.setFromMatrixPosition(t.matrixWorld),e.position.copy(Md),Sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sd),e.updateMatrixWorld(),bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Bc=class extends qs{constructor(){super(new we(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Yr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},_o=class extends es{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Bc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ad=new Ht,Ss=new k,Ml=new k,Hc=class extends qs{constructor(){super(new we(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ss.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ss),Ml.copy(n.position),Ml.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ml),n.updateMatrixWorld(),i.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad)}},ns=class extends es{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Vc=class extends qs{constructor(){super(new Ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sr=class extends es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Vc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ui=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var yo=class extends li{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=Ei.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ei.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Ei.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Ei.add(t,l),s.manager.itemStart(t)}};var eu="\\[\\]\\.:\\/",Mx=new RegExp("["+eu+"]","g"),nu="[^"+eu+"]",Sx="[^"+eu.replace("\\.","")+"]",Ax=/((?:WC+[\/:])*)/.source.replace("WC",nu),Ex=/(WCOD+)?/.source.replace("WCOD",Sx),Tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),Rx=new RegExp("^"+Ax+Ex+Tx+wx+"$"),Cx=["material","materials","bones","map"],Gc=class{constructor(t,e,n){let i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mx,"")}static parseTrackName(t){let e=Rx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Cx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Gc;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function tf(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Me,c=0;for(let u=0;u<r.length;++u){let h=r[u],d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0,h=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=r[d].attributes.position.count}l.setIndex(h)}for(let u in s){let h=Qd(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][d]);let g=Qd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Qd(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let u=r[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}let a=new t(s),o=new be(a,e,n),l=0;for(let c=0;c<r.length;++c){let u=r[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){let _=u.getComponent(d,g);o.setComponent(d+h,g,_)}}else a.set(u.array,l);l+=u.count*e}return i!==void 0&&(o.gpuType=i),o}function iu(r,t){if(t===Od)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Xs||t===vo){let e=r.getIndex();if(e===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=e.count-2,i=[];if(t===Xs)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}var To=class extends li{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new uu(e)}),this.register(function(e){return new hu(e)}),this.register(function(e){return new vu(e)}),this.register(function(e){return new bu(e)}),this.register(function(e){return new Mu(e)}),this.register(function(e){return new fu(e)}),this.register(function(e){return new pu(e)}),this.register(function(e){return new mu(e)}),this.register(function(e){return new gu(e)}),this.register(function(e){return new cu(e)}),this.register(function(e){return new _u(e)}),this.register(function(e){return new du(e)}),this.register(function(e){return new xu(e)}),this.register(function(e){return new yu(e)}),this.register(function(e){return new ou(e)}),this.register(function(e){return new Su(e)}),this.register(function(e){return new Au(e)})}load(t,e,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ui.extractUrlBase(t);a=Ui.resolveURL(c,this.path)}else a=Ui.extractUrlBase(t);this.manager.itemStart(t);let o=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new Gs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,a,function(u){e(u),s.manager.itemEnd(t)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s,a={},o={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===af){try{a[ne.KHR_BINARY_GLTF]=new Eu(t)}catch(h){i&&i(h);return}s=JSON.parse(a[ne.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ku(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case ne.KHR_MATERIALS_UNLIT:a[h]=new lu;break;case ne.KHR_DRACO_MESH_COMPRESSION:a[h]=new Tu(s,this.dracoLoader);break;case ne.KHR_TEXTURE_TRANSFORM:a[h]=new wu;break;case ne.KHR_MESH_QUANTIZATION:a[h]=new Ru;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}};function Px(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}var ne={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ou=class{constructor(t){this.parser=t,this.name=ne.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],c,u=new Nt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Je);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new sr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ns(u),c.distance=h;break;case"spot":c=new _o(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,s=n.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(e.cache,o,l)})}},lu=class{constructor(){this.name=ne.KHR_MATERIALS_UNLIT}getMaterialType(){return Sn}extendParams(t,e,n){let i=[];t.color=new Nt(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Je),t.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,pe))}return Promise.all(i)}},cu=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},uu=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ft(o,o)}return Promise.all(s)}},hu=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},du=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},fu=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new Nt(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Je)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,pe)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},pu=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},mu=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return e.attenuationColor=new Nt().setRGB(o[0],o[1],o[2],Je),Promise.all(s)}},gu=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},_u=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return e.specularColor=new Nt().setRGB(o[0],o[1],o[2],Je),a.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,pe)),Promise.all(s)}},yu=class{constructor(t){this.parser=t,this.name=ne.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}},xu=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},vu=class{constructor(t){this.parser=t,this.name=ne.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}},bu=class{constructor(t){this.parser=t,this.name=ne.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Mu=class{constructor(t){this.parser=t,this.name=ne.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Su=class{constructor(t){this.name=ne.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},Au=class{constructor(t){this.name=ne.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Tn.TRIANGLES&&c.mode!==Tn.TRIANGLE_STRIP&&c.mode!==Tn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let _=new Ht,m=new k,p=new He,M=new k(1,1,1),S=new eo(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),S.setMatrixAt(y,_.compose(m,p,M));for(let y in l)if(y==="_COLOR_0"){let L=l[y];S.instanceColor=new er(L.array,L.itemSize,L.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);ye.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},af="glTF",Ys=12,ef={JSON:1313821514,BIN:5130562},Eu=class{constructor(t){this.name=ne.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==af)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ys,s=new DataView(t,Ys),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===ef.JSON){let c=new Uint8Array(t,Ys+a,o);this.content=n.decode(c)}else if(l===ef.BIN){let c=Ys+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Tu=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ne.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=Pu[u]||u.toLowerCase();o[h]=a[u]}for(let u in t.attributes){let h=Pu[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[t.attributes[u]],f=rs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},o,c,Je,d)})})}},wu=class{constructor(){this.name=ne.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Ru=class{constructor(){this.name=ne.KHR_MESH_QUANTIZATION}},wo=class extends Li{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[s+a];return e}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-e,h=(n-e)/u,d=h*h,f=d*h,g=t*c,_=g-c,m=-2*f+3*d,p=f-d,M=1-m,S=p-d+h;for(let y=0;y!==o;y++){let L=a[_+y+o],C=a[_+y+l]*u,w=a[g+y+o],N=a[g+y]*u;s[y]=M*L+S*C+m*w+p*N}return s}},Ix=new He,Cu=class extends wo{interpolate_(t,e,n,i){let s=super.interpolate_(t,e,n,i);return Ix.fromArray(s).normalize().toArray(s),s}},Tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nf={9728:Ye,9729:en,9984:qc,9985:Ts,9986:Lr,9987:yn},rf={33071:ti,33648:Ls,10497:Nn},ru={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kx={CUBICSPLINE:void 0,LINEAR:Xr,STEP:Wr},su={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ue({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),r.DefaultMaterial}function ar(r,t,e){for(let n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ci(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Nx(r,t,e){let n=!1,i=!1,s=!1;for(let c=0,u=t.length;c<u;c++){let h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,u=t.length;c<u;c++){let h=t[c];if(n){let d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):r.attributes.position;a.push(d)}if(i){let d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Dx(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ux(r){let t,e=r.extensions&&r.extensions[ne.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+au(e.attributes):t=r.indices+":"+au(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+au(r.targets[n]);return t}function au(r){let t="",e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function Iu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ox(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Fx=new Ht,ku=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Px,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new ts(this.options.manager):this.textureLoader=new yo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ar(s,o,i),ci(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){let a=e[i].joints;for(let o=0,l=a.length;o<l;o++)t[a[o]].isBone=!0}for(let i=0,s=t.length;i<s;i++){let a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ne.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Ui.resolveURL(e.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let a=ru[i.type],o=rs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new be(c,a,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=ru[i.type],c=rs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(f&&f!==h){let p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,S=e.cache.get(M);S||(_=new c(o,p*f,i.count*f/u),S=new Zr(_,f/u),e.cache.add(M,S)),m=new Qi(S,l,d%f/u,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new be(_,l,g);if(i.sparse!==void 0){let p=ru.SCALAR,M=rs[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,L=new M(a[1],S,i.sparse.count*p),C=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new be(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,N=L.length;w<N;w++){let A=L[w];if(m.setX(A,C[w*l]),l>=2&&m.setY(A,C[w*l+1]),l>=3&&m.setZ(A,C[w*l+2]),l>=4&&m.setW(A,C[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){let e=this.json,n=this.options,s=e.textures[t].source,a=e.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,n){let i=this,s=this.json,a=s.textures[t],o=s.images[e],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return u.magFilter=nf[d.magFilter]||en,u.minFilter=nf[d.minFilter]||yn,u.wrapS=rf[d.wrapS]||Nn,u.wrapT=rf[d.wrapT]||Nn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ye&&u.minFilter!==en,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());let a=i.images[t],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){let m=new Be(_);m.needsUpdate=!0,d(m)}),e.load(Ui.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ci(h,a),h.userData.mimeType=a.mimeType||Ox(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ne.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ne.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[ne.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ir,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(t.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new nr,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Ue}loadMaterial(t){let e=this,n=this.json,i=this.extensions,s=n.materials[t],a,o={},l=s.extensions||{},c=[];if(l[ne.KHR_MATERIALS_UNLIT]){let h=i[ne.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,e))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new Nt(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Je),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",h.baseColorTexture,pe)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=Fe);let u=s.alphaMode||su.OPAQUE;if(u===su.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===su.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Sn&&(c.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ft(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Sn&&(c.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Sn){let h=s.emissiveFactor;o.emissive=new Nt().setRGB(h[0],h[1],h[2],Je)}return s.emissiveTexture!==void 0&&a!==Sn&&c.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,pe)),Promise.all(c).then(function(){let h=new a(o);return s.name&&(h.name=s.name),ci(h,s),e.associations.set(h,{materials:t}),s.extensions&&ar(i,h,s),h})}createUniqueName(t){let e=_e.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ne.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(l){return sf(l,o,e)})}let a=[];for(let o=0,l=t.length;o<l;o++){let c=t[o],u=Ux(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[ne.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=sf(new Me,c,e),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){let e=this,n=this.json,i=this.extensions,s=n.meshes[t],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?Lx(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let _=u[f],m=a[f],p,M=c[f];if(m.mode===Tn.TRIANGLES||m.mode===Tn.TRIANGLE_STRIP||m.mode===Tn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new $a(_,M):new Kt(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Tn.TRIANGLE_STRIP?p.geometry=iu(p.geometry,vo):m.mode===Tn.TRIANGLE_FAN&&(p.geometry=iu(p.geometry,Xs));else if(m.mode===Tn.LINES)p=new $r(_,M);else if(m.mode===Tn.LINE_STRIP)p=new jr(_,M);else if(m.mode===Tn.LINE_LOOP)p=new ro(_,M);else if(m.mode===Tn.POINTS)p=new ki(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Dx(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),ci(p,s),m.extensions&&ar(i,p,m),e.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return s.extensions&&ar(i,h[0],s),h[0];let d=new re;s.extensions&&ar(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new we(Mo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ci(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ci(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new Ht;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new to(o,l)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let M=0,S=d.length;M<S;M++){let y=d[M],L=f[M],C=g[M],w=_[M],N=m[M];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let A=n._createAnimationTracks(y,L,C,w,N);if(A)for(let b=0;b<A.length;b++)p.push(A[b])}return new mo(s,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Fx)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Os:c.length>1?u=new re:c.length===1?u=c[0]:u=new ye,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),ci(u,s),s.extensions&&ar(n,u,s),s.matrix!==void 0){let h=new Ht;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,s=new re;n.name&&(s.name=i.createUniqueName(n.name)),ci(s,n),n.extensions&&ar(e,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof rn||d instanceof Be)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){let a=[],o=t.name?t.name:t.uuid,l=[];Oi[s.path]===Oi.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Oi[s.path]){case Oi.weights:c=si;break;case Oi.rotation:c=ai;break;case Oi.position:case Oi.scale:c=oi;break;default:n.itemSize===1?c=si:c=oi;break}let u=i.interpolation!==void 0?kx[i.interpolation]:Xr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Oi[s.path],e.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Iu(e.constructor),i=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof ai?Cu:wo;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function zx(r,t,e){let n=t.attributes,i=new nn;if(n.POSITION!==void 0){let o=e.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){let u=Iu(rs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new k,l=new k;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let d=e.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=Iu(rs[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new hn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function sf(r,t,e){let n=t.attributes,i=[];function s(a,o){return e.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in n){let o=Pu[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(t.indices!==void 0&&!r.index){let a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});i.push(a)}return ie.workingColorSpace!==Je&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ie.workingColorSpace}" not supported.`),ci(r,t),zx(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Nx(r,t.targets,e):r})}var ke=1.83;function Bx(){let r=document.createElement("canvas");r.width=512,r.height=256;let t=r.getContext("2d");t.fillStyle="#00b5e2",t.fillRect(0,0,512,86),t.fillStyle="#ef3340",t.fillRect(0,85,512,86),t.fillStyle="#509e2f",t.fillRect(0,170,512,86);let e=256,n=256-.05*e,i=128;t.fillStyle="#fff",t.beginPath(),t.arc(n,i,.15*e,0,7),t.fill(),t.fillStyle="#ef3340",t.beginPath(),t.arc(n+.04*e,i,.125*e,0,7),t.fill(),t.fillStyle="#fff",t.beginPath();let s=n+.165*e,a=.083*e,o=.047*e;for(let l=0;l<16;l++){let c=l*Math.PI/8-Math.PI/2,u=l%2?o:a;t[l?"lineTo":"moveTo"](s+u*Math.cos(c),i+u*Math.sin(c))}return t.closePath(),t.fill(),r}function Lu(r,t,e,n,i,s="#16191d"){let a=document.createElement("canvas");a.width=t,a.height=e;let o=a.getContext("2d");return o.fillStyle=s,o.textAlign="center",o.textBaseline="middle",o.font=`800 ${i}px Unbounded, "Arial Black", sans-serif`,n?(o.translate(t/2,e/2),o.rotate(-Math.PI/2),o.fillText(r,0,0)):o.fillText(r,t/2,e/2),a}var ss=r=>{let t=new an(r);return t.colorSpace=pe,t.anisotropy=8,t};function Fi(r,t,e,n,i,s){let a=new Ke(t,t,n,20,1,!0,i-s/2,s),o=new Ue({map:r,transparent:!0,roughness:.5,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2}),l=new Kt(a,o);return l.position.y=e+n/2,l}var Hx=(r,t,e)=>new Re({transparent:!0,depthWrite:!1,blending:bn,side:Fe,uniforms:{uT:{value:0},uP:{value:1},c1:{value:new Nt(r)},c2:{value:new Nt(t)},uK:{value:e}},vertexShader:`varying float s; varying vec3 vN; varying vec3 vV; varying vec3 vP; uniform float uT;
    void main(){ s = uv.y; vP = position; vec3 p = position; float w = (1.0 - uv.y); p.xz *= 1.0 + 0.05*sin(uT*37.0 + p.y*0.7)*w; vec4 mv = modelViewMatrix*vec4(p,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,fragmentShader:`varying float s; varying vec3 vN; varying vec3 vV; varying vec3 vP; uniform float uT, uP, uK; uniform vec3 c1, c2;
    void main(){ float f = pow(abs(dot(normalize(vN), vV)), uK); float a = pow(s, 1.6)*f; float fl = 0.85 + 0.15*sin(uT*53.0 + vP.y*1.3)*sin(uT*31.0 + vP.y*0.37);
      vec3 col = mix(c2, c1, pow(s, 2.5)); gl_FragColor = vec4(col*a*fl*uP, 1.0); }`});function Ro(r,t,e,n,i,s=1.4){let a=new Ke(t,e,r,28,10,!0);a.translate(0,-r/2,0);let o=new Kt(a,Hx(n,i,s));return o.frustumCulled=!1,o.renderOrder=5,o}function of(){let r=new Ue({color:15921903,roughness:.42,metalness:.04}),t=new Ue({color:1316378,roughness:.55,metalness:.1}),e=new Ue({color:4869717,roughness:.38,metalness:.85}),n=new re,i=(A,b,I,B,V,G=40)=>{let et=new Kt(new Ke(A,b,I,G),B);return et.position.y=V+I/2,et},s=ss(Bx()),a=new re;n.add(a),a.add(i(ke,ke,1.4,t,.2)),a.add(i(ke,ke,40,r,1.6)),a.add(i(ke*1.004,ke*1.004,4.8,t,41.6));for(let A=0;A<9;A++){let b=A*Math.PI/4,I=A<8?1.22:0,B=i(.26,.56,1.5,e,-1.3,16);B.position.x=I*Math.cos(b),B.position.z=I*Math.sin(b),a.add(B)}let o=[],l=[];for(let A=0;A<4;A++){let b=Math.PI/4+A*Math.PI/2,I=new re;I.position.set((ke+.1)*Math.sin(b),1.7,(ke+.1)*Math.cos(b)),I.rotation.order="YXZ",I.rotation.y=b;let B=new Kt(new sn(1,9.6,.22),t);B.position.y=4.8,I.add(B),a.add(I),o.push(I);let V=new re;V.position.set((ke+.08)*Math.sin(b),40.9,(ke+.08)*Math.cos(b)),V.rotation.order="YXZ",V.rotation.y=b;let G=new Kt(new sn(1.3,1.9,.1),e);G.position.y=-.95,V.add(G),a.add(V),l.push(V)}a.add(Fi(ss(Lu("QIRAT",200,1100,!0,150)),ke+.015,19.5,13.5,-.5,1.34)),a.add(Fi(s,ke+.015,35.6,1.5,.55,1.64)),a.add(Fi(ss(Lu("AZ\u018FRBAYCAN",1024,128,!1,84)),ke+.015,33.6,.72,.55,3.1));let c=new re;c.position.y=-1.2,a.add(c);let u=Ro(78,1.8,4.6,16773842,16747050,.9),h=Ro(46,1.45,.6,16777215,16769712,1.6);c.add(u,h);let d=new ns(16752720,0,600,1.2);d.position.y=-6,c.add(d);let f=new re;f.position.y=46.4,n.add(f);let g=new Ue({color:2762276,roughness:.5,metalness:.7,emissive:16734740,emissiveIntensity:0,side:Fe}),_=new Kt(new Ke(.4,1.45,3.3,32,1,!0),g);_.position.y=-1.55,f.add(_),f.add(i(ke,ke,10.2,r,.1)),f.add(i(ke*1.003,ke*1.003,.5,t,2.2)),f.add(i(1.3,ke,.9,t,10.3)),f.add(Fi(s,ke+.015,6.6,1.3,.3,1.42));let m=new re;m.position.y=-3.2,f.add(m);let p=Ro(26,1.4,8.5,13624575,4025855,1),M=Ro(9,1.2,1.9,16777215,12375295,2);m.add(p,M);let S=[[ke,0],[2.6,1.7],[2.6,7.6],[2.46,9.2],[2.05,10.8],[1.4,12],[.7,12.8],[.02,13.15]].map(A=>new ft(A[0],A[1])),y=new Ue({color:15921903,roughness:.42,metalness:.04,side:Fe}),L=[0,1].map(A=>{let b=new re;b.position.y=57.5;let I=new Kt(new uo(S,28,A*Math.PI+Math.PI/2,Math.PI),y);return b.add(I),n.add(b),b}),C=Fi(s,2.615,4,1.9,0,1.46),w=Fi(ss(Lu("QIRAT",1024,220,!1,170)),2.615,2.3,1.2,0,1.9);L[1].add(C,w);let N=Vx(s);return N.position.y=57.8,n.add(N),{root:n,s1:a,s2:f,fair:L,craft:N,legs:o,fins:l,f1:c,f2:m,f1a:u,f1b:h,f2a:p,f2b:M,glow1:d,nozMat:g,mats:{white:r,black:t,metal:e,fmat:y}}}function Vx(r){let t=new re,e=new Ue({color:15527662,roughness:.5,metalness:.08}),n=new Ue({color:1777187,roughness:.6,metalness:.2}),i=new Ue({color:12165994,roughness:.35,metalness:.9}),s=(f,g,_)=>{let m=new Kt(f,g);return m.position.y=_,t.add(m),m};s(new Ke(.45,.95,1.3,24,1,!0),n,-.5).material.side=Fe,s(new Ke(1.72,1.72,2.9,40),e,1.6),s(new Ke(1.74,1.74,.5,40),i,.6),s(new Ke(1.86,1.76,.28,40),n,3.18),s(new Ke(.95,1.86,2.5,40),e,4.55),s(new Ke(.6,.6,.55,24),n,6.05);for(let f=0;f<4;f++){let g=s(new ho(.2,16),n,4.5),_=f*Math.PI/2+.6;g.position.set(1.36*Math.sin(_),4.6,1.36*Math.cos(_)),g.lookAt(g.position.x*3,6.8,g.position.z*3)}let a=Fi(r,1.735,1.9,.9,.2,1.05);t.add(a);let o=document.createElement("canvas");o.width=512,o.height=128;let l=o.getContext("2d");l.fillStyle="#16191d",l.font='800 86px Unbounded, "Arial Black", sans-serif',l.textAlign="center",l.textBaseline="middle",l.fillText("QIRAT",256,68),t.add(Fi(ss(o),1.735,1.2,.5,.2,1.15));let c=document.createElement("canvas");c.width=512,c.height=128;let u=c.getContext("2d");u.fillStyle="#0c1630",u.fillRect(0,0,512,128),u.strokeStyle="#2b4580",u.lineWidth=2;for(let f=0;f<=16;f++)u.beginPath(),u.moveTo(f*32,0),u.lineTo(f*32,128),u.stroke();for(let f=0;f<=4;f++)u.beginPath(),u.moveTo(0,f*32),u.lineTo(512,f*32),u.stroke();let h=new Ue({map:ss(c),roughness:.3,metalness:.6}),d=[-1,1].map(f=>{let g=new re;g.position.set(f*1.72,1.4,0);let _=new Kt(new sn(7.6,.06,2.2),h);_.position.x=f*3.9,g.add(_);let m=new Kt(new Ke(.05,.05,.4),n);return m.rotation.z=Math.PI/2,m.position.x=f*.1,g.add(m),g.scale.x=.02,g.visible=!1,t.add(g),g});return t.userData.wings=d,t}var Co=class{constructor(t=700){this.n=t,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.life=new Float32Array(t).fill(-1),this.size=new Float32Array(t),this.heat=new Float32Array(t),this.age=new Float32Array(t);let e=new Me;e.setAttribute("position",new be(this.pos,3)),this.aS=new be(new Float32Array(t),1),this.aA=new be(new Float32Array(t),1),this.aH=new be(new Float32Array(t),1),e.setAttribute("aS",this.aS),e.setAttribute("aA",this.aA),e.setAttribute("aH",this.aH);let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.45,"rgba(255,255,255,0.55)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,128,128),this.mat=new Re({transparent:!0,depthWrite:!1,uniforms:{map:{value:new an(n)},uScale:{value:600},uTint:{value:new Nt(.93,.93,.95)}},vertexShader:"attribute float aS, aA, aH; varying float vA, vH; uniform float uScale; void main(){ vA = aA; vH = aH; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = aS*uScale/max(1.0,-mv.z); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform sampler2D map; uniform vec3 uTint; varying float vA, vH; void main(){ float a = texture2D(map, gl_PointCoord).a*vA; vec3 c = mix(uTint, vec3(1.0,0.72,0.42), vH); gl_FragColor = vec4(c, a); }"}),this.points=new ki(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=4,this.i=0}clear(){this.life.fill(-1),this.aA.array.fill(0),this.aA.needsUpdate=!0}emit(t,e,n,i,s,a,o,l,c=0){let u=this.i;this.i=(u+1)%this.n,this.pos[u*3]=t,this.pos[u*3+1]=e,this.pos[u*3+2]=n,this.vel[u*3]=i,this.vel[u*3+1]=s,this.vel[u*3+2]=a,this.life[u]=l,this.age[u]=0,this.size[u]=o,this.heat[u]=c}update(t){let{n:e,pos:n,vel:i,life:s,age:a,size:o,heat:l}=this,c=this.aS.array,u=this.aA.array,h=this.aH.array;for(let d=0;d<e;d++){if(s[d]<0){u[d]=0;continue}a[d]+=t;let f=a[d]/s[d];if(f>=1){s[d]=-1,u[d]=0;continue}let g=Math.exp(-t*.9);i[d*3]*=g,i[d*3+2]*=g,i[d*3+1]=i[d*3+1]*g+1.6*t,n[d*3]+=i[d*3]*t,n[d*3+1]+=i[d*3+1]*t,n[d*3+2]+=i[d*3+2]*t,c[d]=o[d]*(.5+2.6*Math.sqrt(f)),u[d]=Math.min(1,f*8)*(1-f)*.6,h[d]=l[d]*Math.max(0,1-f*3.5)}this.points.geometry.attributes.position.needsUpdate=!0,this.aS.needsUpdate=!0,this.aA.needsUpdate=!0,this.aH.needsUpdate=!0}};var qt=19.5,cf=170,Ks=k,Gx=new Ks(0,1,0),lf=new Ks(1,1,1),fn=class{constructor(){this.g=[]}add(t,e=0,n=0,i=0,s=0,a=0,o=0){return t.applyMatrix4(new Ht().compose(new Ks(e,n,i),new He().setFromEuler(new Mn(s,a,o)),lf)),this.g.push(t),this}box(t,e,n,i,s,a,o,l,c){return this.add(new sn(t,e,n),i,s,a,o,l,c)}cyl(t,e,n,i,s,a,o=14,l,c,u){return this.add(new Ke(t,e,n,o),i,s,a,l,c,u)}sph(t,e,n,i,s=1){let a=new zn(t,28,18);return a.scale(1,s,1),this.add(a,e,n,i)}strut(t,e,n,i){let s=new Ks(...t),a=new Ks(...e),o=a.clone().sub(s),l=o.length(),c=new sn(n,l,i||n);return c.applyMatrix4(new Ht().compose(s.add(a).multiplyScalar(.5),new He().setFromUnitVectors(Gx,o.normalize()),lf)),this.g.push(c),this}mast(t,e,n,i,s,a,o,l){let c=Math.max(2,Math.round((i-n)/o)),u=d=>{let f=d/c;return[n+(i-n)*f,(s+(a-s)*f)/2]},h=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let d=0;d<c;d++){let[f,g]=u(d),[_,m]=u(d+1);h.forEach(([p,M],S)=>{let[y,L]=h[(S+1)%4];this.strut([t+p*g,f,e+M*g],[t+p*m,_,e+M*m],l*1.5),this.strut([t+p*m,_,e+M*m],[t+y*m,_,e+L*m],l),(d+S)%2?this.strut([t+p*g,f,e+M*g],[t+y*m,_,e+L*m],l):this.strut([t+y*g,f,e+L*g],[t+p*m,_,e+M*m],l)})}return this}mesh(t){let e=new Kt(tf(this.g,!1),t);return this.g.forEach(n=>n.dispose()),e}};function uf(r){let t=r;return()=>(t=t*16807%2147483647,t/2147483647)}function Nu(r,t,e,n=1,i=1){let s=document.createElement("canvas");s.width=r,s.height=t,e(s.getContext("2d"),r,t);let a=new an(s);return a.colorSpace=pe,a.anisotropy=8,a.wrapS=a.wrapT=Nn,a.repeat.set(n,i),a}function qx(){return Nu(512,384,(r,t,e)=>{let n=uf(7);r.fillStyle="#a3a199",r.fillRect(0,0,t,e);for(let i=0;i<5e3;i++){let s=130+n()*60;r.fillStyle=`rgba(${s},${s-2},${s-8},0.16)`,r.fillRect(n()*t,n()*e,1+n()*3,1+n()*2)}for(let i=0;i<46;i++){let s=n()*t,a=40+n()*300,o=.05+n()*.16,l=r.createLinearGradient(0,0,0,a);l.addColorStop(0,`rgba(58,56,50,${o})`),l.addColorStop(1,"rgba(58,56,50,0)"),r.fillStyle=l,r.fillRect(s,0,2+n()*9,a)}r.fillStyle="rgba(40,40,36,0.28)";for(let i=96;i<e;i+=96)r.fillRect(0,i,t,2);for(let i=0;i<t;i+=256)r.fillRect(i,0,2,e);r.fillStyle="rgba(235,232,222,0.2)";for(let i=98;i<e;i+=96)r.fillRect(0,i,t,1)},1/12,1/9)}function Wx(){return Nu(1024,160,(r,t,e)=>{let n=uf(3);r.fillStyle="#676c70",r.fillRect(0,0,t,e);for(let i=0;i<t;i+=8)r.fillStyle=i/8%2?"rgba(20,24,28,0.2)":"rgba(225,230,235,0.07)",r.fillRect(i,16,4,e-30);r.fillStyle="#7f8589",r.fillRect(0,0,t,14),r.fillStyle="#4c5156",r.fillRect(0,14,t,3),r.fillRect(0,e-12,t,12),[[70,40,60,74],[250,34,96,90],[470,46,54,62],[640,34,110,90],[860,44,70,70]].forEach(([i,s,a,o])=>{r.fillStyle="#24282c",r.fillRect(i,s,a,o),r.strokeStyle="#8b9196",r.lineWidth=3,r.strokeRect(i,s,a,o)}),[[176,52,36,50],[392,60,40,44],[560,50,30,60],[786,56,44,46],[960,60,34,50]].forEach(([i,s,a,o])=>{r.fillStyle="#868c90",r.fillRect(i,s,a,o)}),r.fillStyle="#d9dcdc",r.fillRect(150,100,720,7),r.fillRect(40,116,640,6),r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(150,107,720,3),r.fillRect(40,122,640,3);for(let i=0;i<60;i++){let s=n()*t,a=20+n()*90,o=r.createLinearGradient(0,16,0,16+a);o.addColorStop(0,"rgba(30,26,22,0.2)"),o.addColorStop(1,"rgba(30,26,22,0)"),r.fillStyle=o,r.fillRect(s,16,2+n()*5,a)}})}function Xx(){return Nu(512,256,(r,t,e)=>{r.fillStyle="#b4b8b7",r.fillRect(0,0,t,e);for(let n=0;n<t;n+=10)r.fillStyle="rgba(0,0,0,0.07)",r.fillRect(n,0,2,e);r.fillStyle="#8f9596",r.fillRect(150,50,212,206),r.fillStyle="rgba(0,0,0,0.16)";for(let n=150;n<362;n+=53)r.fillRect(n,50,3,206);r.fillStyle="#6f7577",r.fillRect(0,0,t,16),r.fillStyle="#2f6fa8",r.fillRect(0,28,t,9)})}function hf(){let r=new re,t=(x,U=.75,D=.1,j={})=>new Ue({color:x,roughness:U,metalness:D,...j}),e=t(16777215,.95,0,{map:qx()}),n=t(1776669,1,0),i=t(8818066,.62,.2),s=t(4869972,.8,.1),a=t(15132901,.55,.05),o=t(12041406,.7,.1),l=t(13870356,.6,.1),c=t(16777215,.7,.15,{map:Wx()}),u=new Qr;[[-38,-3],[-38,9],[48,9],[48,-3],[8,-3],[8,7.4],[-8,7.4],[-8,-3]].forEach(([x,U],D)=>u[D?"lineTo":"moveTo"](x,U));let h=new Kt(new Vs(u,{depth:52,bevelEnabled:!1}),e);h.position.z=-26,r.add(h);let d=new Qr;[[-38,9],[-38,-3],[-118,-3],[-112,-1.2]].forEach(([x,U],D)=>d[D?"lineTo":"moveTo"](x,U));let f=new Kt(new Vs(d,{depth:22,bevelEnabled:!1}),e);f.position.z=-11,r.add(f);let g=new fn;for(let x=-34;x<=46;x+=10)Math.abs(x)>12&&g.box(1.3,12,.9,x,3,26.3);g.box(88,.8,53.6,5,9.3,0),[[-13,-12],[5,-12],[23,-12],[-13,12],[5,12],[23,12]].forEach(([x,U])=>g.box(4.6,3.2,4.6,x,11.1,U)),r.add(g.mesh(e));let _=new fn;_.box(16.4,10.6,3,0,2.2,-1).box(15.6,.5,26,0,7.2,13).box(.4,10.4,26,-7.9,2.2,13).box(.4,10.4,26,7.9,2.2,13),r.add(_.mesh(n));let m=new Kt(new sn(44,6.8,34),c);m.position.set(5,qt-3.4,0),r.add(m);let p=new fn,M=new fn,S=new fn,y=new fn;[[-17,17,27,17],[-17,-17,27,-17],[-17,-17,-17,17],[27,-17,27,17]].forEach(([x,U,D,j])=>{p.strut([x,qt+1.15,U],[D,qt+1.15,j],.14).strut([x,qt+.6,U],[D,qt+.6,j],.09);let Z=Math.round(Math.hypot(D-x,j-U)/2.2);for(let _t=0;_t<=Z;_t++)p.box(.1,1.2,.1,x+(D-x)*_t/Z,qt+.6,U+(j-U)*_t/Z)}),S.cyl(.32,.32,40,4,qt-1.6,17.5,10,0,0,Math.PI/2).cyl(.26,.26,34,1,qt-2.5,17.45,10,0,0,Math.PI/2).cyl(.26,.26,26,12,qt-4.6,17.45,10,0,0,Math.PI/2);for(let x=0;x<4;x++){let U=27.6+(x%2?0:3.4),D=27.6+(x%2?3.4:0),j=9.7+x*2.45;M.strut([U,j,15.5],[D,j+2.45,15.5],.22,1.3)}M.box(.25,10,.25,27.6,14.6,16.2).box(.25,10,.25,31,14.6,16.2).box(.25,10,.25,27.6,14.6,14.8).box(.25,10,.25,31,14.6,14.8),y.cyl(3.3,3.6,1.3,0,qt+.65,0,20),[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([x,U])=>y.box(1.1,2.4,1.1,x*2.6,qt+1.2,U*2.6)),M.box(2.2,7.5,2.4,-6.4,qt+3.75,-3.2).box(2.2,7.5,2.4,-6.4,qt+3.75,3.6).strut([-5.4,qt+6.6,-3.2],[-2.2,qt+5.2,-1.2],.35).strut([-5.4,qt+6.6,3.6],[-2.2,qt+5.2,1.4],.35),M.box(5,3,6,22,qt+1.5,-11).box(3.4,2.4,4,-13.5,qt+1.2,12).box(4,2.2,3,21,qt+1.1,13);let L=13.2,C=6.2,w=6,N=75,A=6.25,b=12,I=L-C,B=L+C,V=qt+N,G=new fn,et=new fn;[[I,-w],[B,-w],[I,w],[B,w]].forEach(([x,U])=>G.box(.95,N,.95,x,qt+N/2,U)),[[L,-w],[L,w],[I,0],[B,0]].forEach(([x,U])=>G.box(.5,N,.5,x,qt+N/2,U));for(let x=0;x<=b;x++){let U=qt+x*A;if(x>0&&(et.box(C*2+.9,.4,w*2+.9,L,U,0),M.box(C*2+1.5,.55,.3,L,U+.1,w+.6).box(C*2+1.5,.55,.3,L,U+.1,-w-.6).box(.3,.55,w*2+1.5,I-.6,U+.1,0).box(.3,.55,w*2+1.5,B+.6,U+.1,0)),x===b)break;let D=U,j=U+A;[w,-w].forEach(Z=>{x%2?G.strut([I,D,Z],[L,j,Z],.42).strut([B,D,Z],[L,j,Z],.42):G.strut([L,D,Z],[I,j,Z],.42).strut([L,D,Z],[B,j,Z],.42)}),[I,B].forEach(Z=>{x%2?G.strut([Z,D,-w],[Z,j,0],.42).strut([Z,D,w],[Z,j,0],.42):G.strut([Z,D,0],[Z,j,-w],.42).strut([Z,D,0],[Z,j,w],.42)}),p.strut([I-.7,U+1.3+(x?0:.2),w+.7],[B+.7,U+1.3+(x?0:.2),w+.7],.11)}[[2,-3.4,4.6,3.2],[4,1.6,5.2,3.6],[5,-3.6,3.6,2.8],[7,.8,5.6,3.4],[9,-3,4.2,3],[10,2,3.8,2.6]].forEach(([x,U,D,j])=>M.box(D,j,3.6,L+U,qt+x*A+.2+j/2,w-2.4)),[[1,2],[3,-2.5],[6,3],[8,-2],[11,1]].forEach(([x,U])=>y.box(2.6,2.2,2.4,L+U,qt+x*A+1.3,w-1.8)),y.box(4.2,N-2,4.4,L+2.6,qt+N/2-1,-2.4);for(let x=0;x<b*2;x++){let U=qt+x*A/2,D=x%2;M.strut([L-4.6+(D?3.6:0),U,3.2],[L-4.6+(D?0:3.6),U+A/2,3.2],.2,1.1)}S.cyl(.3,.3,N-4,I+1.2,qt+N/2,4.6,8).cyl(.22,.22,N-10,I+2,qt+N/2-3,4.6,8).cyl(.22,.22,N-16,I+2.7,qt+N/2-6,4.6,8);let W=22,nt=B+9.2;[w,-w].forEach(x=>{G.strut([nt,qt,x],[B,qt+W,x],1);for(let U=0;U<4;U++){let D=qt+W*U/4,j=qt+W*(U+1)/4,Z=nt+(B-nt)*U/4,_t=nt+(B-nt)*(U+1)/4;G.strut([B,j,x],[_t,j,x],.4),U<3&&G.strut([B,D,x],[_t,j,x],.4)}});for(let x=0;x<=3;x++){let U=qt+W*x/4,D=nt+(B-nt)*x/4;G.strut([D,U,-w],[D,U,w],.45),x<3&&G.strut([D,U,-w],[nt+(B-nt)*(x+1)/4,qt+W*(x+1)/4,w],.36)}let X=V+4.2;[[-2.2],[2.2]].forEach(([x])=>{G.strut([I-9,X,x],[B+5,X,x],.55).strut([I-9,X-2.6,x],[B+5,X-2.6,x],.45);for(let U=I-9;U<B+5;U+=3.4)G.strut([U,X-2.6,x],[Math.min(U+3.4,B+5),X,x],.3)});for(let x=I-9;x<=B+5.1;x+=3.4)G.strut([x,X,-2.2],[x,X,2.2],.3);[[I,-w],[B,-w],[I,w],[B,w]].forEach(([x,U])=>G.strut([x,V,U],[x+(L-x)*.55,X-2.6,U*.36],.5)),M.box(4.4,3,4,L+1,V+1.9,0),S.cyl(.14,.3,17,L,X+8.5,0,8),G.strut([I-7.5,X-2.6,0],[I-7.5,X-9,0],.16),r.add(G.mesh(i),et.mesh(s));let gt=[],yt=(x,U,D)=>{let j=new re;j.position.set(I-.4,qt+x,w-1.2);let Z=new fn,_t=U;if(D==="crew")Z.box(_t,2.4,2.2,-_t/2,.4,0).box(3.2,3.2,3.4,-_t-.6,.5,-.9),j.add(Z.mesh(a));else{Z.strut([0,.9,-.8],[-_t,.5,-.8],.32).strut([0,.9,.8],[-_t,.5,.8],.32).strut([0,-.9,-.8],[-_t,-.3,-.8],.32).strut([0,-.9,.8],[-_t,-.3,.8],.32);for(let T=0;T<3;T++){let v=-_t*T/3,q=-_t*(T+1)/3;Z.strut([v,-.8,.8],[q,.7,.8],.22).strut([v,.8,-.8],[q,-.5,-.8],.22).strut([q,.6,-.8],[q,.6,.8],.22)}j.add(Z.mesh(o));let pt=new fn;pt.cyl(.2,.2,_t+.6,-_t/2,-.1,0,8,0,0,Math.PI/2).box(1.1,1.5,1.7,-_t-.3,.1,0),j.add(pt.mesh(D==="lox"?a:s))}return j.userData.back=D==="crew"?-1.25:-1.45,r.add(j),gt.push(j),j};[[11,"rp"],[37.5,"lox"],[44.2,"rp"],[51.5,"lox"],[59.4,"crew"]].forEach(([x,U])=>{let D=yt(x,5.6,U);D.rotation.y=-.72,D.userData.fwd=-.72}),r.userData.retract=x=>gt.forEach((U,D)=>{let j=Math.min(1,Math.max(0,x*1.6-(gt.length-1-D)*.15));U.rotation.y=U.userData.fwd+(U.userData.back-U.userData.fwd)*j*j*(3-2*j)});let At=[[-70,-30],[86,-38],[-34,62],[64,58]],Pt=new fn,Gt=104;At.forEach(([x,U])=>{Pt.mast(x,U,-3,Gt,7.5,1.5,8.2,.34),S.cyl(.12,.42,20,x,Gt+10,U,8)}),r.add(Pt.mesh(i));let Q=[],ct=(x,U,D)=>{for(let j=0;j<16;j++){let Z=j/16,_t=(j+1)/16;[Z,_t].forEach(pt=>Q.push(x[0]+(U[0]-x[0])*pt,x[1]+(U[1]-x[1])*pt-D*4*pt*(1-pt),x[2]+(U[2]-x[2])*pt))}},vt=At.map(([x,U])=>[x,Gt+19,U]);ct(vt[0],vt[1],9),ct(vt[2],vt[3],8),ct(vt[0],vt[2],6),ct(vt[1],vt[3],6),At.forEach(([x,U])=>ct([x,Gt+19,U],[x+Math.sign(x)*46,-2,U-14],3));let lt=new Me;lt.setAttribute("position",new oe(Q,3)),r.add(new $r(lt,new nr({color:9344411,transparent:!0,opacity:.5}))),S.sph(8,104,10.5,-44).cyl(.5,.5,5,104,20.5,-44,8).cyl(2.4,2.4,21,128,3.6,-30,18,0,0,Math.PI/2).cyl(2.4,2.4,21,128,3.6,-38,18,0,0,Math.PI/2).sph(2.4,117.5,3.6,-30).sph(2.4,138.5,3.6,-30);for(let x=0;x<8;x++){let U=x*Math.PI/4;M.strut([104+Math.cos(U)*7.2,-3,-44+Math.sin(U)*7.2],[104+Math.cos(U)*6.6,8,-44+Math.sin(U)*6.6],.5)}M.cyl(8.5,8.5,.35,104,10.5,-44,28),S.cyl(2.3,2.9,62,-128,28,-96,18).sph(10.5,-128,62,-96,.62).cyl(1.2,1.2,4,-128,69.5,-96,10),M.cyl(10.9,10.9,.5,-128,59.5,-96,30),S.cyl(.3,.3,54,75,6.2,8,8,0,0,Math.PI/2).cyl(.24,.24,54,75,5.5,9.2,8,0,0,Math.PI/2);for(let x=52;x<=100;x+=8)M.box(.3,9,.3,x,1.4,8).box(.3,9,.3,x,1.4,9.4).box(.3,.3,2,x,5,8.7);let Ct=[];[[-52,44,36],[72,46,36],[112,20,30],[-96,30,30]].forEach(([x,U,D])=>{M.cyl(.22,.42,D+3,x,D/2-1.5,U,8).box(4.4,1.7,.5,x,D+.6,U);for(let j=-1;j<=1;j++)Ct.push(x+j*1.4,D+.6,U+.4)});let zt=new Kt(new sn(84,27,44),t(16777215,.85,.05,{map:Xx()}));zt.position.set(-236,10.5,-150),r.add(zt),M.box(30,9,26,-180,1.5,-150).box(86,1,46,-236,24.3,-150),r.add(p.mesh(l),M.mesh(o),S.mesh(a),y.mesh(s));for(let x=1;x<=b;x++){let U=qt+x*A-1.3;Ct.push(I+.4,U,w+.5,L,U,w+.5,B-.4,U,w+.5),x%2&&Ct.push(I-.5,U,0,B+.5,U,-2)}for(let x=-15;x<=26;x+=5.8)Ct.push(x,qt+1.6,17.2);for(let x=-30;x<=44;x+=12.2)Math.abs(x)>10&&Ct.push(x,10.6,26.6);Ct.push(L,X+17.2,0),At.forEach(([x,U])=>Ct.push(x,Gt+20.3,U));let Dt=document.createElement("canvas");Dt.width=Dt.height=64;{let x=Dt.getContext("2d"),U=x.createRadialGradient(32,32,0,32,32,32);U.addColorStop(0,"rgba(255,255,255,1)"),U.addColorStop(.22,"rgba(255,236,200,0.9)"),U.addColorStop(.5,"rgba(255,190,110,0.28)"),U.addColorStop(1,"rgba(255,170,90,0)"),x.fillStyle=U,x.fillRect(0,0,64,64)}let Wt=new Me;Wt.setAttribute("position",new oe(Ct,3));let rt=new ir({map:new an(Dt),color:16763018,size:7,sizeAttenuation:!1,transparent:!0,depthWrite:!1,blending:bn,opacity:.9}),ut=new ki(Wt,rt);return ut.renderOrder=3,r.add(ut),r.userData.lamps=rt,r}var Te=(r,t=0,e=1)=>Math.min(e,Math.max(t,r)),he=(r,t,e)=>r+(t-r)*e,Vt=(r,t,e)=>{let n=Te((e-r)/(t-r));return n*n*(3-2*n)},ui=r=>r*r*(3-2*r),me=Math.PI/180;function Bn(r,t){let e=r.length,n=[],i=new Array(e);for(let s=0;s<e-1;s++)n.push((t[s+1]-t[s])/(r[s+1]-r[s]||1e-9));i[0]=n[0],i[e-1]=n[e-2];for(let s=1;s<e-1;s++)i[s]=n[s-1]*n[s]<=0?0:(n[s-1]+n[s])/2;for(let s=0;s<e-1;s++){if(n[s]===0){i[s]=0,i[s+1]=0;continue}let a=i[s]/n[s],o=i[s+1]/n[s],l=a*a+o*o;if(l>9){let c=3/Math.sqrt(l);i[s]=c*a*n[s],i[s+1]=c*o*n[s]}}return s=>{if(s<=r[0])return t[0];if(s>=r[e-1])return t[e-1];let a=0,o=e-1;for(;o-a>1;){let d=a+o>>1;r[d]<=s?a=d:o=d}let l=r[o]-r[a],c=(s-r[a])/l,u=c*c,h=u*c;return(2*h-3*u+1)*t[a]+(h-2*u+c)*l*i[a]+(-2*h+3*u)*t[o]+(h-u)*l*i[o]}}var Se="\xA0";function Dn(r,t=0){let e=Math.abs(r).toFixed(t),[n,i]=e.split(".");return n=n.replace(/\B(?=(\d{3})+(?!\d))/g,Se),(r<0?"\u2212":"")+n+(i?","+i:"")}function Po(r){return r<10?Dn(r,2)+Se+"km":r<1e3?Dn(r,r<100?1:0)+Se+"km":r<1e6?Dn(Math.round(r))+Se+"km":r<1e9?Dn(r/1e6,r<1e7?2:r<1e8?1:0)+Se+"mln"+Se+"km":Dn(r/1e9,r<1e10?2:1)+Se+"mlrd"+Se+"km"}function Io(r){r=Math.max(0,Math.floor(r));let t=Math.floor(r/3600),e=Math.floor(r%3600/60),n=r%60,i=s=>String(s).padStart(2,"0");return(t?i(t)+":":"")+i(e)+":"+i(n)}function Du(r){let t=r/86400;if(r<172800){let i=Math.floor(r/3600),s=Math.floor(r%3600/60),a=Math.floor(r%60),o=l=>String(l).padStart(2,"0");return"T+"+Se+o(i)+":"+o(s)+":"+o(a)}if(t<60)return Math.floor(t)+Se+"g\xFCn"+Se+Math.floor(t%1*24)+Se+"saat";if(t<730)return Math.floor(t)+Se+"g\xFCn";let e=Math.floor(t/365.25),n=Math.floor((t/365.25-e)*12);return e+Se+"il"+(n?Se+n+Se+"ay":"")}function df(r){return r<.01?Dn(r*1e3,1)+Se+"ms":r<60?Dn(r,r<10?2:1)+Se+"san":r<3600?Math.floor(r/60)+Se+"d\u0259q"+Se+Math.floor(r%60)+Se+"san":r<86400?Math.floor(r/3600)+Se+"saat"+Se+Math.floor(r%3600/60)+Se+"d\u0259q":Dn(r/86400,2)+Se+"g\xFCn"}var Hn=1495978707e-1,ff=299792.458,Ve=6371,zi=398600.4;var Uu={a_liftoff:{t:"Start",x:"Doqquz m\xFCh\u0259rrik eyni anda i\u015F\u0259 d\xFC\u015Fd\xFC. Q\u0131rat\u0131n \xF6l\xE7\xFCl\u0259ri Falcon 9 raketi il\u0259 eynidir: h\xFCnd\xFCrl\xFCy\xFC 70 metr, k\xFCtl\u0259si 549 ton, it\u0259l\u0259m\u0259 q\xFCvv\u0259si 7 600 kilonyuton.",p:"saturnv",cap:"Real kadr: Apollo 11-i Aya aparan Saturn V raketinin start\u0131, 16 iyul 1969"},a_pitch:{t:"\u015E\u0259rq\u0259 d\xF6n\xFCr\xFCk",x:"Raket d\xFCz yuxar\u0131 getmir. T\u0259dric\u0259n \u015F\u0259rq\u0259, X\u0259z\u0259r\u0259 do\u011Fru \u0259yilir, \xE7\xFCnki orbitd\u0259 qalmaq \xFC\xE7\xFCn h\xFCnd\xFCrl\xFCkd\u0259n \xE7ox \xFCf\xFCqi s\xFCr\u0259t laz\u0131md\u0131r. Yerin \xF6z f\u0131rlanmas\u0131 da \u015F\u0259rq istiqam\u0259tind\u0259 \u0259lav\u0259 s\xFCr\u0259t verir."},a_mach:{t:"S\u0259s s\xFCr\u0259tini ke\xE7dik",x:"Raket art\u0131q s\u0259sd\u0259n s\xFCr\u0259tli u\xE7ur. H\xFCnd\xFCrl\xFCk 8 kilometrdir, Everestin zirv\u0259si q\u0259d\u0259r. A\u015Fa\u011F\u0131da \u015Eamax\u0131n\u0131n da\u011Flar\u0131 ki\xE7ilir."},a_maxq:{t:"Max-Q",x:"\u018Fn b\xF6y\xFCk aerodinamik y\xFCk an\u0131. S\xFCr\u0259t art\u0131r, hava is\u0259 h\u0259l\u0259 s\u0131xd\u0131r. Raketin g\xF6vd\u0259sin\u0259 d\xFC\u015F\u0259n t\u0259zyiq bu saniy\u0259l\u0259rd\u0259 \u0259n y\xFCks\u0259k h\u0259dd\u0259 \xE7at\u0131r, sonra hava seyr\u0259ldikc\u0259 azal\u0131r."},a_strat:{t:"G\xF6y qaral\u0131r",x:"30 kilometr. Atmosferin k\xFCtl\u0259sinin 99 faizi art\u0131q a\u015Fa\u011F\u0131dad\u0131r. \u0130\u015F\u0131\u011F\u0131 s\u0259p\u0259l\u0259y\u0259n hava qalmad\u0131\u011F\u0131 \xFC\xE7\xFCn g\xFCnd\xFCz olsa da s\u0259ma qarad\u0131r."},a_meco:{t:"Birinci pill\u0259 s\xF6nd\xFC",x:"Birinci pill\u0259 i\u015Fini bitirdi. H\xFCnd\xFCrl\xFCk 62 kilometr, s\xFCr\u0259t saatda t\u0259xmin\u0259n 7 900 kilometrdir. A\u015Fa\u011F\u0131da Ab\u015Feron yar\u0131madas\u0131 v\u0259 X\u0259z\u0259rin sahili g\xF6r\xFCn\xFCr."},a_sep:{t:"Pill\u0259l\u0259r ayr\u0131ld\u0131",x:"Birinci pill\u0259 ayr\u0131ld\u0131 v\u0259 \xC7\u0259nlibel\u0259 qay\u0131tmaq \xFC\xE7\xFCn d\xF6n\xFCr. \u0130kinci pill\u0259nin t\u0259k m\xFCh\u0259rriki i\u015F\u0259 d\xFC\u015Fd\xFC v\u0259 g\u0259mini orbit\u0259 aparma\u011Fa davam edir."},a_karman:{t:"Kosmosun s\u0259rh\u0259di",x:"100 kilometr, Karman x\u0259tti. Beyn\u0259lxalq raz\u0131la\u015Fmaya g\xF6r\u0259 kosmos buradan ba\u015Flay\u0131r. Bu h\xFCnd\xFCrl\xFCkd\u0259 hava o q\u0259d\u0259r seyr\u0259kdir ki, t\u0259yyar\u0259 qanad\u0131 qald\u0131r\u0131c\u0131 q\xFCvv\u0259 yarada bilmir."},a_fairing:{t:"Ba\u015F \xF6rt\xFCk a\xE7\u0131ld\u0131",x:"Atmosfer arxada qald\u0131, g\u0259mini qoruyan burun \xF6rt\xFCy\xFCn\u0259 ehtiyac yoxdur. \u0130ki yar\u0131mqab\u0131q ayr\u0131ld\u0131 v\u0259 raket y\xFCng\xFCll\u0259\u015Fdi. Q\u0131rat g\u0259misi ilk d\u0259f\u0259 a\xE7\u0131q kosmosu g\xF6r\xFCr."},a_entry:{t:"Birinci pill\u0259 geri qay\u0131d\u0131r",x:"Birinci pill\u0259 atmosfer\u0259 gir\u0259rk\u0259n m\xFCh\u0259rrikl\u0259rini yand\u0131r\u0131b s\xFCr\u0259tini azald\u0131r. Tor formal\u0131 s\xFCkanlar onu \xC7\u0259nlibeld\u0259ki eni\u015F meydan\xE7as\u0131na y\xF6n\u0259ldir."},a_landing:{t:"Birinci pill\u0259 \xC7\u0259nlibel\u0259 endi",x:"Pill\u0259 ayaqlar\u0131n\u0131 a\xE7\u0131b \u015Faquli endi v\u0259 yenid\u0259n u\xE7u\u015Fa haz\u0131rlanacaq. Orbital raketin birinci pill\u0259si ilk d\u0259f\u0259 2015-ci il dekabr\u0131n 21-d\u0259 Falcon 9 u\xE7u\u015Funda yer\u0259 bel\u0259 qaytar\u0131l\u0131b."},a_seco:{t:"Orbitd\u0259yik",x:"\u0130kinci pill\u0259 s\xF6nd\xFC. H\xFCnd\xFCrl\xFCk 200 kilometr, s\xFCr\u0259t saniy\u0259d\u0259 7,8 kilometrdir. Bu s\xFCr\u0259tl\u0259 g\u0259mi Yer\u0259 d\xFC\u015Fm\xFCr, onun \u0259traf\u0131na d\xFC\u015Fm\u0259kd\u0259 davam edir. Orbit el\u0259 budur."},n_orbit:{t:"Bir d\xF6vr\u0259 88 d\u0259qiq\u0259",x:"200 kilometr h\xFCnd\xFCrl\xFCkd\u0259 g\u0259mi Yer \u0259traf\u0131nda 88 d\u0259qiq\u0259y\u0259 bir d\xF6vr\u0259 vurur. Orbitd\u0259ki astronavtlar bir sutkada 16 d\u0259f\u0259 g\xFCn\u0259\u015Fin do\u011Fu\u015Funu g\xF6r\xFCr."},n_az:{t:"Bak\u0131 kosmosdan",x:"Bu real \u015F\u0259kli Beyn\u0259lxalq Kosmik Stansiyan\u0131n hey\u0259ti 2023-c\xFC ilin sentyabr\u0131nda, X\u0259z\u0259rin \xFCz\u0259rind\u0259n ke\xE7\u0259rk\u0259n \xE7\u0259kib. Gec\u0259 Bak\u0131n\u0131n v\u0259 Ab\u015Feron yar\u0131madas\u0131n\u0131n i\u015F\u0131qlar\u0131 g\xF6r\xFCn\xFCr.",p:"baku"},n_caspian:{t:"X\u0259z\u0259r",x:"X\u0259z\u0259r d\xFCnyan\u0131n \u0259n b\xF6y\xFCk g\xF6l\xFCd\xFCr, sah\u0259si t\u0259xmin\u0259n 371 000 kvadrat kilometrdir. Stansiyadan \xE7\u0259kilmi\u015F bu \u015F\u0259kild\u0259 \u015F\u0259rq sahilind\u0259ki Qarabo\u011Fazg\xF6l k\xF6rf\u0259zi g\xF6r\xFCn\xFCr.",p:"caspian"},n_iss:{t:"Beyn\u0259lxalq Kosmik Stansiya",x:"Yan\u0131m\u0131zdan BKS ke\xE7ir. O, 400 kilometr h\xFCnd\xFCrl\xFCkd\u0259 saatda 27 600 kilometr s\xFCr\u0259tl\u0259 u\xE7ur. Eni 109 metrdir, futbol meydan\xE7as\u0131 boyda. 2000-ci ilin noyabr\u0131ndan b\u0259ri orada fasil\u0259siz insan ya\u015Fay\u0131r.",p:"iss_full",enc:"iss"},n_hubble:{t:"Hubble teleskopu",x:"1990-c\u0131 ild\u0259 orbit\u0259 \xE7\u0131xar\u0131l\u0131b, g\xFCzg\xFCs\xFCn\xFCn diametri 2,4 metrdir. Atmosferd\u0259n yuxar\u0131da oldu\u011Fu \xFC\xE7\xFCn kainat\u0131n \u0259n d\u0259rin \u015F\u0259kill\u0259rini \xE7\u0259kib. Astronavtlar onu be\u015F d\u0259f\u0259 orbitd\u0259 t\u0259mir edibl\u0259r. \u015E\u0259kil onun orbit\u0259 burax\u0131ld\u0131\u011F\u0131 g\xFCn \xE7\u0259kilib.",p:"hubble",enc:"hubble"},n_debris:{t:"Kosmik zibil",x:"Yer \u0259traf\u0131nda 40 min\u0259 yax\u0131n iri q\u0131r\u0131nt\u0131 izl\u0259nilir: k\xF6hn\u0259 peykl\u0259r, raket hiss\u0259l\u0259ri, toqqu\u015Fma qal\u0131qlar\u0131. Onlar saniy\u0259d\u0259 7 kilometrd\u0259n art\u0131q s\xFCr\u0259tl\u0259 u\xE7ur, ona g\xF6r\u0259 bir santimetrlik hiss\u0259cik bel\u0259 peyki s\u0131radan \xE7\u0131xara bil\u0259r."},n_aurora:{t:"Q\xFCtb par\u0131lt\u0131s\u0131",x:"G\xFCn\u0259\u015Fd\u0259n g\u0259l\u0259n y\xFCkl\xFC hiss\u0259cikl\u0259r Yerin maqnit sah\u0259si boyunca q\xFCtbl\u0259r\u0259 ax\u0131r v\u0259 atmosferin atomlar\u0131n\u0131 i\u015F\u0131qland\u0131r\u0131r. Ya\u015F\u0131l r\u0259ngi t\u0259xmin\u0259n 100 kilometr h\xFCnd\xFCrl\xFCkd\u0259ki oksigen verir.",p:"aurora"},n_night:{t:"Gec\u0259 t\u0259r\u0259fi",x:"Yerin k\xF6lg\u0259sin\u0259 girdik. A\u015Fa\u011F\u0131dak\u0131 i\u015F\u0131qlar \u015F\u0259h\u0259rl\u0259rdir. T\u0259xmin\u0259n 45 d\u0259qiq\u0259d\u0259n sonra \xFCf\xFCqd\u0259 nazik mavi zolaq g\xF6r\xFCn\u0259c\u0259k v\u0259 yeni g\xFCn\u0259\u015F do\u011Facaq."},n_micro:{t:"\xC7\u0259kisizlik deyil, s\u0259rb\u0259st d\xFC\u015Fm\u0259",x:"Bu h\xFCnd\xFCrl\xFCkd\u0259 Yerin cazib\u0259si s\u0259thd\u0259kinin 90 faizind\u0259n \xE7oxdur. Astronavtlar ona g\xF6r\u0259 havada \xFCz\xFCr ki, g\u0259mi il\u0259 birlikd\u0259 daim Yerin \u0259traf\u0131na d\xFC\u015F\xFCrl\u0259r."},n_gagarin:{t:"\u0130lk insan",x:"1961-ci il aprelin 12-d\u0259 Yuri Qaqarin Vostok 1 g\u0259misind\u0259 Yer \u0259traf\u0131nda bir d\xF6vr\u0259 vurdu. U\xE7u\u015F 108 d\u0259qiq\u0259 \xE7\u0259kdi. O g\xFCnd\u0259n b\u0259ri 600-d\u0259n \xE7ox insan kosmosda olub."},n_sputnik:{t:"\u0130lk peyk",x:"Kosmos eras\u0131 1957-ci il oktyabr\u0131n 4-d\u0259 Sputnik 1 il\u0259 ba\u015Flad\u0131. 58 santimetr diametrli, 83,6 kiloqraml\u0131q k\xFCr\u0259 \xFC\xE7 ay orbitd\u0259 qald\u0131 v\u0259 radiosiqnal\u0131 b\xFCt\xFCn d\xFCnyada e\u015Fidildi."},n_kerimov:{t:"K\u0259rim K\u0259rimov",x:"1917-ci ild\u0259 Bak\u0131da do\u011Fulmu\u015F general-leytenant K\u0259rim K\u0259rimov 1966-c\u0131 ild\u0259n 1991-ci il\u0259 q\u0259d\u0259r SSR\u0130-nin pilotlu u\xE7u\u015Flar \xFCzr\u0259 D\xF6vl\u0259t Komissiyas\u0131n\u0131n s\u0259dri olub. Soyuz g\u0259mil\u0259rinin, Salyut v\u0259 Mir stansiyalar\u0131n\u0131n u\xE7u\u015Flar\u0131na o cavabdeh idi. Ad\u0131 1987-ci il\u0259 q\u0259d\u0259r gizli saxlan\u0131l\u0131rd\u0131."},d_burn:{t:"Yerd\u0259n ayr\u0131l\u0131r\u0131q",x:"\u0130kinci pill\u0259 yenid\u0259n i\u015F\u0259 d\xFC\u015Fd\xFC. Yerin cazib\u0259sind\u0259n tam qurtulmaq \xFC\xE7\xFCn saniy\u0259d\u0259 11,2 kilometr s\xFCr\u0259t laz\u0131md\u0131r. Buna ikinci kosmik s\xFCr\u0259t deyilir."},d_vanallen:{t:"Van Allen qur\u015Faqlar\u0131",x:"Yerin maqnit sah\u0259si G\xFCn\u0259\u015Fd\u0259n g\u0259l\u0259n y\xFCkl\xFC hiss\u0259cikl\u0259ri iki halqa \u015F\u0259klind\u0259 tutub saxlay\u0131r. Daxili qur\u015Faq 1 000 il\u0259 6 000 kilometr, xarici qur\u015Faq 13 000 il\u0259 60 000 kilometr aras\u0131ndad\u0131r. Onlar\u0131 1958-ci ild\u0259 Explorer 1 peyki k\u0259\u015Ff edib."},d_gps:{t:"Naviqasiya peykl\u0259ri",x:"20 200 kilometr h\xFCnd\xFCrl\xFCkd\u0259 GPS peykl\u0259ri u\xE7ur. Telefonun yerini tapmaq \xFC\xE7\xFCn \u0259n az\u0131 d\xF6rd peykd\u0259n siqnal almal\u0131d\u0131r. Peykl\u0259rd\u0259ki atom saatlar\u0131 nisbilik n\u0259z\u0259riyy\u0259sin\u0259 g\xF6r\u0259 d\xFCz\u0259ldilir, yoxsa x\u0259ta g\xFCnd\u0259 10 kilometr\u0259 \xE7atard\u0131."},d_bluemarble:{t:"Mavi m\u0259rm\u0259r",x:"Apollo 17 hey\u0259ti bu m\u0259\u015Fhur \u015F\u0259kli 1972-ci il dekabr\u0131n 7-d\u0259 29 000 kilometr m\u0259saf\u0259d\u0259n \xE7\u0259kib. Ondan sonra insanlar Yeri yenid\u0259n b\xFCt\xF6v k\xFCr\u0259 kimi yaln\u0131z 2026-c\u0131 ilin aprelind\u0259, Artemis II u\xE7u\u015Funda g\xF6rd\xFCl\u0259r.",p:"bluemarble"},d_geo:{t:"Geostasionar orbit v\u0259 Azerspace",x:"35 786 kilometr h\xFCnd\xFCrl\xFCkd\u0259 peyk Yerl\u0259 eyni s\xFCr\u0259tl\u0259 f\u0131rlan\u0131r v\u0259 g\xF6yd\u0259 t\u0259rp\u0259nm\u0259z g\xF6r\xFCn\xFCr. Az\u0259rbaycan\u0131n ilk peyki Azerspace-1 2013-c\xFC il fevral\u0131n 8-d\u0259 buraya, 46\xB0 \u015F\u0259rq uzunlu\u011Funa \xE7\u0131xar\u0131l\u0131b. Azerspace-2 2018-ci ild\u0259n 45\xB0 \u015F\u0259rq uzunlu\u011Fundad\u0131r. Yan\u0131m\u0131zdak\u0131 model onun quruldu\u011Fu platformad\u0131r.",enc:"ssl1300"},d_earthmoon:{t:"Yer v\u0259 Ay bir kadrda",x:"Bu real \u015F\u0259kli DSCOVR peyki 1,5 milyon kilometr m\u0259saf\u0259d\u0259n \xE7\u0259kib. Ay Yerin \xF6n\xFCnd\u0259n ke\xE7ir. G\xF6r\xFCn\u0259n is\u0259 Ay\u0131n Yerd\u0259n he\xE7 vaxt g\xF6rm\u0259diyimiz \u0259ks t\u0259r\u0259fidir.",p:"epic_moon"},d_moonorbit:{t:"Ay\u0131n orbiti",x:"Yerd\u0259n Aya orta m\u0259saf\u0259 384 400 kilometrdir. \u0130\u015F\u0131q bu yolu 1,28 saniy\u0259y\u0259 q\u0259t edir. Yerl\u0259 Ay\u0131n aras\u0131na G\xFCn\u0259\u015F sisteminin b\xFCt\xFCn qalan planetl\u0259ri yan-yana s\u0131\u011Far."},d_hill:{t:"Yerin cazib\u0259 sah\u0259sind\u0259n \xE7\u0131xd\u0131q",x:"T\u0259xmin\u0259n bir milyon kilometrd\u0259n sonra g\u0259minin yolunu art\u0131q Yer yox, G\xFCn\u0259\u015F m\xFC\u0259yy\u0259n edir. \u0130ndi biz G\xFCn\u0259\u015F \u0259traf\u0131nda \xF6z orbiti olan ki\xE7ik bir planet kimiyik."},d_l2:{t:"James Webb teleskopu",x:"Yerd\u0259n 1,5 milyon kilometr aral\u0131da, L2 n\xF6qt\u0259sind\u0259 James Webb teleskopu i\u015Fl\u0259yir. 6,5 metrlik q\u0131z\u0131l \xF6rt\xFCkl\xFC g\xFCzg\xFCs\xFC 18 alt\u0131bucaql\u0131 hiss\u0259d\u0259n y\u0131\u011F\u0131l\u0131b v\u0259 kainat\u0131n ilk qalaktikalar\u0131n\u0131n i\u015F\u0131\u011F\u0131n\u0131 tutur.",p:"jwst",enc:"jwst"},i_hohmann:{t:"Niy\u0259 d\xFCz x\u0259tl\u0259 u\xE7muruq",x:"Planetl\u0259r d\u0259, g\u0259mi d\u0259 G\xFCn\u0259\u015F \u0259traf\u0131nda h\u0259r\u0259k\u0259t edir. \u018Fn az yanacaq t\u0259l\u0259b ed\u0259n yol iki orbiti birl\u0259\u015Fdir\u0259n yar\u0131m ellipsdir. Bu trayektoriyan\u0131 1925-ci ild\u0259 alman m\xFCh\u0259ndisi Valter Homan hesablay\u0131b."},i_silence:{t:"Kosmosun s\xFCkutu",x:"Kosmosda s\u0259s yay\u0131lm\u0131r, \xE7\xFCnki onu da\u015F\u0131yan hava yoxdur. M\xFCh\u0259rrik i\u015Fl\u0259y\u0259nd\u0259 bel\u0259 k\u0259nardan he\xE7 n\u0259 e\u015Fidilm\u0259z. Burada bir kub santimetrd\u0259 c\u0259mi bir ne\xE7\u0259 atom var."},i_solarwind:{t:"G\xFCn\u0259\u015F k\xFCl\u0259yi",x:"G\xFCn\u0259\u015F h\u0259r saniy\u0259 t\u0259xmin\u0259n bir milyon ton y\xFCkl\xFC hiss\u0259ciyi saniy\u0259d\u0259 400 kilometr s\xFCr\u0259tl\u0259 f\u0259zaya p\xFCsk\xFCr\xFCr. Kometl\u0259rin quyru\u011Funu G\xFCn\u0259\u015Fd\u0259n \u0259ks t\u0259r\u0259f\u0259 \u0259y\u0259n d\u0259 bu k\xFCl\u0259kdir."},i_radiation:{t:"Kosmik \u015F\xFCalar",x:"Yerd\u0259 bizi maqnit sah\u0259si v\u0259 atmosfer qoruyur. Planetl\u0259raras\u0131 f\u0259zada is\u0259 astronavt bir g\xFCnd\u0259 Yerd\u0259kind\u0259n y\xFCz d\u0259f\u0259d\u0259n \xE7ox radiasiya al\u0131r. Uzun u\xE7u\u015Flar\u0131n \u0259n \xE7\u0259tin probleml\u0259rind\u0259n biri budur."},i_meteoroid:{t:"Meteoroid, meteor, meteorit",x:"Kosmosda u\xE7an ki\xE7ik da\u015F meteoroiddir. Atmosferd\u0259 yan\u0131b iz buraxanda meteor, yer\u0259 \xE7atanda meteorit adlan\u0131r. \u015E\u0259kild\u0259ki Perseid ax\u0131n\u0131 h\u0259r avqustda Swift-Tuttle kometinin tozundan yaran\u0131r.",p:"perseid"},i_comet:{t:"Kometl\u0259r",x:"Komet buz v\u0259 tozdan ibar\u0259t n\xFCv\u0259dir. G\xFCn\u0259\u015F\u0259 yax\u0131nla\u015Fanda buz buxarlan\u0131r v\u0259 milyonlarla kilometrlik quyruq yaran\u0131r. Halley kometi 76 ild\u0259n bir qay\u0131d\u0131r, n\xF6vb\u0259ti d\u0259f\u0259 2061-ci ild\u0259 g\xF6r\xFCn\u0259c\u0259k. \u015E\u0259kild\u0259 2020-ci ilin NEOWISE kometidir.",p:"neowise"},i_tempel:{t:"Komet\u0259 z\u0259rb\u0259",x:"2005-ci il iyulun 4-d\u0259 Deep Impact aparat\u0131 370 kiloqraml\u0131q mis zondu Tempel 1 kometin\u0259 \xE7\u0131rpd\u0131. Partlay\u0131\u015F n\xFCv\u0259nin i\xE7ind\u0259n buz v\u0259 toz \xE7\u0131xard\u0131 v\u0259 kometl\u0259rin n\u0259d\u0259n ibar\u0259t oldu\u011Funu g\xF6st\u0259rdi.",p:"tempel1"},i_nea:{t:"Bennu asteroidi",x:"Yan\u0131m\u0131zdan ke\xE7\u0259n Bennunun real forma modelidir. OSIRIS-REx aparat\u0131 bu 500 metrlik asteroidd\u0259n 121,6 qram n\xFCmun\u0259 g\xF6t\xFCr\xFCb 2023-c\xFC il sentyabr\u0131n 24-d\u0259 Yer\u0259 \xE7atd\u0131rd\u0131. \u015E\u0259kild\u0259 n\xFCmun\u0259 kapsulu Yuta s\u0259hras\u0131ndad\u0131r.",p:"bennusample",enc:"bennu"},i_dart:{t:"Planetin m\xFCdafi\u0259si",x:"2022-ci il sentyabr\u0131n 26-da DART aparat\u0131 Dimorphos asteroidin\u0259 saatda 22 000 kilometr s\xFCr\u0259tl\u0259 \xE7\u0131rp\u0131ld\u0131 v\u0259 onun orbit m\xFCdd\u0259tini 32 d\u0259qiq\u0259 q\u0131saltd\u0131. \u0130nsan ilk d\u0259f\u0259 bir g\xF6y cisminin h\u0259r\u0259k\u0259tini d\u0259yi\u015Fdi."},i_dsn:{t:"Yerl\u0259 rabit\u0259",x:"Uzaq aparatlarla NASA-n\u0131n D\u0259rin Kosmos \u015E\u0259b\u0259k\u0259si dan\u0131\u015F\u0131r: Kaliforniya, \u0130spaniya v\u0259 Avstraliyadak\u0131 70 metrlik antenalar. Stansiyalar bir-birind\u0259n 120\xB0 aral\u0131d\u0131r ki, Yer f\u0131rlansa da \u0259laq\u0259 k\u0259silm\u0259sin.",p:"dsn"},i_delay:{t:"Siqnal gecikm\u0259si",x:"Radiodal\u011Fa i\u015F\u0131q s\xFCr\u0259ti il\u0259, saniy\u0259d\u0259 299 792 kilometr gedir. Yen\u0259 d\u0259 buradan Yer\u0259 g\xF6nd\u0259ril\u0259n sual\u0131n cavab\u0131n\u0131 uzun m\xFCdd\u0259t g\xF6zl\u0259m\u0259k laz\u0131md\u0131r. Ona g\xF6r\u0259 uzaq aparatlar \xE7ox i\u015Fi \xF6zl\u0259ri q\u0259rar verib g\xF6r\xFCr."},i_assist:{t:"Cazib\u0259 manevri",x:"Aparat planetin yan\u0131ndan ke\xE7\u0259nd\u0259 onun cazib\u0259si il\u0259 s\xFCr\u0259tini v\u0259 istiqam\u0259tini d\u0259yi\u015Fir, yanacaq s\u0259rf etmir. Bu \xFCsulu ilk d\u0259f\u0259 1974-c\xFC ild\u0259 Mariner 10 Veneran\u0131n yan\u0131nda i\u015Fl\u0259dib."},i_palebluedot:{t:"Sol\u011Fun mavi n\xF6qt\u0259",x:"1990-c\u0131 il fevral\u0131n 14-d\u0259 Voyager 1 alt\u0131 milyard kilometr m\u0259saf\u0259d\u0259n geri d\xF6n\xFCb Yerin \u015F\u0259klini \xE7\u0259kdi. B\xFCt\xFCn tarix, tan\u0131d\u0131\u011F\u0131m\u0131z h\u0259r k\u0259s g\xFCn\u0259\u015F \u015F\xFCas\u0131n\u0131n i\xE7ind\u0259ki bu bir n\xF6qt\u0259d\u0259dir.",p:"palebluedot"},mars_window:{t:"Start p\u0259nc\u0259r\u0259si",x:"Marsa \u0259lveri\u015Fli u\xE7u\u015F imkan\u0131 26 ayda bir yaran\u0131r, \xE7\xFCnki Yer v\u0259 Mars yaln\u0131z o zaman laz\u0131mi m\xF6vqed\u0259 olur. Perseverance 2020-ci ilin iyulunda bu p\u0259nc\u0259r\u0259d\u0259 u\xE7du. Biz onun yolu il\u0259 gedirik."},mars_dist:{t:"472 milyon kilometr",x:"Mars \u0259n yax\u0131n vaxt\u0131nda Yerd\u0259n 55 milyon kilometr aral\u0131dad\u0131r, amma g\u0259mi \u0259yri yolla gedir. Perseverance oraya \xE7atmaq \xFC\xE7\xFCn 203 g\xFCnd\u0259 G\xFCn\u0259\u015F \u0259traf\u0131nda 472 milyon kilometr q\u0259t etdi."},mars_first:{t:"Marsdan ilk \u015F\u0259kil",x:"Mariner 4 1965-ci ild\u0259 Mars\u0131n yan\u0131ndan ilk d\u0259f\u0259 ke\xE7di. 1976-c\u0131 il iyulun 20-d\u0259 is\u0259 Viking 1 s\u0259th\u0259 endi v\u0259 d\u0259qiq\u0259l\u0259r sonra bu \u015F\u0259kli g\xF6nd\u0259rdi: \xF6z ayaq daya\u011F\u0131 v\u0259 Mars torpa\u011F\u0131.",p:"viking1"},mars_sojourner:{t:"\u0130lk marsoxod",x:"1997-ci il iyulun 4-d\u0259 Pathfinder missiyas\u0131 Marsa ilk t\u0259k\u0259rli robotu, t\u0259xmin\u0259n 11 kiloqraml\u0131q Sojourneri endirdi. O, 83 g\xFCn i\u015Fl\u0259di v\u0259 c\u0259mi 100 metr\u0259 yax\u0131n yol getdi.",p:"sojourner"},mars_oppy:{t:"Spirit v\u0259 Opportunity",x:"2004-c\xFC ild\u0259 en\u0259n \u0259kiz roverl\u0259r 90 g\xFCnl\xFCk n\u0259z\u0259rd\u0259 tutulmu\u015Fdu. Opportunity 14 ild\u0259n \xE7ox i\u015Fl\u0259di v\u0259 45,16 kilometr yol getdi. Bu rekordu 2026-c\u0131 ilin oktyabr\u0131nda Perseverance ke\xE7di.",p:"opportunity"},mars_curio:{t:"Curiosity",x:"Bir avtomobil boyda, 899 kiloqraml\u0131q bu rover 2012-ci il avqustun 6-dan Geyl kraterind\u0259 i\u015Fl\u0259yir. O, kraterd\u0259 milyardlarla il \u0259vv\u0259l g\xF6l oldu\u011Funu v\u0259 orada h\u0259yat \xFC\xE7\xFCn laz\u0131m olan kimy\u0259vi madd\u0259l\u0259ri tap\u0131b.",p:"curioselfie"},mars_dust:{t:"Toz f\u0131rt\u0131nalar\u0131",x:"Marsda b\u0259z\u0259n b\xFCt\xFCn planeti b\xFCr\xFCy\u0259n toz f\u0131rt\u0131nalar\u0131 olur. 2018-ci ild\u0259 bel\u0259 f\u0131rt\u0131na g\xFCn\u0259\u015F i\u015F\u0131\u011F\u0131n\u0131 aylarla k\u0259sdi v\u0259 g\xFCn\u0259\u015F batareyas\u0131 il\u0259 i\u015Fl\u0259y\u0259n Opportunity roveri susdu."},mars_delay:{t:"Marsla dan\u0131\u015Fmaq",x:"Siqnal Yerd\u0259n Marsa 3 d\u0259qiq\u0259 il\u0259 22 d\u0259qiq\u0259 aras\u0131nda gedir. Roveri canl\u0131 idar\u0259 etm\u0259k olmur. M\xFCh\u0259ndisl\u0259r ona b\xFCt\xFCn g\xFCn\xFCn tap\u015F\u0131r\u0131\u011F\u0131n\u0131 bir d\u0259f\u0259y\u0259 g\xF6nd\u0259rir."},mars_others:{t:"Marsda ba\u015Fqa kiml\u0259r var",x:"Mars\u0131n orbitind\u0259 AB\u015E, Avropa, Hindistan, B\u018F\u018F v\u0259 \xC7inin aparatlar\u0131 i\u015Fl\u0259yib. \xC7inin Zhurong roveri 2021-ci ilin may\u0131nda Utopiya d\xFCz\u0259nliyin\u0259 endi v\u0259 \xC7in Marsda rover i\u015Fl\u0259d\u0259n ikinci \xF6lk\u0259 oldu."},mars_persev:{t:"Perseverance v\u0259 Ingenuity",x:"Perseverance 2021-ci il fevral\u0131n 18-d\u0259 Yezero kraterin\u0259 endi v\u0259 Yer\u0259 g\u0259tirilm\u0259si n\u0259z\u0259rd\u0259 tutulan s\xFCxur n\xFCmun\u0259l\u0259rini toplay\u0131r. Arxadak\u0131 Ingenuity ba\u015Fqa planetd\u0259 u\xE7an ilk helikopterdir, 72 u\xE7u\u015F edib.",p:"persselfie"},mars_intro:{t:"Q\u0131rm\u0131z\u0131 planet",x:"Mars\u0131n diametri 6 779 kilometrdir, Yerin t\u0259xmin\u0259n yar\u0131s\u0131. R\u0259ngi s\u0259thind\u0259ki d\u0259mir oksidind\u0259n, y\u0259ni pasdan g\u0259lir. Bir Mars sutkas\u0131 24 saat 39 d\u0259qiq\u0259dir."},mars_valles:{t:"Marinerl\u0259r vadisi",x:"\u015E\u0259klin ortas\u0131ndak\u0131 \xE7ap\u0131q Marinerl\u0259r vadisidir: uzunlu\u011Fu 4 000 kilometr, d\u0259rinliyi 7 kilometr\u0259 q\u0259d\u0259r. Yerd\u0259 olsayd\u0131, Bak\u0131dan Londona q\u0259d\u0259r uzanard\u0131.",p:"marsglobe"},mars_olympus:{t:"Olimp da\u011F\u0131",x:"G\xFCn\u0259\u015F sisteminin \u0259n h\xFCnd\xFCr vulkan\u0131: t\u0259xmin\u0259n 22 kilometr, Everestd\u0259n iki yar\u0131m d\u0259f\u0259 uca. \u018Ft\u0259yinin eni 600 kilometrdir.",p:"olympus"},mars_moons:{t:"Fobos v\u0259 Deymos",x:"Mars\u0131n iki ki\xE7ik peyki var. Fobosun eni 22 kilometrdir v\u0259 o, planet\u0259 h\u0259r y\xFCz ild\u0259 t\u0259xmin\u0259n 2 metr yax\u0131nla\u015F\u0131r. On milyonlarla il sonra par\xE7alan\u0131b halqaya \xE7evril\u0259 bil\u0259r.",p:"phobos"},mars_atmo:{t:"Nazik atmosfer",x:"Mars\u0131n havas\u0131 95 faiz karbon qaz\u0131d\u0131r v\u0259 t\u0259zyiqi Yerd\u0259kinin y\xFCzd\u0259 birind\u0259n azd\u0131r. Orta temperatur m\u0259nfi 63 d\u0259r\u0259c\u0259dir. Maye su s\u0259thd\u0259 qala bilmir."},mars_water:{t:"Su hara getdi",x:"Mars\u0131n q\xFCtbl\u0259rind\u0259 su buzu v\u0259 quru buz papaqlar\u0131 var, torpa\u011F\u0131n alt\u0131nda da buz tap\u0131l\u0131b. Planet maqnit sah\u0259sini itir\u0259nd\u0259n sonra G\xFCn\u0259\u015F k\xFCl\u0259yi atmosferin \xE7oxunu f\u0259zaya sovurub."},mars_gravity:{t:"Marsda \xE7\u0259kin",x:"Mars\u0131n cazib\u0259si Yerd\u0259kinin 38 faizidir. Yerd\u0259 50 kiloqram g\u0259l\u0259n \u015Fagird oradak\u0131 t\u0259r\u0259zid\u0259 19 kiloqram g\xF6r\u0259r. H\xFCnd\xFCrl\xFCy\u0259 tullansan, t\u0259xmin\u0259n \xFC\xE7 d\u0259f\u0259 yuxar\u0131 qalxarsan."},mars_mro:{t:"MRO peyki",x:"Yan\u0131m\u0131zdak\u0131 Mars Reconnaissance Orbiter 2006-c\u0131 ild\u0259n Mars\u0131n orbitind\u0259dir. HiRISE kameras\u0131 s\u0259thd\u0259 30 santimetr \xF6l\xE7\xFCl\xFC cisiml\u0259ri ay\u0131rd edir, h\u0259tta roverl\u0259rin t\u0259k\u0259r izl\u0259rini g\xF6r\xFCr.",enc:"mro"},mars_edl:{t:"Yeddi d\u0259qiq\u0259lik eni\u015F",x:"Atmosfer\u0259 saatda 19 500 kilometr s\xFCr\u0259tl\u0259 gir\u0259n aparat yeddi d\u0259qiq\u0259y\u0259 dayanmal\u0131d\u0131r: \u0259vv\u0259l istilik qalxan\u0131, sonra 21,5 metrlik para\u015F\xFCt, sonda reaktiv kran. Bu real \u015F\u0259kild\u0259 MRO peyki Perseverance-i para\u015F\xFCtl\u0259 en\u0259rk\u0259n \xE7\u0259kib.",p:"hirisechute"},mars_jezero:{t:"Q\u0259dim \xE7ay deltas\u0131",x:"Yezero kraterind\u0259 3,5 milyard il \u0259vv\u0259l g\xF6l olub. \u015E\u0259kild\u0259ki t\u0259p\u0259 \xE7ay\u0131n g\xF6l\u0259 g\u0259tirdiyi \xE7\xF6k\xFCnt\xFCl\u0259rd\u0259n qal\u0131b. \u018Fg\u0259r Marsda n\u0259 vaxtsa mikroblar ya\u015Fay\u0131bsa, izl\u0259ri bel\u0259 yerl\u0259rd\u0259 qala bil\u0259r.",p:"jezero"},mars_sunset:{t:"Mavi q\xFCrub",x:"Yerd\u0259 s\u0259ma mavi, q\xFCrub q\u0131rm\u0131z\u0131d\u0131r. Marsda \u0259ksin\u0259dir: g\xFCnd\xFCz s\u0259ma sar\u0131mt\u0131l-q\u0259hv\u0259yi, g\xFCn\u0259\u015F batanda is\u0259 onun \u0259traf\u0131 mavi olur. S\u0259b\u0259b havadak\u0131 inc\u0259 tozdur. \u015E\u0259kli Curiosity \xE7\u0259kib.",p:"bluesunset"},v_inward:{t:"G\xFCn\u0259\u015F\u0259 do\u011Fru enm\u0259k",x:"Veneraya getm\u0259k \xFC\xE7\xFCn g\u0259mi Yerin orbit s\xFCr\u0259tin\u0259 n\u0259z\u0259r\u0259n yava\u015Flay\u0131r. Onda G\xFCn\u0259\u015Fin cazib\u0259si onu i\xE7\u0259riy\u0259, Veneran\u0131n orbitin\u0259 do\u011Fru \xE7\u0259kir. Biz Venus Express aparat\u0131n\u0131n 153 g\xFCnl\xFCk yolu il\u0259 gedirik."},v_window:{t:"584 g\xFCn",x:"Yer v\u0259 Venera h\u0259r 584 g\xFCnd\u0259n bir eyni qar\u015F\u0131l\u0131ql\u0131 m\xF6vqey\u0259 g\u0259lir v\u0259 u\xE7u\u015F p\u0259nc\u0259r\u0259si o zaman a\xE7\u0131l\u0131r. Venera Yer\u0259 \u0259n yax\u0131n planetdir: aram\u0131zdak\u0131 m\u0259saf\u0259 38 milyon kilometr\u0259 q\u0259d\u0259r azal\u0131r."},v_mariner2:{t:"\u0130lk planetl\u0259raras\u0131 u\u011Fur",x:"1962-ci il dekabr\u0131n 14-d\u0259 Mariner 2 Veneran\u0131n 34 800 kilometr yax\u0131nl\u0131\u011F\u0131ndan ke\xE7di. Bu, ba\u015Fqa planet\u0259 \xE7atan ilk u\u011Furlu missiya idi. Aparat Veneran\u0131n s\u0259thinin \xE7ox isti oldu\u011Funu \xF6l\xE7d\xFC."},v_phases:{t:"Dan ulduzu",x:"Venera g\xF6yd\u0259 G\xFCn\u0259\u015F v\u0259 Aydan sonra \u0259n parlaq cisimdir. 1610-cu ild\u0259 Qaliley teleskopla onun Ay kimi fazalar\u0131 oldu\u011Funu g\xF6rd\xFC. Bu, planetl\u0259rin G\xFCn\u0259\u015F \u0259traf\u0131nda doland\u0131\u011F\u0131n\u0131n s\xFCbutlar\u0131ndan biri oldu. \u015E\u0259kli 1974-c\xFC ild\u0259 Mariner 10 \xE7\u0259kib.",p:"venusm10"},v_venera:{t:"Venera aparatlar\u0131",x:"1970-ci il dekabr\u0131n 15-d\u0259 sovet aparat\u0131 Venera 7 ba\u015Fqa planetin s\u0259thind\u0259n ilk siqnal\u0131 g\xF6nd\u0259rdi v\u0259 23 d\u0259qiq\u0259 i\u015Fl\u0259di. 1982-ci ild\u0259 Venera 13 s\u0259thin ilk r\u0259ngli \u015F\u0259kill\u0259rini \xE7\u0259kdi v\u0259 127 d\u0259qiq\u0259 tab g\u0259tirdi."},v_vega:{t:"Veneran\u0131n s\u0259mas\u0131nda \u015Farlar",x:"1985-ci ild\u0259 sovet Veqa aparatlar\u0131 Veneran\u0131n atmosferin\u0259 iki hava \u015Far\u0131 buraxd\u0131. \u015Earlar 54 kilometr h\xFCnd\xFCrl\xFCkd\u0259, t\u0259zyiq v\u0259 temperaturun Yerd\u0259kin\u0259 yax\u0131n oldu\u011Fu qatda iki g\xFCn \xFCzd\xFC."},v_intro:{t:"Yerin \u0259kizi",x:"Veneran\u0131n diametri 12 104 kilometrdir, Yerinkinin 95 faizi. K\xFCtl\u0259si d\u0259 yax\u0131nd\u0131r. Amma ox\u015Farl\u0131q burada bitir."},v_hot:{t:"\u018Fn isti planet",x:"Veneran\u0131n s\u0259thind\u0259 temperatur 465 d\u0259r\u0259c\u0259dir, qur\u011Fu\u015Fun \u0259riyir. T\u0259zyiq Yerd\u0259kind\u0259n 92 d\u0259f\u0259 \xE7oxdur, okean\u0131n 900 metr d\u0259rinliyind\u0259ki kimi. G\xFCn\u0259\u015F\u0259 daha yax\u0131n olan Merkuri bel\u0259 bu q\u0259d\u0259r isti deyil."},v_day:{t:"G\xFCn\xFC ilind\u0259n uzun",x:"Venera \xF6z oxu \u0259traf\u0131nda 243 Yer g\xFCn\xFCn\u0259 bir d\u0259f\u0259, \xF6z\xFC d\u0259 t\u0259rsin\u0259 f\u0131rlan\u0131r. G\xFCn\u0259\u015F \u0259traf\u0131nda is\u0259 225 g\xFCn\u0259 dolan\u0131r. Orada G\xFCn\u0259\u015F q\u0259rbd\u0259n do\u011Fur."},v_clouds:{t:"Tur\u015Fu buludlar\u0131",x:"Planeti qal\u0131n sulfat tur\u015Fusu buludlar\u0131 \xF6rt\xFCr. Buludlar planetin \u0259traf\u0131nda d\xF6rd g\xFCn\u0259 dolan\u0131r, k\xFCl\u0259k saatda 360 kilometr\u0259 \xE7at\u0131r. S\u0259thi adi teleskopla g\xF6rm\u0259k olmur."},v_greenhouse:{t:"\u0130stixana effekti",x:"Veneran\u0131n atmosferi 96 faiz karbon qaz\u0131d\u0131r. O, G\xFCn\u0259\u015Fd\u0259n g\u0259l\u0259n istini i\xE7\u0259rid\u0259 saxlay\u0131r. Aliml\u0259r Yerin iqlimini daha yax\u015F\u0131 anlamaq \xFC\xE7\xFCn Veneran\u0131 \xF6yr\u0259nir."},v_magellan:{t:"Magellan",x:"Buludlar\u0131n alt\u0131n\u0131 yaln\u0131z radar g\xF6r\xFCr. Yan\u0131m\u0131zdak\u0131 Magellan aparat\u0131 1990-c\u0131 ild\u0259n 1994-c\xFC il\u0259 q\u0259d\u0259r s\u0259thin 98 faizinin x\u0259rit\u0259sini \xE7\u0259kdi. Bu \u015F\u0259kil h\u0259min radar m\u0259lumat\u0131ndan qurulub.",p:"venusradar",enc:"magellan"},v_maat:{t:"Maat da\u011F\u0131",x:"8 kilometr h\xFCnd\xFCrl\xFCy\xFCnd\u0259 vulkan. Magellan\u0131n k\xF6hn\u0259 \u015F\u0259kill\u0259rini yenid\u0259n ara\u015Fd\u0131ran aliml\u0259r 2023-c\xFC ild\u0259 burada bir vulkan a\u011Fz\u0131n\u0131n s\u0259kkiz ay \u0259rzind\u0259 d\u0259yi\u015Fdiyini tapd\u0131lar. Venera bu g\xFCn d\u0259 vulkanik c\u0259h\u0259td\u0259n f\u0259ald\u0131r. G\xF6r\xFCnt\xFC radar m\u0259lumat\u0131ndan qurulub.",p:"maat"},v_future:{t:"N\xF6vb\u0259ti missiyalar",x:"NASA-n\u0131n DAVINCI v\u0259 VERITAS, Avropan\u0131n EnVision aparatlar\u0131 Veneraya u\xE7ma\u011Fa haz\u0131rla\u015F\u0131r. \u018Fsas sual budur: Venera n\u0259 vaxtsa Yer kimi okeanl\u0131 planet olubmu?"},me_hard:{t:"\u018Fn \xE7\u0259tin h\u0259d\u0259f",x:"Merkuri yax\u0131n olsa da, orbitin\u0259 girm\u0259k Plutona \xE7atmaqdan \xE7ox enerji t\u0259l\u0259b edir. G\xFCn\u0259\u015F\u0259 d\xFC\u015Fd\xFCkc\u0259 g\u0259mi s\xFCr\u0259tl\u0259nir v\u0259 bu s\xFCr\u0259ti s\xF6nd\xFCrm\u0259k laz\u0131m g\u0259lir."},me_m10:{t:"Mariner 10",x:"1973-c\xFC ilin noyabr\u0131nda yola \xE7\u0131xan Mariner 10 Veneran\u0131n cazib\u0259sind\u0259n istifad\u0259 edib 146 g\xFCn\u0259 Merkuriy\u0259 \xE7atd\u0131. \xDC\xE7 d\u0259f\u0259 yan\u0131ndan ke\xE7di v\u0259 s\u0259thin 45 faizini \xE7\u0259kdi. Biz onun yolu il\u0259 gedirik.",p:"mercurym10"},me_venus:{t:"Veneran\u0131n yan\u0131ndan ke\xE7irik",x:"Veneran\u0131n cazib\u0259si g\u0259mini yava\u015Flad\u0131r v\u0259 yolunu G\xFCn\u0259\u015F\u0259 do\u011Fru \u0259yir. Mariner 10 bu manevri 1974-c\xFC il fevral\u0131n 5-d\u0259 etdi v\u0259 Veneran\u0131n buludlar\u0131n\u0131n ilk yax\u0131n \u015F\u0259kill\u0259rini \xE7\u0259kdi.",fly:"venus"},me_sun:{t:"G\xFCn\u0259\u015F",x:"G\xFCn\u0259\u015F sisteminin b\xFCt\xFCn k\xFCtl\u0259sinin 99,86 faizi G\xFCn\u0259\u015Fd\u0259dir. Diametri 1,39 milyon kilometrdir, i\xE7in\u0259 bir milyondan \xE7ox Yer s\u0131\u011Far. Merkurid\u0259n baxanda o, g\xF6yd\u0259 Yerd\u0259n g\xF6r\xFCnd\xFCy\xFCnd\u0259n t\u0259xmin\u0259n \xFC\xE7 d\u0259f\u0259 b\xF6y\xFCkd\xFCr.",p:"sun"},me_parker:{t:"G\xFCn\u0259\u015F\u0259 toxunan aparat",x:"Yan\u0131m\u0131zdak\u0131 Parker Solar Probe 2024-c\xFC il dekabr\u0131n 24-d\u0259 G\xFCn\u0259\u015Fin s\u0259thin\u0259 6,1 milyon kilometr yax\u0131nla\u015Fd\u0131. S\xFCr\u0259ti saatda 692 000 kilometr oldu. Bu, insan\u0131n d\xFCz\u0259ltdiyi \u0259n s\xFCr\u0259tli cisimdir.",p:"parker",enc:"parker"},me_einstein:{t:"Eyn\u015Fteyni t\u0259sdiql\u0259y\u0259n planet",x:"Merkurinin orbiti h\u0259r d\xF6vr\u0259d\u0259 bir az d\xF6n\xFCr v\u0259 Nyuton qanunlar\u0131 bunu tam izah ed\u0259 bilmirdi. 1915-ci ild\u0259 Eyn\u015Fteynin \xFCmumi nisbilik n\u0259z\u0259riyy\u0259si f\u0259rqi d\u0259qiq hesablad\u0131."},me_intro:{t:"\u018Fn ki\xE7ik planet",x:"Merkurinin diametri 4 879 kilometrdir, Aydan bir q\u0259d\u0259r b\xF6y\xFCk. G\xFCn\u0259\u015F \u0259traf\u0131nda 88 g\xFCn\u0259 dolan\u0131r. Planetl\u0259r aras\u0131nda \u0259n s\xFCr\u0259tlisidir: saniy\u0259d\u0259 47 kilometr. \u015E\u0259kil MESSENGER-in orbitd\u0259n \xE7\u0259kdiyi ilk r\u0259ngli kadrd\u0131r.",p:"mercury"},me_day:{t:"Bir g\xFCn iki il \xE7\u0259kir",x:"Merkuri G\xFCn\u0259\u015F \u0259traf\u0131nda iki d\xF6vr\u0259 vuranda \xF6z oxu \u0259traf\u0131nda d\xFCz \xFC\xE7 d\u0259f\u0259 f\u0131rlan\u0131r. N\u0259tic\u0259d\u0259 bir g\xFCn\u0259\u015F do\u011Fu\u015Fundan o birin\u0259 176 Yer g\xFCn\xFC ke\xE7ir."},me_temp:{t:"\u0130sti v\u0259 soyuq",x:"Atmosferi olmad\u0131\u011F\u0131 \xFC\xE7\xFCn g\xFCnd\xFCz s\u0259th 430 d\u0259r\u0259c\u0259y\u0259 q\u0259d\u0259r q\u0131z\u0131r, gec\u0259 m\u0259nfi 180-\u0259 q\u0259d\u0259r soyuyur. Q\xFCtbl\u0259rd\u0259ki \u0259b\u0259di k\xF6lg\u0259li kraterl\u0259rd\u0259 is\u0259 su buzu var."},me_bepi:{t:"BepiColombo",x:"Avropa v\u0259 Yaponiyan\u0131n birg\u0259 aparat\u0131 2018-ci ilin oktyabr\u0131nda start g\xF6t\xFCr\xFCb. S\u0259kkiz illik yoldan sonra 2026-c\u0131 ilin noyabr\u0131nda Merkuri orbitin\u0259 girm\u0259si planla\u015Fd\u0131r\u0131l\u0131b. Orada iki ayr\u0131 peyk\u0259 b\xF6l\xFCn\u0259c\u0259k."},me_core:{t:"N\u0259h\u0259ng d\u0259mir n\xFCv\u0259",x:"Merkurinin n\xFCv\u0259si planetin radiusunun t\u0259xmin\u0259n 85 faizini tutur. Ola bilsin, q\u0259dim bir toqqu\u015Fma onun \xFCst qatlar\u0131n\u0131 qopar\u0131b. Z\u0259if d\u0259 olsa maqnit sah\u0259si var."},me_caloris:{t:"Kaloris h\xF6vz\u0259si",x:"Eni 1 550 kilometr olan bu \xE7\xF6k\u0259k t\u0259xmin\u0259n 3,9 milyard il \u0259vv\u0259l n\u0259h\u0259ng bir asteroidin z\u0259rb\u0259sind\u0259n yaran\u0131b. R\u0259ngl\u0259r s\xFCxurlar\u0131n f\u0259rqini g\xF6st\u0259rm\u0259k \xFC\xE7\xFCn g\xFCcl\u0259ndirilib.",p:"caloris"},me_nizami:{t:"Nizami krateri",x:"Merkurid\u0259ki kraterl\u0259r\u0259 \u015Fair, r\u0259ssam v\u0259 b\u0259st\u0259karlar\u0131n ad\u0131 verilir. \u015Eimal q\xFCtb\xFCn\u0259 yax\u0131n 77 kilometrlik krater 1979-cu ild\u0259n Nizami G\u0259nc\u0259vinin ad\u0131n\u0131 da\u015F\u0131y\u0131r."},me_messenger:{t:"MESSENGER",x:"Yan\u0131m\u0131zdak\u0131 MESSENGER 2004-c\xFC ild\u0259 yola \xE7\u0131xd\u0131 v\u0259 alt\u0131 il yar\u0131m \u0259rzind\u0259 Yer, Venera v\u0259 Merkurinin yan\u0131ndan alt\u0131 d\u0259f\u0259 ke\xE7ib s\xFCr\u0259tini azaltd\u0131. 2011-ci il mart\u0131n 18-d\u0259 Merkurinin ilk s\xFCni peyki oldu v\u0259 d\xF6rd il i\u015Fl\u0259di.",enc:"messenger"},l_tli:{t:"Aya do\u011Fru",x:"M\xFCh\u0259rrik t\u0259xmin\u0259n alt\u0131 d\u0259qiq\u0259y\u0259 g\u0259mini saniy\u0259d\u0259 10,9 kilometr s\xFCr\u0259t\u0259 \xE7atd\u0131r\u0131r. Apollo 11 bu manevri startdan 2 saat 44 d\u0259qiq\u0259 sonra, Yer \u0259traf\u0131nda bir d\xF6vr\u0259 yar\u0131mdan sonra etdi."},l_coast:{t:"\xDC\xE7 g\xFCnl\xFCk yol",x:"M\xFCh\u0259rrik s\xF6n\xFCb, g\u0259mi \u0259tal\u0259tl\u0259 gedir. Yerin cazib\u0259si onu getdikc\u0259 yava\u015Flad\u0131r: saniy\u0259d\u0259 10,9 kilometrd\u0259n bir kilometr\u0259 q\u0259d\u0259r. Apollo 11 Ay orbitin\u0259 76 saata \xE7atd\u0131."},l_intro:{t:"Ay",x:"Ay\u0131n diametri 3 474 kilometrdir, Yerin d\xF6rdd\u0259 biri. Cazib\u0259si alt\u0131 d\u0259f\u0259 z\u0259ifdir. Yerd\u0259 50 kiloqram g\u0259l\u0259n \u015Fagird Aydak\u0131 t\u0259r\u0259zid\u0259 8 kiloqramdan bir az \xE7ox g\xF6r\u0259r."},l_origin:{t:"Ay nec\u0259 yaran\u0131b",x:"T\u0259xmin\u0259n 4,5 milyard il \u0259vv\u0259l Mars boyda bir cisim g\u0259nc Yer\u0259 \xE7\u0131rp\u0131l\u0131b. F\u0259zaya s\u0259p\u0259l\u0259n\u0259n \u0259rimi\u015F s\xFCxurlar bir yer\u0259 y\u0131\u011F\u0131\u015F\u0131b Ay\u0131 \u0259m\u0259l\u0259 g\u0259tirib. Apollo n\xFCmun\u0259l\u0259ri bu f\u0259rziyy\u0259ni d\u0259st\u0259kl\u0259yir."},l_tides:{t:"Qabarma v\u0259 \xE7\u0259kilm\u0259",x:"D\u0259nizl\u0259rin qabarmas\u0131n\u0131 Ay\u0131n cazib\u0259si yarad\u0131r. Bu s\xFCrt\xFCnm\u0259 Yerin f\u0131rlanmas\u0131n\u0131 yava\u015Flad\u0131r, Ay is\u0259 h\u0259r il bizd\u0259n 3,8 santimetr uzaqla\u015F\u0131r. Bunu Ayda qoyulmu\u015F g\xFCzg\xFCl\u0259r\u0259 lazer vurub \xF6l\xE7\xFCrl\u0259r."},l_luna:{t:"\u0130lk toxunu\u015Flar",x:"1959-cu ild\u0259 sovet Luna 2 aparat\u0131 Aya \xE7atan ilk cisim oldu. 1966-c\u0131 il fevral\u0131n 3-d\u0259 Luna 9 ilk d\u0259f\u0259 yum\u015Faq endi v\u0259 s\u0259thd\u0259n \u015F\u0259kil g\xF6nd\u0259rdi. O vaxta q\u0259d\u0259r b\u0259zil\u0259ri Ay\u0131n s\u0259thinin d\u0259rin toz qat\u0131 oldu\u011Funu d\xFC\u015F\xFCn\xFCrd\xFC."},l_lunokhod:{t:"Lunoxod",x:"Ba\u015Fqa g\xF6y cismind\u0259 i\u015Fl\u0259y\u0259n ilk t\u0259k\u0259rli robot sovet Lunoxod 1 idi. 1970-ci ilin noyabr\u0131nda endi v\u0259 on ay \u0259rzind\u0259 10,5 kilometr yol getdi. Onu Yerd\u0259n televiziya kameras\u0131 il\u0259 idar\u0259 edirdil\u0259r."},l_apollo11:{t:"Apollo 11",x:"1969-cu il iyulun 20-d\u0259 Nil Armstronq v\u0259 Baz Oldrin Sakitlik d\u0259nizin\u0259 endil\u0259r, Maykl Kollinz orbitd\u0259 g\xF6zl\u0259di. \u015E\u0259kild\u0259 Oldrindir. D\u0259bilq\u0259sinin \u015F\xFC\u015F\u0259sind\u0259 \u015F\u0259kli \xE7\u0259k\u0259n Armstronq \u0259ks olunub.",p:"aldrin"},l_boot:{t:"Milyon illik iz",x:"Ayda k\xFCl\u0259k v\u0259 ya\u011F\u0131\u015F yoxdur. Oldrinin 1969-cu ild\u0259 Ay tozunda qoydu\u011Fu bu ayaq izi milyon ill\u0259rl\u0259 pozulmadan qala bil\u0259r.",p:"bootprint"},l_apollo:{t:"On iki insan",x:"1969-cu ild\u0259n 1972-ci il\u0259 q\u0259d\u0259r alt\u0131 Apollo ekspedisiyas\u0131 Aya endi v\u0259 s\u0259thd\u0259 12 n\u0259f\u0259r g\u0259zdi. Onlar Yer\u0259 382 kiloqram Ay s\xFCxuru g\u0259tirdil\u0259r. Son \xFC\xE7 ekspedisiyada astronavtlar elektrik avtomobili s\xFCr\xFCrd\xFCl\u0259r. \u015E\u0259kild\u0259 Apollo 17-d\u0259n Yucin Sernand\u0131r.",p:"a17rover"},l_earthrise:{t:"Yerin do\u011Fu\u015Fu",x:"1968-ci il dekabr\u0131n 24-d\u0259 Apollo 8 hey\u0259ti Ay orbitind\u0259n bu \u015F\u0259kli \xE7\u0259kdi. Onlar Yerd\u0259n ayr\u0131l\u0131b ba\u015Fqa g\xF6y cisminin \u0259traf\u0131na dolanan ilk insanlar idi.",p:"earthrise"},l_farside:{t:"Ay\u0131n \u0259ks t\u0259r\u0259fi",x:"Ay Yer\u0259 h\u0259mi\u015F\u0259 eyni \xFCz\xFCn\xFC g\xF6st\u0259rir. \u018Fks t\u0259r\u0259fi ilk d\u0259f\u0259 1959-cu ild\u0259 Luna 3 \xE7\u0259kib. 2024-c\xFC ild\u0259 \xC7inin Chang\u2019e 6 aparat\u0131 oradan Yer\u0259 1 935 qram n\xFCmun\u0259 g\u0259tirdi. \u015E\u0259kli 2026-c\u0131 ilin aprelind\u0259 Artemis II hey\u0259ti \xE7\u0259kib.",p:"artemis2moon"},l_loi:{t:"Ay orbitin\u0259 giri\u015F",x:"G\u0259mi Ay\u0131n arxas\u0131na ke\xE7ir v\u0259 Yerl\u0259 rabit\u0259 k\u0259silir. M\xFCh\u0259rrik d\xFCz vaxt\u0131nda i\u015Fl\u0259m\u0259lidir ki, s\xFCr\u0259t azals\u0131n v\u0259 Ay\u0131n cazib\u0259si g\u0259mini tuta bilsin."},l_maria:{t:"D\u0259nizl\u0259r v\u0259 kraterl\u0259r",x:"Ay\u0131n t\xFCnd l\u0259k\u0259l\u0259ri d\u0259niz adlansa da, donmu\u015F lava d\xFCz\u0259nlikl\u0259ridir. A\xE7\u0131q r\u0259ngli da\u011Fl\u0131q yerl\u0259r daha q\u0259dimdir. \u015E\u0259kild\u0259 Tixo kraterinin 2 kilometr h\xFCnd\xFCrl\xFCy\xFCnd\u0259 m\u0259rk\u0259zi zirv\u0259si g\xF6r\xFCn\xFCr.",p:"tycho"},l_nasireddin:{t:"N\u0259sir\u0259ddin krateri",x:"Ay\u0131n c\u0259nub yar\u0131mk\xFCr\u0259sind\u0259ki 52 kilometrlik krater N\u0259sir\u0259ddin Tusinin ad\u0131n\u0131 da\u015F\u0131y\u0131r. XIII \u0259srd\u0259 Mara\u011Fa r\u0259s\u0259dxanas\u0131n\u0131 quran alimin ad\u0131 \u015Eamax\u0131 Astrofizika R\u0259s\u0259dxanas\u0131na da verilib."},l_lro:{t:"LRO peyki",x:"Yan\u0131m\u0131zdak\u0131 Lunar Reconnaissance Orbiter 2009-cu ild\u0259n Ay\u0131n x\u0259rit\u0259sini \xE7\u0259kir. Onun bu \u015F\u0259klind\u0259 Apollo 11-in eni\u015F pill\u0259si v\u0259 astronavtlar\u0131n c\u0131\u011F\u0131rlar\u0131 g\xF6r\xFCn\xFCr.",p:"lroa11",enc:"lro"},l_water:{t:"C\u0259nub q\xFCtb\xFCnd\u0259 buz",x:"Ay\u0131n q\xFCtbl\u0259rind\u0259 G\xFCn\u0259\u015F he\xE7 vaxt d\xFC\u015Fm\u0259y\u0259n kraterl\u0259r var v\u0259 orada su buzu saxlan\u0131l\u0131b. 2023-c\xFC il avqustun 23-d\u0259 Hindistan\u0131n Chandrayaan-3 aparat\u0131 c\u0259nub q\xFCtb\xFC yax\u0131nl\u0131\u011F\u0131na en\u0259n ilk aparat oldu."},l_temp:{t:"\u0130sti g\xFCn, soyuq gec\u0259",x:"Ayda g\xFCnd\xFCz iki h\u0259ft\u0259 \xE7\u0259kir v\u0259 s\u0259th 120 d\u0259r\u0259c\u0259y\u0259 q\u0259d\u0259r q\u0131z\u0131r. \u0130ki h\u0259ft\u0259lik gec\u0259d\u0259 temperatur m\u0259nfi 170-\u0259 d\xFC\u015F\xFCr. Havas\u0131 olmad\u0131\u011F\u0131 \xFC\xE7\xFCn g\xF6y g\xFCnd\xFCz d\u0259 qarad\u0131r."},l_artemis:{t:"Artemis II",x:"2026-c\u0131 ilin aprelind\u0259 d\xF6rd astronavt Orion g\u0259misind\u0259 Ay\u0131n \u0259traf\u0131ndan dolan\u0131b qay\u0131td\u0131. Onlar Yerd\u0259n 406 771 kilometr uzaqla\u015Faraq Apollo 13-\xFCn 1970-ci il rekordunu t\u0259z\u0259l\u0259dil\u0259r. Yerin Ay\u0131n arxas\u0131nda batmas\u0131n\u0131 g\xF6st\u0259r\u0259n bu \u015F\u0259kli h\u0259min u\xE7u\u015Fda \xE7\u0259kibl\u0259r.",p:"artemis2"},l_commercial:{t:"\xD6z\u0259l \u015Firk\u0259tl\u0259r Ayda",x:"2024-c\xFC ilin fevral\u0131nda Odysseus Aya en\u0259n ilk \xF6z\u0259l aparat oldu. 2025-ci il mart\u0131n 2-d\u0259 Blue Ghost B\xF6hranlar d\u0259nizin\u0259 tam u\u011Furla endi v\u0259 iki h\u0259ft\u0259 i\u015Fl\u0259di."},l_descent:{t:"Eni\u015F\u0259 haz\u0131rl\u0131q",x:"Bu real \u015F\u0259kild\u0259 Apollo 11-in Qartal modulu Ay s\u0259thind\u0259n qalx\u0131b orbitd\u0259ki g\u0259miy\u0259 qay\u0131d\u0131r, arxada Yer do\u011Fur. Kadr\u0131 orbitd\u0259 t\u0259k qalan Maykl Kollinz \xE7\u0259kib.",p:"eagle"},k_chase:{t:"Stansiyan\u0131 qovmaq",x:"BKS-\u0259 birba\u015Fa u\xE7maq olmur. G\u0259mi \u0259vv\u0259l a\u015Fa\u011F\u0131 orbit\u0259 \xE7\u0131x\u0131r, orada daha s\xFCr\u0259tli dolan\u0131b stansiyaya \xE7at\u0131r. 2020-ci ilin oktyabr\u0131nda Soyuz MS-17 bu yolu rekord vaxta, 3 saat 3 d\u0259qiq\u0259y\u0259 getdi."},k_intro:{t:"Orbitd\u0259ki ev",x:"BKS-in eni 109 metr, k\xFCtl\u0259si 420 tondur. \u0130\xE7ind\u0259ki ya\u015Fay\u0131\u015F h\u0259cmi alt\u0131 otaql\u0131 ev q\u0259d\u0259rdir. Stansiya 400 kilometr h\xFCnd\xFCrl\xFCkd\u0259 saatda 27 600 kilometr s\xFCr\u0259tl\u0259 u\xE7ur.",p:"iss_earth"},k_zarya:{t:"\u0130lk iki modul",x:"Tikinti 1998-ci il noyabr\u0131n 20-d\u0259 Zarya modulunun burax\u0131lmas\u0131 il\u0259 ba\u015Flad\u0131. \u0130ki h\u0259ft\u0259 sonra ona Unity birl\u0259\u015Fdirildi. \u015E\u0259kil h\u0259min g\xFCnl\u0259rd\u0259 Endeavour g\u0259misinin p\u0259nc\u0259r\u0259sind\u0259n \xE7\u0259kilib.",p:"zarya"},k_crew:{t:"2000-ci ild\u0259n fasil\u0259siz",x:"2000-ci il noyabr\u0131n 2-d\u0259n b\u0259ri stansiyada bir g\xFCn bel\u0259 insans\u0131z ke\xE7m\u0259yib. Bu m\xFCdd\u0259td\u0259 20-d\u0259n \xE7ox \xF6lk\u0259d\u0259n 280-d\u0259n art\u0131q insan orada olub."},k_partners:{t:"Be\u015F kosmik agentlik",x:"Stansiyan\u0131 AB\u015E, Rusiya, Avropa, Yaponiya v\u0259 Kanada birlikd\u0259 qurub idar\u0259 edir. Hiss\u0259l\u0259ri m\xFCxt\u0259lif \xF6lk\u0259l\u0259rd\u0259 haz\u0131rlan\u0131b v\u0259 ilk d\u0259f\u0259 orbitd\u0259 bir-birin\u0259 birl\u0259\u015Fdirilib."},k_life:{t:"Stansiyada bir g\xFCn",x:"\xC7\u0259kisizlikd\u0259 \u0259z\u0259l\u0259 v\u0259 s\xFCm\xFCkl\u0259r z\u0259ifl\u0259yir, ona g\xF6r\u0259 hey\u0259t h\u0259r g\xFCn iki saat idman edir. Yataq divara ba\u011Flanm\u0131\u015F kis\u0259dir. Su damc\u0131lar\u0131 havada k\xFCr\u0259 kimi \xFCz\xFCr."},k_water:{t:"Su d\xF6vran\u0131",x:"Stansiyada suyun t\u0259xmin\u0259n 98 faizi t\u0259krar istifad\u0259 olunur. Havadak\u0131 n\u0259m, t\u0259r v\u0259 h\u0259tta sidik t\u0259mizl\u0259nib i\xE7m\u0259li suya \xE7evrilir."},k_science:{t:"Orbitd\u0259 laboratoriya",x:"Stansiyada 3 000-d\u0259n \xE7ox t\u0259cr\xFCb\u0259 apar\u0131l\u0131b: \xE7\u0259kisizlikd\u0259 kristallar, bitkil\u0259r, alov v\u0259 insan orqanizmi \xF6yr\u0259nilir. Hey\u0259t burada salat v\u0259 bib\u0259r yeti\u015Fdirib yeyib."},k_power:{t:"G\xFCn\u0259\u015F batareyalar\u0131",x:"Stansiyan\u0131 s\u0259kkiz b\xF6y\xFCk g\xFCn\u0259\u015F qanad\u0131 enerji il\u0259 t\u0259min edir. H\u0259r d\xF6vr\u0259nin t\u0259xmin\u0259n \xFC\xE7d\u0259 birind\u0259 stansiya Yerin k\xF6lg\u0259sind\u0259 olur v\u0259 akkumulyatorlarla i\u015Fl\u0259yir."},k_eva:{t:"A\xE7\u0131q kosmosda",x:"Stansiyadan k\u0259narda i\u015F alt\u0131-s\u0259kkiz saat \xE7\u0259kir. Skafandr ki\xE7ik bir kosmik g\u0259midir: hava verir, t\u0259zyiqi v\u0259 temperaturu saxlay\u0131r. A\xE7\u0131q kosmosa ilk d\u0259f\u0259 1965-ci ild\u0259 Aleksey Leonov \xE7\u0131x\u0131b.",p:"spacewalk"},k_records:{t:"Rekordlar",x:"Kosmosda fasil\u0259siz \u0259n uzun qalan insan Valeri Polyakovdur: 1994\u20131995-ci ill\u0259rd\u0259 Mir stansiyas\u0131nda 437 g\xFCn. BKS-d\u0259 \u0259n uzun u\xE7u\u015F 371 g\xFCn \xE7\u0259kib."},k_salyut:{t:"\u0130lk stansiyalar",x:"D\xFCnyan\u0131n ilk orbital stansiyas\u0131 Salyut 1 1971-ci ild\u0259 burax\u0131l\u0131b. 1986-c\u0131 ild\u0259n 2001-ci il\u0259 q\u0259d\u0259r Mir stansiyas\u0131 i\u015Fl\u0259yib. \xC7inin Tiangong stansiyas\u0131 2021-ci ild\u0259n orbitd\u0259dir."},k_visible:{t:"Yerd\u0259n g\xF6r\xFCn\xFCr",x:"BKS gec\u0259 s\u0259mas\u0131nda \u0259n parlaq ulduzlardan da parlaq n\xF6qt\u0259 kimi g\xF6r\xFCn\xFCr v\u0259 bir ne\xE7\u0259 d\u0259qiq\u0259y\u0259 g\xF6y\xFC ke\xE7ir. Onu Az\u0259rbaycandan da adi g\xF6zl\u0259 m\xFC\u015Fahid\u0259 etm\u0259k olar."},k_future:{t:"Stansiyan\u0131n sonu",x:"BKS-in 2030-cu il\u0259 q\u0259d\u0259r i\u015Fl\u0259m\u0259si planla\u015Fd\u0131r\u0131l\u0131b. Sonra x\xFCsusi g\u0259mi onu Sakit okean\u0131n \u0259n ucqar yeri olan Nemo n\xF6qt\u0259sinin \xFCz\u0259rind\u0259 atmosfer\u0259 endir\u0259c\u0259k."},k_dragon:{t:"Stansiyaya g\u0259l\u0259nl\u0259r",x:"Hey\u0259ti bu g\xFCn Soyuz v\u0259 Crew Dragon g\u0259mil\u0259ri da\u015F\u0131y\u0131r. Y\xFCk g\u0259mil\u0259ri \u0259rzaq, su v\u0259 t\u0259cr\xFCb\u0259 avadanl\u0131\u011F\u0131 g\u0259tirir. \u015E\u0259kild\u0259 Dragon g\u0259misi stansiyaya yax\u0131nla\u015F\u0131r.",p:"dragon"},k_cupola:{t:"G\xFCnb\u0259z",x:"Yeddi p\u0259nc\u0259r\u0259li bu modul stansiyan\u0131n m\xFC\u015Fahid\u0259 ota\u011F\u0131d\u0131r. Hey\u0259t buradan Yeri seyr edir v\u0259 robot qolu idar\u0259 edir."},k_dock:{t:"Birl\u0259\u015Fm\u0259",x:"Son metrl\u0259rd\u0259 g\u0259mi stansiyaya saniy\u0259d\u0259 c\u0259mi bir ne\xE7\u0259 santimetr s\xFCr\u0259tl\u0259 yax\u0131nla\u015F\u0131r. H\u0259r ikisi is\u0259 Yer \u0259traf\u0131nda saniy\u0259d\u0259 7,7 kilometr s\xFCr\u0259tl\u0259 u\xE7ur."},x_marscross:{t:"Mars\u0131n orbitini ke\xE7dik",x:"G\xFCn\u0259\u015Fd\u0259n 228 milyon kilometr. Mars \xF6z\xFC indi orbitinin ba\u015Fqa yerind\u0259dir. Buradan baxanda G\xFCn\u0259\u015F Yerd\u0259kinin yar\u0131s\u0131ndan az i\u015F\u0131q verir."},b_enter:{t:"Asteroid qur\u015Fa\u011F\u0131",x:"Mars v\u0259 Yupiter aras\u0131nda milyonlarla da\u015F v\u0259 metal par\xE7as\u0131 G\xFCn\u0259\u015F \u0259traf\u0131nda dolan\u0131r. Bu g\xFCn\u0259 q\u0259d\u0259r 1,4 milyondan \xE7ox asteroid qeyd\u0259 al\u0131n\u0131b. Qur\u015Fa\u011F\u0131 ilk d\u0259f\u0259 1972-ci ild\u0259 Pioneer 10 ke\xE7ib. Yan\u0131m\u0131zdak\u0131 onun modelidir.",enc:"pioneer"},b_empty:{t:"Filml\u0259rd\u0259ki kimi deyil",x:"Asteroidl\u0259rin aras\u0131 orta hesabla bir milyon kilometrdir. Qur\u015Faqdan ke\xE7\u0259n he\xE7 bir aparat toqqu\u015Fmay\u0131b. B\xFCt\xFCn asteroidl\u0259rin k\xFCtl\u0259si birlikd\u0259 Ay\u0131n k\xFCtl\u0259sinin c\u0259mi 3 faizidir."},b_vesta:{t:"Vesta",x:"525 kilometrlik bu asteroidin c\u0259nub q\xFCtb\xFCnd\u0259 505 kilometr enind\u0259 z\u0259rb\u0259 krateri var. M\u0259rk\u0259zind\u0259ki da\u011F 22 kilometr h\xFCnd\xFCrd\xFCr. Yer\u0259 d\xFC\u015F\u0259n meteoritl\u0259rin t\u0259xmin\u0259n 6 faizi Vestadan qopub.",p:"vesta"},b_ida:{t:"Peyki olan asteroid",x:"1993-c\xFC ild\u0259 Galileo aparat\u0131 Yupiter\u0259 ged\u0259rk\u0259n \u0130da asteroidinin yan\u0131ndan ke\xE7di v\u0259 g\xF6zl\u0259nilm\u0259z bir \u015Fey tapd\u0131: onun 1,4 kilometrlik \xF6z peyki var. Ad\u0131n\u0131 Daktil qoydular. \u015E\u0259kild\u0259 sa\u011Fdak\u0131 ki\xE7ik n\xF6qt\u0259dir.",p:"ida"},b_ceres:{t:"Serera",x:"Qur\u015Fa\u011F\u0131n \u0259n b\xF6y\xFCk cismi, 940 kilometr diametrli c\u0131rtdan planet. 1801-ci il yanvar\u0131n 1-d\u0259 C\xFCzeppe Piatsi k\u0259\u015Ff edib. Dawn aparat\u0131n\u0131n \xE7\u0259kdiyi parlaq l\u0259k\u0259l\u0259r yeralt\u0131 duzlu sudan qalm\u0131\u015F duzdur.",p:"occator"},b_dawn:{t:"Dawn missiyas\u0131",x:"Yan\u0131m\u0131zdak\u0131 Dawn ion m\xFCh\u0259rriki il\u0259 i\u015Fl\u0259yirdi: it\u0259l\u0259m\u0259si bir v\u0259r\u0259q ka\u011F\u0131z\u0131n \xE7\u0259kisi q\u0259d\u0259r idi, amma ill\u0259rl\u0259 fasil\u0259siz i\u015Fl\u0259yirdi. 2011-ci ild\u0259 Vestan\u0131n, 2015-ci ild\u0259 Sereran\u0131n orbitin\u0259 girdi. \u0130ki g\xF6y cisminin \u0259traf\u0131nda dolanan ilk aparatd\u0131r.",enc:"dawn"},b_kirkwood:{t:"Yupiterin izi",x:"Qur\u015Faqda b\u0259zi m\u0259saf\u0259l\u0259rd\u0259 asteroid dem\u0259k olar yoxdur. H\u0259min orbitl\u0259rd\u0259 dolanma m\xFCdd\u0259ti Yupiterinki il\u0259 sad\u0259 nisb\u0259td\u0259 olur v\u0259 n\u0259h\u0259ng planetin cazib\u0259si oradak\u0131 cisiml\u0259ri k\u0259nara at\u0131b. Bunu 1866-c\u0131 ild\u0259 Daniel Kirkvud tap\u0131b."},b_origin:{t:"Yaranmam\u0131\u015F planet",x:"Qur\u015Faq da\u011F\u0131lm\u0131\u015F planetin qal\u0131\u011F\u0131 deyil. G\xFCn\u0259\u015F sistemi yarananda Yupiterin cazib\u0259si buradak\u0131 par\xE7alar\u0131n birl\u0259\u015Fib planet\u0259 \xE7evrilm\u0259sin\u0259 imkan verm\u0259yib."},j_trojans:{t:"Troya asteroidl\u0259ri",x:"Yupiterin orbitind\u0259, ondan 60\xB0 \xF6nd\u0259 v\u0259 arxada iki asteroid d\u0259st\u0259si dolan\u0131r. NASA-n\u0131n Lucy aparat\u0131 2027-ci ild\u0259n onlar\u0131 yax\u0131ndan \xF6yr\u0259n\u0259n ilk aparat olacaq."},j_approach:{t:"Yupiter",x:"G\xFCn\u0259\u015F sisteminin \u0259n b\xF6y\xFCk planeti. Diametri 139 820 kilometrdir, Yerd\u0259n 11 d\u0259f\u0259 enli. K\xFCtl\u0259si qalan b\xFCt\xFCn planetl\u0259rin birlikd\u0259 k\xFCtl\u0259sind\u0259n iki yar\u0131m d\u0259f\u0259 \xE7oxdur. \u015E\u0259kli Juno \xE7\u0259kib.",p:"jupiter",fly:"jupiter"},j_gas:{t:"S\u0259thi olmayan planet",x:"Yupiter \u0259sas\u0259n hidrogen v\u0259 heliumdan ibar\u0259tdir. Enm\u0259k \xFC\xE7\xFCn b\u0259rk s\u0259th yoxdur: a\u015Fa\u011F\u0131 d\xFC\u015Fd\xFCkc\u0259 qaz s\u0131xla\u015F\u0131b mayey\u0259 \xE7evrilir. \xD6z oxu \u0259traf\u0131nda 10 saata f\u0131rlan\u0131r, planetl\u0259r aras\u0131nda \u0259n s\xFCr\u0259tli."},j_missions:{t:"Yupiter\u0259 ged\u0259nl\u0259r",x:"\u0130lk d\u0259f\u0259 1973-c\xFC ild\u0259 Pioneer 10 yan\u0131ndan ke\xE7ib. Voyager 1 bu yolu 18 aya g\u0259ldi. Galileo 1995-ci ild\u0259n 2003-c\xFC il\u0259 q\u0259d\u0259r orbitind\u0259 i\u015Fl\u0259di. Juno 2016-c\u0131 ild\u0259n q\xFCtbl\u0259ri \xFCz\u0259rind\u0259n u\xE7ur. \u015E\u0259kli 1979-cu ild\u0259 Voyager 1 \xE7\u0259kib: \xF6nd\u0259 \u0130o v\u0259 Avropa peykl\u0259ri.",p:"voyjup"},j_magneto:{t:"G\xF6r\xFCnm\u0259z t\u0259hl\xFCk\u0259",x:"Yupiterin maqnit sah\u0259si Yerinkind\u0259n t\u0259xmin\u0259n 20 000 d\u0259f\u0259 g\xFCcl\xFCd\xFCr. \u018Ftraf\u0131ndak\u0131 radiasiya qur\u015Faqlar\u0131 elektronikan\u0131 tez s\u0131radan \xE7\u0131xar\u0131r, ona g\xF6r\u0259 Juno-nun komp\xFCteri titan zirehin i\xE7ind\u0259dir."},j_moons:{t:"Y\xFCzd\u0259n \xE7ox peyk",x:"2026-c\u0131 il\u0259 q\u0259d\u0259r Yupiterin y\xFCzd\u0259n art\u0131q peyki tap\u0131l\u0131b. \xC7oxu bir ne\xE7\u0259 kilometrlik, tutulmu\u015F asteroidl\u0259rdir. Nazik, t\xFCnd halqas\u0131 da var, onu 1979-cu ild\u0259 Voyager 1 k\u0259\u015Ff edib."},j_grs:{t:"B\xF6y\xFCk Q\u0131rm\u0131z\u0131 L\u0259k\u0259",x:"\u018Fn az\u0131 150 ildir s\xF6nm\u0259y\u0259n qas\u0131r\u011Fa. \u0130\xE7in\u0259 Yer k\xFCr\u0259si s\u0131\u011Far. K\xFCl\u0259kl\u0259rin s\xFCr\u0259ti saatda 400 kilometrd\u0259n \xE7oxdur. Son onillikl\u0259rd\u0259 l\u0259k\u0259 ki\xE7ilir.",p:"grs"},j_io:{t:"\u0130o",x:"G\xFCn\u0259\u015F sisteminin vulkanik c\u0259h\u0259td\u0259n \u0259n f\u0259al cismi. Yupiterin cazib\u0259si onu daim s\u0131x\u0131b-burax\u0131r v\u0259 i\xE7ini q\u0131zd\u0131r\u0131r. 400-d\u0259n \xE7ox f\u0259al vulkan\u0131 var, b\u0259zil\u0259ri k\xFCk\xFCrd\xFC 300 kilometr h\xFCnd\xFCrl\xFCy\u0259 p\xFCsk\xFCr\xFCr.",p:"io"},j_ioplume:{t:"\u0130oda p\xFCsk\xFCrm\u0259",x:"New Horizons 2007-ci ild\u0259 Yupiterin yan\u0131ndan ke\xE7\u0259rk\u0259n \u0130o peykind\u0259 Tva\u015Ftar vulkan\u0131n\u0131n 330 kilometr h\xFCnd\xFCrl\xFCy\u0259 qalxan p\xFCsk\xFCrm\u0259sini \xE7\u0259kdi. \u015E\u0259klin yuxar\u0131s\u0131ndak\u0131 \xE7\u0259tir odur.",p:"ioplume"},j_europa:{t:"Avropa",x:"Buz qab\u0131\u011F\u0131n\u0131n alt\u0131nda Yer okeanlar\u0131n\u0131n ham\u0131s\u0131ndan iki d\u0259f\u0259 \xE7ox su olan okean gizl\u0259nir. NASA-n\u0131n Europa Clipper aparat\u0131 2024-c\xFC ilin oktyabr\u0131nda yola \xE7\u0131x\u0131b v\u0259 2030-cu ild\u0259 buraya \xE7atacaq.",p:"europa"},j_ganymede:{t:"Qanimed",x:"G\xFCn\u0259\u015F sisteminin \u0259n b\xF6y\xFCk peyki, Merkurid\u0259n d\u0259 iridir: diametri 5 268 kilometr. \xD6z maqnit sah\u0259si olan yegan\u0259 peykdir. Avropan\u0131n JUICE aparat\u0131 2031-ci ild\u0259 Yupiter\u0259 \xE7atacaq v\u0259 sonra onun orbitin\u0259 gir\u0259c\u0259k.",p:"ganymede"},j_callisto:{t:"Kallisto",x:"S\u0259thi ba\u015Fdan-ba\u015Fa kraterl\u0259rl\u0259 \xF6rt\xFCl\xFCb v\u0259 milyardlarla ildir d\u0259yi\u015Fm\u0259yib. D\xF6rd b\xF6y\xFCk peyki 1610-cu ilin yanvar\u0131nda Qaliley k\u0259\u015Ff edib v\u0259 bununla h\u0259r \u015Feyin Yer \u0259traf\u0131nda dolanmad\u0131\u011F\u0131n\u0131 g\xF6st\u0259rib.",p:"callisto"},j_poles:{t:"Q\xFCtbd\u0259ki qas\u0131r\u011Falar",x:"Juno Yupiterin q\xFCtbl\u0259rind\u0259 h\u0259nd\u0259si fiqur kimi d\xFCz\xFClm\xFC\u015F n\u0259h\u0259ng burul\u011Fanlar tapd\u0131. Bu infraq\u0131rm\u0131z\u0131 \u015F\u0259kild\u0259 c\u0259nub q\xFCtb\xFCnd\u0259 alt\u0131 qas\u0131r\u011Fa g\xF6r\xFCn\xFCr: biri m\u0259rk\u0259zd\u0259, be\u015Fi \u0259traf\u0131nda.",p:"juppoles"},j_juno:{t:"Juno",x:"Yan\u0131m\u0131zdak\u0131 Juno aparat\u0131n\u0131n real modelidir. \xDC\xE7 g\xFCn\u0259\u015F qanad\u0131n\u0131n h\u0259r biri 9 metr uzunluqdad\u0131r. Yupiterd\u0259 G\xFCn\u0259\u015F i\u015F\u0131\u011F\u0131 Yerd\u0259kind\u0259n 25 d\u0259f\u0259 z\u0259ifdir, ona g\xF6r\u0259 panell\u0259r bel\u0259 b\xF6y\xFCkd\xFCr.",enc:"juno"},s_voyager:{t:"Voyager 1-in yolu",x:"Biz Voyager 1-in trayektoriyas\u0131 il\u0259 gedirik. Yupiterin cazib\u0259si onu s\xFCr\u0259tl\u0259ndirdi v\u0259 1980-ci il noyabr\u0131n 12-d\u0259, startdan 3 il 2 ay sonra Saturna \xE7atd\u0131."},s_light:{t:"Z\u0259if G\xFCn\u0259\u015F",x:"Saturn G\xFCn\u0259\u015Fd\u0259n 1,4 milyard kilometr aral\u0131dad\u0131r. G\xFCn\u0259\u015F i\u015F\u0131\u011F\u0131 buraya 80 d\u0259qiq\u0259y\u0259 \xE7at\u0131r v\u0259 Yerd\u0259kind\u0259n 90 d\u0259f\u0259 z\u0259ifdir."},s_approach:{t:"Saturn",x:"Halqal\u0131 n\u0259h\u0259ng. Diametri 116 460 kilometrdir. O q\u0259d\u0259r y\xFCng\xFCld\xFCr ki, s\u0131xl\u0131\u011F\u0131 sudan azd\u0131r: kifay\u0259t q\u0259d\u0259r b\xF6y\xFCk okean olsayd\u0131, \xFCz\u0259rind\u0259 qalard\u0131. \u015E\u0259kli Cassini \xE7\u0259kib.",p:"saturn",fly:"saturn"},s_moons:{t:"Peykl\u0259rin say\u0131",x:"2026-c\u0131 il\u0259 q\u0259d\u0259r Saturnun 290-dan \xE7ox peyki tap\u0131l\u0131b. Bu, b\xFCt\xFCn qalan planetl\u0259rin peykl\u0259rinin c\u0259mind\u0259n \xE7oxdur."},s_rings:{t:"Halqalar",x:"Halqalar\u0131n eni 280 000 kilometrdir, qal\u0131nl\u0131\u011F\u0131 is\u0259 \xE7ox yerd\u0259 c\u0259mi 10 metr. Onlar qum d\u0259n\u0259sind\u0259n ev boyda olan says\u0131z-hesabs\u0131z su buzu par\xE7as\u0131ndan ibar\u0259tdir.",p:"rings"},s_cassinidiv:{t:"Kassini bo\u015Flu\u011Fu",x:"Halqalar aras\u0131ndak\u0131 4 700 kilometrlik t\xFCnd zola\u011F\u0131 1675-ci ild\u0259 Covanni Kassini g\xF6r\xFCb. Onu Mimas peykinin cazib\u0259si t\u0259mizl\u0259yir. Halqalar\u0131 ilk d\u0259f\u0259 1610-cu ild\u0259 Qaliley g\xF6r\xFCb, amma n\u0259 oldu\u011Funu anlamay\u0131b."},s_titan:{t:"Titan",x:"Qal\u0131n atmosferi olan yegan\u0259 peyk. S\u0259thind\u0259 maye metan g\xF6ll\u0259ri v\u0259 \xE7aylar\u0131 var. 2005-ci il yanvar\u0131n 14-d\u0259 Avropan\u0131n Huygens zondu ora endi. Bu, G\xFCn\u0259\u015F sisteminin xarici hiss\u0259sind\u0259 yegan\u0259 eni\u015Fdir.",p:"titan"},s_titansurf:{t:"Titan\u0131n s\u0259thi",x:"Huygens zondunun eni\u015Fd\u0259n sonra g\xF6nd\u0259rdiyi real \u015F\u0259kil. Da\u015Flar \u0259slind\u0259 su buzudur, m\u0259nfi 179 d\u0259r\u0259c\u0259d\u0259 qaya kimi b\u0259rkdir. NASA 2028-ci ild\u0259 ora Dragonfly adl\u0131 u\xE7an robot g\xF6nd\u0259rm\u0259yi planla\u015Fd\u0131r\u0131r.",p:"titansurf"},s_enceladus:{t:"Enselad",x:"500 kilometrlik bu buzlu peykin c\u0259nub q\xFCtb\xFCnd\u0259n f\u0259zaya su buxar\u0131 f\u0131\u015Fq\u0131r\u0131r. Alt\u0131nda duzlu okean var. Cassini f\u0259vvar\u0259l\u0259rin i\xE7ind\u0259n ke\xE7ib orada \xFCzvi molekullar tap\u0131b.",p:"enceladus"},s_hexagon:{t:"Alt\u0131bucaql\u0131",x:"Saturnun \u015Fimal q\xFCtb\xFCnd\u0259 h\u0259r t\u0259r\u0259fi Yerd\u0259n enli olan alt\u0131bucaql\u0131 k\xFCl\u0259k ax\u0131n\u0131 f\u0131rlan\u0131r. Onu 1981-ci ild\u0259 Voyager g\xF6r\xFCb, h\u0259l\u0259 d\u0259 da\u011F\u0131lmay\u0131b. \u015E\u0259kill\u0259r 2013 v\u0259 2017-ci ill\u0259rd\u0259 \xE7\u0259kilib.",p:"hexagon"},s_mimas:{t:"Mimas",x:"400 kilometrlik peykin \xFCz\xFCnd\u0259ki Her\u015Fel kraterinin eni 130 kilometrdir, peykin \xF6z\xFCn\xFCn \xFC\xE7d\u0259 biri q\u0259d\u0259r. Z\u0259rb\u0259 bir az g\xFCcl\xFC olsayd\u0131, Mimas par\xE7alanard\u0131.",p:"mimas"},s_cassini:{t:"Cassini",x:"Yan\u0131m\u0131zdak\u0131 Cassini 1997-ci ild\u0259 start g\xF6t\xFCrd\xFC v\u0259 Venera, Yer, Yupiterin cazib\u0259sind\u0259n istifad\u0259 ed\u0259r\u0259k yeddi il\u0259 Saturna \xE7atd\u0131. 13 il orbitd\u0259 i\u015Fl\u0259di. Bu \u015F\u0259kli Saturnun k\xF6lg\u0259sind\u0259n \xE7\u0259kib: halqalar arxadan i\u015F\u0131qlan\u0131b.",p:"saturnshadow",enc:"cassini"},s_finale:{t:"B\xF6y\xFCk final",x:"2017-ci il sentyabr\u0131n 15-d\u0259 yanaca\u011F\u0131 bit\u0259n Cassini Saturnun atmosferin\u0259 y\xF6n\u0259ldildi v\u0259 yand\u0131. Bel\u0259 etdil\u0259r ki, aparat Enselad v\u0259 ya Titana d\xFC\u015F\xFCb oran\u0131 Yer mikroblar\u0131 il\u0259 \xE7irkl\u0259ndirm\u0259sin."},u_discovery:{t:"Teleskopla tap\u0131lan ilk planet",x:"Uran\u0131 1781-ci il mart\u0131n 13-d\u0259 Vilyam Her\u015Fel k\u0259\u015Ff edib. O vaxta q\u0259d\u0259r yaln\u0131z adi g\xF6zl\u0259 g\xF6r\xFCn\u0259n planetl\u0259r m\u0259lum idi. G\xFCn\u0259\u015F sisteminin bilin\u0259n \xF6l\xE7\xFCs\xFC bir gec\u0259d\u0259 iki d\u0259f\u0259 b\xF6y\xFCd\xFC."},u_year:{t:"84 illik il",x:"Uran G\xFCn\u0259\u015F \u0259traf\u0131nda 84 il\u0259 dolan\u0131r. K\u0259\u015Ff edildiyi g\xFCnd\u0259n b\u0259ri \xFC\xE7 d\xF6vr\u0259ni h\u0259l\u0259 tamamlamay\u0131b. G\xFCn\u0259\u015F i\u015F\u0131\u011F\u0131 buraya 2 saat 40 d\u0259qiq\u0259y\u0259 \xE7at\u0131r."},u_voyager2:{t:"Yegan\u0259 qonaq",x:"Urana indiy\u0259 q\u0259d\u0259r yaln\u0131z bir aparat g\u0259lib: Voyager 2, 1986-c\u0131 il yanvar\u0131n 24-d\u0259. Yupiter v\u0259 Saturnun cazib\u0259si il\u0259 s\xFCr\u0259tl\u0259n\u0259r\u0259k s\u0259kkiz il yar\u0131ma \xE7atd\u0131 v\u0259 buludlardan 81 500 kilometr yuxar\u0131dan ke\xE7di. Biz onun yolu il\u0259 gedirik."},u_approach:{t:"Uran",x:"Voyager 2-nin 1986-c\u0131 ild\u0259 \xE7\u0259kdiyi real \u015F\u0259kil. Uran\u0131n diametri 50 724 kilometrdir. Mavi-ya\u015F\u0131l r\u0259ngini atmosferd\u0259ki metan verir, \xE7\xFCnki o, q\u0131rm\u0131z\u0131 i\u015F\u0131\u011F\u0131 udur.",p:"uranus",fly:"uranus"},u_tilt:{t:"B\xF6yr\xFC \xFCst\u0259 f\u0131rlanan planet",x:"Uran\u0131n oxu 98\xB0 \u0259yilib, y\u0259ni planet orbitind\u0259 diyirl\u0259nir. H\u0259r q\xFCtbd\u0259 42 il g\xFCnd\xFCz, 42 il gec\u0259 olur. Ehtimal ki, q\u0259dim bir toqqu\u015Fma onu a\u015F\u0131r\u0131b."},u_cold:{t:"\u018Fn soyuq atmosfer",x:"Uran buz n\u0259h\u0259ngidir: d\u0259rinlikl\u0259rind\u0259 su, ammonyak v\u0259 metan var. Atmosferind\u0259 m\u0259nfi 224 d\u0259r\u0259c\u0259 \xF6l\xE7\xFCl\xFCb. Bu, planetl\u0259r aras\u0131nda \u0259n a\u015Fa\u011F\u0131 temperaturdur."},u_rings:{t:"T\xFCnd halqalar",x:"Uran\u0131n 13 t\xFCnd, nazik halqas\u0131 var. Onlar\u0131 1977-ci ild\u0259 astronomlar planet bir ulduzun \xF6n\xFCnd\u0259n ke\xE7\u0259nd\u0259 ulduzun i\u015F\u0131\u011F\u0131n\u0131n sayr\u0131\u015Fmas\u0131ndan tap\u0131blar."},u_miranda:{t:"Miranda",x:"470 kilometrlik peykin s\u0259thi sanki bir ne\xE7\u0259 f\u0259rqli par\xE7adan y\u0131\u011F\u0131l\u0131b. Verona yar\u011Fan\u0131 20 kilometr d\u0259rinliyind\u0259dir, G\xFCn\u0259\u015F sistemind\u0259 m\u0259lum olan \u0259n h\xFCnd\xFCr u\xE7urum. Uran\u0131n \u0259n az\u0131 28 peyki var, be\u015Fi iridir.",p:"miranda"},ne_discovery:{t:"Q\u0259l\u0259min ucunda tap\u0131lan planet",x:"Uran\u0131n orbitind\u0259ki ki\xE7ik sapmalara g\xF6r\u0259 frans\u0131z riyaziyyat\xE7\u0131s\u0131 \xDCrben Leverye nam\u0259lum planetin yerini hesablad\u0131. 1846-c\u0131 il sentyabr\u0131n 23-d\u0259 Berlind\u0259 Yohan Qalle teleskopu h\u0259min n\xF6qt\u0259y\u0259 tutdu v\u0259 planeti ilk gec\u0259d\u0259 tapd\u0131."},ne_light:{t:"D\xF6rd saatl\u0131q i\u015F\u0131q",x:"G\xFCn\u0259\u015F i\u015F\u0131\u011F\u0131 Neptuna 4 saat 10 d\u0259qiq\u0259y\u0259 \xE7at\u0131r. G\xFCnorta orada Yerd\u0259ki alatoranl\u0131q kimidir: G\xFCn\u0259\u015F 900 d\u0259f\u0259 z\u0259if i\u015F\u0131qland\u0131r\u0131r."},ne_voyager2:{t:"Voyager 2",x:"Neptuna yegan\u0259 ziyar\u0259t 1989-cu il avqustun 25-d\u0259 olub. Voyager 2 on iki illik yoldan sonra planetin \u015Fimal q\xFCtb\xFCnd\u0259n 4 950 kilometr yuxar\u0131dan ke\xE7di. Siqnal Yer\u0259 4 saat 6 d\u0259qiq\u0259y\u0259 \xE7at\u0131rd\u0131."},ne_approach:{t:"Neptun",x:"G\xFCn\u0259\u015Fd\u0259n \u0259n uzaq planet: 4,5 milyard kilometr. Bir ili 165 Yer ili \xE7\u0259kir. 1846-c\u0131 ild\u0259 k\u0259\u015Ff edil\u0259nd\u0259n sonra ilk tam d\xF6vr\u0259sini 2011-ci ild\u0259 ba\u015Fa vurub. \u015E\u0259kli Voyager 2 \xE7\u0259kib.",p:"neptune",fly:"neptune"},ne_winds:{t:"\u018Fn s\xFCr\u0259tli k\xFCl\u0259kl\u0259r",x:"Neptunda k\xFCl\u0259k saatda 2 000 kilometr\u0259 \xE7at\u0131r. Voyager 2 1989-cu ild\u0259 Yer boyda B\xF6y\xFCk T\xFCnd L\u0259k\u0259ni \xE7\u0259kdi. Be\u015F il sonra Hubble baxanda l\u0259k\u0259 yox olmu\u015Fdu.",p:"gds"},ne_triton:{t:"Triton",x:"Neptunun \u0259n b\xF6y\xFCk peyki planetin f\u0131rlanmas\u0131n\u0131n \u0259ksin\u0259 dolan\u0131r, dem\u0259li n\u0259 vaxtsa Koyper qur\u015Fa\u011F\u0131ndan tutulub. S\u0259thi m\u0259nfi 235 d\u0259r\u0259c\u0259dir, yen\u0259 d\u0259 azot qeyzerl\u0259ri 8 kilometr h\xFCnd\xFCrl\xFCy\u0259 p\xFCsk\xFCr\xFCr.",p:"triton"},ne_rings:{t:"Halqalar v\u0259 peykl\u0259r",x:"Neptunun be\u015F nazik halqas\u0131 v\u0259 16 m\u0259lum peyki var. \u018Fn xarici halqa b\u0259rab\u0259r deyil, b\u0259zi yerl\u0259rd\u0259 qal\u0131nla\u015F\u0131b q\xF6vsl\u0259r \u0259m\u0259l\u0259 g\u0259tirir."},ne_ice:{t:"Almaz ya\u011F\u0131\u015F\u0131",x:"Neptun v\u0259 Uran\u0131n d\u0259rinlikl\u0259rind\u0259 t\u0259zyiq o q\u0259d\u0259r y\xFCks\u0259kdir ki, metandak\u0131 karbon s\u0131x\u0131l\u0131b almaz kristallar\u0131na \xE7evril\u0259 bil\u0259r. Laboratoriya t\u0259cr\xFCb\u0259l\u0259ri bunun m\xFCmk\xFCn oldu\u011Funu g\xF6st\u0259rib."},p_nh:{t:"New Horizons-un yolu",x:"Biz New Horizons-un trayektoriyas\u0131 il\u0259 gedirik. O, 2006-c\u0131 il yanvar\u0131n 19-da start g\xF6t\xFCrd\xFC v\u0259 Yerd\u0259n \u0259n s\xFCr\u0259tli ayr\u0131lan aparat oldu: Ay\u0131n orbitini c\u0259mi 9 saata ke\xE7di."},p_jupiter:{t:"Yupiterd\u0259n t\u0259kan",x:"2007-ci il fevral\u0131n 28-d\u0259 New Horizons Yupiterin yan\u0131ndan ke\xE7di v\u0259 onun cazib\u0259si il\u0259 saniy\u0259d\u0259 4 kilometr \u0259lav\u0259 s\xFCr\u0259t qazand\u0131. Bu, Plutona ged\u0259n yolu \xFC\xE7 il q\u0131saltd\u0131.",p:"jupiter",fly:"jupiter"},p_discovery:{t:"Plutonun k\u0259\u015Ffi",x:"1930-cu il fevral\u0131n 18-d\u0259 24 ya\u015Fl\u0131 Klayd Tombo fotol\xF6vh\u0259l\u0259ri tutu\u015Fdurub h\u0259r\u0259k\u0259t ed\u0259n n\xF6qt\u0259ni g\xF6rd\xFC. Onun k\xFCl\xFCn\xFCn bir hiss\u0259si New Horizons aparat\u0131nda Plutonun yan\u0131ndan ke\xE7ib."},p_kuiper:{t:"Koyper qur\u015Fa\u011F\u0131",x:"Neptundan o t\u0259r\u0259fd\u0259, G\xFCn\u0259\u015Fd\u0259n 30 il\u0259 50 astronomik vahid aras\u0131nda buzlu cisiml\u0259rin geni\u015F qur\u015Fa\u011F\u0131 uzan\u0131r. Q\u0131sa d\xF6vrl\xFC kometl\u0259rin \xE7oxu buradan g\u0259lir. Plutondan sonrak\u0131 ilk cismi 1992-ci ild\u0259 tap\u0131l\u0131b."},p_status:{t:"Planet, yoxsa c\u0131rtdan planet",x:"2006-c\u0131 ild\u0259 Beyn\u0259lxalq Astronomiya \u0130ttifaq\u0131 planetin t\u0259rifini verdi: o, orbitinin \u0259traf\u0131n\u0131 ba\u015Fqa cisiml\u0259rd\u0259n t\u0259mizl\u0259m\u0259lidir. Pluton bu \u015F\u0259rti \xF6d\u0259mir v\u0259 c\u0131rtdan planet say\u0131l\u0131r."},p_others:{t:"Ba\u015Fqa c\u0131rtdan planetl\u0259r",x:"Koyper qur\u015Fa\u011F\u0131nda Plutondan ba\u015Fqa Eris, Makemake v\u0259 Haumea kimi c\u0131rtdan planetl\u0259r var. Eris dem\u0259k olar Pluton boydad\u0131r. Onun 2005-ci ild\u0259 tap\u0131lmas\u0131 Plutonun statusu bar\u0259d\u0259 m\xFCbahis\u0259ni ba\u015Flad\u0131b."},p_sun:{t:"Buradan G\xFCn\u0259\u015F",x:"Plutondan baxanda G\xFCn\u0259\u015F \xE7ox parlaq bir ulduzdur. \u0130\u015F\u0131\u011F\u0131 Yerd\u0259kind\u0259n 1 500 d\u0259f\u0259 z\u0259ifdir, amma yen\u0259 d\u0259 b\u0259dirl\u0259nmi\u015F Aydan y\xFCz d\u0259f\u0259l\u0259rl\u0259 parlaqd\u0131r. \u0130\u015F\u0131q bura be\u015F saat yar\u0131ma \xE7at\u0131r."},p_heart:{t:"Plutonun \xFCr\u0259yi",x:"New Horizons 2015-ci il iyulun 14-d\u0259 Plutonun 12 500 kilometr yax\u0131nl\u0131\u011F\u0131ndan ke\xE7di. \xDCr\u0259k formal\u0131 a\xE7\u0131q sah\u0259 Tombo vilay\u0259tidir. Sol yar\u0131s\u0131 donmu\u015F azot d\xFCz\u0259nliyidir v\u0259 yava\u015F-yava\u015F qaynay\u0131r.",p:"pluto"},p_mtn:{t:"Buz da\u011Flar\u0131",x:"Ke\xE7idd\u0259n 15 d\u0259qiq\u0259 sonra \xE7\u0259kilmi\u015F real \u015F\u0259kil. Da\u011Flar 3,5 kilometr h\xFCnd\xFCrd\xFCr v\u0259 su buzundan ibar\u0259tdir: m\u0259nfi 230 d\u0259r\u0259c\u0259d\u0259 buz qaya kimi m\xF6hk\u0259m olur. \xDCf\xFCqd\u0259 atmosferin duman qatlar\u0131 g\xF6r\xFCn\xFCr.",p:"plutomtn"},p_haze:{t:"Mavi duman",x:"Plutonun arxas\u0131na ke\xE7\u0259n New Horizons G\xFCn\u0259\u015F\u0259 t\u0259r\u0259f baxd\u0131 v\u0259 nazik atmosferin mavi halqas\u0131n\u0131 \xE7\u0259kdi. Atmosfer \u0259sas\u0259n azotdur, t\u0259zyiqi Yerd\u0259kinin y\xFCz mind\u0259 biridir.",p:"plutohaze"},p_charon:{t:"Xaron",x:"Plutonun \u0259n b\xF6y\xFCk peyki onun yar\u0131s\u0131 boydad\u0131r. \u0130kisi bir-birin\u0259 h\u0259mi\u015F\u0259 eyni \xFCz\xFCn\xFC g\xF6st\u0259rir v\u0259 ortaq m\u0259rk\u0259z \u0259traf\u0131nda 6,4 g\xFCn\u0259 dolan\u0131r. \u015Eimal q\xFCtb\xFCnd\u0259ki q\u0131rm\u0131z\u0131 l\u0259k\u0259 Plutondan u\xE7ub g\u0259l\u0259n qazlardan yaran\u0131b.",p:"charon"},p_south:{t:"G\xF6r\xFCnm\u0259mi\u015F yar\u0131mk\xFCr\u0259",x:"Plutonun qaranl\u0131q qalan c\u0259nub hiss\u0259si bo\u015F deyil. New Horizons ke\xE7\u0259nd\u0259 orada q\xFCtb gec\u0259si idi v\u0259 o yerl\u0259r he\xE7 vaxt \xE7\u0259kilm\u0259yib. N\xF6vb\u0259ti aparat g\u0259l\u0259n\u0259 q\u0259d\u0259r onu he\xE7 kim g\xF6rm\u0259y\u0259c\u0259k."},p_arrokoth:{t:"Arrokot",x:"2019-cu il yanvar\u0131n 1-d\u0259 New Horizons 36 kilometrlik Arrokot cisminin yan\u0131ndan ke\xE7di. Bu, bir aparat\u0131n yax\u0131ndan \xF6yr\u0259ndiyi \u0259n uzaq cisimdir: iki buz topas\u0131 yava\u015Fca toxunub bir-birin\u0259 yap\u0131\u015F\u0131b."},p_family:{t:"Ail\u0259 portreti",x:"1990-c\u0131 ild\u0259 Voyager 1 G\xFCn\u0259\u015F sisteminin k\u0259nar\u0131ndan geri bax\u0131b alt\u0131 planeti bir mozaikada \xE7\u0259kdi: Venera, Yer, Yupiter, Saturn, Uran v\u0259 Neptun.",p:"family"},p_voyager:{t:"Voyager 1",x:"Yan\u0131m\u0131zdak\u0131 Voyagerin real modelidir. O, insan\u0131n d\xFCz\u0259ltdiyi \u0259n uzaq cisimdir. 2012-ci ilin avqustunda ulduzlararas\u0131 f\u0259zaya \xE7\u0131x\u0131b, 2026-c\u0131 ilin noyabr\u0131nda is\u0259 Yerd\u0259n bir i\u015F\u0131q g\xFCn\xFC, y\u0259ni 25,9 milyard kilometr uzaql\u0131\u011Fa \xE7at\u0131r. \xDCz\u0259rind\u0259ki q\u0131z\u0131l l\xF6vh\u0259d\u0259 Yerin s\u0259sl\u0259ri v\u0259 \u015F\u0259kill\u0259ri yaz\u0131l\u0131b.",enc:"voyager"}},pf=[[2,"a_liftoff"],[24,"a_pitch"],[60,"a_mach"],[74,"a_maxq"],[104,"a_strat"],[147,"a_meco"],[156,"a_sep"],[190,"a_karman"],[215,"a_fairing"],[380,"a_entry"],[470,"a_landing"],[522,"a_seco"]];var qe={lat:40.7343,lon:48.7218,elev:1133},Bi=540,Ge={mercury:{name:"Merkuri",a:.3871,P:87.969,r:2439.7,tex:"mercury.jpg",tilt:.03,rot:1407.6,color:[.62,.59,.56],L0:200},venus:{name:"Venera",a:.7233,P:224.701,r:6051.8,tex:"venus_clouds.jpg",tilt:2.6,rot:-96,color:[.95,.9,.78],atmo:[1,.88,.62,.55],L0:95},earth:{name:"Yer",a:1,P:365.256,r:6371,color:[.45,.62,1],L0:0},mars:{name:"Mars",a:1.5237,P:686.98,r:3389.5,tex:"mars.jpg",tilt:25.19,rot:24.62,color:[.9,.55,.36],atmo:[1,.62,.42,.22],L0:250,moons:[["phobos","Fobos",11.1,9376,.319],["deimos","Deymos",6.2,23463,1.263]]},jupiter:{name:"Yupiter",a:5.2028,P:4332.59,r:69911,tex:"jupiter.jpg",tilt:3.13,rot:9.925,color:[.86,.77,.65],obl:.065,L0:40,moons:[["io","\u0130o",1821.6,421700,1.769],["europa","Avropa",1560.8,671100,3.551],["ganymede","Qanimed",2634.1,1070400,7.155],["callisto","Kallisto",2410.3,1882700,16.689]]},saturn:{name:"Saturn",a:9.5388,P:10759.2,r:58232,tex:"saturn.jpg",tilt:26.73,rot:10.66,color:[.9,.83,.65],obl:.098,L0:120,rings:{in:74500,out:140220,tex:"saturn_ring.png"},moons:[["mimas","Mimas",198.2,185540,.942],["enceladus","Enselad",252.1,238040,1.37],["tethys","Tefiya",531,294670,1.888],["dione","Diona",561.4,377420,2.737],["rhea","Reya",763.8,527070,4.518],["titan","Titan",2574.7,1221870,15.945],["iapetus","Yapet",734.5,3560840,79.33]]},uranus:{name:"Uran",a:19.191,P:30688.5,r:25362,tex:"uranus.jpg",tilt:97.77,rot:-17.24,color:[.66,.87,.9],L0:210,rings:{in:41800,out:51150,faint:!0},moons:[["miranda","Miranda",235.8,129900,1.413],["ariel","Ariel",578.9,190900,2.52],["umbriel","Umbriel",584.7,266e3,4.144],["titania","Titaniya",788.9,436300,8.706],["oberon","Oberon",761.4,583500,13.46]]},neptune:{name:"Neptun",a:30.07,P:60182,r:24622,tex:"neptune.jpg",tilt:28.32,rot:16.11,color:[.36,.5,1],L0:300,moons:[["triton","Triton",1353.4,354760,-5.877]]},pluto:{name:"Pluton",a:39.48,P:90560,r:1188.3,tex:"pluto.jpg",tilt:122.5,rot:-153.3,color:[.8,.7,.6],atmo:[.45,.65,1,.3],L0:330,moons:[["charon","Xaron",606,19591,6.387]]},moon:{name:"Ay",r:1737.4,tex:"moon.jpg",tilt:6.7,rot:655.7,color:[.75,.73,.7]}},Yx=[["n_orbit",1],["n_iss",1],["n_az",2],["n_hubble",3],["n_kerimov",3],["n_night",4],["n_debris",4]],Kx=[["d_burn",2,6800],["d_vanallen",3,12e3],["d_gps",4,26560],["d_bluemarble",3,35400],["d_geo",1,42164],["d_moonorbit",1,384400],["d_hill",4,93e4],["d_l2",2,15e5]];var os={iss:{name:"BKS",title:"Beyn\u0259lxalq Kosmik Stansiya",kind:"leo",az:125,photo:"iss_full",dist:"400 km h\xFCnd\xFCrl\xFCk",ref:"Soyuz MS-17, 2020",real:"3 saat 3 d\u0259qiq\u0259",blurb:"Orbitd\u0259ki ev\u0259 birl\u0259\u015Fm\u0259",orbits:1.85,orbitSec:9300,arrSec:1500,orbit:[["k_chase",1],["n_orbit",1],["n_az",2],["k_intro",1],["k_zarya",2],["n_gagarin",3],["k_crew",1],["k_partners",3],["n_caspian",4],["n_hubble",2],["k_life",2],["n_night",3],["k_water",3],["n_aurora",4],["k_science",3],["n_micro",2],["k_power",4],["n_debris",4],["k_eva",2],["k_records",4],["n_kerimov",2],["k_salyut",3],["k_visible",3],["n_sputnik",4],["k_future",2]],arrive:[["k_dragon",2],["k_cupola",1],["k_dock",1]],fin:{t:"Stansiyaya birl\u0259\u015Fdin",x:"Q\u0131rat g\u0259misi Beyn\u0259lxalq Kosmik Stansiyaya birl\u0259\u015Fdi. Lyuk a\xE7\u0131l\u0131r. S\u0259ni 400 kilometr h\xFCnd\xFCrl\xFCkd\u0259, saatda 27 600 kilometr s\xFCr\u0259tl\u0259 u\xE7an evd\u0259 qar\u015F\u0131lay\u0131rlar.",p:"iss_earth"}},moon:{name:"Ay",title:"Ay",kind:"moon",az:100,photo:"artemis2moon",dist:"384 400 km",ref:"Apollo 11, 1969",real:"4 g\xFCn 6 saat",blurb:"Sakitlik d\u0259nizin\u0259 eni\u015F",orbits:1.75,arrSec:97200,orbit:[["n_orbit",1],["n_iss",1],["n_az",2],["n_gagarin",2],["n_hubble",3],["n_kerimov",3],["n_night",4],["n_micro",4],["n_debris",4]],depart:[["l_tli",1,6800],["d_vanallen",2,12e3],["d_gps",4,26560],["d_bluemarble",2,35400],["d_geo",1,42164],["l_coast",2,7e4],["l_intro",3,1e5],["l_origin",3,13e4],["l_tides",4,16e4],["l_luna",2,19e4],["l_lunokhod",4,215e3],["l_apollo11",1,24e4],["l_boot",3,262e3],["l_apollo",2,282e3],["l_earthrise",1,3e5],["l_farside",3,312e3]],arrive:[["l_loi",2],["l_maria",3],["l_nasireddin",2],["l_lro",4],["l_water",2],["l_temp",4],["l_artemis",1],["l_commercial",4],["l_descent",3]],arr:{kind:"land",orbit:110,far:0},fin:{t:"Aya endin",x:"Q\u0131rat Sakitlik d\u0259nizin\u0259 endi, Apollo 11-in 1969-cu ild\u0259 qondu\u011Fu yerin yax\u0131nl\u0131\u011F\u0131na. Bu real \u015F\u0259kild\u0259 Apollo 17-d\u0259n Harrison \u015Emitt bayra\u011F\u0131n yan\u0131ndad\u0131r, yuxar\u0131da is\u0259 Yer g\xF6r\xFCn\xFCr.",p:"a17flag"}},venus:{name:"Venera",title:"Venera",kind:"planet",target:"venus",dir:-1,vinf:2.8,az:100,photo:"venusm10",dist:"38 mln km-d\u0259n ba\u015Flayaraq",ref:"Venus Express, 2005",real:"153 g\xFCn",blurb:"Tur\u015Fu buludlar\u0131n\u0131n \xFCz\u0259rind\u0259 orbit",path:[{r:1,th:0,d:0,v:27.3},{r:.7233,th:185,d:153,v:37.7}],orbit:[["n_orbit",1],["n_iss",1],["n_az",3],["n_hubble",4],["n_kerimov",3]],depart:[["d_burn",2,6800],["d_vanallen",4,12e3],["d_geo",1,42164],["d_bluemarble",3,35400],["d_moonorbit",2,384400],["d_hill",4,93e4],["d_l2",3,15e5]],cruise:[["v_inward",1,{f:.06}],["v_window",2,{f:.14}],["i_hohmann",3,{f:.2}],["v_mariner2",1,{f:.28}],["i_solarwind",2,{f:.36}],["i_silence",4,{f:.42}],["v_phases",2,{f:.5}],["i_radiation",4,{f:.56}],["i_comet",3,{f:.62}],["v_venera",1,{f:.7}],["v_vega",3,{f:.76}],["i_dsn",4,{f:.81}],["v_intro",1,{f:.87}],["v_hot",2,{f:.92}],["v_day",3,{f:.96}]],arrive:[["v_clouds",2],["v_greenhouse",1],["v_magellan",2],["v_maat",3],["v_future",4]],arr:{kind:"orbit",orbit:4500,far:70},fin:{t:"Venera orbitind\u0259s\u0259n",x:"Q\u0131rat Veneran\u0131n orbitin\u0259 girdi. A\u015Fa\u011F\u0131da he\xE7 vaxt da\u011F\u0131lmayan buludlar, onlar\u0131n alt\u0131nda is\u0259 G\xFCn\u0259\u015F sisteminin \u0259n isti s\u0259thi var. Bu real \u015F\u0259kli 1974-c\xFC ild\u0259 Mariner 10 \xE7\u0259kib.",p:"venusm10"}},mercury:{name:"Merkuri",title:"Merkuri",kind:"planet",target:"mercury",dir:-1,vinf:4.2,az:100,photo:"mercury",dist:"77 mln km-d\u0259n ba\u015Flayaraq",ref:"Mariner 10, 1973",real:"146 g\xFCn",blurb:"G\xFCn\u0259\u015F\u0259 \u0259n yax\u0131n planet",path:[{r:1,th:0,d:0,v:27},{r:.7233,th:140,d:94,v:37,fly:"venus",b:42e3},{r:.42,th:255,d:146,v:53}],ta:.42,orbit:[["n_orbit",1],["n_iss",1],["n_az",3],["n_hubble",4]],depart:[["d_burn",3,6800],["d_geo",1,42164],["d_bluemarble",4,35400],["d_moonorbit",2,384400],["d_l2",3,15e5]],cruise:[["me_hard",1,{f:.05}],["i_assist",2,{f:.12}],["me_m10",1,{f:.2}],["i_solarwind",3,{f:.28}],["v_phases",4,{f:.36}],["me_venus",1,{r:.7233}],["v_hot",3,{r:.69}],["me_sun",2,{r:.64}],["me_parker",2,{r:.59}],["me_einstein",3,{r:.55}],["i_radiation",4,{r:.52}],["me_intro",1,{r:.49}],["me_day",3,{r:.465}],["me_temp",2,{r:.445}],["me_bepi",2,{r:.43}]],arrive:[["me_core",3],["me_caloris",2],["me_nizami",1],["me_messenger",2]],arr:{kind:"orbit",orbit:2200,far:80},fin:{t:"Merkuri orbitind\u0259s\u0259n",x:"Q\u0131rat G\xFCn\u0259\u015F\u0259 \u0259n yax\u0131n planetin \u0259traf\u0131nda dolan\u0131r. Burada G\xFCn\u0259\u015F g\xF6yd\u0259 Yerd\u0259kind\u0259n \xFC\xE7 d\u0259f\u0259 b\xF6y\xFCk g\xF6r\xFCn\xFCr. \u015E\u0259kild\u0259 Mariner 10-un 1974-c\xFC ild\u0259 g\xF6rd\xFCy\xFC Merkuridir.",p:"mercurym10"}},mars:{name:"Mars",title:"Mars",kind:"planet",target:"mars",dir:1,vinf:2.9,az:100,photo:"marsglobe",dist:"472 mln km yol",ref:"Perseverance, 2020",real:"203 g\xFCn",blurb:"Yezero kraterin\u0259 eni\u015F",path:[{r:1,th:0,d:0,v:32.7},{r:1.5237,th:145,d:203,v:21.5}],orbit:Yx,depart:Kx,cruise:[["mars_window",1,{f:.06}],["i_hohmann",2,{f:.12}],["mars_dist",2,{f:.19}],["i_silence",4,{f:.25}],["i_solarwind",3,{f:.31}],["i_radiation",3,{f:.37}],["i_meteoroid",4,{f:.43}],["i_comet",4,{f:.49}],["mars_first",2,{f:.55}],["mars_sojourner",3,{f:.61}],["mars_oppy",2,{f:.67}],["mars_dust",4,{f:.71}],["mars_curio",1,{f:.75}],["mars_delay",3,{f:.8}],["i_dsn",4,{f:.84}],["mars_others",4,{f:.87}],["mars_persev",1,{f:.91}],["mars_intro",2,{f:.955}]],arrive:[["mars_valles",2],["mars_olympus",3],["mars_moons",4],["mars_atmo",3],["mars_mro",4],["mars_water",3],["mars_gravity",4],["mars_edl",1],["mars_jezero",2],["mars_sunset",4]],arr:{kind:"land",orbit:400,far:70},fin:{t:"Marsa endin",x:"Q\u0131rat Yezero kraterin\u0259 endi. \u018Ftraf\u0131ndak\u0131 m\u0259nz\u0259r\u0259 reald\u0131r: bu panoram\u0131 Perseverance roveri eni\u015Fd\u0259n \xFC\xE7 g\xFCn sonra, 2021-ci il fevral\u0131n 21-d\u0259 142 kadrdan y\u0131\u011F\u0131b.",p:"perspano",pano:!0}},jupiter:{name:"Yupiter",title:"Yupiter",kind:"planet",target:"jupiter",dir:1,vinf:10.4,az:100,photo:"jupiter",dist:"778 mln km",ref:"Voyager 1, 1977",real:"18 ay",blurb:"N\u0259h\u0259ng planet v\u0259 d\xF6rd peyki",path:[{r:1,th:0,d:0,v:39.5},{r:5.2028,th:145,d:546,v:13}],orbit:[["n_orbit",1],["n_iss",1],["n_az",3],["n_hubble",4]],depart:[["d_burn",3,6800],["d_geo",1,42164],["d_bluemarble",4,35400],["d_moonorbit",2,384400],["d_l2",3,15e5]],cruise:[["i_hohmann",4,{r:1.2}],["x_marscross",2,{r:1.524}],["i_meteoroid",4,{r:1.8}],["b_enter",1,{r:2.1}],["b_empty",2,{r:2.3}],["b_vesta",3,{r:2.42}],["b_ida",3,{r:2.6}],["b_ceres",2,{r:2.77}],["b_dawn",4,{r:2.92}],["b_kirkwood",4,{r:3.08}],["b_origin",3,{r:3.25}],["i_delay",3,{r:3.7}],["j_trojans",4,{r:4.3}],["j_approach",1,{r:4.7}],["j_gas",2,{r:4.85}],["j_missions",2,{r:4.97}],["j_magneto",3,{r:5.06}],["j_moons",4,{r:5.13}]],arrive:[["j_grs",1],["j_io",2],["j_europa",1],["j_ganymede",3],["j_callisto",4],["j_poles",3],["j_juno",2]],arr:{kind:"orbit",orbit:38e4,far:110},fin:{t:"Yupiter orbitind\u0259s\u0259n",x:"Q\u0131rat G\xFCn\u0259\u015F sisteminin \u0259n b\xF6y\xFCk planetinin \u0259traf\u0131nda dolan\u0131r. A\u015Fa\u011F\u0131dak\u0131 zolaqlar Yerd\u0259n b\xF6y\xFCk qas\u0131r\u011Falard\u0131r. Bu real \u015F\u0259kli Juno aparat\u0131 \xE7\u0259kib.",p:"jupiter"}},saturn:{name:"Saturn",title:"Saturn",kind:"planet",target:"saturn",dir:1,vinf:10.4,az:100,photo:"saturn",dist:"1,4 mlrd km",ref:"Voyager 1, 1977",real:"3 il 2 ay",blurb:"Halqalar, Titan v\u0259 Enselad",path:[{r:1,th:0,d:0,v:39.5},{r:5.2028,th:145,d:546,v:22,fly:"jupiter",b:62e4},{r:9.5388,th:198,d:1164,v:20.4}],orbit:[["n_orbit",1],["n_iss",1],["n_az",4]],depart:[["d_burn",3,6800],["d_geo",1,42164],["d_moonorbit",2,384400],["d_l2",4,15e5]],cruise:[["x_marscross",3,{r:1.524}],["b_enter",1,{r:2.1}],["b_empty",2,{r:2.3}],["b_ceres",3,{r:2.77}],["b_vesta",4,{r:2.5}],["b_kirkwood",4,{r:3.08}],["i_assist",2,{r:4.4}],["j_approach",1,{r:5.2028}],["j_grs",2,{r:5.3}],["j_io",3,{r:5.45}],["j_europa",3,{r:5.6}],["s_voyager",2,{r:6.5}],["i_palebluedot",3,{r:7.5}],["s_light",3,{r:8.3}],["s_approach",1,{r:8.95}],["s_moons",4,{r:9.25}]],arrive:[["s_rings",1],["s_cassinidiv",3],["s_titan",2],["s_titansurf",3],["s_enceladus",2],["s_hexagon",4],["s_mimas",4],["s_cassini",2],["s_finale",3]],arr:{kind:"orbit",orbit:3e5,far:110,inc:.42},fin:{t:"Saturn orbitind\u0259s\u0259n",x:"Q\u0131rat halqalar\u0131n \xFCz\u0259rind\u0259n ke\xE7ir. Onlar\u0131n eni 280 000 kilometr, qal\u0131nl\u0131\u011F\u0131 is\u0259 c\u0259mi on metrdir. Bu real \u015F\u0259kli Cassini aparat\u0131 \xE7\u0259kib.",p:"saturn"}},uranus:{name:"Uran",title:"Uran",kind:"planet",target:"uranus",dir:1,vinf:10.2,az:100,photo:"uranus",dist:"2,9 mlrd km",ref:"Voyager 2, 1977",real:"8 il 5 ay",blurb:"B\xF6yr\xFC \xFCst\u0259 f\u0131rlanan buz n\u0259h\u0259ngi",path:[{r:1,th:0,d:0,v:38.5},{r:5.2028,th:163,d:688,v:20,fly:"jupiter",b:62e4},{r:9.5388,th:218,d:1467,v:18,fly:"saturn",b:42e4},{r:19.191,th:293,d:3079,v:17.9}],orbit:[["n_orbit",1],["n_iss",1],["n_az",4]],depart:[["d_burn",4,6800],["d_geo",1,42164],["d_moonorbit",2,384400]],cruise:[["b_enter",2,{r:2.1}],["b_empty",3,{r:2.3}],["b_ceres",4,{r:2.77}],["i_assist",2,{r:4.4}],["j_approach",1,{r:5.2028}],["j_grs",3,{r:5.35}],["j_europa",4,{r:5.6}],["s_approach",1,{r:9.5388}],["s_rings",2,{r:9.7}],["s_titan",3,{r:9.95}],["s_enceladus",4,{r:10.2}],["i_palebluedot",3,{r:12}],["u_discovery",2,{r:14}],["u_year",3,{r:16}],["u_voyager2",1,{r:17.5}],["u_approach",1,{r:18.6}]],arrive:[["u_tilt",1],["u_cold",2],["u_rings",3],["u_miranda",2]],arr:{kind:"orbit",orbit:15e4,far:120,inc:.5},fin:{t:"Uran orbitind\u0259s\u0259n",x:"Q\u0131rat G\xFCn\u0259\u015Fd\u0259n 2,9 milyard kilometr aral\u0131da, b\xF6yr\xFC \xFCst\u0259 f\u0131rlanan planetin \u0259traf\u0131ndad\u0131r. Bura s\u0259nd\u0259n \u0259vv\u0259l yaln\u0131z Voyager 2 g\u0259lib. Bu \u015F\u0259kli o \xE7\u0259kib.",p:"uranus"}},neptune:{name:"Neptun",title:"Neptun",kind:"planet",target:"neptune",dir:1,vinf:10.2,az:100,photo:"neptune",dist:"4,5 mlrd km",ref:"Voyager 2, 1977",real:"12 il",blurb:"G\xFCn\u0259\u015Fd\u0259n \u0259n uzaq planet",path:[{r:1,th:0,d:0,v:38.5},{r:5.2028,th:163,d:688,v:20,fly:"jupiter",b:62e4},{r:9.5388,th:218,d:1467,v:18,fly:"saturn",b:42e4},{r:19.191,th:293,d:3079,v:17.9,fly:"uranus",b:26e4},{r:30.07,th:313,d:4388,v:17}],orbit:[["n_orbit",1],["n_iss",1],["n_az",4]],depart:[["d_geo",1,42164],["d_moonorbit",3,384400]],cruise:[["b_enter",2,{r:2.1}],["b_empty",4,{r:2.3}],["i_assist",3,{r:4.4}],["j_approach",1,{r:5.2028}],["j_grs",4,{r:5.35}],["s_approach",1,{r:9.5388}],["s_rings",2,{r:9.7}],["s_titan",4,{r:9.95}],["u_voyager2",3,{r:15}],["u_approach",1,{r:19.191}],["u_tilt",2,{r:19.4}],["u_miranda",4,{r:19.7}],["ne_discovery",1,{r:24}],["ne_light",3,{r:26}],["ne_voyager2",2,{r:28}],["ne_approach",1,{r:29.3}]],arrive:[["ne_winds",1],["ne_triton",2],["ne_rings",3],["ne_ice",4]],arr:{kind:"orbit",orbit:13e4,far:120},fin:{t:"Neptun orbitind\u0259s\u0259n",x:"Q\u0131rat G\xFCn\u0259\u015Fd\u0259n 4,5 milyard kilometr aral\u0131dad\u0131r. G\xFCn\u0259\u015F buradan sad\u0259c\u0259 parlaq bir ulduzdur, Yer\u0259 g\xF6nd\u0259rdiyin salam is\u0259 d\xF6rd saatdan sonra \xE7atacaq. Bu \u015F\u0259kli 1989-cu ild\u0259 Voyager 2 \xE7\u0259kib.",p:"neptune"}},pluto:{name:"Pluton",title:"Pluton",kind:"planet",target:"pluto",dir:1,vinf:16.26,az:100,photo:"pluto",dist:"4,9 mlrd km",ref:"New Horizons, 2006",real:"9 il 6 ay",blurb:"Koyper qur\u015Fa\u011F\u0131 v\u0259 buz da\u011Flar\u0131",path:[{r:1,th:0,d:0,v:45},{r:5.2028,th:131,d:405,v:23,fly:"jupiter",b:9e5},{r:32.9,th:165,d:3463,v:14.5}],ta:32.9,orbit:[["n_orbit",1],["n_iss",1],["n_az",4]],depart:[["p_nh",1,9e3],["d_geo",2,42164],["d_moonorbit",1,384400],["d_l2",4,15e5]],cruise:[["b_enter",2,{r:2.1}],["b_empty",3,{r:2.3}],["b_ceres",4,{r:2.77}],["p_jupiter",1,{r:5.2028}],["j_ioplume",2,{r:5.4}],["j_grs",4,{r:5.7}],["s_light",4,{r:9.5}],["p_discovery",2,{r:14}],["i_palebluedot",3,{r:20}],["ne_light",4,{r:28}],["p_kuiper",1,{r:30}],["p_status",2,{r:31}],["p_others",4,{r:31.6}],["p_sun",3,{r:32.2}],["p_heart",1,{r:32.7}]],arrive:[["p_mtn",2],["p_charon",1],["p_haze",2],["p_south",3],["p_arrokoth",3],["p_family",4],["p_voyager",1]],arr:{kind:"flyby",orbit:12500,far:140,inc:.3},fin:{t:"Plutonun yan\u0131ndan ke\xE7din",x:"Q\u0131rat New Horizons kimi Plutonun 12 500 kilometr yax\u0131nl\u0131\u011F\u0131ndan \xF6td\xFC. Orbit\u0259 girm\u0259k \xFC\xE7\xFCn saniy\u0259d\u0259 14 kilometr s\xFCr\u0259ti s\xF6nd\xFCrm\u0259y\u0259 yanacaq \xE7atmazd\u0131. Arxada G\xFCn\u0259\u015Fl\u0259 i\u015F\u0131qlanan mavi duman halqas\u0131 qal\u0131r. Bu real \u015F\u0259kli New Horizons \xE7\u0259kib.",p:"plutohaze"}}},_f=["iss","moon","venus","mercury","mars","jupiter","saturn","uranus","neptune","pluto"],st={add:(r,t)=>[r[0]+t[0],r[1]+t[1],r[2]+t[2]],sub:(r,t)=>[r[0]-t[0],r[1]-t[1],r[2]-t[2]],mul:(r,t)=>[r[0]*t,r[1]*t,r[2]*t],dot:(r,t)=>r[0]*t[0]+r[1]*t[1]+r[2]*t[2],cross:(r,t)=>[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]],len:r=>Math.hypot(r[0],r[1],r[2]),norm:r=>{let t=Math.hypot(r[0],r[1],r[2])||1;return[r[0]/t,r[1]/t,r[2]/t]},mix:(r,t,e)=>[r[0]+(t[0]-r[0])*e,r[1]+(t[1]-r[1])*e,r[2]+(t[2]-r[2])*e]};var yf=(r,t)=>{let e=r*me,n=t*me;return[Math.cos(e)*Math.cos(n),Math.sin(e),-Math.cos(e)*Math.sin(n)]},Ou=[0,10,20,30,45,60,72,90,120,147,150,195,240,300,360,420,480,520,540],Jx=[0,.18,.75,1.8,4.4,8.2,12.3,20,38,62,65,105,135,160,172,182,192,200,200],Zx=[0,0,.01,.06,.4,1.6,3.5,9,30,68,73,190,330,560,830,1150,1530,1820,1975],jx=[0,130,320,560,900,1250,1650,2600,4700,7900,7950,9200,10800,13500,16800,20500,24600,28e3,28040],as=Bn(Ou,Jx),Js=Bn(Ou,Zx),$x=Bn(Ou,jx),Qx=72921159e-12,mf=2*Math.PI/(27.3217*86400),hi=yf(12,qe.lon-52.5);function gf(r,t,e){let n=e/(1-t*t);if(t<1){let a=2*Math.atan(Math.sqrt((1-t)/(1+t))*Math.tan(r/2));return(a-t*Math.sin(a))/Math.sqrt(zi/(n*n*n))}let i=Math.sqrt((t-1)/(t+1))*Math.tan(r/2),s=2*Math.atanh(Te(i,-.999999,.999999));return(t*Math.sinh(s)-s)/Math.sqrt(zi/(-n*n*n))}function Fu(r,t){let e=os[r],n=Te(Math.round(t/1800),1,4),i=R=>(R||[]).filter(P=>P[1]<=n),s={orbit:i(e.orbit),depart:i(e.depart),cruise:i(e.cruise),arrive:i(e.arrive)};s.depart.length&&s.depart.sort((R,P)=>R[2]-P[2]);let a={orbit:.9,depart:1,cruise:1.3,arrive:1.8},o={orbit:100,depart:120,cruise:150,arrive:210},l=["orbit","depart","cruise","arrive"].filter(R=>R==="orbit"||R==="arrive"||e[R]&&e[R].length),c=t-Bi,u=0,h={};l.forEach(R=>{h[R]=s[R].length+a[R],u+=h[R]}),l.forEach(R=>{h[R]=h[R]/u*c});let d=0;if(l.forEach(R=>{h[R]<o[R]&&(d+=o[R]-h[R],h[R]=o[R])}),d>0){let R=l.filter(F=>h[F]>o[F]*1.5),P=R.reduce((F,ht)=>F+h[ht],0);R.forEach(F=>{h[F]-=d*h[F]/P})}let f={},g=Bi;l.forEach(R=>{f[R]=[g,g+h[R]],g+=h[R]});let _=pf.map(([R,P])=>({t:R,id:P,ph:"asc"})),m=(R,P,F,ht=1)=>f[R][0]+h[R]*ht*(P+.45)/(F+.35);s.orbit.forEach((R,P)=>_.push({t:m("orbit",P,s.orbit.length),id:R[0],ph:"orbit"})),s.arrive.forEach((R,P)=>_.push({t:m("arrive",P,s.arrive.length,e.kind==="leo"?.8:.86),id:R[0],ph:"arrive"}));let p=yf(qe.lat,qe.lon),M=qe.lon*me,S=qe.lat*me,y=[-Math.sin(M),0,-Math.cos(M)],L=[-Math.sin(S)*Math.cos(M),Math.cos(S),Math.sin(S)*Math.sin(M)],C=(e.az||100)*me,w=st.norm(st.add(st.mul(L,Math.cos(C)),st.mul(y,Math.sin(C)))),N=st.norm(st.cross(p,w)),A=p,b=st.cross(N,A),I=R=>st.add(st.mul(A,Math.cos(R)),st.mul(b,Math.sin(R))),B=R=>st.add(st.mul(A,-Math.sin(R)),st.mul(b,Math.cos(R))),V=R=>Math.atan2(st.dot(R,b),st.dot(R,A)),G=1975/Ve,et=st.norm(st.cross(hi,N)),W=st.cross(st.mul(hi,-1),et),nt=R=>[-hi[0]*R[0]+et[0]*R[1]+W[0]*R[2],-hi[1]*R[0]+et[1]*R[1]+W[1]*R[2],-hi[2]*R[0]+et[2]*R[1]+W[2]*R[2]],X=R=>[-st.dot(hi,R),st.dot(et,R),st.dot(W,R)],gt=Ve+200,yt,At,Pt,Gt,Q=null,ct=0,vt,lt,Ct=2*Math.PI*Math.sqrt(gt**3/zi);if(e.kind==="moon")yt=(384400-gt)/(384400+gt),At=gt*(1+yt),lt=2*Math.PI*e.orbits,Pt=G+lt,Gt=318e3;else if(e.kind==="planet"){yt=1+gt*e.vinf*e.vinf/zi,At=gt*(1+yt);let R=Math.acos(-1/yt),P=st.mul(et,e.dir);Pt=V(P)-R,lt=((Pt-G)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)+2*Math.PI,Pt=G+lt,Gt=2e6}else lt=2*Math.PI*e.orbits;vt=e.orbitSec||lt/(2*Math.PI)*Ct;let zt=Bi+vt,Dt=R=>Math.acos(Te((At/R-1)/yt,-1,1)),Wt=0,rt=0;if(s.depart.length||e.kind!=="leo"){let R=s.depart.length,P=[f.depart[0]],F=[Math.log(gt+5)];s.depart.forEach((ot,tt)=>{let it=s.depart[0][2]<9500?tt===0?f.depart[0]+6:f.depart[0]+28+(h.depart-28)*(tt-.45)/(R-.65):m("depart",tt,R),bt=Math.max(ot[2],gt+60);bt>=Gt*.985&&(bt=Gt*.97),Math.log(bt)<=F[F.length-1]+.02&&(bt=Math.exp(F[F.length-1]+.05)),P.push(it),F.push(Math.log(bt)),_.push({t:it-3,id:ot[0],ph:"depart"})}),P.push(f.depart[1]),F.push(Math.log(Gt));let ht=Bn(P,F);Q=ot=>Math.exp(ht(ot)),ct=zt,e.kind==="moon"?(rt=ct+gf(Math.PI*.99999,yt,At),Wt=Pt+Math.PI):Wt=Pt+Math.acos(-1/yt)+1.1}else Wt=2.4;let ut=R=>e.kind==="moon"?st.mul(I(Wt-mf*(rt-R)),384400):st.mul(I(Wt+mf*R),384400),x=null;if(e.kind==="planet"){let R=e.path,P=R.length,F=[0],ht=0;for(let $=1;$<P;$++)ht+=Math.abs(Math.log(R[$].r/R[$-1].r))+.15*Math.abs(R[$].th-R[$-1].th)*me,F.push(ht);for(let $=0;$<P;$++)F[$]/=ht;let ot=Bn(F,R.map($=>Math.log($.r))),tt=Bn(F,R.map($=>$.th*me)),St=Bn(F,R.map($=>$.d)),it=Bn(F,R.map($=>$.v)),bt=$=>{let mt=Math.exp(ot($)),Rt=tt($);return[mt*Math.cos(Rt),mt*Math.sin(Rt),0]},Ut=$=>st.mul(st.sub(bt(Math.min(1,$+1e-4)),bt(Math.max(0,$-1e-4))),1/2e-4),Bt=$=>{let mt=0,Rt=1,te=R[P-1].r>R[0].r;for(let Ae=0;Ae<40;Ae++){let Yt=(mt+Rt)/2;Math.exp(ot(Yt))<$===te?mt=Yt:Rt=Yt}return(mt+Rt)/2},Tt={};Object.keys(Ge).forEach($=>{let mt=Ge[$];mt.a&&(Tt[$]={a:mt.a,n:2*Math.PI/mt.P,L:mt.L0*me,d0:0})});let Jt=[];R.forEach(($,mt)=>{let Rt=$.fly||(mt===P-1?e.target:null);if(Rt&&(Tt[Rt]={a:$.r,n:2*Math.PI/Ge[Rt].P,L:$.th*me,d0:$.d},$.fly)){let te=st.norm(Ut(F[mt])),Ae=[te[1]*e.dir,-te[0]*e.dir,.22];Jt.push({k:Rt,u:F[mt],b:$.b/Hn,n:st.norm(Ae),eps:3.2*($.b/Hn)/st.len(Ut(F[mt]))})}}),x={cp:R,us:F,S:bt,dS:Ut,uOfR:Bt,day:St,vel:it,bodyH:($,mt)=>{let Rt=Tt[$],te=Rt.L+Rt.n*(mt-Rt.d0);return[Rt.a*Math.cos(te),Rt.a*Math.sin(te),0]},flys:Jt,lr:ot,th:tt};let le=s.cruise.length,O=s.cruise.map($=>({id:$[0],u:$[2].r!=null?Bt($[2].r):$[2].f})).sort(($,mt)=>$.u-mt.u),Mt=[f.cruise[0]],J=[0],at=f.cruise[0];O.forEach(($,mt)=>{let Rt=m("cruise",mt,le),te=Jt.find(Yt=>Uu[$.id].fly===Yt.k&&Math.abs(Yt.u-$.u)<.02),Ae=Te($.u,J[J.length-1]+.004,.992);if(te){let Yt=Math.min(64,h.cruise/(le+1)*.8),Qe=Math.max(J[J.length-1]+.002,te.u-te.eps),wn=te.u+te.eps;Mt.push(Rt-Yt/2+6,Rt+Yt/2+6),J.push(Qe,wn),te.t0=Rt-Yt/2+6,te.t1=Rt+Yt/2+6,_.push({t:Rt-Yt/2+2,id:$.id,ph:"cruise",fly:te.k})}else Mt.push(Rt),J.push(Ae),_.push({t:Rt-2,id:$.id,ph:"cruise"});at=Rt}),Mt.push(f.cruise[1]),J.push(1);for(let $=1;$<J.length;$++)J[$]<=J[$-1]&&(J[$]=J[$-1]+1e-4);x.uAt=Bn(Mt,J)}_.sort((R,P)=>R.t-P.t),_.forEach((R,P)=>{let F=Uu[R.id];if(!F)return;R.card=F;let ht=_[P+1]?_[P+1].t:t;R.hold=Te(ht-R.t-3,12,70),F.enc&&(R.enc=F.enc,R.e0=R.t-2,R.e1=R.t+Te(ht-R.t-4,24,58))}),_.push({t:t-1,id:"fin",ph:"done",card:e.fin,fin:!0,hold:1e9});let U=e.kind==="moon"?Ge.moon:e.kind==="planet"?Ge[e.target]:null,D=null,j=R=>{let P=R*me,F=et;return st.norm(st.add(st.mul(W,Math.cos(P)),st.mul(F,Math.sin(P))))},Z={};function _t(R,P){let F=Q(R),ht=Dt(F),ot=Pt+ht;P.G=st.mul(I(ot),F);let tt=I(Pt),St=B(Pt);return P.vel=st.norm(st.add(st.mul(tt,-Math.sin(ht)),st.mul(St,yt+Math.cos(ht)))),P.met=ct+gf(ht,yt,At),P.speed=Math.sqrt(Math.max(.01,zi*(2/F-(1-yt*yt)/At))),e.kind==="moon"&&(P.speed=Math.max(P.speed,.85)),P}let pt=Q?_t(f.depart[1],{}):null;if(e.kind==="moon")D={A0:st.sub(pt.G,ut(pt.met)),met0:pt.met};else if(e.kind==="planet"){let R=st.norm(st.sub(x.S(.985),x.S(1))),P=U.r*e.arr.far;D={A0:st.mul(nt(R),P),met0:pt.met+x.day(1)*86400,d1:x.day(1),backH:st.mul(R,P/Hn)},x.delta0=X(st.mul(pt.G,1/Hn))}if(D){let R=st.norm(D.A0),P=e.kind==="moon"?[0,1,0]:j(U.tilt),F=st.norm(st.cross(P,R)),ht=e.arr.inc!=null?e.arr.inc:.35,ot=st.norm(st.add(st.mul(P,Math.cos(ht)),st.mul(F,Math.sin(ht))));ot=st.norm(st.sub(ot,st.mul(R,st.dot(ot,R)))),D.e1=R,D.e2=st.cross(ot,R),D.N=ot,D.pole=P,D.r0=st.len(D.A0),D.ro=U.r+e.arr.orbit;let tt=e.kind==="moon"?hi:st.norm(nt(st.mul(x.bodyH(e.target,D.d1),-1)));st.dot(tt,D.e2)<0&&(D.e2=st.mul(D.e2,-1),D.N=st.mul(D.N,-1)),D.sunAng=Math.atan2(st.dot(tt,D.e2),st.dot(tt,D.e1));let St=2*Math.PI,bt=((D.sunAng-50*me-1.25-.55)%St+St)%St/St;bt<.55&&(bt+=1),D.turns=bt}function T(R,P){let F=e.arr,ht=F.kind,ot,tt,St;if(ht==="flyby"){let Ft=D.ro,le=U.r*55,O=st.mul(D.e1,-1),Mt;R<.55?Mt=-D.r0*Math.pow(1-R/.55,2.6):Mt=le*Math.pow((R-.55)/.45,2.2),P.A=st.add(st.mul(D.e2,Ft),st.mul(O,Mt)),P.vel=O,P.land=0;return}let it=.52,bt=ht==="land"?.84:1,Ut=1.25,Bt=ht==="land"?D.turns:.9;if(R<it){let Ft=R/it;ot=Math.exp(he(Math.log(D.r0),Math.log(D.ro),ui(Ft)*.985+.015*Ft)),tt=Ut*Math.pow(Ft,2.4),P.land=0}else if(R<bt){let Ft=(R-it)/(bt-it);ot=D.ro,tt=Ut+Ft*Bt*2*Math.PI,P.land=0}else{let Ft=(R-bt)/(1-bt);ot=he(D.ro,U.r+(e.kind==="moon"?60:170),ui(Math.min(1,Ft*1.15))),tt=Ut+Bt*2*Math.PI+Ft*.55,P.land=Ft}let Tt=Math.cos(tt),Jt=Math.sin(tt);P.A=st.add(st.mul(D.e1,ot*Tt),st.mul(D.e2,ot*Jt)),P.vel=st.norm(st.add(st.mul(D.e1,-Jt),st.mul(D.e2,Tt)))}let v=["mercury","venus","mars","jupiter","saturn","uranus","neptune"];return{id:r,m:e,D:t,L:n,T:f,len:h,events:_,tgt:U,path:x,arr:D,rhat:I,sunDir:hi,Q:nt,pro:et,Nw:W,nrm:N,at(R,P={}){P.t=R,P.burn=0,P.fly=null,P.land=0,P.rel=P.rel||{};let F=P.rel,ht=null,ot=0;if(R<Bi){P.phase="asc",P.q=R/Bi,P.alt=as(R),P.down=Js(R),P.speed=$x(R)/3600,P.met=R;let tt=P.down/Ve;P.G=st.mul(I(tt),Ve+P.alt+qe.elev/1e3*Math.max(0,1-R/150));let St=Math.min(Bi,R+1),it=st.mul(I(Js(St)/Ve),Ve+as(St));P.vel=st.norm(st.sub(it,st.mul(I(tt),Ve+P.alt))),R>=520&&(P.vel=B(tt)),P.burn=R<147?1:R<156?0:R<520?2:0,P.stage=R<150?0:R<195?1:2}else if(R<f.orbit[1]){P.phase="orbit";let tt=P.q=(R-f.orbit[0])/h.orbit,St=G+tt*lt,it=e.kind==="leo"?he(200,404,Vt(.2,.7,tt)):200;P.alt=it,P.G=st.mul(I(St),Ve+it),P.vel=B(St),P.met=Bi+tt*vt,P.speed=Math.sqrt(zi/(Ve+it)),P.stage=e.kind==="leo"&&tt>.06?3:2,P.burn=e.kind==="leo"?0:tt>.985?2:0,P.psi=St}else if(f.depart&&R<f.depart[1]){P.phase="depart",P.q=(R-f.depart[0])/h.depart,_t(R,P),P.alt=st.len(P.G)-Ve;let tt=R-f.depart[0];P.burn=tt<16?2:0,P.stage=tt<24?2:3}else if(f.cruise&&R<f.cruise[1]){P.phase="cruise",P.q=(R-f.cruise[0])/h.cruise;let tt=x.uAt(R);P.u=tt,ot=x.day(tt),ht=st.add(x.S(tt),st.add(st.mul(x.delta0,1-Vt(0,.06,tt)),st.mul(D.backH,Vt(.93,1,tt)))),x.flys.forEach(St=>{let it=(tt-St.u)/(St.eps*3.2);Math.abs(it)<3&&(ht=st.add(ht,st.mul(St.n,St.b*Math.exp(-it*it))),R>=St.t0-4&&R<=St.t1+4&&(P.fly=St.k))}),P.vel=st.norm(nt(x.dS(tt))),P.speed=x.vel(tt),P.met=pt.met+ot*86400,P.stage=3}else{P.phase=R>=t?"done":"arrive";let tt=P.q=Te((R-f.arrive[0])/h.arrive);if(P.stage=3,e.kind==="leo"){let St=G+lt+tt*1.9;P.psi=St,P.G=st.mul(I(St),Ve+he(404,408,tt)),P.vel=B(St),P.alt=he(404,408,tt),P.met=Bi+vt+tt*e.arrSec,P.speed=Math.sqrt(zi/(Ve+P.alt)),P.dock=tt}else{T(tt,P),P.met=D.met0+tt*(e.arrSec||172800);let St=st.len(P.A);if(P.speed=e.arr.kind==="flyby"?14.5:Math.sqrt((e.kind==="moon"?4902.8:6674e-23*5972e21*{mercury:.0553,venus:.815,mars:.1074,jupiter:317.8,saturn:95.16,uranus:14.54,neptune:17.15}[e.target])*(P.q<.52?2/St:1/St)),e.kind==="moon"){let it=ut(P.met);P.G=st.add(it,P.A),P.alt=st.len(P.G)-Ve}else ot=D.d1,ht=st.add(x.bodyH(e.target,ot),X(st.mul(P.A,1/Hn)))}}if(P.helio=ht,P.dayH=ot,P.earthRot=Qx*(ht?0:P.met)+0,!ht)F.earth=st.mul(P.G,-1),F.moon=st.sub(ut(P.met),P.G),F.sun=st.sub(st.mul(hi,Hn),P.G),P.rSun=1,P.distEarth=st.len(P.G),x?v.forEach(tt=>{F[tt]=st.sub(st.mul(nt(st.sub(x.bodyH(tt,0),[1,0,0])),Hn),P.G)}):v.forEach(tt=>{let St=Ge[tt],it=St.L0*me;F[tt]=st.sub(st.mul(nt([St.a*Math.cos(it)-1,St.a*Math.sin(it),0]),Hn),P.G)});else{let tt=St=>st.mul(nt(st.sub(St,ht)),Hn);F.sun=tt([0,0,0]),F.earth=tt(x.bodyH("earth",ot)),F.moon=null,v.concat(["pluto"]).forEach(St=>{F[St]=tt(x.bodyH(St,ot))}),P.rSun=st.len(ht),P.distEarth=st.len(F.earth)}return e.kind==="moon"?F.target=F.moon:e.kind==="planet"&&(F.target=F[e.target]),P.distTarget=F.target?st.len(F.target)-U.r:0,P.land>0&&(P.distTarget=Math.max(0,P.distTarget-(e.kind==="moon"?60:170)*Vt(.25,1,P.land))),P}}}var bf=new ts,or={};function pn(r,t=!0,e){if(or[r])return or[r];let n=bf.load(r,e);return t&&(n.colorSpace=pe),n.anisotropy=8,or[r]=n,n}function ls(r,t=!0){return new Promise(e=>{if(or[r]&&or[r].image)return e(or[r]);let n=bf.load(r,()=>e(n),void 0,()=>e(n));t&&(n.colorSpace=pe),n.anisotropy=8,or[r]=n})}function Mf(r){let t=new Kt(new zn(1,48,24),new Sn({map:pn(r),side:ze,depthTest:!1,depthWrite:!1,fog:!1}));return t.renderOrder=-10,t.frustumCulled=!1,t.rotation.set(1.05,.4,.2),t}function Sf(){let r=document.createElement("canvas");r.width=r.height=512;let t=r.getContext("2d"),e=t.createRadialGradient(256,256,0,256,256,256);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.035,"rgba(255,252,240,1)"),e.addColorStop(.055,"rgba(255,238,200,0.5)"),e.addColorStop(.11,"rgba(255,224,176,0.13)"),e.addColorStop(.28,"rgba(255,214,164,0.035)"),e.addColorStop(.6,"rgba(255,205,155,0.008)"),e.addColorStop(1,"rgba(255,200,150,0)"),t.fillStyle=e,t.fillRect(0,0,512,512),t.globalCompositeOperation="lighter";for(let i=0;i<6;i++){t.save(),t.translate(256,256),t.rotate(i*Math.PI/6+.26);let s=t.createLinearGradient(-256,0,256,0);s.addColorStop(0,"rgba(255,240,220,0)"),s.addColorStop(.5,"rgba(255,240,220,0.5)"),s.addColorStop(1,"rgba(255,240,220,0)"),t.fillStyle=s,t.fillRect(-256,-1.2,512,2.4),t.restore()}let n=new tr(new Ii({map:new an(r),blending:bn,depthTest:!0,depthWrite:!1,transparent:!0}));return n.renderOrder=6,n}var Af=`varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying vec3 vL;
  void main(){ vUv = uv; vL = position; vN = normalize(mat3(modelMatrix)*normal); vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,tv=`uniform sampler2D map; uniform sampler2D ringMap; uniform vec3 uSun, uTint; uniform vec4 uAtmo; uniform vec3 uRing; uniform vec3 uAxis; uniform vec3 uCenter; uniform float uR, uAmb, uGain, uHasMap;
  varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying vec3 vL;
  void main(){ vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); float ndl = dot(N, uSun);
    float d = smoothstep(-0.03, 0.18, ndl)*mix(1.0, sqrt(max(ndl, 0.0)), 0.55);
    vec3 base = mix(uTint, texture2D(map, vUv).rgb, uHasMap);
    if (uRing.x > 0.0) { vec3 P = (vW - uCenter)/uR; float den = dot(uSun, uAxis); if (abs(den) > 1e-4) { float t = -dot(P, uAxis)/den; if (t > 0.0) { float rho = length(P + uSun*t); float u = (rho - uRing.x)/(uRing.y - uRing.x); if (u > 0.0 && u < 1.0) d *= 1.0 - 0.8*texture2D(ringMap, vec2(u, 0.5)).a; } } }
    vec3 col = base*(uAmb + d*uGain);
    float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0);
    col += uAtmo.rgb*uAtmo.a*rim*smoothstep(-0.15, 0.35, ndl);
    gl_FragColor = vec4(col, 1.0); gl_FragColor = linearToOutputTexel(gl_FragColor); }`,lr=class{constructor(t,e){this.def=t,this.group=new re,this.u={map:{value:null},ringMap:{value:null},uSun:{value:new k(1,0,0)},uTint:{value:new Nt(...t.color)},uAtmo:{value:new ee(...t.atmo||[0,0,0,0])},uRing:{value:new k(0,0,0)},uAxis:{value:new k(0,1,0)},uCenter:{value:new k},uR:{value:1},uAmb:{value:.012},uGain:{value:1.08},uHasMap:{value:0}},this.mesh=new Kt(new zn(1,96,48),new Re({uniforms:this.u,vertexShader:Af,fragmentShader:tv})),t.obl&&(this.mesh.scale.y=1-t.obl),this.spin=new re,this.spin.add(this.mesh),this.group.add(this.spin),e&&ls(e).then(a=>{this.u.map.value=a,this.u.uHasMap.value=1});let n=document.createElement("canvas");n.width=n.height=64;let i=n.getContext("2d"),s=i.createRadialGradient(32,32,0,32,32,32);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25,"rgba(255,255,255,0.6)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,64,64),this.dot=new tr(new Ii({map:new an(n),color:new Nt(...t.color),blending:bn,depthTest:!1,depthWrite:!1,transparent:!0})),this.dot.renderOrder=-4,t.rings&&this.addRings(t.rings)}addRings(t){let e=t.in/this.def.r,n=t.out/this.def.r,i;if(t.tex)i=pn("img/planets/"+t.tex);else{let a=document.createElement("canvas");a.width=512,a.height=4;let o=a.getContext("2d");o.clearRect(0,0,512,4),[[.02,2],[.1,2],[.2,2],[.31,3],[.44,3],[.52,2],[.6,3],[.7,3],[.83,4],[.97,9]].forEach(([l,c])=>{o.fillStyle="rgba(150,160,170,0.55)",o.fillRect(l*512-c/2,0,c,4)}),i=new an(a),i.colorSpace=pe}this.u.ringMap.value=i,t.faint||this.u.uRing.value.set(e,n,1);let s=new fo(e,n,160,1);s.rotateX(-Math.PI/2),this.ru={map:{value:i},uSun:{value:this.u.uSun.value},uIn:{value:e},uOut:{value:n},uFaint:{value:t.faint?1:0}},this.ring=new Kt(s,new Re({transparent:!0,side:Fe,depthWrite:!1,uniforms:this.ru,vertexShader:"uniform vec3 uSun; varying vec3 vL; varying vec3 vW; varying vec3 vS; varying vec3 vC; void main(){ vL = position; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; mat4 inv = inverse(modelMatrix); vS = normalize((inv*vec4(uSun, 0.0)).xyz); vC = (inv*vec4(cameraPosition, 1.0)).xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform sampler2D map; uniform float uIn, uOut, uFaint; varying vec3 vL; varying vec3 vW; varying vec3 vS; varying vec3 vC;
        void main(){ float rho = length(vL.xz); float u = (rho - uIn)/(uOut - uIn); vec4 t = texture2D(map, vec2(u, 0.5));
          vec3 S = normalize(vS); float b = dot(vL, S); float disc = b*b - (dot(vL, vL) - 1.0); float sh = (b < 0.0 && disc > 0.0) ? 0.06 : 1.0;
          float same = step(0.0, vC.y*S.y);
          vec3 col = t.rgb*mix(0.55*(1.0 - 0.75*t.a), 1.0, same)*sh; float a = t.a*mix(0.8, 1.0, same);
          if (uFaint > 0.5) { col = vec3(0.5, 0.55, 0.6)*sh; a = t.a*0.5; }
          gl_FragColor = vec4(col, a); gl_FragColor = linearToOutputTexel(gl_FragColor); }`})),this.ring.renderOrder=2,this.group.add(this.ring)}place(t,e,n,i,s,a,o,l){let c=t.length(),u=1;c>l&&(u=l/c),this.group.position.copy(t).multiplyScalar(u);let h=e*u;this.mesh.parent.scale.setScalar(1),this.group.scale.setScalar(h),i&&(this.group.quaternion.setFromUnitVectors(ye.DEFAULT_UP,i),this.u.uAxis.value.copy(i)),this.spin.rotation.y=s||0,this.u.uSun.value.copy(n),this.u.uCenter.value.copy(this.group.position),this.u.uR.value=h;let d=e/c,f=d*o;this.px=f,this.group.visible=f>.6;let g=f<2.2;if(this.dot.visible=g,g){this.dot.position.copy(t).normalize().multiplyScalar(l*.5);let _=l*.5/o,m=Math.min(1,.35+f*.5);this.dot.scale.setScalar(_*(7+5*m)),this.dot.material.opacity=Math.min(1,.45+f)}}add(t){t.add(this.group),t.add(this.dot)}hide(){this.group.visible=!1,this.dot.visible=!1}},ev=`uniform sampler2D tDay, tNight, tCloud, tP0, tP1, tP2; uniform vec4 uB0, uB1, uB2; uniform vec3 uOn; uniform vec3 uSun; uniform float uShift, uCloud, uDetail;
  varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying vec3 vL;
  float hash(vec2 p){ p = fract(p*vec2(0.1031, 0.1030)); p += dot(p, p.yx + 33.33); return fract((p.x + p.y)*p.x); }
  float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0 - 2.0*f); return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y); }
  float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a*vnoise(p); p = p*2.07 + 13.7; a *= 0.5; } return s; }
  float box(vec2 q, float f){ vec2 e = smoothstep(vec2(0.0), vec2(f), q)*smoothstep(vec2(0.0), vec2(f), 1.0 - q); return e.x*e.y; }
  void main(){ vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); float ndl = dot(N, uSun);
    vec3 P = normalize(vL); float lat = degrees(asin(clamp(P.y, -1.0, 1.0))), lon = degrees(atan(-P.z, P.x));
    vec3 day = texture2D(tDay, vUv).rgb; vec2 ll = vec2(lon, lat); vec2 q;
    q = (ll - uB0.xy)/uB0.zw; if (uOn.x > 0.5 && q.x > 0.0 && q.x < 1.0 && q.y > 0.0 && q.y < 1.0) day = mix(day, texture2D(tP0, q).rgb, box(q, 0.12));
    q = (ll - uB1.xy)/uB1.zw; if (uOn.y > 0.5 && q.x > 0.0 && q.x < 1.0 && q.y > 0.0 && q.y < 1.0) day = mix(day, texture2D(tP1, q).rgb, box(q, 0.1));
    q = (ll - uB2.xy)/uB2.zw; if (uOn.z > 0.5 && q.x > 0.0 && q.x < 1.0 && q.y > 0.0 && q.y < 1.0) day = mix(day, texture2D(tP2, q).rgb, box(q, 0.1));
    float c = texture2D(tCloud, vec2(vUv.x + uShift, vUv.y)).r;
    if (uDetail > 0.01) { vec2 dp = vec2((vUv.x + uShift)*2.0, vUv.y)*900.0; float n = fbm(dp + 3.0*fbm(dp*0.5)); float edge = smoothstep(0.03, 0.3, c)*(1.0 - 0.6*smoothstep(0.7, 1.0, c)); c = clamp(c + (n - 0.52)*0.85*edge*uDetail, 0.0, 1.0); c = mix(c, smoothstep(0.1, 0.78, c), 0.55*uDetail); }
    c = smoothstep(0.08, 0.9, c)*uCloud;
    float dl = smoothstep(-0.1, 0.22, ndl); float lit = dl*mix(1.0, sqrt(max(ndl, 0.0)), 0.35);
    float water = smoothstep(0.02, 0.1, day.b - max(day.r, day.g)*0.92);
    vec3 R = reflect(-uSun, N); float spec = pow(max(dot(R, V), 0.0), 70.0)*water*0.55*(1.0 - c);
    vec3 col = day*(0.008 + 1.12*lit) + vec3(1.0, 0.95, 0.85)*spec*dl;
    vec3 twilight = mix(vec3(1.0), vec3(1.0, 0.55, 0.3), smoothstep(0.25, 0.0, ndl));
    col = mix(col, vec3(0.97, 0.98, 1.0)*twilight*(0.012 + 1.05*lit), c);
    float night = 1.0 - smoothstep(-0.2, 0.02, ndl); col += texture2D(tNight, vUv).rgb*night*1.5*(1.0 - 0.85*c);
    float rim = pow(1.0 - max(dot(N, V), 0.0), 3.4); col += vec3(0.2, 0.45, 1.0)*rim*(0.05 + 0.9*dl);
    gl_FragColor = vec4(col, 1.0); gl_FragColor = linearToOutputTexel(gl_FragColor); }`,ko=class{constructor(t){this.group=new re;let e=128/(111.32*Math.cos(qe.lat*Math.PI/180)),n=128/110.574,i=550/(111.32*Math.cos(qe.lat*Math.PI/180)),s=550/110.574;this.u={tDay:{value:pn(t?"img/earth/day_8k.jpg":"img/earth/day_4k.jpg")},tNight:{value:pn("img/earth/night_4k.jpg")},tCloud:{value:pn("img/earth/clouds_4k.jpg",!1)},tP0:{value:pn("img/earth/bm_p2.jpg")},tP1:{value:pn("img/site/s2_L3.jpg")},tP2:{value:pn("img/site/s2_L2.jpg")},uB0:{value:new ee(28.7,20.7,40,40)},uB1:{value:new ee(qe.lon-i,qe.lat-s,2*i,2*s)},uB2:{value:new ee(qe.lon-e,qe.lat-n,2*e,2*n)},uOn:{value:new k(1,1,1)},uSun:{value:new k(1,0,0)},uShift:{value:0},uCloud:{value:1},uDetail:{value:0}},this.u.tCloud.value.wrapS=Nn,this.mesh=new Kt(new zn(1,256,128),new Re({uniforms:this.u,vertexShader:Af,fragmentShader:ev})),this.group.add(this.mesh),this.au={uSun:this.u.uSun},this.atmo=new Kt(new zn(1.02,128,64),new Re({side:ze,transparent:!0,depthWrite:!1,blending:bn,uniforms:this.au,vertexShader:"varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(mat3(modelMatrix)*normal); vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform vec3 uSun; varying vec3 vN; varying vec3 vW; void main(){ vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); float k = smoothstep(0.0, 0.2, -dot(N, V)); k = pow(k, 1.6);
        float s = smoothstep(-0.35, 0.3, dot(N, uSun)); vec3 c = mix(vec3(1.0, 0.45, 0.2), vec3(0.3, 0.6, 1.0), smoothstep(-0.1, 0.25, dot(N, uSun))); gl_FragColor = vec4(c*k*s*1.15, 1.0); }`})),this.group.add(this.atmo),this.dotBody=new lr({color:[.5,.68,1],r:6371}),this.dot=this.dotBody.dot}place(t,e,n,i,s){let a=t.length(),o=6.371,l=1;a>s&&(l=s/a),this.group.position.copy(t).multiplyScalar(l),this.group.scale.setScalar(o*l),this.group.rotation.y=n,this.u.uSun.value.copy(e);let c=o/a*i;this.px=c,this.group.visible=c>.6;let u=c<2.2;this.dot.visible=u,u&&(this.dot.position.copy(t).normalize().multiplyScalar(s*.5),this.dot.scale.setScalar(s*.5/i*11))}add(t){t.add(this.group),t.add(this.dot)}};function xf(r){let t=document.createElement("canvas");t.width=r.width,t.height=r.height;let e=t.getContext("2d",{willReadFrequently:!0});e.drawImage(r,0,0);let n=e.getImageData(0,0,t.width,t.height).data,i=t.width,s=new Float32Array(i*i);for(let a=0;a<i*i;a++)s[a]=(n[a*4]*256+n[a*4+1])*.1-100;return{n:i,h:s}}var vf=(r,t,e)=>{let n=r.n,i=Math.min(n-1.001,Math.max(0,t*(n-1))),s=Math.min(n-1.001,Math.max(0,e*(n-1))),a=i|0,o=s|0,l=i-a,c=s-o,u=r.h;return(u[o*n+a]*(1-l)+u[o*n+a+1]*l)*(1-c)+(u[(o+1)*n+a]*(1-l)+u[(o+1)*n+a+1]*l)*c},Lo=class{constructor(){this.group=new re,this.ready=!1;let t=56e4,e=320,n=new $i(2,2,e,e);n.rotateX(-Math.PI/2),this.u={t0:{value:pn("img/site/s2_L0.jpg")},t1:{value:pn("img/site/s2_L1.jpg")},t2:{value:pn("img/site/s2_L2.jpg")},t3:{value:pn("img/site/s2_L3.jpg")},uSun:{value:new k(.5,.6,.3).normalize()},uHaze:{value:new Nt(.66,.76,.88)},uHazeLen:{value:6e4},uCam:{value:new k}},this.mesh=new Kt(n,new Re({uniforms:this.u,vertexShader:"varying vec3 vW; varying vec3 vN; void main(){ vN = normal; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform sampler2D t0, t1, t2, t3; uniform vec3 uSun, uHaze, uCam; uniform float uHazeLen; varying vec3 vW; varying vec3 vN;
        float box(vec2 q){ vec2 e = smoothstep(vec2(0.0), vec2(0.08), q)*smoothstep(vec2(0.0), vec2(0.08), 1.0 - q); return e.x*e.y; }
        vec2 uvOf(float hw){ return vec2(0.5 + vW.x/(2.0*hw), 0.5 - vW.z/(2.0*hw)); }
        void main(){ vec3 col = texture2D(t3, uvOf(550000.0)).rgb; vec2 q;
          q = uvOf(128000.0); if (q.x > 0.0 && q.x < 1.0 && q.y > 0.0 && q.y < 1.0) col = mix(col, texture2D(t2, q).rgb, box(q));
          q = uvOf(32000.0); if (q.x > 0.0 && q.x < 1.0 && q.y > 0.0 && q.y < 1.0) col = mix(col, texture2D(t1, q).rgb, box(q));
          q = uvOf(8000.0); if (q.x > 0.0 && q.x < 1.0 && q.y > 0.0 && q.y < 1.0) col = mix(col, texture2D(t0, q).rgb, box(q));
          float sh = 0.82 + 0.3*max(dot(normalize(vN), uSun), 0.0); col *= sh*1.06;
          float dist = length(vW - uCam); float f = 1.0 - exp(-dist/uHazeLen); col = mix(col, uHaze, clamp(f, 0.0, 1.0)*0.96);
          gl_FragColor = vec4(col, 1.0); gl_FragColor = linearToOutputTexel(gl_FragColor); }`})),this.mesh.frustumCulled=!1,this.group.add(this.mesh),this.su={uZen:{value:new Nt(.2,.42,.8)},uHor:{value:new Nt(.66,.76,.88)},uSun:{value:this.u.uSun.value},uGlow:{value:1}},this.sky=new Kt(new zn(1,32,16),new Re({side:ze,depthTest:!1,depthWrite:!1,uniforms:this.su,vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.0); }",fragmentShader:`uniform vec3 uZen, uHor, uSun; uniform float uGlow; varying vec3 vD; void main(){ vec3 d = normalize(vD); float e = max(d.y, 0.0); vec3 c = mix(uHor, uZen, 1.0 - pow(1.0 - e, 4.0)); if (d.y < 0.0) c = uHor;
        float s = max(dot(d, uSun), 0.0); c += vec3(1.0, 0.92, 0.75)*(pow(s, 900.0)*3.0 + pow(s, 40.0)*0.22 + pow(s, 6.0)*0.08)*uGlow; gl_FragColor = vec4(c, 1.0); gl_FragColor = linearToOutputTexel(gl_FragColor); }`})),this.sky.renderOrder=-9,this.sky.frustumCulled=!1,this.group.add(this.sky);let i=new Image,s=new Image,a=0,o=()=>{++a<2||this.build(n,xf(i),xf(s),t,e)};i.onload=o,s.onload=o,i.src="img/site/dem.png",s.src="img/site/dem2.png"}build(t,e,n,i,s){let a=t.attributes.position,o=qe.elev;this.d1=e,this.d2=n;for(let l=0;l<a.count;l++){let c=a.getX(l),u=a.getZ(l),h=Math.sign(c)*Math.pow(Math.abs(c),2.2)*i,d=Math.sign(u)*Math.pow(Math.abs(u),2.2)*i;a.setXYZ(l,h,this.height(h,d),d)}a.needsUpdate=!0,t.computeVertexNormals(),this.ready=!0}height(t,e){let s=-qe.elev;(Math.max(Math.abs(t),Math.abs(e))<32e4||!1)&&(s=vf(this.d2,.5+t/(2*32e4),.5+e/(2*32e4))-qe.elev);let o=Math.max(Math.abs(t),Math.abs(e));if(o<24e3){let c=vf(this.d1,.5+t/48e3,.5+e/48e3)-qe.elev,u=Math.min(1,(24e3-o)/4e3);s=s*(1-u)+c*u}let l=Math.max(0,(o-3e5)/2e4);return s*Math.max(0,1-l)}setAlt(t,e){let n=Mo.clamp,i=(c,u,h)=>c+(u-c)*h,s=n(t/18,0,1),a=n((t-18)/40,0,1),o=[i(.2,.035,s)*(1-a),i(.42,.09,s)*(1-a),i(.8,.3,s)*(1-a*.97)],l=[i(.66,.42,s)*(1-.55*a),i(.76,.6,s)*(1-.4*a),i(.88,.9,s)*(1-.2*a)];this.su.uZen.value.setRGB(...o),this.su.uHor.value.setRGB(...l),this.u.uHaze.value.setRGB(...l),this.u.uHazeLen.value=55e3+t*16e3,this.u.uCam.value.copy(e.position),this.sky.position.copy(e.position),this.sky.scale.setScalar(e.far*.9)}},No=class{constructor(t,e,n){this.W=e,this.H=n,this.scene=new Pi,this.cam=new Ci(-1,1,1,-1,0,1);let i=pn(t);i.generateMipmaps=!0,i.minFilter=yn,this.u={map:{value:i},uRect:{value:new ee(0,0,1,1)},uMatte:{value:0},uGlow:{value:0},uGlowPos:{value:new ft(.64,.26)},uAsp:{value:e/n},uDim:{value:1},uGrade:{value:0},uCrest:{value:[0,.221,.24,.252,.5,.266,.72,.258,1,.249].reduce((s,a,o,l)=>o%2?s:s.concat([new ft(l[o],l[o+1])]),[])}},this.mesh=new Kt(new $i(2,2),new Re({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:this.u,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D map; uniform vec4 uRect; uniform float uMatte, uGlow, uAsp, uDim, uGrade; uniform vec2 uGlowPos; uniform vec2 uCrest[5]; varying vec2 vUv;
        float crest(float x){ float y = uCrest[0].y; for (int i = 0; i < 4; i++) { if (x >= uCrest[i].x) y = mix(uCrest[i].y, uCrest[i+1].y, clamp((x - uCrest[i].x)/(uCrest[i+1].x - uCrest[i].x), 0.0, 1.0)); } return y; }
        void main(){ vec2 p = mix(uRect.xy, uRect.zw, vUv); vec3 c; float over = max(p.y - 1.0, 0.0);
          if (over > 0.0) { vec3 top = textureLod(map, vec2(clamp(p.x, 0.0, 1.0), 0.995), 6.0).rgb; c = mix(top, vec3(0.42, 0.5, 0.62), smoothstep(0.0, 0.5, over)); } else c = texture2D(map, clamp(p, 0.0, 1.0)).rgb;
          vec2 g = (p - uGlowPos)*vec2(uAsp, 1.0); c = mix(c, pow(c, vec3(1.5))*0.9, uGrade); c += vec3(1.0, 0.62, 0.3)*uGlow*exp(-dot(g, g)*26.0)*0.3; c *= uDim;
          float a = 1.0; if (uMatte > 0.5) a = 1.0 - smoothstep(-0.0025, 0.0025, p.y - crest(p.x));
          gl_FragColor = vec4(c, a); gl_FragColor = linearToOutputTexel(gl_FragColor); }`})),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}setCrop(t,e,n,i){this.u.uRect.value.set(t/this.W,1-(e+i)/this.H,(t+n)/this.W,1-e/this.H)}render(t,e){this.u.uMatte.value=e?1:0,t.render(this.scene,this.cam)}};var $e=(r,t=1)=>new k(r[0]*t,r[1]*t,r[2]*t),Ef=new k(0,1,0),Tf={iss:109,hubble:13.2,ssl1300:30,jwst:21,bennu:490,pioneer:9,dawn:19.7,juno:20,cassini:11,magellan:9.2,messenger:6.5,parker:6,lro:6.5,mro:13.6,voyager:13},Vn=3840,Gn=2358,cr=2956,Do=800,zu=.742*Gn,di=.64*Vn,Uo=class{constructor(t){this.canvas=t;let e=this.r=new ja({canvas:t,antialias:!0,powerPreference:"high-performance"});e.autoClear=!1,e.outputColorSpace=pe,e.setClearColor(0,1);let n=e.getContext();this.hi=e.capabilities.maxTextureSize>=8192&&!(navigator.deviceMemory&&navigator.deviceMemory<4)&&Math.max(screen.width,screen.height)>=1200,this.far=new Pi,this.near=new Pi,this.flat=new Pi,this.camFar=new we(50,1,.01,12e3),this.camNear=new we(50,1,.5,8e4),this.camFlat=new we(50,1,20,25e5),this.sunL=new sr(16777215,3.2),this.near.add(this.sunL),this.near.add(this.sunL.target),this.hemi=new go(9414344,4868666,.9),this.near.add(this.hemi),this.fill=new sr(12175598,0),this.near.add(this.fill),this.near.add(this.fill.target),this.fov=48,this.rk=of(),this.near.add(this.rk.root),this.pad=hf(),this.near.add(this.pad),this.smoke=new Co(900),this.near.add(this.smoke.points);let i=document.createElement("canvas");i.width=i.height=256;{let s=i.getContext("2d"),a=s.createRadialGradient(128,128,0,128,128,128);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.12,"rgba(255,240,210,0.85)"),a.addColorStop(.4,"rgba(255,190,120,0.22)"),a.addColorStop(1,"rgba(255,160,90,0)"),s.fillStyle=a,s.fillRect(0,0,256,256)}this.glow=new tr(new Ii({map:new an(i),color:16763024,blending:bn,depthWrite:!1,transparent:!0,opacity:0})),this.glow.scale.setScalar(120),this.near.add(this.glow),this.plate=new No("img/site/plate_field.jpg",Vn,Gn),this.models={},this.loader=new To,this.encGroup=new re,this.near.add(this.encGroup),this.bodies={},this.moons=[],this.S={},this.labels=[],this.shot="plate",this.idleP=0,this.time=0,this.plan=null,this.camQ=new He,this.lookDir=new k(0,0,-1),this.upDir=new k(0,1,0),this.rigInit=!1,this.resize(),addEventListener("resize",()=>this.resize())}resize(){let t=this.canvas.clientWidth||innerWidth,e=this.canvas.clientHeight||innerHeight,n=Math.min(devicePixelRatio||1,this.hi?2:1.5);this.r.setPixelRatio(n),this.r.setSize(t,e,!1),this.w=t,this.h=e,this.asp=t/e,[this.camFar,this.camFlat].forEach(i=>{i.aspect=this.asp,i.updateProjectionMatrix()})}initSpace(){this.spaceReady||(this.spaceReady=!0,this.stars=Mf(this.hi?"img/planets/stars_8k.jpg":"img/planets/stars_4k.jpg"),this.far.add(this.stars),this.sun=Sf(),this.far.add(this.sun),this.earth=new ko(this.hi),this.earth.add(this.far),this.moon=new lr(Ge.moon,"img/planets/moon.jpg"),this.moon.add(this.far),["mercury","venus","mars","jupiter","saturn","uranus","neptune","pluto"].forEach(t=>{let e=new lr(Ge[t],null);e.add(this.far),e.hide(),this.bodies[t]=e}),this.ground=new Lo,this.flat.add(this.ground.group))}preload(t){let e=["img/site/plate_field.jpg"],n=0;return Promise.all(e.map(i=>ls(i).then(()=>t&&t(++n/e.length))))}preloadMission(t,e){this.initSpace();let n=[this.hi?"img/planets/stars_8k.jpg":"img/planets/stars_4k.jpg",this.hi?"img/earth/day_8k.jpg":"img/earth/day_4k.jpg","img/earth/clouds_4k.jpg","img/earth/night_4k.jpg","img/earth/bm_p2.jpg","img/site/s2_L0.jpg","img/site/s2_L1.jpg","img/site/s2_L2.jpg","img/site/s2_L3.jpg","img/planets/moon.jpg"],i=0;return Promise.all(n.map(s=>ls(s,!s.includes("clouds")).then(()=>e&&e(++i/n.length))))}setMission(t){this.plan=t,this.initSpace();let e=t.m;this.rigInit=!1,this.moons.forEach(s=>{this.far.remove(s.b.group),this.far.remove(s.b.dot)}),this.moons=[];let n=new Set;e.target&&n.add(e.target),t.path&&t.path.cp.forEach(s=>s.fly&&n.add(s.fly)),n.forEach(s=>{let a=this.bodies[s],o=Ge[s];if(a.u.uHasMap.value)return;let l=o.tex;s==="mars"&&this.hi&&e.target==="mars"&&(l="mars_8k.jpg"),ls("img/planets/"+l).then(c=>{a.u.map.value=c,a.u.uHasMap.value=1})}),e.kind==="moon"&&this.hi&&ls("img/planets/moon_8k.jpg").then(s=>{this.moon.u.map.value=s});let i=e.target&&Ge[e.target];i&&i.moons&&i.moons.forEach(([s,a,o,l,c],u)=>{let h=new lr({color:[.7,.7,.7],r:o},"img/planets/"+s+".jpg");h.add(this.far),h.hide(),this.moons.push({b:h,id:s,name:a,r:o,a:l,P:c,ph:u*2.1+.7})}),t.events.forEach(s=>{s.enc&&this.loadModel(s.enc)}),e.kind==="leo"&&this.loadModel("iss"),this.ts2=e.kind==="leo"?t.T.orbit[0]+.06*t.len.orbit:t.T.depart[0]+24}loadModel(t){if(this.models[t])return this.models[t];let e=new re;e.visible=!1,this.encGroup.add(e),this.models[t]=e;let n=i=>{let s=i.scene,a=new nn().setFromObject(s),o=a.getSize(new k),l=a.getCenter(new k),c=Tf[t]/Math.max(o.x,o.y,o.z);s.position.sub(l);let u=new re;u.add(s),u.scale.setScalar(c),e.add(u),s.traverse(h=>{h.isMesh&&h.material&&(h.material.metalness=Math.min(h.material.metalness??0,.6),t==="bennu"&&(h.material.color.set(9078144),h.material.roughness=1))})};return fetch("models/"+t+".json").then(i=>i.json()).then(i=>{let s=atob(i.glb),a=new Uint8Array(s.length);for(let l=0;l<s.length;l++)a[l]=s.charCodeAt(l);let o=window.createImageBitmap;try{window.createImageBitmap=void 0,this.loader.parse(a.buffer,"",n,()=>{})}finally{window.createImageBitmap=o}}).catch(()=>{}),e}shotAt(t){return!this.plan||t<15?"plate":t<38?"track":t<150?"onboard":t>=462&&t<477?"landing":"space"}update(t,e){this.time+=e;let n=this.time;this.t=t;let i=this.rk;[i.f1a,i.f1b,i.f2a,i.f2b].forEach(a=>{a.material.uniforms.uT.value=n});let s=this.shotAt(t);s!==this.shot&&this.smoke.clear(),this.shot=s,this.smoke.points.visible=s==="plate"||s==="landing",this.fill.intensity=0,this.plan&&t>=0&&this.plan.at(Math.min(t,this.plan.D),this.S),s==="plate"||s==="landing"?this.updPlate(t,e,s==="landing"):s==="track"||s==="onboard"?this.updFlat(t,e,s):this.updSpace(t,e),this.smoke.update(e)}setStage(t,e){let n=this.rk,i=this.S.stage||0,s=!this.plan||t<150;if(n.s1.visible=s||t<215&&t>=150,n.s2.visible=t<this.ts2+90||s,n.fair.forEach(a=>{a.visible=s||t<222}),n.s1.position.set(0,0,0),n.s1.rotation.set(0,0,0),n.s2.position.set(0,46.4,0),n.s2.rotation.set(0,0,0),n.fair.forEach(a=>{a.position.set(0,57.5,0),a.rotation.set(0,0,0)}),n.legs.forEach(a=>{a.rotation.x=0}),n.fins.forEach(a=>{a.rotation.x=0}),s)n.craft.userData.wings.forEach(a=>{a.visible=!1});else{let a=t-150;a<65&&(n.s1.position.y=-(1.5+2.2*a+.55*a*a),n.s1.position.x=.5*a,n.s1.rotation.z=Math.min(2.6,.0012*a*a*a*.2+.004*a*a),n.fins.forEach(h=>{h.rotation.x=-Math.PI/2*Vt(4,9,a)}));let o=t-195;o>0&&o<27&&n.fair.forEach((h,d)=>{let f=d?1:-1;h.position.z=f*(1.2*o+.5*o*o),h.position.y=57.5-.9*o*o,h.rotation.x=f*.11*o,h.rotation.z=.05*o*f});let l=t-this.ts2;l>0&&(n.s2.position.y=46.4-(.9*l+.04*l*l),n.s2.rotation.x=.004*l);let c=n.craft.userData.wings,u=Vt(4,13,l);c.forEach(h=>{h.visible=l>3,h.scale.x=Math.max(.02,u)})}}setFlames(t,e,n){let i=this.rk;i.f1.visible=t>.01,i.f2.visible=e>.01,i.f1a.material.uniforms.uP.value=t*(1-.45*n),i.f1b.material.uniforms.uP.value=t,i.f1a.scale.set(1+2.6*n,1+.7*n,1+2.6*n),i.f2a.material.uniforms.uP.value=e*.55,i.f2b.material.uniforms.uP.value=e,i.nozMat.emissiveIntensity=1.6*e,i.glow1.intensity=0}crop(t,e,n){let i=n*this.asp;i>Vn&&(i=Vn,n=i/this.asp);let s=Te(t-i/2,0,Vn-i),a=Math.min(e-n/2,Gn-n);this.plate.setCrop(s,a,i,n);let o=this.camNear;o.fov=2*Math.atan(Gn/2/cr)/me,o.aspect=Vn/Gn,o.near=2,o.far=2e4;let l=Math.atan((di-Vn/2)/cr),c=Math.atan((zu-Gn/2)/cr);o.position.set(0,-.75,Do),o.up.set(0,1,0);let u=new k(-Math.sin(l)*Math.cos(c),Math.sin(c),-Math.cos(l)*Math.cos(c));o.lookAt(o.position.clone().add(u)),o.setViewOffset(Vn,Gn,s,a,i,n),o.updateProjectionMatrix(),this.smoke.mat.uniforms.uScale.value=cr*this.h*this.r.getPixelRatio()/n,this.cropH=n}updPlate(t,e,n){let i=this.rk,s=this.time,a=this.pad;a.visible=!0,this.encGroup.visible=!1;let o=0,l=0,c=0,u,h,d,f=0,g=0,_=qt;i.root.quaternion.identity(),i.root.position.set(0,qt,0),i.craft.visible=!0,a.userData.retract(0);let m=M=>zu-cr*(M/Do),p=cr/Do;if(n){let M=t-462,S=9;if(i.s1.visible=!0,i.s2.visible=!1,i.fair.forEach(y=>{y.visible=!1}),i.craft.visible=!1,i.s1.position.set(0,0,0),i.s1.rotation.set(0,0,0),g=cf,_=.6,o=M<S?560*Math.pow(1-M/S,1.8):0,l=M<S+.3?Vt(.2,1.2,M)*.55:0,c=l*2,i.legs.forEach(y=>{y.rotation.x=2*Vt(2,5,M)}),i.fins.forEach(y=>{y.rotation.x=-Math.PI/2}),i.root.position.set(g,o+_,0),a.userData.retract(1),h=m(o+24)+30,u=di+(g-40)*p,d=he(1250,900,Vt(0,9,M)),M>S-1.2&&M<S+1.5)for(let y=0;y<5;y++){let L=Math.random()*6.28,C=10+Math.random()*26;this.smoke.emit(g+Math.cos(L)*4,1,Math.sin(L)*4,Math.cos(L)*C,3+Math.random()*6,Math.sin(L)*C,14+Math.random()*16,5+Math.random()*4,.3)}}else{this.setStage(-1,!1);let M=1150,S=Math.min(Vn,M*this.asp),y=1548;if(this.plan){f=1-Vt(-57,-24,t);let L=Vt(-60,-6,t);if(u=he(di-.2*S,di+20,L),h=he(Gn-M/2,y,L),d=he(M,760,L),t>0){o=as(t)*1e3;let C=Vt(.5,7,t);h=he(y,m(o+qt+34)+40,C),d=he(760,1500,Vt(1.5,13,t)),u=he(di+20,di,Vt(2,12,t))}if(l=Vt(-2.9,-1.2,t)*(.75+.25*Vt(-.6,0,t)),c=l*(3.5+3*Vt(0,3,t))*(1-.6*Vt(6,14,t)),a.userData.retract(Vt(-21,-7,t)),i.root.position.y=o+qt,i.root.rotation.z=-.02*Vt(6,15,t),t>-3&&t<10){let C=t<0?5:9,w=Math.random;for(let N=0;N<C;N++)if(w()<.5)this.smoke.emit((w()-.5)*13,1+w()*5,27,(w()-.5)*70,4+w()*26,16+w()*44,12+w()*26,7+w()*7,w()*.9);else{let A=w()<.5?-1:1;this.smoke.emit(A*(4+w()*12),9.5+w()*3,(w()-.5)*30,A*(26+w()*52),2+w()*20,(w()-.5)*20,10+w()*26,7+w()*7,w()*.5)}}}else{let L=this.idleP;u=he(di-.2*S,di+24,ui(L)),h=he(Gn-M/2,y,ui(L)),d=he(M,600,ui(L)),u+=Math.sin(s*.07)*10*(1-L),f=1}l<.05&&Math.random()<e*5&&this.smoke.emit(-1.9,qt+30+Math.random()*14,.6,-1.6-Math.random()*1.6,-.5,.3,1.5+Math.random()*1.3,3+Math.random()*2,0)}this.plate.u.uGrade.value=f,a.userData.lamps.opacity=.4+.55*f,this.sunL.position.set(.72,.6,.55).multiplyScalar(1e3).add(new k(g,0,0)),this.sunL.target.position.set(g,30,0),this.sunL.intensity=2.4*(1-.42*f),this.sunL.color.set(16773340),this.hemi.position.set(0,1,0),this.hemi.color.set(10334412),this.hemi.groundColor.set(6974012),this.hemi.intensity=1.2*(1-.45*f),u+=(Math.sin(s*61)+Math.sin(s*37.3))*c*.8,h+=(Math.sin(s*53)+Math.cos(s*41.7))*c,this.crop(u,h,d),this.setFlames(l,0,0),this.plate.u.uGlow.value=l*(o<200?1:0),this.plate.u.uGlowPos.value.set((di+g*p)/Vn,1-(zu-cr*(o+_)/Do)/Gn),this.glow.position.set(g,o+_-4,6),this.glow.material.opacity=l*.85,this.glow.scale.setScalar(n?70:150),n||(this.S.alt=o/1e3)}updFlat(t,e,n){let i=this.rk,s=this.time,a=this.ground,o=this.S;this.pad.visible=!1,this.encGroup.visible=!1,this.glow.material.opacity=0,this.camNear.clearViewOffset(),this.setStage(-1,!1);let l=o.alt*1e3,c=o.down*1e3,u=as(t+.5)-as(t-.5),h=Js(t+.5)-Js(t-.5),d=Math.atan2(h,Math.max(1e-6,u)),f=new k(c,l,0);i.root.position.copy(f),i.root.quaternion.setFromAxisAngle(new k(0,0,-1),d);let g=Te(o.alt/60);this.setFlames(1,0,g);let _=new k(-.62,.59,.52).normalize();a.u.uSun.value.copy(_),this.sunL.position.copy(f).addScaledVector(_,5e3),this.sunL.target.position.copy(f),this.sunL.intensity=3,this.sunL.color.set(16777215),this.hemi.position.set(0,1,0),this.hemi.color.setRGB(.45*(1-g*.8),.6*(1-g*.7),.9*(1-g*.5)),this.hemi.groundColor.set(5925456),this.hemi.intensity=1;let m=this.camFlat;if(n==="track"){let M=new k(-1900,(a.ready?a.height(-1900,1700):0)+3,1700),S=f.clone().add(new k(0,30,0)),y=M.distanceTo(S);m.position.copy(M),m.up.set(0,1,0);let L=2.2+3*Vt(15,38,t);S.x+=Math.sin(s*5.1)*L+Math.sin(s*13.7)*L*.4,S.y+=Math.cos(s*6.3)*L+Math.sin(s*17.1)*L*.4-45,m.lookAt(S),m.fov=Te(2*Math.atan(150/y)/me,2.2,9),m.near=200,m.far=25e5}else{let M=2.2+.5*Math.sin(s*.05)+.9*Vt(60,150,t),S=he(120,190,Vt(38,150,t)),y=he(.95,.62,Vt(40,150,t)),L=new k(Math.cos(M)*Math.cos(y),Math.sin(y),Math.sin(M)*Math.cos(y)).multiplyScalar(S),C=f.clone().add(new k(0,30,0).applyQuaternion(i.root.quaternion));m.position.copy(C).add(L),m.up.set(0,1,0),m.lookAt(C.clone().add(new k(Math.sin(s*19)*.25,-8+Math.cos(s*23)*.25,0))),m.fov=52,m.near=.5,m.far=25e5}m.updateProjectionMatrix(),m.updateMatrixWorld();let p=this.camNear;p.position.copy(m.position),p.quaternion.copy(m.quaternion),p.fov=m.fov,p.aspect=this.asp,p.near=n==="track"?50:1,p.far=8e4,p.updateProjectionMatrix(),a.setAlt(o.alt,m),a.su.uGlow.value=1-.5*g}updSpace(t,e){let n=this.S,i=this.plan,s=i.m,a=this.rk,o=this.time,l=n.rel;this.pad.visible=!1,this.glow.material.opacity=0,this.encGroup.visible=!0,this.camNear.clearViewOffset(),this.setStage(t,!0);let c=n.burn===2?1:0;this.setFlames(0,c*Vt(0,1.5,t-156>0?t-156:1.5),1);let u=n.phase==="done"?"arrive":n.phase,h=$e(l.sun).normalize(),d=$e(n.vel).normalize(),f=$e(l.earth),g=f.length(),_=f.clone().multiplyScalar(-1/g),m=1-Vt(3e4,25e4,g),p=t<this.ts2?55:60.5;this.center=p;let M=new He().setFromUnitVectors(Ef,d),S=new He().setFromAxisAngle(Ef,t<this.ts2?.4:o*.02);M.multiply(S),a.root.quaternion.copy(M),a.root.position.copy(new k(0,-p,0).applyQuaternion(M)),a.craft.visible=!0;let y=d.clone(),L=new k().crossVectors(d,_).normalize(),C=new k,w=_.clone(),N=t<this.ts2?52:30,A=-.28,b=-.2,I=0,B=$e(i.Nw);if(u==="asc"||u==="orbit"||u==="arrive"&&s.kind==="leo"){let U,D;u==="asc"?(U=he(he(155,105,Vt(150,230,t)),18,Vt(240,400,t))*me,D=30*me):(U=(16+22*Math.sin(o*.021))*me,D=(19+4*Math.sin(o*.013))*me),C.copy(y).multiplyScalar(Math.cos(U)).addScaledVector(L,Math.sin(U)).multiplyScalar(Math.cos(D)).addScaledVector(_,-Math.sin(D))}else if(u==="depart"){let U=f.clone().normalize(),D=Vt(.82,1,n.q)*(s.kind==="moon"?0:1),j=s.kind==="moon"?$e(l.moon).normalize():y,Z=s.kind==="moon"?Vt(.55,.9,n.q):D;C.copy(U).lerp(j,Z).normalize(),C.addScaledVector(L,.25*Math.sin(o*.017)*m).normalize(),w.copy(_).lerp(B,1-m).normalize(),g>3e4&&(I=Z<.5?Math.asin(6371/g):s.kind==="moon"?Math.asin(Math.min(1,1737.4/$e(l.moon).length())):0)}else if(u==="cruise"){let U=$e(l.target).normalize(),D=o*(2*Math.PI/400),j=U.clone().applyAxisAngle(B,.9*Math.sin(D));w.copy(B);let Z=Vt(.25,.4,(Math.sin(o*2*Math.PI/900)+1)/2)*(1-Vt(.85,.95,n.q));if(C.copy(j).lerp($e(l.earth).normalize(),Z*.9).normalize(),n.fly){let _t=i.path.flys.find(T=>T.k===n.fly),pt=Vt(_t.t0-4,_t.t0+5,t)*(1-Vt(_t.t1-2,_t.t1+6,t));C.lerp($e(l[n.fly]).normalize(),pt).normalize(),pt>.5&&(I=Math.asin(Math.min(1,Ge[n.fly].r/$e(l[n.fly]).length())))}}else{let U=$e(l.target),D=U.length(),j=U.clone().multiplyScalar(1/D),Z=i.tgt.r,_t=1-Vt(Z*1.25,Z*3.2,D);w.copy(B);let pt=y.clone().addScaledVector(j,-y.dot(j)).normalize(),T=Math.acos(Math.min(1,Z/D)),v=he(Math.PI/2,T+9*me,_t);C.copy(pt).multiplyScalar(Math.cos(v)).addScaledVector(j,Math.sin(v)).normalize(),w.lerp(j.clone().multiplyScalar(-1),_t).normalize(),C.addScaledVector(L,.06*Math.sin(o*.03)).normalize(),I=Math.asin(Math.min(1,Z/D))}Object.values(this.models).forEach(U=>{U.visible=!1});let V=i.events.find(U=>U.enc&&t>=U.e0&&t<=U.e1);if(V){let U=this.models[V.enc],D=(t-V.e0)/(V.e1-V.e0),j=Tf[V.enc],Z=Math.max(70,j*3.2),_t=Math.max(20,j*1.15),pt=L.clone().multiplyScalar(_t).addScaledVector(w,_t*.35),T=y.clone().multiplyScalar(he(Z,-Z*.7,D)).add(pt);U.visible=!0,U.position.copy(T),U.rotation.set(.3,o*.05+1,.2);let v=Vt(0,.14,D)*(1-Vt(.82,1,D));C.lerp(T.clone().normalize(),v*.9).normalize(),N=he(N,Math.max(N,j*.55+16),v),I=0}if(s.kind==="leo"&&u==="arrive"){let U=this.models.iss,D=n.dock,j=he(1400,34,ui(Te(D/.86)));U.visible=!0,U.position.copy(y.clone().multiplyScalar(j)).addScaledVector(_,he(60,0,ui(Te(D/.86)))),U.quaternion.setFromUnitVectors(new k(1,0,0),_),C.lerp(U.position.clone().normalize(),.75).normalize(),N=he(34,110,Vt(.5,.9,D)),A=-.3,b=-.12}this.rigInit||(this.lookDir.copy(C),this.upDir.copy(w),this.rigInit=!0,this.rigJump=!0);let G=1-Math.exp(-e*1.1);this.lookDir.lerp(C,G).normalize(),this.upDir.lerp(w,G).normalize();let et=I>0?Te(2*I/me/.44,17,48):48;this.fov=this.rigJump?et:he(this.fov,et,1-Math.exp(-e*.8)),this.rigJump=!1;let W=this.camNear,nt=this.camFar,X=this.fov;W.fov=nt.fov=X,W.aspect=nt.aspect=this.asp,N*=Math.tan(24*me)/Math.tan(X*me/2);let gt=new Ht().lookAt(new k,this.lookDir,this.upDir);this.camQ.setFromRotationMatrix(gt);let yt=new k(1,0,0).applyQuaternion(this.camQ),At=new k(0,1,0).applyQuaternion(this.camQ),Pt=Math.tan(X*me/2)*N;this.asp<1&&(A=-.05,b=-.3,N*=1.25),W.position.copy(this.lookDir).multiplyScalar(-N).addScaledVector(yt,-A*Pt*this.asp).addScaledVector(At,-b*Pt),W.quaternion.copy(this.camQ),W.near=.4,W.far=8e4,W.updateProjectionMatrix(),nt.position.set(0,0,0),nt.quaternion.copy(this.camQ),this.sunL.position.copy(h).multiplyScalar(1e3),this.sunL.target.position.set(0,0,0),this.sunL.color.set(16777215),this.sunL.intensity=3.4;let Gt=Vt(-.2,.3,_.dot(h));this.hemi.position.copy(_),this.hemi.color.set(329484),this.hemi.groundColor.setRGB(.32*Gt,.42*Gt,.6*Gt),this.hemi.intensity=.25+1.5*m*Vt(6e4,8e3,g),this.fill.position.copy(this.lookDir).multiplyScalar(-1).addScaledVector(this.upDir,.5).multiplyScalar(500),this.fill.target.position.set(0,0,0),this.fill.intensity=.55,this.earth.u.uDetail.value=Vt(9e3,600,g-6371);let Q=this.h/2/Math.tan(X*me/2),ct=4e3,vt=.001,lt=1e9,Ct=f.clone().multiplyScalar(vt);if(this.earth.place(Ct,h,n.earthRot+0,Q,ct),this.earth.u.uShift.value=o*12e-5,lt=Math.min(lt,Ct.length()-6.371),l.moon){let U=$e(l.moon,vt);this.moon.place(U,1.7374,h,null,2.2,nt,Q,ct),lt=Math.min(lt,U.length()-1.7374)}else this.moon.hide();let zt=$e(l.sun),Dt=zt.length(),Wt=Math.max(.028,695700/Dt/.05);this.sun.position.copy(zt).normalize().multiplyScalar(5e3),this.sun.scale.setScalar(5e3*Wt*2);let rt=this.labels;rt.length=0;let ut=(U,D,j)=>{let Z=D.clone().project(nt);Z.z<1&&Math.abs(Z.x)<.98&&Math.abs(Z.y)<.95&&rt.push({name:U,x:(Z.x+1)/2,y:(1-Z.y)/2,px:j})};Object.keys(this.bodies).forEach(U=>{let D=this.bodies[U],j=l[U];if(!j){D.hide();return}let Z=Ge[U],_t=$e(j,vt),pt=U===s.target,T=null,v=0;if(D.u.uHasMap.value){let q=Z.tilt*me;T=B.clone().multiplyScalar(Math.cos(q)).addScaledVector($e(i.pro),Math.sin(q)).normalize(),v=n.met/3600/Z.rot*2*Math.PI*(pt&&u==="arrive"?1:.02)+1}if(D.place(_t,Z.r*vt,h,T,v,nt,Q,ct),lt=Math.min(lt,_t.length()-Z.r*vt),D.px<40&&(pt||D.px>.25||U===n.fly)&&ut(Z.name,D.group.visible?D.group.position:D.dot.position,D.px),pt&&this.moons.length){let q=new k().crossVectors(T,new k(.3,.2,1)).normalize(),R=new k().crossVectors(T,q);this.moons.forEach(P=>{let F=P.ph+n.met/86400/P.P*2*Math.PI,ht=_t.clone().addScaledVector(q,P.a*vt*Math.cos(F)).addScaledVector(R,P.a*vt*Math.sin(F));P.b.place(ht,P.r*vt,h,T,F,nt,Q,ct),lt=Math.min(lt,ht.length()-P.r*vt),u==="arrive"&&P.b.px>.35&&P.b.px<60&&ut(P.name,P.b.group.visible?P.b.group.position:P.b.dot.position,P.b.px)})}}),(u!=="arrive"||!s.target)&&this.moons.forEach(U=>{u!=="arrive"&&U.b.hide()}),this.earth.px<40&&ut("Yer",this.earth.group.visible?this.earth.group.position:this.earth.dot.position,this.earth.px),l.moon&&this.moon.px<60&&this.moon.px>.3&&ut("Ay",this.moon.group.visible?this.moon.group.position:this.moon.dot.position,this.moon.px),ut("G\xFCn\u0259\u015F",this.sun.position,3),nt.near=Te(lt*.3,4e-4,40),nt.far=12e3,nt.updateProjectionMatrix(),this.stars.position.set(0,0,0),this.stars.scale.setScalar(9e3);let x=Math.max(m*Vt(-.1,.4,_.dot(h))*.75,0);this.stars.material.color.setScalar(1-x)}render(){let t=this.r;t.clear(),this.shot==="plate"||this.shot==="landing"?(this.plate.render(t,!1),t.clearDepth(),t.render(this.near,this.camNear),this.plate.render(t,!0)):this.shot==="track"||this.shot==="onboard"?(t.render(this.flat,this.camFlat),t.clearDepth(),t.render(this.near,this.camNear)):(t.render(this.far,this.camFar),t.clearDepth(),t.render(this.near,this.camNear))}};var Oo={iss_full:"NASA",iss_earth:"NASA",hubble:"NASA",baku:"NASA",caspian:"NASA",aurora:"NASA",bluemarble:"NASA",earthrise:"NASA",epic_moon:"NASA/NOAA",jwst:"NASA",palebluedot:"NASA/JPL-Caltech",earthmoon:"NASA/JPL",earthsaturn:"NASA/JPL-Caltech/SSI",spacewalk:"NASA",dragon:"NASA",zarya:"NASA",saturnv:"NASA",dsn:"NASA/JPL-Caltech",aldrin:"NASA",bootprint:"NASA",eagle:"NASA",a17rover:"NASA",a15rover:"NASA",a17flag:"NASA",lroa11:"NASA/GSFC/Arizona State University",artemis2:"NASA",artemis2moon:"NASA",tycho:"NASA/GSFC/Arizona State University",persselfie:"NASA/JPL-Caltech/MSSS",curioselfie:"NASA/JPL-Caltech/MSSS",marsglobe:"NASA/JPL/USGS",olympus:"NASA/JPL",hirisechute:"NASA/JPL-Caltech/University of Arizona",bluesunset:"NASA/JPL-Caltech/MSSS/Texas A&M",ingenuity:"NASA/JPL-Caltech/ASU/MSSS",sojourner:"NASA/JPL",viking1:"NASA/JPL",opportunity:"NASA/JPL-Caltech",jezero:"NASA/JPL-Caltech/ASU/MSSS",phobos:"NASA/JPL-Caltech/University of Arizona",perspano:"NASA/JPL-Caltech/MSSS/ASU",vesta:"NASA/JPL-Caltech/UCLA/MPS/DLR/IDA",occator:"NASA/JPL-Caltech/UCLA/MPS/DLR/IDA",ahuna:"NASA/JPL-Caltech/UCLA/MPS/DLR/IDA",ida:"NASA/JPL",gaspra:"NASA/JPL/USGS",eros:"NASA/JHUAPL",tempel1:"NASA/JPL-Caltech/UMD",hartley2:"NASA/JPL-Caltech/UMD",perseid:"NASA/Bill Ingalls",neowise:"NASA/Bill Ingalls",meteorcrater:"NASA/GSFC/METI/ERSDAC/JAROS",bennusample:"NASA/Keegan Barber",jupiter:"NASA/JPL-Caltech/SwRI/MSSS",grs:"NASA/JPL-Caltech/SwRI/MSSS",io:"NASA/JPL/University of Arizona",europa:"NASA/JPL-Caltech/SETI Institute",ganymede:"NASA/JPL-Caltech/SwRI/MSSS",callisto:"NASA/JPL/DLR",juppoles:"NASA/JPL-Caltech/SwRI/ASI/INAF/JIRAM",ioplume:"NASA/JHUAPL/SwRI",voyjup:"NASA/JPL",saturn:"NASA/JPL/Space Science Institute",saturnshadow:"NASA/JPL/Space Science Institute",enceladus:"NASA/JPL/Space Science Institute",titansurf:"ESA/NASA/JPL/University of Arizona",hexagon:"NASA/JPL-Caltech/Space Science Institute",mimas:"NASA/JPL/Space Science Institute",titan:"NASA/JPL-Caltech/Space Science Institute",iapetus:"NASA/JPL/Space Science Institute",rings:"NASA/JPL-Caltech/Space Science Institute",uranus:"NASA/JPL-Caltech",miranda:"NASA/JPL-Caltech",neptune:"NASA/JPL",triton:"NASA/JPL/USGS",gds:"NASA/JPL",pluto:"NASA/JHUAPL/SwRI",plutohaze:"NASA/JHUAPL/SwRI",plutomtn:"NASA/JHUAPL/SwRI",charon:"NASA/JHUAPL/SwRI",mercury:"NASA/JHUAPL/Carnegie",caloris:"NASA/JHUAPL/Carnegie",mercurym10:"NASA/JPL",venusm10:"NASA/JPL-Caltech",venusradar:"NASA/JPL",maat:"NASA/JPL",parker:"NASA",sun:"NASA/SDO",family:"NASA/JPL",pioneerplaque:"NASA"};var dt=(r,t=document)=>t.querySelector(r),fi=(r,t=document)=>[...t.querySelectorAll(r)],Ce=window.gsap,us=window.ScrollTrigger,Lf=matchMedia("(prefers-reduced-motion: reduce)").matches,Pe=new Uo(dt("#gl")),js="moon",Hu=30,$t=null,mn=-30,$s=!1,on=!1,Nf=!0,pi=null,Bu="qirat.mission.v1",ta={get(){try{return JSON.parse(localStorage.getItem(Bu)||"null")}catch{return null}},set(r){try{r?localStorage.setItem(Bu,JSON.stringify(r)):localStorage.removeItem(Bu)}catch{}}},se={on:!0,ctx:null,init(){if(!this.ctx)try{let r=window.AudioContext||window.webkitAudioContext,t=this.ctx=new r;this.master=t.createGain(),this.master.gain.value=.9,this.master.connect(t.destination);let e=t.sampleRate*3,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0),s=0;for(let u=0;u<e;u++){let h=Math.random()*2-1;s=(s+.02*h)/1.02,i[u]=s*3.5}let a=(u,h,d)=>{let f=t.createBufferSource();f.buffer=n,f.loop=!0;let g=t.createBiquadFilter();g.type=u,g.frequency.value=h,g.Q.value=d;let _=t.createGain();return _.gain.value=0,f.connect(g),g.connect(_),_.connect(this.master),f.start(),_};this.rumble=a("lowpass",170,.6),this.roar=a("bandpass",620,.5),this.hiss=a("bandpass",2300,.6);let o=t.createOscillator(),l=t.createOscillator(),c=this.drone=t.createGain();o.frequency.value=54,l.frequency.value=81.3,o.type="sine",l.type="sine",c.gain.value=0,o.connect(c),l.connect(c),c.connect(this.master),o.start(),l.start()}catch{this.ctx=null}},set(r,t,e,n){if(!this.ctx)return;let i=this.ctx.currentTime,s=this.on?1:0,a=Math.pow(1-e,1.4),o=qn.buf.launch?.35:1;this.rumble.gain.setTargetAtTime(s*(r*(.25+.75*a)*o+t*.1),i,.25),this.roar.gain.setTargetAtTime(s*r*a*.5*o,i,.2),this.drone.gain.setTargetAtTime(s*n*.05,i,1.5)},air(r){this.ctx&&this.hiss.gain.setTargetAtTime(this.on?r:0,this.ctx.currentTime,.4)},beep(r=880,t=.12,e=.12){if(!this.ctx||!this.on)return;let n=this.ctx,i=n.createOscillator(),s=n.createGain();i.frequency.value=r,s.gain.value=e,s.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+t),i.connect(s),s.connect(this.master),i.start(),i.stop(n.currentTime+t+.02)}},qn={buf:{},live:new Set,async load(r){se.ctx&&await Promise.all(r.map(async t=>{if(this.buf[t]===void 0){this.buf[t]=null;try{let e=await fetch("snd/"+t+".mp3");if(!e.ok)throw 0;this.buf[t]=await se.ctx.decodeAudioData(await e.arrayBuffer())}catch{this.buf[t]=!1}}}))},play(r,t=1){let e=se.ctx,n=this.buf[r];if(!(!e||n==null))if(n){let i=e.createBufferSource(),s=e.createGain();i.buffer=n,s.gain.value=t,i.connect(s),s.connect(se.master),i.start(),this.live.add(i),i.onended=()=>this.live.delete(i)}else{let i=new Audio("snd/"+r+".mp3");i.volume=se.on?Math.min(1,t):0,i.play().catch(()=>{}),this.live.add(i),i.onended=()=>this.live.delete(i)}},each(r){this.live.forEach(t=>{try{r(t)}catch{}})},stop(){this.each(r=>r.stop?r.stop():r.pause()),this.live.clear()}},dr=[],ur=0;function nv(){let r=$t.m,t=$t.T,e=[],n=(i,s,a=1)=>e.push({t:i,n:s,v:a});n(-58,"d_intro"),[["fuel",-51.4],["eng",-47],["guid",-42.6],["comm",-38.2],["wx",-33.8]].forEach(([i,s])=>{n(s,"d_q_"+i),n(s+1.9,"s_"+i)}),n(-29.2,"d_go"),n(-23.6,"g_"+$t.id),n(-19.6,"d_arms"),n(-14.6,"s_telem");for(let i=10;i>=1;i--)n(-i-.12,"n"+i);return n(-5,"launch",.9),n(.4,"d_liftoff"),n(8.5,"d_tower"),n(76,"d_maxq"),n(147.6,"d_meco"),n(156.6,"d_sep"),n(160.2,"d_ses"),n(191,"d_karman"),n(216,"d_fairing"),n(462.4,"landing",.8),n(473,"d_landed"),n(523,"d_seco"),t.depart&&n(t.depart[0]+1.5,"d_depart"),n(t.arrive[0]+4,"d_approach"),r.kind==="leo"?n(t.arrive[0]+.87*$t.len.arrive,"d_dock"):r.arr.kind==="orbit"?n(t.arrive[0]+.53*$t.len.arrive,"d_orbit"):r.arr.kind==="land"&&n($t.D-3.4,"d_land"),e.sort((i,s)=>i.t-s.t)}var iv=r=>{for(ur=0;ur<dr.length&&dr[ur].t<r-.4;)ur++};function rv(){let r=dt("#track");_f.forEach(t=>{let e=os[t],n=document.createElement("button");n.className="card",n.dataset.id=t,n.setAttribute("aria-pressed","false"),n.innerHTML=`<div class="ph"><img src="img/photos/${e.photo}.jpg" alt="${e.title}, real foto" loading="lazy"></div><div class="bd"><h3>${e.name}</h3><p class="bl">${e.blurb}</p><dl><dt>M\u0259saf\u0259</dt><dd>${e.dist}</dd><dt>Yol</dt><dd>${e.ref}</dd><dt>Real m\xFCdd\u0259t</dt><dd>${e.real}</dd></dl><span class="pick">Bu istiqam\u0259ti se\xE7</span></div>`,n.addEventListener("click",()=>{Df(t),Xu("launch")}),r.appendChild(n)})}var sv={iss:"BKS-\u0259",moon:"Aya",venus:"Veneraya",mercury:"Merkuriy\u0259",mars:"Marsa",jupiter:"Yupiter\u0259",saturn:"Saturna",uranus:"Urana",neptune:"Neptuna",pluto:"Plutona"};function Df(r){js=r;let t=os[r];fi(".card").forEach(e=>{let n=e.dataset.id===r;e.classList.toggle("on",n),e.setAttribute("aria-pressed",n),dt(".pick",e).textContent=n?"Se\xE7ildi":"Bu istiqam\u0259ti se\xE7"}),dt("#lname").textContent=sv[r],dt("#lmeta").textContent=`${t.blurb}. Q\u0131rat ${t.ref} missiyas\u0131n\u0131n yolu il\u0259 gedir. H\u0259qiqi u\xE7u\u015F ${t.real} \xE7\u0259kib, s\u0259n is\u0259 onu se\xE7diyin m\xFCdd\u0259t\u0259 s\u0131\u011F\u0131\u015Fd\u0131r\u0131lm\u0131\u015F \u015F\u0259kild\u0259 ya\u015Fayacaqsan.`,Uf()}function Uf(){let r=Fu(js,Hu*60),t=r.events.length-1;dt("#sum").innerHTML=`<span><b>${t}</b> dayanacaq v\u0259 m\u0259lumat kart\u0131</span><span>\u0130lk <b>9 d\u0259qiq\u0259</b> real vaxtla: start, pill\u0259l\u0259rin ayr\u0131lmas\u0131, orbit</span><span>Sonra yol s\u0131x\u0131lm\u0131\u015F vaxtla, h\u0259r m\u0259rh\u0259l\u0259d\u0259 real m\u0259saf\u0259 v\u0259 s\xFCr\u0259t</span>`}function Xu(r){let t=document.getElementById(r);pi?pi.scrollTo(t,{duration:1.4}):t.scrollIntoView({behavior:Lf?"auto":"smooth"})}function Vu(r){let t=r.textContent;return r.textContent="",[...t].map(e=>{let n=document.createElement("span"),i=document.createElement("span");return n.className="ch",i.className="ci",i.textContent=e===" "?"\xA0":e,n.appendChild(i),r.appendChild(n),n})}function av(){rv(),Df(js),fi("#durs button").forEach(h=>h.addEventListener("click",()=>{Hu=+h.dataset.d,fi("#durs button").forEach(d=>d.setAttribute("aria-pressed",d===h)),Uf()})),fi("[data-go]").forEach(h=>h.addEventListener("click",()=>Xu(h.dataset.go))),dt("#start").addEventListener("click",()=>Pf(js,Hu*60,null));let r=ta.get();if(r&&os[r.id]&&r.t>30&&r.t<r.D-5){let h=dt("#resume");h.hidden=!1,h.textContent=`Yar\u0131m\xE7\u0131q missiya var: ${os[r.id].name}, ${Math.round(r.D/60)} d\u0259qiq\u0259lik, ${Io(r.t)} ke\xE7ib. Davam etm\u0259k \xFC\xE7\xFCn toxun.`,h.addEventListener("click",()=>Pf(r.id,r.D,r.t))}let t=dt(".mani .words"),e=dt(".rr",t),n=(h,d)=>{let f=document.createDocumentFragment();return h.textContent.split(/(\s+)/).forEach(g=>{if(!g.trim()){f.appendChild(document.createTextNode(g));return}let _=document.createElement("span");_.className="w"+d,_.textContent=g,f.appendChild(_)}),f};[...t.childNodes].forEach(h=>{if(h.nodeType===3)t.replaceChild(n(h,""),h);else if(h===e){let d=n(h," r");t.replaceChild(d,h)}});let i=dt(".hero h1"),s=Vu(i);if(!Ce||!us||Lf){fi(".mani .w").forEach(h=>{h.style.opacity=1});return}Ce.registerPlugin(us),window.Lenis&&(pi=new window.Lenis({duration:1.1,smoothWheel:!0}),pi.on("scroll",us.update),Ce.ticker.add(h=>pi.raf(h*1e3)),Ce.ticker.lagSmoothing(0)),Ce.from(s.map(h=>h.firstChild),{yPercent:110,opacity:0,duration:1.3,ease:"expo.out",stagger:.07,delay:.15}),Ce.from(".hero .sub > *",{y:24,opacity:0,duration:1,ease:"expo.out",stagger:.1,delay:.7});let a={p:0};Ce.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"+=330%",scrub:1.1,pin:!0,anticipatePin:1,onUpdate:h=>{Nf=h.progress<.999||h.isActive}}}).to(a,{p:1,ease:"power1.inOut",duration:.62,onUpdate:()=>{Pe.idleP=a.p}},.04).fromTo(s,{yPercent:0,xPercent:0,rotate:0,opacity:1},{yPercent:h=>-160-h*30,xPercent:h=>(h-2)*60,rotate:h=>(h-2)*9,opacity:0,ease:"power2.in",duration:.16,stagger:.012,immediateRender:!1},0).fromTo(".hero .sub, .cue, .hero .src",{opacity:1,y:0},{opacity:0,y:-40,ease:"none",duration:.1,immediateRender:!1},0).fromTo(".mantra p:nth-child(1)",{opacity:0,scale:1.25,filter:"blur(14px)"},{opacity:1,scale:1,filter:"blur(0px)",ease:"power2.out",duration:.1},.14).to(".mantra p:nth-child(1)",{opacity:0,y:-60,filter:"blur(10px)",ease:"power1.in",duration:.08},.3).fromTo(".mantra p:nth-child(2)",{opacity:0,scale:1.25,filter:"blur(14px)"},{opacity:1,scale:1,filter:"blur(0px)",ease:"power2.out",duration:.1},.4).to(".mantra p:nth-child(2)",{opacity:0,y:-60,filter:"blur(10px)",ease:"power1.in",duration:.08},.56).fromTo(".spec",{opacity:0,x:-50},{opacity:1,x:0,ease:"power2.out",duration:.08,stagger:.07},.66).to({},{duration:.06});let l=fi(".mani .w");Ce.set(l,{opacity:.2}),Ce.to(l,{opacity:1,ease:"none",stagger:.5,scrollTrigger:{trigger:".mani",start:"top 70%",end:"bottom 75%",scrub:.6}}),Ce.fromTo(".map img",{scale:1.22},{scale:1.04,ease:"none",scrollTrigger:{trigger:".map",start:"top bottom",end:"bottom top",scrub:.8}}),Ce.from(".site h2, .dest h2",{yPercent:40,opacity:0,duration:1.1,ease:"expo.out",scrollTrigger:{trigger:"#site",start:"top 72%"}}),Ce.matchMedia().add("(min-width: 861px)",()=>{let h=dt("#track"),d=()=>h.scrollWidth-innerWidth;Ce.to(h,{x:()=>-d(),ease:"none",scrollTrigger:{trigger:"#dest",start:"top top",end:()=>"+="+(d()+innerHeight*.25),scrub:1,pin:!0,invalidateOnRefresh:!0}})});let u=Vu(dt(".launch h2").firstChild.nodeType===3?(()=>{let h=document.createElement("span"),d=dt(".launch h2");return h.textContent=d.firstChild.textContent,d.replaceChild(h,d.firstChild),h})():dt(".launch h2"));Ce.from(u,{yPercent:120,opacity:0,ease:"expo.out",duration:1,stagger:.04,scrollTrigger:{trigger:"#launch",start:"top 65%"}}),document.fonts&&document.fonts.ready.then(()=>us.refresh())}var ov={asc:"Qalx\u0131\u015F",orbit:"Yer orbiti",depart:"Yerd\u0259n ayr\u0131lma",cruise:"Planetl\u0259raras\u0131 u\xE7u\u015F",arrive:"H\u0259d\u0259f\u0259 \xE7at\u0131r\u0131q",done:"Missiya tamamland\u0131"},wf={a_liftoff:"START",a_maxq:"MAX-Q",a_karman:"KOSMOS",a_seco:"ORB\u0130T"},Zs=0,zo=null,Gu=0,qu=0,Rf=0,Cf=0,hr=!1,Wu=99,cs="",Qs=[];function Fo(r){let t=dt("#big b");if(t.textContent=r,!Ce)return;let e=Vu(t);Ce.killTweensOf(t),Ce.set(t,{opacity:1}),Ce.fromTo(e,{yPercent:80,opacity:0,scale:1.3},{yPercent:0,opacity:1,scale:1,duration:.9,ease:"expo.out",stagger:.035}),Ce.to(e,{yPercent:-60,opacity:0,duration:.7,ease:"power2.in",stagger:.02,delay:2.6})}function lv(r){let t=r.card;zo=r,qu=mn,Gu=mn+r.hold;let e=dt("#info");dt("#iT").textContent=t.t,dt("#iX").textContent=t.x;let n=dt("#iFig");t.p&&Oo[t.p]?(dt("#iImg").src=`img/photos/${t.p}.jpg`,dt("#iImg").alt=t.t,dt("#iCr").textContent=t.cap||"Real foto: "+Oo[t.p],n.hidden=!1):n.hidden=!0,e.classList.add("on"),Qs.push({t:mn,met:Pe.S.met||0,c:t}),se.beep(660,.09,.05),fi("#tl i").forEach(i=>{+i.dataset.t<=mn&&i.classList.add("seen")})}function cv(){dt("#logList").innerHTML=Qs.map(r=>`<li><small>${Du(r.met)}</small><b>${r.c.t}</b><p>${r.c.x}</p></li>`).join("")||"<li><p>H\u0259l\u0259 he\xE7 bir dayanacaq ke\xE7ilm\u0259yib.</p></li>"}function uv(){let r=dt("#tl");fi("i",r).forEach(t=>t.remove()),$t.events.forEach(t=>{if(t.fin)return;let e=document.createElement("i");e.style.left=t.t/$t.D*100+"%",e.dataset.t=t.t,r.appendChild(e)}),Object.values($t.T).forEach(([t])=>{let e=document.createElement("i");e.className="p",e.style.left=t/$t.D*100+"%",e.dataset.t=t,r.appendChild(e)})}async function Pf(r,t,e){se.init(),se.ctx&&se.ctx.state==="suspended"&&se.ctx.resume(),$s=!1,Pe.S={},$t=Fu(r,t);let n=$t.m;js=r,document.body.classList.add("flying"),pi&&pi.stop(),dt("#land").style.display="none",scrollTo(0,0),dt("#load").hidden=!1,dt("#loadB").style.width="0%",dr=nv(),qn.stop(),await Promise.all([Pe.preloadMission($t,i=>{dt("#loadB").style.width=Math.round(i*100)+"%"}),qn.load([...new Set(dr.map(i=>i.n)),"d_done"])]),Pe.setMission($t),dt("#load").hidden=!0,dt("#mission").hidden=!1,dt("#fin").hidden=!0,dt("#fin").classList.remove("on"),hr=!1,dt("#mTitle").textContent=n.title,uv(),Qs.length=0,Zs=0,zo=null,dt("#info").classList.remove("on"),Wu=99,cs="",mn=e??-60,iv(mn),e!=null&&($t.events.forEach((i,s)=>{i.t<e&&!i.fin&&(Qs.push({t:i.t,met:$t.at(i.t,{}).met,c:i.card}),Zs=s+1)}),fi("#tl i").forEach(i=>{+i.dataset.t<=mn&&i.classList.add("seen")})),$s=!0,on=!1,dt("#paused").hidden=!0,dt("#bPause").setAttribute("aria-pressed","false"),dt("#bPause").textContent="Fasil\u0259",ta.set({id:r,D:t,t:Math.max(0,mn)})}function hv(){hr=!0;let r=$t.m,t=r.fin,e=dt("#fin");dt("#finImg").src=`img/photos/${t.p}.jpg`,dt("#finPic").classList.toggle("pano",!!t.pano),dt("#finT").textContent=t.t,dt("#finX").textContent=t.x,dt("#finCr").textContent="Real foto: "+(Oo[t.p]||"NASA"),dt("#finSt").innerHTML=`<div><small>S\u0259nin missiyan</small><b>${Math.round($t.D/60)} d\u0259qiq\u0259</b></div><div><small>Real missiya</small><b>${r.real}</b></div><div><small>Yol</small><b>${r.ref}</b></div><div><small>Ke\xE7il\u0259n dayanacaq</small><b>${Qs.length}</b></div>`,e.hidden=!1,requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add("on"))),dt("#info").classList.remove("on"),ta.set(null),se.set(0,0,1,.6),setTimeout(()=>{hr&&qn.play("d_done")},2600)}function If(){$s=!1,$t=null,Pe.plan=null,mn=-30,ta.set(null),dt("#mission").hidden=!0,dt("#land").style.display="",document.body.classList.remove("flying"),pi&&pi.start(),se.set(0,0,0,0),se.air(0),qn.stop(),dt("#resume").hidden=!0,us&&us.refresh(),Xu("dest")}function dv(r){let t=Pe.S,e=$t.m,n=t.phase||"asc";if(dt("#cRem").textContent=Io(Math.max(0,$t.D-Math.max(0,r))),dt("#tlFill").style.width=Te(r/$t.D)*100+"%",r<0)dt("#mPhase").textContent="Start haz\u0131rl\u0131\u011F\u0131",dt("#tMet").textContent="T\u2212\xA0"+Io(-r),dt("#tAlt").textContent="0 km",dt("#tSpd").textContent="0 km/saat",dt("#tTgt").textContent=e.dist,dt("#tDel").textContent="0 san";else{let c=ov[n];n==="depart"&&e.kind==="moon"&&(c="Aya ged\u0259n yol"),n==="arrive"&&(c=e.kind==="leo"?"Yax\u0131nla\u015Fma v\u0259 birl\u0259\u015Fm\u0259":e.kind==="moon"?"Ay orbiti v\u0259 eni\u015F":e.name+" \u0259traf\u0131nda"),n==="orbit"&&e.kind==="leo"&&(c="Stansiyan\u0131 qovuruq"),dt("#mPhase").textContent=c,dt("#tMet").textContent=Du(t.met||0);let u=!!t.helio,h=!u;dt("#tAltL").textContent=n==="asc"||n==="orbit"||e.kind==="leo"?"H\xFCnd\xFCrl\xFCk":"Yerd\u0259n m\u0259saf\u0259",dt("#tAlt").textContent=Po(n==="asc"||n==="orbit"||e.kind==="leo"?t.alt:h?t.distEarth-Ve:t.distEarth),dt("#tSpdL").textContent=n==="cruise"?"S\xFCr\u0259t, G\xFCn\u0259\u015F\u0259 n\u0259z\u0259r\u0259n":"S\xFCr\u0259t",dt("#tSpd").textContent=n==="asc"?Dn(t.speed*3600)+"\xA0km/saat":Dn(t.speed,t.speed<10?2:1)+"\xA0km/s";let d;e.kind==="leo"?(d=n==="arrive"?he(1.4,.03,Te(t.dock/.86)):n==="orbit"?1.4+9e3*Math.pow(1-t.q,1.6):400-t.alt+1975*0+0,n==="asc"&&(d=Math.max(0,404-t.alt)+9e3),dt("#tTgt").textContent=t.dock>.86?"Birl\u0259\u015Fdi":Po(d)):dt("#tTgt").textContent=t.land>.98?"Eni\u015F":Po(Math.max(0,t.distTarget)),dt("#tDel").textContent=df((h?Math.max(0,t.distEarth-Ve):t.distEarth)/ff)}let i=Pe.shot,s=Pe.earth,a="";i==="landing"?a="Birinci pill\u0259 geri qay\u0131d\u0131b \xC7\u0259nlibel\u0259 enir. Fon: \u015Eamax\u0131, real foto":i==="plate"?a="Fon: \u015Eamax\u0131, real foto. BayAygun, Wikimedia Commons, CC BY-SA 4.0":i==="track"?a="\xC7\u0259nlibeld\u0259n izl\u0259m\u0259 kameras\u0131. Relyef reald\u0131r":i==="onboard"?a="A\u015Fa\u011F\u0131da real Sentinel-2 peyk g\xF6r\xFCnt\xFCs\xFC v\u0259 real relyef":t.phase==="cruise"?a="Ulduzlu s\u0259ma v\u0259 planet x\u0259rit\u0259l\u0259ri: NASA, ESO, Solar System Scope":t.phase==="arrive"&&e.kind!=="leo"?a="S\u0259th x\u0259rit\u0259si real missiya m\u0259lumat\u0131d\u0131r: NASA":a="Yer: NASA Blue Marble peyk mozaikas\u0131",dt("#src2").textContent=a;let o=dt("#labs"),l=i==="space"?Pe.labels:[];for(;o.children.length<l.length;)o.appendChild(document.createElement("span"));[...o.children].forEach((c,u)=>{let h=l[u];if(!h){c.style.display="none";return}c.style.display="",c.textContent=h.name,c.style.left=h.x*100+"%",c.style.top=h.y*100+"%"})}function fv(r){let t=dt("#map"),e=t.getContext("2d"),n=t.width,i=n/2,s=Pe.S;if(e.clearRect(0,0,n,n),r<0||!s.phase)return;e.lineWidth=1.5;let a=(l,c,u)=>{e.beginPath(),e.setLineDash(u||[]),e.strokeStyle=c,e.arc(i,i,l,0,7),e.stroke(),e.setLineDash([])},o=(l,c,u,h,d)=>{e.beginPath(),e.fillStyle=h,e.arc(l,c,u,0,7),e.fill(),d&&(e.fillStyle="rgba(233,238,241,.85)",e.font="600 19px Onest, sans-serif",e.fillText(d,l+u+6,c+6))};if(s.helio){dt("#mapLab").textContent="G\xFCn\u0259\u015F sistemi, yuxar\u0131dan";let l=$t.path,c=Math.max(1.7,l.cp[l.cp.length-1].r,1.1)*1.12,u=_=>Math.pow(_/c,.6)*(i-26),h=new Set(["earth",$t.m.target]);l.cp.forEach(_=>_.fly&&h.add(_.fly)),Object.keys(Ge).forEach(_=>{let m=Ge[_];if(!m.a)return;let p=_===$t.m.target&&$t.m.ta?$t.m.ta:m.a;p>c*1.02||a(u(p),h.has(_)?"rgba(255,255,255,.3)":"rgba(255,255,255,.1)")}),c>3.4&&(e.lineWidth=u(3.3)-u(2.1),a((u(3.3)+u(2.1))/2,"rgba(198,242,107,.1)"),e.lineWidth=1.5),e.beginPath(),e.strokeStyle="rgba(0,181,226,.9)",e.lineWidth=2.5;for(let _=0;_<=120;_++){let m=l.S(_/120),p=Math.hypot(m[0],m[1]),M=Math.atan2(m[1],m[0]),S=i+u(p)*Math.cos(M),y=i-u(p)*Math.sin(M);_?e.lineTo(S,y):e.moveTo(S,y)}e.stroke(),e.lineWidth=1.5,o(i,i,7,"#ffd98a"),h.forEach(_=>{let m=l.bodyH(_,s.dayH),p=Math.hypot(m[0],m[1]),M=Math.atan2(m[1],m[0]);o(i+u(p)*Math.cos(M),i-u(p)*Math.sin(M),5,_==="earth"?"#6fa8ff":"#e9d9b0",Ge[_].name)});let d=s.helio,f=Math.hypot(d[0],d[1]),g=Math.atan2(d[1],d[0]);o(i+u(f)*Math.cos(g),i-u(f)*Math.sin(g),6,"#EF3340"),e.beginPath(),e.strokeStyle="#EF3340",e.arc(i+u(f)*Math.cos(g),i-u(f)*Math.sin(g),11,0,7),e.stroke()}else{dt("#mapLab").textContent="Yer \u0259traf\u0131";let l=$t.m.kind==="leo"||s.phase==="asc"||s.phase==="orbit"?0:1,c=l?$t.m.kind==="moon"?43e4:21e5:9e3,u=y=>l?Math.pow(Math.log(y/5e3)/Math.log(c/5e3),1.25)*(i-24)+12:y/c*(i-20);o(i,i,l?9:u(6371),"#3f7fd9"),l?(a(u(42164),"rgba(255,255,255,.16)",[3,6]),a(u(384400),"rgba(255,255,255,.28)")):a(u(6775),"rgba(255,255,255,.22)",[4,6]);let h=$t.rhat(0),d=$t.rhat(Math.PI/2),f=y=>[y[0]*h[0]+y[1]*h[1]+y[2]*h[2],y[0]*d[0]+y[1]*d[1]+y[2]*d[2]],g=s.G,_=f(g),m=Math.hypot(_[0],_[1]),p=Math.atan2(_[1],_[0]),M=i+u(Math.max(m,l?6e3:0))*Math.cos(p),S=i-u(Math.max(m,l?6e3:0))*Math.sin(p);if(l&&s.rel.moon){let y=f([s.rel.moon[0]+g[0],s.rel.moon[1]+g[1],s.rel.moon[2]+g[2]]),L=Math.atan2(y[1],y[0]);o(i+u(384400)*Math.cos(L),i-u(384400)*Math.sin(L),6,"#cfcbc3","Ay")}o(M,S,6,"#EF3340"),e.beginPath(),e.strokeStyle="#EF3340",e.arc(M,S,11,0,7),e.stroke()}}var kf=performance.now();function Of(r){requestAnimationFrame(Of);let t=Math.min(.1,(r-kf)/1e3);if(kf=r,document.hidden)return;if(!$s){Nf&&(Pe.update(-30,t),Pe.render());return}!on&&!hr?mn+=t:t=on?0:t;let e=Math.min(mn,$t.D);Pe.update(e,on?0:t),Pe.render();let n=dt("#count");if(e<0&&e>-10.5){let o=Math.ceil(-e);n.hidden=!1,o!==Wu&&(Wu=o,dt("b",n).textContent=o,qn.buf["n"+o]==null&&se.beep(o<=3?990:740,.14,.1),Ce&&Ce.fromTo(dt("b",n),{scale:1.25,opacity:.2},{scale:1,opacity:1,duration:.5,ease:"expo.out"}))}else n.hidden||(n.hidden=!0,qn.buf.launch==null&&se.beep(1320,.5,.12));if(!on)for(;ur<dr.length&&dr[ur].t<=e;){let o=dr[ur++];e-o.t<1.5&&qn.play(o.n,o.v)}for(se.air(e<6?.022:0);Zs<$t.events.length&&$t.events[Zs].t<=e;){let o=$t.events[Zs++];if(o.fin){hv();break}lv(o),wf[o.id]&&Fo(wf[o.id])}zo&&!hr&&(dt("#iBar").style.width=Te((mn-qu)/(Gu-qu))*100+"%",mn>Gu&&(dt("#info").classList.remove("on"),zo=null));let i=Pe.S;e>=0&&i.phase!==cs&&(cs&&i.phase==="depart"&&Fo($t.m.kind==="moon"?"AYA DO\u011ERU":"YOLA \xC7IXDIQ"),cs&&i.phase==="arrive"&&$t.m.kind!=="leo"&&Fo($t.m.name.toLocaleUpperCase("az")),cs&&i.phase==="arrive"&&$t.m.kind==="leo"&&Fo("BKS"),cs=i.phase),dt("#flash").style.opacity=i.land>.8&&!hr?Vt(.8,1,i.land)*.9:0;let s=e<-2.9?0:e<147?Vt(-2.9,-1,e):Pe.shot==="landing"?.5:0,a=e<0?0:Te((i.alt||0)/70);if(se.set(Pe.shot==="landing"?.45:s,i.burn===2?1:0,Pe.shot==="landing"?0:a,Pe.shot==="space"?1:0),r-Cf>120){Cf=r,dv(e);let o=dt("#mapbox");o.style.visibility=e<0?"hidden":"",!o.hidden&&e>=0&&fv(e)}r-Rf>5e3&&e>0&&!hr&&(Rf=r,ta.set({id:$t.id,D:$t.D,t:e}))}function pv(){dt("#bPause").addEventListener("click",()=>{if(on=!on,dt("#paused").hidden=!on,dt("#bPause").setAttribute("aria-pressed",on),dt("#bPause").textContent=on?"Davam et":"Fasil\u0259",on&&se.set(0,0,0,0),se.ctx)try{on?se.ctx.suspend():se.ctx.resume()}catch{}qn.each(e=>{e.pause&&(on?e.pause():e.play())})}),dt("#bSound").addEventListener("click",()=>{se.on=!se.on,dt("#bSound").setAttribute("aria-pressed",se.on),se.on||se.set(0,0,0,0),se.master&&(se.master.gain.value=se.on?.9:0),qn.each(e=>{e.volume!==void 0&&(e.volume=se.on?1:0)})}),dt("#bMap").addEventListener("click",()=>{let e=dt("#mapbox");e.hidden=!e.hidden,dt("#bMap").setAttribute("aria-pressed",!e.hidden)});let r=()=>{cv(),dt("#log").hidden=!1};dt("#bLog").addEventListener("click",r),dt("#finLog").addEventListener("click",r),dt("#logX").addEventListener("click",()=>{dt("#log").hidden=!0}),dt("#bFull").addEventListener("click",()=>{try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}catch{}});let t=0;dt("#bExit").addEventListener("click",()=>{let e=dt("#bExit");if(Date.now()-t<4e3){e.textContent="\xC7\u0131x\u0131\u015F",If();return}t=Date.now(),e.textContent="\u018Fmins\u0259n? Yen\u0259 bas",setTimeout(()=>{e.textContent="\xC7\u0131x\u0131\u015F"},4e3)}),dt("#finNew").addEventListener("click",If)}av();pv();document.addEventListener("visibilitychange",()=>{if(se.ctx&&$s)try{document.hidden?se.ctx.suspend():!on&&se.ctx.resume()}catch{}});Pe.preload().then(()=>{});requestAnimationFrame(Of);
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
