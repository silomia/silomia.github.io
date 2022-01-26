<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
	xmlns:html="http://www.w3.org/TR/REC-html40"
	xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Plan du site web</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<style type="text/css">body{font-family:Ubuntu,Roboto,'Segoe UI',Oxygen-Sans,Oxygen,'Fira Sans','SF Pro Display',BlinkMacSystemFont,-apple-system,system-ui,sans-serif;font-size:12pt}#header,#footer{padding:2px;margin:10px;font-size:.8em;color:gray}a{color:black}td{font-size:1em}th{text-align:left;padding-right:30px;font-size:1em}tr.high{background-color:whitesmoke}#footer img{vertical-align:bottom}</style>
</head>
<body>
	<h1>Plan du site web</h1>
	<div id="header">
		<p>Vous trouverez des information sur les XML sitemaps a <a href="http://sitemaps.org">sitemaps.org</a>.</p>
		<p>Ce plan du site contient <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.</p>
	</div>
	<div id="content">
		<table cellpadding="5">
			<tr class="high">
				<th>N°</th>
				<th>URL</th>
				<th>Modifié le</th>
			</tr>
<xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
<xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
<xsl:for-each select="sitemap:urlset/sitemap:url">
			<tr><xsl:if test="position() mod 2 != 1"><xsl:attribute  name="class">high</xsl:attribute></xsl:if>
				<td><xsl:value-of select="position()"/></td>
				<td><xsl:variable name="itemURL"><xsl:value-of select="sitemap:loc"/></xsl:variable>
					<a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a>
				</td>
				<td><xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/></td>
			</tr>
</xsl:for-each>
		</table>
	</div>
	<div id="footer">
		<p></p>
	</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
