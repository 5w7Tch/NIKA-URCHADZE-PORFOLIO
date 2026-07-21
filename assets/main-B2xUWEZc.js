import{t as ja,b as Ja,e as Qa}from"./wire-DomKY6sr.js";const kr="178",eo=0,as=1,to=2,fa=1,no=2,Ke=3,pt=0,Se=1,Ze=2,ft=0,Kt=1,os=2,ls=3,cs=4,io=5,bt=100,ro=101,so=102,ao=103,oo=104,lo=200,co=201,uo=202,ho=203,er=204,tr=205,fo=206,po=207,mo=208,_o=209,go=210,vo=211,xo=212,Mo=213,So=214,nr=0,ir=1,rr=2,Jt=3,sr=4,ar=5,or=6,lr=7,da=0,Eo=1,yo=2,dt=0,To=1,Ao=2,bo=3,wo=4,Ro=5,Co=6,Po=7,pa=300,Qt=301,en=302,cr=303,ur=304,pi=306,hr=1e3,Rt=1001,fr=1002,Be=1003,Lo=1004,Pn=1005,Ve=1006,xi=1007,Ct=1008,it=1009,ma=1010,_a=1011,vn=1012,Wr=1013,Pt=1014,je=1015,En=1016,Xr=1017,qr=1018,xn=1020,ga=35902,va=1021,xa=1022,Oe=1023,Mn=1026,Sn=1027,Ma=1028,Yr=1029,Sa=1030,$r=1031,Kr=1033,ni=33776,ii=33777,ri=33778,si=33779,dr=35840,pr=35841,mr=35842,_r=35843,gr=36196,vr=37492,xr=37496,Mr=37808,Sr=37809,Er=37810,yr=37811,Tr=37812,Ar=37813,br=37814,wr=37815,Rr=37816,Cr=37817,Pr=37818,Lr=37819,Dr=37820,Ur=37821,ai=36492,Ir=36494,Nr=36495,Ea=36283,Fr=36284,Or=36285,Br=36286,Do=3200,Uo=3201,Io=0,No=1,ht="",Pe="srgb",tn="srgb-linear",ci="linear",j0="srgb",Ut=7680,us=519,Fo=512,Oo=513,Bo=514,ya=515,zo=516,Ho=517,Vo=518,Go=519,hs=35044,fs="300 es",Je=2e3,ui=2001;class rn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mi=Math.PI/180,zr=180/Math.PI;function yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[i&255]+de[i>>8&255]+de[i>>16&255]+de[i>>24&255]+"-"+de[e&255]+de[e>>8&255]+"-"+de[e>>16&15|64]+de[e>>24&255]+"-"+de[t&63|128]+de[t>>8&255]+"-"+de[t>>16&255]+de[t>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function k0(i,e,t){return Math.max(e,Math.min(t,i))}function ko(i,e){return(i%e+e)%e}function Si(i,e,t){return(1-t)*i+t*e}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class J0{constructor(e=0,t=0){J0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=k0(this.x,e.x,t.x),this.y=k0(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=k0(this.x,e,t),this.y=k0(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(k0(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(k0(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==f||c!==m||h!==g){let p=1-o;const u=l*f+c*m+h*g+d*x,b=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const I=Math.sqrt(T),R=Math.atan2(I,u*b);p=Math.sin(p*R)/I,o=Math.sin(o*R)/I}const E=o*b;if(l=l*p+f*E,c=c*p+m*E,h=h*p+g*E,d=d*p+x*E,p===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-o*m,e[t+2]=c*g+h*m+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),f=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(k0(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ds.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ds.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=k0(this.x,e.x,t.x),this.y=k0(this.y,e.y,t.y),this.z=k0(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=k0(this.x,e,t),this.y=k0(this.y,e,t),this.z=k0(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(k0(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ei.copy(this).projectOnVector(e),this.sub(Ei)}reflect(e){return this.sub(Ei.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(k0(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ei=new F,ds=new Tn;class N0{constructor(e,t,n,r,s,a,o,l,c){N0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],x=r[0],p=r[3],u=r[6],b=r[1],T=r[4],E=r[7],I=r[2],R=r[5],P=r[8];return s[0]=a*x+o*b+l*I,s[3]=a*p+o*T+l*R,s[6]=a*u+o*E+l*P,s[1]=c*x+h*b+d*I,s[4]=c*p+h*T+d*R,s[7]=c*u+h*E+d*P,s[2]=f*x+m*b+g*I,s[5]=f*p+m*T+g*R,s[8]=f*u+m*E+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,m=c*s-a*l,g=t*d+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=f*x,e[4]=(h*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yi.makeScale(e,t)),this}rotate(e){return this.premultiply(yi.makeRotation(-e)),this}translate(e,t){return this.premultiply(yi.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yi=new N0;function Ta(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wo(){const i=hi("canvas");return i.style.display="block",i}const ps={};function Zt(i){i in ps||(ps[i]=!0,console.warn(i))}function Xo(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function qo(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yo(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ms=new N0().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_s=new N0().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $o(){const i={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===j0&&(r.r=et(r.r),r.g=et(r.g),r.b=et(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===j0&&(r.r=jt(r.r),r.g=jt(r.g),r.b=jt(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ht?ci:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zt("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zt("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tn]:{primaries:e,whitePoint:n,transfer:ci,toXYZ:ms,fromXYZ:_s,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:e,whitePoint:n,transfer:j0,toXYZ:ms,fromXYZ:_s,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}const q0=$o();function et(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jt(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let It;class Ko{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{It===void 0&&(It=hi("canvas")),It.width=e.width,It.height=e.height;const r=It.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=It}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=et(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(et(t[n]/255)*255):t[n]=et(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zo=0;class Zr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zo++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ti(r[a].image)):s.push(Ti(r[a]))}else s=Ti(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ti(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jo=0;const Ai=new F;class Ee extends rn{constructor(e=Ee.DEFAULT_IMAGE,t=Ee.DEFAULT_MAPPING,n=Rt,r=Rt,s=Ve,a=Ct,o=Oe,l=it,c=Ee.DEFAULT_ANISOTROPY,h=ht){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jo++}),this.uuid=yn(),this.name="",this.source=new Zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J0(0,0),this.repeat=new J0(1,1),this.center=new J0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new N0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ai).x}get height(){return this.source.getSize(Ai).y}get depth(){return this.source.getSize(Ai).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hr:e.x=e.x-Math.floor(e.x);break;case Rt:e.x=e.x<0?0:1;break;case fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hr:e.y=e.y-Math.floor(e.y);break;case Rt:e.y=e.y<0?0:1;break;case fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=pa;Ee.DEFAULT_ANISOTROPY=1;class oe{constructor(e=0,t=0,n=0,r=1){oe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,E=(m+1)/2,I=(u+1)/2,R=(h+f)/4,P=(d+x)/4,N=(g+p)/4;return T>E&&T>I?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=R/n,s=P/n):E>I?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=R/r,s=N/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=P/s,r=N/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=k0(this.x,e.x,t.x),this.y=k0(this.y,e.y,t.y),this.z=k0(this.z,e.z,t.z),this.w=k0(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=k0(this.x,e,t),this.y=k0(this.y,e,t),this.z=k0(this.z,e,t),this.w=k0(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(k0(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jo extends rn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new oe(0,0,e,t),this.scissorTest=!1,this.viewport=new oe(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Ee(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lt extends Jo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Aa extends Ee{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Be,this.minFilter=Be,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qo extends Ee{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Be,this.minFilter=Be,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ue.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ue.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ue.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ue):Ue.fromBufferAttribute(s,a),Ue.applyMatrix4(e.matrixWorld),this.expandByPoint(Ue);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ln.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ln.copy(n.boundingBox)),Ln.applyMatrix4(e.matrixWorld),this.union(Ln)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ue),Ue.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cn),Dn.subVectors(this.max,cn),Nt.subVectors(e.a,cn),Ft.subVectors(e.b,cn),Ot.subVectors(e.c,cn),st.subVectors(Ft,Nt),at.subVectors(Ot,Ft),gt.subVectors(Nt,Ot);let t=[0,-st.z,st.y,0,-at.z,at.y,0,-gt.z,gt.y,st.z,0,-st.x,at.z,0,-at.x,gt.z,0,-gt.x,-st.y,st.x,0,-at.y,at.x,0,-gt.y,gt.x,0];return!bi(t,Nt,Ft,Ot,Dn)||(t=[1,0,0,0,1,0,0,0,1],!bi(t,Nt,Ft,Ot,Dn))?!1:(Un.crossVectors(st,at),t=[Un.x,Un.y,Un.z],bi(t,Nt,Ft,Ot,Dn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ue).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ue).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(We[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),We[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),We[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),We[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),We[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),We[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),We[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),We[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(We),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const We=[new F,new F,new F,new F,new F,new F,new F,new F],Ue=new F,Ln=new An,Nt=new F,Ft=new F,Ot=new F,st=new F,at=new F,gt=new F,cn=new F,Dn=new F,Un=new F,vt=new F;function bi(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){vt.fromArray(i,s);const o=r.x*Math.abs(vt.x)+r.y*Math.abs(vt.y)+r.z*Math.abs(vt.z),l=e.dot(vt),c=t.dot(vt),h=n.dot(vt);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const e1=new An,un=new F,wi=new F;class bn{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):e1.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;un.subVectors(e,this.center);const t=un.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(un,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(un.copy(e.center).add(wi)),this.expandByPoint(un.copy(e.center).sub(wi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xe=new F,Ri=new F,In=new F,ot=new F,Ci=new F,Nn=new F,Pi=new F;class jr{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xe)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xe.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xe.copy(this.origin).addScaledVector(this.direction,t),Xe.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ri.copy(e).add(t).multiplyScalar(.5),In.copy(t).sub(e).normalize(),ot.copy(this.origin).sub(Ri);const s=e.distanceTo(t)*.5,a=-this.direction.dot(In),o=ot.dot(this.direction),l=-ot.dot(In),c=ot.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*l-o,f=a*o-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const x=1/h;d*=x,f*=x,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ri).addScaledVector(In,f),m}intersectSphere(e,t){Xe.subVectors(e.center,this.origin);const n=Xe.dot(this.direction),r=Xe.dot(Xe)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xe)!==null}intersectTriangle(e,t,n,r,s){Ci.subVectors(t,e),Nn.subVectors(n,e),Pi.crossVectors(Ci,Nn);let a=this.direction.dot(Pi),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ot.subVectors(this.origin,e);const l=o*this.direction.dot(Nn.crossVectors(ot,Nn));if(l<0)return null;const c=o*this.direction.dot(Ci.cross(ot));if(c<0||l+c>a)return null;const h=-o*ot.dot(Pi);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(e,t,n,r,s,a,o,l,c,h,d,f,m,g,x,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,d,f,m,g,x,p)}set(e,t,n,r,s,a,o,l,c,h,d,f,m,g,x,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Bt.setFromMatrixColumn(e,0).length(),s=1/Bt.setFromMatrixColumn(e,1).length(),a=1/Bt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,g=c*h,x=c*d;t[0]=f+x*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,g=c*h,x=c*d;t[0]=f-x*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t1,e,n1)}lookAt(e,t,n){const r=this.elements;return Ae.subVectors(e,t),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),lt.crossVectors(n,Ae),lt.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),lt.crossVectors(n,Ae)),lt.normalize(),Fn.crossVectors(Ae,lt),r[0]=lt.x,r[4]=Fn.x,r[8]=Ae.x,r[1]=lt.y,r[5]=Fn.y,r[9]=Ae.y,r[2]=lt.z,r[6]=Fn.z,r[10]=Ae.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],x=n[6],p=n[10],u=n[14],b=n[3],T=n[7],E=n[11],I=n[15],R=r[0],P=r[4],N=r[8],S=r[12],M=r[1],C=r[5],q=r[9],z=r[13],H=r[2],j=r[6],W=r[10],e0=r[14],V=r[3],i0=r[7],J=r[11],_0=r[15];return s[0]=a*R+o*M+l*H+c*V,s[4]=a*P+o*C+l*j+c*i0,s[8]=a*N+o*q+l*W+c*J,s[12]=a*S+o*z+l*e0+c*_0,s[1]=h*R+d*M+f*H+m*V,s[5]=h*P+d*C+f*j+m*i0,s[9]=h*N+d*q+f*W+m*J,s[13]=h*S+d*z+f*e0+m*_0,s[2]=g*R+x*M+p*H+u*V,s[6]=g*P+x*C+p*j+u*i0,s[10]=g*N+x*q+p*W+u*J,s[14]=g*S+x*z+p*e0+u*_0,s[3]=b*R+T*M+E*H+I*V,s[7]=b*P+T*C+E*j+I*i0,s[11]=b*N+T*q+E*W+I*J,s[15]=b*S+T*z+E*e0+I*_0,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],x=e[7],p=e[11],u=e[15];return g*(+s*l*d-r*c*d-s*o*f+n*c*f+r*o*m-n*l*m)+x*(+t*l*m-t*c*f+s*a*f-r*a*m+r*c*h-s*l*h)+p*(+t*c*d-t*o*m-s*a*d+n*a*m+s*o*h-n*c*h)+u*(-r*o*h-t*l*d+t*o*f+r*a*d-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],x=e[13],p=e[14],u=e[15],b=d*p*c-x*f*c+x*l*m-o*p*m-d*l*u+o*f*u,T=g*f*c-h*p*c-g*l*m+a*p*m+h*l*u-a*f*u,E=h*x*c-g*d*c+g*o*m-a*x*m-h*o*u+a*d*u,I=g*d*l-h*x*l-g*o*f+a*x*f+h*o*p-a*d*p,R=t*b+n*T+r*E+s*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=b*P,e[1]=(x*f*s-d*p*s-x*r*m+n*p*m+d*r*u-n*f*u)*P,e[2]=(o*p*s-x*l*s+x*r*c-n*p*c-o*r*u+n*l*u)*P,e[3]=(d*l*s-o*f*s-d*r*c+n*f*c+o*r*m-n*l*m)*P,e[4]=T*P,e[5]=(h*p*s-g*f*s+g*r*m-t*p*m-h*r*u+t*f*u)*P,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*u-t*l*u)*P,e[7]=(a*f*s-h*l*s+h*r*c-t*f*c-a*r*m+t*l*m)*P,e[8]=E*P,e[9]=(g*d*s-h*x*s-g*n*m+t*x*m+h*n*u-t*d*u)*P,e[10]=(a*x*s-g*o*s+g*n*c-t*x*c-a*n*u+t*o*u)*P,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*m-t*o*m)*P,e[12]=I*P,e[13]=(h*x*r-g*d*r+g*n*f-t*x*f-h*n*p+t*d*p)*P,e[14]=(g*o*r-a*x*r-g*n*l+t*x*l+a*n*p-t*o*p)*P,e[15]=(a*d*r-h*o*r+h*n*l-t*d*l-a*n*f+t*o*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,f=s*c,m=s*h,g=s*d,x=a*h,p=a*d,u=o*d,b=l*c,T=l*h,E=l*d,I=n.x,R=n.y,P=n.z;return r[0]=(1-(x+u))*I,r[1]=(m+E)*I,r[2]=(g-T)*I,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(f+u))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(g+T)*P,r[9]=(p-b)*P,r[10]=(1-(f+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Bt.set(r[0],r[1],r[2]).length();const a=Bt.set(r[4],r[5],r[6]).length(),o=Bt.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ie.copy(this);const c=1/s,h=1/a,d=1/o;return Ie.elements[0]*=c,Ie.elements[1]*=c,Ie.elements[2]*=c,Ie.elements[4]*=h,Ie.elements[5]*=h,Ie.elements[6]*=h,Ie.elements[8]*=d,Ie.elements[9]*=d,Ie.elements[10]*=d,t.setFromRotationMatrix(Ie),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Je){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,g;if(o===Je)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ui)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Je){const l=this.elements,c=1/(t-e),h=1/(n-r),d=1/(a-s),f=(t+e)*c,m=(n+r)*h;let g,x;if(o===Je)g=(a+s)*d,x=-2*d;else if(o===ui)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bt=new F,Ie=new ae,t1=new F(0,0,0),n1=new F(1,1,1),lt=new F,Fn=new F,Ae=new F,gs=new ae,vs=new Tn;class rt{constructor(e=0,t=0,n=0,r=rt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(k0(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-k0(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(k0(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-k0(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(k0(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-k0(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vs.setFromEuler(this),this.setFromQuaternion(vs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rt.DEFAULT_ORDER="XYZ";class ba{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i1=0;const xs=new F,zt=new Tn,qe=new ae,On=new F,hn=new F,r1=new F,s1=new Tn,Ms=new F(1,0,0),Ss=new F(0,1,0),Es=new F(0,0,1),ys={type:"added"},a1={type:"removed"},Ht={type:"childadded",child:null},Li={type:"childremoved",child:null};class ve extends rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const e=new F,t=new rt,n=new Tn,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ae},normalMatrix:{value:new N0}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zt.setFromAxisAngle(e,t),this.quaternion.multiply(zt),this}rotateOnWorldAxis(e,t){return zt.setFromAxisAngle(e,t),this.quaternion.premultiply(zt),this}rotateX(e){return this.rotateOnAxis(Ms,e)}rotateY(e){return this.rotateOnAxis(Ss,e)}rotateZ(e){return this.rotateOnAxis(Es,e)}translateOnAxis(e,t){return xs.copy(e).applyQuaternion(this.quaternion),this.position.add(xs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ms,e)}translateY(e){return this.translateOnAxis(Ss,e)}translateZ(e){return this.translateOnAxis(Es,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qe.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?On.copy(e):On.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),hn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qe.lookAt(hn,On,this.up):qe.lookAt(On,hn,this.up),this.quaternion.setFromRotationMatrix(qe),r&&(qe.extractRotation(r.matrixWorld),zt.setFromRotationMatrix(qe),this.quaternion.premultiply(zt.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ys),Ht.child=e,this.dispatchEvent(Ht),Ht.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a1),Li.child=e,this.dispatchEvent(Li),Li.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qe.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qe.multiply(e.parent.matrixWorld)),e.applyMatrix4(qe),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ys),Ht.child=e,this.dispatchEvent(Ht),Ht.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hn,e,r1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hn,s1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ve.DEFAULT_UP=new F(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ne=new F,Ye=new F,Di=new F,$e=new F,Vt=new F,Gt=new F,Ts=new F,Ui=new F,Ii=new F,Ni=new F,Fi=new oe,Oi=new oe,Bi=new oe;class Fe{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ne.subVectors(e,t),r.cross(Ne);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ne.subVectors(r,t),Ye.subVectors(n,t),Di.subVectors(e,t);const a=Ne.dot(Ne),o=Ne.dot(Ye),l=Ne.dot(Di),c=Ye.dot(Ye),h=Ye.dot(Di),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$e)===null?!1:$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,$e)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$e.x),l.addScaledVector(a,$e.y),l.addScaledVector(o,$e.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Fi.setScalar(0),Oi.setScalar(0),Bi.setScalar(0),Fi.fromBufferAttribute(e,t),Oi.fromBufferAttribute(e,n),Bi.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fi,s.x),a.addScaledVector(Oi,s.y),a.addScaledVector(Bi,s.z),a}static isFrontFacing(e,t,n,r){return Ne.subVectors(n,t),Ye.subVectors(e,t),Ne.cross(Ye).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ne.subVectors(this.c,this.b),Ye.subVectors(this.a,this.b),Ne.cross(Ye).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fe.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fe.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Fe.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Fe.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fe.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Vt.subVectors(r,n),Gt.subVectors(s,n),Ui.subVectors(e,n);const l=Vt.dot(Ui),c=Gt.dot(Ui);if(l<=0&&c<=0)return t.copy(n);Ii.subVectors(e,r);const h=Vt.dot(Ii),d=Gt.dot(Ii);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Vt,a);Ni.subVectors(e,s);const m=Vt.dot(Ni),g=Gt.dot(Ni);if(g>=0&&m<=g)return t.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Gt,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Ts.subVectors(s,r),o=(d-h)/(d-h+(m-g)),t.copy(r).addScaledVector(Ts,o);const u=1/(p+x+f);return a=x*u,o=f*u,t.copy(n).addScaledVector(Vt,a).addScaledVector(Gt,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ct={h:0,s:0,l:0},Bn={h:0,s:0,l:0};function zi(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Y0{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,q0.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=q0.workingColorSpace){return this.r=e,this.g=t,this.b=n,q0.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=q0.workingColorSpace){if(e=ko(e,1),t=k0(t,0,1),n=k0(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=zi(a,s,e+1/3),this.g=zi(a,s,e),this.b=zi(a,s,e-1/3)}return q0.colorSpaceToWorking(this,r),this}setStyle(e,t=Pe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pe){const n=wa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=et(e.r),this.g=et(e.g),this.b=et(e.b),this}copyLinearToSRGB(e){return this.r=jt(e.r),this.g=jt(e.g),this.b=jt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pe){return q0.workingToColorSpace(pe.copy(this),e),Math.round(k0(pe.r*255,0,255))*65536+Math.round(k0(pe.g*255,0,255))*256+Math.round(k0(pe.b*255,0,255))}getHexString(e=Pe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=q0.workingColorSpace){q0.workingToColorSpace(pe.copy(this),t);const n=pe.r,r=pe.g,s=pe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=q0.workingColorSpace){return q0.workingToColorSpace(pe.copy(this),t),e.r=pe.r,e.g=pe.g,e.b=pe.b,e}getStyle(e=Pe){q0.workingToColorSpace(pe.copy(this),e);const t=pe.r,n=pe.g,r=pe.b;return e!==Pe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ct),this.setHSL(ct.h+e,ct.s+t,ct.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ct),e.getHSL(Bn);const n=Si(ct.h,Bn.h,t),r=Si(ct.s,Bn.s,t),s=Si(ct.l,Bn.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pe=new Y0;Y0.NAMES=wa;let o1=0;class sn extends rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Kt,this.side=pt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=er,this.blendDst=tr,this.blendEquation=bt,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y0(0,0,0),this.blendAlpha=0,this.depthFunc=Jt,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=us,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ut,this.stencilZFail=Ut,this.stencilZPass=Ut,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kt&&(n.blending=this.blending),this.side!==pt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==er&&(n.blendSrc=this.blendSrc),this.blendDst!==tr&&(n.blendDst=this.blendDst),this.blendEquation!==bt&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jt&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==us&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ut&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ut&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ut&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ra extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Y0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rt,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const le=new F,zn=new J0;let l1=0;class me{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hs,this.updateRanges=[],this.gpuType=je,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix3(e),this.setXY(t,zn.x,zn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)le.fromBufferAttribute(this,t),le.applyMatrix3(e),this.setXYZ(t,le.x,le.y,le.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)le.fromBufferAttribute(this,t),le.applyMatrix4(e),this.setXYZ(t,le.x,le.y,le.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)le.fromBufferAttribute(this,t),le.applyNormalMatrix(e),this.setXYZ(t,le.x,le.y,le.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)le.fromBufferAttribute(this,t),le.transformDirection(e),this.setXYZ(t,le.x,le.y,le.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Me(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=Me(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=Me(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Me(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=Me(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Me(t,this.array),n=Me(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Me(t,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Me(t,this.array),n=Me(n,this.array),r=Me(r,this.array),s=Me(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hs&&(e.usage=this.usage),e}}class Ca extends me{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pa extends me{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends me{constructor(e,t,n){super(new Float32Array(e),t,n)}}let c1=0;const Ce=new ae,Hi=new ve,kt=new F,be=new An,fn=new An,fe=new F;class ze extends rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ta(e)?Pa:Ca)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new N0().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ce.makeRotationFromQuaternion(e),this.applyMatrix4(Ce),this}rotateX(e){return Ce.makeRotationX(e),this.applyMatrix4(Ce),this}rotateY(e){return Ce.makeRotationY(e),this.applyMatrix4(Ce),this}rotateZ(e){return Ce.makeRotationZ(e),this.applyMatrix4(Ce),this}translate(e,t,n){return Ce.makeTranslation(e,t,n),this.applyMatrix4(Ce),this}scale(e,t,n){return Ce.makeScale(e,t,n),this.applyMatrix4(Ce),this}lookAt(e){return Hi.lookAt(e),Hi.updateMatrix(),this.applyMatrix4(Hi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kt).negate(),this.translate(kt.x,kt.y,kt.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];be.setFromBufferAttribute(s),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,be.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,be.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(be.min),this.boundingBox.expandByPoint(be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(be.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fn.setFromBufferAttribute(o),this.morphTargetsRelative?(fe.addVectors(be.min,fn.min),be.expandByPoint(fe),fe.addVectors(be.max,fn.max),be.expandByPoint(fe)):(be.expandByPoint(fn.min),be.expandByPoint(fn.max))}be.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)fe.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(fe));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fe.fromBufferAttribute(o,c),l&&(kt.fromBufferAttribute(e,c),fe.add(kt)),r=Math.max(r,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new F,l[N]=new F;const c=new F,h=new F,d=new F,f=new J0,m=new J0,g=new J0,x=new F,p=new F;function u(N,S,M){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),f.fromBufferAttribute(s,N),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(c),d.sub(c),m.sub(f),g.sub(f);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),o[N].add(x),o[S].add(x),o[M].add(x),l[N].add(p),l[S].add(p),l[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,S=b.length;N<S;++N){const M=b[N],C=M.start,q=M.count;for(let z=C,H=C+q;z<H;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new F,E=new F,I=new F,R=new F;function P(N){I.fromBufferAttribute(r,N),R.copy(I);const S=o[N];T.copy(S),T.sub(I.multiplyScalar(I.dot(S))).normalize(),E.crossVectors(R,S);const C=E.dot(l[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,C)}for(let N=0,S=b.length;N<S;++N){const M=b[N],C=M.start,q=M.count;for(let z=C,H=C+q;z<H;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fe.fromBufferAttribute(e,t),fe.normalize(),e.setXYZ(t,fe.x,fe.y,fe.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new me(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ze,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const As=new ae,xt=new jr,Hn=new bn,bs=new F,Vn=new F,Gn=new F,kn=new F,Vi=new F,Wn=new F,ws=new F,Xn=new F;class Qe extends ve{constructor(e=new ze,t=new Ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wn.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Vi.fromBufferAttribute(d,e),a?Wn.addScaledVector(Vi,h):Wn.addScaledVector(Vi.sub(t),h))}t.add(Wn)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hn.copy(n.boundingSphere),Hn.applyMatrix4(s),xt.copy(e.ray).recast(e.near),!(Hn.containsPoint(xt.origin)===!1&&(xt.intersectSphere(Hn,bs)===null||xt.origin.distanceToSquared(bs)>(e.far-e.near)**2))&&(As.copy(s).invert(),xt.copy(e.ray).applyMatrix4(As),!(n.boundingBox!==null&&xt.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xt)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,I=T;E<I;E+=3){const R=o.getX(E),P=o.getX(E+1),N=o.getX(E+2);r=qn(this,u,e,n,c,h,d,R,P,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const b=o.getX(p),T=o.getX(p+1),E=o.getX(p+2);r=qn(this,a,e,n,c,h,d,b,T,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,I=T;E<I;E+=3){const R=E,P=E+1,N=E+2;r=qn(this,u,e,n,c,h,d,R,P,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const b=p,T=p+1,E=p+2;r=qn(this,a,e,n,c,h,d,b,T,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function u1(i,e,t,n,r,s,a,o){let l;if(e.side===Se?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===pt,o),l===null)return null;Xn.copy(o),Xn.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Xn);return c<t.near||c>t.far?null:{distance:c,point:Xn.clone(),object:i}}function qn(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Vn),i.getVertexPosition(l,Gn),i.getVertexPosition(c,kn);const h=u1(i,e,t,n,Vn,Gn,kn,ws);if(h){const d=new F;Fe.getBarycoord(ws,Vn,Gn,kn,d),r&&(h.uv=Fe.getInterpolatedAttribute(r,o,l,c,d,new J0)),s&&(h.uv1=Fe.getInterpolatedAttribute(s,o,l,c,d,new J0)),a&&(h.normal=Fe.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};Fe.getNormal(Vn,Gn,kn,f.normal),h.face=f,h.barycoord=d}return h}class wn extends ze{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2));function g(x,p,u,b,T,E,I,R,P,N,S){const M=E/P,C=I/N,q=E/2,z=I/2,H=R/2,j=P+1,W=N+1;let e0=0,V=0;const i0=new F;for(let J=0;J<W;J++){const _0=J*C-z;for(let C0=0;C0<j;C0++){const $0=C0*M-q;i0[x]=$0*b,i0[p]=_0*T,i0[u]=H,c.push(i0.x,i0.y,i0.z),i0[x]=0,i0[p]=0,i0[u]=R>0?1:-1,h.push(i0.x,i0.y,i0.z),d.push(C0/P),d.push(1-J/N),e0+=1}}for(let J=0;J<N;J++)for(let _0=0;_0<P;_0++){const C0=f+_0+j*J,$0=f+_0+j*(J+1),X=f+(_0+1)+j*(J+1),r0=f+(_0+1)+j*J;l.push(C0,$0,r0),l.push($0,X,r0),V+=6}o.addGroup(m,V,S),m+=V,f+=e0}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ge(i){const e={};for(let t=0;t<i.length;t++){const n=nn(i[t]);for(const r in n)e[r]=n[r]}return e}function h1(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function La(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:q0.workingColorSpace}const f1={clone:nn,merge:ge};var d1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ge extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d1,this.fragmentShader=p1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nn(e.uniforms),this.uniformsGroups=h1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Da extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ut=new F,Rs=new J0,Cs=new J0;class Le extends Da{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ut.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ut.x,ut.y).multiplyScalar(-e/ut.z),ut.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ut.x,ut.y).multiplyScalar(-e/ut.z)}getViewSize(e,t){return this.getViewBounds(e,Rs,Cs),t.subVectors(Cs,Rs)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wt=-90,Xt=1;class m1 extends ve{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Le(Wt,Xt,e,t);r.layers=this.layers,this.add(r);const s=new Le(Wt,Xt,e,t);s.layers=this.layers,this.add(s);const a=new Le(Wt,Xt,e,t);a.layers=this.layers,this.add(a);const o=new Le(Wt,Xt,e,t);o.layers=this.layers,this.add(o);const l=new Le(Wt,Xt,e,t);l.layers=this.layers,this.add(l);const c=new Le(Wt,Xt,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Je)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ui)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ua extends Ee{constructor(e=[],t=Qt,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _1 extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ua(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wn(5,5,5),s=new Ge({name:"CubemapFromEquirect",uniforms:nn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:ft});s.uniforms.tEquirect.value=t;const a=new Qe(r,s),o=t.minFilter;return t.minFilter===Ct&&(t.minFilter=Ve),new m1(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class _n extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g1={type:"move"};class Gi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class v1 extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rt,this.environmentIntensity=1,this.environmentRotation=new rt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ki=new F,x1=new F,M1=new N0;class Tt{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ki.subVectors(n,t).cross(x1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ki),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||M1.getNormalMatrix(e),r=this.coplanarPoint(ki).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mt=new bn,S1=new J0(.5,.5),Yn=new F;class Ia{constructor(e=new Tt,t=new Tt,n=new Tt,r=new Tt,s=new Tt,a=new Tt){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Je){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],g=r[9],x=r[10],p=r[11],u=r[12],b=r[13],T=r[14],E=r[15];if(n[0].setComponents(l-s,f-c,p-m,E-u).normalize(),n[1].setComponents(l+s,f+c,p+m,E+u).normalize(),n[2].setComponents(l+a,f+h,p+g,E+b).normalize(),n[3].setComponents(l-a,f-h,p-g,E-b).normalize(),n[4].setComponents(l-o,f-d,p-x,E-T).normalize(),t===Je)n[5].setComponents(l+o,f+d,p+x,E+T).normalize();else if(t===ui)n[5].setComponents(o,d,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mt.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mt.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mt)}intersectsSprite(e){Mt.center.set(0,0,0);const t=S1.distanceTo(e.center);return Mt.radius=.7071067811865476+t,Mt.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mt)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Yn.x=r.normal.x>0?e.max.x:e.min.x,Yn.y=r.normal.y>0?e.max.y:e.min.y,Yn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class E1 extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Y0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fi=new F,di=new F,Ps=new ae,dn=new jr,$n=new bn,Wi=new F,Ls=new F;class y1 extends ve{constructor(e=new ze,t=new E1){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)fi.fromBufferAttribute(t,r-1),di.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=fi.distanceTo(di);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$n.copy(n.boundingSphere),$n.applyMatrix4(r),$n.radius+=s,e.ray.intersectsSphere($n)===!1)return;Ps.copy(r).invert(),dn.copy(e.ray).applyMatrix4(Ps);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=m,p=g-1;x<p;x+=c){const u=h.getX(x),b=h.getX(x+1),T=Kn(this,e,dn,l,u,b,x);T&&t.push(T)}if(this.isLineLoop){const x=h.getX(g-1),p=h.getX(m),u=Kn(this,e,dn,l,x,p,g-1);u&&t.push(u)}}else{const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=m,p=g-1;x<p;x+=c){const u=Kn(this,e,dn,l,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){const x=Kn(this,e,dn,l,g-1,m,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kn(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(fi.fromBufferAttribute(o,r),di.fromBufferAttribute(o,s),t.distanceSqToSegment(fi,di,Wi,Ls)>n)return;Wi.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Wi);if(!(c<e.near||c>e.far))return{distance:c,point:Ls.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Ds=new F,Us=new F;class T1 extends y1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ds.fromBufferAttribute(t,r),Us.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ds.distanceTo(Us);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class A1 extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Y0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Is=new ae,Hr=new jr,Zn=new bn,jn=new F;class b1 extends ve{constructor(e=new ze,t=new A1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zn.copy(n.boundingSphere),Zn.applyMatrix4(r),Zn.radius+=s,e.ray.intersectsSphere(Zn)===!1)return;Is.copy(r).invert(),Hr.copy(e.ray).applyMatrix4(Is);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,x=m;g<x;g++){const p=c.getX(g);jn.fromBufferAttribute(d,p),Ns(jn,p,l,r,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,x=m;g<x;g++)jn.fromBufferAttribute(d,g),Ns(jn,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ns(i,e,t,n,r,s,a){const o=Hr.distanceSqToPoint(i);if(o<t){const l=new F;Hr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Na extends Ee{constructor(e,t,n=Pt,r,s,a,o=Be,l=Be,c,h=Mn,d=1){if(h!==Mn&&h!==Sn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mi extends ze{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=e/o,f=t/l,m=[],g=[],x=[],p=[];for(let u=0;u<h;u++){const b=u*f-a;for(let T=0;T<c;T++){const E=T*d-s;g.push(E,-b,0),x.push(0,0,1),p.push(T/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const T=b+c*u,E=b+c*(u+1),I=b+1+c*(u+1),R=b+1+c*u;m.push(T,E,R),m.push(E,I,R)}this.setIndex(m),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.widthSegments,e.heightSegments)}}class w1 extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Do,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R1 extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class C1 extends Da{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class P1 extends Le{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class L1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fs(i,e,t,n){const r=D1(n);switch(t){case va:return i*e;case Ma:return i*e/r.components*r.byteLength;case Yr:return i*e/r.components*r.byteLength;case Sa:return i*e*2/r.components*r.byteLength;case $r:return i*e*2/r.components*r.byteLength;case xa:return i*e*3/r.components*r.byteLength;case Oe:return i*e*4/r.components*r.byteLength;case Kr:return i*e*4/r.components*r.byteLength;case ni:case ii:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ri:case si:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pr:case _r:return Math.max(i,16)*Math.max(e,8)/4;case dr:case mr:return Math.max(i,8)*Math.max(e,8)/2;case gr:case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Er:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Tr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ar:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case br:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Lr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Dr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ur:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ai:case Ir:case Nr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ea:case Fr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Or:case Br:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function D1(i){switch(i){case it:case ma:return{byteLength:1,components:1};case vn:case _a:case En:return{byteLength:2,components:1};case Xr:case qr:return{byteLength:2,components:4};case Pt:case Wr:case je:return{byteLength:4,components:1};case ga:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kr);function Fa(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function U1(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const x=d[m];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var I1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N1=`#ifdef USE_ALPHAHASH
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
#endif`,F1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H1=`#ifdef USE_AOMAP
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
#endif`,V1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G1=`#ifdef USE_BATCHING
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
#endif`,k1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Y1=`#ifdef USE_IRIDESCENCE
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
#endif`,$1=`#ifdef USE_BUMPMAP
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
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n3=`#if defined( USE_COLOR_ALPHA )
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
#endif`,i3=`#define PI 3.141592653589793
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
} // validated`,r3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s3=`vec3 transformedNormal = objectNormal;
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
#endif`,a3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u3="gl_FragColor = linearToOutputTexel( gl_FragColor );",h3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f3=`#ifdef USE_ENVMAP
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
#endif`,d3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p3=`#ifdef USE_ENVMAP
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
#endif`,m3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_3=`#ifdef USE_ENVMAP
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
#endif`,g3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S3=`#ifdef USE_GRADIENTMAP
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
}`,E3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A3=`uniform bool receiveShadow;
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
#endif`,b3=`#ifdef USE_ENVMAP
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
#endif`,w3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L3=`PhysicalMaterial material;
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
#endif`,D3=`struct PhysicalMaterial {
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
}`,U3=`
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
#endif`,I3=`#if defined( RE_IndirectDiffuse )
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
#endif`,N3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F3=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O3=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B3=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z3=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k3=`#if defined( USE_POINTS_UV )
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
#endif`,W3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K3=`#ifdef USE_MORPHTARGETS
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
#endif`,Z3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,J3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n2=`#ifdef USE_NORMALMAP
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
#endif`,i2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o2=`#ifdef OPAQUE
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
}`,c2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v2=`float getShadowMask() {
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
}`,x2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M2=`#ifdef USE_SKINNING
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
#endif`,S2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E2=`#ifdef USE_SKINNING
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
#endif`,y2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w2=`#ifdef USE_TRANSMISSION
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
#endif`,R2=`#ifdef USE_TRANSMISSION
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
#endif`,C2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I2=`uniform sampler2D t2D;
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
}`,N2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z2=`#include <common>
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
}`,H2=`#if DEPTH_PACKING == 3200
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
}`,V2=`#define DISTANCE
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
}`,G2=`#define DISTANCE
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
}`,k2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X2=`uniform float scale;
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
}`,q2=`uniform vec3 diffuse;
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
}`,Y2=`#include <common>
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
}`,$2=`uniform vec3 diffuse;
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
}`,K2=`#define LAMBERT
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
}`,Z2=`#define LAMBERT
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
}`,j2=`#define MATCAP
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
}`,J2=`#define MATCAP
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
}`,Q2=`#define NORMAL
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
}`,e4=`#define NORMAL
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
}`,t4=`#define PHONG
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
}`,n4=`#define PHONG
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
}`,i4=`#define STANDARD
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
}`,r4=`#define STANDARD
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
}`,s4=`#define TOON
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
}`,a4=`#define TOON
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
}`,o4=`uniform float size;
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
}`,c4=`#include <common>
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
}`,u4=`uniform vec3 color;
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
}`,h4=`uniform float rotation;
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
}`,f4=`uniform vec3 diffuse;
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
}`,O0={alphahash_fragment:I1,alphahash_pars_fragment:N1,alphamap_fragment:F1,alphamap_pars_fragment:O1,alphatest_fragment:B1,alphatest_pars_fragment:z1,aomap_fragment:H1,aomap_pars_fragment:V1,batching_pars_vertex:G1,batching_vertex:k1,begin_vertex:W1,beginnormal_vertex:X1,bsdfs:q1,iridescence_fragment:Y1,bumpmap_pars_fragment:$1,clipping_planes_fragment:K1,clipping_planes_pars_fragment:Z1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:J1,color_fragment:Q1,color_pars_fragment:e3,color_pars_vertex:t3,color_vertex:n3,common:i3,cube_uv_reflection_fragment:r3,defaultnormal_vertex:s3,displacementmap_pars_vertex:a3,displacementmap_vertex:o3,emissivemap_fragment:l3,emissivemap_pars_fragment:c3,colorspace_fragment:u3,colorspace_pars_fragment:h3,envmap_fragment:f3,envmap_common_pars_fragment:d3,envmap_pars_fragment:p3,envmap_pars_vertex:m3,envmap_physical_pars_fragment:b3,envmap_vertex:_3,fog_vertex:g3,fog_pars_vertex:v3,fog_fragment:x3,fog_pars_fragment:M3,gradientmap_pars_fragment:S3,lightmap_pars_fragment:E3,lights_lambert_fragment:y3,lights_lambert_pars_fragment:T3,lights_pars_begin:A3,lights_toon_fragment:w3,lights_toon_pars_fragment:R3,lights_phong_fragment:C3,lights_phong_pars_fragment:P3,lights_physical_fragment:L3,lights_physical_pars_fragment:D3,lights_fragment_begin:U3,lights_fragment_maps:I3,lights_fragment_end:N3,logdepthbuf_fragment:F3,logdepthbuf_pars_fragment:O3,logdepthbuf_pars_vertex:B3,logdepthbuf_vertex:z3,map_fragment:H3,map_pars_fragment:V3,map_particle_fragment:G3,map_particle_pars_fragment:k3,metalnessmap_fragment:W3,metalnessmap_pars_fragment:X3,morphinstance_vertex:q3,morphcolor_vertex:Y3,morphnormal_vertex:$3,morphtarget_pars_vertex:K3,morphtarget_vertex:Z3,normal_fragment_begin:j3,normal_fragment_maps:J3,normal_pars_fragment:Q3,normal_pars_vertex:e2,normal_vertex:t2,normalmap_pars_fragment:n2,clearcoat_normal_fragment_begin:i2,clearcoat_normal_fragment_maps:r2,clearcoat_pars_fragment:s2,iridescence_pars_fragment:a2,opaque_fragment:o2,packing:l2,premultiplied_alpha_fragment:c2,project_vertex:u2,dithering_fragment:h2,dithering_pars_fragment:f2,roughnessmap_fragment:d2,roughnessmap_pars_fragment:p2,shadowmap_pars_fragment:m2,shadowmap_pars_vertex:_2,shadowmap_vertex:g2,shadowmask_pars_fragment:v2,skinbase_vertex:x2,skinning_pars_vertex:M2,skinning_vertex:S2,skinnormal_vertex:E2,specularmap_fragment:y2,specularmap_pars_fragment:T2,tonemapping_fragment:A2,tonemapping_pars_fragment:b2,transmission_fragment:w2,transmission_pars_fragment:R2,uv_pars_fragment:C2,uv_pars_vertex:P2,uv_vertex:L2,worldpos_vertex:D2,background_vert:U2,background_frag:I2,backgroundCube_vert:N2,backgroundCube_frag:F2,cube_vert:O2,cube_frag:B2,depth_vert:z2,depth_frag:H2,distanceRGBA_vert:V2,distanceRGBA_frag:G2,equirect_vert:k2,equirect_frag:W2,linedashed_vert:X2,linedashed_frag:q2,meshbasic_vert:Y2,meshbasic_frag:$2,meshlambert_vert:K2,meshlambert_frag:Z2,meshmatcap_vert:j2,meshmatcap_frag:J2,meshnormal_vert:Q2,meshnormal_frag:e4,meshphong_vert:t4,meshphong_frag:n4,meshphysical_vert:i4,meshphysical_frag:r4,meshtoon_vert:s4,meshtoon_frag:a4,points_vert:o4,points_frag:l4,shadow_vert:c4,shadow_frag:u4,sprite_vert:h4,sprite_frag:f4},l0={common:{diffuse:{value:new Y0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new N0},alphaMap:{value:null},alphaMapTransform:{value:new N0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new N0}},envmap:{envMap:{value:null},envMapRotation:{value:new N0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new N0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new N0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new N0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new N0},normalScale:{value:new J0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new N0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new N0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new N0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new N0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Y0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new N0},alphaTest:{value:0},uvTransform:{value:new N0}},sprite:{diffuse:{value:new Y0(16777215)},opacity:{value:1},center:{value:new J0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new N0},alphaMap:{value:null},alphaMapTransform:{value:new N0},alphaTest:{value:0}}},He={basic:{uniforms:ge([l0.common,l0.specularmap,l0.envmap,l0.aomap,l0.lightmap,l0.fog]),vertexShader:O0.meshbasic_vert,fragmentShader:O0.meshbasic_frag},lambert:{uniforms:ge([l0.common,l0.specularmap,l0.envmap,l0.aomap,l0.lightmap,l0.emissivemap,l0.bumpmap,l0.normalmap,l0.displacementmap,l0.fog,l0.lights,{emissive:{value:new Y0(0)}}]),vertexShader:O0.meshlambert_vert,fragmentShader:O0.meshlambert_frag},phong:{uniforms:ge([l0.common,l0.specularmap,l0.envmap,l0.aomap,l0.lightmap,l0.emissivemap,l0.bumpmap,l0.normalmap,l0.displacementmap,l0.fog,l0.lights,{emissive:{value:new Y0(0)},specular:{value:new Y0(1118481)},shininess:{value:30}}]),vertexShader:O0.meshphong_vert,fragmentShader:O0.meshphong_frag},standard:{uniforms:ge([l0.common,l0.envmap,l0.aomap,l0.lightmap,l0.emissivemap,l0.bumpmap,l0.normalmap,l0.displacementmap,l0.roughnessmap,l0.metalnessmap,l0.fog,l0.lights,{emissive:{value:new Y0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:O0.meshphysical_vert,fragmentShader:O0.meshphysical_frag},toon:{uniforms:ge([l0.common,l0.aomap,l0.lightmap,l0.emissivemap,l0.bumpmap,l0.normalmap,l0.displacementmap,l0.gradientmap,l0.fog,l0.lights,{emissive:{value:new Y0(0)}}]),vertexShader:O0.meshtoon_vert,fragmentShader:O0.meshtoon_frag},matcap:{uniforms:ge([l0.common,l0.bumpmap,l0.normalmap,l0.displacementmap,l0.fog,{matcap:{value:null}}]),vertexShader:O0.meshmatcap_vert,fragmentShader:O0.meshmatcap_frag},points:{uniforms:ge([l0.points,l0.fog]),vertexShader:O0.points_vert,fragmentShader:O0.points_frag},dashed:{uniforms:ge([l0.common,l0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:O0.linedashed_vert,fragmentShader:O0.linedashed_frag},depth:{uniforms:ge([l0.common,l0.displacementmap]),vertexShader:O0.depth_vert,fragmentShader:O0.depth_frag},normal:{uniforms:ge([l0.common,l0.bumpmap,l0.normalmap,l0.displacementmap,{opacity:{value:1}}]),vertexShader:O0.meshnormal_vert,fragmentShader:O0.meshnormal_frag},sprite:{uniforms:ge([l0.sprite,l0.fog]),vertexShader:O0.sprite_vert,fragmentShader:O0.sprite_frag},background:{uniforms:{uvTransform:{value:new N0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:O0.background_vert,fragmentShader:O0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new N0}},vertexShader:O0.backgroundCube_vert,fragmentShader:O0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:O0.cube_vert,fragmentShader:O0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:O0.equirect_vert,fragmentShader:O0.equirect_frag},distanceRGBA:{uniforms:ge([l0.common,l0.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:O0.distanceRGBA_vert,fragmentShader:O0.distanceRGBA_frag},shadow:{uniforms:ge([l0.lights,l0.fog,{color:{value:new Y0(0)},opacity:{value:1}}]),vertexShader:O0.shadow_vert,fragmentShader:O0.shadow_frag}};He.physical={uniforms:ge([He.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new N0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new N0},clearcoatNormalScale:{value:new J0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new N0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new N0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new N0},sheen:{value:0},sheenColor:{value:new Y0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new N0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new N0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new N0},transmissionSamplerSize:{value:new J0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new N0},attenuationDistance:{value:0},attenuationColor:{value:new Y0(0)},specularColor:{value:new Y0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new N0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new N0},anisotropyVector:{value:new J0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new N0}}]),vertexShader:O0.meshphysical_vert,fragmentShader:O0.meshphysical_frag};const Jn={r:0,b:0,g:0},St=new rt,d4=new ae;function p4(i,e,t,n,r,s,a){const o=new Y0(0);let l=s===!0?0:1,c,h,d=null,f=0,m=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function x(T){let E=!1;const I=g(T);I===null?u(o,l):I&&I.isColor&&(u(I,1),E=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,E){const I=g(E);I&&(I.isCubeTexture||I.mapping===pi)?(h===void 0&&(h=new Qe(new wn(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:nn(He.backgroundCube.uniforms),vertexShader:He.backgroundCube.vertexShader,fragmentShader:He.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),St.copy(E.backgroundRotation),St.x*=-1,St.y*=-1,St.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(St.y*=-1,St.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(d4.makeRotationFromEuler(St)),h.material.toneMapped=q0.getTransfer(I.colorSpace)!==j0,(d!==I||f!==I.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=I,f=I.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Qe(new mi(2,2),new Ge({name:"BackgroundMaterial",uniforms:nn(He.background.uniforms),vertexShader:He.background.vertexShader,fragmentShader:He.background.fragmentShader,side:pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=q0.getTransfer(I.colorSpace)!==j0,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||f!==I.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=I,f=I.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function u(T,E){T.getRGB(Jn,La(i)),n.buffers.color.setClear(Jn.r,Jn.g,Jn.b,E,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),l=E,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,u(o,l)},render:x,addToRenderList:p,dispose:b}}function m4(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(M,C,q,z,H){let j=!1;const W=d(z,q,C);s!==W&&(s=W,c(s.object)),j=m(M,z,q,H),j&&g(M,z,q,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(M,C,q,z),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,C,q){const z=q.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let j=H[C.id];j===void 0&&(j={},H[C.id]=j);let W=j[z];return W===void 0&&(W=f(l()),j[z]=W),W}function f(M){const C=[],q=[],z=[];for(let H=0;H<t;H++)C[H]=0,q[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:q,attributeDivisors:z,object:M,attributes:{},index:null}}function m(M,C,q,z){const H=s.attributes,j=C.attributes;let W=0;const e0=q.getAttributes();for(const V in e0)if(e0[V].location>=0){const J=H[V];let _0=j[V];if(_0===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(_0=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(_0=M.instanceColor)),J===void 0||J.attribute!==_0||_0&&J.data!==_0.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function g(M,C,q,z){const H={},j=C.attributes;let W=0;const e0=q.getAttributes();for(const V in e0)if(e0[V].location>=0){let J=j[V];J===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const _0={};_0.attribute=J,J&&J.data&&(_0.data=J.data),H[V]=_0,W++}s.attributes=H,s.attributesNum=W,s.index=z}function x(){const M=s.newAttributes;for(let C=0,q=M.length;C<q;C++)M[C]=0}function p(M){u(M,0)}function u(M,C){const q=s.newAttributes,z=s.enabledAttributes,H=s.attributeDivisors;q[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),H[M]!==C&&(i.vertexAttribDivisor(M,C),H[M]=C)}function b(){const M=s.newAttributes,C=s.enabledAttributes;for(let q=0,z=C.length;q<z;q++)C[q]!==M[q]&&(i.disableVertexAttribArray(q),C[q]=0)}function T(M,C,q,z,H,j,W){W===!0?i.vertexAttribIPointer(M,C,q,H,j):i.vertexAttribPointer(M,C,q,z,H,j)}function E(M,C,q,z){x();const H=z.attributes,j=q.getAttributes(),W=C.defaultAttributeValues;for(const e0 in j){const V=j[e0];if(V.location>=0){let i0=H[e0];if(i0===void 0&&(e0==="instanceMatrix"&&M.instanceMatrix&&(i0=M.instanceMatrix),e0==="instanceColor"&&M.instanceColor&&(i0=M.instanceColor)),i0!==void 0){const J=i0.normalized,_0=i0.itemSize,C0=e.get(i0);if(C0===void 0)continue;const $0=C0.buffer,X=C0.type,r0=C0.bytesPerElement,S0=X===i.INT||X===i.UNSIGNED_INT||i0.gpuType===Wr;if(i0.isInterleavedBufferAttribute){const c0=i0.data,K=c0.stride,f0=i0.offset;if(c0.isInstancedInterleavedBuffer){for(let a0=0;a0<V.locationSize;a0++)u(V.location+a0,c0.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=c0.meshPerAttribute*c0.count)}else for(let a0=0;a0<V.locationSize;a0++)p(V.location+a0);i.bindBuffer(i.ARRAY_BUFFER,$0);for(let a0=0;a0<V.locationSize;a0++)T(V.location+a0,_0/V.locationSize,X,J,K*r0,(f0+_0/V.locationSize*a0)*r0,S0)}else{if(i0.isInstancedBufferAttribute){for(let c0=0;c0<V.locationSize;c0++)u(V.location+c0,i0.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=i0.meshPerAttribute*i0.count)}else for(let c0=0;c0<V.locationSize;c0++)p(V.location+c0);i.bindBuffer(i.ARRAY_BUFFER,$0);for(let c0=0;c0<V.locationSize;c0++)T(V.location+c0,_0/V.locationSize,X,J,_0*r0,_0/V.locationSize*c0*r0,S0)}}else if(W!==void 0){const J=W[e0];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(V.location,J);break;case 3:i.vertexAttrib3fv(V.location,J);break;case 4:i.vertexAttrib4fv(V.location,J);break;default:i.vertexAttrib1fv(V.location,J)}}}}b()}function I(){N();for(const M in n){const C=n[M];for(const q in C){const z=C[q];for(const H in z)h(z[H].object),delete z[H];delete C[q]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const q in C){const z=C[q];for(const H in z)h(z[H].object),delete z[H];delete C[q]}delete n[M.id]}function P(M){for(const C in n){const q=n[C];if(q[M.id]===void 0)continue;const z=q[M.id];for(const H in z)h(z[H].object),delete z[H];delete q[M.id]}}function N(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function _4(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];t.update(m,n,1)}function l(c,h,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function g4(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Oe&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const N=P===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==it&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==je&&!N)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:I,maxSamples:R}}function v4(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Tt,o=new N0,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const b=s?0:n,T=b*4;let E=u.clippingState||null;l.value=E,E=h(g,f,T,m);for(let I=0;I!==T;++I)E[I]=t[I];u.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const u=m+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let T=0,E=m;T!==x;++T,E+=4)a.copy(d[T]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function x4(i){let e=new WeakMap;function t(a,o){return o===cr?a.mapping=Qt:o===ur&&(a.mapping=en),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===cr||o===ur)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _1(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const $t=4,Os=[.125,.215,.35,.446,.526,.582],wt=20,Xi=new C1,Bs=new Y0;let qi=null,Yi=0,$i=0,Ki=!1;const At=(1+Math.sqrt(5))/2,qt=1/At,zs=[new F(-At,qt,0),new F(At,qt,0),new F(-qt,0,At),new F(qt,0,At),new F(0,At,-qt),new F(0,At,qt),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],M4=new F;class Hs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=M4}=s;qi=this._renderer.getRenderTarget(),Yi=this._renderer.getActiveCubeFace(),$i=this._renderer.getActiveMipmapLevel(),Ki=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ks(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qi,Yi,$i),this._renderer.xr.enabled=Ki,e.scissorTest=!1,Qn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qt||e.mapping===en?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qi=this._renderer.getRenderTarget(),Yi=this._renderer.getActiveCubeFace(),$i=this._renderer.getActiveMipmapLevel(),Ki=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:En,format:Oe,colorSpace:tn,depthBuffer:!1},r=Vs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vs(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S4(s)),this._blurMaterial=E4(s,e,t)}return r}_compileMaterial(e){const t=new Qe(this._lodPlanes[0],e);this._renderer.compile(t,Xi)}_sceneToCubeUV(e,t,n,r,s){const l=new Le(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(Bs),d.toneMapping=dt,d.autoClear=!1;const g=new Ra({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),x=new Qe(new wn,g);let p=!1;const u=e.background;u?u.isColor&&(g.color.copy(u),e.background=null,p=!0):(g.color.copy(Bs),p=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):T===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));const E=this._cubeSize;Qn(r,T*E,b>2?E:0,E,E),d.setRenderTarget(r),p&&d.render(x,l),d.render(e,l)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Qt||e.mapping===en;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ks()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gs());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qn(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Xi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zs[(r-s-1)%zs.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Qe(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wt-1),x=s/g,p=isFinite(s)?1+Math.floor(h*x):wt;p>wt&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wt}`);const u=[];let b=0;for(let P=0;P<wt;++P){const N=P/x,S=Math.exp(-N*N/2);u.push(S),P===0?b+=S:P<p&&(b+=2*S)}for(let P=0;P<u.length;P++)u[P]=u[P]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const E=this._sizeLods[r],I=3*E*(r>T-$t?r-T+$t:0),R=4*(this._cubeSize-E);Qn(t,I,R,3*E,2*E),l.setRenderTarget(t),l.render(d,Xi)}}function S4(i){const e=[],t=[],n=[];let r=i;const s=i-$t+1+Os.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-$t?l=Os[a-i+$t-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,x=3,p=2,u=1,b=new Float32Array(x*g*m),T=new Float32Array(p*g*m),E=new Float32Array(u*g*m);for(let R=0;R<m;R++){const P=R%3*2/3-1,N=R>2?0:-1,S=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];b.set(S,x*g*R),T.set(f,p*g*R);const M=[R,R,R,R,R,R];E.set(M,u*g*R)}const I=new ze;I.setAttribute("position",new me(b,x)),I.setAttribute("uv",new me(T,p)),I.setAttribute("faceIndex",new me(E,u)),e.push(I),r>$t&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vs(i,e,t){const n=new Lt(i,e,t);return n.texture.mapping=pi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qn(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function E4(i,e,t){const n=new Float32Array(wt),r=new F(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:wt,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jr(),fragmentShader:`

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
	`}function y4(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===cr||l===ur,h=l===Qt||l===en;if(c||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Hs(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new Hs(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function T4(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Zt("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function A4(i,e,t,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(d){const f=[],m=d.index,g=d.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let T=0,E=b.length;T<E;T+=3){const I=b[T+0],R=b[T+1],P=b[T+2];f.push(I,R,R,P,P,I)}}else if(g!==void 0){const b=g.array;x=g.version;for(let T=0,E=b.length/3-1;T<E;T+=3){const I=T+0,R=T+1,P=T+2;f.push(I,R,R,P,P,I)}}else return;const p=new(Ta(f)?Pa:Ca)(f,1);p.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function b4(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,s,f*a),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,f*a,g),t.update(m,n,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];t.update(p,n,1)}function d(f,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,x,0,g);let u=0;for(let b=0;b<g;b++)u+=m[b]*x[b];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function w4(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function R4(i,e,t){const n=new WeakMap,r=new oe;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let E=o.attributes.position.count*T,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*I*4*d),P=new Aa(R,E,I,d);P.type=je,P.needsUpdate=!0;const N=T*4;for(let M=0;M<d;M++){const C=p[M],q=u[M],z=b[M],H=E*I*4*M;for(let j=0;j<C.count;j++){const W=j*N;m===!0&&(r.fromBufferAttribute(C,j),R[H+W+0]=r.x,R[H+W+1]=r.y,R[H+W+2]=r.z,R[H+W+3]=0),g===!0&&(r.fromBufferAttribute(q,j),R[H+W+4]=r.x,R[H+W+5]=r.y,R[H+W+6]=r.z,R[H+W+7]=0),x===!0&&(r.fromBufferAttribute(z,j),R[H+W+8]=r.x,R[H+W+9]=r.y,R[H+W+10]=r.z,R[H+W+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new J0(E,I)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function C4(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Oa=new Ee,Ws=new Na(1,1),Ba=new Aa,za=new Qo,Ha=new Ua,Xs=[],qs=[],Ys=new Float32Array(16),$s=new Float32Array(9),Ks=new Float32Array(4);function an(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Xs[r];if(s===void 0&&(s=new Float32Array(r),Xs[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ce(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ue(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _i(i,e){let t=qs[e];t===void 0&&(t=new Int32Array(e),qs[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function P4(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function L4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ce(t,e))return;i.uniform2fv(this.addr,e),ue(t,e)}}function D4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ce(t,e))return;i.uniform3fv(this.addr,e),ue(t,e)}}function U4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ce(t,e))return;i.uniform4fv(this.addr,e),ue(t,e)}}function I4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ce(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ue(t,e)}else{if(ce(t,n))return;Ks.set(n),i.uniformMatrix2fv(this.addr,!1,Ks),ue(t,n)}}function N4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ce(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ue(t,e)}else{if(ce(t,n))return;$s.set(n),i.uniformMatrix3fv(this.addr,!1,$s),ue(t,n)}}function F4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ce(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ue(t,e)}else{if(ce(t,n))return;Ys.set(n),i.uniformMatrix4fv(this.addr,!1,Ys),ue(t,n)}}function O4(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function B4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ce(t,e))return;i.uniform2iv(this.addr,e),ue(t,e)}}function z4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ce(t,e))return;i.uniform3iv(this.addr,e),ue(t,e)}}function H4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ce(t,e))return;i.uniform4iv(this.addr,e),ue(t,e)}}function V4(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function G4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ce(t,e))return;i.uniform2uiv(this.addr,e),ue(t,e)}}function k4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ce(t,e))return;i.uniform3uiv(this.addr,e),ue(t,e)}}function W4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ce(t,e))return;i.uniform4uiv(this.addr,e),ue(t,e)}}function X4(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ws.compareFunction=ya,s=Ws):s=Oa,t.setTexture2D(e||s,r)}function q4(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||za,r)}function Y4(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ha,r)}function $4(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ba,r)}function K4(i){switch(i){case 5126:return P4;case 35664:return L4;case 35665:return D4;case 35666:return U4;case 35674:return I4;case 35675:return N4;case 35676:return F4;case 5124:case 35670:return O4;case 35667:case 35671:return B4;case 35668:case 35672:return z4;case 35669:case 35673:return H4;case 5125:return V4;case 36294:return G4;case 36295:return k4;case 36296:return W4;case 35678:case 36198:case 36298:case 36306:case 35682:return X4;case 35679:case 36299:case 36307:return q4;case 35680:case 36300:case 36308:case 36293:return Y4;case 36289:case 36303:case 36311:case 36292:return $4}}function Z4(i,e){i.uniform1fv(this.addr,e)}function j4(i,e){const t=an(e,this.size,2);i.uniform2fv(this.addr,t)}function J4(i,e){const t=an(e,this.size,3);i.uniform3fv(this.addr,t)}function Q4(i,e){const t=an(e,this.size,4);i.uniform4fv(this.addr,t)}function e5(i,e){const t=an(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function t5(i,e){const t=an(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function n5(i,e){const t=an(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function i5(i,e){i.uniform1iv(this.addr,e)}function r5(i,e){i.uniform2iv(this.addr,e)}function s5(i,e){i.uniform3iv(this.addr,e)}function a5(i,e){i.uniform4iv(this.addr,e)}function o5(i,e){i.uniform1uiv(this.addr,e)}function l5(i,e){i.uniform2uiv(this.addr,e)}function c5(i,e){i.uniform3uiv(this.addr,e)}function u5(i,e){i.uniform4uiv(this.addr,e)}function h5(i,e,t){const n=this.cache,r=e.length,s=_i(t,r);ce(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Oa,s[a])}function f5(i,e,t){const n=this.cache,r=e.length,s=_i(t,r);ce(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||za,s[a])}function d5(i,e,t){const n=this.cache,r=e.length,s=_i(t,r);ce(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ha,s[a])}function p5(i,e,t){const n=this.cache,r=e.length,s=_i(t,r);ce(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ba,s[a])}function m5(i){switch(i){case 5126:return Z4;case 35664:return j4;case 35665:return J4;case 35666:return Q4;case 35674:return e5;case 35675:return t5;case 35676:return n5;case 5124:case 35670:return i5;case 35667:case 35671:return r5;case 35668:case 35672:return s5;case 35669:case 35673:return a5;case 5125:return o5;case 36294:return l5;case 36295:return c5;case 36296:return u5;case 35678:case 36198:case 36298:case 36306:case 35682:return h5;case 35679:case 36299:case 36307:return f5;case 35680:case 36300:case 36308:case 36293:return d5;case 36289:case 36303:case 36311:case 36292:return p5}}class _5{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=K4(t.type)}}class g5{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m5(t.type)}}class v5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Zi=/(\w+)(\])?(\[|\.)?/g;function Zs(i,e){i.seq.push(e),i.map[e.id]=e}function x5(i,e,t){const n=i.name,r=n.length;for(Zi.lastIndex=0;;){const s=Zi.exec(n),a=Zi.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Zs(t,c===void 0?new _5(o,i,e):new g5(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new v5(o),Zs(t,d)),t=d}}}class oi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);x5(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function js(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const M5=37297;let S5=0;function E5(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Js=new N0;function y5(i){q0._getMatrix(Js,q0.workingColorSpace,i);const e=`mat3( ${Js.elements.map(t=>t.toFixed(4))} )`;switch(q0.getTransfer(i)){case ci:return[e,"LinearTransferOETF"];case j0:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qs(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+E5(i.getShaderSource(e),a)}else return r}function T5(i,e){const t=y5(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function A5(i,e){let t;switch(e){case To:t="Linear";break;case Ao:t="Reinhard";break;case bo:t="Cineon";break;case wo:t="ACESFilmic";break;case Co:t="AgX";break;case Po:t="Neutral";break;case Ro:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ei=new F;function b5(){q0.getLuminanceCoefficients(ei);const i=ei.x.toFixed(4),e=ei.y.toFixed(4),t=ei.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w5(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gn).join(`
`)}function R5(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function C5(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function gn(i){return i!==""}function ea(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ta(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P5=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vr(i){return i.replace(P5,D5)}const L5=new Map;function D5(i,e){let t=O0[e];if(t===void 0){const n=L5.get(e);if(n!==void 0)t=O0[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vr(t)}const U5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function na(i){return i.replace(U5,I5)}function I5(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ia(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function N5(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===no?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ke&&(e="SHADOWMAP_TYPE_VSM"),e}function F5(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qt:case en:e="ENVMAP_TYPE_CUBE";break;case pi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O5(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===en&&(e="ENVMAP_MODE_REFRACTION"),e}function B5(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case da:e="ENVMAP_BLENDING_MULTIPLY";break;case Eo:e="ENVMAP_BLENDING_MIX";break;case yo:e="ENVMAP_BLENDING_ADD";break}return e}function z5(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function H5(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=N5(t),c=F5(t),h=O5(t),d=B5(t),f=z5(t),m=w5(t),g=R5(s),x=r.createProgram();let p,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gn).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gn).join(`
`),u.length>0&&(u+=`
`)):(p=[ia(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gn).join(`
`),u=[ia(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dt?"#define TONE_MAPPING":"",t.toneMapping!==dt?O0.tonemapping_pars_fragment:"",t.toneMapping!==dt?A5("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",O0.colorspace_pars_fragment,T5("linearToOutputTexel",t.outputColorSpace),b5(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gn).join(`
`)),a=Vr(a),a=ea(a,t),a=ta(a,t),o=Vr(o),o=ea(o,t),o=ta(o,t),a=na(a),o=na(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===fs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=b+p+a,E=b+u+o,I=js(r,r.VERTEX_SHADER,T),R=js(r,r.FRAGMENT_SHADER,E);r.attachShader(x,I),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(C){if(i.debug.checkShaderErrors){const q=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(I).trim(),H=r.getShaderInfoLog(R).trim();let j=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,I,R);else{const e0=Qs(r,I,"vertex"),V=Qs(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+e0+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(z===""||H==="")&&(W=!1);W&&(C.diagnostics={runnable:j,programLog:q,vertexShader:{log:z,prefix:p},fragmentShader:{log:H,prefix:u}})}r.deleteShader(I),r.deleteShader(R),N=new oi(r,x),S=C5(r,x)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,M5)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S5++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=R,this}let V5=0;class G5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new k5(e),t.set(e,n)),n}}class k5{constructor(e){this.id=V5++,this.code=e,this.usedTimes=0}}function W5(i,e,t,n,r,s,a){const o=new ba,l=new G5,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,M,C,q,z){const H=q.fog,j=z.geometry,W=S.isMeshStandardMaterial?q.environment:null,e0=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=e0&&e0.mapping===pi?e0.image.height:null,i0=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const J=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_0=J!==void 0?J.length:0;let C0=0;j.morphAttributes.position!==void 0&&(C0=1),j.morphAttributes.normal!==void 0&&(C0=2),j.morphAttributes.color!==void 0&&(C0=3);let $0,X,r0,S0;if(i0){const K0=He[i0];$0=K0.vertexShader,X=K0.fragmentShader}else $0=S.vertexShader,X=S.fragmentShader,l.update(S),r0=l.getVertexShaderID(S),S0=l.getFragmentShaderID(S);const c0=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),f0=z.isInstancedMesh===!0,a0=z.isBatchedMesh===!0,V0=!!S.map,W0=!!S.matcap,F0=!!e0,A=!!S.aoMap,he=!!S.lightMap,B0=!!S.bumpMap,G0=!!S.normalMap,g0=!!S.displacementMap,z0=!!S.emissiveMap,T0=!!S.metalnessMap,P0=!!S.roughnessMap,ee=S.anisotropy>0,y=S.clearcoat>0,_=S.dispersion>0,L=S.iridescence>0,G=S.sheen>0,$=S.transmission>0,k=ee&&!!S.anisotropyMap,E0=y&&!!S.clearcoatMap,s0=y&&!!S.clearcoatNormalMap,M0=y&&!!S.clearcoatRoughnessMap,y0=L&&!!S.iridescenceMap,Z=L&&!!S.iridescenceThicknessMap,d0=G&&!!S.sheenColorMap,R0=G&&!!S.sheenRoughnessMap,w0=!!S.specularMap,o0=!!S.specularColorMap,U0=!!S.specularIntensityMap,w=$&&!!S.transmissionMap,u0=$&&!!S.thicknessMap,Q=!!S.gradientMap,m0=!!S.alphaMap,t0=S.alphaTest>0,Y=!!S.alphaHash,v0=!!S.extensions;let I0=dt;S.toneMapped&&(c0===null||c0.isXRRenderTarget===!0)&&(I0=i.toneMapping);const te={shaderID:i0,shaderType:S.type,shaderName:S.name,vertexShader:$0,fragmentShader:X,defines:S.defines,customVertexShaderID:r0,customFragmentShaderID:S0,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:a0,batchingColor:a0&&z._colorsTexture!==null,instancing:f0,instancingColor:f0&&z.instanceColor!==null,instancingMorph:f0&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:c0===null?i.outputColorSpace:c0.isXRRenderTarget===!0?c0.texture.colorSpace:tn,alphaToCoverage:!!S.alphaToCoverage,map:V0,matcap:W0,envMap:F0,envMapMode:F0&&e0.mapping,envMapCubeUVHeight:V,aoMap:A,lightMap:he,bumpMap:B0,normalMap:G0,displacementMap:f&&g0,emissiveMap:z0,normalMapObjectSpace:G0&&S.normalMapType===No,normalMapTangentSpace:G0&&S.normalMapType===Io,metalnessMap:T0,roughnessMap:P0,anisotropy:ee,anisotropyMap:k,clearcoat:y,clearcoatMap:E0,clearcoatNormalMap:s0,clearcoatRoughnessMap:M0,dispersion:_,iridescence:L,iridescenceMap:y0,iridescenceThicknessMap:Z,sheen:G,sheenColorMap:d0,sheenRoughnessMap:R0,specularMap:w0,specularColorMap:o0,specularIntensityMap:U0,transmission:$,transmissionMap:w,thicknessMap:u0,gradientMap:Q,opaque:S.transparent===!1&&S.blending===Kt&&S.alphaToCoverage===!1,alphaMap:m0,alphaTest:t0,alphaHash:Y,combine:S.combine,mapUv:V0&&x(S.map.channel),aoMapUv:A&&x(S.aoMap.channel),lightMapUv:he&&x(S.lightMap.channel),bumpMapUv:B0&&x(S.bumpMap.channel),normalMapUv:G0&&x(S.normalMap.channel),displacementMapUv:g0&&x(S.displacementMap.channel),emissiveMapUv:z0&&x(S.emissiveMap.channel),metalnessMapUv:T0&&x(S.metalnessMap.channel),roughnessMapUv:P0&&x(S.roughnessMap.channel),anisotropyMapUv:k&&x(S.anisotropyMap.channel),clearcoatMapUv:E0&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:s0&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:M0&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:y0&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:d0&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:R0&&x(S.sheenRoughnessMap.channel),specularMapUv:w0&&x(S.specularMap.channel),specularColorMapUv:o0&&x(S.specularColorMap.channel),specularIntensityMapUv:U0&&x(S.specularIntensityMap.channel),transmissionMapUv:w&&x(S.transmissionMap.channel),thicknessMapUv:u0&&x(S.thicknessMap.channel),alphaMapUv:m0&&x(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(G0||ee),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(V0||m0),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:K,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:_0,morphTextureStride:C0,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:I0,decodeVideoTexture:V0&&S.map.isVideoTexture===!0&&q0.getTransfer(S.map.colorSpace)===j0,decodeVideoTextureEmissive:z0&&S.emissiveMap.isVideoTexture===!0&&q0.getTransfer(S.emissiveMap.colorSpace)===j0,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ze,flipSided:S.side===Se,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:v0&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(v0&&S.extensions.multiDraw===!0||a0)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(b(M,S),T(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=g[S.type];let C;if(M){const q=He[M];C=f1.clone(q.uniforms)}else C=S.uniforms;return C}function I(S,M){let C;for(let q=0,z=h.length;q<z;q++){const H=h[q];if(H.cacheKey===M){C=H,++C.usedTimes;break}}return C===void 0&&(C=new H5(i,M,S,s),h.push(C)),C}function R(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:I,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:N}}function X5(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function q5(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ra(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sa(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,f,m,g,x,p){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function o(d,f,m,g,x,p){const u=a(d,f,m,g,x,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,g,x,p){const u=a(d,f,m,g,x,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||q5),n.length>1&&n.sort(f||ra),r.length>1&&r.sort(f||ra)}function h(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Y5(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new sa,i.set(n,[a])):r>=s.length?(a=new sa,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function $5(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Y0};break;case"SpotLight":t={position:new F,direction:new F,color:new Y0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Y0,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Y0,groundColor:new Y0};break;case"RectAreaLight":t={color:new Y0,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function K5(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J0};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J0};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J0,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Z5=0;function j5(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function J5(i){const e=new $5,t=K5(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const r=new F,s=new ae,a=new ae;function o(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,x=0,p=0,u=0,b=0,T=0,E=0,I=0,R=0,P=0;c.sort(j5);for(let S=0,M=c.length;S<M;S++){const C=c[S],q=C.color,z=C.intensity,H=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=q.r*z,d+=q.g*z,f+=q.b*z;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],z);P++}else if(C.isDirectionalLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const e0=C.shadow,V=t.get(C);V.shadowIntensity=e0.intensity,V.shadowBias=e0.bias,V.shadowNormalBias=e0.normalBias,V.shadowRadius=e0.radius,V.shadowMapSize=e0.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=C.shadow.matrix,b++}n.directional[m]=W,m++}else if(C.isSpotLight){const W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(q).multiplyScalar(z),W.distance=H,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[x]=W;const e0=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,e0.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[x]=e0.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=e0.intensity,V.shadowBias=e0.bias,V.shadowNormalBias=e0.normalBias,V.shadowRadius=e0.radius,V.shadowMapSize=e0.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=j,E++}x++}else if(C.isRectAreaLight){const W=e.get(C);W.color.copy(q).multiplyScalar(z),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=W,p++}else if(C.isPointLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const e0=C.shadow,V=t.get(C);V.shadowIntensity=e0.intensity,V.shadowBias=e0.bias,V.shadowNormalBias=e0.normalBias,V.shadowRadius=e0.radius,V.shadowMapSize=e0.mapSize,V.shadowCameraNear=e0.camera.near,V.shadowCameraFar=e0.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=W,g++}else if(C.isHemisphereLight){const W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(z),W.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[u]=W,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=l0.LTC_FLOAT_1,n.rectAreaLTC2=l0.LTC_FLOAT_2):(n.rectAreaLTC1=l0.LTC_HALF_1,n.rectAreaLTC2=l0.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const N=n.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==p||N.hemiLength!==u||N.numDirectionalShadows!==b||N.numPointShadows!==T||N.numSpotShadows!==E||N.numSpotMaps!==I||N.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,N.directionalLength=m,N.pointLength=g,N.spotLength=x,N.rectAreaLength=p,N.hemiLength=u,N.numDirectionalShadows=b,N.numPointShadows=T,N.numSpotShadows=E,N.numSpotMaps=I,N.numLightProbes=P,n.version=Z5++)}function l(c,h){let d=0,f=0,m=0,g=0,x=0;const p=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const T=c[u];if(T.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(T.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function aa(i){const e=new J5(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Q5(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new aa(i),e.set(r,[o])):s>=a.length?(o=new aa(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const e6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t6=`uniform sampler2D shadow_pass;
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
}`;function n6(i,e,t){let n=new Ia;const r=new J0,s=new J0,a=new oe,o=new w1({depthPacking:Uo}),l=new R1,c={},h=t.maxTextureSize,d={[pt]:Se,[Se]:pt,[Ze]:Ze},f=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J0},radius:{value:4}},vertexShader:e6,fragmentShader:t6}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qe(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let u=this.type;this.render=function(R,P,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),q=i.state;q.setBlending(ft),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const z=u!==Ke&&this.type===Ke,H=u===Ke&&this.type!==Ke;for(let j=0,W=R.length;j<W;j++){const e0=R[j],V=e0.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",e0,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const i0=V.getFrameExtents();if(r.multiply(i0),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/i0.x),r.x=s.x*i0.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/i0.y),r.y=s.y*i0.y,V.mapSize.y=s.y)),V.map===null||z===!0||H===!0){const _0=this.type!==Ke?{minFilter:Be,magFilter:Be}:{};V.map!==null&&V.map.dispose(),V.map=new Lt(r.x,r.y,_0),V.map.texture.name=e0.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const J=V.getViewportCount();for(let _0=0;_0<J;_0++){const C0=V.getViewport(_0);a.set(s.x*C0.x,s.y*C0.y,s.x*C0.z,s.y*C0.w),q.viewport(a),V.updateMatrices(e0,_0),n=V.getFrustum(),E(P,N,V.camera,e0,this.type)}V.isPointLightShadow!==!0&&this.type===Ke&&b(V,N),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,M,C)};function b(R,P){const N=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Lt(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,N,f,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,N,m,x,null)}function T(R,P,N,S){let M=null;const C=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=N.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const q=M.uuid,z=P.uuid;let H=c[q];H===void 0&&(H={},c[q]=H);let j=H[z];j===void 0&&(j=M.clone(),H[z]=j,P.addEventListener("dispose",I)),M=j}if(M.visible=P.visible,M.wireframe=P.wireframe,S===Ke?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:d[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=i.properties.get(M);q.light=N}return M}function E(R,P,N,S,M){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Ke)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const z=e.update(R),H=R.material;if(Array.isArray(H)){const j=z.groups;for(let W=0,e0=j.length;W<e0;W++){const V=j[W],i0=H[V.materialIndex];if(i0&&i0.visible){const J=T(R,i0,S,M);R.onBeforeShadow(i,R,P,N,z,J,V),i.renderBufferDirect(N,null,z,J,R,V),R.onAfterShadow(i,R,P,N,z,J,V)}}}else if(H.visible){const j=T(R,H,S,M);R.onBeforeShadow(i,R,P,N,z,j,null),i.renderBufferDirect(N,null,z,j,R,null),R.onAfterShadow(i,R,P,N,z,j,null)}}const q=R.children;for(let z=0,H=q.length;z<H;z++)E(q[z],P,N,S,M)}function I(R){R.target.removeEventListener("dispose",I);for(const N in c){const S=c[N],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const i6={[nr]:ir,[rr]:or,[sr]:lr,[Jt]:ar,[ir]:nr,[or]:rr,[lr]:sr,[ar]:Jt};function r6(i,e){function t(){let w=!1;const u0=new oe;let Q=null;const m0=new oe(0,0,0,0);return{setMask:function(t0){Q!==t0&&!w&&(i.colorMask(t0,t0,t0,t0),Q=t0)},setLocked:function(t0){w=t0},setClear:function(t0,Y,v0,I0,te){te===!0&&(t0*=I0,Y*=I0,v0*=I0),u0.set(t0,Y,v0,I0),m0.equals(u0)===!1&&(i.clearColor(t0,Y,v0,I0),m0.copy(u0))},reset:function(){w=!1,Q=null,m0.set(-1,0,0,0)}}}function n(){let w=!1,u0=!1,Q=null,m0=null,t0=null;return{setReversed:function(Y){if(u0!==Y){const v0=e.get("EXT_clip_control");Y?v0.clipControlEXT(v0.LOWER_LEFT_EXT,v0.ZERO_TO_ONE_EXT):v0.clipControlEXT(v0.LOWER_LEFT_EXT,v0.NEGATIVE_ONE_TO_ONE_EXT),u0=Y;const I0=t0;t0=null,this.setClear(I0)}},getReversed:function(){return u0},setTest:function(Y){Y?c0(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(Y){Q!==Y&&!w&&(i.depthMask(Y),Q=Y)},setFunc:function(Y){if(u0&&(Y=i6[Y]),m0!==Y){switch(Y){case nr:i.depthFunc(i.NEVER);break;case ir:i.depthFunc(i.ALWAYS);break;case rr:i.depthFunc(i.LESS);break;case Jt:i.depthFunc(i.LEQUAL);break;case sr:i.depthFunc(i.EQUAL);break;case ar:i.depthFunc(i.GEQUAL);break;case or:i.depthFunc(i.GREATER);break;case lr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}m0=Y}},setLocked:function(Y){w=Y},setClear:function(Y){t0!==Y&&(u0&&(Y=1-Y),i.clearDepth(Y),t0=Y)},reset:function(){w=!1,Q=null,m0=null,t0=null,u0=!1}}}function r(){let w=!1,u0=null,Q=null,m0=null,t0=null,Y=null,v0=null,I0=null,te=null;return{setTest:function(K0){w||(K0?c0(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(K0){u0!==K0&&!w&&(i.stencilMask(K0),u0=K0)},setFunc:function(K0,De,ke){(Q!==K0||m0!==De||t0!==ke)&&(i.stencilFunc(K0,De,ke),Q=K0,m0=De,t0=ke)},setOp:function(K0,De,ke){(Y!==K0||v0!==De||I0!==ke)&&(i.stencilOp(K0,De,ke),Y=K0,v0=De,I0=ke)},setLocked:function(K0){w=K0},setClear:function(K0){te!==K0&&(i.clearStencil(K0),te=K0)},reset:function(){w=!1,u0=null,Q=null,m0=null,t0=null,Y=null,v0=null,I0=null,te=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,u=null,b=null,T=null,E=null,I=null,R=null,P=new Y0(0,0,0),N=0,S=!1,M=null,C=null,q=null,z=null,H=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,e0=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(e0=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=e0>=1):V.indexOf("OpenGL ES")!==-1&&(e0=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=e0>=2);let i0=null,J={};const _0=i.getParameter(i.SCISSOR_BOX),C0=i.getParameter(i.VIEWPORT),$0=new oe().fromArray(_0),X=new oe().fromArray(C0);function r0(w,u0,Q,m0){const t0=new Uint8Array(4),Y=i.createTexture();i.bindTexture(w,Y),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let v0=0;v0<Q;v0++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(u0,0,i.RGBA,1,1,m0,0,i.RGBA,i.UNSIGNED_BYTE,t0):i.texImage2D(u0+v0,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,t0);return Y}const S0={};S0[i.TEXTURE_2D]=r0(i.TEXTURE_2D,i.TEXTURE_2D,1),S0[i.TEXTURE_CUBE_MAP]=r0(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),S0[i.TEXTURE_2D_ARRAY]=r0(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),S0[i.TEXTURE_3D]=r0(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),c0(i.DEPTH_TEST),a.setFunc(Jt),B0(!1),G0(as),c0(i.CULL_FACE),A(ft);function c0(w){h[w]!==!0&&(i.enable(w),h[w]=!0)}function K(w){h[w]!==!1&&(i.disable(w),h[w]=!1)}function f0(w,u0){return d[w]!==u0?(i.bindFramebuffer(w,u0),d[w]=u0,w===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=u0),w===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=u0),!0):!1}function a0(w,u0){let Q=m,m0=!1;if(w){Q=f.get(u0),Q===void 0&&(Q=[],f.set(u0,Q));const t0=w.textures;if(Q.length!==t0.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,v0=t0.length;Y<v0;Y++)Q[Y]=i.COLOR_ATTACHMENT0+Y;Q.length=t0.length,m0=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,m0=!0);m0&&i.drawBuffers(Q)}function V0(w){return g!==w?(i.useProgram(w),g=w,!0):!1}const W0={[bt]:i.FUNC_ADD,[ro]:i.FUNC_SUBTRACT,[so]:i.FUNC_REVERSE_SUBTRACT};W0[ao]=i.MIN,W0[oo]=i.MAX;const F0={[lo]:i.ZERO,[co]:i.ONE,[uo]:i.SRC_COLOR,[er]:i.SRC_ALPHA,[go]:i.SRC_ALPHA_SATURATE,[mo]:i.DST_COLOR,[fo]:i.DST_ALPHA,[ho]:i.ONE_MINUS_SRC_COLOR,[tr]:i.ONE_MINUS_SRC_ALPHA,[_o]:i.ONE_MINUS_DST_COLOR,[po]:i.ONE_MINUS_DST_ALPHA,[vo]:i.CONSTANT_COLOR,[xo]:i.ONE_MINUS_CONSTANT_COLOR,[Mo]:i.CONSTANT_ALPHA,[So]:i.ONE_MINUS_CONSTANT_ALPHA};function A(w,u0,Q,m0,t0,Y,v0,I0,te,K0){if(w===ft){x===!0&&(K(i.BLEND),x=!1);return}if(x===!1&&(c0(i.BLEND),x=!0),w!==io){if(w!==p||K0!==S){if((u!==bt||E!==bt)&&(i.blendEquation(i.FUNC_ADD),u=bt,E=bt),K0)switch(w){case Kt:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.ONE,i.ONE);break;case ls:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Kt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ls:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cs:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}b=null,T=null,I=null,R=null,P.set(0,0,0),N=0,p=w,S=K0}return}t0=t0||u0,Y=Y||Q,v0=v0||m0,(u0!==u||t0!==E)&&(i.blendEquationSeparate(W0[u0],W0[t0]),u=u0,E=t0),(Q!==b||m0!==T||Y!==I||v0!==R)&&(i.blendFuncSeparate(F0[Q],F0[m0],F0[Y],F0[v0]),b=Q,T=m0,I=Y,R=v0),(I0.equals(P)===!1||te!==N)&&(i.blendColor(I0.r,I0.g,I0.b,te),P.copy(I0),N=te),p=w,S=!1}function he(w,u0){w.side===Ze?K(i.CULL_FACE):c0(i.CULL_FACE);let Q=w.side===Se;u0&&(Q=!Q),B0(Q),w.blending===Kt&&w.transparent===!1?A(ft):A(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),s.setMask(w.colorWrite);const m0=w.stencilWrite;o.setTest(m0),m0&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),z0(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?c0(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function B0(w){M!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),M=w)}function G0(w){w!==eo?(c0(i.CULL_FACE),w!==C&&(w===as?i.cullFace(i.BACK):w===to?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),C=w}function g0(w){w!==q&&(W&&i.lineWidth(w),q=w)}function z0(w,u0,Q){w?(c0(i.POLYGON_OFFSET_FILL),(z!==u0||H!==Q)&&(i.polygonOffset(u0,Q),z=u0,H=Q)):K(i.POLYGON_OFFSET_FILL)}function T0(w){w?c0(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function P0(w){w===void 0&&(w=i.TEXTURE0+j-1),i0!==w&&(i.activeTexture(w),i0=w)}function ee(w,u0,Q){Q===void 0&&(i0===null?Q=i.TEXTURE0+j-1:Q=i0);let m0=J[Q];m0===void 0&&(m0={type:void 0,texture:void 0},J[Q]=m0),(m0.type!==w||m0.texture!==u0)&&(i0!==Q&&(i.activeTexture(Q),i0=Q),i.bindTexture(w,u0||S0[w]),m0.type=w,m0.texture=u0)}function y(){const w=J[i0];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function G(){try{i.texSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function $(){try{i.texSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function E0(){try{i.compressedTexSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function s0(){try{i.texStorage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function M0(){try{i.texStorage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function y0(){try{i.texImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Z(){try{i.texImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function d0(w){$0.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),$0.copy(w))}function R0(w){X.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),X.copy(w))}function w0(w,u0){let Q=c.get(u0);Q===void 0&&(Q=new WeakMap,c.set(u0,Q));let m0=Q.get(w);m0===void 0&&(m0=i.getUniformBlockIndex(u0,w.name),Q.set(w,m0))}function o0(w,u0){const m0=c.get(u0).get(w);l.get(u0)!==m0&&(i.uniformBlockBinding(u0,m0,w.__bindingPointIndex),l.set(u0,m0))}function U0(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},i0=null,J={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,u=null,b=null,T=null,E=null,I=null,R=null,P=new Y0(0,0,0),N=0,S=!1,M=null,C=null,q=null,z=null,H=null,$0.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:c0,disable:K,bindFramebuffer:f0,drawBuffers:a0,useProgram:V0,setBlending:A,setMaterial:he,setFlipSided:B0,setCullFace:G0,setLineWidth:g0,setPolygonOffset:z0,setScissorTest:T0,activeTexture:P0,bindTexture:ee,unbindTexture:y,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:y0,texImage3D:Z,updateUBOMapping:w0,uniformBlockBinding:o0,texStorage2D:s0,texStorage3D:M0,texSubImage2D:G,texSubImage3D:$,compressedTexSubImage2D:k,compressedTexSubImage3D:E0,scissor:d0,viewport:R0,reset:U0}}function s6(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J0,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return m?new OffscreenCanvas(y,_):hi("canvas")}function x(y,_,L){let G=1;const $=ee(y);if(($.width>L||$.height>L)&&(G=L/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const k=Math.floor(G*$.width),E0=Math.floor(G*$.height);d===void 0&&(d=g(k,E0));const s0=_?g(k,E0):d;return s0.width=k,s0.height=E0,s0.getContext("2d").drawImage(y,0,0,k,E0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+k+"x"+E0+")."),s0}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),y;return y}function p(y){return y.generateMipmaps}function u(y){i.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,_,L,G,$=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let k=_;if(_===i.RED&&(L===i.FLOAT&&(k=i.R32F),L===i.HALF_FLOAT&&(k=i.R16F),L===i.UNSIGNED_BYTE&&(k=i.R8)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(k=i.R8UI),L===i.UNSIGNED_SHORT&&(k=i.R16UI),L===i.UNSIGNED_INT&&(k=i.R32UI),L===i.BYTE&&(k=i.R8I),L===i.SHORT&&(k=i.R16I),L===i.INT&&(k=i.R32I)),_===i.RG&&(L===i.FLOAT&&(k=i.RG32F),L===i.HALF_FLOAT&&(k=i.RG16F),L===i.UNSIGNED_BYTE&&(k=i.RG8)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(k=i.RG8UI),L===i.UNSIGNED_SHORT&&(k=i.RG16UI),L===i.UNSIGNED_INT&&(k=i.RG32UI),L===i.BYTE&&(k=i.RG8I),L===i.SHORT&&(k=i.RG16I),L===i.INT&&(k=i.RG32I)),_===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(k=i.RGB8UI),L===i.UNSIGNED_SHORT&&(k=i.RGB16UI),L===i.UNSIGNED_INT&&(k=i.RGB32UI),L===i.BYTE&&(k=i.RGB8I),L===i.SHORT&&(k=i.RGB16I),L===i.INT&&(k=i.RGB32I)),_===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),L===i.UNSIGNED_INT&&(k=i.RGBA32UI),L===i.BYTE&&(k=i.RGBA8I),L===i.SHORT&&(k=i.RGBA16I),L===i.INT&&(k=i.RGBA32I)),_===i.RGB&&L===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),_===i.RGBA){const E0=$?ci:q0.getTransfer(G);L===i.FLOAT&&(k=i.RGBA32F),L===i.HALF_FLOAT&&(k=i.RGBA16F),L===i.UNSIGNED_BYTE&&(k=E0===j0?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function E(y,_){let L;return y?_===null||_===Pt||_===xn?L=i.DEPTH24_STENCIL8:_===je?L=i.DEPTH32F_STENCIL8:_===vn&&(L=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Pt||_===xn?L=i.DEPTH_COMPONENT24:_===je?L=i.DEPTH_COMPONENT32F:_===vn&&(L=i.DEPTH_COMPONENT16),L}function I(y,_){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Be&&y.minFilter!==Ve?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function R(y){const _=y.target;_.removeEventListener("dispose",R),N(_),_.isVideoTexture&&h.delete(_)}function P(y){const _=y.target;_.removeEventListener("dispose",P),M(_)}function N(y){const _=n.get(y);if(_.__webglInit===void 0)return;const L=y.source,G=f.get(L);if(G){const $=G[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(y),Object.keys(G).length===0&&f.delete(L)}n.remove(y)}function S(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const L=y.source,G=f.get(L);delete G[_.__cacheKey],a.memory.textures--}function M(y){const _=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let $=0;$<_.__webglFramebuffer[G].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[G][$]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=y.textures;for(let G=0,$=L.length;G<$;G++){const k=n.get(L[G]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(L[G])}n.remove(y)}let C=0;function q(){C=0}function z(){const y=C;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),C+=1,y}function H(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function j(y,_){const L=n.get(y);if(y.isVideoTexture&&T0(y),y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){const G=y.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{S0(L,y,_);return}}t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function W(y,_){const L=n.get(y);if(y.version>0&&L.__version!==y.version){S0(L,y,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function e0(y,_){const L=n.get(y);if(y.version>0&&L.__version!==y.version){S0(L,y,_);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function V(y,_){const L=n.get(y);if(y.version>0&&L.__version!==y.version){c0(L,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}const i0={[hr]:i.REPEAT,[Rt]:i.CLAMP_TO_EDGE,[fr]:i.MIRRORED_REPEAT},J={[Be]:i.NEAREST,[Lo]:i.NEAREST_MIPMAP_NEAREST,[Pn]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[xi]:i.LINEAR_MIPMAP_NEAREST,[Ct]:i.LINEAR_MIPMAP_LINEAR},_0={[Fo]:i.NEVER,[Go]:i.ALWAYS,[Oo]:i.LESS,[ya]:i.LEQUAL,[Bo]:i.EQUAL,[Vo]:i.GEQUAL,[zo]:i.GREATER,[Ho]:i.NOTEQUAL};function C0(y,_){if(_.type===je&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ve||_.magFilter===xi||_.magFilter===Pn||_.magFilter===Ct||_.minFilter===Ve||_.minFilter===xi||_.minFilter===Pn||_.minFilter===Ct)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,i0[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,i0[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i0[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,J[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,J[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,_0[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Be||_.minFilter!==Pn&&_.minFilter!==Ct||_.type===je&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function $0(y,_){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",R));const G=_.source;let $=f.get(G);$===void 0&&($={},f.set(G,$));const k=H(_);if(k!==y.__cacheKey){$[k]===void 0&&($[k]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),$[k].usedTimes++;const E0=$[y.__cacheKey];E0!==void 0&&($[y.__cacheKey].usedTimes--,E0.usedTimes===0&&S(_)),y.__cacheKey=k,y.__webglTexture=$[k].texture}return L}function X(y,_,L){return Math.floor(Math.floor(y/L)/_)}function r0(y,_,L,G){const k=y.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,L,G,_.data);else{k.sort((Z,d0)=>Z.start-d0.start);let E0=0;for(let Z=1;Z<k.length;Z++){const d0=k[E0],R0=k[Z],w0=d0.start+d0.count,o0=X(R0.start,_.width,4),U0=X(d0.start,_.width,4);R0.start<=w0+1&&o0===U0&&X(R0.start+R0.count-1,_.width,4)===o0?d0.count=Math.max(d0.count,R0.start+R0.count-d0.start):(++E0,k[E0]=R0)}k.length=E0+1;const s0=i.getParameter(i.UNPACK_ROW_LENGTH),M0=i.getParameter(i.UNPACK_SKIP_PIXELS),y0=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Z=0,d0=k.length;Z<d0;Z++){const R0=k[Z],w0=Math.floor(R0.start/4),o0=Math.ceil(R0.count/4),U0=w0%_.width,w=Math.floor(w0/_.width),u0=o0,Q=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,U0),i.pixelStorei(i.UNPACK_SKIP_ROWS,w),t.texSubImage2D(i.TEXTURE_2D,0,U0,w,u0,Q,L,G,_.data)}y.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,s0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,M0),i.pixelStorei(i.UNPACK_SKIP_ROWS,y0)}}function S0(y,_,L){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);const $=$0(y,_),k=_.source;t.bindTexture(G,y.__webglTexture,i.TEXTURE0+L);const E0=n.get(k);if(k.version!==E0.__version||$===!0){t.activeTexture(i.TEXTURE0+L);const s0=q0.getPrimaries(q0.workingColorSpace),M0=_.colorSpace===ht?null:q0.getPrimaries(_.colorSpace),y0=_.colorSpace===ht||s0===M0?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,y0);let Z=x(_.image,!1,r.maxTextureSize);Z=P0(_,Z);const d0=s.convert(_.format,_.colorSpace),R0=s.convert(_.type);let w0=T(_.internalFormat,d0,R0,_.colorSpace,_.isVideoTexture);C0(G,_);let o0;const U0=_.mipmaps,w=_.isVideoTexture!==!0,u0=E0.__version===void 0||$===!0,Q=k.dataReady,m0=I(_,Z);if(_.isDepthTexture)w0=E(_.format===Sn,_.type),u0&&(w?t.texStorage2D(i.TEXTURE_2D,1,w0,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,w0,Z.width,Z.height,0,d0,R0,null));else if(_.isDataTexture)if(U0.length>0){w&&u0&&t.texStorage2D(i.TEXTURE_2D,m0,w0,U0[0].width,U0[0].height);for(let t0=0,Y=U0.length;t0<Y;t0++)o0=U0[t0],w?Q&&t.texSubImage2D(i.TEXTURE_2D,t0,0,0,o0.width,o0.height,d0,R0,o0.data):t.texImage2D(i.TEXTURE_2D,t0,w0,o0.width,o0.height,0,d0,R0,o0.data);_.generateMipmaps=!1}else w?(u0&&t.texStorage2D(i.TEXTURE_2D,m0,w0,Z.width,Z.height),Q&&r0(_,Z,d0,R0)):t.texImage2D(i.TEXTURE_2D,0,w0,Z.width,Z.height,0,d0,R0,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){w&&u0&&t.texStorage3D(i.TEXTURE_2D_ARRAY,m0,w0,U0[0].width,U0[0].height,Z.depth);for(let t0=0,Y=U0.length;t0<Y;t0++)if(o0=U0[t0],_.format!==Oe)if(d0!==null)if(w){if(Q)if(_.layerUpdates.size>0){const v0=Fs(o0.width,o0.height,_.format,_.type);for(const I0 of _.layerUpdates){const te=o0.data.subarray(I0*v0/o0.data.BYTES_PER_ELEMENT,(I0+1)*v0/o0.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,t0,0,0,I0,o0.width,o0.height,1,d0,te)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,t0,0,0,0,o0.width,o0.height,Z.depth,d0,o0.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,t0,w0,o0.width,o0.height,Z.depth,0,o0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w?Q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,t0,0,0,0,o0.width,o0.height,Z.depth,d0,R0,o0.data):t.texImage3D(i.TEXTURE_2D_ARRAY,t0,w0,o0.width,o0.height,Z.depth,0,d0,R0,o0.data)}else{w&&u0&&t.texStorage2D(i.TEXTURE_2D,m0,w0,U0[0].width,U0[0].height);for(let t0=0,Y=U0.length;t0<Y;t0++)o0=U0[t0],_.format!==Oe?d0!==null?w?Q&&t.compressedTexSubImage2D(i.TEXTURE_2D,t0,0,0,o0.width,o0.height,d0,o0.data):t.compressedTexImage2D(i.TEXTURE_2D,t0,w0,o0.width,o0.height,0,o0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?Q&&t.texSubImage2D(i.TEXTURE_2D,t0,0,0,o0.width,o0.height,d0,R0,o0.data):t.texImage2D(i.TEXTURE_2D,t0,w0,o0.width,o0.height,0,d0,R0,o0.data)}else if(_.isDataArrayTexture)if(w){if(u0&&t.texStorage3D(i.TEXTURE_2D_ARRAY,m0,w0,Z.width,Z.height,Z.depth),Q)if(_.layerUpdates.size>0){const t0=Fs(Z.width,Z.height,_.format,_.type);for(const Y of _.layerUpdates){const v0=Z.data.subarray(Y*t0/Z.data.BYTES_PER_ELEMENT,(Y+1)*t0/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,Z.width,Z.height,1,d0,R0,v0)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,d0,R0,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,w0,Z.width,Z.height,Z.depth,0,d0,R0,Z.data);else if(_.isData3DTexture)w?(u0&&t.texStorage3D(i.TEXTURE_3D,m0,w0,Z.width,Z.height,Z.depth),Q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,d0,R0,Z.data)):t.texImage3D(i.TEXTURE_3D,0,w0,Z.width,Z.height,Z.depth,0,d0,R0,Z.data);else if(_.isFramebufferTexture){if(u0)if(w)t.texStorage2D(i.TEXTURE_2D,m0,w0,Z.width,Z.height);else{let t0=Z.width,Y=Z.height;for(let v0=0;v0<m0;v0++)t.texImage2D(i.TEXTURE_2D,v0,w0,t0,Y,0,d0,R0,null),t0>>=1,Y>>=1}}else if(U0.length>0){if(w&&u0){const t0=ee(U0[0]);t.texStorage2D(i.TEXTURE_2D,m0,w0,t0.width,t0.height)}for(let t0=0,Y=U0.length;t0<Y;t0++)o0=U0[t0],w?Q&&t.texSubImage2D(i.TEXTURE_2D,t0,0,0,d0,R0,o0):t.texImage2D(i.TEXTURE_2D,t0,w0,d0,R0,o0);_.generateMipmaps=!1}else if(w){if(u0){const t0=ee(Z);t.texStorage2D(i.TEXTURE_2D,m0,w0,t0.width,t0.height)}Q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,d0,R0,Z)}else t.texImage2D(i.TEXTURE_2D,0,w0,d0,R0,Z);p(_)&&u(G),E0.__version=k.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function c0(y,_,L){if(_.image.length!==6)return;const G=$0(y,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+L);const k=n.get($);if($.version!==k.__version||G===!0){t.activeTexture(i.TEXTURE0+L);const E0=q0.getPrimaries(q0.workingColorSpace),s0=_.colorSpace===ht?null:q0.getPrimaries(_.colorSpace),M0=_.colorSpace===ht||E0===s0?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,M0);const y0=_.isCompressedTexture||_.image[0].isCompressedTexture,Z=_.image[0]&&_.image[0].isDataTexture,d0=[];for(let Y=0;Y<6;Y++)!y0&&!Z?d0[Y]=x(_.image[Y],!0,r.maxCubemapSize):d0[Y]=Z?_.image[Y].image:_.image[Y],d0[Y]=P0(_,d0[Y]);const R0=d0[0],w0=s.convert(_.format,_.colorSpace),o0=s.convert(_.type),U0=T(_.internalFormat,w0,o0,_.colorSpace),w=_.isVideoTexture!==!0,u0=k.__version===void 0||G===!0,Q=$.dataReady;let m0=I(_,R0);C0(i.TEXTURE_CUBE_MAP,_);let t0;if(y0){w&&u0&&t.texStorage2D(i.TEXTURE_CUBE_MAP,m0,U0,R0.width,R0.height);for(let Y=0;Y<6;Y++){t0=d0[Y].mipmaps;for(let v0=0;v0<t0.length;v0++){const I0=t0[v0];_.format!==Oe?w0!==null?w?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,v0,0,0,I0.width,I0.height,w0,I0.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,v0,U0,I0.width,I0.height,0,I0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,v0,0,0,I0.width,I0.height,w0,o0,I0.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,v0,U0,I0.width,I0.height,0,w0,o0,I0.data)}}}else{if(t0=_.mipmaps,w&&u0){t0.length>0&&m0++;const Y=ee(d0[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,m0,U0,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Z){w?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,d0[Y].width,d0[Y].height,w0,o0,d0[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,U0,d0[Y].width,d0[Y].height,0,w0,o0,d0[Y].data);for(let v0=0;v0<t0.length;v0++){const te=t0[v0].image[Y].image;w?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,v0+1,0,0,te.width,te.height,w0,o0,te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,v0+1,U0,te.width,te.height,0,w0,o0,te.data)}}else{w?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,w0,o0,d0[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,U0,w0,o0,d0[Y]);for(let v0=0;v0<t0.length;v0++){const I0=t0[v0];w?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,v0+1,0,0,w0,o0,I0.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,v0+1,U0,w0,o0,I0.image[Y])}}}p(_)&&u(i.TEXTURE_CUBE_MAP),k.__version=$.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function K(y,_,L,G,$,k){const E0=s.convert(L.format,L.colorSpace),s0=s.convert(L.type),M0=T(L.internalFormat,E0,s0,L.colorSpace),y0=n.get(_),Z=n.get(L);if(Z.__renderTarget=_,!y0.__hasExternalTextures){const d0=Math.max(1,_.width>>k),R0=Math.max(1,_.height>>k);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,k,M0,d0,R0,_.depth,0,E0,s0,null):t.texImage2D($,k,M0,d0,R0,0,E0,s0,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),z0(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,$,Z.__webglTexture,0,g0(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,$,Z.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function f0(y,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const G=_.depthTexture,$=G&&G.isDepthTexture?G.type:null,k=E(_.stencilBuffer,$),E0=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,s0=g0(_);z0(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,s0,k,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,s0,k,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,k,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,E0,i.RENDERBUFFER,y)}else{const G=_.textures;for(let $=0;$<G.length;$++){const k=G[$],E0=s.convert(k.format,k.colorSpace),s0=s.convert(k.type),M0=T(k.internalFormat,E0,s0,k.colorSpace),y0=g0(_);L&&z0(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,y0,M0,_.width,_.height):z0(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,y0,M0,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,M0,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function a0(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(_.depthTexture);G.__renderTarget=_,(!G.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const $=G.__webglTexture,k=g0(_);if(_.depthTexture.format===Mn)z0(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===Sn)z0(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function V0(y){const _=n.get(y),L=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const G=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=G}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const G=y.texture.mipmaps;G&&G.length>0?a0(_.__webglFramebuffer[0],y):a0(_.__webglFramebuffer,y)}else if(L){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),f0(_.__webglDepthbuffer[G],y,!1);else{const $=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,k)}}else{const G=y.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),f0(_.__webglDepthbuffer,y,!1);else{const $=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function W0(y,_,L){const G=n.get(y);_!==void 0&&K(G.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&V0(y)}function F0(y){const _=y.texture,L=n.get(y),G=n.get(_);y.addEventListener("dispose",P);const $=y.textures,k=y.isWebGLCubeRenderTarget===!0,E0=$.length>1;if(E0||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,a.memory.textures++),k){L.__webglFramebuffer=[];for(let s0=0;s0<6;s0++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[s0]=[];for(let M0=0;M0<_.mipmaps.length;M0++)L.__webglFramebuffer[s0][M0]=i.createFramebuffer()}else L.__webglFramebuffer[s0]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let s0=0;s0<_.mipmaps.length;s0++)L.__webglFramebuffer[s0]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(E0)for(let s0=0,M0=$.length;s0<M0;s0++){const y0=n.get($[s0]);y0.__webglTexture===void 0&&(y0.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&z0(y)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let s0=0;s0<$.length;s0++){const M0=$[s0];L.__webglColorRenderbuffer[s0]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[s0]);const y0=s.convert(M0.format,M0.colorSpace),Z=s.convert(M0.type),d0=T(M0.internalFormat,y0,Z,M0.colorSpace,y.isXRRenderTarget===!0),R0=g0(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,R0,d0,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+s0,i.RENDERBUFFER,L.__webglColorRenderbuffer[s0])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),f0(L.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),C0(i.TEXTURE_CUBE_MAP,_);for(let s0=0;s0<6;s0++)if(_.mipmaps&&_.mipmaps.length>0)for(let M0=0;M0<_.mipmaps.length;M0++)K(L.__webglFramebuffer[s0][M0],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+s0,M0);else K(L.__webglFramebuffer[s0],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+s0,0);p(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(E0){for(let s0=0,M0=$.length;s0<M0;s0++){const y0=$[s0],Z=n.get(y0);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),C0(i.TEXTURE_2D,y0),K(L.__webglFramebuffer,y,y0,i.COLOR_ATTACHMENT0+s0,i.TEXTURE_2D,0),p(y0)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let s0=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(s0=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(s0,G.__webglTexture),C0(s0,_),_.mipmaps&&_.mipmaps.length>0)for(let M0=0;M0<_.mipmaps.length;M0++)K(L.__webglFramebuffer[M0],y,_,i.COLOR_ATTACHMENT0,s0,M0);else K(L.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,s0,0);p(_)&&u(s0),t.unbindTexture()}y.depthBuffer&&V0(y)}function A(y){const _=y.textures;for(let L=0,G=_.length;L<G;L++){const $=_[L];if(p($)){const k=b(y),E0=n.get($).__webglTexture;t.bindTexture(k,E0),u(k),t.unbindTexture()}}}const he=[],B0=[];function G0(y){if(y.samples>0){if(z0(y)===!1){const _=y.textures,L=y.width,G=y.height;let $=i.COLOR_BUFFER_BIT;const k=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,E0=n.get(y),s0=_.length>1;if(s0)for(let y0=0;y0<_.length;y0++)t.bindFramebuffer(i.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+y0,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,E0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+y0,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,E0.__webglMultisampledFramebuffer);const M0=y.texture.mipmaps;M0&&M0.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,E0.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,E0.__webglFramebuffer);for(let y0=0;y0<_.length;y0++){if(y.resolveDepthBuffer&&(y.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),s0){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,E0.__webglColorRenderbuffer[y0]);const Z=n.get(_[y0]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,L,G,0,0,L,G,$,i.NEAREST),l===!0&&(he.length=0,B0.length=0,he.push(i.COLOR_ATTACHMENT0+y0),y.depthBuffer&&y.resolveDepthBuffer===!1&&(he.push(k),B0.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B0)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),s0)for(let y0=0;y0<_.length;y0++){t.bindFramebuffer(i.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+y0,i.RENDERBUFFER,E0.__webglColorRenderbuffer[y0]);const Z=n.get(_[y0]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,E0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+y0,i.TEXTURE_2D,Z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,E0.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function g0(y){return Math.min(r.maxSamples,y.samples)}function z0(y){const _=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function T0(y){const _=a.render.frame;h.get(y)!==_&&(h.set(y,_),y.update())}function P0(y,_){const L=y.colorSpace,G=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==tn&&L!==ht&&(q0.getTransfer(L)===j0?(G!==Oe||$!==it)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}function ee(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=q,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=e0,this.setTextureCube=V,this.rebindTextures=W0,this.setupRenderTarget=F0,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=G0,this.setupDepthRenderbuffer=V0,this.setupFrameBufferTexture=K,this.useMultisampledRTT=z0}function a6(i,e){function t(n,r=ht){let s;const a=q0.getTransfer(r);if(n===it)return i.UNSIGNED_BYTE;if(n===Xr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ga)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ma)return i.BYTE;if(n===_a)return i.SHORT;if(n===vn)return i.UNSIGNED_SHORT;if(n===Wr)return i.INT;if(n===Pt)return i.UNSIGNED_INT;if(n===je)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===va)return i.ALPHA;if(n===xa)return i.RGB;if(n===Oe)return i.RGBA;if(n===Mn)return i.DEPTH_COMPONENT;if(n===Sn)return i.DEPTH_STENCIL;if(n===Ma)return i.RED;if(n===Yr)return i.RED_INTEGER;if(n===Sa)return i.RG;if(n===$r)return i.RG_INTEGER;if(n===Kr)return i.RGBA_INTEGER;if(n===ni||n===ii||n===ri||n===si)if(a===j0)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ni)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ii)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ri)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===si)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ni)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ii)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ri)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===si)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dr||n===pr||n===mr||n===_r)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===dr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_r)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gr||n===vr||n===xr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gr||n===vr)return a===j0?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mr||n===Sr||n===Er||n===yr||n===Tr||n===Ar||n===br||n===wr||n===Rr||n===Cr||n===Pr||n===Lr||n===Dr||n===Ur)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Er)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ar)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===br)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dr)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ur)return a===j0?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ai||n===Ir||n===Nr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ai)return a===j0?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ir)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ea||n===Fr||n===Or||n===Br)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ai)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Or)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Br)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const o6=`
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

}`;class c6{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ee,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ge({vertexShader:o6,fragmentShader:l6,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u6 extends rn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const x=new c6,p=t.getContextAttributes();let u=null,b=null;const T=[],E=[],I=new J0;let R=null;const P=new Le;P.viewport=new oe;const N=new Le;N.viewport=new oe;const S=[P,N],M=new P1;let C=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let r0=T[X];return r0===void 0&&(r0=new Gi,T[X]=r0),r0.getTargetRaySpace()},this.getControllerGrip=function(X){let r0=T[X];return r0===void 0&&(r0=new Gi,T[X]=r0),r0.getGripSpace()},this.getHand=function(X){let r0=T[X];return r0===void 0&&(r0=new Gi,T[X]=r0),r0.getHandSpace()};function z(X){const r0=E.indexOf(X.inputSource);if(r0===-1)return;const S0=T[r0];S0!==void 0&&(S0.update(X.inputSource,X.frame,c||a),S0.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",j);for(let X=0;X<T.length;X++){const r0=E[X];r0!==null&&(E[X]=null,T[X].disconnect(r0))}C=null,q=null,x.reset(),e.setRenderTarget(u),m=null,f=null,d=null,r=null,b=null,$0.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",H),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let S0=null,c0=null,K=null;p.depth&&(K=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,S0=p.stencil?Sn:Mn,c0=p.stencil?xn:Pt);const f0={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(f0),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Lt(f.textureWidth,f.textureHeight,{format:Oe,type:it,depthTexture:new Na(f.textureWidth,f.textureHeight,c0,void 0,void 0,void 0,void 0,void 0,void 0,S0),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const S0={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,S0),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Lt(m.framebufferWidth,m.framebufferHeight,{format:Oe,type:it,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$0.setContext(r),$0.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(X){for(let r0=0;r0<X.removed.length;r0++){const S0=X.removed[r0],c0=E.indexOf(S0);c0>=0&&(E[c0]=null,T[c0].disconnect(S0))}for(let r0=0;r0<X.added.length;r0++){const S0=X.added[r0];let c0=E.indexOf(S0);if(c0===-1){for(let f0=0;f0<T.length;f0++)if(f0>=E.length){E.push(S0),c0=f0;break}else if(E[f0]===null){E[f0]=S0,c0=f0;break}if(c0===-1)break}const K=T[c0];K&&K.connect(S0)}}const W=new F,e0=new F;function V(X,r0,S0){W.setFromMatrixPosition(r0.matrixWorld),e0.setFromMatrixPosition(S0.matrixWorld);const c0=W.distanceTo(e0),K=r0.projectionMatrix.elements,f0=S0.projectionMatrix.elements,a0=K[14]/(K[10]-1),V0=K[14]/(K[10]+1),W0=(K[9]+1)/K[5],F0=(K[9]-1)/K[5],A=(K[8]-1)/K[0],he=(f0[8]+1)/f0[0],B0=a0*A,G0=a0*he,g0=c0/(-A+he),z0=g0*-A;if(r0.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(z0),X.translateZ(g0),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),K[10]===-1)X.projectionMatrix.copy(r0.projectionMatrix),X.projectionMatrixInverse.copy(r0.projectionMatrixInverse);else{const T0=a0+g0,P0=V0+g0,ee=B0-z0,y=G0+(c0-z0),_=W0*V0/P0*T0,L=F0*V0/P0*T0;X.projectionMatrix.makePerspective(ee,y,_,L,T0,P0),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function i0(X,r0){r0===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(r0.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let r0=X.near,S0=X.far;x.texture!==null&&(x.depthNear>0&&(r0=x.depthNear),x.depthFar>0&&(S0=x.depthFar)),M.near=N.near=P.near=r0,M.far=N.far=P.far=S0,(C!==M.near||q!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,q=M.far),P.layers.mask=X.layers.mask|2,N.layers.mask=X.layers.mask|4,M.layers.mask=P.layers.mask|N.layers.mask;const c0=X.parent,K=M.cameras;i0(M,c0);for(let f0=0;f0<K.length;f0++)i0(K[f0],c0);K.length===2?V(M,P,N):M.projectionMatrix.copy(P.projectionMatrix),J(X,M,c0)};function J(X,r0,S0){S0===null?X.matrix.copy(r0.matrixWorld):(X.matrix.copy(S0.matrixWorld),X.matrix.invert(),X.matrix.multiply(r0.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(r0.projectionMatrix),X.projectionMatrixInverse.copy(r0.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=zr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let _0=null;function C0(X,r0){if(h=r0.getViewerPose(c||a),g=r0,h!==null){const S0=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let c0=!1;S0.length!==M.cameras.length&&(M.cameras.length=0,c0=!0);for(let a0=0;a0<S0.length;a0++){const V0=S0[a0];let W0=null;if(m!==null)W0=m.getViewport(V0);else{const A=d.getViewSubImage(f,V0);W0=A.viewport,a0===0&&(e.setRenderTargetTextures(b,A.colorTexture,A.depthStencilTexture),e.setRenderTarget(b))}let F0=S[a0];F0===void 0&&(F0=new Le,F0.layers.enable(a0),F0.viewport=new oe,S[a0]=F0),F0.matrix.fromArray(V0.transform.matrix),F0.matrix.decompose(F0.position,F0.quaternion,F0.scale),F0.projectionMatrix.fromArray(V0.projectionMatrix),F0.projectionMatrixInverse.copy(F0.projectionMatrix).invert(),F0.viewport.set(W0.x,W0.y,W0.width,W0.height),a0===0&&(M.matrix.copy(F0.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),c0===!0&&M.cameras.push(F0)}const K=r.enabledFeatures;if(K&&K.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const a0=d.getDepthInformation(S0[0]);a0&&a0.isValid&&a0.texture&&x.init(e,a0,r.renderState)}}for(let S0=0;S0<T.length;S0++){const c0=E[S0],K=T[S0];c0!==null&&K!==void 0&&K.update(c0,r0,c||a)}_0&&_0(X,r0),r0.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:r0}),g=null}const $0=new Fa;$0.setAnimationLoop(C0),this.setAnimationLoop=function(X){_0=X},this.dispose=function(){}}}const Et=new rt,h6=new ae;function f6(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,La(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,T,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,b,T):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Se&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Se&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=e.get(u),T=b.envMap,E=b.envMapRotation;T&&(p.envMap.value=T,Et.copy(E),Et.x*=-1,Et.y*=-1,Et.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Et.y*=-1,Et.z*=-1),p.envMapRotation.value.setFromMatrix4(h6.makeRotationFromEuler(Et)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,T){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=T*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Se&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const b=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function d6(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const E=T.program;n.uniformBlockBinding(b,E)}function c(b,T){let E=r[b.id];E===void 0&&(g(b),E=h(b),r[b.id]=E,b.addEventListener("dispose",p));const I=T.program;n.updateUBOMapping(b,I);const R=e.render.frame;s[b.id]!==R&&(f(b),s[b.id]=R)}function h(b){const T=d();b.__bindingPointIndex=T;const E=i.createBuffer(),I=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const T=r[b.id],E=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,P=E.length;R<P;R++){const N=Array.isArray(E[R])?E[R]:[E[R]];for(let S=0,M=N.length;S<M;S++){const C=N[S];if(m(C,R,S,I)===!0){const q=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let j=0;j<z.length;j++){const W=z[j],e0=x(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,q+H,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,H),H+=e0.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,T,E,I){const R=b.value,P=T+"_"+E;if(I[P]===void 0)return typeof R=="number"||typeof R=="boolean"?I[P]=R:I[P]=R.clone(),!0;{const N=I[P];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return I[P]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(b){const T=b.uniforms;let E=0;const I=16;for(let P=0,N=T.length;P<N;P++){const S=Array.isArray(T[P])?T[P]:[T[P]];for(let M=0,C=S.length;M<C;M++){const q=S[M],z=Array.isArray(q.value)?q.value:[q.value];for(let H=0,j=z.length;H<j;H++){const W=z[H],e0=x(W),V=E%I,i0=V%e0.boundary,J=V+i0;E+=i0,J!==0&&I-J<e0.storage&&(E+=I-J),q.__data=new Float32Array(e0.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=e0.storage}}}const R=E%I;return R>0&&(E+=I-R),b.__size=E,b.__cache={},this}function x(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function p(b){const T=b.target;T.removeEventListener("dispose",p);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class p6{constructor(e={}){const{canvas:t=Wo(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,u=null;const b=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let I=!1;this._outputColorSpace=Pe;let R=0,P=0,N=null,S=-1,M=null;const C=new oe,q=new oe;let z=null;const H=new Y0(0);let j=0,W=t.width,e0=t.height,V=1,i0=null,J=null;const _0=new oe(0,0,W,e0),C0=new oe(0,0,W,e0);let $0=!1;const X=new Ia;let r0=!1,S0=!1;const c0=new ae,K=new ae,f0=new F,a0=new oe,V0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let W0=!1;function F0(){return N===null?V:1}let A=n;function he(v,D){return t.getContext(v,D)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kr}`),t.addEventListener("webglcontextlost",m0,!1),t.addEventListener("webglcontextrestored",t0,!1),t.addEventListener("webglcontextcreationerror",Y,!1),A===null){const D="webgl2";if(A=he(D,v),A===null)throw he(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let B0,G0,g0,z0,T0,P0,ee,y,_,L,G,$,k,E0,s0,M0,y0,Z,d0,R0,w0,o0,U0,w;function u0(){B0=new T4(A),B0.init(),o0=new a6(A,B0),G0=new g4(A,B0,e,o0),g0=new r6(A,B0),G0.reverseDepthBuffer&&f&&g0.buffers.depth.setReversed(!0),z0=new w4(A),T0=new X5,P0=new s6(A,B0,g0,T0,G0,o0,z0),ee=new x4(E),y=new y4(E),_=new U1(A),U0=new m4(A,_),L=new A4(A,_,z0,U0),G=new C4(A,L,_,z0),d0=new R4(A,G0,P0),M0=new v4(T0),$=new W5(E,ee,y,B0,G0,U0,M0),k=new f6(E,T0),E0=new Y5,s0=new Q5(B0),Z=new p4(E,ee,y,g0,G,m,l),y0=new n6(E,G,G0),w=new d6(A,z0,G0,g0),R0=new _4(A,B0,z0),w0=new b4(A,B0,z0),z0.programs=$.programs,E.capabilities=G0,E.extensions=B0,E.properties=T0,E.renderLists=E0,E.shadowMap=y0,E.state=g0,E.info=z0}u0();const Q=new u6(E,A);this.xr=Q,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=B0.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=B0.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(W,e0,!1))},this.getSize=function(v){return v.set(W,e0)},this.setSize=function(v,D,O=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,e0=D,t.width=Math.floor(v*V),t.height=Math.floor(D*V),O===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(W*V,e0*V).floor()},this.setDrawingBufferSize=function(v,D,O){W=v,e0=D,V=O,t.width=Math.floor(v*O),t.height=Math.floor(D*O),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(_0)},this.setViewport=function(v,D,O,B){v.isVector4?_0.set(v.x,v.y,v.z,v.w):_0.set(v,D,O,B),g0.viewport(C.copy(_0).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(C0)},this.setScissor=function(v,D,O,B){v.isVector4?C0.set(v.x,v.y,v.z,v.w):C0.set(v,D,O,B),g0.scissor(q.copy(C0).multiplyScalar(V).round())},this.getScissorTest=function(){return $0},this.setScissorTest=function(v){g0.setScissorTest($0=v)},this.setOpaqueSort=function(v){i0=v},this.setTransparentSort=function(v){J=v},this.getClearColor=function(v){return v.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor(...arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,O=!0){let B=0;if(v){let U=!1;if(N!==null){const n0=N.texture.format;U=n0===Kr||n0===$r||n0===Yr}if(U){const n0=N.texture.type,h0=n0===it||n0===Pt||n0===vn||n0===xn||n0===Xr||n0===qr,x0=Z.getClearColor(),p0=Z.getClearAlpha(),L0=x0.r,D0=x0.g,A0=x0.b;h0?(g[0]=L0,g[1]=D0,g[2]=A0,g[3]=p0,A.clearBufferuiv(A.COLOR,0,g)):(x[0]=L0,x[1]=D0,x[2]=A0,x[3]=p0,A.clearBufferiv(A.COLOR,0,x))}else B|=A.COLOR_BUFFER_BIT}D&&(B|=A.DEPTH_BUFFER_BIT),O&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",m0,!1),t.removeEventListener("webglcontextrestored",t0,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),Z.dispose(),E0.dispose(),s0.dispose(),T0.dispose(),ee.dispose(),y.dispose(),G.dispose(),U0.dispose(),w.dispose(),$.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Qr),Q.removeEventListener("sessionend",es),mt.stop()};function m0(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function t0(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const v=z0.autoReset,D=y0.enabled,O=y0.autoUpdate,B=y0.needsUpdate,U=y0.type;u0(),z0.autoReset=v,y0.enabled=D,y0.autoUpdate=O,y0.needsUpdate=B,y0.type=U}function Y(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function v0(v){const D=v.target;D.removeEventListener("dispose",v0),I0(D)}function I0(v){te(v),T0.remove(v)}function te(v){const D=T0.get(v).programs;D!==void 0&&(D.forEach(function(O){$.releaseProgram(O)}),v.isShaderMaterial&&$.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,O,B,U,n0){D===null&&(D=V0);const h0=U.isMesh&&U.matrixWorld.determinant()<0,x0=Xa(v,D,O,B,U);g0.setMaterial(B,h0);let p0=O.index,L0=1;if(B.wireframe===!0){if(p0=L.getWireframeAttribute(O),p0===void 0)return;L0=2}const D0=O.drawRange,A0=O.attributes.position;let H0=D0.start*L0,Z0=(D0.start+D0.count)*L0;n0!==null&&(H0=Math.max(H0,n0.start*L0),Z0=Math.min(Z0,(n0.start+n0.count)*L0)),p0!==null?(H0=Math.max(H0,0),Z0=Math.min(Z0,p0.count)):A0!=null&&(H0=Math.max(H0,0),Z0=Math.min(Z0,A0.count));const se=Z0-H0;if(se<0||se===1/0)return;U0.setup(U,B,x0,O,p0);let ne,Q0=R0;if(p0!==null&&(ne=_.get(p0),Q0=w0,Q0.setIndex(ne)),U.isMesh)B.wireframe===!0?(g0.setLineWidth(B.wireframeLinewidth*F0()),Q0.setMode(A.LINES)):Q0.setMode(A.TRIANGLES);else if(U.isLine){let b0=B.linewidth;b0===void 0&&(b0=1),g0.setLineWidth(b0*F0()),U.isLineSegments?Q0.setMode(A.LINES):U.isLineLoop?Q0.setMode(A.LINE_LOOP):Q0.setMode(A.LINE_STRIP)}else U.isPoints?Q0.setMode(A.POINTS):U.isSprite&&Q0.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Zt("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Q0.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(B0.get("WEBGL_multi_draw"))Q0.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const b0=U._multiDrawStarts,re=U._multiDrawCounts,X0=U._multiDrawCount,ye=p0?_.get(p0).bytesPerElement:1,Dt=T0.get(B).currentProgram.getUniforms();for(let Te=0;Te<X0;Te++)Dt.setValue(A,"_gl_DrawID",Te),Q0.render(b0[Te]/ye,re[Te])}else if(U.isInstancedMesh)Q0.renderInstances(H0,se,U.count);else if(O.isInstancedBufferGeometry){const b0=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,re=Math.min(O.instanceCount,b0);Q0.renderInstances(H0,se,re)}else Q0.render(H0,se)};function K0(v,D,O){v.transparent===!0&&v.side===Ze&&v.forceSinglePass===!1?(v.side=Se,v.needsUpdate=!0,Cn(v,D,O),v.side=pt,v.needsUpdate=!0,Cn(v,D,O),v.side=Ze):Cn(v,D,O)}this.compile=function(v,D,O=null){O===null&&(O=v),u=s0.get(O),u.init(D),T.push(u),O.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),v!==O&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const B=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const n0=U.material;if(n0)if(Array.isArray(n0))for(let h0=0;h0<n0.length;h0++){const x0=n0[h0];K0(x0,O,U),B.add(x0)}else K0(n0,O,U),B.add(n0)}),u=T.pop(),B},this.compileAsync=function(v,D,O=null){const B=this.compile(v,D,O);return new Promise(U=>{function n0(){if(B.forEach(function(h0){T0.get(h0).currentProgram.isReady()&&B.delete(h0)}),B.size===0){U(v);return}setTimeout(n0,10)}B0.get("KHR_parallel_shader_compile")!==null?n0():setTimeout(n0,10)})};let De=null;function ke(v){De&&De(v)}function Qr(){mt.stop()}function es(){mt.start()}const mt=new Fa;mt.setAnimationLoop(ke),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(v){De=v,Q.setAnimationLoop(v),v===null?mt.stop():mt.start()},Q.addEventListener("sessionstart",Qr),Q.addEventListener("sessionend",es),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(D),D=Q.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,D,N),u=s0.get(v,T.length),u.init(D),T.push(u),K.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(K),S0=this.localClippingEnabled,r0=M0.init(this.clippingPlanes,S0),p=E0.get(v,b.length),p.init(),b.push(p),Q.enabled===!0&&Q.isPresenting===!0){const n0=E.xr.getDepthSensingMesh();n0!==null&&gi(n0,D,-1/0,E.sortObjects)}gi(v,D,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(i0,J),W0=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,W0&&Z.addToRenderList(p,v),this.info.render.frame++,r0===!0&&M0.beginShadows();const O=u.state.shadowsArray;y0.render(O,v,D),r0===!0&&M0.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,U=p.transmissive;if(u.setupLights(),D.isArrayCamera){const n0=D.cameras;if(U.length>0)for(let h0=0,x0=n0.length;h0<x0;h0++){const p0=n0[h0];ns(B,U,v,p0)}W0&&Z.render(v);for(let h0=0,x0=n0.length;h0<x0;h0++){const p0=n0[h0];ts(p,v,p0,p0.viewport)}}else U.length>0&&ns(B,U,v,D),W0&&Z.render(v),ts(p,v,D);N!==null&&P===0&&(P0.updateMultisampleRenderTarget(N),P0.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(E,v,D),U0.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(u=T[T.length-1],r0===!0&&M0.setGlobalState(E.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function gi(v,D,O,B){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){B&&a0.setFromMatrixPosition(v.matrixWorld).applyMatrix4(K);const h0=G.update(v),x0=v.material;x0.visible&&p.push(v,h0,x0,O,a0.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){const h0=G.update(v),x0=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),a0.copy(v.boundingSphere.center)):(h0.boundingSphere===null&&h0.computeBoundingSphere(),a0.copy(h0.boundingSphere.center)),a0.applyMatrix4(v.matrixWorld).applyMatrix4(K)),Array.isArray(x0)){const p0=h0.groups;for(let L0=0,D0=p0.length;L0<D0;L0++){const A0=p0[L0],H0=x0[A0.materialIndex];H0&&H0.visible&&p.push(v,h0,H0,O,a0.z,A0)}}else x0.visible&&p.push(v,h0,x0,O,a0.z,null)}}const n0=v.children;for(let h0=0,x0=n0.length;h0<x0;h0++)gi(n0[h0],D,O,B)}function ts(v,D,O,B){const U=v.opaque,n0=v.transmissive,h0=v.transparent;u.setupLightsView(O),r0===!0&&M0.setGlobalState(E.clippingPlanes,O),B&&g0.viewport(C.copy(B)),U.length>0&&Rn(U,D,O),n0.length>0&&Rn(n0,D,O),h0.length>0&&Rn(h0,D,O),g0.buffers.depth.setTest(!0),g0.buffers.depth.setMask(!0),g0.buffers.color.setMask(!0),g0.setPolygonOffset(!1)}function ns(v,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new Lt(1,1,{generateMipmaps:!0,type:B0.has("EXT_color_buffer_half_float")||B0.has("EXT_color_buffer_float")?En:it,minFilter:Ct,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:q0.workingColorSpace}));const n0=u.state.transmissionRenderTarget[B.id],h0=B.viewport||C;n0.setSize(h0.z*E.transmissionResolutionScale,h0.w*E.transmissionResolutionScale);const x0=E.getRenderTarget(),p0=E.getActiveCubeFace(),L0=E.getActiveMipmapLevel();E.setRenderTarget(n0),E.getClearColor(H),j=E.getClearAlpha(),j<1&&E.setClearColor(16777215,.5),E.clear(),W0&&Z.render(O);const D0=E.toneMapping;E.toneMapping=dt;const A0=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),r0===!0&&M0.setGlobalState(E.clippingPlanes,B),Rn(v,O,B),P0.updateMultisampleRenderTarget(n0),P0.updateRenderTargetMipmap(n0),B0.has("WEBGL_multisampled_render_to_texture")===!1){let H0=!1;for(let Z0=0,se=D.length;Z0<se;Z0++){const ne=D[Z0],Q0=ne.object,b0=ne.geometry,re=ne.material,X0=ne.group;if(re.side===Ze&&Q0.layers.test(B.layers)){const ye=re.side;re.side=Se,re.needsUpdate=!0,is(Q0,O,B,b0,re,X0),re.side=ye,re.needsUpdate=!0,H0=!0}}H0===!0&&(P0.updateMultisampleRenderTarget(n0),P0.updateRenderTargetMipmap(n0))}E.setRenderTarget(x0,p0,L0),E.setClearColor(H,j),A0!==void 0&&(B.viewport=A0),E.toneMapping=D0}function Rn(v,D,O){const B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,n0=v.length;U<n0;U++){const h0=v[U],x0=h0.object,p0=h0.geometry,L0=h0.group;let D0=h0.material;D0.allowOverride===!0&&B!==null&&(D0=B),x0.layers.test(O.layers)&&is(x0,D,O,p0,D0,L0)}}function is(v,D,O,B,U,n0){v.onBeforeRender(E,D,O,B,U,n0),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(E,D,O,B,v,n0),U.transparent===!0&&U.side===Ze&&U.forceSinglePass===!1?(U.side=Se,U.needsUpdate=!0,E.renderBufferDirect(O,D,B,U,v,n0),U.side=pt,U.needsUpdate=!0,E.renderBufferDirect(O,D,B,U,v,n0),U.side=Ze):E.renderBufferDirect(O,D,B,U,v,n0),v.onAfterRender(E,D,O,B,U,n0)}function Cn(v,D,O){D.isScene!==!0&&(D=V0);const B=T0.get(v),U=u.state.lights,n0=u.state.shadowsArray,h0=U.state.version,x0=$.getParameters(v,U.state,n0,D,O),p0=$.getProgramCacheKey(x0);let L0=B.programs;B.environment=v.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(v.isMeshStandardMaterial?y:ee).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,L0===void 0&&(v.addEventListener("dispose",v0),L0=new Map,B.programs=L0);let D0=L0.get(p0);if(D0!==void 0){if(B.currentProgram===D0&&B.lightsStateVersion===h0)return ss(v,x0),D0}else x0.uniforms=$.getUniforms(v),v.onBeforeCompile(x0,E),D0=$.acquireProgram(x0,p0),L0.set(p0,D0),B.uniforms=x0.uniforms;const A0=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(A0.clippingPlanes=M0.uniform),ss(v,x0),B.needsLights=Ya(v),B.lightsStateVersion=h0,B.needsLights&&(A0.ambientLightColor.value=U.state.ambient,A0.lightProbe.value=U.state.probe,A0.directionalLights.value=U.state.directional,A0.directionalLightShadows.value=U.state.directionalShadow,A0.spotLights.value=U.state.spot,A0.spotLightShadows.value=U.state.spotShadow,A0.rectAreaLights.value=U.state.rectArea,A0.ltc_1.value=U.state.rectAreaLTC1,A0.ltc_2.value=U.state.rectAreaLTC2,A0.pointLights.value=U.state.point,A0.pointLightShadows.value=U.state.pointShadow,A0.hemisphereLights.value=U.state.hemi,A0.directionalShadowMap.value=U.state.directionalShadowMap,A0.directionalShadowMatrix.value=U.state.directionalShadowMatrix,A0.spotShadowMap.value=U.state.spotShadowMap,A0.spotLightMatrix.value=U.state.spotLightMatrix,A0.spotLightMap.value=U.state.spotLightMap,A0.pointShadowMap.value=U.state.pointShadowMap,A0.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=D0,B.uniformsList=null,D0}function rs(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=oi.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function ss(v,D){const O=T0.get(v);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Xa(v,D,O,B,U){D.isScene!==!0&&(D=V0),P0.resetTextureUnits();const n0=D.fog,h0=B.isMeshStandardMaterial?D.environment:null,x0=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:tn,p0=(B.isMeshStandardMaterial?y:ee).get(B.envMap||h0),L0=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,D0=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),A0=!!O.morphAttributes.position,H0=!!O.morphAttributes.normal,Z0=!!O.morphAttributes.color;let se=dt;B.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(se=E.toneMapping);const ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q0=ne!==void 0?ne.length:0,b0=T0.get(B),re=u.state.lights;if(r0===!0&&(S0===!0||v!==M)){const _e=v===M&&B.id===S;M0.setState(B,v,_e)}let X0=!1;B.version===b0.__version?(b0.needsLights&&b0.lightsStateVersion!==re.state.version||b0.outputColorSpace!==x0||U.isBatchedMesh&&b0.batching===!1||!U.isBatchedMesh&&b0.batching===!0||U.isBatchedMesh&&b0.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&b0.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&b0.instancing===!1||!U.isInstancedMesh&&b0.instancing===!0||U.isSkinnedMesh&&b0.skinning===!1||!U.isSkinnedMesh&&b0.skinning===!0||U.isInstancedMesh&&b0.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&b0.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&b0.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&b0.instancingMorph===!1&&U.morphTexture!==null||b0.envMap!==p0||B.fog===!0&&b0.fog!==n0||b0.numClippingPlanes!==void 0&&(b0.numClippingPlanes!==M0.numPlanes||b0.numIntersection!==M0.numIntersection)||b0.vertexAlphas!==L0||b0.vertexTangents!==D0||b0.morphTargets!==A0||b0.morphNormals!==H0||b0.morphColors!==Z0||b0.toneMapping!==se||b0.morphTargetsCount!==Q0)&&(X0=!0):(X0=!0,b0.__version=B.version);let ye=b0.currentProgram;X0===!0&&(ye=Cn(B,D,U));let Dt=!1,Te=!1,on=!1;const ie=ye.getUniforms(),we=b0.uniforms;if(g0.useProgram(ye.program)&&(Dt=!0,Te=!0,on=!0),B.id!==S&&(S=B.id,Te=!0),Dt||M!==v){g0.buffers.depth.getReversed()?(c0.copy(v.projectionMatrix),qo(c0),Yo(c0),ie.setValue(A,"projectionMatrix",c0)):ie.setValue(A,"projectionMatrix",v.projectionMatrix),ie.setValue(A,"viewMatrix",v.matrixWorldInverse);const xe=ie.map.cameraPosition;xe!==void 0&&xe.setValue(A,f0.setFromMatrixPosition(v.matrixWorld)),G0.logarithmicDepthBuffer&&ie.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ie.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Te=!0,on=!0)}if(U.isSkinnedMesh){ie.setOptional(A,U,"bindMatrix"),ie.setOptional(A,U,"bindMatrixInverse");const _e=U.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),ie.setValue(A,"boneTexture",_e.boneTexture,P0))}U.isBatchedMesh&&(ie.setOptional(A,U,"batchingTexture"),ie.setValue(A,"batchingTexture",U._matricesTexture,P0),ie.setOptional(A,U,"batchingIdTexture"),ie.setValue(A,"batchingIdTexture",U._indirectTexture,P0),ie.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&ie.setValue(A,"batchingColorTexture",U._colorsTexture,P0));const Re=O.morphAttributes;if((Re.position!==void 0||Re.normal!==void 0||Re.color!==void 0)&&d0.update(U,O,ye),(Te||b0.receiveShadow!==U.receiveShadow)&&(b0.receiveShadow=U.receiveShadow,ie.setValue(A,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(we.envMap.value=p0,we.flipEnvMap.value=p0.isCubeTexture&&p0.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(we.envMapIntensity.value=D.environmentIntensity),Te&&(ie.setValue(A,"toneMappingExposure",E.toneMappingExposure),b0.needsLights&&qa(we,on),n0&&B.fog===!0&&k.refreshFogUniforms(we,n0),k.refreshMaterialUniforms(we,B,V,e0,u.state.transmissionRenderTarget[v.id]),oi.upload(A,rs(b0),we,P0)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(oi.upload(A,rs(b0),we,P0),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ie.setValue(A,"center",U.center),ie.setValue(A,"modelViewMatrix",U.modelViewMatrix),ie.setValue(A,"normalMatrix",U.normalMatrix),ie.setValue(A,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const _e=B.uniformsGroups;for(let xe=0,vi=_e.length;xe<vi;xe++){const _t=_e[xe];w.update(_t,ye),w.bind(_t,ye)}}return ye}function qa(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Ya(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,D,O){const B=T0.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),T0.get(v.texture).__webglTexture=D,T0.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const O=T0.get(v);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};const $a=A.createFramebuffer();this.setRenderTarget=function(v,D=0,O=0){N=v,R=D,P=O;let B=!0,U=null,n0=!1,h0=!1;if(v){const p0=T0.get(v);if(p0.__useDefaultFramebuffer!==void 0)g0.bindFramebuffer(A.FRAMEBUFFER,null),B=!1;else if(p0.__webglFramebuffer===void 0)P0.setupRenderTarget(v);else if(p0.__hasExternalTextures)P0.rebindTextures(v,T0.get(v.texture).__webglTexture,T0.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const A0=v.depthTexture;if(p0.__boundDepthTexture!==A0){if(A0!==null&&T0.has(A0)&&(v.width!==A0.image.width||v.height!==A0.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P0.setupDepthRenderbuffer(v)}}const L0=v.texture;(L0.isData3DTexture||L0.isDataArrayTexture||L0.isCompressedArrayTexture)&&(h0=!0);const D0=T0.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(D0[D])?U=D0[D][O]:U=D0[D],n0=!0):v.samples>0&&P0.useMultisampledRTT(v)===!1?U=T0.get(v).__webglMultisampledFramebuffer:Array.isArray(D0)?U=D0[O]:U=D0,C.copy(v.viewport),q.copy(v.scissor),z=v.scissorTest}else C.copy(_0).multiplyScalar(V).floor(),q.copy(C0).multiplyScalar(V).floor(),z=$0;if(O!==0&&(U=$a),g0.bindFramebuffer(A.FRAMEBUFFER,U)&&B&&g0.drawBuffers(v,U),g0.viewport(C),g0.scissor(q),g0.setScissorTest(z),n0){const p0=T0.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+D,p0.__webglTexture,O)}else if(h0){const p0=T0.get(v.texture),L0=D;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,p0.__webglTexture,O,L0)}else if(v!==null&&O!==0){const p0=T0.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,p0.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(v,D,O,B,U,n0,h0,x0=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let p0=T0.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&h0!==void 0&&(p0=p0[h0]),p0){g0.bindFramebuffer(A.FRAMEBUFFER,p0);try{const L0=v.textures[x0],D0=L0.format,A0=L0.type;if(!G0.textureFormatReadable(D0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G0.textureTypeReadable(A0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-B&&O>=0&&O<=v.height-U&&(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+x0),A.readPixels(D,O,B,U,o0.convert(D0),o0.convert(A0),n0))}finally{const L0=N!==null?T0.get(N).__webglFramebuffer:null;g0.bindFramebuffer(A.FRAMEBUFFER,L0)}}},this.readRenderTargetPixelsAsync=async function(v,D,O,B,U,n0,h0,x0=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let p0=T0.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&h0!==void 0&&(p0=p0[h0]),p0)if(D>=0&&D<=v.width-B&&O>=0&&O<=v.height-U){g0.bindFramebuffer(A.FRAMEBUFFER,p0);const L0=v.textures[x0],D0=L0.format,A0=L0.type;if(!G0.textureFormatReadable(D0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G0.textureTypeReadable(A0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const H0=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,H0),A.bufferData(A.PIXEL_PACK_BUFFER,n0.byteLength,A.STREAM_READ),v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+x0),A.readPixels(D,O,B,U,o0.convert(D0),o0.convert(A0),0);const Z0=N!==null?T0.get(N).__webglFramebuffer:null;g0.bindFramebuffer(A.FRAMEBUFFER,Z0);const se=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Xo(A,se,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,H0),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,n0),A.deleteBuffer(H0),A.deleteSync(se),n0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,O=0){const B=Math.pow(2,-O),U=Math.floor(v.image.width*B),n0=Math.floor(v.image.height*B),h0=D!==null?D.x:0,x0=D!==null?D.y:0;P0.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,O,0,0,h0,x0,U,n0),g0.unbindTexture()};const Ka=A.createFramebuffer(),Za=A.createFramebuffer();this.copyTextureToTexture=function(v,D,O=null,B=null,U=0,n0=null){n0===null&&(U!==0?(Zt("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),n0=U,U=0):n0=0);let h0,x0,p0,L0,D0,A0,H0,Z0,se;const ne=v.isCompressedTexture?v.mipmaps[n0]:v.image;if(O!==null)h0=O.max.x-O.min.x,x0=O.max.y-O.min.y,p0=O.isBox3?O.max.z-O.min.z:1,L0=O.min.x,D0=O.min.y,A0=O.isBox3?O.min.z:0;else{const Re=Math.pow(2,-U);h0=Math.floor(ne.width*Re),x0=Math.floor(ne.height*Re),v.isDataArrayTexture?p0=ne.depth:v.isData3DTexture?p0=Math.floor(ne.depth*Re):p0=1,L0=0,D0=0,A0=0}B!==null?(H0=B.x,Z0=B.y,se=B.z):(H0=0,Z0=0,se=0);const Q0=o0.convert(D.format),b0=o0.convert(D.type);let re;D.isData3DTexture?(P0.setTexture3D(D,0),re=A.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(P0.setTexture2DArray(D,0),re=A.TEXTURE_2D_ARRAY):(P0.setTexture2D(D,0),re=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,D.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,D.unpackAlignment);const X0=A.getParameter(A.UNPACK_ROW_LENGTH),ye=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Dt=A.getParameter(A.UNPACK_SKIP_PIXELS),Te=A.getParameter(A.UNPACK_SKIP_ROWS),on=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ne.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ne.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,L0),A.pixelStorei(A.UNPACK_SKIP_ROWS,D0),A.pixelStorei(A.UNPACK_SKIP_IMAGES,A0);const ie=v.isDataArrayTexture||v.isData3DTexture,we=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const Re=T0.get(v),_e=T0.get(D),xe=T0.get(Re.__renderTarget),vi=T0.get(_e.__renderTarget);g0.bindFramebuffer(A.READ_FRAMEBUFFER,xe.__webglFramebuffer),g0.bindFramebuffer(A.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let _t=0;_t<p0;_t++)ie&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,T0.get(v).__webglTexture,U,A0+_t),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,T0.get(D).__webglTexture,n0,se+_t)),A.blitFramebuffer(L0,D0,h0,x0,H0,Z0,h0,x0,A.DEPTH_BUFFER_BIT,A.NEAREST);g0.bindFramebuffer(A.READ_FRAMEBUFFER,null),g0.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||T0.has(v)){const Re=T0.get(v),_e=T0.get(D);g0.bindFramebuffer(A.READ_FRAMEBUFFER,Ka),g0.bindFramebuffer(A.DRAW_FRAMEBUFFER,Za);for(let xe=0;xe<p0;xe++)ie?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Re.__webglTexture,U,A0+xe):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Re.__webglTexture,U),we?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.__webglTexture,n0,se+xe):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,_e.__webglTexture,n0),U!==0?A.blitFramebuffer(L0,D0,h0,x0,H0,Z0,h0,x0,A.COLOR_BUFFER_BIT,A.NEAREST):we?A.copyTexSubImage3D(re,n0,H0,Z0,se+xe,L0,D0,h0,x0):A.copyTexSubImage2D(re,n0,H0,Z0,L0,D0,h0,x0);g0.bindFramebuffer(A.READ_FRAMEBUFFER,null),g0.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else we?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(re,n0,H0,Z0,se,h0,x0,p0,Q0,b0,ne.data):D.isCompressedArrayTexture?A.compressedTexSubImage3D(re,n0,H0,Z0,se,h0,x0,p0,Q0,ne.data):A.texSubImage3D(re,n0,H0,Z0,se,h0,x0,p0,Q0,b0,ne):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,n0,H0,Z0,h0,x0,Q0,b0,ne.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,n0,H0,Z0,ne.width,ne.height,Q0,ne.data):A.texSubImage2D(A.TEXTURE_2D,n0,H0,Z0,h0,x0,Q0,b0,ne);A.pixelStorei(A.UNPACK_ROW_LENGTH,X0),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ye),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Dt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Te),A.pixelStorei(A.UNPACK_SKIP_IMAGES,on),n0===0&&D.generateMipmaps&&A.generateMipmap(re),g0.unbindTexture()},this.copyTextureToTexture3D=function(v,D,O=null,B=null,U=0){return Zt('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,O,B,U)},this.initRenderTarget=function(v){T0.get(v).__webglFramebuffer===void 0&&P0.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?P0.setTextureCube(v,0):v.isData3DTexture?P0.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?P0.setTexture2DArray(v,0):P0.setTexture2D(v,0),g0.unbindTexture()},this.resetState=function(){R=0,P=0,N=null,g0.reset(),U0.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=q0._getDrawingBufferColorSpace(e),t.unpackColorSpace=q0._getUnpackColorSpace()}}const m6=[223,234,132,223,132,234,131,223,131,132,234,305,223,305,230,258,234,258,230,234,258,305,270,305,223,270,130,223,130,131,270,296,296,305,189,221,131,221,131,189,132,221,258,280,280,305,280,296,130,270,133,234,132,133,133,230,257,258,257,280,133,178,132,178,178,221,130,189,198,221,178,198,175,198,175,221,189,212,212,221,239,297,230,297,230,239,258,297,257,297,256,280,256,296,256,288,280,288,257,288,175,212,177,198,177,178,254,275,270,275,254,270,130,275,231,270,231,296,231,242,231,256,242,256,177,183,183,198,178,213,133,213,177,213,189,193,130,193,165,193,165,189,152,189,152,212,152,175,172,193,130,172,152,171,152,165,165,171,175,183,224,239,224,230,232,297,232,257,143,263,263,288,143,288,134,230,133,134,134,158,133,158,129,275,129,130,129,172,143,257,256,263,253,254,231,254,231,253,275,306,129,306,134,224,235,297,235,239,232,235,176,222,176,193,193,222,165,176,140,235,140,239,143,232,161,183,161,175,153,158,158,213,153,213,142,213,142,177,134,135,135,224,304,306,275,304,135,141,134,141,171,176,152,161,242,263,137,140,140,224,137,224,142,183,303,304,254,304,254,303,136,141,135,136,135,137,136,137,142,153,161,170,152,170,139,235,139,232,232,283,143,283,139,140,138,141,141,158,138,158,102,103,102,137,103,137,242,253,138,153,220,222,176,220,171,220,170,171,172,222,196,222,172,196,129,196,170,219,171,219,253,303,276,278,278,306,276,306,129,278,60,306,60,304,139,283,143,229,229,263,243,263,242,243,242,252,252,253,253,302,302,303,266,283,139,266,128,278,128,129,219,220,42,219,42,220,59,60,59,304,229,283,128,196,44,222,44,220,151,162,151,183,162,183,142,151,142,205,153,205,138,205,161,162,161,169,162,169,58,59,58,304,60,276,44,194,194,222,67,276,60,67,144,278,128,144,43,44,44,51,43,220,58,303,229,243,57,303,57,58,72,194,194,196,72,196,144,196,169,170,243,252,102,266,140,266,102,140,169,218,170,218,218,219,42,43,51,194,252,302,66,67,56,57,56,303,40,218,40,219,151,154,154,162,104,136,104,141,104,137,105,141,141,160,105,160,104,105,41,42,41,219,103,104,82,278,82,276,82,144,50,214,50,51,51,214,67,298,276,298,65,66,204,205,151,205,151,204,283,285,229,285,243,285,266,286,283,286,241,286,241,266,55,56,56,302,55,302,101,121,101,102,102,121,101,266,298,299,66,298,66,299,194,214,40,41,138,160,103,123,103,112,100,241,100,266,82,298,160,205,217,218,169,217,72,214,49,50,154,204,88,107,107,160,88,160,162,168,168,169,72,145,72,144,144,145,103,122,102,122,100,101,103,124,104,124,111,112,104,125,112,113,113,114,105,125,285,287,285,286,286,287,251,301,252,301,251,252,301,302,100,120,101,120,114,115,120,121,243,251,39,217,39,218,87,298,82,87,64,65,125,126,105,126,92,112,92,113,106,160,105,106,55,301,96,116,96,117,115,116,119,120,100,119,106,126,92,111,109,126,168,217,99,100,99,241,241,295,286,295,48,49,49,215,48,215,49,214,39,40,167,217,167,168,97,117,96,97,99,119,99,117,233,251,233,243,54,301,54,55,107,127,106,127,106,107,126,127,91,110,91,111,109,127,160,211,205,211,89,127,89,109,99,273,241,273,99,118,98,99,98,273,98,118,97,118,97,98,87,145,82,145,214,215,206,211,205,206,154,168,204,206,88,108,107,108,108,127,90,109,90,110,53,54,53,301,63,64,65,299,273,295,273,291,291,295,95,116,95,96,233,274,233,285,274,285,88,208,160,208,89,108,94,115,94,95,95,115,287,293,287,295,293,295,38,39,38,217,168,173,154,173,88,89,81,299,80,299,80,81,64,299,77,214,77,215,94,114,81,87,81,298,89,90,192,206,192,204,208,211,52,53,53,225,52,225,52,61,62,63,93,114,93,94,90,91,72,77,93,113,76,77,77,164,76,164,77,145,91,92,92,93,273,282,282,291,37,38,38,147,147,217,47,48,64,80,147,167,154,192,81,86,80,86,47,70,48,70,61,62,63,80,225,301,184,192,154,184,250,301,250,251,62,80,36,147,37,147,36,37,250,255,233,250,233,255,46,47,46,70,45,46,225,250,36,45,71,77,71,215,48,71,36,174,45,174,195,208,195,211,88,202,89,202,191,203,90,191,90,203,91,191,195,206,96,245,97,245,97,282,98,282,95,245,245,272,95,272,94,272,274,292,274,287,287,292,167,173,173,184,192,209,206,209,92,191,146,159,93,146,93,159,240,272,94,240,89,203,94,146,146,240,245,282,202,208,62,79,79,80,86,87,87,185,145,185,61,248,62,248,26,190,184,190,207,208,202,207,92,159,159,197,159,191,191,197,247,249,247,250,249,250,225,247,225,248,52,248,173,190,190,209,166,167,147,166,173,180,180,190,195,209,27,180,282,284,245,284,264,292,264,274,245,279,279,284,180,216,71,76,70,71,150,174,36,150,147,150,77,185,190,210,209,210,195,210,255,264,233,264,228,248,225,228,46,174,202,203,203,207,25,210,179,207,179,208,291,293,272,279,272,281,279,281,289,291,282,289,289,293,166,216,28,216,228,247,228,249,70,76,277,293,277,287,249,260,249,255,255,260,277,292,197,203,159,200,146,200,240,281,181,195,148,203,148,197,181,210,25,181,200,240,200,281,87,246,86,246,185,246,69,75,69,70,70,75,69,174,46,69,149,150,149,216,197,201,159,201,24,181,200,201,79,248,80,85,85,86,78,79,78,248,271,292,264,271,255,271,10,271,284,289,11,294,277,294,289,290,284,290,279,290,260,271,24,179,186,207,186,203,79,85,237,246,86,237,29,149,75,76,248,265,228,265,78,265,79,84,84,85,261,277,261,293,292,294,0,164,164,185,0,185,10,260,10,294,9,10,9,260,249,300,174,182,226,290,226,279,68,69,68,174,75,156,76,156,73,182,68,73,12,261,259,293,259,289,23,207,23,179,23,186,148,201,23,24,11,261,10,11,227,265,227,228,78,84,148,187,187,203,199,201,199,200,226,269,226,281,269,281,8,9,8,300,13,259,13,289,83,84,78,83,85,237,267,290,267,289,199,281,83,265,237,244,85,244,35,156,156,164,35,164,69,73,83,262,262,265,186,187,22,187,22,186,12,259,11,12,14,267,14,290,12,13,73,74,69,74,74,155,74,75,75,155,0,246,22,23,21,148,21,187,188,201,148,188,188,199,13,14,13,267,15,268,226,268,15,226,268,290,7,8,7,227,85,236,84,236,236,244,30,182,29,30,30,149,73,157,74,157,21,22,14,268,14,15,155,157,84,238,83,238,6,262,156,163,75,163,20,188,20,148,15,16,16,226,199,269,18,269,18,199,236,238,155,163,31,157,30,31,20,21,6,7,5,238,5,236,1,246,1,237,0,1,33,156,33,163,16,269,31,32,31,155,32,155,19,20,19,188,18,188,17,269,16,17,2,237,2,244,1,2,18,19,17,18,0,35,32,163,5,6,4,236,4,244,2,3,3,244,34,35,34,156,32,33,4,5,33,34,3,4,108,109,118,119],_6=[.05,.925,.422,-.174,.919,.412,-.364,.888,.345,-.537,.828,.221,-.642,.735,.071,-.7,.616,-.08,-.725,.486,-.246,-.731,.322,-.386,-.723,.163,-.462,-.709,-.004,-.494,-.684,-.178,-.493,-.635,-.363,-.458,-.565,-.516,-.368,-.482,-.634,-.263,-.38,-.739,-.178,-.29,-.812,-.114,-.196,-.875,-.047,-.087,-.918,-.007,.047,-.925,.004,.178,-.908,-.02,.277,-.856,-.071,.359,-.785,-.145,.434,-.707,-.219,.517,-.598,-.314,.576,-.478,-.428,.627,-.326,-.522,.664,-.142,-.563,.689,.029,-.568,.705,.191,-.538,.722,.348,-.464,.731,.51,-.322,.723,.639,-.152,.685,.754,.007,.597,.843,.168,.443,.899,.308,.265,.923,.393,.543,.333,.108,.52,.309,.129,.494,.293,.148,.456,.281,.17,.397,.278,.19,.339,.286,.197,.286,.295,.191,.251,.297,.181,.238,.301,.182,.531,.346,.141,.514,.361,.167,.482,.378,.194,.426,.387,.215,.366,.38,.221,.305,.355,.21,.26,.322,.195,-.456,.301,.157,-.431,.28,.175,-.402,.267,.191,-.362,.258,.211,-.304,.258,.225,-.243,.268,.227,-.19,.279,.217,-.156,.284,.204,-.139,.287,.203,-.442,.313,.187,-.423,.328,.212,-.389,.347,.236,-.334,.36,.252,-.272,.36,.253,-.208,.34,.237,-.162,.309,.218,.646,.473,.174,.598,.513,.252,.512,.523,.314,.385,.502,.358,.208,.438,.377,.675,.516,.119,.63,.569,.223,.536,.592,.31,.399,.57,.381,.234,.535,.42,-.572,.437,.23,-.512,.479,.302,-.416,.497,.354,-.28,.482,.384,-.095,.428,.39,-.611,.479,.178,-.55,.534,.276,-.443,.564,.351,-.295,.55,.408,-.12,.524,.433,.293,-.453,.097,.267,-.475,.134,.233,-.496,.178,.185,-.524,.208,.123,-.542,.23,.054,-.548,.234,-.019,-.542,.235,-.088,-.523,.219,-.143,-.493,.193,-.184,-.466,.155,-.212,-.443,.123,-.184,-.428,.181,-.146,-.411,.234,-.093,-.394,.28,-.019,-.38,.317,.058,-.397,.32,.133,-.382,.311,.2,-.397,.268,.242,-.417,.216,.272,-.436,.158,.27,-.45,.12,.234,-.448,.146,.204,-.446,.178,.162,-.446,.204,.112,-.446,.225,.054,-.45,.233,-.006,-.448,.229,-.065,-.443,.213,-.113,-.442,.191,-.15,-.442,.164,-.19,-.442,.141,-.149,-.44,.166,-.114,-.438,.195,-.065,-.439,.219,-.008,-.444,.238,.055,-.449,.242,.113,-.445,.233,.164,-.441,.21,.206,-.444,.182,.236,-.447,.148,.06,.337,.387,.064,.239,.42,.069,.148,.463,.072,.063,.507,.077,-.029,.555,.079,-.137,.568,.078,-.212,.536,.075,-.243,.497,.07,-.252,.402,.066,-.254,.349,.236,-.204,.261,-.122,-.208,.271,-.022,-.242,.333,.149,-.243,.329,.269,-.122,.23,-.163,-.127,.246,.059,.422,.405,.058,.52,.437,.049,-.628,.168,.579,.245,.071,.277,-.733,.063,.722,.319,-.233,.647,.304,.008,.37,-.072,.214,.243,.107,.261,.262,-.146,.358,.551,-.047,.121,.655,.662,.133,.412,.738,.353,.699,.572,-.005,.196,-.188,.429,.127,-.623,.163,.313,-.337,.206,.306,.07,.227,.41,.025,.195,.563,.72,.249,.246,.734,.414,.202,.148,.294,.684,.16,-.065,.597,.141,.078,.523,.105,.141,.402,.111,.18,.312,.139,.204,.248,.167,.232,.126,.225,.388,.667,.008,-.07,.65,.398,.091,.235,.026,.276,.2,.2,.251,.228,-.079,.411,.186,-.049,.485,.532,-.535,-.18,.695,.015,-.319,.595,-.428,-.255,.712,.458,-.136,.291,-.021,.24,.648,-.134,-.116,.055,.729,.438,.456,-.639,-.122,.378,-.721,-.06,.183,-.86,.072,.167,.108,.386,.67,-.14,-.334,.206,-.592,.153,.584,-.189,.022,.164,.192,.337,.195,.344,.244,.585,-.346,-.108,.143,.331,.334,.244,-.661,.105,.206,-.006,.364,.051,-.809,.141,.05,-.715,.152,.149,-.702,.136,.387,-.524,.049,.32,-.602,.074,.467,-.151,.17,.381,-.239,.182,.515,-.256,.095,.442,-.57,-.029,.443,-.442,.049,.63,-.252,-.158,.642,-.287,-.329,.427,-.325,.133,.2,.068,.327,.192,-.133,.498,.254,.408,.271,.374,.458,.284,.715,.167,-.281,.482,.182,.146,.396,.181,.178,.315,.197,.196,.254,.218,.208,.171,.03,.426,.182,.271,.235,.015,.054,.485,.001,-.229,.404,-.512,.219,.124,-.187,-.747,.084,-.704,.292,-.161,-.594,.273,.068,-.275,-.083,.242,.014,-.136,.563,-.139,.101,.279,-.14,-.151,.372,-.478,-.065,.171,.017,-.033,.536,-.091,-.195,.339,-.59,.639,.191,-.318,.726,.384,-.654,.545,.06,-.059,-.19,.438,-.03,-.624,.169,-.213,-.342,.227,-.209,.063,.251,-.322,.013,.23,-.484,.702,.296,-.181,-.554,.144,-.143,.728,.431,-.579,.173,.081,-.535,.35,.175,-.644,.134,0,-.533,.118,.133,-.446,.087,.188,-.316,.097,.215,-.218,.128,.23,-.146,.159,.251,-.625,-.021,-.004,-.129,.021,.292,-.1,-.084,.424,-.044,-.052,.493,-.483,-.569,-.129,-.686,-.016,-.248,-.563,-.463,-.196,-.683,.431,-.067,-.191,-.028,.26,-.61,-.163,-.052,-.634,.389,.086,-.147,-.309,.264,-.391,-.667,-.082,-.303,-.747,-.03,-.086,-.871,.085,-.041,.104,.395,-.662,-.176,-.266,-.113,-.597,.167,-.265,-.391,.177,-.526,-.213,.076,-.046,.188,.347,-.091,.335,.257,-.534,-.376,-.054,-.028,.326,.342,-.153,-.67,.123,-.084,-.009,.375,-.051,-.709,.146,-.307,-.54,.078,-.222,-.178,.226,-.235,-.614,.098,-.383,-.166,.207,-.288,-.249,.209,-.44,-.275,.138,-.123,-.043,.321,-.366,-.593,.008,-.279,-.676,.035,-.363,-.455,.086,-.593,-.282,-.098,-.451,-.462,.021,-.628,-.324,-.263,-.34,-.337,.167,-.084,.065,.34,-.045,-.136,.508,-.153,.395,.29,-.277,.439,.312,-.701,.137,-.208,-.401,.163,.189,-.308,.164,.213,-.221,.183,.222,-.11,.226,.232,-.037,.028,.434,-.056,.244,.292],g6=JSON.parse('[{"yaw":0.068,"pitch":-0.103,"frame":[0.055,0.925,0.388,-0.168,0.919,0.38,-0.357,0.888,0.317,-0.531,0.825,0.195,-0.638,0.729,0.049,-0.699,0.607,-0.097,-0.724,0.474,-0.258,-0.73,0.307,-0.39,-0.724,0.147,-0.458,-0.71,-0.019,-0.483,-0.684,-0.195,-0.476,-0.635,-0.38,-0.433,-0.563,-0.531,-0.339,-0.481,-0.646,-0.232,-0.378,-0.747,-0.145,-0.288,-0.818,-0.079,-0.192,-0.878,-0.012,-0.083,-0.918,0.029,0.053,-0.925,0.039,0.184,-0.909,0.013,0.283,-0.859,-0.04,0.365,-0.792,-0.118,0.438,-0.716,-0.194,0.518,-0.611,-0.293,0.575,-0.495,-0.412,0.625,-0.346,-0.512,0.663,-0.163,-0.561,0.688,0.008,-0.574,0.704,0.169,-0.551,0.722,0.327,-0.484,0.73,0.491,-0.349,0.723,0.624,-0.183,0.685,0.743,-0.029,0.598,0.836,0.132,0.446,0.895,0.271,0.269,0.922,0.358,0.546,0.328,0.091,0.522,0.307,0.113,0.497,0.292,0.133,0.46,0.281,0.156,0.402,0.279,0.176,0.346,0.287,0.183,0.293,0.296,0.178,0.257,0.298,0.168,0.243,0.302,0.168,0.533,0.342,0.124,0.516,0.357,0.151,0.484,0.374,0.177,0.429,0.383,0.198,0.37,0.377,0.205,0.31,0.353,0.194,0.264,0.322,0.18,-0.453,0.301,0.152,-0.428,0.28,0.171,-0.4,0.268,0.187,-0.359,0.261,0.207,-0.302,0.26,0.221,-0.242,0.27,0.222,-0.188,0.28,0.212,-0.153,0.285,0.198,-0.136,0.288,0.196,-0.439,0.313,0.182,-0.42,0.328,0.206,-0.385,0.347,0.23,-0.33,0.36,0.245,-0.268,0.359,0.246,-0.206,0.339,0.229,-0.159,0.31,0.211,0.649,0.471,0.151,0.601,0.513,0.229,0.516,0.526,0.291,0.39,0.508,0.336,0.214,0.446,0.359,0.678,0.511,0.093,0.633,0.568,0.197,0.54,0.594,0.285,0.404,0.576,0.358,0.24,0.543,0.398,-0.567,0.44,0.22,-0.505,0.484,0.29,-0.409,0.503,0.34,-0.273,0.488,0.37,-0.088,0.434,0.376,-0.606,0.48,0.167,-0.545,0.538,0.262,-0.437,0.57,0.335,-0.288,0.557,0.392,-0.113,0.531,0.416,0.296,-0.449,0.114,0.27,-0.471,0.152,0.237,-0.492,0.198,0.191,-0.521,0.229,0.13,-0.54,0.253,0.061,-0.547,0.258,-0.012,-0.541,0.26,-0.081,-0.522,0.244,-0.136,-0.492,0.218,-0.177,-0.465,0.18,-0.205,-0.442,0.148,-0.177,-0.425,0.205,-0.139,-0.406,0.257,-0.086,-0.385,0.302,-0.012,-0.369,0.337,0.065,-0.386,0.339,0.14,-0.371,0.327,0.205,-0.388,0.283,0.247,-0.41,0.232,0.275,-0.43,0.174,0.273,-0.445,0.137,0.237,-0.443,0.163,0.208,-0.44,0.195,0.167,-0.44,0.222,0.117,-0.441,0.244,0.06,-0.445,0.254,0.001,-0.443,0.251,-0.057,-0.438,0.235,-0.105,-0.439,0.214,-0.143,-0.439,0.188,-0.182,-0.44,0.166,-0.142,-0.437,0.19,-0.106,-0.434,0.22,-0.058,-0.434,0.244,0,-0.439,0.262,0.062,-0.443,0.265,0.119,-0.439,0.254,0.169,-0.436,0.229,0.21,-0.439,0.201,0.239,-0.442,0.166,0.068,0.345,0.374,0.072,0.25,0.411,0.078,0.161,0.457,0.081,0.079,0.505,0.086,-0.01,0.557,0.089,-0.115,0.574,0.088,-0.19,0.544,0.084,-0.222,0.506,0.079,-0.234,0.412,0.074,-0.238,0.361,0.241,-0.194,0.267,-0.114,-0.197,0.284,-0.013,-0.228,0.346,0.156,-0.228,0.338,0.276,-0.114,0.233,-0.156,-0.118,0.257,0.067,0.43,0.389,0.065,0.528,0.417,0.056,-0.627,0.192,0.582,0.24,0.057,0.284,-0.733,0.09,0.723,0.305,-0.252,0.65,0.297,-0.009,0.376,-0.067,0.214,0.249,0.112,0.255,0.268,-0.133,0.361,0.556,-0.048,0.118,0.657,0.657,0.103,0.415,0.74,0.323,0.7,0.563,-0.034,0.204,-0.17,0.432,0.135,-0.621,0.187,0.32,-0.331,0.218,0.312,0.073,0.221,0.416,0.027,0.19,0.566,0.719,0.218,0.251,0.738,0.385,0.209,0.155,0.286,0.687,0.152,-0.077,0.601,0.137,0.067,0.527,0.104,0.133,0.408,0.112,0.172,0.317,0.141,0.196,0.253,0.17,0.223,0.133,0.235,0.378,0.67,0,-0.076,0.654,0.393,0.07,0.242,0.034,0.273,0.205,0.204,0.241,0.236,-0.065,0.412,0.194,-0.032,0.485,0.535,-0.544,-0.161,0.697,0.001,-0.325,0.596,-0.44,-0.241,0.714,0.446,-0.16,0.297,-0.015,0.238,0.65,-0.143,-0.114,0.061,0.733,0.411,0.461,-0.646,-0.099,0.384,-0.725,-0.034,0.19,-0.86,0.104,0.175,0.119,0.38,0.671,-0.154,-0.333,0.214,-0.59,0.175,0.587,-0.193,0.026,0.171,0.2,0.328,0.2,0.348,0.229,0.587,-0.354,-0.098,0.149,0.338,0.32,0.251,-0.66,0.13,0.214,0.005,0.362,0.058,-0.806,0.172,0.057,-0.713,0.179,0.157,-0.7,0.163,0.392,-0.526,0.068,0.326,-0.603,0.096,0.472,-0.148,0.172,0.386,-0.234,0.188,0.519,-0.257,0.102,0.447,-0.574,-0.008,0.447,-0.443,0.065,0.632,-0.262,-0.152,0.642,-0.301,-0.32,0.432,-0.322,0.143,0.207,0.078,0.323,0.2,-0.113,0.501,0.259,0.412,0.254,0.378,0.461,0.265,0.717,0.153,-0.293,0.486,0.181,0.135,0.402,0.181,0.168,0.321,0.197,0.186,0.259,0.219,0.197,0.179,0.044,0.423,0.188,0.275,0.223,0.024,0.07,0.485,0.012,-0.212,0.415,-0.509,0.218,0.123,-0.181,-0.747,0.115,-0.702,0.283,-0.164,-0.592,0.271,0.065,-0.268,-0.077,0.252,0.024,-0.114,0.569,-0.132,0.107,0.28,-0.132,-0.137,0.383,-0.473,-0.063,0.181,0.026,-0.015,0.539,-0.083,-0.18,0.35,-0.585,0.638,0.173,-0.311,0.73,0.361,-0.65,0.541,0.045,-0.05,-0.171,0.448,-0.024,-0.623,0.194,-0.206,-0.336,0.247,-0.204,0.067,0.255,-0.316,0.017,0.236,-0.478,0.704,0.275,-0.175,-0.554,0.171,-0.136,0.733,0.405,-0.576,0.171,0.083,-0.532,0.35,0.169,-0.642,0.131,0.005,-0.529,0.118,0.136,-0.442,0.089,0.192,-0.312,0.1,0.218,-0.213,0.131,0.231,-0.141,0.163,0.25,-0.623,-0.024,0.006,-0.122,0.029,0.296,-0.092,-0.069,0.431,-0.035,-0.035,0.499,-0.481,-0.576,-0.1,-0.687,-0.025,-0.237,-0.561,-0.472,-0.169,-0.68,0.424,-0.077,-0.185,-0.021,0.267,-0.609,-0.168,-0.035,-0.631,0.387,0.078,-0.14,-0.3,0.282,-0.388,-0.672,-0.05,-0.3,-0.75,0.004,-0.081,-0.87,0.119,-0.033,0.115,0.394,-0.662,-0.186,-0.248,-0.107,-0.597,0.193,-0.258,-0.387,0.2,-0.522,-0.214,0.092,-0.038,0.197,0.342,-0.086,0.338,0.247,-0.531,-0.38,-0.031,-0.021,0.332,0.331,-0.148,-0.67,0.151,-0.077,0.003,0.38,-0.045,-0.707,0.174,-0.303,-0.541,0.106,-0.215,-0.171,0.239,-0.23,-0.614,0.126,-0.377,-0.162,0.221,-0.281,-0.243,0.225,-0.434,-0.273,0.156,-0.117,-0.032,0.327,-0.362,-0.595,0.037,-0.275,-0.677,0.066,-0.357,-0.455,0.112,-0.591,-0.288,-0.077,-0.447,-0.464,0.047,-0.627,-0.334,-0.24,-0.334,-0.334,0.187,-0.076,0.074,0.342,-0.036,-0.116,0.516,-0.148,0.399,0.278,-0.271,0.443,0.301,-0.701,0.128,-0.203,-0.397,0.165,0.189,-0.305,0.166,0.213,-0.218,0.185,0.221,-0.105,0.229,0.228,-0.028,0.043,0.436,-0.049,0.25,0.285]},{"yaw":0.174,"pitch":-0.089,"frame":[0.154,0.925,0.415,-0.075,0.919,0.422,-0.276,0.887,0.38,-0.47,0.823,0.279,-0.601,0.726,0.148,-0.685,0.602,0.012,-0.726,0.469,-0.142,-0.742,0.302,-0.27,-0.736,0.142,-0.336,-0.721,-0.025,-0.361,-0.691,-0.201,-0.354,-0.633,-0.388,-0.313,-0.548,-0.542,-0.225,-0.447,-0.656,-0.128,-0.324,-0.757,-0.052,-0.218,-0.826,0.005,-0.106,-0.884,0.063,0.017,-0.922,0.092,0.161,-0.925,0.09,0.289,-0.903,0.055,0.378,-0.848,-0.01,0.444,-0.776,-0.098,0.5,-0.697,-0.185,0.561,-0.589,-0.297,0.599,-0.471,-0.428,0.635,-0.322,-0.539,0.667,-0.141,-0.598,0.689,0.026,-0.617,0.703,0.184,-0.6,0.723,0.339,-0.535,0.74,0.5,-0.402,0.742,0.631,-0.235,0.717,0.748,-0.073,0.647,0.839,0.101,0.517,0.897,0.259,0.357,0.923,0.367,0.607,0.338,0.072,0.588,0.316,0.097,0.567,0.301,0.119,0.533,0.289,0.147,0.477,0.285,0.173,0.421,0.292,0.187,0.368,0.302,0.187,0.333,0.305,0.18,0.319,0.31,0.183,0.596,0.352,0.108,0.58,0.367,0.136,0.55,0.382,0.167,0.497,0.391,0.194,0.438,0.385,0.208,0.38,0.362,0.202,0.339,0.331,0.192,-0.384,0.305,0.238,-0.357,0.283,0.254,-0.326,0.271,0.268,-0.284,0.262,0.283,-0.223,0.262,0.292,-0.16,0.271,0.286,-0.106,0.283,0.27,-0.07,0.289,0.253,-0.051,0.293,0.249,-0.367,0.318,0.265,-0.345,0.333,0.287,-0.307,0.352,0.306,-0.251,0.365,0.316,-0.187,0.364,0.31,-0.122,0.344,0.287,-0.075,0.315,0.266,0.708,0.476,0.122,0.67,0.515,0.21,0.596,0.526,0.285,0.483,0.509,0.345,0.318,0.453,0.385,0.729,0.517,0.059,0.696,0.57,0.173,0.619,0.595,0.273,0.497,0.578,0.364,0.345,0.548,0.421,-0.502,0.438,0.316,-0.427,0.482,0.377,-0.319,0.501,0.415,-0.175,0.489,0.43,0.018,0.441,0.422,-0.55,0.476,0.267,-0.473,0.535,0.352,-0.35,0.568,0.411,-0.189,0.558,0.452,-0.006,0.536,0.461,0.391,-0.439,0.135,0.371,-0.461,0.18,0.344,-0.483,0.23,0.304,-0.512,0.267,0.247,-0.532,0.296,0.182,-0.54,0.306,0.104,-0.535,0.314,0.031,-0.517,0.305,-0.029,-0.487,0.285,-0.074,-0.461,0.253,-0.103,-0.437,0.225,-0.073,-0.42,0.279,-0.029,-0.4,0.326,0.03,-0.378,0.364,0.111,-0.36,0.39,0.19,-0.377,0.386,0.259,-0.361,0.37,0.315,-0.376,0.32,0.352,-0.397,0.262,0.376,-0.418,0.199,0.369,-0.436,0.164,0.337,-0.433,0.195,0.311,-0.431,0.232,0.275,-0.43,0.262,0.231,-0.431,0.289,0.179,-0.436,0.303,0.116,-0.434,0.307,0.054,-0.431,0.296,0.001,-0.432,0.279,-0.041,-0.434,0.258,-0.081,-0.435,0.238,-0.04,-0.432,0.258,0.001,-0.428,0.282,0.054,-0.427,0.301,0.116,-0.432,0.313,0.183,-0.436,0.31,0.234,-0.431,0.295,0.278,-0.427,0.267,0.313,-0.43,0.234,0.339,-0.432,0.195,0.179,0.354,0.413,0.19,0.261,0.451,0.203,0.176,0.498,0.214,0.097,0.547,0.227,0.011,0.6,0.236,-0.091,0.617,0.234,-0.165,0.587,0.225,-0.2,0.549,0.214,-0.215,0.455,0.201,-0.222,0.404,0.351,-0.178,0.301,-0.002,-0.187,0.339,0.11,-0.213,0.395,0.279,-0.212,0.379,0.379,-0.097,0.258,-0.052,-0.109,0.314,0.177,0.437,0.426,0.175,0.533,0.453,0.172,-0.621,0.24,0.641,0.253,0.034,0.384,-0.72,0.121,0.741,0.319,-0.301,0.696,0.311,-0.042,0.468,-0.05,0.226,0.345,0.126,0.276,0.384,-0.112,0.388,0.629,-0.029,0.105,0.704,0.662,0.068,0.498,0.743,0.319,0.736,0.57,-0.078,0.334,-0.147,0.467,0.247,-0.613,0.231,0.421,-0.316,0.243,0.402,0.087,0.236,0.5,0.043,0.194,0.629,0.722,0.197,0.347,0.741,0.399,0.309,0.168,0.312,0.728,0.17,-0.115,0.664,0.154,0.043,0.603,0.12,0.12,0.491,0.125,0.174,0.404,0.152,0.208,0.344,0.181,0.243,0.247,0.247,0.412,0.719,0.02,-0.111,0.705,0.403,0.037,0.344,0.049,0.296,0.301,0.214,0.266,0.355,-0.044,0.442,0.323,-0.011,0.519,0.59,-0.523,-0.166,0.723,0.021,-0.368,0.637,-0.417,-0.259,0.741,0.456,-0.208,0.393,0.001,0.257,0.698,-0.121,-0.144,0.166,0.735,0.442,0.531,-0.627,-0.09,0.467,-0.708,-0.014,0.3,-0.852,0.146,0.289,0.134,0.412,0.699,-0.132,-0.369,0.32,-0.58,0.211,0.651,-0.172,0.01,0.278,0.212,0.358,0.288,0.356,0.252,0.641,-0.332,-0.111,0.253,0.347,0.351,0.353,-0.649,0.164,0.327,0.023,0.392,0.175,-0.803,0.222,0.173,-0.708,0.229,0.267,-0.691,0.206,0.48,-0.511,0.086,0.42,-0.588,0.123,0.556,-0.129,0.175,0.48,-0.217,0.203,0.595,-0.237,0.099,0.526,-0.557,0.003,0.531,-0.427,0.072,0.677,-0.239,-0.175,0.673,-0.278,-0.35,0.519,-0.306,0.152,0.315,0.093,0.35,0.335,-0.089,0.537,0.347,0.419,0.27,0.462,0.465,0.271,0.739,0.17,-0.342,0.56,0.193,0.125,0.48,0.191,0.168,0.402,0.207,0.194,0.343,0.228,0.215,0.301,0.062,0.456,0.277,0.284,0.248,0.154,0.086,0.529,0.143,-0.195,0.461,-0.452,0.218,0.216,-0.085,-0.749,0.185,-0.691,0.28,-0.048,-0.546,0.27,0.165,-0.176,-0.072,0.321,0.169,-0.092,0.614,-0.039,0.115,0.335,-0.014,-0.123,0.441,-0.402,-0.064,0.274,0.164,0.005,0.584,0.036,-0.164,0.403,-0.529,0.636,0.267,-0.218,0.73,0.421,-0.616,0.538,0.149,0.077,-0.152,0.5,0.088,-0.618,0.247,-0.101,-0.331,0.319,-0.114,0.073,0.317,-0.232,0.02,0.31,-0.401,0.703,0.354,-0.076,-0.554,0.242,-0.035,0.734,0.449,-0.529,0.17,0.183,-0.472,0.351,0.261,-0.608,0.128,0.116,-0.473,0.117,0.233,-0.375,0.089,0.279,-0.233,0.103,0.292,-0.129,0.135,0.294,-0.052,0.169,0.304,-0.587,-0.028,0.119,-0.023,0.039,0.351,0.028,-0.053,0.484,0.095,-0.018,0.548,-0.431,-0.584,0.001,-0.678,-0.03,-0.116,-0.529,-0.48,-0.059,-0.659,0.421,0.034,-0.088,-0.014,0.328,-0.573,-0.172,0.077,-0.589,0.384,0.183,-0.027,-0.291,0.346,-0.325,-0.679,0.041,-0.223,-0.756,0.086,0.025,-0.872,0.182,0.081,0.127,0.44,-0.651,-0.192,-0.128,-0.001,-0.594,0.256,-0.159,-0.386,0.278,-0.462,-0.217,0.192,0.068,0.206,0.388,0.007,0.345,0.293,-0.479,-0.385,0.072,0.084,0.34,0.374,-0.048,-0.671,0.217,0.035,0.016,0.43,0.064,-0.705,0.231,-0.217,-0.544,0.187,-0.116,-0.165,0.304,-0.14,-0.616,0.2,-0.291,-0.161,0.301,-0.186,-0.24,0.299,-0.356,-0.275,0.244,-0.012,-0.021,0.382,-0.288,-0.601,0.124,-0.19,-0.681,0.144,-0.274,-0.458,0.199,-0.554,-0.293,0.033,-0.379,-0.469,0.141,-0.611,-0.341,-0.122,-0.243,-0.334,0.269,0.029,0.085,0.392,0.101,-0.096,0.566,-0.054,0.404,0.329,-0.18,0.446,0.361,-0.692,0.124,-0.082,-0.329,0.166,0.271,-0.229,0.168,0.285,-0.136,0.188,0.283,-0.016,0.235,0.278,0.094,0.057,0.484,0.048,0.257,0.33]},{"yaw":0.231,"pitch":-0.089,"frame":[0.209,0.925,0.423,-0.018,0.921,0.449,-0.223,0.892,0.418,-0.427,0.83,0.33,-0.57,0.732,0.21,-0.669,0.608,0.084,-0.722,0.473,-0.064,-0.747,0.305,-0.186,-0.744,0.143,-0.248,-0.73,-0.026,-0.27,-0.699,-0.205,-0.261,-0.639,-0.395,-0.22,-0.546,-0.551,-0.136,-0.436,-0.667,-0.047,-0.303,-0.767,0.023,-0.189,-0.835,0.074,-0.069,-0.89,0.126,0.058,-0.925,0.145,0.203,-0.924,0.129,0.326,-0.899,0.079,0.408,-0.844,0.006,0.466,-0.774,-0.087,0.514,-0.697,-0.18,0.563,-0.589,-0.297,0.59,-0.472,-0.433,0.614,-0.322,-0.551,0.642,-0.143,-0.615,0.664,0.023,-0.64,0.678,0.181,-0.628,0.705,0.335,-0.568,0.735,0.495,-0.438,0.746,0.625,-0.274,0.731,0.743,-0.111,0.672,0.834,0.067,0.555,0.894,0.234,0.405,0.921,0.356,0.626,0.335,0.05,0.609,0.313,0.076,0.59,0.297,0.1,0.558,0.285,0.13,0.506,0.281,0.159,0.451,0.289,0.178,0.4,0.299,0.181,0.367,0.303,0.177,0.353,0.309,0.18,0.616,0.349,0.086,0.601,0.364,0.115,0.573,0.38,0.148,0.524,0.389,0.179,0.467,0.383,0.196,0.411,0.36,0.194,0.372,0.329,0.187,-0.338,0.314,0.295,-0.311,0.292,0.309,-0.279,0.279,0.321,-0.237,0.27,0.334,-0.177,0.268,0.339,-0.117,0.277,0.329,-0.065,0.289,0.31,-0.029,0.295,0.291,-0.01,0.299,0.285,-0.32,0.327,0.321,-0.297,0.341,0.34,-0.259,0.359,0.357,-0.203,0.37,0.362,-0.142,0.368,0.352,-0.08,0.348,0.326,-0.033,0.32,0.304,0.726,0.474,0.092,0.695,0.512,0.185,0.627,0.524,0.266,0.521,0.509,0.336,0.365,0.456,0.388,0.744,0.515,0.027,0.719,0.568,0.145,0.65,0.593,0.251,0.537,0.578,0.353,0.393,0.55,0.421,-0.454,0.441,0.378,-0.371,0.485,0.433,-0.259,0.503,0.463,-0.113,0.49,0.469,0.078,0.442,0.45,-0.506,0.478,0.331,-0.419,0.538,0.409,-0.288,0.57,0.459,-0.124,0.559,0.49,0.058,0.537,0.489,0.426,-0.439,0.135,0.406,-0.46,0.184,0.382,-0.482,0.239,0.345,-0.511,0.28,0.292,-0.531,0.316,0.228,-0.539,0.332,0.15,-0.534,0.346,0.077,-0.513,0.344,0.015,-0.482,0.327,-0.032,-0.454,0.299,-0.062,-0.43,0.275,-0.03,-0.415,0.326,0.015,-0.397,0.369,0.077,-0.378,0.402,0.16,-0.362,0.421,0.238,-0.38,0.411,0.304,-0.364,0.39,0.356,-0.379,0.331,0.39,-0.399,0.267,0.412,-0.418,0.2,0.405,-0.436,0.167,0.373,-0.433,0.2,0.349,-0.431,0.241,0.316,-0.431,0.277,0.275,-0.432,0.309,0.226,-0.437,0.327,0.162,-0.434,0.336,0.099,-0.43,0.331,0.044,-0.43,0.318,0,-0.429,0.301,-0.04,-0.429,0.284,0.001,-0.428,0.302,0.043,-0.426,0.322,0.099,-0.427,0.337,0.163,-0.433,0.344,0.229,-0.438,0.335,0.278,-0.434,0.315,0.319,-0.429,0.281,0.352,-0.431,0.244,0.375,-0.433,0.201,0.231,0.356,0.432,0.245,0.265,0.471,0.26,0.18,0.518,0.273,0.101,0.568,0.288,0.014,0.622,0.299,-0.088,0.64,0.296,-0.163,0.611,0.283,-0.2,0.573,0.269,-0.215,0.479,0.252,-0.222,0.428,0.394,-0.18,0.312,0.045,-0.185,0.376,0.162,-0.213,0.425,0.328,-0.214,0.399,0.419,-0.098,0.264,-0.004,-0.106,0.354,0.231,0.438,0.444,0.23,0.534,0.467,0.216,-0.619,0.268,0.658,0.252,0.01,0.418,-0.715,0.136,0.738,0.317,-0.335,0.706,0.31,-0.07,0.503,-0.05,0.223,0.385,0.126,0.279,0.43,-0.114,0.394,0.653,-0.028,0.088,0.724,0.658,0.034,0.538,0.741,0.3,0.747,0.566,-0.114,0.385,-0.15,0.477,0.289,-0.61,0.253,0.46,-0.316,0.245,0.438,0.087,0.234,0.532,0.044,0.187,0.659,0.719,0.169,0.396,0.74,0.392,0.353,0.168,0.318,0.737,0.168,-0.144,0.682,0.153,0.02,0.626,0.12,0.102,0.521,0.124,0.164,0.438,0.152,0.204,0.382,0.181,0.244,0.298,0.25,0.426,0.732,0.019,-0.138,0.718,0.4,0.006,0.386,0.05,0.3,0.342,0.214,0.27,0.404,-0.044,0.449,0.377,-0.009,0.53,0.601,-0.523,-0.171,0.721,0.019,-0.396,0.641,-0.417,-0.27,0.745,0.453,-0.244,0.431,0.001,0.259,0.709,-0.121,-0.166,0.222,0.736,0.452,0.548,-0.625,-0.087,0.492,-0.705,-0.005,0.339,-0.847,0.168,0.34,0.136,0.422,0.696,-0.133,-0.391,0.358,-0.577,0.226,0.67,-0.171,-0.006,0.325,0.214,0.368,0.329,0.356,0.256,0.654,-0.332,-0.124,0.299,0.349,0.361,0.387,-0.644,0.179,0.375,0.024,0.4,0.22,-0.798,0.255,0.218,-0.704,0.26,0.308,-0.687,0.229,0.507,-0.509,0.087,0.45,-0.585,0.131,0.585,-0.128,0.167,0.514,-0.217,0.201,0.62,-0.236,0.088,0.548,-0.554,0.004,0.557,-0.425,0.067,0.686,-0.24,-0.192,0.67,-0.279,-0.366,0.55,-0.306,0.147,0.361,0.094,0.357,0.392,-0.089,0.549,0.386,0.42,0.267,0.498,0.464,0.261,0.735,0.167,-0.374,0.584,0.192,0.109,0.51,0.19,0.157,0.435,0.205,0.188,0.379,0.227,0.214,0.354,0.064,0.466,0.318,0.284,0.253,0.213,0.09,0.554,0.197,-0.195,0.488,-0.416,0.225,0.278,-0.042,-0.751,0.239,-0.681,0.282,0.031,-0.515,0.275,0.233,-0.129,-0.068,0.369,0.232,-0.089,0.639,0.007,0.119,0.372,0.037,-0.12,0.48,-0.362,-0.06,0.338,0.226,0.008,0.61,0.086,-0.163,0.438,-0.487,0.641,0.326,-0.16,0.735,0.459,-0.585,0.541,0.216,0.132,-0.151,0.533,0.133,-0.616,0.283,-0.056,-0.33,0.365,-0.069,0.078,0.361,-0.186,0.025,0.362,-0.35,0.708,0.403,-0.033,-0.552,0.29,0.024,0.737,0.476,-0.498,0.175,0.251,-0.428,0.357,0.322,-0.585,0.13,0.191,-0.437,0.123,0.298,-0.333,0.095,0.337,-0.19,0.109,0.342,-0.086,0.141,0.337,-0.009,0.174,0.342,-0.563,-0.027,0.197,0.025,0.043,0.389,0.082,-0.05,0.519,0.154,-0.015,0.578,-0.41,-0.592,0.077,-0.673,-0.032,-0.031,-0.516,-0.487,0.024,-0.64,0.424,0.107,-0.042,-0.009,0.369,-0.553,-0.174,0.156,-0.556,0.388,0.251,0.02,-0.29,0.387,-0.297,-0.687,0.112,-0.19,-0.763,0.151,0.069,-0.872,0.232,0.134,0.131,0.469,-0.648,-0.196,-0.042,0.042,-0.592,0.3,-0.117,-0.385,0.329,-0.431,-0.217,0.263,0.119,0.211,0.417,0.053,0.349,0.321,-0.456,-0.39,0.148,0.135,0.343,0.398,-0.005,-0.67,0.266,0.087,0.019,0.463,0.11,-0.702,0.271,-0.18,-0.546,0.244,-0.07,-0.162,0.349,-0.1,-0.618,0.253,-0.247,-0.158,0.357,-0.141,-0.238,0.349,-0.318,-0.274,0.306,0.037,-0.017,0.419,-0.254,-0.606,0.189,-0.153,-0.685,0.204,-0.237,-0.46,0.26,-0.537,-0.297,0.113,-0.348,-0.473,0.209,-0.606,-0.348,-0.035,-0.202,-0.334,0.324,0.08,0.089,0.425,0.161,-0.094,0.596,-0.004,0.407,0.361,-0.126,0.449,0.401,-0.685,0.125,0.001,-0.287,0.172,0.326,-0.186,0.174,0.334,-0.094,0.194,0.326,0.025,0.24,0.312,0.15,0.061,0.513,0.095,0.262,0.359]},{"yaw":0.298,"pitch":-0.086,"frame":[0.265,0.925,0.437,0.042,0.924,0.478,-0.168,0.897,0.468,-0.382,0.836,0.401,-0.539,0.738,0.299,-0.655,0.612,0.185,-0.723,0.476,0.048,-0.758,0.306,-0.067,-0.759,0.143,-0.127,-0.747,-0.028,-0.148,-0.716,-0.209,-0.142,-0.651,-0.404,-0.107,-0.548,-0.562,-0.033,-0.426,-0.677,0.045,-0.278,-0.774,0.103,-0.155,-0.84,0.145,-0.025,-0.894,0.186,0.107,-0.925,0.194,0.252,-0.921,0.166,0.368,-0.893,0.106,0.442,-0.837,0.026,0.49,-0.768,-0.075,0.528,-0.691,-0.176,0.565,-0.585,-0.301,0.579,-0.469,-0.444,0.595,-0.321,-0.568,0.62,-0.143,-0.636,0.641,0.021,-0.664,0.657,0.177,-0.656,0.687,0.327,-0.6,0.723,0.483,-0.474,0.74,0.611,-0.312,0.733,0.73,-0.147,0.687,0.822,0.038,0.586,0.885,0.216,0.45,0.917,0.353,0.642,0.334,0.028,0.627,0.312,0.057,0.611,0.297,0.082,0.583,0.285,0.115,0.536,0.281,0.149,0.484,0.288,0.172,0.436,0.299,0.18,0.405,0.303,0.179,0.392,0.309,0.184,0.635,0.348,0.066,0.622,0.363,0.096,0.597,0.379,0.131,0.551,0.388,0.167,0.497,0.382,0.189,0.444,0.36,0.192,0.408,0.329,0.188,-0.282,0.323,0.367,-0.254,0.303,0.379,-0.222,0.29,0.389,-0.18,0.281,0.397,-0.123,0.278,0.396,-0.065,0.285,0.381,-0.014,0.294,0.359,0.022,0.299,0.337,0.04,0.302,0.33,-0.263,0.336,0.39,-0.239,0.35,0.406,-0.202,0.366,0.42,-0.147,0.375,0.419,-0.088,0.373,0.404,-0.027,0.352,0.374,0.019,0.322,0.35,0.746,0.473,0.06,0.723,0.512,0.158,0.665,0.524,0.247,0.568,0.509,0.328,0.421,0.457,0.393,0.759,0.513,-0.009,0.743,0.566,0.115,0.685,0.592,0.23,0.585,0.578,0.343,0.451,0.551,0.423,-0.405,0.449,0.454,-0.315,0.494,0.499,-0.197,0.512,0.518,-0.049,0.495,0.511,0.139,0.444,0.478,-0.463,0.484,0.414,-0.366,0.546,0.48,-0.227,0.578,0.516,-0.058,0.564,0.531,0.122,0.54,0.517,0.467,-0.426,0.139,0.45,-0.451,0.192,0.43,-0.475,0.251,0.397,-0.508,0.296,0.349,-0.529,0.34,0.289,-0.539,0.36,0.212,-0.535,0.381,0.139,-0.513,0.386,0.077,-0.48,0.374,0.031,-0.451,0.351,0,-0.425,0.333,0.033,-0.409,0.379,0.08,-0.391,0.416,0.143,-0.372,0.443,0.226,-0.356,0.453,0.302,-0.373,0.437,0.364,-0.359,0.409,0.41,-0.372,0.342,0.44,-0.39,0.275,0.457,-0.408,0.204,0.447,-0.424,0.175,0.419,-0.424,0.21,0.398,-0.424,0.255,0.369,-0.426,0.294,0.332,-0.428,0.332,0.286,-0.434,0.355,0.225,-0.433,0.372,0.161,-0.428,0.372,0.105,-0.427,0.364,0.061,-0.426,0.35,0.021,-0.424,0.337,0.062,-0.423,0.351,0.105,-0.423,0.366,0.161,-0.424,0.377,0.225,-0.431,0.378,0.29,-0.435,0.362,0.336,-0.431,0.338,0.373,-0.426,0.297,0.401,-0.425,0.257,0.421,-0.424,0.21,0.289,0.357,0.45,0.306,0.267,0.489,0.325,0.182,0.535,0.342,0.104,0.585,0.361,0.019,0.637,0.376,-0.081,0.656,0.371,-0.156,0.63,0.355,-0.194,0.594,0.335,-0.21,0.505,0.315,-0.218,0.454,0.443,-0.177,0.323,0.104,-0.182,0.414,0.226,-0.209,0.455,0.386,-0.21,0.416,0.464,-0.095,0.271,0.052,-0.102,0.398,0.291,0.44,0.461,0.291,0.535,0.482,0.274,-0.615,0.299,0.673,0.252,-0.014,0.458,-0.706,0.151,0.732,0.314,-0.371,0.711,0.309,-0.099,0.544,-0.047,0.22,0.432,0.128,0.283,0.481,-0.112,0.397,0.682,-0.024,0.068,0.737,0.65,0.001,0.58,0.738,0.286,0.752,0.558,-0.151,0.444,-0.146,0.484,0.343,-0.605,0.279,0.508,-0.31,0.249,0.481,0.089,0.233,0.571,0.046,0.178,0.685,0.712,0.144,0.448,0.74,0.391,0.403,0.17,0.324,0.744,0.168,-0.179,0.7,0.154,-0.006,0.653,0.121,0.083,0.555,0.126,0.156,0.477,0.153,0.202,0.425,0.182,0.248,0.356,0.251,0.438,0.744,0.021,-0.17,0.729,0.399,-0.026,0.435,0.052,0.305,0.389,0.216,0.277,0.461,-0.041,0.454,0.441,-0.005,0.535,0.612,-0.517,-0.179,0.716,0.018,-0.427,0.643,-0.414,-0.285,0.743,0.446,-0.281,0.475,0.004,0.261,0.72,-0.118,-0.193,0.282,0.737,0.466,0.566,-0.619,-0.086,0.519,-0.698,0.004,0.387,-0.839,0.193,0.397,0.138,0.43,0.691,-0.132,-0.418,0.407,-0.57,0.242,0.692,-0.167,-0.025,0.379,0.215,0.377,0.375,0.357,0.265,0.667,-0.328,-0.139,0.352,0.35,0.372,0.432,-0.636,0.196,0.431,0.027,0.407,0.278,-0.792,0.289,0.275,-0.699,0.292,0.36,-0.68,0.254,0.54,-0.5,0.09,0.488,-0.577,0.14,0.623,-0.123,0.158,0.555,-0.212,0.2,0.65,-0.23,0.077,0.572,-0.546,0.004,0.586,-0.417,0.064,0.694,-0.236,-0.214,0.666,-0.276,-0.388,0.587,-0.299,0.144,0.414,0.097,0.363,0.457,-0.083,0.554,0.432,0.421,0.27,0.538,0.464,0.254,0.73,0.166,-0.409,0.611,0.193,0.093,0.541,0.191,0.148,0.47,0.206,0.186,0.419,0.228,0.218,0.415,0.068,0.473,0.364,0.285,0.263,0.283,0.094,0.581,0.266,-0.19,0.516,-0.373,0.23,0.356,0.012,-0.75,0.293,-0.673,0.283,0.138,-0.479,0.279,0.319,-0.072,-0.065,0.421,0.31,-0.083,0.664,0.062,0.121,0.413,0.102,-0.116,0.519,-0.313,-0.058,0.413,0.299,0.013,0.636,0.15,-0.16,0.474,-0.444,0.647,0.404,-0.098,0.739,0.504,-0.556,0.546,0.307,0.202,-0.146,0.565,0.191,-0.614,0.319,0.005,-0.326,0.415,-0.015,0.081,0.41,-0.132,0.028,0.421,-0.297,0.714,0.466,0.024,-0.55,0.341,0.087,0.74,0.504,-0.463,0.178,0.337,-0.38,0.364,0.399,-0.558,0.131,0.288,-0.395,0.127,0.379,-0.284,0.099,0.408,-0.139,0.113,0.401,-0.035,0.145,0.386,0.042,0.177,0.384,-0.537,-0.027,0.294,0.081,0.046,0.429,0.149,-0.046,0.553,0.226,-0.01,0.606,-0.384,-0.598,0.164,-0.67,-0.033,0.081,-0.502,-0.494,0.121,-0.622,0.427,0.207,0.014,-0.007,0.415,-0.529,-0.175,0.252,-0.522,0.391,0.34,0.083,-0.286,0.43,-0.261,-0.691,0.188,-0.146,-0.767,0.218,0.126,-0.87,0.278,0.199,0.134,0.498,-0.646,-0.2,0.068,0.101,-0.59,0.344,-0.058,-0.381,0.387,-0.391,-0.217,0.345,0.179,0.213,0.447,0.107,0.351,0.356,-0.428,-0.393,0.236,0.194,0.345,0.426,0.05,-0.668,0.314,0.151,0.023,0.497,0.168,-0.699,0.311,-0.129,-0.546,0.307,-0.013,-0.159,0.398,-0.047,-0.617,0.309,-0.191,-0.155,0.42,-0.083,-0.235,0.404,-0.268,-0.273,0.377,0.095,-0.014,0.457,-0.21,-0.608,0.259,-0.104,-0.687,0.265,-0.185,-0.459,0.329,-0.516,-0.3,0.209,-0.307,-0.475,0.286,-0.602,-0.353,0.072,-0.147,-0.331,0.387,0.14,0.092,0.461,0.236,-0.088,0.625,0.053,0.41,0.399,-0.065,0.454,0.448,-0.68,0.125,0.112,-0.238,0.178,0.393,-0.135,0.18,0.392,-0.044,0.199,0.376,0.076,0.243,0.351,0.218,0.065,0.542,0.15,0.264,0.391]},{"yaw":0.343,"pitch":-0.075,"frame":[0.288,0.922,0.431,0.066,0.925,0.493,-0.145,0.9,0.491,-0.364,0.84,0.434,-0.528,0.741,0.342,-0.651,0.612,0.237,-0.724,0.474,0.107,-0.764,0.301,-0.002,-0.766,0.135,-0.058,-0.754,-0.036,-0.076,-0.723,-0.22,-0.068,-0.655,-0.416,-0.032,-0.547,-0.575,0.04,-0.415,-0.689,0.114,-0.262,-0.785,0.167,-0.134,-0.848,0.204,-0.001,-0.898,0.241,0.134,-0.925,0.243,0.28,-0.918,0.207,0.394,-0.889,0.135,0.464,-0.833,0.043,0.507,-0.763,-0.06,0.538,-0.688,-0.166,0.568,-0.584,-0.296,0.574,-0.469,-0.445,0.582,-0.323,-0.573,0.603,-0.146,-0.647,0.621,0.015,-0.681,0.634,0.165,-0.677,0.666,0.311,-0.626,0.708,0.465,-0.504,0.731,0.594,-0.345,0.73,0.714,-0.181,0.69,0.809,0.007,0.598,0.874,0.19,0.468,0.909,0.335,0.655,0.337,0.01,0.641,0.317,0.039,0.627,0.302,0.066,0.6,0.29,0.101,0.554,0.286,0.137,0.503,0.292,0.163,0.456,0.303,0.174,0.426,0.308,0.174,0.413,0.313,0.18,0.648,0.35,0.048,0.636,0.365,0.079,0.612,0.38,0.115,0.566,0.389,0.153,0.513,0.383,0.178,0.462,0.362,0.184,0.428,0.333,0.182,-0.258,0.332,0.41,-0.228,0.312,0.421,-0.196,0.3,0.429,-0.154,0.291,0.435,-0.097,0.288,0.432,-0.041,0.294,0.414,0.009,0.302,0.388,0.045,0.305,0.365,0.064,0.308,0.357,-0.237,0.344,0.431,-0.213,0.357,0.446,-0.175,0.372,0.457,-0.12,0.381,0.453,-0.061,0.378,0.434,-0.001,0.358,0.403,0.043,0.328,0.378,0.756,0.474,0.034,0.738,0.514,0.134,0.683,0.527,0.228,0.59,0.514,0.315,0.448,0.466,0.389,0.766,0.512,-0.037,0.755,0.567,0.089,0.702,0.594,0.208,0.607,0.582,0.327,0.478,0.558,0.415,-0.381,0.457,0.497,-0.286,0.504,0.537,-0.167,0.521,0.549,-0.018,0.505,0.535,0.169,0.453,0.498,-0.441,0.491,0.458,-0.339,0.555,0.518,-0.198,0.586,0.548,-0.026,0.573,0.554,0.154,0.548,0.535,0.502,-0.421,0.148,0.487,-0.445,0.203,0.47,-0.469,0.265,0.44,-0.503,0.313,0.394,-0.526,0.359,0.335,-0.538,0.387,0.258,-0.533,0.415,0.182,-0.511,0.424,0.117,-0.478,0.415,0.067,-0.449,0.396,0.034,-0.424,0.38,0.071,-0.409,0.424,0.121,-0.39,0.456,0.187,-0.37,0.478,0.273,-0.352,0.482,0.349,-0.367,0.459,0.409,-0.352,0.426,0.453,-0.365,0.355,0.48,-0.384,0.286,0.495,-0.402,0.213,0.482,-0.419,0.186,0.457,-0.42,0.223,0.438,-0.42,0.27,0.411,-0.423,0.311,0.376,-0.425,0.351,0.332,-0.432,0.382,0.269,-0.431,0.404,0.202,-0.426,0.408,0.143,-0.425,0.402,0.097,-0.425,0.392,0.056,-0.424,0.381,0.098,-0.423,0.393,0.143,-0.423,0.405,0.203,-0.424,0.412,0.27,-0.429,0.41,0.335,-0.432,0.387,0.379,-0.428,0.356,0.414,-0.422,0.314,0.44,-0.42,0.272,0.459,-0.419,0.223,0.316,0.363,0.455,0.337,0.276,0.496,0.359,0.194,0.543,0.379,0.118,0.594,0.402,0.036,0.647,0.42,-0.062,0.667,0.415,-0.136,0.644,0.397,-0.176,0.609,0.374,-0.195,0.524,0.352,-0.205,0.474,0.473,-0.168,0.333,0.14,-0.176,0.445,0.265,-0.199,0.479,0.421,-0.197,0.431,0.492,-0.086,0.276,0.084,-0.097,0.431,0.319,0.447,0.464,0.32,0.542,0.483,0.311,-0.611,0.329,0.682,0.254,-0.032,0.486,-0.7,0.168,0.722,0.305,-0.399,0.714,0.31,-0.122,0.569,-0.039,0.219,0.457,0.135,0.284,0.514,-0.1,0.402,0.7,-0.018,0.056,0.743,0.641,-0.029,0.598,0.735,0.265,0.752,0.547,-0.182,0.481,-0.132,0.49,0.378,-0.6,0.301,0.54,-0.3,0.256,0.505,0.095,0.231,0.592,0.052,0.172,0.696,0.706,0.117,0.471,0.74,0.377,0.429,0.177,0.326,0.746,0.168,-0.201,0.711,0.157,-0.024,0.668,0.126,0.069,0.575,0.132,0.148,0.498,0.16,0.199,0.448,0.188,0.248,0.386,0.26,0.441,0.751,0.023,-0.19,0.735,0.4,-0.051,0.463,0.06,0.307,0.414,0.222,0.278,0.495,-0.027,0.458,0.478,0.01,0.539,0.621,-0.514,-0.177,0.711,0.016,-0.447,0.646,-0.413,-0.289,0.738,0.435,-0.31,0.501,0.011,0.262,0.727,-0.116,-0.207,0.308,0.74,0.463,0.581,-0.614,-0.077,0.539,-0.693,0.018,0.416,-0.833,0.217,0.43,0.149,0.434,0.688,-0.134,-0.433,0.441,-0.564,0.259,0.707,-0.162,-0.035,0.408,0.223,0.38,0.397,0.362,0.264,0.677,-0.324,-0.145,0.377,0.357,0.374,0.461,-0.629,0.213,0.462,0.038,0.411,0.312,-0.787,0.324,0.31,-0.694,0.325,0.393,-0.674,0.277,0.566,-0.495,0.099,0.515,-0.571,0.153,0.646,-0.115,0.154,0.582,-0.203,0.202,0.67,-0.224,0.073,0.593,-0.541,0.012,0.611,-0.41,0.067,0.7,-0.234,-0.224,0.664,-0.276,-0.398,0.613,-0.291,0.145,0.444,0.106,0.366,0.497,-0.067,0.56,0.454,0.426,0.264,0.558,0.466,0.242,0.722,0.162,-0.434,0.626,0.198,0.079,0.559,0.196,0.139,0.49,0.211,0.18,0.44,0.233,0.216,0.45,0.081,0.477,0.387,0.291,0.265,0.32,0.107,0.598,0.308,-0.177,0.537,-0.351,0.235,0.404,0.042,-0.749,0.341,-0.665,0.283,0.198,-0.459,0.283,0.37,-0.04,-0.06,0.46,0.354,-0.065,0.681,0.09,0.128,0.441,0.14,-0.107,0.549,-0.285,-0.056,0.463,0.34,0.03,0.654,0.189,-0.15,0.502,-0.425,0.652,0.445,-0.071,0.745,0.527,-0.543,0.549,0.354,0.244,-0.133,0.59,0.226,-0.61,0.355,0.041,-0.321,0.456,0.013,0.086,0.442,-0.103,0.033,0.46,-0.273,0.719,0.499,0.057,-0.547,0.386,0.115,0.745,0.52,-0.441,0.181,0.389,-0.357,0.371,0.444,-0.542,0.131,0.346,-0.371,0.131,0.429,-0.258,0.104,0.453,-0.113,0.119,0.439,-0.009,0.152,0.419,0.068,0.184,0.412,-0.518,-0.028,0.355,0.112,0.053,0.458,0.186,-0.034,0.579,0.265,0.004,0.628,-0.366,-0.606,0.229,-0.663,-0.037,0.149,-0.491,-0.504,0.19,-0.613,0.428,0.261,0.044,-0.001,0.448,-0.512,-0.177,0.316,-0.504,0.395,0.389,0.12,-0.279,0.466,-0.239,-0.698,0.249,-0.122,-0.773,0.275,0.157,-0.868,0.324,0.232,0.145,0.519,-0.641,-0.206,0.138,0.135,-0.586,0.385,-0.023,-0.378,0.433,-0.367,-0.217,0.402,0.209,0.221,0.468,0.132,0.358,0.377,-0.408,-0.397,0.299,0.221,0.352,0.444,0.082,-0.666,0.359,0.185,0.033,0.521,0.202,-0.694,0.351,-0.099,-0.546,0.359,0.019,-0.154,0.435,-0.016,-0.617,0.357,-0.159,-0.151,0.465,-0.05,-0.23,0.447,-0.238,-0.271,0.429,0.128,-0.006,0.486,-0.184,-0.612,0.316,-0.076,-0.69,0.318,-0.156,-0.459,0.383,-0.5,-0.304,0.274,-0.282,-0.479,0.344,-0.596,-0.362,0.143,-0.113,-0.328,0.435,0.171,0.101,0.485,0.279,-0.072,0.647,0.081,0.417,0.422,-0.035,0.462,0.475,-0.674,0.123,0.176,-0.213,0.185,0.435,-0.11,0.188,0.429,-0.02,0.206,0.408,0.101,0.249,0.376,0.254,0.077,0.564,0.177,0.272,0.411]},{"yaw":0.392,"pitch":-0.062,"frame":[0.325,0.919,0.439,0.104,0.925,0.507,-0.11,0.902,0.52,-0.338,0.844,0.474,-0.514,0.745,0.391,-0.65,0.615,0.293,-0.732,0.475,0.168,-0.778,0.301,0.063,-0.779,0.135,0.009,-0.764,-0.036,-0.008,-0.729,-0.22,-0.001,-0.655,-0.417,0.033,-0.539,-0.577,0.099,-0.401,-0.692,0.166,-0.243,-0.788,0.211,-0.111,-0.851,0.242,0.027,-0.899,0.273,0.167,-0.925,0.268,0.316,-0.917,0.226,0.429,-0.885,0.151,0.495,-0.827,0.054,0.53,-0.756,-0.055,0.553,-0.679,-0.165,0.573,-0.574,-0.299,0.571,-0.459,-0.451,0.576,-0.315,-0.582,0.595,-0.142,-0.658,0.611,0.016,-0.694,0.624,0.164,-0.694,0.657,0.31,-0.644,0.704,0.463,-0.524,0.733,0.591,-0.365,0.738,0.71,-0.2,0.703,0.805,-0.008,0.619,0.87,0.181,0.497,0.905,0.335,0.672,0.345,-0.002,0.661,0.326,0.028,0.647,0.312,0.056,0.621,0.3,0.093,0.575,0.295,0.131,0.523,0.301,0.16,0.477,0.311,0.173,0.448,0.316,0.175,0.436,0.322,0.182,0.667,0.359,0.036,0.655,0.373,0.068,0.631,0.388,0.105,0.586,0.396,0.146,0.532,0.39,0.174,0.483,0.369,0.182,0.451,0.341,0.182,-0.224,0.345,0.451,-0.193,0.324,0.46,-0.16,0.311,0.467,-0.118,0.302,0.471,-0.059,0.298,0.465,-0.001,0.303,0.444,0.049,0.311,0.416,0.085,0.315,0.392,0.103,0.317,0.383,-0.201,0.358,0.47,-0.176,0.372,0.483,-0.136,0.388,0.492,-0.08,0.396,0.485,-0.02,0.392,0.463,0.039,0.37,0.43,0.083,0.338,0.404,0.771,0.479,0.018,0.758,0.519,0.12,0.708,0.533,0.218,0.621,0.522,0.311,0.485,0.477,0.392,0.779,0.513,-0.055,0.773,0.57,0.074,0.726,0.599,0.197,0.638,0.589,0.323,0.516,0.567,0.416,-0.343,0.467,0.541,-0.242,0.514,0.575,-0.119,0.532,0.581,0.032,0.516,0.559,0.217,0.466,0.514,-0.409,0.499,0.504,-0.297,0.564,0.559,-0.15,0.596,0.581,0.024,0.583,0.578,0.203,0.559,0.55,0.527,-0.402,0.146,0.516,-0.428,0.203,0.502,-0.457,0.268,0.476,-0.494,0.319,0.431,-0.519,0.373,0.372,-0.533,0.404,0.292,-0.528,0.434,0.211,-0.506,0.446,0.142,-0.471,0.44,0.089,-0.44,0.424,0.054,-0.413,0.413,0.094,-0.396,0.456,0.15,-0.374,0.486,0.222,-0.352,0.505,0.313,-0.331,0.504,0.389,-0.346,0.477,0.447,-0.329,0.439,0.489,-0.343,0.364,0.514,-0.362,0.29,0.526,-0.382,0.213,0.507,-0.401,0.186,0.485,-0.401,0.225,0.467,-0.403,0.276,0.443,-0.405,0.322,0.411,-0.409,0.366,0.368,-0.416,0.401,0.304,-0.417,0.426,0.234,-0.413,0.432,0.172,-0.413,0.428,0.121,-0.414,0.42,0.077,-0.413,0.411,0.121,-0.411,0.422,0.171,-0.408,0.433,0.234,-0.408,0.438,0.305,-0.412,0.433,0.372,-0.413,0.407,0.415,-0.409,0.371,0.447,-0.402,0.326,0.471,-0.401,0.28,0.487,-0.4,0.227,0.356,0.376,0.465,0.38,0.292,0.505,0.406,0.213,0.552,0.429,0.138,0.603,0.455,0.058,0.657,0.477,-0.039,0.678,0.472,-0.113,0.655,0.453,-0.154,0.622,0.424,-0.174,0.538,0.397,-0.184,0.49,0.509,-0.147,0.341,0.183,-0.159,0.469,0.311,-0.18,0.499,0.463,-0.177,0.442,0.526,-0.067,0.281,0.126,-0.081,0.457,0.361,0.459,0.473,0.363,0.551,0.491,0.349,-0.606,0.345,0.693,0.261,-0.045,0.517,-0.69,0.174,0.719,0.306,-0.419,0.719,0.315,-0.138,0.599,-0.023,0.217,0.489,0.15,0.287,0.553,-0.08,0.406,0.718,-0.004,0.046,0.755,0.64,-0.046,0.624,0.735,0.258,0.76,0.546,-0.202,0.528,-0.112,0.497,0.418,-0.594,0.316,0.574,-0.28,0.258,0.534,0.11,0.232,0.618,0.066,0.168,0.715,0.706,0.104,0.505,0.743,0.377,0.465,0.192,0.33,0.75,0.173,-0.219,0.722,0.167,-0.038,0.686,0.138,0.06,0.598,0.145,0.143,0.525,0.173,0.198,0.477,0.202,0.25,0.427,0.276,0.448,0.758,0.033,-0.207,0.745,0.404,-0.069,0.498,0.077,0.311,0.445,0.237,0.283,0.537,-0.007,0.462,0.526,0.031,0.545,0.629,-0.502,-0.185,0.711,0.021,-0.464,0.648,-0.4,-0.3,0.74,0.435,-0.331,0.533,0.028,0.264,0.734,-0.104,-0.221,0.349,0.745,0.47,0.596,-0.603,-0.08,0.562,-0.684,0.02,0.454,-0.827,0.233,0.471,0.166,0.44,0.687,-0.126,-0.447,0.478,-0.556,0.264,0.719,-0.148,-0.046,0.445,0.239,0.386,0.426,0.373,0.269,0.685,-0.311,-0.155,0.413,0.371,0.38,0.494,-0.619,0.218,0.503,0.057,0.416,0.352,-0.781,0.341,0.349,-0.688,0.342,0.431,-0.666,0.292,0.59,-0.48,0.096,0.543,-0.559,0.153,0.669,-0.099,0.148,0.611,-0.185,0.201,0.688,-0.208,0.065,0.612,-0.528,0.008,0.632,-0.395,0.061,0.705,-0.222,-0.237,0.664,-0.266,-0.41,0.637,-0.273,0.14,0.482,0.123,0.371,0.548,-0.044,0.566,0.483,0.436,0.266,0.584,0.474,0.238,0.721,0.165,-0.454,0.644,0.208,0.071,0.581,0.208,0.134,0.513,0.223,0.179,0.466,0.245,0.218,0.494,0.1,0.483,0.416,0.303,0.271,0.371,0.127,0.612,0.357,-0.157,0.554,-0.321,0.244,0.448,0.077,-0.744,0.369,-0.661,0.286,0.257,-0.434,0.29,0.418,0,-0.046,0.492,0.413,-0.042,0.694,0.131,0.142,0.465,0.188,-0.089,0.574,-0.249,-0.044,0.507,0.394,0.051,0.667,0.235,-0.133,0.525,-0.398,0.658,0.489,-0.029,0.752,0.552,-0.526,0.554,0.405,0.296,-0.113,0.611,0.262,-0.605,0.373,0.078,-0.305,0.486,0.053,0.1,0.471,-0.063,0.046,0.495,-0.237,0.727,0.535,0.085,-0.541,0.413,0.158,0.752,0.534,-0.414,0.189,0.437,-0.326,0.381,0.487,-0.521,0.138,0.401,-0.34,0.141,0.476,-0.223,0.116,0.494,-0.074,0.132,0.473,0.03,0.165,0.448,0.107,0.197,0.436,-0.494,-0.02,0.411,0.154,0.068,0.482,0.237,-0.015,0.6,0.319,0.024,0.646,-0.345,-0.606,0.277,-0.656,-0.034,0.211,-0.473,-0.505,0.245,-0.604,0.433,0.316,0.085,0.014,0.476,-0.488,-0.171,0.372,-0.481,0.401,0.439,0.159,-0.262,0.493,-0.216,-0.698,0.29,-0.094,-0.773,0.311,0.195,-0.864,0.348,0.279,0.162,0.536,-0.631,-0.204,0.201,0.166,-0.581,0.408,0.008,-0.364,0.468,-0.336,-0.208,0.451,0.252,0.237,0.485,0.173,0.37,0.396,-0.383,-0.393,0.35,0.263,0.366,0.459,0.116,-0.66,0.383,0.233,0.051,0.542,0.24,-0.689,0.371,-0.072,-0.537,0.394,0.059,-0.139,0.464,0.013,-0.609,0.386,-0.12,-0.138,0.503,-0.01,-0.215,0.48,-0.203,-0.259,0.472,0.172,0.011,0.509,-0.157,-0.606,0.355,-0.045,-0.685,0.351,-0.128,-0.447,0.423,-0.479,-0.3,0.33,-0.255,-0.472,0.389,-0.584,-0.362,0.204,-0.079,-0.315,0.472,0.216,0.117,0.506,0.336,-0.051,0.665,0.126,0.429,0.443,0.011,0.473,0.502,-0.668,0.126,0.238,-0.178,0.196,0.473,-0.073,0.199,0.463,0.018,0.218,0.437,0.14,0.261,0.399,0.304,0.096,0.581,0.218,0.286,0.429]},{"yaw":0.445,"pitch":-0.05,"frame":[0.363,0.919,0.445,0.146,0.925,0.527,-0.07,0.904,0.556,-0.306,0.847,0.526,-0.491,0.748,0.457,-0.638,0.618,0.371,-0.73,0.477,0.256,-0.782,0.302,0.16,-0.786,0.136,0.11,-0.774,-0.035,0.094,-0.74,-0.218,0.1,-0.662,-0.416,0.13,-0.536,-0.578,0.188,-0.388,-0.694,0.244,-0.219,-0.789,0.279,-0.079,-0.852,0.3,0.067,-0.9,0.322,0.213,-0.925,0.306,0.363,-0.914,0.254,0.473,-0.878,0.169,0.531,-0.817,0.063,0.556,-0.744,-0.049,0.568,-0.665,-0.161,0.575,-0.556,-0.297,0.564,-0.439,-0.451,0.564,-0.293,-0.584,0.582,-0.12,-0.663,0.599,0.033,-0.703,0.613,0.176,-0.705,0.647,0.319,-0.659,0.695,0.472,-0.544,0.727,0.599,-0.389,0.738,0.717,-0.224,0.711,0.81,-0.031,0.637,0.873,0.164,0.526,0.906,0.328,0.689,0.366,-0.018,0.679,0.345,0.014,0.667,0.329,0.043,0.641,0.316,0.081,0.595,0.31,0.122,0.544,0.316,0.155,0.498,0.327,0.172,0.469,0.334,0.176,0.458,0.341,0.184,0.685,0.382,0.021,0.674,0.397,0.053,0.651,0.413,0.092,0.606,0.42,0.135,0.552,0.411,0.166,0.504,0.389,0.179,0.472,0.36,0.182,-0.188,0.361,0.506,-0.156,0.338,0.513,-0.12,0.324,0.518,-0.076,0.315,0.519,-0.015,0.311,0.508,0.042,0.317,0.483,0.092,0.326,0.453,0.127,0.331,0.427,0.145,0.334,0.417,-0.163,0.376,0.522,-0.136,0.391,0.532,-0.096,0.406,0.538,-0.039,0.415,0.526,0.02,0.411,0.501,0.08,0.388,0.466,0.125,0.356,0.438,0.781,0.498,-0.005,0.775,0.539,0.1,0.73,0.554,0.202,0.651,0.542,0.302,0.523,0.494,0.393,0.785,0.529,-0.081,0.786,0.587,0.052,0.747,0.615,0.179,0.668,0.604,0.312,0.555,0.582,0.414,-0.303,0.482,0.598,-0.197,0.531,0.624,-0.071,0.551,0.622,0.08,0.534,0.59,0.263,0.483,0.534,-0.372,0.511,0.566,-0.255,0.579,0.611,-0.104,0.613,0.623,0.073,0.599,0.609,0.251,0.574,0.568,0.558,-0.384,0.149,0.551,-0.411,0.207,0.542,-0.441,0.272,0.522,-0.479,0.325,0.483,-0.507,0.385,0.428,-0.522,0.424,0.349,-0.517,0.458,0.268,-0.492,0.477,0.199,-0.456,0.476,0.146,-0.426,0.467,0.11,-0.398,0.462,0.149,-0.377,0.501,0.206,-0.353,0.525,0.278,-0.327,0.539,0.37,-0.303,0.532,0.444,-0.316,0.5,0.499,-0.3,0.455,0.538,-0.315,0.374,0.558,-0.338,0.296,0.563,-0.361,0.216,0.54,-0.381,0.191,0.52,-0.382,0.23,0.507,-0.382,0.284,0.487,-0.385,0.333,0.459,-0.388,0.384,0.422,-0.395,0.424,0.358,-0.396,0.453,0.289,-0.392,0.464,0.226,-0.394,0.464,0.176,-0.396,0.46,0.133,-0.396,0.456,0.176,-0.393,0.464,0.225,-0.389,0.47,0.288,-0.387,0.472,0.359,-0.39,0.462,0.426,-0.391,0.431,0.464,-0.386,0.391,0.492,-0.381,0.34,0.511,-0.38,0.29,0.524,-0.379,0.234,0.4,0.396,0.474,0.427,0.313,0.514,0.457,0.234,0.56,0.484,0.161,0.611,0.514,0.081,0.663,0.541,-0.014,0.685,0.537,-0.088,0.664,0.514,-0.129,0.633,0.482,-0.15,0.553,0.449,-0.16,0.508,0.555,-0.123,0.349,0.231,-0.138,0.498,0.364,-0.157,0.523,0.513,-0.152,0.454,0.566,-0.043,0.286,0.172,-0.061,0.491,0.404,0.476,0.482,0.407,0.567,0.499,0.4,-0.599,0.364,0.699,0.282,-0.061,0.554,-0.675,0.179,0.714,0.317,-0.44,0.718,0.333,-0.157,0.63,0.001,0.214,0.525,0.172,0.289,0.602,-0.054,0.408,0.731,0.02,0.031,0.763,0.65,-0.07,0.649,0.744,0.244,0.761,0.555,-0.227,0.582,-0.088,0.5,0.466,-0.586,0.328,0.613,-0.255,0.26,0.565,0.133,0.23,0.643,0.09,0.161,0.73,0.715,0.084,0.539,0.75,0.372,0.502,0.214,0.334,0.747,0.193,-0.241,0.726,0.189,-0.055,0.697,0.161,0.046,0.618,0.167,0.136,0.549,0.194,0.197,0.507,0.223,0.253,0.471,0.297,0.454,0.757,0.056,-0.227,0.749,0.42,-0.091,0.538,0.101,0.314,0.479,0.257,0.288,0.587,0.018,0.464,0.578,0.056,0.546,0.636,-0.483,-0.188,0.702,0.041,-0.48,0.646,-0.379,-0.306,0.736,0.444,-0.354,0.569,0.052,0.265,0.733,-0.08,-0.237,0.391,0.753,0.477,0.613,-0.586,-0.079,0.588,-0.669,0.024,0.499,-0.817,0.246,0.516,0.189,0.443,0.679,-0.103,-0.459,0.521,-0.545,0.269,0.726,-0.122,-0.06,0.486,0.26,0.391,0.455,0.392,0.275,0.689,-0.288,-0.164,0.452,0.391,0.386,0.531,-0.605,0.223,0.549,0.081,0.42,0.403,-0.771,0.363,0.4,-0.678,0.362,0.476,-0.654,0.305,0.617,-0.461,0.096,0.575,-0.542,0.156,0.691,-0.074,0.14,0.642,-0.161,0.198,0.703,-0.183,0.056,0.633,-0.51,0.007,0.655,-0.373,0.057,0.704,-0.198,-0.249,0.657,-0.243,-0.419,0.663,-0.249,0.136,0.525,0.146,0.374,0.604,-0.019,0.568,0.51,0.455,0.266,0.609,0.494,0.231,0.713,0.179,-0.473,0.659,0.229,0.059,0.6,0.227,0.126,0.536,0.242,0.177,0.492,0.265,0.221,0.543,0.124,0.485,0.446,0.323,0.277,0.427,0.149,0.625,0.415,-0.134,0.575,-0.285,0.258,0.508,0.124,-0.737,0.409,-0.648,0.29,0.343,-0.403,0.301,0.485,0.048,-0.028,0.532,0.477,-0.019,0.705,0.176,0.16,0.495,0.241,-0.068,0.603,-0.203,-0.03,0.566,0.455,0.074,0.679,0.286,-0.111,0.552,-0.364,0.667,0.547,0.016,0.761,0.586,-0.501,0.561,0.474,0.355,-0.092,0.636,0.312,-0.598,0.396,0.127,-0.287,0.527,0.099,0.118,0.507,-0.015,0.063,0.54,-0.197,0.736,0.582,0.132,-0.532,0.453,0.204,0.76,0.553,-0.38,0.201,0.504,-0.289,0.396,0.545,-0.492,0.147,0.476,-0.301,0.154,0.538,-0.179,0.131,0.548,-0.03,0.148,0.518,0.073,0.182,0.485,0.15,0.216,0.467,-0.463,-0.01,0.488,0.201,0.088,0.512,0.293,0.007,0.626,0.378,0.047,0.667,-0.321,-0.604,0.349,-0.645,-0.028,0.303,-0.456,-0.502,0.326,-0.587,0.437,0.395,0.132,0.033,0.51,-0.46,-0.161,0.45,-0.45,0.41,0.507,0.21,-0.242,0.527,-0.184,-0.695,0.353,-0.057,-0.77,0.364,0.245,-0.859,0.382,0.33,0.182,0.558,-0.623,-0.199,0.292,0.214,-0.573,0.44,0.057,-0.348,0.516,-0.297,-0.196,0.518,0.299,0.256,0.507,0.215,0.388,0.422,-0.353,-0.386,0.423,0.306,0.385,0.477,0.163,-0.651,0.419,0.284,0.072,0.567,0.29,-0.679,0.397,-0.029,-0.527,0.445,0.106,-0.121,0.502,0.057,-0.6,0.43,-0.071,-0.122,0.552,0.038,-0.199,0.524,-0.158,-0.246,0.529,0.221,0.031,0.538,-0.119,-0.599,0.413,-0.003,-0.678,0.399,-0.085,-0.437,0.48,-0.455,-0.293,0.409,-0.22,-0.464,0.452,-0.574,-0.358,0.293,-0.031,-0.3,0.523,0.265,0.137,0.532,0.398,-0.028,0.687,0.169,0.447,0.472,0.056,0.491,0.536,-0.656,0.131,0.328,-0.136,0.21,0.523,-0.031,0.214,0.507,0.061,0.235,0.475,0.182,0.28,0.428,0.359,0.118,0.603,0.261,0.305,0.452]},{"yaw":0.497,"pitch":-0.048,"frame":[0.387,0.921,0.468,0.17,0.925,0.561,-0.05,0.902,0.602,-0.292,0.844,0.579,-0.485,0.746,0.516,-0.64,0.616,0.432,-0.738,0.475,0.317,-0.795,0.298,0.22,-0.8,0.131,0.167,-0.786,-0.041,0.146,-0.75,-0.224,0.146,-0.667,-0.422,0.17,-0.533,-0.583,0.221,-0.377,-0.699,0.271,-0.2,-0.795,0.299,-0.053,-0.857,0.315,0.101,-0.902,0.332,0.253,-0.925,0.315,0.409,-0.91,0.257,0.516,-0.871,0.164,0.569,-0.806,0.054,0.585,-0.731,-0.062,0.587,-0.649,-0.177,0.583,-0.537,-0.316,0.56,-0.417,-0.471,0.553,-0.268,-0.604,0.569,-0.096,-0.682,0.584,0.057,-0.72,0.598,0.199,-0.72,0.634,0.341,-0.672,0.684,0.487,-0.553,0.719,0.608,-0.395,0.735,0.723,-0.226,0.716,0.816,-0.026,0.65,0.878,0.176,0.545,0.909,0.347,0.695,0.379,-0.02,0.687,0.357,0.012,0.676,0.341,0.042,0.654,0.327,0.082,0.61,0.32,0.125,0.561,0.325,0.161,0.516,0.337,0.179,0.49,0.345,0.185,0.479,0.352,0.194,0.693,0.395,0.02,0.683,0.41,0.053,0.663,0.425,0.093,0.621,0.432,0.139,0.57,0.423,0.173,0.524,0.401,0.186,0.495,0.372,0.191,-0.167,0.359,0.55,-0.134,0.336,0.556,-0.097,0.322,0.56,-0.052,0.313,0.558,0.007,0.31,0.546,0.063,0.318,0.518,0.111,0.329,0.486,0.145,0.335,0.459,0.163,0.339,0.448,-0.142,0.376,0.565,-0.113,0.392,0.575,-0.071,0.409,0.579,-0.015,0.419,0.565,0.042,0.416,0.537,0.1,0.393,0.5,0.143,0.361,0.471,0.791,0.509,-0.009,0.791,0.549,0.1,0.752,0.564,0.207,0.678,0.554,0.312,0.555,0.509,0.408,0.791,0.541,-0.086,0.8,0.597,0.052,0.768,0.624,0.184,0.695,0.616,0.323,0.588,0.595,0.43,-0.285,0.481,0.647,-0.177,0.531,0.671,-0.046,0.553,0.664,0.108,0.539,0.625,0.293,0.493,0.556,-0.358,0.511,0.618,-0.236,0.58,0.661,-0.08,0.615,0.667,0.101,0.605,0.645,0.282,0.584,0.592,0.582,-0.384,0.138,0.58,-0.412,0.198,0.578,-0.442,0.266,0.565,-0.481,0.322,0.531,-0.511,0.386,0.478,-0.527,0.431,0.395,-0.522,0.472,0.309,-0.496,0.493,0.234,-0.46,0.493,0.177,-0.429,0.487,0.138,-0.401,0.485,0.182,-0.382,0.523,0.246,-0.36,0.545,0.323,-0.337,0.557,0.419,-0.315,0.548,0.495,-0.327,0.512,0.548,-0.31,0.46,0.58,-0.322,0.375,0.593,-0.342,0.293,0.592,-0.362,0.209,0.565,-0.382,0.183,0.55,-0.386,0.224,0.541,-0.388,0.282,0.527,-0.392,0.334,0.503,-0.397,0.388,0.469,-0.405,0.436,0.402,-0.406,0.469,0.328,-0.401,0.481,0.261,-0.401,0.482,0.206,-0.402,0.48,0.16,-0.4,0.477,0.206,-0.399,0.483,0.26,-0.396,0.488,0.327,-0.395,0.488,0.402,-0.399,0.478,0.473,-0.399,0.444,0.508,-0.394,0.396,0.532,-0.387,0.341,0.545,-0.384,0.288,0.554,-0.383,0.228,0.432,0.404,0.491,0.465,0.319,0.531,0.5,0.239,0.577,0.531,0.166,0.626,0.568,0.086,0.677,0.599,-0.009,0.699,0.596,-0.082,0.675,0.572,-0.123,0.645,0.535,-0.143,0.563,0.499,-0.153,0.519,0.6,-0.11,0.354,0.267,-0.134,0.518,0.408,-0.152,0.54,0.563,-0.142,0.462,0.608,-0.029,0.29,0.206,-0.057,0.515,0.436,0.487,0.499,0.439,0.578,0.518,0.445,-0.601,0.369,0.703,0.295,-0.067,0.59,-0.666,0.169,0.706,0.336,-0.453,0.718,0.347,-0.165,0.661,0.014,0.213,0.555,0.183,0.296,0.65,-0.042,0.412,0.748,0.037,0.02,0.769,0.658,-0.071,0.668,0.748,0.255,0.761,0.568,-0.232,0.635,-0.079,0.508,0.511,-0.586,0.328,0.651,-0.247,0.256,0.593,0.145,0.233,0.668,0.104,0.159,0.742,0.722,0.089,0.564,0.753,0.389,0.534,0.224,0.344,0.747,0.212,-0.254,0.73,0.205,-0.065,0.71,0.176,0.04,0.636,0.18,0.136,0.571,0.207,0.201,0.531,0.235,0.261,0.507,0.305,0.469,0.759,0.077,-0.243,0.753,0.434,-0.097,0.574,0.112,0.32,0.505,0.269,0.298,0.635,0.029,0.471,0.628,0.064,0.556,0.646,-0.465,-0.208,0.695,0.063,-0.498,0.647,-0.357,-0.328,0.732,0.461,-0.363,0.604,0.065,0.268,0.734,-0.059,-0.256,0.42,0.756,0.497,0.633,-0.571,-0.097,0.616,-0.657,0.01,0.544,-0.809,0.24,0.556,0.197,0.456,0.672,-0.079,-0.479,0.562,-0.542,0.262,0.736,-0.104,-0.076,0.519,0.268,0.403,0.48,0.403,0.288,0.695,-0.269,-0.184,0.483,0.402,0.401,0.568,-0.599,0.215,0.591,0.091,0.429,0.45,-0.767,0.365,0.445,-0.676,0.366,0.519,-0.65,0.301,0.643,-0.45,0.082,0.606,-0.533,0.144,0.716,-0.06,0.132,0.675,-0.148,0.193,0.722,-0.168,0.043,0.656,-0.496,-0.009,0.678,-0.359,0.042,0.704,-0.176,-0.269,0.651,-0.22,-0.441,0.689,-0.237,0.125,0.561,0.155,0.383,0.659,-0.01,0.577,0.536,0.468,0.278,0.632,0.505,0.239,0.706,0.2,-0.49,0.671,0.242,0.057,0.616,0.239,0.127,0.555,0.254,0.182,0.513,0.277,0.229,0.587,0.132,0.496,0.47,0.334,0.289,0.474,0.153,0.641,0.466,-0.129,0.591,-0.267,0.255,0.553,0.161,-0.739,0.422,-0.646,0.287,0.4,-0.389,0.298,0.534,0.08,-0.027,0.561,0.534,-0.014,0.72,0.208,0.164,0.521,0.283,-0.065,0.625,-0.177,-0.031,0.604,0.507,0.078,0.695,0.328,-0.107,0.571,-0.35,0.667,0.601,0.042,0.763,0.627,-0.494,0.56,0.531,0.405,-0.088,0.654,0.352,-0.601,0.408,0.161,-0.288,0.55,0.129,0.121,0.536,0.014,0.064,0.572,-0.176,0.737,0.63,0.162,-0.534,0.47,0.232,0.762,0.582,-0.362,0.197,0.551,-0.273,0.394,0.592,-0.477,0.144,0.526,-0.279,0.151,0.582,-0.154,0.13,0.588,-0.004,0.15,0.552,0.1,0.186,0.516,0.178,0.221,0.495,-0.447,-0.014,0.536,0.236,0.092,0.537,0.337,0.01,0.646,0.427,0.05,0.685,-0.303,-0.61,0.377,-0.641,-0.034,0.354,-0.444,-0.508,0.36,-0.583,0.435,0.452,0.164,0.036,0.537,-0.444,-0.166,0.494,-0.439,0.408,0.56,0.247,-0.242,0.547,-0.161,-0.701,0.374,-0.029,-0.774,0.38,0.287,-0.858,0.392,0.37,0.186,0.576,-0.619,-0.205,0.338,0.249,-0.577,0.455,0.088,-0.35,0.541,-0.275,-0.199,0.555,0.334,0.261,0.528,0.238,0.394,0.449,-0.335,-0.391,0.458,0.336,0.393,0.496,0.198,-0.653,0.432,0.325,0.075,0.589,0.331,-0.68,0.409,-0.002,-0.531,0.468,0.138,-0.119,0.527,0.087,-0.603,0.447,-0.04,-0.124,0.584,0.07,-0.2,0.551,-0.131,-0.249,0.562,0.258,0.035,0.561,-0.094,-0.604,0.435,0.026,-0.682,0.416,-0.06,-0.439,0.508,-0.44,-0.298,0.448,-0.197,-0.47,0.482,-0.568,-0.364,0.334,-0.002,-0.301,0.551,0.302,0.141,0.555,0.452,-0.024,0.704,0.192,0.453,0.502,0.079,0.495,0.571,-0.652,0.127,0.384,-0.113,0.209,0.563,-0.007,0.215,0.542,0.085,0.237,0.507,0.205,0.285,0.456,0.403,0.121,0.622,0.29,0.311,0.476]},{"yaw":0.544,"pitch":-0.032,"frame":[0.406,0.921,0.446,0.189,0.925,0.55,-0.03,0.901,0.608,-0.277,0.839,0.606,-0.475,0.739,0.551,-0.637,0.606,0.476,-0.742,0.463,0.374,-0.804,0.285,0.289,-0.811,0.116,0.245,-0.795,-0.057,0.232,-0.753,-0.243,0.238,-0.66,-0.441,0.266,-0.515,-0.6,0.316,-0.349,-0.713,0.361,-0.165,-0.806,0.384,-0.013,-0.865,0.395,0.145,-0.907,0.407,0.299,-0.925,0.378,0.452,-0.908,0.31,0.556,-0.867,0.211,0.603,-0.804,0.093,0.613,-0.733,-0.028,0.611,-0.655,-0.15,0.6,-0.547,-0.296,0.57,-0.431,-0.458,0.555,-0.285,-0.598,0.564,-0.112,-0.682,0.575,0.042,-0.727,0.586,0.185,-0.735,0.622,0.329,-0.695,0.677,0.479,-0.586,0.716,0.602,-0.438,0.736,0.72,-0.274,0.72,0.812,-0.075,0.66,0.874,0.13,0.561,0.907,0.31,0.713,0.38,-0.041,0.706,0.358,-0.008,0.695,0.341,0.023,0.674,0.327,0.065,0.631,0.321,0.11,0.583,0.327,0.149,0.541,0.341,0.17,0.517,0.352,0.177,0.507,0.36,0.187,0.712,0.397,-0.002,0.704,0.414,0.032,0.685,0.43,0.072,0.644,0.437,0.12,0.593,0.427,0.157,0.549,0.405,0.175,0.522,0.378,0.182,-0.147,0.36,0.588,-0.112,0.337,0.592,-0.074,0.323,0.595,-0.028,0.314,0.591,0.031,0.312,0.577,0.085,0.32,0.547,0.129,0.332,0.513,0.16,0.341,0.485,0.176,0.346,0.473,-0.119,0.378,0.601,-0.089,0.395,0.609,-0.046,0.414,0.611,0.012,0.426,0.595,0.069,0.423,0.565,0.122,0.401,0.526,0.159,0.368,0.497,0.802,0.51,-0.042,0.804,0.552,0.066,0.765,0.567,0.177,0.693,0.56,0.29,0.576,0.518,0.395,0.799,0.539,-0.125,0.811,0.597,0.015,0.78,0.625,0.15,0.71,0.621,0.296,0.607,0.603,0.411,-0.259,0.48,0.684,-0.148,0.532,0.703,-0.017,0.555,0.689,0.134,0.548,0.641,0.316,0.505,0.564,-0.336,0.506,0.655,-0.209,0.577,0.693,-0.053,0.615,0.691,0.126,0.611,0.658,0.305,0.595,0.596,0.639,-0.385,0.151,0.638,-0.41,0.215,0.635,-0.438,0.287,0.62,-0.475,0.346,0.585,-0.503,0.414,0.533,-0.517,0.464,0.449,-0.511,0.51,0.362,-0.484,0.539,0.287,-0.45,0.544,0.23,-0.421,0.542,0.193,-0.397,0.541,0.234,-0.373,0.574,0.296,-0.345,0.589,0.374,-0.316,0.593,0.474,-0.288,0.575,0.551,-0.3,0.534,0.606,-0.286,0.476,0.641,-0.304,0.389,0.653,-0.331,0.305,0.651,-0.358,0.221,0.622,-0.381,0.198,0.605,-0.382,0.241,0.596,-0.382,0.3,0.581,-0.384,0.354,0.558,-0.386,0.41,0.524,-0.393,0.462,0.456,-0.392,0.502,0.381,-0.387,0.52,0.314,-0.389,0.527,0.26,-0.393,0.53,0.217,-0.395,0.53,0.262,-0.391,0.532,0.315,-0.384,0.532,0.382,-0.381,0.526,0.458,-0.383,0.509,0.528,-0.383,0.47,0.563,-0.38,0.417,0.586,-0.376,0.36,0.6,-0.377,0.305,0.609,-0.378,0.244,0.458,0.419,0.493,0.495,0.336,0.535,0.535,0.26,0.582,0.571,0.19,0.633,0.613,0.113,0.686,0.65,0.021,0.71,0.648,-0.052,0.688,0.622,-0.097,0.66,0.584,-0.118,0.58,0.548,-0.133,0.537,0.641,-0.097,0.367,0.311,-0.124,0.548,0.456,-0.134,0.563,0.608,-0.124,0.478,0.645,-0.017,0.299,0.244,-0.048,0.545,0.46,0.499,0.497,0.462,0.589,0.51,0.495,-0.592,0.409,0.717,0.296,-0.087,0.628,-0.66,0.199,0.709,0.328,-0.48,0.727,0.346,-0.189,0.691,0.023,0.214,0.584,0.193,0.296,0.692,-0.023,0.418,0.769,0.041,0.01,0.775,0.659,-0.113,0.68,0.751,0.218,0.765,0.564,-0.272,0.679,-0.056,0.516,0.559,-0.577,0.364,0.697,-0.237,0.267,0.621,0.153,0.231,0.692,0.11,0.153,0.75,0.723,0.047,0.581,0.757,0.36,0.564,0.235,0.344,0.758,0.208,-0.277,0.745,0.205,-0.083,0.727,0.178,0.027,0.657,0.184,0.128,0.596,0.212,0.198,0.558,0.243,0.259,0.537,0.321,0.468,0.775,0.074,-0.259,0.763,0.434,-0.127,0.607,0.125,0.323,0.533,0.278,0.297,0.677,0.05,0.475,0.671,0.088,0.56,0.667,-0.469,-0.197,0.704,0.054,-0.511,0.663,-0.365,-0.324,0.734,0.455,-0.396,0.635,0.074,0.271,0.75,-0.062,-0.264,0.442,0.759,0.482,0.659,-0.572,-0.076,0.645,-0.654,0.038,0.586,-0.803,0.281,0.59,0.214,0.457,0.682,-0.09,-0.484,0.609,-0.534,0.289,0.757,-0.103,-0.08,0.549,0.282,0.404,0.506,0.411,0.283,0.715,-0.272,-0.181,0.509,0.415,0.398,0.609,-0.591,0.244,0.628,0.109,0.432,0.498,-0.76,0.41,0.493,-0.669,0.408,0.564,-0.642,0.338,0.682,-0.448,0.098,0.646,-0.528,0.168,0.743,-0.052,0.132,0.711,-0.14,0.201,0.749,-0.164,0.045,0.687,-0.496,0.007,0.715,-0.359,0.051,0.721,-0.182,-0.27,0.664,-0.23,-0.441,0.725,-0.232,0.133,0.595,0.17,0.385,0.705,0.016,0.582,0.558,0.475,0.266,0.649,0.51,0.22,0.712,0.192,-0.51,0.688,0.244,0.042,0.637,0.243,0.117,0.579,0.258,0.176,0.539,0.283,0.225,0.625,0.152,0.499,0.498,0.342,0.287,0.513,0.176,0.655,0.518,-0.106,0.61,-0.244,0.254,0.596,0.208,-0.737,0.484,-0.643,0.277,0.462,-0.37,0.295,0.581,0.118,-0.02,0.597,0.584,0.014,0.735,0.238,0.174,0.547,0.329,-0.049,0.652,-0.143,-0.029,0.653,0.552,0.103,0.709,0.374,-0.091,0.597,-0.331,0.663,0.634,0.066,0.764,0.635,-0.481,0.553,0.571,0.454,-0.066,0.677,0.404,-0.593,0.453,0.209,-0.279,0.595,0.16,0.128,0.566,0.048,0.069,0.608,-0.153,0.735,0.655,0.213,-0.529,0.528,0.256,0.765,0.578,-0.337,0.195,0.6,-0.25,0.395,0.631,-0.46,0.139,0.586,-0.249,0.15,0.63,-0.121,0.132,0.63,0.028,0.154,0.587,0.129,0.191,0.545,0.204,0.228,0.521,-0.424,-0.019,0.6,0.269,0.102,0.563,0.38,0.029,0.67,0.471,0.073,0.704,-0.269,-0.619,0.459,-0.634,-0.045,0.431,-0.417,-0.518,0.445,-0.575,0.426,0.502,0.199,0.044,0.567,-0.419,-0.172,0.564,-0.421,0.403,0.605,0.293,-0.23,0.585,-0.123,-0.707,0.453,0.014,-0.778,0.454,0.335,-0.855,0.448,0.404,0.203,0.595,-0.607,-0.217,0.419,0.3,-0.569,0.508,0.137,-0.345,0.594,-0.241,-0.2,0.616,0.363,0.274,0.546,0.256,0.403,0.467,-0.303,-0.396,0.531,0.357,0.406,0.506,0.246,-0.649,0.49,0.362,0.091,0.612,0.38,-0.674,0.456,0.043,-0.531,0.531,0.178,-0.112,0.564,0.134,-0.601,0.51,0,-0.118,0.629,0.114,-0.193,0.595,-0.091,-0.247,0.617,0.294,0.048,0.587,-0.052,-0.607,0.506,0.071,-0.682,0.484,-0.014,-0.44,0.57,-0.413,-0.305,0.523,-0.158,-0.473,0.551,-0.55,-0.376,0.42,0.043,-0.298,0.604,0.335,0.155,0.578,0.501,0.001,0.724,0.211,0.463,0.52,0.104,0.501,0.594,-0.648,0.116,0.454,-0.086,0.211,0.6,0.021,0.219,0.575,0.11,0.242,0.536,0.225,0.293,0.479,0.442,0.141,0.641,0.312,0.322,0.493]},{"yaw":0.558,"pitch":0.013,"frame":[0.31,0.918,0.247,0.11,0.925,0.348,-0.088,0.898,0.406,-0.313,0.825,0.412,-0.49,0.708,0.382,-0.632,0.558,0.339,-0.72,0.403,0.273,-0.768,0.211,0.232,-0.763,0.034,0.225,-0.736,-0.142,0.248,-0.682,-0.328,0.288,-0.578,-0.521,0.35,-0.43,-0.665,0.423,-0.266,-0.758,0.486,-0.085,-0.833,0.522,0.062,-0.878,0.542,0.214,-0.909,0.562,0.36,-0.925,0.544,0.505,-0.911,0.481,0.608,-0.879,0.385,0.657,-0.83,0.266,0.67,-0.776,0.141,0.669,-0.715,0.016,0.655,-0.631,-0.135,0.62,-0.538,-0.308,0.592,-0.405,-0.465,0.578,-0.232,-0.585,0.567,-0.071,-0.664,0.558,0.079,-0.708,0.575,0.229,-0.703,0.612,0.388,-0.639,0.639,0.523,-0.528,0.645,0.659,-0.394,0.616,0.77,-0.222,0.551,0.851,-0.042,0.455,0.895,0.122,0.686,0.356,-0.089,0.68,0.34,-0.055,0.669,0.328,-0.024,0.647,0.319,0.018,0.606,0.317,0.061,0.56,0.325,0.096,0.518,0.34,0.114,0.49,0.352,0.117,0.479,0.362,0.125,0.683,0.373,-0.053,0.672,0.391,-0.022,0.651,0.409,0.014,0.609,0.419,0.056,0.561,0.414,0.091,0.517,0.399,0.109,0.491,0.378,0.118,-0.172,0.351,0.507,-0.137,0.333,0.514,-0.096,0.323,0.519,-0.045,0.317,0.517,0.017,0.318,0.503,0.072,0.324,0.472,0.114,0.335,0.436,0.141,0.344,0.407,0.156,0.35,0.394,-0.144,0.37,0.517,-0.111,0.389,0.522,-0.063,0.41,0.521,-0.003,0.422,0.503,0.05,0.42,0.473,0.102,0.4,0.439,0.139,0.37,0.413,0.736,0.483,-0.117,0.723,0.543,-0.025,0.678,0.576,0.076,0.609,0.581,0.183,0.498,0.544,0.288,0.731,0.501,-0.203,0.725,0.578,-0.083,0.684,0.628,0.039,0.615,0.639,0.176,0.514,0.632,0.285,-0.265,0.5,0.564,-0.163,0.565,0.567,-0.04,0.6,0.549,0.1,0.596,0.507,0.266,0.547,0.442,-0.339,0.52,0.528,-0.223,0.606,0.547,-0.079,0.656,0.539,0.087,0.658,0.511,0.249,0.639,0.455,0.669,-0.388,0.257,0.666,-0.407,0.326,0.659,-0.425,0.398,0.64,-0.452,0.455,0.602,-0.471,0.518,0.55,-0.479,0.565,0.472,-0.475,0.606,0.387,-0.455,0.63,0.309,-0.426,0.631,0.253,-0.402,0.623,0.218,-0.381,0.614,0.255,-0.349,0.637,0.315,-0.313,0.646,0.39,-0.274,0.645,0.487,-0.238,0.625,0.565,-0.252,0.589,0.623,-0.242,0.533,0.664,-0.273,0.454,0.681,-0.314,0.383,0.681,-0.353,0.312,0.653,-0.379,0.302,0.634,-0.371,0.342,0.621,-0.364,0.394,0.602,-0.359,0.442,0.575,-0.354,0.494,0.537,-0.355,0.543,0.474,-0.354,0.579,0.401,-0.353,0.595,0.333,-0.36,0.601,0.28,-0.368,0.604,0.241,-0.375,0.604,0.283,-0.366,0.603,0.336,-0.355,0.601,0.403,-0.348,0.595,0.476,-0.348,0.58,0.542,-0.35,0.544,0.581,-0.35,0.496,0.608,-0.352,0.443,0.626,-0.359,0.394,0.638,-0.367,0.341,0.406,0.447,0.396,0.449,0.373,0.453,0.494,0.308,0.514,0.537,0.248,0.58,0.584,0.183,0.646,0.629,0.102,0.684,0.635,0.027,0.676,0.611,-0.026,0.654,0.58,-0.057,0.587,0.55,-0.085,0.555,0.63,-0.074,0.387,0.327,-0.094,0.562,0.467,-0.092,0.581,0.598,-0.085,0.5,0.629,-0.004,0.309,0.255,-0.024,0.547,0.4,0.53,0.383,0.392,0.623,0.376,0.524,-0.566,0.522,0.7,0.261,-0.117,0.673,-0.666,0.347,0.667,0.253,-0.497,0.705,0.299,-0.226,0.677,0.024,0.222,0.561,0.199,0.265,0.679,0.012,0.419,0.76,0.014,0.028,0.689,0.617,-0.221,0.584,0.748,0.07,0.691,0.505,-0.357,0.664,0.002,0.511,0.583,-0.557,0.48,0.702,-0.232,0.331,0.601,0.151,0.213,0.675,0.101,0.146,0.653,0.699,-0.081,0.489,0.764,0.201,0.535,0.25,0.301,0.74,0.15,-0.277,0.74,0.168,-0.094,0.718,0.154,0.015,0.643,0.173,0.108,0.578,0.208,0.169,0.535,0.245,0.219,0.493,0.353,0.393,0.768,0.016,-0.231,0.72,0.396,-0.184,0.588,0.138,0.305,0.503,0.288,0.247,0.659,0.091,0.46,0.647,0.143,0.532,0.714,-0.528,-0.051,0.692,-0.029,-0.464,0.703,-0.441,-0.19,0.674,0.386,-0.45,0.616,0.079,0.266,0.758,-0.122,-0.204,0.358,0.773,0.314,0.711,-0.616,0.08,0.699,-0.683,0.199,0.637,-0.804,0.443,0.559,0.248,0.409,0.688,-0.178,-0.405,0.633,-0.524,0.411,0.767,-0.141,-0.026,0.512,0.306,0.345,0.46,0.423,0.206,0.744,-0.324,-0.082,0.456,0.437,0.312,0.647,-0.591,0.378,0.607,0.141,0.408,0.543,-0.744,0.553,0.53,-0.648,0.535,0.6,-0.63,0.47,0.719,-0.469,0.223,0.686,-0.54,0.3,0.74,-0.062,0.163,0.712,-0.14,0.245,0.76,-0.186,0.106,0.731,-0.527,0.145,0.743,-0.385,0.157,0.743,-0.245,-0.184,0.689,-0.318,-0.33,0.74,-0.246,0.2,0.572,0.194,0.353,0.685,0.08,0.563,0.501,0.487,0.181,0.583,0.519,0.133,0.684,0.113,-0.493,0.673,0.224,0.014,0.62,0.232,0.085,0.56,0.252,0.139,0.516,0.282,0.18,0.598,0.197,0.462,0.462,0.353,0.224,0.483,0.234,0.602,0.521,-0.046,0.611,-0.237,0.25,0.53,0.262,-0.724,0.612,-0.611,0.237,0.393,-0.354,0.288,0.504,0.13,0.003,0.589,0.566,0.094,0.708,0.226,0.193,0.501,0.337,-0.001,0.643,-0.117,-0.019,0.637,0.527,0.173,0.667,0.382,-0.042,0.599,-0.347,0.66,0.477,0.012,0.784,0.458,-0.478,0.535,0.438,0.455,-0.001,0.664,0.438,-0.567,0.562,0.239,-0.252,0.638,0.155,0.143,0.53,0.054,0.085,0.579,-0.19,0.745,0.482,0.254,-0.512,0.623,0.186,0.786,0.404,-0.313,0.189,0.542,-0.251,0.401,0.538,-0.428,0.123,0.542,-0.226,0.149,0.582,-0.103,0.137,0.587,0.033,0.162,0.543,0.124,0.2,0.498,0.193,0.239,0.466,-0.381,-0.034,0.583,0.263,0.129,0.534,0.376,0.081,0.645,0.454,0.136,0.668,-0.196,-0.642,0.563,-0.58,-0.091,0.428,-0.34,-0.555,0.531,-0.558,0.394,0.4,0.2,0.065,0.549,-0.363,-0.192,0.58,-0.411,0.4,0.504,0.315,-0.199,0.62,-0.052,-0.719,0.575,0.083,-0.777,0.588,0.391,-0.846,0.6,0.377,0.246,0.538,-0.54,-0.265,0.449,0.34,-0.547,0.61,0.175,-0.324,0.646,-0.192,-0.201,0.634,0.332,0.305,0.478,0.225,0.42,0.377,-0.237,-0.411,0.59,0.315,0.435,0.412,0.295,-0.634,0.605,0.351,0.134,0.576,0.423,-0.653,0.58,0.092,-0.524,0.622,0.197,-0.089,0.574,0.183,-0.591,0.615,0.027,-0.096,0.635,0.142,-0.169,0.62,-0.048,-0.235,0.647,0.293,0.08,0.566,0.007,-0.607,0.61,0.13,-0.675,0.603,0.033,-0.433,0.64,-0.347,-0.329,0.566,-0.099,-0.475,0.624,-0.474,-0.423,0.481,0.084,-0.281,0.643,0.32,0.19,0.535,0.49,0.073,0.698,0.176,0.489,0.418,0.075,0.531,0.48,-0.604,0.074,0.418,-0.081,0.215,0.543,0.018,0.224,0.52,0.101,0.248,0.481,0.207,0.302,0.413,0.419,0.194,0.595,0.284,0.343,0.417]},{"yaw":0.51,"pitch":0.026,"frame":[0.283,0.923,0.227,0.076,0.925,0.33,-0.126,0.892,0.389,-0.35,0.806,0.396,-0.524,0.676,0.368,-0.659,0.514,0.327,-0.738,0.35,0.264,-0.773,0.152,0.226,-0.759,-0.023,0.222,-0.724,-0.196,0.252,-0.663,-0.377,0.3,-0.556,-0.562,0.37,-0.407,-0.697,0.449,-0.245,-0.782,0.514,-0.07,-0.849,0.551,0.073,-0.888,0.572,0.222,-0.914,0.594,0.369,-0.925,0.577,0.516,-0.908,0.515,0.623,-0.876,0.417,0.674,-0.828,0.296,0.693,-0.777,0.169,0.698,-0.721,0.042,0.688,-0.644,-0.111,0.658,-0.556,-0.287,0.63,-0.427,-0.45,0.615,-0.255,-0.58,0.604,-0.093,-0.668,0.595,0.059,-0.718,0.608,0.213,-0.718,0.636,0.379,-0.655,0.656,0.522,-0.545,0.656,0.663,-0.414,0.617,0.779,-0.243,0.539,0.861,-0.062,0.433,0.905,0.102,0.673,0.365,-0.092,0.665,0.347,-0.057,0.654,0.335,-0.026,0.632,0.325,0.016,0.59,0.322,0.06,0.543,0.329,0.094,0.499,0.343,0.112,0.47,0.355,0.115,0.457,0.366,0.123,0.668,0.385,-0.056,0.656,0.404,-0.026,0.633,0.425,0.009,0.589,0.436,0.052,0.54,0.429,0.086,0.496,0.409,0.105,0.469,0.384,0.115,-0.196,0.341,0.508,-0.161,0.322,0.515,-0.122,0.312,0.519,-0.073,0.307,0.518,-0.01,0.309,0.504,0.048,0.318,0.473,0.093,0.331,0.437,0.125,0.34,0.407,0.141,0.347,0.394,-0.169,0.362,0.517,-0.139,0.383,0.522,-0.094,0.407,0.52,-0.034,0.421,0.501,0.022,0.419,0.471,0.078,0.398,0.438,0.121,0.368,0.412,0.73,0.502,-0.125,0.714,0.564,-0.034,0.666,0.598,0.067,0.593,0.599,0.174,0.481,0.557,0.282,0.729,0.519,-0.212,0.719,0.6,-0.095,0.673,0.652,0.028,0.6,0.66,0.166,0.497,0.647,0.275,-0.302,0.488,0.561,-0.202,0.561,0.562,-0.08,0.599,0.544,0.065,0.597,0.502,0.242,0.551,0.437,-0.374,0.501,0.524,-0.264,0.598,0.541,-0.12,0.655,0.532,0.051,0.661,0.504,0.22,0.644,0.447,0.68,-0.376,0.273,0.675,-0.396,0.344,0.665,-0.414,0.416,0.643,-0.441,0.474,0.603,-0.459,0.539,0.548,-0.467,0.586,0.469,-0.466,0.626,0.383,-0.451,0.649,0.304,-0.427,0.649,0.246,-0.407,0.641,0.21,-0.387,0.631,0.245,-0.351,0.652,0.303,-0.309,0.66,0.378,-0.264,0.658,0.476,-0.222,0.638,0.555,-0.234,0.602,0.613,-0.221,0.546,0.662,-0.254,0.467,0.684,-0.297,0.396,0.689,-0.338,0.326,0.661,-0.367,0.318,0.64,-0.358,0.358,0.625,-0.35,0.409,0.603,-0.344,0.457,0.574,-0.339,0.509,0.533,-0.341,0.558,0.468,-0.343,0.593,0.394,-0.346,0.609,0.327,-0.358,0.616,0.273,-0.37,0.62,0.232,-0.38,0.62,0.276,-0.369,0.619,0.33,-0.355,0.616,0.396,-0.344,0.61,0.471,-0.34,0.595,0.538,-0.338,0.56,0.578,-0.338,0.511,0.608,-0.339,0.458,0.628,-0.346,0.409,0.642,-0.355,0.356,0.388,0.458,0.393,0.43,0.389,0.453,0.474,0.328,0.516,0.514,0.271,0.585,0.56,0.209,0.654,0.603,0.131,0.695,0.611,0.056,0.689,0.591,0,0.666,0.56,-0.036,0.599,0.532,-0.067,0.566,0.621,-0.063,0.397,0.312,-0.087,0.572,0.45,-0.076,0.592,0.585,-0.067,0.51,0.624,0.006,0.317,0.24,-0.021,0.555,0.38,0.54,0.378,0.369,0.633,0.368,0.524,-0.557,0.546,0.691,0.268,-0.119,0.686,-0.659,0.373,0.688,0.248,-0.508,0.701,0.308,-0.23,0.672,0.037,0.23,0.55,0.211,0.267,0.668,0.029,0.426,0.758,0.025,0.034,0.692,0.63,-0.237,0.569,0.763,0.055,0.699,0.513,-0.37,0.649,0.025,0.519,0.588,-0.548,0.505,0.704,-0.215,0.343,0.593,0.162,0.217,0.669,0.112,0.151,0.648,0.716,-0.097,0.467,0.777,0.186,0.521,0.263,0.304,0.746,0.153,-0.279,0.73,0.177,-0.093,0.706,0.164,0.017,0.63,0.183,0.111,0.566,0.217,0.171,0.52,0.255,0.221,0.475,0.369,0.394,0.773,0.019,-0.229,0.716,0.41,-0.19,0.578,0.152,0.309,0.486,0.298,0.248,0.644,0.111,0.466,0.628,0.167,0.539,0.74,-0.533,-0.03,0.711,-0.038,-0.464,0.73,-0.451,-0.171,0.688,0.388,-0.462,0.61,0.091,0.272,0.767,-0.123,-0.197,0.332,0.783,0.3,0.736,-0.617,0.104,0.719,-0.682,0.225,0.649,-0.796,0.475,0.542,0.267,0.412,0.711,-0.19,-0.399,0.641,-0.515,0.433,0.772,-0.136,-0.016,0.496,0.32,0.345,0.441,0.431,0.203,0.761,-0.325,-0.066,0.438,0.448,0.309,0.657,-0.584,0.403,0.593,0.159,0.412,0.549,-0.735,0.583,0.534,-0.639,0.562,0.608,-0.62,0.496,0.735,-0.462,0.242,0.7,-0.534,0.323,0.738,-0.049,0.172,0.712,-0.127,0.255,0.765,-0.177,0.117,0.75,-0.522,0.167,0.758,-0.376,0.173,0.759,-0.248,-0.172,0.715,-0.331,-0.316,0.745,-0.234,0.212,0.558,0.21,0.357,0.665,0.107,0.572,0.481,0.499,0.176,0.565,0.537,0.127,0.705,0.106,-0.5,0.661,0.232,0.015,0.608,0.239,0.086,0.547,0.259,0.14,0.501,0.288,0.18,0.58,0.219,0.466,0.443,0.36,0.223,0.459,0.255,0.607,0.503,-0.025,0.621,-0.262,0.233,0.532,0.266,-0.724,0.64,-0.626,0.194,0.392,-0.381,0.265,0.504,0.113,0.003,0.598,0.54,0.121,0.718,0.207,0.196,0.506,0.315,0.01,0.652,-0.133,-0.027,0.646,0.502,0.196,0.675,0.363,-0.028,0.609,-0.386,0.639,0.467,-0.026,0.783,0.446,-0.511,0.504,0.429,0.432,0.02,0.674,0.438,-0.562,0.586,0.227,-0.249,0.651,0.136,0.143,0.537,0.035,0.082,0.586,-0.229,0.736,0.471,0.252,-0.514,0.644,0.153,0.79,0.391,-0.338,0.167,0.546,-0.283,0.388,0.538,-0.446,0.096,0.548,-0.25,0.134,0.588,-0.126,0.128,0.593,0.012,0.157,0.549,0.104,0.198,0.502,0.174,0.24,0.469,-0.392,-0.058,0.592,0.244,0.134,0.54,0.353,0.095,0.653,0.43,0.156,0.676,-0.184,-0.66,0.588,-0.578,-0.129,0.435,-0.326,-0.578,0.554,-0.582,0.356,0.395,0.183,0.066,0.557,-0.366,-0.213,0.593,-0.441,0.374,0.502,0.302,-0.191,0.632,-0.044,-0.732,0.602,0.09,-0.784,0.617,0.398,-0.842,0.633,0.355,0.259,0.541,-0.532,-0.299,0.463,0.339,-0.545,0.632,0.166,-0.326,0.661,-0.199,-0.213,0.648,0.313,0.315,0.479,0.207,0.422,0.375,-0.234,-0.428,0.61,0.298,0.441,0.409,0.298,-0.633,0.631,0.331,0.146,0.582,0.427,-0.648,0.607,0.092,-0.531,0.642,0.183,-0.089,0.584,0.185,-0.595,0.639,0.013,-0.1,0.646,0.129,-0.17,0.631,-0.057,-0.242,0.66,0.273,0.087,0.573,0.01,-0.616,0.633,0.134,-0.68,0.63,0.03,-0.44,0.658,-0.345,-0.35,0.584,-0.098,-0.486,0.644,-0.461,-0.453,0.501,0.075,-0.285,0.657,0.299,0.199,0.54,0.465,0.097,0.708,0.154,0.491,0.415,0.045,0.534,0.477,-0.611,0.033,0.422,-0.106,0.205,0.547,-0.005,0.217,0.524,0.08,0.243,0.484,0.19,0.302,0.414,0.397,0.21,0.601,0.267,0.348,0.417]},{"yaw":0.448,"pitch":0.027,"frame":[0.242,0.925,0.225,0.037,0.925,0.314,-0.161,0.889,0.359,-0.376,0.804,0.35,-0.541,0.676,0.306,-0.666,0.517,0.254,-0.738,0.354,0.181,-0.767,0.159,0.135,-0.751,-0.015,0.129,-0.718,-0.187,0.158,-0.662,-0.366,0.21,-0.565,-0.55,0.285,-0.429,-0.685,0.373,-0.281,-0.772,0.45,-0.116,-0.842,0.499,0.02,-0.884,0.53,0.164,-0.912,0.561,0.308,-0.925,0.551,0.458,-0.91,0.497,0.572,-0.88,0.406,0.633,-0.833,0.289,0.66,-0.783,0.163,0.673,-0.728,0.037,0.673,-0.651,-0.114,0.647,-0.567,-0.289,0.623,-0.441,-0.452,0.612,-0.271,-0.577,0.605,-0.109,-0.662,0.6,0.044,-0.71,0.615,0.2,-0.707,0.646,0.368,-0.641,0.666,0.51,-0.527,0.658,0.652,-0.395,0.609,0.771,-0.225,0.518,0.859,-0.049,0.401,0.905,0.108,0.65,0.36,-0.082,0.64,0.343,-0.048,0.627,0.332,-0.018,0.604,0.322,0.022,0.56,0.319,0.063,0.51,0.326,0.094,0.461,0.341,0.109,0.429,0.353,0.111,0.413,0.364,0.118,0.642,0.377,-0.046,0.628,0.394,-0.016,0.603,0.412,0.018,0.556,0.422,0.058,0.506,0.418,0.089,0.457,0.403,0.104,0.427,0.381,0.111,-0.259,0.336,0.46,-0.225,0.316,0.47,-0.187,0.306,0.477,-0.137,0.301,0.479,-0.073,0.305,0.468,-0.014,0.317,0.441,0.032,0.331,0.408,0.065,0.341,0.379,0.082,0.348,0.367,-0.232,0.356,0.473,-0.203,0.376,0.481,-0.157,0.397,0.482,-0.096,0.409,0.468,-0.039,0.407,0.441,0.018,0.389,0.41,0.062,0.365,0.385,0.719,0.495,-0.105,0.697,0.559,-0.015,0.64,0.596,0.082,0.555,0.598,0.182,0.429,0.555,0.282,0.724,0.51,-0.189,0.706,0.594,-0.074,0.649,0.648,0.043,0.562,0.658,0.176,0.447,0.646,0.279,-0.349,0.486,0.514,-0.253,0.556,0.524,-0.131,0.595,0.515,0.012,0.592,0.481,0.186,0.547,0.424,-0.414,0.501,0.474,-0.309,0.594,0.499,-0.166,0.649,0.501,0,0.655,0.484,0.166,0.641,0.436,0.632,-0.381,0.264,0.622,-0.4,0.333,0.606,-0.417,0.406,0.578,-0.441,0.463,0.531,-0.457,0.526,0.472,-0.465,0.57,0.391,-0.464,0.607,0.306,-0.449,0.626,0.227,-0.425,0.622,0.167,-0.405,0.608,0.129,-0.387,0.594,0.163,-0.35,0.621,0.221,-0.307,0.635,0.297,-0.262,0.638,0.396,-0.221,0.622,0.479,-0.233,0.589,0.543,-0.22,0.537,0.6,-0.254,0.461,0.627,-0.299,0.39,0.638,-0.342,0.319,0.612,-0.371,0.307,0.587,-0.36,0.347,0.567,-0.351,0.398,0.54,-0.343,0.445,0.506,-0.337,0.495,0.459,-0.338,0.542,0.392,-0.34,0.574,0.316,-0.344,0.588,0.248,-0.357,0.591,0.192,-0.369,0.59,0.151,-0.38,0.587,0.194,-0.368,0.59,0.249,-0.354,0.592,0.317,-0.342,0.59,0.394,-0.339,0.577,0.464,-0.338,0.545,0.51,-0.337,0.499,0.545,-0.34,0.447,0.571,-0.348,0.399,0.589,-0.358,0.345,0.331,0.454,0.385,0.368,0.385,0.445,0.407,0.325,0.509,0.443,0.269,0.579,0.484,0.209,0.65,0.524,0.132,0.69,0.531,0.057,0.683,0.512,0.001,0.658,0.487,-0.034,0.59,0.465,-0.065,0.554,0.569,-0.062,0.39,0.234,-0.086,0.553,0.374,-0.075,0.577,0.522,-0.066,0.502,0.577,0.005,0.312,0.166,-0.02,0.533,0.324,0.537,0.372,0.315,0.629,0.365,0.456,-0.557,0.53,0.681,0.261,-0.108,0.641,-0.664,0.367,0.688,0.237,-0.491,0.7,0.299,-0.215,0.631,0.034,0.23,0.503,0.206,0.262,0.613,0.028,0.426,0.737,0.02,0.044,0.686,0.62,-0.216,0.54,0.761,0.067,0.7,0.501,-0.349,0.583,0.026,0.518,0.523,-0.549,0.491,0.653,-0.219,0.338,0.552,0.158,0.214,0.634,0.108,0.154,0.632,0.71,-0.08,0.426,0.776,0.191,0.47,0.258,0.297,0.744,0.145,-0.265,0.722,0.171,-0.081,0.688,0.158,0.025,0.601,0.177,0.113,0.529,0.212,0.168,0.477,0.25,0.215,0.416,0.365,0.388,0.767,0.011,-0.214,0.709,0.4,-0.172,0.529,0.148,0.304,0.438,0.295,0.24,0.585,0.109,0.466,0.561,0.166,0.539,0.723,-0.539,-0.029,0.709,-0.051,-0.453,0.72,-0.458,-0.167,0.69,0.377,-0.443,0.565,0.088,0.268,0.759,-0.13,-0.186,0.284,0.782,0.297,0.711,-0.624,0.101,0.686,-0.688,0.221,0.594,-0.8,0.466,0.482,0.263,0.407,0.705,-0.201,-0.391,0.583,-0.516,0.423,0.756,-0.142,-0.007,0.44,0.316,0.339,0.393,0.429,0.195,0.747,-0.331,-0.062,0.383,0.444,0.302,0.607,-0.587,0.395,0.536,0.156,0.408,0.484,-0.738,0.568,0.468,-0.641,0.548,0.549,-0.623,0.486,0.694,-0.467,0.236,0.655,-0.538,0.315,0.705,-0.053,0.176,0.668,-0.131,0.253,0.738,-0.181,0.121,0.718,-0.528,0.163,0.723,-0.381,0.171,0.749,-0.256,-0.165,0.707,-0.341,-0.312,0.706,-0.239,0.211,0.503,0.206,0.351,0.595,0.106,0.573,0.437,0.496,0.173,0.531,0.534,0.131,0.706,0.094,-0.485,0.64,0.227,0.021,0.579,0.233,0.088,0.512,0.254,0.137,0.459,0.285,0.174,0.517,0.216,0.464,0.395,0.358,0.215,0.387,0.253,0.596,0.426,-0.024,0.609,-0.313,0.231,0.48,0.199,-0.724,0.612,-0.642,0.2,0.312,-0.422,0.265,0.446,0.043,0.003,0.57,0.458,0.122,0.71,0.144,0.194,0.485,0.236,0.011,0.633,-0.198,-0.026,0.6,0.424,0.196,0.666,0.285,-0.029,0.591,-0.416,0.638,0.415,-0.069,0.78,0.421,-0.535,0.506,0.366,0.353,0.02,0.658,0.368,-0.561,0.567,0.149,-0.246,0.624,0.072,0.141,0.511,-0.031,0.082,0.553,-0.265,0.731,0.432,0.181,-0.512,0.613,0.106,0.788,0.377,-0.383,0.168,0.488,-0.334,0.385,0.488,-0.484,0.1,0.48,-0.304,0.133,0.534,-0.186,0.127,0.548,-0.049,0.156,0.514,0.043,0.196,0.475,0.114,0.238,0.447,-0.438,-0.054,0.524,0.177,0.133,0.519,0.276,0.095,0.636,0.352,0.155,0.663,-0.235,-0.652,0.529,-0.6,-0.121,0.351,-0.368,-0.57,0.486,-0.601,0.359,0.322,0.115,0.066,0.533,-0.415,-0.209,0.525,-0.477,0.375,0.442,0.223,-0.19,0.611,-0.101,-0.727,0.553,0.031,-0.782,0.578,0.331,-0.843,0.61,0.287,0.257,0.526,-0.557,-0.291,0.381,0.268,-0.544,0.607,0.089,-0.324,0.626,-0.261,-0.211,0.594,0.25,0.312,0.463,0.149,0.418,0.356,-0.289,-0.422,0.55,0.24,0.437,0.395,0.228,-0.632,0.604,0.258,0.144,0.565,0.357,-0.649,0.587,0.023,-0.528,0.604,0.11,-0.087,0.559,0.117,-0.593,0.606,-0.059,-0.098,0.611,0.054,-0.168,0.6,-0.127,-0.239,0.617,0.202,0.086,0.554,-0.054,-0.613,0.589,0.069,-0.678,0.594,-0.039,-0.437,0.615,-0.394,-0.345,0.517,-0.16,-0.482,0.593,-0.492,-0.444,0.423,0.001,-0.283,0.62,0.232,0.197,0.522,0.383,0.097,0.695,0.097,0.484,0.393,-0.011,0.527,0.451,-0.63,0.04,0.338,-0.164,0.202,0.505,-0.065,0.214,0.489,0.019,0.24,0.454,0.131,0.301,0.392,0.324,0.209,0.586,0.207,0.346,0.4]},{"yaw":0.389,"pitch":0.025,"frame":[0.212,0.925,0.187,0.004,0.923,0.265,-0.193,0.884,0.296,-0.404,0.796,0.277,-0.563,0.667,0.226,-0.681,0.509,0.17,-0.747,0.348,0.095,-0.772,0.155,0.049,-0.758,-0.017,0.046,-0.727,-0.187,0.08,-0.673,-0.366,0.139,-0.58,-0.548,0.223,-0.451,-0.682,0.321,-0.308,-0.768,0.408,-0.149,-0.838,0.467,-0.017,-0.881,0.507,0.121,-0.91,0.548,0.261,-0.925,0.549,0.409,-0.912,0.504,0.528,-0.884,0.421,0.594,-0.838,0.308,0.632,-0.789,0.185,0.655,-0.734,0.061,0.67,-0.657,-0.087,0.659,-0.574,-0.261,0.645,-0.45,-0.424,0.639,-0.283,-0.554,0.636,-0.121,-0.643,0.631,0.033,-0.695,0.643,0.191,-0.696,0.665,0.362,-0.631,0.676,0.509,-0.519,0.657,0.655,-0.391,0.597,0.774,-0.228,0.498,0.862,-0.061,0.376,0.908,0.083,0.641,0.347,-0.077,0.63,0.331,-0.044,0.615,0.321,-0.014,0.588,0.312,0.023,0.543,0.309,0.061,0.492,0.316,0.089,0.442,0.329,0.101,0.408,0.34,0.101,0.392,0.35,0.107,0.632,0.364,-0.043,0.616,0.381,-0.014,0.587,0.4,0.019,0.538,0.411,0.055,0.486,0.405,0.083,0.437,0.39,0.096,0.405,0.367,0.101,-0.28,0.331,0.401,-0.247,0.312,0.413,-0.209,0.303,0.422,-0.161,0.299,0.426,-0.098,0.302,0.419,-0.037,0.312,0.396,0.012,0.325,0.365,0.048,0.333,0.337,0.067,0.339,0.327,-0.255,0.35,0.416,-0.226,0.369,0.425,-0.181,0.39,0.429,-0.12,0.402,0.418,-0.063,0.399,0.395,-0.003,0.381,0.365,0.045,0.357,0.343,0.706,0.488,-0.099,0.677,0.551,-0.013,0.616,0.585,0.078,0.53,0.586,0.173,0.404,0.543,0.266,0.712,0.506,-0.182,0.687,0.589,-0.072,0.626,0.639,0.04,0.536,0.647,0.166,0.42,0.634,0.262,-0.379,0.476,0.446,-0.283,0.545,0.462,-0.162,0.582,0.459,-0.018,0.579,0.436,0.158,0.535,0.393,-0.442,0.491,0.403,-0.34,0.582,0.433,-0.199,0.637,0.442,-0.031,0.643,0.437,0.137,0.628,0.401,0.604,-0.38,0.271,0.592,-0.396,0.338,0.572,-0.41,0.409,0.538,-0.432,0.465,0.487,-0.446,0.525,0.424,-0.453,0.566,0.343,-0.451,0.598,0.26,-0.437,0.61,0.186,-0.416,0.602,0.13,-0.399,0.583,0.094,-0.383,0.565,0.124,-0.346,0.594,0.176,-0.303,0.613,0.248,-0.257,0.619,0.347,-0.217,0.608,0.43,-0.23,0.581,0.496,-0.218,0.534,0.559,-0.253,0.463,0.593,-0.297,0.394,0.607,-0.341,0.325,0.582,-0.369,0.311,0.555,-0.356,0.348,0.533,-0.346,0.397,0.502,-0.337,0.442,0.463,-0.331,0.49,0.414,-0.332,0.532,0.346,-0.334,0.56,0.273,-0.337,0.57,0.209,-0.35,0.57,0.157,-0.364,0.566,0.117,-0.376,0.561,0.159,-0.363,0.567,0.21,-0.349,0.572,0.275,-0.336,0.572,0.348,-0.333,0.564,0.418,-0.332,0.537,0.466,-0.332,0.494,0.506,-0.335,0.445,0.536,-0.345,0.399,0.557,-0.356,0.348,0.303,0.446,0.365,0.336,0.379,0.427,0.371,0.32,0.492,0.403,0.265,0.564,0.439,0.206,0.637,0.472,0.128,0.68,0.478,0.053,0.674,0.462,-0.002,0.649,0.44,-0.037,0.581,0.42,-0.068,0.544,0.53,-0.065,0.388,0.199,-0.083,0.534,0.333,-0.076,0.562,0.48,-0.069,0.497,0.544,-0.001,0.31,0.134,-0.02,0.509,0.295,0.528,0.35,0.285,0.62,0.339,0.413,-0.549,0.529,0.672,0.253,-0.099,0.603,-0.667,0.384,0.702,0.228,-0.475,0.695,0.29,-0.204,0.605,0.026,0.236,0.476,0.198,0.255,0.572,0.023,0.426,0.724,0.011,0.061,0.673,0.62,-0.214,0.515,0.759,0.056,0.698,0.501,-0.343,0.538,0.022,0.515,0.483,-0.542,0.493,0.622,-0.221,0.344,0.529,0.15,0.213,0.613,0.1,0.16,0.612,0.709,-0.083,0.398,0.774,0.171,0.441,0.251,0.287,0.748,0.135,-0.246,0.71,0.164,-0.066,0.672,0.151,0.036,0.581,0.169,0.115,0.507,0.203,0.164,0.453,0.24,0.206,0.384,0.358,0.373,0.772,0.001,-0.19,0.701,0.392,-0.162,0.498,0.141,0.299,0.412,0.284,0.229,0.544,0.104,0.463,0.517,0.161,0.533,0.714,-0.547,-0.002,0.728,-0.062,-0.429,0.724,-0.467,-0.138,0.696,0.371,-0.433,0.538,0.081,0.267,0.764,-0.141,-0.16,0.253,0.779,0.266,0.689,-0.63,0.124,0.656,-0.694,0.242,0.548,-0.804,0.481,0.447,0.257,0.395,0.723,-0.213,-0.365,0.546,-0.513,0.43,0.751,-0.152,0.016,0.41,0.309,0.326,0.371,0.416,0.181,0.743,-0.341,-0.036,0.358,0.433,0.286,0.572,-0.587,0.406,0.5,0.15,0.4,0.435,-0.738,0.574,0.423,-0.638,0.55,0.507,-0.621,0.494,0.666,-0.471,0.25,0.623,-0.54,0.328,0.686,-0.061,0.19,0.64,-0.137,0.262,0.723,-0.189,0.14,0.694,-0.534,0.183,0.7,-0.385,0.189,0.754,-0.267,-0.138,0.722,-0.351,-0.283,0.682,-0.243,0.224,0.47,0.2,0.343,0.548,0.101,0.569,0.415,0.483,0.161,0.509,0.522,0.123,0.724,0.084,-0.464,0.625,0.219,0.025,0.561,0.225,0.088,0.492,0.244,0.132,0.438,0.273,0.164,0.478,0.211,0.455,0.371,0.345,0.201,0.347,0.249,0.577,0.382,-0.025,0.595,-0.339,0.227,0.42,0.156,-0.722,0.599,-0.658,0.194,0.232,-0.446,0.26,0.378,0.011,0,0.536,0.408,0.119,0.696,0.116,0.188,0.454,0.195,0.011,0.612,-0.23,-0.028,0.551,0.379,0.193,0.649,0.246,-0.027,0.571,-0.443,0.628,0.343,-0.102,0.772,0.366,-0.557,0.497,0.289,0.306,0.02,0.639,0.325,-0.553,0.56,0.108,-0.245,0.598,0.044,0.137,0.476,-0.061,0.078,0.513,-0.298,0.722,0.367,0.141,-0.506,0.592,0.073,0.782,0.334,-0.412,0.165,0.424,-0.361,0.377,0.423,-0.508,0.097,0.41,-0.335,0.131,0.475,-0.218,0.124,0.496,-0.08,0.151,0.47,0.015,0.19,0.436,0.088,0.231,0.412,-0.467,-0.055,0.458,0.146,0.129,0.492,0.235,0.093,0.615,0.309,0.153,0.643,-0.266,-0.648,0.488,-0.621,-0.123,0.278,-0.397,-0.567,0.435,-0.619,0.352,0.243,0.086,0.063,0.504,-0.445,-0.209,0.465,-0.5,0.367,0.369,0.183,-0.188,0.59,-0.134,-0.722,0.522,-0.008,-0.779,0.555,0.283,-0.842,0.607,0.254,0.253,0.505,-0.58,-0.292,0.314,0.226,-0.537,0.593,0.047,-0.321,0.596,-0.295,-0.211,0.545,0.221,0.307,0.439,0.128,0.409,0.321,-0.32,-0.42,0.501,0.215,0.427,0.37,0.187,-0.629,0.591,0.222,0.141,0.544,0.313,-0.645,0.583,-0.011,-0.522,0.576,0.077,-0.088,0.532,0.079,-0.589,0.585,-0.094,-0.1,0.573,0.017,-0.169,0.569,-0.162,-0.239,0.576,0.168,0.084,0.531,-0.088,-0.608,0.558,0.03,-0.675,0.572,-0.075,-0.433,0.581,-0.423,-0.344,0.461,-0.193,-0.478,0.554,-0.518,-0.443,0.363,-0.039,-0.282,0.586,0.2,0.193,0.498,0.336,0.095,0.677,0.075,0.473,0.354,-0.038,0.517,0.404,-0.649,0.037,0.26,-0.192,0.198,0.452,-0.092,0.209,0.442,-0.006,0.235,0.413,0.109,0.293,0.358,0.286,0.205,0.565,0.183,0.337,0.373]},{"yaw":0.304,"pitch":0.022,"frame":[0.168,0.925,0.143,-0.043,0.92,0.208,-0.239,0.878,0.222,-0.439,0.788,0.186,-0.585,0.658,0.121,-0.69,0.499,0.055,-0.748,0.338,-0.026,-0.766,0.146,-0.076,-0.751,-0.024,-0.078,-0.722,-0.193,-0.039,-0.673,-0.37,0.025,-0.587,-0.553,0.12,-0.471,-0.686,0.23,-0.34,-0.77,0.332,-0.187,-0.838,0.406,-0.061,-0.879,0.461,0.072,-0.908,0.513,0.208,-0.925,0.528,0.357,-0.914,0.494,0.479,-0.885,0.421,0.553,-0.84,0.317,0.599,-0.791,0.198,0.634,-0.738,0.079,0.662,-0.663,-0.066,0.664,-0.58,-0.237,0.661,-0.458,-0.399,0.663,-0.29,-0.529,0.663,-0.128,-0.619,0.661,0.027,-0.672,0.672,0.187,-0.674,0.688,0.362,-0.611,0.69,0.515,-0.501,0.659,0.662,-0.378,0.59,0.782,-0.224,0.478,0.868,-0.067,0.343,0.911,0.062,0.614,0.339,-0.067,0.599,0.326,-0.035,0.583,0.318,-0.006,0.556,0.311,0.029,0.512,0.309,0.063,0.462,0.314,0.085,0.412,0.325,0.092,0.377,0.333,0.088,0.36,0.341,0.092,0.604,0.356,-0.033,0.587,0.372,-0.006,0.558,0.389,0.025,0.509,0.4,0.058,0.459,0.395,0.08,0.408,0.38,0.087,0.375,0.358,0.089,-0.31,0.319,0.321,-0.279,0.305,0.336,-0.246,0.299,0.348,-0.203,0.297,0.356,-0.147,0.301,0.354,-0.091,0.31,0.336,-0.042,0.322,0.309,-0.007,0.329,0.283,0.013,0.335,0.273,-0.287,0.337,0.339,-0.262,0.355,0.35,-0.222,0.375,0.358,-0.167,0.387,0.352,-0.113,0.386,0.335,-0.053,0.371,0.308,-0.009,0.351,0.287,0.692,0.488,-0.083,0.656,0.548,-0.002,0.589,0.579,0.081,0.494,0.579,0.165,0.357,0.536,0.246,0.705,0.509,-0.164,0.672,0.59,-0.061,0.603,0.637,0.043,0.503,0.644,0.159,0.374,0.63,0.244,-0.43,0.459,0.359,-0.344,0.528,0.383,-0.23,0.567,0.392,-0.086,0.568,0.381,0.097,0.528,0.351,-0.49,0.476,0.31,-0.399,0.567,0.349,-0.266,0.624,0.371,-0.101,0.635,0.38,0.071,0.623,0.357,0.54,-0.376,0.282,0.522,-0.393,0.346,0.499,-0.407,0.412,0.459,-0.429,0.464,0.404,-0.443,0.518,0.339,-0.45,0.552,0.262,-0.448,0.58,0.184,-0.433,0.585,0.118,-0.412,0.571,0.069,-0.395,0.547,0.036,-0.379,0.521,0.058,-0.343,0.553,0.101,-0.301,0.578,0.164,-0.257,0.59,0.256,-0.217,0.587,0.338,-0.231,0.566,0.406,-0.218,0.524,0.475,-0.253,0.459,0.515,-0.296,0.397,0.536,-0.337,0.333,0.516,-0.366,0.317,0.487,-0.354,0.351,0.462,-0.343,0.396,0.426,-0.335,0.437,0.382,-0.33,0.48,0.329,-0.332,0.517,0.264,-0.333,0.54,0.197,-0.336,0.543,0.141,-0.347,0.538,0.096,-0.36,0.53,0.058,-0.371,0.522,0.096,-0.36,0.531,0.14,-0.346,0.54,0.196,-0.334,0.546,0.263,-0.331,0.544,0.332,-0.331,0.522,0.384,-0.331,0.484,0.429,-0.333,0.44,0.463,-0.343,0.398,0.487,-0.354,0.351,0.249,0.438,0.338,0.276,0.373,0.401,0.304,0.314,0.467,0.328,0.259,0.542,0.356,0.2,0.618,0.381,0.123,0.663,0.385,0.047,0.658,0.373,-0.008,0.632,0.355,-0.043,0.563,0.34,-0.072,0.526,0.468,-0.066,0.38,0.125,-0.08,0.503,0.252,-0.076,0.538,0.408,-0.071,0.484,0.493,-0.002,0.304,0.064,-0.018,0.47,0.241,0.521,0.321,0.23,0.615,0.308,0.346,-0.547,0.514,0.655,0.252,-0.084,0.556,-0.671,0.39,0.722,0.226,-0.45,0.69,0.29,-0.186,0.56,0.024,0.238,0.429,0.195,0.245,0.509,0.022,0.423,0.699,0.011,0.079,0.666,0.627,-0.202,0.485,0.762,0.048,0.701,0.507,-0.325,0.463,0.017,0.508,0.419,-0.539,0.484,0.561,-0.219,0.348,0.486,0.147,0.209,0.576,0.099,0.165,0.597,0.714,-0.08,0.357,0.775,0.151,0.39,0.246,0.274,0.749,0.134,-0.219,0.691,0.165,-0.048,0.644,0.152,0.048,0.547,0.168,0.119,0.468,0.199,0.16,0.409,0.234,0.195,0.327,0.352,0.351,0.766,-0.001,-0.162,0.693,0.392,-0.144,0.446,0.138,0.291,0.365,0.277,0.212,0.478,0.101,0.457,0.444,0.156,0.524,0.701,-0.553,0.019,0.746,-0.067,-0.401,0.721,-0.475,-0.113,0.71,0.373,-0.411,0.491,0.078,0.263,0.76,-0.146,-0.132,0.202,0.777,0.228,0.665,-0.635,0.142,0.622,-0.698,0.255,0.493,-0.807,0.482,0.385,0.253,0.38,0.737,-0.221,-0.337,0.486,-0.509,0.43,0.733,-0.156,0.039,0.356,0.304,0.308,0.334,0.407,0.16,0.73,-0.348,-0.012,0.308,0.423,0.263,0.52,-0.588,0.409,0.438,0.147,0.392,0.371,-0.74,0.564,0.358,-0.638,0.538,0.447,-0.621,0.49,0.62,-0.469,0.265,0.575,-0.54,0.338,0.649,-0.063,0.201,0.592,-0.137,0.269,0.693,-0.191,0.157,0.661,-0.537,0.201,0.657,-0.383,0.207,0.749,-0.275,-0.111,0.73,-0.36,-0.255,0.637,-0.241,0.238,0.413,0.196,0.331,0.468,0.097,0.562,0.379,0.475,0.144,0.478,0.515,0.115,0.743,0.08,-0.436,0.596,0.218,0.034,0.529,0.223,0.091,0.458,0.241,0.127,0.4,0.267,0.151,0.41,0.206,0.443,0.331,0.336,0.18,0.271,0.243,0.55,0.296,-0.028,0.573,-0.381,0.22,0.336,0.095,-0.72,0.567,-0.676,0.184,0.12,-0.484,0.25,0.286,-0.055,-0.001,0.483,0.316,0.114,0.674,0.056,0.185,0.409,0.114,0.012,0.579,-0.292,-0.03,0.476,0.296,0.188,0.624,0.166,-0.026,0.541,-0.485,0.617,0.249,-0.159,0.766,0.3,-0.586,0.485,0.187,0.218,0.019,0.61,0.261,-0.549,0.54,0.036,-0.242,0.558,-0.017,0.133,0.425,-0.124,0.075,0.452,-0.348,0.713,0.286,0.081,-0.499,0.558,0.017,0.778,0.282,-0.457,0.159,0.334,-0.404,0.362,0.338,-0.548,0.088,0.311,-0.387,0.128,0.39,-0.277,0.122,0.423,-0.139,0.149,0.408,-0.042,0.186,0.383,0.032,0.227,0.365,-0.513,-0.06,0.361,0.08,0.127,0.45,0.154,0.092,0.584,0.226,0.149,0.614,-0.31,-0.648,0.415,-0.646,-0.129,0.168,-0.436,-0.57,0.349,-0.64,0.342,0.134,0.021,0.062,0.457,-0.495,-0.212,0.373,-0.537,0.355,0.272,0.109,-0.185,0.556,-0.182,-0.72,0.464,-0.06,-0.777,0.512,0.222,-0.841,0.589,0.186,0.247,0.472,-0.609,-0.298,0.21,0.165,-0.531,0.565,-0.021,-0.316,0.549,-0.355,-0.213,0.466,0.16,0.3,0.403,0.074,0.403,0.277,-0.372,-0.421,0.421,0.161,0.419,0.333,0.126,-0.625,0.562,0.15,0.138,0.511,0.25,-0.643,0.564,-0.068,-0.517,0.53,0.008,-0.085,0.487,0.022,-0.584,0.548,-0.164,-0.101,0.512,-0.054,-0.167,0.519,-0.229,-0.239,0.51,0.097,0.083,0.493,-0.141,-0.603,0.505,-0.026,-0.672,0.533,-0.135,-0.428,0.525,-0.47,-0.347,0.372,-0.249,-0.475,0.487,-0.549,-0.449,0.265,-0.108,-0.279,0.531,0.133,0.189,0.46,0.245,0.092,0.649,0.018,0.466,0.303,-0.099,0.507,0.345,-0.671,0.028,0.147,-0.243,0.195,0.381,-0.146,0.206,0.379,-0.06,0.231,0.357,0.056,0.288,0.312,0.212,0.2,0.536,0.127,0.331,0.334]},{"yaw":0.239,"pitch":0.013,"frame":[0.13,0.925,0.128,-0.081,0.917,0.18,-0.273,0.873,0.172,-0.465,0.783,0.116,-0.601,0.653,0.035,-0.694,0.493,-0.043,-0.741,0.33,-0.134,-0.754,0.138,-0.191,-0.736,-0.034,-0.197,-0.708,-0.203,-0.16,-0.662,-0.381,-0.096,-0.585,-0.563,0,-0.479,-0.695,0.116,-0.36,-0.777,0.226,-0.219,-0.842,0.309,-0.099,-0.881,0.372,0.025,-0.909,0.434,0.154,-0.925,0.464,0.301,-0.917,0.45,0.427,-0.894,0.381,0.508,-0.852,0.286,0.561,-0.805,0.174,0.604,-0.751,0.063,0.642,-0.677,-0.074,0.656,-0.594,-0.237,0.665,-0.471,-0.392,0.677,-0.301,-0.515,0.688,-0.134,-0.597,0.691,0.024,-0.645,0.701,0.187,-0.641,0.708,0.366,-0.573,0.698,0.521,-0.461,0.658,0.669,-0.34,0.579,0.789,-0.191,0.455,0.873,-0.045,0.311,0.914,0.069,0.594,0.336,-0.047,0.578,0.322,-0.016,0.56,0.314,0.011,0.533,0.308,0.043,0.487,0.306,0.073,0.436,0.312,0.091,0.386,0.321,0.093,0.35,0.327,0.086,0.333,0.335,0.088,0.582,0.352,-0.014,0.565,0.369,0.013,0.534,0.385,0.041,0.486,0.394,0.07,0.436,0.389,0.088,0.384,0.374,0.091,0.349,0.351,0.088,-0.341,0.307,0.243,-0.312,0.294,0.26,-0.28,0.288,0.274,-0.239,0.286,0.287,-0.184,0.29,0.29,-0.128,0.299,0.277,-0.078,0.311,0.254,-0.042,0.318,0.231,-0.022,0.323,0.223,-0.32,0.324,0.264,-0.296,0.342,0.278,-0.256,0.361,0.29,-0.203,0.374,0.29,-0.149,0.374,0.278,-0.09,0.36,0.255,-0.044,0.34,0.236,0.678,0.493,-0.054,0.636,0.553,0.021,0.563,0.583,0.099,0.461,0.58,0.172,0.318,0.533,0.238,0.696,0.515,-0.131,0.656,0.596,-0.034,0.579,0.643,0.064,0.47,0.648,0.168,0.334,0.63,0.239,-0.471,0.456,0.277,-0.393,0.526,0.309,-0.284,0.566,0.329,-0.141,0.566,0.332,0.047,0.523,0.316,-0.526,0.474,0.224,-0.445,0.568,0.273,-0.321,0.627,0.308,-0.158,0.636,0.333,0.018,0.622,0.324,0.488,-0.386,0.266,0.465,-0.4,0.326,0.437,-0.41,0.389,0.396,-0.426,0.437,0.339,-0.438,0.484,0.273,-0.445,0.514,0.197,-0.442,0.539,0.123,-0.43,0.533,0.06,-0.412,0.511,0.013,-0.397,0.478,-0.019,-0.381,0.447,0.002,-0.348,0.482,0.042,-0.309,0.514,0.102,-0.267,0.539,0.189,-0.23,0.549,0.269,-0.244,0.529,0.338,-0.232,0.493,0.409,-0.268,0.435,0.452,-0.309,0.377,0.477,-0.349,0.317,0.464,-0.377,0.298,0.431,-0.364,0.329,0.404,-0.352,0.37,0.365,-0.343,0.407,0.318,-0.338,0.445,0.263,-0.34,0.48,0.2,-0.341,0.497,0.136,-0.344,0.491,0.082,-0.354,0.48,0.039,-0.365,0.465,0.002,-0.375,0.452,0.04,-0.364,0.466,0.081,-0.352,0.483,0.134,-0.341,0.496,0.199,-0.339,0.503,0.265,-0.34,0.484,0.319,-0.34,0.45,0.366,-0.344,0.41,0.404,-0.355,0.372,0.431,-0.365,0.329,0.206,0.427,0.311,0.228,0.359,0.376,0.251,0.299,0.444,0.272,0.243,0.52,0.295,0.182,0.595,0.316,0.104,0.638,0.319,0.028,0.63,0.31,-0.026,0.604,0.295,-0.061,0.532,0.282,-0.089,0.493,0.417,-0.083,0.36,0.077,-0.094,0.454,0.195,-0.093,0.503,0.352,-0.089,0.457,0.446,-0.018,0.291,0.018,-0.032,0.414,0.197,0.515,0.296,0.186,0.611,0.285,0.285,-0.551,0.475,0.642,0.249,-0.063,0.508,-0.684,0.364,0.733,0.224,-0.416,0.686,0.289,-0.16,0.52,0.012,0.235,0.388,0.184,0.237,0.455,0.005,0.411,0.672,0.002,0.092,0.657,0.633,-0.169,0.457,0.765,0.064,0.7,0.513,-0.288,0.406,-0.001,0.492,0.361,-0.544,0.449,0.509,-0.232,0.334,0.449,0.137,0.206,0.543,0.09,0.168,0.579,0.719,-0.053,0.321,0.776,0.152,0.347,0.235,0.263,0.743,0.13,-0.191,0.676,0.161,-0.027,0.622,0.146,0.063,0.518,0.16,0.124,0.437,0.191,0.158,0.375,0.225,0.188,0.281,0.339,0.334,0.754,-0.008,-0.136,0.685,0.394,-0.115,0.401,0.125,0.281,0.328,0.267,0.201,0.424,0.084,0.444,0.388,0.139,0.51,0.675,-0.567,0.017,0.748,-0.073,-0.375,0.705,-0.489,-0.108,0.715,0.375,-0.375,0.448,0.066,0.256,0.745,-0.155,-0.113,0.159,0.775,0.209,0.633,-0.649,0.13,0.582,-0.711,0.235,0.439,-0.817,0.445,0.335,0.239,0.366,0.734,-0.231,-0.317,0.43,-0.515,0.403,0.708,-0.166,0.051,0.312,0.292,0.294,0.301,0.4,0.148,0.707,-0.359,-0.005,0.268,0.413,0.246,0.47,-0.599,0.383,0.388,0.131,0.379,0.31,-0.749,0.522,0.297,-0.645,0.498,0.392,-0.631,0.454,0.577,-0.479,0.251,0.528,-0.55,0.318,0.613,-0.074,0.203,0.549,-0.15,0.262,0.661,-0.202,0.161,0.624,-0.548,0.189,0.617,-0.393,0.201,0.733,-0.286,-0.097,0.722,-0.374,-0.242,0.597,-0.251,0.234,0.366,0.183,0.32,0.408,0.079,0.546,0.348,0.47,0.141,0.45,0.515,0.122,0.75,0.076,-0.404,0.574,0.213,0.047,0.503,0.217,0.098,0.429,0.235,0.128,0.37,0.26,0.146,0.357,0.19,0.429,0.298,0.328,0.166,0.214,0.227,0.518,0.237,-0.046,0.538,-0.411,0.209,0.252,0.04,-0.727,0.499,-0.68,0.174,0.013,-0.51,0.241,0.195,-0.104,-0.014,0.419,0.25,0.096,0.645,0.012,0.172,0.359,0.062,-0.004,0.529,-0.335,-0.042,0.391,0.234,0.171,0.595,0.114,-0.043,0.499,-0.515,0.613,0.169,-0.203,0.762,0.253,-0.607,0.481,0.095,0.16,0.001,0.574,0.201,-0.553,0.5,-0.019,-0.254,0.491,-0.061,0.121,0.367,-0.171,0.064,0.383,-0.385,0.71,0.22,0.026,-0.504,0.492,-0.027,0.775,0.252,-0.483,0.149,0.243,-0.438,0.353,0.255,-0.569,0.077,0.209,-0.418,0.117,0.302,-0.314,0.111,0.344,-0.179,0.137,0.34,-0.08,0.175,0.325,-0.006,0.215,0.315,-0.538,-0.071,0.257,0.034,0.113,0.4,0.1,0.075,0.543,0.167,0.132,0.579,-0.341,-0.654,0.315,-0.649,-0.141,0.054,-0.457,-0.579,0.242,-0.651,0.335,0.034,-0.025,0.049,0.4,-0.518,-0.224,0.268,-0.563,0.349,0.179,0.054,-0.199,0.498,-0.22,-0.725,0.372,-0.105,-0.781,0.428,0.164,-0.847,0.532,0.135,0.233,0.435,-0.613,-0.31,0.095,0.107,-0.536,0.509,-0.075,-0.325,0.474,-0.393,-0.224,0.373,0.113,0.287,0.365,0.035,0.393,0.237,-0.405,-0.43,0.322,0.119,0.408,0.299,0.07,-0.632,0.501,0.099,0.123,0.469,0.189,-0.65,0.52,-0.118,-0.524,0.45,-0.04,-0.099,0.425,-0.03,-0.591,0.477,-0.214,-0.114,0.437,-0.105,-0.18,0.449,-0.277,-0.25,0.427,0.05,0.068,0.444,-0.186,-0.61,0.418,-0.076,-0.677,0.454,-0.184,-0.436,0.441,-0.495,-0.358,0.267,-0.291,-0.483,0.397,-0.56,-0.46,0.151,-0.161,-0.288,0.454,0.085,0.175,0.416,0.182,0.074,0.614,-0.026,0.459,0.26,-0.147,0.502,0.293,-0.673,0.017,0.035,-0.279,0.184,0.307,-0.184,0.195,0.313,-0.097,0.219,0.299,0.019,0.277,0.266,0.156,0.185,0.499,0.088,0.319,0.295]},{"yaw":0.148,"pitch":0.008,"frame":[0.083,0.925,0.101,-0.129,0.914,0.129,-0.318,0.87,0.101,-0.501,0.778,0.026,-0.625,0.645,-0.071,-0.704,0.485,-0.159,-0.74,0.322,-0.257,-0.746,0.13,-0.317,-0.729,-0.042,-0.322,-0.705,-0.211,-0.283,-0.667,-0.387,-0.213,-0.603,-0.567,-0.109,-0.517,-0.696,0.018,-0.419,-0.775,0.142,-0.297,-0.84,0.238,-0.191,-0.88,0.312,-0.078,-0.908,0.384,0.045,-0.925,0.423,0.192,-0.92,0.417,0.326,-0.9,0.366,0.419,-0.86,0.283,0.488,-0.816,0.179,0.547,-0.765,0.074,0.605,-0.692,-0.057,0.639,-0.61,-0.215,0.665,-0.487,-0.366,0.687,-0.314,-0.487,0.702,-0.147,-0.568,0.709,0.011,-0.614,0.72,0.176,-0.61,0.722,0.358,-0.544,0.707,0.516,-0.433,0.659,0.668,-0.317,0.571,0.79,-0.178,0.431,0.876,-0.045,0.275,0.916,0.053,0.558,0.326,-0.033,0.541,0.312,-0.004,0.522,0.302,0.021,0.493,0.295,0.051,0.444,0.293,0.077,0.393,0.299,0.089,0.342,0.31,0.087,0.306,0.316,0.077,0.288,0.324,0.078,0.545,0.344,-0.001,0.526,0.361,0.024,0.495,0.378,0.049,0.445,0.388,0.074,0.395,0.383,0.087,0.343,0.366,0.086,0.305,0.342,0.08,-0.394,0.298,0.158,-0.369,0.283,0.179,-0.34,0.276,0.196,-0.302,0.274,0.213,-0.249,0.276,0.222,-0.193,0.286,0.214,-0.143,0.298,0.195,-0.107,0.306,0.174,-0.086,0.313,0.169,-0.376,0.315,0.182,-0.353,0.333,0.2,-0.317,0.353,0.215,-0.265,0.367,0.221,-0.21,0.367,0.214,-0.153,0.352,0.196,-0.107,0.33,0.18,0.654,0.487,-0.035,0.604,0.549,0.033,0.526,0.581,0.101,0.415,0.581,0.164,0.26,0.533,0.218,0.679,0.51,-0.11,0.632,0.594,-0.019,0.546,0.644,0.069,0.425,0.65,0.162,0.279,0.633,0.221,-0.52,0.45,0.183,-0.449,0.52,0.224,-0.346,0.56,0.256,-0.208,0.562,0.273,-0.023,0.521,0.274,-0.569,0.469,0.125,-0.498,0.562,0.184,-0.382,0.622,0.232,-0.224,0.633,0.273,-0.051,0.621,0.281,0.414,-0.391,0.271,0.391,-0.403,0.326,0.36,-0.41,0.385,0.313,-0.424,0.428,0.252,-0.434,0.466,0.182,-0.439,0.486,0.104,-0.436,0.505,0.031,-0.426,0.492,-0.03,-0.412,0.467,-0.074,-0.399,0.429,-0.103,-0.386,0.392,-0.081,-0.353,0.43,-0.043,-0.313,0.466,0.014,-0.271,0.496,0.098,-0.233,0.514,0.179,-0.248,0.501,0.25,-0.235,0.474,0.324,-0.272,0.425,0.37,-0.314,0.374,0.399,-0.355,0.319,0.391,-0.382,0.298,0.357,-0.366,0.326,0.326,-0.353,0.362,0.284,-0.342,0.394,0.233,-0.335,0.425,0.175,-0.337,0.448,0.109,-0.337,0.46,0.046,-0.342,0.451,-0.005,-0.354,0.436,-0.046,-0.367,0.418,-0.082,-0.379,0.402,-0.043,-0.367,0.419,-0.004,-0.352,0.44,0.048,-0.34,0.457,0.111,-0.336,0.468,0.177,-0.336,0.455,0.234,-0.336,0.431,0.284,-0.341,0.398,0.326,-0.355,0.365,0.356,-0.368,0.326,0.134,0.421,0.282,0.148,0.354,0.346,0.163,0.293,0.416,0.175,0.237,0.493,0.189,0.176,0.568,0.201,0.095,0.612,0.204,0.018,0.604,0.198,-0.035,0.578,0.19,-0.07,0.504,0.182,-0.097,0.465,0.332,-0.093,0.346,-0.015,-0.1,0.409,0.096,-0.099,0.469,0.257,-0.097,0.435,0.367,-0.028,0.281,-0.068,-0.038,0.364,0.128,0.513,0.267,0.12,0.611,0.257,0.184,-0.551,0.445,0.61,0.238,-0.046,0.419,-0.693,0.362,0.736,0.214,-0.383,0.667,0.279,-0.137,0.454,0.002,0.235,0.322,0.176,0.225,0.365,-0.003,0.401,0.623,-0.01,0.109,0.645,0.631,-0.15,0.422,0.768,0.061,0.695,0.509,-0.263,0.305,-0.008,0.477,0.264,-0.546,0.429,0.426,-0.241,0.333,0.387,0.128,0.2,0.486,0.08,0.171,0.558,0.72,-0.044,0.273,0.777,0.136,0.278,0.228,0.247,0.723,0.119,-0.159,0.64,0.15,-0.006,0.576,0.135,0.076,0.466,0.149,0.126,0.38,0.18,0.153,0.314,0.216,0.176,0.205,0.333,0.31,0.725,-0.021,-0.105,0.663,0.387,-0.093,0.326,0.117,0.269,0.265,0.259,0.185,0.332,0.076,0.431,0.29,0.132,0.493,0.629,-0.579,0.037,0.739,-0.086,-0.341,0.674,-0.502,-0.082,0.715,0.369,-0.346,0.378,0.056,0.249,0.714,-0.168,-0.083,0.102,0.775,0.182,0.572,-0.661,0.143,0.508,-0.721,0.241,0.335,-0.824,0.434,0.255,0.233,0.347,0.722,-0.243,-0.285,0.34,-0.519,0.395,0.663,-0.178,0.073,0.24,0.286,0.273,0.249,0.393,0.13,0.666,-0.37,0.019,0.204,0.408,0.223,0.382,-0.608,0.376,0.303,0.123,0.363,0.199,-0.754,0.493,0.191,-0.649,0.469,0.293,-0.637,0.438,0.505,-0.488,0.259,0.448,-0.559,0.319,0.552,-0.085,0.211,0.477,-0.16,0.264,0.604,-0.214,0.176,0.558,-0.558,0.201,0.55,-0.403,0.215,0.701,-0.298,-0.069,0.704,-0.386,-0.212,0.528,-0.262,0.242,0.288,0.176,0.305,0.304,0.071,0.529,0.3,0.466,0.128,0.406,0.512,0.117,0.746,0.064,-0.369,0.531,0.202,0.056,0.456,0.206,0.1,0.379,0.223,0.124,0.317,0.25,0.134,0.268,0.183,0.411,0.242,0.319,0.147,0.117,0.222,0.486,0.132,-0.053,0.507,-0.461,0.201,0.162,-0.066,-0.729,0.453,-0.694,0.168,-0.105,-0.551,0.234,0.095,-0.184,-0.02,0.357,0.136,0.087,0.614,-0.063,0.165,0.308,-0.035,-0.011,0.481,-0.405,-0.049,0.307,0.129,0.164,0.563,0.019,-0.049,0.455,-0.555,0.607,0.072,-0.26,0.759,0.187,-0.634,0.474,-0.012,0.056,-0.007,0.535,0.101,-0.552,0.465,-0.108,-0.258,0.438,-0.136,0.113,0.308,-0.244,0.056,0.314,-0.436,0.705,0.137,-0.067,-0.505,0.443,-0.087,0.772,0.206,-0.53,0.141,0.145,-0.486,0.345,0.164,-0.61,0.07,0.101,-0.474,0.109,0.211,-0.376,0.103,0.262,-0.245,0.127,0.271,-0.148,0.165,0.265,-0.074,0.206,0.262,-0.585,-0.078,0.152,-0.046,0.106,0.35,0.003,0.068,0.499,0.065,0.125,0.544,-0.411,-0.653,0.235,-0.67,-0.147,-0.062,-0.509,-0.578,0.148,-0.67,0.328,-0.079,-0.105,0.042,0.346,-0.568,-0.229,0.166,-0.599,0.343,0.075,-0.039,-0.204,0.45,-0.304,-0.725,0.305,-0.201,-0.781,0.371,0.05,-0.848,0.492,0.049,0.227,0.396,-0.64,-0.314,-0.016,0.01,-0.536,0.466,-0.161,-0.328,0.416,-0.459,-0.23,0.285,0.036,0.281,0.324,-0.031,0.385,0.192,-0.469,-0.433,0.234,0.048,0.402,0.262,-0.032,-0.634,0.456,0.009,0.117,0.426,0.082,-0.652,0.484,-0.206,-0.527,0.392,-0.125,-0.105,0.37,-0.125,-0.593,0.426,-0.294,-0.119,0.367,-0.191,-0.185,0.389,-0.353,-0.255,0.352,-0.036,0.062,0.396,-0.274,-0.611,0.354,-0.172,-0.679,0.4,-0.266,-0.439,0.374,-0.546,-0.362,0.17,-0.368,-0.485,0.322,-0.595,-0.462,0.046,-0.245,-0.293,0.389,0.002,0.168,0.371,0.073,0.067,0.579,-0.091,0.453,0.21,-0.211,0.497,0.232,-0.691,0.01,-0.083,-0.34,0.174,0.229,-0.248,0.184,0.243,-0.162,0.208,0.239,-0.047,0.267,0.216,0.063,0.179,0.462,0.018,0.311,0.252]},{"yaw":0.091,"pitch":0.008,"frame":[0.045,0.925,0.074,-0.166,0.913,0.081,-0.351,0.867,0.037,-0.528,0.774,-0.049,-0.644,0.642,-0.155,-0.713,0.483,-0.248,-0.742,0.321,-0.348,-0.745,0.129,-0.407,-0.731,-0.042,-0.411,-0.712,-0.211,-0.368,-0.679,-0.386,-0.294,-0.623,-0.563,-0.184,-0.545,-0.688,-0.049,-0.456,-0.767,0.084,-0.344,-0.832,0.19,-0.244,-0.874,0.271,-0.137,-0.904,0.351,-0.019,-0.925,0.399,0.127,-0.924,0.4,0.266,-0.91,0.364,0.366,-0.873,0.289,0.445,-0.83,0.189,0.514,-0.781,0.088,0.586,-0.707,-0.039,0.633,-0.625,-0.194,0.672,-0.502,-0.343,0.702,-0.329,-0.464,0.721,-0.159,-0.546,0.729,0.003,-0.594,0.739,0.17,-0.591,0.732,0.355,-0.526,0.709,0.515,-0.418,0.652,0.668,-0.308,0.555,0.792,-0.175,0.406,0.878,-0.053,0.242,0.918,0.033,0.536,0.323,-0.026,0.516,0.308,0.002,0.496,0.299,0.026,0.465,0.292,0.054,0.414,0.29,0.077,0.36,0.296,0.085,0.308,0.306,0.079,0.27,0.313,0.067,0.251,0.32,0.066,0.521,0.341,0.005,0.501,0.357,0.029,0.468,0.375,0.052,0.416,0.385,0.073,0.364,0.38,0.083,0.31,0.362,0.078,0.27,0.338,0.07,-0.431,0.297,0.093,-0.407,0.282,0.116,-0.38,0.276,0.134,-0.342,0.272,0.154,-0.289,0.274,0.167,-0.231,0.284,0.163,-0.18,0.295,0.147,-0.144,0.304,0.127,-0.122,0.31,0.123,-0.415,0.314,0.118,-0.393,0.332,0.138,-0.357,0.353,0.154,-0.304,0.368,0.164,-0.249,0.367,0.162,-0.189,0.351,0.147,-0.145,0.329,0.133,0.635,0.481,-0.026,0.58,0.545,0.037,0.495,0.579,0.099,0.378,0.579,0.155,0.215,0.531,0.2,0.664,0.504,-0.1,0.61,0.589,-0.014,0.517,0.641,0.068,0.388,0.649,0.152,0.235,0.632,0.203,-0.557,0.444,0.11,-0.49,0.513,0.157,-0.391,0.555,0.196,-0.255,0.559,0.223,-0.07,0.518,0.236,-0.601,0.463,0.047,-0.536,0.555,0.113,-0.425,0.615,0.169,-0.272,0.629,0.221,-0.099,0.618,0.241,0.359,-0.395,0.28,0.334,-0.406,0.333,0.3,-0.414,0.389,0.25,-0.428,0.428,0.184,-0.438,0.461,0.111,-0.443,0.474,0.033,-0.44,0.483,-0.039,-0.429,0.468,-0.095,-0.413,0.439,-0.136,-0.4,0.396,-0.162,-0.387,0.355,-0.145,-0.353,0.394,-0.111,-0.311,0.433,-0.056,-0.268,0.466,0.027,-0.231,0.49,0.108,-0.246,0.484,0.183,-0.233,0.464,0.262,-0.272,0.421,0.312,-0.316,0.375,0.343,-0.358,0.325,0.335,-0.385,0.304,0.301,-0.368,0.33,0.267,-0.353,0.363,0.221,-0.341,0.392,0.167,-0.334,0.418,0.105,-0.336,0.434,0.042,-0.336,0.438,-0.02,-0.341,0.427,-0.068,-0.353,0.409,-0.106,-0.366,0.387,-0.141,-0.379,0.368,-0.103,-0.364,0.387,-0.066,-0.349,0.411,-0.017,-0.336,0.43,0.042,-0.332,0.445,0.108,-0.333,0.438,0.168,-0.333,0.422,0.222,-0.339,0.394,0.266,-0.355,0.364,0.299,-0.37,0.329,0.085,0.421,0.259,0.094,0.352,0.323,0.104,0.292,0.393,0.112,0.236,0.472,0.122,0.174,0.549,0.13,0.092,0.594,0.132,0.015,0.586,0.129,-0.038,0.559,0.123,-0.071,0.484,0.119,-0.096,0.445,0.279,-0.094,0.336,-0.074,-0.098,0.376,0.033,-0.098,0.444,0.196,-0.098,0.42,0.318,-0.03,0.274,-0.124,-0.037,0.326,0.079,0.513,0.244,0.072,0.611,0.233,0.117,-0.553,0.43,0.591,0.233,-0.035,0.364,-0.704,0.366,0.737,0.209,-0.363,0.654,0.273,-0.123,0.411,-0.002,0.235,0.278,0.173,0.215,0.31,-0.004,0.395,0.593,-0.017,0.122,0.63,0.631,-0.143,0.389,0.769,0.052,0.688,0.507,-0.25,0.244,-0.009,0.467,0.201,-0.549,0.421,0.371,-0.245,0.335,0.346,0.124,0.195,0.449,0.075,0.173,0.534,0.721,-0.044,0.234,0.778,0.117,0.232,0.225,0.234,0.71,0.112,-0.139,0.619,0.143,0.008,0.548,0.129,0.085,0.431,0.144,0.128,0.342,0.176,0.148,0.273,0.212,0.166,0.153,0.332,0.29,0.708,-0.031,-0.083,0.649,0.381,-0.08,0.279,0.114,0.26,0.221,0.256,0.171,0.276,0.074,0.422,0.229,0.13,0.481,0.601,-0.594,0.056,0.737,-0.096,-0.317,0.657,-0.516,-0.059,0.713,0.365,-0.33,0.334,0.053,0.243,0.697,-0.18,-0.061,0.059,0.775,0.158,0.535,-0.675,0.158,0.463,-0.735,0.252,0.273,-0.833,0.433,0.201,0.231,0.331,0.719,-0.256,-0.261,0.28,-0.524,0.395,0.636,-0.189,0.09,0.191,0.284,0.257,0.208,0.391,0.113,0.641,-0.383,0.039,0.158,0.405,0.203,0.325,-0.616,0.378,0.25,0.121,0.352,0.129,-0.758,0.481,0.123,-0.652,0.456,0.23,-0.643,0.433,0.457,-0.497,0.27,0.396,-0.569,0.325,0.513,-0.091,0.219,0.431,-0.165,0.267,0.567,-0.222,0.189,0.516,-0.571,0.215,0.505,-0.412,0.23,0.684,-0.31,-0.047,0.697,-0.4,-0.187,0.483,-0.269,0.252,0.238,0.174,0.293,0.24,0.069,0.518,0.261,0.464,0.115,0.371,0.51,0.11,0.745,0.057,-0.346,0.503,0.198,0.062,0.423,0.201,0.1,0.343,0.219,0.119,0.278,0.246,0.124,0.211,0.182,0.397,0.2,0.317,0.131,0.055,0.221,0.463,0.066,-0.054,0.484,-0.496,0.2,0.094,-0.13,-0.727,0.423,-0.707,0.168,-0.191,-0.582,0.233,0.021,-0.237,-0.02,0.311,0.065,0.086,0.593,-0.112,0.164,0.267,-0.096,-0.009,0.444,-0.452,-0.049,0.245,0.061,0.163,0.541,-0.042,-0.049,0.423,-0.584,0.604,-0.005,-0.301,0.757,0.13,-0.655,0.472,-0.094,-0.01,-0.009,0.504,0.035,-0.553,0.442,-0.168,-0.257,0.401,-0.185,0.112,0.263,-0.293,0.054,0.262,-0.472,0.702,0.069,-0.126,-0.504,0.412,-0.129,0.772,0.161,-0.565,0.14,0.073,-0.522,0.342,0.094,-0.639,0.07,0.023,-0.513,0.108,0.142,-0.42,0.101,0.201,-0.289,0.125,0.218,-0.192,0.162,0.218,-0.117,0.203,0.22,-0.619,-0.078,0.077,-0.099,0.106,0.311,-0.059,0.068,0.464,0,0.125,0.515,-0.455,-0.647,0.18,-0.689,-0.146,-0.144,-0.545,-0.572,0.084,-0.685,0.327,-0.164,-0.157,0.042,0.304,-0.604,-0.228,0.095,-0.627,0.341,-0.005,-0.101,-0.202,0.415,-0.355,-0.719,0.258,-0.257,-0.775,0.332,-0.017,-0.848,0.468,-0.006,0.226,0.363,-0.662,-0.312,-0.094,-0.054,-0.534,0.439,-0.219,-0.327,0.376,-0.504,-0.229,0.223,-0.014,0.28,0.289,-0.07,0.383,0.152,-0.51,-0.429,0.173,0.003,0.4,0.229,-0.096,-0.633,0.428,-0.048,0.117,0.391,0.015,-0.653,0.461,-0.263,-0.524,0.353,-0.179,-0.103,0.329,-0.185,-0.591,0.392,-0.345,-0.119,0.316,-0.246,-0.184,0.345,-0.405,-0.254,0.299,-0.091,0.062,0.359,-0.327,-0.607,0.31,-0.232,-0.675,0.364,-0.322,-0.437,0.329,-0.583,-0.359,0.102,-0.417,-0.481,0.27,-0.623,-0.458,-0.027,-0.3,-0.292,0.344,-0.051,0.168,0.334,0.004,0.065,0.552,-0.133,0.452,0.166,-0.254,0.495,0.181,-0.706,0.01,-0.168,-0.38,0.173,0.169,-0.29,0.182,0.19,-0.202,0.206,0.191,-0.087,0.265,0.176,0.002,0.178,0.43,-0.025,0.309,0.216]},{"yaw":0.024,"pitch":0.01,"frame":[-0.003,0.925,0.041,-0.21,0.912,0.034,-0.389,0.865,-0.024,-0.556,0.772,-0.125,-0.662,0.642,-0.242,-0.721,0.483,-0.342,-0.744,0.323,-0.446,-0.746,0.131,-0.507,-0.736,-0.039,-0.511,-0.719,-0.206,-0.467,-0.691,-0.379,-0.39,-0.64,-0.552,-0.275,-0.572,-0.675,-0.132,-0.497,-0.752,0.01,-0.4,-0.82,0.124,-0.313,-0.865,0.214,-0.218,-0.898,0.302,-0.107,-0.922,0.361,0.037,-0.925,0.374,0.183,-0.913,0.345,0.294,-0.878,0.278,0.386,-0.836,0.183,0.467,-0.787,0.088,0.554,-0.713,-0.032,0.618,-0.633,-0.181,0.672,-0.511,-0.325,0.711,-0.335,-0.443,0.733,-0.164,-0.522,0.742,-0.003,-0.568,0.746,0.164,-0.565,0.732,0.351,-0.501,0.703,0.512,-0.395,0.641,0.666,-0.29,0.535,0.791,-0.167,0.375,0.878,-0.056,0.202,0.918,0.015,0.497,0.324,-0.018,0.474,0.312,0.009,0.452,0.304,0.031,0.418,0.298,0.056,0.366,0.298,0.076,0.312,0.304,0.079,0.258,0.313,0.07,0.219,0.317,0.055,0.199,0.324,0.053,0.481,0.341,0.012,0.459,0.357,0.034,0.425,0.375,0.055,0.372,0.385,0.072,0.319,0.381,0.078,0.262,0.364,0.069,0.219,0.34,0.059,-0.477,0.299,0.022,-0.452,0.286,0.047,-0.427,0.281,0.068,-0.39,0.279,0.091,-0.34,0.281,0.107,-0.283,0.29,0.108,-0.232,0.3,0.095,-0.195,0.308,0.078,-0.173,0.314,0.075,-0.461,0.315,0.05,-0.44,0.333,0.071,-0.405,0.354,0.091,-0.355,0.368,0.105,-0.299,0.368,0.107,-0.241,0.353,0.095,-0.196,0.331,0.083,0.605,0.478,-0.011,0.544,0.542,0.046,0.452,0.577,0.101,0.327,0.578,0.146,0.155,0.531,0.179,0.641,0.499,-0.083,0.58,0.585,-0.003,0.478,0.638,0.071,0.339,0.647,0.144,0.177,0.631,0.184,-0.602,0.446,0.033,-0.541,0.514,0.086,-0.447,0.555,0.134,-0.315,0.559,0.172,-0.134,0.518,0.195,-0.642,0.465,-0.035,-0.583,0.555,0.039,-0.479,0.615,0.105,-0.332,0.628,0.169,-0.163,0.617,0.2,0.295,-0.395,0.273,0.265,-0.406,0.323,0.226,-0.413,0.376,0.172,-0.428,0.414,0.102,-0.438,0.443,0.025,-0.442,0.45,-0.053,-0.437,0.453,-0.122,-0.425,0.431,-0.178,-0.409,0.397,-0.217,-0.395,0.348,-0.244,-0.382,0.301,-0.226,-0.348,0.344,-0.193,-0.307,0.388,-0.139,-0.264,0.427,-0.057,-0.226,0.459,0.025,-0.242,0.459,0.104,-0.23,0.445,0.187,-0.271,0.408,0.24,-0.315,0.365,0.275,-0.358,0.318,0.271,-0.385,0.294,0.234,-0.369,0.318,0.196,-0.354,0.349,0.147,-0.341,0.375,0.088,-0.332,0.399,0.023,-0.334,0.41,-0.04,-0.334,0.409,-0.101,-0.337,0.392,-0.148,-0.349,0.368,-0.186,-0.362,0.34,-0.223,-0.374,0.319,-0.184,-0.36,0.341,-0.147,-0.346,0.371,-0.1,-0.334,0.395,-0.039,-0.331,0.415,0.026,-0.332,0.414,0.089,-0.333,0.403,0.148,-0.339,0.378,0.196,-0.355,0.351,0.233,-0.37,0.318,0.017,0.423,0.229,0.021,0.356,0.294,0.026,0.296,0.364,0.029,0.239,0.444,0.033,0.178,0.523,0.037,0.096,0.568,0.038,0.019,0.56,0.038,-0.033,0.534,0.037,-0.066,0.457,0.035,-0.093,0.418,0.213,-0.092,0.32,-0.151,-0.093,0.337,-0.05,-0.094,0.412,0.119,-0.094,0.399,0.256,-0.028,0.262,-0.197,-0.032,0.283,0.014,0.514,0.213,0.009,0.611,0.203,0.03,-0.555,0.405,0.559,0.231,-0.023,0.29,-0.708,0.354,0.729,0.204,-0.337,0.632,0.269,-0.106,0.354,-0.002,0.23,0.219,0.175,0.201,0.241,-0.001,0.383,0.549,-0.02,0.133,0.608,0.629,-0.129,0.348,0.77,0.046,0.673,0.503,-0.23,0.165,-0.002,0.451,0.118,-0.551,0.399,0.305,-0.245,0.328,0.29,0.125,0.187,0.397,0.075,0.172,0.504,0.721,-0.039,0.186,0.779,0.099,0.169,0.228,0.217,0.69,0.108,-0.116,0.585,0.141,0.023,0.505,0.129,0.094,0.381,0.146,0.127,0.287,0.179,0.14,0.215,0.215,0.152,0.083,0.335,0.266,0.685,-0.036,-0.06,0.624,0.378,-0.064,0.217,0.117,0.247,0.16,0.26,0.154,0.203,0.078,0.408,0.149,0.133,0.464,0.562,-0.599,0.065,0.729,-0.101,-0.291,0.631,-0.521,-0.044,0.702,0.361,-0.306,0.275,0.054,0.233,0.674,-0.185,-0.04,0.004,0.775,0.126,0.484,-0.68,0.159,0.402,-0.74,0.247,0.187,-0.837,0.414,0.13,0.234,0.312,0.71,-0.261,-0.238,0.204,-0.526,0.38,0.598,-0.192,0.104,0.125,0.287,0.236,0.152,0.394,0.093,0.607,-0.387,0.052,0.094,0.408,0.179,0.251,-0.619,0.363,0.18,0.124,0.335,0.036,-0.759,0.455,0.033,-0.653,0.43,0.146,-0.645,0.413,0.397,-0.501,0.266,0.33,-0.573,0.316,0.46,-0.093,0.221,0.371,-0.166,0.263,0.518,-0.225,0.196,0.461,-0.575,0.215,0.449,-0.415,0.231,0.659,-0.315,-0.029,0.684,-0.406,-0.167,0.426,-0.271,0.252,0.171,0.177,0.276,0.156,0.073,0.501,0.207,0.465,0.099,0.323,0.511,0.101,0.738,0.052,-0.318,0.46,0.199,0.067,0.374,0.204,0.099,0.291,0.223,0.112,0.223,0.25,0.111,0.134,0.185,0.378,0.142,0.32,0.111,-0.028,0.224,0.431,-0.019,-0.05,0.455,-0.538,0.203,0.019,-0.216,-0.722,0.378,-0.722,0.171,-0.286,-0.618,0.235,-0.061,-0.304,-0.016,0.259,-0.028,0.09,0.564,-0.175,0.167,0.222,-0.179,-0.005,0.403,-0.507,-0.043,0.175,-0.026,0.167,0.511,-0.124,-0.044,0.385,-0.616,0.604,-0.085,-0.35,0.756,0.073,-0.679,0.473,-0.182,-0.095,-0.003,0.467,-0.052,-0.553,0.411,-0.247,-0.252,0.352,-0.247,0.116,0.213,-0.354,0.059,0.204,-0.512,0.701,-0.001,-0.209,-0.5,0.365,-0.183,0.771,0.117,-0.602,0.144,-0.007,-0.566,0.345,0.018,-0.671,0.074,-0.065,-0.556,0.112,0.066,-0.47,0.106,0.133,-0.343,0.13,0.159,-0.247,0.167,0.166,-0.174,0.208,0.174,-0.656,-0.071,-0.01,-0.168,0.11,0.267,-0.142,0.073,0.425,-0.085,0.129,0.479,-0.505,-0.634,0.107,-0.708,-0.139,-0.239,-0.583,-0.559,0.003,-0.703,0.329,-0.256,-0.226,0.046,0.257,-0.641,-0.22,0.01,-0.661,0.343,-0.09,-0.181,-0.198,0.372,-0.417,-0.709,0.194,-0.33,-0.766,0.276,-0.11,-0.846,0.432,-0.08,0.23,0.326,-0.684,-0.303,-0.186,-0.14,-0.532,0.399,-0.297,-0.322,0.322,-0.555,-0.221,0.148,-0.083,0.283,0.251,-0.127,0.386,0.11,-0.559,-0.419,0.097,-0.062,0.402,0.191,-0.181,-0.63,0.385,-0.124,0.121,0.352,-0.076,-0.653,0.428,-0.337,-0.518,0.296,-0.251,-0.099,0.282,-0.265,-0.586,0.342,-0.411,-0.113,0.256,-0.318,-0.179,0.292,-0.468,-0.247,0.234,-0.165,0.066,0.317,-0.397,-0.599,0.249,-0.309,-0.668,0.311,-0.393,-0.43,0.267,-0.621,-0.349,0.019,-0.478,-0.472,0.202,-0.65,-0.446,-0.116,-0.372,-0.286,0.285,-0.122,0.172,0.294,-0.086,0.07,0.517,-0.189,0.452,0.12,-0.31,0.495,0.128,-0.723,0.015,-0.265,-0.429,0.177,0.103,-0.341,0.187,0.131,-0.256,0.21,0.138,-0.142,0.268,0.132,-0.078,0.182,0.393,-0.087,0.312,0.177]},{"yaw":-0.03,"pitch":0.017,"frame":[-0.043,0.925,0.039,-0.249,0.911,0.02,-0.423,0.863,-0.053,-0.581,0.771,-0.166,-0.679,0.642,-0.293,-0.731,0.485,-0.401,-0.749,0.326,-0.508,-0.748,0.138,-0.572,-0.737,-0.031,-0.576,-0.721,-0.194,-0.531,-0.695,-0.363,-0.452,-0.653,-0.535,-0.332,-0.598,-0.656,-0.184,-0.538,-0.735,-0.034,-0.456,-0.806,0.088,-0.379,-0.854,0.185,-0.292,-0.89,0.281,-0.186,-0.919,0.351,-0.042,-0.925,0.379,0.108,-0.917,0.358,0.225,-0.883,0.3,0.326,-0.842,0.212,0.416,-0.794,0.124,0.514,-0.721,0.011,0.588,-0.64,-0.131,0.654,-0.517,-0.27,0.703,-0.34,-0.385,0.731,-0.168,-0.462,0.744,-0.004,-0.506,0.749,0.163,-0.502,0.734,0.351,-0.439,0.702,0.513,-0.335,0.632,0.669,-0.235,0.518,0.795,-0.121,0.348,0.881,-0.023,0.167,0.92,0.032,0.459,0.327,0.027,0.435,0.315,0.052,0.412,0.309,0.072,0.377,0.304,0.094,0.324,0.304,0.11,0.27,0.311,0.109,0.218,0.319,0.096,0.18,0.323,0.078,0.16,0.33,0.075,0.443,0.343,0.055,0.421,0.359,0.076,0.387,0.376,0.095,0.334,0.387,0.108,0.281,0.384,0.109,0.224,0.368,0.096,0.181,0.346,0.083,-0.509,0.298,-0.016,-0.488,0.286,0.011,-0.465,0.282,0.033,-0.431,0.28,0.059,-0.382,0.282,0.079,-0.327,0.29,0.084,-0.277,0.301,0.075,-0.242,0.308,0.06,-0.221,0.315,0.058,-0.494,0.314,0.013,-0.476,0.332,0.036,-0.441,0.352,0.058,-0.394,0.366,0.077,-0.34,0.366,0.083,-0.284,0.352,0.075,-0.242,0.332,0.065,0.575,0.477,0.041,0.509,0.542,0.093,0.413,0.579,0.139,0.282,0.581,0.173,0.104,0.533,0.194,0.616,0.498,-0.028,0.55,0.586,0.046,0.441,0.64,0.11,0.294,0.65,0.172,0.128,0.633,0.2,-0.637,0.45,-0.011,-0.582,0.517,0.049,-0.492,0.557,0.105,-0.364,0.561,0.152,-0.189,0.521,0.187,-0.674,0.47,-0.082,-0.621,0.559,-0.001,-0.521,0.617,0.074,-0.381,0.63,0.15,-0.217,0.62,0.191,0.228,-0.395,0.304,0.196,-0.405,0.349,0.156,-0.412,0.397,0.099,-0.425,0.43,0.029,-0.432,0.453,-0.047,-0.435,0.457,-0.123,-0.432,0.454,-0.191,-0.422,0.422,-0.244,-0.408,0.383,-0.281,-0.397,0.33,-0.307,-0.385,0.279,-0.29,-0.351,0.325,-0.258,-0.309,0.375,-0.205,-0.265,0.421,-0.124,-0.226,0.461,-0.045,-0.241,0.469,0.035,-0.227,0.46,0.119,-0.269,0.43,0.173,-0.315,0.391,0.208,-0.359,0.347,0.204,-0.385,0.321,0.167,-0.369,0.341,0.129,-0.353,0.368,0.078,-0.338,0.391,0.017,-0.329,0.41,-0.047,-0.33,0.416,-0.109,-0.331,0.41,-0.168,-0.336,0.385,-0.213,-0.348,0.357,-0.249,-0.363,0.325,-0.285,-0.376,0.301,-0.247,-0.361,0.327,-0.211,-0.346,0.361,-0.165,-0.332,0.391,-0.107,-0.328,0.418,-0.044,-0.329,0.423,0.019,-0.329,0.417,0.079,-0.336,0.397,0.129,-0.354,0.372,0.167,-0.37,0.343,-0.041,0.427,0.231,-0.042,0.361,0.297,-0.04,0.302,0.369,-0.042,0.246,0.45,-0.042,0.186,0.53,-0.042,0.107,0.576,-0.041,0.031,0.569,-0.04,-0.021,0.542,-0.037,-0.055,0.464,-0.038,-0.083,0.426,0.15,-0.086,0.339,-0.216,-0.089,0.33,-0.121,-0.087,0.413,0.048,-0.086,0.412,0.197,-0.023,0.284,-0.261,-0.028,0.27,-0.042,0.516,0.215,-0.044,0.613,0.205,-0.046,-0.554,0.411,0.526,0.232,0.026,0.216,-0.712,0.375,0.721,0.203,-0.275,0.606,0.268,-0.053,0.297,0,0.26,0.166,0.179,0.222,0.176,0.007,0.406,0.499,-0.02,0.179,0.589,0.631,-0.078,0.312,0.773,0.076,0.66,0.504,-0.174,0.094,0.01,0.469,0.043,-0.552,0.408,0.239,-0.245,0.356,0.239,0.128,0.213,0.345,0.076,0.206,0.477,0.723,0.004,0.144,0.781,0.115,0.115,0.233,0.235,0.663,0.106,-0.057,0.547,0.141,0.073,0.461,0.13,0.137,0.333,0.149,0.162,0.239,0.183,0.167,0.167,0.221,0.174,0.022,0.34,0.275,0.65,-0.038,-0.001,0.596,0.377,-0.011,0.161,0.121,0.268,0.111,0.266,0.172,0.137,0.085,0.427,0.079,0.141,0.481,0.513,-0.604,0.108,0.71,-0.103,-0.23,0.591,-0.526,0.006,0.692,0.361,-0.247,0.219,0.058,0.258,0.636,-0.188,0.016,-0.043,0.777,0.125,0.429,-0.686,0.194,0.338,-0.746,0.275,0.108,-0.84,0.428,0.068,0.24,0.326,0.687,-0.264,-0.179,0.131,-0.529,0.397,0.549,-0.195,0.152,0.068,0.292,0.25,0.107,0.399,0.108,0.559,-0.39,0.1,0.041,0.413,0.188,0.178,-0.623,0.382,0.118,0.13,0.353,-0.045,-0.758,0.461,-0.046,-0.653,0.436,0.068,-0.647,0.423,0.334,-0.505,0.298,0.263,-0.577,0.341,0.402,-0.093,0.258,0.309,-0.165,0.295,0.461,-0.227,0.236,0.402,-0.58,0.25,0.388,-0.419,0.269,0.62,-0.318,0.024,0.654,-0.41,-0.111,0.364,-0.272,0.288,0.113,0.182,0.294,0.082,0.084,0.517,0.163,0.468,0.119,0.281,0.513,0.13,0.724,0.05,-0.255,0.419,0.202,0.107,0.331,0.208,0.134,0.246,0.228,0.139,0.179,0.256,0.133,0.068,0.191,0.394,0.096,0.326,0.126,-0.098,0.231,0.432,-0.092,-0.04,0.458,-0.57,0.206,-0.023,-0.291,-0.716,0.36,-0.736,0.178,-0.345,-0.645,0.24,-0.109,-0.361,-0.011,0.236,-0.107,0.1,0.568,-0.232,0.171,0.209,-0.248,0.001,0.393,-0.551,-0.037,0.135,-0.101,0.176,0.513,-0.192,-0.038,0.379,-0.645,0.606,-0.13,-0.392,0.756,0.049,-0.7,0.477,-0.235,-0.168,0.006,0.463,-0.128,-0.551,0.41,-0.312,-0.249,0.336,-0.301,0.12,0.193,-0.405,0.063,0.177,-0.548,0.701,-0.037,-0.279,-0.498,0.348,-0.228,0.772,0.104,-0.63,0.149,-0.055,-0.598,0.347,-0.024,-0.694,0.082,-0.119,-0.59,0.117,0.022,-0.511,0.11,0.095,-0.39,0.134,0.131,-0.298,0.17,0.146,-0.227,0.211,0.16,-0.682,-0.061,-0.064,-0.228,0.115,0.255,-0.211,0.08,0.418,-0.158,0.137,0.476,-0.552,-0.62,0.064,-0.722,-0.126,-0.3,-0.616,-0.544,-0.047,-0.72,0.335,-0.313,-0.284,0.05,0.241,-0.668,-0.209,-0.043,-0.687,0.347,-0.141,-0.249,-0.194,0.362,-0.477,-0.697,0.16,-0.398,-0.756,0.249,-0.191,-0.842,0.422,-0.145,0.235,0.321,-0.698,-0.288,-0.245,-0.212,-0.53,0.388,-0.36,-0.32,0.298,-0.594,-0.211,0.104,-0.142,0.287,0.245,-0.177,0.388,0.1,-0.598,-0.408,0.051,-0.118,0.406,0.186,-0.254,-0.625,0.371,-0.191,0.126,0.345,-0.154,-0.649,0.423,-0.402,-0.513,0.27,-0.312,-0.094,0.265,-0.334,-0.581,0.321,-0.463,-0.107,0.225,-0.378,-0.174,0.269,-0.517,-0.24,0.198,-0.229,0.071,0.307,-0.459,-0.591,0.217,-0.377,-0.66,0.286,-0.452,-0.425,0.235,-0.65,-0.337,-0.032,-0.53,-0.462,0.164,-0.67,-0.43,-0.173,-0.429,-0.281,0.257,-0.185,0.177,0.285,-0.161,0.08,0.515,-0.238,0.454,0.106,-0.355,0.495,0.107,-0.736,0.025,-0.326,-0.47,0.181,0.069,-0.386,0.189,0.103,-0.303,0.213,0.117,-0.192,0.27,0.119,-0.147,0.189,0.389,-0.141,0.316,0.17]},{"yaw":-0.092,"pitch":0.017,"frame":[-0.089,0.925,0.068,-0.288,0.911,0.036,-0.453,0.864,-0.053,-0.6,0.772,-0.179,-0.69,0.646,-0.315,-0.737,0.494,-0.428,-0.751,0.338,-0.538,-0.749,0.153,-0.602,-0.739,-0.014,-0.606,-0.725,-0.175,-0.559,-0.703,-0.344,-0.477,-0.669,-0.516,-0.355,-0.627,-0.639,-0.202,-0.579,-0.719,-0.046,-0.511,-0.793,0.083,-0.444,-0.843,0.186,-0.368,-0.883,0.288,-0.269,-0.914,0.364,-0.129,-0.925,0.403,0.024,-0.921,0.391,0.149,-0.889,0.345,0.262,-0.85,0.266,0.363,-0.802,0.186,0.475,-0.728,0.083,0.563,-0.645,-0.05,0.64,-0.519,-0.182,0.696,-0.338,-0.293,0.729,-0.162,-0.367,0.745,0.003,-0.41,0.751,0.171,-0.406,0.732,0.359,-0.345,0.692,0.52,-0.245,0.613,0.674,-0.153,0.489,0.798,-0.049,0.311,0.883,0.036,0.124,0.92,0.078,0.42,0.329,0.095,0.395,0.317,0.118,0.369,0.311,0.136,0.332,0.307,0.155,0.278,0.307,0.167,0.223,0.315,0.162,0.171,0.323,0.145,0.132,0.327,0.126,0.113,0.333,0.121,0.402,0.346,0.121,0.379,0.362,0.14,0.343,0.379,0.157,0.29,0.39,0.165,0.238,0.386,0.162,0.18,0.37,0.146,0.134,0.348,0.131,-0.546,0.301,-0.027,-0.526,0.289,0.001,-0.505,0.284,0.025,-0.472,0.282,0.054,-0.425,0.283,0.078,-0.37,0.292,0.087,-0.32,0.302,0.083,-0.285,0.31,0.069,-0.264,0.316,0.069,-0.532,0.317,0.003,-0.513,0.334,0.028,-0.48,0.355,0.053,-0.433,0.368,0.076,-0.379,0.368,0.086,-0.325,0.354,0.081,-0.284,0.334,0.074,0.536,0.478,0.115,0.464,0.543,0.161,0.361,0.579,0.199,0.224,0.58,0.224,0.042,0.532,0.235,0.582,0.499,0.051,0.507,0.587,0.117,0.39,0.641,0.172,0.236,0.65,0.223,0.065,0.633,0.241,-0.668,0.453,-0.028,-0.618,0.518,0.039,-0.533,0.557,0.103,-0.411,0.56,0.161,-0.244,0.52,0.207,-0.699,0.474,-0.104,-0.652,0.561,-0.014,-0.56,0.617,0.07,-0.428,0.629,0.157,-0.271,0.619,0.21,0.151,-0.399,0.353,0.118,-0.409,0.394,0.076,-0.414,0.438,0.018,-0.425,0.467,-0.054,-0.431,0.484,-0.13,-0.433,0.484,-0.203,-0.428,0.473,-0.268,-0.419,0.435,-0.319,-0.406,0.392,-0.354,-0.395,0.336,-0.379,-0.384,0.282,-0.365,-0.348,0.33,-0.334,-0.307,0.383,-0.282,-0.262,0.433,-0.205,-0.224,0.481,-0.127,-0.241,0.497,-0.046,-0.227,0.493,0.04,-0.27,0.469,0.095,-0.318,0.435,0.131,-0.362,0.394,0.128,-0.389,0.367,0.091,-0.373,0.385,0.051,-0.356,0.408,-0.002,-0.34,0.427,-0.063,-0.331,0.442,-0.129,-0.33,0.444,-0.188,-0.331,0.431,-0.244,-0.335,0.4,-0.288,-0.347,0.368,-0.323,-0.361,0.333,-0.358,-0.374,0.306,-0.32,-0.359,0.335,-0.287,-0.345,0.373,-0.242,-0.333,0.406,-0.187,-0.33,0.438,-0.126,-0.331,0.451,-0.061,-0.332,0.449,0.001,-0.339,0.433,0.052,-0.357,0.412,0.091,-0.373,0.386,-0.105,0.427,0.259,-0.112,0.361,0.326,-0.116,0.302,0.398,-0.122,0.246,0.48,-0.128,0.186,0.56,-0.134,0.107,0.606,-0.133,0.032,0.598,-0.129,-0.02,0.571,-0.123,-0.055,0.493,-0.121,-0.083,0.455,0.077,-0.087,0.377,-0.287,-0.087,0.345,-0.202,-0.085,0.434,-0.032,-0.085,0.445,0.129,-0.023,0.327,-0.328,-0.025,0.281,-0.104,0.515,0.244,-0.103,0.613,0.233,-0.133,-0.556,0.438,0.49,0.234,0.098,0.134,-0.716,0.418,0.708,0.207,-0.184,0.577,0.269,0.026,0.234,0,0.311,0.106,0.181,0.266,0.101,0.007,0.447,0.446,-0.021,0.247,0.557,0.634,-0.002,0.264,0.774,0.131,0.637,0.507,-0.09,0.013,0.012,0.506,-0.043,-0.555,0.438,0.163,-0.247,0.403,0.18,0.13,0.262,0.286,0.077,0.262,0.437,0.725,0.07,0.092,0.781,0.159,0.053,0.234,0.276,0.634,0.108,0.028,0.508,0.142,0.147,0.414,0.131,0.204,0.282,0.151,0.219,0.187,0.186,0.217,0.113,0.224,0.218,-0.045,0.34,0.31,0.616,-0.038,0.083,0.563,0.379,0.067,0.096,0.122,0.31,0.055,0.268,0.213,0.062,0.086,0.467,-0.001,0.141,0.517,0.466,-0.611,0.177,0.694,-0.102,-0.138,0.554,-0.53,0.084,0.676,0.366,-0.159,0.156,0.058,0.304,0.6,-0.189,0.098,-0.096,0.776,0.154,0.37,-0.694,0.255,0.27,-0.753,0.328,0.02,-0.843,0.462,-0.002,0.24,0.362,0.667,-0.265,-0.09,0.049,-0.533,0.435,0.498,-0.196,0.224,0.003,0.293,0.287,0.054,0.401,0.149,0.513,-0.394,0.173,-0.02,0.414,0.225,0.096,-0.627,0.422,0.046,0.131,0.391,-0.138,-0.759,0.488,-0.136,-0.654,0.463,-0.019,-0.65,0.455,0.264,-0.509,0.35,0.188,-0.581,0.387,0.339,-0.094,0.315,0.241,-0.167,0.346,0.4,-0.229,0.299,0.337,-0.585,0.307,0.321,-0.422,0.327,0.582,-0.321,0.104,0.629,-0.412,-0.025,0.295,-0.275,0.343,0.046,0.182,0.334,-0.003,0.085,0.553,0.11,0.469,0.164,0.228,0.514,0.181,0.71,0.054,-0.161,0.374,0.203,0.171,0.283,0.211,0.19,0.197,0.232,0.19,0.129,0.259,0.179,-0.008,0.191,0.43,0.043,0.329,0.167,-0.177,0.231,0.455,-0.174,-0.039,0.483,-0.603,0.213,-0.037,-0.371,-0.71,0.368,-0.745,0.19,-0.375,-0.672,0.247,-0.128,-0.423,-0.006,0.239,-0.196,0.101,0.595,-0.291,0.174,0.221,-0.322,0.003,0.404,-0.601,-0.029,0.122,-0.186,0.176,0.537,-0.268,-0.036,0.395,-0.666,0.608,-0.147,-0.431,0.756,0.053,-0.715,0.483,-0.258,-0.249,0.007,0.479,-0.214,-0.552,0.427,-0.388,-0.245,0.341,-0.359,0.124,0.2,-0.46,0.068,0.176,-0.577,0.702,-0.045,-0.357,-0.495,0.355,-0.275,0.771,0.122,-0.66,0.158,-0.074,-0.632,0.351,-0.039,-0.719,0.094,-0.146,-0.626,0.125,0.005,-0.554,0.116,0.085,-0.439,0.138,0.13,-0.349,0.174,0.152,-0.28,0.214,0.171,-0.711,-0.049,-0.089,-0.293,0.118,0.267,-0.287,0.082,0.433,-0.238,0.138,0.495,-0.602,-0.608,0.053,-0.736,-0.11,-0.329,-0.653,-0.53,-0.065,-0.732,0.344,-0.34,-0.347,0.054,0.249,-0.698,-0.196,-0.066,-0.709,0.353,-0.164,-0.327,-0.191,0.372,-0.537,-0.687,0.155,-0.467,-0.747,0.25,-0.278,-0.838,0.435,-0.214,0.236,0.341,-0.716,-0.271,-0.271,-0.295,-0.529,0.4,-0.434,-0.316,0.299,-0.639,-0.202,0.089,-0.205,0.289,0.265,-0.227,0.389,0.118,-0.642,-0.396,0.035,-0.176,0.407,0.209,-0.335,-0.621,0.381,-0.262,0.128,0.36,-0.24,-0.648,0.438,-0.471,-0.507,0.27,-0.379,-0.09,0.272,-0.409,-0.575,0.326,-0.523,-0.101,0.222,-0.445,-0.169,0.272,-0.573,-0.232,0.191,-0.297,0.074,0.32,-0.522,-0.582,0.214,-0.449,-0.653,0.289,-0.518,-0.419,0.23,-0.682,-0.324,-0.052,-0.587,-0.453,0.155,-0.694,-0.414,-0.196,-0.496,-0.275,0.255,-0.252,0.179,0.3,-0.245,0.081,0.533,-0.285,0.454,0.119,-0.4,0.495,0.113,-0.747,0.039,-0.357,-0.512,0.186,0.062,-0.431,0.193,0.103,-0.351,0.216,0.122,-0.243,0.272,0.134,-0.222,0.189,0.408,-0.197,0.317,0.19]},{"yaw":-0.152,"pitch":0.019,"frame":[-0.126,0.925,0.082,-0.319,0.91,0.026,-0.475,0.862,-0.075,-0.609,0.771,-0.209,-0.69,0.645,-0.35,-0.731,0.493,-0.464,-0.743,0.338,-0.572,-0.741,0.154,-0.631,-0.731,-0.012,-0.631,-0.721,-0.172,-0.578,-0.706,-0.338,-0.491,-0.681,-0.507,-0.362,-0.652,-0.631,-0.203,-0.617,-0.711,-0.04,-0.56,-0.786,0.096,-0.503,-0.838,0.204,-0.434,-0.879,0.311,-0.343,-0.913,0.391,-0.208,-0.925,0.439,-0.053,-0.925,0.446,0.078,-0.898,0.409,0.197,-0.862,0.337,0.307,-0.817,0.263,0.431,-0.742,0.167,0.531,-0.654,0.039,0.621,-0.524,-0.09,0.688,-0.341,-0.201,0.729,-0.165,-0.277,0.748,0.001,-0.322,0.755,0.169,-0.322,0.735,0.358,-0.267,0.69,0.519,-0.175,0.601,0.673,-0.091,0.468,0.799,0.001,0.28,0.884,0.072,0.088,0.921,0.104,0.381,0.33,0.153,0.355,0.317,0.174,0.327,0.31,0.191,0.29,0.305,0.207,0.234,0.306,0.215,0.178,0.313,0.206,0.126,0.323,0.186,0.086,0.327,0.165,0.067,0.333,0.159,0.361,0.347,0.176,0.338,0.364,0.194,0.301,0.381,0.207,0.246,0.392,0.212,0.194,0.388,0.205,0.135,0.371,0.186,0.088,0.348,0.17,-0.573,0.301,-0.044,-0.556,0.289,-0.014,-0.536,0.284,0.011,-0.506,0.282,0.042,-0.46,0.283,0.07,-0.407,0.291,0.083,-0.358,0.302,0.082,-0.325,0.31,0.071,-0.304,0.317,0.072,-0.56,0.318,-0.013,-0.542,0.335,0.013,-0.51,0.356,0.039,-0.465,0.369,0.065,-0.413,0.369,0.079,-0.36,0.355,0.078,-0.323,0.335,0.074,0.502,0.48,0.175,0.424,0.547,0.213,0.316,0.583,0.243,0.175,0.583,0.258,-0.01,0.534,0.261,0.554,0.5,0.113,0.472,0.59,0.171,0.348,0.647,0.217,0.187,0.655,0.257,0.013,0.636,0.267,-0.685,0.455,-0.052,-0.639,0.518,0.019,-0.56,0.556,0.089,-0.446,0.559,0.155,-0.291,0.52,0.213,-0.711,0.476,-0.131,-0.667,0.561,-0.037,-0.583,0.616,0.052,-0.461,0.628,0.149,-0.314,0.618,0.212,0.079,-0.401,0.413,0.043,-0.41,0.45,0,-0.414,0.489,-0.06,-0.421,0.513,-0.132,-0.424,0.522,-0.206,-0.424,0.512,-0.274,-0.42,0.496,-0.334,-0.413,0.455,-0.381,-0.403,0.41,-0.413,-0.395,0.351,-0.437,-0.385,0.294,-0.422,-0.349,0.342,-0.393,-0.307,0.398,-0.345,-0.263,0.45,-0.273,-0.225,0.502,-0.202,-0.242,0.525,-0.124,-0.229,0.529,-0.04,-0.272,0.514,0.016,-0.319,0.486,0.055,-0.363,0.451,0.057,-0.39,0.423,0.021,-0.374,0.438,-0.02,-0.357,0.456,-0.075,-0.341,0.47,-0.138,-0.331,0.478,-0.203,-0.33,0.472,-0.259,-0.331,0.454,-0.311,-0.335,0.421,-0.352,-0.347,0.387,-0.384,-0.361,0.349,-0.417,-0.375,0.321,-0.381,-0.359,0.351,-0.35,-0.345,0.391,-0.309,-0.333,0.427,-0.257,-0.331,0.461,-0.2,-0.332,0.48,-0.136,-0.333,0.486,-0.074,-0.341,0.476,-0.02,-0.359,0.46,0.02,-0.375,0.439,-0.161,0.427,0.281,-0.173,0.362,0.349,-0.182,0.303,0.422,-0.193,0.247,0.504,-0.205,0.187,0.585,-0.216,0.109,0.631,-0.217,0.035,0.624,-0.21,-0.018,0.597,-0.201,-0.054,0.52,-0.196,-0.083,0.481,0.005,-0.088,0.416,-0.346,-0.087,0.36,-0.27,-0.086,0.454,-0.109,-0.086,0.477,0.06,-0.024,0.369,-0.384,-0.026,0.292,-0.157,0.515,0.265,-0.155,0.612,0.252,-0.21,-0.556,0.466,0.454,0.233,0.16,0.059,-0.72,0.475,0.7,0.206,-0.104,0.547,0.269,0.093,0.172,-0.001,0.361,0.05,0.18,0.305,0.026,0.006,0.487,0.394,-0.023,0.313,0.533,0.634,0.056,0.225,0.775,0.166,0.621,0.507,-0.024,-0.066,0.012,0.54,-0.119,-0.556,0.476,0.09,-0.248,0.455,0.124,0.129,0.307,0.231,0.076,0.315,0.405,0.727,0.117,0.049,0.782,0.185,-0.003,0.234,0.311,0.608,0.106,0.104,0.47,0.141,0.214,0.369,0.129,0.264,0.232,0.15,0.27,0.137,0.185,0.262,0.062,0.223,0.257,-0.106,0.341,0.337,0.584,-0.041,0.162,0.532,0.379,0.132,0.035,0.122,0.35,0.003,0.268,0.248,-0.011,0.086,0.502,-0.077,0.142,0.547,0.414,-0.623,0.257,0.679,-0.104,-0.051,0.514,-0.54,0.169,0.665,0.365,-0.085,0.094,0.057,0.348,0.564,-0.193,0.179,-0.141,0.776,0.17,0.309,-0.705,0.329,0.203,-0.764,0.396,-0.06,-0.845,0.514,-0.066,0.24,0.392,0.647,-0.269,-0.002,-0.025,-0.534,0.484,0.449,-0.199,0.297,-0.054,0.293,0.317,0.005,0.402,0.181,0.465,-0.4,0.252,-0.073,0.415,0.253,0.022,-0.629,0.474,-0.021,0.131,0.425,-0.219,-0.759,0.519,-0.215,-0.654,0.493,-0.097,-0.651,0.498,0.196,-0.515,0.415,0.117,-0.586,0.446,0.279,-0.096,0.374,0.174,-0.168,0.4,0.341,-0.232,0.365,0.273,-0.594,0.377,0.255,-0.428,0.395,0.543,-0.325,0.186,0.6,-0.418,0.064,0.228,-0.278,0.405,-0.016,0.182,0.369,-0.083,0.086,0.584,0.061,0.471,0.197,0.18,0.517,0.22,0.7,0.052,-0.078,0.331,0.202,0.227,0.236,0.21,0.241,0.15,0.231,0.234,0.08,0.259,0.217,-0.078,0.191,0.461,-0.006,0.329,0.199,-0.246,0.233,0.469,-0.248,-0.039,0.503,-0.627,0.215,-0.055,-0.44,-0.706,0.388,-0.749,0.192,-0.404,-0.689,0.25,-0.151,-0.474,-0.006,0.242,-0.275,0.103,0.613,-0.343,0.174,0.228,-0.384,0.003,0.413,-0.642,-0.027,0.112,-0.261,0.177,0.55,-0.331,-0.036,0.408,-0.675,0.608,-0.176,-0.46,0.755,0.038,-0.721,0.483,-0.29,-0.318,0.008,0.491,-0.288,-0.55,0.452,-0.448,-0.244,0.352,-0.408,0.124,0.203,-0.506,0.069,0.174,-0.594,0.702,-0.068,-0.423,-0.494,0.372,-0.314,0.771,0.117,-0.681,0.16,-0.095,-0.653,0.353,-0.06,-0.739,0.096,-0.169,-0.655,0.126,-0.012,-0.591,0.117,0.074,-0.482,0.139,0.127,-0.395,0.174,0.154,-0.329,0.214,0.177,-0.738,-0.046,-0.109,-0.347,0.118,0.275,-0.351,0.082,0.442,-0.308,0.139,0.506,-0.646,-0.601,0.056,-0.75,-0.106,-0.351,-0.687,-0.523,-0.069,-0.735,0.345,-0.371,-0.4,0.054,0.255,-0.727,-0.192,-0.081,-0.72,0.355,-0.192,-0.391,-0.191,0.386,-0.589,-0.681,0.166,-0.527,-0.742,0.267,-0.354,-0.836,0.461,-0.276,0.237,0.353,-0.734,-0.266,-0.288,-0.365,-0.528,0.42,-0.492,-0.316,0.308,-0.678,-0.198,0.08,-0.262,0.289,0.276,-0.271,0.389,0.125,-0.68,-0.392,0.03,-0.228,0.407,0.22,-0.403,-0.618,0.402,-0.323,0.129,0.371,-0.316,-0.646,0.463,-0.53,-0.505,0.282,-0.433,-0.09,0.28,-0.472,-0.572,0.343,-0.571,-0.099,0.221,-0.499,-0.167,0.277,-0.62,-0.229,0.188,-0.355,0.074,0.329,-0.577,-0.578,0.224,-0.512,-0.649,0.305,-0.572,-0.417,0.236,-0.714,-0.319,-0.063,-0.635,-0.449,0.157,-0.717,-0.408,-0.207,-0.549,-0.274,0.259,-0.311,0.179,0.31,-0.319,0.083,0.545,-0.326,0.455,0.121,-0.435,0.495,0.108,-0.755,0.042,-0.384,-0.547,0.187,0.052,-0.471,0.194,0.098,-0.393,0.216,0.122,-0.29,0.273,0.141,-0.288,0.19,0.419,-0.249,0.318,0.202]},{"yaw":-0.223,"pitch":0.025,"frame":[-0.163,0.925,0.077,-0.347,0.909,0.009,-0.492,0.861,-0.105,-0.614,0.77,-0.247,-0.688,0.645,-0.391,-0.726,0.493,-0.503,-0.736,0.338,-0.606,-0.731,0.154,-0.658,-0.722,-0.011,-0.65,-0.715,-0.169,-0.59,-0.702,-0.333,-0.495,-0.683,-0.5,-0.358,-0.664,-0.621,-0.191,-0.643,-0.7,-0.022,-0.603,-0.775,0.121,-0.558,-0.827,0.235,-0.504,-0.871,0.347,-0.423,-0.908,0.434,-0.296,-0.923,0.499,-0.142,-0.925,0.517,-0.007,-0.902,0.49,0.121,-0.869,0.427,0.239,-0.825,0.362,0.376,-0.754,0.275,0.492,-0.667,0.157,0.596,-0.535,0.035,0.672,-0.351,-0.075,0.72,-0.175,-0.154,0.745,-0.008,-0.203,0.757,0.162,-0.21,0.733,0.356,-0.167,0.681,0.518,-0.087,0.582,0.673,-0.019,0.439,0.8,0.055,0.242,0.886,0.106,0.048,0.922,0.127,0.341,0.332,0.219,0.312,0.318,0.238,0.282,0.311,0.253,0.24,0.306,0.265,0.182,0.308,0.268,0.125,0.317,0.254,0.072,0.327,0.23,0.033,0.332,0.206,0.014,0.338,0.199,0.319,0.35,0.24,0.294,0.368,0.254,0.255,0.387,0.264,0.197,0.399,0.263,0.144,0.395,0.251,0.084,0.378,0.229,0.036,0.354,0.211,-0.607,0.304,-0.063,-0.591,0.293,-0.031,-0.571,0.288,-0.004,-0.541,0.286,0.03,-0.495,0.288,0.061,-0.442,0.297,0.079,-0.395,0.308,0.082,-0.361,0.318,0.073,-0.341,0.325,0.076,-0.595,0.321,-0.031,-0.576,0.338,-0.004,-0.544,0.358,0.023,-0.499,0.372,0.053,-0.447,0.372,0.072,-0.394,0.36,0.076,-0.359,0.342,0.075,0.462,0.486,0.242,0.378,0.557,0.269,0.265,0.596,0.288,0.118,0.595,0.292,-0.069,0.546,0.29,0.519,0.504,0.185,0.43,0.601,0.23,0.299,0.66,0.263,0.131,0.668,0.289,-0.044,0.65,0.296,-0.702,0.461,-0.083,-0.662,0.523,-0.009,-0.588,0.558,0.068,-0.485,0.562,0.143,-0.338,0.528,0.213,-0.722,0.482,-0.166,-0.685,0.566,-0.069,-0.609,0.619,0.027,-0.498,0.632,0.133,-0.36,0.624,0.207,-0.005,-0.399,0.483,-0.041,-0.407,0.515,-0.087,-0.408,0.549,-0.15,-0.414,0.568,-0.223,-0.416,0.57,-0.298,-0.414,0.551,-0.364,-0.409,0.528,-0.418,-0.401,0.485,-0.458,-0.394,0.438,-0.486,-0.389,0.376,-0.505,-0.382,0.314,-0.497,-0.345,0.362,-0.473,-0.301,0.42,-0.43,-0.255,0.475,-0.363,-0.217,0.532,-0.295,-0.233,0.561,-0.218,-0.221,0.572,-0.131,-0.268,0.564,-0.072,-0.317,0.544,-0.03,-0.362,0.515,-0.027,-0.389,0.488,-0.061,-0.372,0.499,-0.105,-0.353,0.511,-0.161,-0.336,0.52,-0.226,-0.323,0.523,-0.291,-0.321,0.509,-0.344,-0.321,0.485,-0.392,-0.326,0.449,-0.428,-0.339,0.414,-0.457,-0.355,0.374,-0.486,-0.37,0.345,-0.454,-0.353,0.377,-0.426,-0.338,0.419,-0.389,-0.326,0.457,-0.343,-0.323,0.493,-0.29,-0.323,0.52,-0.227,-0.326,0.533,-0.163,-0.335,0.528,-0.106,-0.355,0.517,-0.064,-0.373,0.501,-0.217,0.437,0.295,-0.238,0.371,0.365,-0.255,0.312,0.44,-0.275,0.257,0.524,-0.295,0.197,0.605,-0.314,0.12,0.654,-0.315,0.046,0.65,-0.306,-0.009,0.625,-0.292,-0.046,0.551,-0.282,-0.077,0.513,-0.075,-0.087,0.46,-0.417,-0.082,0.38,-0.351,-0.08,0.48,-0.196,-0.083,0.514,-0.017,-0.022,0.417,-0.447,-0.019,0.306,-0.212,0.524,0.275,-0.208,0.621,0.257,-0.3,-0.547,0.509,0.41,0.234,0.234,-0.031,-0.719,0.546,0.681,0.204,-0.004,0.509,0.269,0.173,0.098,0.001,0.417,-0.015,0.184,0.346,-0.059,0.01,0.53,0.328,-0.023,0.389,0.5,0.637,0.12,0.177,0.78,0.198,0.596,0.508,0.054,-0.159,0.019,0.577,-0.21,-0.55,0.528,0.003,-0.246,0.515,0.057,0.132,0.356,0.162,0.077,0.374,0.365,0.732,0.167,0,0.786,0.212,-0.066,0.24,0.347,0.57,0.105,0.196,0.419,0.141,0.292,0.312,0.13,0.334,0.173,0.151,0.328,0.077,0.188,0.31,0.004,0.228,0.299,-0.171,0.35,0.366,0.538,-0.042,0.259,0.494,0.381,0.207,-0.036,0.125,0.392,-0.054,0.274,0.284,-0.098,0.09,0.539,-0.165,0.149,0.58,0.349,-0.63,0.358,0.652,-0.11,0.061,0.461,-0.549,0.279,0.645,0.365,0.004,0.021,0.06,0.396,0.514,-0.195,0.28,-0.187,0.778,0.169,0.235,-0.71,0.422,0.121,-0.768,0.481,-0.154,-0.844,0.58,-0.139,0.247,0.424,0.615,-0.275,0.113,-0.115,-0.531,0.544,0.385,-0.2,0.384,-0.119,0.301,0.348,-0.048,0.41,0.212,0.403,-0.403,0.35,-0.129,0.425,0.282,-0.068,-0.628,0.539,-0.1,0.136,0.462,-0.313,-0.752,0.57,-0.308,-0.646,0.539,-0.191,-0.647,0.555,0.115,-0.516,0.491,0.032,-0.585,0.517,0.203,-0.094,0.441,0.094,-0.167,0.463,0.267,-0.232,0.442,0.194,-0.597,0.462,0.175,-0.429,0.475,0.491,-0.329,0.29,0.561,-0.426,0.18,0.148,-0.277,0.475,-0.087,0.187,0.405,-0.18,0.093,0.618,0.007,0.48,0.23,0.127,0.528,0.259,0.678,0.048,0.03,0.278,0.203,0.291,0.181,0.212,0.297,0.094,0.234,0.282,0.025,0.263,0.259,-0.158,0.199,0.493,-0.061,0.336,0.231,-0.325,0.242,0.482,-0.334,-0.033,0.527,-0.65,0.221,-0.074,-0.515,-0.694,0.421,-0.746,0.195,-0.434,-0.7,0.257,-0.177,-0.528,0.003,0.247,-0.369,0.113,0.629,-0.398,0.181,0.237,-0.456,0.009,0.424,-0.678,-0.019,0.102,-0.347,0.187,0.565,-0.406,-0.031,0.425,-0.683,0.608,-0.212,-0.488,0.755,0.015,-0.723,0.484,-0.327,-0.4,0.013,0.506,-0.375,-0.539,0.486,-0.518,-0.236,0.37,-0.457,0.131,0.208,-0.551,0.077,0.173,-0.609,0.702,-0.1,-0.498,-0.484,0.4,-0.351,0.771,0.105,-0.698,0.168,-0.117,-0.673,0.36,-0.085,-0.75,0.102,-0.194,-0.68,0.134,-0.031,-0.624,0.124,0.062,-0.522,0.146,0.123,-0.44,0.181,0.157,-0.377,0.222,0.185,-0.756,-0.037,-0.131,-0.408,0.124,0.286,-0.425,0.09,0.453,-0.389,0.148,0.518,-0.679,-0.589,0.068,-0.754,-0.101,-0.37,-0.706,-0.511,-0.065,-0.735,0.346,-0.405,-0.455,0.061,0.264,-0.747,-0.182,-0.094,-0.726,0.361,-0.224,-0.465,-0.183,0.406,-0.636,-0.669,0.188,-0.587,-0.73,0.296,-0.439,-0.828,0.498,-0.343,0.245,0.365,-0.74,-0.258,-0.299,-0.445,-0.517,0.452,-0.56,-0.309,0.322,-0.711,-0.187,0.073,-0.321,0.297,0.287,-0.313,0.398,0.132,-0.709,-0.38,0.031,-0.28,0.417,0.229,-0.481,-0.607,0.434,-0.393,0.137,0.383,-0.402,-0.635,0.499,-0.593,-0.495,0.303,-0.495,-0.083,0.292,-0.542,-0.561,0.371,-0.62,-0.088,0.222,-0.559,-0.158,0.288,-0.667,-0.219,0.189,-0.419,0.081,0.341,-0.631,-0.566,0.243,-0.575,-0.637,0.333,-0.629,-0.408,0.248,-0.734,-0.308,-0.069,-0.678,-0.438,0.165,-0.727,-0.398,-0.211,-0.606,-0.266,0.268,-0.374,0.187,0.321,-0.407,0.091,0.558,-0.366,0.462,0.121,-0.471,0.499,0.1,-0.757,0.046,-0.41,-0.58,0.193,0.041,-0.509,0.201,0.093,-0.434,0.223,0.123,-0.334,0.281,0.15,-0.362,0.2,0.431,-0.301,0.326,0.213]},{"yaw":-0.291,"pitch":0.033,"frame":[-0.194,0.925,0.083,-0.364,0.908,-0.001,-0.495,0.857,-0.127,-0.602,0.765,-0.275,-0.67,0.64,-0.421,-0.706,0.489,-0.532,-0.704,0.335,-0.63,-0.691,0.152,-0.677,-0.686,-0.012,-0.665,-0.691,-0.17,-0.6,-0.684,-0.332,-0.501,-0.67,-0.496,-0.361,-0.663,-0.614,-0.19,-0.654,-0.691,-0.017,-0.625,-0.764,0.131,-0.59,-0.815,0.252,-0.543,-0.859,0.372,-0.468,-0.899,0.469,-0.347,-0.919,0.541,-0.195,-0.925,0.57,-0.059,-0.904,0.554,0.073,-0.873,0.5,0.196,-0.831,0.445,0.342,-0.761,0.37,0.468,-0.676,0.263,0.582,-0.545,0.149,0.665,-0.363,0.043,0.716,-0.186,-0.034,0.745,-0.021,-0.084,0.759,0.151,-0.095,0.735,0.348,-0.06,0.674,0.515,0.009,0.565,0.673,0.064,0.414,0.802,0.12,0.211,0.889,0.15,0.016,0.924,0.146,0.302,0.334,0.29,0.271,0.32,0.306,0.239,0.313,0.318,0.197,0.308,0.326,0.138,0.31,0.325,0.083,0.32,0.305,0.033,0.33,0.277,-0.004,0.334,0.251,-0.023,0.34,0.242,0.278,0.354,0.307,0.252,0.373,0.318,0.212,0.393,0.324,0.155,0.404,0.317,0.103,0.4,0.3,0.045,0.381,0.274,-0.002,0.356,0.255,-0.615,0.31,-0.081,-0.601,0.299,-0.048,-0.583,0.294,-0.02,-0.555,0.294,0.016,-0.513,0.296,0.05,-0.463,0.303,0.073,-0.419,0.314,0.079,-0.388,0.323,0.073,-0.369,0.33,0.077,-0.604,0.326,-0.049,-0.588,0.343,-0.022,-0.558,0.363,0.007,-0.516,0.376,0.04,-0.467,0.375,0.063,-0.418,0.364,0.071,-0.386,0.347,0.074,0.419,0.489,0.316,0.33,0.563,0.333,0.214,0.603,0.34,0.067,0.602,0.33,-0.116,0.553,0.315,0.481,0.507,0.263,0.385,0.606,0.297,0.25,0.667,0.316,0.079,0.677,0.326,-0.093,0.658,0.316,-0.698,0.466,-0.11,-0.664,0.527,-0.034,-0.599,0.561,0.049,-0.507,0.565,0.132,-0.374,0.534,0.214,-0.712,0.486,-0.193,-0.682,0.571,-0.096,-0.616,0.622,0.005,-0.518,0.635,0.121,-0.392,0.629,0.204,-0.053,-0.397,0.541,-0.09,-0.403,0.568,-0.137,-0.402,0.595,-0.202,-0.406,0.609,-0.276,-0.406,0.604,-0.35,-0.403,0.58,-0.411,-0.397,0.552,-0.46,-0.388,0.501,-0.495,-0.381,0.449,-0.519,-0.377,0.382,-0.534,-0.371,0.317,-0.53,-0.333,0.366,-0.512,-0.287,0.427,-0.473,-0.239,0.487,-0.412,-0.2,0.551,-0.348,-0.214,0.588,-0.273,-0.206,0.604,-0.186,-0.257,0.606,-0.125,-0.309,0.592,-0.081,-0.358,0.57,-0.075,-0.386,0.542,-0.109,-0.368,0.549,-0.156,-0.348,0.556,-0.213,-0.327,0.56,-0.278,-0.313,0.556,-0.34,-0.309,0.536,-0.39,-0.309,0.507,-0.434,-0.314,0.466,-0.465,-0.327,0.427,-0.49,-0.343,0.384,-0.515,-0.358,0.352,-0.487,-0.341,0.386,-0.462,-0.327,0.433,-0.43,-0.314,0.475,-0.388,-0.31,0.518,-0.34,-0.31,0.549,-0.279,-0.314,0.568,-0.215,-0.326,0.569,-0.156,-0.349,0.562,-0.112,-0.369,0.551,-0.261,0.444,0.307,-0.286,0.38,0.377,-0.31,0.323,0.451,-0.334,0.269,0.534,-0.361,0.211,0.614,-0.385,0.137,0.664,-0.387,0.064,0.662,-0.373,0.006,0.641,-0.354,-0.032,0.573,-0.34,-0.066,0.538,-0.129,-0.082,0.499,-0.463,-0.071,0.392,-0.404,-0.069,0.497,-0.254,-0.073,0.544,-0.07,-0.018,0.461,-0.488,-0.008,0.313,-0.255,0.531,0.285,-0.25,0.627,0.265,-0.351,-0.537,0.542,0.373,0.235,0.31,-0.087,-0.717,0.601,0.67,0.197,0.099,0.477,0.269,0.257,0.045,0.007,0.471,-0.063,0.19,0.387,-0.121,0.016,0.568,0.279,-0.021,0.463,0.47,0.638,0.194,0.137,0.786,0.237,0.574,0.507,0.14,-0.226,0.03,0.607,-0.262,-0.541,0.567,-0.051,-0.241,0.566,0.008,0.137,0.405,0.112,0.083,0.433,0.329,0.736,0.225,-0.04,0.791,0.231,-0.115,0.247,0.382,0.541,0.102,0.29,0.38,0.141,0.372,0.268,0.132,0.403,0.128,0.155,0.386,0.033,0.192,0.36,-0.038,0.232,0.34,-0.221,0.359,0.387,0.505,-0.046,0.354,0.457,0.383,0.287,-0.089,0.131,0.432,-0.097,0.279,0.319,-0.16,0.1,0.571,-0.231,0.161,0.606,0.307,-0.635,0.446,0.635,-0.118,0.169,0.428,-0.555,0.376,0.63,0.361,0.1,-0.03,0.065,0.443,0.479,-0.199,0.375,-0.224,0.78,0.175,0.187,-0.714,0.5,0.069,-0.771,0.55,-0.212,-0.84,0.629,-0.194,0.257,0.45,0.594,-0.283,0.221,-0.168,-0.526,0.59,0.34,-0.201,0.466,-0.168,0.309,0.375,-0.088,0.414,0.242,0.362,-0.407,0.438,-0.173,0.432,0.305,-0.123,-0.624,0.59,-0.157,0.144,0.493,-0.368,-0.74,0.605,-0.361,-0.634,0.574,-0.246,-0.638,0.596,0.063,-0.516,0.555,-0.021,-0.584,0.575,0.149,-0.09,0.505,0.04,-0.162,0.52,0.216,-0.231,0.514,0.143,-0.598,0.534,0.124,-0.43,0.544,0.456,-0.334,0.385,0.537,-0.434,0.286,0.094,-0.275,0.538,-0.14,0.195,0.439,-0.249,0.107,0.644,-0.035,0.485,0.265,0.08,0.533,0.303,0.664,0.041,0.138,0.235,0.206,0.357,0.138,0.215,0.355,0.052,0.238,0.332,-0.015,0.267,0.301,-0.217,0.209,0.519,-0.101,0.34,0.263,-0.381,0.255,0.489,-0.394,-0.021,0.542,-0.654,0.228,-0.093,-0.557,-0.679,0.439,-0.727,0.195,-0.461,-0.692,0.263,-0.2,-0.56,0.014,0.244,-0.436,0.129,0.636,-0.434,0.19,0.24,-0.505,0.02,0.427,-0.695,-0.008,0.085,-0.409,0.201,0.57,-0.456,-0.021,0.434,-0.673,0.608,-0.241,-0.5,0.755,-0.003,-0.707,0.484,-0.357,-0.456,0.024,0.511,-0.424,-0.528,0.514,-0.56,-0.223,0.373,-0.489,0.14,0.208,-0.577,0.087,0.165,-0.608,0.701,-0.125,-0.539,-0.471,0.41,-0.377,0.772,0.097,-0.696,0.175,-0.139,-0.67,0.366,-0.108,-0.746,0.106,-0.218,-0.687,0.141,-0.052,-0.64,0.132,0.046,-0.547,0.154,0.116,-0.47,0.189,0.156,-0.411,0.229,0.188,-0.759,-0.03,-0.155,-0.448,0.134,0.29,-0.477,0.102,0.456,-0.447,0.162,0.521,-0.696,-0.577,0.066,-0.744,-0.099,-0.389,-0.715,-0.501,-0.072,-0.715,0.346,-0.433,-0.491,0.072,0.266,-0.754,-0.173,-0.113,-0.713,0.365,-0.252,-0.512,-0.17,0.414,-0.661,-0.656,0.192,-0.619,-0.716,0.308,-0.488,-0.816,0.528,-0.39,0.256,0.371,-0.735,-0.253,-0.314,-0.491,-0.504,0.469,-0.596,-0.297,0.321,-0.728,-0.176,0.057,-0.363,0.306,0.295,-0.345,0.403,0.138,-0.724,-0.368,0.02,-0.319,0.424,0.237,-0.523,-0.592,0.453,-0.44,0.148,0.388,-0.451,-0.621,0.527,-0.625,-0.482,0.305,-0.533,-0.07,0.296,-0.579,-0.547,0.38,-0.648,-0.076,0.213,-0.594,-0.146,0.286,-0.69,-0.206,0.179,-0.463,0.092,0.346,-0.659,-0.552,0.245,-0.611,-0.622,0.343,-0.658,-0.395,0.243,-0.742,-0.298,-0.084,-0.701,-0.425,0.158,-0.727,-0.391,-0.222,-0.637,-0.253,0.263,-0.419,0.197,0.327,-0.468,0.106,0.562,-0.395,0.467,0.121,-0.491,0.502,0.091,-0.741,0.047,-0.434,-0.595,0.201,0.027,-0.529,0.209,0.084,-0.459,0.231,0.12,-0.367,0.287,0.155,-0.415,0.212,0.437,-0.339,0.333,0.221]},{"yaw":-0.363,"pitch":0.039,"frame":[-0.214,0.923,0.101,-0.377,0.904,0.009,-0.5,0.853,-0.126,-0.601,0.759,-0.28,-0.664,0.635,-0.43,-0.687,0.482,-0.543,-0.677,0.329,-0.639,-0.658,0.148,-0.684,-0.651,-0.015,-0.671,-0.655,-0.171,-0.606,-0.662,-0.329,-0.507,-0.665,-0.491,-0.366,-0.66,-0.61,-0.196,-0.665,-0.687,-0.022,-0.652,-0.76,0.127,-0.627,-0.81,0.25,-0.589,-0.853,0.373,-0.523,-0.892,0.484,-0.405,-0.915,0.557,-0.255,-0.925,0.592,-0.117,-0.908,0.585,0.021,-0.877,0.541,0.152,-0.836,0.496,0.308,-0.769,0.432,0.447,-0.684,0.336,0.569,-0.553,0.232,0.661,-0.369,0.133,0.716,-0.194,0.061,0.747,-0.027,0.013,0.763,0.145,0.002,0.737,0.343,0.033,0.671,0.511,0.094,0.555,0.672,0.14,0.399,0.803,0.184,0.192,0.892,0.199,-0.005,0.925,0.169,0.264,0.334,0.348,0.231,0.321,0.362,0.199,0.315,0.372,0.157,0.312,0.377,0.099,0.316,0.372,0.046,0.325,0.349,-0.001,0.334,0.318,-0.036,0.337,0.291,-0.053,0.342,0.281,0.24,0.354,0.363,0.214,0.373,0.372,0.175,0.392,0.375,0.119,0.404,0.364,0.07,0.4,0.343,0.013,0.381,0.316,-0.032,0.357,0.295,-0.627,0.314,-0.089,-0.615,0.305,-0.055,-0.598,0.302,-0.026,-0.573,0.302,0.012,-0.534,0.304,0.049,-0.489,0.312,0.074,-0.447,0.322,0.084,-0.419,0.329,0.08,-0.403,0.336,0.085,-0.618,0.33,-0.056,-0.604,0.348,-0.028,-0.578,0.367,0.002,-0.539,0.379,0.038,-0.494,0.378,0.064,-0.448,0.368,0.076,-0.418,0.352,0.08,0.384,0.491,0.377,0.294,0.567,0.386,0.178,0.609,0.385,0.031,0.609,0.366,-0.152,0.561,0.333,0.45,0.509,0.329,0.352,0.61,0.354,0.216,0.673,0.365,0.044,0.685,0.362,-0.129,0.666,0.334,-0.705,0.469,-0.123,-0.679,0.531,-0.045,-0.621,0.566,0.043,-0.536,0.573,0.133,-0.412,0.543,0.222,-0.715,0.489,-0.206,-0.692,0.574,-0.107,-0.635,0.627,-0.001,-0.546,0.643,0.12,-0.429,0.639,0.21,-0.109,-0.39,0.581,-0.147,-0.394,0.602,-0.198,-0.391,0.623,-0.265,-0.391,0.632,-0.338,-0.389,0.621,-0.409,-0.387,0.597,-0.466,-0.382,0.558,-0.51,-0.377,0.502,-0.54,-0.373,0.45,-0.56,-0.371,0.382,-0.573,-0.366,0.315,-0.572,-0.328,0.364,-0.559,-0.283,0.427,-0.527,-0.236,0.489,-0.472,-0.198,0.557,-0.413,-0.211,0.605,-0.34,-0.202,0.623,-0.253,-0.25,0.629,-0.189,-0.302,0.622,-0.141,-0.351,0.606,-0.131,-0.378,0.578,-0.166,-0.36,0.582,-0.213,-0.339,0.584,-0.274,-0.317,0.583,-0.338,-0.303,0.575,-0.401,-0.3,0.554,-0.446,-0.301,0.516,-0.484,-0.307,0.471,-0.511,-0.321,0.43,-0.534,-0.335,0.386,-0.556,-0.352,0.353,-0.531,-0.334,0.388,-0.511,-0.32,0.437,-0.483,-0.307,0.481,-0.447,-0.302,0.528,-0.402,-0.302,0.567,-0.341,-0.306,0.588,-0.275,-0.317,0.593,-0.214,-0.341,0.59,-0.168,-0.361,0.584,-0.301,0.449,0.321,-0.332,0.385,0.39,-0.361,0.328,0.462,-0.393,0.276,0.542,-0.426,0.22,0.62,-0.457,0.148,0.668,-0.459,0.076,0.666,-0.443,0.016,0.646,-0.417,-0.024,0.582,-0.397,-0.058,0.551,-0.19,-0.076,0.524,-0.507,-0.064,0.396,-0.456,-0.061,0.504,-0.316,-0.066,0.563,-0.128,-0.013,0.491,-0.528,0,0.317,-0.293,0.539,0.299,-0.286,0.635,0.278,-0.406,-0.53,0.56,0.338,0.236,0.371,-0.149,-0.714,0.629,0.66,0.193,0.185,0.448,0.269,0.325,-0.005,0.013,0.509,-0.108,0.196,0.418,-0.187,0.023,0.593,0.233,-0.018,0.517,0.449,0.64,0.26,0.11,0.792,0.279,0.557,0.504,0.215,-0.294,0.039,0.626,-0.32,-0.534,0.585,-0.11,-0.234,0.599,-0.038,0.143,0.441,0.065,0.089,0.475,0.306,0.74,0.28,-0.067,0.795,0.25,-0.158,0.252,0.409,0.513,0.099,0.366,0.343,0.142,0.433,0.227,0.135,0.457,0.087,0.16,0.431,-0.007,0.197,0.398,-0.078,0.236,0.373,-0.266,0.364,0.403,0.472,-0.049,0.426,0.426,0.384,0.352,-0.139,0.137,0.462,-0.135,0.283,0.349,-0.224,0.107,0.593,-0.296,0.169,0.624,0.265,-0.64,0.505,0.62,-0.122,0.254,0.395,-0.561,0.444,0.618,0.357,0.181,-0.081,0.071,0.476,0.445,-0.203,0.446,-0.252,0.783,0.191,0.137,-0.718,0.549,0.013,-0.774,0.588,-0.276,-0.836,0.649,-0.245,0.263,0.47,0.576,-0.288,0.302,-0.225,-0.521,0.615,0.295,-0.202,0.525,-0.212,0.314,0.397,-0.122,0.418,0.272,0.32,-0.411,0.501,-0.211,0.436,0.323,-0.183,-0.619,0.616,-0.213,0.151,0.516,-0.431,-0.731,0.621,-0.42,-0.626,0.59,-0.308,-0.631,0.615,0.008,-0.515,0.596,-0.078,-0.583,0.608,0.096,-0.085,0.549,-0.016,-0.157,0.558,0.163,-0.229,0.564,0.09,-0.602,0.579,0.07,-0.429,0.591,0.421,-0.337,0.454,0.513,-0.439,0.363,0.037,-0.271,0.581,-0.191,0.202,0.464,-0.32,0.117,0.662,-0.068,0.49,0.299,0.046,0.537,0.343,0.652,0.036,0.225,0.197,0.209,0.408,0.098,0.22,0.4,0.013,0.243,0.373,-0.051,0.271,0.336,-0.276,0.216,0.538,-0.135,0.343,0.293,-0.438,0.262,0.494,-0.453,-0.014,0.548,-0.661,0.232,-0.103,-0.605,-0.67,0.436,-0.717,0.194,-0.473,-0.692,0.268,-0.211,-0.594,0.022,0.241,-0.505,0.14,0.637,-0.471,0.196,0.245,-0.553,0.027,0.426,-0.714,-0.003,0.072,-0.472,0.211,0.572,-0.504,-0.014,0.437,-0.674,0.605,-0.252,-0.516,0.753,-0.003,-0.702,0.481,-0.368,-0.514,0.031,0.512,-0.476,-0.521,0.528,-0.601,-0.217,0.372,-0.521,0.146,0.209,-0.604,0.093,0.16,-0.616,0.698,-0.131,-0.583,-0.465,0.408,-0.399,0.773,0.105,-0.7,0.179,-0.152,-0.678,0.369,-0.119,-0.746,0.108,-0.232,-0.696,0.145,-0.065,-0.657,0.136,0.037,-0.571,0.16,0.112,-0.499,0.196,0.158,-0.446,0.235,0.194,-0.763,-0.026,-0.172,-0.488,0.141,0.294,-0.528,0.11,0.457,-0.505,0.171,0.522,-0.713,-0.574,0.058,-0.738,-0.097,-0.402,-0.72,-0.497,-0.082,-0.709,0.343,-0.445,-0.527,0.079,0.268,-0.759,-0.169,-0.129,-0.711,0.368,-0.266,-0.558,-0.162,0.415,-0.69,-0.651,0.186,-0.658,-0.71,0.304,-0.546,-0.807,0.539,-0.438,0.262,0.377,-0.729,-0.249,-0.326,-0.54,-0.498,0.47,-0.634,-0.292,0.317,-0.742,-0.171,0.042,-0.405,0.311,0.303,-0.379,0.41,0.15,-0.738,-0.364,0.007,-0.358,0.43,0.248,-0.57,-0.584,0.452,-0.489,0.156,0.392,-0.505,-0.613,0.539,-0.662,-0.476,0.3,-0.57,-0.063,0.296,-0.622,-0.54,0.377,-0.675,-0.069,0.204,-0.629,-0.138,0.282,-0.714,-0.2,0.167,-0.506,0.099,0.349,-0.692,-0.547,0.238,-0.65,-0.615,0.339,-0.69,-0.39,0.234,-0.748,-0.294,-0.098,-0.725,-0.42,0.147,-0.723,-0.386,-0.234,-0.67,-0.248,0.255,-0.462,0.203,0.332,-0.53,0.115,0.561,-0.427,0.474,0.129,-0.517,0.506,0.092,-0.735,0.047,-0.448,-0.612,0.206,0.021,-0.551,0.215,0.082,-0.486,0.238,0.123,-0.401,0.293,0.165,-0.469,0.219,0.441,-0.377,0.339,0.232]},{"yaw":-0.43,"pitch":0.041,"frame":[-0.235,0.918,0.124,-0.39,0.894,0.018,-0.505,0.843,-0.128,-0.598,0.753,-0.291,-0.653,0.632,-0.447,-0.67,0.481,-0.562,-0.66,0.33,-0.659,-0.641,0.152,-0.704,-0.634,-0.01,-0.69,-0.638,-0.165,-0.623,-0.647,-0.325,-0.522,-0.661,-0.49,-0.378,-0.682,-0.612,-0.204,-0.703,-0.691,-0.026,-0.701,-0.763,0.128,-0.685,-0.811,0.255,-0.655,-0.853,0.381,-0.595,-0.891,0.498,-0.482,-0.912,0.586,-0.331,-0.925,0.63,-0.185,-0.911,0.634,-0.038,-0.888,0.598,0.103,-0.852,0.563,0.275,-0.788,0.51,0.431,-0.705,0.423,0.57,-0.571,0.326,0.669,-0.383,0.234,0.727,-0.204,0.164,0.759,-0.035,0.116,0.774,0.142,0.103,0.74,0.344,0.13,0.667,0.515,0.186,0.541,0.677,0.223,0.376,0.808,0.255,0.167,0.894,0.255,-0.03,0.925,0.209,0.224,0.343,0.416,0.191,0.331,0.428,0.159,0.325,0.435,0.117,0.322,0.437,0.06,0.326,0.428,0.007,0.335,0.401,-0.039,0.344,0.367,-0.073,0.347,0.338,-0.091,0.353,0.326,0.2,0.365,0.428,0.174,0.385,0.434,0.136,0.405,0.434,0.08,0.417,0.419,0.031,0.413,0.394,-0.024,0.393,0.364,-0.07,0.368,0.341,-0.645,0.331,-0.098,-0.635,0.32,-0.063,-0.621,0.315,-0.032,-0.598,0.314,0.008,-0.562,0.316,0.048,-0.519,0.324,0.077,-0.479,0.334,0.091,-0.451,0.342,0.089,-0.435,0.349,0.096,-0.639,0.348,-0.064,-0.628,0.366,-0.035,-0.604,0.385,-0.004,-0.566,0.397,0.035,-0.521,0.395,0.066,-0.477,0.383,0.081,-0.449,0.365,0.088,0.347,0.495,0.45,0.255,0.57,0.453,0.138,0.611,0.443,-0.01,0.611,0.413,-0.195,0.563,0.365,0.418,0.513,0.404,0.314,0.612,0.424,0.176,0.676,0.424,0.003,0.687,0.409,-0.17,0.668,0.366,-0.721,0.473,-0.138,-0.703,0.535,-0.055,-0.65,0.571,0.039,-0.571,0.577,0.137,-0.453,0.548,0.237,-0.726,0.493,-0.225,-0.712,0.578,-0.119,-0.662,0.632,-0.006,-0.581,0.648,0.123,-0.47,0.644,0.223,-0.179,-0.383,0.639,-0.216,-0.388,0.655,-0.267,-0.388,0.668,-0.336,-0.394,0.671,-0.414,-0.396,0.654,-0.488,-0.395,0.622,-0.545,-0.391,0.578,-0.587,-0.385,0.519,-0.613,-0.378,0.464,-0.629,-0.373,0.395,-0.636,-0.367,0.325,-0.638,-0.33,0.375,-0.627,-0.285,0.439,-0.598,-0.238,0.504,-0.546,-0.201,0.576,-0.488,-0.211,0.63,-0.414,-0.202,0.655,-0.326,-0.248,0.668,-0.26,-0.298,0.668,-0.211,-0.345,0.66,-0.201,-0.372,0.632,-0.234,-0.355,0.631,-0.282,-0.334,0.629,-0.345,-0.314,0.624,-0.411,-0.301,0.611,-0.474,-0.3,0.584,-0.517,-0.303,0.541,-0.553,-0.309,0.493,-0.578,-0.321,0.449,-0.598,-0.336,0.401,-0.618,-0.353,0.367,-0.596,-0.334,0.404,-0.578,-0.319,0.454,-0.554,-0.307,0.501,-0.521,-0.302,0.551,-0.477,-0.301,0.596,-0.416,-0.303,0.622,-0.348,-0.314,0.632,-0.285,-0.336,0.635,-0.238,-0.356,0.633,-0.345,0.451,0.344,-0.381,0.387,0.412,-0.417,0.331,0.483,-0.454,0.278,0.562,-0.494,0.222,0.638,-0.532,0.151,0.685,-0.536,0.078,0.684,-0.517,0.018,0.664,-0.485,-0.023,0.601,-0.461,-0.057,0.571,-0.257,-0.077,0.558,-0.555,-0.064,0.408,-0.514,-0.06,0.52,-0.383,-0.063,0.593,-0.191,-0.014,0.53,-0.572,0,0.326,-0.336,0.541,0.322,-0.326,0.637,0.301,-0.478,-0.531,0.584,0.302,0.242,0.444,-0.22,-0.715,0.674,0.649,0.192,0.281,0.418,0.274,0.404,-0.062,0.013,0.558,-0.158,0.199,0.459,-0.257,0.023,0.628,0.184,-0.02,0.586,0.423,0.644,0.336,0.078,0.794,0.331,0.539,0.508,0.299,-0.367,0.04,0.657,-0.391,-0.535,0.616,-0.179,-0.232,0.647,-0.088,0.146,0.488,0.015,0.09,0.531,0.273,0.742,0.346,-0.101,0.797,0.286,-0.207,0.256,0.447,0.486,0.097,0.452,0.305,0.144,0.507,0.185,0.137,0.522,0.043,0.164,0.487,-0.051,0.202,0.447,-0.122,0.241,0.416,-0.316,0.367,0.43,0.44,-0.054,0.514,0.395,0.39,0.43,-0.194,0.139,0.501,-0.18,0.288,0.388,-0.291,0.109,0.626,-0.363,0.172,0.654,0.219,-0.656,0.581,0.607,-0.132,0.352,0.362,-0.578,0.529,0.606,0.358,0.272,-0.136,0.072,0.519,0.41,-0.211,0.532,-0.285,0.784,0.214,0.081,-0.729,0.615,-0.049,-0.78,0.645,-0.354,-0.835,0.686,-0.3,0.266,0.501,0.562,-0.301,0.397,-0.294,-0.521,0.654,0.246,-0.206,0.6,-0.26,0.318,0.43,-0.161,0.425,0.311,0.274,-0.421,0.58,-0.256,0.44,0.352,-0.252,-0.62,0.656,-0.274,0.153,0.549,-0.509,-0.729,0.647,-0.494,-0.625,0.615,-0.381,-0.631,0.646,-0.055,-0.516,0.654,-0.144,-0.583,0.659,0.039,-0.085,0.607,-0.079,-0.157,0.609,0.105,-0.231,0.629,0.029,-0.606,0.643,0.008,-0.43,0.656,0.385,-0.349,0.539,0.494,-0.455,0.455,-0.028,-0.272,0.641,-0.246,0.204,0.5,-0.393,0.12,0.691,-0.108,0.496,0.341,0.006,0.543,0.392,0.64,0.03,0.323,0.157,0.214,0.471,0.058,0.226,0.456,-0.027,0.25,0.422,-0.092,0.278,0.38,-0.337,0.219,0.569,-0.176,0.351,0.33,-0.497,0.265,0.509,-0.516,-0.014,0.564,-0.673,0.241,-0.114,-0.669,-0.67,0.444,-0.702,0.201,-0.495,-0.697,0.277,-0.226,-0.633,0.023,0.243,-0.577,0.143,0.651,-0.512,0.199,0.256,-0.605,0.027,0.434,-0.739,-0.002,0.062,-0.538,0.213,0.586,-0.557,-0.015,0.448,-0.68,0.605,-0.266,-0.534,0.751,-0.002,-0.7,0.482,-0.386,-0.574,0.031,0.523,-0.546,-0.522,0.544,-0.653,-0.217,0.38,-0.559,0.149,0.215,-0.638,0.095,0.16,-0.626,0.695,-0.139,-0.643,-0.467,0.418,-0.423,0.772,0.116,-0.707,0.187,-0.167,-0.691,0.378,-0.132,-0.754,0.112,-0.252,-0.71,0.15,-0.078,-0.68,0.14,0.029,-0.601,0.165,0.113,-0.532,0.202,0.165,-0.483,0.242,0.206,-0.774,-0.024,-0.192,-0.532,0.143,0.304,-0.584,0.112,0.466,-0.567,0.173,0.533,-0.75,-0.576,0.052,-0.732,-0.093,-0.422,-0.745,-0.498,-0.092,-0.697,0.347,-0.465,-0.568,0.08,0.275,-0.772,-0.166,-0.146,-0.713,0.374,-0.284,-0.61,-0.162,0.425,-0.737,-0.653,0.187,-0.715,-0.711,0.308,-0.621,-0.805,0.552,-0.489,0.265,0.392,-0.731,-0.247,-0.343,-0.606,-0.5,0.482,-0.684,-0.293,0.323,-0.764,-0.17,0.03,-0.451,0.315,0.319,-0.414,0.419,0.166,-0.763,-0.365,-0.003,-0.398,0.436,0.267,-0.635,-0.585,0.461,-0.541,0.158,0.405,-0.575,-0.613,0.553,-0.715,-0.478,0.305,-0.613,-0.063,0.302,-0.681,-0.541,0.384,-0.709,-0.068,0.2,-0.672,-0.137,0.284,-0.746,-0.2,0.161,-0.553,0.101,0.359,-0.741,-0.548,0.239,-0.707,-0.617,0.344,-0.736,-0.392,0.235,-0.764,-0.293,-0.112,-0.763,-0.423,0.143,-0.735,-0.385,-0.248,-0.713,-0.248,0.256,-0.51,0.206,0.345,-0.597,0.118,0.572,-0.46,0.482,0.14,-0.548,0.514,0.097,-0.725,0.052,-0.471,-0.635,0.213,0.016,-0.578,0.223,0.082,-0.517,0.247,0.129,-0.437,0.303,0.179,-0.525,0.222,0.454,-0.418,0.346,0.249]},{"yaw":-0.488,"pitch":0.04,"frame":[-0.26,0.917,0.145,-0.405,0.892,0.031,-0.509,0.84,-0.122,-0.595,0.749,-0.292,-0.649,0.627,-0.452,-0.66,0.476,-0.57,-0.646,0.326,-0.668,-0.622,0.149,-0.713,-0.617,-0.013,-0.7,-0.625,-0.169,-0.636,-0.639,-0.329,-0.537,-0.66,-0.495,-0.395,-0.682,-0.617,-0.222,-0.708,-0.695,-0.043,-0.719,-0.764,0.112,-0.714,-0.81,0.241,-0.697,-0.848,0.369,-0.647,-0.887,0.491,-0.542,-0.91,0.59,-0.394,-0.925,0.647,-0.245,-0.915,0.655,-0.092,-0.894,0.627,0.056,-0.863,0.6,0.237,-0.804,0.557,0.405,-0.724,0.482,0.555,-0.589,0.395,0.663,-0.396,0.312,0.728,-0.214,0.249,0.765,-0.041,0.206,0.782,0.139,0.195,0.746,0.343,0.221,0.667,0.515,0.274,0.53,0.679,0.304,0.357,0.81,0.325,0.142,0.896,0.312,-0.057,0.925,0.251,0.187,0.344,0.474,0.155,0.331,0.483,0.122,0.325,0.489,0.081,0.322,0.488,0.023,0.325,0.475,-0.029,0.334,0.444,-0.076,0.342,0.407,-0.11,0.345,0.377,-0.128,0.35,0.364,0.163,0.366,0.484,0.136,0.386,0.488,0.097,0.405,0.486,0.042,0.417,0.466,-0.007,0.413,0.437,-0.061,0.392,0.405,-0.107,0.366,0.381,-0.654,0.33,-0.104,-0.646,0.32,-0.068,-0.634,0.315,-0.037,-0.615,0.314,0.006,-0.584,0.315,0.048,-0.543,0.322,0.081,-0.505,0.332,0.097,-0.479,0.34,0.098,-0.463,0.347,0.105,-0.65,0.347,-0.069,-0.642,0.364,-0.039,-0.621,0.383,-0.007,-0.586,0.394,0.035,-0.543,0.392,0.069,-0.502,0.38,0.087,-0.477,0.363,0.096,0.316,0.5,0.512,0.219,0.575,0.508,0.099,0.616,0.49,-0.049,0.613,0.45,-0.234,0.562,0.39,0.391,0.517,0.472,0.282,0.618,0.484,0.14,0.68,0.475,-0.035,0.689,0.448,-0.208,0.666,0.392,-0.727,0.471,-0.15,-0.714,0.533,-0.064,-0.668,0.568,0.036,-0.598,0.575,0.14,-0.49,0.545,0.247,-0.728,0.492,-0.239,-0.719,0.575,-0.128,-0.676,0.629,-0.009,-0.605,0.646,0.126,-0.504,0.642,0.232,-0.239,-0.381,0.666,-0.278,-0.387,0.678,-0.329,-0.39,0.688,-0.398,-0.398,0.689,-0.474,-0.402,0.668,-0.545,-0.401,0.626,-0.595,-0.396,0.578,-0.629,-0.387,0.514,-0.648,-0.377,0.458,-0.658,-0.371,0.387,-0.663,-0.364,0.316,-0.668,-0.329,0.366,-0.662,-0.286,0.434,-0.639,-0.241,0.501,-0.597,-0.204,0.578,-0.543,-0.215,0.636,-0.472,-0.205,0.67,-0.387,-0.249,0.687,-0.322,-0.298,0.69,-0.272,-0.343,0.685,-0.259,-0.371,0.656,-0.291,-0.353,0.654,-0.34,-0.333,0.649,-0.402,-0.314,0.643,-0.467,-0.302,0.628,-0.527,-0.301,0.595,-0.564,-0.303,0.547,-0.595,-0.308,0.495,-0.615,-0.32,0.447,-0.632,-0.333,0.397,-0.648,-0.351,0.36,-0.631,-0.331,0.399,-0.618,-0.319,0.452,-0.598,-0.309,0.501,-0.57,-0.305,0.554,-0.531,-0.305,0.604,-0.471,-0.306,0.638,-0.405,-0.315,0.651,-0.343,-0.335,0.655,-0.295,-0.355,0.655,-0.384,0.45,0.358,-0.424,0.386,0.425,-0.463,0.33,0.495,-0.506,0.278,0.572,-0.552,0.223,0.645,-0.596,0.151,0.691,-0.601,0.077,0.689,-0.579,0.016,0.67,-0.544,-0.026,0.61,-0.515,-0.059,0.58,-0.309,-0.076,0.578,-0.602,-0.064,0.412,-0.567,-0.061,0.525,-0.439,-0.065,0.607,-0.237,-0.014,0.556,-0.614,-0.001,0.33,-0.375,0.539,0.337,-0.364,0.635,0.315,-0.533,-0.534,0.587,0.272,0.242,0.503,-0.281,-0.719,0.694,0.643,0.19,0.363,0.393,0.276,0.471,-0.107,0.012,0.592,-0.199,0.198,0.487,-0.311,0.024,0.65,0.143,-0.023,0.636,0.401,0.648,0.406,0.044,0.796,0.379,0.525,0.51,0.377,-0.425,0.039,0.674,-0.448,-0.54,0.628,-0.232,-0.234,0.672,-0.129,0.144,0.521,-0.027,0.088,0.571,0.245,0.745,0.406,-0.135,0.797,0.321,-0.249,0.255,0.472,0.462,0.094,0.523,0.275,0.143,0.566,0.151,0.136,0.573,0.006,0.162,0.529,-0.088,0.2,0.483,-0.159,0.24,0.447,-0.36,0.366,0.447,0.411,-0.059,0.58,0.367,0.393,0.496,-0.238,0.139,0.528,-0.218,0.286,0.416,-0.345,0.109,0.644,-0.42,0.172,0.67,0.176,-0.668,0.627,0.592,-0.139,0.429,0.328,-0.592,0.586,0.598,0.359,0.353,-0.18,0.072,0.549,0.379,-0.218,0.595,-0.316,0.782,0.231,0.031,-0.738,0.65,-0.105,-0.787,0.672,-0.42,-0.837,0.702,-0.347,0.266,0.519,0.542,-0.311,0.47,-0.351,-0.526,0.672,0.206,-0.212,0.652,-0.303,0.317,0.452,-0.199,0.424,0.341,0.234,-0.43,0.632,-0.294,0.438,0.372,-0.31,-0.625,0.675,-0.324,0.153,0.569,-0.569,-0.729,0.646,-0.551,-0.627,0.616,-0.44,-0.635,0.66,-0.109,-0.522,0.683,-0.2,-0.589,0.681,-0.008,-0.089,0.646,-0.129,-0.159,0.64,0.058,-0.236,0.671,-0.023,-0.613,0.676,-0.044,-0.436,0.691,0.351,-0.358,0.599,0.468,-0.468,0.521,-0.079,-0.275,0.674,-0.292,0.204,0.523,-0.456,0.12,0.706,-0.146,0.496,0.376,-0.034,0.544,0.434,0.63,0.025,0.404,0.122,0.214,0.521,0.022,0.225,0.5,-0.063,0.248,0.461,-0.129,0.276,0.414,-0.389,0.219,0.586,-0.214,0.349,0.359,-0.548,0.265,0.516,-0.576,-0.016,0.57,-0.682,0.238,-0.124,-0.712,-0.669,0.432,-0.698,0.198,-0.51,-0.699,0.275,-0.237,-0.666,0.021,0.24,-0.638,0.143,0.654,-0.548,0.197,0.261,-0.656,0.026,0.433,-0.758,-0.006,0.048,-0.594,0.214,0.591,-0.609,-0.017,0.451,-0.68,0.602,-0.273,-0.548,0.749,0.002,-0.7,0.479,-0.396,-0.632,0.029,0.524,-0.598,-0.526,0.544,-0.691,-0.217,0.373,-0.591,0.146,0.216,-0.665,0.091,0.155,-0.63,0.692,-0.142,-0.683,-0.469,0.41,-0.447,0.77,0.127,-0.713,0.183,-0.179,-0.696,0.377,-0.141,-0.758,0.108,-0.269,-0.723,0.146,-0.091,-0.701,0.136,0.02,-0.628,0.161,0.109,-0.564,0.199,0.167,-0.518,0.24,0.212,-0.782,-0.029,-0.212,-0.572,0.141,0.308,-0.636,0.112,0.468,-0.621,0.173,0.535,-0.762,-0.579,0.032,-0.734,-0.097,-0.441,-0.749,-0.503,-0.114,-0.694,0.344,-0.477,-0.605,0.078,0.276,-0.779,-0.171,-0.166,-0.713,0.373,-0.296,-0.654,-0.163,0.422,-0.758,-0.654,0.169,-0.744,-0.71,0.293,-0.674,-0.803,0.544,-0.534,0.264,0.4,-0.732,-0.252,-0.363,-0.651,-0.502,0.476,-0.717,-0.294,0.312,-0.779,-0.174,0.012,-0.49,0.313,0.329,-0.446,0.417,0.178,-0.774,-0.369,-0.023,-0.438,0.433,0.279,-0.677,-0.586,0.452,-0.587,0.158,0.409,-0.628,-0.614,0.549,-0.744,-0.48,0.292,-0.652,-0.064,0.3,-0.716,-0.543,0.373,-0.736,-0.072,0.19,-0.706,-0.14,0.277,-0.768,-0.203,0.147,-0.598,0.1,0.363,-0.764,-0.55,0.223,-0.739,-0.616,0.33,-0.761,-0.395,0.219,-0.772,-0.297,-0.132,-0.781,-0.427,0.125,-0.736,-0.389,-0.269,-0.742,-0.25,0.244,-0.553,0.205,0.351,-0.655,0.117,0.571,-0.489,0.48,0.15,-0.571,0.511,0.1,-0.724,0.048,-0.488,-0.654,0.21,0.01,-0.603,0.22,0.08,-0.545,0.244,0.132,-0.471,0.301,0.189,-0.574,0.221,0.459,-0.457,0.344,0.26]},{"yaw":-0.573,"pitch":0.04,"frame":[-0.275,0.913,0.158,-0.413,0.883,0.033,-0.51,0.827,-0.13,-0.583,0.732,-0.304,-0.623,0.606,-0.466,-0.621,0.456,-0.583,-0.593,0.31,-0.677,-0.559,0.136,-0.72,-0.548,-0.024,-0.705,-0.556,-0.178,-0.64,-0.571,-0.339,-0.541,-0.598,-0.505,-0.398,-0.649,-0.625,-0.226,-0.686,-0.7,-0.046,-0.71,-0.765,0.111,-0.717,-0.808,0.24,-0.711,-0.846,0.369,-0.672,-0.883,0.491,-0.576,-0.908,0.591,-0.437,-0.925,0.657,-0.292,-0.917,0.677,-0.138,-0.9,0.659,0.014,-0.872,0.641,0.203,-0.816,0.608,0.38,-0.739,0.54,0.539,-0.605,0.46,0.65,-0.411,0.38,0.717,-0.224,0.319,0.757,-0.047,0.275,0.776,0.137,0.262,0.738,0.345,0.281,0.657,0.518,0.326,0.516,0.684,0.348,0.339,0.815,0.359,0.121,0.899,0.336,-0.077,0.925,0.269,0.169,0.345,0.508,0.135,0.331,0.516,0.101,0.323,0.52,0.058,0.319,0.517,-0.001,0.321,0.501,-0.053,0.329,0.468,-0.097,0.338,0.43,-0.13,0.341,0.399,-0.146,0.346,0.386,0.143,0.367,0.516,0.116,0.386,0.519,0.075,0.405,0.514,0.018,0.416,0.492,-0.03,0.411,0.461,-0.085,0.39,0.429,-0.128,0.363,0.403,-0.655,0.32,-0.116,-0.65,0.309,-0.08,-0.64,0.305,-0.048,-0.623,0.304,-0.005,-0.594,0.305,0.039,-0.553,0.313,0.075,-0.518,0.325,0.094,-0.493,0.335,0.097,-0.477,0.342,0.105,-0.654,0.337,-0.081,-0.646,0.353,-0.051,-0.627,0.371,-0.018,-0.594,0.383,0.026,-0.553,0.382,0.062,-0.513,0.372,0.084,-0.49,0.357,0.095,0.284,0.508,0.545,0.185,0.584,0.535,0.064,0.625,0.512,-0.081,0.62,0.467,-0.259,0.562,0.402,0.361,0.525,0.508,0.248,0.627,0.514,0.103,0.688,0.498,-0.069,0.692,0.464,-0.235,0.667,0.404,-0.723,0.455,-0.168,-0.716,0.516,-0.083,-0.675,0.555,0.02,-0.609,0.566,0.13,-0.505,0.54,0.244,-0.717,0.474,-0.257,-0.717,0.556,-0.146,-0.681,0.613,-0.025,-0.615,0.633,0.115,-0.519,0.634,0.228,-0.27,-0.383,0.688,-0.307,-0.389,0.695,-0.36,-0.393,0.7,-0.429,-0.403,0.698,-0.504,-0.406,0.672,-0.571,-0.405,0.626,-0.618,-0.401,0.576,-0.649,-0.391,0.51,-0.663,-0.379,0.453,-0.67,-0.371,0.381,-0.67,-0.365,0.309,-0.68,-0.331,0.357,-0.679,-0.291,0.425,-0.662,-0.247,0.493,-0.625,-0.212,0.571,-0.576,-0.222,0.632,-0.505,-0.212,0.671,-0.421,-0.255,0.695,-0.355,-0.303,0.702,-0.303,-0.346,0.702,-0.289,-0.374,0.674,-0.319,-0.356,0.67,-0.368,-0.336,0.662,-0.43,-0.316,0.652,-0.495,-0.304,0.635,-0.551,-0.302,0.596,-0.588,-0.305,0.544,-0.614,-0.311,0.491,-0.632,-0.321,0.443,-0.645,-0.334,0.392,-0.659,-0.352,0.354,-0.645,-0.333,0.392,-0.635,-0.322,0.445,-0.619,-0.313,0.494,-0.593,-0.31,0.549,-0.557,-0.309,0.601,-0.5,-0.311,0.643,-0.436,-0.319,0.659,-0.372,-0.339,0.665,-0.323,-0.358,0.669,-0.402,0.447,0.364,-0.445,0.383,0.428,-0.488,0.327,0.494,-0.535,0.276,0.568,-0.586,0.221,0.638,-0.636,0.15,0.682,-0.644,0.075,0.681,-0.619,0.014,0.663,-0.582,-0.029,0.606,-0.551,-0.062,0.578,-0.343,-0.08,0.589,-0.627,-0.067,0.407,-0.597,-0.065,0.521,-0.475,-0.069,0.61,-0.269,-0.019,0.571,-0.632,-0.005,0.325,-0.394,0.536,0.342,-0.385,0.632,0.321,-0.561,-0.535,0.589,0.244,0.243,0.54,-0.325,-0.723,0.71,0.623,0.191,0.419,0.363,0.279,0.513,-0.141,0.009,0.614,-0.225,0.195,0.504,-0.35,0.021,0.66,0.105,-0.027,0.67,0.378,0.655,0.442,0.018,0.8,0.399,0.505,0.514,0.42,-0.466,0.037,0.681,-0.48,-0.542,0.633,-0.27,-0.239,0.687,-0.157,0.141,0.541,-0.059,0.085,0.595,0.219,0.753,0.434,-0.158,0.798,0.336,-0.274,0.253,0.486,0.431,0.093,0.57,0.239,0.142,0.604,0.116,0.134,0.606,-0.023,0.16,0.555,-0.113,0.197,0.504,-0.182,0.237,0.465,-0.383,0.363,0.455,0.376,-0.063,0.628,0.337,0.399,0.534,-0.267,0.136,0.543,-0.239,0.283,0.432,-0.383,0.107,0.654,-0.459,0.171,0.672,0.137,-0.679,0.672,0.564,-0.146,0.488,0.295,-0.605,0.638,0.578,0.362,0.404,-0.21,0.068,0.567,0.343,-0.224,0.643,-0.335,0.78,0.24,-0.013,-0.746,0.687,-0.153,-0.793,0.701,-0.462,-0.838,0.71,-0.376,0.264,0.529,0.513,-0.322,0.528,-0.386,-0.53,0.683,0.167,-0.219,0.692,-0.327,0.315,0.463,-0.22,0.421,0.358,0.198,-0.44,0.677,-0.314,0.436,0.384,-0.348,-0.629,0.689,-0.357,0.151,0.579,-0.603,-0.728,0.646,-0.581,-0.627,0.616,-0.475,-0.636,0.665,-0.147,-0.529,0.708,-0.239,-0.595,0.702,-0.047,-0.093,0.674,-0.167,-0.163,0.661,0.019,-0.242,0.703,-0.065,-0.621,0.708,-0.082,-0.442,0.72,0.316,-0.367,0.648,0.44,-0.481,0.578,-0.118,-0.28,0.7,-0.32,0.201,0.535,-0.498,0.119,0.706,-0.169,0.496,0.395,-0.063,0.546,0.454,0.605,0.023,0.462,0.094,0.212,0.552,-0.005,0.222,0.526,-0.088,0.245,0.484,-0.15,0.273,0.433,-0.422,0.217,0.594,-0.233,0.345,0.375,-0.575,0.262,0.508,-0.612,-0.018,0.565,-0.676,0.228,-0.137,-0.729,-0.671,0.43,-0.652,0.186,-0.523,-0.681,0.264,-0.251,-0.676,0.015,0.231,-0.675,0.142,0.643,-0.563,0.192,0.257,-0.684,0.024,0.423,-0.751,-0.015,0.033,-0.627,0.212,0.581,-0.638,-0.019,0.444,-0.667,0.583,-0.29,-0.554,0.738,-0.008,-0.676,0.46,-0.412,-0.666,0.028,0.514,-0.622,-0.528,0.546,-0.709,-0.223,0.363,-0.603,0.14,0.209,-0.67,0.084,0.144,-0.628,0.677,-0.156,-0.7,-0.473,0.405,-0.46,0.763,0.125,-0.699,0.172,-0.193,-0.689,0.364,-0.156,-0.733,0.096,-0.287,-0.717,0.135,-0.106,-0.702,0.127,0.007,-0.637,0.154,0.099,-0.578,0.193,0.161,-0.535,0.234,0.208,-0.757,-0.038,-0.228,-0.589,0.137,0.303,-0.663,0.109,0.458,-0.651,0.171,0.524,-0.748,-0.584,0.028,-0.68,-0.106,-0.452,-0.726,-0.51,-0.121,-0.659,0.329,-0.491,-0.618,0.073,0.27,-0.755,-0.179,-0.18,-0.692,0.36,-0.313,-0.676,-0.168,0.414,-0.754,-0.657,0.166,-0.75,-0.71,0.291,-0.7,-0.801,0.544,-0.556,0.26,0.395,-0.683,-0.26,-0.372,-0.672,-0.505,0.473,-0.732,-0.3,0.302,-0.765,-0.182,-0.002,-0.508,0.309,0.326,-0.459,0.412,0.181,-0.759,-0.376,-0.032,-0.455,0.429,0.282,-0.696,-0.589,0.45,-0.611,0.154,0.402,-0.652,-0.616,0.549,-0.753,-0.485,0.286,-0.667,-0.068,0.293,-0.728,-0.547,0.369,-0.738,-0.079,0.179,-0.718,-0.145,0.268,-0.767,-0.21,0.136,-0.617,0.096,0.357,-0.767,-0.555,0.218,-0.748,-0.619,0.327,-0.767,-0.401,0.21,-0.749,-0.305,-0.143,-0.776,-0.434,0.117,-0.701,-0.398,-0.277,-0.751,-0.257,0.233,-0.572,0.2,0.346,-0.689,0.116,0.559,-0.502,0.473,0.148,-0.581,0.502,0.092,-0.672,0.037,-0.501,-0.656,0.201,-0.002,-0.611,0.212,0.071,-0.557,0.237,0.127,-0.486,0.296,0.19,-0.599,0.218,0.451,-0.474,0.34,0.262]},{"yaw":-0.628,"pitch":0.037,"frame":[-0.287,0.908,0.155,-0.416,0.876,0.024,-0.504,0.82,-0.144,-0.567,0.723,-0.32,-0.598,0.594,-0.482,-0.585,0.442,-0.599,-0.553,0.296,-0.69,-0.519,0.122,-0.731,-0.512,-0.035,-0.715,-0.525,-0.187,-0.651,-0.547,-0.345,-0.551,-0.577,-0.506,-0.411,-0.625,-0.62,-0.24,-0.669,-0.691,-0.059,-0.697,-0.754,0.098,-0.711,-0.798,0.228,-0.714,-0.839,0.358,-0.684,-0.879,0.485,-0.598,-0.905,0.588,-0.466,-0.925,0.659,-0.325,-0.92,0.686,-0.172,-0.905,0.674,-0.019,-0.879,0.663,0.176,-0.829,0.638,0.361,-0.757,0.58,0.527,-0.623,0.509,0.644,-0.428,0.435,0.712,-0.238,0.378,0.754,-0.057,0.338,0.773,0.131,0.325,0.735,0.343,0.341,0.651,0.519,0.379,0.506,0.689,0.392,0.323,0.821,0.392,0.101,0.903,0.356,-0.095,0.925,0.275,0.148,0.343,0.534,0.114,0.327,0.541,0.079,0.319,0.542,0.036,0.313,0.537,-0.022,0.314,0.518,-0.071,0.322,0.481,-0.113,0.331,0.442,-0.144,0.334,0.41,-0.159,0.34,0.396,0.121,0.364,0.54,0.095,0.383,0.541,0.054,0.401,0.533,-0.004,0.411,0.509,-0.049,0.405,0.475,-0.101,0.384,0.441,-0.142,0.356,0.414,-0.649,0.296,-0.134,-0.646,0.288,-0.098,-0.639,0.284,-0.066,-0.624,0.283,-0.022,-0.597,0.284,0.024,-0.558,0.293,0.062,-0.525,0.307,0.082,-0.503,0.319,0.087,-0.488,0.326,0.097,-0.647,0.313,-0.099,-0.641,0.329,-0.069,-0.625,0.347,-0.035,-0.594,0.359,0.011,-0.555,0.36,0.048,-0.519,0.354,0.073,-0.5,0.341,0.085,0.26,0.51,0.571,0.16,0.588,0.554,0.038,0.631,0.523,-0.106,0.625,0.471,-0.279,0.563,0.399,0.34,0.527,0.543,0.222,0.631,0.537,0.076,0.693,0.513,-0.094,0.695,0.468,-0.258,0.668,0.401,-0.708,0.433,-0.193,-0.706,0.498,-0.108,-0.675,0.543,-0.002,-0.618,0.557,0.111,-0.52,0.532,0.23,-0.697,0.452,-0.283,-0.706,0.536,-0.171,-0.679,0.598,-0.047,-0.623,0.621,0.096,-0.534,0.626,0.212,-0.301,-0.382,0.691,-0.339,-0.389,0.695,-0.392,-0.393,0.699,-0.461,-0.403,0.695,-0.534,-0.406,0.666,-0.6,-0.404,0.618,-0.645,-0.401,0.565,-0.673,-0.391,0.495,-0.685,-0.377,0.436,-0.689,-0.369,0.362,-0.688,-0.363,0.289,-0.7,-0.329,0.336,-0.704,-0.29,0.403,-0.689,-0.247,0.473,-0.655,-0.213,0.554,-0.605,-0.221,0.616,-0.534,-0.211,0.659,-0.451,-0.255,0.69,-0.386,-0.303,0.699,-0.335,-0.346,0.702,-0.319,-0.373,0.674,-0.351,-0.355,0.67,-0.4,-0.334,0.661,-0.461,-0.315,0.65,-0.524,-0.303,0.63,-0.579,-0.301,0.589,-0.614,-0.305,0.533,-0.638,-0.31,0.477,-0.653,-0.321,0.428,-0.664,-0.332,0.375,-0.675,-0.351,0.335,-0.663,-0.333,0.372,-0.655,-0.322,0.425,-0.641,-0.314,0.476,-0.618,-0.311,0.533,-0.583,-0.308,0.587,-0.528,-0.311,0.631,-0.464,-0.32,0.653,-0.402,-0.34,0.66,-0.355,-0.358,0.668,-0.417,0.44,0.355,-0.462,0.375,0.415,-0.508,0.319,0.479,-0.559,0.269,0.551,-0.615,0.216,0.619,-0.666,0.145,0.662,-0.674,0.07,0.66,-0.649,0.008,0.645,-0.609,-0.034,0.59,-0.576,-0.067,0.566,-0.366,-0.086,0.586,-0.65,-0.073,0.392,-0.622,-0.071,0.507,-0.501,-0.073,0.6,-0.291,-0.026,0.573,-0.652,-0.012,0.31,-0.411,0.531,0.332,-0.403,0.628,0.312,-0.588,-0.535,0.584,0.223,0.238,0.568,-0.36,-0.727,0.715,0.611,0.187,0.47,0.342,0.276,0.548,-0.169,0.003,0.622,-0.245,0.189,0.505,-0.378,0.016,0.656,0.077,-0.033,0.691,0.36,0.66,0.474,-0.004,0.804,0.41,0.492,0.515,0.462,-0.494,0.033,0.67,-0.511,-0.543,0.63,-0.304,-0.243,0.687,-0.178,0.136,0.547,-0.084,0.08,0.607,0.198,0.759,0.457,-0.179,0.799,0.338,-0.295,0.246,0.485,0.41,0.088,0.61,0.215,0.136,0.633,0.091,0.128,0.627,-0.046,0.153,0.568,-0.132,0.191,0.512,-0.2,0.23,0.469,-0.402,0.356,0.449,0.353,-0.07,0.665,0.314,0.399,0.566,-0.29,0.13,0.544,-0.257,0.277,0.433,-0.412,0.102,0.648,-0.489,0.166,0.659,0.104,-0.69,0.698,0.547,-0.156,0.538,0.269,-0.62,0.672,0.567,0.361,0.451,-0.233,0.063,0.571,0.319,-0.233,0.679,-0.352,0.775,0.234,-0.049,-0.753,0.704,-0.19,-0.798,0.712,-0.495,-0.839,0.707,-0.4,0.258,0.524,0.495,-0.335,0.575,-0.419,-0.533,0.683,0.14,-0.227,0.716,-0.348,0.308,0.459,-0.233,0.416,0.362,0.17,-0.451,0.705,-0.33,0.431,0.381,-0.383,-0.633,0.692,-0.383,0.145,0.574,-0.628,-0.728,0.64,-0.608,-0.626,0.612,-0.506,-0.638,0.662,-0.183,-0.535,0.715,-0.274,-0.601,0.707,-0.078,-0.1,0.686,-0.198,-0.169,0.667,-0.012,-0.249,0.72,-0.102,-0.628,0.72,-0.117,-0.449,0.731,0.293,-0.378,0.682,0.419,-0.496,0.62,-0.151,-0.287,0.708,-0.344,0.195,0.532,-0.531,0.114,0.69,-0.185,0.493,0.4,-0.082,0.544,0.463,0.589,0.016,0.513,0.07,0.207,0.571,-0.026,0.216,0.54,-0.106,0.238,0.495,-0.165,0.266,0.439,-0.449,0.211,0.586,-0.247,0.339,0.378,-0.598,0.255,0.49,-0.637,-0.024,0.548,-0.663,0.208,-0.158,-0.739,-0.667,0.417,-0.62,0.172,-0.541,-0.662,0.244,-0.271,-0.686,0.008,0.214,-0.703,0.136,0.621,-0.575,0.184,0.242,-0.708,0.017,0.404,-0.748,-0.022,0.008,-0.652,0.206,0.561,-0.663,-0.025,0.428,-0.649,0.571,-0.311,-0.554,0.73,-0.024,-0.65,0.444,-0.432,-0.692,0.021,0.494,-0.646,-0.529,0.54,-0.729,-0.227,0.342,-0.611,0.133,0.193,-0.676,0.077,0.124,-0.617,0.667,-0.176,-0.717,-0.474,0.388,-0.469,0.756,0.113,-0.684,0.153,-0.214,-0.674,0.342,-0.178,-0.707,0.084,-0.312,-0.707,0.12,-0.129,-0.701,0.116,-0.015,-0.643,0.145,0.081,-0.587,0.184,0.146,-0.545,0.226,0.195,-0.734,-0.047,-0.254,-0.604,0.129,0.288,-0.687,0.102,0.438,-0.675,0.165,0.503,-0.736,-0.577,0.01,-0.652,-0.115,-0.472,-0.709,-0.506,-0.139,-0.627,0.315,-0.51,-0.631,0.066,0.255,-0.736,-0.185,-0.205,-0.668,0.341,-0.335,-0.7,-0.172,0.395,-0.745,-0.649,0.15,-0.745,-0.702,0.277,-0.716,-0.799,0.534,-0.574,0.253,0.379,-0.657,-0.266,-0.392,-0.692,-0.506,0.459,-0.75,-0.303,0.28,-0.76,-0.188,-0.027,-0.522,0.301,0.313,-0.47,0.402,0.173,-0.75,-0.378,-0.054,-0.468,0.421,0.272,-0.71,-0.587,0.438,-0.631,0.147,0.385,-0.673,-0.616,0.542,-0.759,-0.484,0.267,-0.683,-0.074,0.277,-0.738,-0.546,0.354,-0.745,-0.085,0.158,-0.732,-0.15,0.248,-0.77,-0.215,0.115,-0.637,0.088,0.341,-0.765,-0.551,0.2,-0.75,-0.615,0.312,-0.773,-0.403,0.189,-0.733,-0.308,-0.166,-0.772,-0.434,0.096,-0.676,-0.398,-0.297,-0.763,-0.261,0.211,-0.589,0.193,0.33,-0.715,0.109,0.536,-0.511,0.461,0.138,-0.587,0.486,0.076,-0.641,0.026,-0.521,-0.655,0.187,-0.021,-0.614,0.199,0.053,-0.563,0.225,0.114,-0.496,0.286,0.18,-0.62,0.211,0.433,-0.487,0.332,0.251]},{"yaw":-0.695,"pitch":0.035,"frame":[-0.275,0.908,0.156,-0.398,0.874,0.012,-0.481,0.817,-0.159,-0.537,0.723,-0.336,-0.551,0.597,-0.494,-0.523,0.449,-0.606,-0.484,0.307,-0.692,-0.448,0.132,-0.729,-0.444,-0.026,-0.713,-0.465,-0.179,-0.65,-0.494,-0.336,-0.551,-0.534,-0.493,-0.411,-0.59,-0.607,-0.243,-0.64,-0.678,-0.066,-0.677,-0.743,0.088,-0.697,-0.789,0.216,-0.708,-0.832,0.345,-0.687,-0.875,0.472,-0.609,-0.904,0.581,-0.484,-0.925,0.659,-0.347,-0.921,0.69,-0.195,-0.909,0.679,-0.043,-0.887,0.67,0.155,-0.843,0.649,0.342,-0.771,0.597,0.511,-0.638,0.533,0.629,-0.443,0.464,0.7,-0.249,0.412,0.744,-0.062,0.374,0.766,0.132,0.362,0.729,0.348,0.375,0.647,0.526,0.407,0.503,0.696,0.415,0.32,0.825,0.408,0.102,0.904,0.366,-0.089,0.925,0.283,0.146,0.334,0.543,0.112,0.319,0.548,0.077,0.309,0.549,0.034,0.301,0.542,-0.023,0.3,0.522,-0.069,0.306,0.485,-0.107,0.314,0.445,-0.134,0.317,0.414,-0.147,0.323,0.4,0.12,0.356,0.547,0.093,0.375,0.547,0.052,0.393,0.538,-0.004,0.401,0.513,-0.046,0.393,0.478,-0.094,0.37,0.445,-0.131,0.341,0.418,-0.625,0.273,-0.144,-0.623,0.265,-0.108,-0.616,0.262,-0.076,-0.603,0.262,-0.033,-0.576,0.263,0.012,-0.54,0.273,0.05,-0.51,0.287,0.072,-0.491,0.298,0.077,-0.477,0.305,0.087,-0.625,0.289,-0.11,-0.62,0.306,-0.08,-0.604,0.324,-0.047,-0.576,0.337,-0.001,-0.539,0.339,0.037,-0.506,0.332,0.062,-0.489,0.32,0.075,0.249,0.508,0.58,0.149,0.587,0.559,0.028,0.628,0.526,-0.109,0.621,0.471,-0.273,0.556,0.395,0.329,0.526,0.555,0.21,0.631,0.545,0.066,0.689,0.517,-0.097,0.689,0.469,-0.254,0.661,0.396,-0.676,0.416,-0.205,-0.678,0.48,-0.123,-0.65,0.525,-0.018,-0.597,0.541,0.095,-0.504,0.516,0.215,-0.666,0.436,-0.292,-0.675,0.518,-0.185,-0.651,0.579,-0.062,-0.6,0.602,0.079,-0.516,0.609,0.196,-0.307,-0.379,0.686,-0.345,-0.386,0.688,-0.402,-0.391,0.69,-0.475,-0.401,0.684,-0.55,-0.404,0.653,-0.615,-0.401,0.603,-0.658,-0.397,0.546,-0.686,-0.387,0.474,-0.696,-0.371,0.414,-0.698,-0.361,0.339,-0.694,-0.352,0.268,-0.709,-0.32,0.313,-0.714,-0.282,0.381,-0.699,-0.241,0.451,-0.663,-0.21,0.533,-0.613,-0.217,0.596,-0.54,-0.208,0.641,-0.457,-0.253,0.676,-0.391,-0.301,0.689,-0.341,-0.343,0.695,-0.323,-0.371,0.667,-0.356,-0.352,0.662,-0.405,-0.332,0.653,-0.469,-0.312,0.64,-0.534,-0.301,0.618,-0.591,-0.299,0.573,-0.625,-0.302,0.514,-0.649,-0.306,0.457,-0.661,-0.315,0.407,-0.671,-0.324,0.353,-0.68,-0.343,0.313,-0.67,-0.327,0.35,-0.662,-0.319,0.403,-0.649,-0.313,0.455,-0.625,-0.311,0.513,-0.591,-0.308,0.569,-0.535,-0.312,0.613,-0.471,-0.321,0.637,-0.409,-0.339,0.649,-0.358,-0.357,0.659,-0.405,0.427,0.343,-0.451,0.36,0.402,-0.499,0.306,0.465,-0.551,0.258,0.535,-0.61,0.207,0.599,-0.664,0.14,0.64,-0.676,0.065,0.639,-0.65,0.004,0.624,-0.614,-0.038,0.574,-0.581,-0.07,0.551,-0.372,-0.093,0.58,-0.646,-0.076,0.379,-0.622,-0.074,0.492,-0.508,-0.081,0.587,-0.295,-0.034,0.571,-0.644,-0.015,0.298,-0.399,0.52,0.319,-0.391,0.617,0.299,-0.6,-0.532,0.575,0.218,0.231,0.577,-0.375,-0.731,0.714,0.602,0.186,0.495,0.335,0.27,0.561,-0.173,-0.004,0.621,-0.243,0.181,0.503,-0.385,0.01,0.648,0.071,-0.042,0.694,0.354,0.664,0.489,-0.006,0.802,0.415,0.485,0.52,0.482,-0.501,0.027,0.656,-0.522,-0.542,0.624,-0.311,-0.247,0.681,-0.178,0.129,0.546,-0.088,0.073,0.607,0.191,0.761,0.466,-0.174,0.796,0.339,-0.29,0.236,0.481,0.401,0.081,0.624,0.205,0.127,0.64,0.084,0.119,0.631,-0.05,0.144,0.569,-0.132,0.181,0.513,-0.197,0.219,0.468,-0.394,0.343,0.439,0.342,-0.08,0.676,0.305,0.396,0.578,-0.289,0.122,0.54,-0.249,0.266,0.431,-0.415,0.094,0.638,-0.49,0.157,0.643,0.086,-0.703,0.705,0.533,-0.166,0.56,0.253,-0.635,0.684,0.559,0.363,0.475,-0.234,0.056,0.569,0.309,-0.246,0.689,-0.34,0.771,0.227,-0.069,-0.763,0.707,-0.212,-0.805,0.713,-0.511,-0.84,0.702,-0.396,0.246,0.515,0.48,-0.349,0.594,-0.43,-0.533,0.677,0.132,-0.239,0.72,-0.342,0.296,0.453,-0.221,0.403,0.363,0.159,-0.466,0.711,-0.318,0.419,0.377,-0.394,-0.636,0.689,-0.382,0.136,0.566,-0.639,-0.728,0.627,-0.618,-0.625,0.601,-0.517,-0.639,0.655,-0.194,-0.54,0.712,-0.284,-0.605,0.704,-0.085,-0.109,0.686,-0.206,-0.176,0.664,-0.021,-0.259,0.72,-0.117,-0.637,0.72,-0.126,-0.456,0.728,0.282,-0.392,0.692,0.404,-0.511,0.636,-0.158,-0.292,0.704,-0.341,0.185,0.526,-0.535,0.107,0.673,-0.177,0.482,0.402,-0.083,0.534,0.465,0.577,0.01,0.537,0.066,0.198,0.576,-0.028,0.206,0.543,-0.105,0.226,0.497,-0.159,0.253,0.44,-0.446,0.201,0.574,-0.236,0.325,0.377,-0.589,0.245,0.473,-0.638,-0.026,0.531,-0.637,0.191,-0.167,-0.735,-0.664,0.402,-0.561,0.175,-0.545,-0.63,0.228,-0.278,-0.675,0.006,0.201,-0.699,0.131,0.598,-0.561,0.175,0.23,-0.699,0.013,0.387,-0.728,-0.023,-0.004,-0.646,0.198,0.541,-0.659,-0.027,0.413,-0.616,0.567,-0.324,-0.531,0.722,-0.042,-0.6,0.443,-0.441,-0.688,0.019,0.475,-0.654,-0.525,0.528,-0.729,-0.223,0.322,-0.597,0.126,0.181,-0.66,0.073,0.111,-0.59,0.662,-0.191,-0.72,-0.468,0.368,-0.452,0.749,0.097,-0.654,0.14,-0.221,-0.645,0.323,-0.189,-0.667,0.081,-0.318,-0.682,0.108,-0.139,-0.681,0.107,-0.026,-0.627,0.135,0.069,-0.572,0.171,0.135,-0.531,0.214,0.184,-0.703,-0.048,-0.261,-0.593,0.122,0.276,-0.678,0.096,0.42,-0.667,0.158,0.484,-0.715,-0.566,0.001,-0.603,-0.112,-0.473,-0.681,-0.493,-0.145,-0.571,0.317,-0.516,-0.621,0.062,0.242,-0.709,-0.18,-0.212,-0.63,0.328,-0.343,-0.699,-0.171,0.378,-0.729,-0.638,0.138,-0.733,-0.694,0.263,-0.719,-0.796,0.518,-0.563,0.242,0.364,-0.617,-0.257,-0.393,-0.697,-0.502,0.441,-0.751,-0.297,0.259,-0.741,-0.184,-0.038,-0.509,0.288,0.3,-0.456,0.383,0.163,-0.731,-0.369,-0.063,-0.453,0.406,0.261,-0.709,-0.584,0.423,-0.621,0.139,0.371,-0.677,-0.614,0.529,-0.754,-0.478,0.248,-0.676,-0.076,0.263,-0.735,-0.54,0.336,-0.733,-0.085,0.145,-0.725,-0.149,0.232,-0.757,-0.212,0.102,-0.626,0.082,0.327,-0.754,-0.544,0.184,-0.742,-0.608,0.297,-0.766,-0.397,0.171,-0.708,-0.299,-0.173,-0.759,-0.427,0.082,-0.641,-0.385,-0.3,-0.756,-0.256,0.194,-0.577,0.184,0.317,-0.709,0.104,0.515,-0.496,0.44,0.125,-0.566,0.465,0.062,-0.585,0.029,-0.522,-0.635,0.173,-0.033,-0.595,0.184,0.042,-0.547,0.209,0.104,-0.484,0.269,0.17,-0.61,0.202,0.417,-0.475,0.318,0.24]},{"yaw":-0.666,"pitch":-0.004,"frame":[-0.366,0.908,0.3,-0.493,0.88,0.159,-0.575,0.83,-0.018,-0.625,0.747,-0.209,-0.635,0.637,-0.387,-0.603,0.508,-0.525,-0.553,0.38,-0.642,-0.499,0.221,-0.706,-0.476,0.072,-0.711,-0.473,-0.077,-0.672,-0.478,-0.233,-0.598,-0.493,-0.397,-0.481,-0.528,-0.527,-0.325,-0.57,-0.617,-0.154,-0.601,-0.701,-0.004,-0.62,-0.762,0.12,-0.628,-0.821,0.245,-0.606,-0.875,0.367,-0.529,-0.908,0.472,-0.394,-0.925,0.546,-0.256,-0.909,0.579,-0.106,-0.875,0.574,0.045,-0.828,0.568,0.234,-0.751,0.551,0.414,-0.655,0.506,0.568,-0.506,0.452,0.664,-0.307,0.405,0.719,-0.119,0.375,0.75,0.058,0.361,0.755,0.235,0.375,0.702,0.427,0.428,0.609,0.582,0.482,0.455,0.728,0.51,0.262,0.841,0.523,0.033,0.908,0.497,-0.17,0.925,0.42,0.119,0.359,0.598,0.083,0.342,0.602,0.047,0.333,0.603,0.002,0.326,0.595,-0.055,0.326,0.576,-0.104,0.333,0.539,-0.147,0.34,0.5,-0.18,0.344,0.469,-0.197,0.349,0.455,0.092,0.38,0.605,0.064,0.398,0.607,0.023,0.416,0.601,-0.036,0.427,0.577,-0.086,0.422,0.542,-0.137,0.399,0.505,-0.178,0.368,0.476,-0.678,0.331,-0.094,-0.672,0.319,-0.059,-0.662,0.312,-0.027,-0.646,0.309,0.017,-0.616,0.309,0.064,-0.576,0.317,0.104,-0.544,0.329,0.127,-0.522,0.339,0.133,-0.509,0.344,0.144,-0.678,0.345,-0.057,-0.673,0.36,-0.024,-0.657,0.375,0.012,-0.624,0.384,0.061,-0.582,0.382,0.1,-0.544,0.373,0.122,-0.522,0.359,0.134,0.218,0.507,0.659,0.114,0.574,0.65,-0.007,0.609,0.621,-0.15,0.602,0.567,-0.326,0.544,0.487,0.296,0.53,0.631,0.175,0.619,0.638,0.03,0.673,0.618,-0.141,0.672,0.573,-0.31,0.643,0.503,-0.751,0.449,-0.13,-0.755,0.498,-0.033,-0.723,0.529,0.076,-0.664,0.536,0.192,-0.563,0.512,0.309,-0.738,0.474,-0.214,-0.755,0.539,-0.092,-0.731,0.584,0.039,-0.675,0.598,0.185,-0.584,0.598,0.305,-0.289,-0.403,0.654,-0.322,-0.421,0.653,-0.373,-0.438,0.651,-0.443,-0.463,0.641,-0.517,-0.476,0.607,-0.58,-0.475,0.559,-0.62,-0.465,0.507,-0.642,-0.443,0.441,-0.649,-0.413,0.385,-0.649,-0.391,0.316,-0.643,-0.373,0.248,-0.656,-0.347,0.302,-0.665,-0.318,0.374,-0.659,-0.286,0.447,-0.635,-0.262,0.531,-0.593,-0.275,0.594,-0.528,-0.265,0.636,-0.446,-0.302,0.665,-0.38,-0.34,0.674,-0.327,-0.373,0.674,-0.308,-0.398,0.638,-0.343,-0.39,0.634,-0.391,-0.38,0.625,-0.452,-0.37,0.613,-0.514,-0.364,0.59,-0.565,-0.362,0.547,-0.591,-0.361,0.494,-0.607,-0.36,0.438,-0.616,-0.362,0.388,-0.624,-0.365,0.335,-0.633,-0.368,0.296,-0.624,-0.359,0.335,-0.621,-0.357,0.391,-0.612,-0.358,0.442,-0.597,-0.36,0.499,-0.57,-0.362,0.552,-0.518,-0.364,0.595,-0.456,-0.366,0.616,-0.394,-0.376,0.627,-0.347,-0.387,0.634,-0.46,0.42,0.424,-0.501,0.342,0.474,-0.542,0.275,0.529,-0.585,0.213,0.59,-0.633,0.148,0.648,-0.677,0.067,0.681,-0.679,-0.007,0.671,-0.653,-0.058,0.65,-0.609,-0.088,0.587,-0.57,-0.111,0.559,-0.38,-0.117,0.589,-0.627,-0.092,0.386,-0.612,-0.106,0.498,-0.501,-0.115,0.593,-0.309,-0.046,0.584,-0.633,-0.022,0.31,-0.458,0.51,0.414,-0.456,0.604,0.409,-0.553,-0.576,0.513,0.203,0.256,0.625,-0.312,-0.737,0.629,0.59,0.253,0.533,0.324,0.299,0.613,-0.178,-0.012,0.637,-0.273,0.177,0.543,-0.393,-0.028,0.668,0.072,-0.03,0.711,0.309,0.671,0.585,-0.067,0.789,0.535,0.45,0.549,0.56,-0.503,-0.026,0.678,-0.478,-0.581,0.561,-0.297,-0.269,0.672,-0.2,0.127,0.579,-0.099,0.072,0.636,0.139,0.754,0.576,-0.244,0.781,0.464,-0.324,0.228,0.529,0.399,0.126,0.653,0.202,0.151,0.679,0.075,0.135,0.667,-0.069,0.156,0.607,-0.161,0.192,0.553,-0.233,0.229,0.513,-0.439,0.326,0.505,0.348,-0.033,0.687,0.286,0.411,0.642,-0.313,0.109,0.571,-0.291,0.272,0.484,-0.43,0.054,0.666,-0.508,0.106,0.682,0.148,-0.641,0.627,0.547,-0.08,0.548,0.307,-0.552,0.613,0.536,0.413,0.537,-0.251,0.047,0.592,0.326,-0.193,0.674,-0.417,0.76,0.356,0.002,-0.722,0.622,-0.132,-0.784,0.621,-0.433,-0.852,0.602,-0.43,0.22,0.565,0.509,-0.256,0.559,-0.389,-0.563,0.62,0.147,-0.21,0.71,-0.381,0.283,0.511,-0.275,0.415,0.429,0.193,-0.414,0.667,-0.373,0.419,0.451,-0.342,-0.651,0.617,-0.404,0.107,0.601,-0.572,-0.755,0.542,-0.561,-0.659,0.526,-0.463,-0.667,0.579,-0.155,-0.536,0.66,-0.238,-0.608,0.64,-0.079,-0.111,0.69,-0.197,-0.186,0.663,-0.005,-0.248,0.705,-0.065,-0.615,0.654,-0.095,-0.447,0.689,0.31,-0.331,0.656,0.448,-0.416,0.58,-0.141,-0.296,0.691,-0.37,0.166,0.567,-0.544,0.044,0.708,-0.229,0.489,0.475,-0.125,0.536,0.545,0.579,0.087,0.549,0.048,0.216,0.62,-0.053,0.224,0.587,-0.136,0.245,0.541,-0.198,0.271,0.489,-0.473,0.163,0.617,-0.285,0.339,0.436,-0.62,0.203,0.526,-0.639,-0.07,0.547,-0.677,0.243,-0.128,-0.662,-0.671,0.325,-0.608,0.242,-0.519,-0.677,0.284,-0.238,-0.675,0.004,0.213,-0.711,0.063,0.639,-0.583,0.177,0.269,-0.689,-0.014,0.407,-0.732,-0.004,0.005,-0.666,0.142,0.588,-0.649,-0.057,0.426,-0.692,0.592,-0.225,-0.617,0.722,0.084,-0.675,0.487,-0.362,-0.687,-0.026,0.499,-0.604,-0.563,0.468,-0.687,-0.241,0.319,-0.613,0.133,0.212,-0.673,0.081,0.137,-0.674,0.672,-0.078,-0.659,-0.486,0.328,-0.533,0.744,0.228,-0.684,0.193,-0.194,-0.71,0.369,-0.131,-0.693,0.135,-0.299,-0.706,0.15,-0.112,-0.7,0.134,0.002,-0.645,0.155,0.103,-0.592,0.191,0.173,-0.557,0.229,0.228,-0.708,0.002,-0.26,-0.604,0.115,0.305,-0.679,0.064,0.451,-0.681,0.112,0.525,-0.648,-0.526,-0.07,-0.608,-0.036,-0.484,-0.623,-0.439,-0.21,-0.635,0.373,-0.462,-0.624,0.06,0.263,-0.69,-0.133,-0.227,-0.692,0.377,-0.285,-0.663,-0.195,0.377,-0.656,-0.611,0.059,-0.658,-0.681,0.177,-0.641,-0.807,0.424,-0.594,0.219,0.416,-0.598,-0.183,-0.425,-0.64,-0.53,0.393,-0.697,-0.307,0.25,-0.717,-0.156,-0.049,-0.549,0.279,0.358,-0.502,0.401,0.23,-0.683,-0.332,-0.103,-0.506,0.408,0.335,-0.643,-0.599,0.358,-0.632,0.116,0.406,-0.615,-0.64,0.455,-0.689,-0.474,0.207,-0.659,-0.081,0.269,-0.667,-0.544,0.282,-0.72,-0.082,0.145,-0.699,-0.155,0.231,-0.724,-0.201,0.089,-0.628,0.069,0.352,-0.686,-0.528,0.126,-0.67,-0.604,0.225,-0.707,-0.388,0.141,-0.673,-0.252,-0.206,-0.701,-0.404,0.042,-0.601,-0.319,-0.352,-0.714,-0.257,0.185,-0.598,0.169,0.357,-0.716,0.049,0.552,-0.548,0.459,0.2,-0.629,0.483,0.142,-0.611,0.102,-0.515,-0.664,0.207,0.007,-0.623,0.216,0.083,-0.574,0.24,0.145,-0.517,0.291,0.221,-0.633,0.168,0.462,-0.516,0.323,0.301]},{"yaw":-0.621,"pitch":-0.024,"frame":[-0.391,0.914,0.368,-0.526,0.892,0.232,-0.609,0.849,0.056,-0.655,0.779,-0.14,-0.66,0.679,-0.327,-0.629,0.556,-0.477,-0.58,0.432,-0.609,-0.521,0.275,-0.697,-0.493,0.126,-0.722,-0.487,-0.025,-0.69,-0.486,-0.182,-0.624,-0.489,-0.349,-0.519,-0.514,-0.486,-0.368,-0.549,-0.588,-0.201,-0.571,-0.683,-0.055,-0.583,-0.751,0.065,-0.585,-0.815,0.187,-0.552,-0.871,0.304,-0.464,-0.908,0.404,-0.321,-0.925,0.471,-0.175,-0.905,0.501,-0.024,-0.864,0.492,0.124,-0.809,0.483,0.302,-0.721,0.461,0.466,-0.614,0.413,0.607,-0.461,0.359,0.694,-0.265,0.321,0.744,-0.081,0.3,0.766,0.092,0.298,0.767,0.265,0.324,0.708,0.45,0.389,0.609,0.6,0.471,0.45,0.739,0.52,0.254,0.845,0.552,0.017,0.907,0.544,-0.191,0.925,0.48,0.143,0.351,0.591,0.107,0.33,0.596,0.071,0.316,0.597,0.025,0.307,0.591,-0.036,0.306,0.573,-0.089,0.316,0.539,-0.138,0.328,0.501,-0.174,0.334,0.472,-0.191,0.34,0.459,0.115,0.372,0.6,0.086,0.391,0.604,0.043,0.41,0.601,-0.019,0.421,0.58,-0.074,0.416,0.548,-0.129,0.393,0.511,-0.173,0.359,0.481,-0.694,0.355,-0.061,-0.687,0.336,-0.027,-0.674,0.324,0.004,-0.652,0.316,0.047,-0.614,0.311,0.093,-0.568,0.318,0.131,-0.532,0.331,0.153,-0.51,0.34,0.158,-0.499,0.347,0.168,-0.693,0.368,-0.023,-0.685,0.383,0.01,-0.666,0.398,0.047,-0.627,0.405,0.095,-0.578,0.399,0.133,-0.536,0.384,0.152,-0.512,0.364,0.161,0.225,0.496,0.664,0.117,0.559,0.666,-0.006,0.592,0.645,-0.153,0.585,0.596,-0.325,0.53,0.521,0.302,0.524,0.635,0.175,0.606,0.655,0.027,0.655,0.645,-0.146,0.654,0.608,-0.314,0.627,0.544,-0.759,0.472,-0.08,-0.765,0.515,0.021,-0.732,0.539,0.131,-0.671,0.54,0.242,-0.563,0.507,0.353,-0.751,0.5,-0.161,-0.767,0.558,-0.034,-0.743,0.595,0.098,-0.686,0.601,0.241,-0.589,0.593,0.358,-0.224,-0.432,0.61,-0.258,-0.45,0.612,-0.311,-0.464,0.612,-0.384,-0.485,0.604,-0.463,-0.494,0.572,-0.533,-0.491,0.527,-0.577,-0.477,0.479,-0.603,-0.456,0.416,-0.614,-0.427,0.361,-0.616,-0.403,0.293,-0.611,-0.383,0.227,-0.623,-0.355,0.286,-0.628,-0.327,0.362,-0.618,-0.299,0.438,-0.593,-0.279,0.521,-0.546,-0.294,0.58,-0.479,-0.29,0.619,-0.388,-0.327,0.641,-0.318,-0.366,0.644,-0.262,-0.4,0.636,-0.247,-0.426,0.598,-0.284,-0.417,0.597,-0.336,-0.405,0.591,-0.402,-0.393,0.582,-0.469,-0.385,0.562,-0.524,-0.381,0.523,-0.553,-0.377,0.472,-0.57,-0.374,0.418,-0.581,-0.375,0.369,-0.59,-0.376,0.315,-0.6,-0.378,0.275,-0.589,-0.371,0.315,-0.583,-0.369,0.371,-0.572,-0.371,0.422,-0.555,-0.375,0.476,-0.524,-0.379,0.527,-0.468,-0.383,0.566,-0.401,-0.389,0.584,-0.336,-0.403,0.592,-0.287,-0.414,0.596,-0.453,0.409,0.456,-0.489,0.326,0.503,-0.524,0.254,0.554,-0.563,0.187,0.612,-0.605,0.116,0.668,-0.646,0.03,0.697,-0.646,-0.041,0.684,-0.619,-0.087,0.658,-0.576,-0.112,0.592,-0.538,-0.13,0.556,-0.338,-0.134,0.577,-0.61,-0.104,0.382,-0.585,-0.123,0.496,-0.466,-0.137,0.587,-0.27,-0.061,0.571,-0.616,-0.029,0.309,-0.457,0.499,0.453,-0.459,0.592,0.457,-0.503,-0.585,0.473,0.223,0.251,0.612,-0.235,-0.741,0.567,0.606,0.268,0.491,0.34,0.298,0.596,-0.144,-0.023,0.622,-0.244,0.166,0.543,-0.353,-0.053,0.666,0.106,-0.037,0.682,0.306,0.67,0.6,-0.078,0.778,0.578,0.452,0.556,0.558,-0.466,-0.059,0.681,-0.417,-0.592,0.518,-0.246,-0.289,0.643,-0.17,0.118,0.574,-0.067,0.063,0.626,0.132,0.747,0.605,-0.257,0.772,0.516,-0.3,0.215,0.535,0.422,0.131,0.614,0.223,0.145,0.654,0.099,0.126,0.651,-0.044,0.146,0.599,-0.139,0.182,0.548,-0.212,0.218,0.514,-0.424,0.309,0.528,0.38,-0.027,0.641,0.298,0.406,0.636,-0.28,0.095,0.568,-0.275,0.26,0.49,-0.393,0.027,0.669,-0.474,0.076,0.692,0.221,-0.624,0.55,0.576,-0.059,0.487,0.367,-0.527,0.534,0.544,0.425,0.515,-0.215,0.036,0.585,0.367,-0.182,0.618,-0.433,0.755,0.416,0.083,-0.713,0.546,-0.05,-0.78,0.546,-0.357,-0.856,0.535,-0.404,0.2,0.578,0.546,-0.229,0.489,-0.323,-0.576,0.576,0.192,-0.208,0.663,-0.362,0.268,0.525,-0.268,0.405,0.444,0.252,-0.403,0.602,-0.364,0.407,0.475,-0.271,-0.657,0.564,-0.37,0.086,0.603,-0.512,-0.76,0.489,-0.507,-0.667,0.479,-0.398,-0.674,0.528,-0.082,-0.544,0.605,-0.164,-0.614,0.585,-0.038,-0.122,0.662,-0.152,-0.199,0.635,0.045,-0.254,0.664,0.013,-0.615,0.589,-0.029,-0.457,0.637,0.359,-0.315,0.591,0.494,-0.387,0.501,-0.086,-0.309,0.653,-0.339,0.149,0.571,-0.509,0.008,0.717,-0.225,0.477,0.493,-0.121,0.522,0.563,0.602,0.105,0.497,0.071,0.206,0.612,-0.03,0.212,0.581,-0.117,0.233,0.537,-0.183,0.261,0.49,-0.443,0.139,0.627,-0.275,0.328,0.446,-0.599,0.179,0.549,-0.61,-0.093,0.552,-0.685,0.267,-0.098,-0.622,-0.669,0.281,-0.622,0.285,-0.49,-0.686,0.314,-0.205,-0.66,0.006,0.22,-0.681,0.03,0.657,-0.568,0.176,0.287,-0.669,-0.028,0.417,-0.724,0.01,0.02,-0.641,0.112,0.609,-0.628,-0.073,0.43,-0.711,0.623,-0.165,-0.641,0.731,0.152,-0.694,0.525,-0.31,-0.66,-0.048,0.511,-0.558,-0.569,0.431,-0.66,-0.247,0.312,-0.599,0.135,0.228,-0.661,0.087,0.153,-0.695,0.693,-0.013,-0.624,-0.493,0.3,-0.555,0.746,0.293,-0.69,0.22,-0.167,-0.721,0.395,-0.092,-0.698,0.167,-0.274,-0.707,0.171,-0.087,-0.694,0.147,0.025,-0.634,0.162,0.124,-0.579,0.195,0.191,-0.542,0.228,0.248,-0.713,0.03,-0.248,-0.588,0.11,0.318,-0.658,0.046,0.467,-0.656,0.088,0.545,-0.625,-0.506,-0.106,-0.621,0.004,-0.491,-0.609,-0.41,-0.241,-0.654,0.415,-0.421,-0.609,0.058,0.272,-0.69,-0.105,-0.233,-0.706,0.41,-0.242,-0.636,-0.206,0.372,-0.627,-0.598,0.016,-0.624,-0.672,0.129,-0.587,-0.808,0.368,-0.576,0.204,0.438,-0.606,-0.144,-0.44,-0.6,-0.536,0.362,-0.669,-0.311,0.238,-0.708,-0.138,-0.052,-0.536,0.27,0.382,-0.495,0.4,0.257,-0.668,-0.31,-0.121,-0.499,0.401,0.366,-0.605,-0.599,0.32,-0.611,0.102,0.421,-0.569,-0.645,0.412,-0.659,-0.471,0.179,-0.641,-0.085,0.267,-0.633,-0.543,0.248,-0.706,-0.077,0.148,-0.678,-0.156,0.228,-0.707,-0.191,0.083,-0.61,0.06,0.363,-0.657,-0.52,0.092,-0.637,-0.6,0.185,-0.68,-0.383,0.121,-0.666,-0.225,-0.22,-0.679,-0.391,0.02,-0.598,-0.282,-0.375,-0.69,-0.255,0.177,-0.581,0.159,0.374,-0.689,0.021,0.569,-0.546,0.461,0.235,-0.631,0.491,0.184,-0.625,0.143,-0.505,-0.662,0.219,0.033,-0.615,0.223,0.107,-0.562,0.243,0.167,-0.504,0.29,0.241,-0.612,0.148,0.482,-0.503,0.316,0.325]},{"yaw":-0.646,"pitch":-0.071,"frame":[-0.507,0.911,0.466,-0.633,0.892,0.315,-0.702,0.857,0.126,-0.726,0.8,-0.084,-0.709,0.713,-0.285,-0.663,0.604,-0.451,-0.608,0.486,-0.598,-0.538,0.337,-0.704,-0.499,0.194,-0.747,-0.481,0.047,-0.743,-0.469,-0.108,-0.703,-0.46,-0.279,-0.622,-0.469,-0.429,-0.487,-0.488,-0.544,-0.33,-0.496,-0.652,-0.19,-0.499,-0.729,-0.075,-0.497,-0.803,0.042,-0.466,-0.869,0.157,-0.383,-0.909,0.263,-0.244,-0.925,0.34,-0.102,-0.902,0.383,0.045,-0.856,0.386,0.191,-0.798,0.387,0.368,-0.701,0.371,0.531,-0.581,0.345,0.67,-0.418,0.32,0.751,-0.216,0.314,0.787,-0.028,0.322,0.798,0.148,0.347,0.779,0.32,0.397,0.696,0.501,0.484,0.573,0.645,0.583,0.387,0.772,0.646,0.168,0.865,0.678,-0.087,0.913,0.664,-0.305,0.925,0.588,0.083,0.351,0.638,0.046,0.329,0.638,0.007,0.314,0.636,-0.04,0.304,0.627,-0.1,0.301,0.606,-0.15,0.308,0.57,-0.196,0.319,0.532,-0.228,0.324,0.503,-0.243,0.329,0.49,0.054,0.371,0.647,0.024,0.391,0.651,-0.021,0.41,0.648,-0.084,0.423,0.625,-0.141,0.419,0.589,-0.192,0.393,0.548,-0.228,0.353,0.515,-0.705,0.362,-0.06,-0.698,0.344,-0.028,-0.686,0.332,0.004,-0.665,0.322,0.047,-0.63,0.316,0.094,-0.587,0.321,0.133,-0.556,0.331,0.157,-0.538,0.338,0.165,-0.53,0.342,0.176,-0.705,0.375,-0.021,-0.699,0.389,0.013,-0.683,0.404,0.051,-0.65,0.409,0.101,-0.605,0.402,0.14,-0.567,0.384,0.16,-0.545,0.36,0.17,0.168,0.488,0.742,0.048,0.54,0.747,-0.083,0.561,0.719,-0.231,0.543,0.657,-0.404,0.484,0.566,0.249,0.524,0.722,0.105,0.593,0.744,-0.053,0.628,0.727,-0.23,0.613,0.676,-0.402,0.578,0.602,-0.776,0.476,-0.069,-0.791,0.509,0.038,-0.773,0.524,0.152,-0.723,0.515,0.267,-0.627,0.473,0.379,-0.771,0.51,-0.148,-0.798,0.557,-0.013,-0.792,0.582,0.125,-0.745,0.576,0.273,-0.662,0.556,0.395,-0.235,-0.47,0.543,-0.269,-0.489,0.539,-0.32,-0.503,0.532,-0.388,-0.524,0.518,-0.461,-0.532,0.477,-0.523,-0.529,0.427,-0.559,-0.513,0.376,-0.581,-0.49,0.314,-0.592,-0.459,0.261,-0.595,-0.434,0.195,-0.593,-0.413,0.132,-0.608,-0.391,0.196,-0.618,-0.367,0.276,-0.611,-0.345,0.354,-0.591,-0.331,0.443,-0.552,-0.346,0.502,-0.489,-0.342,0.547,-0.396,-0.375,0.572,-0.325,-0.41,0.578,-0.269,-0.441,0.571,-0.258,-0.463,0.53,-0.296,-0.454,0.527,-0.345,-0.444,0.517,-0.408,-0.433,0.503,-0.471,-0.425,0.478,-0.524,-0.422,0.434,-0.547,-0.417,0.381,-0.561,-0.413,0.327,-0.567,-0.411,0.278,-0.575,-0.41,0.223,-0.583,-0.41,0.182,-0.574,-0.408,0.224,-0.568,-0.41,0.28,-0.56,-0.414,0.331,-0.547,-0.419,0.386,-0.523,-0.425,0.44,-0.469,-0.428,0.483,-0.404,-0.432,0.507,-0.342,-0.443,0.519,-0.294,-0.453,0.526,-0.523,0.381,0.48,-0.556,0.288,0.515,-0.591,0.203,0.557,-0.626,0.126,0.604,-0.666,0.042,0.65,-0.699,-0.055,0.667,-0.689,-0.129,0.647,-0.654,-0.168,0.617,-0.607,-0.185,0.547,-0.56,-0.194,0.505,-0.362,-0.182,0.531,-0.627,-0.155,0.333,-0.607,-0.183,0.442,-0.489,-0.196,0.537,-0.298,-0.1,0.534,-0.633,-0.067,0.269,-0.532,0.463,0.488,-0.545,0.555,0.505,-0.472,-0.612,0.37,0.183,0.251,0.647,-0.191,-0.753,0.464,0.604,0.3,0.557,0.312,0.304,0.646,-0.171,-0.055,0.596,-0.294,0.139,0.545,-0.387,-0.11,0.634,0.088,-0.053,0.677,0.236,0.679,0.707,-0.177,0.762,0.674,0.406,0.577,0.66,-0.502,-0.13,0.651,-0.396,-0.619,0.419,-0.258,-0.331,0.587,-0.216,0.094,0.57,-0.107,0.04,0.619,0.044,0.745,0.709,-0.359,0.752,0.601,-0.353,0.185,0.54,0.414,0.14,0.649,0.194,0.139,0.677,0.061,0.112,0.662,-0.092,0.129,0.606,-0.19,0.165,0.556,-0.265,0.199,0.525,-0.49,0.272,0.542,0.382,-0.023,0.656,0.257,0.406,0.703,-0.326,0.06,0.556,-0.33,0.237,0.505,-0.438,-0.031,0.647,-0.529,0.009,0.675,0.27,-0.619,0.47,0.605,-0.031,0.508,0.415,-0.513,0.472,0.521,0.453,0.597,-0.253,0.005,0.563,0.383,-0.177,0.608,-0.535,0.737,0.489,0.133,-0.712,0.458,0.005,-0.782,0.447,-0.292,-0.864,0.411,-0.464,0.154,0.578,0.588,-0.204,0.483,-0.309,-0.602,0.487,0.198,-0.217,0.639,-0.423,0.234,0.536,-0.329,0.385,0.475,0.278,-0.402,0.553,-0.431,0.379,0.503,-0.242,-0.675,0.469,-0.419,0.038,0.588,-0.45,-0.776,0.365,-0.46,-0.688,0.365,-0.363,-0.694,0.42,-0.066,-0.564,0.53,-0.141,-0.633,0.499,-0.054,-0.149,0.632,-0.165,-0.234,0.589,0.044,-0.275,0.623,0.044,-0.625,0.509,-0.019,-0.478,0.57,0.386,-0.309,0.561,0.541,-0.365,0.469,-0.091,-0.337,0.599,-0.391,0.109,0.566,-0.555,-0.069,0.692,-0.293,0.451,0.534,-0.193,0.495,0.616,0.615,0.134,0.541,0.022,0.197,0.634,-0.084,0.201,0.599,-0.172,0.222,0.553,-0.237,0.247,0.509,-0.502,0.083,0.618,-0.331,0.309,0.47,-0.655,0.119,0.54,-0.647,-0.16,0.508,-0.693,0.28,-0.106,-0.549,-0.673,0.154,-0.642,0.327,-0.498,-0.698,0.332,-0.209,-0.666,-0.016,0.184,-0.729,-0.052,0.625,-0.594,0.154,0.277,-0.691,-0.084,0.376,-0.719,0.011,-0.022,-0.694,0.04,0.588,-0.653,-0.131,0.388,-0.755,0.64,-0.134,-0.721,0.724,0.204,-0.724,0.555,-0.291,-0.693,-0.117,0.472,-0.519,-0.594,0.324,-0.65,-0.281,0.235,-0.615,0.118,0.211,-0.667,0.075,0.128,-0.759,0.698,0.028,-0.58,-0.509,0.194,-0.649,0.731,0.355,-0.694,0.237,-0.182,-0.732,0.401,-0.088,-0.698,0.194,-0.297,-0.709,0.181,-0.108,-0.698,0.148,0.004,-0.644,0.157,0.108,-0.598,0.185,0.182,-0.571,0.214,0.242,-0.705,0.055,-0.293,-0.611,0.078,0.299,-0.687,-0.012,0.436,-0.699,0.022,0.519,-0.573,-0.478,-0.227,-0.618,0.05,-0.538,-0.571,-0.372,-0.353,-0.681,0.452,-0.415,-0.626,0.031,0.245,-0.676,-0.079,-0.299,-0.725,0.43,-0.237,-0.637,-0.25,0.304,-0.561,-0.578,-0.112,-0.548,-0.661,-0.005,-0.507,-0.813,0.229,-0.623,0.161,0.433,-0.595,-0.096,-0.515,-0.555,-0.558,0.255,-0.649,-0.336,0.152,-0.692,-0.127,-0.118,-0.583,0.238,0.382,-0.542,0.384,0.272,-0.637,-0.289,-0.217,-0.56,0.376,0.383,-0.544,-0.612,0.204,-0.644,0.055,0.401,-0.511,-0.662,0.294,-0.612,-0.476,0.07,-0.649,-0.117,0.22,-0.577,-0.55,0.134,-0.7,-0.09,0.098,-0.672,-0.181,0.167,-0.689,-0.194,0.01,-0.633,0.02,0.337,-0.602,-0.512,-0.026,-0.569,-0.597,0.061,-0.645,-0.387,0.02,-0.643,-0.195,-0.306,-0.64,-0.38,-0.083,-0.574,-0.236,-0.473,-0.672,-0.27,0.099,-0.615,0.122,0.362,-0.73,-0.054,0.536,-0.592,0.443,0.253,-0.669,0.475,0.201,-0.631,0.188,-0.532,-0.67,0.222,0.023,-0.627,0.222,0.1,-0.581,0.239,0.162,-0.538,0.279,0.242,-0.658,0.094,0.468,-0.551,0.295,0.331]},{"yaw":-0.695,"pitch":-0.072,"frame":[-0.519,0.91,0.458,-0.641,0.89,0.304,-0.705,0.855,0.115,-0.725,0.8,-0.095,-0.699,0.716,-0.295,-0.639,0.61,-0.46,-0.573,0.495,-0.605,-0.5,0.348,-0.71,-0.46,0.205,-0.753,-0.444,0.057,-0.75,-0.434,-0.099,-0.711,-0.427,-0.271,-0.633,-0.44,-0.423,-0.499,-0.464,-0.541,-0.343,-0.477,-0.651,-0.203,-0.483,-0.729,-0.088,-0.484,-0.804,0.029,-0.458,-0.869,0.146,-0.385,-0.909,0.253,-0.254,-0.925,0.332,-0.118,-0.903,0.377,0.028,-0.859,0.386,0.173,-0.801,0.396,0.351,-0.705,0.396,0.519,-0.586,0.375,0.664,-0.422,0.351,0.75,-0.218,0.345,0.788,-0.026,0.352,0.798,0.154,0.376,0.778,0.329,0.423,0.69,0.51,0.506,0.563,0.653,0.601,0.371,0.778,0.66,0.148,0.868,0.687,-0.107,0.915,0.667,-0.321,0.925,0.585,0.071,0.358,0.646,0.033,0.333,0.645,-0.007,0.316,0.643,-0.054,0.304,0.632,-0.115,0.3,0.61,-0.163,0.306,0.572,-0.207,0.317,0.534,-0.238,0.322,0.505,-0.254,0.329,0.491,0.042,0.38,0.654,0.011,0.402,0.657,-0.035,0.423,0.653,-0.099,0.436,0.628,-0.157,0.431,0.591,-0.206,0.401,0.549,-0.24,0.356,0.517,-0.691,0.352,-0.084,-0.688,0.335,-0.051,-0.679,0.322,-0.02,-0.66,0.312,0.024,-0.628,0.306,0.074,-0.586,0.311,0.118,-0.556,0.323,0.144,-0.539,0.33,0.155,-0.531,0.335,0.167,-0.695,0.367,-0.045,-0.693,0.383,-0.01,-0.681,0.401,0.031,-0.65,0.408,0.084,-0.605,0.401,0.125,-0.568,0.381,0.149,-0.546,0.355,0.16,0.145,0.488,0.751,0.022,0.539,0.753,-0.11,0.557,0.722,-0.256,0.537,0.656,-0.421,0.478,0.562,0.228,0.524,0.733,0.078,0.591,0.751,-0.082,0.623,0.731,-0.257,0.605,0.675,-0.422,0.57,0.597,-0.771,0.465,-0.095,-0.792,0.498,0.015,-0.777,0.513,0.132,-0.729,0.505,0.252,-0.636,0.464,0.369,-0.764,0.501,-0.169,-0.798,0.545,-0.034,-0.796,0.571,0.107,-0.751,0.564,0.258,-0.671,0.546,0.384,-0.247,-0.473,0.538,-0.281,-0.492,0.53,-0.331,-0.508,0.52,-0.397,-0.53,0.504,-0.469,-0.54,0.462,-0.53,-0.537,0.411,-0.568,-0.521,0.359,-0.587,-0.496,0.295,-0.594,-0.463,0.242,-0.593,-0.437,0.177,-0.589,-0.418,0.114,-0.607,-0.394,0.177,-0.622,-0.37,0.255,-0.62,-0.347,0.334,-0.603,-0.332,0.423,-0.565,-0.348,0.484,-0.502,-0.343,0.53,-0.41,-0.376,0.559,-0.338,-0.41,0.567,-0.282,-0.443,0.563,-0.269,-0.466,0.522,-0.307,-0.456,0.517,-0.357,-0.446,0.506,-0.419,-0.435,0.49,-0.481,-0.428,0.463,-0.532,-0.425,0.418,-0.554,-0.421,0.364,-0.567,-0.416,0.309,-0.571,-0.414,0.26,-0.577,-0.413,0.205,-0.581,-0.414,0.164,-0.576,-0.412,0.206,-0.572,-0.415,0.263,-0.567,-0.419,0.314,-0.555,-0.425,0.37,-0.532,-0.43,0.425,-0.48,-0.433,0.469,-0.416,-0.435,0.494,-0.353,-0.446,0.508,-0.305,-0.456,0.517,-0.533,0.377,0.472,-0.566,0.284,0.505,-0.603,0.2,0.543,-0.64,0.123,0.583,-0.681,0.04,0.625,-0.716,-0.057,0.641,-0.706,-0.131,0.622,-0.67,-0.17,0.594,-0.621,-0.186,0.526,-0.572,-0.196,0.486,-0.378,-0.184,0.521,-0.632,-0.157,0.312,-0.616,-0.185,0.422,-0.504,-0.197,0.52,-0.313,-0.103,0.53,-0.637,-0.069,0.249,-0.544,0.456,0.48,-0.558,0.548,0.496,-0.476,-0.616,0.355,0.168,0.253,0.657,-0.206,-0.756,0.454,0.594,0.305,0.577,0.296,0.307,0.658,-0.188,-0.057,0.597,-0.307,0.137,0.543,-0.406,-0.112,0.623,0.069,-0.057,0.686,0.216,0.682,0.717,-0.198,0.762,0.675,0.391,0.58,0.674,-0.52,-0.13,0.635,-0.404,-0.623,0.404,-0.275,-0.333,0.579,-0.23,0.092,0.571,-0.123,0.037,0.623,0.022,0.746,0.715,-0.377,0.751,0.597,-0.366,0.183,0.536,0.399,0.14,0.665,0.174,0.138,0.687,0.04,0.109,0.669,-0.109,0.127,0.61,-0.205,0.164,0.558,-0.279,0.198,0.524,-0.502,0.269,0.534,0.365,-0.025,0.672,0.238,0.408,0.713,-0.339,0.058,0.552,-0.342,0.236,0.503,-0.456,-0.033,0.636,-0.546,0.007,0.659,0.25,-0.623,0.489,0.593,-0.032,0.532,0.397,-0.517,0.496,0.508,0.458,0.615,-0.267,0.003,0.561,0.364,-0.182,0.627,-0.548,0.735,0.481,0.113,-0.717,0.463,-0.013,-0.785,0.443,-0.303,-0.866,0.401,-0.478,0.152,0.569,0.574,-0.207,0.507,-0.322,-0.607,0.474,0.179,-0.222,0.652,-0.435,0.232,0.53,-0.341,0.383,0.473,0.258,-0.408,0.572,-0.442,0.376,0.497,-0.257,-0.679,0.457,-0.434,0.036,0.579,-0.454,-0.778,0.351,-0.464,-0.69,0.351,-0.372,-0.697,0.407,-0.085,-0.568,0.526,-0.158,-0.636,0.49,-0.073,-0.153,0.637,-0.184,-0.237,0.59,0.024,-0.279,0.632,0.024,-0.629,0.51,-0.039,-0.482,0.575,0.367,-0.314,0.581,0.525,-0.369,0.495,-0.112,-0.342,0.604,-0.406,0.107,0.56,-0.574,-0.07,0.672,-0.308,0.449,0.533,-0.213,0.494,0.616,0.604,0.136,0.564,0.005,0.196,0.64,-0.1,0.2,0.604,-0.186,0.221,0.555,-0.249,0.246,0.51,-0.517,0.081,0.607,-0.341,0.308,0.469,-0.667,0.117,0.516,-0.657,-0.162,0.486,-0.674,0.274,-0.132,-0.542,-0.675,0.138,-0.613,0.333,-0.517,-0.68,0.327,-0.233,-0.663,-0.018,0.161,-0.744,-0.054,0.598,-0.597,0.151,0.259,-0.699,-0.085,0.352,-0.703,0.011,-0.048,-0.708,0.038,0.562,-0.66,-0.132,0.366,-0.751,0.639,-0.149,-0.726,0.721,0.192,-0.711,0.556,-0.307,-0.703,-0.118,0.447,-0.522,-0.598,0.308,-0.649,-0.281,0.214,-0.616,0.116,0.19,-0.661,0.073,0.104,-0.76,0.695,0.014,-0.577,-0.512,0.176,-0.657,0.728,0.345,-0.666,0.233,-0.208,-0.723,0.392,-0.114,-0.668,0.196,-0.321,-0.686,0.177,-0.136,-0.686,0.144,-0.023,-0.64,0.153,0.085,-0.598,0.181,0.162,-0.574,0.21,0.228,-0.671,0.056,-0.317,-0.616,0.076,0.278,-0.696,-0.013,0.411,-0.71,0.02,0.493,-0.554,-0.478,-0.242,-0.581,0.057,-0.556,-0.546,-0.369,-0.368,-0.66,0.456,-0.43,-0.628,0.029,0.223,-0.644,-0.077,-0.32,-0.71,0.426,-0.258,-0.639,-0.25,0.282,-0.546,-0.58,-0.127,-0.534,-0.662,-0.02,-0.503,-0.815,0.215,-0.632,0.158,0.414,-0.559,-0.09,-0.53,-0.556,-0.561,0.237,-0.644,-0.337,0.131,-0.667,-0.127,-0.14,-0.591,0.235,0.37,-0.547,0.379,0.265,-0.616,-0.289,-0.235,-0.568,0.371,0.374,-0.541,-0.614,0.188,-0.652,0.053,0.378,-0.513,-0.665,0.279,-0.602,-0.478,0.052,-0.649,-0.118,0.199,-0.571,-0.553,0.117,-0.69,-0.091,0.074,-0.667,-0.182,0.145,-0.673,-0.195,-0.012,-0.639,0.018,0.315,-0.59,-0.514,-0.043,-0.558,-0.6,0.045,-0.633,-0.389,0.001,-0.614,-0.193,-0.325,-0.624,-0.382,-0.101,-0.542,-0.23,-0.488,-0.661,-0.271,0.078,-0.621,0.119,0.342,-0.742,-0.056,0.51,-0.596,0.435,0.244,-0.672,0.466,0.188,-0.596,0.194,-0.552,-0.661,0.217,-0.002,-0.623,0.216,0.077,-0.581,0.234,0.143,-0.542,0.274,0.232,-0.668,0.092,0.445,-0.558,0.29,0.322]},{"yaw":-0.586,"pitch":-0.074,"frame":[-0.484,0.907,0.46,-0.626,0.886,0.326,-0.706,0.849,0.15,-0.737,0.789,-0.054,-0.727,0.702,-0.252,-0.689,0.593,-0.416,-0.636,0.478,-0.564,-0.566,0.333,-0.671,-0.523,0.191,-0.714,-0.507,0.043,-0.708,-0.498,-0.112,-0.664,-0.488,-0.284,-0.579,-0.496,-0.435,-0.442,-0.512,-0.551,-0.286,-0.512,-0.658,-0.147,-0.507,-0.737,-0.034,-0.496,-0.811,0.081,-0.455,-0.876,0.191,-0.363,-0.914,0.287,-0.213,-0.925,0.353,-0.064,-0.896,0.383,0.087,-0.845,0.375,0.234,-0.781,0.368,0.41,-0.681,0.348,0.567,-0.558,0.305,0.698,-0.393,0.262,0.772,-0.191,0.244,0.802,-0.002,0.244,0.808,0.174,0.266,0.792,0.345,0.316,0.712,0.522,0.408,0.591,0.662,0.514,0.412,0.785,0.586,0.199,0.874,0.631,-0.054,0.918,0.628,-0.275,0.925,0.566,0.101,0.345,0.606,0.065,0.326,0.608,0.029,0.313,0.61,-0.015,0.303,0.604,-0.073,0.3,0.587,-0.123,0.309,0.555,-0.17,0.322,0.52,-0.203,0.328,0.492,-0.219,0.333,0.48,0.072,0.355,0.619,0.042,0.366,0.625,0,0.377,0.625,-0.056,0.384,0.607,-0.108,0.384,0.575,-0.163,0.371,0.536,-0.203,0.348,0.504,-0.717,0.339,-0.034,-0.711,0.322,-0.003,-0.7,0.31,0.027,-0.68,0.302,0.069,-0.645,0.299,0.114,-0.602,0.307,0.152,-0.572,0.321,0.174,-0.555,0.331,0.181,-0.546,0.335,0.191,-0.718,0.346,0.005,-0.712,0.355,0.039,-0.695,0.365,0.077,-0.662,0.37,0.126,-0.619,0.368,0.163,-0.581,0.361,0.179,-0.559,0.348,0.186,0.205,0.502,0.704,0.086,0.553,0.714,-0.044,0.573,0.695,-0.195,0.554,0.642,-0.372,0.491,0.563,0.286,0.541,0.68,0.144,0.609,0.707,-0.015,0.639,0.699,-0.195,0.621,0.659,-0.37,0.585,0.596,-0.789,0.467,-0.034,-0.802,0.504,0.073,-0.777,0.521,0.184,-0.72,0.514,0.292,-0.613,0.471,0.396,-0.785,0.501,-0.111,-0.808,0.55,0.023,-0.793,0.578,0.158,-0.738,0.572,0.299,-0.645,0.557,0.413,-0.214,-0.46,0.537,-0.245,-0.477,0.537,-0.289,-0.492,0.535,-0.35,-0.515,0.525,-0.419,-0.528,0.492,-0.484,-0.528,0.448,-0.523,-0.515,0.402,-0.551,-0.492,0.342,-0.566,-0.461,0.291,-0.572,-0.437,0.226,-0.575,-0.417,0.164,-0.582,-0.398,0.226,-0.584,-0.378,0.302,-0.571,-0.357,0.377,-0.547,-0.344,0.461,-0.506,-0.359,0.516,-0.444,-0.352,0.556,-0.361,-0.382,0.576,-0.297,-0.411,0.578,-0.247,-0.437,0.567,-0.236,-0.455,0.526,-0.269,-0.447,0.526,-0.314,-0.44,0.519,-0.372,-0.432,0.507,-0.432,-0.428,0.485,-0.486,-0.426,0.445,-0.51,-0.422,0.397,-0.529,-0.417,0.346,-0.54,-0.415,0.3,-0.551,-0.414,0.25,-0.564,-0.415,0.211,-0.55,-0.413,0.251,-0.539,-0.414,0.305,-0.527,-0.417,0.355,-0.51,-0.423,0.408,-0.482,-0.427,0.456,-0.43,-0.43,0.493,-0.369,-0.431,0.512,-0.312,-0.44,0.522,-0.27,-0.447,0.525,-0.501,0.377,0.489,-0.531,0.281,0.526,-0.559,0.195,0.57,-0.589,0.116,0.617,-0.622,0.032,0.664,-0.648,-0.067,0.684,-0.637,-0.138,0.662,-0.608,-0.174,0.633,-0.567,-0.189,0.558,-0.526,-0.198,0.517,-0.314,-0.183,0.537,-0.612,-0.166,0.35,-0.58,-0.191,0.458,-0.447,-0.199,0.544,-0.252,-0.1,0.539,-0.622,-0.08,0.287,-0.508,0.464,0.495,-0.519,0.556,0.51,-0.442,-0.613,0.393,0.215,0.258,0.612,-0.148,-0.749,0.468,0.632,0.321,0.49,0.344,0.318,0.601,-0.124,-0.05,0.593,-0.258,0.139,0.546,-0.336,-0.113,0.638,0.138,-0.042,0.653,0.271,0.693,0.659,-0.139,0.768,0.646,0.434,0.593,0.602,-0.451,-0.136,0.656,-0.358,-0.616,0.435,-0.211,-0.327,0.586,-0.177,0.096,0.567,-0.062,0.045,0.608,0.083,0.756,0.671,-0.329,0.753,0.586,-0.32,0.184,0.543,0.452,0.157,0.6,0.234,0.149,0.642,0.105,0.119,0.638,-0.05,0.132,0.592,-0.153,0.166,0.549,-0.231,0.199,0.523,-0.461,0.267,0.548,0.425,-0.005,0.608,0.289,0.419,0.661,-0.286,0.06,0.56,-0.298,0.235,0.505,-0.389,-0.036,0.653,-0.479,0.003,0.682,0.317,-0.601,0.45,0.638,-0.01,0.443,0.459,-0.493,0.439,0.548,0.471,0.534,-0.211,0.006,0.565,0.427,-0.159,0.565,-0.51,0.733,0.489,0.179,-0.698,0.442,0.049,-0.77,0.438,-0.257,-0.865,0.425,-0.427,0.149,0.584,0.624,-0.182,0.424,-0.269,-0.596,0.494,0.248,-0.203,0.612,-0.391,0.23,0.54,-0.302,0.385,0.471,0.327,-0.385,0.526,-0.405,0.376,0.505,-0.2,-0.67,0.475,-0.376,0.034,0.595,-0.425,-0.781,0.391,-0.432,-0.691,0.39,-0.326,-0.694,0.436,-0.02,-0.553,0.522,-0.098,-0.624,0.498,-0.002,-0.141,0.623,-0.114,-0.228,0.588,0.097,-0.263,0.609,0.093,-0.613,0.496,0.029,-0.468,0.56,0.432,-0.29,0.522,0.58,-0.343,0.419,-0.041,-0.329,0.595,-0.354,0.106,0.571,-0.501,-0.076,0.699,-0.261,0.45,0.526,-0.157,0.493,0.6,0.646,0.156,0.474,0.06,0.201,0.61,-0.048,0.203,0.583,-0.139,0.222,0.543,-0.207,0.248,0.503,-0.459,0.077,0.625,-0.304,0.31,0.468,-0.624,0.108,0.555,-0.613,-0.168,0.524,-0.709,0.263,-0.079,-0.543,-0.681,0.192,-0.665,0.316,-0.465,-0.717,0.317,-0.18,-0.67,-0.031,0.207,-0.686,-0.065,0.645,-0.591,0.143,0.29,-0.67,-0.096,0.398,-0.731,-0.007,0.012,-0.656,0.028,0.606,-0.628,-0.141,0.405,-0.768,0.63,-0.099,-0.724,0.716,0.228,-0.744,0.543,-0.255,-0.659,-0.127,0.492,-0.494,-0.597,0.351,-0.643,-0.295,0.263,-0.618,0.106,0.228,-0.675,0.061,0.151,-0.768,0.689,0.059,-0.569,-0.516,0.227,-0.639,0.724,0.369,-0.717,0.22,-0.151,-0.747,0.388,-0.058,-0.721,0.179,-0.262,-0.728,0.163,-0.077,-0.713,0.131,0.031,-0.656,0.141,0.129,-0.605,0.172,0.197,-0.574,0.203,0.256,-0.725,0.038,-0.254,-0.604,0.067,0.313,-0.663,-0.024,0.456,-0.668,0.009,0.539,-0.591,-0.489,-0.182,-0.642,0.038,-0.501,-0.595,-0.383,-0.308,-0.703,0.44,-0.38,-0.623,0.018,0.262,-0.698,-0.095,-0.259,-0.744,0.418,-0.201,-0.623,-0.262,0.328,-0.572,-0.586,-0.069,-0.553,-0.668,0.037,-0.494,-0.821,0.265,-0.604,0.15,0.446,-0.619,-0.108,-0.474,-0.538,-0.562,0.287,-0.646,-0.348,0.184,-0.708,-0.145,-0.08,-0.571,0.229,0.396,-0.545,0.378,0.285,-0.657,-0.304,-0.175,-0.547,0.369,0.396,-0.533,-0.618,0.24,-0.625,0.043,0.416,-0.492,-0.668,0.326,-0.614,-0.486,0.107,-0.646,-0.131,0.242,-0.574,-0.558,0.171,-0.709,-0.107,0.129,-0.676,-0.196,0.195,-0.701,-0.211,0.046,-0.619,0.008,0.353,-0.609,-0.522,0.015,-0.571,-0.605,0.1,-0.653,-0.401,0.059,-0.666,-0.21,-0.265,-0.655,-0.394,-0.043,-0.6,-0.247,-0.429,-0.678,-0.286,0.133,-0.602,0.11,0.375,-0.693,-0.067,0.557,-0.595,0.435,0.269,-0.676,0.464,0.224,-0.654,0.176,-0.497,-0.685,0.206,0.046,-0.641,0.207,0.119,-0.593,0.227,0.178,-0.544,0.271,0.256,-0.632,0.082,0.484,-0.547,0.287,0.344]},{"yaw":-0.515,"pitch":-0.085,"frame":[-0.431,0.911,0.517,-0.586,0.893,0.399,-0.685,0.86,0.235,-0.742,0.803,0.036,-0.746,0.718,-0.163,-0.71,0.609,-0.336,-0.652,0.492,-0.498,-0.571,0.345,-0.623,-0.518,0.2,-0.681,-0.494,0.05,-0.69,-0.482,-0.109,-0.661,-0.469,-0.283,-0.591,-0.472,-0.435,-0.465,-0.477,-0.554,-0.316,-0.466,-0.663,-0.185,-0.451,-0.742,-0.081,-0.426,-0.817,0.024,-0.373,-0.881,0.122,-0.272,-0.915,0.203,-0.124,-0.925,0.255,0.017,-0.894,0.276,0.157,-0.84,0.262,0.292,-0.773,0.248,0.449,-0.669,0.218,0.588,-0.544,0.169,0.703,-0.379,0.124,0.768,-0.179,0.111,0.794,0.007,0.119,0.799,0.181,0.151,0.788,0.351,0.213,0.724,0.525,0.323,0.621,0.663,0.447,0.46,0.784,0.536,0.258,0.873,0.602,0.009,0.916,0.631,-0.214,0.925,0.601,0.157,0.347,0.551,0.124,0.325,0.556,0.092,0.309,0.56,0.05,0.297,0.558,-0.008,0.294,0.546,-0.062,0.303,0.52,-0.111,0.317,0.488,-0.146,0.323,0.463,-0.161,0.327,0.453,0.131,0.359,0.568,0.104,0.372,0.578,0.065,0.384,0.582,0.009,0.392,0.569,-0.045,0.391,0.542,-0.102,0.373,0.506,-0.144,0.346,0.476,-0.692,0.343,0.011,-0.683,0.322,0.04,-0.669,0.308,0.069,-0.644,0.297,0.107,-0.604,0.293,0.149,-0.559,0.303,0.183,-0.527,0.317,0.201,-0.508,0.326,0.205,-0.498,0.33,0.214,-0.69,0.352,0.05,-0.682,0.363,0.084,-0.663,0.376,0.122,-0.627,0.382,0.167,-0.58,0.379,0.199,-0.538,0.366,0.211,-0.514,0.348,0.213,0.271,0.494,0.652,0.159,0.542,0.673,0.03,0.561,0.666,-0.125,0.543,0.631,-0.305,0.483,0.568,0.345,0.535,0.625,0.214,0.599,0.665,0.058,0.63,0.673,-0.122,0.614,0.654,-0.301,0.58,0.61,-0.781,0.472,0.031,-0.785,0.508,0.138,-0.751,0.524,0.243,-0.679,0.515,0.341,-0.559,0.473,0.429,-0.783,0.509,-0.038,-0.799,0.559,0.094,-0.772,0.585,0.223,-0.701,0.579,0.353,-0.594,0.561,0.456,-0.11,-0.463,0.461,-0.141,-0.481,0.466,-0.185,-0.497,0.47,-0.244,-0.522,0.465,-0.314,-0.536,0.438,-0.382,-0.537,0.404,-0.426,-0.523,0.366,-0.459,-0.499,0.316,-0.478,-0.468,0.269,-0.488,-0.443,0.208,-0.494,-0.424,0.15,-0.498,-0.405,0.213,-0.496,-0.384,0.287,-0.481,-0.364,0.358,-0.454,-0.35,0.437,-0.407,-0.367,0.485,-0.343,-0.359,0.518,-0.257,-0.386,0.525,-0.192,-0.416,0.516,-0.143,-0.441,0.498,-0.131,-0.459,0.456,-0.166,-0.452,0.46,-0.212,-0.443,0.459,-0.269,-0.436,0.454,-0.329,-0.432,0.439,-0.385,-0.431,0.409,-0.414,-0.426,0.368,-0.437,-0.421,0.323,-0.452,-0.419,0.28,-0.467,-0.42,0.232,-0.484,-0.421,0.194,-0.466,-0.418,0.232,-0.454,-0.419,0.283,-0.437,-0.421,0.328,-0.416,-0.427,0.375,-0.385,-0.432,0.418,-0.329,-0.434,0.446,-0.267,-0.436,0.458,-0.21,-0.444,0.461,-0.167,-0.451,0.459,-0.438,0.371,0.5,-0.46,0.276,0.531,-0.481,0.187,0.57,-0.505,0.105,0.613,-0.53,0.016,0.655,-0.55,-0.086,0.671,-0.538,-0.158,0.646,-0.511,-0.192,0.613,-0.473,-0.206,0.536,-0.434,-0.211,0.492,-0.228,-0.187,0.495,-0.532,-0.174,0.335,-0.494,-0.203,0.437,-0.355,-0.208,0.515,-0.175,-0.103,0.493,-0.544,-0.087,0.278,-0.445,0.457,0.515,-0.456,0.551,0.541,-0.344,-0.615,0.338,0.269,0.257,0.547,-0.061,-0.751,0.378,0.651,0.323,0.398,0.392,0.315,0.531,-0.05,-0.057,0.539,-0.189,0.135,0.514,-0.247,-0.122,0.601,0.202,-0.047,0.576,0.332,0.687,0.614,-0.068,0.762,0.648,0.481,0.59,0.543,-0.358,-0.151,0.628,-0.264,-0.618,0.372,-0.122,-0.335,0.523,-0.108,0.092,0.525,0.008,0.04,0.553,0.153,0.748,0.644,-0.261,0.749,0.612,-0.25,0.18,0.517,0.491,0.157,0.511,0.291,0.146,0.569,0.168,0.114,0.574,0.017,0.128,0.541,-0.086,0.163,0.509,-0.164,0.195,0.491,-0.389,0.262,0.544,0.467,-0.005,0.509,0.344,0.414,0.6,-0.212,0.055,0.526,-0.233,0.231,0.479,-0.302,-0.046,0.625,-0.389,-0.01,0.66,0.37,-0.594,0.332,0.656,-0.006,0.329,0.497,-0.484,0.314,0.579,0.47,0.459,-0.138,0.002,0.521,0.468,-0.157,0.458,-0.451,0.732,0.534,0.246,-0.693,0.331,0.126,-0.769,0.333,-0.163,-0.867,0.336,-0.349,0.143,0.566,0.642,-0.176,0.303,-0.178,-0.597,0.423,0.305,-0.206,0.519,-0.32,0.226,0.523,-0.242,0.38,0.456,0.378,-0.382,0.417,-0.341,0.371,0.503,-0.113,-0.672,0.395,-0.296,0.026,0.57,-0.327,-0.785,0.324,-0.335,-0.694,0.329,-0.233,-0.696,0.366,0.06,-0.555,0.435,-0.015,-0.625,0.414,0.072,-0.147,0.553,-0.034,-0.235,0.523,0.168,-0.269,0.526,0.167,-0.611,0.397,0.108,-0.472,0.471,0.472,-0.286,0.409,0.603,-0.334,0.292,0.04,-0.337,0.519,-0.278,0.1,0.544,-0.404,-0.092,0.675,-0.198,0.443,0.511,-0.09,0.487,0.577,0.663,0.158,0.369,0.122,0.197,0.555,0.016,0.199,0.537,-0.075,0.218,0.505,-0.146,0.244,0.473,-0.375,0.067,0.604,-0.244,0.305,0.448,-0.541,0.097,0.555,-0.524,-0.183,0.505,-0.681,0.265,-0.037,-0.466,-0.687,0.151,-0.658,0.325,-0.41,-0.701,0.322,-0.128,-0.601,-0.038,0.211,-0.591,-0.084,0.636,-0.525,0.14,0.298,-0.586,-0.109,0.393,-0.68,-0.01,0.034,-0.568,0.013,0.603,-0.545,-0.154,0.393,-0.772,0.638,-0.018,-0.692,0.721,0.3,-0.75,0.553,-0.178,-0.57,-0.143,0.484,-0.4,-0.599,0.304,-0.56,-0.306,0.251,-0.553,0.103,0.237,-0.616,0.057,0.166,-0.757,0.696,0.138,-0.485,-0.519,0.204,-0.591,0.727,0.429,-0.689,0.223,-0.107,-0.731,0.391,-0.004,-0.697,0.183,-0.218,-0.691,0.164,-0.04,-0.666,0.13,0.061,-0.601,0.139,0.15,-0.546,0.169,0.212,-0.513,0.2,0.268,-0.691,0.038,-0.22,-0.53,0.061,0.315,-0.579,-0.037,0.454,-0.581,-0.005,0.537,-0.552,-0.492,-0.198,-0.617,0.041,-0.472,-0.562,-0.385,-0.315,-0.704,0.45,-0.313,-0.551,0.014,0.263,-0.662,-0.097,-0.239,-0.737,0.425,-0.138,-0.537,-0.273,0.312,-0.523,-0.591,-0.097,-0.494,-0.675,-0.003,-0.407,-0.827,0.203,-0.529,0.144,0.451,-0.594,-0.107,-0.46,-0.45,-0.565,0.255,-0.566,-0.358,0.175,-0.66,-0.149,-0.067,-0.505,0.226,0.405,-0.493,0.376,0.304,-0.615,-0.306,-0.174,-0.487,0.367,0.413,-0.453,-0.622,0.203,-0.545,0.033,0.416,-0.402,-0.671,0.275,-0.545,-0.491,0.09,-0.571,-0.138,0.235,-0.499,-0.563,0.144,-0.646,-0.113,0.134,-0.602,-0.204,0.19,-0.644,-0.217,0.049,-0.541,-0.001,0.351,-0.552,-0.527,-0.004,-0.506,-0.611,0.069,-0.587,-0.408,0.05,-0.631,-0.212,-0.256,-0.603,-0.397,-0.048,-0.574,-0.247,-0.425,-0.607,-0.294,0.128,-0.528,0.104,0.378,-0.602,-0.083,0.552,-0.548,0.434,0.3,-0.637,0.467,0.267,-0.637,0.182,-0.454,-0.644,0.205,0.079,-0.592,0.205,0.145,-0.541,0.224,0.197,-0.488,0.268,0.268,-0.552,0.072,0.485,-0.485,0.284,0.355]},{"yaw":-0.457,"pitch":-0.091,"frame":[-0.402,0.911,0.519,-0.562,0.896,0.411,-0.669,0.865,0.257,-0.738,0.811,0.066,-0.754,0.729,-0.128,-0.728,0.622,-0.3,-0.673,0.507,-0.465,-0.595,0.36,-0.593,-0.544,0.214,-0.656,-0.521,0.062,-0.673,-0.507,-0.098,-0.654,-0.492,-0.273,-0.595,-0.488,-0.427,-0.477,-0.485,-0.548,-0.334,-0.464,-0.661,-0.205,-0.44,-0.744,-0.102,-0.405,-0.823,0.001,-0.343,-0.887,0.094,-0.237,-0.919,0.17,-0.089,-0.925,0.215,0.047,-0.889,0.229,0.182,-0.83,0.21,0.312,-0.758,0.19,0.462,-0.648,0.155,0.593,-0.52,0.1,0.703,-0.356,0.051,0.763,-0.156,0.036,0.785,0.028,0.045,0.787,0.201,0.079,0.775,0.368,0.144,0.714,0.539,0.262,0.618,0.674,0.396,0.465,0.791,0.5,0.271,0.876,0.58,0.032,0.917,0.618,-0.187,0.925,0.594,0.184,0.357,0.511,0.153,0.334,0.517,0.122,0.319,0.522,0.081,0.306,0.524,0.023,0.303,0.516,-0.029,0.313,0.494,-0.078,0.327,0.466,-0.112,0.333,0.442,-0.128,0.337,0.433,0.16,0.369,0.529,0.134,0.383,0.542,0.096,0.396,0.55,0.041,0.405,0.543,-0.013,0.402,0.519,-0.068,0.385,0.485,-0.11,0.356,0.456,-0.673,0.347,0.03,-0.663,0.325,0.058,-0.649,0.31,0.085,-0.622,0.3,0.122,-0.581,0.298,0.16,-0.536,0.308,0.192,-0.502,0.323,0.207,-0.483,0.332,0.21,-0.473,0.336,0.218,-0.67,0.357,0.069,-0.661,0.369,0.101,-0.64,0.383,0.138,-0.604,0.39,0.18,-0.556,0.387,0.209,-0.514,0.374,0.218,-0.488,0.354,0.219,0.297,0.5,0.614,0.192,0.547,0.646,0.068,0.565,0.647,-0.085,0.545,0.617,-0.268,0.484,0.558,0.366,0.541,0.584,0.244,0.604,0.637,0.096,0.635,0.654,-0.083,0.618,0.64,-0.263,0.581,0.6,-0.771,0.48,0.058,-0.771,0.514,0.162,-0.732,0.529,0.262,-0.654,0.518,0.352,-0.528,0.475,0.432,-0.777,0.519,-0.01,-0.787,0.568,0.12,-0.754,0.593,0.244,-0.676,0.584,0.367,-0.563,0.563,0.461,-0.069,-0.458,0.415,-0.1,-0.475,0.422,-0.143,-0.49,0.429,-0.202,-0.513,0.427,-0.274,-0.525,0.403,-0.342,-0.526,0.371,-0.391,-0.512,0.337,-0.425,-0.488,0.291,-0.446,-0.458,0.247,-0.458,-0.434,0.189,-0.466,-0.415,0.133,-0.468,-0.397,0.195,-0.463,-0.377,0.268,-0.445,-0.358,0.339,-0.415,-0.345,0.415,-0.367,-0.363,0.458,-0.3,-0.354,0.486,-0.213,-0.381,0.488,-0.149,-0.41,0.476,-0.101,-0.435,0.454,-0.091,-0.454,0.413,-0.126,-0.446,0.42,-0.169,-0.438,0.422,-0.226,-0.43,0.419,-0.288,-0.424,0.408,-0.346,-0.423,0.38,-0.378,-0.417,0.344,-0.404,-0.412,0.302,-0.422,-0.411,0.26,-0.438,-0.411,0.213,-0.455,-0.413,0.176,-0.436,-0.41,0.212,-0.422,-0.41,0.26,-0.404,-0.412,0.302,-0.379,-0.418,0.345,-0.346,-0.424,0.383,-0.289,-0.426,0.409,-0.226,-0.429,0.419,-0.169,-0.438,0.42,-0.127,-0.445,0.417,-0.403,0.369,0.495,-0.421,0.273,0.524,-0.439,0.183,0.562,-0.46,0.098,0.603,-0.481,0.006,0.643,-0.497,-0.099,0.656,-0.487,-0.171,0.629,-0.462,-0.205,0.595,-0.427,-0.216,0.516,-0.391,-0.217,0.472,-0.188,-0.185,0.464,-0.497,-0.176,0.321,-0.455,-0.208,0.418,-0.31,-0.212,0.489,-0.138,-0.1,0.461,-0.513,-0.089,0.27,-0.41,0.456,0.511,-0.421,0.549,0.538,-0.308,-0.609,0.306,0.29,0.268,0.5,-0.028,-0.743,0.334,0.651,0.338,0.335,0.408,0.326,0.48,-0.017,-0.05,0.502,-0.156,0.141,0.491,-0.203,-0.124,0.572,0.227,-0.033,0.526,0.349,0.692,0.584,-0.035,0.763,0.635,0.49,0.598,0.499,-0.311,-0.161,0.605,-0.227,-0.609,0.338,-0.082,-0.329,0.483,-0.078,0.1,0.495,0.037,0.05,0.515,0.177,0.749,0.625,-0.228,0.749,0.604,-0.216,0.183,0.497,0.503,0.172,0.452,0.314,0.161,0.518,0.195,0.128,0.529,0.046,0.139,0.505,-0.056,0.171,0.481,-0.133,0.203,0.469,-0.351,0.261,0.534,0.482,0.012,0.447,0.364,0.423,0.554,-0.178,0.058,0.5,-0.2,0.237,0.461,-0.258,-0.05,0.601,-0.342,-0.017,0.64,0.39,-0.574,0.27,0.66,0.013,0.26,0.511,-0.461,0.247,0.581,0.483,0.404,-0.105,0.007,0.49,0.485,-0.138,0.394,-0.418,0.732,0.535,0.269,-0.678,0.275,0.154,-0.758,0.282,-0.128,-0.866,0.296,-0.308,0.142,0.55,0.649,-0.154,0.232,-0.141,-0.588,0.384,0.329,-0.188,0.462,-0.284,0.227,0.509,-0.209,0.386,0.443,0.4,-0.362,0.356,-0.309,0.371,0.494,-0.08,-0.664,0.354,-0.257,0.025,0.549,-0.29,-0.785,0.29,-0.299,-0.691,0.297,-0.198,-0.69,0.329,0.091,-0.542,0.386,0.016,-0.614,0.368,0.104,-0.137,0.509,0.002,-0.227,0.482,0.199,-0.255,0.475,0.194,-0.596,0.344,0.14,-0.458,0.42,0.488,-0.265,0.344,0.611,-0.312,0.222,0.077,-0.325,0.473,-0.242,0.102,0.524,-0.354,-0.102,0.654,-0.164,0.448,0.497,-0.054,0.494,0.56,0.665,0.176,0.301,0.149,0.208,0.516,0.045,0.209,0.503,-0.046,0.228,0.478,-0.114,0.253,0.451,-0.332,0.063,0.586,-0.211,0.312,0.433,-0.497,0.091,0.548,-0.482,-0.193,0.489,-0.669,0.272,-0.018,-0.441,-0.689,0.126,-0.672,0.337,-0.38,-0.695,0.331,-0.105,-0.576,-0.036,0.211,-0.541,-0.097,0.625,-0.495,0.142,0.298,-0.548,-0.115,0.387,-0.667,-0.005,0.046,-0.52,0.004,0.595,-0.506,-0.162,0.382,-0.769,0.646,0.013,-0.671,0.724,0.318,-0.755,0.563,-0.145,-0.527,-0.155,0.475,-0.368,-0.593,0.275,-0.529,-0.305,0.236,-0.527,0.106,0.239,-0.594,0.061,0.172,-0.746,0.701,0.164,-0.456,-0.512,0.182,-0.563,0.728,0.44,-0.68,0.232,-0.086,-0.719,0.398,0.02,-0.697,0.192,-0.195,-0.678,0.172,-0.021,-0.649,0.137,0.075,-0.58,0.144,0.158,-0.522,0.174,0.216,-0.486,0.204,0.269,-0.689,0.046,-0.199,-0.498,0.06,0.312,-0.538,-0.044,0.448,-0.538,-0.013,0.531,-0.552,-0.488,-0.213,-0.631,0.051,-0.451,-0.57,-0.379,-0.322,-0.715,0.462,-0.281,-0.524,0.014,0.261,-0.663,-0.09,-0.224,-0.735,0.435,-0.109,-0.503,-0.274,0.296,-0.515,-0.59,-0.117,-0.48,-0.677,-0.026,-0.376,-0.831,0.174,-0.491,0.141,0.447,-0.607,-0.099,-0.448,-0.419,-0.559,0.229,-0.538,-0.355,0.161,-0.653,-0.144,-0.058,-0.471,0.225,0.403,-0.466,0.38,0.305,-0.614,-0.301,-0.176,-0.454,0.367,0.412,-0.425,-0.62,0.177,-0.507,0.029,0.411,-0.37,-0.669,0.246,-0.523,-0.487,0.071,-0.542,-0.137,0.228,-0.475,-0.558,0.121,-0.627,-0.11,0.136,-0.575,-0.203,0.183,-0.63,-0.213,0.049,-0.506,-0.004,0.346,-0.537,-0.524,-0.023,-0.486,-0.611,0.045,-0.567,-0.403,0.037,-0.633,-0.206,-0.25,-0.593,-0.394,-0.058,-0.587,-0.24,-0.424,-0.585,-0.29,0.121,-0.493,0.103,0.375,-0.556,-0.096,0.544,-0.523,0.438,0.305,-0.614,0.472,0.278,-0.65,0.193,-0.427,-0.625,0.211,0.093,-0.571,0.21,0.154,-0.517,0.229,0.202,-0.461,0.272,0.269,-0.511,0.066,0.479,-0.454,0.286,0.353]},{"yaw":-0.379,"pitch":-0.099,"frame":[-0.352,0.912,0.526,-0.529,0.897,0.43,-0.655,0.865,0.286,-0.739,0.81,0.099,-0.764,0.727,-0.094,-0.745,0.619,-0.268,-0.699,0.504,-0.438,-0.628,0.355,-0.574,-0.581,0.207,-0.642,-0.56,0.053,-0.663,-0.546,-0.109,-0.649,-0.527,-0.286,-0.593,-0.513,-0.439,-0.479,-0.497,-0.56,-0.342,-0.46,-0.671,-0.219,-0.425,-0.753,-0.119,-0.383,-0.83,-0.019,-0.315,-0.891,0.068,-0.205,-0.921,0.134,-0.059,-0.925,0.169,0.071,-0.888,0.175,0.199,-0.828,0.146,0.321,-0.754,0.118,0.463,-0.645,0.072,0.587,-0.518,0.008,0.693,-0.353,-0.047,0.753,-0.153,-0.063,0.778,0.03,-0.054,0.781,0.203,-0.018,0.773,0.369,0.052,0.724,0.538,0.18,0.641,0.672,0.325,0.502,0.789,0.442,0.319,0.874,0.54,0.088,0.916,0.596,-0.13,0.925,0.585,0.244,0.347,0.459,0.213,0.323,0.468,0.181,0.306,0.476,0.137,0.292,0.481,0.074,0.289,0.478,0.014,0.299,0.461,-0.042,0.314,0.436,-0.08,0.32,0.416,-0.097,0.324,0.409,0.221,0.361,0.481,0.196,0.375,0.497,0.156,0.39,0.509,0.096,0.399,0.506,0.035,0.396,0.488,-0.028,0.375,0.457,-0.075,0.344,0.43,-0.67,0.335,0.051,-0.659,0.312,0.078,-0.64,0.296,0.104,-0.611,0.285,0.139,-0.562,0.284,0.175,-0.51,0.295,0.202,-0.469,0.309,0.214,-0.445,0.318,0.216,-0.434,0.322,0.222,-0.665,0.346,0.089,-0.653,0.358,0.121,-0.628,0.373,0.157,-0.585,0.381,0.197,-0.531,0.379,0.223,-0.481,0.364,0.228,-0.45,0.342,0.225,0.352,0.493,0.56,0.252,0.538,0.602,0.128,0.554,0.615,-0.026,0.534,0.597,-0.214,0.472,0.544,0.415,0.535,0.525,0.302,0.596,0.59,0.156,0.624,0.622,-0.021,0.606,0.62,-0.204,0.571,0.589,-0.771,0.468,0.087,-0.762,0.502,0.19,-0.713,0.517,0.285,-0.624,0.507,0.368,-0.484,0.465,0.438,-0.78,0.509,0.021,-0.781,0.556,0.151,-0.738,0.582,0.271,-0.647,0.574,0.386,-0.52,0.555,0.471,-0.008,-0.463,0.363,-0.039,-0.483,0.374,-0.085,-0.502,0.387,-0.148,-0.527,0.391,-0.223,-0.54,0.375,-0.296,-0.54,0.347,-0.353,-0.525,0.317,-0.397,-0.499,0.273,-0.427,-0.467,0.231,-0.448,-0.442,0.174,-0.462,-0.421,0.122,-0.456,-0.403,0.187,-0.444,-0.382,0.259,-0.417,-0.363,0.326,-0.376,-0.349,0.398,-0.319,-0.368,0.438,-0.247,-0.357,0.463,-0.155,-0.384,0.458,-0.089,-0.413,0.438,-0.04,-0.438,0.408,-0.033,-0.458,0.365,-0.071,-0.452,0.375,-0.116,-0.445,0.383,-0.176,-0.438,0.385,-0.239,-0.432,0.38,-0.3,-0.43,0.357,-0.34,-0.425,0.324,-0.375,-0.418,0.284,-0.4,-0.417,0.243,-0.422,-0.418,0.197,-0.446,-0.419,0.161,-0.421,-0.417,0.197,-0.401,-0.417,0.244,-0.376,-0.419,0.285,-0.343,-0.426,0.327,-0.301,-0.432,0.364,-0.24,-0.433,0.386,-0.175,-0.435,0.39,-0.115,-0.443,0.385,-0.072,-0.45,0.375,-0.353,0.359,0.49,-0.368,0.262,0.519,-0.382,0.17,0.557,-0.398,0.084,0.598,-0.415,-0.008,0.639,-0.427,-0.115,0.651,-0.416,-0.187,0.622,-0.396,-0.219,0.586,-0.368,-0.231,0.502,-0.339,-0.233,0.454,-0.138,-0.195,0.438,-0.459,-0.187,0.315,-0.409,-0.223,0.407,-0.257,-0.226,0.469,-0.09,-0.11,0.432,-0.476,-0.1,0.269,-0.359,0.447,0.508,-0.368,0.542,0.539,-0.268,-0.618,0.279,0.337,0.261,0.443,0.009,-0.75,0.287,0.666,0.336,0.253,0.447,0.321,0.417,0.034,-0.061,0.464,-0.107,0.129,0.465,-0.148,-0.135,0.547,0.278,-0.041,0.47,0.397,0.689,0.532,0.022,0.76,0.615,0.527,0.595,0.435,-0.251,-0.175,0.585,-0.186,-0.619,0.306,-0.03,-0.337,0.442,-0.029,0.088,0.462,0.09,0.039,0.474,0.231,0.746,0.589,-0.169,0.747,0.595,-0.166,0.171,0.478,0.535,0.17,0.378,0.36,0.154,0.459,0.246,0.12,0.478,0.097,0.128,0.464,-0.009,0.159,0.447,-0.089,0.19,0.444,-0.297,0.249,0.522,0.517,0.009,0.371,0.411,0.417,0.494,-0.128,0.046,0.474,-0.156,0.224,0.441,-0.2,-0.063,0.581,-0.278,-0.031,0.624,0.405,-0.572,0.194,0.674,0.013,0.17,0.521,-0.46,0.163,0.607,0.48,0.331,-0.056,-0.004,0.459,0.516,-0.14,0.317,-0.364,0.731,0.539,0.29,-0.677,0.206,0.179,-0.759,0.222,-0.091,-0.87,0.254,-0.253,0.129,0.534,0.658,-0.154,0.142,-0.098,-0.597,0.343,0.37,-0.193,0.397,-0.232,0.215,0.493,-0.17,0.373,0.426,0.427,-0.364,0.282,-0.26,0.359,0.481,-0.04,-0.672,0.31,-0.201,0.012,0.53,-0.251,-0.795,0.261,-0.26,-0.701,0.269,-0.155,-0.7,0.295,0.131,-0.547,0.329,0.056,-0.62,0.317,0.156,-0.146,0.462,0.052,-0.237,0.439,0.246,-0.262,0.419,0.226,-0.599,0.28,0.183,-0.462,0.36,0.513,-0.266,0.265,0.619,-0.311,0.131,0.126,-0.333,0.422,-0.188,0.089,0.504,-0.288,-0.117,0.637,-0.119,0.437,0.478,-0.001,0.485,0.536,0.679,0.175,0.213,0.199,0.198,0.469,0.094,0.197,0.463,-0.002,0.215,0.444,-0.074,0.24,0.425,-0.272,0.05,0.57,-0.173,0.298,0.415,-0.439,0.076,0.547,-0.427,-0.207,0.48,-0.675,0.259,0.003,-0.42,-0.701,0.109,-0.693,0.329,-0.354,-0.708,0.318,-0.081,-0.551,-0.051,0.217,-0.475,-0.112,0.624,-0.459,0.129,0.299,-0.504,-0.128,0.389,-0.666,-0.022,0.062,-0.457,-0.011,0.595,-0.462,-0.175,0.379,-0.771,0.642,0.046,-0.647,0.722,0.343,-0.765,0.558,-0.113,-0.473,-0.17,0.475,-0.332,-0.602,0.252,-0.505,-0.316,0.233,-0.497,0.092,0.244,-0.576,0.046,0.182,-0.738,0.697,0.195,-0.437,-0.523,0.166,-0.524,0.727,0.456,-0.694,0.218,-0.064,-0.722,0.386,0.044,-0.714,0.18,-0.173,-0.687,0.159,0,-0.648,0.123,0.091,-0.564,0.131,0.168,-0.496,0.161,0.221,-0.453,0.192,0.271,-0.706,0.031,-0.177,-0.459,0.047,0.313,-0.489,-0.058,0.45,-0.481,-0.028,0.533,-0.56,-0.503,-0.215,-0.658,0.039,-0.433,-0.59,-0.394,-0.318,-0.731,0.456,-0.252,-0.49,0.001,0.264,-0.682,-0.107,-0.207,-0.746,0.425,-0.083,-0.471,-0.285,0.291,-0.512,-0.603,-0.128,-0.467,-0.688,-0.041,-0.344,-0.839,0.152,-0.441,0.128,0.446,-0.636,-0.112,-0.434,-0.392,-0.568,0.212,-0.524,-0.365,0.16,-0.664,-0.161,-0.044,-0.425,0.213,0.402,-0.424,0.368,0.306,-0.629,-0.318,-0.167,-0.407,0.356,0.411,-0.404,-0.632,0.16,-0.46,0.015,0.411,-0.339,-0.68,0.224,-0.515,-0.499,0.061,-0.512,-0.15,0.229,-0.46,-0.571,0.106,-0.616,-0.127,0.146,-0.554,-0.218,0.186,-0.63,-0.231,0.059,-0.464,-0.017,0.346,-0.532,-0.538,-0.032,-0.474,-0.624,0.031,-0.565,-0.416,0.037,-0.654,-0.223,-0.238,-0.599,-0.409,-0.056,-0.614,-0.256,-0.415,-0.575,-0.304,0.125,-0.449,0.09,0.375,-0.497,-0.111,0.546,-0.486,0.428,0.312,-0.587,0.462,0.292,-0.675,0.184,-0.404,-0.618,0.197,0.108,-0.554,0.196,0.166,-0.491,0.216,0.209,-0.422,0.259,0.269,-0.458,0.052,0.48,-0.41,0.274,0.352]},{"yaw":-0.323,"pitch":-0.106,"frame":[-0.318,0.914,0.524,-0.503,0.901,0.439,-0.637,0.868,0.304,-0.733,0.81,0.124,-0.766,0.726,-0.066,-0.755,0.616,-0.24,-0.718,0.498,-0.413,-0.657,0.347,-0.552,-0.612,0.2,-0.624,-0.591,0.045,-0.649,-0.577,-0.118,-0.639,-0.552,-0.295,-0.589,-0.529,-0.449,-0.48,-0.502,-0.569,-0.347,-0.456,-0.68,-0.232,-0.414,-0.761,-0.135,-0.365,-0.836,-0.039,-0.291,-0.896,0.04,-0.179,-0.924,0.099,-0.036,-0.925,0.125,0.091,-0.887,0.123,0.212,-0.825,0.089,0.327,-0.751,0.055,0.462,-0.642,0.003,0.578,-0.514,-0.066,0.679,-0.349,-0.125,0.74,-0.15,-0.142,0.768,0.034,-0.132,0.775,0.205,-0.094,0.771,0.369,-0.02,0.729,0.536,0.113,0.654,0.668,0.264,0.525,0.785,0.388,0.35,0.869,0.496,0.125,0.913,0.57,-0.092,0.925,0.57,0.272,0.34,0.411,0.242,0.315,0.422,0.21,0.298,0.431,0.167,0.283,0.438,0.104,0.28,0.438,0.044,0.29,0.424,-0.011,0.304,0.403,-0.048,0.309,0.384,-0.065,0.313,0.379,0.25,0.353,0.435,0.225,0.367,0.452,0.186,0.381,0.467,0.128,0.391,0.468,0.067,0.388,0.453,0.003,0.366,0.425,-0.043,0.333,0.399,-0.657,0.324,0.066,-0.643,0.301,0.092,-0.624,0.285,0.117,-0.592,0.275,0.149,-0.542,0.273,0.182,-0.487,0.284,0.206,-0.445,0.298,0.216,-0.42,0.306,0.215,-0.409,0.309,0.221,-0.65,0.335,0.104,-0.637,0.348,0.135,-0.611,0.362,0.17,-0.567,0.371,0.206,-0.511,0.369,0.229,-0.459,0.353,0.231,-0.426,0.329,0.226,0.387,0.485,0.51,0.291,0.529,0.557,0.171,0.544,0.577,0.018,0.524,0.571,-0.172,0.462,0.526,0.448,0.528,0.472,0.341,0.587,0.544,0.198,0.615,0.584,0.023,0.597,0.597,-0.16,0.562,0.571,-0.762,0.456,0.11,-0.746,0.489,0.21,-0.691,0.503,0.3,-0.597,0.493,0.377,-0.451,0.452,0.437,-0.775,0.498,0.045,-0.769,0.544,0.173,-0.717,0.568,0.288,-0.619,0.561,0.396,-0.486,0.543,0.473,0.026,-0.466,0.316,-0.006,-0.487,0.33,-0.052,-0.506,0.347,-0.115,-0.532,0.355,-0.188,-0.545,0.345,-0.26,-0.545,0.322,-0.319,-0.532,0.296,-0.366,-0.506,0.254,-0.398,-0.475,0.213,-0.422,-0.451,0.16,-0.439,-0.43,0.112,-0.43,-0.413,0.178,-0.415,-0.394,0.248,-0.386,-0.375,0.313,-0.343,-0.361,0.38,-0.282,-0.379,0.417,-0.21,-0.368,0.437,-0.12,-0.393,0.426,-0.055,-0.42,0.4,-0.007,-0.444,0.364,0.003,-0.462,0.32,-0.037,-0.458,0.333,-0.082,-0.452,0.345,-0.141,-0.446,0.352,-0.204,-0.441,0.35,-0.265,-0.439,0.332,-0.309,-0.434,0.303,-0.346,-0.427,0.264,-0.373,-0.426,0.225,-0.396,-0.428,0.181,-0.422,-0.428,0.147,-0.396,-0.426,0.182,-0.376,-0.426,0.227,-0.348,-0.429,0.266,-0.313,-0.436,0.308,-0.267,-0.441,0.34,-0.205,-0.443,0.357,-0.141,-0.443,0.357,-0.081,-0.45,0.348,-0.037,-0.455,0.334,-0.315,0.35,0.48,-0.328,0.251,0.508,-0.34,0.158,0.546,-0.353,0.073,0.587,-0.367,-0.02,0.629,-0.376,-0.127,0.64,-0.366,-0.199,0.609,-0.349,-0.232,0.573,-0.326,-0.243,0.485,-0.302,-0.244,0.435,-0.098,-0.206,0.41,-0.429,-0.199,0.306,-0.373,-0.235,0.393,-0.217,-0.237,0.446,-0.052,-0.12,0.401,-0.45,-0.113,0.263,-0.321,0.437,0.499,-0.328,0.534,0.532,-0.236,-0.626,0.252,0.362,0.254,0.392,0.037,-0.754,0.241,0.677,0.332,0.185,0.47,0.315,0.361,0.07,-0.07,0.426,-0.072,0.119,0.437,-0.104,-0.147,0.519,0.309,-0.047,0.418,0.428,0.682,0.482,0.062,0.752,0.591,0.55,0.588,0.379,-0.205,-0.186,0.562,-0.153,-0.627,0.274,0.007,-0.345,0.403,0.005,0.079,0.428,0.124,0.031,0.433,0.268,0.739,0.549,-0.13,0.74,0.579,-0.13,0.16,0.454,0.555,0.166,0.315,0.386,0.148,0.405,0.275,0.112,0.43,0.127,0.119,0.423,0.022,0.149,0.412,-0.055,0.179,0.414,-0.258,0.238,0.506,0.536,0.005,0.306,0.439,0.41,0.441,-0.091,0.035,0.445,-0.121,0.213,0.417,-0.155,-0.074,0.558,-0.23,-0.043,0.604,0.414,-0.571,0.128,0.678,0.01,0.097,0.524,-0.459,0.093,0.623,0.474,0.268,-0.019,-0.014,0.426,0.53,-0.143,0.25,-0.326,0.723,0.535,0.304,-0.676,0.145,0.197,-0.759,0.166,-0.062,-0.874,0.212,-0.211,0.118,0.514,0.658,-0.155,0.068,-0.066,-0.604,0.305,0.394,-0.198,0.339,-0.195,0.204,0.473,-0.135,0.362,0.405,0.442,-0.366,0.217,-0.221,0.349,0.464,-0.01,-0.678,0.268,-0.159,0,0.508,-0.219,-0.803,0.23,-0.228,-0.71,0.24,-0.124,-0.708,0.259,0.158,-0.55,0.278,0.083,-0.624,0.27,0.191,-0.154,0.416,0.088,-0.245,0.398,0.276,-0.268,0.366,0.247,-0.601,0.224,0.211,-0.465,0.306,0.524,-0.268,0.197,0.618,-0.311,0.057,0.16,-0.338,0.374,-0.149,0.078,0.48,-0.237,-0.128,0.617,-0.083,0.428,0.456,0.037,0.476,0.505,0.688,0.171,0.142,0.227,0.19,0.424,0.123,0.188,0.423,0.028,0.205,0.409,-0.043,0.23,0.395,-0.227,0.038,0.55,-0.139,0.287,0.394,-0.397,0.064,0.54,-0.386,-0.22,0.468,-0.67,0.248,0.019,-0.399,-0.711,0.091,-0.713,0.321,-0.331,-0.711,0.308,-0.062,-0.531,-0.063,0.218,-0.427,-0.125,0.616,-0.432,0.117,0.296,-0.471,-0.141,0.386,-0.661,-0.034,0.074,-0.412,-0.024,0.588,-0.428,-0.187,0.372,-0.765,0.634,0.071,-0.623,0.714,0.358,-0.767,0.55,-0.086,-0.434,-0.182,0.469,-0.303,-0.612,0.229,-0.482,-0.329,0.226,-0.475,0.08,0.244,-0.56,0.034,0.187,-0.724,0.689,0.216,-0.415,-0.533,0.15,-0.493,0.719,0.462,-0.698,0.207,-0.047,-0.715,0.375,0.063,-0.725,0.17,-0.153,-0.685,0.148,0.016,-0.637,0.112,0.103,-0.546,0.12,0.173,-0.473,0.149,0.221,-0.427,0.18,0.268,-0.716,0.02,-0.158,-0.43,0.035,0.309,-0.453,-0.071,0.446,-0.441,-0.041,0.528,-0.561,-0.514,-0.217,-0.681,0.029,-0.415,-0.598,-0.406,-0.314,-0.742,0.448,-0.227,-0.466,-0.011,0.261,-0.691,-0.118,-0.193,-0.75,0.415,-0.059,-0.443,-0.298,0.282,-0.506,-0.614,-0.136,-0.454,-0.698,-0.056,-0.318,-0.847,0.128,-0.406,0.116,0.441,-0.656,-0.122,-0.421,-0.366,-0.579,0.193,-0.504,-0.377,0.155,-0.664,-0.174,-0.033,-0.391,0.202,0.396,-0.396,0.356,0.302,-0.632,-0.33,-0.161,-0.374,0.345,0.405,-0.382,-0.643,0.141,-0.427,0.003,0.406,-0.311,-0.691,0.201,-0.501,-0.511,0.052,-0.49,-0.163,0.225,-0.443,-0.583,0.091,-0.603,-0.14,0.151,-0.535,-0.23,0.185,-0.622,-0.244,0.064,-0.433,-0.03,0.341,-0.523,-0.55,-0.038,-0.459,-0.635,0.016,-0.553,-0.428,0.035,-0.662,-0.234,-0.228,-0.594,-0.422,-0.055,-0.63,-0.266,-0.406,-0.56,-0.316,0.125,-0.416,0.078,0.37,-0.454,-0.124,0.541,-0.458,0.416,0.312,-0.564,0.45,0.299,-0.698,0.175,-0.382,-0.605,0.187,0.119,-0.536,0.185,0.172,-0.469,0.204,0.21,-0.395,0.247,0.265,-0.419,0.04,0.474,-0.378,0.262,0.345]},{"yaw":-0.242,"pitch":-0.114,"frame":[-0.261,0.913,0.526,-0.46,0.898,0.455,-0.608,0.863,0.333,-0.718,0.805,0.16,-0.762,0.721,-0.024,-0.76,0.614,-0.196,-0.732,0.496,-0.371,-0.678,0.344,-0.514,-0.636,0.195,-0.592,-0.614,0.038,-0.624,-0.592,-0.126,-0.622,-0.554,-0.296,-0.582,-0.52,-0.448,-0.482,-0.483,-0.569,-0.358,-0.427,-0.682,-0.25,-0.377,-0.765,-0.164,-0.32,-0.842,-0.077,-0.241,-0.9,-0.007,-0.123,-0.925,0.043,0.02,-0.922,0.06,0.141,-0.882,0.05,0.253,-0.817,0.011,0.359,-0.738,-0.03,0.481,-0.62,-0.088,0.584,-0.486,-0.163,0.671,-0.32,-0.226,0.726,-0.123,-0.242,0.754,0.057,-0.23,0.762,0.225,-0.187,0.761,0.385,-0.109,0.73,0.546,0.031,0.669,0.675,0.191,0.559,0.788,0.327,0.4,0.871,0.451,0.185,0.914,0.539,-0.029,0.925,0.559,0.34,0.327,0.354,0.311,0.301,0.366,0.28,0.284,0.378,0.237,0.27,0.388,0.173,0.266,0.392,0.112,0.275,0.383,0.057,0.289,0.365,0.019,0.293,0.349,0.004,0.297,0.344,0.321,0.341,0.38,0.297,0.356,0.4,0.259,0.372,0.418,0.199,0.382,0.423,0.137,0.376,0.413,0.074,0.349,0.388,0.026,0.318,0.364,-0.621,0.303,0.088,-0.604,0.281,0.112,-0.583,0.266,0.135,-0.547,0.256,0.164,-0.496,0.256,0.194,-0.44,0.267,0.213,-0.395,0.28,0.219,-0.368,0.286,0.216,-0.356,0.289,0.221,-0.614,0.315,0.124,-0.6,0.329,0.154,-0.572,0.345,0.187,-0.526,0.354,0.22,-0.469,0.352,0.238,-0.412,0.336,0.236,-0.375,0.31,0.228,0.448,0.471,0.45,0.362,0.511,0.506,0.247,0.524,0.535,0.097,0.505,0.538,-0.095,0.442,0.505,0.502,0.518,0.408,0.407,0.571,0.491,0.272,0.595,0.542,0.102,0.575,0.565,-0.082,0.541,0.553,-0.737,0.433,0.141,-0.712,0.465,0.237,-0.649,0.477,0.32,-0.545,0.467,0.388,-0.389,0.426,0.436,-0.757,0.477,0.08,-0.74,0.52,0.204,-0.677,0.543,0.312,-0.568,0.534,0.41,-0.424,0.516,0.476,0.101,-0.467,0.253,0.07,-0.488,0.271,0.026,-0.509,0.291,-0.037,-0.537,0.302,-0.111,-0.551,0.297,-0.187,-0.553,0.279,-0.252,-0.542,0.258,-0.303,-0.518,0.223,-0.342,-0.487,0.187,-0.368,-0.461,0.137,-0.388,-0.441,0.093,-0.373,-0.426,0.159,-0.353,-0.409,0.227,-0.32,-0.392,0.289,-0.274,-0.379,0.352,-0.208,-0.396,0.382,-0.132,-0.383,0.396,-0.044,-0.404,0.378,0.02,-0.426,0.347,0.067,-0.447,0.306,0.076,-0.463,0.262,0.036,-0.46,0.277,-0.007,-0.456,0.293,-0.065,-0.452,0.303,-0.128,-0.449,0.305,-0.193,-0.45,0.291,-0.241,-0.446,0.268,-0.282,-0.44,0.234,-0.312,-0.439,0.198,-0.34,-0.44,0.157,-0.369,-0.44,0.125,-0.338,-0.439,0.159,-0.315,-0.438,0.202,-0.284,-0.44,0.239,-0.244,-0.446,0.276,-0.196,-0.45,0.302,-0.13,-0.45,0.315,-0.066,-0.449,0.31,-0.008,-0.454,0.298,0.035,-0.458,0.279,-0.247,0.332,0.467,-0.255,0.233,0.494,-0.261,0.14,0.53,-0.271,0.053,0.569,-0.279,-0.04,0.609,-0.284,-0.146,0.619,-0.275,-0.216,0.585,-0.262,-0.247,0.548,-0.245,-0.259,0.457,-0.227,-0.26,0.406,-0.026,-0.216,0.37,-0.366,-0.214,0.289,-0.301,-0.251,0.369,-0.141,-0.251,0.412,0.017,-0.13,0.359,-0.39,-0.127,0.252,-0.252,0.417,0.489,-0.259,0.513,0.524,-0.169,-0.633,0.208,0.417,0.243,0.329,0.1,-0.752,0.175,0.69,0.341,0.101,0.515,0.308,0.292,0.139,-0.08,0.378,-0.005,0.106,0.402,-0.025,-0.158,0.48,0.37,-0.056,0.353,0.478,0.679,0.425,0.131,0.743,0.561,0.584,0.59,0.311,-0.12,-0.198,0.529,-0.083,-0.631,0.225,0.081,-0.351,0.35,0.071,0.067,0.386,0.19,0.02,0.383,0.33,0.733,0.505,-0.059,0.729,0.565,-0.061,0.146,0.423,0.591,0.165,0.235,0.441,0.138,0.338,0.336,0.101,0.371,0.191,0.107,0.374,0.087,0.137,0.371,0.01,0.166,0.379,-0.183,0.22,0.485,0.574,0.006,0.224,0.49,0.4,0.376,-0.02,0.022,0.409,-0.052,0.199,0.386,-0.072,-0.088,0.523,-0.144,-0.059,0.575,0.446,-0.56,0.041,0.687,0.025,0.006,0.544,-0.442,0.001,0.645,0.479,0.192,0.048,-0.025,0.385,0.564,-0.14,0.166,-0.262,0.713,0.533,0.345,-0.67,0.063,0.246,-0.754,0.09,0.002,-0.874,0.149,-0.133,0.101,0.488,0.666,-0.136,-0.026,0.005,-0.606,0.25,0.444,-0.201,0.264,-0.122,0.188,0.447,-0.065,0.345,0.379,0.48,-0.361,0.134,-0.149,0.332,0.444,0.057,-0.678,0.208,-0.081,-0.014,0.477,-0.153,-0.81,0.178,-0.161,-0.717,0.191,-0.054,-0.712,0.204,0.22,-0.55,0.209,0.147,-0.624,0.205,0.259,-0.162,0.358,0.157,-0.252,0.344,0.336,-0.273,0.299,0.299,-0.599,0.148,0.272,-0.465,0.235,0.554,-0.26,0.11,0.628,-0.29,-0.038,0.226,-0.343,0.312,-0.076,0.064,0.448,-0.148,-0.143,0.586,-0.01,0.41,0.426,0.112,0.457,0.47,0.699,0.183,0.053,0.288,0.178,0.369,0.186,0.175,0.375,0.092,0.192,0.368,0.022,0.216,0.361,-0.146,0.022,0.522,-0.07,0.271,0.365,-0.317,0.045,0.527,-0.308,-0.236,0.445,-0.644,0.23,0.041,-0.348,-0.721,0.059,-0.72,0.306,-0.293,-0.697,0.288,-0.033,-0.479,-0.079,0.216,-0.338,-0.145,0.598,-0.375,0.101,0.291,-0.404,-0.157,0.375,-0.624,-0.05,0.087,-0.329,-0.044,0.573,-0.361,-0.202,0.355,-0.748,0.62,0.108,-0.582,0.699,0.379,-0.759,0.538,-0.047,-0.358,-0.197,0.455,-0.239,-0.62,0.189,-0.421,-0.342,0.21,-0.422,0.065,0.242,-0.513,0.019,0.192,-0.696,0.675,0.246,-0.36,-0.543,0.125,-0.44,0.706,0.473,-0.68,0.19,-0.021,-0.689,0.354,0.09,-0.713,0.156,-0.124,-0.659,0.131,0.039,-0.603,0.095,0.117,-0.502,0.104,0.18,-0.423,0.133,0.222,-0.372,0.163,0.264,-0.696,0.007,-0.132,-0.37,0.019,0.302,-0.383,-0.089,0.435,-0.363,-0.06,0.516,-0.532,-0.518,-0.225,-0.681,0.021,-0.387,-0.578,-0.409,-0.313,-0.744,0.435,-0.188,-0.41,-0.026,0.256,-0.669,-0.128,-0.175,-0.74,0.396,-0.025,-0.379,-0.312,0.264,-0.471,-0.619,-0.153,-0.413,-0.705,-0.081,-0.261,-0.854,0.082,-0.336,0.097,0.43,-0.649,-0.127,-0.4,-0.307,-0.589,0.161,-0.448,-0.388,0.142,-0.631,-0.187,-0.022,-0.326,0.184,0.387,-0.339,0.336,0.298,-0.602,-0.338,-0.157,-0.311,0.325,0.398,-0.328,-0.652,0.109,-0.359,-0.014,0.395,-0.25,-0.699,0.158,-0.454,-0.519,0.034,-0.433,-0.177,0.216,-0.394,-0.591,0.067,-0.557,-0.156,0.153,-0.481,-0.243,0.178,-0.58,-0.257,0.066,-0.372,-0.045,0.332,-0.483,-0.558,-0.055,-0.415,-0.643,-0.008,-0.507,-0.437,0.025,-0.638,-0.242,-0.216,-0.556,-0.43,-0.06,-0.617,-0.269,-0.394,-0.509,-0.328,0.118,-0.352,0.061,0.362,-0.371,-0.143,0.527,-0.404,0.394,0.314,-0.515,0.428,0.309,-0.702,0.161,-0.348,-0.567,0.17,0.133,-0.492,0.169,0.18,-0.421,0.188,0.213,-0.34,0.229,0.26,-0.346,0.021,0.463,-0.318,0.243,0.337]},{"yaw":-0.154,"pitch":-0.116,"frame":[-0.194,0.912,0.495,-0.402,0.896,0.439,-0.563,0.86,0.333,-0.689,0.801,0.174,-0.747,0.717,0,-0.759,0.61,-0.166,-0.745,0.492,-0.339,-0.7,0.342,-0.482,-0.663,0.194,-0.56,-0.637,0.037,-0.594,-0.608,-0.126,-0.594,-0.562,-0.3,-0.557,-0.516,-0.453,-0.462,-0.466,-0.575,-0.346,-0.397,-0.689,-0.248,-0.336,-0.773,-0.173,-0.267,-0.848,-0.095,-0.181,-0.904,-0.031,-0.059,-0.925,0.015,0.081,-0.918,0.022,0.196,-0.874,0.002,0.299,-0.801,-0.047,0.395,-0.716,-0.095,0.506,-0.596,-0.163,0.597,-0.463,-0.246,0.676,-0.3,-0.317,0.726,-0.106,-0.339,0.751,0.073,-0.329,0.759,0.24,-0.289,0.759,0.397,-0.21,0.734,0.556,-0.069,0.684,0.682,0.095,0.591,0.792,0.237,0.449,0.873,0.37,0.246,0.915,0.475,0.037,0.925,0.522,0.397,0.331,0.281,0.369,0.304,0.295,0.339,0.285,0.308,0.297,0.27,0.322,0.234,0.265,0.33,0.173,0.274,0.326,0.118,0.286,0.311,0.081,0.29,0.297,0.067,0.293,0.294,0.379,0.346,0.308,0.356,0.361,0.33,0.319,0.378,0.35,0.26,0.386,0.36,0.199,0.378,0.354,0.136,0.348,0.333,0.089,0.314,0.312,-0.58,0.289,0.1,-0.56,0.266,0.122,-0.536,0.252,0.143,-0.498,0.243,0.17,-0.443,0.244,0.194,-0.386,0.256,0.209,-0.338,0.269,0.21,-0.31,0.275,0.205,-0.297,0.278,0.208,-0.571,0.302,0.135,-0.555,0.317,0.163,-0.526,0.336,0.193,-0.479,0.348,0.221,-0.42,0.347,0.234,-0.36,0.33,0.228,-0.318,0.301,0.218,0.498,0.477,0.368,0.42,0.514,0.429,0.312,0.523,0.468,0.169,0.501,0.485,-0.019,0.434,0.472,0.546,0.524,0.323,0.462,0.575,0.411,0.337,0.595,0.472,0.176,0.571,0.512,-0.004,0.533,0.519,-0.7,0.42,0.159,-0.667,0.453,0.249,-0.595,0.466,0.322,-0.482,0.455,0.379,-0.317,0.412,0.415,-0.728,0.466,0.101,-0.7,0.509,0.218,-0.625,0.532,0.317,-0.504,0.521,0.402,-0.351,0.502,0.457,0.16,-0.462,0.197,0.131,-0.485,0.22,0.09,-0.505,0.247,0.033,-0.532,0.263,-0.038,-0.548,0.264,-0.111,-0.552,0.249,-0.176,-0.542,0.23,-0.233,-0.52,0.201,-0.275,-0.488,0.169,-0.305,-0.462,0.125,-0.328,-0.44,0.087,-0.309,-0.426,0.15,-0.285,-0.409,0.213,-0.248,-0.392,0.27,-0.196,-0.38,0.325,-0.129,-0.396,0.35,-0.052,-0.382,0.359,0.031,-0.401,0.335,0.088,-0.423,0.298,0.13,-0.444,0.253,0.135,-0.46,0.21,0.097,-0.457,0.229,0.058,-0.452,0.249,0.007,-0.449,0.263,-0.054,-0.448,0.27,-0.117,-0.45,0.26,-0.167,-0.446,0.237,-0.212,-0.44,0.208,-0.246,-0.439,0.177,-0.275,-0.44,0.142,-0.307,-0.44,0.114,-0.274,-0.439,0.144,-0.249,-0.438,0.182,-0.214,-0.439,0.215,-0.17,-0.444,0.247,-0.118,-0.449,0.27,-0.055,-0.447,0.278,0.005,-0.446,0.269,0.058,-0.451,0.253,0.096,-0.456,0.23,-0.168,0.325,0.438,-0.17,0.225,0.465,-0.171,0.133,0.502,-0.175,0.047,0.541,-0.179,-0.045,0.583,-0.179,-0.151,0.592,-0.171,-0.22,0.558,-0.163,-0.249,0.521,-0.152,-0.259,0.429,-0.142,-0.262,0.377,0.053,-0.214,0.33,-0.29,-0.215,0.272,-0.218,-0.252,0.346,-0.054,-0.251,0.378,0.091,-0.129,0.314,-0.319,-0.131,0.238,-0.174,0.41,0.458,-0.181,0.507,0.494,-0.096,-0.631,0.18,0.464,0.25,0.251,0.163,-0.747,0.129,0.707,0.353,0.005,0.554,0.316,0.208,0.207,-0.079,0.323,0.063,0.104,0.356,0.06,-0.156,0.436,0.427,-0.048,0.28,0.524,0.685,0.341,0.2,0.745,0.503,0.615,0.598,0.221,-0.026,-0.196,0.492,-0.013,-0.628,0.194,0.153,-0.348,0.298,0.137,0.066,0.334,0.254,0.019,0.322,0.389,0.737,0.431,0.013,0.73,0.53,0.011,0.143,0.382,0.623,0.178,0.145,0.488,0.147,0.259,0.389,0.105,0.3,0.249,0.106,0.313,0.148,0.135,0.318,0.074,0.164,0.332,-0.1,0.214,0.453,0.608,0.02,0.135,0.533,0.408,0.292,0.052,0.022,0.364,0.014,0.196,0.343,0.015,-0.089,0.484,-0.049,-0.061,0.543,0.482,-0.537,-0.032,0.701,0.041,-0.091,0.571,-0.419,-0.081,0.667,0.49,0.099,0.117,-0.025,0.336,0.597,-0.123,0.079,-0.189,0.712,0.503,0.389,-0.65,-0.002,0.297,-0.74,0.034,0.068,-0.869,0.112,-0.051,0.097,0.456,0.679,-0.118,-0.119,0.072,-0.602,0.21,0.493,-0.187,0.187,-0.044,0.184,0.414,0.002,0.339,0.341,0.519,-0.342,0.055,-0.074,0.325,0.412,0.121,-0.672,0.166,0,-0.015,0.44,-0.082,-0.809,0.149,-0.089,-0.716,0.162,0.016,-0.707,0.17,0.276,-0.539,0.151,0.206,-0.617,0.156,0.325,-0.16,0.296,0.226,-0.25,0.288,0.396,-0.263,0.231,0.351,-0.584,0.085,0.329,-0.453,0.17,0.585,-0.241,0.026,0.644,-0.27,-0.128,0.291,-0.337,0.251,0.001,0.061,0.409,-0.049,-0.144,0.554,0.057,0.405,0.382,0.178,0.454,0.414,0.713,0.198,-0.044,0.342,0.18,0.3,0.244,0.174,0.314,0.153,0.19,0.314,0.085,0.213,0.312,-0.057,0.019,0.49,-0.003,0.266,0.327,-0.225,0.038,0.504,-0.216,-0.237,0.421,-0.61,0.216,0.056,-0.288,-0.726,0.043,-0.725,0.303,-0.261,-0.676,0.275,-0.011,-0.418,-0.087,0.212,-0.236,-0.15,0.576,-0.308,0.094,0.277,-0.324,-0.16,0.361,-0.581,-0.061,0.101,-0.23,-0.05,0.551,-0.278,-0.203,0.338,-0.72,0.616,0.127,-0.526,0.696,0.376,-0.744,0.534,-0.021,-0.269,-0.198,0.437,-0.168,-0.621,0.161,-0.354,-0.345,0.201,-0.361,0.057,0.234,-0.458,0.01,0.192,-0.654,0.671,0.256,-0.298,-0.545,0.112,-0.374,0.703,0.456,-0.655,0.176,0,-0.653,0.34,0.107,-0.697,0.147,-0.097,-0.624,0.118,0.057,-0.559,0.084,0.128,-0.449,0.094,0.18,-0.365,0.124,0.214,-0.308,0.155,0.251,-0.673,-0.004,-0.104,-0.299,0.013,0.288,-0.299,-0.094,0.42,-0.271,-0.067,0.497,-0.504,-0.525,-0.211,-0.68,0.015,-0.355,-0.558,-0.416,-0.291,-0.74,0.431,-0.158,-0.345,-0.033,0.246,-0.645,-0.138,-0.15,-0.723,0.386,0,-0.306,-0.314,0.25,-0.434,-0.626,-0.15,-0.366,-0.712,-0.088,-0.195,-0.858,0.056,-0.254,0.09,0.41,-0.644,-0.134,-0.371,-0.24,-0.59,0.142,-0.388,-0.392,0.138,-0.594,-0.197,-0.005,-0.25,0.176,0.365,-0.275,0.325,0.278,-0.572,-0.346,-0.139,-0.238,0.315,0.374,-0.265,-0.655,0.091,-0.28,-0.02,0.378,-0.18,-0.7,0.13,-0.401,-0.524,0.031,-0.367,-0.181,0.207,-0.336,-0.595,0.057,-0.504,-0.165,0.157,-0.421,-0.249,0.175,-0.534,-0.265,0.075,-0.297,-0.05,0.317,-0.436,-0.565,-0.053,-0.363,-0.65,-0.015,-0.457,-0.442,0.029,-0.615,-0.251,-0.193,-0.516,-0.437,-0.05,-0.607,-0.276,-0.368,-0.454,-0.334,0.119,-0.275,0.054,0.345,-0.276,-0.147,0.509,-0.342,0.382,0.299,-0.458,0.418,0.302,-0.705,0.158,-0.314,-0.522,0.158,0.14,-0.441,0.158,0.18,-0.365,0.178,0.207,-0.276,0.219,0.243,-0.258,0.014,0.444,-0.247,0.234,0.316]}]'),v6=[],li={edges:m6,neutral:_6,poses:g6,clips:v6},x6=18,M6=5,oa=parseFloat(new URLSearchParams(location.search).get("s")),S6=1.7,ti=.95,Yt=340,la=1.38,Va=`
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
`,E6=`
  ${Va}
  uniform float uSize;
  uniform float uPixelRatio;

  void main() {
    vec4 mvPosition = morphed();
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = uSize * uPixelRatio / -mvPosition.z;
  }
`,y6=`
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
`,T6=`
  ${Va}
  void main() {
    gl_Position = projectionMatrix * morphed();
  }
`,A6=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;

  void main() {
    // Lines vanish quickly while scattered — mid-flight the dots carry the
    // motion; stretched connector lines would read as a hairball.
    float f = vFade * vFade;
    gl_FragColor = vec4(uColor, 0.35 * f * f * uOpacity);
  }
`;function ca(i){return new Y0(i==="dark"?16777215:0)}const pn=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function b6(i){const e=new Float32Array(i*3),t=new Float32Array(i);for(let n=0;n<i;n++){const r=3.5+Math.random()*2.5,s=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1);e[n*3]=r*Math.sin(a)*Math.cos(s),e[n*3+1]=r*Math.sin(a)*Math.sin(s),e[n*3+2]=r*Math.cos(a),t[n]=Math.random()}return{scatter:e,rand:t}}function ji(i,e,t,n){const r=i.length/3,{scatter:s,rand:a}=b6(r),o=new ze,l=new me(i,3);o.setAttribute("position",l),o.setAttribute("aScatter",new me(s,3)),o.setAttribute("aRand",new me(a,1));const c=new Float32Array(e.length*3),h=new Float32Array(e.length*3),d=new Float32Array(e.length);for(let p=0;p<e.length;p++)c.set(i.subarray(e[p]*3,e[p]*3+3),p*3),h.set(s.subarray(e[p]*3,e[p]*3+3),p*3),d[p]=a[e[p]];const f=new ze,m=new me(c,3);f.setAttribute("position",m),f.setAttribute("aScatter",new me(h,3)),f.setAttribute("aRand",new me(d,1));const g={uniforms:t,transparent:!0,depthWrite:!1},x=new _n;return x.add(new b1(o,new Ge({...g,vertexShader:E6,fragmentShader:y6})),new T1(f,new Ge({...g,vertexShader:T6,fragmentShader:A6}))),n?{group:x,rand:a,pointPos:l,linePos:m,linePosArr:c}:{group:x,rand:a}}function w6(){const i=new Float32Array(Yt*3),e=Math.PI*(3-Math.sqrt(5));for(let r=0;r<Yt;r++){const s=1-r/(Yt-1)*2,a=Math.sqrt(1-s*s),o=e*r;i[r*3]=Math.cos(o)*a*ti,i[r*3+1]=s*ti,i[r*3+2]=Math.sin(o)*a*ti}const t=[],n=ti*4.2/Math.sqrt(Yt);for(let r=0;r<Yt;r++)for(let s=r+1;s<Yt;s++){const a=i[r*3]-i[s*3],o=i[r*3+1]-i[s*3+1],l=i[r*3+2]-i[s*3+2];a*a+o*o+l*l<n*n&&t.push(r,s)}return{positions:i,edges:t}}function R6(){const i=li.poses??[];if(!i.length)return[];const e=i.map(l=>l.yaw),t=i.map(l=>l.pitch),n=Math.min(...e),r=Math.max(...e),s=Math.min(...t),a=Math.max(...t),o=(l,c,h)=>h-c<1e-4?0:(l-c)/(h-c)*2-1;return i.map(l=>({yaw:o(l.yaw,n,r),pitch:o(l.pitch,s,a),frame:l.frame}))}function C6(i,e,t,n){let r=0;const s=i.map(a=>{const o=(a.yaw-e)**2+(a.pitch-t)**2,l=Math.exp(-o/.18);return r+=l,l});n.fill(0);for(let a=0;a<i.length;a++){const o=s[a]/r;if(o<.002)continue;const l=i[a].frame;for(let c=0;c<n.length;c++)n[c]+=l[c]*o}}function P6(i,e){const t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=new p6({canvas:i,alpha:!0,antialias:!0});n.setPixelRatio(Math.min(devicePixelRatio,2)),n.setSize(innerWidth,innerHeight);const r=new v1,s=new Le(40,innerWidth/innerHeight,.1,50);s.position.z=4.2;const a=ca(e),o={uColor:{value:a.clone()},uTime:{value:0},uEnergy:{value:0},uPixelRatio:{value:Math.min(devicePixelRatio,2)}},l={...o,uProgress:{value:t?1:0},uOpacity:{value:1},uSize:{value:16},uWobble:{value:.004}},c={...o,uProgress:{value:0},uOpacity:{value:0},uSize:{value:13},uWobble:{value:0}},h=Float32Array.from(li.neutral),d=h.length/3,f=Float32Array.from(h),m=Float32Array.from(h),g=li.edges,x=ji(f,g,l,!0);r.add(x.group);const p=[...x.group.children];let u=null;const b=w6(),T=ji(b.positions,b.edges,c,!1);r.add(T.group);const E=document.getElementById("projects"),I=[...E.querySelectorAll(".project")],R=document.createElement("nav");R.id="project-list",R.setAttribute("aria-label","Project list");const P=document.createElement("span");P.className="corner-heading",P.textContent="projects",R.append(P);for(const K of I){const f0=K.cloneNode(!0);f0.className="project-list-item",R.append(f0)}document.body.append(R);const N=document.getElementById("experience"),S=I.map((K,f0)=>{const a0=I.length===1?0:1-f0/(I.length-1)*2,V0=Math.sqrt(Math.max(0,1-a0*a0*.7)),W0=Math.PI*(3-Math.sqrt(5))*f0+.6;return new F(Math.cos(W0)*V0,a0*.72,Math.sin(W0)*V0).multiplyScalar(la)}),M={x:0,y:0};let C=!1,q=0,z=0;addEventListener("pointermove",K=>{C=!0,q=r0.getElapsedTime();const f0=K.clientX/innerWidth*2-1,a0=K.clientY/innerHeight*2-1;z=Math.min(1,z+Math.hypot(f0-M.x,a0-M.y)*2.5),M.x=f0,M.y=a0});const H={x:.15,y:0,vx:0,vy:.1,dragging:!1};addEventListener("pointerdown",K=>{c.uProgress.value<.5||K.target.closest("a, button")||(H.dragging=!0,H.vx=0,H.vy=0)}),addEventListener("pointermove",K=>{if(!H.dragging)return;const f0=K.movementX/innerWidth*Math.PI*2.6,a0=K.movementY/innerHeight*Math.PI*1.8;H.y+=f0,H.x=Math.max(-1.1,Math.min(1.1,H.x+a0)),H.vy=f0*60,H.vx=a0*60}),addEventListener("pointerup",()=>H.dragging=!1),addEventListener("pointercancel",()=>H.dragging=!1),addEventListener("resize",()=>{s.aspect=innerWidth/innerHeight,s.updateProjectionMatrix(),n.setSize(innerWidth,innerHeight),o.uPixelRatio.value=Math.min(devicePixelRatio,2)});const j=R6(),W=li.clips??[];let e0=null,V=1/0;const i0={yaw:0,pitch:0,vy:0,vp:0},J={x:0,y:0,z:0,vx:0,vy:0,vz:0},_0={s:0,v:0},C0=(K,f0,a0,V0,W0,F0)=>{const A=(a0-K)*W0-f0*F0;return[K+(f0+A*V0)*V0,f0+A*V0]},$0=new Float32Array(d);for(let K=0;K<d;K++)$0[K]=.09+.22*x.rand[K];const X=new F,r0=new L1;let S0=0,c0=t?1:0;return n.setAnimationLoop(()=>{const K=r0.getElapsedTime(),f0=Math.min(.05,K-S0||.016);if(S0=K,o.uTime.value=t?0:K,!t&&c0<1&&(c0=Math.min(1,Math.max(0,(K-.5)/2.5))),o.uColor.value.lerp(a,.08),z*=Math.exp(-f0*2.2),o.uEnergy.value=t?0:z,Number.isNaN(oa)){const G0=Math.min(1,scrollY/(innerHeight*S6));[_0.s,_0.v]=C0(_0.s,_0.v,G0,f0,70,13),_0.v=Math.max(-.55,Math.min(.55,_0.v))}else _0.s=oa;const a0=_0.s,V0=pn(0,.6,a0),W0=pn(.25,.95,a0),F0=Math.min(1,c0*2)*(1-pn(.5,.85,a0)),A=pn(.15,.5,a0);l.uProgress.value=c0*(1-.55*V0),l.uOpacity.value=F0,c.uProgress.value=W0,c.uOpacity.value=A;const he=F0>.01;if(he&&u&&([J.y,J.vy]=C0(J.y,J.vy,0,f0,60,9),[J.x,J.vx]=C0(J.x,J.vx,0,f0,60,9),[J.z,J.vz]=C0(J.z,J.vz,0,f0,50,9),x.group.rotation.set(J.x,J.y,J.z)),he&&!u){const G0=t?0:.1*Math.sin(K*.31)+.06*Math.sin(K*.73+1.7),g0=t?0:.07*Math.sin(K*.42+.6)+.05*Math.sin(K*.19+3.1);if(e0){const L=(K-e0.start)*x6,G=Math.floor(L);if(G>=e0.frames.length-1)e0=null,V=K+3+Math.random()*6;else{const $=e0.frames[G],k=e0.frames[G+1],E0=L-G;for(let s0=0;s0<m.length;s0++)m[s0]=$[s0]+(k[s0]-$[s0])*E0}}if(!e0){const L=K-q>M6;if(!t&&L&&W.length?(V===1/0&&(V=K+1+Math.random()*4),K>=V&&(e0={frames:W[Math.floor(Math.random()*W.length)].frames,start:K})):L||(V=1/0),!e0)if(j.length){const G=(C?M.x:0)+G0,$=(C?-M.y:0)+g0;[i0.yaw,i0.vy]=C0(i0.yaw,i0.vy,G,f0,90,11),[i0.pitch,i0.vp]=C0(i0.pitch,i0.vp,$,f0,90,11),C6(j,i0.yaw,i0.pitch,m)}else m.set(h)}for(let L=0;L<d;L++){const G=$0[L];f[L*3]+=(m[L*3]-f[L*3])*G,f[L*3+1]+=(m[L*3+1]-f[L*3+1])*G,f[L*3+2]+=(m[L*3+2]-f[L*3+2])*G}for(let L=0;L<g.length;L++)x.linePosArr.set(f.subarray(g[L]*3,g[L]*3+3),L*3);x.pointPos.needsUpdate=!0,x.linePos.needsUpdate=!0;const z0=j.length?.22:.6,T0=t?0:Math.sin(K*.25)*.05,P0=t?0:Math.sin(K*.17+.8)*.02,ee=(C?M.x*z0:0)+T0,y=C?M.y*z0*.55:0,_=P0+(t?0:-i0.vy*.02);[J.y,J.vy]=C0(J.y,J.vy,ee,f0,60,9),[J.x,J.vx]=C0(J.x,J.vx,y,f0,60,9),[J.z,J.vz]=C0(J.z,J.vz,_,f0,50,9),x.group.rotation.set(J.x,J.y,J.z)}H.dragging||(H.vy+=((t?0:.1)-H.vy)*f0*1.4,H.vx+=(0-H.vx)*f0*1.4,H.y+=H.vy*f0,H.x=Math.max(-1.1,Math.min(1.1,H.x+H.vx*f0))),T.group.rotation.set(H.x,H.y,0);const B0=pn(.78,1,a0);if(E.style.opacity=B0.toFixed(3),E.classList.toggle("active",B0>.6),R.style.opacity=B0.toFixed(3),R.classList.toggle("active",B0>.6),N.style.opacity=B0.toFixed(3),N.classList.toggle("active",B0>.6),B0>.01){T.group.updateMatrixWorld();for(let G0=0;G0<I.length;G0++){X.copy(S[G0]).applyMatrix4(T.group.matrixWorld);const g0=X.z/la;X.project(s);const z0=(X.x*.5+.5)*innerWidth,T0=(-X.y*.5+.5)*innerHeight,P0=(g0+1)/2,ee=I[G0];ee.style.transform=`translate(-50%, -50%) translate(${z0.toFixed(1)}px, ${T0.toFixed(1)}px) scale(${(.72+.34*P0).toFixed(3)})`,ee.style.opacity=(.25+.75*P0).toFixed(3),ee.style.zIndex=String(Math.round(P0*10))}}n.render(r,s)}),{setTheme(K){a.copy(ca(K))},enterLive(K,f0){if(u)return;const a0=new Float32Array(f0*3),V0=ji(a0,K,l,!0),W0=[...V0.group.children];for(const F0 of W0)x.group.add(F0);for(const F0 of p)F0.visible=!1;u={...V0,meshes:W0,edges:K,current:a0}},updateLive(K){if(!u)return;const f0=u.current;for(let a0=0;a0<f0.length;a0++)f0[a0]+=(K[a0]-f0[a0])*.5;for(let a0=0;a0<u.edges.length;a0++)u.linePosArr.set(f0.subarray(u.edges[a0]*3,u.edges[a0]*3+3),a0*3);u.pointPos.needsUpdate=!0,u.linePos.needsUpdate=!0},exitLive(){if(u){for(const K of u.meshes)x.group.remove(K),K.geometry.dispose();for(const K of p)K.visible=!0;u=null}}}}const nt=document.getElementById("terminal"),L6=nt.querySelector(".term-title"),yt=nt.querySelector(".term-body"),Ga=nt.querySelector(".term-close"),ka=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");function mn(i,e){const t=document.createElement("p"),n=document.createElement("span");return n.className="prompt",n.textContent=`$ ${i}`,t.append(n),e&&t.append(document.createElement("br"),e),t}function Ji(i){const e=i.textContent.trim(),{desc:t,tags:n,github:r,link:s,note:a,role:o,dates:l}=i.dataset,c=!!o;nt.classList.toggle("red",c),L6.textContent=`nika@portfolio ~ /${c?"experience":"projects"}/${ka(e)}`,yt.replaceChildren(),c&&yt.append(mn("whoami",`${o} @ ${e} (${l})`)),yt.append(mn("cat about.txt",t||e)),n&&yt.append(mn("ls stack/",n.split(",").map(m=>m.trim()).join("   ")));const h=document.createElement("div");if(h.className="term-links",r&&h.append(ua("github ↗",r)),s&&h.append(ua(`${new URL(s).hostname.replace("www.","")} ↗`,s)),h.children.length)yt.append(mn("open links/"),h);else if(!c){const m=a==="university"?"university coursework":"private project",g=document.createElement("span");g.className="term-note",g.textContent=`no public links — ${m}`,yt.append(mn("open links/",g))}const d=document.createElement("p"),f=document.createElement("span");f.className="term-cursor",d.append(Object.assign(document.createElement("span"),{className:"prompt",textContent:"$ "}),f),yt.append(d),nt.hidden=!1,Ga.focus()}function ua(i,e){const t=document.createElement("a");return t.href=e,t.target="_blank",t.rel="noopener",t.textContent=i,t}function Qi(){nt.hidden=!0}function D6(){document.addEventListener("click",e=>{const t=e.target.closest(".project, .project-list-item, .xp");t&&(e.preventDefault(),Ji(t))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!nt.hidden&&Qi(),e.key==="Enter"&&e.target.matches?.(".project:not([href]), .project-list-item:not([href]), .xp")&&Ji(e.target)}),Ga.addEventListener("click",Qi),nt.querySelector(".term-backdrop").addEventListener("click",Qi),nt.addEventListener("pointerdown",e=>e.stopPropagation());const i=new URLSearchParams(location.search).get("project");if(i){const e=[...document.querySelectorAll("#projects .project, #experience .xp")].find(t=>ka(t.textContent.trim())===i);e&&Ji(e)}}const U6="modulepreload",I6=function(i,e){return new URL(i,e).href},ha={},N6=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(t.map(h=>{if(h=I6(h,n),h in ha)return;ha[h]=!0;const d=h.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(n)for(let g=a.length-1;g>=0;g--){const x=a[g];if(x.href===h&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${f}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":U6,d||(m.as="script"),m.crossOrigin="",m.href=h,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((g,x)=>{m.addEventListener("load",g),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},F6="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";function O6(i){const e=document.getElementById("live-toggle"),t=document.getElementById("live-hint");let n=!1,r=null,s=null,a=null,o=0;const l=f=>t.textContent=f;async function c(){l("loading…"),e.disabled=!0;const f=document.createElement("video");f.playsInline=!0,f.muted=!0;try{if(r=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"}}),f.srcObject=r,await f.play(),!s){const{FaceLandmarker:x,FilesetResolver:p}=await N6(async()=>{const{FaceLandmarker:b,FilesetResolver:T}=await import("./vision_bundle-Bk4VIwNi.js");return{FaceLandmarker:b,FilesetResolver:T}},[],import.meta.url),u=await p.forVisionTasks("./mediapipe-wasm");s=await x.createFromOptions(u,{baseOptions:{modelAssetPath:F6,delegate:"GPU"},runningMode:"VIDEO",numFaces:1})}}catch(x){h(),e.disabled=!1,l(x.name==="NotAllowedError"?"camera blocked":"unavailable"),setTimeout(()=>l(""),2500);return}n=!0,a=null,e.disabled=!1,e.setAttribute("aria-pressed","true"),l("finding you…");const m=640/480,g=()=>{if(n){if(f.readyState>=2){const p=s.detectForVideo(f,performance.now())?.faceLandmarks?.[0];if(p){const u=ja(p,m);a||(a=Ja(u),i.enterLive(a.edges,a.keptIdx.length),l("")),i.updateLive(Qa(u,a.keptIdx))}}o=requestAnimationFrame(g)}};g()}function h(){r?.getTracks().forEach(f=>f.stop()),r=null}function d(){n=!1,cancelAnimationFrame(o),h(),i.exitLive(),e.setAttribute("aria-pressed","false"),l("")}e.addEventListener("click",()=>n?d():c())}const Gr=document.documentElement,B6=document.getElementById("theme-toggle"),z6=document.getElementById("scene"),Wa=P6(z6,Gr.dataset.theme);D6();O6(Wa);new URLSearchParams(location.search).get("view")==="projects"&&requestAnimationFrame(()=>scrollTo(0,document.body.scrollHeight));B6.addEventListener("click",()=>{const i=Gr.dataset.theme==="dark"?"light":"dark";Gr.dataset.theme=i,localStorage.setItem("theme",i),Wa.setTheme(i)});
