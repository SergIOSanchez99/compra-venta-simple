<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SaleController;

Route::apiResource('products', ProductController::class)
    ->only(['index', 'store']);

Route::apiResource('sales', SaleController::class)
    ->only(['index', 'store']);
