<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'training_top' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'lc$4a!kY)n:hCq:J:[{{X-u`AZ:YGt6 UQeWen@%Q`;!detD!]E){5Tn5RDG/ZvS' );
define( 'SECURE_AUTH_KEY',  'y`nSMYXtW$OV1OR]T0+a%aA+,TFgwTl!H*6v[I@}P=yCht:nOH~&uyx.G`Dj`%:x' );
define( 'LOGGED_IN_KEY',    'cLwxJo#|==uf)5Qg_K#,mEW(MXr&GUIu6z%BhzfdFs0nyFMJ%6Xo[dOxpX=*^V t' );
define( 'NONCE_KEY',        's,qd/Pb Ir9noW+r>W5 O/RGyD#Fpe49@P:Z6:F|g1d*3l HJD_[h(^(]JE;>::5' );
define( 'AUTH_SALT',        'f9E8$GapKKn$3|k)@/$<OG@qDv8_m<q5(.~0/]W>MI%G]bLiI%<wOk$pnQE[y 9g' );
define( 'SECURE_AUTH_SALT', 'op$pW$LRw;2^[!@#9Y)]I,m)qYTj2>pM_RV7v*-|9/z^/*+zCboc%{%Y%mf:O[Iv' );
define( 'LOGGED_IN_SALT',   'y69<u<2I4V8M+TD&WmLFQh3Bv$_j3)pgqYhJZHzjM0dxNLHS 8w`gFG;aM1u67aj' );
define( 'NONCE_SALT',       'S(^d.~BE@sm$2L,p>:g}rr^5;7cPNg[%Gt h4?mC&T~2$fIqlW&){yb{%ODmE^9B' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
// define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */


define('WP_DEBUG', true);
define('WP_DEBUG_DISPLAY', true);
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
