<ul>
<?php foreach (glob('*.png') as $file) : ?>
	<li>
		<?=$_SERVER["REQUEST_URI"].$file?><br/>
		<img src="<?=$file?>"/>
	</li>
<?php endforeach; ?>
</ul>