<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class House extends Model
{
       protected $table ='houses';
       protected $fillable = ['user_id', 'name', 'location','contact_phone','details', 'image1','image2','status'];
    // public function user(){
    // 	return $this->belongsTo(User::class);
    // }
}
