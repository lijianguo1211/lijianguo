<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/5/5
 * Time: 19:34
 */

namespace App\Models\DataModels;
use App\Traits\ApiHttpRequest;

/**
 * Notes:php artisan admin:make AskContentController --model=App\Models\DataModels\AskContentModel
 * User: LiYi
 * Date: 2019/5/29
 * Time: 23:24
 * Class AskContentModel
 * @package App\Models\DataModels
 */
class AskContentModel extends Model
{
    use ApiHttpRequest;

    protected $table = "ask_content";

    protected $primaryKey = 'id';

    protected $fillable = ['title','id','content','url_path','url_name'];

    public function add(array $data)
    {
        try {
            $result = $this::create($data);
        } catch(\Exception $e) {
            \Log::error('提问板块插入出错：'.$e->getMessage());
            $result = false;
        }

        return $result;
    }

    public function getFirstData():array
    {
        $result = $this->select(
            'title',
            'content',
            'url_path',
            'url_name'
        )->orderBy('created_at','desc')
            ->limit(1)
            ->get()
            ->toArray();

        return $result;
    }

    public function updateAck(string $type = 'top')
    {
        $url = config('account.juhe.toutiao_uri') . $type;
        $result = $this->getHttp('GET', $url);
        static $i = 0;
        if (empty($result)) {
            ++$i;
            if ($i > 5) {
                \Log::error('尝试超过最大次数');
                return false;
            }
            $this->updateAck();
        } else {
            $data = collect($result)->first()->toArray();
            $createData = [
                'title' => $data['title'],
                'content' => $data['title'] . '----' . $data['author_name'],
                'url_name' => $data['category'],
                'url_path' => $data['url'],
            ];

            $this->add($createData);
        }
    }
}
