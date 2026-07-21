import{t as Ja,b as Qa,e as eo}from"./wire-DomKY6sr.js";const kr="178",to=0,as=1,no=2,da=1,io=2,Ke=3,pt=0,Se=1,Ze=2,ft=0,Zt=1,os=2,cs=3,ls=4,ro=5,wt=100,so=101,ao=102,oo=103,co=104,lo=200,uo=201,ho=202,fo=203,er=204,tr=205,po=206,mo=207,_o=208,go=209,vo=210,xo=211,Mo=212,So=213,Eo=214,nr=0,ir=1,rr=2,Qt=3,sr=4,ar=5,or=6,cr=7,pa=0,yo=1,To=2,dt=0,Ao=1,bo=2,wo=3,Ro=4,Co=5,Po=6,Lo=7,ma=300,en=301,tn=302,lr=303,ur=304,pi=306,hr=1e3,Ct=1001,fr=1002,Be=1003,Do=1004,Pn=1005,Ve=1006,xi=1007,Pt=1008,it=1009,_a=1010,ga=1011,vn=1012,Wr=1013,Lt=1014,je=1015,En=1016,Xr=1017,qr=1018,xn=1020,va=35902,xa=1021,Ma=1022,Oe=1023,Mn=1026,Sn=1027,Sa=1028,Yr=1029,Ea=1030,$r=1031,Kr=1033,ni=33776,ii=33777,ri=33778,si=33779,dr=35840,pr=35841,mr=35842,_r=35843,gr=36196,vr=37492,xr=37496,Mr=37808,Sr=37809,Er=37810,yr=37811,Tr=37812,Ar=37813,br=37814,wr=37815,Rr=37816,Cr=37817,Pr=37818,Lr=37819,Dr=37820,Ur=37821,ai=36492,Ir=36494,Nr=36495,ya=36283,Fr=36284,Or=36285,Br=36286,Uo=3200,Io=3201,No=0,Fo=1,ht="",Pe="srgb",nn="srgb-linear",li="linear",j0="srgb",It=7680,us=519,Oo=512,Bo=513,zo=514,Ta=515,Ho=516,Vo=517,Go=518,ko=519,hs=35044,fs="300 es",Je=2e3,ui=2001;class sn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mi=Math.PI/180,zr=180/Math.PI;function yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[i&255]+de[i>>8&255]+de[i>>16&255]+de[i>>24&255]+"-"+de[e&255]+de[e>>8&255]+"-"+de[e>>16&15|64]+de[e>>24&255]+"-"+de[t&63|128]+de[t>>8&255]+"-"+de[t>>16&255]+de[t>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function k0(i,e,t){return Math.max(e,Math.min(t,i))}function Wo(i,e){return(i%e+e)%e}function Si(i,e,t){return(1-t)*i+t*e}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class J0{constructor(e=0,t=0){J0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=k0(this.x,e.x,t.x),this.y=k0(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=k0(this.x,e,t),this.y=k0(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(k0(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(k0(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==f||l!==m||h!==g){let p=1-o;const u=c*f+l*m+h*g+d*x,A=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const U=Math.sqrt(T),C=Math.atan2(U,u*A);p=Math.sin(p*C)/U,o=Math.sin(o*C)/U}const E=o*A;if(c=c*p+f*E,l=l*p+m*E,h=h*p+g*E,d=d*p+x*E,p===1-o){const U=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=U,l*=U,h*=U,d*=U}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*m-l*f,e[t+1]=c*g+h*f+l*d-o*m,e[t+2]=l*g+h*m+o*f-c*d,e[t+3]=h*g-o*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),d=o(s/2),f=c(n/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(k0(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ds.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ds.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=k0(this.x,e.x,t.x),this.y=k0(this.y,e.y,t.y),this.z=k0(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=k0(this.x,e,t),this.y=k0(this.y,e,t),this.z=k0(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(k0(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ei.copy(this).projectOnVector(e),this.sub(Ei)}reflect(e){return this.sub(Ei.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(k0(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ei=new F,ds=new Tn;class z0{constructor(e,t,n,r,s,a,o,c,l){z0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],x=r[0],p=r[3],u=r[6],A=r[1],T=r[4],E=r[7],U=r[2],C=r[5],R=r[8];return s[0]=a*x+o*A+c*U,s[3]=a*p+o*T+c*C,s[6]=a*u+o*E+c*R,s[1]=l*x+h*A+d*U,s[4]=l*p+h*T+d*C,s[7]=l*u+h*E+d*R,s[2]=f*x+m*A+g*U,s[5]=f*p+m*T+g*C,s[8]=f*u+m*E+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*s,m=l*s-a*c,g=t*d+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*l-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=f*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yi.makeScale(e,t)),this}rotate(e){return this.premultiply(yi.makeRotation(-e)),this}translate(e,t){return this.premultiply(yi.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yi=new z0;function Aa(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xo(){const i=hi("canvas");return i.style.display="block",i}const ps={};function jt(i){i in ps||(ps[i]=!0,console.warn(i))}function qo(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Yo(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $o(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ms=new z0().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_s=new z0().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ko(){const i={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===j0&&(r.r=et(r.r),r.g=et(r.g),r.b=et(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===j0&&(r.r=Jt(r.r),r.g=Jt(r.g),r.b=Jt(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ht?li:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return jt("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return jt("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nn]:{primaries:e,whitePoint:n,transfer:li,toXYZ:ms,fromXYZ:_s,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:e,whitePoint:n,transfer:j0,toXYZ:ms,fromXYZ:_s,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}const q0=Ko();function et(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jt(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Nt;class Zo{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nt===void 0&&(Nt=hi("canvas")),Nt.width=e.width,Nt.height=e.height;const r=Nt.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Nt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=et(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(et(t[n]/255)*255):t[n]=et(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jo=0;class Zr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jo++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ti(r[a].image)):s.push(Ti(r[a]))}else s=Ti(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ti(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jo=0;const Ai=new F;class Ee extends sn{constructor(e=Ee.DEFAULT_IMAGE,t=Ee.DEFAULT_MAPPING,n=Ct,r=Ct,s=Ve,a=Pt,o=Oe,c=it,l=Ee.DEFAULT_ANISOTROPY,h=ht){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jo++}),this.uuid=yn(),this.name="",this.source=new Zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new J0(0,0),this.repeat=new J0(1,1),this.center=new J0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new z0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ai).x}get height(){return this.source.getSize(Ai).y}get depth(){return this.source.getSize(Ai).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ma)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hr:e.x=e.x-Math.floor(e.x);break;case Ct:e.x=e.x<0?0:1;break;case fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hr:e.y=e.y-Math.floor(e.y);break;case Ct:e.y=e.y<0?0:1;break;case fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=ma;Ee.DEFAULT_ANISOTROPY=1;class ce{constructor(e=0,t=0,n=0,r=1){ce.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],x=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,E=(m+1)/2,U=(u+1)/2,C=(h+f)/4,R=(d+x)/4,I=(g+p)/4;return T>E&&T>U?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=C/n,s=R/n):E>U?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=C/r,s=I/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=R/s,r=I/s),this.set(n,r,s,t),this}let A=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(d-x)/A,this.z=(f-h)/A,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=k0(this.x,e.x,t.x),this.y=k0(this.y,e.y,t.y),this.z=k0(this.z,e.z,t.z),this.w=k0(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=k0(this.x,e,t),this.y=k0(this.y,e,t),this.z=k0(this.z,e,t),this.w=k0(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(k0(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qo extends sn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ce(0,0,e,t),this.scissorTest=!1,this.viewport=new ce(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Ee(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dt extends Qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ba extends Ee{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Be,this.minFilter=Be,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class e1 extends Ee{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Be,this.minFilter=Be,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ue.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ue.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ue.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ue):Ue.fromBufferAttribute(s,a),Ue.applyMatrix4(e.matrixWorld),this.expandByPoint(Ue);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ln.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ln.copy(n.boundingBox)),Ln.applyMatrix4(e.matrixWorld),this.union(Ln)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ue),Ue.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(un),Dn.subVectors(this.max,un),Ft.subVectors(e.a,un),Ot.subVectors(e.b,un),Bt.subVectors(e.c,un),st.subVectors(Ot,Ft),at.subVectors(Bt,Ot),gt.subVectors(Ft,Bt);let t=[0,-st.z,st.y,0,-at.z,at.y,0,-gt.z,gt.y,st.z,0,-st.x,at.z,0,-at.x,gt.z,0,-gt.x,-st.y,st.x,0,-at.y,at.x,0,-gt.y,gt.x,0];return!bi(t,Ft,Ot,Bt,Dn)||(t=[1,0,0,0,1,0,0,0,1],!bi(t,Ft,Ot,Bt,Dn))?!1:(Un.crossVectors(st,at),t=[Un.x,Un.y,Un.z],bi(t,Ft,Ot,Bt,Dn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ue).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ue).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(We[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),We[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),We[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),We[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),We[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),We[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),We[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),We[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(We),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const We=[new F,new F,new F,new F,new F,new F,new F,new F],Ue=new F,Ln=new An,Ft=new F,Ot=new F,Bt=new F,st=new F,at=new F,gt=new F,un=new F,Dn=new F,Un=new F,vt=new F;function bi(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){vt.fromArray(i,s);const o=r.x*Math.abs(vt.x)+r.y*Math.abs(vt.y)+r.z*Math.abs(vt.z),c=e.dot(vt),l=t.dot(vt),h=n.dot(vt);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const t1=new An,hn=new F,wi=new F;class bn{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):t1.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hn.subVectors(e,this.center);const t=hn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(hn,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hn.copy(e.center).add(wi)),this.expandByPoint(hn.copy(e.center).sub(wi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xe=new F,Ri=new F,In=new F,ot=new F,Ci=new F,Nn=new F,Pi=new F;class jr{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xe)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xe.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xe.copy(this.origin).addScaledVector(this.direction,t),Xe.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ri.copy(e).add(t).multiplyScalar(.5),In.copy(t).sub(e).normalize(),ot.copy(this.origin).sub(Ri);const s=e.distanceTo(t)*.5,a=-this.direction.dot(In),o=ot.dot(this.direction),c=-ot.dot(In),l=ot.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*c-o,f=a*o-c,g=s*h,d>=0)if(f>=-g)if(f<=g){const x=1/h;d*=x,f*=x,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ri).addScaledVector(In,f),m}intersectSphere(e,t){Xe.subVectors(e.center,this.origin);const n=Xe.dot(this.direction),r=Xe.dot(Xe)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xe)!==null}intersectTriangle(e,t,n,r,s){Ci.subVectors(t,e),Nn.subVectors(n,e),Pi.crossVectors(Ci,Nn);let a=this.direction.dot(Pi),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ot.subVectors(this.origin,e);const c=o*this.direction.dot(Nn.crossVectors(ot,Nn));if(c<0)return null;const l=o*this.direction.dot(Ci.cross(ot));if(l<0||c+l>a)return null;const h=-o*ot.dot(Pi);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(e,t,n,r,s,a,o,c,l,h,d,f,m,g,x,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,d,f,m,g,x,p)}set(e,t,n,r,s,a,o,c,l,h,d,f,m,g,x,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/zt.setFromMatrixColumn(e,0).length(),s=1/zt.setFromMatrixColumn(e,1).length(),a=1/zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*d,g=l*h,x=l*d;t[0]=f+x*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*d,g=l*h,x=l*d;t[0]=f-x*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=g*l-m,t[8]=f*l+x,t[1]=c*d,t[5]=x*l+f,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+x,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n1,e,i1)}lookAt(e,t,n){const r=this.elements;return Ae.subVectors(e,t),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),ct.crossVectors(n,Ae),ct.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),ct.crossVectors(n,Ae)),ct.normalize(),Fn.crossVectors(Ae,ct),r[0]=ct.x,r[4]=Fn.x,r[8]=Ae.x,r[1]=ct.y,r[5]=Fn.y,r[9]=Ae.y,r[2]=ct.z,r[6]=Fn.z,r[10]=Ae.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],x=n[6],p=n[10],u=n[14],A=n[3],T=n[7],E=n[11],U=n[15],C=r[0],R=r[4],I=r[8],S=r[12],M=r[1],P=r[5],q=r[9],H=r[13],W=r[2],j=r[6],k=r[10],$=r[14],V=r[3],i0=r[7],o0=r[11],E0=r[15];return s[0]=a*C+o*M+c*W+l*V,s[4]=a*R+o*P+c*j+l*i0,s[8]=a*I+o*q+c*k+l*o0,s[12]=a*S+o*H+c*$+l*E0,s[1]=h*C+d*M+f*W+m*V,s[5]=h*R+d*P+f*j+m*i0,s[9]=h*I+d*q+f*k+m*o0,s[13]=h*S+d*H+f*$+m*E0,s[2]=g*C+x*M+p*W+u*V,s[6]=g*R+x*P+p*j+u*i0,s[10]=g*I+x*q+p*k+u*o0,s[14]=g*S+x*H+p*$+u*E0,s[3]=A*C+T*M+E*W+U*V,s[7]=A*R+T*P+E*j+U*i0,s[11]=A*I+T*q+E*k+U*o0,s[15]=A*S+T*H+E*$+U*E0,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],x=e[7],p=e[11],u=e[15];return g*(+s*c*d-r*l*d-s*o*f+n*l*f+r*o*m-n*c*m)+x*(+t*c*m-t*l*f+s*a*f-r*a*m+r*l*h-s*c*h)+p*(+t*l*d-t*o*m-s*a*d+n*a*m+s*o*h-n*l*h)+u*(-r*o*h-t*c*d+t*o*f+r*a*d-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],x=e[13],p=e[14],u=e[15],A=d*p*l-x*f*l+x*c*m-o*p*m-d*c*u+o*f*u,T=g*f*l-h*p*l-g*c*m+a*p*m+h*c*u-a*f*u,E=h*x*l-g*d*l+g*o*m-a*x*m-h*o*u+a*d*u,U=g*d*c-h*x*c-g*o*f+a*x*f+h*o*p-a*d*p,C=t*A+n*T+r*E+s*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=A*R,e[1]=(x*f*s-d*p*s-x*r*m+n*p*m+d*r*u-n*f*u)*R,e[2]=(o*p*s-x*c*s+x*r*l-n*p*l-o*r*u+n*c*u)*R,e[3]=(d*c*s-o*f*s-d*r*l+n*f*l+o*r*m-n*c*m)*R,e[4]=T*R,e[5]=(h*p*s-g*f*s+g*r*m-t*p*m-h*r*u+t*f*u)*R,e[6]=(g*c*s-a*p*s-g*r*l+t*p*l+a*r*u-t*c*u)*R,e[7]=(a*f*s-h*c*s+h*r*l-t*f*l-a*r*m+t*c*m)*R,e[8]=E*R,e[9]=(g*d*s-h*x*s-g*n*m+t*x*m+h*n*u-t*d*u)*R,e[10]=(a*x*s-g*o*s+g*n*l-t*x*l-a*n*u+t*o*u)*R,e[11]=(h*o*s-a*d*s-h*n*l+t*d*l+a*n*m-t*o*m)*R,e[12]=U*R,e[13]=(h*x*r-g*d*r+g*n*f-t*x*f-h*n*p+t*d*p)*R,e[14]=(g*o*r-a*x*r-g*n*c+t*x*c+a*n*p-t*o*p)*R,e[15]=(a*d*r-h*o*r+h*n*c-t*d*c-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,f=s*l,m=s*h,g=s*d,x=a*h,p=a*d,u=o*d,A=c*l,T=c*h,E=c*d,U=n.x,C=n.y,R=n.z;return r[0]=(1-(x+u))*U,r[1]=(m+E)*U,r[2]=(g-T)*U,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(f+u))*C,r[6]=(p+A)*C,r[7]=0,r[8]=(g+T)*R,r[9]=(p-A)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=zt.set(r[0],r[1],r[2]).length();const a=zt.set(r[4],r[5],r[6]).length(),o=zt.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ie.copy(this);const l=1/s,h=1/a,d=1/o;return Ie.elements[0]*=l,Ie.elements[1]*=l,Ie.elements[2]*=l,Ie.elements[4]*=h,Ie.elements[5]*=h,Ie.elements[6]*=h,Ie.elements[8]*=d,Ie.elements[9]*=d,Ie.elements[10]*=d,t.setFromRotationMatrix(Ie),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Je){const c=this.elements,l=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,g;if(o===Je)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ui)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Je){const c=this.elements,l=1/(t-e),h=1/(n-r),d=1/(a-s),f=(t+e)*l,m=(n+r)*h;let g,x;if(o===Je)g=(a+s)*d,x=-2*d;else if(o===ui)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zt=new F,Ie=new oe,n1=new F(0,0,0),i1=new F(1,1,1),ct=new F,Fn=new F,Ae=new F,gs=new oe,vs=new Tn;class rt{constructor(e=0,t=0,n=0,r=rt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(k0(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-k0(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(k0(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-k0(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(k0(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-k0(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vs.setFromEuler(this),this.setFromQuaternion(vs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rt.DEFAULT_ORDER="XYZ";class wa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r1=0;const xs=new F,Ht=new Tn,qe=new oe,On=new F,fn=new F,s1=new F,a1=new Tn,Ms=new F(1,0,0),Ss=new F(0,1,0),Es=new F(0,0,1),ys={type:"added"},o1={type:"removed"},Vt={type:"childadded",child:null},Li={type:"childremoved",child:null};class ve extends sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const e=new F,t=new rt,n=new Tn,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new oe},normalMatrix:{value:new z0}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ht.setFromAxisAngle(e,t),this.quaternion.multiply(Ht),this}rotateOnWorldAxis(e,t){return Ht.setFromAxisAngle(e,t),this.quaternion.premultiply(Ht),this}rotateX(e){return this.rotateOnAxis(Ms,e)}rotateY(e){return this.rotateOnAxis(Ss,e)}rotateZ(e){return this.rotateOnAxis(Es,e)}translateOnAxis(e,t){return xs.copy(e).applyQuaternion(this.quaternion),this.position.add(xs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ms,e)}translateY(e){return this.translateOnAxis(Ss,e)}translateZ(e){return this.translateOnAxis(Es,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qe.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?On.copy(e):On.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),fn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qe.lookAt(fn,On,this.up):qe.lookAt(On,fn,this.up),this.quaternion.setFromRotationMatrix(qe),r&&(qe.extractRotation(r.matrixWorld),Ht.setFromRotationMatrix(qe),this.quaternion.premultiply(Ht.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ys),Vt.child=e,this.dispatchEvent(Vt),Vt.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(o1),Li.child=e,this.dispatchEvent(Li),Li.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qe.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qe.multiply(e.parent.matrixWorld)),e.applyMatrix4(qe),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ys),Vt.child=e,this.dispatchEvent(Vt),Vt.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fn,e,s1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fn,a1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ve.DEFAULT_UP=new F(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ne=new F,Ye=new F,Di=new F,$e=new F,Gt=new F,kt=new F,Ts=new F,Ui=new F,Ii=new F,Ni=new F,Fi=new ce,Oi=new ce,Bi=new ce;class Fe{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ne.subVectors(e,t),r.cross(Ne);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ne.subVectors(r,t),Ye.subVectors(n,t),Di.subVectors(e,t);const a=Ne.dot(Ne),o=Ne.dot(Ye),c=Ne.dot(Di),l=Ye.dot(Ye),h=Ye.dot(Di),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$e)===null?!1:$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,$e)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$e.x),c.addScaledVector(a,$e.y),c.addScaledVector(o,$e.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Fi.setScalar(0),Oi.setScalar(0),Bi.setScalar(0),Fi.fromBufferAttribute(e,t),Oi.fromBufferAttribute(e,n),Bi.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fi,s.x),a.addScaledVector(Oi,s.y),a.addScaledVector(Bi,s.z),a}static isFrontFacing(e,t,n,r){return Ne.subVectors(n,t),Ye.subVectors(e,t),Ne.cross(Ye).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ne.subVectors(this.c,this.b),Ye.subVectors(this.a,this.b),Ne.cross(Ye).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fe.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fe.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Fe.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Fe.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fe.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Gt.subVectors(r,n),kt.subVectors(s,n),Ui.subVectors(e,n);const c=Gt.dot(Ui),l=kt.dot(Ui);if(c<=0&&l<=0)return t.copy(n);Ii.subVectors(e,r);const h=Gt.dot(Ii),d=kt.dot(Ii);if(h>=0&&d<=h)return t.copy(r);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Gt,a);Ni.subVectors(e,s);const m=Gt.dot(Ni),g=kt.dot(Ni);if(g>=0&&m<=g)return t.copy(s);const x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(kt,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Ts.subVectors(s,r),o=(d-h)/(d-h+(m-g)),t.copy(r).addScaledVector(Ts,o);const u=1/(p+x+f);return a=x*u,o=f*u,t.copy(n).addScaledVector(Gt,a).addScaledVector(kt,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ra={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lt={h:0,s:0,l:0},Bn={h:0,s:0,l:0};function zi(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $0{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,q0.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=q0.workingColorSpace){return this.r=e,this.g=t,this.b=n,q0.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=q0.workingColorSpace){if(e=Wo(e,1),t=k0(t,0,1),n=k0(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=zi(a,s,e+1/3),this.g=zi(a,s,e),this.b=zi(a,s,e-1/3)}return q0.colorSpaceToWorking(this,r),this}setStyle(e,t=Pe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pe){const n=Ra[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=et(e.r),this.g=et(e.g),this.b=et(e.b),this}copyLinearToSRGB(e){return this.r=Jt(e.r),this.g=Jt(e.g),this.b=Jt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pe){return q0.workingToColorSpace(pe.copy(this),e),Math.round(k0(pe.r*255,0,255))*65536+Math.round(k0(pe.g*255,0,255))*256+Math.round(k0(pe.b*255,0,255))}getHexString(e=Pe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=q0.workingColorSpace){q0.workingToColorSpace(pe.copy(this),t);const n=pe.r,r=pe.g,s=pe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=q0.workingColorSpace){return q0.workingToColorSpace(pe.copy(this),t),e.r=pe.r,e.g=pe.g,e.b=pe.b,e}getStyle(e=Pe){q0.workingToColorSpace(pe.copy(this),e);const t=pe.r,n=pe.g,r=pe.b;return e!==Pe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(lt),this.setHSL(lt.h+e,lt.s+t,lt.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(lt),e.getHSL(Bn);const n=Si(lt.h,Bn.h,t),r=Si(lt.s,Bn.s,t),s=Si(lt.l,Bn.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pe=new $0;$0.NAMES=Ra;let c1=0;class an extends sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Zt,this.side=pt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=er,this.blendDst=tr,this.blendEquation=wt,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $0(0,0,0),this.blendAlpha=0,this.depthFunc=Qt,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=us,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=It,this.stencilZFail=It,this.stencilZPass=It,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zt&&(n.blending=this.blending),this.side!==pt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==er&&(n.blendSrc=this.blendSrc),this.blendDst!==tr&&(n.blendDst=this.blendDst),this.blendEquation!==wt&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qt&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==us&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==It&&(n.stencilFail=this.stencilFail),this.stencilZFail!==It&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==It&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ca extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rt,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const le=new F,zn=new J0;let l1=0;class me{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hs,this.updateRanges=[],this.gpuType=je,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix3(e),this.setXY(t,zn.x,zn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)le.fromBufferAttribute(this,t),le.applyMatrix3(e),this.setXYZ(t,le.x,le.y,le.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)le.fromBufferAttribute(this,t),le.applyMatrix4(e),this.setXYZ(t,le.x,le.y,le.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)le.fromBufferAttribute(this,t),le.applyNormalMatrix(e),this.setXYZ(t,le.x,le.y,le.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)le.fromBufferAttribute(this,t),le.transformDirection(e),this.setXYZ(t,le.x,le.y,le.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Me(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=Me(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=Me(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Me(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=Me(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Me(t,this.array),n=Me(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Me(t,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Me(t,this.array),n=Me(n,this.array),r=Me(r,this.array),s=Me(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hs&&(e.usage=this.usage),e}}class Pa extends me{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class La extends me{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends me{constructor(e,t,n){super(new Float32Array(e),t,n)}}let u1=0;const Ce=new oe,Hi=new ve,Wt=new F,be=new An,dn=new An,fe=new F;class ze extends sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Aa(e)?La:Pa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new z0().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ce.makeRotationFromQuaternion(e),this.applyMatrix4(Ce),this}rotateX(e){return Ce.makeRotationX(e),this.applyMatrix4(Ce),this}rotateY(e){return Ce.makeRotationY(e),this.applyMatrix4(Ce),this}rotateZ(e){return Ce.makeRotationZ(e),this.applyMatrix4(Ce),this}translate(e,t,n){return Ce.makeTranslation(e,t,n),this.applyMatrix4(Ce),this}scale(e,t,n){return Ce.makeScale(e,t,n),this.applyMatrix4(Ce),this}lookAt(e){return Hi.lookAt(e),Hi.updateMatrix(),this.applyMatrix4(Hi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wt).negate(),this.translate(Wt.x,Wt.y,Wt.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];be.setFromBufferAttribute(s),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,be.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,be.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(be.min),this.boundingBox.expandByPoint(be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(be.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];dn.setFromBufferAttribute(o),this.morphTargetsRelative?(fe.addVectors(be.min,dn.min),be.expandByPoint(fe),fe.addVectors(be.max,dn.max),be.expandByPoint(fe)):(be.expandByPoint(dn.min),be.expandByPoint(dn.max))}be.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)fe.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(fe));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)fe.fromBufferAttribute(o,l),c&&(Wt.fromBufferAttribute(e,l),fe.add(Wt)),r=Math.max(r,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new F,c[I]=new F;const l=new F,h=new F,d=new F,f=new J0,m=new J0,g=new J0,x=new F,p=new F;function u(I,S,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),f.fromBufferAttribute(s,I),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(l),d.sub(l),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(P),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),o[I].add(x),o[S].add(x),o[M].add(x),c[I].add(p),c[S].add(p),c[M].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,S=A.length;I<S;++I){const M=A[I],P=M.start,q=M.count;for(let H=P,W=P+q;H<W;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new F,E=new F,U=new F,C=new F;function R(I){U.fromBufferAttribute(r,I),C.copy(U);const S=o[I];T.copy(S),T.sub(U.multiplyScalar(U.dot(S))).normalize(),E.crossVectors(C,S);const P=E.dot(c[I])<0?-1:1;a.setXYZW(I,T.x,T.y,T.z,P)}for(let I=0,S=A.length;I<S;++I){const M=A[I],P=M.start,q=M.count;for(let H=P,W=P+q;H<W;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,h=new F,d=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fe.fromBufferAttribute(e,t),fe.normalize(),e.setXYZ(t,fe.x,fe.y,fe.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new me(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ze,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const As=new oe,xt=new jr,Hn=new bn,bs=new F,Vn=new F,Gn=new F,kn=new F,Vi=new F,Wn=new F,ws=new F,Xn=new F;class Qe extends ve{constructor(e=new ze,t=new Ca){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wn.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(Vi.fromBufferAttribute(d,e),a?Wn.addScaledVector(Vi,h):Wn.addScaledVector(Vi.sub(t),h))}t.add(Wn)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hn.copy(n.boundingSphere),Hn.applyMatrix4(s),xt.copy(e.ray).recast(e.near),!(Hn.containsPoint(xt.origin)===!1&&(xt.intersectSphere(Hn,bs)===null||xt.origin.distanceToSquared(bs)>(e.far-e.near)**2))&&(As.copy(s).invert(),xt.copy(e.ray).applyMatrix4(As),!(n.boundingBox!==null&&xt.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xt)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],u=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=A,U=T;E<U;E+=3){const C=o.getX(E),R=o.getX(E+1),I=o.getX(E+2);r=qn(this,u,e,n,l,h,d,C,R,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const A=o.getX(p),T=o.getX(p+1),E=o.getX(p+2);r=qn(this,a,e,n,l,h,d,A,T,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],u=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=A,U=T;E<U;E+=3){const C=E,R=E+1,I=E+2;r=qn(this,u,e,n,l,h,d,C,R,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const A=p,T=p+1,E=p+2;r=qn(this,a,e,n,l,h,d,A,T,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function h1(i,e,t,n,r,s,a,o){let c;if(e.side===Se?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===pt,o),c===null)return null;Xn.copy(o),Xn.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Xn);return l<t.near||l>t.far?null:{distance:l,point:Xn.clone(),object:i}}function qn(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Vn),i.getVertexPosition(c,Gn),i.getVertexPosition(l,kn);const h=h1(i,e,t,n,Vn,Gn,kn,ws);if(h){const d=new F;Fe.getBarycoord(ws,Vn,Gn,kn,d),r&&(h.uv=Fe.getInterpolatedAttribute(r,o,c,l,d,new J0)),s&&(h.uv1=Fe.getInterpolatedAttribute(s,o,c,l,d,new J0)),a&&(h.normal=Fe.getInterpolatedAttribute(a,o,c,l,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new F,materialIndex:0};Fe.getNormal(Vn,Gn,kn,f.normal),h.face=f,h.barycoord=d}return h}class wn extends ze{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2));function g(x,p,u,A,T,E,U,C,R,I,S){const M=E/R,P=U/I,q=E/2,H=U/2,W=C/2,j=R+1,k=I+1;let $=0,V=0;const i0=new F;for(let o0=0;o0<k;o0++){const E0=o0*P-H;for(let L0=0;L0<j;L0++){const y0=L0*M-q;i0[x]=y0*A,i0[p]=E0*T,i0[u]=W,l.push(i0.x,i0.y,i0.z),i0[x]=0,i0[p]=0,i0[u]=C>0?1:-1,h.push(i0.x,i0.y,i0.z),d.push(L0/R),d.push(1-o0/I),$+=1}}for(let o0=0;o0<I;o0++)for(let E0=0;E0<R;E0++){const L0=f+E0+j*o0,y0=f+E0+j*(o0+1),G=f+(E0+1)+j*(o0+1),t0=f+(E0+1)+j*o0;c.push(L0,y0,t0),c.push(y0,G,t0),V+=6}o.addGroup(m,V,S),m+=V,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ge(i){const e={};for(let t=0;t<i.length;t++){const n=rn(i[t]);for(const r in n)e[r]=n[r]}return e}function f1(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Da(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:q0.workingColorSpace}const d1={clone:rn,merge:ge};var p1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ge extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p1,this.fragmentShader=m1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rn(e.uniforms),this.uniformsGroups=f1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ua extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ut=new F,Rs=new J0,Cs=new J0;class Le extends Ua{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ut.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ut.x,ut.y).multiplyScalar(-e/ut.z),ut.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ut.x,ut.y).multiplyScalar(-e/ut.z)}getViewSize(e,t){return this.getViewBounds(e,Rs,Cs),t.subVectors(Cs,Rs)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xt=-90,qt=1;class _1 extends ve{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Le(Xt,qt,e,t);r.layers=this.layers,this.add(r);const s=new Le(Xt,qt,e,t);s.layers=this.layers,this.add(s);const a=new Le(Xt,qt,e,t);a.layers=this.layers,this.add(a);const o=new Le(Xt,qt,e,t);o.layers=this.layers,this.add(o);const c=new Le(Xt,qt,e,t);c.layers=this.layers,this.add(c);const l=new Le(Xt,qt,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Je)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ui)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ia extends Ee{constructor(e=[],t=en,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g1 extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ia(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wn(5,5,5),s=new Ge({name:"CubemapFromEquirect",uniforms:rn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:ft});s.uniforms.tEquirect.value=t;const a=new Qe(r,s),o=t.minFilter;return t.minFilter===Pt&&(t.minFilter=Ve),new _1(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class _n extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v1={type:"move"};class Gi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),u=this._getHandJoint(l,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(v1)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class x1 extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rt,this.environmentIntensity=1,this.environmentRotation=new rt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ki=new F,M1=new F,S1=new z0;class At{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ki.subVectors(n,t).cross(M1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ki),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||S1.getNormalMatrix(e),r=this.coplanarPoint(ki).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mt=new bn,E1=new J0(.5,.5),Yn=new F;class Na{constructor(e=new At,t=new At,n=new At,r=new At,s=new At,a=new At){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Je){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],d=r[6],f=r[7],m=r[8],g=r[9],x=r[10],p=r[11],u=r[12],A=r[13],T=r[14],E=r[15];if(n[0].setComponents(c-s,f-l,p-m,E-u).normalize(),n[1].setComponents(c+s,f+l,p+m,E+u).normalize(),n[2].setComponents(c+a,f+h,p+g,E+A).normalize(),n[3].setComponents(c-a,f-h,p-g,E-A).normalize(),n[4].setComponents(c-o,f-d,p-x,E-T).normalize(),t===Je)n[5].setComponents(c+o,f+d,p+x,E+T).normalize();else if(t===ui)n[5].setComponents(o,d,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mt.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mt.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mt)}intersectsSprite(e){Mt.center.set(0,0,0);const t=E1.distanceTo(e.center);return Mt.radius=.7071067811865476+t,Mt.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mt)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Yn.x=r.normal.x>0?e.max.x:e.min.x,Yn.y=r.normal.y>0?e.max.y:e.min.y,Yn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class y1 extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fi=new F,di=new F,Ps=new oe,pn=new jr,$n=new bn,Wi=new F,Ls=new F;class T1 extends ve{constructor(e=new ze,t=new y1){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)fi.fromBufferAttribute(t,r-1),di.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=fi.distanceTo(di);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$n.copy(n.boundingSphere),$n.applyMatrix4(r),$n.radius+=s,e.ray.intersectsSphere($n)===!1)return;Ps.copy(r).invert(),pn.copy(e.ray).applyMatrix4(Ps);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=m,p=g-1;x<p;x+=l){const u=h.getX(x),A=h.getX(x+1),T=Kn(this,e,pn,c,u,A,x);T&&t.push(T)}if(this.isLineLoop){const x=h.getX(g-1),p=h.getX(m),u=Kn(this,e,pn,c,x,p,g-1);u&&t.push(u)}}else{const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=m,p=g-1;x<p;x+=l){const u=Kn(this,e,pn,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){const x=Kn(this,e,pn,c,g-1,m,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kn(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(fi.fromBufferAttribute(o,r),di.fromBufferAttribute(o,s),t.distanceSqToSegment(fi,di,Wi,Ls)>n)return;Wi.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Wi);if(!(l<e.near||l>e.far))return{distance:l,point:Ls.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Ds=new F,Us=new F;class A1 extends T1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ds.fromBufferAttribute(t,r),Us.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ds.distanceTo(Us);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class b1 extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Is=new oe,Hr=new jr,Zn=new bn,jn=new F;class w1 extends ve{constructor(e=new ze,t=new b1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zn.copy(n.boundingSphere),Zn.applyMatrix4(r),Zn.radius+=s,e.ray.intersectsSphere(Zn)===!1)return;Is.copy(r).invert(),Hr.copy(e.ray).applyMatrix4(Is);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=f,x=m;g<x;g++){const p=l.getX(g);jn.fromBufferAttribute(d,p),Ns(jn,p,c,r,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,x=m;g<x;g++)jn.fromBufferAttribute(d,g),Ns(jn,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ns(i,e,t,n,r,s,a){const o=Hr.distanceSqToPoint(i);if(o<t){const c=new F;Hr.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Fa extends Ee{constructor(e,t,n=Lt,r,s,a,o=Be,c=Be,l,h=Mn,d=1){if(h!==Mn&&h!==Sn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mi extends ze{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,d=e/o,f=t/c,m=[],g=[],x=[],p=[];for(let u=0;u<h;u++){const A=u*f-a;for(let T=0;T<l;T++){const E=T*d-s;g.push(E,-A,0),x.push(0,0,1),p.push(T/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let A=0;A<o;A++){const T=A+l*u,E=A+l*(u+1),U=A+1+l*(u+1),C=A+1+l*u;m.push(T,E,C),m.push(E,U,C)}this.setIndex(m),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.widthSegments,e.heightSegments)}}class R1 extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C1 extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class P1 extends Ua{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class L1 extends Le{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class D1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fs(i,e,t,n){const r=U1(n);switch(t){case xa:return i*e;case Sa:return i*e/r.components*r.byteLength;case Yr:return i*e/r.components*r.byteLength;case Ea:return i*e*2/r.components*r.byteLength;case $r:return i*e*2/r.components*r.byteLength;case Ma:return i*e*3/r.components*r.byteLength;case Oe:return i*e*4/r.components*r.byteLength;case Kr:return i*e*4/r.components*r.byteLength;case ni:case ii:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ri:case si:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pr:case _r:return Math.max(i,16)*Math.max(e,8)/4;case dr:case mr:return Math.max(i,8)*Math.max(e,8)/2;case gr:case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Er:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Tr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ar:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case br:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Lr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Dr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ur:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ai:case Ir:case Nr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ya:case Fr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Or:case Br:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U1(i){switch(i){case it:case _a:return{byteLength:1,components:1};case vn:case ga:case En:return{byteLength:2,components:1};case Xr:case qr:return{byteLength:2,components:4};case Lt:case Wr:case je:return{byteLength:4,components:1};case va:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kr);function Oa(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function I1(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const x=d[m];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var N1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F1=`#ifdef USE_ALPHAHASH
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
#endif`,O1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V1=`#ifdef USE_AOMAP
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
#endif`,G1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k1=`#ifdef USE_BATCHING
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
#endif`,W1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$1=`#ifdef USE_IRIDESCENCE
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
#endif`,K1=`#ifdef USE_BUMPMAP
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
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i3=`#if defined( USE_COLOR_ALPHA )
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
#endif`,r3=`#define PI 3.141592653589793
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
} // validated`,s3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,a3=`vec3 transformedNormal = objectNormal;
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
#endif`,o3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h3="gl_FragColor = linearToOutputTexel( gl_FragColor );",f3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d3=`#ifdef USE_ENVMAP
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
#endif`,p3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m3=`#ifdef USE_ENVMAP
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
#endif`,_3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g3=`#ifdef USE_ENVMAP
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
#endif`,v3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E3=`#ifdef USE_GRADIENTMAP
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
}`,y3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b3=`uniform bool receiveShadow;
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
#endif`,w3=`#ifdef USE_ENVMAP
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
#endif`,R3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D3=`PhysicalMaterial material;
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
#endif`,U3=`struct PhysicalMaterial {
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
}`,I3=`
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
#endif`,N3=`#if defined( RE_IndirectDiffuse )
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
#endif`,F3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O3=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B3=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z3=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H3=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W3=`#if defined( USE_POINTS_UV )
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
#endif`,X3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z3=`#ifdef USE_MORPHTARGETS
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
#endif`,j3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i2=`#ifdef USE_NORMALMAP
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
#endif`,r2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x2=`float getShadowMask() {
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
}`,M2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S2=`#ifdef USE_SKINNING
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
#endif`,E2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y2=`#ifdef USE_SKINNING
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
#endif`,T2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R2=`#ifdef USE_TRANSMISSION
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
#endif`,C2=`#ifdef USE_TRANSMISSION
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
#endif`,P2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N2=`uniform sampler2D t2D;
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
}`,F2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H2=`#include <common>
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
}`,V2=`#if DEPTH_PACKING == 3200
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
}`,G2=`#define DISTANCE
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
}`,k2=`#define DISTANCE
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
}`,W2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q2=`uniform float scale;
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
}`,Y2=`uniform vec3 diffuse;
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
}`,$2=`#include <common>
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
}`,K2=`uniform vec3 diffuse;
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
}`,Z2=`#define LAMBERT
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
}`,j2=`#define LAMBERT
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
}`,J2=`#define MATCAP
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
}`,Q2=`#define MATCAP
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
}`,e4=`#define NORMAL
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
}`,t4=`#define NORMAL
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
}`,n4=`#define PHONG
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
}`,i4=`#define PHONG
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
}`,r4=`#define STANDARD
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
}`,s4=`#define STANDARD
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
}`,a4=`#define TOON
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
}`,o4=`#define TOON
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
}`,c4=`uniform float size;
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
}`,l4=`uniform vec3 diffuse;
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
}`,u4=`#include <common>
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
}`,h4=`uniform vec3 color;
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
}`,f4=`uniform float rotation;
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
}`,d4=`uniform vec3 diffuse;
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
}`,V0={alphahash_fragment:N1,alphahash_pars_fragment:F1,alphamap_fragment:O1,alphamap_pars_fragment:B1,alphatest_fragment:z1,alphatest_pars_fragment:H1,aomap_fragment:V1,aomap_pars_fragment:G1,batching_pars_vertex:k1,batching_vertex:W1,begin_vertex:X1,beginnormal_vertex:q1,bsdfs:Y1,iridescence_fragment:$1,bumpmap_pars_fragment:K1,clipping_planes_fragment:Z1,clipping_planes_pars_fragment:j1,clipping_planes_pars_vertex:J1,clipping_planes_vertex:Q1,color_fragment:e3,color_pars_fragment:t3,color_pars_vertex:n3,color_vertex:i3,common:r3,cube_uv_reflection_fragment:s3,defaultnormal_vertex:a3,displacementmap_pars_vertex:o3,displacementmap_vertex:c3,emissivemap_fragment:l3,emissivemap_pars_fragment:u3,colorspace_fragment:h3,colorspace_pars_fragment:f3,envmap_fragment:d3,envmap_common_pars_fragment:p3,envmap_pars_fragment:m3,envmap_pars_vertex:_3,envmap_physical_pars_fragment:w3,envmap_vertex:g3,fog_vertex:v3,fog_pars_vertex:x3,fog_fragment:M3,fog_pars_fragment:S3,gradientmap_pars_fragment:E3,lightmap_pars_fragment:y3,lights_lambert_fragment:T3,lights_lambert_pars_fragment:A3,lights_pars_begin:b3,lights_toon_fragment:R3,lights_toon_pars_fragment:C3,lights_phong_fragment:P3,lights_phong_pars_fragment:L3,lights_physical_fragment:D3,lights_physical_pars_fragment:U3,lights_fragment_begin:I3,lights_fragment_maps:N3,lights_fragment_end:F3,logdepthbuf_fragment:O3,logdepthbuf_pars_fragment:B3,logdepthbuf_pars_vertex:z3,logdepthbuf_vertex:H3,map_fragment:V3,map_pars_fragment:G3,map_particle_fragment:k3,map_particle_pars_fragment:W3,metalnessmap_fragment:X3,metalnessmap_pars_fragment:q3,morphinstance_vertex:Y3,morphcolor_vertex:$3,morphnormal_vertex:K3,morphtarget_pars_vertex:Z3,morphtarget_vertex:j3,normal_fragment_begin:J3,normal_fragment_maps:Q3,normal_pars_fragment:e2,normal_pars_vertex:t2,normal_vertex:n2,normalmap_pars_fragment:i2,clearcoat_normal_fragment_begin:r2,clearcoat_normal_fragment_maps:s2,clearcoat_pars_fragment:a2,iridescence_pars_fragment:o2,opaque_fragment:c2,packing:l2,premultiplied_alpha_fragment:u2,project_vertex:h2,dithering_fragment:f2,dithering_pars_fragment:d2,roughnessmap_fragment:p2,roughnessmap_pars_fragment:m2,shadowmap_pars_fragment:_2,shadowmap_pars_vertex:g2,shadowmap_vertex:v2,shadowmask_pars_fragment:x2,skinbase_vertex:M2,skinning_pars_vertex:S2,skinning_vertex:E2,skinnormal_vertex:y2,specularmap_fragment:T2,specularmap_pars_fragment:A2,tonemapping_fragment:b2,tonemapping_pars_fragment:w2,transmission_fragment:R2,transmission_pars_fragment:C2,uv_pars_fragment:P2,uv_pars_vertex:L2,uv_vertex:D2,worldpos_vertex:U2,background_vert:I2,background_frag:N2,backgroundCube_vert:F2,backgroundCube_frag:O2,cube_vert:B2,cube_frag:z2,depth_vert:H2,depth_frag:V2,distanceRGBA_vert:G2,distanceRGBA_frag:k2,equirect_vert:W2,equirect_frag:X2,linedashed_vert:q2,linedashed_frag:Y2,meshbasic_vert:$2,meshbasic_frag:K2,meshlambert_vert:Z2,meshlambert_frag:j2,meshmatcap_vert:J2,meshmatcap_frag:Q2,meshnormal_vert:e4,meshnormal_frag:t4,meshphong_vert:n4,meshphong_frag:i4,meshphysical_vert:r4,meshphysical_frag:s4,meshtoon_vert:a4,meshtoon_frag:o4,points_vert:c4,points_frag:l4,shadow_vert:u4,shadow_frag:h4,sprite_vert:f4,sprite_frag:d4},a0={common:{diffuse:{value:new $0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new z0},alphaMap:{value:null},alphaMapTransform:{value:new z0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new z0}},envmap:{envMap:{value:null},envMapRotation:{value:new z0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new z0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new z0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new z0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new z0},normalScale:{value:new J0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new z0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new z0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new z0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new z0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new z0},alphaTest:{value:0},uvTransform:{value:new z0}},sprite:{diffuse:{value:new $0(16777215)},opacity:{value:1},center:{value:new J0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new z0},alphaMap:{value:null},alphaMapTransform:{value:new z0},alphaTest:{value:0}}},He={basic:{uniforms:ge([a0.common,a0.specularmap,a0.envmap,a0.aomap,a0.lightmap,a0.fog]),vertexShader:V0.meshbasic_vert,fragmentShader:V0.meshbasic_frag},lambert:{uniforms:ge([a0.common,a0.specularmap,a0.envmap,a0.aomap,a0.lightmap,a0.emissivemap,a0.bumpmap,a0.normalmap,a0.displacementmap,a0.fog,a0.lights,{emissive:{value:new $0(0)}}]),vertexShader:V0.meshlambert_vert,fragmentShader:V0.meshlambert_frag},phong:{uniforms:ge([a0.common,a0.specularmap,a0.envmap,a0.aomap,a0.lightmap,a0.emissivemap,a0.bumpmap,a0.normalmap,a0.displacementmap,a0.fog,a0.lights,{emissive:{value:new $0(0)},specular:{value:new $0(1118481)},shininess:{value:30}}]),vertexShader:V0.meshphong_vert,fragmentShader:V0.meshphong_frag},standard:{uniforms:ge([a0.common,a0.envmap,a0.aomap,a0.lightmap,a0.emissivemap,a0.bumpmap,a0.normalmap,a0.displacementmap,a0.roughnessmap,a0.metalnessmap,a0.fog,a0.lights,{emissive:{value:new $0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:V0.meshphysical_vert,fragmentShader:V0.meshphysical_frag},toon:{uniforms:ge([a0.common,a0.aomap,a0.lightmap,a0.emissivemap,a0.bumpmap,a0.normalmap,a0.displacementmap,a0.gradientmap,a0.fog,a0.lights,{emissive:{value:new $0(0)}}]),vertexShader:V0.meshtoon_vert,fragmentShader:V0.meshtoon_frag},matcap:{uniforms:ge([a0.common,a0.bumpmap,a0.normalmap,a0.displacementmap,a0.fog,{matcap:{value:null}}]),vertexShader:V0.meshmatcap_vert,fragmentShader:V0.meshmatcap_frag},points:{uniforms:ge([a0.points,a0.fog]),vertexShader:V0.points_vert,fragmentShader:V0.points_frag},dashed:{uniforms:ge([a0.common,a0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:V0.linedashed_vert,fragmentShader:V0.linedashed_frag},depth:{uniforms:ge([a0.common,a0.displacementmap]),vertexShader:V0.depth_vert,fragmentShader:V0.depth_frag},normal:{uniforms:ge([a0.common,a0.bumpmap,a0.normalmap,a0.displacementmap,{opacity:{value:1}}]),vertexShader:V0.meshnormal_vert,fragmentShader:V0.meshnormal_frag},sprite:{uniforms:ge([a0.sprite,a0.fog]),vertexShader:V0.sprite_vert,fragmentShader:V0.sprite_frag},background:{uniforms:{uvTransform:{value:new z0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:V0.background_vert,fragmentShader:V0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new z0}},vertexShader:V0.backgroundCube_vert,fragmentShader:V0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:V0.cube_vert,fragmentShader:V0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:V0.equirect_vert,fragmentShader:V0.equirect_frag},distanceRGBA:{uniforms:ge([a0.common,a0.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:V0.distanceRGBA_vert,fragmentShader:V0.distanceRGBA_frag},shadow:{uniforms:ge([a0.lights,a0.fog,{color:{value:new $0(0)},opacity:{value:1}}]),vertexShader:V0.shadow_vert,fragmentShader:V0.shadow_frag}};He.physical={uniforms:ge([He.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new z0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new z0},clearcoatNormalScale:{value:new J0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new z0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new z0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new z0},sheen:{value:0},sheenColor:{value:new $0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new z0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new z0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new z0},transmissionSamplerSize:{value:new J0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new z0},attenuationDistance:{value:0},attenuationColor:{value:new $0(0)},specularColor:{value:new $0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new z0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new z0},anisotropyVector:{value:new J0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new z0}}]),vertexShader:V0.meshphysical_vert,fragmentShader:V0.meshphysical_frag};const Jn={r:0,b:0,g:0},St=new rt,p4=new oe;function m4(i,e,t,n,r,s,a){const o=new $0(0);let c=s===!0?0:1,l,h,d=null,f=0,m=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function x(T){let E=!1;const U=g(T);U===null?u(o,c):U&&U.isColor&&(u(U,1),E=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,E){const U=g(E);U&&(U.isCubeTexture||U.mapping===pi)?(h===void 0&&(h=new Qe(new wn(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:rn(He.backgroundCube.uniforms),vertexShader:He.backgroundCube.vertexShader,fragmentShader:He.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),St.copy(E.backgroundRotation),St.x*=-1,St.y*=-1,St.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(St.y*=-1,St.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(p4.makeRotationFromEuler(St)),h.material.toneMapped=q0.getTransfer(U.colorSpace)!==j0,(d!==U||f!==U.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=U,f=U.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(l===void 0&&(l=new Qe(new mi(2,2),new Ge({name:"BackgroundMaterial",uniforms:rn(He.background.uniforms),vertexShader:He.background.vertexShader,fragmentShader:He.background.fragmentShader,side:pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=U,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=q0.getTransfer(U.colorSpace)!==j0,U.matrixAutoUpdate===!0&&U.updateMatrix(),l.material.uniforms.uvTransform.value.copy(U.matrix),(d!==U||f!==U.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=U,f=U.version,m=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function u(T,E){T.getRGB(Jn,Da(i)),n.buffers.color.setClear(Jn.r,Jn.g,Jn.b,E,a)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),c=E,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,u(o,c)},render:x,addToRenderList:p,dispose:A}}function _4(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(M,P,q,H,W){let j=!1;const k=d(H,q,P);s!==k&&(s=k,l(s.object)),j=m(M,H,q,W),j&&g(M,H,q,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(M,P,q,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,P,q){const H=q.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let j=W[P.id];j===void 0&&(j={},W[P.id]=j);let k=j[H];return k===void 0&&(k=f(c()),j[H]=k),k}function f(M){const P=[],q=[],H=[];for(let W=0;W<t;W++)P[W]=0,q[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,P,q,H){const W=s.attributes,j=P.attributes;let k=0;const $=q.getAttributes();for(const V in $)if($[V].location>=0){const o0=W[V];let E0=j[V];if(E0===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(E0=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(E0=M.instanceColor)),o0===void 0||o0.attribute!==E0||E0&&o0.data!==E0.data)return!0;k++}return s.attributesNum!==k||s.index!==H}function g(M,P,q,H){const W={},j=P.attributes;let k=0;const $=q.getAttributes();for(const V in $)if($[V].location>=0){let o0=j[V];o0===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(o0=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(o0=M.instanceColor));const E0={};E0.attribute=o0,o0&&o0.data&&(E0.data=o0.data),W[V]=E0,k++}s.attributes=W,s.attributesNum=k,s.index=H}function x(){const M=s.newAttributes;for(let P=0,q=M.length;P<q;P++)M[P]=0}function p(M){u(M,0)}function u(M,P){const q=s.newAttributes,H=s.enabledAttributes,W=s.attributeDivisors;q[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),W[M]!==P&&(i.vertexAttribDivisor(M,P),W[M]=P)}function A(){const M=s.newAttributes,P=s.enabledAttributes;for(let q=0,H=P.length;q<H;q++)P[q]!==M[q]&&(i.disableVertexAttribArray(q),P[q]=0)}function T(M,P,q,H,W,j,k){k===!0?i.vertexAttribIPointer(M,P,q,W,j):i.vertexAttribPointer(M,P,q,H,W,j)}function E(M,P,q,H){x();const W=H.attributes,j=q.getAttributes(),k=P.defaultAttributeValues;for(const $ in j){const V=j[$];if(V.location>=0){let i0=W[$];if(i0===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(i0=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(i0=M.instanceColor)),i0!==void 0){const o0=i0.normalized,E0=i0.itemSize,L0=e.get(i0);if(L0===void 0)continue;const y0=L0.buffer,G=L0.type,t0=L0.bytesPerElement,T0=G===i.INT||G===i.UNSIGNED_INT||i0.gpuType===Wr;if(i0.isInterleavedBufferAttribute){const r0=i0.data,b0=r0.stride,W0=i0.offset;if(r0.isInstancedInterleavedBuffer){for(let w0=0;w0<V.locationSize;w0++)u(V.location+w0,r0.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=r0.meshPerAttribute*r0.count)}else for(let w0=0;w0<V.locationSize;w0++)p(V.location+w0);i.bindBuffer(i.ARRAY_BUFFER,y0);for(let w0=0;w0<V.locationSize;w0++)T(V.location+w0,E0/V.locationSize,G,o0,b0*t0,(W0+E0/V.locationSize*w0)*t0,T0)}else{if(i0.isInstancedBufferAttribute){for(let r0=0;r0<V.locationSize;r0++)u(V.location+r0,i0.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=i0.meshPerAttribute*i0.count)}else for(let r0=0;r0<V.locationSize;r0++)p(V.location+r0);i.bindBuffer(i.ARRAY_BUFFER,y0);for(let r0=0;r0<V.locationSize;r0++)T(V.location+r0,E0/V.locationSize,G,o0,E0*t0,E0/V.locationSize*r0*t0,T0)}}else if(k!==void 0){const o0=k[$];if(o0!==void 0)switch(o0.length){case 2:i.vertexAttrib2fv(V.location,o0);break;case 3:i.vertexAttrib3fv(V.location,o0);break;case 4:i.vertexAttrib4fv(V.location,o0);break;default:i.vertexAttrib1fv(V.location,o0)}}}}A()}function U(){I();for(const M in n){const P=n[M];for(const q in P){const H=P[q];for(const W in H)h(H[W].object),delete H[W];delete P[q]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const q in P){const H=P[q];for(const W in H)h(H[W].object),delete H[W];delete P[q]}delete n[M.id]}function R(M){for(const P in n){const q=n[P];if(q[M.id]===void 0)continue;const H=q[M.id];for(const W in H)h(H[W].object),delete H[W];delete q[M.id]}}function I(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:A}}function g4(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];t.update(m,n,1)}function c(l,h,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function v4(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Oe&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==it&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==je&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:U,maxSamples:C}}function x4(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new At,o=new z0,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{const A=s?0:n,T=A*4;let E=u.clippingState||null;c.value=E,E=h(g,f,T,m);for(let U=0;U!==T;++U)E[U]=t[U];u.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const u=m+x*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<u)&&(p=new Float32Array(u));for(let T=0,E=m;T!==x;++T,E+=4)a.copy(d[T]).applyMatrix4(A,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function M4(i){let e=new WeakMap;function t(a,o){return o===lr?a.mapping=en:o===ur&&(a.mapping=tn),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===lr||o===ur)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new g1(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Kt=4,Os=[.125,.215,.35,.446,.526,.582],Rt=20,Xi=new P1,Bs=new $0;let qi=null,Yi=0,$i=0,Ki=!1;const bt=(1+Math.sqrt(5))/2,Yt=1/bt,zs=[new F(-bt,Yt,0),new F(bt,Yt,0),new F(-Yt,0,bt),new F(Yt,0,bt),new F(0,bt,-Yt),new F(0,bt,Yt),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],S4=new F;class Hs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=S4}=s;qi=this._renderer.getRenderTarget(),Yi=this._renderer.getActiveCubeFace(),$i=this._renderer.getActiveMipmapLevel(),Ki=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ks(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qi,Yi,$i),this._renderer.xr.enabled=Ki,e.scissorTest=!1,Qn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===en||e.mapping===tn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qi=this._renderer.getRenderTarget(),Yi=this._renderer.getActiveCubeFace(),$i=this._renderer.getActiveMipmapLevel(),Ki=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:En,format:Oe,colorSpace:nn,depthBuffer:!1},r=Vs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vs(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E4(s)),this._blurMaterial=y4(s,e,t)}return r}_compileMaterial(e){const t=new Qe(this._lodPlanes[0],e);this._renderer.compile(t,Xi)}_sceneToCubeUV(e,t,n,r,s){const c=new Le(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(Bs),d.toneMapping=dt,d.autoClear=!1;const g=new Ca({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),x=new Qe(new wn,g);let p=!1;const u=e.background;u?u.isColor&&(g.color.copy(u),e.background=null,p=!0):(g.color.copy(Bs),p=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[A],s.y,s.z)):T===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[A]));const E=this._cubeSize;Qn(r,T*E,A>2?E:0,E,E),d.setRenderTarget(r),p&&d.render(x,c),d.render(e,c)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===en||e.mapping===tn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ks()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gs());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Qn(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Xi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zs[(r-s-1)%zs.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Qe(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Rt-1),x=s/g,p=isFinite(s)?1+Math.floor(h*x):Rt;p>Rt&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Rt}`);const u=[];let A=0;for(let R=0;R<Rt;++R){const I=R/x,S=Math.exp(-I*I/2);u.push(S),R===0?A+=S:R<p&&(A+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/A;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const E=this._sizeLods[r],U=3*E*(r>T-Kt?r-T+Kt:0),C=4*(this._cubeSize-E);Qn(t,U,C,3*E,2*E),c.setRenderTarget(t),c.render(d,Xi)}}function E4(i){const e=[],t=[],n=[];let r=i;const s=i-Kt+1+Os.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Kt?c=Os[a-i+Kt-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,x=3,p=2,u=1,A=new Float32Array(x*g*m),T=new Float32Array(p*g*m),E=new Float32Array(u*g*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,I=C>2?0:-1,S=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];A.set(S,x*g*C),T.set(f,p*g*C);const M=[C,C,C,C,C,C];E.set(M,u*g*C)}const U=new ze;U.setAttribute("position",new me(A,x)),U.setAttribute("uv",new me(T,p)),U.setAttribute("faceIndex",new me(E,u)),e.push(U),r>Kt&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vs(i,e,t){const n=new Dt(i,e,t);return n.texture.mapping=pi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qn(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function y4(i,e,t){const n=new Float32Array(Rt),r=new F(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:Rt,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jr(),fragmentShader:`

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
		`,blending:ft,depthTest:!1,depthWrite:!1})}function Gs(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jr(),fragmentShader:`

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
		`,blending:ft,depthTest:!1,depthWrite:!1})}function ks(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ft,depthTest:!1,depthWrite:!1})}function Jr(){return`

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
	`}function T4(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===lr||c===ur,h=c===en||c===tn;if(l||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Hs(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new Hs(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function A4(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&jt("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function b4(i,e,t,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function l(d){const f=[],m=d.index,g=d.attributes.position;let x=0;if(m!==null){const A=m.array;x=m.version;for(let T=0,E=A.length;T<E;T+=3){const U=A[T+0],C=A[T+1],R=A[T+2];f.push(U,C,C,R,R,U)}}else if(g!==void 0){const A=g.array;x=g.version;for(let T=0,E=A.length/3-1;T<E;T+=3){const U=T+0,C=T+1,R=T+2;f.push(U,C,C,R,R,U)}}else return;const p=new(Aa(f)?La:Pa)(f,1);p.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function w4(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,s,f*a),t.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,f*a,g),t.update(m,n,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];t.update(p,n,1)}function d(f,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/a,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,x,0,g);let u=0;for(let A=0;A<g;A++)u+=m[A]*x[A];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function R4(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function C4(i,e,t){const n=new WeakMap,r=new ce;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let E=o.attributes.position.count*T,U=1;E>e.maxTextureSize&&(U=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*U*4*d),R=new ba(C,E,U,d);R.type=je,R.needsUpdate=!0;const I=T*4;for(let M=0;M<d;M++){const P=p[M],q=u[M],H=A[M],W=E*U*4*M;for(let j=0;j<P.count;j++){const k=j*I;m===!0&&(r.fromBufferAttribute(P,j),C[W+k+0]=r.x,C[W+k+1]=r.y,C[W+k+2]=r.z,C[W+k+3]=0),g===!0&&(r.fromBufferAttribute(q,j),C[W+k+4]=r.x,C[W+k+5]=r.y,C[W+k+6]=r.z,C[W+k+7]=0),x===!0&&(r.fromBufferAttribute(H,j),C[W+k+8]=r.x,C[W+k+9]=r.y,C[W+k+10]=r.z,C[W+k+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new J0(E,U)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function P4(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Ba=new Ee,Ws=new Fa(1,1),za=new ba,Ha=new e1,Va=new Ia,Xs=[],qs=[],Ys=new Float32Array(16),$s=new Float32Array(9),Ks=new Float32Array(4);function on(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Xs[r];if(s===void 0&&(s=new Float32Array(r),Xs[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ue(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function he(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _i(i,e){let t=qs[e];t===void 0&&(t=new Int32Array(e),qs[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function L4(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function D4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ue(t,e))return;i.uniform2fv(this.addr,e),he(t,e)}}function U4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ue(t,e))return;i.uniform3fv(this.addr,e),he(t,e)}}function I4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ue(t,e))return;i.uniform4fv(this.addr,e),he(t,e)}}function N4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ue(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),he(t,e)}else{if(ue(t,n))return;Ks.set(n),i.uniformMatrix2fv(this.addr,!1,Ks),he(t,n)}}function F4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ue(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),he(t,e)}else{if(ue(t,n))return;$s.set(n),i.uniformMatrix3fv(this.addr,!1,$s),he(t,n)}}function O4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ue(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),he(t,e)}else{if(ue(t,n))return;Ys.set(n),i.uniformMatrix4fv(this.addr,!1,Ys),he(t,n)}}function B4(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function z4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ue(t,e))return;i.uniform2iv(this.addr,e),he(t,e)}}function H4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ue(t,e))return;i.uniform3iv(this.addr,e),he(t,e)}}function V4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ue(t,e))return;i.uniform4iv(this.addr,e),he(t,e)}}function G4(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function k4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ue(t,e))return;i.uniform2uiv(this.addr,e),he(t,e)}}function W4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ue(t,e))return;i.uniform3uiv(this.addr,e),he(t,e)}}function X4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ue(t,e))return;i.uniform4uiv(this.addr,e),he(t,e)}}function q4(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ws.compareFunction=Ta,s=Ws):s=Ba,t.setTexture2D(e||s,r)}function Y4(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ha,r)}function $4(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Va,r)}function K4(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||za,r)}function Z4(i){switch(i){case 5126:return L4;case 35664:return D4;case 35665:return U4;case 35666:return I4;case 35674:return N4;case 35675:return F4;case 35676:return O4;case 5124:case 35670:return B4;case 35667:case 35671:return z4;case 35668:case 35672:return H4;case 35669:case 35673:return V4;case 5125:return G4;case 36294:return k4;case 36295:return W4;case 36296:return X4;case 35678:case 36198:case 36298:case 36306:case 35682:return q4;case 35679:case 36299:case 36307:return Y4;case 35680:case 36300:case 36308:case 36293:return $4;case 36289:case 36303:case 36311:case 36292:return K4}}function j4(i,e){i.uniform1fv(this.addr,e)}function J4(i,e){const t=on(e,this.size,2);i.uniform2fv(this.addr,t)}function Q4(i,e){const t=on(e,this.size,3);i.uniform3fv(this.addr,t)}function e5(i,e){const t=on(e,this.size,4);i.uniform4fv(this.addr,t)}function t5(i,e){const t=on(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function n5(i,e){const t=on(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function i5(i,e){const t=on(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function r5(i,e){i.uniform1iv(this.addr,e)}function s5(i,e){i.uniform2iv(this.addr,e)}function a5(i,e){i.uniform3iv(this.addr,e)}function o5(i,e){i.uniform4iv(this.addr,e)}function c5(i,e){i.uniform1uiv(this.addr,e)}function l5(i,e){i.uniform2uiv(this.addr,e)}function u5(i,e){i.uniform3uiv(this.addr,e)}function h5(i,e){i.uniform4uiv(this.addr,e)}function f5(i,e,t){const n=this.cache,r=e.length,s=_i(t,r);ue(n,s)||(i.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ba,s[a])}function d5(i,e,t){const n=this.cache,r=e.length,s=_i(t,r);ue(n,s)||(i.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ha,s[a])}function p5(i,e,t){const n=this.cache,r=e.length,s=_i(t,r);ue(n,s)||(i.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Va,s[a])}function m5(i,e,t){const n=this.cache,r=e.length,s=_i(t,r);ue(n,s)||(i.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||za,s[a])}function _5(i){switch(i){case 5126:return j4;case 35664:return J4;case 35665:return Q4;case 35666:return e5;case 35674:return t5;case 35675:return n5;case 35676:return i5;case 5124:case 35670:return r5;case 35667:case 35671:return s5;case 35668:case 35672:return a5;case 35669:case 35673:return o5;case 5125:return c5;case 36294:return l5;case 36295:return u5;case 36296:return h5;case 35678:case 36198:case 36298:case 36306:case 35682:return f5;case 35679:case 36299:case 36307:return d5;case 35680:case 36300:case 36308:case 36293:return p5;case 36289:case 36303:case 36311:case 36292:return m5}}class g5{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Z4(t.type)}}class v5{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_5(t.type)}}class x5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Zi=/(\w+)(\])?(\[|\.)?/g;function Zs(i,e){i.seq.push(e),i.map[e.id]=e}function M5(i,e,t){const n=i.name,r=n.length;for(Zi.lastIndex=0;;){const s=Zi.exec(n),a=Zi.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Zs(t,l===void 0?new g5(o,i,e):new v5(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new x5(o),Zs(t,d)),t=d}}}class oi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);M5(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function js(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const S5=37297;let E5=0;function y5(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Js=new z0;function T5(i){q0._getMatrix(Js,q0.workingColorSpace,i);const e=`mat3( ${Js.elements.map(t=>t.toFixed(4))} )`;switch(q0.getTransfer(i)){case li:return[e,"LinearTransferOETF"];case j0:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qs(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+y5(i.getShaderSource(e),a)}else return r}function A5(i,e){const t=T5(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function b5(i,e){let t;switch(e){case Ao:t="Linear";break;case bo:t="Reinhard";break;case wo:t="Cineon";break;case Ro:t="ACESFilmic";break;case Po:t="AgX";break;case Lo:t="Neutral";break;case Co:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ei=new F;function w5(){q0.getLuminanceCoefficients(ei);const i=ei.x.toFixed(4),e=ei.y.toFixed(4),t=ei.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R5(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gn).join(`
`)}function C5(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function P5(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function gn(i){return i!==""}function ea(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ta(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const L5=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vr(i){return i.replace(L5,U5)}const D5=new Map;function U5(i,e){let t=V0[e];if(t===void 0){const n=D5.get(e);if(n!==void 0)t=V0[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vr(t)}const I5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function na(i){return i.replace(I5,N5)}function N5(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ia(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function F5(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===da?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===io?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ke&&(e="SHADOWMAP_TYPE_VSM"),e}function O5(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case en:case tn:e="ENVMAP_TYPE_CUBE";break;case pi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B5(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===tn&&(e="ENVMAP_MODE_REFRACTION"),e}function z5(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pa:e="ENVMAP_BLENDING_MULTIPLY";break;case yo:e="ENVMAP_BLENDING_MIX";break;case To:e="ENVMAP_BLENDING_ADD";break}return e}function H5(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function V5(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=F5(t),l=O5(t),h=B5(t),d=z5(t),f=H5(t),m=R5(t),g=C5(s),x=r.createProgram();let p,u,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gn).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gn).join(`
`),u.length>0&&(u+=`
`)):(p=[ia(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gn).join(`
`),u=[ia(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dt?"#define TONE_MAPPING":"",t.toneMapping!==dt?V0.tonemapping_pars_fragment:"",t.toneMapping!==dt?b5("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",V0.colorspace_pars_fragment,A5("linearToOutputTexel",t.outputColorSpace),w5(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gn).join(`
`)),a=Vr(a),a=ea(a,t),a=ta(a,t),o=Vr(o),o=ea(o,t),o=ta(o,t),a=na(a),o=na(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===fs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=A+p+a,E=A+u+o,U=js(r,r.VERTEX_SHADER,T),C=js(r,r.FRAGMENT_SHADER,E);r.attachShader(x,U),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){const q=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(U).trim(),W=r.getShaderInfoLog(C).trim();let j=!0,k=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,U,C);else{const $=Qs(r,U,"vertex"),V=Qs(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+$+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(H===""||W==="")&&(k=!1);k&&(P.diagnostics={runnable:j,programLog:q,vertexShader:{log:H,prefix:p},fragmentShader:{log:W,prefix:u}})}r.deleteShader(U),r.deleteShader(C),I=new oi(r,x),S=P5(r,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,S5)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E5++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=C,this}let G5=0;class k5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new W5(e),t.set(e,n)),n}}class W5{constructor(e){this.id=G5++,this.code=e,this.usedTimes=0}}function X5(i,e,t,n,r,s,a){const o=new wa,c=new k5,l=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,M,P,q,H){const W=q.fog,j=H.geometry,k=S.isMeshStandardMaterial?q.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),V=$&&$.mapping===pi?$.image.height:null,i0=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const o0=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,E0=o0!==void 0?o0.length:0;let L0=0;j.morphAttributes.position!==void 0&&(L0=1),j.morphAttributes.normal!==void 0&&(L0=2),j.morphAttributes.color!==void 0&&(L0=3);let y0,G,t0,T0;if(i0){const K0=He[i0];y0=K0.vertexShader,G=K0.fragmentShader}else y0=S.vertexShader,G=S.fragmentShader,c.update(S),t0=c.getVertexShaderID(S),T0=c.getFragmentShaderID(S);const r0=i.getRenderTarget(),b0=i.state.buffers.depth.getReversed(),W0=H.isInstancedMesh===!0,w0=H.isBatchedMesh===!0,u0=!!S.map,g0=!!S.matcap,f0=!!$,b=!!S.aoMap,ee=!!S.lightMap,H0=!!S.bumpMap,Y0=!!S.normalMap,S0=!!S.displacementMap,B0=!!S.emissiveMap,m0=!!S.metalnessMap,N0=!!S.roughnessMap,ie=S.anisotropy>0,y=S.clearcoat>0,_=S.dispersion>0,N=S.iridescence>0,X=S.sheen>0,Z=S.transmission>0,O=ie&&!!S.anisotropyMap,h0=y&&!!S.clearcoatMap,n0=y&&!!S.clearcoatNormalMap,v0=y&&!!S.clearcoatRoughnessMap,A0=N&&!!S.iridescenceMap,K=N&&!!S.iridescenceThicknessMap,d0=X&&!!S.sheenColorMap,D0=X&&!!S.sheenRoughnessMap,P0=!!S.specularMap,s0=!!S.specularColorMap,F0=!!S.specularIntensityMap,w=Z&&!!S.transmissionMap,c0=Z&&!!S.thicknessMap,J=!!S.gradientMap,_0=!!S.alphaMap,Q=S.alphaTest>0,Y=!!S.alphaHash,x0=!!S.extensions;let O0=dt;S.toneMapped&&(r0===null||r0.isXRRenderTarget===!0)&&(O0=i.toneMapping);const te={shaderID:i0,shaderType:S.type,shaderName:S.name,vertexShader:y0,fragmentShader:G,defines:S.defines,customVertexShaderID:t0,customFragmentShaderID:T0,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:w0,batchingColor:w0&&H._colorsTexture!==null,instancing:W0,instancingColor:W0&&H.instanceColor!==null,instancingMorph:W0&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:r0===null?i.outputColorSpace:r0.isXRRenderTarget===!0?r0.texture.colorSpace:nn,alphaToCoverage:!!S.alphaToCoverage,map:u0,matcap:g0,envMap:f0,envMapMode:f0&&$.mapping,envMapCubeUVHeight:V,aoMap:b,lightMap:ee,bumpMap:H0,normalMap:Y0,displacementMap:f&&S0,emissiveMap:B0,normalMapObjectSpace:Y0&&S.normalMapType===Fo,normalMapTangentSpace:Y0&&S.normalMapType===No,metalnessMap:m0,roughnessMap:N0,anisotropy:ie,anisotropyMap:O,clearcoat:y,clearcoatMap:h0,clearcoatNormalMap:n0,clearcoatRoughnessMap:v0,dispersion:_,iridescence:N,iridescenceMap:A0,iridescenceThicknessMap:K,sheen:X,sheenColorMap:d0,sheenRoughnessMap:D0,specularMap:P0,specularColorMap:s0,specularIntensityMap:F0,transmission:Z,transmissionMap:w,thicknessMap:c0,gradientMap:J,opaque:S.transparent===!1&&S.blending===Zt&&S.alphaToCoverage===!1,alphaMap:_0,alphaTest:Q,alphaHash:Y,combine:S.combine,mapUv:u0&&x(S.map.channel),aoMapUv:b&&x(S.aoMap.channel),lightMapUv:ee&&x(S.lightMap.channel),bumpMapUv:H0&&x(S.bumpMap.channel),normalMapUv:Y0&&x(S.normalMap.channel),displacementMapUv:S0&&x(S.displacementMap.channel),emissiveMapUv:B0&&x(S.emissiveMap.channel),metalnessMapUv:m0&&x(S.metalnessMap.channel),roughnessMapUv:N0&&x(S.roughnessMap.channel),anisotropyMapUv:O&&x(S.anisotropyMap.channel),clearcoatMapUv:h0&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:n0&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:v0&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:A0&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:K&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:d0&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:D0&&x(S.sheenRoughnessMap.channel),specularMapUv:P0&&x(S.specularMap.channel),specularColorMapUv:s0&&x(S.specularColorMap.channel),specularIntensityMapUv:F0&&x(S.specularIntensityMap.channel),transmissionMapUv:w&&x(S.transmissionMap.channel),thicknessMapUv:c0&&x(S.thicknessMap.channel),alphaMapUv:_0&&x(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Y0||ie),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(u0||_0),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:b0,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:E0,morphTextureStride:L0,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:O0,decodeVideoTexture:u0&&S.map.isVideoTexture===!0&&q0.getTransfer(S.map.colorSpace)===j0,decodeVideoTextureEmissive:B0&&S.emissiveMap.isVideoTexture===!0&&q0.getTransfer(S.emissiveMap.colorSpace)===j0,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ze,flipSided:S.side===Se,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:x0&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(x0&&S.extensions.multiDraw===!0||w0)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return te.vertexUv1s=l.has(1),te.vertexUv2s=l.has(2),te.vertexUv3s=l.has(3),l.clear(),te}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(A(M,S),T(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function A(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=g[S.type];let P;if(M){const q=He[M];P=d1.clone(q.uniforms)}else P=S.uniforms;return P}function U(S,M){let P;for(let q=0,H=h.length;q<H;q++){const W=h[q];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new V5(i,M,S,s),h.push(P)),P}function C(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:U,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:I}}function q5(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Y5(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ra(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sa(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,f,m,g,x,p){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function o(d,f,m,g,x,p){const u=a(d,f,m,g,x,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(d,f,m,g,x,p){const u=a(d,f,m,g,x,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||Y5),n.length>1&&n.sort(f||ra),r.length>1&&r.sort(f||ra)}function h(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function $5(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new sa,i.set(n,[a])):r>=s.length?(a=new sa,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function K5(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new $0};break;case"SpotLight":t={position:new F,direction:new F,color:new $0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new $0,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new $0,groundColor:new $0};break;case"RectAreaLight":t={color:new $0,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Z5(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J0};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J0};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J0,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let j5=0;function J5(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Q5(i){const e=new K5,t=Z5(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const r=new F,s=new oe,a=new oe;function o(l){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,x=0,p=0,u=0,A=0,T=0,E=0,U=0,C=0,R=0;l.sort(J5);for(let S=0,M=l.length;S<M;S++){const P=l[S],q=P.color,H=P.intensity,W=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=q.r*H,d+=q.g*H,f+=q.b*H;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],H);R++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,V=t.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=P.shadow.matrix,A++}n.directional[m]=k,m++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(q).multiplyScalar(H),k.distance=W,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[x]=k;const $=P.shadow;if(P.map&&(n.spotLightMap[U]=P.map,U++,$.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[x]=$.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=j,E++}x++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(q).multiplyScalar(H),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=k,p++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const $=P.shadow,V=t.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(H),k.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[u]=k,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=a0.LTC_FLOAT_1,n.rectAreaLTC2=a0.LTC_FLOAT_2):(n.rectAreaLTC1=a0.LTC_HALF_1,n.rectAreaLTC2=a0.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==u||I.numDirectionalShadows!==A||I.numPointShadows!==T||I.numSpotShadows!==E||I.numSpotMaps!==U||I.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+U-C,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,I.directionalLength=m,I.pointLength=g,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=u,I.numDirectionalShadows=A,I.numPointShadows=T,I.numSpotShadows=E,I.numSpotMaps=U,I.numLightProbes=R,n.version=j5++)}function c(l,h){let d=0,f=0,m=0,g=0,x=0;const p=h.matrixWorldInverse;for(let u=0,A=l.length;u<A;u++){const T=l[u];if(T.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(T.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function aa(i){const e=new Q5(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function e6(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new aa(i),e.set(r,[o])):s>=a.length?(o=new aa(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const t6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n6=`uniform sampler2D shadow_pass;
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
}`;function i6(i,e,t){let n=new Na;const r=new J0,s=new J0,a=new ce,o=new R1({depthPacking:Io}),c=new C1,l={},h=t.maxTextureSize,d={[pt]:Se,[Se]:pt,[Ze]:Ze},f=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J0},radius:{value:4}},vertexShader:t6,fragmentShader:n6}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qe(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=da;let u=this.type;this.render=function(C,R,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),q=i.state;q.setBlending(ft),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const H=u!==Ke&&this.type===Ke,W=u===Ke&&this.type!==Ke;for(let j=0,k=C.length;j<k;j++){const $=C[j],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const i0=V.getFrameExtents();if(r.multiply(i0),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/i0.x),r.x=s.x*i0.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/i0.y),r.y=s.y*i0.y,V.mapSize.y=s.y)),V.map===null||H===!0||W===!0){const E0=this.type!==Ke?{minFilter:Be,magFilter:Be}:{};V.map!==null&&V.map.dispose(),V.map=new Dt(r.x,r.y,E0),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const o0=V.getViewportCount();for(let E0=0;E0<o0;E0++){const L0=V.getViewport(E0);a.set(s.x*L0.x,s.y*L0.y,s.x*L0.z,s.y*L0.w),q.viewport(a),V.updateMatrices($,E0),n=V.getFrustum(),E(R,I,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Ke&&A(V,I),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,M,P)};function A(C,R){const I=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Dt(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,I,f,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,I,m,x,null)}function T(C,R,I,S){let M=null;const P=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const q=M.uuid,H=R.uuid;let W=l[q];W===void 0&&(W={},l[q]=W);let j=W[H];j===void 0&&(j=M.clone(),W[H]=j,R.addEventListener("dispose",U)),M=j}if(M.visible=R.visible,M.wireframe=R.wireframe,S===Ke?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=i.properties.get(M);q.light=I}return M}function E(C,R,I,S,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Ke)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const H=e.update(C),W=C.material;if(Array.isArray(W)){const j=H.groups;for(let k=0,$=j.length;k<$;k++){const V=j[k],i0=W[V.materialIndex];if(i0&&i0.visible){const o0=T(C,i0,S,M);C.onBeforeShadow(i,C,R,I,H,o0,V),i.renderBufferDirect(I,null,H,o0,C,V),C.onAfterShadow(i,C,R,I,H,o0,V)}}}else if(W.visible){const j=T(C,W,S,M);C.onBeforeShadow(i,C,R,I,H,j,null),i.renderBufferDirect(I,null,H,j,C,null),C.onAfterShadow(i,C,R,I,H,j,null)}}const q=C.children;for(let H=0,W=q.length;H<W;H++)E(q[H],R,I,S,M)}function U(C){C.target.removeEventListener("dispose",U);for(const I in l){const S=l[I],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const r6={[nr]:ir,[rr]:or,[sr]:cr,[Qt]:ar,[ir]:nr,[or]:rr,[cr]:sr,[ar]:Qt};function s6(i,e){function t(){let w=!1;const c0=new ce;let J=null;const _0=new ce(0,0,0,0);return{setMask:function(Q){J!==Q&&!w&&(i.colorMask(Q,Q,Q,Q),J=Q)},setLocked:function(Q){w=Q},setClear:function(Q,Y,x0,O0,te){te===!0&&(Q*=O0,Y*=O0,x0*=O0),c0.set(Q,Y,x0,O0),_0.equals(c0)===!1&&(i.clearColor(Q,Y,x0,O0),_0.copy(c0))},reset:function(){w=!1,J=null,_0.set(-1,0,0,0)}}}function n(){let w=!1,c0=!1,J=null,_0=null,Q=null;return{setReversed:function(Y){if(c0!==Y){const x0=e.get("EXT_clip_control");Y?x0.clipControlEXT(x0.LOWER_LEFT_EXT,x0.ZERO_TO_ONE_EXT):x0.clipControlEXT(x0.LOWER_LEFT_EXT,x0.NEGATIVE_ONE_TO_ONE_EXT),c0=Y;const O0=Q;Q=null,this.setClear(O0)}},getReversed:function(){return c0},setTest:function(Y){Y?r0(i.DEPTH_TEST):b0(i.DEPTH_TEST)},setMask:function(Y){J!==Y&&!w&&(i.depthMask(Y),J=Y)},setFunc:function(Y){if(c0&&(Y=r6[Y]),_0!==Y){switch(Y){case nr:i.depthFunc(i.NEVER);break;case ir:i.depthFunc(i.ALWAYS);break;case rr:i.depthFunc(i.LESS);break;case Qt:i.depthFunc(i.LEQUAL);break;case sr:i.depthFunc(i.EQUAL);break;case ar:i.depthFunc(i.GEQUAL);break;case or:i.depthFunc(i.GREATER);break;case cr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_0=Y}},setLocked:function(Y){w=Y},setClear:function(Y){Q!==Y&&(c0&&(Y=1-Y),i.clearDepth(Y),Q=Y)},reset:function(){w=!1,J=null,_0=null,Q=null,c0=!1}}}function r(){let w=!1,c0=null,J=null,_0=null,Q=null,Y=null,x0=null,O0=null,te=null;return{setTest:function(K0){w||(K0?r0(i.STENCIL_TEST):b0(i.STENCIL_TEST))},setMask:function(K0){c0!==K0&&!w&&(i.stencilMask(K0),c0=K0)},setFunc:function(K0,De,ke){(J!==K0||_0!==De||Q!==ke)&&(i.stencilFunc(K0,De,ke),J=K0,_0=De,Q=ke)},setOp:function(K0,De,ke){(Y!==K0||x0!==De||O0!==ke)&&(i.stencilOp(K0,De,ke),Y=K0,x0=De,O0=ke)},setLocked:function(K0){w=K0},setClear:function(K0){te!==K0&&(i.clearStencil(K0),te=K0)},reset:function(){w=!1,c0=null,J=null,_0=null,Q=null,Y=null,x0=null,O0=null,te=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,u=null,A=null,T=null,E=null,U=null,C=null,R=new $0(0,0,0),I=0,S=!1,M=null,P=null,q=null,H=null,W=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=$>=2);let i0=null,o0={};const E0=i.getParameter(i.SCISSOR_BOX),L0=i.getParameter(i.VIEWPORT),y0=new ce().fromArray(E0),G=new ce().fromArray(L0);function t0(w,c0,J,_0){const Q=new Uint8Array(4),Y=i.createTexture();i.bindTexture(w,Y),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let x0=0;x0<J;x0++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(c0,0,i.RGBA,1,1,_0,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(c0+x0,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return Y}const T0={};T0[i.TEXTURE_2D]=t0(i.TEXTURE_2D,i.TEXTURE_2D,1),T0[i.TEXTURE_CUBE_MAP]=t0(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),T0[i.TEXTURE_2D_ARRAY]=t0(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),T0[i.TEXTURE_3D]=t0(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),r0(i.DEPTH_TEST),a.setFunc(Qt),H0(!1),Y0(as),r0(i.CULL_FACE),b(ft);function r0(w){h[w]!==!0&&(i.enable(w),h[w]=!0)}function b0(w){h[w]!==!1&&(i.disable(w),h[w]=!1)}function W0(w,c0){return d[w]!==c0?(i.bindFramebuffer(w,c0),d[w]=c0,w===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=c0),w===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=c0),!0):!1}function w0(w,c0){let J=m,_0=!1;if(w){J=f.get(c0),J===void 0&&(J=[],f.set(c0,J));const Q=w.textures;if(J.length!==Q.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,x0=Q.length;Y<x0;Y++)J[Y]=i.COLOR_ATTACHMENT0+Y;J.length=Q.length,_0=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,_0=!0);_0&&i.drawBuffers(J)}function u0(w){return g!==w?(i.useProgram(w),g=w,!0):!1}const g0={[wt]:i.FUNC_ADD,[so]:i.FUNC_SUBTRACT,[ao]:i.FUNC_REVERSE_SUBTRACT};g0[oo]=i.MIN,g0[co]=i.MAX;const f0={[lo]:i.ZERO,[uo]:i.ONE,[ho]:i.SRC_COLOR,[er]:i.SRC_ALPHA,[vo]:i.SRC_ALPHA_SATURATE,[_o]:i.DST_COLOR,[po]:i.DST_ALPHA,[fo]:i.ONE_MINUS_SRC_COLOR,[tr]:i.ONE_MINUS_SRC_ALPHA,[go]:i.ONE_MINUS_DST_COLOR,[mo]:i.ONE_MINUS_DST_ALPHA,[xo]:i.CONSTANT_COLOR,[Mo]:i.ONE_MINUS_CONSTANT_COLOR,[So]:i.CONSTANT_ALPHA,[Eo]:i.ONE_MINUS_CONSTANT_ALPHA};function b(w,c0,J,_0,Q,Y,x0,O0,te,K0){if(w===ft){x===!0&&(b0(i.BLEND),x=!1);return}if(x===!1&&(r0(i.BLEND),x=!0),w!==ro){if(w!==p||K0!==S){if((u!==wt||E!==wt)&&(i.blendEquation(i.FUNC_ADD),u=wt,E=wt),K0)switch(w){case Zt:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.ONE,i.ONE);break;case cs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ls:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Zt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cs:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ls:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}A=null,T=null,U=null,C=null,R.set(0,0,0),I=0,p=w,S=K0}return}Q=Q||c0,Y=Y||J,x0=x0||_0,(c0!==u||Q!==E)&&(i.blendEquationSeparate(g0[c0],g0[Q]),u=c0,E=Q),(J!==A||_0!==T||Y!==U||x0!==C)&&(i.blendFuncSeparate(f0[J],f0[_0],f0[Y],f0[x0]),A=J,T=_0,U=Y,C=x0),(O0.equals(R)===!1||te!==I)&&(i.blendColor(O0.r,O0.g,O0.b,te),R.copy(O0),I=te),p=w,S=!1}function ee(w,c0){w.side===Ze?b0(i.CULL_FACE):r0(i.CULL_FACE);let J=w.side===Se;c0&&(J=!J),H0(J),w.blending===Zt&&w.transparent===!1?b(ft):b(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),s.setMask(w.colorWrite);const _0=w.stencilWrite;o.setTest(_0),_0&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),B0(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?r0(i.SAMPLE_ALPHA_TO_COVERAGE):b0(i.SAMPLE_ALPHA_TO_COVERAGE)}function H0(w){M!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),M=w)}function Y0(w){w!==to?(r0(i.CULL_FACE),w!==P&&(w===as?i.cullFace(i.BACK):w===no?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):b0(i.CULL_FACE),P=w}function S0(w){w!==q&&(k&&i.lineWidth(w),q=w)}function B0(w,c0,J){w?(r0(i.POLYGON_OFFSET_FILL),(H!==c0||W!==J)&&(i.polygonOffset(c0,J),H=c0,W=J)):b0(i.POLYGON_OFFSET_FILL)}function m0(w){w?r0(i.SCISSOR_TEST):b0(i.SCISSOR_TEST)}function N0(w){w===void 0&&(w=i.TEXTURE0+j-1),i0!==w&&(i.activeTexture(w),i0=w)}function ie(w,c0,J){J===void 0&&(i0===null?J=i.TEXTURE0+j-1:J=i0);let _0=o0[J];_0===void 0&&(_0={type:void 0,texture:void 0},o0[J]=_0),(_0.type!==w||_0.texture!==c0)&&(i0!==J&&(i.activeTexture(J),i0=J),i.bindTexture(w,c0||T0[w]),_0.type=w,_0.texture=c0)}function y(){const w=o0[i0];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function X(){try{i.texSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Z(){try{i.texSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function h0(){try{i.compressedTexSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function n0(){try{i.texStorage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function v0(){try{i.texStorage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function A0(){try{i.texImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function K(){try{i.texImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function d0(w){y0.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),y0.copy(w))}function D0(w){G.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),G.copy(w))}function P0(w,c0){let J=l.get(c0);J===void 0&&(J=new WeakMap,l.set(c0,J));let _0=J.get(w);_0===void 0&&(_0=i.getUniformBlockIndex(c0,w.name),J.set(w,_0))}function s0(w,c0){const _0=l.get(c0).get(w);c.get(c0)!==_0&&(i.uniformBlockBinding(c0,_0,w.__bindingPointIndex),c.set(c0,_0))}function F0(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},i0=null,o0={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,u=null,A=null,T=null,E=null,U=null,C=null,R=new $0(0,0,0),I=0,S=!1,M=null,P=null,q=null,H=null,W=null,y0.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:r0,disable:b0,bindFramebuffer:W0,drawBuffers:w0,useProgram:u0,setBlending:b,setMaterial:ee,setFlipSided:H0,setCullFace:Y0,setLineWidth:S0,setPolygonOffset:B0,setScissorTest:m0,activeTexture:N0,bindTexture:ie,unbindTexture:y,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:A0,texImage3D:K,updateUBOMapping:P0,uniformBlockBinding:s0,texStorage2D:n0,texStorage3D:v0,texSubImage2D:X,texSubImage3D:Z,compressedTexSubImage2D:O,compressedTexSubImage3D:h0,scissor:d0,viewport:D0,reset:F0}}function a6(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new J0,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return m?new OffscreenCanvas(y,_):hi("canvas")}function x(y,_,N){let X=1;const Z=ie(y);if((Z.width>N||Z.height>N)&&(X=N/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const O=Math.floor(X*Z.width),h0=Math.floor(X*Z.height);d===void 0&&(d=g(O,h0));const n0=_?g(O,h0):d;return n0.width=O,n0.height=h0,n0.getContext("2d").drawImage(y,0,0,O,h0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+O+"x"+h0+")."),n0}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),y;return y}function p(y){return y.generateMipmaps}function u(y){i.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,_,N,X,Z=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let O=_;if(_===i.RED&&(N===i.FLOAT&&(O=i.R32F),N===i.HALF_FLOAT&&(O=i.R16F),N===i.UNSIGNED_BYTE&&(O=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(O=i.R8UI),N===i.UNSIGNED_SHORT&&(O=i.R16UI),N===i.UNSIGNED_INT&&(O=i.R32UI),N===i.BYTE&&(O=i.R8I),N===i.SHORT&&(O=i.R16I),N===i.INT&&(O=i.R32I)),_===i.RG&&(N===i.FLOAT&&(O=i.RG32F),N===i.HALF_FLOAT&&(O=i.RG16F),N===i.UNSIGNED_BYTE&&(O=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(O=i.RG8UI),N===i.UNSIGNED_SHORT&&(O=i.RG16UI),N===i.UNSIGNED_INT&&(O=i.RG32UI),N===i.BYTE&&(O=i.RG8I),N===i.SHORT&&(O=i.RG16I),N===i.INT&&(O=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(O=i.RGB8UI),N===i.UNSIGNED_SHORT&&(O=i.RGB16UI),N===i.UNSIGNED_INT&&(O=i.RGB32UI),N===i.BYTE&&(O=i.RGB8I),N===i.SHORT&&(O=i.RGB16I),N===i.INT&&(O=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),N===i.UNSIGNED_INT&&(O=i.RGBA32UI),N===i.BYTE&&(O=i.RGBA8I),N===i.SHORT&&(O=i.RGBA16I),N===i.INT&&(O=i.RGBA32I)),_===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),_===i.RGBA){const h0=Z?li:q0.getTransfer(X);N===i.FLOAT&&(O=i.RGBA32F),N===i.HALF_FLOAT&&(O=i.RGBA16F),N===i.UNSIGNED_BYTE&&(O=h0===j0?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function E(y,_){let N;return y?_===null||_===Lt||_===xn?N=i.DEPTH24_STENCIL8:_===je?N=i.DEPTH32F_STENCIL8:_===vn&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Lt||_===xn?N=i.DEPTH_COMPONENT24:_===je?N=i.DEPTH_COMPONENT32F:_===vn&&(N=i.DEPTH_COMPONENT16),N}function U(y,_){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Be&&y.minFilter!==Ve?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function C(y){const _=y.target;_.removeEventListener("dispose",C),I(_),_.isVideoTexture&&h.delete(_)}function R(y){const _=y.target;_.removeEventListener("dispose",R),M(_)}function I(y){const _=n.get(y);if(_.__webglInit===void 0)return;const N=y.source,X=f.get(N);if(X){const Z=X[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(y),Object.keys(X).length===0&&f.delete(N)}n.remove(y)}function S(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const N=y.source,X=f.get(N);delete X[_.__cacheKey],a.memory.textures--}function M(y){const _=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Z=0;Z<_.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=y.textures;for(let X=0,Z=N.length;X<Z;X++){const O=n.get(N[X]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),a.memory.textures--),n.remove(N[X])}n.remove(y)}let P=0;function q(){P=0}function H(){const y=P;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),P+=1,y}function W(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function j(y,_){const N=n.get(y);if(y.isVideoTexture&&m0(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const X=y.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{T0(N,y,_);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function k(y,_){const N=n.get(y);if(y.version>0&&N.__version!==y.version){T0(N,y,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function $(y,_){const N=n.get(y);if(y.version>0&&N.__version!==y.version){T0(N,y,_);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function V(y,_){const N=n.get(y);if(y.version>0&&N.__version!==y.version){r0(N,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const i0={[hr]:i.REPEAT,[Ct]:i.CLAMP_TO_EDGE,[fr]:i.MIRRORED_REPEAT},o0={[Be]:i.NEAREST,[Do]:i.NEAREST_MIPMAP_NEAREST,[Pn]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[xi]:i.LINEAR_MIPMAP_NEAREST,[Pt]:i.LINEAR_MIPMAP_LINEAR},E0={[Oo]:i.NEVER,[ko]:i.ALWAYS,[Bo]:i.LESS,[Ta]:i.LEQUAL,[zo]:i.EQUAL,[Go]:i.GEQUAL,[Ho]:i.GREATER,[Vo]:i.NOTEQUAL};function L0(y,_){if(_.type===je&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ve||_.magFilter===xi||_.magFilter===Pn||_.magFilter===Pt||_.minFilter===Ve||_.minFilter===xi||_.minFilter===Pn||_.minFilter===Pt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,i0[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,i0[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i0[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,o0[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,o0[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,E0[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Be||_.minFilter!==Pn&&_.minFilter!==Pt||_.type===je&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function y0(y,_){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",C));const X=_.source;let Z=f.get(X);Z===void 0&&(Z={},f.set(X,Z));const O=W(_);if(O!==y.__cacheKey){Z[O]===void 0&&(Z[O]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[O].usedTimes++;const h0=Z[y.__cacheKey];h0!==void 0&&(Z[y.__cacheKey].usedTimes--,h0.usedTimes===0&&S(_)),y.__cacheKey=O,y.__webglTexture=Z[O].texture}return N}function G(y,_,N){return Math.floor(Math.floor(y/N)/_)}function t0(y,_,N,X){const O=y.updateRanges;if(O.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,N,X,_.data);else{O.sort((K,d0)=>K.start-d0.start);let h0=0;for(let K=1;K<O.length;K++){const d0=O[h0],D0=O[K],P0=d0.start+d0.count,s0=G(D0.start,_.width,4),F0=G(d0.start,_.width,4);D0.start<=P0+1&&s0===F0&&G(D0.start+D0.count-1,_.width,4)===s0?d0.count=Math.max(d0.count,D0.start+D0.count-d0.start):(++h0,O[h0]=D0)}O.length=h0+1;const n0=i.getParameter(i.UNPACK_ROW_LENGTH),v0=i.getParameter(i.UNPACK_SKIP_PIXELS),A0=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let K=0,d0=O.length;K<d0;K++){const D0=O[K],P0=Math.floor(D0.start/4),s0=Math.ceil(D0.count/4),F0=P0%_.width,w=Math.floor(P0/_.width),c0=s0,J=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,F0),i.pixelStorei(i.UNPACK_SKIP_ROWS,w),t.texSubImage2D(i.TEXTURE_2D,0,F0,w,c0,J,N,X,_.data)}y.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,n0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,v0),i.pixelStorei(i.UNPACK_SKIP_ROWS,A0)}}function T0(y,_,N){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const Z=y0(y,_),O=_.source;t.bindTexture(X,y.__webglTexture,i.TEXTURE0+N);const h0=n.get(O);if(O.version!==h0.__version||Z===!0){t.activeTexture(i.TEXTURE0+N);const n0=q0.getPrimaries(q0.workingColorSpace),v0=_.colorSpace===ht?null:q0.getPrimaries(_.colorSpace),A0=_.colorSpace===ht||n0===v0?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,A0);let K=x(_.image,!1,r.maxTextureSize);K=N0(_,K);const d0=s.convert(_.format,_.colorSpace),D0=s.convert(_.type);let P0=T(_.internalFormat,d0,D0,_.colorSpace,_.isVideoTexture);L0(X,_);let s0;const F0=_.mipmaps,w=_.isVideoTexture!==!0,c0=h0.__version===void 0||Z===!0,J=O.dataReady,_0=U(_,K);if(_.isDepthTexture)P0=E(_.format===Sn,_.type),c0&&(w?t.texStorage2D(i.TEXTURE_2D,1,P0,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,P0,K.width,K.height,0,d0,D0,null));else if(_.isDataTexture)if(F0.length>0){w&&c0&&t.texStorage2D(i.TEXTURE_2D,_0,P0,F0[0].width,F0[0].height);for(let Q=0,Y=F0.length;Q<Y;Q++)s0=F0[Q],w?J&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,s0.width,s0.height,d0,D0,s0.data):t.texImage2D(i.TEXTURE_2D,Q,P0,s0.width,s0.height,0,d0,D0,s0.data);_.generateMipmaps=!1}else w?(c0&&t.texStorage2D(i.TEXTURE_2D,_0,P0,K.width,K.height),J&&t0(_,K,d0,D0)):t.texImage2D(i.TEXTURE_2D,0,P0,K.width,K.height,0,d0,D0,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){w&&c0&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_0,P0,F0[0].width,F0[0].height,K.depth);for(let Q=0,Y=F0.length;Q<Y;Q++)if(s0=F0[Q],_.format!==Oe)if(d0!==null)if(w){if(J)if(_.layerUpdates.size>0){const x0=Fs(s0.width,s0.height,_.format,_.type);for(const O0 of _.layerUpdates){const te=s0.data.subarray(O0*x0/s0.data.BYTES_PER_ELEMENT,(O0+1)*x0/s0.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,O0,s0.width,s0.height,1,d0,te)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,s0.width,s0.height,K.depth,d0,s0.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,P0,s0.width,s0.height,K.depth,0,s0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,s0.width,s0.height,K.depth,d0,D0,s0.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,P0,s0.width,s0.height,K.depth,0,d0,D0,s0.data)}else{w&&c0&&t.texStorage2D(i.TEXTURE_2D,_0,P0,F0[0].width,F0[0].height);for(let Q=0,Y=F0.length;Q<Y;Q++)s0=F0[Q],_.format!==Oe?d0!==null?w?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,s0.width,s0.height,d0,s0.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,P0,s0.width,s0.height,0,s0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?J&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,s0.width,s0.height,d0,D0,s0.data):t.texImage2D(i.TEXTURE_2D,Q,P0,s0.width,s0.height,0,d0,D0,s0.data)}else if(_.isDataArrayTexture)if(w){if(c0&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_0,P0,K.width,K.height,K.depth),J)if(_.layerUpdates.size>0){const Q=Fs(K.width,K.height,_.format,_.type);for(const Y of _.layerUpdates){const x0=K.data.subarray(Y*Q/K.data.BYTES_PER_ELEMENT,(Y+1)*Q/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,K.width,K.height,1,d0,D0,x0)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,d0,D0,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,P0,K.width,K.height,K.depth,0,d0,D0,K.data);else if(_.isData3DTexture)w?(c0&&t.texStorage3D(i.TEXTURE_3D,_0,P0,K.width,K.height,K.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,d0,D0,K.data)):t.texImage3D(i.TEXTURE_3D,0,P0,K.width,K.height,K.depth,0,d0,D0,K.data);else if(_.isFramebufferTexture){if(c0)if(w)t.texStorage2D(i.TEXTURE_2D,_0,P0,K.width,K.height);else{let Q=K.width,Y=K.height;for(let x0=0;x0<_0;x0++)t.texImage2D(i.TEXTURE_2D,x0,P0,Q,Y,0,d0,D0,null),Q>>=1,Y>>=1}}else if(F0.length>0){if(w&&c0){const Q=ie(F0[0]);t.texStorage2D(i.TEXTURE_2D,_0,P0,Q.width,Q.height)}for(let Q=0,Y=F0.length;Q<Y;Q++)s0=F0[Q],w?J&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,d0,D0,s0):t.texImage2D(i.TEXTURE_2D,Q,P0,d0,D0,s0);_.generateMipmaps=!1}else if(w){if(c0){const Q=ie(K);t.texStorage2D(i.TEXTURE_2D,_0,P0,Q.width,Q.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,d0,D0,K)}else t.texImage2D(i.TEXTURE_2D,0,P0,d0,D0,K);p(_)&&u(X),h0.__version=O.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function r0(y,_,N){if(_.image.length!==6)return;const X=y0(y,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+N);const O=n.get(Z);if(Z.version!==O.__version||X===!0){t.activeTexture(i.TEXTURE0+N);const h0=q0.getPrimaries(q0.workingColorSpace),n0=_.colorSpace===ht?null:q0.getPrimaries(_.colorSpace),v0=_.colorSpace===ht||h0===n0?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,v0);const A0=_.isCompressedTexture||_.image[0].isCompressedTexture,K=_.image[0]&&_.image[0].isDataTexture,d0=[];for(let Y=0;Y<6;Y++)!A0&&!K?d0[Y]=x(_.image[Y],!0,r.maxCubemapSize):d0[Y]=K?_.image[Y].image:_.image[Y],d0[Y]=N0(_,d0[Y]);const D0=d0[0],P0=s.convert(_.format,_.colorSpace),s0=s.convert(_.type),F0=T(_.internalFormat,P0,s0,_.colorSpace),w=_.isVideoTexture!==!0,c0=O.__version===void 0||X===!0,J=Z.dataReady;let _0=U(_,D0);L0(i.TEXTURE_CUBE_MAP,_);let Q;if(A0){w&&c0&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_0,F0,D0.width,D0.height);for(let Y=0;Y<6;Y++){Q=d0[Y].mipmaps;for(let x0=0;x0<Q.length;x0++){const O0=Q[x0];_.format!==Oe?P0!==null?w?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,x0,0,0,O0.width,O0.height,P0,O0.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,x0,F0,O0.width,O0.height,0,O0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,x0,0,0,O0.width,O0.height,P0,s0,O0.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,x0,F0,O0.width,O0.height,0,P0,s0,O0.data)}}}else{if(Q=_.mipmaps,w&&c0){Q.length>0&&_0++;const Y=ie(d0[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_0,F0,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(K){w?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,d0[Y].width,d0[Y].height,P0,s0,d0[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,F0,d0[Y].width,d0[Y].height,0,P0,s0,d0[Y].data);for(let x0=0;x0<Q.length;x0++){const te=Q[x0].image[Y].image;w?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,x0+1,0,0,te.width,te.height,P0,s0,te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,x0+1,F0,te.width,te.height,0,P0,s0,te.data)}}else{w?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,P0,s0,d0[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,F0,P0,s0,d0[Y]);for(let x0=0;x0<Q.length;x0++){const O0=Q[x0];w?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,x0+1,0,0,P0,s0,O0.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,x0+1,F0,P0,s0,O0.image[Y])}}}p(_)&&u(i.TEXTURE_CUBE_MAP),O.__version=Z.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function b0(y,_,N,X,Z,O){const h0=s.convert(N.format,N.colorSpace),n0=s.convert(N.type),v0=T(N.internalFormat,h0,n0,N.colorSpace),A0=n.get(_),K=n.get(N);if(K.__renderTarget=_,!A0.__hasExternalTextures){const d0=Math.max(1,_.width>>O),D0=Math.max(1,_.height>>O);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,O,v0,d0,D0,_.depth,0,h0,n0,null):t.texImage2D(Z,O,v0,d0,D0,0,h0,n0,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),B0(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,K.__webglTexture,0,S0(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,K.__webglTexture,O),t.bindFramebuffer(i.FRAMEBUFFER,null)}function W0(y,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const X=_.depthTexture,Z=X&&X.isDepthTexture?X.type:null,O=E(_.stencilBuffer,Z),h0=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,n0=S0(_);B0(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,n0,O,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,n0,O,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,O,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,h0,i.RENDERBUFFER,y)}else{const X=_.textures;for(let Z=0;Z<X.length;Z++){const O=X[Z],h0=s.convert(O.format,O.colorSpace),n0=s.convert(O.type),v0=T(O.internalFormat,h0,n0,O.colorSpace),A0=S0(_);N&&B0(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,A0,v0,_.width,_.height):B0(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,A0,v0,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,v0,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function w0(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(_.depthTexture);X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const Z=X.__webglTexture,O=S0(_);if(_.depthTexture.format===Mn)B0(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Sn)B0(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function u0(y){const _=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const X=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=X}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const X=y.texture.mipmaps;X&&X.length>0?w0(_.__webglFramebuffer[0],y):w0(_.__webglFramebuffer,y)}else if(N){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),W0(_.__webglDepthbuffer[X],y,!1);else{const Z=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,O)}}else{const X=y.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),W0(_.__webglDepthbuffer,y,!1);else{const Z=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,O)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function g0(y,_,N){const X=n.get(y);_!==void 0&&b0(X.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&u0(y)}function f0(y){const _=y.texture,N=n.get(y),X=n.get(_);y.addEventListener("dispose",R);const Z=y.textures,O=y.isWebGLCubeRenderTarget===!0,h0=Z.length>1;if(h0||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,a.memory.textures++),O){N.__webglFramebuffer=[];for(let n0=0;n0<6;n0++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[n0]=[];for(let v0=0;v0<_.mipmaps.length;v0++)N.__webglFramebuffer[n0][v0]=i.createFramebuffer()}else N.__webglFramebuffer[n0]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let n0=0;n0<_.mipmaps.length;n0++)N.__webglFramebuffer[n0]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(h0)for(let n0=0,v0=Z.length;n0<v0;n0++){const A0=n.get(Z[n0]);A0.__webglTexture===void 0&&(A0.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&B0(y)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let n0=0;n0<Z.length;n0++){const v0=Z[n0];N.__webglColorRenderbuffer[n0]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[n0]);const A0=s.convert(v0.format,v0.colorSpace),K=s.convert(v0.type),d0=T(v0.internalFormat,A0,K,v0.colorSpace,y.isXRRenderTarget===!0),D0=S0(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,D0,d0,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+n0,i.RENDERBUFFER,N.__webglColorRenderbuffer[n0])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),W0(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),L0(i.TEXTURE_CUBE_MAP,_);for(let n0=0;n0<6;n0++)if(_.mipmaps&&_.mipmaps.length>0)for(let v0=0;v0<_.mipmaps.length;v0++)b0(N.__webglFramebuffer[n0][v0],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+n0,v0);else b0(N.__webglFramebuffer[n0],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+n0,0);p(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(h0){for(let n0=0,v0=Z.length;n0<v0;n0++){const A0=Z[n0],K=n.get(A0);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),L0(i.TEXTURE_2D,A0),b0(N.__webglFramebuffer,y,A0,i.COLOR_ATTACHMENT0+n0,i.TEXTURE_2D,0),p(A0)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let n0=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(n0=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(n0,X.__webglTexture),L0(n0,_),_.mipmaps&&_.mipmaps.length>0)for(let v0=0;v0<_.mipmaps.length;v0++)b0(N.__webglFramebuffer[v0],y,_,i.COLOR_ATTACHMENT0,n0,v0);else b0(N.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,n0,0);p(_)&&u(n0),t.unbindTexture()}y.depthBuffer&&u0(y)}function b(y){const _=y.textures;for(let N=0,X=_.length;N<X;N++){const Z=_[N];if(p(Z)){const O=A(y),h0=n.get(Z).__webglTexture;t.bindTexture(O,h0),u(O),t.unbindTexture()}}}const ee=[],H0=[];function Y0(y){if(y.samples>0){if(B0(y)===!1){const _=y.textures,N=y.width,X=y.height;let Z=i.COLOR_BUFFER_BIT;const O=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,h0=n.get(y),n0=_.length>1;if(n0)for(let A0=0;A0<_.length;A0++)t.bindFramebuffer(i.FRAMEBUFFER,h0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+A0,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,h0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+A0,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,h0.__webglMultisampledFramebuffer);const v0=y.texture.mipmaps;v0&&v0.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,h0.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,h0.__webglFramebuffer);for(let A0=0;A0<_.length;A0++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),n0){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,h0.__webglColorRenderbuffer[A0]);const K=n.get(_[A0]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,N,X,0,0,N,X,Z,i.NEAREST),c===!0&&(ee.length=0,H0.length=0,ee.push(i.COLOR_ATTACHMENT0+A0),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ee.push(O),H0.push(O),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H0)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),n0)for(let A0=0;A0<_.length;A0++){t.bindFramebuffer(i.FRAMEBUFFER,h0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+A0,i.RENDERBUFFER,h0.__webglColorRenderbuffer[A0]);const K=n.get(_[A0]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,h0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+A0,i.TEXTURE_2D,K,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,h0.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function S0(y){return Math.min(r.maxSamples,y.samples)}function B0(y){const _=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function m0(y){const _=a.render.frame;h.get(y)!==_&&(h.set(y,_),y.update())}function N0(y,_){const N=y.colorSpace,X=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==nn&&N!==ht&&(q0.getTransfer(N)===j0?(X!==Oe||Z!==it)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function ie(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=q,this.setTexture2D=j,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=g0,this.setupRenderTarget=f0,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=Y0,this.setupDepthRenderbuffer=u0,this.setupFrameBufferTexture=b0,this.useMultisampledRTT=B0}function o6(i,e){function t(n,r=ht){let s;const a=q0.getTransfer(r);if(n===it)return i.UNSIGNED_BYTE;if(n===Xr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===va)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_a)return i.BYTE;if(n===ga)return i.SHORT;if(n===vn)return i.UNSIGNED_SHORT;if(n===Wr)return i.INT;if(n===Lt)return i.UNSIGNED_INT;if(n===je)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===xa)return i.ALPHA;if(n===Ma)return i.RGB;if(n===Oe)return i.RGBA;if(n===Mn)return i.DEPTH_COMPONENT;if(n===Sn)return i.DEPTH_STENCIL;if(n===Sa)return i.RED;if(n===Yr)return i.RED_INTEGER;if(n===Ea)return i.RG;if(n===$r)return i.RG_INTEGER;if(n===Kr)return i.RGBA_INTEGER;if(n===ni||n===ii||n===ri||n===si)if(a===j0)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ni)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ii)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ri)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===si)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ni)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ii)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ri)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===si)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dr||n===pr||n===mr||n===_r)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===dr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_r)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gr||n===vr||n===xr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gr||n===vr)return a===j0?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mr||n===Sr||n===Er||n===yr||n===Tr||n===Ar||n===br||n===wr||n===Rr||n===Cr||n===Pr||n===Lr||n===Dr||n===Ur)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Er)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ar)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===br)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ur)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ai||n===Ir||n===Nr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ai)return a===j0?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ir)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ya||n===Fr||n===Or||n===Br)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ai)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Or)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Br)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const c6=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l6=`
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

}`;class u6{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ee,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ge({vertexShader:c6,fragmentShader:l6,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h6 extends sn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null;const x=new u6,p=t.getContextAttributes();let u=null,A=null;const T=[],E=[],U=new J0;let C=null;const R=new Le;R.viewport=new ce;const I=new Le;I.viewport=new ce;const S=[R,I],M=new L1;let P=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let t0=T[G];return t0===void 0&&(t0=new Gi,T[G]=t0),t0.getTargetRaySpace()},this.getControllerGrip=function(G){let t0=T[G];return t0===void 0&&(t0=new Gi,T[G]=t0),t0.getGripSpace()},this.getHand=function(G){let t0=T[G];return t0===void 0&&(t0=new Gi,T[G]=t0),t0.getHandSpace()};function H(G){const t0=E.indexOf(G.inputSource);if(t0===-1)return;const T0=T[t0];T0!==void 0&&(T0.update(G.inputSource,G.frame,l||a),T0.dispatchEvent({type:G.type,data:G.inputSource}))}function W(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",j);for(let G=0;G<T.length;G++){const t0=E[G];t0!==null&&(E[G]=null,T[G].disconnect(t0))}P=null,q=null,x.reset(),e.setRenderTarget(u),m=null,f=null,d=null,r=null,A=null,y0.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",W),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let T0=null,r0=null,b0=null;p.depth&&(b0=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,T0=p.stencil?Sn:Mn,r0=p.stencil?xn:Lt);const W0={colorFormat:t.RGBA8,depthFormat:b0,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(W0),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Dt(f.textureWidth,f.textureHeight,{format:Oe,type:it,depthTexture:new Fa(f.textureWidth,f.textureHeight,r0,void 0,void 0,void 0,void 0,void 0,void 0,T0),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const T0={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,T0),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Dt(m.framebufferWidth,m.framebufferHeight,{format:Oe,type:it,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),y0.setContext(r),y0.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(G){for(let t0=0;t0<G.removed.length;t0++){const T0=G.removed[t0],r0=E.indexOf(T0);r0>=0&&(E[r0]=null,T[r0].disconnect(T0))}for(let t0=0;t0<G.added.length;t0++){const T0=G.added[t0];let r0=E.indexOf(T0);if(r0===-1){for(let W0=0;W0<T.length;W0++)if(W0>=E.length){E.push(T0),r0=W0;break}else if(E[W0]===null){E[W0]=T0,r0=W0;break}if(r0===-1)break}const b0=T[r0];b0&&b0.connect(T0)}}const k=new F,$=new F;function V(G,t0,T0){k.setFromMatrixPosition(t0.matrixWorld),$.setFromMatrixPosition(T0.matrixWorld);const r0=k.distanceTo($),b0=t0.projectionMatrix.elements,W0=T0.projectionMatrix.elements,w0=b0[14]/(b0[10]-1),u0=b0[14]/(b0[10]+1),g0=(b0[9]+1)/b0[5],f0=(b0[9]-1)/b0[5],b=(b0[8]-1)/b0[0],ee=(W0[8]+1)/W0[0],H0=w0*b,Y0=w0*ee,S0=r0/(-b+ee),B0=S0*-b;if(t0.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(B0),G.translateZ(S0),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),b0[10]===-1)G.projectionMatrix.copy(t0.projectionMatrix),G.projectionMatrixInverse.copy(t0.projectionMatrixInverse);else{const m0=w0+S0,N0=u0+S0,ie=H0-B0,y=Y0+(r0-B0),_=g0*u0/N0*m0,N=f0*u0/N0*m0;G.projectionMatrix.makePerspective(ie,y,_,N,m0,N0),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function i0(G,t0){t0===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(t0.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let t0=G.near,T0=G.far;x.texture!==null&&(x.depthNear>0&&(t0=x.depthNear),x.depthFar>0&&(T0=x.depthFar)),M.near=I.near=R.near=t0,M.far=I.far=R.far=T0,(P!==M.near||q!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,q=M.far),R.layers.mask=G.layers.mask|2,I.layers.mask=G.layers.mask|4,M.layers.mask=R.layers.mask|I.layers.mask;const r0=G.parent,b0=M.cameras;i0(M,r0);for(let W0=0;W0<b0.length;W0++)i0(b0[W0],r0);b0.length===2?V(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),o0(G,M,r0)};function o0(G,t0,T0){T0===null?G.matrix.copy(t0.matrixWorld):(G.matrix.copy(T0.matrixWorld),G.matrix.invert(),G.matrix.multiply(t0.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(t0.projectionMatrix),G.projectionMatrixInverse.copy(t0.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=zr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let E0=null;function L0(G,t0){if(h=t0.getViewerPose(l||a),g=t0,h!==null){const T0=h.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let r0=!1;T0.length!==M.cameras.length&&(M.cameras.length=0,r0=!0);for(let w0=0;w0<T0.length;w0++){const u0=T0[w0];let g0=null;if(m!==null)g0=m.getViewport(u0);else{const b=d.getViewSubImage(f,u0);g0=b.viewport,w0===0&&(e.setRenderTargetTextures(A,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(A))}let f0=S[w0];f0===void 0&&(f0=new Le,f0.layers.enable(w0),f0.viewport=new ce,S[w0]=f0),f0.matrix.fromArray(u0.transform.matrix),f0.matrix.decompose(f0.position,f0.quaternion,f0.scale),f0.projectionMatrix.fromArray(u0.projectionMatrix),f0.projectionMatrixInverse.copy(f0.projectionMatrix).invert(),f0.viewport.set(g0.x,g0.y,g0.width,g0.height),w0===0&&(M.matrix.copy(f0.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),r0===!0&&M.cameras.push(f0)}const b0=r.enabledFeatures;if(b0&&b0.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const w0=d.getDepthInformation(T0[0]);w0&&w0.isValid&&w0.texture&&x.init(e,w0,r.renderState)}}for(let T0=0;T0<T.length;T0++){const r0=E[T0],b0=T[T0];r0!==null&&b0!==void 0&&b0.update(r0,t0,l||a)}E0&&E0(G,t0),t0.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:t0}),g=null}const y0=new Oa;y0.setAnimationLoop(L0),this.setAnimationLoop=function(G){E0=G},this.dispose=function(){}}}const Et=new rt,f6=new oe;function d6(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Da(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,A,T,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,A,T):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Se&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Se&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const A=e.get(u),T=A.envMap,E=A.envMapRotation;T&&(p.envMap.value=T,Et.copy(E),Et.x*=-1,Et.y*=-1,Et.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Et.y*=-1,Et.z*=-1),p.envMapRotation.value.setFromMatrix4(f6.makeRotationFromEuler(Et)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,A,T){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*A,p.scale.value=T*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,A){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Se&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const A=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function p6(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const E=T.program;n.uniformBlockBinding(A,E)}function l(A,T){let E=r[A.id];E===void 0&&(g(A),E=h(A),r[A.id]=E,A.addEventListener("dispose",p));const U=T.program;n.updateUBOMapping(A,U);const C=e.render.frame;s[A.id]!==C&&(f(A),s[A.id]=C)}function h(A){const T=d();A.__bindingPointIndex=T;const E=i.createBuffer(),U=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,U,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const T=r[A.id],E=A.uniforms,U=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,R=E.length;C<R;C++){const I=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,M=I.length;S<M;S++){const P=I[S];if(m(P,C,S,U)===!0){const q=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let j=0;j<H.length;j++){const k=H[j],$=x(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,q+W,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,T,E,U){const C=A.value,R=T+"_"+E;if(U[R]===void 0)return typeof C=="number"||typeof C=="boolean"?U[R]=C:U[R]=C.clone(),!0;{const I=U[R];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return U[R]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(A){const T=A.uniforms;let E=0;const U=16;for(let R=0,I=T.length;R<I;R++){const S=Array.isArray(T[R])?T[R]:[T[R]];for(let M=0,P=S.length;M<P;M++){const q=S[M],H=Array.isArray(q.value)?q.value:[q.value];for(let W=0,j=H.length;W<j;W++){const k=H[W],$=x(k),V=E%U,i0=V%$.boundary,o0=V+i0;E+=i0,o0!==0&&U-o0<$.storage&&(E+=U-o0),q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=$.storage}}}const C=E%U;return C>0&&(E+=U-C),A.__size=E,A.__cache={},this}function x(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function p(A){const T=A.target;T.removeEventListener("dispose",p);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(const A in r)i.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class m6{constructor(e={}){const{canvas:t=Xo(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,u=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let U=!1;this._outputColorSpace=Pe;let C=0,R=0,I=null,S=-1,M=null;const P=new ce,q=new ce;let H=null;const W=new $0(0);let j=0,k=t.width,$=t.height,V=1,i0=null,o0=null;const E0=new ce(0,0,k,$),L0=new ce(0,0,k,$);let y0=!1;const G=new Na;let t0=!1,T0=!1;const r0=new oe,b0=new oe,W0=new F,w0=new ce,u0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let g0=!1;function f0(){return I===null?V:1}let b=n;function ee(v,L){return t.getContext(v,L)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kr}`),t.addEventListener("webglcontextlost",_0,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",Y,!1),b===null){const L="webgl2";if(b=ee(L,v),b===null)throw ee(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let H0,Y0,S0,B0,m0,N0,ie,y,_,N,X,Z,O,h0,n0,v0,A0,K,d0,D0,P0,s0,F0,w;function c0(){H0=new A4(b),H0.init(),s0=new o6(b,H0),Y0=new v4(b,H0,e,s0),S0=new s6(b,H0),Y0.reverseDepthBuffer&&f&&S0.buffers.depth.setReversed(!0),B0=new R4(b),m0=new q5,N0=new a6(b,H0,S0,m0,Y0,s0,B0),ie=new M4(E),y=new T4(E),_=new I1(b),F0=new _4(b,_),N=new b4(b,_,B0,F0),X=new P4(b,N,_,B0),d0=new C4(b,Y0,N0),v0=new x4(m0),Z=new X5(E,ie,y,H0,Y0,F0,v0),O=new d6(E,m0),h0=new $5,n0=new e6(H0),K=new m4(E,ie,y,S0,X,m,c),A0=new i6(E,X,Y0),w=new p6(b,B0,Y0,S0),D0=new g4(b,H0,B0),P0=new w4(b,H0,B0),B0.programs=Z.programs,E.capabilities=Y0,E.extensions=H0,E.properties=m0,E.renderLists=h0,E.shadowMap=A0,E.state=S0,E.info=B0}c0();const J=new h6(E,b);this.xr=J,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const v=H0.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=H0.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(k,$,!1))},this.getSize=function(v){return v.set(k,$)},this.setSize=function(v,L,B=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=v,$=L,t.width=Math.floor(v*V),t.height=Math.floor(L*V),B===!0&&(t.style.width=v+"px",t.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(k*V,$*V).floor()},this.setDrawingBufferSize=function(v,L,B){k=v,$=L,V=B,t.width=Math.floor(v*B),t.height=Math.floor(L*B),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(E0)},this.setViewport=function(v,L,B,z){v.isVector4?E0.set(v.x,v.y,v.z,v.w):E0.set(v,L,B,z),S0.viewport(P.copy(E0).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(L0)},this.setScissor=function(v,L,B,z){v.isVector4?L0.set(v.x,v.y,v.z,v.w):L0.set(v,L,B,z),S0.scissor(q.copy(L0).multiplyScalar(V).round())},this.getScissorTest=function(){return y0},this.setScissorTest=function(v){S0.setScissorTest(y0=v)},this.setOpaqueSort=function(v){i0=v},this.setTransparentSort=function(v){o0=v},this.getClearColor=function(v){return v.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,B=!0){let z=0;if(v){let D=!1;if(I!==null){const e0=I.texture.format;D=e0===Kr||e0===$r||e0===Yr}if(D){const e0=I.texture.type,l0=e0===it||e0===Lt||e0===vn||e0===xn||e0===Xr||e0===qr,M0=K.getClearColor(),p0=K.getClearAlpha(),U0=M0.r,I0=M0.g,R0=M0.b;l0?(g[0]=U0,g[1]=I0,g[2]=R0,g[3]=p0,b.clearBufferuiv(b.COLOR,0,g)):(x[0]=U0,x[1]=I0,x[2]=R0,x[3]=p0,b.clearBufferiv(b.COLOR,0,x))}else z|=b.COLOR_BUFFER_BIT}L&&(z|=b.DEPTH_BUFFER_BIT),B&&(z|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_0,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),K.dispose(),h0.dispose(),n0.dispose(),m0.dispose(),ie.dispose(),y.dispose(),X.dispose(),F0.dispose(),w.dispose(),Z.dispose(),J.dispose(),J.removeEventListener("sessionstart",Qr),J.removeEventListener("sessionend",es),mt.stop()};function _0(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const v=B0.autoReset,L=A0.enabled,B=A0.autoUpdate,z=A0.needsUpdate,D=A0.type;c0(),B0.autoReset=v,A0.enabled=L,A0.autoUpdate=B,A0.needsUpdate=z,A0.type=D}function Y(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function x0(v){const L=v.target;L.removeEventListener("dispose",x0),O0(L)}function O0(v){te(v),m0.remove(v)}function te(v){const L=m0.get(v).programs;L!==void 0&&(L.forEach(function(B){Z.releaseProgram(B)}),v.isShaderMaterial&&Z.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,B,z,D,e0){L===null&&(L=u0);const l0=D.isMesh&&D.matrixWorld.determinant()<0,M0=qa(v,L,B,z,D);S0.setMaterial(z,l0);let p0=B.index,U0=1;if(z.wireframe===!0){if(p0=N.getWireframeAttribute(B),p0===void 0)return;U0=2}const I0=B.drawRange,R0=B.attributes.position;let G0=I0.start*U0,Z0=(I0.start+I0.count)*U0;e0!==null&&(G0=Math.max(G0,e0.start*U0),Z0=Math.min(Z0,(e0.start+e0.count)*U0)),p0!==null?(G0=Math.max(G0,0),Z0=Math.min(Z0,p0.count)):R0!=null&&(G0=Math.max(G0,0),Z0=Math.min(Z0,R0.count));const ae=Z0-G0;if(ae<0||ae===1/0)return;F0.setup(D,z,M0,B,p0);let ne,Q0=D0;if(p0!==null&&(ne=_.get(p0),Q0=P0,Q0.setIndex(ne)),D.isMesh)z.wireframe===!0?(S0.setLineWidth(z.wireframeLinewidth*f0()),Q0.setMode(b.LINES)):Q0.setMode(b.TRIANGLES);else if(D.isLine){let C0=z.linewidth;C0===void 0&&(C0=1),S0.setLineWidth(C0*f0()),D.isLineSegments?Q0.setMode(b.LINES):D.isLineLoop?Q0.setMode(b.LINE_LOOP):Q0.setMode(b.LINE_STRIP)}else D.isPoints?Q0.setMode(b.POINTS):D.isSprite&&Q0.setMode(b.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)jt("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Q0.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(H0.get("WEBGL_multi_draw"))Q0.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const C0=D._multiDrawStarts,se=D._multiDrawCounts,X0=D._multiDrawCount,ye=p0?_.get(p0).bytesPerElement:1,Ut=m0.get(z).currentProgram.getUniforms();for(let Te=0;Te<X0;Te++)Ut.setValue(b,"_gl_DrawID",Te),Q0.render(C0[Te]/ye,se[Te])}else if(D.isInstancedMesh)Q0.renderInstances(G0,ae,D.count);else if(B.isInstancedBufferGeometry){const C0=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,se=Math.min(B.instanceCount,C0);Q0.renderInstances(G0,ae,se)}else Q0.render(G0,ae)};function K0(v,L,B){v.transparent===!0&&v.side===Ze&&v.forceSinglePass===!1?(v.side=Se,v.needsUpdate=!0,Cn(v,L,B),v.side=pt,v.needsUpdate=!0,Cn(v,L,B),v.side=Ze):Cn(v,L,B)}this.compile=function(v,L,B=null){B===null&&(B=v),u=n0.get(B),u.init(L),T.push(u),B.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),v!==B&&v.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),u.setupLights();const z=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const e0=D.material;if(e0)if(Array.isArray(e0))for(let l0=0;l0<e0.length;l0++){const M0=e0[l0];K0(M0,B,D),z.add(M0)}else K0(e0,B,D),z.add(e0)}),u=T.pop(),z},this.compileAsync=function(v,L,B=null){const z=this.compile(v,L,B);return new Promise(D=>{function e0(){if(z.forEach(function(l0){m0.get(l0).currentProgram.isReady()&&z.delete(l0)}),z.size===0){D(v);return}setTimeout(e0,10)}H0.get("KHR_parallel_shader_compile")!==null?e0():setTimeout(e0,10)})};let De=null;function ke(v){De&&De(v)}function Qr(){mt.stop()}function es(){mt.start()}const mt=new Oa;mt.setAnimationLoop(ke),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(v){De=v,J.setAnimationLoop(v),v===null?mt.stop():mt.start()},J.addEventListener("sessionstart",Qr),J.addEventListener("sessionend",es),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(L),L=J.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,L,I),u=n0.get(v,T.length),u.init(L),T.push(u),b0.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),G.setFromProjectionMatrix(b0),T0=this.localClippingEnabled,t0=v0.init(this.clippingPlanes,T0),p=h0.get(v,A.length),p.init(),A.push(p),J.enabled===!0&&J.isPresenting===!0){const e0=E.xr.getDepthSensingMesh();e0!==null&&gi(e0,L,-1/0,E.sortObjects)}gi(v,L,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(i0,o0),g0=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,g0&&K.addToRenderList(p,v),this.info.render.frame++,t0===!0&&v0.beginShadows();const B=u.state.shadowsArray;A0.render(B,v,L),t0===!0&&v0.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,D=p.transmissive;if(u.setupLights(),L.isArrayCamera){const e0=L.cameras;if(D.length>0)for(let l0=0,M0=e0.length;l0<M0;l0++){const p0=e0[l0];ns(z,D,v,p0)}g0&&K.render(v);for(let l0=0,M0=e0.length;l0<M0;l0++){const p0=e0[l0];ts(p,v,p0,p0.viewport)}}else D.length>0&&ns(z,D,v,L),g0&&K.render(v),ts(p,v,L);I!==null&&R===0&&(N0.updateMultisampleRenderTarget(I),N0.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(E,v,L),F0.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(u=T[T.length-1],t0===!0&&v0.setGlobalState(E.clippingPlanes,u.state.camera)):u=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function gi(v,L,B,z){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||G.intersectsSprite(v)){z&&w0.setFromMatrixPosition(v.matrixWorld).applyMatrix4(b0);const l0=X.update(v),M0=v.material;M0.visible&&p.push(v,l0,M0,B,w0.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||G.intersectsObject(v))){const l0=X.update(v),M0=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),w0.copy(v.boundingSphere.center)):(l0.boundingSphere===null&&l0.computeBoundingSphere(),w0.copy(l0.boundingSphere.center)),w0.applyMatrix4(v.matrixWorld).applyMatrix4(b0)),Array.isArray(M0)){const p0=l0.groups;for(let U0=0,I0=p0.length;U0<I0;U0++){const R0=p0[U0],G0=M0[R0.materialIndex];G0&&G0.visible&&p.push(v,l0,G0,B,w0.z,R0)}}else M0.visible&&p.push(v,l0,M0,B,w0.z,null)}}const e0=v.children;for(let l0=0,M0=e0.length;l0<M0;l0++)gi(e0[l0],L,B,z)}function ts(v,L,B,z){const D=v.opaque,e0=v.transmissive,l0=v.transparent;u.setupLightsView(B),t0===!0&&v0.setGlobalState(E.clippingPlanes,B),z&&S0.viewport(P.copy(z)),D.length>0&&Rn(D,L,B),e0.length>0&&Rn(e0,L,B),l0.length>0&&Rn(l0,L,B),S0.buffers.depth.setTest(!0),S0.buffers.depth.setMask(!0),S0.buffers.color.setMask(!0),S0.setPolygonOffset(!1)}function ns(v,L,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new Dt(1,1,{generateMipmaps:!0,type:H0.has("EXT_color_buffer_half_float")||H0.has("EXT_color_buffer_float")?En:it,minFilter:Pt,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:q0.workingColorSpace}));const e0=u.state.transmissionRenderTarget[z.id],l0=z.viewport||P;e0.setSize(l0.z*E.transmissionResolutionScale,l0.w*E.transmissionResolutionScale);const M0=E.getRenderTarget(),p0=E.getActiveCubeFace(),U0=E.getActiveMipmapLevel();E.setRenderTarget(e0),E.getClearColor(W),j=E.getClearAlpha(),j<1&&E.setClearColor(16777215,.5),E.clear(),g0&&K.render(B);const I0=E.toneMapping;E.toneMapping=dt;const R0=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),t0===!0&&v0.setGlobalState(E.clippingPlanes,z),Rn(v,B,z),N0.updateMultisampleRenderTarget(e0),N0.updateRenderTargetMipmap(e0),H0.has("WEBGL_multisampled_render_to_texture")===!1){let G0=!1;for(let Z0=0,ae=L.length;Z0<ae;Z0++){const ne=L[Z0],Q0=ne.object,C0=ne.geometry,se=ne.material,X0=ne.group;if(se.side===Ze&&Q0.layers.test(z.layers)){const ye=se.side;se.side=Se,se.needsUpdate=!0,is(Q0,B,z,C0,se,X0),se.side=ye,se.needsUpdate=!0,G0=!0}}G0===!0&&(N0.updateMultisampleRenderTarget(e0),N0.updateRenderTargetMipmap(e0))}E.setRenderTarget(M0,p0,U0),E.setClearColor(W,j),R0!==void 0&&(z.viewport=R0),E.toneMapping=I0}function Rn(v,L,B){const z=L.isScene===!0?L.overrideMaterial:null;for(let D=0,e0=v.length;D<e0;D++){const l0=v[D],M0=l0.object,p0=l0.geometry,U0=l0.group;let I0=l0.material;I0.allowOverride===!0&&z!==null&&(I0=z),M0.layers.test(B.layers)&&is(M0,L,B,p0,I0,U0)}}function is(v,L,B,z,D,e0){v.onBeforeRender(E,L,B,z,D,e0),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(E,L,B,z,v,e0),D.transparent===!0&&D.side===Ze&&D.forceSinglePass===!1?(D.side=Se,D.needsUpdate=!0,E.renderBufferDirect(B,L,z,D,v,e0),D.side=pt,D.needsUpdate=!0,E.renderBufferDirect(B,L,z,D,v,e0),D.side=Ze):E.renderBufferDirect(B,L,z,D,v,e0),v.onAfterRender(E,L,B,z,D,e0)}function Cn(v,L,B){L.isScene!==!0&&(L=u0);const z=m0.get(v),D=u.state.lights,e0=u.state.shadowsArray,l0=D.state.version,M0=Z.getParameters(v,D.state,e0,L,B),p0=Z.getProgramCacheKey(M0);let U0=z.programs;z.environment=v.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(v.isMeshStandardMaterial?y:ie).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,U0===void 0&&(v.addEventListener("dispose",x0),U0=new Map,z.programs=U0);let I0=U0.get(p0);if(I0!==void 0){if(z.currentProgram===I0&&z.lightsStateVersion===l0)return ss(v,M0),I0}else M0.uniforms=Z.getUniforms(v),v.onBeforeCompile(M0,E),I0=Z.acquireProgram(M0,p0),U0.set(p0,I0),z.uniforms=M0.uniforms;const R0=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(R0.clippingPlanes=v0.uniform),ss(v,M0),z.needsLights=$a(v),z.lightsStateVersion=l0,z.needsLights&&(R0.ambientLightColor.value=D.state.ambient,R0.lightProbe.value=D.state.probe,R0.directionalLights.value=D.state.directional,R0.directionalLightShadows.value=D.state.directionalShadow,R0.spotLights.value=D.state.spot,R0.spotLightShadows.value=D.state.spotShadow,R0.rectAreaLights.value=D.state.rectArea,R0.ltc_1.value=D.state.rectAreaLTC1,R0.ltc_2.value=D.state.rectAreaLTC2,R0.pointLights.value=D.state.point,R0.pointLightShadows.value=D.state.pointShadow,R0.hemisphereLights.value=D.state.hemi,R0.directionalShadowMap.value=D.state.directionalShadowMap,R0.directionalShadowMatrix.value=D.state.directionalShadowMatrix,R0.spotShadowMap.value=D.state.spotShadowMap,R0.spotLightMatrix.value=D.state.spotLightMatrix,R0.spotLightMap.value=D.state.spotLightMap,R0.pointShadowMap.value=D.state.pointShadowMap,R0.pointShadowMatrix.value=D.state.pointShadowMatrix),z.currentProgram=I0,z.uniformsList=null,I0}function rs(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=oi.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function ss(v,L){const B=m0.get(v);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function qa(v,L,B,z,D){L.isScene!==!0&&(L=u0),N0.resetTextureUnits();const e0=L.fog,l0=z.isMeshStandardMaterial?L.environment:null,M0=I===null?E.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:nn,p0=(z.isMeshStandardMaterial?y:ie).get(z.envMap||l0),U0=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,I0=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),R0=!!B.morphAttributes.position,G0=!!B.morphAttributes.normal,Z0=!!B.morphAttributes.color;let ae=dt;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ae=E.toneMapping);const ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Q0=ne!==void 0?ne.length:0,C0=m0.get(z),se=u.state.lights;if(t0===!0&&(T0===!0||v!==M)){const _e=v===M&&z.id===S;v0.setState(z,v,_e)}let X0=!1;z.version===C0.__version?(C0.needsLights&&C0.lightsStateVersion!==se.state.version||C0.outputColorSpace!==M0||D.isBatchedMesh&&C0.batching===!1||!D.isBatchedMesh&&C0.batching===!0||D.isBatchedMesh&&C0.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&C0.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&C0.instancing===!1||!D.isInstancedMesh&&C0.instancing===!0||D.isSkinnedMesh&&C0.skinning===!1||!D.isSkinnedMesh&&C0.skinning===!0||D.isInstancedMesh&&C0.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&C0.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&C0.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&C0.instancingMorph===!1&&D.morphTexture!==null||C0.envMap!==p0||z.fog===!0&&C0.fog!==e0||C0.numClippingPlanes!==void 0&&(C0.numClippingPlanes!==v0.numPlanes||C0.numIntersection!==v0.numIntersection)||C0.vertexAlphas!==U0||C0.vertexTangents!==I0||C0.morphTargets!==R0||C0.morphNormals!==G0||C0.morphColors!==Z0||C0.toneMapping!==ae||C0.morphTargetsCount!==Q0)&&(X0=!0):(X0=!0,C0.__version=z.version);let ye=C0.currentProgram;X0===!0&&(ye=Cn(z,L,D));let Ut=!1,Te=!1,cn=!1;const re=ye.getUniforms(),we=C0.uniforms;if(S0.useProgram(ye.program)&&(Ut=!0,Te=!0,cn=!0),z.id!==S&&(S=z.id,Te=!0),Ut||M!==v){S0.buffers.depth.getReversed()?(r0.copy(v.projectionMatrix),Yo(r0),$o(r0),re.setValue(b,"projectionMatrix",r0)):re.setValue(b,"projectionMatrix",v.projectionMatrix),re.setValue(b,"viewMatrix",v.matrixWorldInverse);const xe=re.map.cameraPosition;xe!==void 0&&xe.setValue(b,W0.setFromMatrixPosition(v.matrixWorld)),Y0.logarithmicDepthBuffer&&re.setValue(b,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&re.setValue(b,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Te=!0,cn=!0)}if(D.isSkinnedMesh){re.setOptional(b,D,"bindMatrix"),re.setOptional(b,D,"bindMatrixInverse");const _e=D.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),re.setValue(b,"boneTexture",_e.boneTexture,N0))}D.isBatchedMesh&&(re.setOptional(b,D,"batchingTexture"),re.setValue(b,"batchingTexture",D._matricesTexture,N0),re.setOptional(b,D,"batchingIdTexture"),re.setValue(b,"batchingIdTexture",D._indirectTexture,N0),re.setOptional(b,D,"batchingColorTexture"),D._colorsTexture!==null&&re.setValue(b,"batchingColorTexture",D._colorsTexture,N0));const Re=B.morphAttributes;if((Re.position!==void 0||Re.normal!==void 0||Re.color!==void 0)&&d0.update(D,B,ye),(Te||C0.receiveShadow!==D.receiveShadow)&&(C0.receiveShadow=D.receiveShadow,re.setValue(b,"receiveShadow",D.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(we.envMap.value=p0,we.flipEnvMap.value=p0.isCubeTexture&&p0.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(we.envMapIntensity.value=L.environmentIntensity),Te&&(re.setValue(b,"toneMappingExposure",E.toneMappingExposure),C0.needsLights&&Ya(we,cn),e0&&z.fog===!0&&O.refreshFogUniforms(we,e0),O.refreshMaterialUniforms(we,z,V,$,u.state.transmissionRenderTarget[v.id]),oi.upload(b,rs(C0),we,N0)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(oi.upload(b,rs(C0),we,N0),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&re.setValue(b,"center",D.center),re.setValue(b,"modelViewMatrix",D.modelViewMatrix),re.setValue(b,"normalMatrix",D.normalMatrix),re.setValue(b,"modelMatrix",D.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const _e=z.uniformsGroups;for(let xe=0,vi=_e.length;xe<vi;xe++){const _t=_e[xe];w.update(_t,ye),w.bind(_t,ye)}}return ye}function Ya(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function $a(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,L,B){const z=m0.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),m0.get(v.texture).__webglTexture=L,m0.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const B=m0.get(v);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};const Ka=b.createFramebuffer();this.setRenderTarget=function(v,L=0,B=0){I=v,C=L,R=B;let z=!0,D=null,e0=!1,l0=!1;if(v){const p0=m0.get(v);if(p0.__useDefaultFramebuffer!==void 0)S0.bindFramebuffer(b.FRAMEBUFFER,null),z=!1;else if(p0.__webglFramebuffer===void 0)N0.setupRenderTarget(v);else if(p0.__hasExternalTextures)N0.rebindTextures(v,m0.get(v.texture).__webglTexture,m0.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const R0=v.depthTexture;if(p0.__boundDepthTexture!==R0){if(R0!==null&&m0.has(R0)&&(v.width!==R0.image.width||v.height!==R0.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N0.setupDepthRenderbuffer(v)}}const U0=v.texture;(U0.isData3DTexture||U0.isDataArrayTexture||U0.isCompressedArrayTexture)&&(l0=!0);const I0=m0.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(I0[L])?D=I0[L][B]:D=I0[L],e0=!0):v.samples>0&&N0.useMultisampledRTT(v)===!1?D=m0.get(v).__webglMultisampledFramebuffer:Array.isArray(I0)?D=I0[B]:D=I0,P.copy(v.viewport),q.copy(v.scissor),H=v.scissorTest}else P.copy(E0).multiplyScalar(V).floor(),q.copy(L0).multiplyScalar(V).floor(),H=y0;if(B!==0&&(D=Ka),S0.bindFramebuffer(b.FRAMEBUFFER,D)&&z&&S0.drawBuffers(v,D),S0.viewport(P),S0.scissor(q),S0.setScissorTest(H),e0){const p0=m0.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+L,p0.__webglTexture,B)}else if(l0){const p0=m0.get(v.texture),U0=L;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,p0.__webglTexture,B,U0)}else if(v!==null&&B!==0){const p0=m0.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,p0.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(v,L,B,z,D,e0,l0,M0=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let p0=m0.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&l0!==void 0&&(p0=p0[l0]),p0){S0.bindFramebuffer(b.FRAMEBUFFER,p0);try{const U0=v.textures[M0],I0=U0.format,R0=U0.type;if(!Y0.textureFormatReadable(I0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y0.textureTypeReadable(R0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-z&&B>=0&&B<=v.height-D&&(v.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+M0),b.readPixels(L,B,z,D,s0.convert(I0),s0.convert(R0),e0))}finally{const U0=I!==null?m0.get(I).__webglFramebuffer:null;S0.bindFramebuffer(b.FRAMEBUFFER,U0)}}},this.readRenderTargetPixelsAsync=async function(v,L,B,z,D,e0,l0,M0=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let p0=m0.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&l0!==void 0&&(p0=p0[l0]),p0)if(L>=0&&L<=v.width-z&&B>=0&&B<=v.height-D){S0.bindFramebuffer(b.FRAMEBUFFER,p0);const U0=v.textures[M0],I0=U0.format,R0=U0.type;if(!Y0.textureFormatReadable(I0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y0.textureTypeReadable(R0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const G0=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,G0),b.bufferData(b.PIXEL_PACK_BUFFER,e0.byteLength,b.STREAM_READ),v.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+M0),b.readPixels(L,B,z,D,s0.convert(I0),s0.convert(R0),0);const Z0=I!==null?m0.get(I).__webglFramebuffer:null;S0.bindFramebuffer(b.FRAMEBUFFER,Z0);const ae=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await qo(b,ae,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,G0),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,e0),b.deleteBuffer(G0),b.deleteSync(ae),e0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,B=0){const z=Math.pow(2,-B),D=Math.floor(v.image.width*z),e0=Math.floor(v.image.height*z),l0=L!==null?L.x:0,M0=L!==null?L.y:0;N0.setTexture2D(v,0),b.copyTexSubImage2D(b.TEXTURE_2D,B,0,0,l0,M0,D,e0),S0.unbindTexture()};const Za=b.createFramebuffer(),ja=b.createFramebuffer();this.copyTextureToTexture=function(v,L,B=null,z=null,D=0,e0=null){e0===null&&(D!==0?(jt("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),e0=D,D=0):e0=0);let l0,M0,p0,U0,I0,R0,G0,Z0,ae;const ne=v.isCompressedTexture?v.mipmaps[e0]:v.image;if(B!==null)l0=B.max.x-B.min.x,M0=B.max.y-B.min.y,p0=B.isBox3?B.max.z-B.min.z:1,U0=B.min.x,I0=B.min.y,R0=B.isBox3?B.min.z:0;else{const Re=Math.pow(2,-D);l0=Math.floor(ne.width*Re),M0=Math.floor(ne.height*Re),v.isDataArrayTexture?p0=ne.depth:v.isData3DTexture?p0=Math.floor(ne.depth*Re):p0=1,U0=0,I0=0,R0=0}z!==null?(G0=z.x,Z0=z.y,ae=z.z):(G0=0,Z0=0,ae=0);const Q0=s0.convert(L.format),C0=s0.convert(L.type);let se;L.isData3DTexture?(N0.setTexture3D(L,0),se=b.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(N0.setTexture2DArray(L,0),se=b.TEXTURE_2D_ARRAY):(N0.setTexture2D(L,0),se=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,L.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,L.unpackAlignment);const X0=b.getParameter(b.UNPACK_ROW_LENGTH),ye=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Ut=b.getParameter(b.UNPACK_SKIP_PIXELS),Te=b.getParameter(b.UNPACK_SKIP_ROWS),cn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ne.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ne.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,U0),b.pixelStorei(b.UNPACK_SKIP_ROWS,I0),b.pixelStorei(b.UNPACK_SKIP_IMAGES,R0);const re=v.isDataArrayTexture||v.isData3DTexture,we=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const Re=m0.get(v),_e=m0.get(L),xe=m0.get(Re.__renderTarget),vi=m0.get(_e.__renderTarget);S0.bindFramebuffer(b.READ_FRAMEBUFFER,xe.__webglFramebuffer),S0.bindFramebuffer(b.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let _t=0;_t<p0;_t++)re&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,m0.get(v).__webglTexture,D,R0+_t),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,m0.get(L).__webglTexture,e0,ae+_t)),b.blitFramebuffer(U0,I0,l0,M0,G0,Z0,l0,M0,b.DEPTH_BUFFER_BIT,b.NEAREST);S0.bindFramebuffer(b.READ_FRAMEBUFFER,null),S0.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(D!==0||v.isRenderTargetTexture||m0.has(v)){const Re=m0.get(v),_e=m0.get(L);S0.bindFramebuffer(b.READ_FRAMEBUFFER,Za),S0.bindFramebuffer(b.DRAW_FRAMEBUFFER,ja);for(let xe=0;xe<p0;xe++)re?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Re.__webglTexture,D,R0+xe):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Re.__webglTexture,D),we?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,_e.__webglTexture,e0,ae+xe):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,_e.__webglTexture,e0),D!==0?b.blitFramebuffer(U0,I0,l0,M0,G0,Z0,l0,M0,b.COLOR_BUFFER_BIT,b.NEAREST):we?b.copyTexSubImage3D(se,e0,G0,Z0,ae+xe,U0,I0,l0,M0):b.copyTexSubImage2D(se,e0,G0,Z0,U0,I0,l0,M0);S0.bindFramebuffer(b.READ_FRAMEBUFFER,null),S0.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else we?v.isDataTexture||v.isData3DTexture?b.texSubImage3D(se,e0,G0,Z0,ae,l0,M0,p0,Q0,C0,ne.data):L.isCompressedArrayTexture?b.compressedTexSubImage3D(se,e0,G0,Z0,ae,l0,M0,p0,Q0,ne.data):b.texSubImage3D(se,e0,G0,Z0,ae,l0,M0,p0,Q0,C0,ne):v.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,e0,G0,Z0,l0,M0,Q0,C0,ne.data):v.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,e0,G0,Z0,ne.width,ne.height,Q0,ne.data):b.texSubImage2D(b.TEXTURE_2D,e0,G0,Z0,l0,M0,Q0,C0,ne);b.pixelStorei(b.UNPACK_ROW_LENGTH,X0),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ye),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ut),b.pixelStorei(b.UNPACK_SKIP_ROWS,Te),b.pixelStorei(b.UNPACK_SKIP_IMAGES,cn),e0===0&&L.generateMipmaps&&b.generateMipmap(se),S0.unbindTexture()},this.copyTextureToTexture3D=function(v,L,B=null,z=null,D=0){return jt('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,L,B,z,D)},this.initRenderTarget=function(v){m0.get(v).__webglFramebuffer===void 0&&N0.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?N0.setTextureCube(v,0):v.isData3DTexture?N0.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?N0.setTexture2DArray(v,0):N0.setTexture2D(v,0),S0.unbindTexture()},this.resetState=function(){C=0,R=0,I=null,S0.reset(),F0.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=q0._getDrawingBufferColorSpace(e),t.unpackColorSpace=q0._getUnpackColorSpace()}}const _6=[223,234,132,223,132,234,131,223,131,132,234,305,223,305,230,258,234,258,230,234,258,305,270,305,223,270,130,223,130,131,270,296,296,305,189,221,131,221,131,189,132,221,258,280,280,305,280,296,130,270,133,234,132,133,133,230,257,258,257,280,133,178,132,178,178,221,130,189,198,221,178,198,175,198,175,221,189,212,212,221,239,297,230,297,230,239,258,297,257,297,256,280,256,296,256,288,280,288,257,288,175,212,177,198,177,178,254,275,270,275,254,270,130,275,231,270,231,296,231,242,231,256,242,256,177,183,183,198,178,213,133,213,177,213,189,193,130,193,165,193,165,189,152,189,152,212,152,175,172,193,130,172,152,171,152,165,165,171,175,183,224,239,224,230,232,297,232,257,143,263,263,288,143,288,134,230,133,134,134,158,133,158,129,275,129,130,129,172,143,257,256,263,253,254,231,254,231,253,275,306,129,306,134,224,235,297,235,239,232,235,176,222,176,193,193,222,165,176,140,235,140,239,143,232,161,183,161,175,153,158,158,213,153,213,142,213,142,177,134,135,135,224,304,306,275,304,135,141,134,141,171,176,152,161,242,263,137,140,140,224,137,224,142,183,303,304,254,304,254,303,136,141,135,136,135,137,136,137,142,153,161,170,152,170,139,235,139,232,232,283,143,283,139,140,138,141,141,158,138,158,102,103,102,137,103,137,242,253,138,153,220,222,176,220,171,220,170,171,172,222,196,222,172,196,129,196,170,219,171,219,253,303,276,278,278,306,276,306,129,278,60,306,60,304,139,283,143,229,229,263,243,263,242,243,242,252,252,253,253,302,302,303,266,283,139,266,128,278,128,129,219,220,42,219,42,220,59,60,59,304,229,283,128,196,44,222,44,220,151,162,151,183,162,183,142,151,142,205,153,205,138,205,161,162,161,169,162,169,58,59,58,304,60,276,44,194,194,222,67,276,60,67,144,278,128,144,43,44,44,51,43,220,58,303,229,243,57,303,57,58,72,194,194,196,72,196,144,196,169,170,243,252,102,266,140,266,102,140,169,218,170,218,218,219,42,43,51,194,252,302,66,67,56,57,56,303,40,218,40,219,151,154,154,162,104,136,104,141,104,137,105,141,141,160,105,160,104,105,41,42,41,219,103,104,82,278,82,276,82,144,50,214,50,51,51,214,67,298,276,298,65,66,204,205,151,205,151,204,283,285,229,285,243,285,266,286,283,286,241,286,241,266,55,56,56,302,55,302,101,121,101,102,102,121,101,266,298,299,66,298,66,299,194,214,40,41,138,160,103,123,103,112,100,241,100,266,82,298,160,205,217,218,169,217,72,214,49,50,154,204,88,107,107,160,88,160,162,168,168,169,72,145,72,144,144,145,103,122,102,122,100,101,103,124,104,124,111,112,104,125,112,113,113,114,105,125,285,287,285,286,286,287,251,301,252,301,251,252,301,302,100,120,101,120,114,115,120,121,243,251,39,217,39,218,87,298,82,87,64,65,125,126,105,126,92,112,92,113,106,160,105,106,55,301,96,116,96,117,115,116,119,120,100,119,106,126,92,111,109,126,168,217,99,100,99,241,241,295,286,295,48,49,49,215,48,215,49,214,39,40,167,217,167,168,97,117,96,97,99,119,99,117,233,251,233,243,54,301,54,55,107,127,106,127,106,107,126,127,91,110,91,111,109,127,160,211,205,211,89,127,89,109,99,273,241,273,99,118,98,99,98,273,98,118,97,118,97,98,87,145,82,145,214,215,206,211,205,206,154,168,204,206,88,108,107,108,108,127,90,109,90,110,53,54,53,301,63,64,65,299,273,295,273,291,291,295,95,116,95,96,233,274,233,285,274,285,88,208,160,208,89,108,94,115,94,95,95,115,287,293,287,295,293,295,38,39,38,217,168,173,154,173,88,89,81,299,80,299,80,81,64,299,77,214,77,215,94,114,81,87,81,298,89,90,192,206,192,204,208,211,52,53,53,225,52,225,52,61,62,63,93,114,93,94,90,91,72,77,93,113,76,77,77,164,76,164,77,145,91,92,92,93,273,282,282,291,37,38,38,147,147,217,47,48,64,80,147,167,154,192,81,86,80,86,47,70,48,70,61,62,63,80,225,301,184,192,154,184,250,301,250,251,62,80,36,147,37,147,36,37,250,255,233,250,233,255,46,47,46,70,45,46,225,250,36,45,71,77,71,215,48,71,36,174,45,174,195,208,195,211,88,202,89,202,191,203,90,191,90,203,91,191,195,206,96,245,97,245,97,282,98,282,95,245,245,272,95,272,94,272,274,292,274,287,287,292,167,173,173,184,192,209,206,209,92,191,146,159,93,146,93,159,240,272,94,240,89,203,94,146,146,240,245,282,202,208,62,79,79,80,86,87,87,185,145,185,61,248,62,248,26,190,184,190,207,208,202,207,92,159,159,197,159,191,191,197,247,249,247,250,249,250,225,247,225,248,52,248,173,190,190,209,166,167,147,166,173,180,180,190,195,209,27,180,282,284,245,284,264,292,264,274,245,279,279,284,180,216,71,76,70,71,150,174,36,150,147,150,77,185,190,210,209,210,195,210,255,264,233,264,228,248,225,228,46,174,202,203,203,207,25,210,179,207,179,208,291,293,272,279,272,281,279,281,289,291,282,289,289,293,166,216,28,216,228,247,228,249,70,76,277,293,277,287,249,260,249,255,255,260,277,292,197,203,159,200,146,200,240,281,181,195,148,203,148,197,181,210,25,181,200,240,200,281,87,246,86,246,185,246,69,75,69,70,70,75,69,174,46,69,149,150,149,216,197,201,159,201,24,181,200,201,79,248,80,85,85,86,78,79,78,248,271,292,264,271,255,271,10,271,284,289,11,294,277,294,289,290,284,290,279,290,260,271,24,179,186,207,186,203,79,85,237,246,86,237,29,149,75,76,248,265,228,265,78,265,79,84,84,85,261,277,261,293,292,294,0,164,164,185,0,185,10,260,10,294,9,10,9,260,249,300,174,182,226,290,226,279,68,69,68,174,75,156,76,156,73,182,68,73,12,261,259,293,259,289,23,207,23,179,23,186,148,201,23,24,11,261,10,11,227,265,227,228,78,84,148,187,187,203,199,201,199,200,226,269,226,281,269,281,8,9,8,300,13,259,13,289,83,84,78,83,85,237,267,290,267,289,199,281,83,265,237,244,85,244,35,156,156,164,35,164,69,73,83,262,262,265,186,187,22,187,22,186,12,259,11,12,14,267,14,290,12,13,73,74,69,74,74,155,74,75,75,155,0,246,22,23,21,148,21,187,188,201,148,188,188,199,13,14,13,267,15,268,226,268,15,226,268,290,7,8,7,227,85,236,84,236,236,244,30,182,29,30,30,149,73,157,74,157,21,22,14,268,14,15,155,157,84,238,83,238,6,262,156,163,75,163,20,188,20,148,15,16,16,226,199,269,18,269,18,199,236,238,155,163,31,157,30,31,20,21,6,7,5,238,5,236,1,246,1,237,0,1,33,156,33,163,16,269,31,32,31,155,32,155,19,20,19,188,18,188,17,269,16,17,2,237,2,244,1,2,18,19,17,18,0,35,32,163,5,6,4,236,4,244,2,3,3,244,34,35,34,156,32,33,4,5,33,34,3,4,108,109,118,119],g6=[.05,.925,.422,-.174,.919,.412,-.364,.888,.345,-.537,.828,.221,-.642,.735,.071,-.7,.616,-.08,-.725,.486,-.246,-.731,.322,-.386,-.723,.163,-.462,-.709,-.004,-.494,-.684,-.178,-.493,-.635,-.363,-.458,-.565,-.516,-.368,-.482,-.634,-.263,-.38,-.739,-.178,-.29,-.812,-.114,-.196,-.875,-.047,-.087,-.918,-.007,.047,-.925,.004,.178,-.908,-.02,.277,-.856,-.071,.359,-.785,-.145,.434,-.707,-.219,.517,-.598,-.314,.576,-.478,-.428,.627,-.326,-.522,.664,-.142,-.563,.689,.029,-.568,.705,.191,-.538,.722,.348,-.464,.731,.51,-.322,.723,.639,-.152,.685,.754,.007,.597,.843,.168,.443,.899,.308,.265,.923,.393,.543,.333,.108,.52,.309,.129,.494,.293,.148,.456,.281,.17,.397,.278,.19,.339,.286,.197,.286,.295,.191,.251,.297,.181,.238,.301,.182,.531,.346,.141,.514,.361,.167,.482,.378,.194,.426,.387,.215,.366,.38,.221,.305,.355,.21,.26,.322,.195,-.456,.301,.157,-.431,.28,.175,-.402,.267,.191,-.362,.258,.211,-.304,.258,.225,-.243,.268,.227,-.19,.279,.217,-.156,.284,.204,-.139,.287,.203,-.442,.313,.187,-.423,.328,.212,-.389,.347,.236,-.334,.36,.252,-.272,.36,.253,-.208,.34,.237,-.162,.309,.218,.646,.473,.174,.598,.513,.252,.512,.523,.314,.385,.502,.358,.208,.438,.377,.675,.516,.119,.63,.569,.223,.536,.592,.31,.399,.57,.381,.234,.535,.42,-.572,.437,.23,-.512,.479,.302,-.416,.497,.354,-.28,.482,.384,-.095,.428,.39,-.611,.479,.178,-.55,.534,.276,-.443,.564,.351,-.295,.55,.408,-.12,.524,.433,.293,-.453,.097,.267,-.475,.134,.233,-.496,.178,.185,-.524,.208,.123,-.542,.23,.054,-.548,.234,-.019,-.542,.235,-.088,-.523,.219,-.143,-.493,.193,-.184,-.466,.155,-.212,-.443,.123,-.184,-.428,.181,-.146,-.411,.234,-.093,-.394,.28,-.019,-.38,.317,.058,-.397,.32,.133,-.382,.311,.2,-.397,.268,.242,-.417,.216,.272,-.436,.158,.27,-.45,.12,.234,-.448,.146,.204,-.446,.178,.162,-.446,.204,.112,-.446,.225,.054,-.45,.233,-.006,-.448,.229,-.065,-.443,.213,-.113,-.442,.191,-.15,-.442,.164,-.19,-.442,.141,-.149,-.44,.166,-.114,-.438,.195,-.065,-.439,.219,-.008,-.444,.238,.055,-.449,.242,.113,-.445,.233,.164,-.441,.21,.206,-.444,.182,.236,-.447,.148,.06,.337,.387,.064,.239,.42,.069,.148,.463,.072,.063,.507,.077,-.029,.555,.079,-.137,.568,.078,-.212,.536,.075,-.243,.497,.07,-.252,.402,.066,-.254,.349,.236,-.204,.261,-.122,-.208,.271,-.022,-.242,.333,.149,-.243,.329,.269,-.122,.23,-.163,-.127,.246,.059,.422,.405,.058,.52,.437,.049,-.628,.168,.579,.245,.071,.277,-.733,.063,.722,.319,-.233,.647,.304,.008,.37,-.072,.214,.243,.107,.261,.262,-.146,.358,.551,-.047,.121,.655,.662,.133,.412,.738,.353,.699,.572,-.005,.196,-.188,.429,.127,-.623,.163,.313,-.337,.206,.306,.07,.227,.41,.025,.195,.563,.72,.249,.246,.734,.414,.202,.148,.294,.684,.16,-.065,.597,.141,.078,.523,.105,.141,.402,.111,.18,.312,.139,.204,.248,.167,.232,.126,.225,.388,.667,.008,-.07,.65,.398,.091,.235,.026,.276,.2,.2,.251,.228,-.079,.411,.186,-.049,.485,.532,-.535,-.18,.695,.015,-.319,.595,-.428,-.255,.712,.458,-.136,.291,-.021,.24,.648,-.134,-.116,.055,.729,.438,.456,-.639,-.122,.378,-.721,-.06,.183,-.86,.072,.167,.108,.386,.67,-.14,-.334,.206,-.592,.153,.584,-.189,.022,.164,.192,.337,.195,.344,.244,.585,-.346,-.108,.143,.331,.334,.244,-.661,.105,.206,-.006,.364,.051,-.809,.141,.05,-.715,.152,.149,-.702,.136,.387,-.524,.049,.32,-.602,.074,.467,-.151,.17,.381,-.239,.182,.515,-.256,.095,.442,-.57,-.029,.443,-.442,.049,.63,-.252,-.158,.642,-.287,-.329,.427,-.325,.133,.2,.068,.327,.192,-.133,.498,.254,.408,.271,.374,.458,.284,.715,.167,-.281,.482,.182,.146,.396,.181,.178,.315,.197,.196,.254,.218,.208,.171,.03,.426,.182,.271,.235,.015,.054,.485,.001,-.229,.404,-.512,.219,.124,-.187,-.747,.084,-.704,.292,-.161,-.594,.273,.068,-.275,-.083,.242,.014,-.136,.563,-.139,.101,.279,-.14,-.151,.372,-.478,-.065,.171,.017,-.033,.536,-.091,-.195,.339,-.59,.639,.191,-.318,.726,.384,-.654,.545,.06,-.059,-.19,.438,-.03,-.624,.169,-.213,-.342,.227,-.209,.063,.251,-.322,.013,.23,-.484,.702,.296,-.181,-.554,.144,-.143,.728,.431,-.579,.173,.081,-.535,.35,.175,-.644,.134,0,-.533,.118,.133,-.446,.087,.188,-.316,.097,.215,-.218,.128,.23,-.146,.159,.251,-.625,-.021,-.004,-.129,.021,.292,-.1,-.084,.424,-.044,-.052,.493,-.483,-.569,-.129,-.686,-.016,-.248,-.563,-.463,-.196,-.683,.431,-.067,-.191,-.028,.26,-.61,-.163,-.052,-.634,.389,.086,-.147,-.309,.264,-.391,-.667,-.082,-.303,-.747,-.03,-.086,-.871,.085,-.041,.104,.395,-.662,-.176,-.266,-.113,-.597,.167,-.265,-.391,.177,-.526,-.213,.076,-.046,.188,.347,-.091,.335,.257,-.534,-.376,-.054,-.028,.326,.342,-.153,-.67,.123,-.084,-.009,.375,-.051,-.709,.146,-.307,-.54,.078,-.222,-.178,.226,-.235,-.614,.098,-.383,-.166,.207,-.288,-.249,.209,-.44,-.275,.138,-.123,-.043,.321,-.366,-.593,.008,-.279,-.676,.035,-.363,-.455,.086,-.593,-.282,-.098,-.451,-.462,.021,-.628,-.324,-.263,-.34,-.337,.167,-.084,.065,.34,-.045,-.136,.508,-.153,.395,.29,-.277,.439,.312,-.701,.137,-.208,-.401,.163,.189,-.308,.164,.213,-.221,.183,.222,-.11,.226,.232,-.037,.028,.434,-.056,.244,.292],v6=JSON.parse('[{"yaw":0.068,"pitch":-0.103,"frame":[0.055,0.925,0.388,-0.168,0.919,0.38,-0.357,0.888,0.317,-0.531,0.825,0.195,-0.638,0.729,0.049,-0.699,0.607,-0.097,-0.724,0.474,-0.258,-0.73,0.307,-0.39,-0.724,0.147,-0.458,-0.71,-0.019,-0.483,-0.684,-0.195,-0.476,-0.635,-0.38,-0.433,-0.563,-0.531,-0.339,-0.481,-0.646,-0.232,-0.378,-0.747,-0.145,-0.288,-0.818,-0.079,-0.192,-0.878,-0.012,-0.083,-0.918,0.029,0.053,-0.925,0.039,0.184,-0.909,0.013,0.283,-0.859,-0.04,0.365,-0.792,-0.118,0.438,-0.716,-0.194,0.518,-0.611,-0.293,0.575,-0.495,-0.412,0.625,-0.346,-0.512,0.663,-0.163,-0.561,0.688,0.008,-0.574,0.704,0.169,-0.551,0.722,0.327,-0.484,0.73,0.491,-0.349,0.723,0.624,-0.183,0.685,0.743,-0.029,0.598,0.836,0.132,0.446,0.895,0.271,0.269,0.922,0.358,0.546,0.328,0.091,0.522,0.307,0.113,0.497,0.292,0.133,0.46,0.281,0.156,0.402,0.279,0.176,0.346,0.287,0.183,0.293,0.296,0.178,0.257,0.298,0.168,0.243,0.302,0.168,0.533,0.342,0.124,0.516,0.357,0.151,0.484,0.374,0.177,0.429,0.383,0.198,0.37,0.377,0.205,0.31,0.353,0.194,0.264,0.322,0.18,-0.453,0.301,0.152,-0.428,0.28,0.171,-0.4,0.268,0.187,-0.359,0.261,0.207,-0.302,0.26,0.221,-0.242,0.27,0.222,-0.188,0.28,0.212,-0.153,0.285,0.198,-0.136,0.288,0.196,-0.439,0.313,0.182,-0.42,0.328,0.206,-0.385,0.347,0.23,-0.33,0.36,0.245,-0.268,0.359,0.246,-0.206,0.339,0.229,-0.159,0.31,0.211,0.649,0.471,0.151,0.601,0.513,0.229,0.516,0.526,0.291,0.39,0.508,0.336,0.214,0.446,0.359,0.678,0.511,0.093,0.633,0.568,0.197,0.54,0.594,0.285,0.404,0.576,0.358,0.24,0.543,0.398,-0.567,0.44,0.22,-0.505,0.484,0.29,-0.409,0.503,0.34,-0.273,0.488,0.37,-0.088,0.434,0.376,-0.606,0.48,0.167,-0.545,0.538,0.262,-0.437,0.57,0.335,-0.288,0.557,0.392,-0.113,0.531,0.416,0.296,-0.449,0.114,0.27,-0.471,0.152,0.237,-0.492,0.198,0.191,-0.521,0.229,0.13,-0.54,0.253,0.061,-0.547,0.258,-0.012,-0.541,0.26,-0.081,-0.522,0.244,-0.136,-0.492,0.218,-0.177,-0.465,0.18,-0.205,-0.442,0.148,-0.177,-0.425,0.205,-0.139,-0.406,0.257,-0.086,-0.385,0.302,-0.012,-0.369,0.337,0.065,-0.386,0.339,0.14,-0.371,0.327,0.205,-0.388,0.283,0.247,-0.41,0.232,0.275,-0.43,0.174,0.273,-0.445,0.137,0.237,-0.443,0.163,0.208,-0.44,0.195,0.167,-0.44,0.222,0.117,-0.441,0.244,0.06,-0.445,0.254,0.001,-0.443,0.251,-0.057,-0.438,0.235,-0.105,-0.439,0.214,-0.143,-0.439,0.188,-0.182,-0.44,0.166,-0.142,-0.437,0.19,-0.106,-0.434,0.22,-0.058,-0.434,0.244,0,-0.439,0.262,0.062,-0.443,0.265,0.119,-0.439,0.254,0.169,-0.436,0.229,0.21,-0.439,0.201,0.239,-0.442,0.166,0.068,0.345,0.374,0.072,0.25,0.411,0.078,0.161,0.457,0.081,0.079,0.505,0.086,-0.01,0.557,0.089,-0.115,0.574,0.088,-0.19,0.544,0.084,-0.222,0.506,0.079,-0.234,0.412,0.074,-0.238,0.361,0.241,-0.194,0.267,-0.114,-0.197,0.284,-0.013,-0.228,0.346,0.156,-0.228,0.338,0.276,-0.114,0.233,-0.156,-0.118,0.257,0.067,0.43,0.389,0.065,0.528,0.417,0.056,-0.627,0.192,0.582,0.24,0.057,0.284,-0.733,0.09,0.723,0.305,-0.252,0.65,0.297,-0.009,0.376,-0.067,0.214,0.249,0.112,0.255,0.268,-0.133,0.361,0.556,-0.048,0.118,0.657,0.657,0.103,0.415,0.74,0.323,0.7,0.563,-0.034,0.204,-0.17,0.432,0.135,-0.621,0.187,0.32,-0.331,0.218,0.312,0.073,0.221,0.416,0.027,0.19,0.566,0.719,0.218,0.251,0.738,0.385,0.209,0.155,0.286,0.687,0.152,-0.077,0.601,0.137,0.067,0.527,0.104,0.133,0.408,0.112,0.172,0.317,0.141,0.196,0.253,0.17,0.223,0.133,0.235,0.378,0.67,0,-0.076,0.654,0.393,0.07,0.242,0.034,0.273,0.205,0.204,0.241,0.236,-0.065,0.412,0.194,-0.032,0.485,0.535,-0.544,-0.161,0.697,0.001,-0.325,0.596,-0.44,-0.241,0.714,0.446,-0.16,0.297,-0.015,0.238,0.65,-0.143,-0.114,0.061,0.733,0.411,0.461,-0.646,-0.099,0.384,-0.725,-0.034,0.19,-0.86,0.104,0.175,0.119,0.38,0.671,-0.154,-0.333,0.214,-0.59,0.175,0.587,-0.193,0.026,0.171,0.2,0.328,0.2,0.348,0.229,0.587,-0.354,-0.098,0.149,0.338,0.32,0.251,-0.66,0.13,0.214,0.005,0.362,0.058,-0.806,0.172,0.057,-0.713,0.179,0.157,-0.7,0.163,0.392,-0.526,0.068,0.326,-0.603,0.096,0.472,-0.148,0.172,0.386,-0.234,0.188,0.519,-0.257,0.102,0.447,-0.574,-0.008,0.447,-0.443,0.065,0.632,-0.262,-0.152,0.642,-0.301,-0.32,0.432,-0.322,0.143,0.207,0.078,0.323,0.2,-0.113,0.501,0.259,0.412,0.254,0.378,0.461,0.265,0.717,0.153,-0.293,0.486,0.181,0.135,0.402,0.181,0.168,0.321,0.197,0.186,0.259,0.219,0.197,0.179,0.044,0.423,0.188,0.275,0.223,0.024,0.07,0.485,0.012,-0.212,0.415,-0.509,0.218,0.123,-0.181,-0.747,0.115,-0.702,0.283,-0.164,-0.592,0.271,0.065,-0.268,-0.077,0.252,0.024,-0.114,0.569,-0.132,0.107,0.28,-0.132,-0.137,0.383,-0.473,-0.063,0.181,0.026,-0.015,0.539,-0.083,-0.18,0.35,-0.585,0.638,0.173,-0.311,0.73,0.361,-0.65,0.541,0.045,-0.05,-0.171,0.448,-0.024,-0.623,0.194,-0.206,-0.336,0.247,-0.204,0.067,0.255,-0.316,0.017,0.236,-0.478,0.704,0.275,-0.175,-0.554,0.171,-0.136,0.733,0.405,-0.576,0.171,0.083,-0.532,0.35,0.169,-0.642,0.131,0.005,-0.529,0.118,0.136,-0.442,0.089,0.192,-0.312,0.1,0.218,-0.213,0.131,0.231,-0.141,0.163,0.25,-0.623,-0.024,0.006,-0.122,0.029,0.296,-0.092,-0.069,0.431,-0.035,-0.035,0.499,-0.481,-0.576,-0.1,-0.687,-0.025,-0.237,-0.561,-0.472,-0.169,-0.68,0.424,-0.077,-0.185,-0.021,0.267,-0.609,-0.168,-0.035,-0.631,0.387,0.078,-0.14,-0.3,0.282,-0.388,-0.672,-0.05,-0.3,-0.75,0.004,-0.081,-0.87,0.119,-0.033,0.115,0.394,-0.662,-0.186,-0.248,-0.107,-0.597,0.193,-0.258,-0.387,0.2,-0.522,-0.214,0.092,-0.038,0.197,0.342,-0.086,0.338,0.247,-0.531,-0.38,-0.031,-0.021,0.332,0.331,-0.148,-0.67,0.151,-0.077,0.003,0.38,-0.045,-0.707,0.174,-0.303,-0.541,0.106,-0.215,-0.171,0.239,-0.23,-0.614,0.126,-0.377,-0.162,0.221,-0.281,-0.243,0.225,-0.434,-0.273,0.156,-0.117,-0.032,0.327,-0.362,-0.595,0.037,-0.275,-0.677,0.066,-0.357,-0.455,0.112,-0.591,-0.288,-0.077,-0.447,-0.464,0.047,-0.627,-0.334,-0.24,-0.334,-0.334,0.187,-0.076,0.074,0.342,-0.036,-0.116,0.516,-0.148,0.399,0.278,-0.271,0.443,0.301,-0.701,0.128,-0.203,-0.397,0.165,0.189,-0.305,0.166,0.213,-0.218,0.185,0.221,-0.105,0.229,0.228,-0.028,0.043,0.436,-0.049,0.25,0.285]},{"yaw":0.174,"pitch":-0.089,"frame":[0.154,0.925,0.415,-0.075,0.919,0.422,-0.276,0.887,0.38,-0.47,0.823,0.279,-0.601,0.726,0.148,-0.685,0.602,0.012,-0.726,0.469,-0.142,-0.742,0.302,-0.27,-0.736,0.142,-0.336,-0.721,-0.025,-0.361,-0.691,-0.201,-0.354,-0.633,-0.388,-0.313,-0.548,-0.542,-0.225,-0.447,-0.656,-0.128,-0.324,-0.757,-0.052,-0.218,-0.826,0.005,-0.106,-0.884,0.063,0.017,-0.922,0.092,0.161,-0.925,0.09,0.289,-0.903,0.055,0.378,-0.848,-0.01,0.444,-0.776,-0.098,0.5,-0.697,-0.185,0.561,-0.589,-0.297,0.599,-0.471,-0.428,0.635,-0.322,-0.539,0.667,-0.141,-0.598,0.689,0.026,-0.617,0.703,0.184,-0.6,0.723,0.339,-0.535,0.74,0.5,-0.402,0.742,0.631,-0.235,0.717,0.748,-0.073,0.647,0.839,0.101,0.517,0.897,0.259,0.357,0.923,0.367,0.607,0.338,0.072,0.588,0.316,0.097,0.567,0.301,0.119,0.533,0.289,0.147,0.477,0.285,0.173,0.421,0.292,0.187,0.368,0.302,0.187,0.333,0.305,0.18,0.319,0.31,0.183,0.596,0.352,0.108,0.58,0.367,0.136,0.55,0.382,0.167,0.497,0.391,0.194,0.438,0.385,0.208,0.38,0.362,0.202,0.339,0.331,0.192,-0.384,0.305,0.238,-0.357,0.283,0.254,-0.326,0.271,0.268,-0.284,0.262,0.283,-0.223,0.262,0.292,-0.16,0.271,0.286,-0.106,0.283,0.27,-0.07,0.289,0.253,-0.051,0.293,0.249,-0.367,0.318,0.265,-0.345,0.333,0.287,-0.307,0.352,0.306,-0.251,0.365,0.316,-0.187,0.364,0.31,-0.122,0.344,0.287,-0.075,0.315,0.266,0.708,0.476,0.122,0.67,0.515,0.21,0.596,0.526,0.285,0.483,0.509,0.345,0.318,0.453,0.385,0.729,0.517,0.059,0.696,0.57,0.173,0.619,0.595,0.273,0.497,0.578,0.364,0.345,0.548,0.421,-0.502,0.438,0.316,-0.427,0.482,0.377,-0.319,0.501,0.415,-0.175,0.489,0.43,0.018,0.441,0.422,-0.55,0.476,0.267,-0.473,0.535,0.352,-0.35,0.568,0.411,-0.189,0.558,0.452,-0.006,0.536,0.461,0.391,-0.439,0.135,0.371,-0.461,0.18,0.344,-0.483,0.23,0.304,-0.512,0.267,0.247,-0.532,0.296,0.182,-0.54,0.306,0.104,-0.535,0.314,0.031,-0.517,0.305,-0.029,-0.487,0.285,-0.074,-0.461,0.253,-0.103,-0.437,0.225,-0.073,-0.42,0.279,-0.029,-0.4,0.326,0.03,-0.378,0.364,0.111,-0.36,0.39,0.19,-0.377,0.386,0.259,-0.361,0.37,0.315,-0.376,0.32,0.352,-0.397,0.262,0.376,-0.418,0.199,0.369,-0.436,0.164,0.337,-0.433,0.195,0.311,-0.431,0.232,0.275,-0.43,0.262,0.231,-0.431,0.289,0.179,-0.436,0.303,0.116,-0.434,0.307,0.054,-0.431,0.296,0.001,-0.432,0.279,-0.041,-0.434,0.258,-0.081,-0.435,0.238,-0.04,-0.432,0.258,0.001,-0.428,0.282,0.054,-0.427,0.301,0.116,-0.432,0.313,0.183,-0.436,0.31,0.234,-0.431,0.295,0.278,-0.427,0.267,0.313,-0.43,0.234,0.339,-0.432,0.195,0.179,0.354,0.413,0.19,0.261,0.451,0.203,0.176,0.498,0.214,0.097,0.547,0.227,0.011,0.6,0.236,-0.091,0.617,0.234,-0.165,0.587,0.225,-0.2,0.549,0.214,-0.215,0.455,0.201,-0.222,0.404,0.351,-0.178,0.301,-0.002,-0.187,0.339,0.11,-0.213,0.395,0.279,-0.212,0.379,0.379,-0.097,0.258,-0.052,-0.109,0.314,0.177,0.437,0.426,0.175,0.533,0.453,0.172,-0.621,0.24,0.641,0.253,0.034,0.384,-0.72,0.121,0.741,0.319,-0.301,0.696,0.311,-0.042,0.468,-0.05,0.226,0.345,0.126,0.276,0.384,-0.112,0.388,0.629,-0.029,0.105,0.704,0.662,0.068,0.498,0.743,0.319,0.736,0.57,-0.078,0.334,-0.147,0.467,0.247,-0.613,0.231,0.421,-0.316,0.243,0.402,0.087,0.236,0.5,0.043,0.194,0.629,0.722,0.197,0.347,0.741,0.399,0.309,0.168,0.312,0.728,0.17,-0.115,0.664,0.154,0.043,0.603,0.12,0.12,0.491,0.125,0.174,0.404,0.152,0.208,0.344,0.181,0.243,0.247,0.247,0.412,0.719,0.02,-0.111,0.705,0.403,0.037,0.344,0.049,0.296,0.301,0.214,0.266,0.355,-0.044,0.442,0.323,-0.011,0.519,0.59,-0.523,-0.166,0.723,0.021,-0.368,0.637,-0.417,-0.259,0.741,0.456,-0.208,0.393,0.001,0.257,0.698,-0.121,-0.144,0.166,0.735,0.442,0.531,-0.627,-0.09,0.467,-0.708,-0.014,0.3,-0.852,0.146,0.289,0.134,0.412,0.699,-0.132,-0.369,0.32,-0.58,0.211,0.651,-0.172,0.01,0.278,0.212,0.358,0.288,0.356,0.252,0.641,-0.332,-0.111,0.253,0.347,0.351,0.353,-0.649,0.164,0.327,0.023,0.392,0.175,-0.803,0.222,0.173,-0.708,0.229,0.267,-0.691,0.206,0.48,-0.511,0.086,0.42,-0.588,0.123,0.556,-0.129,0.175,0.48,-0.217,0.203,0.595,-0.237,0.099,0.526,-0.557,0.003,0.531,-0.427,0.072,0.677,-0.239,-0.175,0.673,-0.278,-0.35,0.519,-0.306,0.152,0.315,0.093,0.35,0.335,-0.089,0.537,0.347,0.419,0.27,0.462,0.465,0.271,0.739,0.17,-0.342,0.56,0.193,0.125,0.48,0.191,0.168,0.402,0.207,0.194,0.343,0.228,0.215,0.301,0.062,0.456,0.277,0.284,0.248,0.154,0.086,0.529,0.143,-0.195,0.461,-0.452,0.218,0.216,-0.085,-0.749,0.185,-0.691,0.28,-0.048,-0.546,0.27,0.165,-0.176,-0.072,0.321,0.169,-0.092,0.614,-0.039,0.115,0.335,-0.014,-0.123,0.441,-0.402,-0.064,0.274,0.164,0.005,0.584,0.036,-0.164,0.403,-0.529,0.636,0.267,-0.218,0.73,0.421,-0.616,0.538,0.149,0.077,-0.152,0.5,0.088,-0.618,0.247,-0.101,-0.331,0.319,-0.114,0.073,0.317,-0.232,0.02,0.31,-0.401,0.703,0.354,-0.076,-0.554,0.242,-0.035,0.734,0.449,-0.529,0.17,0.183,-0.472,0.351,0.261,-0.608,0.128,0.116,-0.473,0.117,0.233,-0.375,0.089,0.279,-0.233,0.103,0.292,-0.129,0.135,0.294,-0.052,0.169,0.304,-0.587,-0.028,0.119,-0.023,0.039,0.351,0.028,-0.053,0.484,0.095,-0.018,0.548,-0.431,-0.584,0.001,-0.678,-0.03,-0.116,-0.529,-0.48,-0.059,-0.659,0.421,0.034,-0.088,-0.014,0.328,-0.573,-0.172,0.077,-0.589,0.384,0.183,-0.027,-0.291,0.346,-0.325,-0.679,0.041,-0.223,-0.756,0.086,0.025,-0.872,0.182,0.081,0.127,0.44,-0.651,-0.192,-0.128,-0.001,-0.594,0.256,-0.159,-0.386,0.278,-0.462,-0.217,0.192,0.068,0.206,0.388,0.007,0.345,0.293,-0.479,-0.385,0.072,0.084,0.34,0.374,-0.048,-0.671,0.217,0.035,0.016,0.43,0.064,-0.705,0.231,-0.217,-0.544,0.187,-0.116,-0.165,0.304,-0.14,-0.616,0.2,-0.291,-0.161,0.301,-0.186,-0.24,0.299,-0.356,-0.275,0.244,-0.012,-0.021,0.382,-0.288,-0.601,0.124,-0.19,-0.681,0.144,-0.274,-0.458,0.199,-0.554,-0.293,0.033,-0.379,-0.469,0.141,-0.611,-0.341,-0.122,-0.243,-0.334,0.269,0.029,0.085,0.392,0.101,-0.096,0.566,-0.054,0.404,0.329,-0.18,0.446,0.361,-0.692,0.124,-0.082,-0.329,0.166,0.271,-0.229,0.168,0.285,-0.136,0.188,0.283,-0.016,0.235,0.278,0.094,0.057,0.484,0.048,0.257,0.33]},{"yaw":0.231,"pitch":-0.089,"frame":[0.209,0.925,0.423,-0.018,0.921,0.449,-0.223,0.892,0.418,-0.427,0.83,0.33,-0.57,0.732,0.21,-0.669,0.608,0.084,-0.722,0.473,-0.064,-0.747,0.305,-0.186,-0.744,0.143,-0.248,-0.73,-0.026,-0.27,-0.699,-0.205,-0.261,-0.639,-0.395,-0.22,-0.546,-0.551,-0.136,-0.436,-0.667,-0.047,-0.303,-0.767,0.023,-0.189,-0.835,0.074,-0.069,-0.89,0.126,0.058,-0.925,0.145,0.203,-0.924,0.129,0.326,-0.899,0.079,0.408,-0.844,0.006,0.466,-0.774,-0.087,0.514,-0.697,-0.18,0.563,-0.589,-0.297,0.59,-0.472,-0.433,0.614,-0.322,-0.551,0.642,-0.143,-0.615,0.664,0.023,-0.64,0.678,0.181,-0.628,0.705,0.335,-0.568,0.735,0.495,-0.438,0.746,0.625,-0.274,0.731,0.743,-0.111,0.672,0.834,0.067,0.555,0.894,0.234,0.405,0.921,0.356,0.626,0.335,0.05,0.609,0.313,0.076,0.59,0.297,0.1,0.558,0.285,0.13,0.506,0.281,0.159,0.451,0.289,0.178,0.4,0.299,0.181,0.367,0.303,0.177,0.353,0.309,0.18,0.616,0.349,0.086,0.601,0.364,0.115,0.573,0.38,0.148,0.524,0.389,0.179,0.467,0.383,0.196,0.411,0.36,0.194,0.372,0.329,0.187,-0.338,0.314,0.295,-0.311,0.292,0.309,-0.279,0.279,0.321,-0.237,0.27,0.334,-0.177,0.268,0.339,-0.117,0.277,0.329,-0.065,0.289,0.31,-0.029,0.295,0.291,-0.01,0.299,0.285,-0.32,0.327,0.321,-0.297,0.341,0.34,-0.259,0.359,0.357,-0.203,0.37,0.362,-0.142,0.368,0.352,-0.08,0.348,0.326,-0.033,0.32,0.304,0.726,0.474,0.092,0.695,0.512,0.185,0.627,0.524,0.266,0.521,0.509,0.336,0.365,0.456,0.388,0.744,0.515,0.027,0.719,0.568,0.145,0.65,0.593,0.251,0.537,0.578,0.353,0.393,0.55,0.421,-0.454,0.441,0.378,-0.371,0.485,0.433,-0.259,0.503,0.463,-0.113,0.49,0.469,0.078,0.442,0.45,-0.506,0.478,0.331,-0.419,0.538,0.409,-0.288,0.57,0.459,-0.124,0.559,0.49,0.058,0.537,0.489,0.426,-0.439,0.135,0.406,-0.46,0.184,0.382,-0.482,0.239,0.345,-0.511,0.28,0.292,-0.531,0.316,0.228,-0.539,0.332,0.15,-0.534,0.346,0.077,-0.513,0.344,0.015,-0.482,0.327,-0.032,-0.454,0.299,-0.062,-0.43,0.275,-0.03,-0.415,0.326,0.015,-0.397,0.369,0.077,-0.378,0.402,0.16,-0.362,0.421,0.238,-0.38,0.411,0.304,-0.364,0.39,0.356,-0.379,0.331,0.39,-0.399,0.267,0.412,-0.418,0.2,0.405,-0.436,0.167,0.373,-0.433,0.2,0.349,-0.431,0.241,0.316,-0.431,0.277,0.275,-0.432,0.309,0.226,-0.437,0.327,0.162,-0.434,0.336,0.099,-0.43,0.331,0.044,-0.43,0.318,0,-0.429,0.301,-0.04,-0.429,0.284,0.001,-0.428,0.302,0.043,-0.426,0.322,0.099,-0.427,0.337,0.163,-0.433,0.344,0.229,-0.438,0.335,0.278,-0.434,0.315,0.319,-0.429,0.281,0.352,-0.431,0.244,0.375,-0.433,0.201,0.231,0.356,0.432,0.245,0.265,0.471,0.26,0.18,0.518,0.273,0.101,0.568,0.288,0.014,0.622,0.299,-0.088,0.64,0.296,-0.163,0.611,0.283,-0.2,0.573,0.269,-0.215,0.479,0.252,-0.222,0.428,0.394,-0.18,0.312,0.045,-0.185,0.376,0.162,-0.213,0.425,0.328,-0.214,0.399,0.419,-0.098,0.264,-0.004,-0.106,0.354,0.231,0.438,0.444,0.23,0.534,0.467,0.216,-0.619,0.268,0.658,0.252,0.01,0.418,-0.715,0.136,0.738,0.317,-0.335,0.706,0.31,-0.07,0.503,-0.05,0.223,0.385,0.126,0.279,0.43,-0.114,0.394,0.653,-0.028,0.088,0.724,0.658,0.034,0.538,0.741,0.3,0.747,0.566,-0.114,0.385,-0.15,0.477,0.289,-0.61,0.253,0.46,-0.316,0.245,0.438,0.087,0.234,0.532,0.044,0.187,0.659,0.719,0.169,0.396,0.74,0.392,0.353,0.168,0.318,0.737,0.168,-0.144,0.682,0.153,0.02,0.626,0.12,0.102,0.521,0.124,0.164,0.438,0.152,0.204,0.382,0.181,0.244,0.298,0.25,0.426,0.732,0.019,-0.138,0.718,0.4,0.006,0.386,0.05,0.3,0.342,0.214,0.27,0.404,-0.044,0.449,0.377,-0.009,0.53,0.601,-0.523,-0.171,0.721,0.019,-0.396,0.641,-0.417,-0.27,0.745,0.453,-0.244,0.431,0.001,0.259,0.709,-0.121,-0.166,0.222,0.736,0.452,0.548,-0.625,-0.087,0.492,-0.705,-0.005,0.339,-0.847,0.168,0.34,0.136,0.422,0.696,-0.133,-0.391,0.358,-0.577,0.226,0.67,-0.171,-0.006,0.325,0.214,0.368,0.329,0.356,0.256,0.654,-0.332,-0.124,0.299,0.349,0.361,0.387,-0.644,0.179,0.375,0.024,0.4,0.22,-0.798,0.255,0.218,-0.704,0.26,0.308,-0.687,0.229,0.507,-0.509,0.087,0.45,-0.585,0.131,0.585,-0.128,0.167,0.514,-0.217,0.201,0.62,-0.236,0.088,0.548,-0.554,0.004,0.557,-0.425,0.067,0.686,-0.24,-0.192,0.67,-0.279,-0.366,0.55,-0.306,0.147,0.361,0.094,0.357,0.392,-0.089,0.549,0.386,0.42,0.267,0.498,0.464,0.261,0.735,0.167,-0.374,0.584,0.192,0.109,0.51,0.19,0.157,0.435,0.205,0.188,0.379,0.227,0.214,0.354,0.064,0.466,0.318,0.284,0.253,0.213,0.09,0.554,0.197,-0.195,0.488,-0.416,0.225,0.278,-0.042,-0.751,0.239,-0.681,0.282,0.031,-0.515,0.275,0.233,-0.129,-0.068,0.369,0.232,-0.089,0.639,0.007,0.119,0.372,0.037,-0.12,0.48,-0.362,-0.06,0.338,0.226,0.008,0.61,0.086,-0.163,0.438,-0.487,0.641,0.326,-0.16,0.735,0.459,-0.585,0.541,0.216,0.132,-0.151,0.533,0.133,-0.616,0.283,-0.056,-0.33,0.365,-0.069,0.078,0.361,-0.186,0.025,0.362,-0.35,0.708,0.403,-0.033,-0.552,0.29,0.024,0.737,0.476,-0.498,0.175,0.251,-0.428,0.357,0.322,-0.585,0.13,0.191,-0.437,0.123,0.298,-0.333,0.095,0.337,-0.19,0.109,0.342,-0.086,0.141,0.337,-0.009,0.174,0.342,-0.563,-0.027,0.197,0.025,0.043,0.389,0.082,-0.05,0.519,0.154,-0.015,0.578,-0.41,-0.592,0.077,-0.673,-0.032,-0.031,-0.516,-0.487,0.024,-0.64,0.424,0.107,-0.042,-0.009,0.369,-0.553,-0.174,0.156,-0.556,0.388,0.251,0.02,-0.29,0.387,-0.297,-0.687,0.112,-0.19,-0.763,0.151,0.069,-0.872,0.232,0.134,0.131,0.469,-0.648,-0.196,-0.042,0.042,-0.592,0.3,-0.117,-0.385,0.329,-0.431,-0.217,0.263,0.119,0.211,0.417,0.053,0.349,0.321,-0.456,-0.39,0.148,0.135,0.343,0.398,-0.005,-0.67,0.266,0.087,0.019,0.463,0.11,-0.702,0.271,-0.18,-0.546,0.244,-0.07,-0.162,0.349,-0.1,-0.618,0.253,-0.247,-0.158,0.357,-0.141,-0.238,0.349,-0.318,-0.274,0.306,0.037,-0.017,0.419,-0.254,-0.606,0.189,-0.153,-0.685,0.204,-0.237,-0.46,0.26,-0.537,-0.297,0.113,-0.348,-0.473,0.209,-0.606,-0.348,-0.035,-0.202,-0.334,0.324,0.08,0.089,0.425,0.161,-0.094,0.596,-0.004,0.407,0.361,-0.126,0.449,0.401,-0.685,0.125,0.001,-0.287,0.172,0.326,-0.186,0.174,0.334,-0.094,0.194,0.326,0.025,0.24,0.312,0.15,0.061,0.513,0.095,0.262,0.359]},{"yaw":0.298,"pitch":-0.086,"frame":[0.265,0.925,0.437,0.042,0.924,0.478,-0.168,0.897,0.468,-0.382,0.836,0.401,-0.539,0.738,0.299,-0.655,0.612,0.185,-0.723,0.476,0.048,-0.758,0.306,-0.067,-0.759,0.143,-0.127,-0.747,-0.028,-0.148,-0.716,-0.209,-0.142,-0.651,-0.404,-0.107,-0.548,-0.562,-0.033,-0.426,-0.677,0.045,-0.278,-0.774,0.103,-0.155,-0.84,0.145,-0.025,-0.894,0.186,0.107,-0.925,0.194,0.252,-0.921,0.166,0.368,-0.893,0.106,0.442,-0.837,0.026,0.49,-0.768,-0.075,0.528,-0.691,-0.176,0.565,-0.585,-0.301,0.579,-0.469,-0.444,0.595,-0.321,-0.568,0.62,-0.143,-0.636,0.641,0.021,-0.664,0.657,0.177,-0.656,0.687,0.327,-0.6,0.723,0.483,-0.474,0.74,0.611,-0.312,0.733,0.73,-0.147,0.687,0.822,0.038,0.586,0.885,0.216,0.45,0.917,0.353,0.642,0.334,0.028,0.627,0.312,0.057,0.611,0.297,0.082,0.583,0.285,0.115,0.536,0.281,0.149,0.484,0.288,0.172,0.436,0.299,0.18,0.405,0.303,0.179,0.392,0.309,0.184,0.635,0.348,0.066,0.622,0.363,0.096,0.597,0.379,0.131,0.551,0.388,0.167,0.497,0.382,0.189,0.444,0.36,0.192,0.408,0.329,0.188,-0.282,0.323,0.367,-0.254,0.303,0.379,-0.222,0.29,0.389,-0.18,0.281,0.397,-0.123,0.278,0.396,-0.065,0.285,0.381,-0.014,0.294,0.359,0.022,0.299,0.337,0.04,0.302,0.33,-0.263,0.336,0.39,-0.239,0.35,0.406,-0.202,0.366,0.42,-0.147,0.375,0.419,-0.088,0.373,0.404,-0.027,0.352,0.374,0.019,0.322,0.35,0.746,0.473,0.06,0.723,0.512,0.158,0.665,0.524,0.247,0.568,0.509,0.328,0.421,0.457,0.393,0.759,0.513,-0.009,0.743,0.566,0.115,0.685,0.592,0.23,0.585,0.578,0.343,0.451,0.551,0.423,-0.405,0.449,0.454,-0.315,0.494,0.499,-0.197,0.512,0.518,-0.049,0.495,0.511,0.139,0.444,0.478,-0.463,0.484,0.414,-0.366,0.546,0.48,-0.227,0.578,0.516,-0.058,0.564,0.531,0.122,0.54,0.517,0.467,-0.426,0.139,0.45,-0.451,0.192,0.43,-0.475,0.251,0.397,-0.508,0.296,0.349,-0.529,0.34,0.289,-0.539,0.36,0.212,-0.535,0.381,0.139,-0.513,0.386,0.077,-0.48,0.374,0.031,-0.451,0.351,0,-0.425,0.333,0.033,-0.409,0.379,0.08,-0.391,0.416,0.143,-0.372,0.443,0.226,-0.356,0.453,0.302,-0.373,0.437,0.364,-0.359,0.409,0.41,-0.372,0.342,0.44,-0.39,0.275,0.457,-0.408,0.204,0.447,-0.424,0.175,0.419,-0.424,0.21,0.398,-0.424,0.255,0.369,-0.426,0.294,0.332,-0.428,0.332,0.286,-0.434,0.355,0.225,-0.433,0.372,0.161,-0.428,0.372,0.105,-0.427,0.364,0.061,-0.426,0.35,0.021,-0.424,0.337,0.062,-0.423,0.351,0.105,-0.423,0.366,0.161,-0.424,0.377,0.225,-0.431,0.378,0.29,-0.435,0.362,0.336,-0.431,0.338,0.373,-0.426,0.297,0.401,-0.425,0.257,0.421,-0.424,0.21,0.289,0.357,0.45,0.306,0.267,0.489,0.325,0.182,0.535,0.342,0.104,0.585,0.361,0.019,0.637,0.376,-0.081,0.656,0.371,-0.156,0.63,0.355,-0.194,0.594,0.335,-0.21,0.505,0.315,-0.218,0.454,0.443,-0.177,0.323,0.104,-0.182,0.414,0.226,-0.209,0.455,0.386,-0.21,0.416,0.464,-0.095,0.271,0.052,-0.102,0.398,0.291,0.44,0.461,0.291,0.535,0.482,0.274,-0.615,0.299,0.673,0.252,-0.014,0.458,-0.706,0.151,0.732,0.314,-0.371,0.711,0.309,-0.099,0.544,-0.047,0.22,0.432,0.128,0.283,0.481,-0.112,0.397,0.682,-0.024,0.068,0.737,0.65,0.001,0.58,0.738,0.286,0.752,0.558,-0.151,0.444,-0.146,0.484,0.343,-0.605,0.279,0.508,-0.31,0.249,0.481,0.089,0.233,0.571,0.046,0.178,0.685,0.712,0.144,0.448,0.74,0.391,0.403,0.17,0.324,0.744,0.168,-0.179,0.7,0.154,-0.006,0.653,0.121,0.083,0.555,0.126,0.156,0.477,0.153,0.202,0.425,0.182,0.248,0.356,0.251,0.438,0.744,0.021,-0.17,0.729,0.399,-0.026,0.435,0.052,0.305,0.389,0.216,0.277,0.461,-0.041,0.454,0.441,-0.005,0.535,0.612,-0.517,-0.179,0.716,0.018,-0.427,0.643,-0.414,-0.285,0.743,0.446,-0.281,0.475,0.004,0.261,0.72,-0.118,-0.193,0.282,0.737,0.466,0.566,-0.619,-0.086,0.519,-0.698,0.004,0.387,-0.839,0.193,0.397,0.138,0.43,0.691,-0.132,-0.418,0.407,-0.57,0.242,0.692,-0.167,-0.025,0.379,0.215,0.377,0.375,0.357,0.265,0.667,-0.328,-0.139,0.352,0.35,0.372,0.432,-0.636,0.196,0.431,0.027,0.407,0.278,-0.792,0.289,0.275,-0.699,0.292,0.36,-0.68,0.254,0.54,-0.5,0.09,0.488,-0.577,0.14,0.623,-0.123,0.158,0.555,-0.212,0.2,0.65,-0.23,0.077,0.572,-0.546,0.004,0.586,-0.417,0.064,0.694,-0.236,-0.214,0.666,-0.276,-0.388,0.587,-0.299,0.144,0.414,0.097,0.363,0.457,-0.083,0.554,0.432,0.421,0.27,0.538,0.464,0.254,0.73,0.166,-0.409,0.611,0.193,0.093,0.541,0.191,0.148,0.47,0.206,0.186,0.419,0.228,0.218,0.415,0.068,0.473,0.364,0.285,0.263,0.283,0.094,0.581,0.266,-0.19,0.516,-0.373,0.23,0.356,0.012,-0.75,0.293,-0.673,0.283,0.138,-0.479,0.279,0.319,-0.072,-0.065,0.421,0.31,-0.083,0.664,0.062,0.121,0.413,0.102,-0.116,0.519,-0.313,-0.058,0.413,0.299,0.013,0.636,0.15,-0.16,0.474,-0.444,0.647,0.404,-0.098,0.739,0.504,-0.556,0.546,0.307,0.202,-0.146,0.565,0.191,-0.614,0.319,0.005,-0.326,0.415,-0.015,0.081,0.41,-0.132,0.028,0.421,-0.297,0.714,0.466,0.024,-0.55,0.341,0.087,0.74,0.504,-0.463,0.178,0.337,-0.38,0.364,0.399,-0.558,0.131,0.288,-0.395,0.127,0.379,-0.284,0.099,0.408,-0.139,0.113,0.401,-0.035,0.145,0.386,0.042,0.177,0.384,-0.537,-0.027,0.294,0.081,0.046,0.429,0.149,-0.046,0.553,0.226,-0.01,0.606,-0.384,-0.598,0.164,-0.67,-0.033,0.081,-0.502,-0.494,0.121,-0.622,0.427,0.207,0.014,-0.007,0.415,-0.529,-0.175,0.252,-0.522,0.391,0.34,0.083,-0.286,0.43,-0.261,-0.691,0.188,-0.146,-0.767,0.218,0.126,-0.87,0.278,0.199,0.134,0.498,-0.646,-0.2,0.068,0.101,-0.59,0.344,-0.058,-0.381,0.387,-0.391,-0.217,0.345,0.179,0.213,0.447,0.107,0.351,0.356,-0.428,-0.393,0.236,0.194,0.345,0.426,0.05,-0.668,0.314,0.151,0.023,0.497,0.168,-0.699,0.311,-0.129,-0.546,0.307,-0.013,-0.159,0.398,-0.047,-0.617,0.309,-0.191,-0.155,0.42,-0.083,-0.235,0.404,-0.268,-0.273,0.377,0.095,-0.014,0.457,-0.21,-0.608,0.259,-0.104,-0.687,0.265,-0.185,-0.459,0.329,-0.516,-0.3,0.209,-0.307,-0.475,0.286,-0.602,-0.353,0.072,-0.147,-0.331,0.387,0.14,0.092,0.461,0.236,-0.088,0.625,0.053,0.41,0.399,-0.065,0.454,0.448,-0.68,0.125,0.112,-0.238,0.178,0.393,-0.135,0.18,0.392,-0.044,0.199,0.376,0.076,0.243,0.351,0.218,0.065,0.542,0.15,0.264,0.391]},{"yaw":0.343,"pitch":-0.075,"frame":[0.288,0.922,0.431,0.066,0.925,0.493,-0.145,0.9,0.491,-0.364,0.84,0.434,-0.528,0.741,0.342,-0.651,0.612,0.237,-0.724,0.474,0.107,-0.764,0.301,-0.002,-0.766,0.135,-0.058,-0.754,-0.036,-0.076,-0.723,-0.22,-0.068,-0.655,-0.416,-0.032,-0.547,-0.575,0.04,-0.415,-0.689,0.114,-0.262,-0.785,0.167,-0.134,-0.848,0.204,-0.001,-0.898,0.241,0.134,-0.925,0.243,0.28,-0.918,0.207,0.394,-0.889,0.135,0.464,-0.833,0.043,0.507,-0.763,-0.06,0.538,-0.688,-0.166,0.568,-0.584,-0.296,0.574,-0.469,-0.445,0.582,-0.323,-0.573,0.603,-0.146,-0.647,0.621,0.015,-0.681,0.634,0.165,-0.677,0.666,0.311,-0.626,0.708,0.465,-0.504,0.731,0.594,-0.345,0.73,0.714,-0.181,0.69,0.809,0.007,0.598,0.874,0.19,0.468,0.909,0.335,0.655,0.337,0.01,0.641,0.317,0.039,0.627,0.302,0.066,0.6,0.29,0.101,0.554,0.286,0.137,0.503,0.292,0.163,0.456,0.303,0.174,0.426,0.308,0.174,0.413,0.313,0.18,0.648,0.35,0.048,0.636,0.365,0.079,0.612,0.38,0.115,0.566,0.389,0.153,0.513,0.383,0.178,0.462,0.362,0.184,0.428,0.333,0.182,-0.258,0.332,0.41,-0.228,0.312,0.421,-0.196,0.3,0.429,-0.154,0.291,0.435,-0.097,0.288,0.432,-0.041,0.294,0.414,0.009,0.302,0.388,0.045,0.305,0.365,0.064,0.308,0.357,-0.237,0.344,0.431,-0.213,0.357,0.446,-0.175,0.372,0.457,-0.12,0.381,0.453,-0.061,0.378,0.434,-0.001,0.358,0.403,0.043,0.328,0.378,0.756,0.474,0.034,0.738,0.514,0.134,0.683,0.527,0.228,0.59,0.514,0.315,0.448,0.466,0.389,0.766,0.512,-0.037,0.755,0.567,0.089,0.702,0.594,0.208,0.607,0.582,0.327,0.478,0.558,0.415,-0.381,0.457,0.497,-0.286,0.504,0.537,-0.167,0.521,0.549,-0.018,0.505,0.535,0.169,0.453,0.498,-0.441,0.491,0.458,-0.339,0.555,0.518,-0.198,0.586,0.548,-0.026,0.573,0.554,0.154,0.548,0.535,0.502,-0.421,0.148,0.487,-0.445,0.203,0.47,-0.469,0.265,0.44,-0.503,0.313,0.394,-0.526,0.359,0.335,-0.538,0.387,0.258,-0.533,0.415,0.182,-0.511,0.424,0.117,-0.478,0.415,0.067,-0.449,0.396,0.034,-0.424,0.38,0.071,-0.409,0.424,0.121,-0.39,0.456,0.187,-0.37,0.478,0.273,-0.352,0.482,0.349,-0.367,0.459,0.409,-0.352,0.426,0.453,-0.365,0.355,0.48,-0.384,0.286,0.495,-0.402,0.213,0.482,-0.419,0.186,0.457,-0.42,0.223,0.438,-0.42,0.27,0.411,-0.423,0.311,0.376,-0.425,0.351,0.332,-0.432,0.382,0.269,-0.431,0.404,0.202,-0.426,0.408,0.143,-0.425,0.402,0.097,-0.425,0.392,0.056,-0.424,0.381,0.098,-0.423,0.393,0.143,-0.423,0.405,0.203,-0.424,0.412,0.27,-0.429,0.41,0.335,-0.432,0.387,0.379,-0.428,0.356,0.414,-0.422,0.314,0.44,-0.42,0.272,0.459,-0.419,0.223,0.316,0.363,0.455,0.337,0.276,0.496,0.359,0.194,0.543,0.379,0.118,0.594,0.402,0.036,0.647,0.42,-0.062,0.667,0.415,-0.136,0.644,0.397,-0.176,0.609,0.374,-0.195,0.524,0.352,-0.205,0.474,0.473,-0.168,0.333,0.14,-0.176,0.445,0.265,-0.199,0.479,0.421,-0.197,0.431,0.492,-0.086,0.276,0.084,-0.097,0.431,0.319,0.447,0.464,0.32,0.542,0.483,0.311,-0.611,0.329,0.682,0.254,-0.032,0.486,-0.7,0.168,0.722,0.305,-0.399,0.714,0.31,-0.122,0.569,-0.039,0.219,0.457,0.135,0.284,0.514,-0.1,0.402,0.7,-0.018,0.056,0.743,0.641,-0.029,0.598,0.735,0.265,0.752,0.547,-0.182,0.481,-0.132,0.49,0.378,-0.6,0.301,0.54,-0.3,0.256,0.505,0.095,0.231,0.592,0.052,0.172,0.696,0.706,0.117,0.471,0.74,0.377,0.429,0.177,0.326,0.746,0.168,-0.201,0.711,0.157,-0.024,0.668,0.126,0.069,0.575,0.132,0.148,0.498,0.16,0.199,0.448,0.188,0.248,0.386,0.26,0.441,0.751,0.023,-0.19,0.735,0.4,-0.051,0.463,0.06,0.307,0.414,0.222,0.278,0.495,-0.027,0.458,0.478,0.01,0.539,0.621,-0.514,-0.177,0.711,0.016,-0.447,0.646,-0.413,-0.289,0.738,0.435,-0.31,0.501,0.011,0.262,0.727,-0.116,-0.207,0.308,0.74,0.463,0.581,-0.614,-0.077,0.539,-0.693,0.018,0.416,-0.833,0.217,0.43,0.149,0.434,0.688,-0.134,-0.433,0.441,-0.564,0.259,0.707,-0.162,-0.035,0.408,0.223,0.38,0.397,0.362,0.264,0.677,-0.324,-0.145,0.377,0.357,0.374,0.461,-0.629,0.213,0.462,0.038,0.411,0.312,-0.787,0.324,0.31,-0.694,0.325,0.393,-0.674,0.277,0.566,-0.495,0.099,0.515,-0.571,0.153,0.646,-0.115,0.154,0.582,-0.203,0.202,0.67,-0.224,0.073,0.593,-0.541,0.012,0.611,-0.41,0.067,0.7,-0.234,-0.224,0.664,-0.276,-0.398,0.613,-0.291,0.145,0.444,0.106,0.366,0.497,-0.067,0.56,0.454,0.426,0.264,0.558,0.466,0.242,0.722,0.162,-0.434,0.626,0.198,0.079,0.559,0.196,0.139,0.49,0.211,0.18,0.44,0.233,0.216,0.45,0.081,0.477,0.387,0.291,0.265,0.32,0.107,0.598,0.308,-0.177,0.537,-0.351,0.235,0.404,0.042,-0.749,0.341,-0.665,0.283,0.198,-0.459,0.283,0.37,-0.04,-0.06,0.46,0.354,-0.065,0.681,0.09,0.128,0.441,0.14,-0.107,0.549,-0.285,-0.056,0.463,0.34,0.03,0.654,0.189,-0.15,0.502,-0.425,0.652,0.445,-0.071,0.745,0.527,-0.543,0.549,0.354,0.244,-0.133,0.59,0.226,-0.61,0.355,0.041,-0.321,0.456,0.013,0.086,0.442,-0.103,0.033,0.46,-0.273,0.719,0.499,0.057,-0.547,0.386,0.115,0.745,0.52,-0.441,0.181,0.389,-0.357,0.371,0.444,-0.542,0.131,0.346,-0.371,0.131,0.429,-0.258,0.104,0.453,-0.113,0.119,0.439,-0.009,0.152,0.419,0.068,0.184,0.412,-0.518,-0.028,0.355,0.112,0.053,0.458,0.186,-0.034,0.579,0.265,0.004,0.628,-0.366,-0.606,0.229,-0.663,-0.037,0.149,-0.491,-0.504,0.19,-0.613,0.428,0.261,0.044,-0.001,0.448,-0.512,-0.177,0.316,-0.504,0.395,0.389,0.12,-0.279,0.466,-0.239,-0.698,0.249,-0.122,-0.773,0.275,0.157,-0.868,0.324,0.232,0.145,0.519,-0.641,-0.206,0.138,0.135,-0.586,0.385,-0.023,-0.378,0.433,-0.367,-0.217,0.402,0.209,0.221,0.468,0.132,0.358,0.377,-0.408,-0.397,0.299,0.221,0.352,0.444,0.082,-0.666,0.359,0.185,0.033,0.521,0.202,-0.694,0.351,-0.099,-0.546,0.359,0.019,-0.154,0.435,-0.016,-0.617,0.357,-0.159,-0.151,0.465,-0.05,-0.23,0.447,-0.238,-0.271,0.429,0.128,-0.006,0.486,-0.184,-0.612,0.316,-0.076,-0.69,0.318,-0.156,-0.459,0.383,-0.5,-0.304,0.274,-0.282,-0.479,0.344,-0.596,-0.362,0.143,-0.113,-0.328,0.435,0.171,0.101,0.485,0.279,-0.072,0.647,0.081,0.417,0.422,-0.035,0.462,0.475,-0.674,0.123,0.176,-0.213,0.185,0.435,-0.11,0.188,0.429,-0.02,0.206,0.408,0.101,0.249,0.376,0.254,0.077,0.564,0.177,0.272,0.411]},{"yaw":0.392,"pitch":-0.062,"frame":[0.325,0.919,0.439,0.104,0.925,0.507,-0.11,0.902,0.52,-0.338,0.844,0.474,-0.514,0.745,0.391,-0.65,0.615,0.293,-0.732,0.475,0.168,-0.778,0.301,0.063,-0.779,0.135,0.009,-0.764,-0.036,-0.008,-0.729,-0.22,-0.001,-0.655,-0.417,0.033,-0.539,-0.577,0.099,-0.401,-0.692,0.166,-0.243,-0.788,0.211,-0.111,-0.851,0.242,0.027,-0.899,0.273,0.167,-0.925,0.268,0.316,-0.917,0.226,0.429,-0.885,0.151,0.495,-0.827,0.054,0.53,-0.756,-0.055,0.553,-0.679,-0.165,0.573,-0.574,-0.299,0.571,-0.459,-0.451,0.576,-0.315,-0.582,0.595,-0.142,-0.658,0.611,0.016,-0.694,0.624,0.164,-0.694,0.657,0.31,-0.644,0.704,0.463,-0.524,0.733,0.591,-0.365,0.738,0.71,-0.2,0.703,0.805,-0.008,0.619,0.87,0.181,0.497,0.905,0.335,0.672,0.345,-0.002,0.661,0.326,0.028,0.647,0.312,0.056,0.621,0.3,0.093,0.575,0.295,0.131,0.523,0.301,0.16,0.477,0.311,0.173,0.448,0.316,0.175,0.436,0.322,0.182,0.667,0.359,0.036,0.655,0.373,0.068,0.631,0.388,0.105,0.586,0.396,0.146,0.532,0.39,0.174,0.483,0.369,0.182,0.451,0.341,0.182,-0.224,0.345,0.451,-0.193,0.324,0.46,-0.16,0.311,0.467,-0.118,0.302,0.471,-0.059,0.298,0.465,-0.001,0.303,0.444,0.049,0.311,0.416,0.085,0.315,0.392,0.103,0.317,0.383,-0.201,0.358,0.47,-0.176,0.372,0.483,-0.136,0.388,0.492,-0.08,0.396,0.485,-0.02,0.392,0.463,0.039,0.37,0.43,0.083,0.338,0.404,0.771,0.479,0.018,0.758,0.519,0.12,0.708,0.533,0.218,0.621,0.522,0.311,0.485,0.477,0.392,0.779,0.513,-0.055,0.773,0.57,0.074,0.726,0.599,0.197,0.638,0.589,0.323,0.516,0.567,0.416,-0.343,0.467,0.541,-0.242,0.514,0.575,-0.119,0.532,0.581,0.032,0.516,0.559,0.217,0.466,0.514,-0.409,0.499,0.504,-0.297,0.564,0.559,-0.15,0.596,0.581,0.024,0.583,0.578,0.203,0.559,0.55,0.527,-0.402,0.146,0.516,-0.428,0.203,0.502,-0.457,0.268,0.476,-0.494,0.319,0.431,-0.519,0.373,0.372,-0.533,0.404,0.292,-0.528,0.434,0.211,-0.506,0.446,0.142,-0.471,0.44,0.089,-0.44,0.424,0.054,-0.413,0.413,0.094,-0.396,0.456,0.15,-0.374,0.486,0.222,-0.352,0.505,0.313,-0.331,0.504,0.389,-0.346,0.477,0.447,-0.329,0.439,0.489,-0.343,0.364,0.514,-0.362,0.29,0.526,-0.382,0.213,0.507,-0.401,0.186,0.485,-0.401,0.225,0.467,-0.403,0.276,0.443,-0.405,0.322,0.411,-0.409,0.366,0.368,-0.416,0.401,0.304,-0.417,0.426,0.234,-0.413,0.432,0.172,-0.413,0.428,0.121,-0.414,0.42,0.077,-0.413,0.411,0.121,-0.411,0.422,0.171,-0.408,0.433,0.234,-0.408,0.438,0.305,-0.412,0.433,0.372,-0.413,0.407,0.415,-0.409,0.371,0.447,-0.402,0.326,0.471,-0.401,0.28,0.487,-0.4,0.227,0.356,0.376,0.465,0.38,0.292,0.505,0.406,0.213,0.552,0.429,0.138,0.603,0.455,0.058,0.657,0.477,-0.039,0.678,0.472,-0.113,0.655,0.453,-0.154,0.622,0.424,-0.174,0.538,0.397,-0.184,0.49,0.509,-0.147,0.341,0.183,-0.159,0.469,0.311,-0.18,0.499,0.463,-0.177,0.442,0.526,-0.067,0.281,0.126,-0.081,0.457,0.361,0.459,0.473,0.363,0.551,0.491,0.349,-0.606,0.345,0.693,0.261,-0.045,0.517,-0.69,0.174,0.719,0.306,-0.419,0.719,0.315,-0.138,0.599,-0.023,0.217,0.489,0.15,0.287,0.553,-0.08,0.406,0.718,-0.004,0.046,0.755,0.64,-0.046,0.624,0.735,0.258,0.76,0.546,-0.202,0.528,-0.112,0.497,0.418,-0.594,0.316,0.574,-0.28,0.258,0.534,0.11,0.232,0.618,0.066,0.168,0.715,0.706,0.104,0.505,0.743,0.377,0.465,0.192,0.33,0.75,0.173,-0.219,0.722,0.167,-0.038,0.686,0.138,0.06,0.598,0.145,0.143,0.525,0.173,0.198,0.477,0.202,0.25,0.427,0.276,0.448,0.758,0.033,-0.207,0.745,0.404,-0.069,0.498,0.077,0.311,0.445,0.237,0.283,0.537,-0.007,0.462,0.526,0.031,0.545,0.629,-0.502,-0.185,0.711,0.021,-0.464,0.648,-0.4,-0.3,0.74,0.435,-0.331,0.533,0.028,0.264,0.734,-0.104,-0.221,0.349,0.745,0.47,0.596,-0.603,-0.08,0.562,-0.684,0.02,0.454,-0.827,0.233,0.471,0.166,0.44,0.687,-0.126,-0.447,0.478,-0.556,0.264,0.719,-0.148,-0.046,0.445,0.239,0.386,0.426,0.373,0.269,0.685,-0.311,-0.155,0.413,0.371,0.38,0.494,-0.619,0.218,0.503,0.057,0.416,0.352,-0.781,0.341,0.349,-0.688,0.342,0.431,-0.666,0.292,0.59,-0.48,0.096,0.543,-0.559,0.153,0.669,-0.099,0.148,0.611,-0.185,0.201,0.688,-0.208,0.065,0.612,-0.528,0.008,0.632,-0.395,0.061,0.705,-0.222,-0.237,0.664,-0.266,-0.41,0.637,-0.273,0.14,0.482,0.123,0.371,0.548,-0.044,0.566,0.483,0.436,0.266,0.584,0.474,0.238,0.721,0.165,-0.454,0.644,0.208,0.071,0.581,0.208,0.134,0.513,0.223,0.179,0.466,0.245,0.218,0.494,0.1,0.483,0.416,0.303,0.271,0.371,0.127,0.612,0.357,-0.157,0.554,-0.321,0.244,0.448,0.077,-0.744,0.369,-0.661,0.286,0.257,-0.434,0.29,0.418,0,-0.046,0.492,0.413,-0.042,0.694,0.131,0.142,0.465,0.188,-0.089,0.574,-0.249,-0.044,0.507,0.394,0.051,0.667,0.235,-0.133,0.525,-0.398,0.658,0.489,-0.029,0.752,0.552,-0.526,0.554,0.405,0.296,-0.113,0.611,0.262,-0.605,0.373,0.078,-0.305,0.486,0.053,0.1,0.471,-0.063,0.046,0.495,-0.237,0.727,0.535,0.085,-0.541,0.413,0.158,0.752,0.534,-0.414,0.189,0.437,-0.326,0.381,0.487,-0.521,0.138,0.401,-0.34,0.141,0.476,-0.223,0.116,0.494,-0.074,0.132,0.473,0.03,0.165,0.448,0.107,0.197,0.436,-0.494,-0.02,0.411,0.154,0.068,0.482,0.237,-0.015,0.6,0.319,0.024,0.646,-0.345,-0.606,0.277,-0.656,-0.034,0.211,-0.473,-0.505,0.245,-0.604,0.433,0.316,0.085,0.014,0.476,-0.488,-0.171,0.372,-0.481,0.401,0.439,0.159,-0.262,0.493,-0.216,-0.698,0.29,-0.094,-0.773,0.311,0.195,-0.864,0.348,0.279,0.162,0.536,-0.631,-0.204,0.201,0.166,-0.581,0.408,0.008,-0.364,0.468,-0.336,-0.208,0.451,0.252,0.237,0.485,0.173,0.37,0.396,-0.383,-0.393,0.35,0.263,0.366,0.459,0.116,-0.66,0.383,0.233,0.051,0.542,0.24,-0.689,0.371,-0.072,-0.537,0.394,0.059,-0.139,0.464,0.013,-0.609,0.386,-0.12,-0.138,0.503,-0.01,-0.215,0.48,-0.203,-0.259,0.472,0.172,0.011,0.509,-0.157,-0.606,0.355,-0.045,-0.685,0.351,-0.128,-0.447,0.423,-0.479,-0.3,0.33,-0.255,-0.472,0.389,-0.584,-0.362,0.204,-0.079,-0.315,0.472,0.216,0.117,0.506,0.336,-0.051,0.665,0.126,0.429,0.443,0.011,0.473,0.502,-0.668,0.126,0.238,-0.178,0.196,0.473,-0.073,0.199,0.463,0.018,0.218,0.437,0.14,0.261,0.399,0.304,0.096,0.581,0.218,0.286,0.429]},{"yaw":0.445,"pitch":-0.05,"frame":[0.363,0.919,0.445,0.146,0.925,0.527,-0.07,0.904,0.556,-0.306,0.847,0.526,-0.491,0.748,0.457,-0.638,0.618,0.371,-0.73,0.477,0.256,-0.782,0.302,0.16,-0.786,0.136,0.11,-0.774,-0.035,0.094,-0.74,-0.218,0.1,-0.662,-0.416,0.13,-0.536,-0.578,0.188,-0.388,-0.694,0.244,-0.219,-0.789,0.279,-0.079,-0.852,0.3,0.067,-0.9,0.322,0.213,-0.925,0.306,0.363,-0.914,0.254,0.473,-0.878,0.169,0.531,-0.817,0.063,0.556,-0.744,-0.049,0.568,-0.665,-0.161,0.575,-0.556,-0.297,0.564,-0.439,-0.451,0.564,-0.293,-0.584,0.582,-0.12,-0.663,0.599,0.033,-0.703,0.613,0.176,-0.705,0.647,0.319,-0.659,0.695,0.472,-0.544,0.727,0.599,-0.389,0.738,0.717,-0.224,0.711,0.81,-0.031,0.637,0.873,0.164,0.526,0.906,0.328,0.689,0.366,-0.018,0.679,0.345,0.014,0.667,0.329,0.043,0.641,0.316,0.081,0.595,0.31,0.122,0.544,0.316,0.155,0.498,0.327,0.172,0.469,0.334,0.176,0.458,0.341,0.184,0.685,0.382,0.021,0.674,0.397,0.053,0.651,0.413,0.092,0.606,0.42,0.135,0.552,0.411,0.166,0.504,0.389,0.179,0.472,0.36,0.182,-0.188,0.361,0.506,-0.156,0.338,0.513,-0.12,0.324,0.518,-0.076,0.315,0.519,-0.015,0.311,0.508,0.042,0.317,0.483,0.092,0.326,0.453,0.127,0.331,0.427,0.145,0.334,0.417,-0.163,0.376,0.522,-0.136,0.391,0.532,-0.096,0.406,0.538,-0.039,0.415,0.526,0.02,0.411,0.501,0.08,0.388,0.466,0.125,0.356,0.438,0.781,0.498,-0.005,0.775,0.539,0.1,0.73,0.554,0.202,0.651,0.542,0.302,0.523,0.494,0.393,0.785,0.529,-0.081,0.786,0.587,0.052,0.747,0.615,0.179,0.668,0.604,0.312,0.555,0.582,0.414,-0.303,0.482,0.598,-0.197,0.531,0.624,-0.071,0.551,0.622,0.08,0.534,0.59,0.263,0.483,0.534,-0.372,0.511,0.566,-0.255,0.579,0.611,-0.104,0.613,0.623,0.073,0.599,0.609,0.251,0.574,0.568,0.558,-0.384,0.149,0.551,-0.411,0.207,0.542,-0.441,0.272,0.522,-0.479,0.325,0.483,-0.507,0.385,0.428,-0.522,0.424,0.349,-0.517,0.458,0.268,-0.492,0.477,0.199,-0.456,0.476,0.146,-0.426,0.467,0.11,-0.398,0.462,0.149,-0.377,0.501,0.206,-0.353,0.525,0.278,-0.327,0.539,0.37,-0.303,0.532,0.444,-0.316,0.5,0.499,-0.3,0.455,0.538,-0.315,0.374,0.558,-0.338,0.296,0.563,-0.361,0.216,0.54,-0.381,0.191,0.52,-0.382,0.23,0.507,-0.382,0.284,0.487,-0.385,0.333,0.459,-0.388,0.384,0.422,-0.395,0.424,0.358,-0.396,0.453,0.289,-0.392,0.464,0.226,-0.394,0.464,0.176,-0.396,0.46,0.133,-0.396,0.456,0.176,-0.393,0.464,0.225,-0.389,0.47,0.288,-0.387,0.472,0.359,-0.39,0.462,0.426,-0.391,0.431,0.464,-0.386,0.391,0.492,-0.381,0.34,0.511,-0.38,0.29,0.524,-0.379,0.234,0.4,0.396,0.474,0.427,0.313,0.514,0.457,0.234,0.56,0.484,0.161,0.611,0.514,0.081,0.663,0.541,-0.014,0.685,0.537,-0.088,0.664,0.514,-0.129,0.633,0.482,-0.15,0.553,0.449,-0.16,0.508,0.555,-0.123,0.349,0.231,-0.138,0.498,0.364,-0.157,0.523,0.513,-0.152,0.454,0.566,-0.043,0.286,0.172,-0.061,0.491,0.404,0.476,0.482,0.407,0.567,0.499,0.4,-0.599,0.364,0.699,0.282,-0.061,0.554,-0.675,0.179,0.714,0.317,-0.44,0.718,0.333,-0.157,0.63,0.001,0.214,0.525,0.172,0.289,0.602,-0.054,0.408,0.731,0.02,0.031,0.763,0.65,-0.07,0.649,0.744,0.244,0.761,0.555,-0.227,0.582,-0.088,0.5,0.466,-0.586,0.328,0.613,-0.255,0.26,0.565,0.133,0.23,0.643,0.09,0.161,0.73,0.715,0.084,0.539,0.75,0.372,0.502,0.214,0.334,0.747,0.193,-0.241,0.726,0.189,-0.055,0.697,0.161,0.046,0.618,0.167,0.136,0.549,0.194,0.197,0.507,0.223,0.253,0.471,0.297,0.454,0.757,0.056,-0.227,0.749,0.42,-0.091,0.538,0.101,0.314,0.479,0.257,0.288,0.587,0.018,0.464,0.578,0.056,0.546,0.636,-0.483,-0.188,0.702,0.041,-0.48,0.646,-0.379,-0.306,0.736,0.444,-0.354,0.569,0.052,0.265,0.733,-0.08,-0.237,0.391,0.753,0.477,0.613,-0.586,-0.079,0.588,-0.669,0.024,0.499,-0.817,0.246,0.516,0.189,0.443,0.679,-0.103,-0.459,0.521,-0.545,0.269,0.726,-0.122,-0.06,0.486,0.26,0.391,0.455,0.392,0.275,0.689,-0.288,-0.164,0.452,0.391,0.386,0.531,-0.605,0.223,0.549,0.081,0.42,0.403,-0.771,0.363,0.4,-0.678,0.362,0.476,-0.654,0.305,0.617,-0.461,0.096,0.575,-0.542,0.156,0.691,-0.074,0.14,0.642,-0.161,0.198,0.703,-0.183,0.056,0.633,-0.51,0.007,0.655,-0.373,0.057,0.704,-0.198,-0.249,0.657,-0.243,-0.419,0.663,-0.249,0.136,0.525,0.146,0.374,0.604,-0.019,0.568,0.51,0.455,0.266,0.609,0.494,0.231,0.713,0.179,-0.473,0.659,0.229,0.059,0.6,0.227,0.126,0.536,0.242,0.177,0.492,0.265,0.221,0.543,0.124,0.485,0.446,0.323,0.277,0.427,0.149,0.625,0.415,-0.134,0.575,-0.285,0.258,0.508,0.124,-0.737,0.409,-0.648,0.29,0.343,-0.403,0.301,0.485,0.048,-0.028,0.532,0.477,-0.019,0.705,0.176,0.16,0.495,0.241,-0.068,0.603,-0.203,-0.03,0.566,0.455,0.074,0.679,0.286,-0.111,0.552,-0.364,0.667,0.547,0.016,0.761,0.586,-0.501,0.561,0.474,0.355,-0.092,0.636,0.312,-0.598,0.396,0.127,-0.287,0.527,0.099,0.118,0.507,-0.015,0.063,0.54,-0.197,0.736,0.582,0.132,-0.532,0.453,0.204,0.76,0.553,-0.38,0.201,0.504,-0.289,0.396,0.545,-0.492,0.147,0.476,-0.301,0.154,0.538,-0.179,0.131,0.548,-0.03,0.148,0.518,0.073,0.182,0.485,0.15,0.216,0.467,-0.463,-0.01,0.488,0.201,0.088,0.512,0.293,0.007,0.626,0.378,0.047,0.667,-0.321,-0.604,0.349,-0.645,-0.028,0.303,-0.456,-0.502,0.326,-0.587,0.437,0.395,0.132,0.033,0.51,-0.46,-0.161,0.45,-0.45,0.41,0.507,0.21,-0.242,0.527,-0.184,-0.695,0.353,-0.057,-0.77,0.364,0.245,-0.859,0.382,0.33,0.182,0.558,-0.623,-0.199,0.292,0.214,-0.573,0.44,0.057,-0.348,0.516,-0.297,-0.196,0.518,0.299,0.256,0.507,0.215,0.388,0.422,-0.353,-0.386,0.423,0.306,0.385,0.477,0.163,-0.651,0.419,0.284,0.072,0.567,0.29,-0.679,0.397,-0.029,-0.527,0.445,0.106,-0.121,0.502,0.057,-0.6,0.43,-0.071,-0.122,0.552,0.038,-0.199,0.524,-0.158,-0.246,0.529,0.221,0.031,0.538,-0.119,-0.599,0.413,-0.003,-0.678,0.399,-0.085,-0.437,0.48,-0.455,-0.293,0.409,-0.22,-0.464,0.452,-0.574,-0.358,0.293,-0.031,-0.3,0.523,0.265,0.137,0.532,0.398,-0.028,0.687,0.169,0.447,0.472,0.056,0.491,0.536,-0.656,0.131,0.328,-0.136,0.21,0.523,-0.031,0.214,0.507,0.061,0.235,0.475,0.182,0.28,0.428,0.359,0.118,0.603,0.261,0.305,0.452]},{"yaw":0.497,"pitch":-0.048,"frame":[0.387,0.921,0.468,0.17,0.925,0.561,-0.05,0.902,0.602,-0.292,0.844,0.579,-0.485,0.746,0.516,-0.64,0.616,0.432,-0.738,0.475,0.317,-0.795,0.298,0.22,-0.8,0.131,0.167,-0.786,-0.041,0.146,-0.75,-0.224,0.146,-0.667,-0.422,0.17,-0.533,-0.583,0.221,-0.377,-0.699,0.271,-0.2,-0.795,0.299,-0.053,-0.857,0.315,0.101,-0.902,0.332,0.253,-0.925,0.315,0.409,-0.91,0.257,0.516,-0.871,0.164,0.569,-0.806,0.054,0.585,-0.731,-0.062,0.587,-0.649,-0.177,0.583,-0.537,-0.316,0.56,-0.417,-0.471,0.553,-0.268,-0.604,0.569,-0.096,-0.682,0.584,0.057,-0.72,0.598,0.199,-0.72,0.634,0.341,-0.672,0.684,0.487,-0.553,0.719,0.608,-0.395,0.735,0.723,-0.226,0.716,0.816,-0.026,0.65,0.878,0.176,0.545,0.909,0.347,0.695,0.379,-0.02,0.687,0.357,0.012,0.676,0.341,0.042,0.654,0.327,0.082,0.61,0.32,0.125,0.561,0.325,0.161,0.516,0.337,0.179,0.49,0.345,0.185,0.479,0.352,0.194,0.693,0.395,0.02,0.683,0.41,0.053,0.663,0.425,0.093,0.621,0.432,0.139,0.57,0.423,0.173,0.524,0.401,0.186,0.495,0.372,0.191,-0.167,0.359,0.55,-0.134,0.336,0.556,-0.097,0.322,0.56,-0.052,0.313,0.558,0.007,0.31,0.546,0.063,0.318,0.518,0.111,0.329,0.486,0.145,0.335,0.459,0.163,0.339,0.448,-0.142,0.376,0.565,-0.113,0.392,0.575,-0.071,0.409,0.579,-0.015,0.419,0.565,0.042,0.416,0.537,0.1,0.393,0.5,0.143,0.361,0.471,0.791,0.509,-0.009,0.791,0.549,0.1,0.752,0.564,0.207,0.678,0.554,0.312,0.555,0.509,0.408,0.791,0.541,-0.086,0.8,0.597,0.052,0.768,0.624,0.184,0.695,0.616,0.323,0.588,0.595,0.43,-0.285,0.481,0.647,-0.177,0.531,0.671,-0.046,0.553,0.664,0.108,0.539,0.625,0.293,0.493,0.556,-0.358,0.511,0.618,-0.236,0.58,0.661,-0.08,0.615,0.667,0.101,0.605,0.645,0.282,0.584,0.592,0.582,-0.384,0.138,0.58,-0.412,0.198,0.578,-0.442,0.266,0.565,-0.481,0.322,0.531,-0.511,0.386,0.478,-0.527,0.431,0.395,-0.522,0.472,0.309,-0.496,0.493,0.234,-0.46,0.493,0.177,-0.429,0.487,0.138,-0.401,0.485,0.182,-0.382,0.523,0.246,-0.36,0.545,0.323,-0.337,0.557,0.419,-0.315,0.548,0.495,-0.327,0.512,0.548,-0.31,0.46,0.58,-0.322,0.375,0.593,-0.342,0.293,0.592,-0.362,0.209,0.565,-0.382,0.183,0.55,-0.386,0.224,0.541,-0.388,0.282,0.527,-0.392,0.334,0.503,-0.397,0.388,0.469,-0.405,0.436,0.402,-0.406,0.469,0.328,-0.401,0.481,0.261,-0.401,0.482,0.206,-0.402,0.48,0.16,-0.4,0.477,0.206,-0.399,0.483,0.26,-0.396,0.488,0.327,-0.395,0.488,0.402,-0.399,0.478,0.473,-0.399,0.444,0.508,-0.394,0.396,0.532,-0.387,0.341,0.545,-0.384,0.288,0.554,-0.383,0.228,0.432,0.404,0.491,0.465,0.319,0.531,0.5,0.239,0.577,0.531,0.166,0.626,0.568,0.086,0.677,0.599,-0.009,0.699,0.596,-0.082,0.675,0.572,-0.123,0.645,0.535,-0.143,0.563,0.499,-0.153,0.519,0.6,-0.11,0.354,0.267,-0.134,0.518,0.408,-0.152,0.54,0.563,-0.142,0.462,0.608,-0.029,0.29,0.206,-0.057,0.515,0.436,0.487,0.499,0.439,0.578,0.518,0.445,-0.601,0.369,0.703,0.295,-0.067,0.59,-0.666,0.169,0.706,0.336,-0.453,0.718,0.347,-0.165,0.661,0.014,0.213,0.555,0.183,0.296,0.65,-0.042,0.412,0.748,0.037,0.02,0.769,0.658,-0.071,0.668,0.748,0.255,0.761,0.568,-0.232,0.635,-0.079,0.508,0.511,-0.586,0.328,0.651,-0.247,0.256,0.593,0.145,0.233,0.668,0.104,0.159,0.742,0.722,0.089,0.564,0.753,0.389,0.534,0.224,0.344,0.747,0.212,-0.254,0.73,0.205,-0.065,0.71,0.176,0.04,0.636,0.18,0.136,0.571,0.207,0.201,0.531,0.235,0.261,0.507,0.305,0.469,0.759,0.077,-0.243,0.753,0.434,-0.097,0.574,0.112,0.32,0.505,0.269,0.298,0.635,0.029,0.471,0.628,0.064,0.556,0.646,-0.465,-0.208,0.695,0.063,-0.498,0.647,-0.357,-0.328,0.732,0.461,-0.363,0.604,0.065,0.268,0.734,-0.059,-0.256,0.42,0.756,0.497,0.633,-0.571,-0.097,0.616,-0.657,0.01,0.544,-0.809,0.24,0.556,0.197,0.456,0.672,-0.079,-0.479,0.562,-0.542,0.262,0.736,-0.104,-0.076,0.519,0.268,0.403,0.48,0.403,0.288,0.695,-0.269,-0.184,0.483,0.402,0.401,0.568,-0.599,0.215,0.591,0.091,0.429,0.45,-0.767,0.365,0.445,-0.676,0.366,0.519,-0.65,0.301,0.643,-0.45,0.082,0.606,-0.533,0.144,0.716,-0.06,0.132,0.675,-0.148,0.193,0.722,-0.168,0.043,0.656,-0.496,-0.009,0.678,-0.359,0.042,0.704,-0.176,-0.269,0.651,-0.22,-0.441,0.689,-0.237,0.125,0.561,0.155,0.383,0.659,-0.01,0.577,0.536,0.468,0.278,0.632,0.505,0.239,0.706,0.2,-0.49,0.671,0.242,0.057,0.616,0.239,0.127,0.555,0.254,0.182,0.513,0.277,0.229,0.587,0.132,0.496,0.47,0.334,0.289,0.474,0.153,0.641,0.466,-0.129,0.591,-0.267,0.255,0.553,0.161,-0.739,0.422,-0.646,0.287,0.4,-0.389,0.298,0.534,0.08,-0.027,0.561,0.534,-0.014,0.72,0.208,0.164,0.521,0.283,-0.065,0.625,-0.177,-0.031,0.604,0.507,0.078,0.695,0.328,-0.107,0.571,-0.35,0.667,0.601,0.042,0.763,0.627,-0.494,0.56,0.531,0.405,-0.088,0.654,0.352,-0.601,0.408,0.161,-0.288,0.55,0.129,0.121,0.536,0.014,0.064,0.572,-0.176,0.737,0.63,0.162,-0.534,0.47,0.232,0.762,0.582,-0.362,0.197,0.551,-0.273,0.394,0.592,-0.477,0.144,0.526,-0.279,0.151,0.582,-0.154,0.13,0.588,-0.004,0.15,0.552,0.1,0.186,0.516,0.178,0.221,0.495,-0.447,-0.014,0.536,0.236,0.092,0.537,0.337,0.01,0.646,0.427,0.05,0.685,-0.303,-0.61,0.377,-0.641,-0.034,0.354,-0.444,-0.508,0.36,-0.583,0.435,0.452,0.164,0.036,0.537,-0.444,-0.166,0.494,-0.439,0.408,0.56,0.247,-0.242,0.547,-0.161,-0.701,0.374,-0.029,-0.774,0.38,0.287,-0.858,0.392,0.37,0.186,0.576,-0.619,-0.205,0.338,0.249,-0.577,0.455,0.088,-0.35,0.541,-0.275,-0.199,0.555,0.334,0.261,0.528,0.238,0.394,0.449,-0.335,-0.391,0.458,0.336,0.393,0.496,0.198,-0.653,0.432,0.325,0.075,0.589,0.331,-0.68,0.409,-0.002,-0.531,0.468,0.138,-0.119,0.527,0.087,-0.603,0.447,-0.04,-0.124,0.584,0.07,-0.2,0.551,-0.131,-0.249,0.562,0.258,0.035,0.561,-0.094,-0.604,0.435,0.026,-0.682,0.416,-0.06,-0.439,0.508,-0.44,-0.298,0.448,-0.197,-0.47,0.482,-0.568,-0.364,0.334,-0.002,-0.301,0.551,0.302,0.141,0.555,0.452,-0.024,0.704,0.192,0.453,0.502,0.079,0.495,0.571,-0.652,0.127,0.384,-0.113,0.209,0.563,-0.007,0.215,0.542,0.085,0.237,0.507,0.205,0.285,0.456,0.403,0.121,0.622,0.29,0.311,0.476]},{"yaw":0.544,"pitch":-0.032,"frame":[0.406,0.921,0.446,0.189,0.925,0.55,-0.03,0.901,0.608,-0.277,0.839,0.606,-0.475,0.739,0.551,-0.637,0.606,0.476,-0.742,0.463,0.374,-0.804,0.285,0.289,-0.811,0.116,0.245,-0.795,-0.057,0.232,-0.753,-0.243,0.238,-0.66,-0.441,0.266,-0.515,-0.6,0.316,-0.349,-0.713,0.361,-0.165,-0.806,0.384,-0.013,-0.865,0.395,0.145,-0.907,0.407,0.299,-0.925,0.378,0.452,-0.908,0.31,0.556,-0.867,0.211,0.603,-0.804,0.093,0.613,-0.733,-0.028,0.611,-0.655,-0.15,0.6,-0.547,-0.296,0.57,-0.431,-0.458,0.555,-0.285,-0.598,0.564,-0.112,-0.682,0.575,0.042,-0.727,0.586,0.185,-0.735,0.622,0.329,-0.695,0.677,0.479,-0.586,0.716,0.602,-0.438,0.736,0.72,-0.274,0.72,0.812,-0.075,0.66,0.874,0.13,0.561,0.907,0.31,0.713,0.38,-0.041,0.706,0.358,-0.008,0.695,0.341,0.023,0.674,0.327,0.065,0.631,0.321,0.11,0.583,0.327,0.149,0.541,0.341,0.17,0.517,0.352,0.177,0.507,0.36,0.187,0.712,0.397,-0.002,0.704,0.414,0.032,0.685,0.43,0.072,0.644,0.437,0.12,0.593,0.427,0.157,0.549,0.405,0.175,0.522,0.378,0.182,-0.147,0.36,0.588,-0.112,0.337,0.592,-0.074,0.323,0.595,-0.028,0.314,0.591,0.031,0.312,0.577,0.085,0.32,0.547,0.129,0.332,0.513,0.16,0.341,0.485,0.176,0.346,0.473,-0.119,0.378,0.601,-0.089,0.395,0.609,-0.046,0.414,0.611,0.012,0.426,0.595,0.069,0.423,0.565,0.122,0.401,0.526,0.159,0.368,0.497,0.802,0.51,-0.042,0.804,0.552,0.066,0.765,0.567,0.177,0.693,0.56,0.29,0.576,0.518,0.395,0.799,0.539,-0.125,0.811,0.597,0.015,0.78,0.625,0.15,0.71,0.621,0.296,0.607,0.603,0.411,-0.259,0.48,0.684,-0.148,0.532,0.703,-0.017,0.555,0.689,0.134,0.548,0.641,0.316,0.505,0.564,-0.336,0.506,0.655,-0.209,0.577,0.693,-0.053,0.615,0.691,0.126,0.611,0.658,0.305,0.595,0.596,0.639,-0.385,0.151,0.638,-0.41,0.215,0.635,-0.438,0.287,0.62,-0.475,0.346,0.585,-0.503,0.414,0.533,-0.517,0.464,0.449,-0.511,0.51,0.362,-0.484,0.539,0.287,-0.45,0.544,0.23,-0.421,0.542,0.193,-0.397,0.541,0.234,-0.373,0.574,0.296,-0.345,0.589,0.374,-0.316,0.593,0.474,-0.288,0.575,0.551,-0.3,0.534,0.606,-0.286,0.476,0.641,-0.304,0.389,0.653,-0.331,0.305,0.651,-0.358,0.221,0.622,-0.381,0.198,0.605,-0.382,0.241,0.596,-0.382,0.3,0.581,-0.384,0.354,0.558,-0.386,0.41,0.524,-0.393,0.462,0.456,-0.392,0.502,0.381,-0.387,0.52,0.314,-0.389,0.527,0.26,-0.393,0.53,0.217,-0.395,0.53,0.262,-0.391,0.532,0.315,-0.384,0.532,0.382,-0.381,0.526,0.458,-0.383,0.509,0.528,-0.383,0.47,0.563,-0.38,0.417,0.586,-0.376,0.36,0.6,-0.377,0.305,0.609,-0.378,0.244,0.458,0.419,0.493,0.495,0.336,0.535,0.535,0.26,0.582,0.571,0.19,0.633,0.613,0.113,0.686,0.65,0.021,0.71,0.648,-0.052,0.688,0.622,-0.097,0.66,0.584,-0.118,0.58,0.548,-0.133,0.537,0.641,-0.097,0.367,0.311,-0.124,0.548,0.456,-0.134,0.563,0.608,-0.124,0.478,0.645,-0.017,0.299,0.244,-0.048,0.545,0.46,0.499,0.497,0.462,0.589,0.51,0.495,-0.592,0.409,0.717,0.296,-0.087,0.628,-0.66,0.199,0.709,0.328,-0.48,0.727,0.346,-0.189,0.691,0.023,0.214,0.584,0.193,0.296,0.692,-0.023,0.418,0.769,0.041,0.01,0.775,0.659,-0.113,0.68,0.751,0.218,0.765,0.564,-0.272,0.679,-0.056,0.516,0.559,-0.577,0.364,0.697,-0.237,0.267,0.621,0.153,0.231,0.692,0.11,0.153,0.75,0.723,0.047,0.581,0.757,0.36,0.564,0.235,0.344,0.758,0.208,-0.277,0.745,0.205,-0.083,0.727,0.178,0.027,0.657,0.184,0.128,0.596,0.212,0.198,0.558,0.243,0.259,0.537,0.321,0.468,0.775,0.074,-0.259,0.763,0.434,-0.127,0.607,0.125,0.323,0.533,0.278,0.297,0.677,0.05,0.475,0.671,0.088,0.56,0.667,-0.469,-0.197,0.704,0.054,-0.511,0.663,-0.365,-0.324,0.734,0.455,-0.396,0.635,0.074,0.271,0.75,-0.062,-0.264,0.442,0.759,0.482,0.659,-0.572,-0.076,0.645,-0.654,0.038,0.586,-0.803,0.281,0.59,0.214,0.457,0.682,-0.09,-0.484,0.609,-0.534,0.289,0.757,-0.103,-0.08,0.549,0.282,0.404,0.506,0.411,0.283,0.715,-0.272,-0.181,0.509,0.415,0.398,0.609,-0.591,0.244,0.628,0.109,0.432,0.498,-0.76,0.41,0.493,-0.669,0.408,0.564,-0.642,0.338,0.682,-0.448,0.098,0.646,-0.528,0.168,0.743,-0.052,0.132,0.711,-0.14,0.201,0.749,-0.164,0.045,0.687,-0.496,0.007,0.715,-0.359,0.051,0.721,-0.182,-0.27,0.664,-0.23,-0.441,0.725,-0.232,0.133,0.595,0.17,0.385,0.705,0.016,0.582,0.558,0.475,0.266,0.649,0.51,0.22,0.712,0.192,-0.51,0.688,0.244,0.042,0.637,0.243,0.117,0.579,0.258,0.176,0.539,0.283,0.225,0.625,0.152,0.499,0.498,0.342,0.287,0.513,0.176,0.655,0.518,-0.106,0.61,-0.244,0.254,0.596,0.208,-0.737,0.484,-0.643,0.277,0.462,-0.37,0.295,0.581,0.118,-0.02,0.597,0.584,0.014,0.735,0.238,0.174,0.547,0.329,-0.049,0.652,-0.143,-0.029,0.653,0.552,0.103,0.709,0.374,-0.091,0.597,-0.331,0.663,0.634,0.066,0.764,0.635,-0.481,0.553,0.571,0.454,-0.066,0.677,0.404,-0.593,0.453,0.209,-0.279,0.595,0.16,0.128,0.566,0.048,0.069,0.608,-0.153,0.735,0.655,0.213,-0.529,0.528,0.256,0.765,0.578,-0.337,0.195,0.6,-0.25,0.395,0.631,-0.46,0.139,0.586,-0.249,0.15,0.63,-0.121,0.132,0.63,0.028,0.154,0.587,0.129,0.191,0.545,0.204,0.228,0.521,-0.424,-0.019,0.6,0.269,0.102,0.563,0.38,0.029,0.67,0.471,0.073,0.704,-0.269,-0.619,0.459,-0.634,-0.045,0.431,-0.417,-0.518,0.445,-0.575,0.426,0.502,0.199,0.044,0.567,-0.419,-0.172,0.564,-0.421,0.403,0.605,0.293,-0.23,0.585,-0.123,-0.707,0.453,0.014,-0.778,0.454,0.335,-0.855,0.448,0.404,0.203,0.595,-0.607,-0.217,0.419,0.3,-0.569,0.508,0.137,-0.345,0.594,-0.241,-0.2,0.616,0.363,0.274,0.546,0.256,0.403,0.467,-0.303,-0.396,0.531,0.357,0.406,0.506,0.246,-0.649,0.49,0.362,0.091,0.612,0.38,-0.674,0.456,0.043,-0.531,0.531,0.178,-0.112,0.564,0.134,-0.601,0.51,0,-0.118,0.629,0.114,-0.193,0.595,-0.091,-0.247,0.617,0.294,0.048,0.587,-0.052,-0.607,0.506,0.071,-0.682,0.484,-0.014,-0.44,0.57,-0.413,-0.305,0.523,-0.158,-0.473,0.551,-0.55,-0.376,0.42,0.043,-0.298,0.604,0.335,0.155,0.578,0.501,0.001,0.724,0.211,0.463,0.52,0.104,0.501,0.594,-0.648,0.116,0.454,-0.086,0.211,0.6,0.021,0.219,0.575,0.11,0.242,0.536,0.225,0.293,0.479,0.442,0.141,0.641,0.312,0.322,0.493]},{"yaw":0.558,"pitch":0.013,"frame":[0.31,0.918,0.247,0.11,0.925,0.348,-0.088,0.898,0.406,-0.313,0.825,0.412,-0.49,0.708,0.382,-0.632,0.558,0.339,-0.72,0.403,0.273,-0.768,0.211,0.232,-0.763,0.034,0.225,-0.736,-0.142,0.248,-0.682,-0.328,0.288,-0.578,-0.521,0.35,-0.43,-0.665,0.423,-0.266,-0.758,0.486,-0.085,-0.833,0.522,0.062,-0.878,0.542,0.214,-0.909,0.562,0.36,-0.925,0.544,0.505,-0.911,0.481,0.608,-0.879,0.385,0.657,-0.83,0.266,0.67,-0.776,0.141,0.669,-0.715,0.016,0.655,-0.631,-0.135,0.62,-0.538,-0.308,0.592,-0.405,-0.465,0.578,-0.232,-0.585,0.567,-0.071,-0.664,0.558,0.079,-0.708,0.575,0.229,-0.703,0.612,0.388,-0.639,0.639,0.523,-0.528,0.645,0.659,-0.394,0.616,0.77,-0.222,0.551,0.851,-0.042,0.455,0.895,0.122,0.686,0.356,-0.089,0.68,0.34,-0.055,0.669,0.328,-0.024,0.647,0.319,0.018,0.606,0.317,0.061,0.56,0.325,0.096,0.518,0.34,0.114,0.49,0.352,0.117,0.479,0.362,0.125,0.683,0.373,-0.053,0.672,0.391,-0.022,0.651,0.409,0.014,0.609,0.419,0.056,0.561,0.414,0.091,0.517,0.399,0.109,0.491,0.378,0.118,-0.172,0.351,0.507,-0.137,0.333,0.514,-0.096,0.323,0.519,-0.045,0.317,0.517,0.017,0.318,0.503,0.072,0.324,0.472,0.114,0.335,0.436,0.141,0.344,0.407,0.156,0.35,0.394,-0.144,0.37,0.517,-0.111,0.389,0.522,-0.063,0.41,0.521,-0.003,0.422,0.503,0.05,0.42,0.473,0.102,0.4,0.439,0.139,0.37,0.413,0.736,0.483,-0.117,0.723,0.543,-0.025,0.678,0.576,0.076,0.609,0.581,0.183,0.498,0.544,0.288,0.731,0.501,-0.203,0.725,0.578,-0.083,0.684,0.628,0.039,0.615,0.639,0.176,0.514,0.632,0.285,-0.265,0.5,0.564,-0.163,0.565,0.567,-0.04,0.6,0.549,0.1,0.596,0.507,0.266,0.547,0.442,-0.339,0.52,0.528,-0.223,0.606,0.547,-0.079,0.656,0.539,0.087,0.658,0.511,0.249,0.639,0.455,0.669,-0.388,0.257,0.666,-0.407,0.326,0.659,-0.425,0.398,0.64,-0.452,0.455,0.602,-0.471,0.518,0.55,-0.479,0.565,0.472,-0.475,0.606,0.387,-0.455,0.63,0.309,-0.426,0.631,0.253,-0.402,0.623,0.218,-0.381,0.614,0.255,-0.349,0.637,0.315,-0.313,0.646,0.39,-0.274,0.645,0.487,-0.238,0.625,0.565,-0.252,0.589,0.623,-0.242,0.533,0.664,-0.273,0.454,0.681,-0.314,0.383,0.681,-0.353,0.312,0.653,-0.379,0.302,0.634,-0.371,0.342,0.621,-0.364,0.394,0.602,-0.359,0.442,0.575,-0.354,0.494,0.537,-0.355,0.543,0.474,-0.354,0.579,0.401,-0.353,0.595,0.333,-0.36,0.601,0.28,-0.368,0.604,0.241,-0.375,0.604,0.283,-0.366,0.603,0.336,-0.355,0.601,0.403,-0.348,0.595,0.476,-0.348,0.58,0.542,-0.35,0.544,0.581,-0.35,0.496,0.608,-0.352,0.443,0.626,-0.359,0.394,0.638,-0.367,0.341,0.406,0.447,0.396,0.449,0.373,0.453,0.494,0.308,0.514,0.537,0.248,0.58,0.584,0.183,0.646,0.629,0.102,0.684,0.635,0.027,0.676,0.611,-0.026,0.654,0.58,-0.057,0.587,0.55,-0.085,0.555,0.63,-0.074,0.387,0.327,-0.094,0.562,0.467,-0.092,0.581,0.598,-0.085,0.5,0.629,-0.004,0.309,0.255,-0.024,0.547,0.4,0.53,0.383,0.392,0.623,0.376,0.524,-0.566,0.522,0.7,0.261,-0.117,0.673,-0.666,0.347,0.667,0.253,-0.497,0.705,0.299,-0.226,0.677,0.024,0.222,0.561,0.199,0.265,0.679,0.012,0.419,0.76,0.014,0.028,0.689,0.617,-0.221,0.584,0.748,0.07,0.691,0.505,-0.357,0.664,0.002,0.511,0.583,-0.557,0.48,0.702,-0.232,0.331,0.601,0.151,0.213,0.675,0.101,0.146,0.653,0.699,-0.081,0.489,0.764,0.201,0.535,0.25,0.301,0.74,0.15,-0.277,0.74,0.168,-0.094,0.718,0.154,0.015,0.643,0.173,0.108,0.578,0.208,0.169,0.535,0.245,0.219,0.493,0.353,0.393,0.768,0.016,-0.231,0.72,0.396,-0.184,0.588,0.138,0.305,0.503,0.288,0.247,0.659,0.091,0.46,0.647,0.143,0.532,0.714,-0.528,-0.051,0.692,-0.029,-0.464,0.703,-0.441,-0.19,0.674,0.386,-0.45,0.616,0.079,0.266,0.758,-0.122,-0.204,0.358,0.773,0.314,0.711,-0.616,0.08,0.699,-0.683,0.199,0.637,-0.804,0.443,0.559,0.248,0.409,0.688,-0.178,-0.405,0.633,-0.524,0.411,0.767,-0.141,-0.026,0.512,0.306,0.345,0.46,0.423,0.206,0.744,-0.324,-0.082,0.456,0.437,0.312,0.647,-0.591,0.378,0.607,0.141,0.408,0.543,-0.744,0.553,0.53,-0.648,0.535,0.6,-0.63,0.47,0.719,-0.469,0.223,0.686,-0.54,0.3,0.74,-0.062,0.163,0.712,-0.14,0.245,0.76,-0.186,0.106,0.731,-0.527,0.145,0.743,-0.385,0.157,0.743,-0.245,-0.184,0.689,-0.318,-0.33,0.74,-0.246,0.2,0.572,0.194,0.353,0.685,0.08,0.563,0.501,0.487,0.181,0.583,0.519,0.133,0.684,0.113,-0.493,0.673,0.224,0.014,0.62,0.232,0.085,0.56,0.252,0.139,0.516,0.282,0.18,0.598,0.197,0.462,0.462,0.353,0.224,0.483,0.234,0.602,0.521,-0.046,0.611,-0.237,0.25,0.53,0.262,-0.724,0.612,-0.611,0.237,0.393,-0.354,0.288,0.504,0.13,0.003,0.589,0.566,0.094,0.708,0.226,0.193,0.501,0.337,-0.001,0.643,-0.117,-0.019,0.637,0.527,0.173,0.667,0.382,-0.042,0.599,-0.347,0.66,0.477,0.012,0.784,0.458,-0.478,0.535,0.438,0.455,-0.001,0.664,0.438,-0.567,0.562,0.239,-0.252,0.638,0.155,0.143,0.53,0.054,0.085,0.579,-0.19,0.745,0.482,0.254,-0.512,0.623,0.186,0.786,0.404,-0.313,0.189,0.542,-0.251,0.401,0.538,-0.428,0.123,0.542,-0.226,0.149,0.582,-0.103,0.137,0.587,0.033,0.162,0.543,0.124,0.2,0.498,0.193,0.239,0.466,-0.381,-0.034,0.583,0.263,0.129,0.534,0.376,0.081,0.645,0.454,0.136,0.668,-0.196,-0.642,0.563,-0.58,-0.091,0.428,-0.34,-0.555,0.531,-0.558,0.394,0.4,0.2,0.065,0.549,-0.363,-0.192,0.58,-0.411,0.4,0.504,0.315,-0.199,0.62,-0.052,-0.719,0.575,0.083,-0.777,0.588,0.391,-0.846,0.6,0.377,0.246,0.538,-0.54,-0.265,0.449,0.34,-0.547,0.61,0.175,-0.324,0.646,-0.192,-0.201,0.634,0.332,0.305,0.478,0.225,0.42,0.377,-0.237,-0.411,0.59,0.315,0.435,0.412,0.295,-0.634,0.605,0.351,0.134,0.576,0.423,-0.653,0.58,0.092,-0.524,0.622,0.197,-0.089,0.574,0.183,-0.591,0.615,0.027,-0.096,0.635,0.142,-0.169,0.62,-0.048,-0.235,0.647,0.293,0.08,0.566,0.007,-0.607,0.61,0.13,-0.675,0.603,0.033,-0.433,0.64,-0.347,-0.329,0.566,-0.099,-0.475,0.624,-0.474,-0.423,0.481,0.084,-0.281,0.643,0.32,0.19,0.535,0.49,0.073,0.698,0.176,0.489,0.418,0.075,0.531,0.48,-0.604,0.074,0.418,-0.081,0.215,0.543,0.018,0.224,0.52,0.101,0.248,0.481,0.207,0.302,0.413,0.419,0.194,0.595,0.284,0.343,0.417]},{"yaw":0.51,"pitch":0.026,"frame":[0.283,0.923,0.227,0.076,0.925,0.33,-0.126,0.892,0.389,-0.35,0.806,0.396,-0.524,0.676,0.368,-0.659,0.514,0.327,-0.738,0.35,0.264,-0.773,0.152,0.226,-0.759,-0.023,0.222,-0.724,-0.196,0.252,-0.663,-0.377,0.3,-0.556,-0.562,0.37,-0.407,-0.697,0.449,-0.245,-0.782,0.514,-0.07,-0.849,0.551,0.073,-0.888,0.572,0.222,-0.914,0.594,0.369,-0.925,0.577,0.516,-0.908,0.515,0.623,-0.876,0.417,0.674,-0.828,0.296,0.693,-0.777,0.169,0.698,-0.721,0.042,0.688,-0.644,-0.111,0.658,-0.556,-0.287,0.63,-0.427,-0.45,0.615,-0.255,-0.58,0.604,-0.093,-0.668,0.595,0.059,-0.718,0.608,0.213,-0.718,0.636,0.379,-0.655,0.656,0.522,-0.545,0.656,0.663,-0.414,0.617,0.779,-0.243,0.539,0.861,-0.062,0.433,0.905,0.102,0.673,0.365,-0.092,0.665,0.347,-0.057,0.654,0.335,-0.026,0.632,0.325,0.016,0.59,0.322,0.06,0.543,0.329,0.094,0.499,0.343,0.112,0.47,0.355,0.115,0.457,0.366,0.123,0.668,0.385,-0.056,0.656,0.404,-0.026,0.633,0.425,0.009,0.589,0.436,0.052,0.54,0.429,0.086,0.496,0.409,0.105,0.469,0.384,0.115,-0.196,0.341,0.508,-0.161,0.322,0.515,-0.122,0.312,0.519,-0.073,0.307,0.518,-0.01,0.309,0.504,0.048,0.318,0.473,0.093,0.331,0.437,0.125,0.34,0.407,0.141,0.347,0.394,-0.169,0.362,0.517,-0.139,0.383,0.522,-0.094,0.407,0.52,-0.034,0.421,0.501,0.022,0.419,0.471,0.078,0.398,0.438,0.121,0.368,0.412,0.73,0.502,-0.125,0.714,0.564,-0.034,0.666,0.598,0.067,0.593,0.599,0.174,0.481,0.557,0.282,0.729,0.519,-0.212,0.719,0.6,-0.095,0.673,0.652,0.028,0.6,0.66,0.166,0.497,0.647,0.275,-0.302,0.488,0.561,-0.202,0.561,0.562,-0.08,0.599,0.544,0.065,0.597,0.502,0.242,0.551,0.437,-0.374,0.501,0.524,-0.264,0.598,0.541,-0.12,0.655,0.532,0.051,0.661,0.504,0.22,0.644,0.447,0.68,-0.376,0.273,0.675,-0.396,0.344,0.665,-0.414,0.416,0.643,-0.441,0.474,0.603,-0.459,0.539,0.548,-0.467,0.586,0.469,-0.466,0.626,0.383,-0.451,0.649,0.304,-0.427,0.649,0.246,-0.407,0.641,0.21,-0.387,0.631,0.245,-0.351,0.652,0.303,-0.309,0.66,0.378,-0.264,0.658,0.476,-0.222,0.638,0.555,-0.234,0.602,0.613,-0.221,0.546,0.662,-0.254,0.467,0.684,-0.297,0.396,0.689,-0.338,0.326,0.661,-0.367,0.318,0.64,-0.358,0.358,0.625,-0.35,0.409,0.603,-0.344,0.457,0.574,-0.339,0.509,0.533,-0.341,0.558,0.468,-0.343,0.593,0.394,-0.346,0.609,0.327,-0.358,0.616,0.273,-0.37,0.62,0.232,-0.38,0.62,0.276,-0.369,0.619,0.33,-0.355,0.616,0.396,-0.344,0.61,0.471,-0.34,0.595,0.538,-0.338,0.56,0.578,-0.338,0.511,0.608,-0.339,0.458,0.628,-0.346,0.409,0.642,-0.355,0.356,0.388,0.458,0.393,0.43,0.389,0.453,0.474,0.328,0.516,0.514,0.271,0.585,0.56,0.209,0.654,0.603,0.131,0.695,0.611,0.056,0.689,0.591,0,0.666,0.56,-0.036,0.599,0.532,-0.067,0.566,0.621,-0.063,0.397,0.312,-0.087,0.572,0.45,-0.076,0.592,0.585,-0.067,0.51,0.624,0.006,0.317,0.24,-0.021,0.555,0.38,0.54,0.378,0.369,0.633,0.368,0.524,-0.557,0.546,0.691,0.268,-0.119,0.686,-0.659,0.373,0.688,0.248,-0.508,0.701,0.308,-0.23,0.672,0.037,0.23,0.55,0.211,0.267,0.668,0.029,0.426,0.758,0.025,0.034,0.692,0.63,-0.237,0.569,0.763,0.055,0.699,0.513,-0.37,0.649,0.025,0.519,0.588,-0.548,0.505,0.704,-0.215,0.343,0.593,0.162,0.217,0.669,0.112,0.151,0.648,0.716,-0.097,0.467,0.777,0.186,0.521,0.263,0.304,0.746,0.153,-0.279,0.73,0.177,-0.093,0.706,0.164,0.017,0.63,0.183,0.111,0.566,0.217,0.171,0.52,0.255,0.221,0.475,0.369,0.394,0.773,0.019,-0.229,0.716,0.41,-0.19,0.578,0.152,0.309,0.486,0.298,0.248,0.644,0.111,0.466,0.628,0.167,0.539,0.74,-0.533,-0.03,0.711,-0.038,-0.464,0.73,-0.451,-0.171,0.688,0.388,-0.462,0.61,0.091,0.272,0.767,-0.123,-0.197,0.332,0.783,0.3,0.736,-0.617,0.104,0.719,-0.682,0.225,0.649,-0.796,0.475,0.542,0.267,0.412,0.711,-0.19,-0.399,0.641,-0.515,0.433,0.772,-0.136,-0.016,0.496,0.32,0.345,0.441,0.431,0.203,0.761,-0.325,-0.066,0.438,0.448,0.309,0.657,-0.584,0.403,0.593,0.159,0.412,0.549,-0.735,0.583,0.534,-0.639,0.562,0.608,-0.62,0.496,0.735,-0.462,0.242,0.7,-0.534,0.323,0.738,-0.049,0.172,0.712,-0.127,0.255,0.765,-0.177,0.117,0.75,-0.522,0.167,0.758,-0.376,0.173,0.759,-0.248,-0.172,0.715,-0.331,-0.316,0.745,-0.234,0.212,0.558,0.21,0.357,0.665,0.107,0.572,0.481,0.499,0.176,0.565,0.537,0.127,0.705,0.106,-0.5,0.661,0.232,0.015,0.608,0.239,0.086,0.547,0.259,0.14,0.501,0.288,0.18,0.58,0.219,0.466,0.443,0.36,0.223,0.459,0.255,0.607,0.503,-0.025,0.621,-0.262,0.233,0.532,0.266,-0.724,0.64,-0.626,0.194,0.392,-0.381,0.265,0.504,0.113,0.003,0.598,0.54,0.121,0.718,0.207,0.196,0.506,0.315,0.01,0.652,-0.133,-0.027,0.646,0.502,0.196,0.675,0.363,-0.028,0.609,-0.386,0.639,0.467,-0.026,0.783,0.446,-0.511,0.504,0.429,0.432,0.02,0.674,0.438,-0.562,0.586,0.227,-0.249,0.651,0.136,0.143,0.537,0.035,0.082,0.586,-0.229,0.736,0.471,0.252,-0.514,0.644,0.153,0.79,0.391,-0.338,0.167,0.546,-0.283,0.388,0.538,-0.446,0.096,0.548,-0.25,0.134,0.588,-0.126,0.128,0.593,0.012,0.157,0.549,0.104,0.198,0.502,0.174,0.24,0.469,-0.392,-0.058,0.592,0.244,0.134,0.54,0.353,0.095,0.653,0.43,0.156,0.676,-0.184,-0.66,0.588,-0.578,-0.129,0.435,-0.326,-0.578,0.554,-0.582,0.356,0.395,0.183,0.066,0.557,-0.366,-0.213,0.593,-0.441,0.374,0.502,0.302,-0.191,0.632,-0.044,-0.732,0.602,0.09,-0.784,0.617,0.398,-0.842,0.633,0.355,0.259,0.541,-0.532,-0.299,0.463,0.339,-0.545,0.632,0.166,-0.326,0.661,-0.199,-0.213,0.648,0.313,0.315,0.479,0.207,0.422,0.375,-0.234,-0.428,0.61,0.298,0.441,0.409,0.298,-0.633,0.631,0.331,0.146,0.582,0.427,-0.648,0.607,0.092,-0.531,0.642,0.183,-0.089,0.584,0.185,-0.595,0.639,0.013,-0.1,0.646,0.129,-0.17,0.631,-0.057,-0.242,0.66,0.273,0.087,0.573,0.01,-0.616,0.633,0.134,-0.68,0.63,0.03,-0.44,0.658,-0.345,-0.35,0.584,-0.098,-0.486,0.644,-0.461,-0.453,0.501,0.075,-0.285,0.657,0.299,0.199,0.54,0.465,0.097,0.708,0.154,0.491,0.415,0.045,0.534,0.477,-0.611,0.033,0.422,-0.106,0.205,0.547,-0.005,0.217,0.524,0.08,0.243,0.484,0.19,0.302,0.414,0.397,0.21,0.601,0.267,0.348,0.417]},{"yaw":0.448,"pitch":0.027,"frame":[0.242,0.925,0.225,0.037,0.925,0.314,-0.161,0.889,0.359,-0.376,0.804,0.35,-0.541,0.676,0.306,-0.666,0.517,0.254,-0.738,0.354,0.181,-0.767,0.159,0.135,-0.751,-0.015,0.129,-0.718,-0.187,0.158,-0.662,-0.366,0.21,-0.565,-0.55,0.285,-0.429,-0.685,0.373,-0.281,-0.772,0.45,-0.116,-0.842,0.499,0.02,-0.884,0.53,0.164,-0.912,0.561,0.308,-0.925,0.551,0.458,-0.91,0.497,0.572,-0.88,0.406,0.633,-0.833,0.289,0.66,-0.783,0.163,0.673,-0.728,0.037,0.673,-0.651,-0.114,0.647,-0.567,-0.289,0.623,-0.441,-0.452,0.612,-0.271,-0.577,0.605,-0.109,-0.662,0.6,0.044,-0.71,0.615,0.2,-0.707,0.646,0.368,-0.641,0.666,0.51,-0.527,0.658,0.652,-0.395,0.609,0.771,-0.225,0.518,0.859,-0.049,0.401,0.905,0.108,0.65,0.36,-0.082,0.64,0.343,-0.048,0.627,0.332,-0.018,0.604,0.322,0.022,0.56,0.319,0.063,0.51,0.326,0.094,0.461,0.341,0.109,0.429,0.353,0.111,0.413,0.364,0.118,0.642,0.377,-0.046,0.628,0.394,-0.016,0.603,0.412,0.018,0.556,0.422,0.058,0.506,0.418,0.089,0.457,0.403,0.104,0.427,0.381,0.111,-0.259,0.336,0.46,-0.225,0.316,0.47,-0.187,0.306,0.477,-0.137,0.301,0.479,-0.073,0.305,0.468,-0.014,0.317,0.441,0.032,0.331,0.408,0.065,0.341,0.379,0.082,0.348,0.367,-0.232,0.356,0.473,-0.203,0.376,0.481,-0.157,0.397,0.482,-0.096,0.409,0.468,-0.039,0.407,0.441,0.018,0.389,0.41,0.062,0.365,0.385,0.719,0.495,-0.105,0.697,0.559,-0.015,0.64,0.596,0.082,0.555,0.598,0.182,0.429,0.555,0.282,0.724,0.51,-0.189,0.706,0.594,-0.074,0.649,0.648,0.043,0.562,0.658,0.176,0.447,0.646,0.279,-0.349,0.486,0.514,-0.253,0.556,0.524,-0.131,0.595,0.515,0.012,0.592,0.481,0.186,0.547,0.424,-0.414,0.501,0.474,-0.309,0.594,0.499,-0.166,0.649,0.501,0,0.655,0.484,0.166,0.641,0.436,0.632,-0.381,0.264,0.622,-0.4,0.333,0.606,-0.417,0.406,0.578,-0.441,0.463,0.531,-0.457,0.526,0.472,-0.465,0.57,0.391,-0.464,0.607,0.306,-0.449,0.626,0.227,-0.425,0.622,0.167,-0.405,0.608,0.129,-0.387,0.594,0.163,-0.35,0.621,0.221,-0.307,0.635,0.297,-0.262,0.638,0.396,-0.221,0.622,0.479,-0.233,0.589,0.543,-0.22,0.537,0.6,-0.254,0.461,0.627,-0.299,0.39,0.638,-0.342,0.319,0.612,-0.371,0.307,0.587,-0.36,0.347,0.567,-0.351,0.398,0.54,-0.343,0.445,0.506,-0.337,0.495,0.459,-0.338,0.542,0.392,-0.34,0.574,0.316,-0.344,0.588,0.248,-0.357,0.591,0.192,-0.369,0.59,0.151,-0.38,0.587,0.194,-0.368,0.59,0.249,-0.354,0.592,0.317,-0.342,0.59,0.394,-0.339,0.577,0.464,-0.338,0.545,0.51,-0.337,0.499,0.545,-0.34,0.447,0.571,-0.348,0.399,0.589,-0.358,0.345,0.331,0.454,0.385,0.368,0.385,0.445,0.407,0.325,0.509,0.443,0.269,0.579,0.484,0.209,0.65,0.524,0.132,0.69,0.531,0.057,0.683,0.512,0.001,0.658,0.487,-0.034,0.59,0.465,-0.065,0.554,0.569,-0.062,0.39,0.234,-0.086,0.553,0.374,-0.075,0.577,0.522,-0.066,0.502,0.577,0.005,0.312,0.166,-0.02,0.533,0.324,0.537,0.372,0.315,0.629,0.365,0.456,-0.557,0.53,0.681,0.261,-0.108,0.641,-0.664,0.367,0.688,0.237,-0.491,0.7,0.299,-0.215,0.631,0.034,0.23,0.503,0.206,0.262,0.613,0.028,0.426,0.737,0.02,0.044,0.686,0.62,-0.216,0.54,0.761,0.067,0.7,0.501,-0.349,0.583,0.026,0.518,0.523,-0.549,0.491,0.653,-0.219,0.338,0.552,0.158,0.214,0.634,0.108,0.154,0.632,0.71,-0.08,0.426,0.776,0.191,0.47,0.258,0.297,0.744,0.145,-0.265,0.722,0.171,-0.081,0.688,0.158,0.025,0.601,0.177,0.113,0.529,0.212,0.168,0.477,0.25,0.215,0.416,0.365,0.388,0.767,0.011,-0.214,0.709,0.4,-0.172,0.529,0.148,0.304,0.438,0.295,0.24,0.585,0.109,0.466,0.561,0.166,0.539,0.723,-0.539,-0.029,0.709,-0.051,-0.453,0.72,-0.458,-0.167,0.69,0.377,-0.443,0.565,0.088,0.268,0.759,-0.13,-0.186,0.284,0.782,0.297,0.711,-0.624,0.101,0.686,-0.688,0.221,0.594,-0.8,0.466,0.482,0.263,0.407,0.705,-0.201,-0.391,0.583,-0.516,0.423,0.756,-0.142,-0.007,0.44,0.316,0.339,0.393,0.429,0.195,0.747,-0.331,-0.062,0.383,0.444,0.302,0.607,-0.587,0.395,0.536,0.156,0.408,0.484,-0.738,0.568,0.468,-0.641,0.548,0.549,-0.623,0.486,0.694,-0.467,0.236,0.655,-0.538,0.315,0.705,-0.053,0.176,0.668,-0.131,0.253,0.738,-0.181,0.121,0.718,-0.528,0.163,0.723,-0.381,0.171,0.749,-0.256,-0.165,0.707,-0.341,-0.312,0.706,-0.239,0.211,0.503,0.206,0.351,0.595,0.106,0.573,0.437,0.496,0.173,0.531,0.534,0.131,0.706,0.094,-0.485,0.64,0.227,0.021,0.579,0.233,0.088,0.512,0.254,0.137,0.459,0.285,0.174,0.517,0.216,0.464,0.395,0.358,0.215,0.387,0.253,0.596,0.426,-0.024,0.609,-0.313,0.231,0.48,0.199,-0.724,0.612,-0.642,0.2,0.312,-0.422,0.265,0.446,0.043,0.003,0.57,0.458,0.122,0.71,0.144,0.194,0.485,0.236,0.011,0.633,-0.198,-0.026,0.6,0.424,0.196,0.666,0.285,-0.029,0.591,-0.416,0.638,0.415,-0.069,0.78,0.421,-0.535,0.506,0.366,0.353,0.02,0.658,0.368,-0.561,0.567,0.149,-0.246,0.624,0.072,0.141,0.511,-0.031,0.082,0.553,-0.265,0.731,0.432,0.181,-0.512,0.613,0.106,0.788,0.377,-0.383,0.168,0.488,-0.334,0.385,0.488,-0.484,0.1,0.48,-0.304,0.133,0.534,-0.186,0.127,0.548,-0.049,0.156,0.514,0.043,0.196,0.475,0.114,0.238,0.447,-0.438,-0.054,0.524,0.177,0.133,0.519,0.276,0.095,0.636,0.352,0.155,0.663,-0.235,-0.652,0.529,-0.6,-0.121,0.351,-0.368,-0.57,0.486,-0.601,0.359,0.322,0.115,0.066,0.533,-0.415,-0.209,0.525,-0.477,0.375,0.442,0.223,-0.19,0.611,-0.101,-0.727,0.553,0.031,-0.782,0.578,0.331,-0.843,0.61,0.287,0.257,0.526,-0.557,-0.291,0.381,0.268,-0.544,0.607,0.089,-0.324,0.626,-0.261,-0.211,0.594,0.25,0.312,0.463,0.149,0.418,0.356,-0.289,-0.422,0.55,0.24,0.437,0.395,0.228,-0.632,0.604,0.258,0.144,0.565,0.357,-0.649,0.587,0.023,-0.528,0.604,0.11,-0.087,0.559,0.117,-0.593,0.606,-0.059,-0.098,0.611,0.054,-0.168,0.6,-0.127,-0.239,0.617,0.202,0.086,0.554,-0.054,-0.613,0.589,0.069,-0.678,0.594,-0.039,-0.437,0.615,-0.394,-0.345,0.517,-0.16,-0.482,0.593,-0.492,-0.444,0.423,0.001,-0.283,0.62,0.232,0.197,0.522,0.383,0.097,0.695,0.097,0.484,0.393,-0.011,0.527,0.451,-0.63,0.04,0.338,-0.164,0.202,0.505,-0.065,0.214,0.489,0.019,0.24,0.454,0.131,0.301,0.392,0.324,0.209,0.586,0.207,0.346,0.4]},{"yaw":0.389,"pitch":0.025,"frame":[0.212,0.925,0.187,0.004,0.923,0.265,-0.193,0.884,0.296,-0.404,0.796,0.277,-0.563,0.667,0.226,-0.681,0.509,0.17,-0.747,0.348,0.095,-0.772,0.155,0.049,-0.758,-0.017,0.046,-0.727,-0.187,0.08,-0.673,-0.366,0.139,-0.58,-0.548,0.223,-0.451,-0.682,0.321,-0.308,-0.768,0.408,-0.149,-0.838,0.467,-0.017,-0.881,0.507,0.121,-0.91,0.548,0.261,-0.925,0.549,0.409,-0.912,0.504,0.528,-0.884,0.421,0.594,-0.838,0.308,0.632,-0.789,0.185,0.655,-0.734,0.061,0.67,-0.657,-0.087,0.659,-0.574,-0.261,0.645,-0.45,-0.424,0.639,-0.283,-0.554,0.636,-0.121,-0.643,0.631,0.033,-0.695,0.643,0.191,-0.696,0.665,0.362,-0.631,0.676,0.509,-0.519,0.657,0.655,-0.391,0.597,0.774,-0.228,0.498,0.862,-0.061,0.376,0.908,0.083,0.641,0.347,-0.077,0.63,0.331,-0.044,0.615,0.321,-0.014,0.588,0.312,0.023,0.543,0.309,0.061,0.492,0.316,0.089,0.442,0.329,0.101,0.408,0.34,0.101,0.392,0.35,0.107,0.632,0.364,-0.043,0.616,0.381,-0.014,0.587,0.4,0.019,0.538,0.411,0.055,0.486,0.405,0.083,0.437,0.39,0.096,0.405,0.367,0.101,-0.28,0.331,0.401,-0.247,0.312,0.413,-0.209,0.303,0.422,-0.161,0.299,0.426,-0.098,0.302,0.419,-0.037,0.312,0.396,0.012,0.325,0.365,0.048,0.333,0.337,0.067,0.339,0.327,-0.255,0.35,0.416,-0.226,0.369,0.425,-0.181,0.39,0.429,-0.12,0.402,0.418,-0.063,0.399,0.395,-0.003,0.381,0.365,0.045,0.357,0.343,0.706,0.488,-0.099,0.677,0.551,-0.013,0.616,0.585,0.078,0.53,0.586,0.173,0.404,0.543,0.266,0.712,0.506,-0.182,0.687,0.589,-0.072,0.626,0.639,0.04,0.536,0.647,0.166,0.42,0.634,0.262,-0.379,0.476,0.446,-0.283,0.545,0.462,-0.162,0.582,0.459,-0.018,0.579,0.436,0.158,0.535,0.393,-0.442,0.491,0.403,-0.34,0.582,0.433,-0.199,0.637,0.442,-0.031,0.643,0.437,0.137,0.628,0.401,0.604,-0.38,0.271,0.592,-0.396,0.338,0.572,-0.41,0.409,0.538,-0.432,0.465,0.487,-0.446,0.525,0.424,-0.453,0.566,0.343,-0.451,0.598,0.26,-0.437,0.61,0.186,-0.416,0.602,0.13,-0.399,0.583,0.094,-0.383,0.565,0.124,-0.346,0.594,0.176,-0.303,0.613,0.248,-0.257,0.619,0.347,-0.217,0.608,0.43,-0.23,0.581,0.496,-0.218,0.534,0.559,-0.253,0.463,0.593,-0.297,0.394,0.607,-0.341,0.325,0.582,-0.369,0.311,0.555,-0.356,0.348,0.533,-0.346,0.397,0.502,-0.337,0.442,0.463,-0.331,0.49,0.414,-0.332,0.532,0.346,-0.334,0.56,0.273,-0.337,0.57,0.209,-0.35,0.57,0.157,-0.364,0.566,0.117,-0.376,0.561,0.159,-0.363,0.567,0.21,-0.349,0.572,0.275,-0.336,0.572,0.348,-0.333,0.564,0.418,-0.332,0.537,0.466,-0.332,0.494,0.506,-0.335,0.445,0.536,-0.345,0.399,0.557,-0.356,0.348,0.303,0.446,0.365,0.336,0.379,0.427,0.371,0.32,0.492,0.403,0.265,0.564,0.439,0.206,0.637,0.472,0.128,0.68,0.478,0.053,0.674,0.462,-0.002,0.649,0.44,-0.037,0.581,0.42,-0.068,0.544,0.53,-0.065,0.388,0.199,-0.083,0.534,0.333,-0.076,0.562,0.48,-0.069,0.497,0.544,-0.001,0.31,0.134,-0.02,0.509,0.295,0.528,0.35,0.285,0.62,0.339,0.413,-0.549,0.529,0.672,0.253,-0.099,0.603,-0.667,0.384,0.702,0.228,-0.475,0.695,0.29,-0.204,0.605,0.026,0.236,0.476,0.198,0.255,0.572,0.023,0.426,0.724,0.011,0.061,0.673,0.62,-0.214,0.515,0.759,0.056,0.698,0.501,-0.343,0.538,0.022,0.515,0.483,-0.542,0.493,0.622,-0.221,0.344,0.529,0.15,0.213,0.613,0.1,0.16,0.612,0.709,-0.083,0.398,0.774,0.171,0.441,0.251,0.287,0.748,0.135,-0.246,0.71,0.164,-0.066,0.672,0.151,0.036,0.581,0.169,0.115,0.507,0.203,0.164,0.453,0.24,0.206,0.384,0.358,0.373,0.772,0.001,-0.19,0.701,0.392,-0.162,0.498,0.141,0.299,0.412,0.284,0.229,0.544,0.104,0.463,0.517,0.161,0.533,0.714,-0.547,-0.002,0.728,-0.062,-0.429,0.724,-0.467,-0.138,0.696,0.371,-0.433,0.538,0.081,0.267,0.764,-0.141,-0.16,0.253,0.779,0.266,0.689,-0.63,0.124,0.656,-0.694,0.242,0.548,-0.804,0.481,0.447,0.257,0.395,0.723,-0.213,-0.365,0.546,-0.513,0.43,0.751,-0.152,0.016,0.41,0.309,0.326,0.371,0.416,0.181,0.743,-0.341,-0.036,0.358,0.433,0.286,0.572,-0.587,0.406,0.5,0.15,0.4,0.435,-0.738,0.574,0.423,-0.638,0.55,0.507,-0.621,0.494,0.666,-0.471,0.25,0.623,-0.54,0.328,0.686,-0.061,0.19,0.64,-0.137,0.262,0.723,-0.189,0.14,0.694,-0.534,0.183,0.7,-0.385,0.189,0.754,-0.267,-0.138,0.722,-0.351,-0.283,0.682,-0.243,0.224,0.47,0.2,0.343,0.548,0.101,0.569,0.415,0.483,0.161,0.509,0.522,0.123,0.724,0.084,-0.464,0.625,0.219,0.025,0.561,0.225,0.088,0.492,0.244,0.132,0.438,0.273,0.164,0.478,0.211,0.455,0.371,0.345,0.201,0.347,0.249,0.577,0.382,-0.025,0.595,-0.339,0.227,0.42,0.156,-0.722,0.599,-0.658,0.194,0.232,-0.446,0.26,0.378,0.011,0,0.536,0.408,0.119,0.696,0.116,0.188,0.454,0.195,0.011,0.612,-0.23,-0.028,0.551,0.379,0.193,0.649,0.246,-0.027,0.571,-0.443,0.628,0.343,-0.102,0.772,0.366,-0.557,0.497,0.289,0.306,0.02,0.639,0.325,-0.553,0.56,0.108,-0.245,0.598,0.044,0.137,0.476,-0.061,0.078,0.513,-0.298,0.722,0.367,0.141,-0.506,0.592,0.073,0.782,0.334,-0.412,0.165,0.424,-0.361,0.377,0.423,-0.508,0.097,0.41,-0.335,0.131,0.475,-0.218,0.124,0.496,-0.08,0.151,0.47,0.015,0.19,0.436,0.088,0.231,0.412,-0.467,-0.055,0.458,0.146,0.129,0.492,0.235,0.093,0.615,0.309,0.153,0.643,-0.266,-0.648,0.488,-0.621,-0.123,0.278,-0.397,-0.567,0.435,-0.619,0.352,0.243,0.086,0.063,0.504,-0.445,-0.209,0.465,-0.5,0.367,0.369,0.183,-0.188,0.59,-0.134,-0.722,0.522,-0.008,-0.779,0.555,0.283,-0.842,0.607,0.254,0.253,0.505,-0.58,-0.292,0.314,0.226,-0.537,0.593,0.047,-0.321,0.596,-0.295,-0.211,0.545,0.221,0.307,0.439,0.128,0.409,0.321,-0.32,-0.42,0.501,0.215,0.427,0.37,0.187,-0.629,0.591,0.222,0.141,0.544,0.313,-0.645,0.583,-0.011,-0.522,0.576,0.077,-0.088,0.532,0.079,-0.589,0.585,-0.094,-0.1,0.573,0.017,-0.169,0.569,-0.162,-0.239,0.576,0.168,0.084,0.531,-0.088,-0.608,0.558,0.03,-0.675,0.572,-0.075,-0.433,0.581,-0.423,-0.344,0.461,-0.193,-0.478,0.554,-0.518,-0.443,0.363,-0.039,-0.282,0.586,0.2,0.193,0.498,0.336,0.095,0.677,0.075,0.473,0.354,-0.038,0.517,0.404,-0.649,0.037,0.26,-0.192,0.198,0.452,-0.092,0.209,0.442,-0.006,0.235,0.413,0.109,0.293,0.358,0.286,0.205,0.565,0.183,0.337,0.373]},{"yaw":0.304,"pitch":0.022,"frame":[0.168,0.925,0.143,-0.043,0.92,0.208,-0.239,0.878,0.222,-0.439,0.788,0.186,-0.585,0.658,0.121,-0.69,0.499,0.055,-0.748,0.338,-0.026,-0.766,0.146,-0.076,-0.751,-0.024,-0.078,-0.722,-0.193,-0.039,-0.673,-0.37,0.025,-0.587,-0.553,0.12,-0.471,-0.686,0.23,-0.34,-0.77,0.332,-0.187,-0.838,0.406,-0.061,-0.879,0.461,0.072,-0.908,0.513,0.208,-0.925,0.528,0.357,-0.914,0.494,0.479,-0.885,0.421,0.553,-0.84,0.317,0.599,-0.791,0.198,0.634,-0.738,0.079,0.662,-0.663,-0.066,0.664,-0.58,-0.237,0.661,-0.458,-0.399,0.663,-0.29,-0.529,0.663,-0.128,-0.619,0.661,0.027,-0.672,0.672,0.187,-0.674,0.688,0.362,-0.611,0.69,0.515,-0.501,0.659,0.662,-0.378,0.59,0.782,-0.224,0.478,0.868,-0.067,0.343,0.911,0.062,0.614,0.339,-0.067,0.599,0.326,-0.035,0.583,0.318,-0.006,0.556,0.311,0.029,0.512,0.309,0.063,0.462,0.314,0.085,0.412,0.325,0.092,0.377,0.333,0.088,0.36,0.341,0.092,0.604,0.356,-0.033,0.587,0.372,-0.006,0.558,0.389,0.025,0.509,0.4,0.058,0.459,0.395,0.08,0.408,0.38,0.087,0.375,0.358,0.089,-0.31,0.319,0.321,-0.279,0.305,0.336,-0.246,0.299,0.348,-0.203,0.297,0.356,-0.147,0.301,0.354,-0.091,0.31,0.336,-0.042,0.322,0.309,-0.007,0.329,0.283,0.013,0.335,0.273,-0.287,0.337,0.339,-0.262,0.355,0.35,-0.222,0.375,0.358,-0.167,0.387,0.352,-0.113,0.386,0.335,-0.053,0.371,0.308,-0.009,0.351,0.287,0.692,0.488,-0.083,0.656,0.548,-0.002,0.589,0.579,0.081,0.494,0.579,0.165,0.357,0.536,0.246,0.705,0.509,-0.164,0.672,0.59,-0.061,0.603,0.637,0.043,0.503,0.644,0.159,0.374,0.63,0.244,-0.43,0.459,0.359,-0.344,0.528,0.383,-0.23,0.567,0.392,-0.086,0.568,0.381,0.097,0.528,0.351,-0.49,0.476,0.31,-0.399,0.567,0.349,-0.266,0.624,0.371,-0.101,0.635,0.38,0.071,0.623,0.357,0.54,-0.376,0.282,0.522,-0.393,0.346,0.499,-0.407,0.412,0.459,-0.429,0.464,0.404,-0.443,0.518,0.339,-0.45,0.552,0.262,-0.448,0.58,0.184,-0.433,0.585,0.118,-0.412,0.571,0.069,-0.395,0.547,0.036,-0.379,0.521,0.058,-0.343,0.553,0.101,-0.301,0.578,0.164,-0.257,0.59,0.256,-0.217,0.587,0.338,-0.231,0.566,0.406,-0.218,0.524,0.475,-0.253,0.459,0.515,-0.296,0.397,0.536,-0.337,0.333,0.516,-0.366,0.317,0.487,-0.354,0.351,0.462,-0.343,0.396,0.426,-0.335,0.437,0.382,-0.33,0.48,0.329,-0.332,0.517,0.264,-0.333,0.54,0.197,-0.336,0.543,0.141,-0.347,0.538,0.096,-0.36,0.53,0.058,-0.371,0.522,0.096,-0.36,0.531,0.14,-0.346,0.54,0.196,-0.334,0.546,0.263,-0.331,0.544,0.332,-0.331,0.522,0.384,-0.331,0.484,0.429,-0.333,0.44,0.463,-0.343,0.398,0.487,-0.354,0.351,0.249,0.438,0.338,0.276,0.373,0.401,0.304,0.314,0.467,0.328,0.259,0.542,0.356,0.2,0.618,0.381,0.123,0.663,0.385,0.047,0.658,0.373,-0.008,0.632,0.355,-0.043,0.563,0.34,-0.072,0.526,0.468,-0.066,0.38,0.125,-0.08,0.503,0.252,-0.076,0.538,0.408,-0.071,0.484,0.493,-0.002,0.304,0.064,-0.018,0.47,0.241,0.521,0.321,0.23,0.615,0.308,0.346,-0.547,0.514,0.655,0.252,-0.084,0.556,-0.671,0.39,0.722,0.226,-0.45,0.69,0.29,-0.186,0.56,0.024,0.238,0.429,0.195,0.245,0.509,0.022,0.423,0.699,0.011,0.079,0.666,0.627,-0.202,0.485,0.762,0.048,0.701,0.507,-0.325,0.463,0.017,0.508,0.419,-0.539,0.484,0.561,-0.219,0.348,0.486,0.147,0.209,0.576,0.099,0.165,0.597,0.714,-0.08,0.357,0.775,0.151,0.39,0.246,0.274,0.749,0.134,-0.219,0.691,0.165,-0.048,0.644,0.152,0.048,0.547,0.168,0.119,0.468,0.199,0.16,0.409,0.234,0.195,0.327,0.352,0.351,0.766,-0.001,-0.162,0.693,0.392,-0.144,0.446,0.138,0.291,0.365,0.277,0.212,0.478,0.101,0.457,0.444,0.156,0.524,0.701,-0.553,0.019,0.746,-0.067,-0.401,0.721,-0.475,-0.113,0.71,0.373,-0.411,0.491,0.078,0.263,0.76,-0.146,-0.132,0.202,0.777,0.228,0.665,-0.635,0.142,0.622,-0.698,0.255,0.493,-0.807,0.482,0.385,0.253,0.38,0.737,-0.221,-0.337,0.486,-0.509,0.43,0.733,-0.156,0.039,0.356,0.304,0.308,0.334,0.407,0.16,0.73,-0.348,-0.012,0.308,0.423,0.263,0.52,-0.588,0.409,0.438,0.147,0.392,0.371,-0.74,0.564,0.358,-0.638,0.538,0.447,-0.621,0.49,0.62,-0.469,0.265,0.575,-0.54,0.338,0.649,-0.063,0.201,0.592,-0.137,0.269,0.693,-0.191,0.157,0.661,-0.537,0.201,0.657,-0.383,0.207,0.749,-0.275,-0.111,0.73,-0.36,-0.255,0.637,-0.241,0.238,0.413,0.196,0.331,0.468,0.097,0.562,0.379,0.475,0.144,0.478,0.515,0.115,0.743,0.08,-0.436,0.596,0.218,0.034,0.529,0.223,0.091,0.458,0.241,0.127,0.4,0.267,0.151,0.41,0.206,0.443,0.331,0.336,0.18,0.271,0.243,0.55,0.296,-0.028,0.573,-0.381,0.22,0.336,0.095,-0.72,0.567,-0.676,0.184,0.12,-0.484,0.25,0.286,-0.055,-0.001,0.483,0.316,0.114,0.674,0.056,0.185,0.409,0.114,0.012,0.579,-0.292,-0.03,0.476,0.296,0.188,0.624,0.166,-0.026,0.541,-0.485,0.617,0.249,-0.159,0.766,0.3,-0.586,0.485,0.187,0.218,0.019,0.61,0.261,-0.549,0.54,0.036,-0.242,0.558,-0.017,0.133,0.425,-0.124,0.075,0.452,-0.348,0.713,0.286,0.081,-0.499,0.558,0.017,0.778,0.282,-0.457,0.159,0.334,-0.404,0.362,0.338,-0.548,0.088,0.311,-0.387,0.128,0.39,-0.277,0.122,0.423,-0.139,0.149,0.408,-0.042,0.186,0.383,0.032,0.227,0.365,-0.513,-0.06,0.361,0.08,0.127,0.45,0.154,0.092,0.584,0.226,0.149,0.614,-0.31,-0.648,0.415,-0.646,-0.129,0.168,-0.436,-0.57,0.349,-0.64,0.342,0.134,0.021,0.062,0.457,-0.495,-0.212,0.373,-0.537,0.355,0.272,0.109,-0.185,0.556,-0.182,-0.72,0.464,-0.06,-0.777,0.512,0.222,-0.841,0.589,0.186,0.247,0.472,-0.609,-0.298,0.21,0.165,-0.531,0.565,-0.021,-0.316,0.549,-0.355,-0.213,0.466,0.16,0.3,0.403,0.074,0.403,0.277,-0.372,-0.421,0.421,0.161,0.419,0.333,0.126,-0.625,0.562,0.15,0.138,0.511,0.25,-0.643,0.564,-0.068,-0.517,0.53,0.008,-0.085,0.487,0.022,-0.584,0.548,-0.164,-0.101,0.512,-0.054,-0.167,0.519,-0.229,-0.239,0.51,0.097,0.083,0.493,-0.141,-0.603,0.505,-0.026,-0.672,0.533,-0.135,-0.428,0.525,-0.47,-0.347,0.372,-0.249,-0.475,0.487,-0.549,-0.449,0.265,-0.108,-0.279,0.531,0.133,0.189,0.46,0.245,0.092,0.649,0.018,0.466,0.303,-0.099,0.507,0.345,-0.671,0.028,0.147,-0.243,0.195,0.381,-0.146,0.206,0.379,-0.06,0.231,0.357,0.056,0.288,0.312,0.212,0.2,0.536,0.127,0.331,0.334]},{"yaw":0.239,"pitch":0.013,"frame":[0.13,0.925,0.128,-0.081,0.917,0.18,-0.273,0.873,0.172,-0.465,0.783,0.116,-0.601,0.653,0.035,-0.694,0.493,-0.043,-0.741,0.33,-0.134,-0.754,0.138,-0.191,-0.736,-0.034,-0.197,-0.708,-0.203,-0.16,-0.662,-0.381,-0.096,-0.585,-0.563,0,-0.479,-0.695,0.116,-0.36,-0.777,0.226,-0.219,-0.842,0.309,-0.099,-0.881,0.372,0.025,-0.909,0.434,0.154,-0.925,0.464,0.301,-0.917,0.45,0.427,-0.894,0.381,0.508,-0.852,0.286,0.561,-0.805,0.174,0.604,-0.751,0.063,0.642,-0.677,-0.074,0.656,-0.594,-0.237,0.665,-0.471,-0.392,0.677,-0.301,-0.515,0.688,-0.134,-0.597,0.691,0.024,-0.645,0.701,0.187,-0.641,0.708,0.366,-0.573,0.698,0.521,-0.461,0.658,0.669,-0.34,0.579,0.789,-0.191,0.455,0.873,-0.045,0.311,0.914,0.069,0.594,0.336,-0.047,0.578,0.322,-0.016,0.56,0.314,0.011,0.533,0.308,0.043,0.487,0.306,0.073,0.436,0.312,0.091,0.386,0.321,0.093,0.35,0.327,0.086,0.333,0.335,0.088,0.582,0.352,-0.014,0.565,0.369,0.013,0.534,0.385,0.041,0.486,0.394,0.07,0.436,0.389,0.088,0.384,0.374,0.091,0.349,0.351,0.088,-0.341,0.307,0.243,-0.312,0.294,0.26,-0.28,0.288,0.274,-0.239,0.286,0.287,-0.184,0.29,0.29,-0.128,0.299,0.277,-0.078,0.311,0.254,-0.042,0.318,0.231,-0.022,0.323,0.223,-0.32,0.324,0.264,-0.296,0.342,0.278,-0.256,0.361,0.29,-0.203,0.374,0.29,-0.149,0.374,0.278,-0.09,0.36,0.255,-0.044,0.34,0.236,0.678,0.493,-0.054,0.636,0.553,0.021,0.563,0.583,0.099,0.461,0.58,0.172,0.318,0.533,0.238,0.696,0.515,-0.131,0.656,0.596,-0.034,0.579,0.643,0.064,0.47,0.648,0.168,0.334,0.63,0.239,-0.471,0.456,0.277,-0.393,0.526,0.309,-0.284,0.566,0.329,-0.141,0.566,0.332,0.047,0.523,0.316,-0.526,0.474,0.224,-0.445,0.568,0.273,-0.321,0.627,0.308,-0.158,0.636,0.333,0.018,0.622,0.324,0.488,-0.386,0.266,0.465,-0.4,0.326,0.437,-0.41,0.389,0.396,-0.426,0.437,0.339,-0.438,0.484,0.273,-0.445,0.514,0.197,-0.442,0.539,0.123,-0.43,0.533,0.06,-0.412,0.511,0.013,-0.397,0.478,-0.019,-0.381,0.447,0.002,-0.348,0.482,0.042,-0.309,0.514,0.102,-0.267,0.539,0.189,-0.23,0.549,0.269,-0.244,0.529,0.338,-0.232,0.493,0.409,-0.268,0.435,0.452,-0.309,0.377,0.477,-0.349,0.317,0.464,-0.377,0.298,0.431,-0.364,0.329,0.404,-0.352,0.37,0.365,-0.343,0.407,0.318,-0.338,0.445,0.263,-0.34,0.48,0.2,-0.341,0.497,0.136,-0.344,0.491,0.082,-0.354,0.48,0.039,-0.365,0.465,0.002,-0.375,0.452,0.04,-0.364,0.466,0.081,-0.352,0.483,0.134,-0.341,0.496,0.199,-0.339,0.503,0.265,-0.34,0.484,0.319,-0.34,0.45,0.366,-0.344,0.41,0.404,-0.355,0.372,0.431,-0.365,0.329,0.206,0.427,0.311,0.228,0.359,0.376,0.251,0.299,0.444,0.272,0.243,0.52,0.295,0.182,0.595,0.316,0.104,0.638,0.319,0.028,0.63,0.31,-0.026,0.604,0.295,-0.061,0.532,0.282,-0.089,0.493,0.417,-0.083,0.36,0.077,-0.094,0.454,0.195,-0.093,0.503,0.352,-0.089,0.457,0.446,-0.018,0.291,0.018,-0.032,0.414,0.197,0.515,0.296,0.186,0.611,0.285,0.285,-0.551,0.475,0.642,0.249,-0.063,0.508,-0.684,0.364,0.733,0.224,-0.416,0.686,0.289,-0.16,0.52,0.012,0.235,0.388,0.184,0.237,0.455,0.005,0.411,0.672,0.002,0.092,0.657,0.633,-0.169,0.457,0.765,0.064,0.7,0.513,-0.288,0.406,-0.001,0.492,0.361,-0.544,0.449,0.509,-0.232,0.334,0.449,0.137,0.206,0.543,0.09,0.168,0.579,0.719,-0.053,0.321,0.776,0.152,0.347,0.235,0.263,0.743,0.13,-0.191,0.676,0.161,-0.027,0.622,0.146,0.063,0.518,0.16,0.124,0.437,0.191,0.158,0.375,0.225,0.188,0.281,0.339,0.334,0.754,-0.008,-0.136,0.685,0.394,-0.115,0.401,0.125,0.281,0.328,0.267,0.201,0.424,0.084,0.444,0.388,0.139,0.51,0.675,-0.567,0.017,0.748,-0.073,-0.375,0.705,-0.489,-0.108,0.715,0.375,-0.375,0.448,0.066,0.256,0.745,-0.155,-0.113,0.159,0.775,0.209,0.633,-0.649,0.13,0.582,-0.711,0.235,0.439,-0.817,0.445,0.335,0.239,0.366,0.734,-0.231,-0.317,0.43,-0.515,0.403,0.708,-0.166,0.051,0.312,0.292,0.294,0.301,0.4,0.148,0.707,-0.359,-0.005,0.268,0.413,0.246,0.47,-0.599,0.383,0.388,0.131,0.379,0.31,-0.749,0.522,0.297,-0.645,0.498,0.392,-0.631,0.454,0.577,-0.479,0.251,0.528,-0.55,0.318,0.613,-0.074,0.203,0.549,-0.15,0.262,0.661,-0.202,0.161,0.624,-0.548,0.189,0.617,-0.393,0.201,0.733,-0.286,-0.097,0.722,-0.374,-0.242,0.597,-0.251,0.234,0.366,0.183,0.32,0.408,0.079,0.546,0.348,0.47,0.141,0.45,0.515,0.122,0.75,0.076,-0.404,0.574,0.213,0.047,0.503,0.217,0.098,0.429,0.235,0.128,0.37,0.26,0.146,0.357,0.19,0.429,0.298,0.328,0.166,0.214,0.227,0.518,0.237,-0.046,0.538,-0.411,0.209,0.252,0.04,-0.727,0.499,-0.68,0.174,0.013,-0.51,0.241,0.195,-0.104,-0.014,0.419,0.25,0.096,0.645,0.012,0.172,0.359,0.062,-0.004,0.529,-0.335,-0.042,0.391,0.234,0.171,0.595,0.114,-0.043,0.499,-0.515,0.613,0.169,-0.203,0.762,0.253,-0.607,0.481,0.095,0.16,0.001,0.574,0.201,-0.553,0.5,-0.019,-0.254,0.491,-0.061,0.121,0.367,-0.171,0.064,0.383,-0.385,0.71,0.22,0.026,-0.504,0.492,-0.027,0.775,0.252,-0.483,0.149,0.243,-0.438,0.353,0.255,-0.569,0.077,0.209,-0.418,0.117,0.302,-0.314,0.111,0.344,-0.179,0.137,0.34,-0.08,0.175,0.325,-0.006,0.215,0.315,-0.538,-0.071,0.257,0.034,0.113,0.4,0.1,0.075,0.543,0.167,0.132,0.579,-0.341,-0.654,0.315,-0.649,-0.141,0.054,-0.457,-0.579,0.242,-0.651,0.335,0.034,-0.025,0.049,0.4,-0.518,-0.224,0.268,-0.563,0.349,0.179,0.054,-0.199,0.498,-0.22,-0.725,0.372,-0.105,-0.781,0.428,0.164,-0.847,0.532,0.135,0.233,0.435,-0.613,-0.31,0.095,0.107,-0.536,0.509,-0.075,-0.325,0.474,-0.393,-0.224,0.373,0.113,0.287,0.365,0.035,0.393,0.237,-0.405,-0.43,0.322,0.119,0.408,0.299,0.07,-0.632,0.501,0.099,0.123,0.469,0.189,-0.65,0.52,-0.118,-0.524,0.45,-0.04,-0.099,0.425,-0.03,-0.591,0.477,-0.214,-0.114,0.437,-0.105,-0.18,0.449,-0.277,-0.25,0.427,0.05,0.068,0.444,-0.186,-0.61,0.418,-0.076,-0.677,0.454,-0.184,-0.436,0.441,-0.495,-0.358,0.267,-0.291,-0.483,0.397,-0.56,-0.46,0.151,-0.161,-0.288,0.454,0.085,0.175,0.416,0.182,0.074,0.614,-0.026,0.459,0.26,-0.147,0.502,0.293,-0.673,0.017,0.035,-0.279,0.184,0.307,-0.184,0.195,0.313,-0.097,0.219,0.299,0.019,0.277,0.266,0.156,0.185,0.499,0.088,0.319,0.295]},{"yaw":0.148,"pitch":0.008,"frame":[0.083,0.925,0.101,-0.129,0.914,0.129,-0.318,0.87,0.101,-0.501,0.778,0.026,-0.625,0.645,-0.071,-0.704,0.485,-0.159,-0.74,0.322,-0.257,-0.746,0.13,-0.317,-0.729,-0.042,-0.322,-0.705,-0.211,-0.283,-0.667,-0.387,-0.213,-0.603,-0.567,-0.109,-0.517,-0.696,0.018,-0.419,-0.775,0.142,-0.297,-0.84,0.238,-0.191,-0.88,0.312,-0.078,-0.908,0.384,0.045,-0.925,0.423,0.192,-0.92,0.417,0.326,-0.9,0.366,0.419,-0.86,0.283,0.488,-0.816,0.179,0.547,-0.765,0.074,0.605,-0.692,-0.057,0.639,-0.61,-0.215,0.665,-0.487,-0.366,0.687,-0.314,-0.487,0.702,-0.147,-0.568,0.709,0.011,-0.614,0.72,0.176,-0.61,0.722,0.358,-0.544,0.707,0.516,-0.433,0.659,0.668,-0.317,0.571,0.79,-0.178,0.431,0.876,-0.045,0.275,0.916,0.053,0.558,0.326,-0.033,0.541,0.312,-0.004,0.522,0.302,0.021,0.493,0.295,0.051,0.444,0.293,0.077,0.393,0.299,0.089,0.342,0.31,0.087,0.306,0.316,0.077,0.288,0.324,0.078,0.545,0.344,-0.001,0.526,0.361,0.024,0.495,0.378,0.049,0.445,0.388,0.074,0.395,0.383,0.087,0.343,0.366,0.086,0.305,0.342,0.08,-0.394,0.298,0.158,-0.369,0.283,0.179,-0.34,0.276,0.196,-0.302,0.274,0.213,-0.249,0.276,0.222,-0.193,0.286,0.214,-0.143,0.298,0.195,-0.107,0.306,0.174,-0.086,0.313,0.169,-0.376,0.315,0.182,-0.353,0.333,0.2,-0.317,0.353,0.215,-0.265,0.367,0.221,-0.21,0.367,0.214,-0.153,0.352,0.196,-0.107,0.33,0.18,0.654,0.487,-0.035,0.604,0.549,0.033,0.526,0.581,0.101,0.415,0.581,0.164,0.26,0.533,0.218,0.679,0.51,-0.11,0.632,0.594,-0.019,0.546,0.644,0.069,0.425,0.65,0.162,0.279,0.633,0.221,-0.52,0.45,0.183,-0.449,0.52,0.224,-0.346,0.56,0.256,-0.208,0.562,0.273,-0.023,0.521,0.274,-0.569,0.469,0.125,-0.498,0.562,0.184,-0.382,0.622,0.232,-0.224,0.633,0.273,-0.051,0.621,0.281,0.414,-0.391,0.271,0.391,-0.403,0.326,0.36,-0.41,0.385,0.313,-0.424,0.428,0.252,-0.434,0.466,0.182,-0.439,0.486,0.104,-0.436,0.505,0.031,-0.426,0.492,-0.03,-0.412,0.467,-0.074,-0.399,0.429,-0.103,-0.386,0.392,-0.081,-0.353,0.43,-0.043,-0.313,0.466,0.014,-0.271,0.496,0.098,-0.233,0.514,0.179,-0.248,0.501,0.25,-0.235,0.474,0.324,-0.272,0.425,0.37,-0.314,0.374,0.399,-0.355,0.319,0.391,-0.382,0.298,0.357,-0.366,0.326,0.326,-0.353,0.362,0.284,-0.342,0.394,0.233,-0.335,0.425,0.175,-0.337,0.448,0.109,-0.337,0.46,0.046,-0.342,0.451,-0.005,-0.354,0.436,-0.046,-0.367,0.418,-0.082,-0.379,0.402,-0.043,-0.367,0.419,-0.004,-0.352,0.44,0.048,-0.34,0.457,0.111,-0.336,0.468,0.177,-0.336,0.455,0.234,-0.336,0.431,0.284,-0.341,0.398,0.326,-0.355,0.365,0.356,-0.368,0.326,0.134,0.421,0.282,0.148,0.354,0.346,0.163,0.293,0.416,0.175,0.237,0.493,0.189,0.176,0.568,0.201,0.095,0.612,0.204,0.018,0.604,0.198,-0.035,0.578,0.19,-0.07,0.504,0.182,-0.097,0.465,0.332,-0.093,0.346,-0.015,-0.1,0.409,0.096,-0.099,0.469,0.257,-0.097,0.435,0.367,-0.028,0.281,-0.068,-0.038,0.364,0.128,0.513,0.267,0.12,0.611,0.257,0.184,-0.551,0.445,0.61,0.238,-0.046,0.419,-0.693,0.362,0.736,0.214,-0.383,0.667,0.279,-0.137,0.454,0.002,0.235,0.322,0.176,0.225,0.365,-0.003,0.401,0.623,-0.01,0.109,0.645,0.631,-0.15,0.422,0.768,0.061,0.695,0.509,-0.263,0.305,-0.008,0.477,0.264,-0.546,0.429,0.426,-0.241,0.333,0.387,0.128,0.2,0.486,0.08,0.171,0.558,0.72,-0.044,0.273,0.777,0.136,0.278,0.228,0.247,0.723,0.119,-0.159,0.64,0.15,-0.006,0.576,0.135,0.076,0.466,0.149,0.126,0.38,0.18,0.153,0.314,0.216,0.176,0.205,0.333,0.31,0.725,-0.021,-0.105,0.663,0.387,-0.093,0.326,0.117,0.269,0.265,0.259,0.185,0.332,0.076,0.431,0.29,0.132,0.493,0.629,-0.579,0.037,0.739,-0.086,-0.341,0.674,-0.502,-0.082,0.715,0.369,-0.346,0.378,0.056,0.249,0.714,-0.168,-0.083,0.102,0.775,0.182,0.572,-0.661,0.143,0.508,-0.721,0.241,0.335,-0.824,0.434,0.255,0.233,0.347,0.722,-0.243,-0.285,0.34,-0.519,0.395,0.663,-0.178,0.073,0.24,0.286,0.273,0.249,0.393,0.13,0.666,-0.37,0.019,0.204,0.408,0.223,0.382,-0.608,0.376,0.303,0.123,0.363,0.199,-0.754,0.493,0.191,-0.649,0.469,0.293,-0.637,0.438,0.505,-0.488,0.259,0.448,-0.559,0.319,0.552,-0.085,0.211,0.477,-0.16,0.264,0.604,-0.214,0.176,0.558,-0.558,0.201,0.55,-0.403,0.215,0.701,-0.298,-0.069,0.704,-0.386,-0.212,0.528,-0.262,0.242,0.288,0.176,0.305,0.304,0.071,0.529,0.3,0.466,0.128,0.406,0.512,0.117,0.746,0.064,-0.369,0.531,0.202,0.056,0.456,0.206,0.1,0.379,0.223,0.124,0.317,0.25,0.134,0.268,0.183,0.411,0.242,0.319,0.147,0.117,0.222,0.486,0.132,-0.053,0.507,-0.461,0.201,0.162,-0.066,-0.729,0.453,-0.694,0.168,-0.105,-0.551,0.234,0.095,-0.184,-0.02,0.357,0.136,0.087,0.614,-0.063,0.165,0.308,-0.035,-0.011,0.481,-0.405,-0.049,0.307,0.129,0.164,0.563,0.019,-0.049,0.455,-0.555,0.607,0.072,-0.26,0.759,0.187,-0.634,0.474,-0.012,0.056,-0.007,0.535,0.101,-0.552,0.465,-0.108,-0.258,0.438,-0.136,0.113,0.308,-0.244,0.056,0.314,-0.436,0.705,0.137,-0.067,-0.505,0.443,-0.087,0.772,0.206,-0.53,0.141,0.145,-0.486,0.345,0.164,-0.61,0.07,0.101,-0.474,0.109,0.211,-0.376,0.103,0.262,-0.245,0.127,0.271,-0.148,0.165,0.265,-0.074,0.206,0.262,-0.585,-0.078,0.152,-0.046,0.106,0.35,0.003,0.068,0.499,0.065,0.125,0.544,-0.411,-0.653,0.235,-0.67,-0.147,-0.062,-0.509,-0.578,0.148,-0.67,0.328,-0.079,-0.105,0.042,0.346,-0.568,-0.229,0.166,-0.599,0.343,0.075,-0.039,-0.204,0.45,-0.304,-0.725,0.305,-0.201,-0.781,0.371,0.05,-0.848,0.492,0.049,0.227,0.396,-0.64,-0.314,-0.016,0.01,-0.536,0.466,-0.161,-0.328,0.416,-0.459,-0.23,0.285,0.036,0.281,0.324,-0.031,0.385,0.192,-0.469,-0.433,0.234,0.048,0.402,0.262,-0.032,-0.634,0.456,0.009,0.117,0.426,0.082,-0.652,0.484,-0.206,-0.527,0.392,-0.125,-0.105,0.37,-0.125,-0.593,0.426,-0.294,-0.119,0.367,-0.191,-0.185,0.389,-0.353,-0.255,0.352,-0.036,0.062,0.396,-0.274,-0.611,0.354,-0.172,-0.679,0.4,-0.266,-0.439,0.374,-0.546,-0.362,0.17,-0.368,-0.485,0.322,-0.595,-0.462,0.046,-0.245,-0.293,0.389,0.002,0.168,0.371,0.073,0.067,0.579,-0.091,0.453,0.21,-0.211,0.497,0.232,-0.691,0.01,-0.083,-0.34,0.174,0.229,-0.248,0.184,0.243,-0.162,0.208,0.239,-0.047,0.267,0.216,0.063,0.179,0.462,0.018,0.311,0.252]},{"yaw":0.091,"pitch":0.008,"frame":[0.045,0.925,0.074,-0.166,0.913,0.081,-0.351,0.867,0.037,-0.528,0.774,-0.049,-0.644,0.642,-0.155,-0.713,0.483,-0.248,-0.742,0.321,-0.348,-0.745,0.129,-0.407,-0.731,-0.042,-0.411,-0.712,-0.211,-0.368,-0.679,-0.386,-0.294,-0.623,-0.563,-0.184,-0.545,-0.688,-0.049,-0.456,-0.767,0.084,-0.344,-0.832,0.19,-0.244,-0.874,0.271,-0.137,-0.904,0.351,-0.019,-0.925,0.399,0.127,-0.924,0.4,0.266,-0.91,0.364,0.366,-0.873,0.289,0.445,-0.83,0.189,0.514,-0.781,0.088,0.586,-0.707,-0.039,0.633,-0.625,-0.194,0.672,-0.502,-0.343,0.702,-0.329,-0.464,0.721,-0.159,-0.546,0.729,0.003,-0.594,0.739,0.17,-0.591,0.732,0.355,-0.526,0.709,0.515,-0.418,0.652,0.668,-0.308,0.555,0.792,-0.175,0.406,0.878,-0.053,0.242,0.918,0.033,0.536,0.323,-0.026,0.516,0.308,0.002,0.496,0.299,0.026,0.465,0.292,0.054,0.414,0.29,0.077,0.36,0.296,0.085,0.308,0.306,0.079,0.27,0.313,0.067,0.251,0.32,0.066,0.521,0.341,0.005,0.501,0.357,0.029,0.468,0.375,0.052,0.416,0.385,0.073,0.364,0.38,0.083,0.31,0.362,0.078,0.27,0.338,0.07,-0.431,0.297,0.093,-0.407,0.282,0.116,-0.38,0.276,0.134,-0.342,0.272,0.154,-0.289,0.274,0.167,-0.231,0.284,0.163,-0.18,0.295,0.147,-0.144,0.304,0.127,-0.122,0.31,0.123,-0.415,0.314,0.118,-0.393,0.332,0.138,-0.357,0.353,0.154,-0.304,0.368,0.164,-0.249,0.367,0.162,-0.189,0.351,0.147,-0.145,0.329,0.133,0.635,0.481,-0.026,0.58,0.545,0.037,0.495,0.579,0.099,0.378,0.579,0.155,0.215,0.531,0.2,0.664,0.504,-0.1,0.61,0.589,-0.014,0.517,0.641,0.068,0.388,0.649,0.152,0.235,0.632,0.203,-0.557,0.444,0.11,-0.49,0.513,0.157,-0.391,0.555,0.196,-0.255,0.559,0.223,-0.07,0.518,0.236,-0.601,0.463,0.047,-0.536,0.555,0.113,-0.425,0.615,0.169,-0.272,0.629,0.221,-0.099,0.618,0.241,0.359,-0.395,0.28,0.334,-0.406,0.333,0.3,-0.414,0.389,0.25,-0.428,0.428,0.184,-0.438,0.461,0.111,-0.443,0.474,0.033,-0.44,0.483,-0.039,-0.429,0.468,-0.095,-0.413,0.439,-0.136,-0.4,0.396,-0.162,-0.387,0.355,-0.145,-0.353,0.394,-0.111,-0.311,0.433,-0.056,-0.268,0.466,0.027,-0.231,0.49,0.108,-0.246,0.484,0.183,-0.233,0.464,0.262,-0.272,0.421,0.312,-0.316,0.375,0.343,-0.358,0.325,0.335,-0.385,0.304,0.301,-0.368,0.33,0.267,-0.353,0.363,0.221,-0.341,0.392,0.167,-0.334,0.418,0.105,-0.336,0.434,0.042,-0.336,0.438,-0.02,-0.341,0.427,-0.068,-0.353,0.409,-0.106,-0.366,0.387,-0.141,-0.379,0.368,-0.103,-0.364,0.387,-0.066,-0.349,0.411,-0.017,-0.336,0.43,0.042,-0.332,0.445,0.108,-0.333,0.438,0.168,-0.333,0.422,0.222,-0.339,0.394,0.266,-0.355,0.364,0.299,-0.37,0.329,0.085,0.421,0.259,0.094,0.352,0.323,0.104,0.292,0.393,0.112,0.236,0.472,0.122,0.174,0.549,0.13,0.092,0.594,0.132,0.015,0.586,0.129,-0.038,0.559,0.123,-0.071,0.484,0.119,-0.096,0.445,0.279,-0.094,0.336,-0.074,-0.098,0.376,0.033,-0.098,0.444,0.196,-0.098,0.42,0.318,-0.03,0.274,-0.124,-0.037,0.326,0.079,0.513,0.244,0.072,0.611,0.233,0.117,-0.553,0.43,0.591,0.233,-0.035,0.364,-0.704,0.366,0.737,0.209,-0.363,0.654,0.273,-0.123,0.411,-0.002,0.235,0.278,0.173,0.215,0.31,-0.004,0.395,0.593,-0.017,0.122,0.63,0.631,-0.143,0.389,0.769,0.052,0.688,0.507,-0.25,0.244,-0.009,0.467,0.201,-0.549,0.421,0.371,-0.245,0.335,0.346,0.124,0.195,0.449,0.075,0.173,0.534,0.721,-0.044,0.234,0.778,0.117,0.232,0.225,0.234,0.71,0.112,-0.139,0.619,0.143,0.008,0.548,0.129,0.085,0.431,0.144,0.128,0.342,0.176,0.148,0.273,0.212,0.166,0.153,0.332,0.29,0.708,-0.031,-0.083,0.649,0.381,-0.08,0.279,0.114,0.26,0.221,0.256,0.171,0.276,0.074,0.422,0.229,0.13,0.481,0.601,-0.594,0.056,0.737,-0.096,-0.317,0.657,-0.516,-0.059,0.713,0.365,-0.33,0.334,0.053,0.243,0.697,-0.18,-0.061,0.059,0.775,0.158,0.535,-0.675,0.158,0.463,-0.735,0.252,0.273,-0.833,0.433,0.201,0.231,0.331,0.719,-0.256,-0.261,0.28,-0.524,0.395,0.636,-0.189,0.09,0.191,0.284,0.257,0.208,0.391,0.113,0.641,-0.383,0.039,0.158,0.405,0.203,0.325,-0.616,0.378,0.25,0.121,0.352,0.129,-0.758,0.481,0.123,-0.652,0.456,0.23,-0.643,0.433,0.457,-0.497,0.27,0.396,-0.569,0.325,0.513,-0.091,0.219,0.431,-0.165,0.267,0.567,-0.222,0.189,0.516,-0.571,0.215,0.505,-0.412,0.23,0.684,-0.31,-0.047,0.697,-0.4,-0.187,0.483,-0.269,0.252,0.238,0.174,0.293,0.24,0.069,0.518,0.261,0.464,0.115,0.371,0.51,0.11,0.745,0.057,-0.346,0.503,0.198,0.062,0.423,0.201,0.1,0.343,0.219,0.119,0.278,0.246,0.124,0.211,0.182,0.397,0.2,0.317,0.131,0.055,0.221,0.463,0.066,-0.054,0.484,-0.496,0.2,0.094,-0.13,-0.727,0.423,-0.707,0.168,-0.191,-0.582,0.233,0.021,-0.237,-0.02,0.311,0.065,0.086,0.593,-0.112,0.164,0.267,-0.096,-0.009,0.444,-0.452,-0.049,0.245,0.061,0.163,0.541,-0.042,-0.049,0.423,-0.584,0.604,-0.005,-0.301,0.757,0.13,-0.655,0.472,-0.094,-0.01,-0.009,0.504,0.035,-0.553,0.442,-0.168,-0.257,0.401,-0.185,0.112,0.263,-0.293,0.054,0.262,-0.472,0.702,0.069,-0.126,-0.504,0.412,-0.129,0.772,0.161,-0.565,0.14,0.073,-0.522,0.342,0.094,-0.639,0.07,0.023,-0.513,0.108,0.142,-0.42,0.101,0.201,-0.289,0.125,0.218,-0.192,0.162,0.218,-0.117,0.203,0.22,-0.619,-0.078,0.077,-0.099,0.106,0.311,-0.059,0.068,0.464,0,0.125,0.515,-0.455,-0.647,0.18,-0.689,-0.146,-0.144,-0.545,-0.572,0.084,-0.685,0.327,-0.164,-0.157,0.042,0.304,-0.604,-0.228,0.095,-0.627,0.341,-0.005,-0.101,-0.202,0.415,-0.355,-0.719,0.258,-0.257,-0.775,0.332,-0.017,-0.848,0.468,-0.006,0.226,0.363,-0.662,-0.312,-0.094,-0.054,-0.534,0.439,-0.219,-0.327,0.376,-0.504,-0.229,0.223,-0.014,0.28,0.289,-0.07,0.383,0.152,-0.51,-0.429,0.173,0.003,0.4,0.229,-0.096,-0.633,0.428,-0.048,0.117,0.391,0.015,-0.653,0.461,-0.263,-0.524,0.353,-0.179,-0.103,0.329,-0.185,-0.591,0.392,-0.345,-0.119,0.316,-0.246,-0.184,0.345,-0.405,-0.254,0.299,-0.091,0.062,0.359,-0.327,-0.607,0.31,-0.232,-0.675,0.364,-0.322,-0.437,0.329,-0.583,-0.359,0.102,-0.417,-0.481,0.27,-0.623,-0.458,-0.027,-0.3,-0.292,0.344,-0.051,0.168,0.334,0.004,0.065,0.552,-0.133,0.452,0.166,-0.254,0.495,0.181,-0.706,0.01,-0.168,-0.38,0.173,0.169,-0.29,0.182,0.19,-0.202,0.206,0.191,-0.087,0.265,0.176,0.002,0.178,0.43,-0.025,0.309,0.216]},{"yaw":0.024,"pitch":0.01,"frame":[-0.003,0.925,0.041,-0.21,0.912,0.034,-0.389,0.865,-0.024,-0.556,0.772,-0.125,-0.662,0.642,-0.242,-0.721,0.483,-0.342,-0.744,0.323,-0.446,-0.746,0.131,-0.507,-0.736,-0.039,-0.511,-0.719,-0.206,-0.467,-0.691,-0.379,-0.39,-0.64,-0.552,-0.275,-0.572,-0.675,-0.132,-0.497,-0.752,0.01,-0.4,-0.82,0.124,-0.313,-0.865,0.214,-0.218,-0.898,0.302,-0.107,-0.922,0.361,0.037,-0.925,0.374,0.183,-0.913,0.345,0.294,-0.878,0.278,0.386,-0.836,0.183,0.467,-0.787,0.088,0.554,-0.713,-0.032,0.618,-0.633,-0.181,0.672,-0.511,-0.325,0.711,-0.335,-0.443,0.733,-0.164,-0.522,0.742,-0.003,-0.568,0.746,0.164,-0.565,0.732,0.351,-0.501,0.703,0.512,-0.395,0.641,0.666,-0.29,0.535,0.791,-0.167,0.375,0.878,-0.056,0.202,0.918,0.015,0.497,0.324,-0.018,0.474,0.312,0.009,0.452,0.304,0.031,0.418,0.298,0.056,0.366,0.298,0.076,0.312,0.304,0.079,0.258,0.313,0.07,0.219,0.317,0.055,0.199,0.324,0.053,0.481,0.341,0.012,0.459,0.357,0.034,0.425,0.375,0.055,0.372,0.385,0.072,0.319,0.381,0.078,0.262,0.364,0.069,0.219,0.34,0.059,-0.477,0.299,0.022,-0.452,0.286,0.047,-0.427,0.281,0.068,-0.39,0.279,0.091,-0.34,0.281,0.107,-0.283,0.29,0.108,-0.232,0.3,0.095,-0.195,0.308,0.078,-0.173,0.314,0.075,-0.461,0.315,0.05,-0.44,0.333,0.071,-0.405,0.354,0.091,-0.355,0.368,0.105,-0.299,0.368,0.107,-0.241,0.353,0.095,-0.196,0.331,0.083,0.605,0.478,-0.011,0.544,0.542,0.046,0.452,0.577,0.101,0.327,0.578,0.146,0.155,0.531,0.179,0.641,0.499,-0.083,0.58,0.585,-0.003,0.478,0.638,0.071,0.339,0.647,0.144,0.177,0.631,0.184,-0.602,0.446,0.033,-0.541,0.514,0.086,-0.447,0.555,0.134,-0.315,0.559,0.172,-0.134,0.518,0.195,-0.642,0.465,-0.035,-0.583,0.555,0.039,-0.479,0.615,0.105,-0.332,0.628,0.169,-0.163,0.617,0.2,0.295,-0.395,0.273,0.265,-0.406,0.323,0.226,-0.413,0.376,0.172,-0.428,0.414,0.102,-0.438,0.443,0.025,-0.442,0.45,-0.053,-0.437,0.453,-0.122,-0.425,0.431,-0.178,-0.409,0.397,-0.217,-0.395,0.348,-0.244,-0.382,0.301,-0.226,-0.348,0.344,-0.193,-0.307,0.388,-0.139,-0.264,0.427,-0.057,-0.226,0.459,0.025,-0.242,0.459,0.104,-0.23,0.445,0.187,-0.271,0.408,0.24,-0.315,0.365,0.275,-0.358,0.318,0.271,-0.385,0.294,0.234,-0.369,0.318,0.196,-0.354,0.349,0.147,-0.341,0.375,0.088,-0.332,0.399,0.023,-0.334,0.41,-0.04,-0.334,0.409,-0.101,-0.337,0.392,-0.148,-0.349,0.368,-0.186,-0.362,0.34,-0.223,-0.374,0.319,-0.184,-0.36,0.341,-0.147,-0.346,0.371,-0.1,-0.334,0.395,-0.039,-0.331,0.415,0.026,-0.332,0.414,0.089,-0.333,0.403,0.148,-0.339,0.378,0.196,-0.355,0.351,0.233,-0.37,0.318,0.017,0.423,0.229,0.021,0.356,0.294,0.026,0.296,0.364,0.029,0.239,0.444,0.033,0.178,0.523,0.037,0.096,0.568,0.038,0.019,0.56,0.038,-0.033,0.534,0.037,-0.066,0.457,0.035,-0.093,0.418,0.213,-0.092,0.32,-0.151,-0.093,0.337,-0.05,-0.094,0.412,0.119,-0.094,0.399,0.256,-0.028,0.262,-0.197,-0.032,0.283,0.014,0.514,0.213,0.009,0.611,0.203,0.03,-0.555,0.405,0.559,0.231,-0.023,0.29,-0.708,0.354,0.729,0.204,-0.337,0.632,0.269,-0.106,0.354,-0.002,0.23,0.219,0.175,0.201,0.241,-0.001,0.383,0.549,-0.02,0.133,0.608,0.629,-0.129,0.348,0.77,0.046,0.673,0.503,-0.23,0.165,-0.002,0.451,0.118,-0.551,0.399,0.305,-0.245,0.328,0.29,0.125,0.187,0.397,0.075,0.172,0.504,0.721,-0.039,0.186,0.779,0.099,0.169,0.228,0.217,0.69,0.108,-0.116,0.585,0.141,0.023,0.505,0.129,0.094,0.381,0.146,0.127,0.287,0.179,0.14,0.215,0.215,0.152,0.083,0.335,0.266,0.685,-0.036,-0.06,0.624,0.378,-0.064,0.217,0.117,0.247,0.16,0.26,0.154,0.203,0.078,0.408,0.149,0.133,0.464,0.562,-0.599,0.065,0.729,-0.101,-0.291,0.631,-0.521,-0.044,0.702,0.361,-0.306,0.275,0.054,0.233,0.674,-0.185,-0.04,0.004,0.775,0.126,0.484,-0.68,0.159,0.402,-0.74,0.247,0.187,-0.837,0.414,0.13,0.234,0.312,0.71,-0.261,-0.238,0.204,-0.526,0.38,0.598,-0.192,0.104,0.125,0.287,0.236,0.152,0.394,0.093,0.607,-0.387,0.052,0.094,0.408,0.179,0.251,-0.619,0.363,0.18,0.124,0.335,0.036,-0.759,0.455,0.033,-0.653,0.43,0.146,-0.645,0.413,0.397,-0.501,0.266,0.33,-0.573,0.316,0.46,-0.093,0.221,0.371,-0.166,0.263,0.518,-0.225,0.196,0.461,-0.575,0.215,0.449,-0.415,0.231,0.659,-0.315,-0.029,0.684,-0.406,-0.167,0.426,-0.271,0.252,0.171,0.177,0.276,0.156,0.073,0.501,0.207,0.465,0.099,0.323,0.511,0.101,0.738,0.052,-0.318,0.46,0.199,0.067,0.374,0.204,0.099,0.291,0.223,0.112,0.223,0.25,0.111,0.134,0.185,0.378,0.142,0.32,0.111,-0.028,0.224,0.431,-0.019,-0.05,0.455,-0.538,0.203,0.019,-0.216,-0.722,0.378,-0.722,0.171,-0.286,-0.618,0.235,-0.061,-0.304,-0.016,0.259,-0.028,0.09,0.564,-0.175,0.167,0.222,-0.179,-0.005,0.403,-0.507,-0.043,0.175,-0.026,0.167,0.511,-0.124,-0.044,0.385,-0.616,0.604,-0.085,-0.35,0.756,0.073,-0.679,0.473,-0.182,-0.095,-0.003,0.467,-0.052,-0.553,0.411,-0.247,-0.252,0.352,-0.247,0.116,0.213,-0.354,0.059,0.204,-0.512,0.701,-0.001,-0.209,-0.5,0.365,-0.183,0.771,0.117,-0.602,0.144,-0.007,-0.566,0.345,0.018,-0.671,0.074,-0.065,-0.556,0.112,0.066,-0.47,0.106,0.133,-0.343,0.13,0.159,-0.247,0.167,0.166,-0.174,0.208,0.174,-0.656,-0.071,-0.01,-0.168,0.11,0.267,-0.142,0.073,0.425,-0.085,0.129,0.479,-0.505,-0.634,0.107,-0.708,-0.139,-0.239,-0.583,-0.559,0.003,-0.703,0.329,-0.256,-0.226,0.046,0.257,-0.641,-0.22,0.01,-0.661,0.343,-0.09,-0.181,-0.198,0.372,-0.417,-0.709,0.194,-0.33,-0.766,0.276,-0.11,-0.846,0.432,-0.08,0.23,0.326,-0.684,-0.303,-0.186,-0.14,-0.532,0.399,-0.297,-0.322,0.322,-0.555,-0.221,0.148,-0.083,0.283,0.251,-0.127,0.386,0.11,-0.559,-0.419,0.097,-0.062,0.402,0.191,-0.181,-0.63,0.385,-0.124,0.121,0.352,-0.076,-0.653,0.428,-0.337,-0.518,0.296,-0.251,-0.099,0.282,-0.265,-0.586,0.342,-0.411,-0.113,0.256,-0.318,-0.179,0.292,-0.468,-0.247,0.234,-0.165,0.066,0.317,-0.397,-0.599,0.249,-0.309,-0.668,0.311,-0.393,-0.43,0.267,-0.621,-0.349,0.019,-0.478,-0.472,0.202,-0.65,-0.446,-0.116,-0.372,-0.286,0.285,-0.122,0.172,0.294,-0.086,0.07,0.517,-0.189,0.452,0.12,-0.31,0.495,0.128,-0.723,0.015,-0.265,-0.429,0.177,0.103,-0.341,0.187,0.131,-0.256,0.21,0.138,-0.142,0.268,0.132,-0.078,0.182,0.393,-0.087,0.312,0.177]},{"yaw":-0.03,"pitch":0.017,"frame":[-0.043,0.925,0.039,-0.249,0.911,0.02,-0.423,0.863,-0.053,-0.581,0.771,-0.166,-0.679,0.642,-0.293,-0.731,0.485,-0.401,-0.749,0.326,-0.508,-0.748,0.138,-0.572,-0.737,-0.031,-0.576,-0.721,-0.194,-0.531,-0.695,-0.363,-0.452,-0.653,-0.535,-0.332,-0.598,-0.656,-0.184,-0.538,-0.735,-0.034,-0.456,-0.806,0.088,-0.379,-0.854,0.185,-0.292,-0.89,0.281,-0.186,-0.919,0.351,-0.042,-0.925,0.379,0.108,-0.917,0.358,0.225,-0.883,0.3,0.326,-0.842,0.212,0.416,-0.794,0.124,0.514,-0.721,0.011,0.588,-0.64,-0.131,0.654,-0.517,-0.27,0.703,-0.34,-0.385,0.731,-0.168,-0.462,0.744,-0.004,-0.506,0.749,0.163,-0.502,0.734,0.351,-0.439,0.702,0.513,-0.335,0.632,0.669,-0.235,0.518,0.795,-0.121,0.348,0.881,-0.023,0.167,0.92,0.032,0.459,0.327,0.027,0.435,0.315,0.052,0.412,0.309,0.072,0.377,0.304,0.094,0.324,0.304,0.11,0.27,0.311,0.109,0.218,0.319,0.096,0.18,0.323,0.078,0.16,0.33,0.075,0.443,0.343,0.055,0.421,0.359,0.076,0.387,0.376,0.095,0.334,0.387,0.108,0.281,0.384,0.109,0.224,0.368,0.096,0.181,0.346,0.083,-0.509,0.298,-0.016,-0.488,0.286,0.011,-0.465,0.282,0.033,-0.431,0.28,0.059,-0.382,0.282,0.079,-0.327,0.29,0.084,-0.277,0.301,0.075,-0.242,0.308,0.06,-0.221,0.315,0.058,-0.494,0.314,0.013,-0.476,0.332,0.036,-0.441,0.352,0.058,-0.394,0.366,0.077,-0.34,0.366,0.083,-0.284,0.352,0.075,-0.242,0.332,0.065,0.575,0.477,0.041,0.509,0.542,0.093,0.413,0.579,0.139,0.282,0.581,0.173,0.104,0.533,0.194,0.616,0.498,-0.028,0.55,0.586,0.046,0.441,0.64,0.11,0.294,0.65,0.172,0.128,0.633,0.2,-0.637,0.45,-0.011,-0.582,0.517,0.049,-0.492,0.557,0.105,-0.364,0.561,0.152,-0.189,0.521,0.187,-0.674,0.47,-0.082,-0.621,0.559,-0.001,-0.521,0.617,0.074,-0.381,0.63,0.15,-0.217,0.62,0.191,0.228,-0.395,0.304,0.196,-0.405,0.349,0.156,-0.412,0.397,0.099,-0.425,0.43,0.029,-0.432,0.453,-0.047,-0.435,0.457,-0.123,-0.432,0.454,-0.191,-0.422,0.422,-0.244,-0.408,0.383,-0.281,-0.397,0.33,-0.307,-0.385,0.279,-0.29,-0.351,0.325,-0.258,-0.309,0.375,-0.205,-0.265,0.421,-0.124,-0.226,0.461,-0.045,-0.241,0.469,0.035,-0.227,0.46,0.119,-0.269,0.43,0.173,-0.315,0.391,0.208,-0.359,0.347,0.204,-0.385,0.321,0.167,-0.369,0.341,0.129,-0.353,0.368,0.078,-0.338,0.391,0.017,-0.329,0.41,-0.047,-0.33,0.416,-0.109,-0.331,0.41,-0.168,-0.336,0.385,-0.213,-0.348,0.357,-0.249,-0.363,0.325,-0.285,-0.376,0.301,-0.247,-0.361,0.327,-0.211,-0.346,0.361,-0.165,-0.332,0.391,-0.107,-0.328,0.418,-0.044,-0.329,0.423,0.019,-0.329,0.417,0.079,-0.336,0.397,0.129,-0.354,0.372,0.167,-0.37,0.343,-0.041,0.427,0.231,-0.042,0.361,0.297,-0.04,0.302,0.369,-0.042,0.246,0.45,-0.042,0.186,0.53,-0.042,0.107,0.576,-0.041,0.031,0.569,-0.04,-0.021,0.542,-0.037,-0.055,0.464,-0.038,-0.083,0.426,0.15,-0.086,0.339,-0.216,-0.089,0.33,-0.121,-0.087,0.413,0.048,-0.086,0.412,0.197,-0.023,0.284,-0.261,-0.028,0.27,-0.042,0.516,0.215,-0.044,0.613,0.205,-0.046,-0.554,0.411,0.526,0.232,0.026,0.216,-0.712,0.375,0.721,0.203,-0.275,0.606,0.268,-0.053,0.297,0,0.26,0.166,0.179,0.222,0.176,0.007,0.406,0.499,-0.02,0.179,0.589,0.631,-0.078,0.312,0.773,0.076,0.66,0.504,-0.174,0.094,0.01,0.469,0.043,-0.552,0.408,0.239,-0.245,0.356,0.239,0.128,0.213,0.345,0.076,0.206,0.477,0.723,0.004,0.144,0.781,0.115,0.115,0.233,0.235,0.663,0.106,-0.057,0.547,0.141,0.073,0.461,0.13,0.137,0.333,0.149,0.162,0.239,0.183,0.167,0.167,0.221,0.174,0.022,0.34,0.275,0.65,-0.038,-0.001,0.596,0.377,-0.011,0.161,0.121,0.268,0.111,0.266,0.172,0.137,0.085,0.427,0.079,0.141,0.481,0.513,-0.604,0.108,0.71,-0.103,-0.23,0.591,-0.526,0.006,0.692,0.361,-0.247,0.219,0.058,0.258,0.636,-0.188,0.016,-0.043,0.777,0.125,0.429,-0.686,0.194,0.338,-0.746,0.275,0.108,-0.84,0.428,0.068,0.24,0.326,0.687,-0.264,-0.179,0.131,-0.529,0.397,0.549,-0.195,0.152,0.068,0.292,0.25,0.107,0.399,0.108,0.559,-0.39,0.1,0.041,0.413,0.188,0.178,-0.623,0.382,0.118,0.13,0.353,-0.045,-0.758,0.461,-0.046,-0.653,0.436,0.068,-0.647,0.423,0.334,-0.505,0.298,0.263,-0.577,0.341,0.402,-0.093,0.258,0.309,-0.165,0.295,0.461,-0.227,0.236,0.402,-0.58,0.25,0.388,-0.419,0.269,0.62,-0.318,0.024,0.654,-0.41,-0.111,0.364,-0.272,0.288,0.113,0.182,0.294,0.082,0.084,0.517,0.163,0.468,0.119,0.281,0.513,0.13,0.724,0.05,-0.255,0.419,0.202,0.107,0.331,0.208,0.134,0.246,0.228,0.139,0.179,0.256,0.133,0.068,0.191,0.394,0.096,0.326,0.126,-0.098,0.231,0.432,-0.092,-0.04,0.458,-0.57,0.206,-0.023,-0.291,-0.716,0.36,-0.736,0.178,-0.345,-0.645,0.24,-0.109,-0.361,-0.011,0.236,-0.107,0.1,0.568,-0.232,0.171,0.209,-0.248,0.001,0.393,-0.551,-0.037,0.135,-0.101,0.176,0.513,-0.192,-0.038,0.379,-0.645,0.606,-0.13,-0.392,0.756,0.049,-0.7,0.477,-0.235,-0.168,0.006,0.463,-0.128,-0.551,0.41,-0.312,-0.249,0.336,-0.301,0.12,0.193,-0.405,0.063,0.177,-0.548,0.701,-0.037,-0.279,-0.498,0.348,-0.228,0.772,0.104,-0.63,0.149,-0.055,-0.598,0.347,-0.024,-0.694,0.082,-0.119,-0.59,0.117,0.022,-0.511,0.11,0.095,-0.39,0.134,0.131,-0.298,0.17,0.146,-0.227,0.211,0.16,-0.682,-0.061,-0.064,-0.228,0.115,0.255,-0.211,0.08,0.418,-0.158,0.137,0.476,-0.552,-0.62,0.064,-0.722,-0.126,-0.3,-0.616,-0.544,-0.047,-0.72,0.335,-0.313,-0.284,0.05,0.241,-0.668,-0.209,-0.043,-0.687,0.347,-0.141,-0.249,-0.194,0.362,-0.477,-0.697,0.16,-0.398,-0.756,0.249,-0.191,-0.842,0.422,-0.145,0.235,0.321,-0.698,-0.288,-0.245,-0.212,-0.53,0.388,-0.36,-0.32,0.298,-0.594,-0.211,0.104,-0.142,0.287,0.245,-0.177,0.388,0.1,-0.598,-0.408,0.051,-0.118,0.406,0.186,-0.254,-0.625,0.371,-0.191,0.126,0.345,-0.154,-0.649,0.423,-0.402,-0.513,0.27,-0.312,-0.094,0.265,-0.334,-0.581,0.321,-0.463,-0.107,0.225,-0.378,-0.174,0.269,-0.517,-0.24,0.198,-0.229,0.071,0.307,-0.459,-0.591,0.217,-0.377,-0.66,0.286,-0.452,-0.425,0.235,-0.65,-0.337,-0.032,-0.53,-0.462,0.164,-0.67,-0.43,-0.173,-0.429,-0.281,0.257,-0.185,0.177,0.285,-0.161,0.08,0.515,-0.238,0.454,0.106,-0.355,0.495,0.107,-0.736,0.025,-0.326,-0.47,0.181,0.069,-0.386,0.189,0.103,-0.303,0.213,0.117,-0.192,0.27,0.119,-0.147,0.189,0.389,-0.141,0.316,0.17]},{"yaw":-0.092,"pitch":0.017,"frame":[-0.089,0.925,0.068,-0.288,0.911,0.036,-0.453,0.864,-0.053,-0.6,0.772,-0.179,-0.69,0.646,-0.315,-0.737,0.494,-0.428,-0.751,0.338,-0.538,-0.749,0.153,-0.602,-0.739,-0.014,-0.606,-0.725,-0.175,-0.559,-0.703,-0.344,-0.477,-0.669,-0.516,-0.355,-0.627,-0.639,-0.202,-0.579,-0.719,-0.046,-0.511,-0.793,0.083,-0.444,-0.843,0.186,-0.368,-0.883,0.288,-0.269,-0.914,0.364,-0.129,-0.925,0.403,0.024,-0.921,0.391,0.149,-0.889,0.345,0.262,-0.85,0.266,0.363,-0.802,0.186,0.475,-0.728,0.083,0.563,-0.645,-0.05,0.64,-0.519,-0.182,0.696,-0.338,-0.293,0.729,-0.162,-0.367,0.745,0.003,-0.41,0.751,0.171,-0.406,0.732,0.359,-0.345,0.692,0.52,-0.245,0.613,0.674,-0.153,0.489,0.798,-0.049,0.311,0.883,0.036,0.124,0.92,0.078,0.42,0.329,0.095,0.395,0.317,0.118,0.369,0.311,0.136,0.332,0.307,0.155,0.278,0.307,0.167,0.223,0.315,0.162,0.171,0.323,0.145,0.132,0.327,0.126,0.113,0.333,0.121,0.402,0.346,0.121,0.379,0.362,0.14,0.343,0.379,0.157,0.29,0.39,0.165,0.238,0.386,0.162,0.18,0.37,0.146,0.134,0.348,0.131,-0.546,0.301,-0.027,-0.526,0.289,0.001,-0.505,0.284,0.025,-0.472,0.282,0.054,-0.425,0.283,0.078,-0.37,0.292,0.087,-0.32,0.302,0.083,-0.285,0.31,0.069,-0.264,0.316,0.069,-0.532,0.317,0.003,-0.513,0.334,0.028,-0.48,0.355,0.053,-0.433,0.368,0.076,-0.379,0.368,0.086,-0.325,0.354,0.081,-0.284,0.334,0.074,0.536,0.478,0.115,0.464,0.543,0.161,0.361,0.579,0.199,0.224,0.58,0.224,0.042,0.532,0.235,0.582,0.499,0.051,0.507,0.587,0.117,0.39,0.641,0.172,0.236,0.65,0.223,0.065,0.633,0.241,-0.668,0.453,-0.028,-0.618,0.518,0.039,-0.533,0.557,0.103,-0.411,0.56,0.161,-0.244,0.52,0.207,-0.699,0.474,-0.104,-0.652,0.561,-0.014,-0.56,0.617,0.07,-0.428,0.629,0.157,-0.271,0.619,0.21,0.151,-0.399,0.353,0.118,-0.409,0.394,0.076,-0.414,0.438,0.018,-0.425,0.467,-0.054,-0.431,0.484,-0.13,-0.433,0.484,-0.203,-0.428,0.473,-0.268,-0.419,0.435,-0.319,-0.406,0.392,-0.354,-0.395,0.336,-0.379,-0.384,0.282,-0.365,-0.348,0.33,-0.334,-0.307,0.383,-0.282,-0.262,0.433,-0.205,-0.224,0.481,-0.127,-0.241,0.497,-0.046,-0.227,0.493,0.04,-0.27,0.469,0.095,-0.318,0.435,0.131,-0.362,0.394,0.128,-0.389,0.367,0.091,-0.373,0.385,0.051,-0.356,0.408,-0.002,-0.34,0.427,-0.063,-0.331,0.442,-0.129,-0.33,0.444,-0.188,-0.331,0.431,-0.244,-0.335,0.4,-0.288,-0.347,0.368,-0.323,-0.361,0.333,-0.358,-0.374,0.306,-0.32,-0.359,0.335,-0.287,-0.345,0.373,-0.242,-0.333,0.406,-0.187,-0.33,0.438,-0.126,-0.331,0.451,-0.061,-0.332,0.449,0.001,-0.339,0.433,0.052,-0.357,0.412,0.091,-0.373,0.386,-0.105,0.427,0.259,-0.112,0.361,0.326,-0.116,0.302,0.398,-0.122,0.246,0.48,-0.128,0.186,0.56,-0.134,0.107,0.606,-0.133,0.032,0.598,-0.129,-0.02,0.571,-0.123,-0.055,0.493,-0.121,-0.083,0.455,0.077,-0.087,0.377,-0.287,-0.087,0.345,-0.202,-0.085,0.434,-0.032,-0.085,0.445,0.129,-0.023,0.327,-0.328,-0.025,0.281,-0.104,0.515,0.244,-0.103,0.613,0.233,-0.133,-0.556,0.438,0.49,0.234,0.098,0.134,-0.716,0.418,0.708,0.207,-0.184,0.577,0.269,0.026,0.234,0,0.311,0.106,0.181,0.266,0.101,0.007,0.447,0.446,-0.021,0.247,0.557,0.634,-0.002,0.264,0.774,0.131,0.637,0.507,-0.09,0.013,0.012,0.506,-0.043,-0.555,0.438,0.163,-0.247,0.403,0.18,0.13,0.262,0.286,0.077,0.262,0.437,0.725,0.07,0.092,0.781,0.159,0.053,0.234,0.276,0.634,0.108,0.028,0.508,0.142,0.147,0.414,0.131,0.204,0.282,0.151,0.219,0.187,0.186,0.217,0.113,0.224,0.218,-0.045,0.34,0.31,0.616,-0.038,0.083,0.563,0.379,0.067,0.096,0.122,0.31,0.055,0.268,0.213,0.062,0.086,0.467,-0.001,0.141,0.517,0.466,-0.611,0.177,0.694,-0.102,-0.138,0.554,-0.53,0.084,0.676,0.366,-0.159,0.156,0.058,0.304,0.6,-0.189,0.098,-0.096,0.776,0.154,0.37,-0.694,0.255,0.27,-0.753,0.328,0.02,-0.843,0.462,-0.002,0.24,0.362,0.667,-0.265,-0.09,0.049,-0.533,0.435,0.498,-0.196,0.224,0.003,0.293,0.287,0.054,0.401,0.149,0.513,-0.394,0.173,-0.02,0.414,0.225,0.096,-0.627,0.422,0.046,0.131,0.391,-0.138,-0.759,0.488,-0.136,-0.654,0.463,-0.019,-0.65,0.455,0.264,-0.509,0.35,0.188,-0.581,0.387,0.339,-0.094,0.315,0.241,-0.167,0.346,0.4,-0.229,0.299,0.337,-0.585,0.307,0.321,-0.422,0.327,0.582,-0.321,0.104,0.629,-0.412,-0.025,0.295,-0.275,0.343,0.046,0.182,0.334,-0.003,0.085,0.553,0.11,0.469,0.164,0.228,0.514,0.181,0.71,0.054,-0.161,0.374,0.203,0.171,0.283,0.211,0.19,0.197,0.232,0.19,0.129,0.259,0.179,-0.008,0.191,0.43,0.043,0.329,0.167,-0.177,0.231,0.455,-0.174,-0.039,0.483,-0.603,0.213,-0.037,-0.371,-0.71,0.368,-0.745,0.19,-0.375,-0.672,0.247,-0.128,-0.423,-0.006,0.239,-0.196,0.101,0.595,-0.291,0.174,0.221,-0.322,0.003,0.404,-0.601,-0.029,0.122,-0.186,0.176,0.537,-0.268,-0.036,0.395,-0.666,0.608,-0.147,-0.431,0.756,0.053,-0.715,0.483,-0.258,-0.249,0.007,0.479,-0.214,-0.552,0.427,-0.388,-0.245,0.341,-0.359,0.124,0.2,-0.46,0.068,0.176,-0.577,0.702,-0.045,-0.357,-0.495,0.355,-0.275,0.771,0.122,-0.66,0.158,-0.074,-0.632,0.351,-0.039,-0.719,0.094,-0.146,-0.626,0.125,0.005,-0.554,0.116,0.085,-0.439,0.138,0.13,-0.349,0.174,0.152,-0.28,0.214,0.171,-0.711,-0.049,-0.089,-0.293,0.118,0.267,-0.287,0.082,0.433,-0.238,0.138,0.495,-0.602,-0.608,0.053,-0.736,-0.11,-0.329,-0.653,-0.53,-0.065,-0.732,0.344,-0.34,-0.347,0.054,0.249,-0.698,-0.196,-0.066,-0.709,0.353,-0.164,-0.327,-0.191,0.372,-0.537,-0.687,0.155,-0.467,-0.747,0.25,-0.278,-0.838,0.435,-0.214,0.236,0.341,-0.716,-0.271,-0.271,-0.295,-0.529,0.4,-0.434,-0.316,0.299,-0.639,-0.202,0.089,-0.205,0.289,0.265,-0.227,0.389,0.118,-0.642,-0.396,0.035,-0.176,0.407,0.209,-0.335,-0.621,0.381,-0.262,0.128,0.36,-0.24,-0.648,0.438,-0.471,-0.507,0.27,-0.379,-0.09,0.272,-0.409,-0.575,0.326,-0.523,-0.101,0.222,-0.445,-0.169,0.272,-0.573,-0.232,0.191,-0.297,0.074,0.32,-0.522,-0.582,0.214,-0.449,-0.653,0.289,-0.518,-0.419,0.23,-0.682,-0.324,-0.052,-0.587,-0.453,0.155,-0.694,-0.414,-0.196,-0.496,-0.275,0.255,-0.252,0.179,0.3,-0.245,0.081,0.533,-0.285,0.454,0.119,-0.4,0.495,0.113,-0.747,0.039,-0.357,-0.512,0.186,0.062,-0.431,0.193,0.103,-0.351,0.216,0.122,-0.243,0.272,0.134,-0.222,0.189,0.408,-0.197,0.317,0.19]},{"yaw":-0.152,"pitch":0.019,"frame":[-0.126,0.925,0.082,-0.319,0.91,0.026,-0.475,0.862,-0.075,-0.609,0.771,-0.209,-0.69,0.645,-0.35,-0.731,0.493,-0.464,-0.743,0.338,-0.572,-0.741,0.154,-0.631,-0.731,-0.012,-0.631,-0.721,-0.172,-0.578,-0.706,-0.338,-0.491,-0.681,-0.507,-0.362,-0.652,-0.631,-0.203,-0.617,-0.711,-0.04,-0.56,-0.786,0.096,-0.503,-0.838,0.204,-0.434,-0.879,0.311,-0.343,-0.913,0.391,-0.208,-0.925,0.439,-0.053,-0.925,0.446,0.078,-0.898,0.409,0.197,-0.862,0.337,0.307,-0.817,0.263,0.431,-0.742,0.167,0.531,-0.654,0.039,0.621,-0.524,-0.09,0.688,-0.341,-0.201,0.729,-0.165,-0.277,0.748,0.001,-0.322,0.755,0.169,-0.322,0.735,0.358,-0.267,0.69,0.519,-0.175,0.601,0.673,-0.091,0.468,0.799,0.001,0.28,0.884,0.072,0.088,0.921,0.104,0.381,0.33,0.153,0.355,0.317,0.174,0.327,0.31,0.191,0.29,0.305,0.207,0.234,0.306,0.215,0.178,0.313,0.206,0.126,0.323,0.186,0.086,0.327,0.165,0.067,0.333,0.159,0.361,0.347,0.176,0.338,0.364,0.194,0.301,0.381,0.207,0.246,0.392,0.212,0.194,0.388,0.205,0.135,0.371,0.186,0.088,0.348,0.17,-0.573,0.301,-0.044,-0.556,0.289,-0.014,-0.536,0.284,0.011,-0.506,0.282,0.042,-0.46,0.283,0.07,-0.407,0.291,0.083,-0.358,0.302,0.082,-0.325,0.31,0.071,-0.304,0.317,0.072,-0.56,0.318,-0.013,-0.542,0.335,0.013,-0.51,0.356,0.039,-0.465,0.369,0.065,-0.413,0.369,0.079,-0.36,0.355,0.078,-0.323,0.335,0.074,0.502,0.48,0.175,0.424,0.547,0.213,0.316,0.583,0.243,0.175,0.583,0.258,-0.01,0.534,0.261,0.554,0.5,0.113,0.472,0.59,0.171,0.348,0.647,0.217,0.187,0.655,0.257,0.013,0.636,0.267,-0.685,0.455,-0.052,-0.639,0.518,0.019,-0.56,0.556,0.089,-0.446,0.559,0.155,-0.291,0.52,0.213,-0.711,0.476,-0.131,-0.667,0.561,-0.037,-0.583,0.616,0.052,-0.461,0.628,0.149,-0.314,0.618,0.212,0.079,-0.401,0.413,0.043,-0.41,0.45,0,-0.414,0.489,-0.06,-0.421,0.513,-0.132,-0.424,0.522,-0.206,-0.424,0.512,-0.274,-0.42,0.496,-0.334,-0.413,0.455,-0.381,-0.403,0.41,-0.413,-0.395,0.351,-0.437,-0.385,0.294,-0.422,-0.349,0.342,-0.393,-0.307,0.398,-0.345,-0.263,0.45,-0.273,-0.225,0.502,-0.202,-0.242,0.525,-0.124,-0.229,0.529,-0.04,-0.272,0.514,0.016,-0.319,0.486,0.055,-0.363,0.451,0.057,-0.39,0.423,0.021,-0.374,0.438,-0.02,-0.357,0.456,-0.075,-0.341,0.47,-0.138,-0.331,0.478,-0.203,-0.33,0.472,-0.259,-0.331,0.454,-0.311,-0.335,0.421,-0.352,-0.347,0.387,-0.384,-0.361,0.349,-0.417,-0.375,0.321,-0.381,-0.359,0.351,-0.35,-0.345,0.391,-0.309,-0.333,0.427,-0.257,-0.331,0.461,-0.2,-0.332,0.48,-0.136,-0.333,0.486,-0.074,-0.341,0.476,-0.02,-0.359,0.46,0.02,-0.375,0.439,-0.161,0.427,0.281,-0.173,0.362,0.349,-0.182,0.303,0.422,-0.193,0.247,0.504,-0.205,0.187,0.585,-0.216,0.109,0.631,-0.217,0.035,0.624,-0.21,-0.018,0.597,-0.201,-0.054,0.52,-0.196,-0.083,0.481,0.005,-0.088,0.416,-0.346,-0.087,0.36,-0.27,-0.086,0.454,-0.109,-0.086,0.477,0.06,-0.024,0.369,-0.384,-0.026,0.292,-0.157,0.515,0.265,-0.155,0.612,0.252,-0.21,-0.556,0.466,0.454,0.233,0.16,0.059,-0.72,0.475,0.7,0.206,-0.104,0.547,0.269,0.093,0.172,-0.001,0.361,0.05,0.18,0.305,0.026,0.006,0.487,0.394,-0.023,0.313,0.533,0.634,0.056,0.225,0.775,0.166,0.621,0.507,-0.024,-0.066,0.012,0.54,-0.119,-0.556,0.476,0.09,-0.248,0.455,0.124,0.129,0.307,0.231,0.076,0.315,0.405,0.727,0.117,0.049,0.782,0.185,-0.003,0.234,0.311,0.608,0.106,0.104,0.47,0.141,0.214,0.369,0.129,0.264,0.232,0.15,0.27,0.137,0.185,0.262,0.062,0.223,0.257,-0.106,0.341,0.337,0.584,-0.041,0.162,0.532,0.379,0.132,0.035,0.122,0.35,0.003,0.268,0.248,-0.011,0.086,0.502,-0.077,0.142,0.547,0.414,-0.623,0.257,0.679,-0.104,-0.051,0.514,-0.54,0.169,0.665,0.365,-0.085,0.094,0.057,0.348,0.564,-0.193,0.179,-0.141,0.776,0.17,0.309,-0.705,0.329,0.203,-0.764,0.396,-0.06,-0.845,0.514,-0.066,0.24,0.392,0.647,-0.269,-0.002,-0.025,-0.534,0.484,0.449,-0.199,0.297,-0.054,0.293,0.317,0.005,0.402,0.181,0.465,-0.4,0.252,-0.073,0.415,0.253,0.022,-0.629,0.474,-0.021,0.131,0.425,-0.219,-0.759,0.519,-0.215,-0.654,0.493,-0.097,-0.651,0.498,0.196,-0.515,0.415,0.117,-0.586,0.446,0.279,-0.096,0.374,0.174,-0.168,0.4,0.341,-0.232,0.365,0.273,-0.594,0.377,0.255,-0.428,0.395,0.543,-0.325,0.186,0.6,-0.418,0.064,0.228,-0.278,0.405,-0.016,0.182,0.369,-0.083,0.086,0.584,0.061,0.471,0.197,0.18,0.517,0.22,0.7,0.052,-0.078,0.331,0.202,0.227,0.236,0.21,0.241,0.15,0.231,0.234,0.08,0.259,0.217,-0.078,0.191,0.461,-0.006,0.329,0.199,-0.246,0.233,0.469,-0.248,-0.039,0.503,-0.627,0.215,-0.055,-0.44,-0.706,0.388,-0.749,0.192,-0.404,-0.689,0.25,-0.151,-0.474,-0.006,0.242,-0.275,0.103,0.613,-0.343,0.174,0.228,-0.384,0.003,0.413,-0.642,-0.027,0.112,-0.261,0.177,0.55,-0.331,-0.036,0.408,-0.675,0.608,-0.176,-0.46,0.755,0.038,-0.721,0.483,-0.29,-0.318,0.008,0.491,-0.288,-0.55,0.452,-0.448,-0.244,0.352,-0.408,0.124,0.203,-0.506,0.069,0.174,-0.594,0.702,-0.068,-0.423,-0.494,0.372,-0.314,0.771,0.117,-0.681,0.16,-0.095,-0.653,0.353,-0.06,-0.739,0.096,-0.169,-0.655,0.126,-0.012,-0.591,0.117,0.074,-0.482,0.139,0.127,-0.395,0.174,0.154,-0.329,0.214,0.177,-0.738,-0.046,-0.109,-0.347,0.118,0.275,-0.351,0.082,0.442,-0.308,0.139,0.506,-0.646,-0.601,0.056,-0.75,-0.106,-0.351,-0.687,-0.523,-0.069,-0.735,0.345,-0.371,-0.4,0.054,0.255,-0.727,-0.192,-0.081,-0.72,0.355,-0.192,-0.391,-0.191,0.386,-0.589,-0.681,0.166,-0.527,-0.742,0.267,-0.354,-0.836,0.461,-0.276,0.237,0.353,-0.734,-0.266,-0.288,-0.365,-0.528,0.42,-0.492,-0.316,0.308,-0.678,-0.198,0.08,-0.262,0.289,0.276,-0.271,0.389,0.125,-0.68,-0.392,0.03,-0.228,0.407,0.22,-0.403,-0.618,0.402,-0.323,0.129,0.371,-0.316,-0.646,0.463,-0.53,-0.505,0.282,-0.433,-0.09,0.28,-0.472,-0.572,0.343,-0.571,-0.099,0.221,-0.499,-0.167,0.277,-0.62,-0.229,0.188,-0.355,0.074,0.329,-0.577,-0.578,0.224,-0.512,-0.649,0.305,-0.572,-0.417,0.236,-0.714,-0.319,-0.063,-0.635,-0.449,0.157,-0.717,-0.408,-0.207,-0.549,-0.274,0.259,-0.311,0.179,0.31,-0.319,0.083,0.545,-0.326,0.455,0.121,-0.435,0.495,0.108,-0.755,0.042,-0.384,-0.547,0.187,0.052,-0.471,0.194,0.098,-0.393,0.216,0.122,-0.29,0.273,0.141,-0.288,0.19,0.419,-0.249,0.318,0.202]},{"yaw":-0.223,"pitch":0.025,"frame":[-0.163,0.925,0.077,-0.347,0.909,0.009,-0.492,0.861,-0.105,-0.614,0.77,-0.247,-0.688,0.645,-0.391,-0.726,0.493,-0.503,-0.736,0.338,-0.606,-0.731,0.154,-0.658,-0.722,-0.011,-0.65,-0.715,-0.169,-0.59,-0.702,-0.333,-0.495,-0.683,-0.5,-0.358,-0.664,-0.621,-0.191,-0.643,-0.7,-0.022,-0.603,-0.775,0.121,-0.558,-0.827,0.235,-0.504,-0.871,0.347,-0.423,-0.908,0.434,-0.296,-0.923,0.499,-0.142,-0.925,0.517,-0.007,-0.902,0.49,0.121,-0.869,0.427,0.239,-0.825,0.362,0.376,-0.754,0.275,0.492,-0.667,0.157,0.596,-0.535,0.035,0.672,-0.351,-0.075,0.72,-0.175,-0.154,0.745,-0.008,-0.203,0.757,0.162,-0.21,0.733,0.356,-0.167,0.681,0.518,-0.087,0.582,0.673,-0.019,0.439,0.8,0.055,0.242,0.886,0.106,0.048,0.922,0.127,0.341,0.332,0.219,0.312,0.318,0.238,0.282,0.311,0.253,0.24,0.306,0.265,0.182,0.308,0.268,0.125,0.317,0.254,0.072,0.327,0.23,0.033,0.332,0.206,0.014,0.338,0.199,0.319,0.35,0.24,0.294,0.368,0.254,0.255,0.387,0.264,0.197,0.399,0.263,0.144,0.395,0.251,0.084,0.378,0.229,0.036,0.354,0.211,-0.607,0.304,-0.063,-0.591,0.293,-0.031,-0.571,0.288,-0.004,-0.541,0.286,0.03,-0.495,0.288,0.061,-0.442,0.297,0.079,-0.395,0.308,0.082,-0.361,0.318,0.073,-0.341,0.325,0.076,-0.595,0.321,-0.031,-0.576,0.338,-0.004,-0.544,0.358,0.023,-0.499,0.372,0.053,-0.447,0.372,0.072,-0.394,0.36,0.076,-0.359,0.342,0.075,0.462,0.486,0.242,0.378,0.557,0.269,0.265,0.596,0.288,0.118,0.595,0.292,-0.069,0.546,0.29,0.519,0.504,0.185,0.43,0.601,0.23,0.299,0.66,0.263,0.131,0.668,0.289,-0.044,0.65,0.296,-0.702,0.461,-0.083,-0.662,0.523,-0.009,-0.588,0.558,0.068,-0.485,0.562,0.143,-0.338,0.528,0.213,-0.722,0.482,-0.166,-0.685,0.566,-0.069,-0.609,0.619,0.027,-0.498,0.632,0.133,-0.36,0.624,0.207,-0.005,-0.399,0.483,-0.041,-0.407,0.515,-0.087,-0.408,0.549,-0.15,-0.414,0.568,-0.223,-0.416,0.57,-0.298,-0.414,0.551,-0.364,-0.409,0.528,-0.418,-0.401,0.485,-0.458,-0.394,0.438,-0.486,-0.389,0.376,-0.505,-0.382,0.314,-0.497,-0.345,0.362,-0.473,-0.301,0.42,-0.43,-0.255,0.475,-0.363,-0.217,0.532,-0.295,-0.233,0.561,-0.218,-0.221,0.572,-0.131,-0.268,0.564,-0.072,-0.317,0.544,-0.03,-0.362,0.515,-0.027,-0.389,0.488,-0.061,-0.372,0.499,-0.105,-0.353,0.511,-0.161,-0.336,0.52,-0.226,-0.323,0.523,-0.291,-0.321,0.509,-0.344,-0.321,0.485,-0.392,-0.326,0.449,-0.428,-0.339,0.414,-0.457,-0.355,0.374,-0.486,-0.37,0.345,-0.454,-0.353,0.377,-0.426,-0.338,0.419,-0.389,-0.326,0.457,-0.343,-0.323,0.493,-0.29,-0.323,0.52,-0.227,-0.326,0.533,-0.163,-0.335,0.528,-0.106,-0.355,0.517,-0.064,-0.373,0.501,-0.217,0.437,0.295,-0.238,0.371,0.365,-0.255,0.312,0.44,-0.275,0.257,0.524,-0.295,0.197,0.605,-0.314,0.12,0.654,-0.315,0.046,0.65,-0.306,-0.009,0.625,-0.292,-0.046,0.551,-0.282,-0.077,0.513,-0.075,-0.087,0.46,-0.417,-0.082,0.38,-0.351,-0.08,0.48,-0.196,-0.083,0.514,-0.017,-0.022,0.417,-0.447,-0.019,0.306,-0.212,0.524,0.275,-0.208,0.621,0.257,-0.3,-0.547,0.509,0.41,0.234,0.234,-0.031,-0.719,0.546,0.681,0.204,-0.004,0.509,0.269,0.173,0.098,0.001,0.417,-0.015,0.184,0.346,-0.059,0.01,0.53,0.328,-0.023,0.389,0.5,0.637,0.12,0.177,0.78,0.198,0.596,0.508,0.054,-0.159,0.019,0.577,-0.21,-0.55,0.528,0.003,-0.246,0.515,0.057,0.132,0.356,0.162,0.077,0.374,0.365,0.732,0.167,0,0.786,0.212,-0.066,0.24,0.347,0.57,0.105,0.196,0.419,0.141,0.292,0.312,0.13,0.334,0.173,0.151,0.328,0.077,0.188,0.31,0.004,0.228,0.299,-0.171,0.35,0.366,0.538,-0.042,0.259,0.494,0.381,0.207,-0.036,0.125,0.392,-0.054,0.274,0.284,-0.098,0.09,0.539,-0.165,0.149,0.58,0.349,-0.63,0.358,0.652,-0.11,0.061,0.461,-0.549,0.279,0.645,0.365,0.004,0.021,0.06,0.396,0.514,-0.195,0.28,-0.187,0.778,0.169,0.235,-0.71,0.422,0.121,-0.768,0.481,-0.154,-0.844,0.58,-0.139,0.247,0.424,0.615,-0.275,0.113,-0.115,-0.531,0.544,0.385,-0.2,0.384,-0.119,0.301,0.348,-0.048,0.41,0.212,0.403,-0.403,0.35,-0.129,0.425,0.282,-0.068,-0.628,0.539,-0.1,0.136,0.462,-0.313,-0.752,0.57,-0.308,-0.646,0.539,-0.191,-0.647,0.555,0.115,-0.516,0.491,0.032,-0.585,0.517,0.203,-0.094,0.441,0.094,-0.167,0.463,0.267,-0.232,0.442,0.194,-0.597,0.462,0.175,-0.429,0.475,0.491,-0.329,0.29,0.561,-0.426,0.18,0.148,-0.277,0.475,-0.087,0.187,0.405,-0.18,0.093,0.618,0.007,0.48,0.23,0.127,0.528,0.259,0.678,0.048,0.03,0.278,0.203,0.291,0.181,0.212,0.297,0.094,0.234,0.282,0.025,0.263,0.259,-0.158,0.199,0.493,-0.061,0.336,0.231,-0.325,0.242,0.482,-0.334,-0.033,0.527,-0.65,0.221,-0.074,-0.515,-0.694,0.421,-0.746,0.195,-0.434,-0.7,0.257,-0.177,-0.528,0.003,0.247,-0.369,0.113,0.629,-0.398,0.181,0.237,-0.456,0.009,0.424,-0.678,-0.019,0.102,-0.347,0.187,0.565,-0.406,-0.031,0.425,-0.683,0.608,-0.212,-0.488,0.755,0.015,-0.723,0.484,-0.327,-0.4,0.013,0.506,-0.375,-0.539,0.486,-0.518,-0.236,0.37,-0.457,0.131,0.208,-0.551,0.077,0.173,-0.609,0.702,-0.1,-0.498,-0.484,0.4,-0.351,0.771,0.105,-0.698,0.168,-0.117,-0.673,0.36,-0.085,-0.75,0.102,-0.194,-0.68,0.134,-0.031,-0.624,0.124,0.062,-0.522,0.146,0.123,-0.44,0.181,0.157,-0.377,0.222,0.185,-0.756,-0.037,-0.131,-0.408,0.124,0.286,-0.425,0.09,0.453,-0.389,0.148,0.518,-0.679,-0.589,0.068,-0.754,-0.101,-0.37,-0.706,-0.511,-0.065,-0.735,0.346,-0.405,-0.455,0.061,0.264,-0.747,-0.182,-0.094,-0.726,0.361,-0.224,-0.465,-0.183,0.406,-0.636,-0.669,0.188,-0.587,-0.73,0.296,-0.439,-0.828,0.498,-0.343,0.245,0.365,-0.74,-0.258,-0.299,-0.445,-0.517,0.452,-0.56,-0.309,0.322,-0.711,-0.187,0.073,-0.321,0.297,0.287,-0.313,0.398,0.132,-0.709,-0.38,0.031,-0.28,0.417,0.229,-0.481,-0.607,0.434,-0.393,0.137,0.383,-0.402,-0.635,0.499,-0.593,-0.495,0.303,-0.495,-0.083,0.292,-0.542,-0.561,0.371,-0.62,-0.088,0.222,-0.559,-0.158,0.288,-0.667,-0.219,0.189,-0.419,0.081,0.341,-0.631,-0.566,0.243,-0.575,-0.637,0.333,-0.629,-0.408,0.248,-0.734,-0.308,-0.069,-0.678,-0.438,0.165,-0.727,-0.398,-0.211,-0.606,-0.266,0.268,-0.374,0.187,0.321,-0.407,0.091,0.558,-0.366,0.462,0.121,-0.471,0.499,0.1,-0.757,0.046,-0.41,-0.58,0.193,0.041,-0.509,0.201,0.093,-0.434,0.223,0.123,-0.334,0.281,0.15,-0.362,0.2,0.431,-0.301,0.326,0.213]},{"yaw":-0.291,"pitch":0.033,"frame":[-0.194,0.925,0.083,-0.364,0.908,-0.001,-0.495,0.857,-0.127,-0.602,0.765,-0.275,-0.67,0.64,-0.421,-0.706,0.489,-0.532,-0.704,0.335,-0.63,-0.691,0.152,-0.677,-0.686,-0.012,-0.665,-0.691,-0.17,-0.6,-0.684,-0.332,-0.501,-0.67,-0.496,-0.361,-0.663,-0.614,-0.19,-0.654,-0.691,-0.017,-0.625,-0.764,0.131,-0.59,-0.815,0.252,-0.543,-0.859,0.372,-0.468,-0.899,0.469,-0.347,-0.919,0.541,-0.195,-0.925,0.57,-0.059,-0.904,0.554,0.073,-0.873,0.5,0.196,-0.831,0.445,0.342,-0.761,0.37,0.468,-0.676,0.263,0.582,-0.545,0.149,0.665,-0.363,0.043,0.716,-0.186,-0.034,0.745,-0.021,-0.084,0.759,0.151,-0.095,0.735,0.348,-0.06,0.674,0.515,0.009,0.565,0.673,0.064,0.414,0.802,0.12,0.211,0.889,0.15,0.016,0.924,0.146,0.302,0.334,0.29,0.271,0.32,0.306,0.239,0.313,0.318,0.197,0.308,0.326,0.138,0.31,0.325,0.083,0.32,0.305,0.033,0.33,0.277,-0.004,0.334,0.251,-0.023,0.34,0.242,0.278,0.354,0.307,0.252,0.373,0.318,0.212,0.393,0.324,0.155,0.404,0.317,0.103,0.4,0.3,0.045,0.381,0.274,-0.002,0.356,0.255,-0.615,0.31,-0.081,-0.601,0.299,-0.048,-0.583,0.294,-0.02,-0.555,0.294,0.016,-0.513,0.296,0.05,-0.463,0.303,0.073,-0.419,0.314,0.079,-0.388,0.323,0.073,-0.369,0.33,0.077,-0.604,0.326,-0.049,-0.588,0.343,-0.022,-0.558,0.363,0.007,-0.516,0.376,0.04,-0.467,0.375,0.063,-0.418,0.364,0.071,-0.386,0.347,0.074,0.419,0.489,0.316,0.33,0.563,0.333,0.214,0.603,0.34,0.067,0.602,0.33,-0.116,0.553,0.315,0.481,0.507,0.263,0.385,0.606,0.297,0.25,0.667,0.316,0.079,0.677,0.326,-0.093,0.658,0.316,-0.698,0.466,-0.11,-0.664,0.527,-0.034,-0.599,0.561,0.049,-0.507,0.565,0.132,-0.374,0.534,0.214,-0.712,0.486,-0.193,-0.682,0.571,-0.096,-0.616,0.622,0.005,-0.518,0.635,0.121,-0.392,0.629,0.204,-0.053,-0.397,0.541,-0.09,-0.403,0.568,-0.137,-0.402,0.595,-0.202,-0.406,0.609,-0.276,-0.406,0.604,-0.35,-0.403,0.58,-0.411,-0.397,0.552,-0.46,-0.388,0.501,-0.495,-0.381,0.449,-0.519,-0.377,0.382,-0.534,-0.371,0.317,-0.53,-0.333,0.366,-0.512,-0.287,0.427,-0.473,-0.239,0.487,-0.412,-0.2,0.551,-0.348,-0.214,0.588,-0.273,-0.206,0.604,-0.186,-0.257,0.606,-0.125,-0.309,0.592,-0.081,-0.358,0.57,-0.075,-0.386,0.542,-0.109,-0.368,0.549,-0.156,-0.348,0.556,-0.213,-0.327,0.56,-0.278,-0.313,0.556,-0.34,-0.309,0.536,-0.39,-0.309,0.507,-0.434,-0.314,0.466,-0.465,-0.327,0.427,-0.49,-0.343,0.384,-0.515,-0.358,0.352,-0.487,-0.341,0.386,-0.462,-0.327,0.433,-0.43,-0.314,0.475,-0.388,-0.31,0.518,-0.34,-0.31,0.549,-0.279,-0.314,0.568,-0.215,-0.326,0.569,-0.156,-0.349,0.562,-0.112,-0.369,0.551,-0.261,0.444,0.307,-0.286,0.38,0.377,-0.31,0.323,0.451,-0.334,0.269,0.534,-0.361,0.211,0.614,-0.385,0.137,0.664,-0.387,0.064,0.662,-0.373,0.006,0.641,-0.354,-0.032,0.573,-0.34,-0.066,0.538,-0.129,-0.082,0.499,-0.463,-0.071,0.392,-0.404,-0.069,0.497,-0.254,-0.073,0.544,-0.07,-0.018,0.461,-0.488,-0.008,0.313,-0.255,0.531,0.285,-0.25,0.627,0.265,-0.351,-0.537,0.542,0.373,0.235,0.31,-0.087,-0.717,0.601,0.67,0.197,0.099,0.477,0.269,0.257,0.045,0.007,0.471,-0.063,0.19,0.387,-0.121,0.016,0.568,0.279,-0.021,0.463,0.47,0.638,0.194,0.137,0.786,0.237,0.574,0.507,0.14,-0.226,0.03,0.607,-0.262,-0.541,0.567,-0.051,-0.241,0.566,0.008,0.137,0.405,0.112,0.083,0.433,0.329,0.736,0.225,-0.04,0.791,0.231,-0.115,0.247,0.382,0.541,0.102,0.29,0.38,0.141,0.372,0.268,0.132,0.403,0.128,0.155,0.386,0.033,0.192,0.36,-0.038,0.232,0.34,-0.221,0.359,0.387,0.505,-0.046,0.354,0.457,0.383,0.287,-0.089,0.131,0.432,-0.097,0.279,0.319,-0.16,0.1,0.571,-0.231,0.161,0.606,0.307,-0.635,0.446,0.635,-0.118,0.169,0.428,-0.555,0.376,0.63,0.361,0.1,-0.03,0.065,0.443,0.479,-0.199,0.375,-0.224,0.78,0.175,0.187,-0.714,0.5,0.069,-0.771,0.55,-0.212,-0.84,0.629,-0.194,0.257,0.45,0.594,-0.283,0.221,-0.168,-0.526,0.59,0.34,-0.201,0.466,-0.168,0.309,0.375,-0.088,0.414,0.242,0.362,-0.407,0.438,-0.173,0.432,0.305,-0.123,-0.624,0.59,-0.157,0.144,0.493,-0.368,-0.74,0.605,-0.361,-0.634,0.574,-0.246,-0.638,0.596,0.063,-0.516,0.555,-0.021,-0.584,0.575,0.149,-0.09,0.505,0.04,-0.162,0.52,0.216,-0.231,0.514,0.143,-0.598,0.534,0.124,-0.43,0.544,0.456,-0.334,0.385,0.537,-0.434,0.286,0.094,-0.275,0.538,-0.14,0.195,0.439,-0.249,0.107,0.644,-0.035,0.485,0.265,0.08,0.533,0.303,0.664,0.041,0.138,0.235,0.206,0.357,0.138,0.215,0.355,0.052,0.238,0.332,-0.015,0.267,0.301,-0.217,0.209,0.519,-0.101,0.34,0.263,-0.381,0.255,0.489,-0.394,-0.021,0.542,-0.654,0.228,-0.093,-0.557,-0.679,0.439,-0.727,0.195,-0.461,-0.692,0.263,-0.2,-0.56,0.014,0.244,-0.436,0.129,0.636,-0.434,0.19,0.24,-0.505,0.02,0.427,-0.695,-0.008,0.085,-0.409,0.201,0.57,-0.456,-0.021,0.434,-0.673,0.608,-0.241,-0.5,0.755,-0.003,-0.707,0.484,-0.357,-0.456,0.024,0.511,-0.424,-0.528,0.514,-0.56,-0.223,0.373,-0.489,0.14,0.208,-0.577,0.087,0.165,-0.608,0.701,-0.125,-0.539,-0.471,0.41,-0.377,0.772,0.097,-0.696,0.175,-0.139,-0.67,0.366,-0.108,-0.746,0.106,-0.218,-0.687,0.141,-0.052,-0.64,0.132,0.046,-0.547,0.154,0.116,-0.47,0.189,0.156,-0.411,0.229,0.188,-0.759,-0.03,-0.155,-0.448,0.134,0.29,-0.477,0.102,0.456,-0.447,0.162,0.521,-0.696,-0.577,0.066,-0.744,-0.099,-0.389,-0.715,-0.501,-0.072,-0.715,0.346,-0.433,-0.491,0.072,0.266,-0.754,-0.173,-0.113,-0.713,0.365,-0.252,-0.512,-0.17,0.414,-0.661,-0.656,0.192,-0.619,-0.716,0.308,-0.488,-0.816,0.528,-0.39,0.256,0.371,-0.735,-0.253,-0.314,-0.491,-0.504,0.469,-0.596,-0.297,0.321,-0.728,-0.176,0.057,-0.363,0.306,0.295,-0.345,0.403,0.138,-0.724,-0.368,0.02,-0.319,0.424,0.237,-0.523,-0.592,0.453,-0.44,0.148,0.388,-0.451,-0.621,0.527,-0.625,-0.482,0.305,-0.533,-0.07,0.296,-0.579,-0.547,0.38,-0.648,-0.076,0.213,-0.594,-0.146,0.286,-0.69,-0.206,0.179,-0.463,0.092,0.346,-0.659,-0.552,0.245,-0.611,-0.622,0.343,-0.658,-0.395,0.243,-0.742,-0.298,-0.084,-0.701,-0.425,0.158,-0.727,-0.391,-0.222,-0.637,-0.253,0.263,-0.419,0.197,0.327,-0.468,0.106,0.562,-0.395,0.467,0.121,-0.491,0.502,0.091,-0.741,0.047,-0.434,-0.595,0.201,0.027,-0.529,0.209,0.084,-0.459,0.231,0.12,-0.367,0.287,0.155,-0.415,0.212,0.437,-0.339,0.333,0.221]},{"yaw":-0.363,"pitch":0.039,"frame":[-0.214,0.923,0.101,-0.377,0.904,0.009,-0.5,0.853,-0.126,-0.601,0.759,-0.28,-0.664,0.635,-0.43,-0.687,0.482,-0.543,-0.677,0.329,-0.639,-0.658,0.148,-0.684,-0.651,-0.015,-0.671,-0.655,-0.171,-0.606,-0.662,-0.329,-0.507,-0.665,-0.491,-0.366,-0.66,-0.61,-0.196,-0.665,-0.687,-0.022,-0.652,-0.76,0.127,-0.627,-0.81,0.25,-0.589,-0.853,0.373,-0.523,-0.892,0.484,-0.405,-0.915,0.557,-0.255,-0.925,0.592,-0.117,-0.908,0.585,0.021,-0.877,0.541,0.152,-0.836,0.496,0.308,-0.769,0.432,0.447,-0.684,0.336,0.569,-0.553,0.232,0.661,-0.369,0.133,0.716,-0.194,0.061,0.747,-0.027,0.013,0.763,0.145,0.002,0.737,0.343,0.033,0.671,0.511,0.094,0.555,0.672,0.14,0.399,0.803,0.184,0.192,0.892,0.199,-0.005,0.925,0.169,0.264,0.334,0.348,0.231,0.321,0.362,0.199,0.315,0.372,0.157,0.312,0.377,0.099,0.316,0.372,0.046,0.325,0.349,-0.001,0.334,0.318,-0.036,0.337,0.291,-0.053,0.342,0.281,0.24,0.354,0.363,0.214,0.373,0.372,0.175,0.392,0.375,0.119,0.404,0.364,0.07,0.4,0.343,0.013,0.381,0.316,-0.032,0.357,0.295,-0.627,0.314,-0.089,-0.615,0.305,-0.055,-0.598,0.302,-0.026,-0.573,0.302,0.012,-0.534,0.304,0.049,-0.489,0.312,0.074,-0.447,0.322,0.084,-0.419,0.329,0.08,-0.403,0.336,0.085,-0.618,0.33,-0.056,-0.604,0.348,-0.028,-0.578,0.367,0.002,-0.539,0.379,0.038,-0.494,0.378,0.064,-0.448,0.368,0.076,-0.418,0.352,0.08,0.384,0.491,0.377,0.294,0.567,0.386,0.178,0.609,0.385,0.031,0.609,0.366,-0.152,0.561,0.333,0.45,0.509,0.329,0.352,0.61,0.354,0.216,0.673,0.365,0.044,0.685,0.362,-0.129,0.666,0.334,-0.705,0.469,-0.123,-0.679,0.531,-0.045,-0.621,0.566,0.043,-0.536,0.573,0.133,-0.412,0.543,0.222,-0.715,0.489,-0.206,-0.692,0.574,-0.107,-0.635,0.627,-0.001,-0.546,0.643,0.12,-0.429,0.639,0.21,-0.109,-0.39,0.581,-0.147,-0.394,0.602,-0.198,-0.391,0.623,-0.265,-0.391,0.632,-0.338,-0.389,0.621,-0.409,-0.387,0.597,-0.466,-0.382,0.558,-0.51,-0.377,0.502,-0.54,-0.373,0.45,-0.56,-0.371,0.382,-0.573,-0.366,0.315,-0.572,-0.328,0.364,-0.559,-0.283,0.427,-0.527,-0.236,0.489,-0.472,-0.198,0.557,-0.413,-0.211,0.605,-0.34,-0.202,0.623,-0.253,-0.25,0.629,-0.189,-0.302,0.622,-0.141,-0.351,0.606,-0.131,-0.378,0.578,-0.166,-0.36,0.582,-0.213,-0.339,0.584,-0.274,-0.317,0.583,-0.338,-0.303,0.575,-0.401,-0.3,0.554,-0.446,-0.301,0.516,-0.484,-0.307,0.471,-0.511,-0.321,0.43,-0.534,-0.335,0.386,-0.556,-0.352,0.353,-0.531,-0.334,0.388,-0.511,-0.32,0.437,-0.483,-0.307,0.481,-0.447,-0.302,0.528,-0.402,-0.302,0.567,-0.341,-0.306,0.588,-0.275,-0.317,0.593,-0.214,-0.341,0.59,-0.168,-0.361,0.584,-0.301,0.449,0.321,-0.332,0.385,0.39,-0.361,0.328,0.462,-0.393,0.276,0.542,-0.426,0.22,0.62,-0.457,0.148,0.668,-0.459,0.076,0.666,-0.443,0.016,0.646,-0.417,-0.024,0.582,-0.397,-0.058,0.551,-0.19,-0.076,0.524,-0.507,-0.064,0.396,-0.456,-0.061,0.504,-0.316,-0.066,0.563,-0.128,-0.013,0.491,-0.528,0,0.317,-0.293,0.539,0.299,-0.286,0.635,0.278,-0.406,-0.53,0.56,0.338,0.236,0.371,-0.149,-0.714,0.629,0.66,0.193,0.185,0.448,0.269,0.325,-0.005,0.013,0.509,-0.108,0.196,0.418,-0.187,0.023,0.593,0.233,-0.018,0.517,0.449,0.64,0.26,0.11,0.792,0.279,0.557,0.504,0.215,-0.294,0.039,0.626,-0.32,-0.534,0.585,-0.11,-0.234,0.599,-0.038,0.143,0.441,0.065,0.089,0.475,0.306,0.74,0.28,-0.067,0.795,0.25,-0.158,0.252,0.409,0.513,0.099,0.366,0.343,0.142,0.433,0.227,0.135,0.457,0.087,0.16,0.431,-0.007,0.197,0.398,-0.078,0.236,0.373,-0.266,0.364,0.403,0.472,-0.049,0.426,0.426,0.384,0.352,-0.139,0.137,0.462,-0.135,0.283,0.349,-0.224,0.107,0.593,-0.296,0.169,0.624,0.265,-0.64,0.505,0.62,-0.122,0.254,0.395,-0.561,0.444,0.618,0.357,0.181,-0.081,0.071,0.476,0.445,-0.203,0.446,-0.252,0.783,0.191,0.137,-0.718,0.549,0.013,-0.774,0.588,-0.276,-0.836,0.649,-0.245,0.263,0.47,0.576,-0.288,0.302,-0.225,-0.521,0.615,0.295,-0.202,0.525,-0.212,0.314,0.397,-0.122,0.418,0.272,0.32,-0.411,0.501,-0.211,0.436,0.323,-0.183,-0.619,0.616,-0.213,0.151,0.516,-0.431,-0.731,0.621,-0.42,-0.626,0.59,-0.308,-0.631,0.615,0.008,-0.515,0.596,-0.078,-0.583,0.608,0.096,-0.085,0.549,-0.016,-0.157,0.558,0.163,-0.229,0.564,0.09,-0.602,0.579,0.07,-0.429,0.591,0.421,-0.337,0.454,0.513,-0.439,0.363,0.037,-0.271,0.581,-0.191,0.202,0.464,-0.32,0.117,0.662,-0.068,0.49,0.299,0.046,0.537,0.343,0.652,0.036,0.225,0.197,0.209,0.408,0.098,0.22,0.4,0.013,0.243,0.373,-0.051,0.271,0.336,-0.276,0.216,0.538,-0.135,0.343,0.293,-0.438,0.262,0.494,-0.453,-0.014,0.548,-0.661,0.232,-0.103,-0.605,-0.67,0.436,-0.717,0.194,-0.473,-0.692,0.268,-0.211,-0.594,0.022,0.241,-0.505,0.14,0.637,-0.471,0.196,0.245,-0.553,0.027,0.426,-0.714,-0.003,0.072,-0.472,0.211,0.572,-0.504,-0.014,0.437,-0.674,0.605,-0.252,-0.516,0.753,-0.003,-0.702,0.481,-0.368,-0.514,0.031,0.512,-0.476,-0.521,0.528,-0.601,-0.217,0.372,-0.521,0.146,0.209,-0.604,0.093,0.16,-0.616,0.698,-0.131,-0.583,-0.465,0.408,-0.399,0.773,0.105,-0.7,0.179,-0.152,-0.678,0.369,-0.119,-0.746,0.108,-0.232,-0.696,0.145,-0.065,-0.657,0.136,0.037,-0.571,0.16,0.112,-0.499,0.196,0.158,-0.446,0.235,0.194,-0.763,-0.026,-0.172,-0.488,0.141,0.294,-0.528,0.11,0.457,-0.505,0.171,0.522,-0.713,-0.574,0.058,-0.738,-0.097,-0.402,-0.72,-0.497,-0.082,-0.709,0.343,-0.445,-0.527,0.079,0.268,-0.759,-0.169,-0.129,-0.711,0.368,-0.266,-0.558,-0.162,0.415,-0.69,-0.651,0.186,-0.658,-0.71,0.304,-0.546,-0.807,0.539,-0.438,0.262,0.377,-0.729,-0.249,-0.326,-0.54,-0.498,0.47,-0.634,-0.292,0.317,-0.742,-0.171,0.042,-0.405,0.311,0.303,-0.379,0.41,0.15,-0.738,-0.364,0.007,-0.358,0.43,0.248,-0.57,-0.584,0.452,-0.489,0.156,0.392,-0.505,-0.613,0.539,-0.662,-0.476,0.3,-0.57,-0.063,0.296,-0.622,-0.54,0.377,-0.675,-0.069,0.204,-0.629,-0.138,0.282,-0.714,-0.2,0.167,-0.506,0.099,0.349,-0.692,-0.547,0.238,-0.65,-0.615,0.339,-0.69,-0.39,0.234,-0.748,-0.294,-0.098,-0.725,-0.42,0.147,-0.723,-0.386,-0.234,-0.67,-0.248,0.255,-0.462,0.203,0.332,-0.53,0.115,0.561,-0.427,0.474,0.129,-0.517,0.506,0.092,-0.735,0.047,-0.448,-0.612,0.206,0.021,-0.551,0.215,0.082,-0.486,0.238,0.123,-0.401,0.293,0.165,-0.469,0.219,0.441,-0.377,0.339,0.232]},{"yaw":-0.43,"pitch":0.041,"frame":[-0.235,0.918,0.124,-0.39,0.894,0.018,-0.505,0.843,-0.128,-0.598,0.753,-0.291,-0.653,0.632,-0.447,-0.67,0.481,-0.562,-0.66,0.33,-0.659,-0.641,0.152,-0.704,-0.634,-0.01,-0.69,-0.638,-0.165,-0.623,-0.647,-0.325,-0.522,-0.661,-0.49,-0.378,-0.682,-0.612,-0.204,-0.703,-0.691,-0.026,-0.701,-0.763,0.128,-0.685,-0.811,0.255,-0.655,-0.853,0.381,-0.595,-0.891,0.498,-0.482,-0.912,0.586,-0.331,-0.925,0.63,-0.185,-0.911,0.634,-0.038,-0.888,0.598,0.103,-0.852,0.563,0.275,-0.788,0.51,0.431,-0.705,0.423,0.57,-0.571,0.326,0.669,-0.383,0.234,0.727,-0.204,0.164,0.759,-0.035,0.116,0.774,0.142,0.103,0.74,0.344,0.13,0.667,0.515,0.186,0.541,0.677,0.223,0.376,0.808,0.255,0.167,0.894,0.255,-0.03,0.925,0.209,0.224,0.343,0.416,0.191,0.331,0.428,0.159,0.325,0.435,0.117,0.322,0.437,0.06,0.326,0.428,0.007,0.335,0.401,-0.039,0.344,0.367,-0.073,0.347,0.338,-0.091,0.353,0.326,0.2,0.365,0.428,0.174,0.385,0.434,0.136,0.405,0.434,0.08,0.417,0.419,0.031,0.413,0.394,-0.024,0.393,0.364,-0.07,0.368,0.341,-0.645,0.331,-0.098,-0.635,0.32,-0.063,-0.621,0.315,-0.032,-0.598,0.314,0.008,-0.562,0.316,0.048,-0.519,0.324,0.077,-0.479,0.334,0.091,-0.451,0.342,0.089,-0.435,0.349,0.096,-0.639,0.348,-0.064,-0.628,0.366,-0.035,-0.604,0.385,-0.004,-0.566,0.397,0.035,-0.521,0.395,0.066,-0.477,0.383,0.081,-0.449,0.365,0.088,0.347,0.495,0.45,0.255,0.57,0.453,0.138,0.611,0.443,-0.01,0.611,0.413,-0.195,0.563,0.365,0.418,0.513,0.404,0.314,0.612,0.424,0.176,0.676,0.424,0.003,0.687,0.409,-0.17,0.668,0.366,-0.721,0.473,-0.138,-0.703,0.535,-0.055,-0.65,0.571,0.039,-0.571,0.577,0.137,-0.453,0.548,0.237,-0.726,0.493,-0.225,-0.712,0.578,-0.119,-0.662,0.632,-0.006,-0.581,0.648,0.123,-0.47,0.644,0.223,-0.179,-0.383,0.639,-0.216,-0.388,0.655,-0.267,-0.388,0.668,-0.336,-0.394,0.671,-0.414,-0.396,0.654,-0.488,-0.395,0.622,-0.545,-0.391,0.578,-0.587,-0.385,0.519,-0.613,-0.378,0.464,-0.629,-0.373,0.395,-0.636,-0.367,0.325,-0.638,-0.33,0.375,-0.627,-0.285,0.439,-0.598,-0.238,0.504,-0.546,-0.201,0.576,-0.488,-0.211,0.63,-0.414,-0.202,0.655,-0.326,-0.248,0.668,-0.26,-0.298,0.668,-0.211,-0.345,0.66,-0.201,-0.372,0.632,-0.234,-0.355,0.631,-0.282,-0.334,0.629,-0.345,-0.314,0.624,-0.411,-0.301,0.611,-0.474,-0.3,0.584,-0.517,-0.303,0.541,-0.553,-0.309,0.493,-0.578,-0.321,0.449,-0.598,-0.336,0.401,-0.618,-0.353,0.367,-0.596,-0.334,0.404,-0.578,-0.319,0.454,-0.554,-0.307,0.501,-0.521,-0.302,0.551,-0.477,-0.301,0.596,-0.416,-0.303,0.622,-0.348,-0.314,0.632,-0.285,-0.336,0.635,-0.238,-0.356,0.633,-0.345,0.451,0.344,-0.381,0.387,0.412,-0.417,0.331,0.483,-0.454,0.278,0.562,-0.494,0.222,0.638,-0.532,0.151,0.685,-0.536,0.078,0.684,-0.517,0.018,0.664,-0.485,-0.023,0.601,-0.461,-0.057,0.571,-0.257,-0.077,0.558,-0.555,-0.064,0.408,-0.514,-0.06,0.52,-0.383,-0.063,0.593,-0.191,-0.014,0.53,-0.572,0,0.326,-0.336,0.541,0.322,-0.326,0.637,0.301,-0.478,-0.531,0.584,0.302,0.242,0.444,-0.22,-0.715,0.674,0.649,0.192,0.281,0.418,0.274,0.404,-0.062,0.013,0.558,-0.158,0.199,0.459,-0.257,0.023,0.628,0.184,-0.02,0.586,0.423,0.644,0.336,0.078,0.794,0.331,0.539,0.508,0.299,-0.367,0.04,0.657,-0.391,-0.535,0.616,-0.179,-0.232,0.647,-0.088,0.146,0.488,0.015,0.09,0.531,0.273,0.742,0.346,-0.101,0.797,0.286,-0.207,0.256,0.447,0.486,0.097,0.452,0.305,0.144,0.507,0.185,0.137,0.522,0.043,0.164,0.487,-0.051,0.202,0.447,-0.122,0.241,0.416,-0.316,0.367,0.43,0.44,-0.054,0.514,0.395,0.39,0.43,-0.194,0.139,0.501,-0.18,0.288,0.388,-0.291,0.109,0.626,-0.363,0.172,0.654,0.219,-0.656,0.581,0.607,-0.132,0.352,0.362,-0.578,0.529,0.606,0.358,0.272,-0.136,0.072,0.519,0.41,-0.211,0.532,-0.285,0.784,0.214,0.081,-0.729,0.615,-0.049,-0.78,0.645,-0.354,-0.835,0.686,-0.3,0.266,0.501,0.562,-0.301,0.397,-0.294,-0.521,0.654,0.246,-0.206,0.6,-0.26,0.318,0.43,-0.161,0.425,0.311,0.274,-0.421,0.58,-0.256,0.44,0.352,-0.252,-0.62,0.656,-0.274,0.153,0.549,-0.509,-0.729,0.647,-0.494,-0.625,0.615,-0.381,-0.631,0.646,-0.055,-0.516,0.654,-0.144,-0.583,0.659,0.039,-0.085,0.607,-0.079,-0.157,0.609,0.105,-0.231,0.629,0.029,-0.606,0.643,0.008,-0.43,0.656,0.385,-0.349,0.539,0.494,-0.455,0.455,-0.028,-0.272,0.641,-0.246,0.204,0.5,-0.393,0.12,0.691,-0.108,0.496,0.341,0.006,0.543,0.392,0.64,0.03,0.323,0.157,0.214,0.471,0.058,0.226,0.456,-0.027,0.25,0.422,-0.092,0.278,0.38,-0.337,0.219,0.569,-0.176,0.351,0.33,-0.497,0.265,0.509,-0.516,-0.014,0.564,-0.673,0.241,-0.114,-0.669,-0.67,0.444,-0.702,0.201,-0.495,-0.697,0.277,-0.226,-0.633,0.023,0.243,-0.577,0.143,0.651,-0.512,0.199,0.256,-0.605,0.027,0.434,-0.739,-0.002,0.062,-0.538,0.213,0.586,-0.557,-0.015,0.448,-0.68,0.605,-0.266,-0.534,0.751,-0.002,-0.7,0.482,-0.386,-0.574,0.031,0.523,-0.546,-0.522,0.544,-0.653,-0.217,0.38,-0.559,0.149,0.215,-0.638,0.095,0.16,-0.626,0.695,-0.139,-0.643,-0.467,0.418,-0.423,0.772,0.116,-0.707,0.187,-0.167,-0.691,0.378,-0.132,-0.754,0.112,-0.252,-0.71,0.15,-0.078,-0.68,0.14,0.029,-0.601,0.165,0.113,-0.532,0.202,0.165,-0.483,0.242,0.206,-0.774,-0.024,-0.192,-0.532,0.143,0.304,-0.584,0.112,0.466,-0.567,0.173,0.533,-0.75,-0.576,0.052,-0.732,-0.093,-0.422,-0.745,-0.498,-0.092,-0.697,0.347,-0.465,-0.568,0.08,0.275,-0.772,-0.166,-0.146,-0.713,0.374,-0.284,-0.61,-0.162,0.425,-0.737,-0.653,0.187,-0.715,-0.711,0.308,-0.621,-0.805,0.552,-0.489,0.265,0.392,-0.731,-0.247,-0.343,-0.606,-0.5,0.482,-0.684,-0.293,0.323,-0.764,-0.17,0.03,-0.451,0.315,0.319,-0.414,0.419,0.166,-0.763,-0.365,-0.003,-0.398,0.436,0.267,-0.635,-0.585,0.461,-0.541,0.158,0.405,-0.575,-0.613,0.553,-0.715,-0.478,0.305,-0.613,-0.063,0.302,-0.681,-0.541,0.384,-0.709,-0.068,0.2,-0.672,-0.137,0.284,-0.746,-0.2,0.161,-0.553,0.101,0.359,-0.741,-0.548,0.239,-0.707,-0.617,0.344,-0.736,-0.392,0.235,-0.764,-0.293,-0.112,-0.763,-0.423,0.143,-0.735,-0.385,-0.248,-0.713,-0.248,0.256,-0.51,0.206,0.345,-0.597,0.118,0.572,-0.46,0.482,0.14,-0.548,0.514,0.097,-0.725,0.052,-0.471,-0.635,0.213,0.016,-0.578,0.223,0.082,-0.517,0.247,0.129,-0.437,0.303,0.179,-0.525,0.222,0.454,-0.418,0.346,0.249]},{"yaw":-0.488,"pitch":0.04,"frame":[-0.26,0.917,0.145,-0.405,0.892,0.031,-0.509,0.84,-0.122,-0.595,0.749,-0.292,-0.649,0.627,-0.452,-0.66,0.476,-0.57,-0.646,0.326,-0.668,-0.622,0.149,-0.713,-0.617,-0.013,-0.7,-0.625,-0.169,-0.636,-0.639,-0.329,-0.537,-0.66,-0.495,-0.395,-0.682,-0.617,-0.222,-0.708,-0.695,-0.043,-0.719,-0.764,0.112,-0.714,-0.81,0.241,-0.697,-0.848,0.369,-0.647,-0.887,0.491,-0.542,-0.91,0.59,-0.394,-0.925,0.647,-0.245,-0.915,0.655,-0.092,-0.894,0.627,0.056,-0.863,0.6,0.237,-0.804,0.557,0.405,-0.724,0.482,0.555,-0.589,0.395,0.663,-0.396,0.312,0.728,-0.214,0.249,0.765,-0.041,0.206,0.782,0.139,0.195,0.746,0.343,0.221,0.667,0.515,0.274,0.53,0.679,0.304,0.357,0.81,0.325,0.142,0.896,0.312,-0.057,0.925,0.251,0.187,0.344,0.474,0.155,0.331,0.483,0.122,0.325,0.489,0.081,0.322,0.488,0.023,0.325,0.475,-0.029,0.334,0.444,-0.076,0.342,0.407,-0.11,0.345,0.377,-0.128,0.35,0.364,0.163,0.366,0.484,0.136,0.386,0.488,0.097,0.405,0.486,0.042,0.417,0.466,-0.007,0.413,0.437,-0.061,0.392,0.405,-0.107,0.366,0.381,-0.654,0.33,-0.104,-0.646,0.32,-0.068,-0.634,0.315,-0.037,-0.615,0.314,0.006,-0.584,0.315,0.048,-0.543,0.322,0.081,-0.505,0.332,0.097,-0.479,0.34,0.098,-0.463,0.347,0.105,-0.65,0.347,-0.069,-0.642,0.364,-0.039,-0.621,0.383,-0.007,-0.586,0.394,0.035,-0.543,0.392,0.069,-0.502,0.38,0.087,-0.477,0.363,0.096,0.316,0.5,0.512,0.219,0.575,0.508,0.099,0.616,0.49,-0.049,0.613,0.45,-0.234,0.562,0.39,0.391,0.517,0.472,0.282,0.618,0.484,0.14,0.68,0.475,-0.035,0.689,0.448,-0.208,0.666,0.392,-0.727,0.471,-0.15,-0.714,0.533,-0.064,-0.668,0.568,0.036,-0.598,0.575,0.14,-0.49,0.545,0.247,-0.728,0.492,-0.239,-0.719,0.575,-0.128,-0.676,0.629,-0.009,-0.605,0.646,0.126,-0.504,0.642,0.232,-0.239,-0.381,0.666,-0.278,-0.387,0.678,-0.329,-0.39,0.688,-0.398,-0.398,0.689,-0.474,-0.402,0.668,-0.545,-0.401,0.626,-0.595,-0.396,0.578,-0.629,-0.387,0.514,-0.648,-0.377,0.458,-0.658,-0.371,0.387,-0.663,-0.364,0.316,-0.668,-0.329,0.366,-0.662,-0.286,0.434,-0.639,-0.241,0.501,-0.597,-0.204,0.578,-0.543,-0.215,0.636,-0.472,-0.205,0.67,-0.387,-0.249,0.687,-0.322,-0.298,0.69,-0.272,-0.343,0.685,-0.259,-0.371,0.656,-0.291,-0.353,0.654,-0.34,-0.333,0.649,-0.402,-0.314,0.643,-0.467,-0.302,0.628,-0.527,-0.301,0.595,-0.564,-0.303,0.547,-0.595,-0.308,0.495,-0.615,-0.32,0.447,-0.632,-0.333,0.397,-0.648,-0.351,0.36,-0.631,-0.331,0.399,-0.618,-0.319,0.452,-0.598,-0.309,0.501,-0.57,-0.305,0.554,-0.531,-0.305,0.604,-0.471,-0.306,0.638,-0.405,-0.315,0.651,-0.343,-0.335,0.655,-0.295,-0.355,0.655,-0.384,0.45,0.358,-0.424,0.386,0.425,-0.463,0.33,0.495,-0.506,0.278,0.572,-0.552,0.223,0.645,-0.596,0.151,0.691,-0.601,0.077,0.689,-0.579,0.016,0.67,-0.544,-0.026,0.61,-0.515,-0.059,0.58,-0.309,-0.076,0.578,-0.602,-0.064,0.412,-0.567,-0.061,0.525,-0.439,-0.065,0.607,-0.237,-0.014,0.556,-0.614,-0.001,0.33,-0.375,0.539,0.337,-0.364,0.635,0.315,-0.533,-0.534,0.587,0.272,0.242,0.503,-0.281,-0.719,0.694,0.643,0.19,0.363,0.393,0.276,0.471,-0.107,0.012,0.592,-0.199,0.198,0.487,-0.311,0.024,0.65,0.143,-0.023,0.636,0.401,0.648,0.406,0.044,0.796,0.379,0.525,0.51,0.377,-0.425,0.039,0.674,-0.448,-0.54,0.628,-0.232,-0.234,0.672,-0.129,0.144,0.521,-0.027,0.088,0.571,0.245,0.745,0.406,-0.135,0.797,0.321,-0.249,0.255,0.472,0.462,0.094,0.523,0.275,0.143,0.566,0.151,0.136,0.573,0.006,0.162,0.529,-0.088,0.2,0.483,-0.159,0.24,0.447,-0.36,0.366,0.447,0.411,-0.059,0.58,0.367,0.393,0.496,-0.238,0.139,0.528,-0.218,0.286,0.416,-0.345,0.109,0.644,-0.42,0.172,0.67,0.176,-0.668,0.627,0.592,-0.139,0.429,0.328,-0.592,0.586,0.598,0.359,0.353,-0.18,0.072,0.549,0.379,-0.218,0.595,-0.316,0.782,0.231,0.031,-0.738,0.65,-0.105,-0.787,0.672,-0.42,-0.837,0.702,-0.347,0.266,0.519,0.542,-0.311,0.47,-0.351,-0.526,0.672,0.206,-0.212,0.652,-0.303,0.317,0.452,-0.199,0.424,0.341,0.234,-0.43,0.632,-0.294,0.438,0.372,-0.31,-0.625,0.675,-0.324,0.153,0.569,-0.569,-0.729,0.646,-0.551,-0.627,0.616,-0.44,-0.635,0.66,-0.109,-0.522,0.683,-0.2,-0.589,0.681,-0.008,-0.089,0.646,-0.129,-0.159,0.64,0.058,-0.236,0.671,-0.023,-0.613,0.676,-0.044,-0.436,0.691,0.351,-0.358,0.599,0.468,-0.468,0.521,-0.079,-0.275,0.674,-0.292,0.204,0.523,-0.456,0.12,0.706,-0.146,0.496,0.376,-0.034,0.544,0.434,0.63,0.025,0.404,0.122,0.214,0.521,0.022,0.225,0.5,-0.063,0.248,0.461,-0.129,0.276,0.414,-0.389,0.219,0.586,-0.214,0.349,0.359,-0.548,0.265,0.516,-0.576,-0.016,0.57,-0.682,0.238,-0.124,-0.712,-0.669,0.432,-0.698,0.198,-0.51,-0.699,0.275,-0.237,-0.666,0.021,0.24,-0.638,0.143,0.654,-0.548,0.197,0.261,-0.656,0.026,0.433,-0.758,-0.006,0.048,-0.594,0.214,0.591,-0.609,-0.017,0.451,-0.68,0.602,-0.273,-0.548,0.749,0.002,-0.7,0.479,-0.396,-0.632,0.029,0.524,-0.598,-0.526,0.544,-0.691,-0.217,0.373,-0.591,0.146,0.216,-0.665,0.091,0.155,-0.63,0.692,-0.142,-0.683,-0.469,0.41,-0.447,0.77,0.127,-0.713,0.183,-0.179,-0.696,0.377,-0.141,-0.758,0.108,-0.269,-0.723,0.146,-0.091,-0.701,0.136,0.02,-0.628,0.161,0.109,-0.564,0.199,0.167,-0.518,0.24,0.212,-0.782,-0.029,-0.212,-0.572,0.141,0.308,-0.636,0.112,0.468,-0.621,0.173,0.535,-0.762,-0.579,0.032,-0.734,-0.097,-0.441,-0.749,-0.503,-0.114,-0.694,0.344,-0.477,-0.605,0.078,0.276,-0.779,-0.171,-0.166,-0.713,0.373,-0.296,-0.654,-0.163,0.422,-0.758,-0.654,0.169,-0.744,-0.71,0.293,-0.674,-0.803,0.544,-0.534,0.264,0.4,-0.732,-0.252,-0.363,-0.651,-0.502,0.476,-0.717,-0.294,0.312,-0.779,-0.174,0.012,-0.49,0.313,0.329,-0.446,0.417,0.178,-0.774,-0.369,-0.023,-0.438,0.433,0.279,-0.677,-0.586,0.452,-0.587,0.158,0.409,-0.628,-0.614,0.549,-0.744,-0.48,0.292,-0.652,-0.064,0.3,-0.716,-0.543,0.373,-0.736,-0.072,0.19,-0.706,-0.14,0.277,-0.768,-0.203,0.147,-0.598,0.1,0.363,-0.764,-0.55,0.223,-0.739,-0.616,0.33,-0.761,-0.395,0.219,-0.772,-0.297,-0.132,-0.781,-0.427,0.125,-0.736,-0.389,-0.269,-0.742,-0.25,0.244,-0.553,0.205,0.351,-0.655,0.117,0.571,-0.489,0.48,0.15,-0.571,0.511,0.1,-0.724,0.048,-0.488,-0.654,0.21,0.01,-0.603,0.22,0.08,-0.545,0.244,0.132,-0.471,0.301,0.189,-0.574,0.221,0.459,-0.457,0.344,0.26]},{"yaw":-0.573,"pitch":0.04,"frame":[-0.275,0.913,0.158,-0.413,0.883,0.033,-0.51,0.827,-0.13,-0.583,0.732,-0.304,-0.623,0.606,-0.466,-0.621,0.456,-0.583,-0.593,0.31,-0.677,-0.559,0.136,-0.72,-0.548,-0.024,-0.705,-0.556,-0.178,-0.64,-0.571,-0.339,-0.541,-0.598,-0.505,-0.398,-0.649,-0.625,-0.226,-0.686,-0.7,-0.046,-0.71,-0.765,0.111,-0.717,-0.808,0.24,-0.711,-0.846,0.369,-0.672,-0.883,0.491,-0.576,-0.908,0.591,-0.437,-0.925,0.657,-0.292,-0.917,0.677,-0.138,-0.9,0.659,0.014,-0.872,0.641,0.203,-0.816,0.608,0.38,-0.739,0.54,0.539,-0.605,0.46,0.65,-0.411,0.38,0.717,-0.224,0.319,0.757,-0.047,0.275,0.776,0.137,0.262,0.738,0.345,0.281,0.657,0.518,0.326,0.516,0.684,0.348,0.339,0.815,0.359,0.121,0.899,0.336,-0.077,0.925,0.269,0.169,0.345,0.508,0.135,0.331,0.516,0.101,0.323,0.52,0.058,0.319,0.517,-0.001,0.321,0.501,-0.053,0.329,0.468,-0.097,0.338,0.43,-0.13,0.341,0.399,-0.146,0.346,0.386,0.143,0.367,0.516,0.116,0.386,0.519,0.075,0.405,0.514,0.018,0.416,0.492,-0.03,0.411,0.461,-0.085,0.39,0.429,-0.128,0.363,0.403,-0.655,0.32,-0.116,-0.65,0.309,-0.08,-0.64,0.305,-0.048,-0.623,0.304,-0.005,-0.594,0.305,0.039,-0.553,0.313,0.075,-0.518,0.325,0.094,-0.493,0.335,0.097,-0.477,0.342,0.105,-0.654,0.337,-0.081,-0.646,0.353,-0.051,-0.627,0.371,-0.018,-0.594,0.383,0.026,-0.553,0.382,0.062,-0.513,0.372,0.084,-0.49,0.357,0.095,0.284,0.508,0.545,0.185,0.584,0.535,0.064,0.625,0.512,-0.081,0.62,0.467,-0.259,0.562,0.402,0.361,0.525,0.508,0.248,0.627,0.514,0.103,0.688,0.498,-0.069,0.692,0.464,-0.235,0.667,0.404,-0.723,0.455,-0.168,-0.716,0.516,-0.083,-0.675,0.555,0.02,-0.609,0.566,0.13,-0.505,0.54,0.244,-0.717,0.474,-0.257,-0.717,0.556,-0.146,-0.681,0.613,-0.025,-0.615,0.633,0.115,-0.519,0.634,0.228,-0.27,-0.383,0.688,-0.307,-0.389,0.695,-0.36,-0.393,0.7,-0.429,-0.403,0.698,-0.504,-0.406,0.672,-0.571,-0.405,0.626,-0.618,-0.401,0.576,-0.649,-0.391,0.51,-0.663,-0.379,0.453,-0.67,-0.371,0.381,-0.67,-0.365,0.309,-0.68,-0.331,0.357,-0.679,-0.291,0.425,-0.662,-0.247,0.493,-0.625,-0.212,0.571,-0.576,-0.222,0.632,-0.505,-0.212,0.671,-0.421,-0.255,0.695,-0.355,-0.303,0.702,-0.303,-0.346,0.702,-0.289,-0.374,0.674,-0.319,-0.356,0.67,-0.368,-0.336,0.662,-0.43,-0.316,0.652,-0.495,-0.304,0.635,-0.551,-0.302,0.596,-0.588,-0.305,0.544,-0.614,-0.311,0.491,-0.632,-0.321,0.443,-0.645,-0.334,0.392,-0.659,-0.352,0.354,-0.645,-0.333,0.392,-0.635,-0.322,0.445,-0.619,-0.313,0.494,-0.593,-0.31,0.549,-0.557,-0.309,0.601,-0.5,-0.311,0.643,-0.436,-0.319,0.659,-0.372,-0.339,0.665,-0.323,-0.358,0.669,-0.402,0.447,0.364,-0.445,0.383,0.428,-0.488,0.327,0.494,-0.535,0.276,0.568,-0.586,0.221,0.638,-0.636,0.15,0.682,-0.644,0.075,0.681,-0.619,0.014,0.663,-0.582,-0.029,0.606,-0.551,-0.062,0.578,-0.343,-0.08,0.589,-0.627,-0.067,0.407,-0.597,-0.065,0.521,-0.475,-0.069,0.61,-0.269,-0.019,0.571,-0.632,-0.005,0.325,-0.394,0.536,0.342,-0.385,0.632,0.321,-0.561,-0.535,0.589,0.244,0.243,0.54,-0.325,-0.723,0.71,0.623,0.191,0.419,0.363,0.279,0.513,-0.141,0.009,0.614,-0.225,0.195,0.504,-0.35,0.021,0.66,0.105,-0.027,0.67,0.378,0.655,0.442,0.018,0.8,0.399,0.505,0.514,0.42,-0.466,0.037,0.681,-0.48,-0.542,0.633,-0.27,-0.239,0.687,-0.157,0.141,0.541,-0.059,0.085,0.595,0.219,0.753,0.434,-0.158,0.798,0.336,-0.274,0.253,0.486,0.431,0.093,0.57,0.239,0.142,0.604,0.116,0.134,0.606,-0.023,0.16,0.555,-0.113,0.197,0.504,-0.182,0.237,0.465,-0.383,0.363,0.455,0.376,-0.063,0.628,0.337,0.399,0.534,-0.267,0.136,0.543,-0.239,0.283,0.432,-0.383,0.107,0.654,-0.459,0.171,0.672,0.137,-0.679,0.672,0.564,-0.146,0.488,0.295,-0.605,0.638,0.578,0.362,0.404,-0.21,0.068,0.567,0.343,-0.224,0.643,-0.335,0.78,0.24,-0.013,-0.746,0.687,-0.153,-0.793,0.701,-0.462,-0.838,0.71,-0.376,0.264,0.529,0.513,-0.322,0.528,-0.386,-0.53,0.683,0.167,-0.219,0.692,-0.327,0.315,0.463,-0.22,0.421,0.358,0.198,-0.44,0.677,-0.314,0.436,0.384,-0.348,-0.629,0.689,-0.357,0.151,0.579,-0.603,-0.728,0.646,-0.581,-0.627,0.616,-0.475,-0.636,0.665,-0.147,-0.529,0.708,-0.239,-0.595,0.702,-0.047,-0.093,0.674,-0.167,-0.163,0.661,0.019,-0.242,0.703,-0.065,-0.621,0.708,-0.082,-0.442,0.72,0.316,-0.367,0.648,0.44,-0.481,0.578,-0.118,-0.28,0.7,-0.32,0.201,0.535,-0.498,0.119,0.706,-0.169,0.496,0.395,-0.063,0.546,0.454,0.605,0.023,0.462,0.094,0.212,0.552,-0.005,0.222,0.526,-0.088,0.245,0.484,-0.15,0.273,0.433,-0.422,0.217,0.594,-0.233,0.345,0.375,-0.575,0.262,0.508,-0.612,-0.018,0.565,-0.676,0.228,-0.137,-0.729,-0.671,0.43,-0.652,0.186,-0.523,-0.681,0.264,-0.251,-0.676,0.015,0.231,-0.675,0.142,0.643,-0.563,0.192,0.257,-0.684,0.024,0.423,-0.751,-0.015,0.033,-0.627,0.212,0.581,-0.638,-0.019,0.444,-0.667,0.583,-0.29,-0.554,0.738,-0.008,-0.676,0.46,-0.412,-0.666,0.028,0.514,-0.622,-0.528,0.546,-0.709,-0.223,0.363,-0.603,0.14,0.209,-0.67,0.084,0.144,-0.628,0.677,-0.156,-0.7,-0.473,0.405,-0.46,0.763,0.125,-0.699,0.172,-0.193,-0.689,0.364,-0.156,-0.733,0.096,-0.287,-0.717,0.135,-0.106,-0.702,0.127,0.007,-0.637,0.154,0.099,-0.578,0.193,0.161,-0.535,0.234,0.208,-0.757,-0.038,-0.228,-0.589,0.137,0.303,-0.663,0.109,0.458,-0.651,0.171,0.524,-0.748,-0.584,0.028,-0.68,-0.106,-0.452,-0.726,-0.51,-0.121,-0.659,0.329,-0.491,-0.618,0.073,0.27,-0.755,-0.179,-0.18,-0.692,0.36,-0.313,-0.676,-0.168,0.414,-0.754,-0.657,0.166,-0.75,-0.71,0.291,-0.7,-0.801,0.544,-0.556,0.26,0.395,-0.683,-0.26,-0.372,-0.672,-0.505,0.473,-0.732,-0.3,0.302,-0.765,-0.182,-0.002,-0.508,0.309,0.326,-0.459,0.412,0.181,-0.759,-0.376,-0.032,-0.455,0.429,0.282,-0.696,-0.589,0.45,-0.611,0.154,0.402,-0.652,-0.616,0.549,-0.753,-0.485,0.286,-0.667,-0.068,0.293,-0.728,-0.547,0.369,-0.738,-0.079,0.179,-0.718,-0.145,0.268,-0.767,-0.21,0.136,-0.617,0.096,0.357,-0.767,-0.555,0.218,-0.748,-0.619,0.327,-0.767,-0.401,0.21,-0.749,-0.305,-0.143,-0.776,-0.434,0.117,-0.701,-0.398,-0.277,-0.751,-0.257,0.233,-0.572,0.2,0.346,-0.689,0.116,0.559,-0.502,0.473,0.148,-0.581,0.502,0.092,-0.672,0.037,-0.501,-0.656,0.201,-0.002,-0.611,0.212,0.071,-0.557,0.237,0.127,-0.486,0.296,0.19,-0.599,0.218,0.451,-0.474,0.34,0.262]},{"yaw":-0.628,"pitch":0.037,"frame":[-0.287,0.908,0.155,-0.416,0.876,0.024,-0.504,0.82,-0.144,-0.567,0.723,-0.32,-0.598,0.594,-0.482,-0.585,0.442,-0.599,-0.553,0.296,-0.69,-0.519,0.122,-0.731,-0.512,-0.035,-0.715,-0.525,-0.187,-0.651,-0.547,-0.345,-0.551,-0.577,-0.506,-0.411,-0.625,-0.62,-0.24,-0.669,-0.691,-0.059,-0.697,-0.754,0.098,-0.711,-0.798,0.228,-0.714,-0.839,0.358,-0.684,-0.879,0.485,-0.598,-0.905,0.588,-0.466,-0.925,0.659,-0.325,-0.92,0.686,-0.172,-0.905,0.674,-0.019,-0.879,0.663,0.176,-0.829,0.638,0.361,-0.757,0.58,0.527,-0.623,0.509,0.644,-0.428,0.435,0.712,-0.238,0.378,0.754,-0.057,0.338,0.773,0.131,0.325,0.735,0.343,0.341,0.651,0.519,0.379,0.506,0.689,0.392,0.323,0.821,0.392,0.101,0.903,0.356,-0.095,0.925,0.275,0.148,0.343,0.534,0.114,0.327,0.541,0.079,0.319,0.542,0.036,0.313,0.537,-0.022,0.314,0.518,-0.071,0.322,0.481,-0.113,0.331,0.442,-0.144,0.334,0.41,-0.159,0.34,0.396,0.121,0.364,0.54,0.095,0.383,0.541,0.054,0.401,0.533,-0.004,0.411,0.509,-0.049,0.405,0.475,-0.101,0.384,0.441,-0.142,0.356,0.414,-0.649,0.296,-0.134,-0.646,0.288,-0.098,-0.639,0.284,-0.066,-0.624,0.283,-0.022,-0.597,0.284,0.024,-0.558,0.293,0.062,-0.525,0.307,0.082,-0.503,0.319,0.087,-0.488,0.326,0.097,-0.647,0.313,-0.099,-0.641,0.329,-0.069,-0.625,0.347,-0.035,-0.594,0.359,0.011,-0.555,0.36,0.048,-0.519,0.354,0.073,-0.5,0.341,0.085,0.26,0.51,0.571,0.16,0.588,0.554,0.038,0.631,0.523,-0.106,0.625,0.471,-0.279,0.563,0.399,0.34,0.527,0.543,0.222,0.631,0.537,0.076,0.693,0.513,-0.094,0.695,0.468,-0.258,0.668,0.401,-0.708,0.433,-0.193,-0.706,0.498,-0.108,-0.675,0.543,-0.002,-0.618,0.557,0.111,-0.52,0.532,0.23,-0.697,0.452,-0.283,-0.706,0.536,-0.171,-0.679,0.598,-0.047,-0.623,0.621,0.096,-0.534,0.626,0.212,-0.301,-0.382,0.691,-0.339,-0.389,0.695,-0.392,-0.393,0.699,-0.461,-0.403,0.695,-0.534,-0.406,0.666,-0.6,-0.404,0.618,-0.645,-0.401,0.565,-0.673,-0.391,0.495,-0.685,-0.377,0.436,-0.689,-0.369,0.362,-0.688,-0.363,0.289,-0.7,-0.329,0.336,-0.704,-0.29,0.403,-0.689,-0.247,0.473,-0.655,-0.213,0.554,-0.605,-0.221,0.616,-0.534,-0.211,0.659,-0.451,-0.255,0.69,-0.386,-0.303,0.699,-0.335,-0.346,0.702,-0.319,-0.373,0.674,-0.351,-0.355,0.67,-0.4,-0.334,0.661,-0.461,-0.315,0.65,-0.524,-0.303,0.63,-0.579,-0.301,0.589,-0.614,-0.305,0.533,-0.638,-0.31,0.477,-0.653,-0.321,0.428,-0.664,-0.332,0.375,-0.675,-0.351,0.335,-0.663,-0.333,0.372,-0.655,-0.322,0.425,-0.641,-0.314,0.476,-0.618,-0.311,0.533,-0.583,-0.308,0.587,-0.528,-0.311,0.631,-0.464,-0.32,0.653,-0.402,-0.34,0.66,-0.355,-0.358,0.668,-0.417,0.44,0.355,-0.462,0.375,0.415,-0.508,0.319,0.479,-0.559,0.269,0.551,-0.615,0.216,0.619,-0.666,0.145,0.662,-0.674,0.07,0.66,-0.649,0.008,0.645,-0.609,-0.034,0.59,-0.576,-0.067,0.566,-0.366,-0.086,0.586,-0.65,-0.073,0.392,-0.622,-0.071,0.507,-0.501,-0.073,0.6,-0.291,-0.026,0.573,-0.652,-0.012,0.31,-0.411,0.531,0.332,-0.403,0.628,0.312,-0.588,-0.535,0.584,0.223,0.238,0.568,-0.36,-0.727,0.715,0.611,0.187,0.47,0.342,0.276,0.548,-0.169,0.003,0.622,-0.245,0.189,0.505,-0.378,0.016,0.656,0.077,-0.033,0.691,0.36,0.66,0.474,-0.004,0.804,0.41,0.492,0.515,0.462,-0.494,0.033,0.67,-0.511,-0.543,0.63,-0.304,-0.243,0.687,-0.178,0.136,0.547,-0.084,0.08,0.607,0.198,0.759,0.457,-0.179,0.799,0.338,-0.295,0.246,0.485,0.41,0.088,0.61,0.215,0.136,0.633,0.091,0.128,0.627,-0.046,0.153,0.568,-0.132,0.191,0.512,-0.2,0.23,0.469,-0.402,0.356,0.449,0.353,-0.07,0.665,0.314,0.399,0.566,-0.29,0.13,0.544,-0.257,0.277,0.433,-0.412,0.102,0.648,-0.489,0.166,0.659,0.104,-0.69,0.698,0.547,-0.156,0.538,0.269,-0.62,0.672,0.567,0.361,0.451,-0.233,0.063,0.571,0.319,-0.233,0.679,-0.352,0.775,0.234,-0.049,-0.753,0.704,-0.19,-0.798,0.712,-0.495,-0.839,0.707,-0.4,0.258,0.524,0.495,-0.335,0.575,-0.419,-0.533,0.683,0.14,-0.227,0.716,-0.348,0.308,0.459,-0.233,0.416,0.362,0.17,-0.451,0.705,-0.33,0.431,0.381,-0.383,-0.633,0.692,-0.383,0.145,0.574,-0.628,-0.728,0.64,-0.608,-0.626,0.612,-0.506,-0.638,0.662,-0.183,-0.535,0.715,-0.274,-0.601,0.707,-0.078,-0.1,0.686,-0.198,-0.169,0.667,-0.012,-0.249,0.72,-0.102,-0.628,0.72,-0.117,-0.449,0.731,0.293,-0.378,0.682,0.419,-0.496,0.62,-0.151,-0.287,0.708,-0.344,0.195,0.532,-0.531,0.114,0.69,-0.185,0.493,0.4,-0.082,0.544,0.463,0.589,0.016,0.513,0.07,0.207,0.571,-0.026,0.216,0.54,-0.106,0.238,0.495,-0.165,0.266,0.439,-0.449,0.211,0.586,-0.247,0.339,0.378,-0.598,0.255,0.49,-0.637,-0.024,0.548,-0.663,0.208,-0.158,-0.739,-0.667,0.417,-0.62,0.172,-0.541,-0.662,0.244,-0.271,-0.686,0.008,0.214,-0.703,0.136,0.621,-0.575,0.184,0.242,-0.708,0.017,0.404,-0.748,-0.022,0.008,-0.652,0.206,0.561,-0.663,-0.025,0.428,-0.649,0.571,-0.311,-0.554,0.73,-0.024,-0.65,0.444,-0.432,-0.692,0.021,0.494,-0.646,-0.529,0.54,-0.729,-0.227,0.342,-0.611,0.133,0.193,-0.676,0.077,0.124,-0.617,0.667,-0.176,-0.717,-0.474,0.388,-0.469,0.756,0.113,-0.684,0.153,-0.214,-0.674,0.342,-0.178,-0.707,0.084,-0.312,-0.707,0.12,-0.129,-0.701,0.116,-0.015,-0.643,0.145,0.081,-0.587,0.184,0.146,-0.545,0.226,0.195,-0.734,-0.047,-0.254,-0.604,0.129,0.288,-0.687,0.102,0.438,-0.675,0.165,0.503,-0.736,-0.577,0.01,-0.652,-0.115,-0.472,-0.709,-0.506,-0.139,-0.627,0.315,-0.51,-0.631,0.066,0.255,-0.736,-0.185,-0.205,-0.668,0.341,-0.335,-0.7,-0.172,0.395,-0.745,-0.649,0.15,-0.745,-0.702,0.277,-0.716,-0.799,0.534,-0.574,0.253,0.379,-0.657,-0.266,-0.392,-0.692,-0.506,0.459,-0.75,-0.303,0.28,-0.76,-0.188,-0.027,-0.522,0.301,0.313,-0.47,0.402,0.173,-0.75,-0.378,-0.054,-0.468,0.421,0.272,-0.71,-0.587,0.438,-0.631,0.147,0.385,-0.673,-0.616,0.542,-0.759,-0.484,0.267,-0.683,-0.074,0.277,-0.738,-0.546,0.354,-0.745,-0.085,0.158,-0.732,-0.15,0.248,-0.77,-0.215,0.115,-0.637,0.088,0.341,-0.765,-0.551,0.2,-0.75,-0.615,0.312,-0.773,-0.403,0.189,-0.733,-0.308,-0.166,-0.772,-0.434,0.096,-0.676,-0.398,-0.297,-0.763,-0.261,0.211,-0.589,0.193,0.33,-0.715,0.109,0.536,-0.511,0.461,0.138,-0.587,0.486,0.076,-0.641,0.026,-0.521,-0.655,0.187,-0.021,-0.614,0.199,0.053,-0.563,0.225,0.114,-0.496,0.286,0.18,-0.62,0.211,0.433,-0.487,0.332,0.251]},{"yaw":-0.695,"pitch":0.035,"frame":[-0.275,0.908,0.156,-0.398,0.874,0.012,-0.481,0.817,-0.159,-0.537,0.723,-0.336,-0.551,0.597,-0.494,-0.523,0.449,-0.606,-0.484,0.307,-0.692,-0.448,0.132,-0.729,-0.444,-0.026,-0.713,-0.465,-0.179,-0.65,-0.494,-0.336,-0.551,-0.534,-0.493,-0.411,-0.59,-0.607,-0.243,-0.64,-0.678,-0.066,-0.677,-0.743,0.088,-0.697,-0.789,0.216,-0.708,-0.832,0.345,-0.687,-0.875,0.472,-0.609,-0.904,0.581,-0.484,-0.925,0.659,-0.347,-0.921,0.69,-0.195,-0.909,0.679,-0.043,-0.887,0.67,0.155,-0.843,0.649,0.342,-0.771,0.597,0.511,-0.638,0.533,0.629,-0.443,0.464,0.7,-0.249,0.412,0.744,-0.062,0.374,0.766,0.132,0.362,0.729,0.348,0.375,0.647,0.526,0.407,0.503,0.696,0.415,0.32,0.825,0.408,0.102,0.904,0.366,-0.089,0.925,0.283,0.146,0.334,0.543,0.112,0.319,0.548,0.077,0.309,0.549,0.034,0.301,0.542,-0.023,0.3,0.522,-0.069,0.306,0.485,-0.107,0.314,0.445,-0.134,0.317,0.414,-0.147,0.323,0.4,0.12,0.356,0.547,0.093,0.375,0.547,0.052,0.393,0.538,-0.004,0.401,0.513,-0.046,0.393,0.478,-0.094,0.37,0.445,-0.131,0.341,0.418,-0.625,0.273,-0.144,-0.623,0.265,-0.108,-0.616,0.262,-0.076,-0.603,0.262,-0.033,-0.576,0.263,0.012,-0.54,0.273,0.05,-0.51,0.287,0.072,-0.491,0.298,0.077,-0.477,0.305,0.087,-0.625,0.289,-0.11,-0.62,0.306,-0.08,-0.604,0.324,-0.047,-0.576,0.337,-0.001,-0.539,0.339,0.037,-0.506,0.332,0.062,-0.489,0.32,0.075,0.249,0.508,0.58,0.149,0.587,0.559,0.028,0.628,0.526,-0.109,0.621,0.471,-0.273,0.556,0.395,0.329,0.526,0.555,0.21,0.631,0.545,0.066,0.689,0.517,-0.097,0.689,0.469,-0.254,0.661,0.396,-0.676,0.416,-0.205,-0.678,0.48,-0.123,-0.65,0.525,-0.018,-0.597,0.541,0.095,-0.504,0.516,0.215,-0.666,0.436,-0.292,-0.675,0.518,-0.185,-0.651,0.579,-0.062,-0.6,0.602,0.079,-0.516,0.609,0.196,-0.307,-0.379,0.686,-0.345,-0.386,0.688,-0.402,-0.391,0.69,-0.475,-0.401,0.684,-0.55,-0.404,0.653,-0.615,-0.401,0.603,-0.658,-0.397,0.546,-0.686,-0.387,0.474,-0.696,-0.371,0.414,-0.698,-0.361,0.339,-0.694,-0.352,0.268,-0.709,-0.32,0.313,-0.714,-0.282,0.381,-0.699,-0.241,0.451,-0.663,-0.21,0.533,-0.613,-0.217,0.596,-0.54,-0.208,0.641,-0.457,-0.253,0.676,-0.391,-0.301,0.689,-0.341,-0.343,0.695,-0.323,-0.371,0.667,-0.356,-0.352,0.662,-0.405,-0.332,0.653,-0.469,-0.312,0.64,-0.534,-0.301,0.618,-0.591,-0.299,0.573,-0.625,-0.302,0.514,-0.649,-0.306,0.457,-0.661,-0.315,0.407,-0.671,-0.324,0.353,-0.68,-0.343,0.313,-0.67,-0.327,0.35,-0.662,-0.319,0.403,-0.649,-0.313,0.455,-0.625,-0.311,0.513,-0.591,-0.308,0.569,-0.535,-0.312,0.613,-0.471,-0.321,0.637,-0.409,-0.339,0.649,-0.358,-0.357,0.659,-0.405,0.427,0.343,-0.451,0.36,0.402,-0.499,0.306,0.465,-0.551,0.258,0.535,-0.61,0.207,0.599,-0.664,0.14,0.64,-0.676,0.065,0.639,-0.65,0.004,0.624,-0.614,-0.038,0.574,-0.581,-0.07,0.551,-0.372,-0.093,0.58,-0.646,-0.076,0.379,-0.622,-0.074,0.492,-0.508,-0.081,0.587,-0.295,-0.034,0.571,-0.644,-0.015,0.298,-0.399,0.52,0.319,-0.391,0.617,0.299,-0.6,-0.532,0.575,0.218,0.231,0.577,-0.375,-0.731,0.714,0.602,0.186,0.495,0.335,0.27,0.561,-0.173,-0.004,0.621,-0.243,0.181,0.503,-0.385,0.01,0.648,0.071,-0.042,0.694,0.354,0.664,0.489,-0.006,0.802,0.415,0.485,0.52,0.482,-0.501,0.027,0.656,-0.522,-0.542,0.624,-0.311,-0.247,0.681,-0.178,0.129,0.546,-0.088,0.073,0.607,0.191,0.761,0.466,-0.174,0.796,0.339,-0.29,0.236,0.481,0.401,0.081,0.624,0.205,0.127,0.64,0.084,0.119,0.631,-0.05,0.144,0.569,-0.132,0.181,0.513,-0.197,0.219,0.468,-0.394,0.343,0.439,0.342,-0.08,0.676,0.305,0.396,0.578,-0.289,0.122,0.54,-0.249,0.266,0.431,-0.415,0.094,0.638,-0.49,0.157,0.643,0.086,-0.703,0.705,0.533,-0.166,0.56,0.253,-0.635,0.684,0.559,0.363,0.475,-0.234,0.056,0.569,0.309,-0.246,0.689,-0.34,0.771,0.227,-0.069,-0.763,0.707,-0.212,-0.805,0.713,-0.511,-0.84,0.702,-0.396,0.246,0.515,0.48,-0.349,0.594,-0.43,-0.533,0.677,0.132,-0.239,0.72,-0.342,0.296,0.453,-0.221,0.403,0.363,0.159,-0.466,0.711,-0.318,0.419,0.377,-0.394,-0.636,0.689,-0.382,0.136,0.566,-0.639,-0.728,0.627,-0.618,-0.625,0.601,-0.517,-0.639,0.655,-0.194,-0.54,0.712,-0.284,-0.605,0.704,-0.085,-0.109,0.686,-0.206,-0.176,0.664,-0.021,-0.259,0.72,-0.117,-0.637,0.72,-0.126,-0.456,0.728,0.282,-0.392,0.692,0.404,-0.511,0.636,-0.158,-0.292,0.704,-0.341,0.185,0.526,-0.535,0.107,0.673,-0.177,0.482,0.402,-0.083,0.534,0.465,0.577,0.01,0.537,0.066,0.198,0.576,-0.028,0.206,0.543,-0.105,0.226,0.497,-0.159,0.253,0.44,-0.446,0.201,0.574,-0.236,0.325,0.377,-0.589,0.245,0.473,-0.638,-0.026,0.531,-0.637,0.191,-0.167,-0.735,-0.664,0.402,-0.561,0.175,-0.545,-0.63,0.228,-0.278,-0.675,0.006,0.201,-0.699,0.131,0.598,-0.561,0.175,0.23,-0.699,0.013,0.387,-0.728,-0.023,-0.004,-0.646,0.198,0.541,-0.659,-0.027,0.413,-0.616,0.567,-0.324,-0.531,0.722,-0.042,-0.6,0.443,-0.441,-0.688,0.019,0.475,-0.654,-0.525,0.528,-0.729,-0.223,0.322,-0.597,0.126,0.181,-0.66,0.073,0.111,-0.59,0.662,-0.191,-0.72,-0.468,0.368,-0.452,0.749,0.097,-0.654,0.14,-0.221,-0.645,0.323,-0.189,-0.667,0.081,-0.318,-0.682,0.108,-0.139,-0.681,0.107,-0.026,-0.627,0.135,0.069,-0.572,0.171,0.135,-0.531,0.214,0.184,-0.703,-0.048,-0.261,-0.593,0.122,0.276,-0.678,0.096,0.42,-0.667,0.158,0.484,-0.715,-0.566,0.001,-0.603,-0.112,-0.473,-0.681,-0.493,-0.145,-0.571,0.317,-0.516,-0.621,0.062,0.242,-0.709,-0.18,-0.212,-0.63,0.328,-0.343,-0.699,-0.171,0.378,-0.729,-0.638,0.138,-0.733,-0.694,0.263,-0.719,-0.796,0.518,-0.563,0.242,0.364,-0.617,-0.257,-0.393,-0.697,-0.502,0.441,-0.751,-0.297,0.259,-0.741,-0.184,-0.038,-0.509,0.288,0.3,-0.456,0.383,0.163,-0.731,-0.369,-0.063,-0.453,0.406,0.261,-0.709,-0.584,0.423,-0.621,0.139,0.371,-0.677,-0.614,0.529,-0.754,-0.478,0.248,-0.676,-0.076,0.263,-0.735,-0.54,0.336,-0.733,-0.085,0.145,-0.725,-0.149,0.232,-0.757,-0.212,0.102,-0.626,0.082,0.327,-0.754,-0.544,0.184,-0.742,-0.608,0.297,-0.766,-0.397,0.171,-0.708,-0.299,-0.173,-0.759,-0.427,0.082,-0.641,-0.385,-0.3,-0.756,-0.256,0.194,-0.577,0.184,0.317,-0.709,0.104,0.515,-0.496,0.44,0.125,-0.566,0.465,0.062,-0.585,0.029,-0.522,-0.635,0.173,-0.033,-0.595,0.184,0.042,-0.547,0.209,0.104,-0.484,0.269,0.17,-0.61,0.202,0.417,-0.475,0.318,0.24]},{"yaw":-0.666,"pitch":-0.004,"frame":[-0.366,0.908,0.3,-0.493,0.88,0.159,-0.575,0.83,-0.018,-0.625,0.747,-0.209,-0.635,0.637,-0.387,-0.603,0.508,-0.525,-0.553,0.38,-0.642,-0.499,0.221,-0.706,-0.476,0.072,-0.711,-0.473,-0.077,-0.672,-0.478,-0.233,-0.598,-0.493,-0.397,-0.481,-0.528,-0.527,-0.325,-0.57,-0.617,-0.154,-0.601,-0.701,-0.004,-0.62,-0.762,0.12,-0.628,-0.821,0.245,-0.606,-0.875,0.367,-0.529,-0.908,0.472,-0.394,-0.925,0.546,-0.256,-0.909,0.579,-0.106,-0.875,0.574,0.045,-0.828,0.568,0.234,-0.751,0.551,0.414,-0.655,0.506,0.568,-0.506,0.452,0.664,-0.307,0.405,0.719,-0.119,0.375,0.75,0.058,0.361,0.755,0.235,0.375,0.702,0.427,0.428,0.609,0.582,0.482,0.455,0.728,0.51,0.262,0.841,0.523,0.033,0.908,0.497,-0.17,0.925,0.42,0.119,0.359,0.598,0.083,0.342,0.602,0.047,0.333,0.603,0.002,0.326,0.595,-0.055,0.326,0.576,-0.104,0.333,0.539,-0.147,0.34,0.5,-0.18,0.344,0.469,-0.197,0.349,0.455,0.092,0.38,0.605,0.064,0.398,0.607,0.023,0.416,0.601,-0.036,0.427,0.577,-0.086,0.422,0.542,-0.137,0.399,0.505,-0.178,0.368,0.476,-0.678,0.331,-0.094,-0.672,0.319,-0.059,-0.662,0.312,-0.027,-0.646,0.309,0.017,-0.616,0.309,0.064,-0.576,0.317,0.104,-0.544,0.329,0.127,-0.522,0.339,0.133,-0.509,0.344,0.144,-0.678,0.345,-0.057,-0.673,0.36,-0.024,-0.657,0.375,0.012,-0.624,0.384,0.061,-0.582,0.382,0.1,-0.544,0.373,0.122,-0.522,0.359,0.134,0.218,0.507,0.659,0.114,0.574,0.65,-0.007,0.609,0.621,-0.15,0.602,0.567,-0.326,0.544,0.487,0.296,0.53,0.631,0.175,0.619,0.638,0.03,0.673,0.618,-0.141,0.672,0.573,-0.31,0.643,0.503,-0.751,0.449,-0.13,-0.755,0.498,-0.033,-0.723,0.529,0.076,-0.664,0.536,0.192,-0.563,0.512,0.309,-0.738,0.474,-0.214,-0.755,0.539,-0.092,-0.731,0.584,0.039,-0.675,0.598,0.185,-0.584,0.598,0.305,-0.289,-0.403,0.654,-0.322,-0.421,0.653,-0.373,-0.438,0.651,-0.443,-0.463,0.641,-0.517,-0.476,0.607,-0.58,-0.475,0.559,-0.62,-0.465,0.507,-0.642,-0.443,0.441,-0.649,-0.413,0.385,-0.649,-0.391,0.316,-0.643,-0.373,0.248,-0.656,-0.347,0.302,-0.665,-0.318,0.374,-0.659,-0.286,0.447,-0.635,-0.262,0.531,-0.593,-0.275,0.594,-0.528,-0.265,0.636,-0.446,-0.302,0.665,-0.38,-0.34,0.674,-0.327,-0.373,0.674,-0.308,-0.398,0.638,-0.343,-0.39,0.634,-0.391,-0.38,0.625,-0.452,-0.37,0.613,-0.514,-0.364,0.59,-0.565,-0.362,0.547,-0.591,-0.361,0.494,-0.607,-0.36,0.438,-0.616,-0.362,0.388,-0.624,-0.365,0.335,-0.633,-0.368,0.296,-0.624,-0.359,0.335,-0.621,-0.357,0.391,-0.612,-0.358,0.442,-0.597,-0.36,0.499,-0.57,-0.362,0.552,-0.518,-0.364,0.595,-0.456,-0.366,0.616,-0.394,-0.376,0.627,-0.347,-0.387,0.634,-0.46,0.42,0.424,-0.501,0.342,0.474,-0.542,0.275,0.529,-0.585,0.213,0.59,-0.633,0.148,0.648,-0.677,0.067,0.681,-0.679,-0.007,0.671,-0.653,-0.058,0.65,-0.609,-0.088,0.587,-0.57,-0.111,0.559,-0.38,-0.117,0.589,-0.627,-0.092,0.386,-0.612,-0.106,0.498,-0.501,-0.115,0.593,-0.309,-0.046,0.584,-0.633,-0.022,0.31,-0.458,0.51,0.414,-0.456,0.604,0.409,-0.553,-0.576,0.513,0.203,0.256,0.625,-0.312,-0.737,0.629,0.59,0.253,0.533,0.324,0.299,0.613,-0.178,-0.012,0.637,-0.273,0.177,0.543,-0.393,-0.028,0.668,0.072,-0.03,0.711,0.309,0.671,0.585,-0.067,0.789,0.535,0.45,0.549,0.56,-0.503,-0.026,0.678,-0.478,-0.581,0.561,-0.297,-0.269,0.672,-0.2,0.127,0.579,-0.099,0.072,0.636,0.139,0.754,0.576,-0.244,0.781,0.464,-0.324,0.228,0.529,0.399,0.126,0.653,0.202,0.151,0.679,0.075,0.135,0.667,-0.069,0.156,0.607,-0.161,0.192,0.553,-0.233,0.229,0.513,-0.439,0.326,0.505,0.348,-0.033,0.687,0.286,0.411,0.642,-0.313,0.109,0.571,-0.291,0.272,0.484,-0.43,0.054,0.666,-0.508,0.106,0.682,0.148,-0.641,0.627,0.547,-0.08,0.548,0.307,-0.552,0.613,0.536,0.413,0.537,-0.251,0.047,0.592,0.326,-0.193,0.674,-0.417,0.76,0.356,0.002,-0.722,0.622,-0.132,-0.784,0.621,-0.433,-0.852,0.602,-0.43,0.22,0.565,0.509,-0.256,0.559,-0.389,-0.563,0.62,0.147,-0.21,0.71,-0.381,0.283,0.511,-0.275,0.415,0.429,0.193,-0.414,0.667,-0.373,0.419,0.451,-0.342,-0.651,0.617,-0.404,0.107,0.601,-0.572,-0.755,0.542,-0.561,-0.659,0.526,-0.463,-0.667,0.579,-0.155,-0.536,0.66,-0.238,-0.608,0.64,-0.079,-0.111,0.69,-0.197,-0.186,0.663,-0.005,-0.248,0.705,-0.065,-0.615,0.654,-0.095,-0.447,0.689,0.31,-0.331,0.656,0.448,-0.416,0.58,-0.141,-0.296,0.691,-0.37,0.166,0.567,-0.544,0.044,0.708,-0.229,0.489,0.475,-0.125,0.536,0.545,0.579,0.087,0.549,0.048,0.216,0.62,-0.053,0.224,0.587,-0.136,0.245,0.541,-0.198,0.271,0.489,-0.473,0.163,0.617,-0.285,0.339,0.436,-0.62,0.203,0.526,-0.639,-0.07,0.547,-0.677,0.243,-0.128,-0.662,-0.671,0.325,-0.608,0.242,-0.519,-0.677,0.284,-0.238,-0.675,0.004,0.213,-0.711,0.063,0.639,-0.583,0.177,0.269,-0.689,-0.014,0.407,-0.732,-0.004,0.005,-0.666,0.142,0.588,-0.649,-0.057,0.426,-0.692,0.592,-0.225,-0.617,0.722,0.084,-0.675,0.487,-0.362,-0.687,-0.026,0.499,-0.604,-0.563,0.468,-0.687,-0.241,0.319,-0.613,0.133,0.212,-0.673,0.081,0.137,-0.674,0.672,-0.078,-0.659,-0.486,0.328,-0.533,0.744,0.228,-0.684,0.193,-0.194,-0.71,0.369,-0.131,-0.693,0.135,-0.299,-0.706,0.15,-0.112,-0.7,0.134,0.002,-0.645,0.155,0.103,-0.592,0.191,0.173,-0.557,0.229,0.228,-0.708,0.002,-0.26,-0.604,0.115,0.305,-0.679,0.064,0.451,-0.681,0.112,0.525,-0.648,-0.526,-0.07,-0.608,-0.036,-0.484,-0.623,-0.439,-0.21,-0.635,0.373,-0.462,-0.624,0.06,0.263,-0.69,-0.133,-0.227,-0.692,0.377,-0.285,-0.663,-0.195,0.377,-0.656,-0.611,0.059,-0.658,-0.681,0.177,-0.641,-0.807,0.424,-0.594,0.219,0.416,-0.598,-0.183,-0.425,-0.64,-0.53,0.393,-0.697,-0.307,0.25,-0.717,-0.156,-0.049,-0.549,0.279,0.358,-0.502,0.401,0.23,-0.683,-0.332,-0.103,-0.506,0.408,0.335,-0.643,-0.599,0.358,-0.632,0.116,0.406,-0.615,-0.64,0.455,-0.689,-0.474,0.207,-0.659,-0.081,0.269,-0.667,-0.544,0.282,-0.72,-0.082,0.145,-0.699,-0.155,0.231,-0.724,-0.201,0.089,-0.628,0.069,0.352,-0.686,-0.528,0.126,-0.67,-0.604,0.225,-0.707,-0.388,0.141,-0.673,-0.252,-0.206,-0.701,-0.404,0.042,-0.601,-0.319,-0.352,-0.714,-0.257,0.185,-0.598,0.169,0.357,-0.716,0.049,0.552,-0.548,0.459,0.2,-0.629,0.483,0.142,-0.611,0.102,-0.515,-0.664,0.207,0.007,-0.623,0.216,0.083,-0.574,0.24,0.145,-0.517,0.291,0.221,-0.633,0.168,0.462,-0.516,0.323,0.301]},{"yaw":-0.621,"pitch":-0.024,"frame":[-0.391,0.914,0.368,-0.526,0.892,0.232,-0.609,0.849,0.056,-0.655,0.779,-0.14,-0.66,0.679,-0.327,-0.629,0.556,-0.477,-0.58,0.432,-0.609,-0.521,0.275,-0.697,-0.493,0.126,-0.722,-0.487,-0.025,-0.69,-0.486,-0.182,-0.624,-0.489,-0.349,-0.519,-0.514,-0.486,-0.368,-0.549,-0.588,-0.201,-0.571,-0.683,-0.055,-0.583,-0.751,0.065,-0.585,-0.815,0.187,-0.552,-0.871,0.304,-0.464,-0.908,0.404,-0.321,-0.925,0.471,-0.175,-0.905,0.501,-0.024,-0.864,0.492,0.124,-0.809,0.483,0.302,-0.721,0.461,0.466,-0.614,0.413,0.607,-0.461,0.359,0.694,-0.265,0.321,0.744,-0.081,0.3,0.766,0.092,0.298,0.767,0.265,0.324,0.708,0.45,0.389,0.609,0.6,0.471,0.45,0.739,0.52,0.254,0.845,0.552,0.017,0.907,0.544,-0.191,0.925,0.48,0.143,0.351,0.591,0.107,0.33,0.596,0.071,0.316,0.597,0.025,0.307,0.591,-0.036,0.306,0.573,-0.089,0.316,0.539,-0.138,0.328,0.501,-0.174,0.334,0.472,-0.191,0.34,0.459,0.115,0.372,0.6,0.086,0.391,0.604,0.043,0.41,0.601,-0.019,0.421,0.58,-0.074,0.416,0.548,-0.129,0.393,0.511,-0.173,0.359,0.481,-0.694,0.355,-0.061,-0.687,0.336,-0.027,-0.674,0.324,0.004,-0.652,0.316,0.047,-0.614,0.311,0.093,-0.568,0.318,0.131,-0.532,0.331,0.153,-0.51,0.34,0.158,-0.499,0.347,0.168,-0.693,0.368,-0.023,-0.685,0.383,0.01,-0.666,0.398,0.047,-0.627,0.405,0.095,-0.578,0.399,0.133,-0.536,0.384,0.152,-0.512,0.364,0.161,0.225,0.496,0.664,0.117,0.559,0.666,-0.006,0.592,0.645,-0.153,0.585,0.596,-0.325,0.53,0.521,0.302,0.524,0.635,0.175,0.606,0.655,0.027,0.655,0.645,-0.146,0.654,0.608,-0.314,0.627,0.544,-0.759,0.472,-0.08,-0.765,0.515,0.021,-0.732,0.539,0.131,-0.671,0.54,0.242,-0.563,0.507,0.353,-0.751,0.5,-0.161,-0.767,0.558,-0.034,-0.743,0.595,0.098,-0.686,0.601,0.241,-0.589,0.593,0.358,-0.224,-0.432,0.61,-0.258,-0.45,0.612,-0.311,-0.464,0.612,-0.384,-0.485,0.604,-0.463,-0.494,0.572,-0.533,-0.491,0.527,-0.577,-0.477,0.479,-0.603,-0.456,0.416,-0.614,-0.427,0.361,-0.616,-0.403,0.293,-0.611,-0.383,0.227,-0.623,-0.355,0.286,-0.628,-0.327,0.362,-0.618,-0.299,0.438,-0.593,-0.279,0.521,-0.546,-0.294,0.58,-0.479,-0.29,0.619,-0.388,-0.327,0.641,-0.318,-0.366,0.644,-0.262,-0.4,0.636,-0.247,-0.426,0.598,-0.284,-0.417,0.597,-0.336,-0.405,0.591,-0.402,-0.393,0.582,-0.469,-0.385,0.562,-0.524,-0.381,0.523,-0.553,-0.377,0.472,-0.57,-0.374,0.418,-0.581,-0.375,0.369,-0.59,-0.376,0.315,-0.6,-0.378,0.275,-0.589,-0.371,0.315,-0.583,-0.369,0.371,-0.572,-0.371,0.422,-0.555,-0.375,0.476,-0.524,-0.379,0.527,-0.468,-0.383,0.566,-0.401,-0.389,0.584,-0.336,-0.403,0.592,-0.287,-0.414,0.596,-0.453,0.409,0.456,-0.489,0.326,0.503,-0.524,0.254,0.554,-0.563,0.187,0.612,-0.605,0.116,0.668,-0.646,0.03,0.697,-0.646,-0.041,0.684,-0.619,-0.087,0.658,-0.576,-0.112,0.592,-0.538,-0.13,0.556,-0.338,-0.134,0.577,-0.61,-0.104,0.382,-0.585,-0.123,0.496,-0.466,-0.137,0.587,-0.27,-0.061,0.571,-0.616,-0.029,0.309,-0.457,0.499,0.453,-0.459,0.592,0.457,-0.503,-0.585,0.473,0.223,0.251,0.612,-0.235,-0.741,0.567,0.606,0.268,0.491,0.34,0.298,0.596,-0.144,-0.023,0.622,-0.244,0.166,0.543,-0.353,-0.053,0.666,0.106,-0.037,0.682,0.306,0.67,0.6,-0.078,0.778,0.578,0.452,0.556,0.558,-0.466,-0.059,0.681,-0.417,-0.592,0.518,-0.246,-0.289,0.643,-0.17,0.118,0.574,-0.067,0.063,0.626,0.132,0.747,0.605,-0.257,0.772,0.516,-0.3,0.215,0.535,0.422,0.131,0.614,0.223,0.145,0.654,0.099,0.126,0.651,-0.044,0.146,0.599,-0.139,0.182,0.548,-0.212,0.218,0.514,-0.424,0.309,0.528,0.38,-0.027,0.641,0.298,0.406,0.636,-0.28,0.095,0.568,-0.275,0.26,0.49,-0.393,0.027,0.669,-0.474,0.076,0.692,0.221,-0.624,0.55,0.576,-0.059,0.487,0.367,-0.527,0.534,0.544,0.425,0.515,-0.215,0.036,0.585,0.367,-0.182,0.618,-0.433,0.755,0.416,0.083,-0.713,0.546,-0.05,-0.78,0.546,-0.357,-0.856,0.535,-0.404,0.2,0.578,0.546,-0.229,0.489,-0.323,-0.576,0.576,0.192,-0.208,0.663,-0.362,0.268,0.525,-0.268,0.405,0.444,0.252,-0.403,0.602,-0.364,0.407,0.475,-0.271,-0.657,0.564,-0.37,0.086,0.603,-0.512,-0.76,0.489,-0.507,-0.667,0.479,-0.398,-0.674,0.528,-0.082,-0.544,0.605,-0.164,-0.614,0.585,-0.038,-0.122,0.662,-0.152,-0.199,0.635,0.045,-0.254,0.664,0.013,-0.615,0.589,-0.029,-0.457,0.637,0.359,-0.315,0.591,0.494,-0.387,0.501,-0.086,-0.309,0.653,-0.339,0.149,0.571,-0.509,0.008,0.717,-0.225,0.477,0.493,-0.121,0.522,0.563,0.602,0.105,0.497,0.071,0.206,0.612,-0.03,0.212,0.581,-0.117,0.233,0.537,-0.183,0.261,0.49,-0.443,0.139,0.627,-0.275,0.328,0.446,-0.599,0.179,0.549,-0.61,-0.093,0.552,-0.685,0.267,-0.098,-0.622,-0.669,0.281,-0.622,0.285,-0.49,-0.686,0.314,-0.205,-0.66,0.006,0.22,-0.681,0.03,0.657,-0.568,0.176,0.287,-0.669,-0.028,0.417,-0.724,0.01,0.02,-0.641,0.112,0.609,-0.628,-0.073,0.43,-0.711,0.623,-0.165,-0.641,0.731,0.152,-0.694,0.525,-0.31,-0.66,-0.048,0.511,-0.558,-0.569,0.431,-0.66,-0.247,0.312,-0.599,0.135,0.228,-0.661,0.087,0.153,-0.695,0.693,-0.013,-0.624,-0.493,0.3,-0.555,0.746,0.293,-0.69,0.22,-0.167,-0.721,0.395,-0.092,-0.698,0.167,-0.274,-0.707,0.171,-0.087,-0.694,0.147,0.025,-0.634,0.162,0.124,-0.579,0.195,0.191,-0.542,0.228,0.248,-0.713,0.03,-0.248,-0.588,0.11,0.318,-0.658,0.046,0.467,-0.656,0.088,0.545,-0.625,-0.506,-0.106,-0.621,0.004,-0.491,-0.609,-0.41,-0.241,-0.654,0.415,-0.421,-0.609,0.058,0.272,-0.69,-0.105,-0.233,-0.706,0.41,-0.242,-0.636,-0.206,0.372,-0.627,-0.598,0.016,-0.624,-0.672,0.129,-0.587,-0.808,0.368,-0.576,0.204,0.438,-0.606,-0.144,-0.44,-0.6,-0.536,0.362,-0.669,-0.311,0.238,-0.708,-0.138,-0.052,-0.536,0.27,0.382,-0.495,0.4,0.257,-0.668,-0.31,-0.121,-0.499,0.401,0.366,-0.605,-0.599,0.32,-0.611,0.102,0.421,-0.569,-0.645,0.412,-0.659,-0.471,0.179,-0.641,-0.085,0.267,-0.633,-0.543,0.248,-0.706,-0.077,0.148,-0.678,-0.156,0.228,-0.707,-0.191,0.083,-0.61,0.06,0.363,-0.657,-0.52,0.092,-0.637,-0.6,0.185,-0.68,-0.383,0.121,-0.666,-0.225,-0.22,-0.679,-0.391,0.02,-0.598,-0.282,-0.375,-0.69,-0.255,0.177,-0.581,0.159,0.374,-0.689,0.021,0.569,-0.546,0.461,0.235,-0.631,0.491,0.184,-0.625,0.143,-0.505,-0.662,0.219,0.033,-0.615,0.223,0.107,-0.562,0.243,0.167,-0.504,0.29,0.241,-0.612,0.148,0.482,-0.503,0.316,0.325]},{"yaw":-0.646,"pitch":-0.071,"frame":[-0.507,0.911,0.466,-0.633,0.892,0.315,-0.702,0.857,0.126,-0.726,0.8,-0.084,-0.709,0.713,-0.285,-0.663,0.604,-0.451,-0.608,0.486,-0.598,-0.538,0.337,-0.704,-0.499,0.194,-0.747,-0.481,0.047,-0.743,-0.469,-0.108,-0.703,-0.46,-0.279,-0.622,-0.469,-0.429,-0.487,-0.488,-0.544,-0.33,-0.496,-0.652,-0.19,-0.499,-0.729,-0.075,-0.497,-0.803,0.042,-0.466,-0.869,0.157,-0.383,-0.909,0.263,-0.244,-0.925,0.34,-0.102,-0.902,0.383,0.045,-0.856,0.386,0.191,-0.798,0.387,0.368,-0.701,0.371,0.531,-0.581,0.345,0.67,-0.418,0.32,0.751,-0.216,0.314,0.787,-0.028,0.322,0.798,0.148,0.347,0.779,0.32,0.397,0.696,0.501,0.484,0.573,0.645,0.583,0.387,0.772,0.646,0.168,0.865,0.678,-0.087,0.913,0.664,-0.305,0.925,0.588,0.083,0.351,0.638,0.046,0.329,0.638,0.007,0.314,0.636,-0.04,0.304,0.627,-0.1,0.301,0.606,-0.15,0.308,0.57,-0.196,0.319,0.532,-0.228,0.324,0.503,-0.243,0.329,0.49,0.054,0.371,0.647,0.024,0.391,0.651,-0.021,0.41,0.648,-0.084,0.423,0.625,-0.141,0.419,0.589,-0.192,0.393,0.548,-0.228,0.353,0.515,-0.705,0.362,-0.06,-0.698,0.344,-0.028,-0.686,0.332,0.004,-0.665,0.322,0.047,-0.63,0.316,0.094,-0.587,0.321,0.133,-0.556,0.331,0.157,-0.538,0.338,0.165,-0.53,0.342,0.176,-0.705,0.375,-0.021,-0.699,0.389,0.013,-0.683,0.404,0.051,-0.65,0.409,0.101,-0.605,0.402,0.14,-0.567,0.384,0.16,-0.545,0.36,0.17,0.168,0.488,0.742,0.048,0.54,0.747,-0.083,0.561,0.719,-0.231,0.543,0.657,-0.404,0.484,0.566,0.249,0.524,0.722,0.105,0.593,0.744,-0.053,0.628,0.727,-0.23,0.613,0.676,-0.402,0.578,0.602,-0.776,0.476,-0.069,-0.791,0.509,0.038,-0.773,0.524,0.152,-0.723,0.515,0.267,-0.627,0.473,0.379,-0.771,0.51,-0.148,-0.798,0.557,-0.013,-0.792,0.582,0.125,-0.745,0.576,0.273,-0.662,0.556,0.395,-0.235,-0.47,0.543,-0.269,-0.489,0.539,-0.32,-0.503,0.532,-0.388,-0.524,0.518,-0.461,-0.532,0.477,-0.523,-0.529,0.427,-0.559,-0.513,0.376,-0.581,-0.49,0.314,-0.592,-0.459,0.261,-0.595,-0.434,0.195,-0.593,-0.413,0.132,-0.608,-0.391,0.196,-0.618,-0.367,0.276,-0.611,-0.345,0.354,-0.591,-0.331,0.443,-0.552,-0.346,0.502,-0.489,-0.342,0.547,-0.396,-0.375,0.572,-0.325,-0.41,0.578,-0.269,-0.441,0.571,-0.258,-0.463,0.53,-0.296,-0.454,0.527,-0.345,-0.444,0.517,-0.408,-0.433,0.503,-0.471,-0.425,0.478,-0.524,-0.422,0.434,-0.547,-0.417,0.381,-0.561,-0.413,0.327,-0.567,-0.411,0.278,-0.575,-0.41,0.223,-0.583,-0.41,0.182,-0.574,-0.408,0.224,-0.568,-0.41,0.28,-0.56,-0.414,0.331,-0.547,-0.419,0.386,-0.523,-0.425,0.44,-0.469,-0.428,0.483,-0.404,-0.432,0.507,-0.342,-0.443,0.519,-0.294,-0.453,0.526,-0.523,0.381,0.48,-0.556,0.288,0.515,-0.591,0.203,0.557,-0.626,0.126,0.604,-0.666,0.042,0.65,-0.699,-0.055,0.667,-0.689,-0.129,0.647,-0.654,-0.168,0.617,-0.607,-0.185,0.547,-0.56,-0.194,0.505,-0.362,-0.182,0.531,-0.627,-0.155,0.333,-0.607,-0.183,0.442,-0.489,-0.196,0.537,-0.298,-0.1,0.534,-0.633,-0.067,0.269,-0.532,0.463,0.488,-0.545,0.555,0.505,-0.472,-0.612,0.37,0.183,0.251,0.647,-0.191,-0.753,0.464,0.604,0.3,0.557,0.312,0.304,0.646,-0.171,-0.055,0.596,-0.294,0.139,0.545,-0.387,-0.11,0.634,0.088,-0.053,0.677,0.236,0.679,0.707,-0.177,0.762,0.674,0.406,0.577,0.66,-0.502,-0.13,0.651,-0.396,-0.619,0.419,-0.258,-0.331,0.587,-0.216,0.094,0.57,-0.107,0.04,0.619,0.044,0.745,0.709,-0.359,0.752,0.601,-0.353,0.185,0.54,0.414,0.14,0.649,0.194,0.139,0.677,0.061,0.112,0.662,-0.092,0.129,0.606,-0.19,0.165,0.556,-0.265,0.199,0.525,-0.49,0.272,0.542,0.382,-0.023,0.656,0.257,0.406,0.703,-0.326,0.06,0.556,-0.33,0.237,0.505,-0.438,-0.031,0.647,-0.529,0.009,0.675,0.27,-0.619,0.47,0.605,-0.031,0.508,0.415,-0.513,0.472,0.521,0.453,0.597,-0.253,0.005,0.563,0.383,-0.177,0.608,-0.535,0.737,0.489,0.133,-0.712,0.458,0.005,-0.782,0.447,-0.292,-0.864,0.411,-0.464,0.154,0.578,0.588,-0.204,0.483,-0.309,-0.602,0.487,0.198,-0.217,0.639,-0.423,0.234,0.536,-0.329,0.385,0.475,0.278,-0.402,0.553,-0.431,0.379,0.503,-0.242,-0.675,0.469,-0.419,0.038,0.588,-0.45,-0.776,0.365,-0.46,-0.688,0.365,-0.363,-0.694,0.42,-0.066,-0.564,0.53,-0.141,-0.633,0.499,-0.054,-0.149,0.632,-0.165,-0.234,0.589,0.044,-0.275,0.623,0.044,-0.625,0.509,-0.019,-0.478,0.57,0.386,-0.309,0.561,0.541,-0.365,0.469,-0.091,-0.337,0.599,-0.391,0.109,0.566,-0.555,-0.069,0.692,-0.293,0.451,0.534,-0.193,0.495,0.616,0.615,0.134,0.541,0.022,0.197,0.634,-0.084,0.201,0.599,-0.172,0.222,0.553,-0.237,0.247,0.509,-0.502,0.083,0.618,-0.331,0.309,0.47,-0.655,0.119,0.54,-0.647,-0.16,0.508,-0.693,0.28,-0.106,-0.549,-0.673,0.154,-0.642,0.327,-0.498,-0.698,0.332,-0.209,-0.666,-0.016,0.184,-0.729,-0.052,0.625,-0.594,0.154,0.277,-0.691,-0.084,0.376,-0.719,0.011,-0.022,-0.694,0.04,0.588,-0.653,-0.131,0.388,-0.755,0.64,-0.134,-0.721,0.724,0.204,-0.724,0.555,-0.291,-0.693,-0.117,0.472,-0.519,-0.594,0.324,-0.65,-0.281,0.235,-0.615,0.118,0.211,-0.667,0.075,0.128,-0.759,0.698,0.028,-0.58,-0.509,0.194,-0.649,0.731,0.355,-0.694,0.237,-0.182,-0.732,0.401,-0.088,-0.698,0.194,-0.297,-0.709,0.181,-0.108,-0.698,0.148,0.004,-0.644,0.157,0.108,-0.598,0.185,0.182,-0.571,0.214,0.242,-0.705,0.055,-0.293,-0.611,0.078,0.299,-0.687,-0.012,0.436,-0.699,0.022,0.519,-0.573,-0.478,-0.227,-0.618,0.05,-0.538,-0.571,-0.372,-0.353,-0.681,0.452,-0.415,-0.626,0.031,0.245,-0.676,-0.079,-0.299,-0.725,0.43,-0.237,-0.637,-0.25,0.304,-0.561,-0.578,-0.112,-0.548,-0.661,-0.005,-0.507,-0.813,0.229,-0.623,0.161,0.433,-0.595,-0.096,-0.515,-0.555,-0.558,0.255,-0.649,-0.336,0.152,-0.692,-0.127,-0.118,-0.583,0.238,0.382,-0.542,0.384,0.272,-0.637,-0.289,-0.217,-0.56,0.376,0.383,-0.544,-0.612,0.204,-0.644,0.055,0.401,-0.511,-0.662,0.294,-0.612,-0.476,0.07,-0.649,-0.117,0.22,-0.577,-0.55,0.134,-0.7,-0.09,0.098,-0.672,-0.181,0.167,-0.689,-0.194,0.01,-0.633,0.02,0.337,-0.602,-0.512,-0.026,-0.569,-0.597,0.061,-0.645,-0.387,0.02,-0.643,-0.195,-0.306,-0.64,-0.38,-0.083,-0.574,-0.236,-0.473,-0.672,-0.27,0.099,-0.615,0.122,0.362,-0.73,-0.054,0.536,-0.592,0.443,0.253,-0.669,0.475,0.201,-0.631,0.188,-0.532,-0.67,0.222,0.023,-0.627,0.222,0.1,-0.581,0.239,0.162,-0.538,0.279,0.242,-0.658,0.094,0.468,-0.551,0.295,0.331]},{"yaw":-0.695,"pitch":-0.072,"frame":[-0.519,0.91,0.458,-0.641,0.89,0.304,-0.705,0.855,0.115,-0.725,0.8,-0.095,-0.699,0.716,-0.295,-0.639,0.61,-0.46,-0.573,0.495,-0.605,-0.5,0.348,-0.71,-0.46,0.205,-0.753,-0.444,0.057,-0.75,-0.434,-0.099,-0.711,-0.427,-0.271,-0.633,-0.44,-0.423,-0.499,-0.464,-0.541,-0.343,-0.477,-0.651,-0.203,-0.483,-0.729,-0.088,-0.484,-0.804,0.029,-0.458,-0.869,0.146,-0.385,-0.909,0.253,-0.254,-0.925,0.332,-0.118,-0.903,0.377,0.028,-0.859,0.386,0.173,-0.801,0.396,0.351,-0.705,0.396,0.519,-0.586,0.375,0.664,-0.422,0.351,0.75,-0.218,0.345,0.788,-0.026,0.352,0.798,0.154,0.376,0.778,0.329,0.423,0.69,0.51,0.506,0.563,0.653,0.601,0.371,0.778,0.66,0.148,0.868,0.687,-0.107,0.915,0.667,-0.321,0.925,0.585,0.071,0.358,0.646,0.033,0.333,0.645,-0.007,0.316,0.643,-0.054,0.304,0.632,-0.115,0.3,0.61,-0.163,0.306,0.572,-0.207,0.317,0.534,-0.238,0.322,0.505,-0.254,0.329,0.491,0.042,0.38,0.654,0.011,0.402,0.657,-0.035,0.423,0.653,-0.099,0.436,0.628,-0.157,0.431,0.591,-0.206,0.401,0.549,-0.24,0.356,0.517,-0.691,0.352,-0.084,-0.688,0.335,-0.051,-0.679,0.322,-0.02,-0.66,0.312,0.024,-0.628,0.306,0.074,-0.586,0.311,0.118,-0.556,0.323,0.144,-0.539,0.33,0.155,-0.531,0.335,0.167,-0.695,0.367,-0.045,-0.693,0.383,-0.01,-0.681,0.401,0.031,-0.65,0.408,0.084,-0.605,0.401,0.125,-0.568,0.381,0.149,-0.546,0.355,0.16,0.145,0.488,0.751,0.022,0.539,0.753,-0.11,0.557,0.722,-0.256,0.537,0.656,-0.421,0.478,0.562,0.228,0.524,0.733,0.078,0.591,0.751,-0.082,0.623,0.731,-0.257,0.605,0.675,-0.422,0.57,0.597,-0.771,0.465,-0.095,-0.792,0.498,0.015,-0.777,0.513,0.132,-0.729,0.505,0.252,-0.636,0.464,0.369,-0.764,0.501,-0.169,-0.798,0.545,-0.034,-0.796,0.571,0.107,-0.751,0.564,0.258,-0.671,0.546,0.384,-0.247,-0.473,0.538,-0.281,-0.492,0.53,-0.331,-0.508,0.52,-0.397,-0.53,0.504,-0.469,-0.54,0.462,-0.53,-0.537,0.411,-0.568,-0.521,0.359,-0.587,-0.496,0.295,-0.594,-0.463,0.242,-0.593,-0.437,0.177,-0.589,-0.418,0.114,-0.607,-0.394,0.177,-0.622,-0.37,0.255,-0.62,-0.347,0.334,-0.603,-0.332,0.423,-0.565,-0.348,0.484,-0.502,-0.343,0.53,-0.41,-0.376,0.559,-0.338,-0.41,0.567,-0.282,-0.443,0.563,-0.269,-0.466,0.522,-0.307,-0.456,0.517,-0.357,-0.446,0.506,-0.419,-0.435,0.49,-0.481,-0.428,0.463,-0.532,-0.425,0.418,-0.554,-0.421,0.364,-0.567,-0.416,0.309,-0.571,-0.414,0.26,-0.577,-0.413,0.205,-0.581,-0.414,0.164,-0.576,-0.412,0.206,-0.572,-0.415,0.263,-0.567,-0.419,0.314,-0.555,-0.425,0.37,-0.532,-0.43,0.425,-0.48,-0.433,0.469,-0.416,-0.435,0.494,-0.353,-0.446,0.508,-0.305,-0.456,0.517,-0.533,0.377,0.472,-0.566,0.284,0.505,-0.603,0.2,0.543,-0.64,0.123,0.583,-0.681,0.04,0.625,-0.716,-0.057,0.641,-0.706,-0.131,0.622,-0.67,-0.17,0.594,-0.621,-0.186,0.526,-0.572,-0.196,0.486,-0.378,-0.184,0.521,-0.632,-0.157,0.312,-0.616,-0.185,0.422,-0.504,-0.197,0.52,-0.313,-0.103,0.53,-0.637,-0.069,0.249,-0.544,0.456,0.48,-0.558,0.548,0.496,-0.476,-0.616,0.355,0.168,0.253,0.657,-0.206,-0.756,0.454,0.594,0.305,0.577,0.296,0.307,0.658,-0.188,-0.057,0.597,-0.307,0.137,0.543,-0.406,-0.112,0.623,0.069,-0.057,0.686,0.216,0.682,0.717,-0.198,0.762,0.675,0.391,0.58,0.674,-0.52,-0.13,0.635,-0.404,-0.623,0.404,-0.275,-0.333,0.579,-0.23,0.092,0.571,-0.123,0.037,0.623,0.022,0.746,0.715,-0.377,0.751,0.597,-0.366,0.183,0.536,0.399,0.14,0.665,0.174,0.138,0.687,0.04,0.109,0.669,-0.109,0.127,0.61,-0.205,0.164,0.558,-0.279,0.198,0.524,-0.502,0.269,0.534,0.365,-0.025,0.672,0.238,0.408,0.713,-0.339,0.058,0.552,-0.342,0.236,0.503,-0.456,-0.033,0.636,-0.546,0.007,0.659,0.25,-0.623,0.489,0.593,-0.032,0.532,0.397,-0.517,0.496,0.508,0.458,0.615,-0.267,0.003,0.561,0.364,-0.182,0.627,-0.548,0.735,0.481,0.113,-0.717,0.463,-0.013,-0.785,0.443,-0.303,-0.866,0.401,-0.478,0.152,0.569,0.574,-0.207,0.507,-0.322,-0.607,0.474,0.179,-0.222,0.652,-0.435,0.232,0.53,-0.341,0.383,0.473,0.258,-0.408,0.572,-0.442,0.376,0.497,-0.257,-0.679,0.457,-0.434,0.036,0.579,-0.454,-0.778,0.351,-0.464,-0.69,0.351,-0.372,-0.697,0.407,-0.085,-0.568,0.526,-0.158,-0.636,0.49,-0.073,-0.153,0.637,-0.184,-0.237,0.59,0.024,-0.279,0.632,0.024,-0.629,0.51,-0.039,-0.482,0.575,0.367,-0.314,0.581,0.525,-0.369,0.495,-0.112,-0.342,0.604,-0.406,0.107,0.56,-0.574,-0.07,0.672,-0.308,0.449,0.533,-0.213,0.494,0.616,0.604,0.136,0.564,0.005,0.196,0.64,-0.1,0.2,0.604,-0.186,0.221,0.555,-0.249,0.246,0.51,-0.517,0.081,0.607,-0.341,0.308,0.469,-0.667,0.117,0.516,-0.657,-0.162,0.486,-0.674,0.274,-0.132,-0.542,-0.675,0.138,-0.613,0.333,-0.517,-0.68,0.327,-0.233,-0.663,-0.018,0.161,-0.744,-0.054,0.598,-0.597,0.151,0.259,-0.699,-0.085,0.352,-0.703,0.011,-0.048,-0.708,0.038,0.562,-0.66,-0.132,0.366,-0.751,0.639,-0.149,-0.726,0.721,0.192,-0.711,0.556,-0.307,-0.703,-0.118,0.447,-0.522,-0.598,0.308,-0.649,-0.281,0.214,-0.616,0.116,0.19,-0.661,0.073,0.104,-0.76,0.695,0.014,-0.577,-0.512,0.176,-0.657,0.728,0.345,-0.666,0.233,-0.208,-0.723,0.392,-0.114,-0.668,0.196,-0.321,-0.686,0.177,-0.136,-0.686,0.144,-0.023,-0.64,0.153,0.085,-0.598,0.181,0.162,-0.574,0.21,0.228,-0.671,0.056,-0.317,-0.616,0.076,0.278,-0.696,-0.013,0.411,-0.71,0.02,0.493,-0.554,-0.478,-0.242,-0.581,0.057,-0.556,-0.546,-0.369,-0.368,-0.66,0.456,-0.43,-0.628,0.029,0.223,-0.644,-0.077,-0.32,-0.71,0.426,-0.258,-0.639,-0.25,0.282,-0.546,-0.58,-0.127,-0.534,-0.662,-0.02,-0.503,-0.815,0.215,-0.632,0.158,0.414,-0.559,-0.09,-0.53,-0.556,-0.561,0.237,-0.644,-0.337,0.131,-0.667,-0.127,-0.14,-0.591,0.235,0.37,-0.547,0.379,0.265,-0.616,-0.289,-0.235,-0.568,0.371,0.374,-0.541,-0.614,0.188,-0.652,0.053,0.378,-0.513,-0.665,0.279,-0.602,-0.478,0.052,-0.649,-0.118,0.199,-0.571,-0.553,0.117,-0.69,-0.091,0.074,-0.667,-0.182,0.145,-0.673,-0.195,-0.012,-0.639,0.018,0.315,-0.59,-0.514,-0.043,-0.558,-0.6,0.045,-0.633,-0.389,0.001,-0.614,-0.193,-0.325,-0.624,-0.382,-0.101,-0.542,-0.23,-0.488,-0.661,-0.271,0.078,-0.621,0.119,0.342,-0.742,-0.056,0.51,-0.596,0.435,0.244,-0.672,0.466,0.188,-0.596,0.194,-0.552,-0.661,0.217,-0.002,-0.623,0.216,0.077,-0.581,0.234,0.143,-0.542,0.274,0.232,-0.668,0.092,0.445,-0.558,0.29,0.322]},{"yaw":-0.586,"pitch":-0.074,"frame":[-0.484,0.907,0.46,-0.626,0.886,0.326,-0.706,0.849,0.15,-0.737,0.789,-0.054,-0.727,0.702,-0.252,-0.689,0.593,-0.416,-0.636,0.478,-0.564,-0.566,0.333,-0.671,-0.523,0.191,-0.714,-0.507,0.043,-0.708,-0.498,-0.112,-0.664,-0.488,-0.284,-0.579,-0.496,-0.435,-0.442,-0.512,-0.551,-0.286,-0.512,-0.658,-0.147,-0.507,-0.737,-0.034,-0.496,-0.811,0.081,-0.455,-0.876,0.191,-0.363,-0.914,0.287,-0.213,-0.925,0.353,-0.064,-0.896,0.383,0.087,-0.845,0.375,0.234,-0.781,0.368,0.41,-0.681,0.348,0.567,-0.558,0.305,0.698,-0.393,0.262,0.772,-0.191,0.244,0.802,-0.002,0.244,0.808,0.174,0.266,0.792,0.345,0.316,0.712,0.522,0.408,0.591,0.662,0.514,0.412,0.785,0.586,0.199,0.874,0.631,-0.054,0.918,0.628,-0.275,0.925,0.566,0.101,0.345,0.606,0.065,0.326,0.608,0.029,0.313,0.61,-0.015,0.303,0.604,-0.073,0.3,0.587,-0.123,0.309,0.555,-0.17,0.322,0.52,-0.203,0.328,0.492,-0.219,0.333,0.48,0.072,0.355,0.619,0.042,0.366,0.625,0,0.377,0.625,-0.056,0.384,0.607,-0.108,0.384,0.575,-0.163,0.371,0.536,-0.203,0.348,0.504,-0.717,0.339,-0.034,-0.711,0.322,-0.003,-0.7,0.31,0.027,-0.68,0.302,0.069,-0.645,0.299,0.114,-0.602,0.307,0.152,-0.572,0.321,0.174,-0.555,0.331,0.181,-0.546,0.335,0.191,-0.718,0.346,0.005,-0.712,0.355,0.039,-0.695,0.365,0.077,-0.662,0.37,0.126,-0.619,0.368,0.163,-0.581,0.361,0.179,-0.559,0.348,0.186,0.205,0.502,0.704,0.086,0.553,0.714,-0.044,0.573,0.695,-0.195,0.554,0.642,-0.372,0.491,0.563,0.286,0.541,0.68,0.144,0.609,0.707,-0.015,0.639,0.699,-0.195,0.621,0.659,-0.37,0.585,0.596,-0.789,0.467,-0.034,-0.802,0.504,0.073,-0.777,0.521,0.184,-0.72,0.514,0.292,-0.613,0.471,0.396,-0.785,0.501,-0.111,-0.808,0.55,0.023,-0.793,0.578,0.158,-0.738,0.572,0.299,-0.645,0.557,0.413,-0.214,-0.46,0.537,-0.245,-0.477,0.537,-0.289,-0.492,0.535,-0.35,-0.515,0.525,-0.419,-0.528,0.492,-0.484,-0.528,0.448,-0.523,-0.515,0.402,-0.551,-0.492,0.342,-0.566,-0.461,0.291,-0.572,-0.437,0.226,-0.575,-0.417,0.164,-0.582,-0.398,0.226,-0.584,-0.378,0.302,-0.571,-0.357,0.377,-0.547,-0.344,0.461,-0.506,-0.359,0.516,-0.444,-0.352,0.556,-0.361,-0.382,0.576,-0.297,-0.411,0.578,-0.247,-0.437,0.567,-0.236,-0.455,0.526,-0.269,-0.447,0.526,-0.314,-0.44,0.519,-0.372,-0.432,0.507,-0.432,-0.428,0.485,-0.486,-0.426,0.445,-0.51,-0.422,0.397,-0.529,-0.417,0.346,-0.54,-0.415,0.3,-0.551,-0.414,0.25,-0.564,-0.415,0.211,-0.55,-0.413,0.251,-0.539,-0.414,0.305,-0.527,-0.417,0.355,-0.51,-0.423,0.408,-0.482,-0.427,0.456,-0.43,-0.43,0.493,-0.369,-0.431,0.512,-0.312,-0.44,0.522,-0.27,-0.447,0.525,-0.501,0.377,0.489,-0.531,0.281,0.526,-0.559,0.195,0.57,-0.589,0.116,0.617,-0.622,0.032,0.664,-0.648,-0.067,0.684,-0.637,-0.138,0.662,-0.608,-0.174,0.633,-0.567,-0.189,0.558,-0.526,-0.198,0.517,-0.314,-0.183,0.537,-0.612,-0.166,0.35,-0.58,-0.191,0.458,-0.447,-0.199,0.544,-0.252,-0.1,0.539,-0.622,-0.08,0.287,-0.508,0.464,0.495,-0.519,0.556,0.51,-0.442,-0.613,0.393,0.215,0.258,0.612,-0.148,-0.749,0.468,0.632,0.321,0.49,0.344,0.318,0.601,-0.124,-0.05,0.593,-0.258,0.139,0.546,-0.336,-0.113,0.638,0.138,-0.042,0.653,0.271,0.693,0.659,-0.139,0.768,0.646,0.434,0.593,0.602,-0.451,-0.136,0.656,-0.358,-0.616,0.435,-0.211,-0.327,0.586,-0.177,0.096,0.567,-0.062,0.045,0.608,0.083,0.756,0.671,-0.329,0.753,0.586,-0.32,0.184,0.543,0.452,0.157,0.6,0.234,0.149,0.642,0.105,0.119,0.638,-0.05,0.132,0.592,-0.153,0.166,0.549,-0.231,0.199,0.523,-0.461,0.267,0.548,0.425,-0.005,0.608,0.289,0.419,0.661,-0.286,0.06,0.56,-0.298,0.235,0.505,-0.389,-0.036,0.653,-0.479,0.003,0.682,0.317,-0.601,0.45,0.638,-0.01,0.443,0.459,-0.493,0.439,0.548,0.471,0.534,-0.211,0.006,0.565,0.427,-0.159,0.565,-0.51,0.733,0.489,0.179,-0.698,0.442,0.049,-0.77,0.438,-0.257,-0.865,0.425,-0.427,0.149,0.584,0.624,-0.182,0.424,-0.269,-0.596,0.494,0.248,-0.203,0.612,-0.391,0.23,0.54,-0.302,0.385,0.471,0.327,-0.385,0.526,-0.405,0.376,0.505,-0.2,-0.67,0.475,-0.376,0.034,0.595,-0.425,-0.781,0.391,-0.432,-0.691,0.39,-0.326,-0.694,0.436,-0.02,-0.553,0.522,-0.098,-0.624,0.498,-0.002,-0.141,0.623,-0.114,-0.228,0.588,0.097,-0.263,0.609,0.093,-0.613,0.496,0.029,-0.468,0.56,0.432,-0.29,0.522,0.58,-0.343,0.419,-0.041,-0.329,0.595,-0.354,0.106,0.571,-0.501,-0.076,0.699,-0.261,0.45,0.526,-0.157,0.493,0.6,0.646,0.156,0.474,0.06,0.201,0.61,-0.048,0.203,0.583,-0.139,0.222,0.543,-0.207,0.248,0.503,-0.459,0.077,0.625,-0.304,0.31,0.468,-0.624,0.108,0.555,-0.613,-0.168,0.524,-0.709,0.263,-0.079,-0.543,-0.681,0.192,-0.665,0.316,-0.465,-0.717,0.317,-0.18,-0.67,-0.031,0.207,-0.686,-0.065,0.645,-0.591,0.143,0.29,-0.67,-0.096,0.398,-0.731,-0.007,0.012,-0.656,0.028,0.606,-0.628,-0.141,0.405,-0.768,0.63,-0.099,-0.724,0.716,0.228,-0.744,0.543,-0.255,-0.659,-0.127,0.492,-0.494,-0.597,0.351,-0.643,-0.295,0.263,-0.618,0.106,0.228,-0.675,0.061,0.151,-0.768,0.689,0.059,-0.569,-0.516,0.227,-0.639,0.724,0.369,-0.717,0.22,-0.151,-0.747,0.388,-0.058,-0.721,0.179,-0.262,-0.728,0.163,-0.077,-0.713,0.131,0.031,-0.656,0.141,0.129,-0.605,0.172,0.197,-0.574,0.203,0.256,-0.725,0.038,-0.254,-0.604,0.067,0.313,-0.663,-0.024,0.456,-0.668,0.009,0.539,-0.591,-0.489,-0.182,-0.642,0.038,-0.501,-0.595,-0.383,-0.308,-0.703,0.44,-0.38,-0.623,0.018,0.262,-0.698,-0.095,-0.259,-0.744,0.418,-0.201,-0.623,-0.262,0.328,-0.572,-0.586,-0.069,-0.553,-0.668,0.037,-0.494,-0.821,0.265,-0.604,0.15,0.446,-0.619,-0.108,-0.474,-0.538,-0.562,0.287,-0.646,-0.348,0.184,-0.708,-0.145,-0.08,-0.571,0.229,0.396,-0.545,0.378,0.285,-0.657,-0.304,-0.175,-0.547,0.369,0.396,-0.533,-0.618,0.24,-0.625,0.043,0.416,-0.492,-0.668,0.326,-0.614,-0.486,0.107,-0.646,-0.131,0.242,-0.574,-0.558,0.171,-0.709,-0.107,0.129,-0.676,-0.196,0.195,-0.701,-0.211,0.046,-0.619,0.008,0.353,-0.609,-0.522,0.015,-0.571,-0.605,0.1,-0.653,-0.401,0.059,-0.666,-0.21,-0.265,-0.655,-0.394,-0.043,-0.6,-0.247,-0.429,-0.678,-0.286,0.133,-0.602,0.11,0.375,-0.693,-0.067,0.557,-0.595,0.435,0.269,-0.676,0.464,0.224,-0.654,0.176,-0.497,-0.685,0.206,0.046,-0.641,0.207,0.119,-0.593,0.227,0.178,-0.544,0.271,0.256,-0.632,0.082,0.484,-0.547,0.287,0.344]},{"yaw":-0.515,"pitch":-0.085,"frame":[-0.431,0.911,0.517,-0.586,0.893,0.399,-0.685,0.86,0.235,-0.742,0.803,0.036,-0.746,0.718,-0.163,-0.71,0.609,-0.336,-0.652,0.492,-0.498,-0.571,0.345,-0.623,-0.518,0.2,-0.681,-0.494,0.05,-0.69,-0.482,-0.109,-0.661,-0.469,-0.283,-0.591,-0.472,-0.435,-0.465,-0.477,-0.554,-0.316,-0.466,-0.663,-0.185,-0.451,-0.742,-0.081,-0.426,-0.817,0.024,-0.373,-0.881,0.122,-0.272,-0.915,0.203,-0.124,-0.925,0.255,0.017,-0.894,0.276,0.157,-0.84,0.262,0.292,-0.773,0.248,0.449,-0.669,0.218,0.588,-0.544,0.169,0.703,-0.379,0.124,0.768,-0.179,0.111,0.794,0.007,0.119,0.799,0.181,0.151,0.788,0.351,0.213,0.724,0.525,0.323,0.621,0.663,0.447,0.46,0.784,0.536,0.258,0.873,0.602,0.009,0.916,0.631,-0.214,0.925,0.601,0.157,0.347,0.551,0.124,0.325,0.556,0.092,0.309,0.56,0.05,0.297,0.558,-0.008,0.294,0.546,-0.062,0.303,0.52,-0.111,0.317,0.488,-0.146,0.323,0.463,-0.161,0.327,0.453,0.131,0.359,0.568,0.104,0.372,0.578,0.065,0.384,0.582,0.009,0.392,0.569,-0.045,0.391,0.542,-0.102,0.373,0.506,-0.144,0.346,0.476,-0.692,0.343,0.011,-0.683,0.322,0.04,-0.669,0.308,0.069,-0.644,0.297,0.107,-0.604,0.293,0.149,-0.559,0.303,0.183,-0.527,0.317,0.201,-0.508,0.326,0.205,-0.498,0.33,0.214,-0.69,0.352,0.05,-0.682,0.363,0.084,-0.663,0.376,0.122,-0.627,0.382,0.167,-0.58,0.379,0.199,-0.538,0.366,0.211,-0.514,0.348,0.213,0.271,0.494,0.652,0.159,0.542,0.673,0.03,0.561,0.666,-0.125,0.543,0.631,-0.305,0.483,0.568,0.345,0.535,0.625,0.214,0.599,0.665,0.058,0.63,0.673,-0.122,0.614,0.654,-0.301,0.58,0.61,-0.781,0.472,0.031,-0.785,0.508,0.138,-0.751,0.524,0.243,-0.679,0.515,0.341,-0.559,0.473,0.429,-0.783,0.509,-0.038,-0.799,0.559,0.094,-0.772,0.585,0.223,-0.701,0.579,0.353,-0.594,0.561,0.456,-0.11,-0.463,0.461,-0.141,-0.481,0.466,-0.185,-0.497,0.47,-0.244,-0.522,0.465,-0.314,-0.536,0.438,-0.382,-0.537,0.404,-0.426,-0.523,0.366,-0.459,-0.499,0.316,-0.478,-0.468,0.269,-0.488,-0.443,0.208,-0.494,-0.424,0.15,-0.498,-0.405,0.213,-0.496,-0.384,0.287,-0.481,-0.364,0.358,-0.454,-0.35,0.437,-0.407,-0.367,0.485,-0.343,-0.359,0.518,-0.257,-0.386,0.525,-0.192,-0.416,0.516,-0.143,-0.441,0.498,-0.131,-0.459,0.456,-0.166,-0.452,0.46,-0.212,-0.443,0.459,-0.269,-0.436,0.454,-0.329,-0.432,0.439,-0.385,-0.431,0.409,-0.414,-0.426,0.368,-0.437,-0.421,0.323,-0.452,-0.419,0.28,-0.467,-0.42,0.232,-0.484,-0.421,0.194,-0.466,-0.418,0.232,-0.454,-0.419,0.283,-0.437,-0.421,0.328,-0.416,-0.427,0.375,-0.385,-0.432,0.418,-0.329,-0.434,0.446,-0.267,-0.436,0.458,-0.21,-0.444,0.461,-0.167,-0.451,0.459,-0.438,0.371,0.5,-0.46,0.276,0.531,-0.481,0.187,0.57,-0.505,0.105,0.613,-0.53,0.016,0.655,-0.55,-0.086,0.671,-0.538,-0.158,0.646,-0.511,-0.192,0.613,-0.473,-0.206,0.536,-0.434,-0.211,0.492,-0.228,-0.187,0.495,-0.532,-0.174,0.335,-0.494,-0.203,0.437,-0.355,-0.208,0.515,-0.175,-0.103,0.493,-0.544,-0.087,0.278,-0.445,0.457,0.515,-0.456,0.551,0.541,-0.344,-0.615,0.338,0.269,0.257,0.547,-0.061,-0.751,0.378,0.651,0.323,0.398,0.392,0.315,0.531,-0.05,-0.057,0.539,-0.189,0.135,0.514,-0.247,-0.122,0.601,0.202,-0.047,0.576,0.332,0.687,0.614,-0.068,0.762,0.648,0.481,0.59,0.543,-0.358,-0.151,0.628,-0.264,-0.618,0.372,-0.122,-0.335,0.523,-0.108,0.092,0.525,0.008,0.04,0.553,0.153,0.748,0.644,-0.261,0.749,0.612,-0.25,0.18,0.517,0.491,0.157,0.511,0.291,0.146,0.569,0.168,0.114,0.574,0.017,0.128,0.541,-0.086,0.163,0.509,-0.164,0.195,0.491,-0.389,0.262,0.544,0.467,-0.005,0.509,0.344,0.414,0.6,-0.212,0.055,0.526,-0.233,0.231,0.479,-0.302,-0.046,0.625,-0.389,-0.01,0.66,0.37,-0.594,0.332,0.656,-0.006,0.329,0.497,-0.484,0.314,0.579,0.47,0.459,-0.138,0.002,0.521,0.468,-0.157,0.458,-0.451,0.732,0.534,0.246,-0.693,0.331,0.126,-0.769,0.333,-0.163,-0.867,0.336,-0.349,0.143,0.566,0.642,-0.176,0.303,-0.178,-0.597,0.423,0.305,-0.206,0.519,-0.32,0.226,0.523,-0.242,0.38,0.456,0.378,-0.382,0.417,-0.341,0.371,0.503,-0.113,-0.672,0.395,-0.296,0.026,0.57,-0.327,-0.785,0.324,-0.335,-0.694,0.329,-0.233,-0.696,0.366,0.06,-0.555,0.435,-0.015,-0.625,0.414,0.072,-0.147,0.553,-0.034,-0.235,0.523,0.168,-0.269,0.526,0.167,-0.611,0.397,0.108,-0.472,0.471,0.472,-0.286,0.409,0.603,-0.334,0.292,0.04,-0.337,0.519,-0.278,0.1,0.544,-0.404,-0.092,0.675,-0.198,0.443,0.511,-0.09,0.487,0.577,0.663,0.158,0.369,0.122,0.197,0.555,0.016,0.199,0.537,-0.075,0.218,0.505,-0.146,0.244,0.473,-0.375,0.067,0.604,-0.244,0.305,0.448,-0.541,0.097,0.555,-0.524,-0.183,0.505,-0.681,0.265,-0.037,-0.466,-0.687,0.151,-0.658,0.325,-0.41,-0.701,0.322,-0.128,-0.601,-0.038,0.211,-0.591,-0.084,0.636,-0.525,0.14,0.298,-0.586,-0.109,0.393,-0.68,-0.01,0.034,-0.568,0.013,0.603,-0.545,-0.154,0.393,-0.772,0.638,-0.018,-0.692,0.721,0.3,-0.75,0.553,-0.178,-0.57,-0.143,0.484,-0.4,-0.599,0.304,-0.56,-0.306,0.251,-0.553,0.103,0.237,-0.616,0.057,0.166,-0.757,0.696,0.138,-0.485,-0.519,0.204,-0.591,0.727,0.429,-0.689,0.223,-0.107,-0.731,0.391,-0.004,-0.697,0.183,-0.218,-0.691,0.164,-0.04,-0.666,0.13,0.061,-0.601,0.139,0.15,-0.546,0.169,0.212,-0.513,0.2,0.268,-0.691,0.038,-0.22,-0.53,0.061,0.315,-0.579,-0.037,0.454,-0.581,-0.005,0.537,-0.552,-0.492,-0.198,-0.617,0.041,-0.472,-0.562,-0.385,-0.315,-0.704,0.45,-0.313,-0.551,0.014,0.263,-0.662,-0.097,-0.239,-0.737,0.425,-0.138,-0.537,-0.273,0.312,-0.523,-0.591,-0.097,-0.494,-0.675,-0.003,-0.407,-0.827,0.203,-0.529,0.144,0.451,-0.594,-0.107,-0.46,-0.45,-0.565,0.255,-0.566,-0.358,0.175,-0.66,-0.149,-0.067,-0.505,0.226,0.405,-0.493,0.376,0.304,-0.615,-0.306,-0.174,-0.487,0.367,0.413,-0.453,-0.622,0.203,-0.545,0.033,0.416,-0.402,-0.671,0.275,-0.545,-0.491,0.09,-0.571,-0.138,0.235,-0.499,-0.563,0.144,-0.646,-0.113,0.134,-0.602,-0.204,0.19,-0.644,-0.217,0.049,-0.541,-0.001,0.351,-0.552,-0.527,-0.004,-0.506,-0.611,0.069,-0.587,-0.408,0.05,-0.631,-0.212,-0.256,-0.603,-0.397,-0.048,-0.574,-0.247,-0.425,-0.607,-0.294,0.128,-0.528,0.104,0.378,-0.602,-0.083,0.552,-0.548,0.434,0.3,-0.637,0.467,0.267,-0.637,0.182,-0.454,-0.644,0.205,0.079,-0.592,0.205,0.145,-0.541,0.224,0.197,-0.488,0.268,0.268,-0.552,0.072,0.485,-0.485,0.284,0.355]},{"yaw":-0.457,"pitch":-0.091,"frame":[-0.402,0.911,0.519,-0.562,0.896,0.411,-0.669,0.865,0.257,-0.738,0.811,0.066,-0.754,0.729,-0.128,-0.728,0.622,-0.3,-0.673,0.507,-0.465,-0.595,0.36,-0.593,-0.544,0.214,-0.656,-0.521,0.062,-0.673,-0.507,-0.098,-0.654,-0.492,-0.273,-0.595,-0.488,-0.427,-0.477,-0.485,-0.548,-0.334,-0.464,-0.661,-0.205,-0.44,-0.744,-0.102,-0.405,-0.823,0.001,-0.343,-0.887,0.094,-0.237,-0.919,0.17,-0.089,-0.925,0.215,0.047,-0.889,0.229,0.182,-0.83,0.21,0.312,-0.758,0.19,0.462,-0.648,0.155,0.593,-0.52,0.1,0.703,-0.356,0.051,0.763,-0.156,0.036,0.785,0.028,0.045,0.787,0.201,0.079,0.775,0.368,0.144,0.714,0.539,0.262,0.618,0.674,0.396,0.465,0.791,0.5,0.271,0.876,0.58,0.032,0.917,0.618,-0.187,0.925,0.594,0.184,0.357,0.511,0.153,0.334,0.517,0.122,0.319,0.522,0.081,0.306,0.524,0.023,0.303,0.516,-0.029,0.313,0.494,-0.078,0.327,0.466,-0.112,0.333,0.442,-0.128,0.337,0.433,0.16,0.369,0.529,0.134,0.383,0.542,0.096,0.396,0.55,0.041,0.405,0.543,-0.013,0.402,0.519,-0.068,0.385,0.485,-0.11,0.356,0.456,-0.673,0.347,0.03,-0.663,0.325,0.058,-0.649,0.31,0.085,-0.622,0.3,0.122,-0.581,0.298,0.16,-0.536,0.308,0.192,-0.502,0.323,0.207,-0.483,0.332,0.21,-0.473,0.336,0.218,-0.67,0.357,0.069,-0.661,0.369,0.101,-0.64,0.383,0.138,-0.604,0.39,0.18,-0.556,0.387,0.209,-0.514,0.374,0.218,-0.488,0.354,0.219,0.297,0.5,0.614,0.192,0.547,0.646,0.068,0.565,0.647,-0.085,0.545,0.617,-0.268,0.484,0.558,0.366,0.541,0.584,0.244,0.604,0.637,0.096,0.635,0.654,-0.083,0.618,0.64,-0.263,0.581,0.6,-0.771,0.48,0.058,-0.771,0.514,0.162,-0.732,0.529,0.262,-0.654,0.518,0.352,-0.528,0.475,0.432,-0.777,0.519,-0.01,-0.787,0.568,0.12,-0.754,0.593,0.244,-0.676,0.584,0.367,-0.563,0.563,0.461,-0.069,-0.458,0.415,-0.1,-0.475,0.422,-0.143,-0.49,0.429,-0.202,-0.513,0.427,-0.274,-0.525,0.403,-0.342,-0.526,0.371,-0.391,-0.512,0.337,-0.425,-0.488,0.291,-0.446,-0.458,0.247,-0.458,-0.434,0.189,-0.466,-0.415,0.133,-0.468,-0.397,0.195,-0.463,-0.377,0.268,-0.445,-0.358,0.339,-0.415,-0.345,0.415,-0.367,-0.363,0.458,-0.3,-0.354,0.486,-0.213,-0.381,0.488,-0.149,-0.41,0.476,-0.101,-0.435,0.454,-0.091,-0.454,0.413,-0.126,-0.446,0.42,-0.169,-0.438,0.422,-0.226,-0.43,0.419,-0.288,-0.424,0.408,-0.346,-0.423,0.38,-0.378,-0.417,0.344,-0.404,-0.412,0.302,-0.422,-0.411,0.26,-0.438,-0.411,0.213,-0.455,-0.413,0.176,-0.436,-0.41,0.212,-0.422,-0.41,0.26,-0.404,-0.412,0.302,-0.379,-0.418,0.345,-0.346,-0.424,0.383,-0.289,-0.426,0.409,-0.226,-0.429,0.419,-0.169,-0.438,0.42,-0.127,-0.445,0.417,-0.403,0.369,0.495,-0.421,0.273,0.524,-0.439,0.183,0.562,-0.46,0.098,0.603,-0.481,0.006,0.643,-0.497,-0.099,0.656,-0.487,-0.171,0.629,-0.462,-0.205,0.595,-0.427,-0.216,0.516,-0.391,-0.217,0.472,-0.188,-0.185,0.464,-0.497,-0.176,0.321,-0.455,-0.208,0.418,-0.31,-0.212,0.489,-0.138,-0.1,0.461,-0.513,-0.089,0.27,-0.41,0.456,0.511,-0.421,0.549,0.538,-0.308,-0.609,0.306,0.29,0.268,0.5,-0.028,-0.743,0.334,0.651,0.338,0.335,0.408,0.326,0.48,-0.017,-0.05,0.502,-0.156,0.141,0.491,-0.203,-0.124,0.572,0.227,-0.033,0.526,0.349,0.692,0.584,-0.035,0.763,0.635,0.49,0.598,0.499,-0.311,-0.161,0.605,-0.227,-0.609,0.338,-0.082,-0.329,0.483,-0.078,0.1,0.495,0.037,0.05,0.515,0.177,0.749,0.625,-0.228,0.749,0.604,-0.216,0.183,0.497,0.503,0.172,0.452,0.314,0.161,0.518,0.195,0.128,0.529,0.046,0.139,0.505,-0.056,0.171,0.481,-0.133,0.203,0.469,-0.351,0.261,0.534,0.482,0.012,0.447,0.364,0.423,0.554,-0.178,0.058,0.5,-0.2,0.237,0.461,-0.258,-0.05,0.601,-0.342,-0.017,0.64,0.39,-0.574,0.27,0.66,0.013,0.26,0.511,-0.461,0.247,0.581,0.483,0.404,-0.105,0.007,0.49,0.485,-0.138,0.394,-0.418,0.732,0.535,0.269,-0.678,0.275,0.154,-0.758,0.282,-0.128,-0.866,0.296,-0.308,0.142,0.55,0.649,-0.154,0.232,-0.141,-0.588,0.384,0.329,-0.188,0.462,-0.284,0.227,0.509,-0.209,0.386,0.443,0.4,-0.362,0.356,-0.309,0.371,0.494,-0.08,-0.664,0.354,-0.257,0.025,0.549,-0.29,-0.785,0.29,-0.299,-0.691,0.297,-0.198,-0.69,0.329,0.091,-0.542,0.386,0.016,-0.614,0.368,0.104,-0.137,0.509,0.002,-0.227,0.482,0.199,-0.255,0.475,0.194,-0.596,0.344,0.14,-0.458,0.42,0.488,-0.265,0.344,0.611,-0.312,0.222,0.077,-0.325,0.473,-0.242,0.102,0.524,-0.354,-0.102,0.654,-0.164,0.448,0.497,-0.054,0.494,0.56,0.665,0.176,0.301,0.149,0.208,0.516,0.045,0.209,0.503,-0.046,0.228,0.478,-0.114,0.253,0.451,-0.332,0.063,0.586,-0.211,0.312,0.433,-0.497,0.091,0.548,-0.482,-0.193,0.489,-0.669,0.272,-0.018,-0.441,-0.689,0.126,-0.672,0.337,-0.38,-0.695,0.331,-0.105,-0.576,-0.036,0.211,-0.541,-0.097,0.625,-0.495,0.142,0.298,-0.548,-0.115,0.387,-0.667,-0.005,0.046,-0.52,0.004,0.595,-0.506,-0.162,0.382,-0.769,0.646,0.013,-0.671,0.724,0.318,-0.755,0.563,-0.145,-0.527,-0.155,0.475,-0.368,-0.593,0.275,-0.529,-0.305,0.236,-0.527,0.106,0.239,-0.594,0.061,0.172,-0.746,0.701,0.164,-0.456,-0.512,0.182,-0.563,0.728,0.44,-0.68,0.232,-0.086,-0.719,0.398,0.02,-0.697,0.192,-0.195,-0.678,0.172,-0.021,-0.649,0.137,0.075,-0.58,0.144,0.158,-0.522,0.174,0.216,-0.486,0.204,0.269,-0.689,0.046,-0.199,-0.498,0.06,0.312,-0.538,-0.044,0.448,-0.538,-0.013,0.531,-0.552,-0.488,-0.213,-0.631,0.051,-0.451,-0.57,-0.379,-0.322,-0.715,0.462,-0.281,-0.524,0.014,0.261,-0.663,-0.09,-0.224,-0.735,0.435,-0.109,-0.503,-0.274,0.296,-0.515,-0.59,-0.117,-0.48,-0.677,-0.026,-0.376,-0.831,0.174,-0.491,0.141,0.447,-0.607,-0.099,-0.448,-0.419,-0.559,0.229,-0.538,-0.355,0.161,-0.653,-0.144,-0.058,-0.471,0.225,0.403,-0.466,0.38,0.305,-0.614,-0.301,-0.176,-0.454,0.367,0.412,-0.425,-0.62,0.177,-0.507,0.029,0.411,-0.37,-0.669,0.246,-0.523,-0.487,0.071,-0.542,-0.137,0.228,-0.475,-0.558,0.121,-0.627,-0.11,0.136,-0.575,-0.203,0.183,-0.63,-0.213,0.049,-0.506,-0.004,0.346,-0.537,-0.524,-0.023,-0.486,-0.611,0.045,-0.567,-0.403,0.037,-0.633,-0.206,-0.25,-0.593,-0.394,-0.058,-0.587,-0.24,-0.424,-0.585,-0.29,0.121,-0.493,0.103,0.375,-0.556,-0.096,0.544,-0.523,0.438,0.305,-0.614,0.472,0.278,-0.65,0.193,-0.427,-0.625,0.211,0.093,-0.571,0.21,0.154,-0.517,0.229,0.202,-0.461,0.272,0.269,-0.511,0.066,0.479,-0.454,0.286,0.353]},{"yaw":-0.379,"pitch":-0.099,"frame":[-0.352,0.912,0.526,-0.529,0.897,0.43,-0.655,0.865,0.286,-0.739,0.81,0.099,-0.764,0.727,-0.094,-0.745,0.619,-0.268,-0.699,0.504,-0.438,-0.628,0.355,-0.574,-0.581,0.207,-0.642,-0.56,0.053,-0.663,-0.546,-0.109,-0.649,-0.527,-0.286,-0.593,-0.513,-0.439,-0.479,-0.497,-0.56,-0.342,-0.46,-0.671,-0.219,-0.425,-0.753,-0.119,-0.383,-0.83,-0.019,-0.315,-0.891,0.068,-0.205,-0.921,0.134,-0.059,-0.925,0.169,0.071,-0.888,0.175,0.199,-0.828,0.146,0.321,-0.754,0.118,0.463,-0.645,0.072,0.587,-0.518,0.008,0.693,-0.353,-0.047,0.753,-0.153,-0.063,0.778,0.03,-0.054,0.781,0.203,-0.018,0.773,0.369,0.052,0.724,0.538,0.18,0.641,0.672,0.325,0.502,0.789,0.442,0.319,0.874,0.54,0.088,0.916,0.596,-0.13,0.925,0.585,0.244,0.347,0.459,0.213,0.323,0.468,0.181,0.306,0.476,0.137,0.292,0.481,0.074,0.289,0.478,0.014,0.299,0.461,-0.042,0.314,0.436,-0.08,0.32,0.416,-0.097,0.324,0.409,0.221,0.361,0.481,0.196,0.375,0.497,0.156,0.39,0.509,0.096,0.399,0.506,0.035,0.396,0.488,-0.028,0.375,0.457,-0.075,0.344,0.43,-0.67,0.335,0.051,-0.659,0.312,0.078,-0.64,0.296,0.104,-0.611,0.285,0.139,-0.562,0.284,0.175,-0.51,0.295,0.202,-0.469,0.309,0.214,-0.445,0.318,0.216,-0.434,0.322,0.222,-0.665,0.346,0.089,-0.653,0.358,0.121,-0.628,0.373,0.157,-0.585,0.381,0.197,-0.531,0.379,0.223,-0.481,0.364,0.228,-0.45,0.342,0.225,0.352,0.493,0.56,0.252,0.538,0.602,0.128,0.554,0.615,-0.026,0.534,0.597,-0.214,0.472,0.544,0.415,0.535,0.525,0.302,0.596,0.59,0.156,0.624,0.622,-0.021,0.606,0.62,-0.204,0.571,0.589,-0.771,0.468,0.087,-0.762,0.502,0.19,-0.713,0.517,0.285,-0.624,0.507,0.368,-0.484,0.465,0.438,-0.78,0.509,0.021,-0.781,0.556,0.151,-0.738,0.582,0.271,-0.647,0.574,0.386,-0.52,0.555,0.471,-0.008,-0.463,0.363,-0.039,-0.483,0.374,-0.085,-0.502,0.387,-0.148,-0.527,0.391,-0.223,-0.54,0.375,-0.296,-0.54,0.347,-0.353,-0.525,0.317,-0.397,-0.499,0.273,-0.427,-0.467,0.231,-0.448,-0.442,0.174,-0.462,-0.421,0.122,-0.456,-0.403,0.187,-0.444,-0.382,0.259,-0.417,-0.363,0.326,-0.376,-0.349,0.398,-0.319,-0.368,0.438,-0.247,-0.357,0.463,-0.155,-0.384,0.458,-0.089,-0.413,0.438,-0.04,-0.438,0.408,-0.033,-0.458,0.365,-0.071,-0.452,0.375,-0.116,-0.445,0.383,-0.176,-0.438,0.385,-0.239,-0.432,0.38,-0.3,-0.43,0.357,-0.34,-0.425,0.324,-0.375,-0.418,0.284,-0.4,-0.417,0.243,-0.422,-0.418,0.197,-0.446,-0.419,0.161,-0.421,-0.417,0.197,-0.401,-0.417,0.244,-0.376,-0.419,0.285,-0.343,-0.426,0.327,-0.301,-0.432,0.364,-0.24,-0.433,0.386,-0.175,-0.435,0.39,-0.115,-0.443,0.385,-0.072,-0.45,0.375,-0.353,0.359,0.49,-0.368,0.262,0.519,-0.382,0.17,0.557,-0.398,0.084,0.598,-0.415,-0.008,0.639,-0.427,-0.115,0.651,-0.416,-0.187,0.622,-0.396,-0.219,0.586,-0.368,-0.231,0.502,-0.339,-0.233,0.454,-0.138,-0.195,0.438,-0.459,-0.187,0.315,-0.409,-0.223,0.407,-0.257,-0.226,0.469,-0.09,-0.11,0.432,-0.476,-0.1,0.269,-0.359,0.447,0.508,-0.368,0.542,0.539,-0.268,-0.618,0.279,0.337,0.261,0.443,0.009,-0.75,0.287,0.666,0.336,0.253,0.447,0.321,0.417,0.034,-0.061,0.464,-0.107,0.129,0.465,-0.148,-0.135,0.547,0.278,-0.041,0.47,0.397,0.689,0.532,0.022,0.76,0.615,0.527,0.595,0.435,-0.251,-0.175,0.585,-0.186,-0.619,0.306,-0.03,-0.337,0.442,-0.029,0.088,0.462,0.09,0.039,0.474,0.231,0.746,0.589,-0.169,0.747,0.595,-0.166,0.171,0.478,0.535,0.17,0.378,0.36,0.154,0.459,0.246,0.12,0.478,0.097,0.128,0.464,-0.009,0.159,0.447,-0.089,0.19,0.444,-0.297,0.249,0.522,0.517,0.009,0.371,0.411,0.417,0.494,-0.128,0.046,0.474,-0.156,0.224,0.441,-0.2,-0.063,0.581,-0.278,-0.031,0.624,0.405,-0.572,0.194,0.674,0.013,0.17,0.521,-0.46,0.163,0.607,0.48,0.331,-0.056,-0.004,0.459,0.516,-0.14,0.317,-0.364,0.731,0.539,0.29,-0.677,0.206,0.179,-0.759,0.222,-0.091,-0.87,0.254,-0.253,0.129,0.534,0.658,-0.154,0.142,-0.098,-0.597,0.343,0.37,-0.193,0.397,-0.232,0.215,0.493,-0.17,0.373,0.426,0.427,-0.364,0.282,-0.26,0.359,0.481,-0.04,-0.672,0.31,-0.201,0.012,0.53,-0.251,-0.795,0.261,-0.26,-0.701,0.269,-0.155,-0.7,0.295,0.131,-0.547,0.329,0.056,-0.62,0.317,0.156,-0.146,0.462,0.052,-0.237,0.439,0.246,-0.262,0.419,0.226,-0.599,0.28,0.183,-0.462,0.36,0.513,-0.266,0.265,0.619,-0.311,0.131,0.126,-0.333,0.422,-0.188,0.089,0.504,-0.288,-0.117,0.637,-0.119,0.437,0.478,-0.001,0.485,0.536,0.679,0.175,0.213,0.199,0.198,0.469,0.094,0.197,0.463,-0.002,0.215,0.444,-0.074,0.24,0.425,-0.272,0.05,0.57,-0.173,0.298,0.415,-0.439,0.076,0.547,-0.427,-0.207,0.48,-0.675,0.259,0.003,-0.42,-0.701,0.109,-0.693,0.329,-0.354,-0.708,0.318,-0.081,-0.551,-0.051,0.217,-0.475,-0.112,0.624,-0.459,0.129,0.299,-0.504,-0.128,0.389,-0.666,-0.022,0.062,-0.457,-0.011,0.595,-0.462,-0.175,0.379,-0.771,0.642,0.046,-0.647,0.722,0.343,-0.765,0.558,-0.113,-0.473,-0.17,0.475,-0.332,-0.602,0.252,-0.505,-0.316,0.233,-0.497,0.092,0.244,-0.576,0.046,0.182,-0.738,0.697,0.195,-0.437,-0.523,0.166,-0.524,0.727,0.456,-0.694,0.218,-0.064,-0.722,0.386,0.044,-0.714,0.18,-0.173,-0.687,0.159,0,-0.648,0.123,0.091,-0.564,0.131,0.168,-0.496,0.161,0.221,-0.453,0.192,0.271,-0.706,0.031,-0.177,-0.459,0.047,0.313,-0.489,-0.058,0.45,-0.481,-0.028,0.533,-0.56,-0.503,-0.215,-0.658,0.039,-0.433,-0.59,-0.394,-0.318,-0.731,0.456,-0.252,-0.49,0.001,0.264,-0.682,-0.107,-0.207,-0.746,0.425,-0.083,-0.471,-0.285,0.291,-0.512,-0.603,-0.128,-0.467,-0.688,-0.041,-0.344,-0.839,0.152,-0.441,0.128,0.446,-0.636,-0.112,-0.434,-0.392,-0.568,0.212,-0.524,-0.365,0.16,-0.664,-0.161,-0.044,-0.425,0.213,0.402,-0.424,0.368,0.306,-0.629,-0.318,-0.167,-0.407,0.356,0.411,-0.404,-0.632,0.16,-0.46,0.015,0.411,-0.339,-0.68,0.224,-0.515,-0.499,0.061,-0.512,-0.15,0.229,-0.46,-0.571,0.106,-0.616,-0.127,0.146,-0.554,-0.218,0.186,-0.63,-0.231,0.059,-0.464,-0.017,0.346,-0.532,-0.538,-0.032,-0.474,-0.624,0.031,-0.565,-0.416,0.037,-0.654,-0.223,-0.238,-0.599,-0.409,-0.056,-0.614,-0.256,-0.415,-0.575,-0.304,0.125,-0.449,0.09,0.375,-0.497,-0.111,0.546,-0.486,0.428,0.312,-0.587,0.462,0.292,-0.675,0.184,-0.404,-0.618,0.197,0.108,-0.554,0.196,0.166,-0.491,0.216,0.209,-0.422,0.259,0.269,-0.458,0.052,0.48,-0.41,0.274,0.352]},{"yaw":-0.323,"pitch":-0.106,"frame":[-0.318,0.914,0.524,-0.503,0.901,0.439,-0.637,0.868,0.304,-0.733,0.81,0.124,-0.766,0.726,-0.066,-0.755,0.616,-0.24,-0.718,0.498,-0.413,-0.657,0.347,-0.552,-0.612,0.2,-0.624,-0.591,0.045,-0.649,-0.577,-0.118,-0.639,-0.552,-0.295,-0.589,-0.529,-0.449,-0.48,-0.502,-0.569,-0.347,-0.456,-0.68,-0.232,-0.414,-0.761,-0.135,-0.365,-0.836,-0.039,-0.291,-0.896,0.04,-0.179,-0.924,0.099,-0.036,-0.925,0.125,0.091,-0.887,0.123,0.212,-0.825,0.089,0.327,-0.751,0.055,0.462,-0.642,0.003,0.578,-0.514,-0.066,0.679,-0.349,-0.125,0.74,-0.15,-0.142,0.768,0.034,-0.132,0.775,0.205,-0.094,0.771,0.369,-0.02,0.729,0.536,0.113,0.654,0.668,0.264,0.525,0.785,0.388,0.35,0.869,0.496,0.125,0.913,0.57,-0.092,0.925,0.57,0.272,0.34,0.411,0.242,0.315,0.422,0.21,0.298,0.431,0.167,0.283,0.438,0.104,0.28,0.438,0.044,0.29,0.424,-0.011,0.304,0.403,-0.048,0.309,0.384,-0.065,0.313,0.379,0.25,0.353,0.435,0.225,0.367,0.452,0.186,0.381,0.467,0.128,0.391,0.468,0.067,0.388,0.453,0.003,0.366,0.425,-0.043,0.333,0.399,-0.657,0.324,0.066,-0.643,0.301,0.092,-0.624,0.285,0.117,-0.592,0.275,0.149,-0.542,0.273,0.182,-0.487,0.284,0.206,-0.445,0.298,0.216,-0.42,0.306,0.215,-0.409,0.309,0.221,-0.65,0.335,0.104,-0.637,0.348,0.135,-0.611,0.362,0.17,-0.567,0.371,0.206,-0.511,0.369,0.229,-0.459,0.353,0.231,-0.426,0.329,0.226,0.387,0.485,0.51,0.291,0.529,0.557,0.171,0.544,0.577,0.018,0.524,0.571,-0.172,0.462,0.526,0.448,0.528,0.472,0.341,0.587,0.544,0.198,0.615,0.584,0.023,0.597,0.597,-0.16,0.562,0.571,-0.762,0.456,0.11,-0.746,0.489,0.21,-0.691,0.503,0.3,-0.597,0.493,0.377,-0.451,0.452,0.437,-0.775,0.498,0.045,-0.769,0.544,0.173,-0.717,0.568,0.288,-0.619,0.561,0.396,-0.486,0.543,0.473,0.026,-0.466,0.316,-0.006,-0.487,0.33,-0.052,-0.506,0.347,-0.115,-0.532,0.355,-0.188,-0.545,0.345,-0.26,-0.545,0.322,-0.319,-0.532,0.296,-0.366,-0.506,0.254,-0.398,-0.475,0.213,-0.422,-0.451,0.16,-0.439,-0.43,0.112,-0.43,-0.413,0.178,-0.415,-0.394,0.248,-0.386,-0.375,0.313,-0.343,-0.361,0.38,-0.282,-0.379,0.417,-0.21,-0.368,0.437,-0.12,-0.393,0.426,-0.055,-0.42,0.4,-0.007,-0.444,0.364,0.003,-0.462,0.32,-0.037,-0.458,0.333,-0.082,-0.452,0.345,-0.141,-0.446,0.352,-0.204,-0.441,0.35,-0.265,-0.439,0.332,-0.309,-0.434,0.303,-0.346,-0.427,0.264,-0.373,-0.426,0.225,-0.396,-0.428,0.181,-0.422,-0.428,0.147,-0.396,-0.426,0.182,-0.376,-0.426,0.227,-0.348,-0.429,0.266,-0.313,-0.436,0.308,-0.267,-0.441,0.34,-0.205,-0.443,0.357,-0.141,-0.443,0.357,-0.081,-0.45,0.348,-0.037,-0.455,0.334,-0.315,0.35,0.48,-0.328,0.251,0.508,-0.34,0.158,0.546,-0.353,0.073,0.587,-0.367,-0.02,0.629,-0.376,-0.127,0.64,-0.366,-0.199,0.609,-0.349,-0.232,0.573,-0.326,-0.243,0.485,-0.302,-0.244,0.435,-0.098,-0.206,0.41,-0.429,-0.199,0.306,-0.373,-0.235,0.393,-0.217,-0.237,0.446,-0.052,-0.12,0.401,-0.45,-0.113,0.263,-0.321,0.437,0.499,-0.328,0.534,0.532,-0.236,-0.626,0.252,0.362,0.254,0.392,0.037,-0.754,0.241,0.677,0.332,0.185,0.47,0.315,0.361,0.07,-0.07,0.426,-0.072,0.119,0.437,-0.104,-0.147,0.519,0.309,-0.047,0.418,0.428,0.682,0.482,0.062,0.752,0.591,0.55,0.588,0.379,-0.205,-0.186,0.562,-0.153,-0.627,0.274,0.007,-0.345,0.403,0.005,0.079,0.428,0.124,0.031,0.433,0.268,0.739,0.549,-0.13,0.74,0.579,-0.13,0.16,0.454,0.555,0.166,0.315,0.386,0.148,0.405,0.275,0.112,0.43,0.127,0.119,0.423,0.022,0.149,0.412,-0.055,0.179,0.414,-0.258,0.238,0.506,0.536,0.005,0.306,0.439,0.41,0.441,-0.091,0.035,0.445,-0.121,0.213,0.417,-0.155,-0.074,0.558,-0.23,-0.043,0.604,0.414,-0.571,0.128,0.678,0.01,0.097,0.524,-0.459,0.093,0.623,0.474,0.268,-0.019,-0.014,0.426,0.53,-0.143,0.25,-0.326,0.723,0.535,0.304,-0.676,0.145,0.197,-0.759,0.166,-0.062,-0.874,0.212,-0.211,0.118,0.514,0.658,-0.155,0.068,-0.066,-0.604,0.305,0.394,-0.198,0.339,-0.195,0.204,0.473,-0.135,0.362,0.405,0.442,-0.366,0.217,-0.221,0.349,0.464,-0.01,-0.678,0.268,-0.159,0,0.508,-0.219,-0.803,0.23,-0.228,-0.71,0.24,-0.124,-0.708,0.259,0.158,-0.55,0.278,0.083,-0.624,0.27,0.191,-0.154,0.416,0.088,-0.245,0.398,0.276,-0.268,0.366,0.247,-0.601,0.224,0.211,-0.465,0.306,0.524,-0.268,0.197,0.618,-0.311,0.057,0.16,-0.338,0.374,-0.149,0.078,0.48,-0.237,-0.128,0.617,-0.083,0.428,0.456,0.037,0.476,0.505,0.688,0.171,0.142,0.227,0.19,0.424,0.123,0.188,0.423,0.028,0.205,0.409,-0.043,0.23,0.395,-0.227,0.038,0.55,-0.139,0.287,0.394,-0.397,0.064,0.54,-0.386,-0.22,0.468,-0.67,0.248,0.019,-0.399,-0.711,0.091,-0.713,0.321,-0.331,-0.711,0.308,-0.062,-0.531,-0.063,0.218,-0.427,-0.125,0.616,-0.432,0.117,0.296,-0.471,-0.141,0.386,-0.661,-0.034,0.074,-0.412,-0.024,0.588,-0.428,-0.187,0.372,-0.765,0.634,0.071,-0.623,0.714,0.358,-0.767,0.55,-0.086,-0.434,-0.182,0.469,-0.303,-0.612,0.229,-0.482,-0.329,0.226,-0.475,0.08,0.244,-0.56,0.034,0.187,-0.724,0.689,0.216,-0.415,-0.533,0.15,-0.493,0.719,0.462,-0.698,0.207,-0.047,-0.715,0.375,0.063,-0.725,0.17,-0.153,-0.685,0.148,0.016,-0.637,0.112,0.103,-0.546,0.12,0.173,-0.473,0.149,0.221,-0.427,0.18,0.268,-0.716,0.02,-0.158,-0.43,0.035,0.309,-0.453,-0.071,0.446,-0.441,-0.041,0.528,-0.561,-0.514,-0.217,-0.681,0.029,-0.415,-0.598,-0.406,-0.314,-0.742,0.448,-0.227,-0.466,-0.011,0.261,-0.691,-0.118,-0.193,-0.75,0.415,-0.059,-0.443,-0.298,0.282,-0.506,-0.614,-0.136,-0.454,-0.698,-0.056,-0.318,-0.847,0.128,-0.406,0.116,0.441,-0.656,-0.122,-0.421,-0.366,-0.579,0.193,-0.504,-0.377,0.155,-0.664,-0.174,-0.033,-0.391,0.202,0.396,-0.396,0.356,0.302,-0.632,-0.33,-0.161,-0.374,0.345,0.405,-0.382,-0.643,0.141,-0.427,0.003,0.406,-0.311,-0.691,0.201,-0.501,-0.511,0.052,-0.49,-0.163,0.225,-0.443,-0.583,0.091,-0.603,-0.14,0.151,-0.535,-0.23,0.185,-0.622,-0.244,0.064,-0.433,-0.03,0.341,-0.523,-0.55,-0.038,-0.459,-0.635,0.016,-0.553,-0.428,0.035,-0.662,-0.234,-0.228,-0.594,-0.422,-0.055,-0.63,-0.266,-0.406,-0.56,-0.316,0.125,-0.416,0.078,0.37,-0.454,-0.124,0.541,-0.458,0.416,0.312,-0.564,0.45,0.299,-0.698,0.175,-0.382,-0.605,0.187,0.119,-0.536,0.185,0.172,-0.469,0.204,0.21,-0.395,0.247,0.265,-0.419,0.04,0.474,-0.378,0.262,0.345]},{"yaw":-0.242,"pitch":-0.114,"frame":[-0.261,0.913,0.526,-0.46,0.898,0.455,-0.608,0.863,0.333,-0.718,0.805,0.16,-0.762,0.721,-0.024,-0.76,0.614,-0.196,-0.732,0.496,-0.371,-0.678,0.344,-0.514,-0.636,0.195,-0.592,-0.614,0.038,-0.624,-0.592,-0.126,-0.622,-0.554,-0.296,-0.582,-0.52,-0.448,-0.482,-0.483,-0.569,-0.358,-0.427,-0.682,-0.25,-0.377,-0.765,-0.164,-0.32,-0.842,-0.077,-0.241,-0.9,-0.007,-0.123,-0.925,0.043,0.02,-0.922,0.06,0.141,-0.882,0.05,0.253,-0.817,0.011,0.359,-0.738,-0.03,0.481,-0.62,-0.088,0.584,-0.486,-0.163,0.671,-0.32,-0.226,0.726,-0.123,-0.242,0.754,0.057,-0.23,0.762,0.225,-0.187,0.761,0.385,-0.109,0.73,0.546,0.031,0.669,0.675,0.191,0.559,0.788,0.327,0.4,0.871,0.451,0.185,0.914,0.539,-0.029,0.925,0.559,0.34,0.327,0.354,0.311,0.301,0.366,0.28,0.284,0.378,0.237,0.27,0.388,0.173,0.266,0.392,0.112,0.275,0.383,0.057,0.289,0.365,0.019,0.293,0.349,0.004,0.297,0.344,0.321,0.341,0.38,0.297,0.356,0.4,0.259,0.372,0.418,0.199,0.382,0.423,0.137,0.376,0.413,0.074,0.349,0.388,0.026,0.318,0.364,-0.621,0.303,0.088,-0.604,0.281,0.112,-0.583,0.266,0.135,-0.547,0.256,0.164,-0.496,0.256,0.194,-0.44,0.267,0.213,-0.395,0.28,0.219,-0.368,0.286,0.216,-0.356,0.289,0.221,-0.614,0.315,0.124,-0.6,0.329,0.154,-0.572,0.345,0.187,-0.526,0.354,0.22,-0.469,0.352,0.238,-0.412,0.336,0.236,-0.375,0.31,0.228,0.448,0.471,0.45,0.362,0.511,0.506,0.247,0.524,0.535,0.097,0.505,0.538,-0.095,0.442,0.505,0.502,0.518,0.408,0.407,0.571,0.491,0.272,0.595,0.542,0.102,0.575,0.565,-0.082,0.541,0.553,-0.737,0.433,0.141,-0.712,0.465,0.237,-0.649,0.477,0.32,-0.545,0.467,0.388,-0.389,0.426,0.436,-0.757,0.477,0.08,-0.74,0.52,0.204,-0.677,0.543,0.312,-0.568,0.534,0.41,-0.424,0.516,0.476,0.101,-0.467,0.253,0.07,-0.488,0.271,0.026,-0.509,0.291,-0.037,-0.537,0.302,-0.111,-0.551,0.297,-0.187,-0.553,0.279,-0.252,-0.542,0.258,-0.303,-0.518,0.223,-0.342,-0.487,0.187,-0.368,-0.461,0.137,-0.388,-0.441,0.093,-0.373,-0.426,0.159,-0.353,-0.409,0.227,-0.32,-0.392,0.289,-0.274,-0.379,0.352,-0.208,-0.396,0.382,-0.132,-0.383,0.396,-0.044,-0.404,0.378,0.02,-0.426,0.347,0.067,-0.447,0.306,0.076,-0.463,0.262,0.036,-0.46,0.277,-0.007,-0.456,0.293,-0.065,-0.452,0.303,-0.128,-0.449,0.305,-0.193,-0.45,0.291,-0.241,-0.446,0.268,-0.282,-0.44,0.234,-0.312,-0.439,0.198,-0.34,-0.44,0.157,-0.369,-0.44,0.125,-0.338,-0.439,0.159,-0.315,-0.438,0.202,-0.284,-0.44,0.239,-0.244,-0.446,0.276,-0.196,-0.45,0.302,-0.13,-0.45,0.315,-0.066,-0.449,0.31,-0.008,-0.454,0.298,0.035,-0.458,0.279,-0.247,0.332,0.467,-0.255,0.233,0.494,-0.261,0.14,0.53,-0.271,0.053,0.569,-0.279,-0.04,0.609,-0.284,-0.146,0.619,-0.275,-0.216,0.585,-0.262,-0.247,0.548,-0.245,-0.259,0.457,-0.227,-0.26,0.406,-0.026,-0.216,0.37,-0.366,-0.214,0.289,-0.301,-0.251,0.369,-0.141,-0.251,0.412,0.017,-0.13,0.359,-0.39,-0.127,0.252,-0.252,0.417,0.489,-0.259,0.513,0.524,-0.169,-0.633,0.208,0.417,0.243,0.329,0.1,-0.752,0.175,0.69,0.341,0.101,0.515,0.308,0.292,0.139,-0.08,0.378,-0.005,0.106,0.402,-0.025,-0.158,0.48,0.37,-0.056,0.353,0.478,0.679,0.425,0.131,0.743,0.561,0.584,0.59,0.311,-0.12,-0.198,0.529,-0.083,-0.631,0.225,0.081,-0.351,0.35,0.071,0.067,0.386,0.19,0.02,0.383,0.33,0.733,0.505,-0.059,0.729,0.565,-0.061,0.146,0.423,0.591,0.165,0.235,0.441,0.138,0.338,0.336,0.101,0.371,0.191,0.107,0.374,0.087,0.137,0.371,0.01,0.166,0.379,-0.183,0.22,0.485,0.574,0.006,0.224,0.49,0.4,0.376,-0.02,0.022,0.409,-0.052,0.199,0.386,-0.072,-0.088,0.523,-0.144,-0.059,0.575,0.446,-0.56,0.041,0.687,0.025,0.006,0.544,-0.442,0.001,0.645,0.479,0.192,0.048,-0.025,0.385,0.564,-0.14,0.166,-0.262,0.713,0.533,0.345,-0.67,0.063,0.246,-0.754,0.09,0.002,-0.874,0.149,-0.133,0.101,0.488,0.666,-0.136,-0.026,0.005,-0.606,0.25,0.444,-0.201,0.264,-0.122,0.188,0.447,-0.065,0.345,0.379,0.48,-0.361,0.134,-0.149,0.332,0.444,0.057,-0.678,0.208,-0.081,-0.014,0.477,-0.153,-0.81,0.178,-0.161,-0.717,0.191,-0.054,-0.712,0.204,0.22,-0.55,0.209,0.147,-0.624,0.205,0.259,-0.162,0.358,0.157,-0.252,0.344,0.336,-0.273,0.299,0.299,-0.599,0.148,0.272,-0.465,0.235,0.554,-0.26,0.11,0.628,-0.29,-0.038,0.226,-0.343,0.312,-0.076,0.064,0.448,-0.148,-0.143,0.586,-0.01,0.41,0.426,0.112,0.457,0.47,0.699,0.183,0.053,0.288,0.178,0.369,0.186,0.175,0.375,0.092,0.192,0.368,0.022,0.216,0.361,-0.146,0.022,0.522,-0.07,0.271,0.365,-0.317,0.045,0.527,-0.308,-0.236,0.445,-0.644,0.23,0.041,-0.348,-0.721,0.059,-0.72,0.306,-0.293,-0.697,0.288,-0.033,-0.479,-0.079,0.216,-0.338,-0.145,0.598,-0.375,0.101,0.291,-0.404,-0.157,0.375,-0.624,-0.05,0.087,-0.329,-0.044,0.573,-0.361,-0.202,0.355,-0.748,0.62,0.108,-0.582,0.699,0.379,-0.759,0.538,-0.047,-0.358,-0.197,0.455,-0.239,-0.62,0.189,-0.421,-0.342,0.21,-0.422,0.065,0.242,-0.513,0.019,0.192,-0.696,0.675,0.246,-0.36,-0.543,0.125,-0.44,0.706,0.473,-0.68,0.19,-0.021,-0.689,0.354,0.09,-0.713,0.156,-0.124,-0.659,0.131,0.039,-0.603,0.095,0.117,-0.502,0.104,0.18,-0.423,0.133,0.222,-0.372,0.163,0.264,-0.696,0.007,-0.132,-0.37,0.019,0.302,-0.383,-0.089,0.435,-0.363,-0.06,0.516,-0.532,-0.518,-0.225,-0.681,0.021,-0.387,-0.578,-0.409,-0.313,-0.744,0.435,-0.188,-0.41,-0.026,0.256,-0.669,-0.128,-0.175,-0.74,0.396,-0.025,-0.379,-0.312,0.264,-0.471,-0.619,-0.153,-0.413,-0.705,-0.081,-0.261,-0.854,0.082,-0.336,0.097,0.43,-0.649,-0.127,-0.4,-0.307,-0.589,0.161,-0.448,-0.388,0.142,-0.631,-0.187,-0.022,-0.326,0.184,0.387,-0.339,0.336,0.298,-0.602,-0.338,-0.157,-0.311,0.325,0.398,-0.328,-0.652,0.109,-0.359,-0.014,0.395,-0.25,-0.699,0.158,-0.454,-0.519,0.034,-0.433,-0.177,0.216,-0.394,-0.591,0.067,-0.557,-0.156,0.153,-0.481,-0.243,0.178,-0.58,-0.257,0.066,-0.372,-0.045,0.332,-0.483,-0.558,-0.055,-0.415,-0.643,-0.008,-0.507,-0.437,0.025,-0.638,-0.242,-0.216,-0.556,-0.43,-0.06,-0.617,-0.269,-0.394,-0.509,-0.328,0.118,-0.352,0.061,0.362,-0.371,-0.143,0.527,-0.404,0.394,0.314,-0.515,0.428,0.309,-0.702,0.161,-0.348,-0.567,0.17,0.133,-0.492,0.169,0.18,-0.421,0.188,0.213,-0.34,0.229,0.26,-0.346,0.021,0.463,-0.318,0.243,0.337]},{"yaw":-0.154,"pitch":-0.116,"frame":[-0.194,0.912,0.495,-0.402,0.896,0.439,-0.563,0.86,0.333,-0.689,0.801,0.174,-0.747,0.717,0,-0.759,0.61,-0.166,-0.745,0.492,-0.339,-0.7,0.342,-0.482,-0.663,0.194,-0.56,-0.637,0.037,-0.594,-0.608,-0.126,-0.594,-0.562,-0.3,-0.557,-0.516,-0.453,-0.462,-0.466,-0.575,-0.346,-0.397,-0.689,-0.248,-0.336,-0.773,-0.173,-0.267,-0.848,-0.095,-0.181,-0.904,-0.031,-0.059,-0.925,0.015,0.081,-0.918,0.022,0.196,-0.874,0.002,0.299,-0.801,-0.047,0.395,-0.716,-0.095,0.506,-0.596,-0.163,0.597,-0.463,-0.246,0.676,-0.3,-0.317,0.726,-0.106,-0.339,0.751,0.073,-0.329,0.759,0.24,-0.289,0.759,0.397,-0.21,0.734,0.556,-0.069,0.684,0.682,0.095,0.591,0.792,0.237,0.449,0.873,0.37,0.246,0.915,0.475,0.037,0.925,0.522,0.397,0.331,0.281,0.369,0.304,0.295,0.339,0.285,0.308,0.297,0.27,0.322,0.234,0.265,0.33,0.173,0.274,0.326,0.118,0.286,0.311,0.081,0.29,0.297,0.067,0.293,0.294,0.379,0.346,0.308,0.356,0.361,0.33,0.319,0.378,0.35,0.26,0.386,0.36,0.199,0.378,0.354,0.136,0.348,0.333,0.089,0.314,0.312,-0.58,0.289,0.1,-0.56,0.266,0.122,-0.536,0.252,0.143,-0.498,0.243,0.17,-0.443,0.244,0.194,-0.386,0.256,0.209,-0.338,0.269,0.21,-0.31,0.275,0.205,-0.297,0.278,0.208,-0.571,0.302,0.135,-0.555,0.317,0.163,-0.526,0.336,0.193,-0.479,0.348,0.221,-0.42,0.347,0.234,-0.36,0.33,0.228,-0.318,0.301,0.218,0.498,0.477,0.368,0.42,0.514,0.429,0.312,0.523,0.468,0.169,0.501,0.485,-0.019,0.434,0.472,0.546,0.524,0.323,0.462,0.575,0.411,0.337,0.595,0.472,0.176,0.571,0.512,-0.004,0.533,0.519,-0.7,0.42,0.159,-0.667,0.453,0.249,-0.595,0.466,0.322,-0.482,0.455,0.379,-0.317,0.412,0.415,-0.728,0.466,0.101,-0.7,0.509,0.218,-0.625,0.532,0.317,-0.504,0.521,0.402,-0.351,0.502,0.457,0.16,-0.462,0.197,0.131,-0.485,0.22,0.09,-0.505,0.247,0.033,-0.532,0.263,-0.038,-0.548,0.264,-0.111,-0.552,0.249,-0.176,-0.542,0.23,-0.233,-0.52,0.201,-0.275,-0.488,0.169,-0.305,-0.462,0.125,-0.328,-0.44,0.087,-0.309,-0.426,0.15,-0.285,-0.409,0.213,-0.248,-0.392,0.27,-0.196,-0.38,0.325,-0.129,-0.396,0.35,-0.052,-0.382,0.359,0.031,-0.401,0.335,0.088,-0.423,0.298,0.13,-0.444,0.253,0.135,-0.46,0.21,0.097,-0.457,0.229,0.058,-0.452,0.249,0.007,-0.449,0.263,-0.054,-0.448,0.27,-0.117,-0.45,0.26,-0.167,-0.446,0.237,-0.212,-0.44,0.208,-0.246,-0.439,0.177,-0.275,-0.44,0.142,-0.307,-0.44,0.114,-0.274,-0.439,0.144,-0.249,-0.438,0.182,-0.214,-0.439,0.215,-0.17,-0.444,0.247,-0.118,-0.449,0.27,-0.055,-0.447,0.278,0.005,-0.446,0.269,0.058,-0.451,0.253,0.096,-0.456,0.23,-0.168,0.325,0.438,-0.17,0.225,0.465,-0.171,0.133,0.502,-0.175,0.047,0.541,-0.179,-0.045,0.583,-0.179,-0.151,0.592,-0.171,-0.22,0.558,-0.163,-0.249,0.521,-0.152,-0.259,0.429,-0.142,-0.262,0.377,0.053,-0.214,0.33,-0.29,-0.215,0.272,-0.218,-0.252,0.346,-0.054,-0.251,0.378,0.091,-0.129,0.314,-0.319,-0.131,0.238,-0.174,0.41,0.458,-0.181,0.507,0.494,-0.096,-0.631,0.18,0.464,0.25,0.251,0.163,-0.747,0.129,0.707,0.353,0.005,0.554,0.316,0.208,0.207,-0.079,0.323,0.063,0.104,0.356,0.06,-0.156,0.436,0.427,-0.048,0.28,0.524,0.685,0.341,0.2,0.745,0.503,0.615,0.598,0.221,-0.026,-0.196,0.492,-0.013,-0.628,0.194,0.153,-0.348,0.298,0.137,0.066,0.334,0.254,0.019,0.322,0.389,0.737,0.431,0.013,0.73,0.53,0.011,0.143,0.382,0.623,0.178,0.145,0.488,0.147,0.259,0.389,0.105,0.3,0.249,0.106,0.313,0.148,0.135,0.318,0.074,0.164,0.332,-0.1,0.214,0.453,0.608,0.02,0.135,0.533,0.408,0.292,0.052,0.022,0.364,0.014,0.196,0.343,0.015,-0.089,0.484,-0.049,-0.061,0.543,0.482,-0.537,-0.032,0.701,0.041,-0.091,0.571,-0.419,-0.081,0.667,0.49,0.099,0.117,-0.025,0.336,0.597,-0.123,0.079,-0.189,0.712,0.503,0.389,-0.65,-0.002,0.297,-0.74,0.034,0.068,-0.869,0.112,-0.051,0.097,0.456,0.679,-0.118,-0.119,0.072,-0.602,0.21,0.493,-0.187,0.187,-0.044,0.184,0.414,0.002,0.339,0.341,0.519,-0.342,0.055,-0.074,0.325,0.412,0.121,-0.672,0.166,0,-0.015,0.44,-0.082,-0.809,0.149,-0.089,-0.716,0.162,0.016,-0.707,0.17,0.276,-0.539,0.151,0.206,-0.617,0.156,0.325,-0.16,0.296,0.226,-0.25,0.288,0.396,-0.263,0.231,0.351,-0.584,0.085,0.329,-0.453,0.17,0.585,-0.241,0.026,0.644,-0.27,-0.128,0.291,-0.337,0.251,0.001,0.061,0.409,-0.049,-0.144,0.554,0.057,0.405,0.382,0.178,0.454,0.414,0.713,0.198,-0.044,0.342,0.18,0.3,0.244,0.174,0.314,0.153,0.19,0.314,0.085,0.213,0.312,-0.057,0.019,0.49,-0.003,0.266,0.327,-0.225,0.038,0.504,-0.216,-0.237,0.421,-0.61,0.216,0.056,-0.288,-0.726,0.043,-0.725,0.303,-0.261,-0.676,0.275,-0.011,-0.418,-0.087,0.212,-0.236,-0.15,0.576,-0.308,0.094,0.277,-0.324,-0.16,0.361,-0.581,-0.061,0.101,-0.23,-0.05,0.551,-0.278,-0.203,0.338,-0.72,0.616,0.127,-0.526,0.696,0.376,-0.744,0.534,-0.021,-0.269,-0.198,0.437,-0.168,-0.621,0.161,-0.354,-0.345,0.201,-0.361,0.057,0.234,-0.458,0.01,0.192,-0.654,0.671,0.256,-0.298,-0.545,0.112,-0.374,0.703,0.456,-0.655,0.176,0,-0.653,0.34,0.107,-0.697,0.147,-0.097,-0.624,0.118,0.057,-0.559,0.084,0.128,-0.449,0.094,0.18,-0.365,0.124,0.214,-0.308,0.155,0.251,-0.673,-0.004,-0.104,-0.299,0.013,0.288,-0.299,-0.094,0.42,-0.271,-0.067,0.497,-0.504,-0.525,-0.211,-0.68,0.015,-0.355,-0.558,-0.416,-0.291,-0.74,0.431,-0.158,-0.345,-0.033,0.246,-0.645,-0.138,-0.15,-0.723,0.386,0,-0.306,-0.314,0.25,-0.434,-0.626,-0.15,-0.366,-0.712,-0.088,-0.195,-0.858,0.056,-0.254,0.09,0.41,-0.644,-0.134,-0.371,-0.24,-0.59,0.142,-0.388,-0.392,0.138,-0.594,-0.197,-0.005,-0.25,0.176,0.365,-0.275,0.325,0.278,-0.572,-0.346,-0.139,-0.238,0.315,0.374,-0.265,-0.655,0.091,-0.28,-0.02,0.378,-0.18,-0.7,0.13,-0.401,-0.524,0.031,-0.367,-0.181,0.207,-0.336,-0.595,0.057,-0.504,-0.165,0.157,-0.421,-0.249,0.175,-0.534,-0.265,0.075,-0.297,-0.05,0.317,-0.436,-0.565,-0.053,-0.363,-0.65,-0.015,-0.457,-0.442,0.029,-0.615,-0.251,-0.193,-0.516,-0.437,-0.05,-0.607,-0.276,-0.368,-0.454,-0.334,0.119,-0.275,0.054,0.345,-0.276,-0.147,0.509,-0.342,0.382,0.299,-0.458,0.418,0.302,-0.705,0.158,-0.314,-0.522,0.158,0.14,-0.441,0.158,0.18,-0.365,0.178,0.207,-0.276,0.219,0.243,-0.258,0.014,0.444,-0.247,0.234,0.316]}]'),x6=[],ci={edges:_6,neutral:g6,poses:v6,clips:x6},M6=18,S6=5,oa=parseFloat(new URLSearchParams(location.search).get("s")),E6=1.7,ti=.95,$t=340,ca=1.38,Ga=`
  attribute vec3 aScatter;
  attribute float aRand;

  uniform float uProgress;
  uniform float uTime;
  uniform float uEnergy;
  uniform float uWobble;

  varying float vFade;

  vec4 morphed() {
    // Per-vertex staggered ease between scattered cloud and target shape.
    float p = clamp(uProgress * 1.6 - aRand * 0.6, 0.0, 1.0);
    p = p * p * (3.0 - 2.0 * p);
    vec3 pos = mix(aScatter, position, p);

    // Breathing, amplified by cursor energy. Zero uWobble = rigid shape.
    float amp = uWobble * (1.0 + 7.0 * uEnergy);
    pos += amp * vec3(
      sin(uTime * 1.3 + aRand * 40.0),
      cos(uTime * 1.1 + aRand * 30.0),
      sin(uTime * 0.9 + aRand * 20.0)
    );

    vFade = p;
    return modelViewMatrix * vec4(pos, 1.0);
  }
`,y6=`
  ${Ga}
  uniform float uSize;
  uniform float uPixelRatio;

  void main() {
    vec4 mvPosition = morphed();
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = uSize * uPixelRatio / -mvPosition.z;
  }
`,T6=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.25, d);
    if (a < 0.01) discard;
    // Dots stay visible mid-flight (floor on vFade); uOpacity is the
    // object-level fade so the two shapes hand over without a gap.
    gl_FragColor = vec4(uColor, a * 0.9 * uOpacity * mix(0.35, 1.0, vFade));
  }
`,A6=`
  ${Ga}
  void main() {
    gl_Position = projectionMatrix * morphed();
  }
`,b6=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;

  void main() {
    // Lines vanish quickly while scattered — mid-flight the dots carry the
    // motion; stretched connector lines would read as a hairball.
    float f = vFade * vFade;
    gl_FragColor = vec4(uColor, 0.35 * f * f * uOpacity);
  }
`;function la(i){return new $0(i==="dark"?16777215:0)}const yt=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function w6(i){const e=new Float32Array(i*3),t=new Float32Array(i);for(let n=0;n<i;n++){const r=3.5+Math.random()*2.5,s=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1);e[n*3]=r*Math.sin(a)*Math.cos(s),e[n*3+1]=r*Math.sin(a)*Math.sin(s),e[n*3+2]=r*Math.cos(a),t[n]=Math.random()}return{scatter:e,rand:t}}function ji(i,e,t,n){const r=i.length/3,{scatter:s,rand:a}=w6(r),o=new ze,c=new me(i,3);o.setAttribute("position",c),o.setAttribute("aScatter",new me(s,3)),o.setAttribute("aRand",new me(a,1));const l=new Float32Array(e.length*3),h=new Float32Array(e.length*3),d=new Float32Array(e.length);for(let p=0;p<e.length;p++)l.set(i.subarray(e[p]*3,e[p]*3+3),p*3),h.set(s.subarray(e[p]*3,e[p]*3+3),p*3),d[p]=a[e[p]];const f=new ze,m=new me(l,3);f.setAttribute("position",m),f.setAttribute("aScatter",new me(h,3)),f.setAttribute("aRand",new me(d,1));const g={uniforms:t,transparent:!0,depthWrite:!1},x=new _n;return x.add(new w1(o,new Ge({...g,vertexShader:y6,fragmentShader:T6})),new A1(f,new Ge({...g,vertexShader:A6,fragmentShader:b6}))),n?{group:x,rand:a,pointPos:c,linePos:m,linePosArr:l}:{group:x,rand:a}}function R6(){const i=new Float32Array($t*3),e=Math.PI*(3-Math.sqrt(5));for(let r=0;r<$t;r++){const s=1-r/($t-1)*2,a=Math.sqrt(1-s*s),o=e*r;i[r*3]=Math.cos(o)*a*ti,i[r*3+1]=s*ti,i[r*3+2]=Math.sin(o)*a*ti}const t=[],n=ti*4.2/Math.sqrt($t);for(let r=0;r<$t;r++)for(let s=r+1;s<$t;s++){const a=i[r*3]-i[s*3],o=i[r*3+1]-i[s*3+1],c=i[r*3+2]-i[s*3+2];a*a+o*o+c*c<n*n&&t.push(r,s)}return{positions:i,edges:t}}function C6(){const i=ci.poses??[];if(!i.length)return[];const e=i.map(c=>c.yaw),t=i.map(c=>c.pitch),n=Math.min(...e),r=Math.max(...e),s=Math.min(...t),a=Math.max(...t),o=(c,l,h)=>h-l<1e-4?0:(c-l)/(h-l)*2-1;return i.map(c=>({yaw:o(c.yaw,n,r),pitch:o(c.pitch,s,a),frame:c.frame}))}function P6(i,e,t,n){let r=0;const s=i.map(a=>{const o=(a.yaw-e)**2+(a.pitch-t)**2,c=Math.exp(-o/.18);return r+=c,c});n.fill(0);for(let a=0;a<i.length;a++){const o=s[a]/r;if(o<.002)continue;const c=i[a].frame;for(let l=0;l<n.length;l++)n[l]+=c[l]*o}}function L6(i,e){const t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=new m6({canvas:i,alpha:!0,antialias:!0});n.setPixelRatio(Math.min(devicePixelRatio,2)),n.setSize(innerWidth,innerHeight);const r=new x1,s=new Le(40,innerWidth/innerHeight,.1,50),a=()=>{s.aspect=innerWidth/innerHeight,s.position.z=Math.max(4.2,3.1/s.aspect),s.updateProjectionMatrix()};a();const o=la(e),c={uColor:{value:o.clone()},uTime:{value:0},uEnergy:{value:0},uPixelRatio:{value:Math.min(devicePixelRatio,2)}},l={...c,uProgress:{value:t?1:0},uOpacity:{value:1},uSize:{value:16},uWobble:{value:.004}},h={...c,uProgress:{value:0},uOpacity:{value:0},uSize:{value:13},uWobble:{value:0}},d=Float32Array.from(ci.neutral),f=d.length/3,m=Float32Array.from(d),g=Float32Array.from(d),x=ci.edges,p=ji(m,x,l,!0);r.add(p.group);const u=[...p.group.children];let A=null;const T=R6(),E=ji(T.positions,T.edges,h,!1);r.add(E.group);const U=document.getElementById("projects"),C=[...U.querySelectorAll(".project")],R=document.createElement("nav");R.id="project-list",R.setAttribute("aria-label","Project list");const I=document.createElement("span");I.className="corner-heading",I.textContent="projects",R.append(I);for(const u0 of C){const g0=u0.cloneNode(!0);g0.className="project-list-item",R.append(g0)}document.body.append(R);const S=document.getElementById("experience"),M=document.getElementById("scroll-hint"),P=[...document.querySelectorAll(".drawer-arrow")],q=C.map((u0,g0)=>{const f0=C.length===1?0:1-g0/(C.length-1)*2,b=Math.sqrt(Math.max(0,1-f0*f0*.7)),ee=Math.PI*(3-Math.sqrt(5))*g0+.6;return new F(Math.cos(ee)*b,f0*.72,Math.sin(ee)*b).multiplyScalar(ca)}),H={x:0,y:0};let W=!1,j=0,k=0;addEventListener("pointermove",u0=>{W=!0,j=b0.getElapsedTime();const g0=u0.clientX/innerWidth*2-1,f0=u0.clientY/innerHeight*2-1;k=Math.min(1,k+Math.hypot(g0-H.x,f0-H.y)*2.5),H.x=g0,H.y=f0});const $={x:.15,y:0,vx:0,vy:.1,dragging:!1};addEventListener("pointerdown",u0=>{h.uProgress.value<.5||u0.target.closest("a, button")||($.dragging=!0,$.vx=0,$.vy=0)}),addEventListener("pointermove",u0=>{if(!$.dragging)return;const g0=u0.movementX/innerWidth*Math.PI*2.6,f0=u0.movementY/innerHeight*Math.PI*1.8;$.y+=g0,$.x=Math.max(-1.1,Math.min(1.1,$.x+f0)),$.vy=g0*60,$.vx=f0*60}),addEventListener("pointerup",()=>$.dragging=!1),addEventListener("pointercancel",()=>$.dragging=!1),addEventListener("resize",()=>{a(),n.setSize(innerWidth,innerHeight),c.uPixelRatio.value=Math.min(devicePixelRatio,2)});const V=C6(),i0=ci.clips??[];let o0=null,E0=1/0;const L0={yaw:0,pitch:0,vy:0,vp:0},y0={x:0,y:0,z:0,vx:0,vy:0,vz:0},G={s:0,v:0},t0=(u0,g0,f0,b,ee,H0)=>{const Y0=(f0-u0)*ee-g0*H0;return[u0+(g0+Y0*b)*b,g0+Y0*b]},T0=new Float32Array(f);for(let u0=0;u0<f;u0++)T0[u0]=.09+.22*p.rand[u0];const r0=new F,b0=new D1;let W0=0,w0=t?1:0;return n.setAnimationLoop(()=>{const u0=b0.getElapsedTime(),g0=Math.min(.05,u0-W0||.016);if(W0=u0,c.uTime.value=t?0:u0,!t&&w0<1&&(w0=Math.min(1,Math.max(0,(u0-.5)/2.5))),c.uColor.value.lerp(o,.08),k*=Math.exp(-g0*2.2),c.uEnergy.value=t?0:k,Number.isNaN(oa)){const m0=Math.min(1,scrollY/(innerHeight*E6));[G.s,G.v]=t0(G.s,G.v,m0,g0,70,13),G.v=Math.max(-.55,Math.min(.55,G.v))}else G.s=oa;const f0=G.s,b=yt(0,.6,f0),ee=yt(.25,.95,f0),H0=Math.min(1,w0*2)*(1-yt(.5,.85,f0)),Y0=yt(.15,.5,f0);l.uProgress.value=w0*(1-.55*b),l.uOpacity.value=H0,h.uProgress.value=ee,h.uOpacity.value=Y0;const S0=H0>.01;if(S0&&A&&([y0.y,y0.vy]=t0(y0.y,y0.vy,0,g0,60,9),[y0.x,y0.vx]=t0(y0.x,y0.vx,0,g0,60,9),[y0.z,y0.vz]=t0(y0.z,y0.vz,0,g0,50,9),p.group.rotation.set(y0.x,y0.y,y0.z)),S0&&!A){const m0=t?0:.1*Math.sin(u0*.31)+.06*Math.sin(u0*.73+1.7),N0=t?0:.07*Math.sin(u0*.42+.6)+.05*Math.sin(u0*.19+3.1);if(o0){const O=(u0-o0.start)*M6,h0=Math.floor(O);if(h0>=o0.frames.length-1)o0=null,E0=u0+3+Math.random()*6;else{const n0=o0.frames[h0],v0=o0.frames[h0+1],A0=O-h0;for(let K=0;K<g.length;K++)g[K]=n0[K]+(v0[K]-n0[K])*A0}}if(!o0){const O=u0-j>S6;if(!t&&O&&i0.length?(E0===1/0&&(E0=u0+1+Math.random()*4),u0>=E0&&(o0={frames:i0[Math.floor(Math.random()*i0.length)].frames,start:u0})):O||(E0=1/0),!o0)if(V.length){const h0=(W?H.x:0)+m0,n0=(W?-H.y:0)+N0;[L0.yaw,L0.vy]=t0(L0.yaw,L0.vy,h0,g0,90,11),[L0.pitch,L0.vp]=t0(L0.pitch,L0.vp,n0,g0,90,11),P6(V,L0.yaw,L0.pitch,g)}else g.set(d)}for(let O=0;O<f;O++){const h0=T0[O];m[O*3]+=(g[O*3]-m[O*3])*h0,m[O*3+1]+=(g[O*3+1]-m[O*3+1])*h0,m[O*3+2]+=(g[O*3+2]-m[O*3+2])*h0}for(let O=0;O<x.length;O++)p.linePosArr.set(m.subarray(x[O]*3,x[O]*3+3),O*3);p.pointPos.needsUpdate=!0,p.linePos.needsUpdate=!0;const ie=V.length?.22:.6,y=t?0:Math.sin(u0*.25)*.05,_=t?0:Math.sin(u0*.17+.8)*.02,N=(W?H.x*ie:0)+y,X=W?H.y*ie*.55:0,Z=_+(t?0:-L0.vy*.02);[y0.y,y0.vy]=t0(y0.y,y0.vy,N,g0,60,9),[y0.x,y0.vx]=t0(y0.x,y0.vx,X,g0,60,9),[y0.z,y0.vz]=t0(y0.z,y0.vz,Z,g0,50,9),p.group.rotation.set(y0.x,y0.y,y0.z)}$.dragging||($.vy+=((t?0:.1)-$.vy)*g0*1.4,$.vx+=(0-$.vx)*g0*1.4,$.y+=$.vy*g0,$.x=Math.max(-1.1,Math.min(1.1,$.x+$.vx*g0))),E.group.rotation.set($.x,$.y,0),M.style.opacity=(.45*yt(.75,1,w0)*(1-yt(.02,.15,f0))).toFixed(3);const B0=yt(.78,1,f0);U.style.opacity=B0.toFixed(3),U.classList.toggle("active",B0>.6),R.style.opacity=B0.toFixed(3),R.classList.toggle("active",B0>.6),S.style.opacity=B0.toFixed(3),S.classList.toggle("active",B0>.6);for(const m0 of P)m0.style.opacity=(B0*.7).toFixed(3),m0.classList.toggle("active",B0>.6);if(B0>.01){E.group.updateMatrixWorld();for(let m0=0;m0<C.length;m0++){r0.copy(q[m0]).applyMatrix4(E.group.matrixWorld);const N0=r0.z/ca;r0.project(s);const ie=(r0.x*.5+.5)*innerWidth,y=(-r0.y*.5+.5)*innerHeight,_=(N0+1)/2,N=C[m0];N.style.transform=`translate(-50%, -50%) translate(${ie.toFixed(1)}px, ${y.toFixed(1)}px) scale(${(.72+.34*_).toFixed(3)})`,N.style.opacity=(.25+.75*_).toFixed(3),N.style.zIndex=String(Math.round(_*10))}}n.render(r,s)}),{setTheme(u0){o.copy(la(u0))},enterLive(u0,g0){if(A)return;const f0=new Float32Array(g0*3),b=ji(f0,u0,l,!0),ee=[...b.group.children];for(const H0 of ee)p.group.add(H0);for(const H0 of u)H0.visible=!1;A={...b,meshes:ee,edges:u0,current:f0}},updateLive(u0){if(!A)return;const g0=A.current;for(let f0=0;f0<g0.length;f0++)g0[f0]+=(u0[f0]-g0[f0])*.5;for(let f0=0;f0<A.edges.length;f0++)A.linePosArr.set(g0.subarray(A.edges[f0]*3,A.edges[f0]*3+3),f0*3);A.pointPos.needsUpdate=!0,A.linePos.needsUpdate=!0},exitLive(){if(A){for(const u0 of A.meshes)p.group.remove(u0),u0.geometry.dispose();for(const u0 of u)u0.visible=!0;A=null}}}}const nt=document.getElementById("terminal"),D6=nt.querySelector(".term-title"),Tt=nt.querySelector(".term-body"),ka=nt.querySelector(".term-close"),Wa=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");function mn(i,e){const t=document.createElement("p"),n=document.createElement("span");return n.className="prompt",n.textContent=`$ ${i}`,t.append(n),e&&t.append(document.createElement("br"),e),t}function Ji(i){const e=i.textContent.trim(),{desc:t,tags:n,github:r,link:s,note:a,role:o,dates:c}=i.dataset,l=!!o;nt.classList.toggle("red",l),D6.textContent=`nika@portfolio ~ /${l?"experience":"projects"}/${Wa(e)}`,Tt.replaceChildren(),l&&Tt.append(mn("whoami",`${o} @ ${e} (${c})`)),Tt.append(mn("cat about.txt",t||e)),n&&Tt.append(mn("ls stack/",n.split(",").map(m=>m.trim()).join("   ")));const h=document.createElement("div");if(h.className="term-links",r&&h.append(ua("github ↗",r)),s&&h.append(ua(`${new URL(s).hostname.replace("www.","")} ↗`,s)),h.children.length)Tt.append(mn("open links/"),h);else if(!l){const m=a==="university"?"university coursework":"private project",g=document.createElement("span");g.className="term-note",g.textContent=`no public links — ${m}`,Tt.append(mn("open links/",g))}const d=document.createElement("p"),f=document.createElement("span");f.className="term-cursor",d.append(Object.assign(document.createElement("span"),{className:"prompt",textContent:"$ "}),f),Tt.append(d),nt.hidden=!1,ka.focus()}function ua(i,e){const t=document.createElement("a");return t.href=e,t.target="_blank",t.rel="noopener",t.textContent=i,t}function Qi(){nt.hidden=!0}function U6(){document.addEventListener("click",e=>{const t=e.target.closest(".project, .project-list-item, .xp");t&&(e.preventDefault(),Ji(t))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!nt.hidden&&Qi(),e.key==="Enter"&&e.target.matches?.(".project:not([href]), .project-list-item:not([href]), .xp")&&Ji(e.target)}),ka.addEventListener("click",Qi),nt.querySelector(".term-backdrop").addEventListener("click",Qi),nt.addEventListener("pointerdown",e=>e.stopPropagation());const i=new URLSearchParams(location.search).get("project");if(i){const e=[...document.querySelectorAll("#projects .project, #experience .xp")].find(t=>Wa(t.textContent.trim())===i);e&&Ji(e)}}const I6="modulepreload",N6=function(i,e){return new URL(i,e).href},ha={},F6=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let l=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");r=l(t.map(h=>{if(h=N6(h,n),h in ha)return;ha[h]=!0;const d=h.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(n)for(let g=a.length-1;g>=0;g--){const x=a[g];if(x.href===h&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${f}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":I6,d||(m.as="script"),m.crossOrigin="",m.href=h,c&&m.setAttribute("nonce",c),document.head.appendChild(m),d)return new Promise((g,x)=>{m.addEventListener("load",g),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},O6="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";function B6(i){const e=document.getElementById("live-toggle"),t=document.getElementById("live-hint");let n=!1,r=null,s=null,a=null,o=0;const c=f=>t.textContent=f;async function l(){c("loading…"),e.disabled=!0;const f=document.createElement("video");f.playsInline=!0,f.muted=!0;try{if(r=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"}}),f.srcObject=r,await f.play(),!s){const{FaceLandmarker:g,FilesetResolver:x}=await F6(async()=>{const{FaceLandmarker:u,FilesetResolver:A}=await import("./vision_bundle-Bk4VIwNi.js");return{FaceLandmarker:u,FilesetResolver:A}},[],import.meta.url),p=await x.forVisionTasks("./mediapipe-wasm");s=await g.createFromOptions(p,{baseOptions:{modelAssetPath:O6,delegate:"GPU"},runningMode:"VIDEO",numFaces:1})}}catch(g){h(),e.disabled=!1,c(g.name==="NotAllowedError"?"camera blocked":"unavailable"),setTimeout(()=>c(""),2500);return}n=!0,a=null,e.disabled=!1,e.setAttribute("aria-pressed","true"),c("finding you…");const m=()=>{if(n){if(f.readyState>=2){const g=f.videoWidth/f.videoHeight||1.3333333333333333,p=s.detectForVideo(f,performance.now())?.faceLandmarks?.[0];if(p){const u=Ja(p,g);a||(a=Qa(u),i.enterLive(a.edges,a.keptIdx.length),c("")),i.updateLive(eo(u,a.keptIdx))}}o=requestAnimationFrame(m)}};m()}function h(){r?.getTracks().forEach(f=>f.stop()),r=null}function d(){n=!1,cancelAnimationFrame(o),h(),i.exitLive(),e.setAttribute("aria-pressed","false"),c("")}e.addEventListener("click",()=>n?d():l())}const Gr=document.documentElement,z6=document.getElementById("theme-toggle"),H6=document.getElementById("scene"),Xa=L6(H6,Gr.dataset.theme);U6();B6(Xa);const fa=[{arrow:document.getElementById("work-arrow"),panel:document.getElementById("experience")},{arrow:document.getElementById("projects-arrow"),panel:document.getElementById("project-list")}];for(const{arrow:i,panel:e}of fa)i.addEventListener("click",()=>{const t=e.classList.toggle("open");i.classList.toggle("open",t),i.setAttribute("aria-expanded",String(t));for(const n of fa)n.arrow!==i&&(n.panel.classList.remove("open"),n.arrow.classList.remove("open"),n.arrow.setAttribute("aria-expanded","false"))});new URLSearchParams(location.search).get("view")==="projects"&&requestAnimationFrame(()=>scrollTo(0,document.body.scrollHeight));z6.addEventListener("click",()=>{const i=Gr.dataset.theme==="dark"?"light":"dark";Gr.dataset.theme=i,localStorage.setItem("theme",i),Xa.setTheme(i)});
