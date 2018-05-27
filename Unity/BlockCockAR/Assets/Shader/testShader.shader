Shader "Custom/testShader" 
{
 Properties 
 {
  _ColorTint("Color Tint", Color) = (1, 1, 1, 1)
  _MainTex("Base (RGB)", 2D) = "white" {}
  _BumpMap("Normal Map", 2D) = "bump" {}
  _RimColor("Rim Color", Color) = (1, 1, 1, 1)
  _RimPower("Rim Power", Range(1.0, 6.0)) = 3.0
  	_OcclusionMap("Occlusion", 2D) = "white" {}
 }
 SubShader {

  Tags { "RenderType"="Opaque" }

  CGPROGRAM
  #pragma surface surf Lambert

		struct v2f {
		float3 worldPos : TEXCOORD0;
		half3 tspace0 : TEXCOORD1;
		half3 tspace1 : TEXCOORD2;
		half3 tspace2 : TEXCOORD3;
		float2 uv : TEXCOORD4;
		float4 pos : SV_POSITION;
	};


  struct Input {

   float4 color : Color;
   float2 uv_MainTex;
   float2 uv_BumpMap;
   float3 viewDir;

  };

  float4 _ColorTint;
  sampler2D _MainTex;
  sampler2D _BumpMap;
  	sampler2D _OcclusionMap;
  float4 _RimColor;
  float _RimPower;

  	v2f vert(float4 vertex : POSITION, float3 normal : NORMAL, float4 tangent : TANGENT, float2 uv : TEXCOORD0)
	{
		v2f o;
		o.pos = UnityObjectToClipPos(vertex);
		o.worldPos = mul(unity_ObjectToWorld, vertex).xyz;
		half3 wNormal = UnityObjectToWorldNormal(normal);
		half3 wTangent = UnityObjectToWorldDir(tangent.xyz);
		half tangentSign = tangent.w * unity_WorldTransformParams.w;
		half3 wBitangent = cross(wNormal, wTangent) * tangentSign;
		o.tspace0 = half3(wTangent.x, wBitangent.x, wNormal.x);
		o.tspace1 = half3(wTangent.y, wBitangent.y, wNormal.y);
		o.tspace2 = half3(wTangent.z, wBitangent.z, wNormal.z);
		o.uv = uv;
		return o;
	}
fixed4 frag(v2f i) : SV_Target
	{
	
		half3 tnormal = UnpackNormal(tex2D(_BumpMap, i.uv));
		half3 worldNormal;
		worldNormal.x = dot(i.tspace0, tnormal);
		worldNormal.y = dot(i.tspace1, tnormal);
		worldNormal.z = dot(i.tspace2, tnormal);
		half3 worldViewDir = normalize(UnityWorldSpaceViewDir(i.worldPos));
		half3 worldRefl = reflect(-worldViewDir, worldNormal);
		half4 skyData = UNITY_SAMPLE_TEXCUBE(unity_SpecCube0, worldRefl);
		half3 skyColor = DecodeHDR(skyData, unity_SpecCube0_HDR);
		fixed4 c = 0;
		c.rgb = skyColor;

		// modulate sky color with the base texture, and the occlusion map
		fixed3 baseColor = tex2D(_MainTex, i.uv).rgb;
		fixed occlusion = tex2D(_OcclusionMap, i.uv).r;
		c.rgb *= baseColor;
		c.rgb *= occlusion;

		return c;
	}

  void surf (Input IN, inout SurfaceOutput o) 
  {


   IN.color = _ColorTint;
   o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb * IN.color;
   o.Normal = UnpackNormal(tex2D(_BumpMap,IN.uv_BumpMap));

   half rim = 1.0 - saturate(dot(normalize(IN.viewDir), o.Normal));
   o.Emission = _RimColor.rgb * pow(rim, _RimPower);


  }
  ENDCG
 } 
 FallBack "Diffuse"
}﻿